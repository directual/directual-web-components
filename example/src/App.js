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

  let cardActions = {
    "sl": "adminWebUsers",
    "pageSize": "10",
    "headerField": null,
    "params": {
      "data": {
        "readFields": [
          {
            "fieldSysName": "22_functions",
            "fetch": [
              {
                "fieldSysName": "name",
                "condition": null,
                "fetch": []
              }
            ],
            "sysName": "22_functions",
            "name": "Функции для графика 2/2",
            "dataType": "arrayLink",
            "format": "",
            "formatOptions": {},
            "link": "functions22"
          },
          {
            "fieldSysName": "52_functions",
            "fetch": [
              {
                "fieldSysName": "name",
                "condition": null,
                "fetch": []
              }
            ],
            "sysName": "52_functions",
            "name": "Функции для графика 5/2",
            "dataType": "arrayLink",
            "format": "",
            "formatOptions": {},
            "link": "functions52"
          },
          {
            "fieldSysName": "TG_username",
            "fetch": [],
            "sysName": "TG_username",
            "name": "Telegram",
            "dataType": "string",
            "format": "",
            "formatOptions": {},
            "link": ""
          },
          {
            "fieldSysName": "city",
            "fetch": [
              {
                "fieldSysName": "name",
                "condition": null,
                "fetch": []
              }
            ],
            "sysName": "city",
            "name": "Город",
            "dataType": "link",
            "format": "",
            "formatOptions": {},
            "link": "cities"
          },
          {
            "fieldSysName": "employer_city_id",
            "fetch": [
              {
                "fieldSysName": "name",
                "condition": null,
                "fetch": []
              }
            ],
            "sysName": "employer_city_id",
            "name": "Город(а) компании",
            "dataType": "arrayLink",
            "format": "",
            "formatOptions": {},
            "link": "cities"
          },
          {
            "fieldSysName": "employer_description",
            "fetch": [],
            "sysName": "employer_description",
            "name": "Описание компании",
            "dataType": "string",
            "format": "markdown",
            "formatOptions": {},
            "link": ""
          },
          {
            "fieldSysName": "employer_name",
            "fetch": [],
            "sysName": "employer_name",
            "name": "Название компании",
            "dataType": "string",
            "format": "",
            "formatOptions": {},
            "link": ""
          },
          {
            "fieldSysName": "employer_website",
            "fetch": [],
            "sysName": "employer_website",
            "name": "Сайт компании",
            "dataType": "string",
            "format": "webLink",
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
            "fieldSysName": "image",
            "fetch": [],
            "sysName": "image",
            "name": "image",
            "dataType": "file",
            "format": "",
            "formatOptions": {},
            "link": ""
          },
          {
            "fieldSysName": "lastName",
            "fetch": [],
            "sysName": "lastName",
            "name": "Фамлия",
            "dataType": "string",
            "format": "",
            "formatOptions": {},
            "link": ""
          },
          {
            "fieldSysName": "phone",
            "fetch": [],
            "sysName": "phone",
            "name": "Телефон",
            "dataType": "string",
            "format": "phone",
            "formatOptions": {},
            "link": ""
          },
          {
            "fieldSysName": "role",
            "fetch": [],
            "sysName": "role",
            "name": "Роли",
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
            "fieldSysName": "type",
            "fetch": [
              {
                "fieldSysName": "id",
                "condition": null,
                "fetch": []
              },
              {
                "fieldSysName": "type",
                "condition": null,
                "fetch": []
              }
            ],
            "sysName": "type",
            "name": "График",
            "dataType": "boolean",
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
            "link": ""
          }
        ],
        "writeFields": [
          {
            "fieldSysName": "employer_description",
            "fetch": [],
            "sysName": "employer_description",
            "name": "Описание компании",
            "dataType": "string",
            "format": "markdown",
            "formatOptions": {},
            "link": ""
          },
          {
            "fieldSysName": "employer_name",
            "fetch": [],
            "sysName": "employer_name",
            "name": "Название компании",
            "dataType": "string",
            "format": "",
            "formatOptions": {},
            "link": ""
          },
          {
            "fieldSysName": "employer_website",
            "fetch": [],
            "sysName": "employer_website",
            "name": "Сайт компании",
            "dataType": "string",
            "format": "webLink",
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
            "fieldSysName": "lastName",
            "fetch": [],
            "sysName": "lastName",
            "name": "Фамлия",
            "dataType": "string",
            "format": "",
            "formatOptions": {},
            "link": ""
          },
          {
            "fieldSysName": "role",
            "fetch": [],
            "sysName": "role",
            "name": "Роли",
            "dataType": "string",
            "format": "",
            "formatOptions": {},
            "link": ""
          }
        ],
        "fields": {
          "22_functions": {
            "id": "22_functions",
            "content": "Функции для графика 2/2",
            "type": "field",
            "dataType": "arrayLink",
            "format": "",
            "formatOptions": {},
            "read": true,
            "link": "functions22",
            "actions": []
          },
          "52_functions": {
            "id": "52_functions",
            "content": "Функции для графика 5/2",
            "type": "field",
            "dataType": "arrayLink",
            "format": "",
            "formatOptions": {},
            "read": true,
            "link": "functions52",
            "actions": []
          },
          "TG_username": {
            "id": "TG_username",
            "content": "Telegram",
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
            "dataType": "link",
            "format": "",
            "formatOptions": {},
            "read": true,
            "link": "cities",
            "actions": []
          },
          "employer_city_id": {
            "id": "employer_city_id",
            "content": "Город(а) компании",
            "type": "field",
            "dataType": "arrayLink",
            "format": "",
            "formatOptions": {},
            "read": true,
            "link": "cities",
            "actions": []
          },
          "employer_description": {
            "id": "employer_description",
            "content": "Описание компании",
            "type": "field",
            "dataType": "string",
            "format": "markdown",
            "formatOptions": {},
            "write": true,
            "read": true,
            "link": "",
            "actions": []
          },
          "employer_name": {
            "id": "employer_name",
            "content": "Название компании",
            "type": "field",
            "dataType": "string",
            "format": "",
            "formatOptions": {},
            "write": true,
            "read": true,
            "link": "",
            "actions": []
          },
          "employer_website": {
            "id": "employer_website",
            "content": "Сайт компании",
            "type": "field",
            "dataType": "string",
            "format": "webLink",
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
            "write": true,
            "read": true,
            "link": "",
            "actions": []
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
            "link": "",
            "actions": []
          },
          "image": {
            "id": "image",
            "content": "image",
            "type": "field",
            "dataType": "file",
            "format": "",
            "formatOptions": {},
            "read": true,
            "link": "",
            "actions": []
          },
          "lastName": {
            "id": "lastName",
            "content": "Фамлия",
            "type": "field",
            "dataType": "string",
            "format": "",
            "formatOptions": {},
            "write": true,
            "read": true,
            "link": "",
            "actions": []
          },
          "phone": {
            "id": "phone",
            "content": "Телефон",
            "type": "field",
            "dataType": "string",
            "format": "phone",
            "formatOptions": {},
            "read": true,
            "link": "",
            "actions": []
          },
          "role": {
            "id": "role",
            "content": "Роли",
            "type": "field",
            "dataType": "string",
            "format": "",
            "formatOptions": {},
            "write": true,
            "read": true,
            "link": "",
            "actions": []
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
            "read": true,
            "link": "",
            "actions": []
          },
          "type": {
            "id": "type",
            "content": "График",
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
              "booleanOptions": [
                "2 через 2",
                "5 через 2"
              ],
              "customOptionPlaceholder": "Describe your option",
              "range": {},
              "customOptionType": "textarea"
            },
            "read": true,
            "link": "",
            "actions": []
          }
        },
        "fieldParams": {
          "firstName": {
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
          "image": {
            "include": true,
            "fileImageFormat": "circle",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": false,
            "fileImage": true
          },
          "lastName": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": false
          },
          "phone": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": false
          },
          "role": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": false,
            "descriptionFlag": true,
            "description": "Подсказка: admin,employer,candidate — через запятую без пробела. Админ, работодатель и кандидат соответственно."
          },
          "type": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": false
          },
          "TG_user_id": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": false
          },
          "TG_username": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": false
          },
          "employer_city_id": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": false
          },
          "employer_name": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": false
          },
          "employer_website": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": false
          },
          "22_functions": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": false
          },
          "52_functions": {
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
          "salary_raw": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": false
          },
          "employer_description": {
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
            "title": "Общая информация",
            "fieldIds": [
              "image",
              "firstName",
              "lastName",
              "role",
              "id",
              "phone",
              "TG_username",
              "city"
            ]
          },
          "88371609664858032": {
            "id": "88371609664858032",
            "title": "Кандидат",
            "fieldIds": [
              "type",
              "22_functions",
              "52_functions",
              "salary_raw"
            ]
          },
          "21561609665108980": {
            "id": "21561609665108980",
            "title": "Работодатель",
            "fieldIds": [
              "employer_name",
              "employer_website",
              "employer_description",
              "employer_city_id"
            ]
          }
        },
        "columnOrder": [
          "tab-1",
          "88371609664858032",
          "21561609665108980"
        ],
        "actions": []
      },
      "fields": {
        "firstName": {
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
        "image": {
          "include": true,
          "fileImageFormat": "circle",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false,
          "fileImage": true
        },
        "lastName": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false
        },
        "phone": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false
        },
        "role": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false,
          "descriptionFlag": true,
          "description": "Подсказка: admin,employer,candidate — через запятую без пробела. Админ, работодатель и кандидат соответственно."
        },
        "type": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false
        },
        "TG_user_id": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false
        },
        "TG_username": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false
        },
        "employer_city_id": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false
        },
        "employer_name": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false
        },
        "employer_website": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false
        },
        "22_functions": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false
        },
        "52_functions": {
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
        "salary_raw": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false
        },
        "employer_description": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false
        }
      },
      "showCounter": false,
      "counterField": null,
      "counterText": null,
      "cardImage": true,
      "cardImageField": "image",
      "cardImageType": "leftCircle",
      "cardImageSize": 100,
      "cardHeaderComment": "role",
      "cardBodyText": "type"
    },
    "tableTitle": "Все пользователи",
    "actions": null,
    "headers": [
      {
        "sysName": "22_functions",
        "name": "Функции для графика 2/2",
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
        "linkOrArrayLinkType": true,
        "linkType": false,
        "arrayLink": true,
        "indexExists": false,
        "typeVariable": {},
        "json": false
      },
      {
        "sysName": "52_functions",
        "name": "Функции для графика 5/2",
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
        "linkOrArrayLinkType": true,
        "linkType": false,
        "arrayLink": true,
        "indexExists": false,
        "typeVariable": {},
        "json": false
      },
      {
        "sysName": "TG_username",
        "name": "Telegram",
        "dataType": "string",
        "id": "33601607938915585",
        "link": "",
        "group": "1606985920923",
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
        "indexExists": false,
        "typeVariable": {},
        "json": false
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
        "order": 1,
        "linkIndexFieldSysName": [],
        "defaultValue": "",
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
        "json": false
      },
      {
        "sysName": "employer_city_id",
        "name": "Город(а) компании",
        "dataType": "arrayLink",
        "id": "68231607939175436",
        "link": "cities",
        "group": "1607938855954",
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
        "linkOrArrayLinkType": true,
        "linkType": false,
        "arrayLink": true,
        "indexExists": false,
        "typeVariable": {},
        "json": false
      },
      {
        "sysName": "employer_description",
        "name": "Описание компании",
        "dataType": "string",
        "id": "34671609671007166",
        "link": "",
        "group": "1607938855954",
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
        "format": "markdown",
        "formatOptions": null,
        "groupName": null,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "indexExists": false,
        "typeVariable": {},
        "json": false
      },
      {
        "sysName": "employer_name",
        "name": "Название компании",
        "dataType": "string",
        "id": "68021607939162171",
        "link": "",
        "group": "1607938855954",
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
        "json": false
      },
      {
        "sysName": "employer_website",
        "name": "Сайт компании",
        "dataType": "string",
        "id": "89401607939216442",
        "link": "",
        "group": "1607938855954",
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
        "indexExists": false,
        "typeVariable": {},
        "json": false
      },
      {
        "sysName": "firstName",
        "name": "Имя",
        "dataType": "string",
        "id": "4",
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
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "indexExists": false,
        "typeVariable": {},
        "json": false
      },
      {
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
        "indexExists": false,
        "typeVariable": {},
        "json": false
      },
      {
        "sysName": "image",
        "name": "image",
        "dataType": "file",
        "id": "63411607068082205",
        "link": "",
        "group": "1607016878115",
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
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "indexExists": false,
        "typeVariable": {},
        "json": false
      },
      {
        "sysName": "lastName",
        "name": "Фамлия",
        "dataType": "string",
        "id": "3",
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
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "indexExists": false,
        "typeVariable": {},
        "json": false
      },
      {
        "sysName": "phone",
        "name": "Телефон",
        "dataType": "string",
        "id": "9",
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
        "format": "phone",
        "formatOptions": {},
        "groupName": "Contacts",
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "indexExists": false,
        "typeVariable": {},
        "json": false
      },
      {
        "sysName": "role",
        "name": "Роли",
        "dataType": "string",
        "id": "5",
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
        "indexExists": false,
        "typeVariable": {},
        "json": false
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
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "indexExists": false,
        "typeVariable": {},
        "json": true
      },
      {
        "sysName": "type",
        "name": "График",
        "dataType": "boolean",
        "id": "68641607070972375",
        "link": "",
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
        "city": {
          "name": "Москва"
        },
        "role": "admin,candidate,employer",
        "image": "https://api.alfa.directual.com/fileUploaded/vitrina2252/bf8c02c2-d671-4c3c-9551-ab1e9fb94647.jpg",
        "52_functions": [
          {
            "name": "UI/UX дизайн",
            "id": "fdd5dd01-1867-4f2d-a579-4032bc691551"
          },
          {
            "name": "Графический дизайн",
            "id": "02b3892a-9ca7-40e3-bb79-2a4682fe445c"
          },
          {
            "name": "Фотограф",
            "id": "d4e838bd-8e32-4a65-9d08-09ccf5e8956c"
          }
        ],
        "employer_description": "Транснациональная корпорация **Гугол**\n\nГоворят, там бесплатная еда для программистов.\n\n![Google](https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png)\n",
        "salary_raw": "{\"secondValue\":210,\"firstValue\":80}",
        "22_functions": [],
        "lastName": "Ershov",
        "firstName": "Pavel",
        "id": "79151845361",
        "TG_username": "pavelershov",
        "employer_city_id": [
          {
            "name": "Другой город / за пределами РФ",
            "id": "other"
          }
        ],
        "employer_website": "google.com",
        "type": false,
        "employer_name": "Google",
        "phone": "79151845361"
      }
    ],
    "totalPages": 1,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [
      [
        "22_functions.name",
        1330974
      ],
      [
        "52_functions.name",
        1330975
      ],
      [
        "TG_username",
        1330951
      ],
      [
        "city.name",
        1330972
      ],
      [
        "employer_city_id.name",
        1330972
      ],
      [
        "employer_description",
        1330951
      ],
      [
        "employer_name",
        1330951
      ],
      [
        "employer_website",
        1330951
      ],
      [
        "firstName",
        1330951
      ],
      [
        "id",
        1330951
      ],
      [
        "image",
        1330951
      ],
      [
        "lastName",
        1330951
      ],
      [
        "phone",
        1330951
      ],
      [
        "role",
        1330951
      ],
      [
        "salary_raw",
        1330951
      ]
    ],
    "writeFields": [
      "employer_description",
      "employer_name",
      "employer_website",
      "firstName",
      "id",
      "lastName",
      "role"
    ],
    "structures": {
      "1330951": {
        "networkID": 4265,
        "sysName": "WebUser",
        "name": "App users",
        "id": 1330951,
        "dateCreated": "2020-12-25T09:02:32Z",
        "hidden": false,
        "dateHidden": null,
        "jsonObject": "[{\"sysName\":\"isBlocked\",\"name\":\"Block user\",\"dataType\":\"boolean\",\"id\":\"1\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"dateCreated\",\"name\":\"dateCreated\",\"dataType\":\"string\",\"id\":\"10\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"password\",\"name\":\"Password (hash)\",\"dataType\":\"string\",\"id\":\"11\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"id\",\"name\":\"Username (login)\",\"dataType\":\"id\",\"id\":\"12\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"gender\",\"name\":\"Пол\",\"dataType\":\"string\",\"id\":\"2\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"52_functions\",\"name\":\"Функции для графика 5/2\",\"dataType\":\"arrayLink\",\"id\":\"22101607077116998\",\"link\":\"functions52\",\"group\":\"1607016878115\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"lastName\",\"name\":\"Фамлия\",\"dataType\":\"string\",\"id\":\"3\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"TG_username\",\"name\":\"Telegram\",\"dataType\":\"string\",\"id\":\"33601607938915585\",\"link\":\"\",\"group\":\"1606985920923\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"22_functions\",\"name\":\"Функции для графика 2/2\",\"dataType\":\"arrayLink\",\"id\":\"34391607077096514\",\"link\":\"functions22\",\"group\":\"1607016878115\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"employer_description\",\"name\":\"Описание компании\",\"dataType\":\"string\",\"id\":\"34671609671007166\",\"link\":\"\",\"group\":\"1607938855954\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"firstName\",\"name\":\"Имя\",\"dataType\":\"string\",\"id\":\"4\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"salary_text\",\"name\":\"Ожидания по доходу\",\"dataType\":\"string\",\"id\":\"49741607082338411\",\"link\":\"\",\"group\":\"1607016878115\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"role\",\"name\":\"Роли\",\"dataType\":\"string\",\"id\":\"5\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"TG_user_id\",\"name\":\"TG_user\",\"dataType\":\"link\",\"id\":\"55611607016886218\",\"link\":\"TUser\",\"group\":\"1607016878115\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"isAuthorization\",\"name\":\"isAuthorization\",\"dataType\":\"boolean\",\"id\":\"6\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"salary_raw\",\"name\":\"Ожидания по доходу \",\"dataType\":\"json\",\"id\":\"63391607082324656\",\"link\":\"\",\"group\":\"1607016878115\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"rangeSlider\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"unitName\":\"k ₽\",\"booleanOptions\":[\"True\",\"False\"],\"customOptionPlaceholder\":\"Describe your option\",\"range\":{\"max\":300,\"min\":20,\"step\":10},\"customOptionType\":\"textarea\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":true},{\"sysName\":\"image\",\"name\":\"image\",\"dataType\":\"file\",\"id\":\"63411607068082205\",\"link\":\"\",\"group\":\"1607016878115\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"employer_name\",\"name\":\"Название компании\",\"dataType\":\"string\",\"id\":\"68021607939162171\",\"link\":\"\",\"group\":\"1607938855954\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"employer_city_id\",\"name\":\"Город(а) компании\",\"dataType\":\"arrayLink\",\"id\":\"68231607939175436\",\"link\":\"cities\",\"group\":\"1607938855954\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"type\",\"name\":\"График\",\"dataType\":\"boolean\",\"id\":\"68641607070972375\",\"link\":\"\",\"group\":\"1607016878115\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"booleanOptions\":[\"2 через 2\",\"5 через 2\"],\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"dateLastActivity\",\"name\":\"dateLastActivity\",\"dataType\":\"string\",\"id\":\"7\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"email\",\"name\":\"Email\",\"dataType\":\"string\",\"id\":\"8\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"email\",\"formatOptions\":{},\"groupName\":\"Contacts\",\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"city\",\"name\":\"Город\",\"dataType\":\"link\",\"id\":\"80181607081867668\",\"link\":\"cities\",\"group\":\"1606985920923\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"employer_website\",\"name\":\"Сайт компании\",\"dataType\":\"string\",\"id\":\"89401607939216442\",\"link\":\"\",\"group\":\"1607938855954\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"phone\",\"name\":\"Телефон\",\"dataType\":\"string\",\"id\":\"9\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"phone\",\"formatOptions\":{},\"groupName\":\"Contacts\",\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false}]",
        "jsonGroupSettings": "[{\"name\":\"Contacts\",\"id\":1606985920923,\"order\":0},{\"name\":\"Кандидат\",\"id\":1607016878115,\"order\":1},{\"name\":\"Работодатель\",\"id\":1607938855954,\"order\":2}]",
        "jsonViewIdSettings": "[{\"sysName\":\"firstName\"},{\"sysName\":\"lastName\"}]",
        "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
        "jsonNativeIndexSettings": null,
        "indexEnabled": true,
        "lastIndexUpdate": 0,
        "indexName": "",
        "dateChanged": "2021-01-03T10:50:59Z",
        "createBy": 0,
        "changedBy": 1,
        "_settings": null,
        "_nativeIndexSettings": null,
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
          "indexExists": false,
          "typeVariable": {},
          "json": false
        },
        "objectIDSysName": "id",
        "folderId": null
      },
      "1330972": {
        "networkID": 4265,
        "sysName": "cities",
        "name": "Cities",
        "id": 1330972,
        "dateCreated": "2020-09-18T07:42:27Z",
        "hidden": false,
        "dateHidden": null,
        "jsonObject": "[{\"sysName\":\"@who\",\"dataType\":\"string\",\"name\":\"who changed\",\"id\":\"-1\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"@dateCreated\",\"dataType\":\"date\",\"name\":\"date created\",\"id\":\"-2\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"@dateChanged\",\"dataType\":\"date\",\"name\":\"date changed\",\"id\":\"-3\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"name\",\"dataType\":\"string\",\"name\":\"City name\",\"id\":\"64661600414975068\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"json\":false,\"indexExists\":false}]",
        "jsonGroupSettings": "[]",
        "jsonViewIdSettings": "[{\"sysName\":\"name\"}]",
        "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":false,\"lowPriority\":false}",
        "jsonNativeIndexSettings": null,
        "indexEnabled": false,
        "lastIndexUpdate": 0,
        "indexName": "",
        "dateChanged": "2020-09-28T12:47:19Z",
        "createBy": 1,
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
          "formatOptions": null,
          "groupName": null,
          "linkOrArrayLinkType": false,
          "linkType": false,
          "arrayLink": false,
          "indexExists": false,
          "typeVariable": {},
          "json": false
        },
        "objectIDSysName": "id",
        "folderId": 33596509
      },
      "1330974": {
        "networkID": 4265,
        "sysName": "functions22",
        "name": "Функции 22",
        "id": 1330974,
        "dateCreated": "2020-12-04T10:19:23Z",
        "hidden": false,
        "dateHidden": null,
        "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"name\",\"name\":\"Функция\",\"dataType\":\"string\",\"id\":\"83101607077166818\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"isDelete\",\"name\":\"\",\"dataType\":\"boolean\",\"id\":\"96931607077672366\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"@who\",\"name\":\"who changed\",\"dataType\":\"string\",\"id\":\"-1\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"@dateCreated\",\"name\":\"date created\",\"dataType\":\"date\",\"id\":\"-2\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"@dateChanged\",\"name\":\"date changed\",\"dataType\":\"date\",\"id\":\"-3\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false}]",
        "jsonGroupSettings": null,
        "jsonViewIdSettings": "[{\"sysName\":\"name\"}]",
        "jsonSettings": null,
        "jsonNativeIndexSettings": null,
        "indexEnabled": true,
        "lastIndexUpdate": 0,
        "indexName": "",
        "dateChanged": "2020-12-04T10:30:14Z",
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
          "formatOptions": null,
          "groupName": null,
          "linkOrArrayLinkType": false,
          "linkType": false,
          "arrayLink": false,
          "indexExists": false,
          "typeVariable": {},
          "json": false
        },
        "objectIDSysName": "id",
        "folderId": 33596509
      },
      "1330975": {
        "networkID": 4265,
        "sysName": "functions52",
        "name": "Функции 52",
        "id": 1330975,
        "dateCreated": "2020-12-04T10:19:52Z",
        "hidden": false,
        "dateHidden": null,
        "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"isDelete\",\"name\":\"\",\"dataType\":\"boolean\",\"id\":\"21621607077688079\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"name\",\"name\":\"Функция\",\"dataType\":\"string\",\"id\":\"83101607077166818\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"@who\",\"name\":\"who changed\",\"dataType\":\"string\",\"id\":\"-1\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"@dateCreated\",\"name\":\"date created\",\"dataType\":\"date\",\"id\":\"-2\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"@dateChanged\",\"name\":\"date changed\",\"dataType\":\"date\",\"id\":\"-3\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false}]",
        "jsonGroupSettings": null,
        "jsonViewIdSettings": "[{\"sysName\":\"name\"}]",
        "jsonSettings": null,
        "jsonNativeIndexSettings": null,
        "indexEnabled": true,
        "lastIndexUpdate": 0,
        "indexName": "",
        "dateChanged": "2020-12-04T10:28:14Z",
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
          "formatOptions": null,
          "groupName": null,
          "linkOrArrayLinkType": false,
          "linkType": false,
          "arrayLink": false,
          "indexExists": false,
          "typeVariable": {},
          "json": false
        },
        "objectIDSysName": "id",
        "folderId": 33596509
      }
    },
    "isSuccessWrite": false,
    "writeError": null,
    "writeResponse": null,
    "fileds": [
      {
        "sysName": "employer_description",
        "name": "Описание компании",
        "dataType": "string",
        "id": "34671609671007166",
        "link": "",
        "group": "1607938855954",
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
        "format": "markdown",
        "formatOptions": null,
        "groupName": null,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "indexExists": false,
        "typeVariable": {},
        "json": false
      },
      {
        "sysName": "employer_name",
        "name": "Название компании",
        "dataType": "string",
        "id": "68021607939162171",
        "link": "",
        "group": "1607938855954",
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
        "json": false
      },
      {
        "sysName": "employer_website",
        "name": "Сайт компании",
        "dataType": "string",
        "id": "89401607939216442",
        "link": "",
        "group": "1607938855954",
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
        "indexExists": false,
        "typeVariable": {},
        "json": false
      },
      {
        "sysName": "firstName",
        "name": "Имя",
        "dataType": "string",
        "id": "4",
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
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "indexExists": false,
        "typeVariable": {},
        "json": false
      },
      {
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
        "indexExists": false,
        "typeVariable": {},
        "json": false
      },
      {
        "sysName": "lastName",
        "name": "Фамлия",
        "dataType": "string",
        "id": "3",
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
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "indexExists": false,
        "typeVariable": {},
        "json": false
      },
      {
        "sysName": "role",
        "name": "Роли",
        "dataType": "string",
        "id": "5",
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
        "indexExists": false,
        "typeVariable": {},
        "json": false
      }
    ]
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


  let authExample ={
    isAuth: true,
    role: "admin",
    token: "a256c0c6-6aa1-4706-afad-521d0d37e3f3",
    user: "pavel@directual.com"
  }


  let exampleForm = {
    "sl": "newJob",
    "formName": "Разместить вакансию",
    "formDesc": "",
    "formButton": "Создать вакансию",
    "placeholder": "",
    "maxWidth": "500",
    "formButtonResubmit": null,
    "params": {
      "result": {
        "resultTitleField": null,
        "resultMessageField": null,
        "isSuccessField": null
      },
      "fields": {
        "id": {
          "include": false,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false
        },
        "company_city_ids": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false
        },
        "company_in_profile": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false,
          "required": true,
          "defaultValueOn": true,
          "defaultValue": "true"
        },
        "company_name": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false
        },
        "company_website": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false
        },
        "connect_instructions": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false
        },
        "connect_type": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false,
          "defaultValueOn": true,
          "defaultValue": "true"
        },
        "functions_22": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": true,
          "fileImageSize": 200,
          "clickable": false,
          "searchData": [
            {
              "key": "772fafad-36a7-4ccc-b338-ebb3b670e554",
              "value": "Официант"
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
              "key": "b5d6682c-09da-4d8b-86ef-abe3295da502",
              "value": "Шеф"
            },
            {
              "key": "d6d250fd-4f29-4b09-a140-9757ac0266aa",
              "value": "Управляющий"
            },
            {
              "key": "ee6cd622-e697-4d59-bca0-d34d4d6fa058",
              "value": "Хостес"
            },
            {
              "key": "cee393b6-1f7f-459b-8d5f-a9b59c41cf92",
              "value": "Администратор"
            },
            {
              "key": "c127df30-c9ce-4063-9a66-a005d4c9695a",
              "value": "Мастер маникюра"
            },
            {
              "key": "9153c4b7-e930-48ed-92e8-da4abbf63d3f",
              "value": "Бровист"
            },
            {
              "key": "622fe247-51cb-4295-a8b4-eaf189dd807d",
              "value": "Косметолог"
            },
            {
              "key": "9b643b1a-5e5d-45c2-9bfa-847fca9201c0",
              "value": "Стилист"
            },
            {
              "key": "3a6782d8-5938-4d7c-acc3-00c072db4b71",
              "value": "Визажист"
            },
            {
              "key": "d91564fe-70ce-406a-8119-cbbe2deef5a4",
              "value": "Фитнес-тренер"
            },
            {
              "key": "58b198e4-6ec9-4cde-87cf-8edf8d88af95",
              "value": "Продавец-консультант"
            }
          ]
        },
        "functions_52": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": true,
          "fileImageSize": 200,
          "clickable": false,
          "searchData": [
            {
              "key": "1d25ecad-0a05-42c8-a9d8-76ae5939fc09",
              "value": "Marketing"
            },
            {
              "key": "5b27b967-9c4d-4dbe-89f0-abb4186e64a1",
              "value": "PR"
            },
            {
              "key": "f458982e-0569-4006-8c7a-edef0d59bc07",
              "value": "Events"
            },
            {
              "key": "565e74f1-6a97-491b-a97b-7578d26f9b0e",
              "value": "Редактор"
            },
            {
              "key": "5c696884-c6e8-4608-a928-06ca86d28f52",
              "value": "SMM"
            },
            {
              "key": "14746650-98aa-44d7-8989-472c8162dba8",
              "value": "Контент"
            },
            {
              "key": "605143a0-bb72-49ec-a7c2-16d6a84baa6b",
              "value": "Копирайтинг"
            },
            {
              "key": "b0458bef-2b44-42a7-a27f-69f4043eb19a",
              "value": " Таргетинг"
            },
            {
              "key": "d4e838bd-8e32-4a65-9d08-09ccf5e8956c",
              "value": "Фотограф"
            },
            {
              "key": "aaa68f68-4196-4561-b4ca-6957ee1f5271",
              "value": "Видеограф"
            },
            {
              "key": "69cf9997-fd45-442e-8590-74815535e949",
              "value": "Продюссер"
            },
            {
              "key": "fdd5dd01-1867-4f2d-a579-4032bc691551",
              "value": "UI/UX дизайн"
            },
            {
              "key": "02b3892a-9ca7-40e3-bb79-2a4682fe445c",
              "value": "Графический дизайн"
            },
            {
              "key": "f357eb22-9b97-4889-ae7b-1359a837626e",
              "value": "Fashion-designer"
            },
            {
              "key": "95e69d64-91c4-4134-8109-62ad43bab442",
              "value": "Art-director"
            },
            {
              "key": "35a1a90b-b7bf-44dd-b2cb-0537f35c995a",
              "value": "Brand-manager"
            },
            {
              "key": "d8a43cf3-5903-4073-95e3-d7f400ff28cc",
              "value": "Баер"
            },
            {
              "key": "2ee7a4c1-51a4-46d9-b93a-f4c06f9dc095",
              "value": "Стилист"
            },
            {
              "key": "87f3fcfb-131b-4f80-af76-fd2e2a88419f",
              "value": "Sales"
            },
            {
              "key": "9275cda3-f60c-4827-866b-e6f151d10118",
              "value": "Admin/Intern"
            },
            {
              "key": "57816d4e-5d1a-4240-8eda-0041ccdc3d55",
              "value": "IT"
            },
            {
              "key": "f9e6e8ea-aea5-4a2e-b46c-4dfa353fec64",
              "value": "HR"
            }
          ]
        },
        "job_description": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false,
          "descriptionFlag": true,
          "description": "В шаблоне ниже пример разбиения на заголовки и списки",
          "defaultValueOn": true,
          "required": true
        },
        "job_name": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false,
          "required": true
        },
        "salary": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false,
          "defaultValueOn": true,
          "defaultValue": {
            "secondValue": 120,
            "firstValue": 40
          }
        },
        "type": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": true,
          "fileImageSize": 200,
          "clickable": false,
          "required": true,
          "defaultValueOn": false,
          "searchData": [
            {
              "key": "22",
              "value": "график 2/2"
            },
            {
              "key": "52",
              "value": "график 5/2"
            }
          ]
        },
        "user_id": {
          "include": false,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false
        }
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
            "fieldSysName": "company_city_ids",
            "fetch": [],
            "sysName": "company_city_ids",
            "name": "Город(а) работодателя",
            "dataType": "arrayLink",
            "format": "",
            "formatOptions": {},
            "link": "cities"
          },
          {
            "fieldSysName": "company_in_profile",
            "fetch": [],
            "sysName": "company_in_profile",
            "name": "Работодатель",
            "dataType": "boolean",
            "format": "",
            "formatOptions": {
              "customOptionLabel": "My option",
              "keyValue": {
                "key": "key",
                "value": "value",
                "button": "One more"
              },
              "booleanOptions": [
                "Указан в моем профиле работодателя",
                "Другая компания"
              ],
              "customOptionPlaceholder": "Describe your option",
              "range": {},
              "customOptionType": "textarea"
            },
            "link": ""
          },
          {
            "fieldSysName": "company_name",
            "fetch": [],
            "sysName": "company_name",
            "name": "Название компании работодателя",
            "dataType": "string",
            "format": "",
            "formatOptions": {},
            "link": ""
          },
          {
            "fieldSysName": "company_website",
            "fetch": [],
            "sysName": "company_website",
            "name": "Сайт работодателя",
            "dataType": "string",
            "format": "",
            "formatOptions": {},
            "link": ""
          },
          {
            "fieldSysName": "connect_instructions",
            "fetch": [],
            "sysName": "connect_instructions",
            "name": "Инструкции для связи кандидату",
            "dataType": "string",
            "format": "",
            "formatOptions": {},
            "link": ""
          },
          {
            "fieldSysName": "connect_type",
            "fetch": [],
            "sysName": "connect_type",
            "name": "Способ связи с кандидатом",
            "dataType": "boolean",
            "format": "",
            "formatOptions": {
              "customOptionLabel": "My option",
              "keyValue": {
                "key": "key",
                "value": "value",
                "button": "One more"
              },
              "booleanOptions": [
                "Выслать кандидату мой телеграм",
                "Другой способ"
              ],
              "customOptionPlaceholder": "Describe your option",
              "range": {},
              "customOptionType": "textarea"
            },
            "link": ""
          },
          {
            "fieldSysName": "functions_22",
            "fetch": [],
            "sysName": "functions_22",
            "name": "Функции 2/2",
            "dataType": "arrayLink",
            "format": "",
            "formatOptions": {},
            "link": "functions22"
          },
          {
            "fieldSysName": "functions_52",
            "fetch": [],
            "sysName": "functions_52",
            "name": "Функции 5/2",
            "dataType": "arrayLink",
            "format": "",
            "formatOptions": {},
            "link": "functions52"
          },
          {
            "fieldSysName": "job_description",
            "fetch": [],
            "sysName": "job_description",
            "name": "Описание вакансии",
            "dataType": "string",
            "format": "markdown",
            "formatOptions": {},
            "link": ""
          },
          {
            "fieldSysName": "job_name",
            "fetch": [],
            "sysName": "job_name",
            "name": "Название вакансии",
            "dataType": "string",
            "format": "",
            "formatOptions": {},
            "link": ""
          },
          {
            "fieldSysName": "salary",
            "fetch": [],
            "sysName": "salary",
            "name": "Зарплатная вилка",
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
                "min": 20,
                "max": 300,
                "step": 10
              },
              "customOptionType": "textarea"
            },
            "link": ""
          },
          {
            "fieldSysName": "type",
            "fetch": [],
            "sysName": "type",
            "name": "График",
            "dataType": "link",
            "format": "",
            "formatOptions": {},
            "link": "Type2252"
          },
          {
            "fieldSysName": "user_id",
            "fetch": [],
            "sysName": "user_id",
            "name": "Пользователь",
            "dataType": "link",
            "format": "",
            "formatOptions": {},
            "link": "WebUser"
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
            "read": true,
            "link": ""
          },
          "company_city_ids": {
            "id": "company_city_ids",
            "content": "Город(а) работодателя",
            "type": "field",
            "dataType": "arrayLink",
            "format": "",
            "formatOptions": {},
            "write": true,
            "link": "cities"
          },
          "company_in_profile": {
            "id": "company_in_profile",
            "content": "Работодатель",
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
              "booleanOptions": [
                "Указан в моем профиле работодателя",
                "Другая компания"
              ],
              "customOptionPlaceholder": "Describe your option",
              "range": {},
              "customOptionType": "textarea"
            },
            "write": true,
            "link": ""
          },
          "company_name": {
            "id": "company_name",
            "content": "Название компании работодателя",
            "type": "field",
            "dataType": "string",
            "format": "",
            "formatOptions": {},
            "write": true,
            "link": ""
          },
          "company_website": {
            "id": "company_website",
            "content": "Сайт работодателя",
            "type": "field",
            "dataType": "string",
            "format": "",
            "formatOptions": {},
            "write": true,
            "link": ""
          },
          "connect_instructions": {
            "id": "connect_instructions",
            "content": "Инструкции для связи кандидату",
            "type": "field",
            "dataType": "string",
            "format": "",
            "formatOptions": {},
            "write": true,
            "link": ""
          },
          "connect_type": {
            "id": "connect_type",
            "content": "Способ связи с кандидатом",
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
              "booleanOptions": [
                "Выслать кандидату мой телеграм",
                "Другой способ"
              ],
              "customOptionPlaceholder": "Describe your option",
              "range": {},
              "customOptionType": "textarea"
            },
            "write": true,
            "link": ""
          },
          "functions_22": {
            "id": "functions_22",
            "content": "Функции 2/2",
            "type": "field",
            "dataType": "arrayLink",
            "format": "",
            "formatOptions": {},
            "write": true,
            "link": "functions22"
          },
          "functions_52": {
            "id": "functions_52",
            "content": "Функции 5/2",
            "type": "field",
            "dataType": "arrayLink",
            "format": "",
            "formatOptions": {},
            "write": true,
            "link": "functions52"
          },
          "job_description": {
            "id": "job_description",
            "content": "Описание вакансии",
            "type": "field",
            "dataType": "string",
            "format": "markdown",
            "formatOptions": {},
            "write": true,
            "link": ""
          },
          "job_name": {
            "id": "job_name",
            "content": "Название вакансии",
            "type": "field",
            "dataType": "string",
            "format": "",
            "formatOptions": {},
            "write": true,
            "link": ""
          },
          "salary": {
            "id": "salary",
            "content": "Зарплатная вилка",
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
                "min": 20,
                "max": 300,
                "step": 10
              },
              "customOptionType": "textarea"
            },
            "write": true,
            "link": ""
          },
          "type": {
            "id": "type",
            "content": "График",
            "type": "field",
            "dataType": "link",
            "format": "",
            "formatOptions": {},
            "write": true,
            "link": "Type2252"
          },
          "user_id": {
            "id": "user_id",
            "content": "Пользователь",
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
            "clickable": false
          },
          "company_city_ids": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": false
          },
          "company_in_profile": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": false,
            "required": true,
            "defaultValueOn": true,
            "defaultValue": "true"
          },
          "company_name": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": false
          },
          "company_website": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": false
          },
          "connect_instructions": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": false
          },
          "connect_type": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": false,
            "defaultValueOn": true,
            "defaultValue": "true"
          },
          "functions_22": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": true,
            "fileImageSize": 200,
            "clickable": false
          },
          "functions_52": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": true,
            "fileImageSize": 200,
            "clickable": false
          },
          "job_description": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": false,
            "descriptionFlag": true,
            "description": "В шаблоне ниже пример разбиения на заголовки и списки",
            "defaultValueOn": true,
            "required": true
          },
          "job_name": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": false,
            "required": true
          },
          "salary": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": false,
            "defaultValueOn": true,
            "defaultValue": {
              "secondValue": 120,
              "firstValue": 40
            }
          },
          "type": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": true,
            "fileImageSize": 200,
            "clickable": false,
            "required": true,
            "defaultValueOn": false
          },
          "user_id": {
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
            "title": "General",
            "fieldIds": [
              "id",
              "company_in_profile"
            ]
          },
          "38601608643052732": {
            "id": "38601608643052732",
            "title": "Инфомрация о вакансии",
            "fieldIds": [
              "job_name",
              "job_description"
            ],
            "display": true
          },
          "16821609574019890": {
            "id": "16821609574019890",
            "title": "Данные о работодателе",
            "fieldIds": [
              "company_name",
              "company_website",
              "company_city_ids"
            ],
            "cond": [
              {
                "id": "83601609574066756",
                "field": "company_in_profile",
                "value": "false"
              }
            ],
            "display": true
          },
          "31471609574105274": {
            "id": "31471609574105274",
            "title": "Необходимые функции",
            "fieldIds": [
              "functions_52"
            ],
            "cond": [
              {
                "id": "47101609574232171",
                "field": "type",
                "value": "52"
              }
            ]
          },
          "47411609574125631": {
            "id": "47411609574125631",
            "title": "Необходимые функции",
            "fieldIds": [
              "functions_22"
            ],
            "cond": [
              {
                "id": "48921609574248978",
                "field": "type",
                "value": "22"
              }
            ]
          },
          "12761609574192662": {
            "id": "12761609574192662",
            "title": "График",
            "fieldIds": [
              "type"
            ]
          },
          "19761609574388377": {
            "id": "19761609574388377",
            "title": "Прочее",
            "fieldIds": [
              "salary",
              "connect_type",
              "user_id"
            ]
          },
          "24781609574530250": {
            "id": "24781609574530250",
            "title": "Связь с кандидатом",
            "fieldIds": [
              "connect_instructions"
            ],
            "cond": [
              {
                "id": "80071609574569847",
                "field": "connect_type",
                "value": "false"
              }
            ]
          }
        },
        "columnOrder": [
          "tab-1",
          "16821609574019890",
          "38601608643052732",
          "12761609574192662",
          "31471609574105274",
          "47411609574125631",
          "19761609574388377",
          "24781609574530250"
        ]
      },
      "auth": {
        "isPerson": true,
        "userIdField": "user_id"
      }
    },
    "fileds": [
      {
        "sysName": "company_city_ids",
        "name": "Город(а) работодателя",
        "dataType": "arrayLink",
        "id": "10281607944727109",
        "link": "cities",
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
        "linkOrArrayLinkType": true,
        "linkType": false,
        "arrayLink": true,
        "indexExists": false,
        "typeVariable": {},
        "json": false
      },
      {
        "sysName": "company_in_profile",
        "name": "Работодатель",
        "dataType": "boolean",
        "id": "33951607944479971",
        "link": "",
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
        "formatOptions": {
          "customOptionLabel": "My option",
          "keyValue": {
            "key": "key",
            "value": "value",
            "button": "One more"
          },
          "booleanOptions": [
            "Указан в моем профиле работодателя",
            "Другая компания"
          ],
          "customOptionPlaceholder": "Describe your option",
          "range": {},
          "customOptionType": "textarea"
        },
        "groupName": null,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "indexExists": false,
        "typeVariable": {},
        "json": false
      },
      {
        "sysName": "company_name",
        "name": "Название компании работодателя",
        "dataType": "string",
        "id": "22051607944259558",
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
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "indexExists": false,
        "typeVariable": {},
        "json": false
      },
      {
        "sysName": "company_website",
        "name": "Сайт работодателя",
        "dataType": "string",
        "id": "76091607944603531",
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
        "formatOptions": {},
        "groupName": null,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "indexExists": false,
        "typeVariable": {},
        "json": false
      },
      {
        "sysName": "connect_instructions",
        "name": "Инструкции для связи кандидату",
        "dataType": "string",
        "id": "64711607948185707",
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
        "format": null,
        "formatOptions": {},
        "groupName": null,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "indexExists": false,
        "typeVariable": {},
        "json": false
      },
      {
        "sysName": "connect_type",
        "name": "Способ связи с кандидатом",
        "dataType": "boolean",
        "id": "65731607948157836",
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
        "formatOptions": {
          "customOptionLabel": "My option",
          "keyValue": {
            "key": "key",
            "value": "value",
            "button": "One more"
          },
          "booleanOptions": [
            "Выслать кандидату мой телеграм",
            "Другой способ"
          ],
          "customOptionPlaceholder": "Describe your option",
          "range": {},
          "customOptionType": "textarea"
        },
        "groupName": null,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "indexExists": false,
        "typeVariable": {},
        "json": false
      },
      {
        "sysName": "functions_22",
        "name": "Функции 2/2",
        "dataType": "arrayLink",
        "id": "82251607941755646",
        "link": "functions22",
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
        "linkOrArrayLinkType": true,
        "linkType": false,
        "arrayLink": true,
        "indexExists": false,
        "typeVariable": {},
        "json": false
      },
      {
        "sysName": "functions_52",
        "name": "Функции 5/2",
        "dataType": "arrayLink",
        "id": "67731607941768628",
        "link": "functions52",
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
        "linkOrArrayLinkType": true,
        "linkType": false,
        "arrayLink": true,
        "indexExists": false,
        "typeVariable": {},
        "json": false
      },
      {
        "sysName": "job_description",
        "name": "Описание вакансии",
        "dataType": "string",
        "id": "74961607943694679",
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
        "format": "markdown",
        "formatOptions": {},
        "groupName": null,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "indexExists": false,
        "typeVariable": {},
        "json": false
      },
      {
        "sysName": "job_name",
        "name": "Название вакансии",
        "dataType": "string",
        "id": "93071607941686773",
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
        "indexExists": false,
        "typeVariable": {},
        "json": false
      },
      {
        "sysName": "salary",
        "name": "Зарплатная вилка",
        "dataType": "json",
        "id": "15401607941726857",
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
            "min": 20,
            "max": 300,
            "step": 10
          },
          "customOptionType": "textarea"
        },
        "groupName": null,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "indexExists": false,
        "typeVariable": {},
        "json": true
      },
      {
        "sysName": "type",
        "name": "График",
        "dataType": "link",
        "id": "82641607941710823",
        "link": "Type2252",
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
        "indexExists": false,
        "typeVariable": {},
        "json": false
      },
      {
        "sysName": "user_id",
        "name": "Пользователь",
        "dataType": "link",
        "id": "41481607941663169",
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
        "formatOptions": {},
        "groupName": null,
        "linkOrArrayLinkType": true,
        "linkType": true,
        "arrayLink": false,
        "indexExists": false,
        "typeVariable": {},
        "json": false
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
                userNameFormat='email'
                allowSignUp
                signUpheader='Sign Up'
              />

            </Route>
            <Route exact path="/cards">
              <FpsCards data={cardActions} auth={authExample}/>
              {/* <FpsCards data={exampleCards} /> */}
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