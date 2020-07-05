import React, { useEffect, useState } from 'react'
import {
  FpsHtml, FpsCards, FpsForm, MainMenu, FpsTable, Button, SomethingWentWrong, Input, FpsTheme,
  ComponentDetails, FpsWrapper, ContentWrapper, ActionPanel, Radio, SignIn, SignUp, Media, CodeSnippet,
  Dnd
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


function MainMenuWrapper() {
  let location = useLocation()

  const [logoUrl, setlogoUrl] = useState('https://api.directual.com/fileUploaded/directual-site/316aba91-8ee2-4f35-aca8-260f5de08abd.svg')


  useEffect(()=>{
    let currentTheme
    if (typeof window !== 'undefined') { currentTheme = localStorage.getItem('dd-theme') }
    !currentTheme && (currentTheme = 'classic')
    if (currentTheme == 'dark-mint' || currentTheme == 'warm-night') {
      setlogoUrl('https://api.directual.com/fileUploaded/directual-site/6e2942aa-c7c8-4ab0-8e14-0e54f5461183.svg')
    }
    if (currentTheme == 'classic' || currentTheme == 'tiffany') {
      setlogoUrl('https://api.directual.com/fileUploaded/directual-site/316aba91-8ee2-4f35-aca8-260f5de08abd.svg')
    }
  })


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
        { name: "Table view", route: "/table", icon: "database", link: <Link to="/table">Table view</Link> },
        { name: "List view (soon)", route: "/list", icon: "list", disabled: true },
        { name: "Cards view (soon)", route: "/cards", icon: "cards", disabled: true },
        { name: "Chat (soon)", route: "/chat", icon: "bubble", disabled: true },
        { name: "Calculator (soon)", route: "/calc", icon: "actions", disabled: true },
        { name: "Design system", subheader: true },
        { name: "Typography", route: "/system-typography", icon: "paragraph", link: <Link to="/system-typography">Typography</Link> },
        { name: "Directual Icons", route: "/system-icons", icon: "babai", link: <Link to="/system-icons">Directual icons</Link> },
        { name: "Buttons", route: "/system-button", icon: "done", link: <Link to="/system-button">Action panel, Buttons</Link> },
        { name: "Data entry", route: "/system-data-entry", icon: "import", link: <Link to="/system-data-entry">Data entry</Link> },
        { name: "Media", route: "/system-media", icon: "play", link: <Link to="/system-media">Media</Link> },
        { name: "Drag'n'drop", route: "/system-dnd", icon: "copy", link: <Link to="/system-dnd">Drag'n'drop</Link> }
      ]}

    />)
}

