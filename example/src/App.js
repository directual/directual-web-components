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
    "sl": "viewOrders",
    "pageSize": "10",
    "headerField": null,
    "params": {
      "cardListLayout": "grid",
      "cardHeaderComment": "status",
      "deleteField": "",
      "cardBodyText": "manager_id",
      "cardImage": false,
      "cardImageField": "",
      "cardImageType": "none",
      "cardImageSize": 100,
      "objectView": {},
      "data": {
        "readFields": [
          {
            "fieldSysName": "customer_email",
            "fetch": [],
            "sysName": "customer_email",
            "name": "Email",
            "dataType": "email",
            "link": ""
          },
          {
            "fieldSysName": "customer_name",
            "fetch": [],
            "sysName": "customer_name",
            "name": "Name",
            "dataType": "string",
            "link": null
          },
          {
            "fieldSysName": "date_created",
            "fetch": [],
            "sysName": "date_created",
            "name": "Date created",
            "dataType": "date",
            "link": ""
          },
          {
            "fieldSysName": "delivery_date",
            "fetch": [],
            "sysName": "delivery_date",
            "name": "When to deliver",
            "dataType": "date",
            "link": ""
          },
          {
            "fieldSysName": "good_id",
            "fetch": [
              {
                "fieldSysName": "date_updete_text",
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
                "fieldSysName": "producer_id",
                "condition": null,
                "fetch": [
                  {
                    "fieldSysName": "country",
                    "condition": null,
                    "fetch": []
                  }
                ]
              },
              {
                "fieldSysName": "type_id",
                "condition": null,
                "fetch": [
                  {
                    "fieldSysName": "type",
                    "condition": null,
                    "fetch": []
                  }
                ]
              }
            ],
            "sysName": "good_id",
            "name": "Good",
            "dataType": "link",
            "link": "Goods"
          },
          {
            "fieldSysName": "id",
            "fetch": [],
            "sysName": "id",
            "name": "id",
            "dataType": "id",
            "link": ""
          },
          {
            "fieldSysName": "is_urgent",
            "fetch": [],
            "sysName": "is_urgent",
            "name": "An urgent order",
            "dataType": "boolean",
            "link": ""
          },
          {
            "fieldSysName": "manager_id",
            "fetch": [
              {
                "fieldSysName": "id",
                "condition": null,
                "fetch": []
              },
              {
                "fieldSysName": "manager_id",
                "condition": null,
                "fetch": [
                  {
                    "fieldSysName": "name",
                    "condition": null,
                    "fetch": []
                  }
                ]
              },
              {
                "fieldSysName": "name",
                "condition": null,
                "fetch": []
              },
              {
                "fieldSysName": "photo",
                "condition": null,
                "fetch": []
              }
            ],
            "sysName": "manager_id",
            "name": "Manager",
            "dataType": "link",
            "link": "WebUser"
          },
          {
            "fieldSysName": "quantity",
            "fetch": [],
            "sysName": "quantity",
            "name": "Quantity",
            "dataType": "decimal",
            "link": ""
          },
          {
            "fieldSysName": "status",
            "fetch": [],
            "sysName": "status",
            "name": "Status",
            "dataType": "string",
            "link": ""
          },
          {
            "fieldSysName": "status_raw",
            "fetch": [],
            "sysName": "status_raw",
            "name": "Status",
            "dataType": "json",
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
            "link": ""
          },
          {
            "fieldSysName": "status",
            "fetch": [],
            "sysName": "status",
            "name": "Status",
            "dataType": "string",
            "link": ""
          }
        ],
        "fields": {
          "customer_email": {
            "id": "customer_email",
            "content": "Email",
            "type": "field",
            "dataType": "email",
            "read": true,
            "link": "",
            "actions": []
          },
          "customer_name": {
            "id": "customer_name",
            "content": "Name",
            "type": "field",
            "dataType": "string",
            "read": true,
            "link": null,
            "actions": []
          },
          "date_created": {
            "id": "date_created",
            "content": "Date created",
            "type": "field",
            "dataType": "date",
            "read": true,
            "link": "",
            "actions": []
          },
          "delivery_date": {
            "id": "delivery_date",
            "content": "When to deliver",
            "type": "field",
            "dataType": "date",
            "read": true,
            "link": "",
            "actions": []
          },
          "good_id": {
            "id": "good_id",
            "content": "Good",
            "type": "field",
            "dataType": "link",
            "read": true,
            "link": "Goods",
            "actions": []
          },
          "id": {
            "id": "id",
            "content": "id",
            "type": "field",
            "dataType": "id",
            "write": true,
            "read": true,
            "link": "",
            "actions": []
          },
          "is_urgent": {
            "id": "is_urgent",
            "content": "An urgent order",
            "type": "field",
            "dataType": "boolean",
            "read": true,
            "link": "",
            "actions": []
          },
          "manager_id": {
            "id": "manager_id",
            "content": "Manager",
            "type": "field",
            "dataType": "link",
            "read": true,
            "link": "WebUser",
            "actions": []
          },
          "quantity": {
            "id": "quantity",
            "content": "Quantity",
            "type": "field",
            "dataType": "decimal",
            "read": true,
            "link": "",
            "actions": []
          },
          "status": {
            "id": "status",
            "content": "Status",
            "type": "field",
            "dataType": "string",
            "write": true,
            "read": true,
            "link": "",
            "actions": []
          },
          "status_raw": {
            "id": "status_raw",
            "content": "Status",
            "type": "field",
            "dataType": "json",
            "read": true,
            "link": "",
            "actions": []
          },
          "action__88291606823059648": {
            "id": "action__88291606823059648",
            "content": "Cancel",
            "type": "action",
            "actions": []
          },
          "action__18561606823066266": {
            "id": "action__18561606823066266",
            "content": "Complete",
            "type": "action",
            "actions": []
          }
        },
        "fieldParams": {
          "customer_email": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": false
          },
          "customer_name": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": false
          },
          "date_created": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": false
          },
          "delivery_date": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": false
          },
          "good_id": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": true,
            "configureLinkedCard": {
              "fields": {
                "date_updete_text": {
                  "id": "date_updete_text",
                  "content": "Update date",
                  "type": "field",
                  "read": true,
                  "dataType": "string"
                },
                "id": {
                  "id": "id",
                  "content": "id",
                  "type": "field",
                  "read": true,
                  "dataType": "id"
                },
                "name": {
                  "id": "name",
                  "content": "Name",
                  "type": "field",
                  "read": true,
                  "dataType": "string"
                },
                "photo": {
                  "id": "photo",
                  "content": "Photo",
                  "type": "field",
                  "read": true,
                  "dataType": "file"
                },
                "price": {
                  "id": "price",
                  "content": "Price, per pound",
                  "type": "field",
                  "read": true,
                  "dataType": "decimal"
                },
                "producer_id": {
                  "id": "producer_id",
                  "content": "Producing country",
                  "type": "field",
                  "read": true,
                  "dataType": "link"
                },
                "type_id": {
                  "id": "type_id",
                  "content": "Type",
                  "type": "field",
                  "read": true,
                  "dataType": "link"
                }
              },
              "fieldParams": {
                "date_updete_text": {
                  "include": true,
                  "fileImageFormat": "square",
                  "fileImageSize": 200
                },
                "id": {
                  "include": false,
                  "fileImageFormat": "square",
                  "fileImageSize": 200
                },
                "name": {
                  "include": true,
                  "fileImageFormat": "square",
                  "fileImageSize": 200
                },
                "photo": {
                  "include": true,
                  "fileImageFormat": "square",
                  "fileImageSize": 200,
                  "fileImage": true
                },
                "price": {
                  "include": true,
                  "fileImageFormat": "square",
                  "fileImageSize": 200
                },
                "producer_id": {
                  "include": true,
                  "fileImageFormat": "square",
                  "fileImageSize": 200
                },
                "type_id": {
                  "include": true,
                  "fileImageFormat": "square",
                  "fileImageSize": 200
                }
              },
              "fieldOrder": [
                "id",
                "photo",
                "name",
                "type_id",
                "price",
                "producer_id",
                "date_updete_text"
              ]
            },
            "subHeader": "Good: "
          },
          "id": {
            "include": false,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": false
          },
          "is_urgent": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": false
          },
          "manager_id": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": true,
            "fileImageSize": 200,
            "clickable": true,
            "configureLinkedCard": {
              "fields": {
                "id": {
                  "id": "id",
                  "content": "id",
                  "type": "field",
                  "read": true,
                  "dataType": "id"
                },
                "manager_id": {
                  "id": "manager_id",
                  "content": "Manager",
                  "type": "field",
                  "read": true,
                  "dataType": "link"
                },
                "name": {
                  "id": "name",
                  "content": "Name",
                  "type": "field",
                  "read": true,
                  "dataType": "string"
                },
                "photo": {
                  "id": "photo",
                  "content": "Photo",
                  "type": "field",
                  "read": true,
                  "dataType": "file"
                }
              },
              "fieldParams": {
                "id": {
                  "include": false,
                  "fileImageFormat": "square",
                  "fileImageSize": 200
                },
                "manager_id": {
                  "include": true,
                  "fileImageFormat": "square",
                  "fileImageSize": 200
                },
                "name": {
                  "include": true,
                  "fileImageFormat": "square",
                  "fileImageSize": 200
                },
                "photo": {
                  "include": true,
                  "fileImageFormat": "circle",
                  "fileImageSize": 150,
                  "descriptionFlag": false,
                  "fileImage": true
                }
              },
              "fieldOrder": [
                "id",
                "photo",
                "name",
                "manager_id"
              ]
            },
            "subHeader": "Manager: "
          },
          "quantity": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": false
          },
          "status": {
            "include": false,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": false,
            "jsonDisplay": {
              "type": "radioStation",
              "multipleChoice": [
                {
                  "value": "canceled",
                  "label": "canceled"
                },
                {
                  "value": "new",
                  "label": "new"
                },
                {
                  "value": "processing",
                  "label": "processing"
                },
                {
                  "value": "completed",
                  "label": "completed"
                }
              ]
            }
          },
          "status_raw": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": false,
            "jsonDisplay": {
              "type": "radioStation",
              "multipleChoice": [
                {
                  "value": "cancelled",
                  "label": "cancelled"
                },
                {
                  "value": "new",
                  "label": "new"
                },
                {
                  "value": "processing",
                  "label": "processing"
                },
                {
                  "value": "completed",
                  "label": "completed"
                }
              ]
            }
          }
        },
        "columns": {
          "tab-1": {
            "id": "tab-1",
            "title": "Customer info",
            "fieldIds": [
              "customer_email",
              "customer_name",
              "id"
            ]
          },
          "53251606814142118": {
            "id": "53251606814142118",
            "title": "Order processing",
            "fieldIds": [
              "manager_id",
              "status_raw",
              "action__18561606823066266",
              "action__88291606823059648",
              "status"
            ]
          },
          "27781606814180405": {
            "id": "27781606814180405",
            "title": "Order",
            "fieldIds": [
              "good_id",
              "quantity",
              "date_created",
              "is_urgent",
              "delivery_date"
            ]
          }
        },
        "columnOrder": [
          "27781606814180405",
          "tab-1",
          "53251606814142118"
        ],
        "actions": []
      },
      "fields": {
        "customer_email": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false
        },
        "customer_name": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false
        },
        "date_created": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false
        },
        "delivery_date": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false
        },
        "good_id": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": true,
          "configureLinkedCard": {
            "fields": {
              "date_updete_text": {
                "id": "date_updete_text",
                "content": "Update date",
                "type": "field",
                "read": true,
                "dataType": "string"
              },
              "id": {
                "id": "id",
                "content": "id",
                "type": "field",
                "read": true,
                "dataType": "id"
              },
              "name": {
                "id": "name",
                "content": "Name",
                "type": "field",
                "read": true,
                "dataType": "string"
              },
              "photo": {
                "id": "photo",
                "content": "Photo",
                "type": "field",
                "read": true,
                "dataType": "file"
              },
              "price": {
                "id": "price",
                "content": "Price, per pound",
                "type": "field",
                "read": true,
                "dataType": "decimal"
              },
              "producer_id": {
                "id": "producer_id",
                "content": "Producing country",
                "type": "field",
                "read": true,
                "dataType": "link"
              },
              "type_id": {
                "id": "type_id",
                "content": "Type",
                "type": "field",
                "read": true,
                "dataType": "link"
              }
            },
            "fieldParams": {
              "date_updete_text": {
                "include": true,
                "fileImageFormat": "square",
                "fileImageSize": 200
              },
              "id": {
                "include": false,
                "fileImageFormat": "square",
                "fileImageSize": 200
              },
              "name": {
                "include": true,
                "fileImageFormat": "square",
                "fileImageSize": 200
              },
              "photo": {
                "include": true,
                "fileImageFormat": "square",
                "fileImageSize": 200,
                "fileImage": true
              },
              "price": {
                "include": true,
                "fileImageFormat": "square",
                "fileImageSize": 200
              },
              "producer_id": {
                "include": true,
                "fileImageFormat": "square",
                "fileImageSize": 200
              },
              "type_id": {
                "include": true,
                "fileImageFormat": "square",
                "fileImageSize": 200
              }
            },
            "fieldOrder": [
              "id",
              "photo",
              "name",
              "type_id",
              "price",
              "producer_id",
              "date_updete_text"
            ]
          },
          "subHeader": "Good: "
        },
        "id": {
          "include": false,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false
        },
        "is_urgent": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false
        },
        "manager_id": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": true,
          "fileImageSize": 200,
          "clickable": true,
          "configureLinkedCard": {
            "fields": {
              "id": {
                "id": "id",
                "content": "id",
                "type": "field",
                "read": true,
                "dataType": "id"
              },
              "manager_id": {
                "id": "manager_id",
                "content": "Manager",
                "type": "field",
                "read": true,
                "dataType": "link"
              },
              "name": {
                "id": "name",
                "content": "Name",
                "type": "field",
                "read": true,
                "dataType": "string"
              },
              "photo": {
                "id": "photo",
                "content": "Photo",
                "type": "field",
                "read": true,
                "dataType": "file"
              }
            },
            "fieldParams": {
              "id": {
                "include": false,
                "fileImageFormat": "square",
                "fileImageSize": 200
              },
              "manager_id": {
                "include": true,
                "fileImageFormat": "square",
                "fileImageSize": 200
              },
              "name": {
                "include": true,
                "fileImageFormat": "square",
                "fileImageSize": 200
              },
              "photo": {
                "include": true,
                "fileImageFormat": "circle",
                "fileImageSize": 150,
                "descriptionFlag": false,
                "fileImage": true
              }
            },
            "fieldOrder": [
              "id",
              "photo",
              "name",
              "manager_id"
            ]
          },
          "subHeader": "Manager: "
        },
        "quantity": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false
        },
        "status": {
          "include": false,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false,
          "jsonDisplay": {
            "type": "radioStation",
            "multipleChoice": [
              {
                "value": "canceled",
                "label": "canceled"
              },
              {
                "value": "new",
                "label": "new"
              },
              {
                "value": "processing",
                "label": "processing"
              },
              {
                "value": "completed",
                "label": "completed"
              }
            ]
          }
        },
        "status_raw": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false,
          "jsonDisplay": {
            "type": "radioStation",
            "multipleChoice": [
              {
                "value": "cancelled",
                "label": "cancelled"
              },
              {
                "value": "new",
                "label": "new"
              },
              {
                "value": "processing",
                "label": "processing"
              },
              {
                "value": "completed",
                "label": "completed"
              }
            ]
          }
        }
      },
      "actions": [
        {
          "sysName": "",
          "id": "88291606823059648",
          "name": "Cancel",
          "displayAs": "button",
          "buttonIcon": "ban",
          "buttonType": "danger",
          "dropdown": true,
          "formMapping": [
            {
              "id": "12771606823103740",
              "target": "id",
              "type": "objectField",
              "value": "id"
            },
            {
              "id": "76721606823121314",
              "target": "status",
              "type": "const",
              "value": "cancelled"
            }
          ],
          "closePopup": true,
          "conditionals": [
            {
              "id": "83411606837897113",
              "target": "id",
              "type": "objectField",
              "value": "manager_id",
              "checkValue": "manager"
            }
          ],
          "buttonTitle": "Candel order"
        },
        {
          "sysName": "",
          "id": "18561606823066266",
          "name": "Complete",
          "displayAs": "button",
          "buttonIcon": "done",
          "buttonType": "accent",
          "formMapping": [
            {
              "id": "16701606823144350",
              "target": "id",
              "type": "objectField",
              "value": "id"
            },
            {
              "id": "12931606823151047",
              "target": "status",
              "type": "const",
              "value": "completed"
            }
          ],
          "closePopup": true,
          "dropdown": true,
          "buttonTitle": "Complete order",
          "conditionals": [
            {
              "id": "88811606843003610",
              "target": "id",
              "value": "manager_id",
              "type": "objectField",
              "checkValue": "manager"
            }
          ]
        }
      ]
    },
    "tableTitle": "Orders under processing",
    "actions": null,
    "headers": [
      {
        "sysName": "customer_email",
        "name": "Email",
        "dataType": "email",
        "id": "89791606765082561",
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
        "groupName": null,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "indexExists": false,
        "typeVariable": {},
        "json": false
      },
      {
        "sysName": "customer_name",
        "name": "Name",
        "dataType": "string",
        "id": "40381606765090987",
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
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "indexExists": false,
        "typeVariable": {},
        "json": false
      },
      {
        "sysName": "date_created",
        "name": "Date created",
        "dataType": "date",
        "id": "31571606765179237",
        "link": "",
        "group": "1606765156554",
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
        "indexExists": false,
        "typeVariable": {},
        "json": false
      },
      {
        "sysName": "delivery_date",
        "name": "When to deliver",
        "dataType": "date",
        "id": "72811606765140243",
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
        "groupName": null,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "indexExists": false,
        "typeVariable": {},
        "json": false
      },
      {
        "sysName": "good_id",
        "name": "Good",
        "dataType": "link",
        "id": "84941606765479913",
        "link": "Goods",
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
        "linkType": true,
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
        "sysName": "is_urgent",
        "name": "An urgent order",
        "dataType": "boolean",
        "id": "16601606765113554",
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
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "indexExists": false,
        "typeVariable": {},
        "json": false
      },
      {
        "sysName": "manager_id",
        "name": "Manager",
        "dataType": "link",
        "id": "22481606765196528",
        "link": "WebUser",
        "group": "1606765156554",
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
        "linkOrArrayLinkType": true,
        "linkType": true,
        "arrayLink": false,
        "indexExists": false,
        "typeVariable": {},
        "json": false
      },
      {
        "sysName": "quantity",
        "name": "Quantity",
        "dataType": "decimal",
        "id": "83511606765426746",
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
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "indexExists": false,
        "typeVariable": {},
        "json": false
      },
      {
        "sysName": "status",
        "name": "Status",
        "dataType": "string",
        "id": "17441606765172790",
        "link": "",
        "group": "1606765156554",
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
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "indexExists": false,
        "typeVariable": {},
        "json": false
      },
      {
        "sysName": "status_raw",
        "name": "Status",
        "dataType": "json",
        "id": "24221606820897769",
        "link": "",
        "group": "1606765156554",
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
        "json": true
      }
    ],
    "data": [
      {
        "quantity": 12,
        "manager_id": {
          "manager_id": {
            "name": "Piter Watson"
          },
          "name": "Sara Huston",
          "photo": "https://api.alfa.directual.com/fileUploaded/temaplate-crm/25b74f0f-7645-4203-8f69-b1d916afc40f.jpg",
          "id": "manager2"
        },
        "customer_email": "nick@my-email.com",
        "delivery_date": 1608076800000,
        "customer_name": "Nick",
        "is_urgent": true,
        "status_raw": "{\"value\":\"processing\"}",
        "good_id": {
          "name": "Apples",
          "photo": "https://api.alfa.directual.com/fileUploaded/temaplate-crm/75e4f7a8-73a9-4664-b739-03fe0872738b.jpeg",
          "price": 0.82,
          "id": "ad785e49-8fdc-41d7-b3ee-68b2faaae01f",
          "producer_id": {
            "country": "Moldova "
          },
          "date_updete_text": "Updated on 30 Nov, 2020",
          "type_id": {
            "type": "Fruit"
          }
        },
        "id": "86c625ef-e54f-4711-8350-7c3d78529015",
        "status": "processing"
      },
      {
        "quantity": 22,
        "manager_id": {
          "name": "Piter Watson",
          "photo": "https://api.alfa.directual.com/fileUploaded/temaplate-crm/4e19ea90-ac50-433a-8e58-61e37261ac24.jpg",
          "id": "manager"
        },
        "customer_email": "alice@may-email.com",
        "customer_name": "Alice",
        "is_urgent": false,
        "status_raw": "{\"value\":\"processing\"}",
        "good_id": {
          "name": "Cherry",
          "photo": "https://api.alfa.directual.com/fileUploaded/temaplate-crm/b17815c5-2fbd-450e-a01c-5ca4a1c49bee.jpeg",
          "price": 7.88,
          "id": "c3ac002f-ea40-44ad-8f49-d98f16bcbf78",
          "producer_id": {
            "country": "Greece "
          },
          "date_updete_text": "Updated on 30 Nov, 2020",
          "type_id": {
            "type": "Berry"
          }
        },
        "id": "67ba0c74-18c0-4272-99f8-082a9b28add0",
        "status": "processing"
      }
    ],
    "totalPages": 1,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [
      [
        "customer_email",
        1327202
      ],
      [
        "customer_name",
        1327202
      ],
      [
        "date_created",
        1327202
      ],
      [
        "delivery_date",
        1327202
      ],
      [
        "good_id.date_updete_text",
        1326921
      ],
      [
        "good_id.id",
        1326921
      ],
      [
        "good_id.name",
        1326921
      ],
      [
        "good_id.photo",
        1326921
      ],
      [
        "good_id.price",
        1326921
      ],
      [
        "good_id.producer_id.country",
        1327201
      ],
      [
        "good_id.type_id.type",
        1327200
      ],
      [
        "id",
        1327202
      ],
      [
        "is_urgent",
        1327202
      ],
      [
        "manager_id.id",
        1326101
      ],
      [
        "manager_id.manager_id.name",
        1326101
      ],
      [
        "manager_id.name",
        1326101
      ],
      [
        "manager_id.photo",
        1326101
      ],
      [
        "quantity",
        1327202
      ],
      [
        "status",
        1327202
      ],
      [
        "status_raw",
        1327202
      ]
    ],
    "writeFields": [
      "id",
      "status"
    ],
    "structures": {
      "1326101": {
        "networkID": 4083,
        "sysName": "WebUser",
        "name": "App users",
        "id": 1326101,
        "dateCreated": "2020-11-27T07:50:39Z",
        "hidden": false,
        "dateHidden": null,
        "jsonObject": "[{\"sysName\":\"role\",\"dataType\":\"string\",\"name\":\"role\",\"id\":\"1\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"isAuthorization\",\"dataType\":\"boolean\",\"name\":\"isAuthorization\",\"id\":\"2\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"dateLastActivity\",\"dataType\":\"string\",\"name\":\"dateLastActivity\",\"id\":\"3\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"photo\",\"dataType\":\"file\",\"name\":\"Photo\",\"id\":\"30461606813321074\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"email\",\"dataType\":\"string\",\"name\":\"email\",\"id\":\"4\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"team\",\"dataType\":\"arrayLink\",\"name\":\"Team\",\"id\":\"49781606825242850\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"typeVariable\":{},\"json\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"phone\",\"dataType\":\"string\",\"name\":\"phone\",\"id\":\"5\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"dateCreated\",\"dataType\":\"string\",\"name\":\"dateCreated\",\"id\":\"6\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"manager_id\",\"dataType\":\"link\",\"name\":\"Manager\",\"id\":\"61121606813326688\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkType\":true,\"indexExists\":false},{\"sysName\":\"name\",\"dataType\":\"string\",\"name\":\"Name\",\"id\":\"66761606813314167\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"password\",\"dataType\":\"string\",\"name\":\"password\",\"id\":\"7\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"8\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"position\",\"dataType\":\"string\",\"name\":\"Position\",\"id\":\"90061606821486387\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkType\":false,\"indexExists\":false}]",
        "jsonGroupSettings": null,
        "jsonViewIdSettings": "[{\"sysName\":\"name\"}]",
        "jsonSettings": null,
        "jsonNativeIndexSettings": null,
        "indexEnabled": true,
        "lastIndexUpdate": 0,
        "indexName": "",
        "dateChanged": "2020-12-01T12:20:54Z",
        "createBy": 0,
        "changedBy": 21,
        "_settings": null,
        "_nativeIndexSettings": null,
        "innerIDField": {
          "sysName": "id",
          "name": "id",
          "dataType": "id",
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
      "1326921": {
        "networkID": 4083,
        "sysName": "Goods",
        "name": "Goods",
        "id": 1326921,
        "dateCreated": "2020-11-29T19:43:38Z",
        "hidden": false,
        "dateHidden": null,
        "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{}},{\"sysName\":\"price\",\"name\":\"Price, per pound\",\"dataType\":\"decimal\",\"id\":\"18731606759496398\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{}},{\"sysName\":\"date_update\",\"name\":\"Update date (date)\",\"dataType\":\"date\",\"id\":\"24731606760904247\",\"link\":\"\",\"group\":\"1606760912040\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{}},{\"sysName\":\"date_updete_text\",\"name\":\"Update date\",\"dataType\":\"string\",\"id\":\"38281606761354293\",\"link\":null,\"group\":\"1606760912040\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{}},{\"sysName\":\"producer_id\",\"name\":\"Producing country\",\"dataType\":\"link\",\"id\":\"67711606759561804\",\"link\":\"countries\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"json\":false,\"typeVariable\":{}},{\"sysName\":\"name\",\"name\":\"Name\",\"dataType\":\"string\",\"id\":\"78681606759492923\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{}},{\"sysName\":\"type_id\",\"name\":\"Type\",\"dataType\":\"link\",\"id\":\"85891606759521426\",\"link\":\"Good_types\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"json\":false,\"typeVariable\":{}},{\"sysName\":\"photo\",\"name\":\"Photo\",\"dataType\":\"file\",\"id\":\"98951606759593667\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{}}]",
        "jsonGroupSettings": "[{\"id\":1606760912040,\"name\":\"Changes\",\"order\":0}]",
        "jsonViewIdSettings": "[{\"sysName\":\"name\"}]",
        "jsonSettings": null,
        "jsonNativeIndexSettings": null,
        "indexEnabled": true,
        "lastIndexUpdate": 0,
        "indexName": "",
        "dateChanged": "2020-11-30T18:37:08Z",
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
        "folderId": 33594459
      },
      "1327200": {
        "networkID": 4083,
        "sysName": "Good_types",
        "name": "Good types",
        "id": 1327200,
        "dateCreated": "2020-11-30T18:07:05Z",
        "hidden": false,
        "dateHidden": null,
        "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{}},{\"sysName\":\"type\",\"name\":\"Type\",\"dataType\":\"string\",\"id\":\"19501606759628530\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{}}]",
        "jsonGroupSettings": null,
        "jsonViewIdSettings": "[{\"sysName\":\"type\"}]",
        "jsonSettings": null,
        "jsonNativeIndexSettings": null,
        "indexEnabled": false,
        "lastIndexUpdate": 0,
        "indexName": "",
        "dateChanged": "2020-11-30T18:18:36Z",
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
        "folderId": 33594459
      },
      "1327201": {
        "networkID": 4083,
        "sysName": "countries",
        "name": "Countries",
        "id": 1327201,
        "dateCreated": "2020-11-30T18:08:07Z",
        "hidden": false,
        "dateHidden": null,
        "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{}},{\"sysName\":\"area\",\"name\":\"area, sq. mi.\",\"dataType\":\"number\",\"id\":\"13101606759887970\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{}},{\"sysName\":\"population\",\"name\":\"population\",\"dataType\":\"number\",\"id\":\"43731606759884481\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{}},{\"sysName\":\"region\",\"name\":\"region\",\"dataType\":\"string\",\"id\":\"49221606759873348\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{}},{\"sysName\":\"country\",\"name\":\"country\",\"dataType\":\"string\",\"id\":\"59791606759871290\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{}}]",
        "jsonGroupSettings": null,
        "jsonViewIdSettings": "[{\"sysName\":\"country\"}]",
        "jsonSettings": null,
        "jsonNativeIndexSettings": null,
        "indexEnabled": false,
        "lastIndexUpdate": 0,
        "indexName": "",
        "dateChanged": "2020-11-30T18:18:26Z",
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
        "folderId": 33594459
      },
      "1327202": {
        "networkID": 4083,
        "sysName": "Orders",
        "name": "Orders",
        "id": 1327202,
        "dateCreated": "2020-11-30T19:37:31Z",
        "hidden": false,
        "dateHidden": null,
        "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"is_urgent\",\"dataType\":\"boolean\",\"name\":\"An urgent order\",\"id\":\"16601606765113554\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"status\",\"dataType\":\"string\",\"name\":\"Status\",\"id\":\"17441606765172790\",\"link\":\"\",\"group\":\"1606765156554\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"manager_id\",\"dataType\":\"link\",\"name\":\"Manager\",\"id\":\"22481606765196528\",\"link\":\"WebUser\",\"group\":\"1606765156554\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkType\":true,\"indexExists\":false},{\"sysName\":\"status_raw\",\"dataType\":\"json\",\"name\":\"Status\",\"id\":\"24221606820897769\",\"link\":\"\",\"group\":\"1606765156554\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":true,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"date_created\",\"dataType\":\"date\",\"name\":\"Date created\",\"id\":\"31571606765179237\",\"link\":\"\",\"group\":\"1606765156554\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"customer_name\",\"dataType\":\"string\",\"name\":\"Name\",\"id\":\"40381606765090987\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"result_cancel\",\"dataType\":\"string\",\"name\":\"Result\",\"id\":\"53361606824246939\",\"link\":\"\",\"group\":\"1606765156554\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"is_success\",\"dataType\":\"boolean\",\"name\":\"\",\"id\":\"56621606765915040\",\"link\":\"\",\"group\":\"1606765904782\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"result_text\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"58981606765941379\",\"link\":null,\"group\":\"1606765904782\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"end_date\",\"dataType\":\"string\",\"name\":\"End date\",\"id\":\"64971606823828985\",\"link\":\"\",\"group\":\"1606765156554\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"delivery_date\",\"dataType\":\"date\",\"name\":\"When to deliver\",\"id\":\"72811606765140243\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"result\",\"dataType\":\"string\",\"name\":\"Result\",\"id\":\"81451606823639247\",\"link\":\"\",\"group\":\"1606765156554\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"quantity\",\"dataType\":\"decimal\",\"name\":\"Quantity\",\"id\":\"83511606765426746\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"good_id\",\"dataType\":\"link\",\"name\":\"Good\",\"id\":\"84941606765479913\",\"link\":\"Goods\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkType\":true,\"indexExists\":false},{\"sysName\":\"customer_email\",\"dataType\":\"email\",\"name\":\"Email\",\"id\":\"89791606765082561\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"result_header\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"95791606765926998\",\"link\":null,\"group\":\"1606765904782\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkType\":false,\"indexExists\":false}]",
        "jsonGroupSettings": "[{\"id\":1606765156554,\"name\":\"Processing the order\",\"order\":0},{\"id\":1606765904782,\"name\":\"Quick calculations\",\"order\":1}]",
        "jsonViewIdSettings": "[{\"sysName\":\"good_id\"},{\"sysName\":\"date_created\"}]",
        "jsonSettings": null,
        "jsonNativeIndexSettings": null,
        "indexEnabled": true,
        "lastIndexUpdate": 0,
        "indexName": "",
        "dateChanged": "2020-12-01T12:04:23Z",
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
        "folderId": 33594459
      }
    },
    "isSuccessWrite": false,
    "writeError": null,
    "writeResponse": null,
    "fileds": [
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
        "sysName": "status",
        "name": "Status",
        "dataType": "string",
        "id": "17441606765172790",
        "link": "",
        "group": "1606765156554",
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