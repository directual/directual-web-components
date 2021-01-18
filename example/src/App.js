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
    "sl": "myJobsActive",
    "pageSize": "10",
    "headerField": null,
    "params": {
      "cardListLayout": "grid",
      "cardHeaderComment": "date_created",
      "deleteField": "",
      "cardBodyText": "job_status_message",
      "cardImage": false,
      "cardImageField": "",
      "cardImageType": "none",
      "cardImageSize": 100,
      "objectView": {},
      "data": {
        "readFields": [
          {
            "fieldSysName": "candidates_quantity",
            "fetch": [],
            "sysName": "candidates_quantity",
            "name": "Количество подходящих профилей кандидатов",
            "dataType": "number",
            "format": "positiveNum",
            "formatOptions": {},
            "link": ""
          },
          {
            "fieldSysName": "company_city_ids",
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
            "sysName": "company_city_ids",
            "name": "Город(а) работодателя",
            "dataType": "arrayLink",
            "format": "",
            "formatOptions": {},
            "link": "cities"
          },
          {
            "fieldSysName": "company_description",
            "fetch": [],
            "sysName": "company_description",
            "name": "Описание компании работодателя",
            "dataType": "string",
            "format": "markdown",
            "formatOptions": {},
            "link": ""
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
            "format": "webLink",
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
            "fieldSysName": "date_created",
            "fetch": [],
            "sysName": "date_created",
            "name": "Дата размещения вакансии",
            "dataType": "date",
            "format": "",
            "formatOptions": {},
            "link": ""
          },
          {
            "fieldSysName": "functions_22",
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
            "sysName": "functions_22",
            "name": "Функции 2/2",
            "dataType": "arrayLink",
            "format": "",
            "formatOptions": {},
            "link": "functions22"
          },
          {
            "fieldSysName": "functions_52",
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
            "sysName": "functions_52",
            "name": "Функции 5/2",
            "dataType": "arrayLink",
            "format": "",
            "formatOptions": {},
            "link": "functions52"
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
            "fieldSysName": "job_status_message",
            "fetch": [],
            "sysName": "job_status_message",
            "name": "Статус вакансии",
            "dataType": "string",
            "format": "",
            "formatOptions": {},
            "link": ""
          },
          {
            "fieldSysName": "payment_link",
            "fetch": [],
            "sysName": "payment_link",
            "name": "Оплатить размещение",
            "dataType": "string",
            "format": "webLink",
            "formatOptions": {},
            "link": ""
          },
          {
            "fieldSysName": "responds_approved_ids",
            "fetch": [
              {
                "fieldSysName": "Employer_respond",
                "condition": null,
                "fetch": []
              },
              {
                "fieldSysName": "date_process",
                "condition": null,
                "fetch": []
              },
              {
                "fieldSysName": "id",
                "condition": null,
                "fetch": []
              },
              {
                "fieldSysName": "salary_text",
                "condition": null,
                "fetch": []
              },
              {
                "fieldSysName": "user_CV",
                "condition": null,
                "fetch": []
              },
              {
                "fieldSysName": "user_fb",
                "condition": null,
                "fetch": []
              },
              {
                "fieldSysName": "user_insta",
                "condition": null,
                "fetch": []
              },
              {
                "fieldSysName": "user_lastName",
                "condition": null,
                "fetch": []
              },
              {
                "fieldSysName": "user_name",
                "condition": null,
                "fetch": []
              },
              {
                "fieldSysName": "user_phone",
                "condition": null,
                "fetch": []
              },
              {
                "fieldSysName": "user_photo",
                "condition": null,
                "fetch": []
              },
              {
                "fieldSysName": "user_telegram",
                "condition": null,
                "fetch": []
              }
            ],
            "sysName": "responds_approved_ids",
            "name": "✅ Одобренные отклики",
            "dataType": "arrayLink",
            "format": "",
            "formatOptions": {},
            "link": "Responds"
          },
          {
            "fieldSysName": "responds_declined_ids",
            "fetch": [
              {
                "fieldSysName": "date_process",
                "condition": null,
                "fetch": []
              },
              {
                "fieldSysName": "user_CV",
                "condition": null,
                "fetch": []
              },
              {
                "fieldSysName": "user_fb",
                "condition": null,
                "fetch": []
              },
              {
                "fieldSysName": "user_insta",
                "condition": null,
                "fetch": []
              },
              {
                "fieldSysName": "user_lastName",
                "condition": null,
                "fetch": []
              },
              {
                "fieldSysName": "user_name",
                "condition": null,
                "fetch": []
              },
              {
                "fieldSysName": "user_photo",
                "condition": null,
                "fetch": []
              }
            ],
            "sysName": "responds_declined_ids",
            "name": "🚫 Отклоненные отклики",
            "dataType": "arrayLink",
            "format": "",
            "formatOptions": {},
            "link": "Responds"
          },
          {
            "fieldSysName": "responds_new",
            "fetch": [],
            "sysName": "responds_new",
            "name": "Новых откликов",
            "dataType": "number",
            "format": "positiveNum",
            "formatOptions": {},
            "link": ""
          },
          {
            "fieldSysName": "responds_new_ids",
            "fetch": [
              {
                "fieldSysName": "date_respond",
                "condition": null,
                "fetch": []
              },
              {
                "fieldSysName": "id",
                "condition": null,
                "fetch": []
              },
              {
                "fieldSysName": "salary_text",
                "condition": null,
                "fetch": []
              },
              {
                "fieldSysName": "user_CV",
                "condition": null,
                "fetch": []
              },
              {
                "fieldSysName": "user_fb",
                "condition": null,
                "fetch": []
              },
              {
                "fieldSysName": "user_insta",
                "condition": null,
                "fetch": []
              },
              {
                "fieldSysName": "user_lastName",
                "condition": null,
                "fetch": []
              },
              {
                "fieldSysName": "user_name",
                "condition": null,
                "fetch": []
              },
              {
                "fieldSysName": "user_photo",
                "condition": null,
                "fetch": []
              }
            ],
            "sysName": "responds_new_ids",
            "name": "🙋‍♂️ Новые отклики",
            "dataType": "arrayLink",
            "format": "",
            "formatOptions": {},
            "link": "Responds"
          },
          {
            "fieldSysName": "salary_text",
            "fetch": [],
            "sysName": "salary_text",
            "name": "Зарплатная вилка",
            "dataType": "string",
            "format": "",
            "formatOptions": {},
            "link": null
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
            "dataType": "link",
            "format": "",
            "formatOptions": {},
            "link": "Type2252"
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
            "fieldSysName": "job_status",
            "fetch": [],
            "sysName": "job_status",
            "name": "Статус (техническое поле)",
            "dataType": "string",
            "format": "",
            "formatOptions": {},
            "link": ""
          }
        ],
        "fields": {
          "candidates_quantity": {
            "id": "candidates_quantity",
            "content": "Количество подходящих профилей кандидатов",
            "type": "field",
            "dataType": "number",
            "format": "positiveNum",
            "formatOptions": {},
            "read": true,
            "link": "",
            "actions": []
          },
          "company_city_ids": {
            "id": "company_city_ids",
            "content": "Город(а) работодателя",
            "type": "field",
            "dataType": "arrayLink",
            "format": "",
            "formatOptions": {},
            "read": true,
            "link": "cities",
            "actions": []
          },
          "company_description": {
            "id": "company_description",
            "content": "Описание компании работодателя",
            "type": "field",
            "dataType": "string",
            "format": "markdown",
            "formatOptions": {},
            "read": true,
            "link": "",
            "actions": []
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
            "read": true,
            "link": "",
            "actions": []
          },
          "company_name": {
            "id": "company_name",
            "content": "Название компании работодателя",
            "type": "field",
            "dataType": "string",
            "format": "",
            "formatOptions": {},
            "read": true,
            "link": "",
            "actions": []
          },
          "company_website": {
            "id": "company_website",
            "content": "Сайт работодателя",
            "type": "field",
            "dataType": "string",
            "format": "webLink",
            "formatOptions": {},
            "read": true,
            "link": "",
            "actions": []
          },
          "connect_instructions": {
            "id": "connect_instructions",
            "content": "Инструкции для связи кандидату",
            "type": "field",
            "dataType": "string",
            "format": "",
            "formatOptions": {},
            "read": true,
            "link": "",
            "actions": []
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
            "read": true,
            "link": "",
            "actions": []
          },
          "date_created": {
            "id": "date_created",
            "content": "Дата размещения вакансии",
            "type": "field",
            "dataType": "date",
            "format": "",
            "formatOptions": {},
            "read": true,
            "link": "",
            "actions": []
          },
          "functions_22": {
            "id": "functions_22",
            "content": "Функции 2/2",
            "type": "field",
            "dataType": "arrayLink",
            "format": "",
            "formatOptions": {},
            "read": true,
            "link": "functions22",
            "actions": []
          },
          "functions_52": {
            "id": "functions_52",
            "content": "Функции 5/2",
            "type": "field",
            "dataType": "arrayLink",
            "format": "",
            "formatOptions": {},
            "read": true,
            "link": "functions52",
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
          "job_description": {
            "id": "job_description",
            "content": "Описание вакансии",
            "type": "field",
            "dataType": "string",
            "format": "markdown",
            "formatOptions": {},
            "read": true,
            "link": "",
            "actions": []
          },
          "job_name": {
            "id": "job_name",
            "content": "Название вакансии",
            "type": "field",
            "dataType": "string",
            "format": "",
            "formatOptions": {},
            "read": true,
            "link": "",
            "actions": []
          },
          "job_status_message": {
            "id": "job_status_message",
            "content": "Статус вакансии",
            "type": "field",
            "dataType": "string",
            "format": "",
            "formatOptions": {},
            "read": true,
            "link": "",
            "actions": []
          },
          "payment_link": {
            "id": "payment_link",
            "content": "Оплатить размещение",
            "type": "field",
            "dataType": "string",
            "format": "webLink",
            "formatOptions": {},
            "read": true,
            "link": "",
            "actions": []
          },
          "responds_approved_ids": {
            "id": "responds_approved_ids",
            "content": "✅ Одобренные отклики",
            "type": "field",
            "dataType": "arrayLink",
            "format": "",
            "formatOptions": {},
            "read": true,
            "link": "Responds",
            "actions": []
          },
          "responds_declined_ids": {
            "id": "responds_declined_ids",
            "content": "🚫 Отклоненные отклики",
            "type": "field",
            "dataType": "arrayLink",
            "format": "",
            "formatOptions": {},
            "read": true,
            "link": "Responds",
            "actions": []
          },
          "responds_new": {
            "id": "responds_new",
            "content": "Новых откликов",
            "type": "field",
            "dataType": "number",
            "format": "positiveNum",
            "formatOptions": {},
            "read": true,
            "link": "",
            "actions": []
          },
          "responds_new_ids": {
            "id": "responds_new_ids",
            "content": "🙋‍♂️ Новые отклики",
            "type": "field",
            "dataType": "arrayLink",
            "format": "",
            "formatOptions": {},
            "read": true,
            "link": "Responds",
            "actions": [
              {
                "sysName": "respondProcessing",
                "id": "23791610105623418",
                "name": "Одобрить",
                "displayAs": "button",
                "buttonIcon": "done",
                "buttonType": "accent",
                "closePopup": true,
                "callFrom": "linked",
                "callFromField": "responds_new_ids",
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
                      "name": "Статус (suggested,new,approved,declined)",
                      "dataType": "string",
                      "format": "",
                      "formatOptions": {},
                      "link": ""
                    }
                  ]
                },
                "formMapping": [
                  {
                    "id": "82751610105650081",
                    "target": "id",
                    "type": "linkedField",
                    "value": "id"
                  },
                  {
                    "id": "86771610105697488",
                    "target": "status",
                    "type": "const",
                    "value": "approved"
                  }
                ]
              },
              {
                "sysName": "respondProcessing",
                "id": "90591610105714148",
                "name": "Отклонить",
                "displayAs": "button",
                "buttonIcon": "ban",
                "buttonType": "danger",
                "closePopup": true,
                "SLtype": "other",
                "callFrom": "linked",
                "callFromField": "responds_new_ids",
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
                      "name": "Статус (suggested,new,approved,declined)",
                      "dataType": "string",
                      "format": "",
                      "formatOptions": {},
                      "link": ""
                    }
                  ]
                },
                "formMapping": [
                  {
                    "id": "40881610105737033",
                    "target": "id",
                    "type": "linkedField",
                    "value": "id"
                  },
                  {
                    "id": "91331610105743116",
                    "target": "status",
                    "type": "const",
                    "value": "declined"
                  }
                ]
              }
            ]
          },
          "salary_text": {
            "id": "salary_text",
            "content": "Зарплатная вилка",
            "type": "field",
            "dataType": "string",
            "format": "",
            "formatOptions": {},
            "read": true,
            "link": null,
            "actions": []
          },
          "type": {
            "id": "type",
            "content": "График",
            "type": "field",
            "dataType": "link",
            "format": "",
            "formatOptions": {},
            "read": true,
            "link": "Type2252",
            "actions": []
          },
          "job_status": {
            "id": "job_status",
            "content": "Статус (техническое поле)",
            "type": "field",
            "dataType": "string",
            "format": "",
            "formatOptions": {},
            "write": true,
            "link": "",
            "actions": []
          },
          "action__40561609919684635": {
            "content": "Архивировать вакансию",
            "id": "action__40561609919684635",
            "type": "action",
            "actions": []
          },
          "action__23791610105623418": {
            "content": "Одобрить",
            "id": "action__23791610105623418",
            "type": "action",
            "actions": []
          },
          "action__90591610105714148": {
            "content": "Отклонить",
            "id": "action__90591610105714148",
            "type": "action",
            "actions": []
          }
        },
        "fieldParams": {
          "functions_22": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": false
          },
          "functions_52": {
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
          "job_description": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": false,
            "stringDisplay": "markdown"
          },
          "job_name": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": false
          },
          "salary": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": false,
            "jsonDisplay": {
              "type": "range",
              "unitName": "k ₽",
              "range": {
                "min": 0,
                "max": 300,
                "step": 10
              }
            },
            "descriptionFlag": true,
            "description": "Доход в мес, тыс. ₽"
          },
          "type": {
            "include": true,
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
            "include": false,
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
          "company_website": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": false
          },
          "company_description": {
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
            "clickable": false
          },
          "job_status_message": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": false,
            "displayAsHint": true,
            "hintType": "ok"
          },
          "responds_approved_ids": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": true,
            "configureLinkedCard": {
              "fields": {
                "date_process": {
                  "id": "date_process",
                  "content": "Дата обработки работодателем",
                  "type": "field",
                  "read": true,
                  "dataType": "date"
                },
                "id": {
                  "id": "id",
                  "content": "id",
                  "type": "field",
                  "read": true,
                  "dataType": "id"
                },
                "salary_text": {
                  "id": "salary_text",
                  "content": "Зарплатная вилка",
                  "type": "field",
                  "read": true,
                  "dataType": "string"
                },
                "user_CV": {
                  "id": "user_CV",
                  "content": "Резюме кандидата",
                  "type": "field",
                  "read": true,
                  "dataType": "file"
                },
                "user_lastName": {
                  "id": "user_lastName",
                  "content": "Фамилия кандидата",
                  "type": "field",
                  "read": true,
                  "dataType": "string"
                },
                "user_name": {
                  "id": "user_name",
                  "content": "Имя кандидата",
                  "type": "field",
                  "read": true,
                  "dataType": "string"
                },
                "user_phone": {
                  "id": "user_phone",
                  "content": "Телефон кандидата",
                  "type": "field",
                  "read": true,
                  "dataType": "string"
                },
                "user_photo": {
                  "id": "user_photo",
                  "content": "Фото кандидата",
                  "type": "field",
                  "read": true,
                  "dataType": "file"
                },
                "user_telegram": {
                  "id": "user_telegram",
                  "content": "Telegram",
                  "type": "field",
                  "read": true,
                  "dataType": "string"
                },
                "Employer_respond": {
                  "id": "Employer_respond",
                  "content": "Ответ работодателя",
                  "type": "field",
                  "read": true,
                  "dataType": "string"
                },
                "user_insta": {
                  "id": "user_insta",
                  "content": "Instagram",
                  "type": "field",
                  "read": true,
                  "dataType": "string"
                },
                "user_fb": {
                  "id": "user_fb",
                  "content": "Facebook",
                  "type": "field",
                  "read": true,
                  "dataType": "string"
                }
              },
              "fieldParams": {
                "date_process": {
                  "include": true,
                  "fileImageFormat": "square",
                  "fileImageSize": 200
                },
                "id": {
                  "include": false,
                  "fileImageFormat": "square",
                  "fileImageSize": 200
                },
                "salary_text": {
                  "include": true,
                  "fileImageFormat": "square",
                  "fileImageSize": 200
                },
                "user_CV": {
                  "include": true,
                  "fileImageFormat": "square",
                  "fileImageSize": 200
                },
                "user_lastName": {
                  "include": true,
                  "fileImageFormat": "square",
                  "fileImageSize": 200
                },
                "user_name": {
                  "include": true,
                  "fileImageFormat": "square",
                  "fileImageSize": 200
                },
                "user_phone": {
                  "include": true,
                  "fileImageFormat": "square",
                  "fileImageSize": 200
                },
                "user_photo": {
                  "include": true,
                  "fileImageFormat": "circle",
                  "fileImageSize": 200,
                  "fileImage": true
                },
                "user_telegram": {
                  "include": true,
                  "fileImageFormat": "square",
                  "fileImageSize": 200
                },
                "Employer_respond": {
                  "include": false,
                  "fileImageFormat": "square",
                  "fileImageSize": 200
                },
                "user_insta": {
                  "include": true,
                  "fileImageFormat": "square",
                  "fileImageSize": 200
                },
                "user_fb": {
                  "include": true,
                  "fileImageFormat": "square",
                  "fileImageSize": 200
                }
              },
              "fieldOrder": [
                "date_process",
                "user_photo",
                "user_name",
                "user_lastName",
                "id",
                "user_CV",
                "user_insta",
                "user_fb",
                "salary_text",
                "user_phone",
                "user_telegram",
                "Employer_respond"
              ]
            },
            "subHeader": "Одобренный отклик: "
          },
          "responds_declined_ids": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": true,
            "configureLinkedCard": {
              "fields": {
                "date_process": {
                  "id": "date_process",
                  "content": "Дата обработки работодателем",
                  "type": "field",
                  "read": true,
                  "dataType": "date"
                },
                "user_CV": {
                  "id": "user_CV",
                  "content": "Резюме кандидата",
                  "type": "field",
                  "read": true,
                  "dataType": "file"
                },
                "user_name": {
                  "id": "user_name",
                  "content": "Имя кандидата",
                  "type": "field",
                  "read": true,
                  "dataType": "string"
                },
                "user_photo": {
                  "id": "user_photo",
                  "content": "Фото кандидата",
                  "type": "field",
                  "read": true,
                  "dataType": "file"
                },
                "user_fb": {
                  "id": "user_fb",
                  "content": "Facebook",
                  "type": "field",
                  "read": true,
                  "dataType": "string"
                },
                "user_insta": {
                  "id": "user_insta",
                  "content": "Instagram",
                  "type": "field",
                  "read": true,
                  "dataType": "string"
                },
                "user_lastName": {
                  "id": "user_lastName",
                  "content": "Фамилия кандидата",
                  "type": "field",
                  "read": true,
                  "dataType": "string"
                }
              },
              "fieldParams": {
                "date_process": {
                  "include": true,
                  "fileImageFormat": "square",
                  "fileImageSize": 200
                },
                "user_CV": {
                  "include": true,
                  "fileImageFormat": "square",
                  "fileImageSize": 200
                },
                "user_name": {
                  "include": true,
                  "fileImageFormat": "square",
                  "fileImageSize": 200
                },
                "user_photo": {
                  "include": true,
                  "fileImageFormat": "circle",
                  "fileImageSize": 200,
                  "fileImage": true
                },
                "user_fb": {
                  "include": true,
                  "fileImageFormat": "square",
                  "fileImageSize": 200
                },
                "user_insta": {
                  "include": true,
                  "fileImageFormat": "square",
                  "fileImageSize": 200
                },
                "user_lastName": {
                  "include": true,
                  "fileImageFormat": "square",
                  "fileImageSize": 200
                }
              },
              "fieldOrder": [
                "date_process",
                "user_photo",
                "user_name",
                "user_lastName",
                "user_CV",
                "user_insta",
                "user_fb"
              ]
            },
            "subHeader": "Отклоненный отклик:"
          },
          "responds_new": {
            "include": false,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": false
          },
          "responds_new_ids": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": true,
            "configureLinkedCard": {
              "fields": {
                "date_respond": {
                  "id": "date_respond",
                  "content": "Дата отклика",
                  "type": "field",
                  "read": true,
                  "dataType": "date"
                },
                "salary_text": {
                  "id": "salary_text",
                  "content": "Зарплатная вилка",
                  "type": "field",
                  "read": true,
                  "dataType": "string"
                },
                "user_CV": {
                  "id": "user_CV",
                  "content": "Резюме кандидата",
                  "type": "field",
                  "read": true,
                  "dataType": "file"
                },
                "user_name": {
                  "id": "user_name",
                  "content": "Имя кандидата",
                  "type": "field",
                  "read": true,
                  "dataType": "string"
                },
                "user_photo": {
                  "id": "user_photo",
                  "content": "Фото кандидата",
                  "type": "field",
                  "read": true,
                  "dataType": "file"
                },
                "action__23791610105623418": {
                  "id": "action__23791610105623418",
                  "content": "Одобрить",
                  "type": "action"
                },
                "action__90591610105714148": {
                  "id": "action__90591610105714148",
                  "content": "Отклонить",
                  "type": "action"
                },
                "id": {
                  "id": "id",
                  "content": "id",
                  "type": "field",
                  "read": true,
                  "dataType": "id"
                },
                "user_fb": {
                  "id": "user_fb",
                  "content": "Facebook",
                  "type": "field",
                  "read": true,
                  "dataType": "string"
                },
                "user_insta": {
                  "id": "user_insta",
                  "content": "Instagram",
                  "type": "field",
                  "read": true,
                  "dataType": "string"
                },
                "user_lastName": {
                  "id": "user_lastName",
                  "content": "Фамилия кандидата",
                  "type": "field",
                  "read": true,
                  "dataType": "string"
                }
              },
              "fieldParams": {
                "date_respond": {
                  "include": true,
                  "fileImageFormat": "square",
                  "fileImageSize": 200
                },
                "salary_text": {
                  "include": true,
                  "fileImageFormat": "square",
                  "fileImageSize": 200
                },
                "user_CV": {
                  "include": true,
                  "fileImageFormat": "square",
                  "fileImageSize": 200
                },
                "user_name": {
                  "include": true,
                  "fileImageFormat": "square",
                  "fileImageSize": 200
                },
                "user_photo": {
                  "include": true,
                  "fileImageFormat": "circle",
                  "fileImageSize": 200,
                  "fileImage": true
                },
                "id": {
                  "include": false,
                  "fileImageFormat": "square",
                  "fileImageSize": 200
                },
                "user_fb": {
                  "include": true,
                  "fileImageFormat": "square",
                  "fileImageSize": 200
                },
                "user_insta": {
                  "include": true,
                  "fileImageFormat": "square",
                  "fileImageSize": 200
                },
                "user_lastName": {
                  "include": true,
                  "fileImageFormat": "square",
                  "fileImageSize": 200
                }
              },
              "fieldOrder": [
                "date_respond",
                "user_photo",
                "user_name",
                "user_lastName",
                "user_CV",
                "user_insta",
                "user_fb",
                "salary_text",
                "action__23791610105623418",
                "action__90591610105714148",
                "action__13451610105814316",
                "id"
              ]
            },
            "subHeader": "Новый отклик: "
          },
          "date_created": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": false
          },
          "payment_link": {
            "include": false,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": false,
            "displayAsButton": true,
            "button": {
              "icon": "creditcard",
              "type": "accent",
              "title": "Оплатить размещение за 3 999 ₽"
            }
          },
          "job_status": {
            "include": false,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": false
          },
          "salary_text": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": false
          },
          "candidates_quantity": {
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
            "title": "Вакансия",
            "fieldIds": [
              "date_created",
              "job_status_message",
              "payment_link",
              "job_name",
              "job_description",
              "salary_text",
              "type",
              "functions_22",
              "functions_52",
              "id",
              "company_in_profile",
              "connect_instructions",
              "connect_type",
              "job_status"
            ]
          },
          "19801609831206780": {
            "id": "19801609831206780",
            "title": "Работодатель",
            "fieldIds": [
              "company_name",
              "company_description",
              "company_website",
              "company_city_ids"
            ]
          },
          "94701609918985017": {
            "id": "94701609918985017",
            "title": "Отклики",
            "fieldIds": [
              "candidates_quantity",
              "responds_new_ids",
              "responds_approved_ids",
              "responds_declined_ids",
              "responds_new"
            ]
          },
          "45871609919735841": {
            "id": "45871609919735841",
            "title": "Действия с вакансией",
            "fieldIds": [
              "action__40561609919684635"
            ]
          }
        },
        "columnOrder": [
          "94701609918985017",
          "tab-1",
          "19801609831206780",
          "45871609919735841"
        ],
        "actions": [
          {
            "sysName": "",
            "id": "40561609919684635",
            "name": "Архивировать вакансию",
            "displayAs": "button",
            "buttonIcon": "delete",
            "buttonType": "danger",
            "closePopup": true,
            "formMapping": [
              {
                "id": "65381609919709047",
                "target": "id",
                "type": "objectField",
                "value": "id"
              },
              {
                "id": "98791609919716151",
                "target": "job_status",
                "type": "const",
                "value": "archived"
              }
            ]
          },
          {
            "sysName": "respondProcessing",
            "id": "23791610105623418",
            "name": "Одобрить",
            "displayAs": "button",
            "buttonIcon": "done",
            "buttonType": "accent",
            "closePopup": true,
            "callFrom": "linked",
            "callFromField": "responds_new_ids",
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
                  "name": "Статус (suggested,new,approved,declined)",
                  "dataType": "string",
                  "format": "",
                  "formatOptions": {},
                  "link": ""
                }
              ]
            },
            "formMapping": [
              {
                "id": "82751610105650081",
                "target": "id",
                "type": "linkedField",
                "value": "id"
              },
              {
                "id": "86771610105697488",
                "target": "status",
                "type": "const",
                "value": "approved"
              }
            ]
          },
          {
            "sysName": "respondProcessing",
            "id": "90591610105714148",
            "name": "Отклонить",
            "displayAs": "button",
            "buttonIcon": "ban",
            "buttonType": "danger",
            "closePopup": true,
            "SLtype": "other",
            "callFrom": "linked",
            "callFromField": "responds_new_ids",
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
                  "name": "Статус (suggested,new,approved,declined)",
                  "dataType": "string",
                  "format": "",
                  "formatOptions": {},
                  "link": ""
                }
              ]
            },
            "formMapping": [
              {
                "id": "40881610105737033",
                "target": "id",
                "type": "linkedField",
                "value": "id"
              },
              {
                "id": "91331610105743116",
                "target": "status",
                "type": "const",
                "value": "declined"
              }
            ]
          }
        ]
      },
      "fields": {
        "functions_22": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false
        },
        "functions_52": {
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
        "job_description": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false,
          "stringDisplay": "markdown"
        },
        "job_name": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false
        },
        "salary": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false,
          "jsonDisplay": {
            "type": "range",
            "unitName": "k ₽",
            "range": {
              "min": 0,
              "max": 300,
              "step": 10
            }
          },
          "descriptionFlag": true,
          "description": "Доход в мес, тыс. ₽"
        },
        "type": {
          "include": true,
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
          "include": false,
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
        "company_website": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false
        },
        "company_description": {
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
          "clickable": false
        },
        "job_status_message": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false,
          "displayAsHint": true,
          "hintType": "ok"
        },
        "responds_approved_ids": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": true,
          "configureLinkedCard": {
            "fields": {
              "date_process": {
                "id": "date_process",
                "content": "Дата обработки работодателем",
                "type": "field",
                "read": true,
                "dataType": "date"
              },
              "id": {
                "id": "id",
                "content": "id",
                "type": "field",
                "read": true,
                "dataType": "id"
              },
              "salary_text": {
                "id": "salary_text",
                "content": "Зарплатная вилка",
                "type": "field",
                "read": true,
                "dataType": "string"
              },
              "user_CV": {
                "id": "user_CV",
                "content": "Резюме кандидата",
                "type": "field",
                "read": true,
                "dataType": "file"
              },
              "user_lastName": {
                "id": "user_lastName",
                "content": "Фамилия кандидата",
                "type": "field",
                "read": true,
                "dataType": "string"
              },
              "user_name": {
                "id": "user_name",
                "content": "Имя кандидата",
                "type": "field",
                "read": true,
                "dataType": "string"
              },
              "user_phone": {
                "id": "user_phone",
                "content": "Телефон кандидата",
                "type": "field",
                "read": true,
                "dataType": "string"
              },
              "user_photo": {
                "id": "user_photo",
                "content": "Фото кандидата",
                "type": "field",
                "read": true,
                "dataType": "file"
              },
              "user_telegram": {
                "id": "user_telegram",
                "content": "Telegram",
                "type": "field",
                "read": true,
                "dataType": "string"
              },
              "Employer_respond": {
                "id": "Employer_respond",
                "content": "Ответ работодателя",
                "type": "field",
                "read": true,
                "dataType": "string"
              },
              "user_insta": {
                "id": "user_insta",
                "content": "Instagram",
                "type": "field",
                "read": true,
                "dataType": "string"
              },
              "user_fb": {
                "id": "user_fb",
                "content": "Facebook",
                "type": "field",
                "read": true,
                "dataType": "string"
              }
            },
            "fieldParams": {
              "date_process": {
                "include": true,
                "fileImageFormat": "square",
                "fileImageSize": 200
              },
              "id": {
                "include": false,
                "fileImageFormat": "square",
                "fileImageSize": 200
              },
              "salary_text": {
                "include": true,
                "fileImageFormat": "square",
                "fileImageSize": 200
              },
              "user_CV": {
                "include": true,
                "fileImageFormat": "square",
                "fileImageSize": 200
              },
              "user_lastName": {
                "include": true,
                "fileImageFormat": "square",
                "fileImageSize": 200
              },
              "user_name": {
                "include": true,
                "fileImageFormat": "square",
                "fileImageSize": 200
              },
              "user_phone": {
                "include": true,
                "fileImageFormat": "square",
                "fileImageSize": 200
              },
              "user_photo": {
                "include": true,
                "fileImageFormat": "circle",
                "fileImageSize": 200,
                "fileImage": true
              },
              "user_telegram": {
                "include": true,
                "fileImageFormat": "square",
                "fileImageSize": 200
              },
              "Employer_respond": {
                "include": false,
                "fileImageFormat": "square",
                "fileImageSize": 200
              },
              "user_insta": {
                "include": true,
                "fileImageFormat": "square",
                "fileImageSize": 200
              },
              "user_fb": {
                "include": true,
                "fileImageFormat": "square",
                "fileImageSize": 200
              }
            },
            "fieldOrder": [
              "date_process",
              "user_photo",
              "user_name",
              "user_lastName",
              "id",
              "user_CV",
              "user_insta",
              "user_fb",
              "salary_text",
              "user_phone",
              "user_telegram",
              "Employer_respond"
            ]
          },
          "subHeader": "Одобренный отклик: "
        },
        "responds_declined_ids": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": true,
          "configureLinkedCard": {
            "fields": {
              "date_process": {
                "id": "date_process",
                "content": "Дата обработки работодателем",
                "type": "field",
                "read": true,
                "dataType": "date"
              },
              "user_CV": {
                "id": "user_CV",
                "content": "Резюме кандидата",
                "type": "field",
                "read": true,
                "dataType": "file"
              },
              "user_name": {
                "id": "user_name",
                "content": "Имя кандидата",
                "type": "field",
                "read": true,
                "dataType": "string"
              },
              "user_photo": {
                "id": "user_photo",
                "content": "Фото кандидата",
                "type": "field",
                "read": true,
                "dataType": "file"
              },
              "user_fb": {
                "id": "user_fb",
                "content": "Facebook",
                "type": "field",
                "read": true,
                "dataType": "string"
              },
              "user_insta": {
                "id": "user_insta",
                "content": "Instagram",
                "type": "field",
                "read": true,
                "dataType": "string"
              },
              "user_lastName": {
                "id": "user_lastName",
                "content": "Фамилия кандидата",
                "type": "field",
                "read": true,
                "dataType": "string"
              }
            },
            "fieldParams": {
              "date_process": {
                "include": true,
                "fileImageFormat": "square",
                "fileImageSize": 200
              },
              "user_CV": {
                "include": true,
                "fileImageFormat": "square",
                "fileImageSize": 200
              },
              "user_name": {
                "include": true,
                "fileImageFormat": "square",
                "fileImageSize": 200
              },
              "user_photo": {
                "include": true,
                "fileImageFormat": "circle",
                "fileImageSize": 200,
                "fileImage": true
              },
              "user_fb": {
                "include": true,
                "fileImageFormat": "square",
                "fileImageSize": 200
              },
              "user_insta": {
                "include": true,
                "fileImageFormat": "square",
                "fileImageSize": 200
              },
              "user_lastName": {
                "include": true,
                "fileImageFormat": "square",
                "fileImageSize": 200
              }
            },
            "fieldOrder": [
              "date_process",
              "user_photo",
              "user_name",
              "user_lastName",
              "user_CV",
              "user_insta",
              "user_fb"
            ]
          },
          "subHeader": "Отклоненный отклик:"
        },
        "responds_new": {
          "include": false,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false
        },
        "responds_new_ids": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": true,
          "configureLinkedCard": {
            "fields": {
              "date_respond": {
                "id": "date_respond",
                "content": "Дата отклика",
                "type": "field",
                "read": true,
                "dataType": "date"
              },
              "salary_text": {
                "id": "salary_text",
                "content": "Зарплатная вилка",
                "type": "field",
                "read": true,
                "dataType": "string"
              },
              "user_CV": {
                "id": "user_CV",
                "content": "Резюме кандидата",
                "type": "field",
                "read": true,
                "dataType": "file"
              },
              "user_name": {
                "id": "user_name",
                "content": "Имя кандидата",
                "type": "field",
                "read": true,
                "dataType": "string"
              },
              "user_photo": {
                "id": "user_photo",
                "content": "Фото кандидата",
                "type": "field",
                "read": true,
                "dataType": "file"
              },
              "action__23791610105623418": {
                "id": "action__23791610105623418",
                "content": "Одобрить",
                "type": "action"
              },
              "action__90591610105714148": {
                "id": "action__90591610105714148",
                "content": "Отклонить",
                "type": "action"
              },
              "id": {
                "id": "id",
                "content": "id",
                "type": "field",
                "read": true,
                "dataType": "id"
              },
              "user_fb": {
                "id": "user_fb",
                "content": "Facebook",
                "type": "field",
                "read": true,
                "dataType": "string"
              },
              "user_insta": {
                "id": "user_insta",
                "content": "Instagram",
                "type": "field",
                "read": true,
                "dataType": "string"
              },
              "user_lastName": {
                "id": "user_lastName",
                "content": "Фамилия кандидата",
                "type": "field",
                "read": true,
                "dataType": "string"
              }
            },
            "fieldParams": {
              "date_respond": {
                "include": true,
                "fileImageFormat": "square",
                "fileImageSize": 200
              },
              "salary_text": {
                "include": true,
                "fileImageFormat": "square",
                "fileImageSize": 200
              },
              "user_CV": {
                "include": true,
                "fileImageFormat": "square",
                "fileImageSize": 200
              },
              "user_name": {
                "include": true,
                "fileImageFormat": "square",
                "fileImageSize": 200
              },
              "user_photo": {
                "include": true,
                "fileImageFormat": "circle",
                "fileImageSize": 200,
                "fileImage": true
              },
              "id": {
                "include": false,
                "fileImageFormat": "square",
                "fileImageSize": 200
              },
              "user_fb": {
                "include": true,
                "fileImageFormat": "square",
                "fileImageSize": 200
              },
              "user_insta": {
                "include": true,
                "fileImageFormat": "square",
                "fileImageSize": 200
              },
              "user_lastName": {
                "include": true,
                "fileImageFormat": "square",
                "fileImageSize": 200
              }
            },
            "fieldOrder": [
              "date_respond",
              "user_photo",
              "user_name",
              "user_lastName",
              "user_CV",
              "user_insta",
              "user_fb",
              "salary_text",
              "action__23791610105623418",
              "action__90591610105714148",
              "action__13451610105814316",
              "id"
            ]
          },
          "subHeader": "Новый отклик: "
        },
        "date_created": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false
        },
        "payment_link": {
          "include": false,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false,
          "displayAsButton": true,
          "button": {
            "icon": "creditcard",
            "type": "accent",
            "title": "Оплатить размещение за 3 999 ₽"
          }
        },
        "job_status": {
          "include": false,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false
        },
        "salary_text": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false
        },
        "candidates_quantity": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false
        }
      },
      "showCounter": true,
      "counterField": "responds_new",
      "counterText": "новых откликов",
      "actions": [
        {
          "sysName": "",
          "id": "40561609919684635",
          "name": "Архивировать вакансию",
          "displayAs": "button",
          "buttonIcon": "delete",
          "buttonType": "danger",
          "closePopup": true,
          "formMapping": [
            {
              "id": "65381609919709047",
              "target": "id",
              "type": "objectField",
              "value": "id"
            },
            {
              "id": "98791609919716151",
              "target": "job_status",
              "type": "const",
              "value": "archived"
            }
          ]
        },
        {
          "sysName": "respondProcessing",
          "id": "23791610105623418",
          "name": "Одобрить",
          "displayAs": "button",
          "buttonIcon": "done",
          "buttonType": "accent",
          "closePopup": true,
          "callFrom": "linked",
          "callFromField": "responds_new_ids",
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
                "name": "Статус (suggested,new,approved,declined)",
                "dataType": "string",
                "format": "",
                "formatOptions": {},
                "link": ""
              }
            ]
          },
          "formMapping": [
            {
              "id": "82751610105650081",
              "target": "id",
              "type": "linkedField",
              "value": "id"
            },
            {
              "id": "86771610105697488",
              "target": "status",
              "type": "const",
              "value": "approved"
            }
          ]
        },
        {
          "sysName": "respondProcessing",
          "id": "90591610105714148",
          "name": "Отклонить",
          "displayAs": "button",
          "buttonIcon": "ban",
          "buttonType": "danger",
          "closePopup": true,
          "SLtype": "other",
          "callFrom": "linked",
          "callFromField": "responds_new_ids",
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
                "name": "Статус (suggested,new,approved,declined)",
                "dataType": "string",
                "format": "",
                "formatOptions": {},
                "link": ""
              }
            ]
          },
          "formMapping": [
            {
              "id": "40881610105737033",
              "target": "id",
              "type": "linkedField",
              "value": "id"
            },
            {
              "id": "91331610105743116",
              "target": "status",
              "type": "const",
              "value": "declined"
            }
          ]
        }
      ]
    },
    "tableTitle": "👩🏻‍🎨 Активные вакансии",
    "actions": null,
    "headers": [
      {
        "sysName": "candidates_quantity",
        "dataType": "number",
        "name": "Количество подходящих профилей кандидатов",
        "id": "12591609943959558",
        "link": "",
        "group": "1609920960347",
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
        "format": "positiveNum",
        "formatOptions": {},
        "groupName": null,
        "typeVariable": {},
        "arrayLink": false,
        "indexExists": false,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "json": false
      },
      {
        "sysName": "company_city_ids",
        "dataType": "arrayLink",
        "name": "Город(а) работодателя",
        "id": "10281607944727109",
        "link": "cities",
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
        "formatOptions": {},
        "groupName": null,
        "typeVariable": {},
        "arrayLink": true,
        "indexExists": false,
        "linkOrArrayLinkType": true,
        "linkType": false,
        "json": false
      },
      {
        "sysName": "company_description",
        "dataType": "string",
        "name": "Описание компании работодателя",
        "id": "17331609671162114",
        "link": "",
        "group": "0",
        "tags": null,
        "indexing": false,
        "ordering": false,
        "description": null,
        "weight": null,
        "order": 11,
        "linkIndexFieldSysName": [],
        "defaultValue": null,
        "constraints": null,
        "synthetic": false,
        "format": "markdown",
        "formatOptions": null,
        "groupName": null,
        "typeVariable": {},
        "arrayLink": false,
        "indexExists": false,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "json": false
      },
      {
        "sysName": "company_in_profile",
        "dataType": "boolean",
        "name": "Работодатель",
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
        "typeVariable": {},
        "arrayLink": false,
        "indexExists": false,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "json": false
      },
      {
        "sysName": "company_name",
        "dataType": "string",
        "name": "Название компании работодателя",
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
        "typeVariable": {},
        "arrayLink": false,
        "indexExists": false,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "json": false
      },
      {
        "sysName": "company_website",
        "dataType": "string",
        "name": "Сайт работодателя",
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
        "format": "webLink",
        "formatOptions": {},
        "groupName": null,
        "typeVariable": {},
        "arrayLink": false,
        "indexExists": false,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "json": false
      },
      {
        "sysName": "connect_instructions",
        "dataType": "string",
        "name": "Инструкции для связи кандидату",
        "id": "64711607948185707",
        "link": "",
        "group": "0",
        "tags": "",
        "indexing": false,
        "ordering": false,
        "description": null,
        "weight": null,
        "order": 14,
        "linkIndexFieldSysName": [],
        "defaultValue": "",
        "constraints": null,
        "synthetic": false,
        "format": null,
        "formatOptions": {},
        "groupName": null,
        "typeVariable": {},
        "arrayLink": false,
        "indexExists": false,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "json": false
      },
      {
        "sysName": "connect_type",
        "dataType": "boolean",
        "name": "Способ связи с кандидатом",
        "id": "65731607948157836",
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
        "typeVariable": {},
        "arrayLink": false,
        "indexExists": false,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "json": false
      },
      {
        "sysName": "date_created",
        "dataType": "date",
        "name": "Дата размещения вакансии",
        "id": "76531609833917406",
        "link": "",
        "group": "1609833907682",
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
        "arrayLink": false,
        "indexExists": false,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "json": false
      },
      {
        "sysName": "functions_22",
        "dataType": "arrayLink",
        "name": "Функции 2/2",
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
        "typeVariable": {},
        "arrayLink": true,
        "indexExists": false,
        "linkOrArrayLinkType": true,
        "linkType": false,
        "json": false
      },
      {
        "sysName": "functions_52",
        "dataType": "arrayLink",
        "name": "Функции 5/2",
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
        "typeVariable": {},
        "arrayLink": true,
        "indexExists": false,
        "linkOrArrayLinkType": true,
        "linkType": false,
        "json": false
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
        "arrayLink": false,
        "indexExists": false,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "json": false
      },
      {
        "sysName": "job_description",
        "dataType": "string",
        "name": "Описание вакансии",
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
        "typeVariable": {},
        "arrayLink": false,
        "indexExists": false,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "json": false
      },
      {
        "sysName": "job_name",
        "dataType": "string",
        "name": "Название вакансии",
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
        "typeVariable": {},
        "arrayLink": false,
        "indexExists": false,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "json": false
      },
      {
        "sysName": "job_status_message",
        "dataType": "string",
        "name": "Статус вакансии",
        "id": "30881609826436336",
        "link": "",
        "group": "0",
        "tags": "",
        "indexing": false,
        "ordering": false,
        "description": null,
        "weight": null,
        "order": 16,
        "linkIndexFieldSysName": [],
        "defaultValue": "",
        "constraints": null,
        "synthetic": false,
        "format": null,
        "formatOptions": {},
        "groupName": null,
        "typeVariable": {},
        "arrayLink": false,
        "indexExists": false,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "json": false
      },
      {
        "sysName": "payment_link",
        "dataType": "string",
        "name": "Оплатить размещение",
        "id": "29021609872910913",
        "link": "",
        "group": "0",
        "tags": null,
        "indexing": false,
        "ordering": false,
        "description": null,
        "weight": null,
        "order": 17,
        "linkIndexFieldSysName": [],
        "defaultValue": null,
        "constraints": null,
        "synthetic": false,
        "format": "webLink",
        "formatOptions": null,
        "groupName": null,
        "typeVariable": {},
        "arrayLink": false,
        "indexExists": false,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "json": false
      },
      {
        "sysName": "responds_approved_ids",
        "dataType": "arrayLink",
        "name": "✅ Одобренные отклики",
        "id": "67331609830708204",
        "link": "Responds",
        "group": "1609753049831",
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
        "arrayLink": true,
        "indexExists": false,
        "linkOrArrayLinkType": true,
        "linkType": false,
        "json": false
      },
      {
        "sysName": "responds_declined_ids",
        "dataType": "arrayLink",
        "name": "🚫 Отклоненные отклики",
        "id": "19311609830709019",
        "link": "Responds",
        "group": "1609753049831",
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
        "arrayLink": true,
        "indexExists": false,
        "linkOrArrayLinkType": true,
        "linkType": false,
        "json": false
      },
      {
        "sysName": "responds_new",
        "dataType": "number",
        "name": "Новых откликов",
        "id": "59481609753074292",
        "link": "",
        "group": "1609753049831",
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
        "format": "positiveNum",
        "formatOptions": {},
        "groupName": null,
        "typeVariable": {},
        "arrayLink": false,
        "indexExists": false,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "json": false
      },
      {
        "sysName": "responds_new_ids",
        "dataType": "arrayLink",
        "name": "🙋‍♂️ Новые отклики",
        "id": "52651609830657074",
        "link": "Responds",
        "group": "1609753049831",
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
        "arrayLink": true,
        "indexExists": false,
        "linkOrArrayLinkType": true,
        "linkType": false,
        "json": false
      },
      {
        "sysName": "salary_text",
        "dataType": "string",
        "name": "Зарплатная вилка",
        "id": "68241609919064693",
        "link": null,
        "group": "0",
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
        "arrayLink": false,
        "indexExists": false,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "json": false
      },
      {
        "sysName": "type",
        "dataType": "link",
        "name": "График",
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
        "typeVariable": {},
        "arrayLink": false,
        "indexExists": false,
        "linkOrArrayLinkType": true,
        "linkType": true,
        "json": false
      }
    ],
    "data": [
      {
        "salary_text": "От 60k ₽ до 160k ₽",
        "date_created": 1610126592000,
        "connect_instructions": "позвони мне позвони",
        "company_name": "Tesla",
        "company_city_ids": [
          {
            "name": "Другой город / за пределами РФ",
            "id": "other"
          }
        ],
        "job_name": "Хостесс",
        "functions_52": [
          {
            "name": "IT",
            "id": "57816d4e-5d1a-4240-8eda-0041ccdc3d55"
          }
        ],
        "connect_type": false,
        "candidates_quantity": 1,
        "job_status_message": "Активная вакансия",
        "job_description": "### Требования \n- один\n- два\n- три\n\n### Обязанности\n- один\n- два\n- три\n\n### Условия \n- один\n- два\n- три",
        "id": "a2017a31-5da3-438c-a352-ac4b5ddf5892",
        "company_description": "Делаем электрокары\n\n- 1\n- 2",
        "responds_new_ids": [
          {
            "salary_text": "От 60k ₽ до 160k ₽",
            "user_photo": "https://api.alfa.directual.com/fileUploaded/vitrina2252/36a095fd-d824-4cda-aaf8-ee56c9fc316b.jpg",
            "date_respond": 1610127689000,
            "user_CV": "https://api.alfa.directual.com/fileUploaded/vitrina2252/43745852-bd2b-403a-bd2b-9da780a1034b.pdf",
            "user_lastName": "Ershov",
            "user_insta": "https://www.instagram.com/pavelers/",
            "id": "c21ef2fa17f041518c75652e8d4199ba",
            "user_name": "Pavel"
          }
        ],
        "responds_new": 1,
        "company_in_profile": true,
        "type": {
          "id": "52",
          "type": "график 5 через 2"
        },
        "company_website": "tesla.com",
        "job_status": ""
      },
      {
        "salary_text": "От 40k ₽ до 120k ₽",
        "date_created": 1610121667000,
        "connect_instructions": "позвони мне позвони",
        "company_name": "Tesla",
        "company_city_ids": [
          {
            "name": "Другой город / за пределами РФ",
            "id": "other"
          }
        ],
        "job_name": "хостес",
        "functions_52": [
          {
            "name": "IT",
            "id": "57816d4e-5d1a-4240-8eda-0041ccdc3d55"
          },
          {
            "name": "Events",
            "id": "f458982e-0569-4006-8c7a-edef0d59bc07"
          }
        ],
        "connect_type": false,
        "candidates_quantity": 1,
        "job_status_message": "Активная вакансия",
        "responds_approved_ids": [],
        "job_description": "### Требования \n- один\n- два\n- три\n\n### Обязанности\n- один\n- два\n- три\n\n### Условия \n- один\n- два\n- три",
        "id": "44442563-ddd5-47b8-b707-4132234783d6",
        "company_description": "Делаем электрокары\n\n- 1\n- 2",
        "responds_new_ids": [],
        "functions_22": [],
        "responds_new": 0,
        "company_in_profile": true,
        "type": {
          "id": "52",
          "type": "график 5 через 2"
        },
        "company_website": "tesla.com",
        "responds_declined_ids": [
          {
            "user_photo": "https://api.alfa.directual.com/fileUploaded/vitrina2252/36a095fd-d824-4cda-aaf8-ee56c9fc316b.jpg",
            "date_process": 1610121840000,
            "user_CV": "https://api.alfa.directual.com/fileUploaded/vitrina2252/43745852-bd2b-403a-bd2b-9da780a1034b.pdf",
            "user_lastName": "Ershov",
            "user_insta": "https://www.instagram.com/pavelers/",
            "id": "25ab9424e74f1a81df0ba51b7163f85c",
            "user_name": "Pavel"
          }
        ],
        "job_status": ""
      },
      {
        "salary_text": "От 40k ₽ до 120k ₽",
        "date_created": 1610121665000,
        "company_name": "Tesla",
        "company_city_ids": [
          {
            "name": "Другой город / за пределами РФ",
            "id": "other"
          }
        ],
        "job_name": "ветеринар",
        "connect_type": true,
        "job_status_message": "Активная вакансия",
        "job_description": "### Требования \n- один\n- два\n- три\n\n### Обязанности\n- один\n- два\n- три\n\n### Условия \n- один\n- два\n- три",
        "id": "2293d8d0-6238-48e1-ba2f-f9141993e0d3",
        "company_description": "Делаем электрокары\n\n- 1\n- 2",
        "functions_22": [
          {
            "name": "Повар",
            "id": "cf10904f-55e2-4678-8b88-3f01f70b8308"
          }
        ],
        "company_in_profile": true,
        "type": {
          "id": "22",
          "type": "график 2 через 2"
        },
        "company_website": "tesla.com",
        "job_status": ""
      }
    ],
    "totalPages": 1,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [
      [
        "candidates_quantity",
        1330971
      ],
      [
        "company_city_ids.id",
        1330972
      ],
      [
        "company_city_ids.name",
        1330972
      ],
      [
        "company_description",
        1330971
      ],
      [
        "company_in_profile",
        1330971
      ],
      [
        "company_name",
        1330971
      ],
      [
        "company_website",
        1330971
      ],
      [
        "connect_instructions",
        1330971
      ],
      [
        "connect_type",
        1330971
      ],
      [
        "date_created",
        1330971
      ],
      [
        "functions_22.id",
        1330974
      ],
      [
        "functions_22.name",
        1330974
      ],
      [
        "functions_52.id",
        1330975
      ],
      [
        "functions_52.name",
        1330975
      ],
      [
        "id",
        1330971
      ],
      [
        "job_description",
        1330971
      ],
      [
        "job_name",
        1330971
      ],
      [
        "job_status_message",
        1330971
      ],
      [
        "payment_link",
        1330971
      ],
      [
        "responds_approved_ids.Employer_respond",
        1332190
      ],
      [
        "responds_approved_ids.date_process",
        1332190
      ],
      [
        "responds_approved_ids.id",
        1332190
      ],
      [
        "responds_approved_ids.salary_text",
        1332190
      ],
      [
        "responds_approved_ids.user_CV",
        1332190
      ],
      [
        "responds_approved_ids.user_fb",
        1332190
      ],
      [
        "responds_approved_ids.user_insta",
        1332190
      ],
      [
        "responds_approved_ids.user_lastName",
        1332190
      ],
      [
        "responds_approved_ids.user_name",
        1332190
      ],
      [
        "responds_approved_ids.user_phone",
        1332190
      ],
      [
        "responds_approved_ids.user_photo",
        1332190
      ],
      [
        "responds_approved_ids.user_telegram",
        1332190
      ],
      [
        "responds_declined_ids.date_process",
        1332190
      ],
      [
        "responds_declined_ids.user_CV",
        1332190
      ],
      [
        "responds_declined_ids.user_fb",
        1332190
      ],
      [
        "responds_declined_ids.user_insta",
        1332190
      ],
      [
        "responds_declined_ids.user_lastName",
        1332190
      ],
      [
        "responds_declined_ids.user_name",
        1332190
      ],
      [
        "responds_declined_ids.user_photo",
        1332190
      ],
      [
        "responds_new",
        1330971
      ],
      [
        "responds_new_ids.date_respond",
        1332190
      ],
      [
        "responds_new_ids.id",
        1332190
      ],
      [
        "responds_new_ids.salary_text",
        1332190
      ],
      [
        "responds_new_ids.user_CV",
        1332190
      ],
      [
        "responds_new_ids.user_fb",
        1332190
      ],
      [
        "responds_new_ids.user_insta",
        1332190
      ],
      [
        "responds_new_ids.user_lastName",
        1332190
      ],
      [
        "responds_new_ids.user_name",
        1332190
      ],
      [
        "responds_new_ids.user_photo",
        1332190
      ],
      [
        "salary_text",
        1330971
      ],
      [
        "type.id",
        1330973
      ],
      [
        "type.type",
        1330973
      ]
    ],
    "writeFields": [
      "id",
      "job_status"
    ],
    "structures": {
      "1330971": {
        "id": 1330971,
        "dateCreated": "2020-12-14T10:27:24Z",
        "hidden": false,
        "dateHidden": null,
        "networkID": 4265,
        "name": "Вакансии",
        "sysName": "Jobs",
        "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"company_city_ids\",\"dataType\":\"arrayLink\",\"name\":\"Город(а) работодателя\",\"id\":\"10281607944727109\",\"link\":\"cities\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":true,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"json\":false},{\"sysName\":\"candidates_quantity\",\"dataType\":\"number\",\"name\":\"Количество подходящих профилей кандидатов\",\"id\":\"12591609943959558\",\"link\":\"\",\"group\":\"1609920960347\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"job_status\",\"dataType\":\"string\",\"name\":\"Статус (техническое поле)\",\"id\":\"14461609825098470\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"salary\",\"dataType\":\"json\",\"name\":\"Зарплатная вилка\",\"id\":\"15401607941726857\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"rangeSlider\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"unitName\":\"k ₽\",\"booleanOptions\":[\"True\",\"False\"],\"customOptionPlaceholder\":\"Describe your option\",\"range\":{\"min\":20,\"max\":300,\"step\":10},\"customOptionType\":\"textarea\"},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":true},{\"sysName\":\"company_description\",\"dataType\":\"string\",\"name\":\"Описание компании работодателя\",\"id\":\"17331609671162114\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"responds_declined_ids\",\"dataType\":\"arrayLink\",\"name\":\"🚫 Отклоненные отклики\",\"id\":\"19311609830709019\",\"link\":\"Responds\",\"group\":\"1609753049831\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":true,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"json\":false},{\"sysName\":\"company_name\",\"dataType\":\"string\",\"name\":\"Название компании работодателя\",\"id\":\"22051607944259558\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"payment_link\",\"dataType\":\"string\",\"name\":\"Оплатить размещение\",\"id\":\"29021609872910913\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":17,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"job_status_message\",\"dataType\":\"string\",\"name\":\"Статус вакансии\",\"id\":\"30881609826436336\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":16,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"company_in_profile\",\"dataType\":\"boolean\",\"name\":\"Работодатель\",\"id\":\"33951607944479971\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"booleanOptions\":[\"Указан в моем профиле работодателя\",\"Другая компания\"],\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\"},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"user_id\",\"dataType\":\"link\",\"name\":\"Пользователь, разместивший вакансию\",\"id\":\"41481607941663169\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"json\":false},{\"sysName\":\"responds_new_ids\",\"dataType\":\"arrayLink\",\"name\":\"🙋‍♂️ Новые отклики\",\"id\":\"52651609830657074\",\"link\":\"Responds\",\"group\":\"1609753049831\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":true,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"json\":false},{\"sysName\":\"user_editor_id\",\"dataType\":\"link\",\"name\":\"Кто внес изменение\",\"id\":\"55761609867584495\",\"link\":\"WebUser\",\"group\":\"1609833907682\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"json\":false},{\"sysName\":\"responds_new\",\"dataType\":\"number\",\"name\":\"Новых откликов\",\"id\":\"59481609753074292\",\"link\":\"\",\"group\":\"1609753049831\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"connect_instructions\",\"dataType\":\"string\",\"name\":\"Инструкции для связи кандидату\",\"id\":\"64711607948185707\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"connect_type\",\"dataType\":\"boolean\",\"name\":\"Способ связи с кандидатом\",\"id\":\"65731607948157836\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"booleanOptions\":[\"Выслать кандидату мой телеграм\",\"Другой способ\"],\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\"},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"responds_approved_ids\",\"dataType\":\"arrayLink\",\"name\":\"✅ Одобренные отклики\",\"id\":\"67331609830708204\",\"link\":\"Responds\",\"group\":\"1609753049831\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":true,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"json\":false},{\"sysName\":\"functions_52\",\"dataType\":\"arrayLink\",\"name\":\"Функции 5/2\",\"id\":\"67731607941768628\",\"link\":\"functions52\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":true,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"json\":false},{\"sysName\":\"salary_text\",\"dataType\":\"string\",\"name\":\"Зарплатная вилка\",\"id\":\"68241609919064693\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":18,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"job_description\",\"dataType\":\"string\",\"name\":\"Описание вакансии\",\"id\":\"74961607943694679\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"responds_total\",\"dataType\":\"number\",\"name\":\"Всего откликов\",\"id\":\"74961609753055250\",\"link\":\"\",\"group\":\"1609753049831\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"company_website\",\"dataType\":\"string\",\"name\":\"Сайт работодателя\",\"id\":\"76091607944603531\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"date_created\",\"dataType\":\"date\",\"name\":\"Дата размещения вакансии\",\"id\":\"76531609833917406\",\"link\":\"\",\"group\":\"1609833907682\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"functions_22\",\"dataType\":\"arrayLink\",\"name\":\"Функции 2/2\",\"id\":\"82251607941755646\",\"link\":\"functions22\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":true,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"json\":false},{\"sysName\":\"type\",\"dataType\":\"link\",\"name\":\"График\",\"id\":\"82641607941710823\",\"link\":\"Type2252\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"json\":false},{\"sysName\":\"candidates_ids\",\"dataType\":\"arrayLink\",\"name\":\"Подходящие кандидаты\",\"id\":\"89551609920966036\",\"link\":\"WebUser\",\"group\":\"1609920960347\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"arrayLink\":true,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"json\":false},{\"sysName\":\"job_name\",\"dataType\":\"string\",\"name\":\"Название вакансии\",\"id\":\"93071607941686773\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false}]",
        "jsonGroupSettings": "[{\"name\":\"Отклики\",\"id\":1609753049831,\"order\":0},{\"name\":\"Timeline\",\"id\":1609833907682,\"order\":1},{\"name\":\"Matching\",\"id\":1609920960347,\"order\":2}]",
        "jsonViewIdSettings": "[{\"sysName\":\"job_name\"},{\"sysName\":\"company_name\"}]",
        "jsonSettings": null,
        "jsonNativeIndexSettings": null,
        "indexEnabled": true,
        "lastIndexUpdate": 0,
        "indexName": "",
        "dateChanged": "2021-01-08T12:43:06Z",
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
          "typeVariable": {},
          "arrayLink": false,
          "indexExists": false,
          "linkOrArrayLinkType": false,
          "linkType": false,
          "json": false
        },
        "objectIDSysName": "id",
        "folderId": 33596511
      },
      "1330972": {
        "id": 1330972,
        "dateCreated": "2020-09-18T07:42:27Z",
        "hidden": false,
        "dateHidden": null,
        "networkID": 4265,
        "name": "Cities",
        "sysName": "cities",
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
          "groupName": null,
          "typeVariable": {},
          "arrayLink": false,
          "indexExists": false,
          "linkOrArrayLinkType": false,
          "linkType": false,
          "json": false
        },
        "objectIDSysName": "id",
        "folderId": 33596509
      },
      "1330973": {
        "id": 1330973,
        "dateCreated": "2020-12-04T08:33:52Z",
        "hidden": false,
        "dateHidden": null,
        "networkID": 4265,
        "name": "Тип: 22 / 52",
        "sysName": "Type2252",
        "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"type\",\"name\":\"Тип работы\",\"dataType\":\"string\",\"id\":\"42681607070870540\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"@who\",\"name\":\"who changed\",\"dataType\":\"string\",\"id\":\"-1\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"@dateCreated\",\"name\":\"date created\",\"dataType\":\"date\",\"id\":\"-2\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"@dateChanged\",\"name\":\"date changed\",\"dataType\":\"date\",\"id\":\"-3\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false}]",
        "jsonGroupSettings": null,
        "jsonViewIdSettings": "[{\"sysName\":\"type\"}]",
        "jsonSettings": null,
        "jsonNativeIndexSettings": null,
        "indexEnabled": false,
        "lastIndexUpdate": 0,
        "indexName": "",
        "dateChanged": "2020-12-04T08:36:05Z",
        "createBy": 1,
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
          "formatOptions": null,
          "groupName": null,
          "typeVariable": {},
          "arrayLink": false,
          "indexExists": false,
          "linkOrArrayLinkType": false,
          "linkType": false,
          "json": false
        },
        "objectIDSysName": "id",
        "folderId": 33596509
      },
      "1330974": {
        "id": 1330974,
        "dateCreated": "2020-12-04T10:19:23Z",
        "hidden": false,
        "dateHidden": null,
        "networkID": 4265,
        "name": "Функции 22",
        "sysName": "functions22",
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
          "groupName": null,
          "typeVariable": {},
          "arrayLink": false,
          "indexExists": false,
          "linkOrArrayLinkType": false,
          "linkType": false,
          "json": false
        },
        "objectIDSysName": "id",
        "folderId": 33596509
      },
      "1330975": {
        "id": 1330975,
        "dateCreated": "2020-12-04T10:19:52Z",
        "hidden": false,
        "dateHidden": null,
        "networkID": 4265,
        "name": "Функции 52",
        "sysName": "functions52",
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
          "groupName": null,
          "typeVariable": {},
          "arrayLink": false,
          "indexExists": false,
          "linkOrArrayLinkType": false,
          "linkType": false,
          "json": false
        },
        "objectIDSysName": "id",
        "folderId": 33596509
      },
      "1332190": {
        "id": 1332190,
        "dateCreated": "2021-01-04T09:40:26Z",
        "hidden": false,
        "dateHidden": null,
        "networkID": 4265,
        "name": "Отклики",
        "sysName": "Responds",
        "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"job_id\",\"dataType\":\"link\",\"name\":\"Вакансия\",\"id\":\"17681609753231539\",\"link\":\"Jobs\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"json\":false},{\"sysName\":\"jobCompany\",\"dataType\":\"string\",\"name\":\"Название компании работодателя\",\"id\":\"18201609753320275\",\"link\":\"\",\"group\":\"1609753298511\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"user_telegram\",\"dataType\":\"string\",\"name\":\"Telegram\",\"id\":\"18501610096811464\",\"link\":\"\",\"group\":\"1610096745541\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"user_photo\",\"dataType\":\"file\",\"name\":\"Фото кандидата\",\"id\":\"19891610104119331\",\"link\":\"\",\"group\":\"1610096745541\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"jobType\",\"dataType\":\"link\",\"name\":\"График\",\"id\":\"21591609753362987\",\"link\":\"Type2252\",\"group\":\"1609753298511\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"json\":false},{\"sysName\":\"date_created\",\"dataType\":\"date\",\"name\":\"Дата подбора вакансии\",\"id\":\"22671609753618893\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"user_id\",\"dataType\":\"link\",\"name\":\"Кандидат\",\"id\":\"30541609753246985\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"json\":false},{\"sysName\":\"user_CV\",\"dataType\":\"file\",\"name\":\"Резюме кандидата\",\"id\":\"42111610096763643\",\"link\":\"\",\"group\":\"1610096745541\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"jobFunctions22\",\"dataType\":\"arrayLink\",\"name\":\"Функции\",\"id\":\"45431609753369136\",\"link\":\"functions22\",\"group\":\"1609753298511\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":true,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"json\":false},{\"sysName\":\"jobName\",\"dataType\":\"string\",\"name\":\"Название вакансии\",\"id\":\"51461609753306387\",\"link\":\"\",\"group\":\"1609753298511\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"date_process\",\"dataType\":\"date\",\"name\":\"Дата обработки работодателем\",\"id\":\"62351609753664330\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"user_name\",\"dataType\":\"string\",\"name\":\"Имя кандидата\",\"id\":\"62681610095241918\",\"link\":\"\",\"group\":\"1610096745541\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"jobCompanySite\",\"dataType\":\"string\",\"name\":\"Сайт работодателя\",\"id\":\"63091609753320998\",\"link\":\"\",\"group\":\"1609753298511\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"jobCompanyCity\",\"dataType\":\"arrayLink\",\"name\":\"Город(а) работодателя\",\"id\":\"67721609753322261\",\"link\":\"cities\",\"group\":\"1609753298511\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":true,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"json\":false},{\"sysName\":\"date_respond\",\"dataType\":\"date\",\"name\":\"Дата отклика\",\"id\":\"68381609753647773\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"jobCompanyDesc\",\"dataType\":\"string\",\"name\":\"Описание компании работодателя\",\"id\":\"70501609753347877\",\"link\":\"\",\"group\":\"1609753298511\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"user_insta\",\"dataType\":\"string\",\"name\":\"Instagram\",\"id\":\"73291610114557556\",\"link\":\"\",\"group\":\"1610096745541\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"user_fb\",\"dataType\":\"string\",\"name\":\"Facebook\",\"id\":\"76181610114558163\",\"link\":\"\",\"group\":\"1610096745541\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"jobFunctions52\",\"dataType\":\"arrayLink\",\"name\":\"Функции\",\"id\":\"77141609753455553\",\"link\":\"functions52\",\"group\":\"1609753298511\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":true,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"json\":false},{\"sysName\":\"jobDescription\",\"dataType\":\"string\",\"name\":\"Описание вакансии\",\"id\":\"87151609753355684\",\"link\":\"\",\"group\":\"1609753298511\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"user_phone\",\"dataType\":\"string\",\"name\":\"Телефон кандидата\",\"id\":\"87451610096826236\",\"link\":\"\",\"group\":\"1610096745541\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"phone\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"salary_text\",\"dataType\":\"string\",\"name\":\"Зарплатная вилка\",\"id\":\"87951609753577950\",\"link\":\"\",\"group\":\"1609753298511\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"status\",\"dataType\":\"string\",\"name\":\"Статус (suggested,new,approved,declined)\",\"id\":\"91021609753267495\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"Employer_respond\",\"dataType\":\"string\",\"name\":\"Ответ работодателя\",\"id\":\"91271610110441320\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"user_lastName\",\"dataType\":\"string\",\"name\":\"Фамилия кандидата\",\"id\":\"93431610096794050\",\"link\":\"\",\"group\":\"1610096745541\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false}]",
        "jsonGroupSettings": "[{\"id\":1609753298511,\"name\":\"Описание вакансии\",\"order\":0},{\"id\":1610096745541,\"name\":\" Инфо о кандидате\",\"order\":1}]",
        "jsonViewIdSettings": "[{\"sysName\":\"jobName\"},{\"sysName\":\"jobCompany\"},{\"sysName\":\"user_name\"},{\"sysName\":\"user_lastName\"}]",
        "jsonSettings": null,
        "jsonNativeIndexSettings": null,
        "indexEnabled": true,
        "lastIndexUpdate": 0,
        "indexName": "",
        "dateChanged": "2021-01-08T14:03:05Z",
        "createBy": 1,
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
          "typeVariable": {},
          "arrayLink": false,
          "indexExists": false,
          "linkOrArrayLinkType": false,
          "linkType": false,
          "json": false
        },
        "objectIDSysName": "id",
        "folderId": 33596511
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
        "typeVariable": {},
        "arrayLink": false,
        "indexExists": false,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "json": false
      },
      {
        "sysName": "job_status",
        "dataType": "string",
        "name": "Статус (техническое поле)",
        "id": "14461609825098470",
        "link": "",
        "group": "0",
        "tags": "",
        "indexing": false,
        "ordering": false,
        "description": null,
        "weight": null,
        "order": 15,
        "linkIndexFieldSysName": [],
        "defaultValue": "",
        "constraints": null,
        "synthetic": false,
        "format": null,
        "formatOptions": {},
        "groupName": null,
        "typeVariable": {},
        "arrayLink": false,
        "indexExists": false,
        "linkOrArrayLinkType": false,
        "linkType": false,
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
    // isAuth: false,
    isAuth: true,
    role: "admin",
    token: "a256c0c6-6aa1-4706-afad-521d0d37e3f3",
    user: "pavel@directual.com"
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
            "fetch": [],
            "sysName": "type",
            "name": "Категория вакансии",
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
            "fetch": [],
            "sysName": "type",
            "name": "Категория вакансии",
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
          "lastName": {
            "id": "lastName",
            "content": "Фамлия",
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
          "type": {
            "id": "type",
            "content": "Категория вакансии",
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
            "description": "Вакансии в шоурумах, магазинах, салонах, фитнес-клубах и ресторанном бизнесе"
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
            "defaultValueOn": true,
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
            "include": true,
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
            "required": true
          },
          "Facebook_lonk": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": false,
            "descriptionFlag": true,
            "description": "опционально"
          },
          "Instagram_link": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": false,
            "descriptionFlag": true,
            "description": "опционально"
          }
        },
        "columns": {
          "tab-1": {
            "id": "tab-1",
            "title": "Основная информация",
            "fieldIds": [
              "firstName",
              "lastName",
              "city",
              "id",
              "Instagram_link",
              "Facebook_lonk",
              "type"
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
                "id": "23701609181788383",
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
          }
        },
        "columnOrder": [
          "tab-1",
          "24571609181681819",
          "21061609181696456",
          "39401609181601788"
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
              "key": "5b27b967-9c4d-4dbe-89f0-abb4186e64a1",
              "value": "PR"
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
              "value": "Fashion-дизайнер"
            },
            {
              "key": "35a1a90b-b7bf-44dd-b2cb-0537f35c995a",
              "value": "Бренд менеджер"
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
              "key": "57816d4e-5d1a-4240-8eda-0041ccdc3d55",
              "value": "IT"
            },
            {
              "key": "f9e6e8ea-aea5-4a2e-b46c-4dfa353fec64",
              "value": "HR"
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
            }
          ]
        },
        "city": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": true,
          "fileImageSize": 200,
          "clickable": false,
          "defaultValueOn": true,
          "defaultValue": "95ddc157-f2dc-4ab1-a1e5-ce9c6398bfdf",
          "required": true,
          "searchData": [
            {
              "key": "fa3a51d6-2784-48aa-acb6-58a4934260cb",
              "value": "Нижний Новгород"
            },
            {
              "key": "efd0190e-1a19-40a7-9d00-b695b60e7b18",
              "value": "Новосибирск"
            },
            {
              "key": "5f07b0e5-cdeb-4b6d-bd7d-1b5aa25d597b",
              "value": "Астрахань"
            },
            {
              "key": "2985fa84-8a83-4cfe-8ac8-086b46480e1b",
              "value": "Уфа"
            },
            {
              "key": "cf89852c-0979-4dc2-a688-9f5f40e5f7b1",
              "value": "Иркутск"
            },
            {
              "key": "71a52f70-4701-476f-a9eb-065ed0ce34c0",
              "value": "Тюмень"
            },
            {
              "key": "9f937f4d-fff3-4e95-9833-05edba95e9fb",
              "value": "Киров"
            },
            {
              "key": "c272e7cd-d3c1-41a6-8ef3-731c1b6d3b0b",
              "value": "Тольятти"
            },
            {
              "key": "ee69e04b-bb3b-4835-a8c9-2a2fa47c9c1a",
              "value": "Кемерово"
            },
            {
              "key": "a0734bbe-965e-4be4-bf3e-0058587fb0d1",
              "value": "Чебоксары"
            },
            {
              "key": "35926902-ce08-4620-b791-a957b8e030bf",
              "value": "Ульяновск"
            },
            {
              "key": "886de159-f52c-4e0f-8fbf-c290e42b8880",
              "value": "Махачкала"
            },
            {
              "key": "fa8828c2-03ab-4a44-9301-407331a645bc",
              "value": "Томск"
            },
            {
              "key": "15d359fc-e894-4f19-8279-0195fa45b8f3",
              "value": "Улан-Удэ"
            },
            {
              "key": "e980a012-b87e-46fa-98b9-bc62c29f432f",
              "value": "Ижевск"
            },
            {
              "key": "aeeffdac-8680-4de7-a6b9-fbeee9732752",
              "value": "Брянск"
            },
            {
              "key": "6cb5b487-5cb7-4bf4-a197-c1fb7fd141ad",
              "value": "Курск"
            },
            {
              "key": "42af9a7c-b7ea-4079-91a5-65b408ddc2de",
              "value": "Тула"
            },
            {
              "key": "d317eccc-2c59-4443-adda-5dcb267453a0",
              "value": "Красноярск"
            },
            {
              "key": "e32a86b6-07a0-4ee6-b380-6b51a72f4937",
              "value": "Пенза"
            },
            {
              "key": "5f4e2ed6-c77c-4ce3-bc36-5e639a4a975b",
              "value": "Новокузнецк"
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
              "key": "411c9c4a-6590-4f12-9340-b268d1bade7b",
              "value": "Екатеринбург"
            },
            {
              "key": "a6b631d7-1456-421a-a8b7-a8880a9d3383",
              "value": "Челябинск"
            },
            {
              "key": "9e5fb78a-03c1-4016-a7f3-8341c0cbfcf6",
              "value": "Краснодар"
            },
            {
              "key": "ee7c7efc-2577-4efa-9675-f2bf3b4e3ba1",
              "value": "Оренбург"
            },
            {
              "key": "e2591b96-b2ba-4ce8-8c63-9477481effb5",
              "value": "Тверь"
            },
            {
              "key": "155a6363-9fb5-4d1c-b033-774825f25f1d",
              "value": "Калининград"
            },
            {
              "key": "1d0dc234-a8d0-4d14-93a4-42f8beb6e474",
              "value": "Саратов"
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
              "key": "8d8ee02c-05ca-4f16-b118-405f0a4a2028",
              "value": "Магнитогорск"
            },
            {
              "key": "405608e6-a8d2-44c3-b371-87ac6762741a",
              "value": "Владивосток"
            },
            {
              "key": "dfc75bdc-ac4d-41b6-bdad-220ea284a00e",
              "value": "Ярославль"
            },
            {
              "key": "2a58d436-70b0-4707-b52e-21c4a91f1ddd",
              "value": "Хабаровск"
            },
            {
              "key": "a92b6c0a-cabe-4a03-b1b8-808dc039869f",
              "value": "Липецк "
            },
            {
              "key": "7a211c47-1b4a-42b2-97ee-4c690ae147fd",
              "value": "Самара"
            },
            {
              "key": "4f04826b-a0f7-4abd-8261-e81b5f869b69",
              "value": "Санкт-Петербург"
            },
            {
              "key": "68bcde48-bffe-4d82-aab2-c04dd3393e89",
              "value": "Омск"
            },
            {
              "key": "a8b3fdc6-32ca-4210-adee-f779417c6bb6",
              "value": "Пермь"
            },
            {
              "key": "2fda8d82-7c06-46f8-bc25-6df163a7b554",
              "value": "Волгоград"
            },
            {
              "key": "a5e850fa-0ce2-4f5f-a276-de5c731626ff",
              "value": "Барнаул"
            },
            {
              "key": "db96b2ff-efb5-48e3-a079-1449024642ea",
              "value": "Ставрополь"
            },
            {
              "key": "d1bfc6ed-4a83-4f0a-a553-45a3152a03ff",
              "value": "Ростов-на-Дону"
            },
            {
              "key": "fff854f9-473f-46d8-afd2-318abd771a04",
              "value": "Воронеж"
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
              "key": "c0f6e5fe-15e7-469a-9dcc-6740e29585ac",
              "value": "Якутск"
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
              "key": "87413717-a238-4c2b-b8b8-b9ebbbd13d88",
              "value": "Златоуст"
            },
            {
              "key": "387c5608-bfe7-48a9-808e-1f394fd46228",
              "value": "Уссурийск"
            },
            {
              "key": "ab697bbb-564b-47f3-aa26-2b963422aa45",
              "value": "Березники"
            },
            {
              "key": "dbe428b0-33d4-451d-ba51-82d8bcd0d6d4",
              "value": "Нефтеюганск"
            },
            {
              "key": "5c236ec0-8f7a-4fa5-8e48-24d21f1ea39e",
              "value": "Чита"
            },
            {
              "key": "6483da5c-3d7d-4e62-a5b7-c259f5b11f0f",
              "value": "Орел"
            },
            {
              "key": "5347ab07-6807-496e-932b-4db13ec17ac3",
              "value": "Вологда"
            },
            {
              "key": "51f7889b-2afd-49e9-b9fe-fdc3d43bb4cb",
              "value": "Комсомольск-на-Амуре"
            },
            {
              "key": "6451bc49-0213-416c-a656-119d4b52b63b",
              "value": "Армавир"
            },
            {
              "key": "183be710-49ea-42b1-bfcb-8391188d1864",
              "value": "Волгодонск"
            },
            {
              "key": "18686d6b-3c73-4e03-9329-2f4c46e0c430",
              "value": "Рубцовск"
            },
            {
              "key": "a537ad97-3d9a-4247-ab7c-c5fd09e323d4",
              "value": "Пятигорск"
            },
            {
              "key": "296ceb44-e414-4026-8037-303680b519af",
              "value": "Кызыл"
            },
            {
              "key": "11edc61d-a00f-4ec8-b88e-d35b4eca2a19",
              "value": "Обнинск"
            },
            {
              "key": "ecb2b6a4-dd90-4d7a-9873-97f2417042cc",
              "value": "Пушкино"
            },
            {
              "key": "419030a9-a9dc-4a41-a633-a23dbbb65116",
              "value": "Норильск"
            },
            {
              "key": "962b61df-8781-4eec-9943-901c7d411592",
              "value": "Хасавюрт"
            },
            {
              "key": "64dfbbca-a11f-4ca5-a9fa-4fbb6b2d868c",
              "value": "Батайск"
            },
            {
              "key": "d7b0a7a9-71ca-484f-9a43-5629d9226850",
              "value": "Северск"
            },
            {
              "key": "141bf2ba-a924-4d61-8f4a-abe19dd79b5f",
              "value": "Арзамас"
            },
            {
              "key": "81dce290-2cff-406c-bc0d-3914be9534c1",
              "value": "Артем"
            },
            {
              "key": "b7ca406f-71d8-4125-b22b-1c4b3b5b3873",
              "value": "Междуреченск"
            },
            {
              "key": "4df6ed07-84ce-4324-a75c-b80b4138b8fa",
              "value": "Сургут"
            },
            {
              "key": "8cb8d65f-0e5b-4af3-a41f-db90ca5a9647",
              "value": "Грозный"
            },
            {
              "key": "20a74ee5-5cd4-45b1-a243-aa7db323a0c2",
              "value": "Тамбов"
            },
            {
              "key": "aa11ad14-a9f4-42ee-acad-06047ebdf17a",
              "value": "Саранск"
            },
            {
              "key": "573d8f7f-2227-4a4e-801b-f77e04a532db",
              "value": "Дзержинск"
            },
            {
              "key": "f6c16e58-b736-4fb3-b1f4-bf988f2b7fc2",
              "value": "Северодвинск"
            },
            {
              "key": "a952104f-36d4-4ed0-9ebb-a52b3135c8a8",
              "value": "Шахты"
            },
            {
              "key": "e55baa9d-693a-4b17-8dd5-492d67a9bc69",
              "value": "Рыбинск"
            },
            {
              "key": "14aca2a9-a7c1-4b94-baa3-011851f8c2f1",
              "value": "Новочеркасск"
            },
            {
              "key": "796783ae-c833-4dbf-91b2-3e31682ac3ba",
              "value": "Ковров"
            },
            {
              "key": "d32dbef5-8cff-4874-828b-af6db8aa9846",
              "value": "Новочебоксарск"
            },
            {
              "key": "c7e0c655-930b-455a-b21e-09b823ec6ba8",
              "value": "Ноябрьск"
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
              "key": "1dca24bc-dcbe-49a2-9392-1cbf0cd6a729",
              "value": "Ангарск"
            },
            {
              "key": "fa5befd0-2901-433a-8605-ab4a9e6727cc",
              "value": "Благовещенск"
            },
            {
              "key": "6a9fc335-cbc3-4f44-addf-8c8ca81ac238",
              "value": "Находка"
            },
            {
              "key": "923858f8-28a2-4ff8-8c3c-fc96aa7081c7",
              "value": "Коломна"
            },
            {
              "key": "e37beb72-222e-4cdf-acd2-f36100784e15",
              "value": "Волжский"
            },
            {
              "key": "b2a7a390-a8cd-46e3-b2b0-219bd356343f",
              "value": "Новомосковск"
            },
            {
              "key": "49e45256-e242-41a6-b7ba-ea5c597dc67d",
              "value": "Кисловодск"
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
              "key": "beed9e2a-51f1-447b-973a-c369bf297e19",
              "value": "Сыктывкар"
            },
            {
              "key": "8ab91dfb-83c1-44fb-af26-7487894a1569",
              "value": "Нижнекамск"
            },
            {
              "key": "a4d031ad-645c-4c5c-86f9-2a85819dc283",
              "value": "Мытищи"
            },
            {
              "key": "59dc4c08-4a5b-4a21-bede-5772eae25d69",
              "value": "Ессентуки "
            },
            {
              "key": "a0ec46a3-44de-4a4a-a0dc-126b0c4afbf5",
              "value": "Балашиха"
            },
            {
              "key": "6aa99a15-e1d3-4318-9f63-2a07b63690e1",
              "value": "Подольск"
            },
            {
              "key": "8b9c8a1d-8429-43a6-acc3-b4d2fd2ddf80",
              "value": "Люберцы"
            },
            {
              "key": "766bf994-acfb-449b-a637-8ed86a83d4b9",
              "value": "Абакан"
            },
            {
              "key": "b37f7d2f-78fa-48ff-8915-0ce7fcd6e220",
              "value": "Серпухов"
            },
            {
              "key": "88c9dcaa-3f67-4ac7-b852-d4843abd2e0f",
              "value": "Нефтекамск"
            },
            {
              "key": "34b49b0b-f99d-4e79-a433-1a6612d712c5",
              "value": "Октябрьский"
            },
            {
              "key": "e7041943-68b2-4a50-b760-5e15ca6a3603",
              "value": "Ленинск-Кузнецкий"
            },
            {
              "key": "ccf34bd4-1720-49f8-8d98-a11d4ab6c629",
              "value": "Таганрог"
            },
            {
              "key": "cf53a24a-3a9d-4192-acd4-c5829dec337b",
              "value": "Орск"
            },
            {
              "key": "ccf4061b-b791-4bd6-925c-245c6257485f",
              "value": "Невинномысск"
            },
            {
              "key": "991e734f-a888-4340-ae4c-d5bd32273188",
              "value": "Архангельск"
            },
            {
              "key": "21bf7b64-5b43-4c95-ba7b-0c678e73b9f6",
              "value": "Смоленск"
            },
            {
              "key": "fbe1bea9-9ba3-42c3-a708-4e29e2601dbb",
              "value": "Братск"
            },
            {
              "key": "191bc69a-cd30-4456-8e11-59dd98476e2b",
              "value": "Череповец"
            },
            {
              "key": "aa1b9dfe-9b26-4a88-84db-212f35dcc7e1",
              "value": "Владимир"
            },
            {
              "key": "944b7750-cdfb-43b9-a2cc-9dd94ca49f15",
              "value": "Сочи"
            },
            {
              "key": "05ae4d4b-2ff2-4cfc-92ff-1153ea27fd7f",
              "value": "Калуга"
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
              "key": "1dfaa028-6c8b-4bd7-9ce9-b9462848e7b2",
              "value": "Каменск-Уральский"
            },
            {
              "key": "51f0a82c-49af-4ea7-b1ea-c1e99099923c",
              "value": "Майкоп"
            },
            {
              "key": "52b6844a-669d-470a-b3bd-617a8cf18e89",
              "value": "Первоуральск"
            },
            {
              "key": "f0ffa934-f809-4d28-a9d0-c6276c148189",
              "value": "Муром"
            },
            {
              "key": "0bae7c17-0e1f-40f6-b27c-47458c2c81d8",
              "value": "Сергиев Посад"
            },
            {
              "key": "07aadf04-2e21-4311-9466-512a18a4afd9",
              "value": "Щелково"
            },
            {
              "key": "75bf8bc5-b1ec-454e-973d-368253b4ca46",
              "value": "Элиста"
            },
            {
              "key": "42790cbf-02d7-4585-b274-117e6ccb0c60",
              "value": "Сарапул"
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
              "key": "1fa0dda4-186d-4192-8a3f-923c7944d95d",
              "value": "Южно-Сахалинск"
            },
            {
              "key": "f35e0627-33b3-495d-b12b-86a2c9cf5afe",
              "value": "Димитровград"
            },
            {
              "key": "52a85978-37eb-4b02-b0d9-eb857686469c",
              "value": "Орехово-Зуево"
            },
            {
              "key": "6d4d13b3-f0b9-40f0-8b88-0c2c76cd8a9e",
              "value": "Новошахтинск"
            },
            {
              "key": "b9ac35fb-ef27-4d4b-9fcd-3a806c871ed4",
              "value": "Бийск"
            },
            {
              "key": "6b171a2c-af75-46bc-9429-79ec29b54a1d",
              "value": "Балаково"
            },
            {
              "key": "729165b3-1352-450c-a7c8-aca6f89eafeb",
              "value": "Сызрань"
            },
            {
              "key": "59746661-04a6-431f-913c-7100ae693e45",
              "value": "Салават"
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
              "key": "01046d0e-326a-4289-85d8-208625de89e4",
              "value": "Копейск"
            },
            {
              "key": "704f3ef5-a27b-4988-baca-f6e002e9a164",
              "value": "Красногорск"
            },
            {
              "key": "b4a5efd6-0013-4f47-9f5b-709070821c61",
              "value": "Ачинск"
            },
            {
              "key": "0b8a1695-8a68-4491-88f1-562ecbbbeab6",
              "value": "Новый Уренгой"
            },
            {
              "key": "e31eed11-c387-4dbe-882d-dbd624eeaba3",
              "value": "Жуковский"
            },
            {
              "key": "e70f3e35-6f6e-4b45-8861-17716a2a3927",
              "value": "Курган"
            },
            {
              "key": "673f8960-e484-4b9e-83e3-989ff7759e7b",
              "value": "Петрозаводск"
            },
            {
              "key": "6237f1fb-f593-42ef-bd41-180e83381e30",
              "value": "Новокуйбышевск"
            },
            {
              "key": "9b5e8b83-d806-4855-ae3d-3b5d7f425536",
              "value": "Кострома"
            },
            {
              "key": "2b70ca02-bdad-4d84-864d-909c0a3e8b2c",
              "value": "Нижневартовск"
            },
            {
              "key": "33599e07-6e48-490a-b918-360d51d307fb",
              "value": "Нальчик"
            },
            {
              "key": "3a132be6-eb78-468e-bfc4-d0d369ff2ff6",
              "value": "Старый Оскол"
            },
            {
              "key": "8e3e81bd-5999-4e15-a87b-df3c869c7454",
              "value": "Петропавловск-Камчатский"
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
              "key": "7a70eb26-b75a-4ce1-bd40-776742689221",
              "value": "Дербент"
            },
            {
              "key": "1e7dd1af-6fce-4e04-8dcd-bdceaef37f8e",
              "value": "Владикавказ"
            },
            {
              "key": "44cf953a-3673-41a2-a763-382e1e6c95ed",
              "value": "Псков"
            },
            {
              "key": "8176f813-1930-4a5d-a67d-e7a60beb14cc",
              "value": "Миасс"
            },
            {
              "key": "900710e0-c8ed-4e3c-961c-32261fb1c6ed",
              "value": "Черкесск"
            },
            {
              "key": "beda39e1-253f-44d5-a4b8-c717433a7511",
              "value": "Железнодорожный"
            },
            {
              "key": "a81cace3-0ae3-4c48-9346-ebd67f740e2b",
              "value": "Елец"
            },
            {
              "key": "2d0da3cb-1d1c-490e-b67b-70b9f78f8d2f",
              "value": "Воткинск"
            },
            {
              "key": "other",
              "value": "Другой город / за пределами РФ"
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
          "include": true,
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
          "required": true,
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
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false,
          "descriptionFlag": true,
          "description": "опционально"
        },
        "Instagram_link": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false,
          "descriptionFlag": true,
          "description": "опционально"
        }
      },
      "useEditing": true,
      "edit": true
    },
    "fileds": [
      {
        "sysName": "22_functions",
        "dataType": "arrayLink",
        "name": "Функции для категории 22",
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
        "json": false,
        "indexExists": false,
        "linkOrArrayLinkType": true,
        "linkType": false,
        "arrayLink": true,
        "typeVariable": {}
      },
      {
        "sysName": "52_functions",
        "dataType": "arrayLink",
        "name": "Функции для категории 52",
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
        "json": false,
        "indexExists": false,
        "linkOrArrayLinkType": true,
        "linkType": false,
        "arrayLink": true,
        "typeVariable": {}
      },
      {
        "sysName": "Facebook_lonk",
        "dataType": "string",
        "name": "Facebook",
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
        "json": false,
        "indexExists": false,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "typeVariable": {}
      },
      {
        "sysName": "Instagram_link",
        "dataType": "string",
        "name": "Instagram",
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
        "json": false,
        "indexExists": false,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "typeVariable": {}
      },
      {
        "sysName": "city",
        "dataType": "link",
        "name": "Город",
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
        "json": false,
        "indexExists": false,
        "linkOrArrayLinkType": true,
        "linkType": true,
        "arrayLink": false,
        "typeVariable": {}
      },
      {
        "sysName": "firstName",
        "dataType": "string",
        "name": "Имя",
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
        "json": false,
        "indexExists": false,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "typeVariable": {}
      },
      {
        "sysName": "id",
        "dataType": "id",
        "name": "Username (login)",
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
        "json": false,
        "indexExists": false,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "typeVariable": {}
      },
      {
        "sysName": "lastName",
        "dataType": "string",
        "name": "Фамлия",
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
        "json": false,
        "indexExists": false,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "typeVariable": {}
      },
      {
        "sysName": "salary_raw",
        "dataType": "json",
        "name": "Ожидания по доходу ",
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
        "json": true,
        "indexExists": false,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "typeVariable": {}
      },
      {
        "sysName": "type",
        "dataType": "link",
        "name": "Категория вакансий",
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
        "json": false,
        "indexExists": false,
        "linkOrArrayLinkType": true,
        "linkType": true,
        "arrayLink": false,
        "typeVariable": {}
      }
    ],
    "error": null,
    "isSuccessWrite": false,
    "response": null,
    "data": [
      {
        "city": "95ddc157-f2dc-4ab1-a1e5-ce9c6398bfdf",
        "52_functions": [
          "1d25ecad-0a05-42c8-a9d8-76ae5939fc09",
          "5b27b967-9c4d-4dbe-89f0-abb4186e64a1"
        ],
        "salary_raw": "{\"secondValue\":100,\"firstValue\":50}",
        "22_functions": [
          "772fafad-36a7-4ccc-b338-ebb3b670e554"
        ],
        "lastName": "Ershov",
        "firstName": "Pavel",
        "id": "79151845361",
        "type": "52"
      }
    ]
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