const App = (props) => {
  let exampleDataHtml = {
    html: '<b>test</b>'
  }

  let exampleTable = {
    'sl': 'countries',
    'pageSize': '10',
    'headerField': '',
    'headers': [{
      'sysName': 'Name',
      'name': 'Country name',
      'dataType': 'string',
      'id': '91001588873211198',
      'link': null,
      'group': '0',
      'tags': null,
      'indexing': false,
      'ordering': false,
      'description': null,
      'weight': null,
      'order': 1,
      'linkIndexFieldSysName': [],
      'defaultValue': null,
      'constraints': null,
      'synthetic': false,
      'json': false,
      'linkType': false,
      'indexExists': false,
      'typeVariable': {},
      'linkOrArrayLinkType': false,
      'arrayLink': false
    }, {
      'sysName': 'id',
      'name': 'id',
      'dataType': 'id',
      'id': '0',
      'link': '',
      'group': '0',
      'tags': '',
      'indexing': false,
      'ordering': false,
      'description': null,
      'weight': null,
      'order': 0,
      'linkIndexFieldSysName': [],
      'defaultValue': '',
      'constraints': null,
      'synthetic': false,
      'json': false,
      'linkType': false,
      'indexExists': false,
      'typeVariable': {},
      'linkOrArrayLinkType': false,
      'arrayLink': false
    }],
    'data': [{ 'Name': 'Afghanistan', 'id': 'AF' }, { 'Name': 'Åland Islands', 'id': 'AX' }, {
      'Name': 'Albania',
      'id': 'AL'
    }, { 'Name': 'Algeria', 'id': 'DZ' }, { 'Name': 'American Samoa', 'id': 'AS' }, {
      'Name': 'Andorra',
      'id': 'AD'
    }, { 'Name': 'Angola', 'id': 'AO' }, { 'Name': 'Anguilla', 'id': 'AI' }, {
      'Name': 'Antarctica',
      'id': 'AQ'
    }, { 'Name': 'Antigua and Barbuda', 'id': 'AG' }],
    'totalPages': 25,
    'pageNumber': 0,
    'error': null
  }

  let exampleForm = 
  {
    "sl": "FPStest",
    "formName": "",
    "formDesc": null,
    "formButton": null,
    "placeholder": "",
    "maxWidth": null,
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
          "required": false,
          "isTextarea": false,
          "textareaRows": 4,
          "defaultValue": "",
          "isPositive": false,
          "quickSearch": false,
          "allowAddLinks": false,
          "dateTimeOn": true,
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
          "required": false,
          "isTextarea": false,
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
        "file": {
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
          "jsonDisplay": "default",
          "range": {
            "min": 0,
            "max": 100,
            "step": 1,
            "unitName": ""
          }
        },
        "link": {
          "include": true,
          "hidden": false,
          "required": false,
          "isTextarea": false,
          "textareaRows": 4,
          "defaultValue": "",
          "isPositive": false,
          "quickSearch": false,
          "allowAddLinks": false,
          "dateTimeOn": true,
          "isValid": true,
          "weight": 3,
          "jsonDisplay": "default",
          "range": {
            "min": 0,
            "max": 100,
            "step": 1,
            "unitName": ""
          }
        },
        "range": {
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
          "weight": 4,
          "jsonDisplay": "default",
          "range": {
            "min": 0,
            "max": 100,
            "step": 1,
            "unitName": ""
          }
        },
        "slider": {
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
          "weight": 5,
          "jsonDisplay": "default",
          "range": {
            "min": 0,
            "max": 100,
            "step": 1,
            "unitName": ""
          }
        },
        "textarea": {
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
          "weight": 6,
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
          "defaultValue": {firstValue: 20, secondValue:60},
          "isPositive": false,
          "quickSearch": true,
          "allowAddLinks": false,
          "dateTimeOn": true,
          "placeholder": true,
          "weight":12,
          "jsonDisplay": "range",
          "range": {
            "min":0,
            "max":200,
            "step":10,
            "unitName":" руб."
          }
        },
        "slider": {
          "include": true,
          "hidden": false,
          "required": false,
          "isTextarea": true,
          "textareaRows": 4,
          "defaultValue": {firstValue: 100},
          "isPositive": false,
          "quickSearch": true,
          "allowAddLinks": false,
          "dateTimeOn": true,
          "placeholder": true,
          "weight":11,
          "jsonDisplay": "slider",
          "range": {
            "min":0,
            "max":200,
            "step":10,
            "unitName":"$"
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
          "weight":4
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
          "weight":2
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
          "searchData":[{"key":"1","value":"option 1"},{"key":"2","value":"option 2"}],
          "weight":10
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
          "searchData":[{"key":"1","value":"option 1"},{"key":"2","value":"option 2"}],
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
        "searchData":[{"key":"ddfdfsdsds","value":"ddfdfsdsds"},{"key":"test","value":"test"}]
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

  let basicTheme ={
    colorScheme: 'classic',
    radius: 25
}
  const [currentTheme,setCurrentTheme] = useState(basicTheme)

  return (
    <FpsWrapper>
      <Router>

        <MainMenuWrapper />


        <ContentWrapper themeName={currentTheme}>

          <Switch>
            <Route exact path="/table">
              <FpsTable data={exampleTable} />
            </Route>
            <Route exact path="/">
              <h1>What is it</h1>
            </Route>
            <Route exact path="/form">
              <FpsForm data={exampleForm}/>
            </Route>
            <Route exact path="/profile">
              <SignIn
                header='Sign in'
                width={400}
                google
              />
            <br />
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
                onChange={value => {setCurrentTheme(value)}}
                defaultValue={currentTheme}
                themes={['classic', 'tiffany', 'darkMint', 'warmNight', 'hacker']} />
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
            <Route exact path="/system-media">
              <h1>Media</h1>
              <h2>Youtube</h2>
              <CodeSnippet code="<Media type='video' source='https://www.youtube.com/watch?v=JAwEWLP-G_M' width='550' height='300'/>" />
              <Media type='video' source="https://www.youtube.com/watch?v=JAwEWLP-G_M" width='550' height='300'/>
            </Route>

          </Switch>



        </ContentWrapper>
      </Router>
    </FpsWrapper>
  )
}

export default App
