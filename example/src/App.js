import React, { useEffect, useState } from 'react'
import {
  FpsHtml, FpsCards, FpsForm, MainMenu, FpsTable, Button, SomethingWentWrong, Input, FpsTheme,
  ComponentDetails, FpsWrapper, ContentWrapper, ActionPanel, Radio, SignIn, SignUp, Media, CodeSnippet,
  Dnd, Profile, TabsPane, Loader, optionsHandler
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
      logoUrl={logoUrl}
      currentRoute={location.pathname || '/'}
      menu={[
        { name: "What?", route: "/", icon: "info", link: <Link to="/">What is it?</Link> },
        { name: "Components", subheader: true },
        { name: "Sign In / Sign Up / Profile", route: "/profile", icon: "user", link: <Link to="/profile">Sign in, Sign up, Profile</Link> },
        { name: "Form", route: "/form", icon: "edit", link: <Link to="/form">Form</Link> },
        { name: "Theme management", route: "/theme", icon: "styles", link: <Link to="/theme">Theme management</Link> },
        { name: "Table (in progress)", route: "/table", icon: "database", link: <Link to="/table">Table (in progress)</Link> },
        // { name: "List view (soon)", route: "/list", icon: "list", disabled: true },
        { name: "Cards (soon)", route: "/cards", icon: "cards", disabled: true },
        { name: "Chat (soon)", route: "/chat", icon: "bubble", disabled: true },
        // { name: "Calculator (soon)", route: "/calc", icon: "actions", disabled: true },
        { name: "Design system", subheader: true },
        { name: "Typography", route: "/system-typography", icon: "paragraph", link: <Link to="/system-typography">Typography</Link> },
        { name: "Directual Icons", route: "/system-icons", icon: "babai", link: <Link to="/system-icons">Directual icons</Link> },
        { name: "Buttons", route: "/system-button", icon: "done", link: <Link to="/system-button">Action panel, Buttons</Link> },
        { name: "Data entry", route: "/system-data-entry", icon: "import", link: <Link to="/system-data-entry">Data entry</Link> },
        { name: "Media", route: "/system-media", icon: "play", link: <Link to="/system-media">Media</Link> },
        { name: "Layout", route: "/system-layout", icon: "dashboard", link: <Link to="/system-layout">Layout</Link> },
        // { name: "Drag'n'drop", route: "/system-dnd", icon: "copy", link: <Link to="/system-dnd">Drag'n'drop</Link> }
      ]}

    />)
}

