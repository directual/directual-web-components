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
    "sl": "allAuthors",
    "pageSize": "18",
    "headerField": null,
    "params": {
      "cardListLayout": "grid",
      "cardHeaderComment": "",
      "deleteField": "",
      "cardBodyText": "country",
      "cardImage": true,
      "cardImageField": "photo",
      "cardImageType": "top",
      "cardImageSize": 330,
      "objectView": {},
      "data": {
        "readFields": [
          {
            "fieldSysName": "book_ids",
            "fetch": [
              {
                "fieldSysName": "Title",
                "condition": null,
                "fetch": []
              },
              {
                "fieldSysName": "Year",
                "condition": null,
                "fetch": []
              },
              {
                "fieldSysName": "amazon",
                "condition": null,
                "fetch": []
              },
              {
                "fieldSysName": "id",
                "condition": null,
                "fetch": []
              },
              {
                "fieldSysName": "picture",
                "condition": null,
                "fetch": []
              },
              {
                "fieldSysName": "plot",
                "condition": null,
                "fetch": []
              },
              {
                "fieldSysName": "upvotes",
                "condition": null,
                "fetch": []
              },
              {
                "fieldSysName": "upvotes_text",
                "condition": null,
                "fetch": []
              }
            ],
            "sysName": "book_ids",
            "name": "Books",
            "dataType": "arrayLink",
            "link": "Books"
          },
          {
            "fieldSysName": "country",
            "fetch": [],
            "sysName": "country",
            "name": "Country",
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
            "name": "Name",
            "dataType": "string",
            "link": ""
          },
          {
            "fieldSysName": "photo",
            "fetch": [],
            "sysName": "photo",
            "name": "Picture",
            "dataType": "file",
            "link": ""
          }
        ],
        "writeFields": [],
        "fields": {
          "book_ids": {
            "id": "book_ids",
            "content": "Books",
            "type": "field",
            "dataType": "arrayLink",
            "read": true,
            "link": "Books",
            "actions": [
              {
                "sysName": "upvotes",
                "id": "39211606161389632",
                "name": "Upvote on this book",
                "displayAs": "button",
                "buttonIcon": "plus",
                "buttonType": "accent",
                "closePopup": true,
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
                "callFrom": "linked",
                "callFromField": "book_ids",
                "formMapping": [
                  {
                    "id": "83421606161484258",
                    "target": "book_id",
                    "type": "linkedField",
                    "value": "id"
                  }
                ]
              }
            ]
          },
          "country": {
            "id": "country",
            "content": "Country",
            "type": "field",
            "dataType": "string",
            "read": true,
            "link": "",
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
          "name": {
            "id": "name",
            "content": "Name",
            "type": "field",
            "dataType": "string",
            "read": true,
            "link": "",
            "actions": []
          },
          "photo": {
            "id": "photo",
            "content": "Picture",
            "type": "field",
            "dataType": "file",
            "read": true,
            "link": "",
            "actions": []
          },
          "action__27721606400940442": {
            "content": "Add a book",
            "id": "action__27721606400940442",
            "type": "action",
            "actions": []
          }
        },
        "fieldParams": {
          "book_ids": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": true,
            "configureLinkedCard": {
              "fields": {
                "Title": {
                  "id": "Title",
                  "content": "Title",
                  "type": "field",
                  "read": true,
                  "dataType": "string"
                },
                "Year": {
                  "id": "Year",
                  "content": "Year",
                  "type": "field",
                  "read": true,
                  "dataType": "number"
                },
                "amazon": {
                  "id": "amazon",
                  "content": "Link",
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
                "upvotes": {
                  "id": "upvotes",
                  "content": "Number of upvotes",
                  "type": "field",
                  "read": true,
                  "dataType": "number"
                },
                "picture": {
                  "id": "picture",
                  "content": "Picture",
                  "type": "field",
                  "read": true,
                  "dataType": "file"
                },
                "upvotes_text": {
                  "id": "upvotes_text",
                  "content": "Upvotes",
                  "type": "field",
                  "read": true,
                  "dataType": "string"
                },
                "action__39211606161389632": {
                  "id": "action__39211606161389632",
                  "content": "Upvote on this book",
                  "type": "action"
                },
                "plot": {
                  "id": "plot",
                  "content": "Plot",
                  "type": "field",
                  "read": true,
                  "dataType": "string"
                }
              },
              "fieldParams": {
                "Title": {
                  "include": true,
                  "fileImageFormat": "square",
                  "fileImageSize": 200
                },
                "Year": {
                  "include": true,
                  "fileImageFormat": "square",
                  "fileImageSize": 200
                },
                "amazon": {
                  "include": true,
                  "fileImageFormat": "square",
                  "fileImageSize": 200,
                  "stringDisplay": "link",
                  "weblink": "see the book on Amazon"
                },
                "id": {
                  "include": false,
                  "fileImageFormat": "square",
                  "fileImageSize": 200
                },
                "upvotes": {
                  "include": false,
                  "fileImageFormat": "square",
                  "fileImageSize": 200
                },
                "picture": {
                  "include": true,
                  "fileImageFormat": "square",
                  "fileImageSize": 200,
                  "fileImage": true
                },
                "upvotes_text": {
                  "include": true,
                  "fileImageFormat": "square",
                  "fileImageSize": 200
                },
                "plot": {
                  "include": true,
                  "fileImageFormat": "square",
                  "fileImageSize": 200,
                  "stringDisplay": "default"
                }
              },
              "fieldOrder": [
                "Title",
                "picture",
                "upvotes",
                "Year",
                "plot",
                "amazon",
                "upvotes_text",
                "id",
                "action__39211606161389632"
              ]
            },
            "subHeader": "Book: "
          },
          "country": {
            "include": true,
            "fileImageFormat": "square",
            "quickSearch": false,
            "fileImageSize": 200,
            "clickable": false
          },
          "name": {
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
            "clickable": false,
            "fileImage": true
          },
          "id": {
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
            "title": "About writer",
            "fieldIds": [
              "photo",
              "name",
              "country",
              "id"
            ]
          },
          "92571606400904858": {
            "id": "92571606400904858",
            "title": "Books",
            "fieldIds": [
              "book_ids",
              "action__27721606400940442"
            ]
          }
        },
        "columnOrder": [
          "tab-1",
          "92571606400904858"
        ],
        "actions": [
          {
            "sysName": "upvotes",
            "id": "39211606161389632",
            "name": "Upvote on this book",
            "displayAs": "button",
            "buttonIcon": "plus",
            "buttonType": "accent",
            "closePopup": true,
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
            "callFrom": "linked",
            "callFromField": "book_ids",
            "formMapping": [
              {
                "id": "83421606161484258",
                "target": "book_id",
                "type": "linkedField",
                "value": "id"
              }
            ]
          },
          {
            "sysName": "addBook",
            "id": "27721606400940442",
            "name": "Add a book",
            "displayAs": "form",
            "buttonIcon": "plus",
            "formFields": [
              {
                "id": "77951606400953181",
                "field": {
                  "fieldSysName": "Title",
                  "fetch": [],
                  "sysName": "Title",
                  "name": "Title",
                  "dataType": "string",
                  "link": ""
                }
              },
              {
                "id": "22331606400965522",
                "field": {
                  "fieldSysName": "Year",
                  "fetch": [],
                  "sysName": "Year",
                  "name": "Year",
                  "dataType": "number",
                  "link": ""
                }
              },
              {
                "id": "41971606400967830",
                "field": {
                  "fieldSysName": "amazon",
                  "fetch": [],
                  "sysName": "amazon",
                  "name": "Link",
                  "dataType": "string",
                  "link": ""
                }
              }
            ],
            "SLtype": "other",
            "fields": {
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
                      "fieldSysName": "id",
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
                }
              ],
              "writeFields": [
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
                  "fetch": [],
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
                }
              ]
            },
            "formMapping": [
              {
                "id": "98571606400972564",
                "target": "author_id",
                "type": "objectField",
                "value": null
              }
            ]
          }
        ]
      },
      "fields": {
        "book_ids": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": true,
          "configureLinkedCard": {
            "fields": {
              "Title": {
                "id": "Title",
                "content": "Title",
                "type": "field",
                "read": true,
                "dataType": "string"
              },
              "Year": {
                "id": "Year",
                "content": "Year",
                "type": "field",
                "read": true,
                "dataType": "number"
              },
              "amazon": {
                "id": "amazon",
                "content": "Link",
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
              "upvotes": {
                "id": "upvotes",
                "content": "Number of upvotes",
                "type": "field",
                "read": true,
                "dataType": "number"
              },
              "picture": {
                "id": "picture",
                "content": "Picture",
                "type": "field",
                "read": true,
                "dataType": "file"
              },
              "upvotes_text": {
                "id": "upvotes_text",
                "content": "Upvotes",
                "type": "field",
                "read": true,
                "dataType": "string"
              },
              "action__39211606161389632": {
                "id": "action__39211606161389632",
                "content": "Upvote on this book",
                "type": "action"
              },
              "plot": {
                "id": "plot",
                "content": "Plot",
                "type": "field",
                "read": true,
                "dataType": "string"
              }
            },
            "fieldParams": {
              "Title": {
                "include": true,
                "fileImageFormat": "square",
                "fileImageSize": 200
              },
              "Year": {
                "include": true,
                "fileImageFormat": "square",
                "fileImageSize": 200
              },
              "amazon": {
                "include": true,
                "fileImageFormat": "square",
                "fileImageSize": 200,
                "stringDisplay": "link",
                "weblink": "see the book on Amazon"
              },
              "id": {
                "include": false,
                "fileImageFormat": "square",
                "fileImageSize": 200
              },
              "upvotes": {
                "include": false,
                "fileImageFormat": "square",
                "fileImageSize": 200
              },
              "picture": {
                "include": true,
                "fileImageFormat": "square",
                "fileImageSize": 200,
                "fileImage": true
              },
              "upvotes_text": {
                "include": true,
                "fileImageFormat": "square",
                "fileImageSize": 200
              },
              "plot": {
                "include": true,
                "fileImageFormat": "square",
                "fileImageSize": 200,
                "stringDisplay": "default"
              }
            },
            "fieldOrder": [
              "Title",
              "picture",
              "upvotes",
              "Year",
              "plot",
              "amazon",
              "upvotes_text",
              "id",
              "action__39211606161389632"
            ]
          },
          "subHeader": "Book: "
        },
        "country": {
          "include": true,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false
        },
        "name": {
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
          "clickable": false,
          "fileImage": true
        },
        "id": {
          "include": false,
          "fileImageFormat": "square",
          "quickSearch": false,
          "fileImageSize": 200,
          "clickable": false
        }
      },
      "actions": [
        {
          "sysName": "upvotes",
          "id": "39211606161389632",
          "name": "Upvote on this book",
          "displayAs": "button",
          "buttonIcon": "plus",
          "buttonType": "accent",
          "closePopup": true,
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
          "callFrom": "linked",
          "callFromField": "book_ids",
          "formMapping": [
            {
              "id": "83421606161484258",
              "target": "book_id",
              "type": "linkedField",
              "value": "id"
            }
          ]
        },
        {
          "sysName": "addBook",
          "id": "27721606400940442",
          "name": "Add a book",
          "displayAs": "form",
          "buttonIcon": "plus",
          "formFields": [
            {
              "id": "77951606400953181",
              "field": {
                "fieldSysName": "Title",
                "fetch": [],
                "sysName": "Title",
                "name": "Title",
                "dataType": "string",
                "link": ""
              }
            },
            {
              "id": "22331606400965522",
              "field": {
                "fieldSysName": "Year",
                "fetch": [],
                "sysName": "Year",
                "name": "Year",
                "dataType": "number",
                "link": ""
              }
            },
            {
              "id": "41971606400967830",
              "field": {
                "fieldSysName": "amazon",
                "fetch": [],
                "sysName": "amazon",
                "name": "Link",
                "dataType": "string",
                "link": ""
              }
            },
            {
              "id": "64591606401674700",
              "field": {
                "fieldSysName": "plot",
                "fetch": [],
                "sysName": "plot",
                "name": "Plot",
                "dataType": "string",
                "link": ""
              }
            },
            {
              "id": "18431606401678716",
              "field": {
                "fieldSysName": "picture",
                "fetch": [],
                "sysName": "picture",
                "name": "Picture",
                "dataType": "file",
                "link": ""
              }
            },
            {
              "id": "36231606401883437",
              "field": {
                "fieldSysName": "email",
                "fetch": [],
                "sysName": "email",
                "name": "Your email (we'll notify you as soon as book is moderated)",
                "dataType": "email",
                "link": ""
              }
            }
          ],
          "SLtype": "other",
          "fields": {
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
                    "fieldSysName": "id",
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
                "fieldSysName": "email",
                "fetch": [],
                "sysName": "email",
                "name": "Your email (we'll notify you as soon as book is moderated)",
                "dataType": "email",
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
                "fieldSysName": "user_genetrated_content",
                "fetch": [],
                "sysName": "user_genetrated_content",
                "name": "",
                "dataType": "boolean",
                "link": ""
              }
            ],
            "writeFields": [
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
                "fetch": [],
                "sysName": "author_id",
                "name": "Author",
                "dataType": "link",
                "link": "Authors"
              },
              {
                "fieldSysName": "email",
                "fetch": [],
                "sysName": "email",
                "name": "Your email (we'll notify you as soon as book is moderated)",
                "dataType": "email",
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
                "fieldSysName": "user_genetrated_content",
                "fetch": [],
                "sysName": "user_genetrated_content",
                "name": "",
                "dataType": "boolean",
                "link": ""
              }
            ]
          },
          "formMapping": [
            {
              "id": "98571606400972564",
              "target": "author_id",
              "type": "objectField",
              "value": "id"
            },
            {
              "id": "78951606402112603",
              "target": "user_genetrated_content",
              "type": "const",
              "value": "true"
            }
          ],
          "closePopup": true,
          "buttonType": "accent"
        }
      ]
    },
    "tableTitle": "Writers",
    "actions": null,
    "headers": [
      {
        "sysName": "book_ids",
        "dataType": "arrayLink",
        "name": "Books",
        "id": "36111606146410363",
        "link": "Books",
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
        "arrayLink": true,
        "typeVariable": {},
        "linkOrArrayLinkType": true,
        "linkType": false,
        "json": false,
        "indexExists": false
      },
      {
        "sysName": "country",
        "dataType": "string",
        "name": "Country",
        "id": "85641606146387358",
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
        "arrayLink": false,
        "typeVariable": {},
        "linkOrArrayLinkType": false,
        "linkType": false,
        "json": false,
        "indexExists": false
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
        "arrayLink": false,
        "typeVariable": {},
        "linkOrArrayLinkType": false,
        "linkType": false,
        "json": false,
        "indexExists": false
      },
      {
        "sysName": "name",
        "dataType": "string",
        "name": "Name",
        "id": "26491606146386795",
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
        "arrayLink": false,
        "typeVariable": {},
        "linkOrArrayLinkType": false,
        "linkType": false,
        "json": false,
        "indexExists": false
      },
      {
        "sysName": "photo",
        "dataType": "file",
        "name": "Picture",
        "id": "34851606146387901",
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
        "arrayLink": false,
        "typeVariable": {},
        "linkOrArrayLinkType": false,
        "linkType": false,
        "json": false,
        "indexExists": false
      }
    ],
    "data": [
      {
        "name": "Arkady and Boris Strugatsky",
        "photo": "https://static.tvtropes.org/pmwiki/pub/images/StrugatskyBrothers_w280_3525.jpg",
        "country": "Russia",
        "id": "cfbc393c-1686-4ec9-83b4-cfaef708493d",
        "book_ids": [
          {
            "amazon": "https://www.amazon.com/Roadside-Picnic-Rediscovered-Classics-Strugatsky/dp/1613743416",
            "Title": "Roadside Picnic",
            "plot": "Amazing. . . . The Strugatskys' deft and supple handling of loyalty and greed, of friendship and love, of despair and frustration and loneliness [produces] a truly superb tale. . . . You won't forget it -Theodore Sturgeon Red Schuhart is a stalker, one of those young rebels who are compelled, in spite of the extreme danger, to venture illegally into the Zone to collect the mysterious artifacts that the alien visitors left scattered around. But when he and his friend Kirill go into the Zone together to pick up a \"full empty\" something goes terribly wrong. . . . First published in 1972 and immediately acclaimed as a science-fiction classic, Roadside Picnic is included on almost every list of the hundred greatest science-fiction novels, despite the fact that it has been out of print in the United States for almost thirty years. It was the basis for Andrei Tarkovsky's filmic masterpiece Stalker and the S.T.A.L.K.E.R. video games that have proven immensely popular. This brand new translation corrects many of the errors and omissions of the previous one. Finally, one of the greatest science fiction novels-and one of the most popular pieces of Russian fiction-is back in print in an authoritative version. Arkady and Boris Strugatsky are the most famous and popular Russian writers of science fiction. Their books have been widely translated and have been made into a number of films. Arkady died in 1991; Boris lives in St. Petersburg.",
            "Year": 1971,
            "id": "96a5d668-f5e1-4c4b-8c22-0a2f5d51b5cf",
            "picture": "https://images-na.ssl-images-amazon.com/images/I/51rkfANZYdL._SX322_BO1,204,203,200_.jpg"
          },
          {
            "amazon": "https://www.amazon.com/Hard-Be-God-Rediscovered-Classics/dp/1613748280",
            "Title": "Hard to Be a God",
            "plot": "Arkady and Boris Strugatsky are widely known as the greatest Russian writers of science fiction, and their 1964 novel Hard to Be a God is considered one of the greatest of their works.\n\nIt tells the story of Don Rumata, who is sent from Earth to the medieval kingdom of Arkanar with instructions to observe and to influence, but never to directly interfere. Masquerading as an arrogant nobleman, a dueler and a brawler, Don Rumata is never defeated but can never kill. With his doubt and compassion, and his deep love for a local girl named Kira, Rumata wants to save the kingdom from the machinations of Don Reba, the First Minister to the king. But given his orders, what role can he play?\n\nHard to Be a God has inspired a computer role-playing game and two movies, including Aleksei German’s long-awaited swan song. Yet until now the only English version (out of print for over thirty years) was based on a German translation, and was full of errors, infelicities, and misunderstandings. This new edition—translated by Olena Bormashenko, whose translation of the authors’ Roadside Picnic has received widespread acclaim, and supplemented with a new foreword by Hari Kunzru and an afterword by Boris Strugatsky, both of which supply much-needed context—reintroduces one of the most profound Soviet-era novels to an eager audience.",
            "Year": 1964,
            "upvotes_text": "5 upvotes",
            "upvotes": 5,
            "id": "1b0cdeb8-4d01-49dd-a890-a46a68517ecd",
            "picture": "https://images-na.ssl-images-amazon.com/images/I/51A-F-XRBdL._SX322_BO1,204,203,200_.jpg"
          },
          {
            "amazon": "https://www.amazon.com/gp/product/B01F9KHTVI",
            "Title": "The Doomed City",
            "plot": "It is a mysterious city whose sun is switched on in the morning and switched off at night, bordered by an abyss on one side and an impossibly high wall on the other. Its inhabitants are people who were plucked from twentieth-century history at various times and places and left to govern themselves, advised by Mentors whose purpose seems inscrutable. This is life in the Experiment.\nAndrei Voronin, a young astronomer plucked from Leningrad in the 1950s, is a die-hard believer in the Experiment, even though his first job in the city is as a garbage collector. As increasingly nightmarish scenarios begin to affect the city, he rises through the political hierarchy, with devastating effect.",
            "Year": 1972,
            "id": "854fca82-982a-4ebb-b3ab-a84ec7aec81e",
            "picture": "https://m.media-amazon.com/images/I/51EuevgrgpL.jpg"
          }
        ]
      },
      {
        "name": "James Fenimore Cooper",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/James_Fenimore_Cooper_by_Brady.jpg/330px-James_Fenimore_Cooper_by_Brady.jpg",
        "country": "United States",
        "id": "a76a77a5-bc29-4df2-8910-e90104527b51",
        "book_ids": [
          {
            "amazon": "https://www.amazon.com/Last-Mohicans-Paper-Mill-Classics/dp/1926444175",
            "Title": "The Last of the Mohicans",
            "plot": "A riveting novel of love and warfare, this action-packed adventure is sure to capture readers of all ages. Follow a passionate, forbidden romance between Uncas, a young Mohican, and Cora, the daughter of a British Colonel. A time-honored favorite in historical fiction that serves as a cultural conversation about interracial love and friendship.",
            "Year": 1826,
            "upvotes_text": "2 upvotes",
            "upvotes": 2,
            "id": "04de4c72-148f-420c-bd85-8329231b4522",
            "picture": "https://images-na.ssl-images-amazon.com/images/I/51n6FpKAEvL._SX323_BO1,204,203,200_.jpg"
          }
        ]
      },
      {
        "name": "Fyodor Dostoevsky",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Vasily_Perov_-_%D0%9F%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82_%D0%A4.%D0%9C.%D0%94%D0%BE%D1%81%D1%82%D0%BE%D0%B5%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_-_Google_Art_Project.jpg/330px-Vasily_Perov_-_%D0%9F%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82_%D0%A4.%D0%9C.%D0%94%D0%BE%D1%81%D1%82%D0%BE%D0%B5%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_-_Google_Art_Project.jpg",
        "country": "Russia",
        "id": "3f85a28d-c200-4f55-a178-1c4c68862103",
        "book_ids": [
          {
            "amazon": "https://www.amazon.com/Crime-Punishment-Fyodor-Dostoyevsky-ebook/dp/B08NPRS1LP",
            "Title": "Crime and Punishment",
            "plot": "Through the story of the brilliant but conflicted young Raskolnikov and the murder he commits, Fyodor Dostoyevsky explores the theme of redemption through suffering. “Crime and Punishment” put Dostoyevsky at the forefront of Russian writers when it appeared in 1866 and is now one of the most famous and influential novels in world literature.\nThe poverty-stricken Raskolnikov, a talented student, devises a theory about extraordinary men being above the law, since in their brilliance they think “new thoughts” and so contribute to society. He then sets out to prove his theory by murdering a vile, cynical old pawnbroker and her sister. The act brings Raskolnikov into contact with his own buried conscience and with two characters — the deeply religious Sonia, who has endured great suffering, and Porfiry, the intelligent and discerning official who is charged with investigating the murder — both of whom compel Raskolnikov to feel the split in his nature. Dostoyevsky provides readers with a suspenseful, penetrating psychological analysis that goes beyond the crime — which in the course of the novel demands drastic punishment — to reveal something about the human condition: The more we intellectualize, the more imprisoned we become.",
            "Year": 1866,
            "upvotes_text": "1 upvotes",
            "upvotes": 1,
            "id": "337e8b72-c7c0-4b45-a7fe-83c8b1c2934e",
            "picture": "https://m.media-amazon.com/images/I/512Pfy9Yk5L.jpg"
          },
          {
            "amazon": "https://www.amazon.com/Brothers-Karamazov-Fyodor-Dostoevsky/dp/0374528373",
            "Title": "The Brothers Karamazov",
            "plot": "The Brothers Karamasov is a murder mystery, a courtroom drama, and an exploration of erotic rivalry in a series of triangular love affairs involving the “wicked and sentimental” Fyodor Pavlovich Karamazov and his three sons―the impulsive and sensual Dmitri; the coldly rational Ivan; and the healthy, red-cheeked young novice Alyosha. Through the gripping events of their story, Dostoevsky portrays the whole of Russian life, is social and spiritual striving, in what was both the golden age and a tragic turning point in Russian culture.\n\nThis award-winning translation by Richard Pevear and Larissa Volokhonsky remains true to the verbal\ninventiveness of Dostoevsky’s prose, preserving the multiple voices, the humor, and the surprising modernity of the original. It is an achievement worthy of Dostoevsky’s last and greatest novel.",
            "Year": 1880,
            "id": "2c4af65f-8ca2-410d-980f-adacc3dce6eb",
            "picture": "https://images-na.ssl-images-amazon.com/images/I/51FIyYKsCXL._SX333_BO1,204,203,200_.jpg"
          },
          {
            "amazon": "https://www.amazon.com/Demons-Novel-Three-Vintage-Classics/dp/0679734511/",
            "Title": "Demons",
            "plot": "Inspired by the true story of a political murder that horried Russians in 1869, Fyodor Dostoevsky conceived of Demons as a \"novel-pamphlet\" in which he would say everything about the plague of materialist ideology that he saw infecting his native land. What emerged was a prophetic and ferociously funny masterpiece of ideology and murder in pre-revolutionary Russia.",
            "Year": 1872,
            "id": "3d788a24-a363-43e1-9092-da1399fa25f7",
            "picture": "https://images-na.ssl-images-amazon.com/images/I/41hd99EnsRL._SX322_BO1,204,203,200_.jpg"
          }
        ]
      },
      {
        "name": "Ernest Hemingway",
        "photo": "https://images.gr-assets.com/authors/1574217836p8/1455.jpg",
        "country": "United States",
        "id": "817d952b-55d6-4a3e-9fd0-aa4a82dabccf",
        "book_ids": [
          {
            "amazon": "https://www.amazon.com/Sun-Also-Rises-Hemingway-Library/dp/1501121960",
            "Title": "The Sun Also Rises",
            "plot": "The Sun Also Rises is a classic example of Hemingway’s spare but powerful writing style. A poignant look at the disillusionment and angst of the post-World War I generation, the novel introduces two of Hemingway’s most unforgettable characters: Jake Barnes and Lady Brett Ashley. The story follows the flamboyant Brett and the hapless Jake as they journey from the wild nightlife of 1920s Paris to the brutal bullfighting rings of Spain with a motley group of expatriates. It is an age of moral bankruptcy, spiritual dissolution, unrealized love, and vanishing illusions. First published in 1926, The Sun Also Rises is “an absorbing, beautifully and tenderly absurd, heartbreaking narrative…a truly gripping story, told in lean, hard, athletic prose” (The New York Times).",
            "Year": 1926,
            "id": "a81a7350-1331-4c10-ab62-36acc03bf1f4",
            "picture": "https://images-na.ssl-images-amazon.com/images/I/51cj37KTLRL._SX322_BO1,204,203,200_.jpg"
          },
          {
            "amazon": "https://www.amazon.com/Old-Man-Sea-Ernest-Hemingway/dp/0684801221",
            "Title": "The Old Man and The Sea",
            "plot": "The Old Man and the Sea is one of Hemingway's most enduring works. Told in language of great simplicity and power, it is the story of an old Cuban fisherman, down on his luck, and his supreme ordeal -- a relentless, agonizing battle with a giant marlin far out in the Gulf Stream.\n\nHere Hemingway recasts, in strikingly contemporary style, the classic theme of courage in the face of defeat, of personal triumph won from loss. Written in 1952, this hugely successful novella confirmed his power and presence in the literary world and played a large part in his winning the 1954 Nobel Prize for Literature.",
            "Year": 1951,
            "upvotes_text": "5 upvotes",
            "upvotes": 5,
            "id": "0af63fa9-7903-4c14-a9ec-d66a0aca6c1f",
            "picture": "https://images-na.ssl-images-amazon.com/images/I/412WMYR6s6L._SX326_BO1,204,203,200_.jpg"
          },
          {
            "amazon": "https://www.amazon.com/Farewell-Arms-Hemingway-Library/dp/1476764522",
            "Title": "A Farewell to Arms",
            "plot": "Written when Ernest Hemingway was thirty years old and lauded as the best American novel to emerge from World War I, A Farewell to Arms is the unforgettable story of an American ambulance driver on the Italian front and his passion for a beautiful English nurse. Set against the looming horrors of the battlefield—weary, demoralized men marching in the rain during the German attack on Caporetto; the profound struggle between loyalty and desertion—this gripping, semiautobiographical work captures the harsh realities of war and the pain of lovers caught in its inexorable sweep.\n\nErnest Hemingway famously said that he rewrote the ending to A Farewell to Arms thirty-nine times to get the words right. This edition collects all of the alternative endings together for the first time, along with early drafts of other essential passages, offering new insight into Hemingway’s craft and creative process and the evolution of one of the greatest novels of the twentieth century. Featuring Hemingway’s own 1948 introduction to an illustrated reissue of the novel, a personal foreword by the author’s son Patrick Hemingway, and a new introduction by the author’s grandson Seán Hemingway, this edition of A Farewell to Arms is truly a celebration.",
            "Year": 1929,
            "id": "35122347-b6ab-4fa1-a4c2-b887247280ac",
            "picture": "https://images-na.ssl-images-amazon.com/images/I/51+k43bzSXL._SX322_BO1,204,203,200_.jpg"
          }
        ]
      },
      {
        "name": "Jerome K. Jerome",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Jerome_K._Jerome_%287893553318%29.jpg/330px-Jerome_K._Jerome_%287893553318%29.jpg",
        "country": "United Kingdom",
        "id": "cfc5eac0-5276-4ef9-9466-164c71b690d5",
        "book_ids": [
          {
            "amazon": "https://www.amazon.com/Three-Men-Boat-Say-Nothing-ebook/dp/B00NI4Y2TK",
            "Title": "Three Men in a Boat (To Say Nothing of the Dog)",
            "plot": "The three men are based on Jerome himself (the narrator J.) and two real-life friends, George Wingrave (who would become a senior manager at Barclays Bank) and Carl Hentschel (the founder of a London printing business, called Harris in the book), with whom he often took boating trips. The dog, Montmorency, is entirely fictionalbut, \"as Jerome admits, developed out of that area of inner consciousness which, in all Englishmen, contains an element of the dog.\" The trip is a typical boating holiday of the time in a Thames camping skiff. This was just after commercial boat traffic on the Upper Thames had died out, replaced by the 1880s craze for boating as a leisure activity.",
            "Year": 1889,
            "id": "fee46a3e-6548-454d-a9cc-4e2bbfd932bd",
            "picture": "https://m.media-amazon.com/images/I/51oS3sGH2jL.jpg"
          }
        ]
      },
      {
        "name": "Leo Tolstoy",
        "photo": "data:image/jpeg;base64,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",
        "country": "Russia",
        "id": "ffc054fe-a4ad-476b-9e27-3a5c98b2b10b",
        "book_ids": [
          {
            "amazon": "https://www.amazon.com/Anna-Karenina-Wordsworth-Classics-Tolstoy/dp/1853262714/",
            "Title": "Anna Karenina",
            "plot": "Anna Karenina is one of the most loved and memorable heroines of literature. Her overwhelming charm dominates a novel of unparalleled richness and density. Tolstoy considered this book to be his first real attempt at a novel form, and it addresses the very nature of society at all levels,- of destiny, death, human relationships and the irreconcilable contradictions of existence. It ends tragically, and there is much that evokes despair, yet set beside this is an abounding joy in life's many ephemeral pleasures, and a profusion of comic relief.",
            "Year": 1887,
            "upvotes_text": "4 upvotes",
            "upvotes": 4,
            "id": "2d567166-484c-4064-9ffe-7172b51c32a5",
            "picture": "data:image/webp;base64,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"
          },
          {
            "amazon": "https://www.amazon.com/Cossacks-Leo-Tolstoy/dp/1675672644/",
            "Title": "The Cossacks",
            "plot": "A new, beautifully laid-out, easy-to-read edition of Tolstoy's 1863 classic novel. Thought by many to be a partially autobiographical tale, this is the story of a young idealistic nobleman who seeks to find meaning by joining the army and immersing himself in the culture of the \"simple\" villagers of the Caucasus and becoming a \"Cossack.\" This edition is based on Louise & Aylmer Maude's 1916 translation. ",
            "Year": 1863,
            "upvotes_text": "4 upvotes",
            "upvotes": 4,
            "id": "8dc7bce3-7ae2-46fd-95d8-ab46eee7e2e9",
            "picture": "https://images-na.ssl-images-amazon.com/images/I/51xLuAW27OL._SX311_BO1,204,203,200_.jpg"
          },
          {
            "amazon": "https://www.amazon.com/War-Peace-Vintage-Classics-Tolstoy/dp/1400079985",
            "Title": "War and Peace",
            "plot": "War and Peace broadly focuses on Napoleon’s invasion of Russia in 1812 and follows three of the most well-known characters in literature: Pierre Bezukhov, the illegitimate son of a count who is fighting for his inheritance and yearning for spiritual fulfillment; Prince Andrei Bolkonsky, who leaves his family behind to fight in the war against Napoleon; and Natasha Rostov, the beautiful young daughter of a nobleman who intrigues both men.\n\nA s Napoleon’s army invades, Tolstoy brilliantly follows characters from diverse backgrounds—peasants and nobility, civilians and soldiers—as they struggle with the problems unique to their era, their history, and their culture. And as the novel progresses, these characters transcend their specificity, becoming some of the most moving—and human—figures in world literature.",
            "Year": 1867,
            "upvotes_text": "6 upvotes",
            "upvotes": 6,
            "id": "44ac3660-069d-4f8d-99fb-a93e841d3ca9",
            "picture": "https://images-na.ssl-images-amazon.com/images/I/51J1nb00FLL._SX330_BO1,204,203,200_.jpg"
          }
        ]
      },
      {
        "name": "Immanuel Kant",
        "photo": "https://mediaethicsafternoon.files.wordpress.com/2015/02/kant.png",
        "country": "Germany",
        "id": "0f3b60dd-dcc2-42a2-a666-3b81ea816ab1",
        "book_ids": [
          {
            "amazon": "https://www.amazon.com/Critique-Pure-Reason-Penguin-Classics/dp/0140447474",
            "Title": "Critique of Pure Reason",
            "plot": "A seminal text of modern philosophy, Immanuel Kant's Critique of Pure Reason (1781) made history by bringing together two opposing schools of thought: rationalism, which grounds all our knowledge in reason, and empiricism, which traces all our knowledge to experience. Published here in a lucid reworking of Max Müller's classic translation, the Critique is a profound investigation into the nature of human reason, establishing its truth, falsities, illusions, and reality.\n\nFor more than seventy years, Penguin has been the leading publisher of classic literature in the English-speaking world. With more than 1,700 titles, Penguin Classics represents a global bookshelf of the best works throughout history and across genres and disciplines. Readers trust the series to provide authoritative texts enhanced by introductions and notes by distinguished scholars and contemporary authors, as well as up-to-date translations by award-winning translators.",
            "Year": 1781,
            "id": "5cf0fc31-6fcd-4f71-9f56-ced6e7975c94",
            "picture": "https://images-na.ssl-images-amazon.com/images/I/41TPNFIgwGL._SX324_BO1,204,203,200_.jpg"
          }
        ]
      },
      {
        "name": "William Shakespeare",
        "photo": "data:image/jpeg;base64,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",
        "country": "United Kingdom",
        "id": "968d1b10-b90e-4483-9fa2-cd531e2f3276",
        "book_ids": [
          {
            "amazon": "https://www.amazon.com/Romeo-Juliet-Folger-Shakespeare-Library/dp/0743477111",
            "Title": "Romeo and Juliet",
            "plot": "In Romeo and Juliet, Shakespeare creates a violent world, in which two young people fall in love. It is not simply that their families disapprove; the Montagues and the Capulets are engaged in a blood feud.\n\nIn this death-filled setting, the movement from love at first sight to the lovers’ final union in death seems almost inevitable. And yet, this play set in an extraordinary world has become the quintessential story of young love. In part because of its exquisite language, it is easy to respond as if it were about all young lovers.",
            "Year": 1597,
            "id": "f0a68d65-53e3-484e-bd05-ff8cc3b9a1e5",
            "picture": "https://images-na.ssl-images-amazon.com/images/I/51n97vsmHlL._SX307_BO1,204,203,200_.jpg"
          },
          {
            "amazon": "https://www.amazon.com/Hamlet-Thrift-Editions-William-Shakespeare-ebook/dp/B008TVM1JU",
            "Title": "Hamlet",
            "plot": "One of the greatest plays of all time, the compelling tragedy of the tormented young prince of Denmark continues to capture the imaginations of modern audiences worldwide. Confronted with evidence that his uncle murdered his father, and with his mother’s infidelity, Hamlet must find a means of reconciling his longing for oblivion with his duty as avenger. The ghost, Hamlet’s feigned madness, Ophelia’s death and burial, the play within a play, the “closet scene” in which Hamlet accuses his mother of complicity in murder, and breathtaking swordplay are just some of the elements that make Hamlet an enduring masterpiece of the theater.",
            "Year": 1601,
            "upvotes_text": "2 upvotes",
            "upvotes": 2,
            "id": "b5e12612-9b7c-4189-80ef-2ce2f51ce9f5",
            "picture": "https://m.media-amazon.com/images/I/51JLCP9FrUL.jpg"
          },
          {
            "amazon": "https://www.amazon.com/Macbeth-Folger-Shakespeare-Library-William/dp/0743477103",
            "Title": "Macbeth",
            "plot": "n 1603, James VI of Scotland ascended the English throne, becoming James I of England. London was alive with an interest in all things Scottish, and Shakespeare turned to Scottish history for material. He found a spectacle of violence and stories of traitors advised by witches and wizards, echoing James’s belief in a connection between treason and witchcraft.\n\nIn depicting a man who murders to become king, Macbeth teases us with huge questions. Is Macbeth tempted by fate, or by his or his wife’s ambition? Why does their success turn to ashes?\n\nLike other plays, Macbeth speaks to each generation. Its story was once seen as that of a hero who commits an evil act and pays an enormous price. Recently, it has been applied to nations that overreach themselves and to modern alienation. The line is blurred between Macbeth’s evil and his opponents’ good, and there are new attitudes toward both witchcraft and gender.",
            "Year": 1606,
            "upvotes_text": "1 upvotes",
            "upvotes": 1,
            "id": "d5da38df-a534-47dc-a95a-a5f95b0b7629",
            "picture": "https://images-na.ssl-images-amazon.com/images/I/51NmobtO9QL._SX307_BO1,204,203,200_.jpg"
          }
        ]
      },
      {
        "name": "John Fowles",
        "photo": "data:image/jpeg;base64,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",
        "country": "United Kingdom",
        "id": "1caa9f37-a08c-4473-8789-7d766542e2b9",
        "book_ids": [
          {
            "amazon": "https://www.amazon.com/French-Lieutenants-Woman-John-Fowles/dp/0316291161",
            "Title": "The French Lieutenant's Woman",
            "plot": "Perhaps the most beloved of John Fowles's internationally bestselling works, The French Lieutenant's Woman is a feat of seductive storytelling that effectively invents anew the Victorian novel. \"Filled with enchanting mysteries and magically erotic possibilities\" (New York Times), the novel inspired the hugely successful 1981 film starring Meryl Streep and Jeremy Irons and is today universally regarded as a modern classic.",
            "Year": 1969,
            "id": "ab885da3-375d-4e4e-a6e5-41c44b811799",
            "picture": "https://images-na.ssl-images-amazon.com/images/I/41PPKMf3OLL._SX328_BO1,204,203,200_.jpg"
          },
          {
            "amazon": "https://www.amazon.com/Magus-John-Fowles/dp/0316296198",
            "Title": "The Magus",
            "plot": "A young Englishman, Nicholas Urfe, accepts a teaching post on a remote Greek island in order to escape an unsatisfactory love affair. There, his friendship with a reclusive millionaire evolves into a mysterious--and deadly--game of violence, seduction, and betrayal. As he is drawn deeper into the trickster's psychological traps, Nicholas finds it increasingly difficult to distinguish past from present, fantasy from reality. He becomes a desperate man fighting for his sanity and his very survival.\nJohn Fowles expertly unfolds a spellbinding exploration of the complexities of the human mind. By turns disturbing, thrilling and seductive, The Magus is a masterwork of contemporary literature.",
            "Year": 1965,
            "upvotes_text": "4 upvotes",
            "upvotes": 4,
            "id": "ff503fae-3bc6-4d56-805f-15e610359d8e",
            "picture": "https://images-na.ssl-images-amazon.com/images/I/51zaEZWj-DL._SX331_BO1,204,203,200_.jpg"
          }
        ]
      }
    ],
    "totalPages": 1,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [
      [
        "book_ids.Title",
        1325688
      ],
      [
        "book_ids.Year",
        1325688
      ],
      [
        "book_ids.amazon",
        1325688
      ],
      [
        "book_ids.id",
        1325688
      ],
      [
        "book_ids.picture",
        1325688
      ],
      [
        "book_ids.plot",
        1325688
      ],
      [
        "book_ids.upvotes",
        1325688
      ],
      [
        "book_ids.upvotes_text",
        1325688
      ],
      [
        "country",
        1325687
      ],
      [
        "id",
        1325687
      ],
      [
        "name",
        1325687
      ],
      [
        "photo",
        1325687
      ]
    ],
    "writeFields": [],
    "structures": {
      "1325687": {
        "networkID": 4061,
        "id": 1325687,
        "dateCreated": "2020-11-23T15:46:23Z",
        "hidden": false,
        "dateHidden": null,
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
          "arrayLink": false,
          "typeVariable": {},
          "linkOrArrayLinkType": false,
          "linkType": false,
          "json": false,
          "indexExists": false
        },
        "folderId": null
      },
      "1325688": {
        "networkID": 4061,
        "id": 1325688,
        "dateCreated": "2020-11-23T15:47:45Z",
        "hidden": false,
        "dateHidden": null,
        "name": "Books",
        "sysName": "Books",
        "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"user_genetrated_content\",\"name\":\"\",\"dataType\":\"boolean\",\"id\":\"12711606401929347\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"Year\",\"name\":\"Year\",\"dataType\":\"number\",\"id\":\"31891606146490274\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"amazon\",\"name\":\"Link\",\"dataType\":\"string\",\"id\":\"38631606146498227\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"upvotes\",\"name\":\"Number of upvotes\",\"dataType\":\"number\",\"id\":\"45431606146512728\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"picture\",\"name\":\"Picture\",\"dataType\":\"file\",\"id\":\"61021606149985644\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"Title\",\"name\":\"Title\",\"dataType\":\"string\",\"id\":\"61721606146483591\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"_hidden_author\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"70741606390710852\",\"link\":null,\"group\":\"1606390717489\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"email\",\"name\":\"Your email (we'll notify you as soon as book is moderated)\",\"dataType\":\"email\",\"id\":\"87391606401804684\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"author_id\",\"name\":\"Author\",\"dataType\":\"link\",\"id\":\"92061606146469134\",\"link\":\"Authors\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"upvotes_text\",\"name\":\"Upvotes\",\"dataType\":\"string\",\"id\":\"95311606152487151\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"plot\",\"name\":\"Plot\",\"dataType\":\"string\",\"id\":\"97401606161579412\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false}]",
        "jsonGroupSettings": "[{\"id\":1606390717489,\"name\":\"Hidden fields for search\",\"order\":0}]",
        "jsonViewIdSettings": "[{\"sysName\":\"Title\"},{\"sysName\":\"Year\"}]",
        "jsonSettings": null,
        "jsonNativeIndexSettings": null,
        "indexEnabled": true,
        "lastIndexUpdate": 0,
        "indexName": "",
        "dateChanged": "2020-11-26T14:51:09Z",
        "createBy": 21,
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
          "arrayLink": false,
          "typeVariable": {},
          "linkOrArrayLinkType": false,
          "linkType": false,
          "json": false,
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