import React, { useEffect, useState } from 'react'
import {
  FpsHtml, FpsCards, FpsForm, MainMenu, FpsTable, Button, SomethingWentWrong, Input, FpsTheme,
  ComponentDetails, FpsWrapper, ContentWrapper, ActionPanel, Radio, SignIn, SignUp, Media, CodeSnippet,
  Dnd, Profile, TabsPane, Loader, optionsHandler, Fps400, ImageButtons
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
import { reduceHooks } from 'react-table'


function MainMenuWrapper(props) {
  let location = useLocation()

  const [logoUrl, setlogoUrl] = useState('https://api.alfa.directual.com/fileUploaded/directual-site/31f7185d-f0cc-4063-bc59-1ca46d9f8b7c.svg')

  useEffect(() => {

    if (props.themeName.colorScheme == 'darkMint' || props.themeName.colorScheme == 'warmNight' || props.themeName.colorScheme == 'hacker') {
      setlogoUrl('https://api.alfa.directual.com/fileUploaded/directual-site/b652c768-32eb-4309-bc7f-974863107528.svg')
    }
    if (props.themeName.colorScheme == 'classic' || props.themeName.colorScheme == 'tiffany' || props.themeName.colorScheme == 'white') {
      setlogoUrl('https://api.alfa.directual.com/fileUploaded/directual-site/31f7185d-f0cc-4063-bc59-1ca46d9f8b7c.svg')
    }
  }, [props.themeName])


  return (
    <MainMenu
      title='directual-design'
      showUserButtons={true}
      //loggedIn={true}
      loggedIn={false}
      logInButton={{ name: "Sign in", route: "/profile", icon: "logoutAlt", link: <Link to="/profile">Sign in</Link> }}
      profileButton={{ name: "Profile", route: "/profile", icon: "user", link: <Link to="/profile">Profile</Link> }}
      logoUrl={logoUrl}
      currentRoute={location.pathname || '/'}
      menu={[
        { name: "What?", route: "/", icon: "info", link: <Link to="/">What is it?</Link> },
        { name: "Components", subheader: true },
        { name: "Sign In / Sign Up / Profile", route: "/profile", icon: "user", link: <Link to="/profile">Sign in, Sign up, Profile</Link> },
        { name: "Form", route: "/form", icon: "edit", link: <Link to="/form">Form</Link> },
        { name: "Theme management", route: "/theme", icon: "styles", link: <Link to="/theme">Theme management</Link> },
        { name: "Cards", route: "/cards", icon: "cards", link: <Link to="/cards">Cards view</Link> },
        { name: "Table (soon)", route: "/table", icon: "database" ,disabled: true },
        { name: "Chat (soon)", route: "/chat", icon: "bubble", disabled: true },
        { name: "Comments (soon)", route: "/comments", icon: "version", disabled: true },
        { name: "Design system", subheader: true },
        { name: "Typography", route: "/system-typography", icon: "paragraph", link: <Link to="/system-typography">Typography</Link> },
        { name: "Directual Icons", route: "/system-icons", icon: "babai", link: <Link to="/system-icons">Directual icons</Link> },
        { name: "Buttons", route: "/system-button", icon: "done", link: <Link to="/system-button">Action panel, Buttons</Link> },
        { name: "Data entry", route: "/system-data-entry", icon: "import", link: <Link to="/system-data-entry">Data entry</Link> },
        { name: "Media", route: "/system-media", icon: "play", link: <Link to="/system-media">Media</Link> },
        { name: "Layout", route: "/system-layout", icon: "dashboard", link: <Link to="/system-layout">Layout</Link> },
      ]}

    />)
}

const App = (props) => {
  let exampleDataHtml = {
    html: '<b>test</b>'
  }

  let Huyak ={
    "sl": "ManageQuestions",
    "pageSize": "10",
    "headerField": null,
    "params": {
      "cardListLayout": "grid",
      "cardHeaderComment": "",
      "deleteField": "is_deleted",
      "cardBodyText": "",
      "cardImage": false,
      "cardImageField": "",
      "cardImageType": "none",
      "cardImageSize": 100,
      "objectView": {},
      "data": {
        "readFields": [
          {
            "fieldSysName": "answer",
            "sysName": "answer",
            "name": "Ответ",
            "dataType": "string",
            "link": ""
          },
          {
            "fieldSysName": "date",
            "sysName": "date",
            "name": "Дата вопроса",
            "dataType": "date",
            "link": ""
          },
          {
            "fieldSysName": "id",
            "sysName": "id",
            "name": "id",
            "dataType": "id",
            "link": ""
          },
          {
            "fieldSysName": "question",
            "sysName": "question",
            "name": "Вопрос",
            "dataType": "string",
            "link": ""
          },
          {
            "fieldSysName": "user_id",
            "sysName": "user_id",
            "name": "Кто спросил",
            "dataType": "link",
            "link": "WebUser"
          }
        ],
        "writeFields": [
          {
            "fieldSysName": "answer",
            "sysName": "answer",
            "name": "Ответ",
            "dataType": "string",
            "link": ""
          },
          {
            "fieldSysName": "id",
            "sysName": "id",
            "name": "id",
            "dataType": "id",
            "link": ""
          },
          {
            "fieldSysName": "is_deleted",
            "sysName": "is_deleted",
            "name": "",
            "dataType": "boolean",
            "link": ""
          }
        ],
        "fields": {
          "answer": {
            "id": "answer",
            "content": "Ответ",
            "type": "field",
            "dataType": "string",
            "write": true,
            "read": true,
            "link": ""
          },
          "date": {
            "id": "date",
            "content": "Дата вопроса",
            "type": "field",
            "dataType": "date",
            "read": true,
            "link": ""
          },
          "id": {
            "id": "id",
            "content": "id",
            "type": "field",
            "dataType": "id",
            "write": true,
            "read": true,
            "link": ""
          },
          "question": {
            "id": "question",
            "content": "Вопрос",
            "type": "field",
            "dataType": "string",
            "read": true,
            "link": ""
          },
          "user_id": {
            "id": "user_id",
            "content": "Кто спросил",
            "type": "field",
            "dataType": "link",
            "read": true,
            "link": "WebUser"
          },
          "is_deleted": {
            "id": "is_deleted",
            "content": "",
            "type": "field",
            "dataType": "boolean",
            "write": true,
            "link": ""
          },
          "action__delete": {
            "id": "action__delete",
            "content": "Delete button",
            "type": "action"
          }
        },
        "fieldParams": {
          "answer": {
            "include": true
          },
          "date": {
            "include": true
          },
          "id": {
            "include": false
          },
          "question": {
            "include": true
          },
          "user_id": {
            "include": true
          },
          "is_deleted": {
            "include": true
          },
          "action__delete": {}
        },
        "columns": {
          "tab-1": {
            "id": "tab-1",
            "title": "New tab",
            "fieldIds": [
              "date",
              "question",
              "id"
            ]
          },
          "22281603972867341": {
            "id": "22281603972867341",
            "title": "New tab",
            "fieldIds": [
              "user_id",
              "answer",
              "action__delete",
              "is_deleted"
            ]
          }
        },
        "columnOrder": [
          "tab-1",
          "22281603972867341"
        ]
      },
      "removeOn": true
    },
    "tableTitle": "Users' questions",
    "headers": [
      {
        "sysName": "answer",
        "dataType": "string",
        "name": "Ответ",
        "id": "97611600436853189",
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
        "formatOptions": null,
        "typeVariable": {},
        "linkOrArrayLinkType": false,
        "arrayLink": false,
        "json": false,
        "indexExists": false,
        "linkType": false
      },
      {
        "sysName": "date",
        "dataType": "date",
        "name": "Дата вопроса",
        "id": "83411601287631450",
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
        "formatOptions": null,
        "typeVariable": {},
        "linkOrArrayLinkType": false,
        "arrayLink": false,
        "json": false,
        "indexExists": false,
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
        "formatOptions": null,
        "typeVariable": {},
        "linkOrArrayLinkType": false,
        "arrayLink": false,
        "json": false,
        "indexExists": false,
        "linkType": false
      },
      {
        "sysName": "question",
        "dataType": "string",
        "name": "Вопрос",
        "id": "91971600436849319",
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
        "formatOptions": null,
        "typeVariable": {},
        "linkOrArrayLinkType": false,
        "arrayLink": false,
        "json": false,
        "indexExists": false,
        "linkType": false
      },
      {
        "sysName": "user_id",
        "dataType": "link",
        "name": "Кто спросил",
        "id": "92661600436847692",
        "link": "WebUser",
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
        "formatOptions": null,
        "typeVariable": {},
        "linkOrArrayLinkType": true,
        "arrayLink": false,
        "json": false,
        "indexExists": false,
        "linkType": true
      }
    ],
    "data": [
      {
        "question": "?",
        "user_id": {
          "lastName": "Efremova",
          "firstName": "Alina",
          "Skills": [
            "business development",
            "hr: admin and c&b",
            "recruiting"
          ],
          "TG_username": "@efremovalialife"
        },
        "id": "ffe2b49c-9a55-45c3-9332-58fcce1e4b02",
        "date": 1603977034000,
        "answer": "Какой у вас костюм красный красивый",
        "is_deleted": ""
      },
      {
        "user_id": {
          "lastName": "Ершов",
          "firstName": "Павел",
          "Skills": [
            "corporate finance",
            "transaction",
            "big data"
          ],
          "TG_username": "@pavelershov"
        },
        "question": "Кто убил Кеннеди?",
        "date": 1603974360000,
        "id": "a0b863f2-9d03-47c7-81c3-77beeb70b0be",
        "answer": "",
        "is_deleted": ""
      }
    ],
    "totalPages": 1,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [
      [
        "answer",
        1315872
      ],
      [
        "date",
        1315872
      ],
      [
        "id",
        1315872
      ],
      [
        "question",
        1315872
      ],
      [
        "user_id.Skills",
        1315850
      ],
      [
        "user_id.TG_username",
        1315850
      ],
      [
        "user_id.firstName",
        1315850
      ],
      [
        "user_id.lastName",
        1315850
      ]
    ],
    "writeFields": [
      "answer",
      "id",
      "is_deleted"
    ],
    "structures": {
      "1315850": {
        "networkID": 3571,
        "sysName": "WebUser",
        "name": "App users",
        "id": 1315850,
        "dateCreated": "2020-09-17T11:29:56Z",
        "hidden": false,
        "dateHidden": null,
        "jsonObject": "[{\"sysName\":\"role\",\"dataType\":\"string\",\"name\":\"role\",\"id\":\"1\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"isAuthorization\",\"dataType\":\"boolean\",\"name\":\"isAuthorization\",\"id\":\"2\",\"link\":\"\",\"group\":\"1600346916835\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"Company_id\",\"dataType\":\"string\",\"name\":\"Компания\",\"id\":\"21091600891116320\",\"link\":\"\",\"group\":\"1600346984797\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"gender\",\"dataType\":\"string\",\"name\":\"Пол\",\"id\":\"21661600355677459\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"dateLastActivity\",\"dataType\":\"string\",\"name\":\"dateLastActivity\",\"id\":\"3\",\"link\":\"\",\"group\":\"1600346916835\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"Company_site\",\"dataType\":\"string\",\"name\":\"Сайт компании\",\"id\":\"32501603357535558\",\"link\":\"\",\"group\":\"1600346984797\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"Salary_expectations\",\"dataType\":\"json\",\"name\":\"Ожидания по доходу\",\"id\":\"39581600416217901\",\"link\":\"\",\"group\":\"1600346971036\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":true,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"email\",\"dataType\":\"string\",\"name\":\"Email\",\"id\":\"4\",\"link\":\"\",\"group\":\"1600346959380\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"Photo\",\"dataType\":\"file\",\"name\":\"Photo\",\"id\":\"48241600975652227\",\"link\":\"\",\"group\":\"1600346959380\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"phone\",\"dataType\":\"string\",\"name\":\"Телефон\",\"id\":\"5\",\"link\":\"\",\"group\":\"1600346959380\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"TG_username\",\"dataType\":\"string\",\"name\":\"Telegram username\",\"id\":\"52471600355107908\",\"link\":\"\",\"group\":\"1600346959380\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"lastName\",\"dataType\":\"string\",\"name\":\"Фамилия\",\"id\":\"54421600355663803\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"dateCreated\",\"dataType\":\"string\",\"name\":\"dateCreated\",\"id\":\"6\",\"link\":\"\",\"group\":\"1600346916835\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"firstName\",\"dataType\":\"string\",\"name\":\"Имя\",\"id\":\"61731600355663227\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"password\",\"dataType\":\"string\",\"name\":\"password\",\"id\":\"7\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"CV_url\",\"dataType\":\"string\",\"name\":\"Ссылка на CV\",\"id\":\"74381600346994234\",\"link\":\"\",\"group\":\"1600346971036\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"City_id\",\"dataType\":\"link\",\"name\":\"Город\",\"id\":\"78691600347022913\",\"link\":\"cities\",\"group\":\"1600346959380\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"8\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"Skills\",\"dataType\":\"arrayLink\",\"name\":\"Функция\",\"id\":\"82091600415098326\",\"link\":\"Functions\",\"group\":\"1600346971036\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"TG_user_id\",\"dataType\":\"link\",\"name\":\"Telegram User\",\"id\":\"82311600346913479\",\"link\":\"TUser\",\"group\":\"1600346959380\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"indexExists\":false,\"typeVariable\":{}}]",
        "jsonGroupSettings": "[{\"id\":1600346959380,\"name\":\"Contacts\",\"order\":0},{\"id\":1600346971036,\"name\":\"Candidate info\",\"order\":1},{\"id\":1600346984797,\"name\":\"Company info\",\"order\":2},{\"id\":1600346916835,\"name\":\"Trash\",\"order\":3}]",
        "jsonViewIdSettings": "[{\"sysName\":\"firstName\"},{\"sysName\":\"lastName\"}]",
        "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":false,\"lowPriority\":false}",
        "jsonNativeIndexSettings": null,
        "indexEnabled": true,
        "lastIndexUpdate": 0,
        "indexName": "",
        "dateChanged": "2020-10-22T09:05:49Z",
        "createBy": 0,
        "changedBy": 21,
        "_settings": null,
        "_nativeIndexSettings": null,
        "objectIDSysName": "id",
        "innerIDField": {
          "sysName": "id",
          "dataType": "id",
          "name": "id",
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
          "defaultValue": "",
          "constraints": null,
          "synthetic": false,
          "format": null,
          "formatOptions": null,
          "typeVariable": {},
          "linkOrArrayLinkType": false,
          "arrayLink": false,
          "json": false,
          "indexExists": false,
          "linkType": false
        },
        "folderId": null
      },
      "1315872": {
        "networkID": 3571,
        "sysName": "questions",
        "name": "Вопросы",
        "id": 1315872,
        "dateCreated": "2020-09-18T13:33:20Z",
        "hidden": false,
        "dateHidden": null,
        "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"is_deleted\",\"dataType\":\"boolean\",\"name\":\"\",\"id\":\"30681603134054838\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"admin_id\",\"dataType\":\"link\",\"name\":\"Кто ответил\",\"id\":\"76431600436848180\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"indexExists\":false,\"linkType\":true},{\"sysName\":\"date\",\"dataType\":\"date\",\"name\":\"Дата вопроса\",\"id\":\"83411601287631450\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"question\",\"dataType\":\"string\",\"name\":\"Вопрос\",\"id\":\"91971600436849319\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"user_id\",\"dataType\":\"link\",\"name\":\"Кто спросил\",\"id\":\"92661600436847692\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"indexExists\":false,\"linkType\":true},{\"sysName\":\"answer\",\"dataType\":\"string\",\"name\":\"Ответ\",\"id\":\"97611600436853189\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"linkType\":false}]",
        "jsonGroupSettings": null,
        "jsonViewIdSettings": "[{\"sysName\":\"question\"}]",
        "jsonSettings": null,
        "jsonNativeIndexSettings": null,
        "indexEnabled": true,
        "lastIndexUpdate": 0,
        "indexName": "",
        "dateChanged": "2020-10-22T12:58:04Z",
        "createBy": 1,
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
          "formatOptions": null,
          "typeVariable": {},
          "linkOrArrayLinkType": false,
          "arrayLink": false,
          "json": false,
          "indexExists": false,
          "linkType": false
        },
        "folderId": 33590750
      }
    },
    "isSuccessWrite": false,
    "writeError": null,
    "writeResponse": null
  }

  let exampleTableTabs = {
    "sl": "allUsers",
    "pageSize": "10",
    "headerField": null,
    "params": {
      "data": {
        "readFields": [
          {
            "fieldSysName": "CV_url",
            "sysName": "CV_url",
            "name": "Ссылка на CV",
            "dataType": "string",
            "link": ""
          },
          {
            "fieldSysName": "City_id",
            "sysName": "City_id",
            "name": "Город",
            "dataType": "link",
            "link": "cities"
          },
          {
            "fieldSysName": "Photo",
            "sysName": "Photo",
            "name": "Photo",
            "dataType": "file",
            "link": ""
          },
          {
            "fieldSysName": "Skills",
            "sysName": "Skills",
            "name": "Функция",
            "dataType": "arrayLink",
            "link": "Functions"
          },
          {
            "fieldSysName": "email",
            "sysName": "email",
            "name": "Email",
            "dataType": "string",
            "link": ""
          },
          {
            "fieldSysName": "firstName",
            "sysName": "firstName",
            "name": "Имя",
            "dataType": "string",
            "link": ""
          },
          {
            "fieldSysName": "id",
            "sysName": "id",
            "name": "id",
            "dataType": "id",
            "link": ""
          },
          {
            "fieldSysName": "lastName",
            "sysName": "lastName",
            "name": "Фамилия",
            "dataType": "string",
            "link": ""
          },
          {
            "fieldSysName": "phone",
            "sysName": "phone",
            "name": "Телефон",
            "dataType": "string",
            "link": ""
          },
          {
            "fieldSysName": "role",
            "sysName": "role",
            "name": "role",
            "dataType": "string",
            "link": ""
          }
        ],
        "writeFields": [
          {
            "fieldSysName": "CV_url",
            "sysName": "CV_url",
            "name": "Ссылка на CV",
            "dataType": "string",
            "link": ""
          },
          {
            "fieldSysName": "Photo",
            "sysName": "Photo",
            "name": "Photo",
            "dataType": "file",
            "link": ""
          },
          {
            "fieldSysName": "email",
            "sysName": "email",
            "name": "Email",
            "dataType": "string",
            "link": ""
          },
          {
            "fieldSysName": "firstName",
            "sysName": "firstName",
            "name": "Имя",
            "dataType": "string",
            "link": ""
          },
          {
            "fieldSysName": "id",
            "sysName": "id",
            "name": "id",
            "dataType": "id",
            "link": ""
          },
          {
            "fieldSysName": "lastName",
            "sysName": "lastName",
            "name": "Фамилия",
            "dataType": "string",
            "link": ""
          },
          {
            "fieldSysName": "role",
            "sysName": "role",
            "name": "role",
            "dataType": "string",
            "link": ""
          }
        ],
        "fields": {
          "action__delete": {
            "id": "action__delete",
            "content": "Delete button",
            "type": "action"
          },
          "CV_url": {
            "id": "CV_url",
            "content": "Ссылка на CV",
            "type": "field",
            "dataType": "string",
            "write": false,
            "read": true,
            "link": ""
          },
          "City_id": {
            "id": "City_id",
            "content": "Город",
            "type": "field",
            "dataType": "link",
            "read": true,
            "link": "cities"
          },
          "Photo": {
            "id": "Photo",
            "content": "Photo",
            "type": "field",
            "dataType": "file",
            "write": true,
            "read": true,
            "link": ""
          },
          "Skills": {
            "id": "Skills",
            "content": "Функция",
            "type": "field",
            "dataType": "arrayLink",
            "read": true,
            "link": "Functions"
          },
          "email": {
            "id": "email",
            "content": "Email",
            "type": "field",
            "dataType": "email",
            "write": false,
            "read": true,
            "link": ""
          },
          "firstName": {
            "id": "firstName",
            "content": "Имя",
            "type": "field",
            "dataType": "string",
            "write": true,
            "read": true,
            "link": ""
          },
          "id": {
            "id": "id",
            "content": "id",
            "type": "field",
            "dataType": "id",
            "write": true,
            "read": true,
            "link": ""
          },
          "lastName": {
            "id": "lastName",
            "content": "Фамилия",
            "type": "field",
            "dataType": "string",
            "write": true,
            "read": true,
            "link": ""
          },
          "phone": {
            "id": "phone",
            "content": "Телефон",
            "type": "field",
            "dataType": "string",
            "read": true,
            "link": ""
          },
          "role": {
            "id": "role",
            "content": "role",
            "type": "field",
            "dataType": "string",
            "write": true,
            "read": true,
            "link": ""
          }
        },
        "fieldParams": {
          "CV_url": {
            "include": true,
            "weblinkFlag": true,
            "weblink": "Нажми меня",
            "descriptionFlag": false
          },
          "City_id": {
            "include": true
          },
          "Photo": {
            "include": true,
            "fileImage": true,
            "fileImageFormat": "circle",
            "fileImageSize": 200,
            "descriptionFlag": false,
            "description": ""
          },
          "Skills": {
            "include": true
          },
          "email": {
            "include": true
          },
          "firstName": {
            "include": true
          },
          "id": {
            "include": false
          },
          "lastName": {
            "include": true
          },
          "phone": {
            "include": true,
            "descriptionFlag": true,
            "description": "Звонить до обеда"
          },
          "role": {
            "include": true,
            "descriptionFlag": true,
            "description": "Раз два три"
          }
        },
        "columns": {
          "tab-1": {
            "id": "tab-1",
            "title": "One tab",
            "fieldIds": [
              "CV_url",
              "action__delete",
              "City_id",
              "Skills",
              "email",
              "id",
              "role"
            ]
          },
          "55751603974189949": {
            "id": "55751603974189949",
            "title": "Two tab",
            "fieldIds": [
              "Photo",
              "firstName",
              "phone",
              "lastName"
            ]
          }
        },
        "columnOrder": [
          "tab-1",
          "55751603974189949"
        ]
      },
      "cardHeaderComment": "phone",
      "cardBodyText": "role",
      "deleteField": "role",
      "cardImage": true,
      "cardImageField": "Photo",
      "cardImageType": "leftCircle",
      "cardImageSize": 100
    },
    "tableTitle": "Пользователи платформы",
    "headers": [
      {
        "sysName": "CV_url",
        "dataType": "string",
        "name": "Ссылка на CV",
        "id": "74381600346994234",
        "link": "",
        "group": "1600346971036",
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
        "typeVariable": {},
        "linkOrArrayLinkType": false,
        "arrayLink": false,
        "json": false,
        "indexExists": false,
        "linkType": false
      },
      {
        "sysName": "City_id",
        "dataType": "link",
        "name": "Город",
        "id": "78691600347022913",
        "link": "cities",
        "group": "1600346959380",
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
        "formatOptions": null,
        "typeVariable": {},
        "linkOrArrayLinkType": true,
        "arrayLink": false,
        "json": false,
        "indexExists": false,
        "linkType": true
      },
      {
        "sysName": "Photo",
        "dataType": "file",
        "name": "Photo",
        "id": "48241600975652227",
        "link": "",
        "group": "1600346959380",
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
        "formatOptions": null,
        "typeVariable": {},
        "linkOrArrayLinkType": false,
        "arrayLink": false,
        "json": false,
        "indexExists": false,
        "linkType": false
      },
      {
        "sysName": "Skills",
        "dataType": "arrayLink",
        "name": "Функция",
        "id": "82091600415098326",
        "link": "Functions",
        "group": "1600346971036",
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
        "formatOptions": null,
        "typeVariable": {},
        "linkOrArrayLinkType": true,
        "arrayLink": true,
        "json": false,
        "indexExists": false,
        "linkType": false
      },
      {
        "sysName": "email",
        "dataType": "string",
        "name": "Email",
        "id": "4",
        "link": "",
        "group": "1600346959380",
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
        "formatOptions": null,
        "typeVariable": {},
        "linkOrArrayLinkType": false,
        "arrayLink": false,
        "json": false,
        "indexExists": false,
        "linkType": false
      },
      {
        "sysName": "firstName",
        "dataType": "string",
        "name": "Имя",
        "id": "61731600355663227",
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
        "formatOptions": null,
        "typeVariable": {},
        "linkOrArrayLinkType": false,
        "arrayLink": false,
        "json": false,
        "indexExists": false,
        "linkType": false
      },
      {
        "sysName": "id",
        "dataType": "id",
        "name": "id",
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
        "defaultValue": "",
        "constraints": null,
        "synthetic": false,
        "format": null,
        "formatOptions": null,
        "typeVariable": {},
        "linkOrArrayLinkType": false,
        "arrayLink": false,
        "json": false,
        "indexExists": false,
        "linkType": false
      },
      {
        "sysName": "lastName",
        "dataType": "string",
        "name": "Фамилия",
        "id": "54421600355663803",
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
        "formatOptions": null,
        "typeVariable": {},
        "linkOrArrayLinkType": false,
        "arrayLink": false,
        "json": false,
        "indexExists": false,
        "linkType": false
      },
      {
        "sysName": "phone",
        "dataType": "string",
        "name": "Телефон",
        "id": "5",
        "link": "",
        "group": "1600346959380",
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
        "typeVariable": {},
        "linkOrArrayLinkType": false,
        "arrayLink": false,
        "json": false,
        "indexExists": false,
        "linkType": false
      },
      {
        "sysName": "role",
        "dataType": "string",
        "name": "role",
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
        "formatOptions": null,
        "typeVariable": {},
        "linkOrArrayLinkType": false,
        "arrayLink": false,
        "json": false,
        "indexExists": false,
        "linkType": false
      }
    ],
    "data": [
      {
        "Photo": "https://api.directual.com/fileUploaded/uao/2d6f3373-b6ee-4610-9ac3-7ccb3998886e.jpg",
        "role": "admin",
        "City_id": {
          "name": "Нижний Новгород"
        },
        "Skills": [
          {
            "name": "Corporate Finance",
            "id": "corporate finance"
          },
          {
            "name": "Transaction",
            "id": "transaction"
          },
          {
            "name": "Big Data",
            "id": "big data"
          }
        ],
        "lastName": "Ершов",
        "firstName": "Павел",
        "id": "79151845361",
        "phone": "79151845361",
        "CV_url": "http://ya.ru",
        "email": ""
      },
      {
        "Photo": "https://api.directual.com/fileUploaded/uao/33ad84e2-0a22-4e8f-965e-445d719ee084.jpg",
        "role": "candidate,admin",
        "City_id": {
          "name": "Москва"
        },
        "Skills": [
          {
            "name": "HR: Admin and C&B",
            "id": "hr: admin and c&b"
          },
          {
            "name": "Talent & Development",
            "id": "talent & development"
          },
          {
            "name": "Recruiting",
            "id": "recruiting"
          }
        ],
        "lastName": "Nesterova",
        "firstName": "Anastasiia",
        "id": "79160990344",
        "phone": "79160990344",
        "CV_url": "",
        "email": ""
      },
      {
        "Photo": "https://api.directual.com/fileUploaded/uao/5b8ae347-efde-45ab-a11c-fc3dd2618485.jpg",
        "role": "candidate,admin",
        "City_id": {
          "name": "Москва"
        },
        "Skills": [
          {
            "name": "Business Development",
            "id": "business development"
          },
          {
            "name": "HR: Admin and C&B",
            "id": "hr: admin and c&b"
          },
          {
            "name": "Recruiting",
            "id": "recruiting"
          }
        ],
        "lastName": "Efremova",
        "firstName": "Alina",
        "id": "79670190111",
        "phone": "79670190111",
        "CV_url": "",
        "email": ""
      }
    ],
    "totalPages": 1,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [
      [
        "CV_url",
        1315850
      ],
      [
        "City_id.name",
        1315871
      ],
      [
        "Photo",
        1315850
      ],
      [
        "Skills.name",
        1316850
      ],
      [
        "email",
        1315850
      ],
      [
        "firstName",
        1315850
      ],
      [
        "id",
        1315850
      ],
      [
        "lastName",
        1315850
      ],
      [
        "phone",
        1315850
      ],
      [
        "role",
        1315850
      ]
    ],
    "writeFields": [
      "CV_url",
      "Photo",
      "email",
      "firstName",
      "id",
      "lastName",
      "role"
    ],
    "structures": {
      "1315850": {
        "networkID": 3571,
        "sysName": "WebUser",
        "name": "App users",
        "id": 1315850,
        "dateCreated": "2020-09-17T11:29:56Z",
        "hidden": false,
        "dateHidden": null,
        "jsonObject": "[{\"sysName\":\"role\",\"dataType\":\"string\",\"name\":\"role\",\"id\":\"1\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"isAuthorization\",\"dataType\":\"boolean\",\"name\":\"isAuthorization\",\"id\":\"2\",\"link\":\"\",\"group\":\"1600346916835\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"Company_id\",\"dataType\":\"string\",\"name\":\"Компания\",\"id\":\"21091600891116320\",\"link\":\"\",\"group\":\"1600346984797\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"gender\",\"dataType\":\"string\",\"name\":\"Пол\",\"id\":\"21661600355677459\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"dateLastActivity\",\"dataType\":\"string\",\"name\":\"dateLastActivity\",\"id\":\"3\",\"link\":\"\",\"group\":\"1600346916835\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"Company_site\",\"dataType\":\"string\",\"name\":\"Сайт компании\",\"id\":\"32501603357535558\",\"link\":\"\",\"group\":\"1600346984797\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"Salary_expectations\",\"dataType\":\"json\",\"name\":\"Ожидания по доходу\",\"id\":\"39581600416217901\",\"link\":\"\",\"group\":\"1600346971036\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":true,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"email\",\"dataType\":\"string\",\"name\":\"Email\",\"id\":\"4\",\"link\":\"\",\"group\":\"1600346959380\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"Photo\",\"dataType\":\"file\",\"name\":\"Photo\",\"id\":\"48241600975652227\",\"link\":\"\",\"group\":\"1600346959380\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"phone\",\"dataType\":\"string\",\"name\":\"Телефон\",\"id\":\"5\",\"link\":\"\",\"group\":\"1600346959380\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"TG_username\",\"dataType\":\"string\",\"name\":\"Telegram username\",\"id\":\"52471600355107908\",\"link\":\"\",\"group\":\"1600346959380\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"lastName\",\"dataType\":\"string\",\"name\":\"Фамилия\",\"id\":\"54421600355663803\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"dateCreated\",\"dataType\":\"string\",\"name\":\"dateCreated\",\"id\":\"6\",\"link\":\"\",\"group\":\"1600346916835\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"firstName\",\"dataType\":\"string\",\"name\":\"Имя\",\"id\":\"61731600355663227\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"password\",\"dataType\":\"string\",\"name\":\"password\",\"id\":\"7\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"CV_url\",\"dataType\":\"string\",\"name\":\"Ссылка на CV\",\"id\":\"74381600346994234\",\"link\":\"\",\"group\":\"1600346971036\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"City_id\",\"dataType\":\"link\",\"name\":\"Город\",\"id\":\"78691600347022913\",\"link\":\"cities\",\"group\":\"1600346959380\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"8\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"Skills\",\"dataType\":\"arrayLink\",\"name\":\"Функция\",\"id\":\"82091600415098326\",\"link\":\"Functions\",\"group\":\"1600346971036\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"TG_user_id\",\"dataType\":\"link\",\"name\":\"Telegram User\",\"id\":\"82311600346913479\",\"link\":\"TUser\",\"group\":\"1600346959380\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"indexExists\":false,\"typeVariable\":{}}]",
        "jsonGroupSettings": "[{\"id\":1600346959380,\"name\":\"Contacts\",\"order\":0},{\"id\":1600346971036,\"name\":\"Candidate info\",\"order\":1},{\"id\":1600346984797,\"name\":\"Company info\",\"order\":2},{\"id\":1600346916835,\"name\":\"Trash\",\"order\":3}]",
        "jsonViewIdSettings": "[{\"sysName\":\"firstName\"},{\"sysName\":\"lastName\"}]",
        "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":false,\"lowPriority\":false}",
        "jsonNativeIndexSettings": null,
        "indexEnabled": true,
        "lastIndexUpdate": 0,
        "indexName": "",
        "dateChanged": "2020-10-22T09:05:49Z",
        "createBy": 0,
        "changedBy": 21,
        "_settings": null,
        "_nativeIndexSettings": null,
        "objectIDSysName": "id",
        "innerIDField": {
          "sysName": "id",
          "dataType": "id",
          "name": "id",
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
          "defaultValue": "",
          "constraints": null,
          "synthetic": false,
          "format": null,
          "formatOptions": null,
          "typeVariable": {},
          "linkOrArrayLinkType": false,
          "arrayLink": false,
          "json": false,
          "indexExists": false,
          "linkType": false
        },
        "folderId": null
      },
      "1315871": {
        "networkID": 3571,
        "sysName": "cities",
        "name": "Cities",
        "id": 1315871,
        "dateCreated": "2020-09-18T07:42:27Z",
        "hidden": false,
        "dateHidden": null,
        "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"name\",\"dataType\":\"string\",\"name\":\"City name\",\"id\":\"64661600414975068\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"linkType\":false,\"json\":false}]",
        "jsonGroupSettings": null,
        "jsonViewIdSettings": "[{\"sysName\":\"name\"}]",
        "jsonSettings": null,
        "jsonNativeIndexSettings": null,
        "indexEnabled": false,
        "lastIndexUpdate": 0,
        "indexName": "",
        "dateChanged": "2020-09-28T12:47:19Z",
        "createBy": 1,
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
          "formatOptions": null,
          "typeVariable": {},
          "linkOrArrayLinkType": false,
          "arrayLink": false,
          "json": false,
          "indexExists": false,
          "linkType": false
        },
        "folderId": 33588861
      },
      "1316850": {
        "networkID": 3571,
        "sysName": "Functions",
        "name": "Функции",
        "id": 1316850,
        "dateCreated": "2020-09-28T12:41:37Z",
        "hidden": false,
        "dateHidden": null,
        "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"name\",\"dataType\":\"string\",\"name\":\"Назване функции\",\"id\":\"55601601296901980\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false}]",
        "jsonGroupSettings": null,
        "jsonViewIdSettings": "[{\"sysName\":\"name\"}]",
        "jsonSettings": null,
        "jsonNativeIndexSettings": null,
        "indexEnabled": false,
        "lastIndexUpdate": 0,
        "indexName": "",
        "dateChanged": "2020-10-11T19:24:18Z",
        "createBy": 1,
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
          "formatOptions": null,
          "typeVariable": {},
          "linkOrArrayLinkType": false,
          "arrayLink": false,
          "json": false,
          "indexExists": false,
          "linkType": false
        },
        "folderId": 33588861
      }
    },
    "isSuccessWrite": false,
    "writeError": null,
    "writeResponse": null
  }

  let exampleTable =
  {
    "sl": "getBooks_FPS",
    "tableTitle": "List with background images",
    "pageSize": "10",
    "tableFilters": true,
    "tableQuickSearch": true,
    "params": {
      "cardListLayout": "grid", // grid, list
      "isDisplayID": false,
      "deleteField": "year",
      "cardHeaderComment": "title", // check link fields on the card
      "cardBodyText": "author_id", 
      //"cardBodyText": "genre",
      "cardImageField": "image",
      "cardImageType": "cover", // none, top, left, cover, leftCircle
      "cardImageSize": 100, // width for left, height for top, width+height for leftCircle
      "objectView": {} // object view settings
      },
    "headers": [
      {
        "sysName": "author_id",
        "name": "Author",
        "dataType": "link",
        "id": "81201585132056810",
        "link": "Authors",
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
        "formatOptions": null,
        "linkType": true,
        "typeVariable": {},
        "indexExists": false,
        "json": false,
        "linkOrArrayLinkType": true,
        "arrayLink": false
      },
      {
        "sysName": "genre",
        "name": "Genre",
        "dataType": "string",
        "id": "89311585132044726",
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
        "formatOptions": null,
        "linkType": false,
        "typeVariable": {},
        "indexExists": false,
        "json": false,
        "linkOrArrayLinkType": false,
        "arrayLink": false
      },
      {
        "sysName": "title",
        "name": "Title",
        "dataType": "string",
        "id": "24751585132012036",
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
        "formatOptions": null,
        "linkType": false,
        "typeVariable": {},
        "indexExists": false,
        "json": false,
        "linkOrArrayLinkType": false,
        "arrayLink": false
      },
      {
        "sysName": "year",
        "name": "Year",
        "dataType": "number",
        "id": "81761585132035625",
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
        "formatOptions": null,
        "linkType": false,
        "typeVariable": {},
        "indexExists": false,
        "json": false,
        "linkOrArrayLinkType": false,
        "arrayLink": false
      }
    ],
    "data": 
    [
      {
        "year": 2020,
        "id":'aaa',
        "genre": "Biog\nraphy",
        "title": "Life\nof\nSamuel\nJohnson",
        "image": "https://images.unsplash.com/photo-1598145164978-64796c5e8c4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "author_id": {
          "id": "2",
          "first_name": "James",
          "country": "Scotland",
          "books_ids": [
            {
              "genre": "Biography",
              "id": "1",
              "author_id": {
                "first_name": "James"
              },
              "title": "Life of Samuel Johnson"
            }
          ],
          "last_name": "Boswell",
          "birth_year": 1740
        }
      },
      {
        "year": 1869,
        "genre": "Novel",
        "title": "War and Peace",
        "image": "https://images.unsplash.com/photo-1520116468816-95b69f847357?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "author_id": {
          "first_name": "Leo",
          "country": "Russia",
          "books_ids": [
            {
              "genre": "Novel",
              "year": 1869,
              "id": "2",
              "author_id": {
                "first_name": "Leo"
              },
              "title": "War and Peace"
            },
            {
              "genre": "Novel",
              "year": 1877,
              "id": "3",
              "author_id": {
                "first_name": "Leo"
              },
              "title": "Anna Karenina"
            },
            {
              "genre": "Novella",
              "year": 1863,
              "id": "4",
              "author_id": {
                "first_name": "Leo"
              },
              "title": "The Cossacks"
            }
          ],
          "last_name": "Tolstoy",
          "birth_year": 1828
        }
      },
      {
        "year": 1877,
        "genre": "Novel",
        "title": "Anna Karenina",
        "image": "https://images.unsplash.com/photo-1519789110007-0e751882be76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "author_id": {
          "first_name": "Leo",
          "country": "Russia",
          "books_ids": [
            {
              "genre": "Novel",
              "year": 1869,
              "id": "2",
              "author_id": {
                "first_name": "Leo"
              },
              "title": "War and Peace"
            },
            {
              "genre": "Novel",
              "year": 1877,
              "id": "3",
              "author_id": {
                "first_name": "Leo"
              },
              "title": "Anna Karenina"
            },
            {
              "genre": "Novella",
              "year": 1863,
              "id": "4",
              "author_id": {
                "first_name": "Leo"
              },
              "title": "The Cossacks"
            }
          ],
          "last_name": "Tolstoy",
          "birth_year": 1828
        }
      },
      {
        "year": 1863,
        "genre": "Novella",
        "title": "The Cossacks",
        "image": "https://images.unsplash.com/photo-1526810209977-4708ffb9c873?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "author_id": {
          "first_name": "Leo",
          "country": "Russia",
          "books_ids": [
            {
              "genre": "Novel",
              "year": 1869,
              "id": "2",
              "author_id": {
                "first_name": "Leo"
              },
              "title": "War and Peace"
            },
            {
              "genre": "Novel",
              "year": 1877,
              "id": "3",
              "author_id": {
                "first_name": "Leo"
              },
              "title": "Anna Karenina"
            },
            {
              "genre": "Novella",
              "year": 1863,
              "id": "4",
              "author_id": {
                "first_name": "Leo"
              },
              "title": "The Cossacks"
            }
          ],
          "last_name": "Tolstoy",
          "birth_year": 1828
        }
      },
      {
        "year": 1866,
        "genre": "Novel",
        "title": "Crime and Punishment",
        "image": "https://images.unsplash.com/photo-1484804959297-65e7c19d7c9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "author_id": {
          "first_name": "Fyodor",
          "country": "Russia",
          "books_ids": [
            {
              "genre": "Novel",
              "year": 1866,
              "id": "5",
              "author_id": {
                "first_name": "Fyodor"
              },
              "title": "Crime and Punishment"
            },
            {
              "genre": "Novel",
              "year": 1880,
              "id": "6",
              "author_id": {
                "first_name": "Fyodor"
              },
              "title": "The Brothers Karamazov"
            }
          ],
          "last_name": "Dostoevsky",
          "birth_year": 1821
        }
      },
      {
        "year": 1880,
        "genre": "Novel",
        "title": "The Brothers Karamazov",
        "image": "https://images.unsplash.com/photo-1513737567531-bc431c8e5e85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "author_id": {
          "first_name": "Fyodor",
          "country": "Russia",
          "books_ids": [
            {
              "genre": "Novel",
              "year": 1866,
              "id": "5",
              "author_id": {
                "first_name": "Fyodor"
              },
              "title": "Crime and Punishment"
            },
            {
              "genre": "Novel",
              "year": 1880,
              "id": "6",
              "author_id": {
                "first_name": "Fyodor"
              },
              "title": "The Brothers Karamazov"
            }
          ],
          "last_name": "Dostoevsky",
          "birth_year": 1821
        }
      },
      {
        "year": 1927,
        "genre": "Novel",
        "title": "The Sun Also Rises",
        "image": "https://images.unsplash.com/photo-1472108482137-8df36ccf0d7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "author_id": {
          "first_name": "Ernest",
          "country": "U.S.",
          "books_ids": [
            {
              "genre": "Novel",
              "year": 1927,
              "id": "7",
              "author_id": {
                "first_name": "Ernest"
              },
              "title": "The Sun Also Rises"
            },
            {
              "genre": "Novel",
              "year": 1951,
              "id": "8",
              "author_id": {
                "first_name": "Ernest"
              },
              "title": "The Old Man and the Sea"
            }
          ],
          "last_name": "Hemingway",
          "birth_year": 1899
        }
      },
      {
        "year": 1951,
        "genre": "Novel",
        "title": "The Old Man and the Sea",
        "image": "https://images.unsplash.com/photo-1531579766052-06ad0bb58728?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "author_id": {
          "first_name": "Ernest",
          "country": "U.S.",
          "books_ids": [
            {
              "genre": "Novel",
              "year": 1927,
              "id": "7",
              "author_id": {
                "first_name": "Ernest"
              },
              "title": "The Sun Also Rises"
            },
            {
              "genre": "Novel",
              "year": 1951,
              "id": "8",
              "author_id": {
                "first_name": "Ernest"
              },
              "title": "The Old Man and the Sea"
            }
          ],
          "last_name": "Hemingway",
          "birth_year": 1899
        }
      },
      {
        "genre": "Science",
        "title": "Mathematical Principles of Natural Philosophy",
        "image": "https://images.unsplash.com/photo-1503293962593-47247718a17a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "year": 1687
      },
      {
        "title": "Gulliver’s Travels",
        "year": 1726,
        "image": "https://images.unsplash.com/photo-1529029411565-e04366ee3cc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "genre": "Novel"
      }
    ],
    "totalPages": 3,
    "pageNumber": 1,
    "error": null,
    "writeFields": [
      "author_id","year","id","genre"
    ],
    "fieldScheme": [
      [
        "author_id.birth_year",
        1295819
      ],
      [
        "author_id.books_ids.genre",
        1295858
      ],
      [
        "author_id.books_ids.title",
        1295858
      ],
      [
        "author_id.books_ids.year",
        1295858
      ],
      [
        "author_id.country",
        1295819
      ],
      [
        "author_id.first_name",
        1295819
      ],
      [
        "author_id.last_name",
        1295819
      ],
      [
        "genre",
        1295858
      ],
      [
        "title",
        1295858
      ],
      [
        "year",
        1295858
      ]
    ],
    "structures": {
      "1295819": {
        "networkID": 2621,
        "id": 1295819,
        "dateCreated": "2020-03-25T10:28:14Z",
        "hidden": false,
        "dateHidden": null,
        "name": "Authors",
        "sysName": "Authors",
        "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"birth_year\",\"name\":\"Year of birth\",\"dataType\":\"number\",\"id\":\"23361585132128552\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"last_name\",\"name\":\"Last name\",\"dataType\":\"string\",\"id\":\"54861585132109303\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"first_name\",\"name\":\"First name\",\"dataType\":\"string\",\"id\":\"56761585132098323\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"books_ids\",\"name\":\"Books\",\"dataType\":\"arrayLink\",\"id\":\"92841585132143841\",\"link\":\"Books\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true},{\"sysName\":\"country\",\"name\":\"Country\",\"dataType\":\"string\",\"id\":\"96371585132109899\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false}]",
        "jsonGroupSettings": null,
        "jsonViewIdSettings": "[{\"sysName\":\"first_name\"},{\"sysName\":\"last_name\"}]",
        "jsonSettings": null,
        "jsonNativeIndexSettings": null,
        "indexEnabled": false,
        "lastIndexUpdate": 0,
        "indexName": "",
        "dateChanged": "2020-03-25T10:32:54Z",
        "createBy": 3476,
        "changedBy": 3476,
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
          "formatOptions": null,
          "linkType": false,
          "typeVariable": {},
          "indexExists": false,
          "json": false,
          "linkOrArrayLinkType": false,
          "arrayLink": false
        },
        "folderId": null
      },
      "1295858": {
        "networkID": 2621,
        "id": 1295858,
        "dateCreated": "2020-03-25T10:22:06Z",
        "hidden": false,
        "dateHidden": null,
        "name": "Books",
        "sysName": "Books",
        "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"date\",\"name\":\"date\",\"dataType\":\"date\",\"id\":\"17781586365675109\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"title\",\"name\":\"Title\",\"dataType\":\"string\",\"id\":\"24751585132012036\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"image\",\"name\":\"image\",\"dataType\":\"file\",\"id\":\"59701594730297293\",\"link\":\"\",\"group\":\"1585332461783\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"author_id\",\"name\":\"Author\",\"dataType\":\"link\",\"id\":\"81201585132056810\",\"link\":\"Authors\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"year\",\"name\":\"Year\",\"dataType\":\"number\",\"id\":\"81761585132035625\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"datedql\",\"name\":\"date\",\"dataType\":\"date\",\"id\":\"83881587302273838\",\"link\":\"\",\"group\":\"1585332461783\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"boolean\",\"name\":\"\",\"dataType\":\"boolean\",\"id\":\"85921587303259528\",\"link\":\"\",\"group\":\"1585332461783\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"genre\",\"name\":\"Genre\",\"dataType\":\"string\",\"id\":\"89311585132044726\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"approved\",\"name\":\"approved\",\"dataType\":\"boolean\",\"id\":\"98821586526700880\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{}}]",
        "jsonGroupSettings": "[{\"id\":1585332461783,\"name\":\"Details\",\"order\":0}]",
        "jsonViewIdSettings": "[{\"sysName\":\"year\"}]",
        "jsonSettings": null,
        "jsonNativeIndexSettings": null,
        "indexEnabled": true,
        "lastIndexUpdate": 0,
        "indexName": "",
        "dateChanged": "2020-07-14T12:38:30Z",
        "createBy": 3476,
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
          "formatOptions": null,
          "linkType": false,
          "typeVariable": {},
          "indexExists": false,
          "json": false,
          "linkOrArrayLinkType": false,
          "arrayLink": false
        },
        "folderId": null
      }
    }
  }

  let exampleTable2 =
  {
    "sl": "getBooks_FPS",
    "tableTitle": "List with circled images, list view",
    "pageSize": "10",
    "tableFilters": true,
    "tableQuickSearch": false,
    "params": {
      "cardListLayout": "list", // grid, list
      "isDisplayID": false,
      "deleteField": "",
      "cardHeaderComment": "author_id",
      "cardBodyText": "year",
      "cardImageField": "image",
      "cardImageType": "leftCircle", // none, top, left, cover, leftCircle
      "cardImageSize": 120, // width for left, height for top, width+height for leftCircle
      "objectView": {} // object view settings
      },
    "headers": [
      {
        "sysName": "author_id",
        "name": "Author",
        "dataType": "link",
        "id": "81201585132056810",
        "link": "Authors",
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
        "formatOptions": null,
        "linkType": true,
        "typeVariable": {},
        "indexExists": false,
        "json": false,
        "linkOrArrayLinkType": true,
        "arrayLink": false
      },
      {
        "sysName": "genre",
        "name": "Genre",
        "dataType": "string",
        "id": "89311585132044726",
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
        "formatOptions": null,
        "linkType": false,
        "typeVariable": {},
        "indexExists": false,
        "json": false,
        "linkOrArrayLinkType": false,
        "arrayLink": false
      },
      {
        "sysName": "title",
        "name": "Title",
        "dataType": "string",
        "id": "24751585132012036",
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
        "formatOptions": null,
        "linkType": false,
        "typeVariable": {},
        "indexExists": false,
        "json": false,
        "linkOrArrayLinkType": false,
        "arrayLink": false
      },
      {
        "sysName": "year",
        "name": "Year",
        "dataType": "number",
        "id": "81761585132035625",
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
        "formatOptions": null,
        "linkType": false,
        "typeVariable": {},
        "indexExists": false,
        "json": false,
        "linkOrArrayLinkType": false,
        "arrayLink": false
      }
    ],
    "data": 
    [
      {
        "year": 1760,
        "genre": "Biography",
        "title": "Life of Samuel Johnson",
        "image": "https://images.unsplash.com/photo-1598145164978-64796c5e8c4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "author_id": {
          "first_name": "James",
          "country": "Scotland",
          "books_ids": [
            {
              "genre": "Biography",
              "id": "1",
              "author_id": {
                "first_name": "James"
              },
              "title": "Life of Samuel Johnson"
            }
          ],
          "last_name": "Boswell",
          "birth_year": 1740
        }
      },
      {
        "year": 1869,
        "genre": "Novel",
        "title": "War and Peace",
        "image": "https://images.unsplash.com/photo-1520116468816-95b69f847357?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "author_id": {
          "first_name": "Leo",
          "country": "Russia",
          "books_ids": [
            {
              "genre": "Novel",
              "year": 1869,
              "id": "2",
              "author_id": {
                "first_name": "Leo"
              },
              "title": "War and Peace"
            },
            {
              "genre": "Novel",
              "year": 1877,
              "id": "3",
              "author_id": {
                "first_name": "Leo"
              },
              "title": "Anna Karenina"
            },
            {
              "genre": "Novella",
              "year": 1863,
              "id": "4",
              "author_id": {
                "first_name": "Leo"
              },
              "title": "The Cossacks"
            }
          ],
          "last_name": "Tolstoy",
          "birth_year": 1828
        }
      },
      {
        "year": 1877,
        "genre": "Novel",
        "title": "Anna Karenina",
        "image": "https://images.unsplash.com/photo-1519789110007-0e751882be76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "author_id": {
          "first_name": "Leo",
          "country": "Russia",
          "books_ids": [
            {
              "genre": "Novel",
              "year": 1869,
              "id": "2",
              "author_id": {
                "first_name": "Leo"
              },
              "title": "War and Peace"
            },
            {
              "genre": "Novel",
              "year": 1877,
              "id": "3",
              "author_id": {
                "first_name": "Leo"
              },
              "title": "Anna Karenina"
            },
            {
              "genre": "Novella",
              "year": 1863,
              "id": "4",
              "author_id": {
                "first_name": "Leo"
              },
              "title": "The Cossacks"
            }
          ],
          "last_name": "Tolstoy",
          "birth_year": 1828
        }
      },
      {
        "year": 1863,
        "genre": "Novella",
        "title": "The Cossacks",
        "image": "https://images.unsplash.com/photo-1526810209977-4708ffb9c873?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "author_id": {
          "first_name": "Leo",
          "country": "Russia",
          "books_ids": [
            {
              "genre": "Novel",
              "year": 1869,
              "id": "2",
              "author_id": {
                "first_name": "Leo"
              },
              "title": "War and Peace"
            },
            {
              "genre": "Novel",
              "year": 1877,
              "id": "3",
              "author_id": {
                "first_name": "Leo"
              },
              "title": "Anna Karenina"
            },
            {
              "genre": "Novella",
              "year": 1863,
              "id": "4",
              "author_id": {
                "first_name": "Leo"
              },
              "title": "The Cossacks"
            }
          ],
          "last_name": "Tolstoy",
          "birth_year": 1828
        }
      },
      {
        "year": 1866,
        "genre": "Novel",
        "title": "Crime and Punishment",
        "image": "https://images.unsplash.com/photo-1484804959297-65e7c19d7c9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "author_id": {
          "first_name": "Fyodor",
          "country": "Russia",
          "books_ids": [
            {
              "genre": "Novel",
              "year": 1866,
              "id": "5",
              "author_id": {
                "first_name": "Fyodor"
              },
              "title": "Crime and Punishment"
            },
            {
              "genre": "Novel",
              "year": 1880,
              "id": "6",
              "author_id": {
                "first_name": "Fyodor"
              },
              "title": "The Brothers Karamazov"
            }
          ],
          "last_name": "Dostoevsky",
          "birth_year": 1821
        }
      },
      {
        "year": 1880,
        "genre": "Novel",
        "title": "The Brothers Karamazov",
        "image": "https://images.unsplash.com/photo-1513737567531-bc431c8e5e85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "author_id": {
          "first_name": "Fyodor",
          "country": "Russia",
          "books_ids": [
            {
              "genre": "Novel",
              "year": 1866,
              "id": "5",
              "author_id": {
                "first_name": "Fyodor"
              },
              "title": "Crime and Punishment"
            },
            {
              "genre": "Novel",
              "year": 1880,
              "id": "6",
              "author_id": {
                "first_name": "Fyodor"
              },
              "title": "The Brothers Karamazov"
            }
          ],
          "last_name": "Dostoevsky",
          "birth_year": 1821
        }
      },
      {
        "year": 1927,
        "genre": "Novel",
        "title": "The Sun Also Rises",
        "image": "https://images.unsplash.com/photo-1472108482137-8df36ccf0d7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "author_id": {
          "first_name": "Ernest",
          "country": "U.S.",
          "books_ids": [
            {
              "genre": "Novel",
              "year": 1927,
              "id": "7",
              "author_id": {
                "first_name": "Ernest"
              },
              "title": "The Sun Also Rises"
            },
            {
              "genre": "Novel",
              "year": 1951,
              "id": "8",
              "author_id": {
                "first_name": "Ernest"
              },
              "title": "The Old Man and the Sea"
            }
          ],
          "last_name": "Hemingway",
          "birth_year": 1899
        }
      },
      {
        "year": 1951,
        "genre": "Novel",
        "title": "The Old Man and the Sea",
        "image": "https://images.unsplash.com/photo-1531579766052-06ad0bb58728?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "author_id": {
          "first_name": "Ernest",
          "country": "U.S.",
          "books_ids": [
            {
              "genre": "Novel",
              "year": 1927,
              "id": "7",
              "author_id": {
                "first_name": "Ernest"
              },
              "title": "The Sun Also Rises"
            },
            {
              "genre": "Novel",
              "year": 1951,
              "id": "8",
              "author_id": {
                "first_name": "Ernest"
              },
              "title": "The Old Man and the Sea"
            }
          ],
          "last_name": "Hemingway",
          "birth_year": 1899
        }
      },
      {
        "genre": "Science",
        "title": "Mathematical Principles of Natural Philosophy",
        "image": "https://images.unsplash.com/photo-1503293962593-47247718a17a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "year": 1687
      },
      {
        "title": "Gulliver’s Travels",
        "year": 1726,
        "image": "https://images.unsplash.com/photo-1529029411565-e04366ee3cc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "genre": "Novel"
      }
    ],
    "totalPages": 3,
    "pageNumber": 1,
    "error": null,
    "writeFields": [
      "author_id","year","id","genre"
    ],
    "fieldScheme": [
      [
        "author_id.birth_year",
        1295819
      ],
      [
        "author_id.books_ids.genre",
        1295858
      ],
      [
        "author_id.books_ids.title",
        1295858
      ],
      [
        "author_id.books_ids.year",
        1295858
      ],
      [
        "author_id.country",
        1295819
      ],
      [
        "author_id.first_name",
        1295819
      ],
      [
        "author_id.last_name",
        1295819
      ],
      [
        "genre",
        1295858
      ],
      [
        "title",
        1295858
      ],
      [
        "year",
        1295858
      ]
    ],
    "structures": {
      "1295819": {
        "networkID": 2621,
        "id": 1295819,
        "dateCreated": "2020-03-25T10:28:14Z",
        "hidden": false,
        "dateHidden": null,
        "name": "Authors",
        "sysName": "Authors",
        "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"birth_year\",\"name\":\"Year of birth\",\"dataType\":\"number\",\"id\":\"23361585132128552\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"last_name\",\"name\":\"Last name\",\"dataType\":\"string\",\"id\":\"54861585132109303\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"first_name\",\"name\":\"First name\",\"dataType\":\"string\",\"id\":\"56761585132098323\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"books_ids\",\"name\":\"Books\",\"dataType\":\"arrayLink\",\"id\":\"92841585132143841\",\"link\":\"Books\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true},{\"sysName\":\"country\",\"name\":\"Country\",\"dataType\":\"string\",\"id\":\"96371585132109899\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false}]",
        "jsonGroupSettings": null,
        //"jsonViewIdSettings": "[{\"sysName\":\"first_name\"},{\"sysName\":\"last_name\"}]",
        "jsonSettings": null,
        "jsonNativeIndexSettings": null,
        "indexEnabled": false,
        "lastIndexUpdate": 0,
        "indexName": "",
        "dateChanged": "2020-03-25T10:32:54Z",
        "createBy": 3476,
        "changedBy": 3476,
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
          "formatOptions": null,
          "linkType": false,
          "typeVariable": {},
          "indexExists": false,
          "json": false,
          "linkOrArrayLinkType": false,
          "arrayLink": false
        },
        "folderId": null
      },
      "1295858": {
        "networkID": 2621,
        "id": 1295858,
        "dateCreated": "2020-03-25T10:22:06Z",
        "hidden": false,
        "dateHidden": null,
        "name": "Books",
        "sysName": "Books",
        "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"date\",\"name\":\"date\",\"dataType\":\"date\",\"id\":\"17781586365675109\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"title\",\"name\":\"Title\",\"dataType\":\"string\",\"id\":\"24751585132012036\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"image\",\"name\":\"image\",\"dataType\":\"file\",\"id\":\"59701594730297293\",\"link\":\"\",\"group\":\"1585332461783\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"author_id\",\"name\":\"Author\",\"dataType\":\"link\",\"id\":\"81201585132056810\",\"link\":\"Authors\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"year\",\"name\":\"Year\",\"dataType\":\"number\",\"id\":\"81761585132035625\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"datedql\",\"name\":\"date\",\"dataType\":\"date\",\"id\":\"83881587302273838\",\"link\":\"\",\"group\":\"1585332461783\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"boolean\",\"name\":\"\",\"dataType\":\"boolean\",\"id\":\"85921587303259528\",\"link\":\"\",\"group\":\"1585332461783\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"genre\",\"name\":\"Genre\",\"dataType\":\"string\",\"id\":\"89311585132044726\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"approved\",\"name\":\"approved\",\"dataType\":\"boolean\",\"id\":\"98821586526700880\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{}}]",
        "jsonGroupSettings": "[{\"id\":1585332461783,\"name\":\"Details\",\"order\":0}]",
        //"jsonViewIdSettings": "[{\"sysName\":\"title\"},{\"sysName\":\"year\"}]",
        "jsonSettings": null,
        "jsonNativeIndexSettings": null,
        "indexEnabled": true,
        "lastIndexUpdate": 0,
        "indexName": "",
        "dateChanged": "2020-07-14T12:38:30Z",
        "createBy": 3476,
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
          "formatOptions": null,
          "linkType": false,
          "typeVariable": {},
          "indexExists": false,
          "json": false,
          "linkOrArrayLinkType": false,
          "arrayLink": false
        },
        "folderId": null
      }
    }
  }

  let authExample ={
    isAuth: true,
    role: "admin",
    token: "a256c0c6-6aa1-4706-afad-521d0d37e3f3",
    user: "pavel@directial.com"
  }

  let exampleForm =
  {
    "sl": "FPStest",
    "formName": "Submit the form",
    "formDesc": 'A form with several fields, including text fields, sliders, radios, selects The result can be processed syncronically.',
    "formButton": null,
    "placeholder": "false",
    "maxWidth": 500,
    "data": [
      {
        //"arrayLink": "option1,option2",
        "range": "{\"firstValue\":40,\"secondValue\":90}",
        "link": "option2",
        //"radio": "option1",
        "radio": "{\"value\":\"option1\"}",
        "boolean": true,
        "checkbox": "{\"option2\":true}",
        //"textarea": "Crime and Punishment",
      }
    ],
    "formButtonResubmit": null,
    "params": {
      // "auth": {
      //   "isPerson": true,
      //   "userIdField": "textarea"
      // },
      "edit": true,
      "result": {
        "resultTitleField": null,
        "resultMessageField": null,
        "isSuccessField": null
      },
      "fields": {
        "arrayLink": {
          "include": true,
          "hidden": false,
          "description": 'Field description',
          "required": false,
          "isTextarea": false,
          "textareaRows": 4,
          "defaultValue": "",
          "isPositive": false,
          "quickSearch": true,
          "allowAddLinks": false,
          "dateTimeOn": true,
          "searchData": [{ "key": "option1", "value": "Option 1" }, { "key": "option2", "value": "Option 2" }],
          "isValid": true,
          "weight": 2,
          "jsonDisplay": "default",
          "range": {
            "min": 0,
            "max": 100,
            "step": 1,
            "unitName": ""
          }
        },
        "boolean": {
          "include": true,
          "hidden": false,
          "required": true,
          "isTextarea": false,
          "textareaRows": 4,
          "defaultValue": "",
          "isPositive": false,
          "quickSearch": true,
          "allowAddLinks": false,
          "dateTimeOn": true,
          "isValid": true,
          "booleanOptions":['True','False'],
          "weight": 3,
          "jsonDisplay": "default",
          "range": {
            "min": 0,
            "max": 100,
            "step": 1,
            "unitName": ""
          }
        },
        "radio": {
          "include": true,
          "hidden": false,
          "required": false,
          "isTextarea": false,
          "textareaRows": 4,
          //"defaultValue": {"customOption":"2020-10-09T00:00:00.000Z"},
          "isPositive": false,
          "quickSearch": true,
          "allowAddLinks": false,
          "dateTimeOn": true,
          "isValid": true,
          "unitName": '',
          "weight": 1,
          "jsonDisplay": "radioStation", // default, range, slider, radioStation, checkboxGroup
          "customOption": "true",
          "customOptionLabel": "My option",
          "customOptionType": "datetime", //date, datetime, string, number, email, decimal, textarea, 
          "customOptionPlaceholder": "Describe your option",
          "multipleChoice": [
            { "value": 'option1', "label": 'Option 1'},
            { "value": 'option2', "label": 'Option 2'},
            { "value": 'option3', "label": 'Option 3'},
            { "value": 'option4', "label": 'Option 4'},
          ],
          "range": {
            "min": 0,
            "max": 100,
            "step": 1,
            "unitName": ""
          }
        },
        "checkbox": {
          "include": true,
          "hidden": false,
          "required": false,
          "isTextarea": false,
          "textareaRows": 4,
          "defaultValue": "",
          "isPositive": false,
          "quickSearch": true,
          "allowAddLinks": false,
          "dateTimeOn": true,
          "isValid": true,
          "weight": 1,
          "jsonDisplay": "checkboxGroup", // default, range, slider, radioStation, checkboxGroup
          "customOption": false,
          "customOptionLabel": "My option",
          "customOptionType": "textarea", //date, datetime, string, number, email, decimal, textarea
          "customOptionPlaceholder": "Describe your option",
          "multipleChoice": [
            { "value": 'option1', "label": 'Option 1'},
            { "value": 'option2', "label": 'Option 2'},
          ],
          "range": {
            "min": 0,
            "max": 100,
            "step": 1,
          }
        },
        "link": {
          "include": true,
          "hidden": false,
          "searchData": [{ "key": "option1", "value": "Option 1" }, { "key": "option2", "value": "Option 2" }],
          "required": false,
          "isTextarea": false,
          "textareaRows": 4,
          "defaultValue": "",
          "isPositive": false,
          "quickSearch": true,
          "allowAddLinks": false,
          "dateTimeOn": true,
          "isValid": true,
          "weight": 3,
          "jsonDisplay": "default",
          "range": {
            "min": 0,
            "max": 100,
            "step": 1,
          }
        },
        "range": {
          "include": true,
          "hidden": false,
          "required": false,
          "isTextarea": false,
          "textareaRows": 4,
          "defaultValue": { firstValue: 10, secondValue: 40 },
          "isPositive": false,
          "quickSearch": true,
          "allowAddLinks": false,
          "dateTimeOn": true,
          "isValid": true,
          "unitName": " %",
          "weight": 0,
          "jsonDisplay": "range",
          "range": {
            "min": 0,
            "max": 146,
            "step": 1
          }
        },
        "slider1": {
          "include": true,
          "hidden": false,
          "required": false,
          "isTextarea": false,
          "textareaRows": 4,
          //"defaultValue": { firstValue: 20 },
          "isPositive": false,
          "quickSearch": true,
          "allowAddLinks": false,
          "dateTimeOn": true,
          "isValid": true,
          "weight": 0,
          "unitName": " $",
          "jsonDisplay": "slider",
          "range": {
            "min": 0,
            "max": 100,
            "step": 10
          }
        },
        "textarea": {
          "include": true,
          "hidden": false,
          "unitName": '$',
          "required": false,
          "isTextarea": true,
          "textareaRows": 4,
          "defaultValue": 124,
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
        }
      }
    },
    "fileds": [
      {
        "sysName": "arrayLink",
        "name": "Choose the list",
        "dataType": "arrayLink",
        "id": "98971592207319616",
        "link": "CountriesISO",
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
        "json": false,
        "linkOrArrayLinkType": true,
        "linkType": false,
        "arrayLink": true,
        "indexExists": false,
        "typeVariable": {}
      },
      {
        "sysName": "boolean",
        "name": "Yes or No",
        "dataType": "boolean",
        "id": "24111592207305471",
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
        "json": false,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "indexExists": false,
        "typeVariable": {}
      },
      {
        "sysName": "radio",
        "name": "Radio station",
        "dataType": "json",
        "id": "97721592207344049",
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
        "json": false,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "indexExists": false,
        "typeVariable": {}
      },
      {
        "sysName": "checkbox",
        "name": "Checkboxes group",
        "dataType": "json",
        "id": "9772159220734404",
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
        "json": false,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "indexExists": false,
        "typeVariable": {}
      },
      {
        "sysName": "link",
        "name": "Choose something",
        "dataType": "link",
        "id": "53881592207319107",
        "link": "CountriesISO",
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
        "json": false,
        "linkOrArrayLinkType": true,
        "linkType": true,
        "arrayLink": false,
        "indexExists": false,
        "typeVariable": {}
      },
      {
        "sysName": "range",
        "name": "Range",
        "dataType": "json",
        "id": "84271593795280716",
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
        "format": null,
        "formatOptions": null,
        "json": true,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "indexExists": false,
        "typeVariable": {}
      },
      {
        "sysName": "slider1",
        "name": "Slide",
        "dataType": "json",
        "id": "83631593795280077",
        "link": "",
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
        "formatOptions": null,
        "json": true,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "indexExists": false,
        "typeVariable": {}
      },
      {
        "sysName": "textarea",
        "name": "Price",
        "dataType": "number",
        "id": "97731592207240400",
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
        "json": false,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "indexExists": false,
        "typeVariable": {}
      }
    ],
    "error": null,
    "isSuccessWrite": false,
    "response": null
  }

  let exampleFormHH = {
    "sl": "content",
    "pageSize": "100",
    "headerField": null,
    "params": {
      "cardListLayout": "grid",
      "cardHeaderComment": "title",
      "cardBodyText": "description",
      "cardImage": false,
      "cardImageField": "",
      "cardImageType": "none",
      "cardImageSize": 100,
      "objectView": {},
      "isDisplayID": false
    },
    "tableTitle": "Library",
    "headers": [
      {
        "sysName": "challenges",
        "dataType": "arrayLink",
        "name": "challenges",
        "id": "99001597665165633",
        "link": "challenge_settings",
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
        "json": false,
        "typeVariable": {},
        "linkOrArrayLinkType": true,
        "arrayLink": true,
        "indexExists": false,
        "linkType": false
      },
      {
        "sysName": "company",
        "dataType": "link",
        "name": "company",
        "id": "30421599129451432",
        "link": "company",
        "group": "0",
        "tags": "",
        "indexing": true,
        "ordering": false,
        "description": null,
        "weight": null,
        "order": 12,
        "linkIndexFieldSysName": [
          "id",
          "challenges"
        ],
        "defaultValue": "",
        "constraints": null,
        "synthetic": false,
        "format": null,
        "formatOptions": null,
        "json": false,
        "typeVariable": {},
        "linkOrArrayLinkType": true,
        "arrayLink": false,
        "indexExists": true,
        "linkType": true
      },
      {
        "sysName": "custom_banner_file",
        "dataType": "file",
        "name": "custom_banner_file",
        "id": "87371597665215125",
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
        "json": false,
        "typeVariable": {},
        "linkOrArrayLinkType": false,
        "arrayLink": false,
        "indexExists": false,
        "linkType": false
      },
      {
        "sysName": "dayNo",
        "dataType": "number",
        "name": "dayNo",
        "id": "53291597665134239",
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
        "json": false,
        "typeVariable": {},
        "linkOrArrayLinkType": false,
        "arrayLink": false,
        "indexExists": false,
        "linkType": false
      },
      {
        "sysName": "description",
        "dataType": "string",
        "name": "description",
        "id": "95701597665147406",
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
        "json": false,
        "typeVariable": {},
        "linkOrArrayLinkType": false,
        "arrayLink": false,
        "indexExists": false,
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
        "formatOptions": null,
        "json": false,
        "typeVariable": {},
        "linkOrArrayLinkType": false,
        "arrayLink": false,
        "indexExists": false,
        "linkType": false
      },
      {
        "sysName": "is_deleted",
        "dataType": "boolean",
        "name": "is_deleted",
        "id": "35501599123120172",
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
        "formatOptions": null,
        "json": false,
        "typeVariable": {},
        "linkOrArrayLinkType": false,
        "arrayLink": false,
        "indexExists": false,
        "linkType": false
      },
      {
        "sysName": "next_content",
        "dataType": "link",
        "name": "next_content",
        "id": "76961599128905144",
        "link": "Library",
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
        "formatOptions": null,
        "json": false,
        "typeVariable": {},
        "linkOrArrayLinkType": true,
        "arrayLink": false,
        "indexExists": false,
        "linkType": true
      },
      {
        "sysName": "readmore_url",
        "dataType": "string",
        "name": "readmore_url",
        "id": "21221597665278483",
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
        "json": false,
        "typeVariable": {},
        "linkOrArrayLinkType": false,
        "arrayLink": false,
        "indexExists": false,
        "linkType": false
      },
      {
        "sysName": "title",
        "dataType": "string",
        "name": "title",
        "id": "97181597665312290",
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
        "json": false,
        "typeVariable": {},
        "linkOrArrayLinkType": false,
        "arrayLink": false,
        "indexExists": false,
        "linkType": false
      }
    ],
    "data": [
      {
        "readmore_url": "https://www.notion.so/2-14f75836aeff43119c3e7c595fb79fe9 ",
        "description": "Приступаем к решению поставленной задачи.",
        "company": "перекресток",
        "id": "b284d02a-0881-4dca-bd25-7a2fcd5294fb",
        "title": "🔝 День 11. Ищем решение.",
        "challenges": [
          "374_-1001296439134",
          "374_-1001490905679"
        ],
        "dayNo": 10,
        "audio_file": "",
        "is_deleted": "",
        "next_content": "",
        "video_file": ""
      },
      {
        "readmore_url": "https://www.notion.so/2-8f1bb0fe6a17452595d162965214156f ",
        "description": "Ищем причину возникновения проблемной ситуации.",
        "company": "перекресток",
        "id": "00d4fb62-5298-42ae-afe2-dd04c0fdc3ec",
        "title": "🐘 День 10. Дробим проблему.",
        "challenges": [
          "374_-1001296439134",
          "374_-1001490905679"
        ],
        "dayNo": 9,
        "audio_file": "",
        "is_deleted": "",
        "next_content": "",
        "video_file": ""
      },
      {
        "readmore_url": "https://www.notion.so/2-e9e9888874c0471f9eda1af02632c401",
        "description": "Выясняем отношение сотрудников к проблемной ситуации",
        "company": "перекресток",
        "id": "1eb026c3-455b-4b64-bfce-a27231f54e03",
        "title": "🧐 День 9. Ищем другую точку зрения.",
        "challenges": [
          "374_-1001296439134",
          "374_-1001490905679"
        ],
        "dayNo": 8,
        "audio_file": "",
        "is_deleted": "",
        "next_content": "",
        "video_file": ""
      },
      {
        "readmore_url": "https://www.notion.so/2-7638f6ec55ef47998629a965b91aea9d",
        "description": "Что больше всего влияет на сервис?",
        "company": "перекресток",
        "id": "27dcfdcb-5bd2-47e7-8023-8ae543cfc244",
        "title": "🔎 День 8. Анализируем проблемы.",
        "challenges": [
          "374_-1001296439134",
          "374_-1001490905679"
        ],
        "dayNo": 7,
        "audio_file": "",
        "is_deleted": "",
        "next_content": "",
        "video_file": ""
      },
      {
        "readmore_url": "https://www.notion.so/1-4c5950f41d674844b42832cab6af72a1 ",
        "description": "Подводим итоги недели и систематизируем знания.",
        "company": "перекресток",
        "id": "56ca3318-412a-4591-b603-2b347709b165",
        "title": "⚙️ День 6. Финальное задание",
        "challenges": [
          "374_-1001296439134",
          "374_-1001490905679"
        ],
        "dayNo": 6,
        "audio_file": "",
        "is_deleted": "",
        "next_content": "",
        "video_file": ""
      },
      {
        "readmore_url": "https://www.notion.so/1-834ad6e8c57e46f5b37258379e929a8e",
        "description": "Наблюдаем за тем, что вызывает дискомфорт",
        "next_content": {
          "readmore_url": "https://www.notion.so/1-4c5950f41d674844b42832cab6af72a1 ",
          "description": "Подводим итоги недели и систематизируем знания.",
          "id": "56ca3318-412a-4591-b603-2b347709b165",
          "title": "⚙️ День 6. Финальное задание",
          "dayNo": 6
        },
        "company": "перекресток",
        "id": "a927beef-da74-4a33-9ec3-326cab4ba942",
        "title": "🔊 День 5. Анализируем дискомфорт",
        "challenges": [
          "374_-1001296439134",
          "374_-1001490905679"
        ],
        "dayNo": 5,
        "audio_file": "",
        "is_deleted": "",
        "video_file": ""
      },
      {
        "readmore_url": "https://www.notion.so/1-6cbbf2df921345598802979d343231bd",
        "description": "Исследуем потребности и мотивацию сотрудников.",
        "next_content": {
          "readmore_url": "https://www.notion.so/1-834ad6e8c57e46f5b37258379e929a8e",
          "description": "Наблюдаем за тем, что вызывает дискомфорт",
          "next_content": "56ca3318-412a-4591-b603-2b347709b165",
          "id": "a927beef-da74-4a33-9ec3-326cab4ba942",
          "title": "🔊 День 5. Анализируем дискомфорт",
          "dayNo": 5
        },
        "company": "перекресток",
        "id": "c83a5d33-635c-4bd2-aced-c11805c756d1",
        "title": "👩🧔 День 4. Оцениваем потребности сотрудников",
        "challenges": [
          "374_-1001296439134",
          "374_-1001490905679"
        ],
        "dayNo": 4,
        "audio_file": "",
        "is_deleted": "",
        "video_file": ""
      },
      {
        "readmore_url": "https://www.notion.so/1-e4feec0b46444f58a9ccaa9a103c8f46",
        "description": "День разговоров с сотрудниками и оценки их суждений",
        "next_content": {
          "readmore_url": "https://www.notion.so/1-6cbbf2df921345598802979d343231bd",
          "description": "Исследуем потребности и мотивацию сотрудников.",
          "next_content": "a927beef-da74-4a33-9ec3-326cab4ba942",
          "id": "c83a5d33-635c-4bd2-aced-c11805c756d1",
          "title": "👩🧔 День 4. Оцениваем потребности сотрудников",
          "dayNo": 4
        },
        "company": "перекресток",
        "id": "a7f656c5-8b07-4575-b9ef-f50ddd3ba5ce",
        "title": "👩‍💼 День 3. Проводим опрос по процессам",
        "challenges": [
          "374_-1001296439134",
          "374_-1001490905679"
        ],
        "dayNo": 3,
        "audio_file": "",
        "is_deleted": "",
        "video_file": ""
      },
      {
        "readmore_url": "https://www.notion.so/1-6e1f33889efd4889aee82ef25cd8db64",
        "description": "Анализиреум свое настроение и настроение сотрудников. ",
        "next_content": {
          "readmore_url": "https://www.notion.so/1-e4feec0b46444f58a9ccaa9a103c8f46",
          "description": "День разговоров с сотрудниками и оценки их суждений",
          "next_content": "c83a5d33-635c-4bd2-aced-c11805c756d1",
          "id": "a7f656c5-8b07-4575-b9ef-f50ddd3ba5ce",
          "title": "👩‍💼 День 3. Проводим опрос по процессам",
          "dayNo": 3
        },
        "company": "перекресток",
        "id": "ca5f8a5b-37e8-4228-9fa5-4f6be16c4e59",
        "title": "😎 День 2. Наблюдаем за коммуникациями",
        "challenges": [
          "374_-1001296439134",
          "374_-1001490905679"
        ],
        "dayNo": 2,
        "audio_file": "",
        "is_deleted": "",
        "video_file": ""
      },
      {
        "readmore_url": "https://www.notion.so/1-0d3d48c5f279425d8a8e2e09ab1dd4c9",
        "description": "Погружаемся в пространство, которое окружает подчиненных.",
        "next_content": {
          "readmore_url": "https://www.notion.so/1-6e1f33889efd4889aee82ef25cd8db64",
          "description": "Анализиреум свое настроение и настроение сотрудников. ",
          "next_content": "a7f656c5-8b07-4575-b9ef-f50ddd3ba5ce",
          "id": "ca5f8a5b-37e8-4228-9fa5-4f6be16c4e59",
          "title": "😎 День 2. Наблюдаем за коммуникациями",
          "dayNo": 2
        },
        "company": "перекресток",
        "id": "1db634e8-706c-4207-9b94-4cd6dddf6714",
        "title": "☕️ День 1. Наблюдаем за пространством.",
        "challenges": [
          "374_-1001296439134",
          "374_-1001490905679"
        ],
        "dayNo": 1,
        "audio_file": "",
        "is_deleted": "",
        "video_file": ""
      }
    ],
    "totalPages": 1,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [
      [
        "challenges",
        1311798
      ],
      [
        "company",
        1311798
      ],
      [
        "custom_banner_file",
        1311798
      ],
      [
        "dayNo",
        1311798
      ],
      [
        "description",
        1311798
      ],
      [
        "id",
        1311798
      ],
      [
        "is_deleted",
        1311798
      ],
      [
        "next_content.dayNo",
        1311798
      ],
      [
        "next_content.description",
        1311798
      ],
      [
        "next_content.id",
        1311798
      ],
      [
        "next_content.next_content",
        1311798
      ],
      [
        "next_content.readmore_url",
        1311798
      ],
      [
        "next_content.title",
        1311798
      ],
      [
        "readmore_url",
        1311798
      ],
      [
        "title",
        1311798
      ]
    ],
    "writeFields": [
      "audio_file",
      "challenges",
      "company",
      "dayNo",
      "description",
      "id",
      "is_deleted",
      "next_content",
      "readmore_url",
      "title",
      "video_file"
    ],
    "structures": {
      "1311798": {
        "networkID": 2894,
        "sysName": "Library",
        "name": "Content_lib",
        "id": 1311798,
        "dateCreated": "2020-08-17T11:51:56Z",
        "hidden": false,
        "dateHidden": null,
        "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"readmore_url\",\"dataType\":\"string\",\"name\":\"readmore_url\",\"id\":\"21221597665278483\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"company\",\"dataType\":\"link\",\"name\":\"company\",\"id\":\"30421599129451432\",\"link\":\"company\",\"group\":\"0\",\"tags\":\"\",\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[\"id\",\"challenges\"],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":true},{\"sysName\":\"is_deleted\",\"dataType\":\"boolean\",\"name\":\"is_deleted\",\"id\":\"35501599123120172\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"video_file\",\"dataType\":\"file\",\"name\":\"video_file\",\"id\":\"52451597665260697\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"dayNo\",\"dataType\":\"number\",\"name\":\"dayNo\",\"id\":\"53291597665134239\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"forced_next_delivery\",\"dataType\":\"boolean\",\"name\":\"forced_next_delivery_flag\",\"id\":\"55211597665346202\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"next_content\",\"dataType\":\"link\",\"name\":\"next_content\",\"id\":\"76961599128905144\",\"link\":\"Library\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"audio_file\",\"dataType\":\"file\",\"name\":\"audio_file\",\"id\":\"78141597665240278\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"custom_banner_file\",\"dataType\":\"file\",\"name\":\"custom_banner_file\",\"id\":\"87371597665215125\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"description\",\"dataType\":\"string\",\"name\":\"description\",\"id\":\"95701597665147406\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"title\",\"dataType\":\"string\",\"name\":\"title\",\"id\":\"97181597665312290\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"challenges\",\"dataType\":\"arrayLink\",\"name\":\"challenges\",\"id\":\"99001597665165633\",\"link\":\"challenge_settings\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"json\":false,\"indexExists\":false}]",
        "jsonGroupSettings": null,
        "jsonViewIdSettings": "[{\"sysName\":\"dayNo\"},{\"sysName\":\"title\"}]",
        "jsonSettings": null,
        "jsonNativeIndexSettings": null,
        "indexEnabled": true,
        "lastIndexUpdate": 0,
        "indexName": "",
        "dateChanged": "2020-09-07T18:31:00Z",
        "createBy": 3552,
        "changedBy": 3552,
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
          "formatOptions": null,
          "json": false,
          "typeVariable": {},
          "linkOrArrayLinkType": false,
          "arrayLink": false,
          "indexExists": false,
          "linkType": false
        },
        "objectIDSysName": "id",
        "folderId": 33585782
      }
    },
    "isSuccessWrite": false,
    "writeError": null,
    "writeResponse": null
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
              <FpsForm data={exampleForm} auth={authExample}/>
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
              />
              <SignUp
                header='Sign up'
                width={400}
                google
              />

            </Route>
            <Route exact path="/cards">
              <FpsCards data={Huyak} />
              <FpsCards data={exampleTable} />
              {/* <br /><br />
              <FpsCards data={exampleTable2} /> */}
            </Route>
            <Route exact path="/theme">
              <h1>Theme management</h1>
              <FpsTheme
                onChange={value => { setCurrentTheme(value) }}
                defaultValue={currentTheme}
                themes={['classic', 'white', 'tiffany', 'darkMint', 'warmNight', 'hacker', 'raspberry']} />
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