const App = (props) => {
  let exampleDataHtml = {
    html: '<b>test</b>'
  }

  let exampleTable =
  {
    "sl": "getBooks_FPS",
    "pageSize": "10",
    'tableTitle': 'Пролетарии всех стран соединяйтесь',
    'desktopView': 'table',
    'mobileView': 'cards',
    'pageSize': '25',
    'tableFilters': 'true',
    'tableQuickSearch': 'true',
    "headerField": null,
    "params": "",
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
        "json": false,
        "linkOrArrayLinkType": true,
        "linkType": true,
        "arrayLink": false,
        "indexExists": false,
        "typeVariable": {}
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
        "json": false,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "indexExists": false,
        "typeVariable": {}
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
        "json": false,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "indexExists": false,
        "typeVariable": {}
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
        "json": false,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "indexExists": false,
        "typeVariable": {}
      }
    ],
    "data": [
      {
        "year": 1791,
        "author_id": {
          "first_name": "James",
          "country": "Scotland",
          "books_ids": [
            {
              "year": 1791,
              "title": "Life of Samuel Johnson",
              "genre": "Biography",
              "id": "1"
            }
          ],
          "last_name": "Boswell",
          "birth_year": 1740
        },
        "genre": "Biography",
        "title": "Life of Samuel Johnson"
      },
      {
        "year": 1869,
        "author_id": {
          "first_name": "Leo",
          "country": "Russia",
          "books_ids": [
            {
              "year": 1869,
              "title": "War and Peace",
              "genre": "Novel",
              "id": "2"
            },
            {
              "year": 1877,
              "title": "Anna Karenina",
              "genre": "Novel",
              "id": "3"
            },
            {
              "title": "The Cossacks",
              "year": 1863,
              "genre": "Novella",
              "id": "4"
            }
          ],
          "last_name": "Tolstoy",
          "birth_year": 1828
        },
        "genre": "Novel",
        "title": "War and Peace"
      },
      {
        "year": 1877,
        "author_id": {
          "first_name": "Leo",
          "country": "Russia",
          "books_ids": [
            {
              "year": 1869,
              "title": "War and Peace",
              "genre": "Novel",
              "id": "2"
            },
            {
              "year": 1877,
              "title": "Anna Karenina",
              "genre": "Novel",
              "id": "3"
            },
            {
              "title": "The Cossacks",
              "year": 1863,
              "genre": "Novella",
              "id": "4"
            }
          ],
          "last_name": "Tolstoy",
          "birth_year": 1828
        },
        "genre": "Novel",
        "title": "Anna Karenina"
      },
      {
        "year": 1863,
        "author_id": {
          "first_name": "Leo",
          "country": "Russia",
          "books_ids": [
            {
              "year": 1869,
              "title": "War and Peace",
              "genre": "Novel",
              "id": "2"
            },
            {
              "year": 1877,
              "title": "Anna Karenina",
              "genre": "Novel",
              "id": "3"
            },
            {
              "title": "The Cossacks",
              "year": 1863,
              "genre": "Novella",
              "id": "4"
            }
          ],
          "last_name": "Tolstoy",
          "birth_year": 1828
        },
        "genre": "Novella",
        "title": "The Cossacks"
      },
      {
        "year": 1866,
        "author_id": {
          "first_name": "Fyodor",
          "country": "Russia",
          "books_ids": [
            {
              "title": "Crime and Punishment",
              "year": 1866,
              "genre": "Novel",
              "id": "5"
            },
            {
              "year": 1880,
              "genre": "Novel",
              "title": "The Brothers Karamazov",
              "id": "6"
            }
          ],
          "last_name": "Dostoevsky",
          "birth_year": 1821
        },
        "genre": "Novel",
        "title": "Crime and Punishment"
      },
      {
        "year": 1880,
        "author_id": {
          "first_name": "Fyodor",
          "country": "Russia",
          "books_ids": [
            {
              "title": "Crime and Punishment",
              "year": 1866,
              "genre": "Novel",
              "id": "5"
            },
            {
              "year": 1880,
              "genre": "Novel",
              "title": "The Brothers Karamazov",
              "id": "6"
            }
          ],
          "last_name": "Dostoevsky",
          "birth_year": 1821
        },
        "genre": "Novel",
        "title": "The Brothers Karamazov"
      },
      {
        "year": 1927,
        "author_id": {
          "first_name": "Ernest",
          "country": "U.S.",
          "books_ids": [
            {
              "year": 1927,
              "title": "The Sun Also Rises",
              "genre": "Novel",
              "id": "7"
            },
            {
              "title": "The Old Man and the Sea",
              "year": 1951,
              "genre": "Novel",
              "id": "8"
            }
          ],
          "last_name": "Hemingway",
          "birth_year": 1899
        },
        "genre": "Novel",
        "title": "The Sun Also Rises"
      },
      {
        "year": 1951,
        "author_id": {
          "first_name": "Ernest",
          "country": "U.S.",
          "books_ids": [
            {
              "year": 1927,
              "title": "The Sun Also Rises",
              "genre": "Novel",
              "id": "7"
            },
            {
              "title": "The Old Man and the Sea",
              "year": 1951,
              "genre": "Novel",
              "id": "8"
            }
          ],
          "last_name": "Hemingway",
          "birth_year": 1899
        },
        "genre": "Novel",
        "title": "The Old Man and the Sea"
      },
      {
        "genre": "Science",
        "title": "Mathematical Principles of Natural Philosophy",
        "year": 1687
      },
      {
        "title": "Gulliver’s Travels",
        "year": 1726,
        "genre": "Novel"
      }
    ],
    "totalPages": 2,
    "pageNumber": 0,
    "error": null
  }

  let exampleForm =
  {
    "sl": "FPStest",
    "formName": "Submit the form",
    "formDesc": 'A form with several fields, including text fields, sliders, radios, selects The result can be processed syncronically.',
    "formButton": null,
    "placeholder": "false",
    "maxWidth": 500,
    "formButtonResubmit": null,
    "params": {
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
          "defaultValue": "",
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
          "customOption": "true",
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
        "slider": {
          "include": true,
          "hidden": false,
          "required": false,
          "isTextarea": false,
          "textareaRows": 4,
          "defaultValue": { firstValue: 20 },
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
        "sysName": "slider",
        "name": "Slider",
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
        "dataType": "decimal",
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

  let exampleForm1 = {
    "sl": "FPStest",
    "formName": 'Форма',
    "successText": null,
    "formButton": 'послать',
    "formDesc": 'Если есть олимпиада по математике, то почему нет паралимпиады по математике? В ней бы участвовали гуманитарии, а все восхищались бы их мужеством.',
    "placeholder": "false",
    "maxWidth": "500",
    "params": {
      "result": {
        "resultMessageField": "textarea",
        "isSuccessField": "boolean"
      },
      "fields": {
        "range": {
          "include": true,
          "hidden": false,
          "required": false,
          "isTextarea": true,
          "textareaRows": 4,
          "defaultValue": { firstValue: 20, secondValue: 60 },
          "isPositive": false,
          "quickSearch": true,
          "allowAddLinks": false,
          "dateTimeOn": true,
          "placeholder": true,
          "weight": 12,
          "jsonDisplay": "range",
          "range": {
            "min": 0,
            "max": 200,
            "step": 10,
            "unitName": " руб."
          }
        },
        "slider": {
          "include": true,
          "hidden": false,
          "required": false,
          "isTextarea": true,
          "textareaRows": 4,
          "defaultValue": { firstValue: 100 },
          "isPositive": false,
          "quickSearch": true,
          "allowAddLinks": false,
          "dateTimeOn": true,
          "placeholder": true,
          "weight": 11,
          "jsonDisplay": "slider",
          "range": {
            "min": 0,
            "max": 200,
            "step": 10,
            "unitName": "$"
          }
        },
        "textarea": {
          "include": true,
          "hidden": false,
          "required": false,
          "isTextarea": true,
          "textareaRows": 4,
          "defaultValue": "",
          "isPositive": false,
          "quickSearch": true,
          "allowAddLinks": false,
          "dateTimeOn": true,
          "placeholder": true,
          "weight": 4
        },
        "number": {
          "include": true,
          "hidden": false,
          "required": true,
          "isTextarea": false,
          "textareaRows": 4,
          "defaultValue": "",
          "isPositive": true,
          "quickSearch": true,
          "allowAddLinks": false,
          "dateTimeOn": true,
          "weight": 2
        },
        "link": {
          "include": true,
          "hidden": false,
          "required": false,
          "isTextarea": false,
          "textareaRows": 4,
          "defaultValue": "",
          "isPositive": false,
          "quickSearch": true,
          "allowAddLinks": true,
          "dateTimeOn": true,
          "searchData": [{ "key": "1", "value": "option 1" }, { "key": "2", "value": "option 2" }],
          "weight": 10
        },
        "arrayLink": {
          "include": true,
          "hidden": false,
          "required": false,
          "isTextarea": false,
          "textareaRows": 4,
          "defaultValue": "",
          "isPositive": false,
          "quickSearch": true,
          "allowAddLinks": true,
          "dateTimeOn": true,
          "searchData": [{ "key": "1", "value": "option 1" }, { "key": "2", "value": "option 2" }],
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
          "dateTimeOn": true
        },
        "date": {
          "include": true,
          "hidden": false,
          "required": true,
          "isTextarea": false,
          "textareaRows": 4,
          "defaultValue": "",
          "isPositive": false,
          "quickSearch": true,
          "allowAddLinks": false,
          "dateTimeOn": false
        },
        "email": {
          "include": true,
          "hidden": false,
          "required": false,
          "isTextarea": false,
          "textareaRows": 4,
          "defaultValue": "",
          "isPositive": false,
          "quickSearch": true,
          "allowAddLinks": false,
          "dateTimeOn": true
        },
        "file": {
          "include": false,
          "hidden": false,
          "required": true,
          "isTextarea": false,
          "textareaRows": 4,
          "defaultValue": "",
          "isPositive": false,
          "quickSearch": true,
          "allowAddLinks": false,
          "dateTimeOn": true
        },
        "simplestring": {
          "include": true,
          "hidden": false,
          "required": false,
          "isTextarea": false,
          "textareaRows": 5,
          "defaultValue": "",
          "isPositive": false,
          "quickSearch": true,
          "allowAddLinks": false,
          "dateTimeOn": true
        }
      }
    },
    "fileds": [
      {
        "sysName": "arrayLink",
        "name": "Choose the list",
        "dataType": "arrayLink",
        "id": "98971592207319616",
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
        "format": null,
        "formatOptions": null,
        "json": false,
        "indexExists": false,
        "typeVariable": {},
        "linkType": false,
        "linkOrArrayLinkType": true,
        "arrayLink": true,
        "searchData": [{ "key": "ddfdfsdsds", "value": "ddfdfsdsds" }, { "key": "test", "value": "test" }]
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
        "indexExists": false,
        "typeVariable": {},
        "linkType": false,
        "linkOrArrayLinkType": false,
        "arrayLink": false
      },
      {
        "sysName": "date",
        "name": "Date field",
        "dataType": "date",
        "id": "46121592671144881",
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
        "format": null,
        "formatOptions": null,
        "json": false,
        "indexExists": false,
        "typeVariable": {},
        "linkType": false,
        "linkOrArrayLinkType": false,
        "arrayLink": false
      },
      {
        "sysName": "slider",
        "name": "Slider",
        "dataType": "json",
        "id": "46121592671144881",
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
        "format": null,
        "formatOptions": null,
        "json": false,
        "indexExists": false,
        "typeVariable": {},
        "linkType": false,
        "linkOrArrayLinkType": false,
        "arrayLink": false
      },
      {
        "sysName": "range",
        "name": "Range",
        "dataType": "json",
        "id": "46121592671144881",
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
        "format": null,
        "formatOptions": null,
        "json": false,
        "indexExists": false,
        "typeVariable": {},
        "linkType": false,
        "linkOrArrayLinkType": false,
        "arrayLink": false
      },
      {
        "sysName": "datetime",
        "name": "Datetime field",
        "dataType": "date",
        "id": "60991592671146093",
        "link": "",
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
        "json": false,
        "indexExists": false,
        "typeVariable": {},
        "linkType": false,
        "linkOrArrayLinkType": false,
        "arrayLink": false
      },
      {
        "sysName": "email",
        "name": "Email field",
        "dataType": "email",
        "id": "13521592207284277",
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
        "json": false,
        "indexExists": false,
        "typeVariable": {},
        "linkType": false,
        "linkOrArrayLinkType": false,
        "arrayLink": false
      },
      {
        "sysName": "file",
        "name": "Upload file",
        "dataType": "file",
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
        "indexExists": false,
        "typeVariable": {},
        "linkType": false,
        "linkOrArrayLinkType": false,
        "arrayLink": false
      },
      {
        "sysName": "link",
        "name": "Choose something",
        "dataType": "link",
        "id": "53881592207319107",
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
        "json": false,
        "indexExists": false,
        "typeVariable": {},
        "linkType": true,
        "linkOrArrayLinkType": true,
        "arrayLink": false
      },
      {
        "sysName": "number",
        "name": "Number field",
        "dataType": "number",
        "id": "49151592207239266",
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
        "indexExists": false,
        "typeVariable": {},
        "linkType": false,
        "linkOrArrayLinkType": false,
        "arrayLink": false
      },
      {
        "sysName": "simplestring",
        "name": "Simple string",
        "dataType": "string",
        "id": "95741592207239871",
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
        "indexExists": false,
        "typeVariable": {},
        "linkType": false,
        "linkOrArrayLinkType": false,
        "arrayLink": false
      },
      {
        "sysName": "textarea",
        "name": "Text area",
        "dataType": "string",
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
        "indexExists": false,
        "typeVariable": {},
        "linkType": false,
        "linkOrArrayLinkType": false,
        "arrayLink": false
      }
    ],
    "error": null,
    "isSuccessWrite": false,
    "response": null
  }



  const exampleTabs = [
    { key: '1', title: 'Tab number 1', content: <div>Tab content 1</div> },
    { key: '2', title: 'Tab 2', content: <div>Tab content 2</div> },
    { key: '3', disabled: true, title: 'Tab 3 (disabled)', content: <div>Tab content 3</div> }
  ]

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
              <FpsForm data={exampleForm} />
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
              <h1>Cards</h1>
              <FpsCards data={exampleTable} />
            </Route>
            <Route exact path="/theme">
              <h1>Theme management</h1>
              <FpsTheme
                onChange={value => { setCurrentTheme(value) }}
                defaultValue={currentTheme}
                themes={['classic', 'white', 'tiffany', 'darkMint', 'warmNight', 'hacker']} />
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
              <h1>Layout</h1>
              <h2>Tabs</h2>
              <TabsPane tabs={exampleTabs} currentTabKey={1} fixedScroll={false} />
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