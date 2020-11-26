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
    "sl": "allBooks",
    "pageSize": "10",
    "headerField": null,
    "params": {
      "cardListLayout": "grid",
      "cardHeaderComment": "author_id",
      "deleteField": "",
      "cardBodyText": "upvotes_text",
      "cardImage": true,
      "cardImageField": "picture",
      "cardImageType": "left",
      "cardImageSize": 100,
      "objectView": {},
      "data": {
        "readFields": [
          {
            "fieldSysName": "Title",
            "fetch": [],
            "sysName": "Title",
            "name": "Title",
            "dataType": "string",
            "link": ""
          },
          {
            "fieldSysName": "Year",
            "fetch": [],
            "sysName": "Year",
            "name": "Year",
            "dataType": "number",
            "link": ""
          },
          {
            "fieldSysName": "amazon",
            "fetch": [],
            "sysName": "amazon",
            "name": "Link",
            "dataType": "string",
            "link": ""
          },
          {
            "fieldSysName": "author_id",
            "fetch": [
              {
                "fieldSysName": "country",
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
              }
            ],
            "sysName": "author_id",
            "name": "Author",
            "dataType": "link",
            "link": "Authors"
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
            "fieldSysName": "picture",
            "fetch": [],
            "sysName": "picture",
            "name": "Picture",
            "dataType": "file",
            "link": ""
          },
          {
            "fieldSysName": "plot",
            "fetch": [],
            "sysName": "plot",
            "name": "Plot",
            "dataType": "string",
            "link": ""
          },
          {
            "fieldSysName": "upvotes",
            "fetch": [],
            "sysName": "upvotes",
            "name": "Number of upvotes",
            "dataType": "number",
            "link": ""
          },
          {
            "fieldSysName": "upvotes_text",
            "fetch": [],
            "sysName": "upvotes_text",
            "name": "Upvotes",
            "dataType": "string",
            "link": ""
          }
        ],
        "writeFields": [],
        "fields": {
          "Title": {
            "id": "Title",
            "content": "Title",
            "type": "field",
            "dataType": "string",
            "read": true,
            "link": "",
            "actions": []
          },
          "Year": {
            "id": "Year",
            "content": "Year",
            "type": "field",
            "dataType": "number",
            "read": true,
            "link": "",
            "actions": []
          },
          "amazon": {
            "id": "amazon",
            "content": "Link",
            "type": "field",
            "dataType": "string",
            "read": true,
            "link": "",
            "actions": []
          },
          "author_id": {
            "id": "author_id",
            "content": "Author",
            "type": "field",
            "dataType": "link",
            "read": true,
            "link": "Authors",
            "actions": []
          },
          "id": {
            "id": "id",
            "content": "id",
            "type": "field",
            "dataType": "id",
            "read": true,
            "link": "",
            "actions": []
          },
          "picture": {
            "id": "picture",
            "content": "Picture",
            "type": "field",
            "dataType": "file",
            "read": true,
            "link": "",
            "actions": []
          },
          "plot": {
            "id": "plot",
            "content": "Plot",
            "type": "field",
            "dataType": "string",
            "read": true,
            "link": "",
            "actions": []
          },
          "upvotes": {
            "id": "upvotes",
            "content": "Number of upvotes",
            "type": "field",
            "dataType": "number",
            "read": true,
            "link": "",
            "actions": []
          },
          "upvotes_text": {
            "id": "upvotes_text",
            "content": "Upvotes",
            "type": "field",
            "dataType": "string",
            "read": true,
            "link": "",
            "actions": []
          },
          "action__77491606152233967": {
            "content": "Upvote on this book",
            "id": "action__77491606152233967",
            "type": "action",
            "actions": []
          }
        },
        "fieldParams": {
          "Title": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": false
          },
          "Year": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": false
          },
          "amazon": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": false,
            "stringDisplay": "link",
            "weblink": "see the book on Amazon"
          },
          "author_id": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": true,
            "configureLinkedCard": {
              "fields": {
                "country": {
                  "id": "country",
                  "content": "Country",
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
                  "content": "Picture",
                  "type": "field",
                  "read": true,
                  "dataType": "file"
                }
              },
              "fieldParams": {
                "country": {
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
                }
              },
              "fieldOrder": [
                "photo",
                "name",
                "country",
                "id"
              ]
            },
            "subHeader": "Writer: "
          },
          "id": {
            "include": false,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": false
          },
          "picture": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": false,
            "fileImage": true
          },
          "upvotes": {
            "include": false,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": false
          },
          "upvotes_text": {
            "include": false,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": false
          },
          "plot": {
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
            "title": "New tab",
            "fieldIds": [
              "Title",
              "picture",
              "upvotes",
              "Year",
              "author_id",
              "plot",
              "amazon",
              "id",
              "action__77491606152233967",
              "upvotes_text"
            ]
          }
        },
        "columnOrder": [
          "tab-1"
        ],
        "actions": [
          {
            "sysName": "upvotes",
            "id": "77491606152233967",
            "name": "Upvote on this book",
            "displayAs": "button",
            "buttonIcon": "plus",
            "buttonType": "accent",
            "closePopup": true,
            "dropdown": true,
            "SLtype": "other",
            "fields": {
              "readFields": [
                {
                  "fieldSysName": "id",
                  "fetch": [],
                  "sysName": "id",
                  "name": "id",
                  "dataType": "id",
                  "link": ""
                }
              ],
              "writeFields": [
                {
                  "fieldSysName": "book_id",
                  "fetch": [],
                  "sysName": "book_id",
                  "name": "",
                  "dataType": "link",
                  "link": "Books"
                }
              ]
            },
            "formMapping": [
              {
                "id": "65241606152262181",
                "target": "book_id",
                "type": "objectField",
                "value": "id"
              }
            ]
          }
        ]
      },
      "fields": {
        "Title": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false
        },
        "Year": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false
        },
        "amazon": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false,
          "stringDisplay": "link",
          "weblink": "see the book on Amazon"
        },
        "author_id": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": true,
          "configureLinkedCard": {
            "fields": {
              "country": {
                "id": "country",
                "content": "Country",
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
                "content": "Picture",
                "type": "field",
                "read": true,
                "dataType": "file"
              }
            },
            "fieldParams": {
              "country": {
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
              }
            },
            "fieldOrder": [
              "photo",
              "name",
              "country",
              "id"
            ]
          },
          "subHeader": "Writer: "
        },
        "id": {
          "include": false,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false
        },
        "picture": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false,
          "fileImage": true
        },
        "upvotes": {
          "include": false,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false
        },
        "upvotes_text": {
          "include": false,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false
        },
        "plot": {
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
      "actions": [
        {
          "sysName": "upvotes",
          "id": "77491606152233967",
          "name": "Upvote on this book",
          "displayAs": "button",
          "buttonIcon": "plus",
          "buttonType": "accent",
          "closePopup": true,
          "dropdown": true,
          "SLtype": "other",
          "fields": {
            "readFields": [
              {
                "fieldSysName": "id",
                "fetch": [],
                "sysName": "id",
                "name": "id",
                "dataType": "id",
                "link": ""
              }
            ],
            "writeFields": [
              {
                "fieldSysName": "book_id",
                "fetch": [],
                "sysName": "book_id",
                "name": "",
                "dataType": "link",
                "link": "Books"
              }
            ]
          },
          "formMapping": [
            {
              "id": "65241606152262181",
              "target": "book_id",
              "type": "objectField",
              "value": "id"
            }
          ]
        }
      ]
    },
    "tableTitle": "Vote for your Favourite Book!",
    "actions": null,
    "headers": [
      {
        "sysName": "Title",
        "name": "Title",
        "dataType": "string",
        "id": "61721606146483591",
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
        "typeVariable": {},
        "json": false,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "indexExists": false
      },
      {
        "sysName": "Year",
        "name": "Year",
        "dataType": "number",
        "id": "31891606146490274",
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
        "json": false,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "indexExists": false
      },
      {
        "sysName": "amazon",
        "name": "Link",
        "dataType": "string",
        "id": "38631606146498227",
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
        "json": false,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "indexExists": false
      },
      {
        "sysName": "author_id",
        "name": "Author",
        "dataType": "link",
        "id": "92061606146469134",
        "link": "Authors",
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
        "json": false,
        "linkOrArrayLinkType": true,
        "linkType": true,
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
        "formatOptions": null,
        "typeVariable": {},
        "json": false,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "indexExists": false
      },
      {
        "sysName": "picture",
        "name": "Picture",
        "dataType": "file",
        "id": "61021606149985644",
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
        "formatOptions": null,
        "typeVariable": {},
        "json": false,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "indexExists": false
      },
      {
        "sysName": "plot",
        "name": "Plot",
        "dataType": "string",
        "id": "97401606161579412",
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
        "formatOptions": null,
        "typeVariable": {},
        "json": false,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "indexExists": false
      },
      {
        "sysName": "upvotes",
        "name": "Number of upvotes",
        "dataType": "number",
        "id": "45431606146512728",
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
        "json": false,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "indexExists": false
      },
      {
        "sysName": "upvotes_text",
        "name": "Upvotes",
        "dataType": "string",
        "id": "95311606152487151",
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
        "formatOptions": null,
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
        "amazon": "https://www.amazon.com/War-Peace-Vintage-Classics-Tolstoy/dp/1400079985",
        "Title": "War and Peace",
        "plot": "War and Peace broadly focuses on Napoleon’s invasion of Russia in 1812 and follows three of the most well-known characters in literature: Pierre Bezukhov, the illegitimate son of a count who is fighting for his inheritance and yearning for spiritual fulfillment; Prince Andrei Bolkonsky, who leaves his family behind to fight in the war against Napoleon; and Natasha Rostov, the beautiful young daughter of a nobleman who intrigues both men.\n\nA s Napoleon’s army invades, Tolstoy brilliantly follows characters from diverse backgrounds—peasants and nobility, civilians and soldiers—as they struggle with the problems unique to their era, their history, and their culture. And as the novel progresses, these characters transcend their specificity, becoming some of the most moving—and human—figures in world literature.",
        "Year": 1867,
        "upvotes_text": "5 upvotes",
        "upvotes": 5,
        "id": "44ac3660-069d-4f8d-99fb-a93e841d3ca9",
        "picture": "https://images-na.ssl-images-amazon.com/images/I/51J1nb00FLL._SX330_BO1,204,203,200_.jpg",
        "author_id": {
          "country": "Russia",
          "name": "Leo Tolstoy",
          "photo": "data:image/jpeg;base64,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",
          "id": "ffc054fe-a4ad-476b-9e27-3a5c98b2b10b"
        }
      },
      {
        "amazon": "https://www.amazon.com/Anna-Karenina-Wordsworth-Classics-Tolstoy/dp/1853262714/",
        "Title": "Anna Karenina",
        "plot": "Anna Karenina is one of the most loved and memorable heroines of literature. Her overwhelming charm dominates a novel of unparalleled richness and density. Tolstoy considered this book to be his first real attempt at a novel form, and it addresses the very nature of society at all levels,- of destiny, death, human relationships and the irreconcilable contradictions of existence. It ends tragically, and there is much that evokes despair, yet set beside this is an abounding joy in life's many ephemeral pleasures, and a profusion of comic relief.",
        "Year": 1887,
        "id": "2d567166-484c-4064-9ffe-7172b51c32a5",
        "picture": "data:image/webp;base64,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",
        "author_id": {
          "country": "Russia",
          "name": "Leo Tolstoy",
          "photo": "data:image/jpeg;base64,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",
          "id": "ffc054fe-a4ad-476b-9e27-3a5c98b2b10b"
        }
      }
    ],
    "totalPages": 1,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [
      [
        "Title",
        1325688
      ],
      [
        "Year",
        1325688
      ],
      [
        "amazon",
        1325688
      ],
      [
        "author_id.country",
        1325687
      ],
      [
        "author_id.id",
        1325687
      ],
      [
        "author_id.name",
        1325687
      ],
      [
        "author_id.photo",
        1325687
      ],
      [
        "id",
        1325688
      ],
      [
        "picture",
        1325688
      ],
      [
        "plot",
        1325688
      ],
      [
        "upvotes",
        1325688
      ],
      [
        "upvotes_text",
        1325688
      ]
    ],
    "writeFields": [],
    "structures": {
      "1325687": {
        "id": 1325687,
        "dateCreated": "2020-11-23T15:46:23Z",
        "hidden": false,
        "dateHidden": null,
        "networkID": 4061,
        "name": "Authors",
        "sysName": "Authors",
        "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkType\":false,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false},{\"sysName\":\"name\",\"name\":\"Name\",\"dataType\":\"string\",\"id\":\"26491606146386795\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkType\":false,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false},{\"sysName\":\"photo\",\"name\":\"Picture\",\"dataType\":\"file\",\"id\":\"34851606146387901\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkType\":false,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false},{\"sysName\":\"book_ids\",\"name\":\"Books\",\"dataType\":\"arrayLink\",\"id\":\"36111606146410363\",\"link\":\"Books\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkType\":false,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"json\":false},{\"sysName\":\"country\",\"name\":\"Country\",\"dataType\":\"string\",\"id\":\"85641606146387358\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkType\":false,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false},{\"sysName\":\"@who\",\"name\":\"who changed\",\"dataType\":\"string\",\"id\":\"-1\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkType\":false,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false},{\"sysName\":\"@dateCreated\",\"name\":\"date created\",\"dataType\":\"date\",\"id\":\"-2\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkType\":false,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false},{\"sysName\":\"@dateChanged\",\"name\":\"date changed\",\"dataType\":\"date\",\"id\":\"-3\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkType\":false,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false}]",
        "jsonGroupSettings": null,
        "jsonViewIdSettings": "[{\"sysName\":\"name\"}]",
        "jsonSettings": null,
        "jsonNativeIndexSettings": null,
        "indexEnabled": true,
        "lastIndexUpdate": 0,
        "indexName": "",
        "dateChanged": "2020-11-23T15:49:11Z",
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
          "formatOptions": null,
          "typeVariable": {},
          "json": false,
          "linkOrArrayLinkType": false,
          "linkType": false,
          "arrayLink": false,
          "indexExists": false
        },
        "folderId": null
      },
      "1325688": {
        "id": 1325688,
        "dateCreated": "2020-11-23T15:47:45Z",
        "hidden": false,
        "dateHidden": null,
        "networkID": 4061,
        "name": "Books",
        "sysName": "Books",
        "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkType\":false,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false},{\"sysName\":\"Year\",\"name\":\"Year\",\"dataType\":\"number\",\"id\":\"31891606146490274\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkType\":false,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false},{\"sysName\":\"amazon\",\"name\":\"Link\",\"dataType\":\"string\",\"id\":\"38631606146498227\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkType\":false,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false},{\"sysName\":\"upvotes\",\"name\":\"Number of upvotes\",\"dataType\":\"number\",\"id\":\"45431606146512728\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkType\":false,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false},{\"sysName\":\"picture\",\"name\":\"Picture\",\"dataType\":\"file\",\"id\":\"61021606149985644\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkType\":false,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false},{\"sysName\":\"Title\",\"name\":\"Title\",\"dataType\":\"string\",\"id\":\"61721606146483591\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkType\":false,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false},{\"sysName\":\"author_id\",\"name\":\"Author\",\"dataType\":\"link\",\"id\":\"92061606146469134\",\"link\":\"Authors\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkType\":true,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"json\":false},{\"sysName\":\"upvotes_text\",\"name\":\"Upvotes\",\"dataType\":\"string\",\"id\":\"95311606152487151\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkType\":false,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false},{\"sysName\":\"plot\",\"name\":\"Plot\",\"dataType\":\"string\",\"id\":\"97401606161579412\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkType\":false,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false},{\"sysName\":\"@who\",\"name\":\"who changed\",\"dataType\":\"string\",\"id\":\"-1\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkType\":false,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false},{\"sysName\":\"@dateCreated\",\"name\":\"date created\",\"dataType\":\"date\",\"id\":\"-2\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkType\":false,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false},{\"sysName\":\"@dateChanged\",\"name\":\"date changed\",\"dataType\":\"date\",\"id\":\"-3\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkType\":false,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false}]",
        "jsonGroupSettings": null,
        "jsonViewIdSettings": "[{\"sysName\":\"Title\"},{\"sysName\":\"Year\"}]",
        "jsonSettings": null,
        "jsonNativeIndexSettings": null,
        "indexEnabled": true,
        "lastIndexUpdate": 0,
        "indexName": "",
        "dateChanged": "2020-11-23T20:01:33Z",
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
          "formatOptions": null,
          "typeVariable": {},
          "json": false,
          "linkOrArrayLinkType": false,
          "linkType": false,
          "arrayLink": false,
          "indexExists": false
        },
        "folderId": null
      }
    },
    "isSuccessWrite": false,
    "writeError": null,
    "writeResponse": null,
    "fileds": []
  }

  let linksWrite = {
    "sl": "allUsers",
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
            "fieldSysName": "CV_url",
            "sysName": "CV_url",
            "name": "Ссылка на CV",
            "dataType": "string",
            "link": ""
          },
          {
            "fieldSysName": "City_id",
            "sysName": "City_id",
            "name": "Город проживания",
            "dataType": "link",
            "link": "cities"
          },
          {
            "fieldSysName": "Compan_city_id",
            "sysName": "Compan_city_id",
            "name": "Города, где работает компания",
            "dataType": "arrayLink",
            "link": "cities"
          },
          {
            "fieldSysName": "Company_id",
            "sysName": "Company_id",
            "name": "Название компании",
            "dataType": "string",
            "link": ""
          },
          {
            "fieldSysName": "Company_site",
            "sysName": "Company_site",
            "name": "Сайт компании",
            "dataType": "string",
            "link": ""
          },
          {
            "fieldSysName": "Photo",
            "sysName": "Photo",
            "name": "Фото",
            "dataType": "file",
            "link": ""
          },
          {
            "fieldSysName": "Salary_expectations_TEXT",
            "sysName": "Salary_expectations_TEXT",
            "name": "Ожидания по доходу, gross",
            "dataType": "string",
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
            "fieldSysName": "TG_username",
            "sysName": "TG_username",
            "name": "Telegram username",
            "dataType": "string",
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
            "fieldSysName": "gender",
            "sysName": "gender",
            "name": "Пол",
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
            "name": "Роль в системе",
            "dataType": "string",
            "link": ""
          }
        ],
        "writeFields": [
          {
            "fieldSysName": "City_id",
            "sysName": "City_id",
            "name": "Город проживания",
            "dataType": "link",
            "link": "cities"
          },
          {
            "fieldSysName": "Compan_city_id",
            "sysName": "Compan_city_id",
            "name": "Города, где работает компания",
            "dataType": "arrayLink",
            "link": "cities"
          },
          {
            "fieldSysName": "id",
            "sysName": "id",
            "name": "id",
            "dataType": "id",
            "link": ""
          }
        ],
        "fields": {
          "CV_url": {
            "id": "CV_url",
            "content": "Ссылка на CV",
            "type": "field",
            "dataType": "string",
            "read": true,
            "link": ""
          },
          "City_id": {
            "id": "City_id",
            "content": "Город проживания",
            "type": "field",
            "dataType": "link",
            "write": true,
            "read": true,
            "link": "cities"
          },
          "Compan_city_id": {
            "id": "Compan_city_id",
            "content": "Города, где работает компания",
            "type": "field",
            "dataType": "arrayLink",
            "write": true,
            "read": true,
            "link": "cities"
          },
          "Company_id": {
            "id": "Company_id",
            "content": "Название компании",
            "type": "field",
            "dataType": "string",
            "read": true,
            "link": ""
          },
          "Company_site": {
            "id": "Company_site",
            "content": "Сайт компании",
            "type": "field",
            "dataType": "string",
            "read": true,
            "link": ""
          },
          "Photo": {
            "id": "Photo",
            "content": "Фото",
            "type": "field",
            "dataType": "file",
            "read": true,
            "link": ""
          },
          "Salary_expectations_TEXT": {
            "id": "Salary_expectations_TEXT",
            "content": "Ожидания по доходу, gross",
            "type": "field",
            "dataType": "string",
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
          "TG_username": {
            "id": "TG_username",
            "content": "Telegram username",
            "type": "field",
            "dataType": "string",
            "read": true,
            "link": ""
          },
          "email": {
            "id": "email",
            "content": "Email",
            "type": "field",
            "dataType": "string",
            "read": true,
            "link": ""
          },
          "firstName": {
            "id": "firstName",
            "content": "Имя",
            "type": "field",
            "dataType": "string",
            "read": true,
            "link": ""
          },
          "gender": {
            "id": "gender",
            "content": "Пол",
            "type": "field",
            "dataType": "string",
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
            "content": "Роль в системе",
            "type": "field",
            "dataType": "string",
            "read": true,
            "link": ""
          }
        },
        "fieldParams": {
          "answer": {
            "include": true,
            "fileImageFormat": "square",
            "fileImageSize": 200,
            "quickSearch": true
          },
          "date": {
            "include": true,
            "fileImageFormat": "square",
            "fileImageSize": 200,
            "quickSearch": true,
            "dateTimeOn": true
          },
          "id": {
            "include": false,
            "fileImageFormat": "square",
            "fileImageSize": 200,
            "quickSearch": true
          },
          "question": {
            "include": true,
            "fileImageFormat": "square",
            "fileImageSize": 200,
            "quickSearch": true
          },
          "CV_url": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200
          },
          "City_id": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": true,
            "fileImageSize": 200
          },
          "Compan_city_id": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": true,
            "fileImageSize": 200
          },
          "Company_id": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200
          },
          "Company_site": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200
          },
          "Photo": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200
          },
          "Salary_expectations_TEXT": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200
          },
          "Skills": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200
          },
          "TG_username": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200
          },
          "email": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200
          },
          "firstName": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200
          },
          "gender": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200
          },
          "lastName": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200
          },
          "phone": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200
          },
          "role": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200
          }
        },
        "columns": {
          "tab-1": {
            "id": "tab-1",
            "title": "New tab",
            "fieldIds": [
              "id",
              "CV_url",
              "City_id",
              "Compan_city_id",
              "Company_id",
              "Company_site",
              "Photo",
              "Salary_expectations_TEXT",
              "Skills",
              "TG_username",
              "email",
              "firstName",
              "gender",
              "lastName",
              "phone",
              "role"
            ]
          }
        },
        "columnOrder": [
          "tab-1"
        ]
      },
      "fields": {
        "answer": {
          "include": true,
          "fileImageFormat": "square",
          "fileImageSize": 200,
          "quickSearch": true
        },
        "date": {
          "include": true,
          "fileImageFormat": "square",
          "fileImageSize": 200,
          "quickSearch": true,
          "dateTimeOn": true
        },
        "id": {
          "include": false,
          "fileImageFormat": "square",
          "fileImageSize": 200,
          "quickSearch": true
        },
        "question": {
          "include": true,
          "fileImageFormat": "square",
          "fileImageSize": 200,
          "quickSearch": true
        },
        "CV_url": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200
        },
        "City_id": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": true,
          "fileImageSize": 200,
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
            }
          ]
        },
        "Compan_city_id": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": true,
          "fileImageSize": 200,
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
            }
          ]
        },
        "Company_id": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200
        },
        "Company_site": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200
        },
        "Photo": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200
        },
        "Salary_expectations_TEXT": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200
        },
        "Skills": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200
        },
        "TG_username": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200
        },
        "email": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200
        },
        "firstName": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200
        },
        "gender": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200
        },
        "lastName": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200
        },
        "phone": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200
        },
        "role": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200
        }
      }
    },
    "tableTitle": "",
    "headers": [
      {
        "sysName": "CV_url",
        "name": "Ссылка на CV",
        "dataType": "string",
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
        "json": false,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "indexExists": false
      },
      {
        "sysName": "City_id",
        "name": "Город проживания",
        "dataType": "link",
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
        "json": false,
        "linkOrArrayLinkType": true,
        "linkType": true,
        "arrayLink": false,
        "indexExists": false
      },
      {
        "sysName": "Compan_city_id",
        "name": "Города, где работает компания",
        "dataType": "arrayLink",
        "id": "17331604005598241",
        "link": "cities",
        "group": "1600346984797",
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
        "typeVariable": {},
        "json": false,
        "linkOrArrayLinkType": true,
        "linkType": false,
        "arrayLink": true,
        "indexExists": false
      },
      {
        "sysName": "Company_id",
        "name": "Название компании",
        "dataType": "string",
        "id": "21091600891116320",
        "link": "",
        "group": "1600346984797",
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
        "typeVariable": {},
        "json": false,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "indexExists": false
      },
      {
        "sysName": "Company_site",
        "name": "Сайт компании",
        "dataType": "string",
        "id": "32501603357535558",
        "link": "",
        "group": "1600346984797",
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
        "json": false,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "indexExists": false
      },
      {
        "sysName": "Photo",
        "name": "Фото",
        "dataType": "file",
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
        "json": false,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "indexExists": false
      },
      {
        "sysName": "Salary_expectations_TEXT",
        "name": "Ожидания по доходу, gross",
        "dataType": "string",
        "id": "12481604012441934",
        "link": "",
        "group": "1600346971036",
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
        "json": false,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "indexExists": false
      },
      {
        "sysName": "Skills",
        "name": "Функция",
        "dataType": "arrayLink",
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
        "json": false,
        "linkOrArrayLinkType": true,
        "linkType": false,
        "arrayLink": true,
        "indexExists": false
      },
      {
        "sysName": "TG_username",
        "name": "Telegram username",
        "dataType": "string",
        "id": "52471600355107908",
        "link": "",
        "group": "1600346959380",
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
        "json": false,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "indexExists": false
      },
      {
        "sysName": "email",
        "name": "Email",
        "dataType": "string",
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
        "id": "21661600355677459",
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
        "json": false,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "indexExists": false
      },
      {
        "sysName": "phone",
        "name": "Телефон",
        "dataType": "string",
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
        "json": false,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "indexExists": false
      },
      {
        "sysName": "role",
        "name": "Роль в системе",
        "dataType": "string",
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
        "json": false,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "indexExists": false
      }
    ],
    "data": [
      {
        "Company_id": "Directual",
        "Photo": "https://images.unsplash.com/photo-1603977503292-79226279141c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "role": "admin,test",
        "Compan_city_id": [
          {
            "name": "Нижний Новгород",
            "id": "fa3a51d6-2784-48aa-acb6-58a4934260cb"
          },
          {
            "name": "Иркутск",
            "id": "cf89852c-0979-4dc2-a688-9f5f40e5f7b1"
          },
          {
            "name": "Тольятти",
            "id": "c272e7cd-d3c1-41a6-8ef3-731c1b6d3b0b"
          }
        ],
        "Salary_expectations_TEXT": "От 570 до 1440 тыс. ₽ в месяц, без бонусов (fix, gross)",
        "City_id": {
          "name": "Челябинск",
          "id": "a6b631d7-1456-421a-a8b7-a8880a9d3383"
        },
        "Skills": [
          {
            "name": "Finance",
            "id": "finance"
          },
          {
            "name": "HR: Admin and C&B",
            "id": "hr: admin and c&b"
          },
          {
            "name": "Online and Product marketing",
            "id": "online and product marketing"
          },
          {
            "name": "Business Development",
            "id": "business development"
          }
        ],
        "lastName": "Ершов",
        "firstName": "Павел",
        "id": "79151845361",
        "TG_username": "@pavelershov",
        "Company_site": "http://directual.com",
        "phone": "79151845361"
      },
      {
        "Company_id": "Up and Out",
        "Photo": "https://api.directual.com/fileUploaded/uao/33ad84e2-0a22-4e8f-965e-445d719ee084.jpg",
        "role": "candidate,admin,company",
        "Compan_city_id": [
          {
            "name": "Москва",
            "id": "95ddc157-f2dc-4ab1-a1e5-ce9c6398bfdf"
          }
        ],
        "Salary_expectations_TEXT": "От 120 до 370 тыс. ₽ в месяц, без бонусов (fix, gross)",
        "City_id": {
          "name": "Москва",
          "id": "95ddc157-f2dc-4ab1-a1e5-ce9c6398bfdf"
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
        "TG_username": "@nastya_nest",
        "Company_site": "upandout.ru",
        "phone": "79160990344"
      },
      {
        "Photo": "https://api.directual.com/fileUploaded/uao/5b8ae347-efde-45ab-a11c-fc3dd2618485.jpg",
        "role": "candidate,admin",
        "Salary_expectations_TEXT": "От 120 до 250 тыс. ₽ в месяц, без бонусов (fix, gross)",
        "City_id": {
          "name": "Москва",
          "id": "95ddc157-f2dc-4ab1-a1e5-ce9c6398bfdf"
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
        "TG_username": "@efremovalialife",
        "phone": "79670190111",
        "Compan_city_id": ""
      },
      {
        "Photo": "https://api.directual.com/fileUploaded/uao/69e2412c-d705-4352-b789-68024ba4ca29.jpg",
        "Salary_expectations_TEXT": "От  до  тыс. ₽ в месяц, без бонусов (fix, gross)",
        "lastName": "Navalikhin",
        "firstName": "Nikita",
        "id": "79152711596",
        "TG_username": "@navalikhin",
        "phone": "79152711596",
        "City_id": "",
        "Compan_city_id": ""
      },
      {
        "Photo": "https://api.directual.com/fileUploaded/uao/63858a66-95af-4cd1-b2fd-80f670072e46.jpg",
        "Compan_city_id": [],
        "Skills": [],
        "lastName": "Byakov",
        "firstName": "Leonid",
        "id": "79296509072",
        "TG_username": "@lbyakov",
        "phone": "79296509072",
        "City_id": ""
      },
      {
        "Photo": "https://api.directual.com/fileUploaded/uao/736ccfc6-fa0b-4e4b-9962-5ff9064052b2.jpg",
        "Salary_expectations_TEXT": "От 250 до 400 тыс. ₽ в месяц, без бонусов (fix, gross)",
        "Skills": [
          {
            "name": "Analytics",
            "id": "analytics"
          }
        ],
        "lastName": "Долгов",
        "firstName": "Никита",
        "id": "+79959001313",
        "TG_username": "@nik_dolgov",
        "phone": "+79959001313",
        "City_id": "",
        "Compan_city_id": ""
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
        "City_id.id",
        1315871
      ],
      [
        "City_id.name",
        1315871
      ],
      [
        "Compan_city_id.name",
        1315871
      ],
      [
        "Company_id",
        1315850
      ],
      [
        "Company_site",
        1315850
      ],
      [
        "Photo",
        1315850
      ],
      [
        "Salary_expectations_TEXT",
        1315850
      ],
      [
        "Skills.name",
        1316850
      ],
      [
        "TG_username",
        1315850
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
        "gender",
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
      "City_id",
      "Compan_city_id",
      "id"
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
        "jsonObject": "[{\"sysName\":\"role\",\"dataType\":\"string\",\"name\":\"Роль в системе\",\"id\":\"1\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"Salary_expectations_TEXT\",\"dataType\":\"string\",\"name\":\"Ожидания по доходу, gross\",\"id\":\"12481604012441934\",\"link\":\"\",\"group\":\"1600346971036\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"Compan_city_id\",\"dataType\":\"arrayLink\",\"name\":\"Города, где работает компания\",\"id\":\"17331604005598241\",\"link\":\"cities\",\"group\":\"1600346984797\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"json\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"isAuthorization\",\"dataType\":\"boolean\",\"name\":\"isAuthorization\",\"id\":\"2\",\"link\":\"\",\"group\":\"1600346916835\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"Company_id\",\"dataType\":\"string\",\"name\":\"Название компании\",\"id\":\"21091600891116320\",\"link\":\"\",\"group\":\"1600346984797\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"gender\",\"dataType\":\"string\",\"name\":\"Пол\",\"id\":\"21661600355677459\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"dateLastActivity\",\"dataType\":\"string\",\"name\":\"dateLastActivity\",\"id\":\"3\",\"link\":\"\",\"group\":\"1600346916835\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"Company_site\",\"dataType\":\"string\",\"name\":\"Сайт компании\",\"id\":\"32501603357535558\",\"link\":\"\",\"group\":\"1600346984797\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"Salary_expectations\",\"dataType\":\"json\",\"name\":\"Ожидания по доходу\",\"id\":\"39581600416217901\",\"link\":\"\",\"group\":\"1600346971036\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":true,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"email\",\"dataType\":\"string\",\"name\":\"Email\",\"id\":\"4\",\"link\":\"\",\"group\":\"1600346959380\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"push_topics\",\"dataType\":\"json\",\"name\":\"О чем оповещать\",\"id\":\"41091604006680753\",\"link\":\"\",\"group\":\"1604006620993\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":true,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"Job_title\",\"dataType\":\"string\",\"name\":\"Моя позиция в компании\",\"id\":\"42911604046604782\",\"link\":\"\",\"group\":\"1600346984797\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"push_how_often\",\"dataType\":\"json\",\"name\":\"Как часто присылать оповещения в бота\",\"id\":\"43711604006652482\",\"link\":\"\",\"group\":\"1604006620993\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":true,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"Photo\",\"dataType\":\"file\",\"name\":\"Фото\",\"id\":\"48241600975652227\",\"link\":\"\",\"group\":\"1600346959380\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"phone\",\"dataType\":\"string\",\"name\":\"Телефон\",\"id\":\"5\",\"link\":\"\",\"group\":\"1600346959380\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"TG_username\",\"dataType\":\"string\",\"name\":\"Telegram username\",\"id\":\"52471600355107908\",\"link\":\"\",\"group\":\"1600346959380\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"lastName\",\"dataType\":\"string\",\"name\":\"Фамилия\",\"id\":\"54421600355663803\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"dateCreated\",\"dataType\":\"string\",\"name\":\"dateCreated\",\"id\":\"6\",\"link\":\"\",\"group\":\"1600346916835\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"current_job_title\",\"dataType\":\"string\",\"name\":\"Должность в текущей компании\",\"id\":\"60981604048698572\",\"link\":\"\",\"group\":\"1600346971036\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"firstName\",\"dataType\":\"string\",\"name\":\"Имя\",\"id\":\"61731600355663227\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"password\",\"dataType\":\"string\",\"name\":\"password\",\"id\":\"7\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"CV_url\",\"dataType\":\"string\",\"name\":\"Ссылка на CV\",\"id\":\"74381600346994234\",\"link\":\"\",\"group\":\"1600346971036\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"City_id\",\"dataType\":\"link\",\"name\":\"Город проживания\",\"id\":\"78691600347022913\",\"link\":\"cities\",\"group\":\"1600346959380\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"linkType\":true},{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"8\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"Skills\",\"dataType\":\"arrayLink\",\"name\":\"Функция\",\"id\":\"82091600415098326\",\"link\":\"Functions\",\"group\":\"1600346971036\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"json\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"TG_user_id\",\"dataType\":\"link\",\"name\":\"Telegram User\",\"id\":\"82311600346913479\",\"link\":\"TUser\",\"group\":\"1600346959380\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"linkType\":true},{\"sysName\":\"current_job_company\",\"dataType\":\"string\",\"name\":\"Текущая компания\",\"id\":\"93761604048697992\",\"link\":\"\",\"group\":\"1600346971036\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"linkType\":false}]",
        "jsonGroupSettings": "[{\"id\":1600346916835,\"name\":\"Trash\",\"order\":3},{\"id\":1600346971036,\"name\":\"Candidate info\",\"order\":1},{\"id\":1600346984797,\"name\":\"Company info\",\"order\":2},{\"id\":1604006620993,\"name\":\"Настройки оповещений\",\"order\":4},{\"id\":1600346959380,\"name\":\"Contacts\",\"order\":0}]",
        "jsonViewIdSettings": "[{\"sysName\":\"firstName\"},{\"sysName\":\"lastName\"}]",
        "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":false,\"lowPriority\":false}",
        "jsonNativeIndexSettings": null,
        "indexEnabled": true,
        "lastIndexUpdate": 0,
        "indexName": "",
        "dateChanged": "2020-10-30T09:05:31Z",
        "createBy": 0,
        "changedBy": 1,
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
          "typeVariable": {},
          "json": false,
          "linkOrArrayLinkType": false,
          "linkType": false,
          "arrayLink": false,
          "indexExists": false
        },
        "objectIDSysName": "id",
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
          "typeVariable": {},
          "json": false,
          "linkOrArrayLinkType": false,
          "linkType": false,
          "arrayLink": false,
          "indexExists": false
        },
        "objectIDSysName": "id",
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
        "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"name\",\"dataType\":\"string\",\"name\":\"Назване функции\",\"id\":\"55601601296901980\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"description\",\"dataType\":\"string\",\"name\":\"Описане\",\"id\":\"61471604045483466\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"linkType\":false}]",
        "jsonGroupSettings": null,
        "jsonViewIdSettings": "[{\"sysName\":\"name\"}]",
        "jsonSettings": null,
        "jsonNativeIndexSettings": null,
        "indexEnabled": false,
        "lastIndexUpdate": 0,
        "indexName": "",
        "dateChanged": "2020-10-30T08:11:35Z",
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
          "typeVariable": {},
          "json": false,
          "linkOrArrayLinkType": false,
          "linkType": false,
          "arrayLink": false,
          "indexExists": false
        },
        "objectIDSysName": "id",
        "folderId": 33588861
      }
    },
    "isSuccessWrite": false,
    "writeError": null,
    "writeResponse": null,
    "fileds": [
      {
        "sysName": "City_id",
        "name": "Город проживания",
        "dataType": "link",
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
        "json": false,
        "linkOrArrayLinkType": true,
        "linkType": true,
        "arrayLink": false,
        "indexExists": false
      },
      {
        "sysName": "Compan_city_id",
        "name": "Города, где работает компания",
        "dataType": "arrayLink",
        "id": "17331604005598241",
        "link": "cities",
        "group": "1600346984797",
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
        "typeVariable": {},
        "json": false,
        "linkOrArrayLinkType": true,
        "linkType": false,
        "arrayLink": true,
        "indexExists": false
      },
      {
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
        "typeVariable": {},
        "json": false,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "indexExists": false
      }
    ]
  }

  let exampleCards = {
    "sl": "editFunctions",
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
            "fieldSysName": "description",
            "fetch": [],
            "sysName": "description",
            "name": "Описане",
            "dataType": "string",
            "link": ""
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
            "fieldSysName": "name",
            "fetch": [],
            "sysName": "name",
            "name": "Назване функции",
            "dataType": "string",
            "link": ""
          }
        ],
        "writeFields": [
          {
            "fieldSysName": "description",
            "fetch": [],
            "sysName": "description",
            "name": "Описане",
            "dataType": "string",
            "link": ""
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
            "fieldSysName": "name",
            "fetch": [],
            "sysName": "name",
            "name": "Назване функции",
            "dataType": "string",
            "link": ""
          }
        ],
        "fields": {
          "description": {
            "id": "description",
            "content": "Описане",
            "type": "field",
            "dataType": "string",
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
            "write": true,
            "read": true,
            "link": "",
            "actions": []
          },
          "name": {
            "id": "name",
            "content": "Назване функции",
            "type": "field",
            "dataType": "string",
            "write": true,
            "read": true,
            "link": "",
            "actions": []
          }
        },
        "fieldParams": {
          "description": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200
          },
          "id": {
            "include": false,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200
          },
          "name": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200
          }
        },
        "columns": {
          "tab-1": {
            "id": "tab-1",
            "title": "New tab",
            "fieldIds": [
              "name",
              "description",
              "id"
            ]
          }
        },
        "columnOrder": [
          "tab-1"
        ],
        "actions": {}
      },
      "fields": {
        "description": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200
        },
        "id": {
          "include": false,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200
        },
        "name": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200
        }
      }
    },
    "tableTitle": "Все функции",
    "actions": null,
    "headers": [
      {
        "sysName": "description",
        "name": "Описане",
        "dataType": "string",
        "id": "61471604045483466",
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
        "typeVariable": {},
        "linkOrArrayLinkType": false,
        "arrayLink": false,
        "linkType": false,
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
        "formatOptions": null,
        "json": false,
        "typeVariable": {},
        "linkOrArrayLinkType": false,
        "arrayLink": false,
        "linkType": false,
        "indexExists": false
      },
      {
        "sysName": "name",
        "name": "Назване функции",
        "dataType": "string",
        "id": "55601601296901980",
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
        "typeVariable": {},
        "linkOrArrayLinkType": false,
        "arrayLink": false,
        "linkType": false,
        "indexExists": false
      }
    ],
    "data": [
      {
        "name": "Finance",
        "id": "finance",
        "description": ""
      },
      {
        "name": "Analytics",
        "id": "analytics",
        "description": ""
      },
      {
        "name": "Business Development",
        "id": "business development",
        "description": ""
      },
      {
        "name": "Big Data",
        "id": "big data",
        "description": ""
      },
      {
        "name": "Change Management",
        "id": "change management",
        "description": ""
      },
      {
        "name": "Compliance and Internal control",
        "id": "compliance and internal control",
        "description": ""
      },
      {
        "name": "Corporate Finance",
        "id": "corporate finance",
        "description": ""
      },
      {
        "name": "Customer Support",
        "id": "customer finance",
        "description": ""
      },
      {
        "name": "Digital",
        "id": "digital",
        "description": ""
      },
      {
        "name": "Due Diligence",
        "id": " due diligence",
        "description": ""
      },
      {
        "name": "FS: Accounting and Audit",
        "id": "fs: accounting and audit",
        "description": ""
      },
      {
        "name": "GR",
        "id": "gr",
        "description": ""
      },
      {
        "name": "HR: Admin and C&B",
        "id": "hr: admin and c&b",
        "description": ""
      },
      {
        "name": "Lean",
        "id": "lean",
        "description": ""
      },
      {
        "name": "Legal",
        "id": "legal",
        "description": ""
      },
      {
        "name": "M&A",
        "id": "m&a",
        "description": ""
      },
      {
        "name": "Online and Product marketing",
        "id": "online and product marketing",
        "description": ""
      },
      {
        "name": "Operations (PI)",
        "id": "operations (pi)",
        "description": ""
      },
      {
        "name": "Organizational Development",
        "id": "organizational development",
        "description": ""
      },
      {
        "name": "PR",
        "id": "pr",
        "description": ""
      }
    ],
    "totalPages": 2,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [
      [
        "description",
        1316850
      ],
      [
        "id",
        1316850
      ],
      [
        "name",
        1316850
      ]
    ],
    "writeFields": [
      "description",
      "id",
      "name"
    ],
    "structures": {
      "1316850": {
        "networkID": 3571,
        "id": 1316850,
        "dateCreated": "2020-09-28T12:41:37Z",
        "hidden": false,
        "dateHidden": null,
        "name": "Функции",
        "sysName": "Functions",
        "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"name\",\"dataType\":\"string\",\"name\":\"Назване функции\",\"id\":\"55601601296901980\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"description\",\"dataType\":\"string\",\"name\":\"Описане\",\"id\":\"61471604045483466\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"linkType\":false}]",
        "jsonGroupSettings": null,
        "jsonViewIdSettings": "[{\"sysName\":\"name\"}]",
        "jsonSettings": null,
        "jsonNativeIndexSettings": null,
        "indexEnabled": true,
        "lastIndexUpdate": 0,
        "indexName": "",
        "dateChanged": "2020-10-30T08:11:35Z",
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
          "json": false,
          "typeVariable": {},
          "linkOrArrayLinkType": false,
          "arrayLink": false,
          "linkType": false,
          "indexExists": false
        },
        "objectIDSysName": "id",
        "folderId": 33588861
      }
    },
    "isSuccessWrite": false,
    "writeError": null,
    "writeResponse": null,
    "fileds": [
      {
        "sysName": "description",
        "name": "Описане",
        "dataType": "string",
        "id": "61471604045483466",
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
        "typeVariable": {},
        "linkOrArrayLinkType": false,
        "arrayLink": false,
        "linkType": false,
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
        "formatOptions": null,
        "json": false,
        "typeVariable": {},
        "linkOrArrayLinkType": false,
        "arrayLink": false,
        "linkType": false,
        "indexExists": false
      },
      {
        "sysName": "name",
        "name": "Назване функции",
        "dataType": "string",
        "id": "55601601296901980",
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
        "typeVariable": {},
        "linkOrArrayLinkType": false,
        "arrayLink": false,
        "linkType": false,
        "indexExists": false
      }
    ]
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

  let exampleForm1 = {
    "sl": "TEST",
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
      "auth": {
        "userIdField": null,
        "isPerson": false
      },
      "fields": {
        "date": {
          "include": true,
          "hidden": false,
          "required": false,
          "isTextarea": false,
          "textareaRows": 4,
          "defaultValue": "",
          "isPositive": false,
          "quickSearch": true,
          "allowAddLinks": false,
          "description": "",
          "dateTimeOn": true,
          "isValid": true,
          "weight": 0,
          "unitName": "",
          "booleanOptions": [
            "Yes",
            "No"
          ],
          "jsonDisplay": "default",
          "customOption": false,
          "customOptionLabel": "My option",
          "customOptionType": "string",
          "customOptionPlaceholder": "Describe your option",
          "multipleChoice": [],
          "range": {
            "min": 0,
            "max": 100,
            "step": 1
          }
        },
        "id": {
          "include": true,
          "hidden": true,
          "required": false,
          "isTextarea": false,
          "textareaRows": 4,
          "defaultValue": "",
          "isPositive": false,
          "quickSearch": true,
          "allowAddLinks": false,
          "description": "",
          "dateTimeOn": true,
          "isValid": true,
          "weight": 1,
          "unitName": "",
          "booleanOptions": [
            "Yes",
            "No"
          ],
          "jsonDisplay": "default",
          "customOption": false,
          "customOptionLabel": "My option",
          "customOptionType": "string",
          "customOptionPlaceholder": "Describe your option",
          "multipleChoice": [],
          "range": {
            "min": 0,
            "max": 100,
            "step": 1
          }
        }
      }
    },
    "fileds": [
      {
        "sysName": "date",
        "name": "date",
        "dataType": "date",
        "id": "18371604334217344",
        "link": "",
        "group": "0",
        "tags": null,
        "indexing": false,
        "ordering": false,
        "description": null,
        "weight": 0,
        "order": 1,
        "linkIndexFieldSysName": [],
        "defaultValue": null,
        "constraints": null,
        "synthetic": false,
        "format": null,
        "formatOptions": null,
        "typeVariable": {},
        "json": false,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "indexExists": false,
        "params": {
          "include": true,
          "hidden": false,
          "required": false,
          "isTextarea": false,
          "textareaRows": 4,
          "defaultValue": "",
          "isPositive": false,
          "quickSearch": true,
          "allowAddLinks": false,
          "description": "",
          "dateTimeOn": true,
          "isValid": true,
          "weight": 0,
          "unitName": "",
          "booleanOptions": [
            "Yes",
            "No"
          ],
          "jsonDisplay": "default",
          "customOption": false,
          "customOptionLabel": "My option",
          "customOptionType": "string",
          "customOptionPlaceholder": "Describe your option",
          "multipleChoice": [],
          "range": {
            "min": 0,
            "max": 100,
            "step": 1
          }
        },
        "isValid": true
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
        "weight": 1,
        "order": 0,
        "linkIndexFieldSysName": [],
        "defaultValue": "",
        "constraints": null,
        "synthetic": false,
        "format": null,
        "formatOptions": null,
        "typeVariable": {},
        "json": false,
        "linkOrArrayLinkType": false,
        "linkType": false,
        "arrayLink": false,
        "indexExists": false,
        "params": {
          "include": true,
          "hidden": true,
          "required": false,
          "isTextarea": false,
          "textareaRows": 4,
          "defaultValue": "",
          "isPositive": false,
          "quickSearch": true,
          "allowAddLinks": false,
          "description": "",
          "dateTimeOn": true,
          "isValid": true,
          "weight": 1,
          "unitName": "",
          "booleanOptions": [
            "Yes",
            "No"
          ],
          "jsonDisplay": "default",
          "customOption": false,
          "customOptionLabel": "My option",
          "customOptionType": "string",
          "customOptionPlaceholder": "Describe your option",
          "multipleChoice": [],
          "range": {
            "min": 0,
            "max": 100,
            "step": 1
          }
        }
      }
    ],
    "error": null,
    "isSuccessWrite": false,
    "response": null,
    "data": null
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
        "arrayLink": [""],
        "range": "{\"firstValue\":40,\"secondValue\":90}",
        "link": "option2",
        //"radio": "option1",
        "radio": "{\"value\":\"option1\"}",
        "boolean": true,
        //"checkbox": "{\"option2\":true}",
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
          "isTextarea": false,
          "isMarkdown": true,
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