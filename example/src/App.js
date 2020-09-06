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
        { name: "Cards", route: "/cards", icon: "cards", link: <Link to="/cards">Cards view</Link> },
        { name: "Table (soon)", route: "/table", icon: "database" ,disabled: true },
        // { name: "List view (soon)", route: "/list", icon: "list", disabled: true },
        { name: "Chat (soon)", route: "/chat", icon: "bubble", disabled: true },
        { name: "Comments (soon)", route: "/comments", icon: "version", disabled: true },
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
    "tableTitle": "List with background images",
    "pageSize": "10",
    "tableFilters": true,
    "tableQuickSearch": true,
    "params": {
      "cardListLayout": "grid", // grid, list
      "isDisplayID": false,
      "deleteField": "",
      "cardHeaderComment": "year",
      "cardBodyText": "genre",
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
        "year": 1760,
        //"genre": "Biography",
        "title": "Life of Samuel Johnson",
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
        },
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
        "jsonViewIdSettings": "[{\"sysName\":\"title\"},{\"sysName\":\"year\"}]",
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
      "cardHeaderComment": "year",
      "cardBodyText": "genre",
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

  let exampleTableHH = {
    "sl": "all",
    "pageSize": "12",
    "headerField": null,
    "params": {
      "cardListLayout": "grid",
      "cardHeaderComment": "title",
      "deleteField": "",
      "cardBodyText": "status",
      "cardImage": false,
      "cardImageField": "",
      "cardImageType": "none",
      "cardImageSize": 100,
      "objectView": {},
      "isDisplayID": true
    },
    "tableTitle": "All challenges",
    "headers": [
      {
        "sysName": "access_link",
        "name": "access_link",
        "dataType": "string",
        "id": "85181597665678832",
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
        "typeVariable": {},
        "indexExists": false,
        "linkOrArrayLinkType": false,
        "json": false,
        "arrayLink": false,
        "linkType": false
      },
      {
        "sysName": "admin",
        "name": "admin",
        "dataType": "arrayLink",
        "id": "31701597665796617",
        "link": "WebUser",
        "group": "0",
        "tags": null,
        "indexing": false,
        "ordering": false,
        "description": null,
        "weight": null,
        "order": 16,
        "linkIndexFieldSysName": [],
        "defaultValue": null,
        "constraints": null,
        "synthetic": false,
        "format": null,
        "formatOptions": null,
        "typeVariable": {},
        "indexExists": false,
        "linkOrArrayLinkType": true,
        "json": false,
        "arrayLink": true,
        "linkType": false
      },
      {
        "sysName": "ask_aboutme",
        "name": "ask_aboutme",
        "dataType": "boolean",
        "id": "51371597665566666",
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
        "typeVariable": {},
        "indexExists": false,
        "linkOrArrayLinkType": false,
        "json": false,
        "arrayLink": false,
        "linkType": false
      },
      {
        "sysName": "ask_goal",
        "name": "ask_goal",
        "dataType": "boolean",
        "id": "41641597665554330",
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
        "typeVariable": {},
        "indexExists": false,
        "linkOrArrayLinkType": false,
        "json": false,
        "arrayLink": false,
        "linkType": false
      },
      {
        "sysName": "content_delivery_time",
        "name": "content_delivery_time",
        "dataType": "string",
        "id": "39111597665903139",
        "link": null,
        "group": "0",
        "tags": null,
        "indexing": false,
        "ordering": false,
        "description": null,
        "weight": null,
        "order": 19,
        "linkIndexFieldSysName": [],
        "defaultValue": null,
        "constraints": null,
        "synthetic": false,
        "format": null,
        "formatOptions": null,
        "typeVariable": {},
        "indexExists": false,
        "linkOrArrayLinkType": false,
        "json": false,
        "arrayLink": false,
        "linkType": false
      },
      {
        "sysName": "current_group_traction",
        "name": "Current Group Traction",
        "dataType": "link",
        "id": "23851598555582730",
        "link": "group_traction",
        "group": "1599128823741",
        "tags": null,
        "indexing": true,
        "ordering": false,
        "description": null,
        "weight": null,
        "order": 0,
        "linkIndexFieldSysName": [
          "deadline_dt"
        ],
        "defaultValue": null,
        "constraints": null,
        "synthetic": false,
        "format": null,
        "formatOptions": null,
        "typeVariable": {},
        "indexExists": true,
        "linkOrArrayLinkType": true,
        "json": false,
        "arrayLink": false,
        "linkType": true
      },
      {
        "sysName": "deadline_dt",
        "name": "deadline_dt",
        "dataType": "date",
        "id": "69041598859283740",
        "link": "",
        "group": "0",
        "tags": null,
        "indexing": false,
        "ordering": false,
        "description": null,
        "weight": null,
        "order": 25,
        "linkIndexFieldSysName": [],
        "defaultValue": null,
        "constraints": null,
        "synthetic": false,
        "format": null,
        "formatOptions": null,
        "typeVariable": {},
        "indexExists": false,
        "linkOrArrayLinkType": false,
        "json": false,
        "arrayLink": false,
        "linkType": false
      },
      {
        "sysName": "deadline_time",
        "name": "deadline_time",
        "dataType": "string",
        "id": "55911597665932942",
        "link": null,
        "group": "0",
        "tags": null,
        "indexing": false,
        "ordering": false,
        "description": null,
        "weight": null,
        "order": 23,
        "linkIndexFieldSysName": [],
        "defaultValue": null,
        "constraints": null,
        "synthetic": false,
        "format": null,
        "formatOptions": null,
        "typeVariable": {},
        "indexExists": false,
        "linkOrArrayLinkType": false,
        "json": false,
        "arrayLink": false,
        "linkType": false
      },
      {
        "sysName": "default_schedule",
        "name": "default_schedule",
        "dataType": "link",
        "id": "98631597665764359",
        "link": "schedule_lib",
        "group": "0",
        "tags": null,
        "indexing": false,
        "ordering": false,
        "description": null,
        "weight": null,
        "order": 15,
        "linkIndexFieldSysName": [],
        "defaultValue": null,
        "constraints": null,
        "synthetic": false,
        "format": null,
        "formatOptions": null,
        "typeVariable": {},
        "indexExists": false,
        "linkOrArrayLinkType": true,
        "json": false,
        "arrayLink": false,
        "linkType": true
      },
      {
        "sysName": "fine_reminder_time",
        "name": "fine_reminder_time",
        "dataType": "string",
        "id": "94291597665924468",
        "link": null,
        "group": "0",
        "tags": null,
        "indexing": false,
        "ordering": false,
        "description": null,
        "weight": null,
        "order": 22,
        "linkIndexFieldSysName": [],
        "defaultValue": null,
        "constraints": null,
        "synthetic": false,
        "format": null,
        "formatOptions": null,
        "typeVariable": {},
        "indexExists": false,
        "linkOrArrayLinkType": false,
        "json": false,
        "arrayLink": false,
        "linkType": false
      },
      {
        "sysName": "fines",
        "name": "fines",
        "dataType": "arrayLink",
        "id": "45741597665817682",
        "link": "fine",
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
        "format": null,
        "formatOptions": null,
        "typeVariable": {},
        "indexExists": false,
        "linkOrArrayLinkType": true,
        "json": false,
        "arrayLink": true,
        "linkType": false
      },
      {
        "sysName": "generate_digest",
        "name": "generate_digest",
        "dataType": "boolean",
        "id": "22571597665540150",
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
        "typeVariable": {},
        "indexExists": false,
        "linkOrArrayLinkType": false,
        "json": false,
        "arrayLink": false,
        "linkType": false
      },
      {
        "sysName": "hashtag",
        "name": "hashtag",
        "dataType": "string",
        "id": "98581597665739903",
        "link": null,
        "group": "0",
        "tags": null,
        "indexing": false,
        "ordering": false,
        "description": null,
        "weight": null,
        "order": 13,
        "linkIndexFieldSysName": [],
        "defaultValue": null,
        "constraints": null,
        "synthetic": false,
        "format": null,
        "formatOptions": null,
        "typeVariable": {},
        "indexExists": false,
        "linkOrArrayLinkType": false,
        "json": false,
        "arrayLink": false,
        "linkType": false
      },
      {
        "sysName": "hashtags",
        "name": "available hashtags",
        "dataType": "arrayLink",
        "id": "53921598437653004",
        "link": "hashtag_lib",
        "group": "0",
        "tags": null,
        "indexing": false,
        "ordering": false,
        "description": null,
        "weight": null,
        "order": 24,
        "linkIndexFieldSysName": [],
        "defaultValue": null,
        "constraints": null,
        "synthetic": false,
        "format": null,
        "formatOptions": null,
        "typeVariable": {},
        "indexExists": false,
        "linkOrArrayLinkType": true,
        "json": false,
        "arrayLink": true,
        "linkType": false
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
        "indexExists": false,
        "linkOrArrayLinkType": false,
        "json": false,
        "arrayLink": false,
        "linkType": false
      },
      {
        "sysName": "is_moved",
        "name": "is_moved",
        "dataType": "boolean",
        "id": "23631598981067819",
        "link": "",
        "group": "0",
        "tags": null,
        "indexing": false,
        "ordering": false,
        "description": null,
        "weight": null,
        "order": 26,
        "linkIndexFieldSysName": [],
        "defaultValue": null,
        "constraints": null,
        "synthetic": false,
        "format": null,
        "formatOptions": null,
        "typeVariable": {},
        "indexExists": false,
        "linkOrArrayLinkType": false,
        "json": false,
        "arrayLink": false,
        "linkType": false
      },
      {
        "sysName": "locale",
        "name": "locale",
        "dataType": "link",
        "id": "87811597665848476",
        "link": "locale",
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
        "typeVariable": {},
        "indexExists": false,
        "linkOrArrayLinkType": true,
        "json": false,
        "arrayLink": false,
        "linkType": true
      },
      {
        "sysName": "morning_plan_time",
        "name": "morning_plan_time",
        "dataType": "string",
        "id": "12991597665911124",
        "link": null,
        "group": "0",
        "tags": null,
        "indexing": false,
        "ordering": false,
        "description": null,
        "weight": null,
        "order": 20,
        "linkIndexFieldSysName": [],
        "defaultValue": null,
        "constraints": null,
        "synthetic": false,
        "format": null,
        "formatOptions": null,
        "typeVariable": {},
        "indexExists": false,
        "linkOrArrayLinkType": false,
        "json": false,
        "arrayLink": false,
        "linkType": false
      },
      {
        "sysName": "reminder_time",
        "name": "reminder_time",
        "dataType": "string",
        "id": "72321597665918455",
        "link": null,
        "group": "0",
        "tags": null,
        "indexing": false,
        "ordering": false,
        "description": null,
        "weight": null,
        "order": 21,
        "linkIndexFieldSysName": [],
        "defaultValue": null,
        "constraints": null,
        "synthetic": false,
        "format": null,
        "formatOptions": null,
        "typeVariable": {},
        "indexExists": false,
        "linkOrArrayLinkType": false,
        "json": false,
        "arrayLink": false,
        "linkType": false
      },
      {
        "sysName": "status",
        "name": "status",
        "dataType": "string",
        "id": "32031597665499939",
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
        "typeVariable": {},
        "indexExists": false,
        "linkOrArrayLinkType": false,
        "json": false,
        "arrayLink": false,
        "linkType": false
      },
      {
        "sysName": "title",
        "name": "title",
        "dataType": "string",
        "id": "16501597665629727",
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
        "typeVariable": {},
        "indexExists": false,
        "linkOrArrayLinkType": false,
        "json": false,
        "arrayLink": false,
        "linkType": false
      }
    ],
    "data": [
      {
        "admin": [
          "682445"
        ],
        "generate_digest": true,
        "ask_goal": false,
        "content_delivery_time": "08:00",
        "access_link": "https://t.me/joinchat/MVi_8FXU8ul1RuvRYS4Hng",
        "reminder_time": "19:00",
        "locale": "perekrestok",
        "id": "374_-1001440019177",
        "hashtag": "#отчет",
        "status": "Draft",
        "ask_aboutme": false,
        "deadline_time": "23:59",
        "title": "👨‍🔬 Demo Lab Hero",
        "is_moved": true,
        "fine_reminder_time": "11:00",
        "default_schedule": "monday-free",
        "hashtags": [
          "#отчет",
          "#проявизаботу",
          "#обомне",
          "#цель",
          "#вопрос"
        ]
      },
      {
        "admin": [
          "682445"
        ],
        "generate_digest": true,
        "ask_goal": false,
        "content_delivery_time": "08:00",
        "access_link": "https://t.me/joinchat/MVi_8FZXKAfajygEvMravQ",
        "reminder_time": "19:00",
        "locale": "perekrestok",
        "id": "374_-1001448552455",
        "hashtag": "#отчет",
        "status": "Draft",
        "ask_aboutme": false,
        "deadline_time": "23:59",
        "title": "🏃‍♂️Бауманский",
        "is_moved": true,
        "fine_reminder_time": "11:00",
        "default_schedule": "monday-free",
        "hashtags": [
          "#отчет",
          "#проявизаботу",
          "#обомне",
          "#цель",
          "#вопрос",
          "#итоги"
        ]
      },
      {
        "admin": [
          "682445"
        ],
        "generate_digest": true,
        "ask_goal": false,
        "content_delivery_time": "08:00",
        "access_link": "https://t.me/joinchat/MVi_8Ek46oGdxAn3wU5brA",
        "reminder_time": "19:00",
        "locale": "perekrestok",
        "id": "374_-1001228466817",
        "hashtag": "#отчет",
        "status": "Draft",
        "ask_aboutme": false,
        "deadline_time": "23:59",
        "title": "🏃‍♂СПб Заневский",
        "is_moved": true,
        "fine_reminder_time": "11:00",
        "default_schedule": "monday-free",
        "hashtags": [
          "#отчет",
          "#проявизаботу",
          "#обомне",
          "#цель",
          "#вопрос",
          "#итоги"
        ]
      },
      {
        "admin": [
          "682445"
        ],
        "generate_digest": true,
        "ask_goal": false,
        "content_delivery_time": "08:00",
        "access_link": "https://t.me/joinchat/MVi_8FkE57VFqJ4NSSi1Aw",
        "reminder_time": "19:00",
        "locale": "perekrestok",
        "id": "374_-1001493493685",
        "hashtag": "#отчет",
        "status": "Draft",
        "ask_aboutme": false,
        "deadline_time": "23:59",
        "title": "🏃‍♂СПб Восточный",
        "is_moved": true,
        "fine_reminder_time": "11:00",
        "default_schedule": "monday-free",
        "hashtags": [
          "#отчет",
          "#проявизаботу",
          "#обомне",
          "#цель",
          "#вопрос",
          "#итоги"
        ]
      },
      {
        "admin": [
          "682445"
        ],
        "generate_digest": true,
        "ask_goal": false,
        "content_delivery_time": "08:00",
        "access_link": "https://t.me/joinchat/MVi_8EhNYRi01Go_T2l0_g",
        "reminder_time": "19:00",
        "locale": "perekrestok",
        "id": "374_-1001213030680",
        "hashtag": "#отчет",
        "status": "Draft",
        "ask_aboutme": false,
        "deadline_time": "23:59",
        "title": "🏃‍♂СПб Острова",
        "is_moved": true,
        "fine_reminder_time": "11:00",
        "default_schedule": "monday-free",
        "hashtags": [
          "#отчет",
          "#проявизаботу",
          "#обомне",
          "#цель",
          "#вопрос",
          "#итоги"
        ]
      },
      {
        "admin": [
          "682445"
        ],
        "generate_digest": true,
        "ask_goal": false,
        "content_delivery_time": "08:00",
        "access_link": "https://t.me/joinchat/MVi_8E_XAGXdcjaXrbZWbw",
        "reminder_time": "19:00",
        "locale": "perekrestok",
        "id": "374_-1001339490405",
        "hashtag": "#отчет",
        "status": "Draft",
        "ask_aboutme": false,
        "deadline_time": "23:59",
        "title": "🏃‍♂СПб Курортный",
        "is_moved": true,
        "fine_reminder_time": "11:00",
        "default_schedule": "monday-free",
        "hashtags": [
          "#отчет",
          "#проявизаботу",
          "#обомне",
          "#цель",
          "#вопрос",
          "#итоги"
        ]
      },
      {
        "admin": [
          "682445"
        ],
        "generate_digest": true,
        "ask_goal": false,
        "content_delivery_time": "08:00",
        "access_link": "https://t.me/joinchat/MVi_8EW-T2_tiintu2CFMg",
        "reminder_time": "19:00",
        "locale": "perekrestok",
        "id": "374_-1001170100079",
        "hashtag": "#отчет",
        "status": "Draft",
        "ask_aboutme": false,
        "deadline_time": "23:59",
        "title": "🏃‍♂Ярославский",
        "is_moved": true,
        "fine_reminder_time": "11:00",
        "default_schedule": "monday-free",
        "hashtags": [
          "#отчет",
          "#проявизаботу",
          "#обомне",
          "#цель",
          "#вопрос",
          "#итоги"
        ]
      },
      {
        "admin": [
          "682445"
        ],
        "generate_digest": true,
        "ask_goal": false,
        "content_delivery_time": "08:00",
        "access_link": "https://t.me/joinchat/MVi_8FjSMFlibmsatQ0tpg",
        "reminder_time": "19:00",
        "locale": "perekrestok",
        "id": "374_-1001490169945",
        "hashtag": "#отчет",
        "status": "Draft",
        "ask_aboutme": false,
        "deadline_time": "23:59",
        "title": "🏃‍♂️Воронеж 1, 2",
        "is_moved": true,
        "fine_reminder_time": "11:00",
        "default_schedule": "monday-free",
        "hashtags": [
          "#отчет",
          "#проявизаботу",
          "#обомне",
          "#цель",
          "#вопрос",
          "#итоги"
        ]
      },
      {
        "admin": [
          "682445"
        ],
        "generate_digest": true,
        "ask_goal": false,
        "content_delivery_time": "08:00",
        "access_link": "https://t.me/joinchat/MVi_8FL4MZJN-mP1LNrKBw",
        "reminder_time": "19:00",
        "locale": "perekrestok",
        "id": "374_-1001391997330",
        "hashtag": "#отчет",
        "status": "Draft",
        "ask_aboutme": false,
        "deadline_time": "23:59",
        "title": "🏃‍♂️Казань",
        "is_moved": true,
        "fine_reminder_time": "11:00",
        "default_schedule": "monday-free",
        "hashtags": [
          "#отчет",
          "#проявизаботу",
          "#обомне",
          "#цель",
          "#вопрос",
          "#итоги"
        ]
      },
      {
        "admin": [
          "682445"
        ],
        "generate_digest": true,
        "ask_goal": false,
        "content_delivery_time": "08:00",
        "access_link": "https://t.me/joinchat/MVi_8Ec-9bARrGhsIQizSA",
        "reminder_time": "19:00",
        "locale": "perekrestok",
        "id": "374_-1001195308464",
        "hashtag": "#отчет",
        "status": "Draft",
        "ask_aboutme": false,
        "deadline_time": "23:59",
        "title": "🏃‍♂СПб Колпинский",
        "is_moved": true,
        "fine_reminder_time": "11:00",
        "default_schedule": "monday-free",
        "hashtags": [
          "#отчет",
          "#проявизаботу",
          "#обомне",
          "#цель",
          "#вопрос",
          "#итоги"
        ]
      },
      {
        "admin": [
          "682445"
        ],
        "generate_digest": true,
        "ask_goal": false,
        "content_delivery_time": "08:00",
        "access_link": "https://t.me/joinchat/MVi_8FOCYKFrlfcgMZVDFg",
        "reminder_time": "19:00",
        "locale": "perekrestok",
        "id": "374_-1001401053345",
        "hashtag": "#отчет",
        "status": "Draft",
        "ask_aboutme": false,
        "deadline_time": "23:59",
        "title": "🏃‍♂СПб Юго-Восточный",
        "is_moved": true,
        "fine_reminder_time": "11:00",
        "default_schedule": "monday-free",
        "hashtags": [
          "#отчет",
          "#проявизаботу",
          "#обомне",
          "#цель",
          "#вопрос",
          "#итоги"
        ]
      },
      {
        "admin": [
          "682445"
        ],
        "generate_digest": true,
        "ask_goal": false,
        "content_delivery_time": "08:00",
        "access_link": "https://t.me/joinchat/MVi_8ETA8YmaIqHb441Myg",
        "reminder_time": "19:00",
        "locale": "perekrestok",
        "id": "374_-1001153495433",
        "hashtag": "#отчет",
        "status": "Draft",
        "ask_aboutme": false,
        "deadline_time": "23:59",
        "title": "🏃‍♂СПб Приморский",
        "is_moved": true,
        "fine_reminder_time": "11:00",
        "default_schedule": "monday-free",
        "hashtags": [
          "#отчет",
          "#проявизаботу",
          "#обомне",
          "#цель",
          "#вопрос",
          "#итоги"
        ]
      }
    ],
    "totalPages": 7,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [
      [
        "access_link",
        1311813
      ],
      [
        "admin",
        1311813
      ],
      [
        "ask_aboutme",
        1311813
      ],
      [
        "ask_goal",
        1311813
      ],
      [
        "content_delivery_time",
        1311813
      ],
      [
        "current_group_traction",
        1311813
      ],
      [
        "deadline_dt",
        1311813
      ],
      [
        "deadline_time",
        1311813
      ],
      [
        "default_schedule",
        1311813
      ],
      [
        "fine_reminder_time",
        1311813
      ],
      [
        "fines",
        1311813
      ],
      [
        "generate_digest",
        1311813
      ],
      [
        "hashtag",
        1311813
      ],
      [
        "hashtags",
        1311813
      ],
      [
        "id",
        1311813
      ],
      [
        "is_moved",
        1311813
      ],
      [
        "locale",
        1311813
      ],
      [
        "morning_plan_time",
        1311813
      ],
      [
        "reminder_time",
        1311813
      ],
      [
        "status",
        1311813
      ],
      [
        "title",
        1311813
      ]
    ],
    "writeFields": [
      "access_link",
      "admin",
      "ask_aboutme",
      "ask_goal",
      "content_delivery_time",
      "deadline_time",
      "description",
      "fine_reminder_time",
      "generate_digest",
      "hashtag",
      "hashtags",
      "is_moved",
      "locale",
      "morning_plan_time",
      "reminder_time",
      "status"
    ],
    "structures": {
      "1311813": {
        "id": 1311813,
        "dateCreated": "2020-08-17T11:57:53Z",
        "hidden": false,
        "dateHidden": null,
        "networkID": 2894,
        "name": "challenge_settings",
        "sysName": "challenge_settings",
        "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"morning_plan_time\",\"dataType\":\"string\",\"name\":\"morning_plan_time\",\"id\":\"12991597665911124\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":20,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"title\",\"dataType\":\"string\",\"name\":\"title\",\"id\":\"16501597665629727\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"content_direction\",\"dataType\":\"string\",\"name\":\"content_direction\",\"id\":\"20321599129855382\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":28,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"generate_digest\",\"dataType\":\"boolean\",\"name\":\"generate_digest\",\"id\":\"22571597665540150\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"is_moved\",\"dataType\":\"boolean\",\"name\":\"is_moved\",\"id\":\"23631598981067819\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":26,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"perekrestok_stores\",\"dataType\":\"arrayLink\",\"name\":\"perekrestok_stores\",\"id\":\"23631599229668349\",\"link\":\"store\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":30,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"current_group_traction\",\"dataType\":\"link\",\"name\":\"Current Group Traction\",\"id\":\"23851598555582730\",\"link\":\"group_traction\",\"group\":\"1599128823741\",\"tags\":null,\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[\"deadline_dt\"],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":true},{\"sysName\":\"last_sent_lesson\",\"dataType\":\"link\",\"name\":\"last_sent_lesson\",\"id\":\"28861599128849570\",\"link\":\"Library\",\"group\":\"1599128823741\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"admin\",\"dataType\":\"arrayLink\",\"name\":\"admin\",\"id\":\"31701597665796617\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":16,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"status\",\"dataType\":\"string\",\"name\":\"status\",\"id\":\"32031597665499939\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"description\",\"dataType\":\"string\",\"name\":\"description\",\"id\":\"38841597665612984\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"content_delivery_time\",\"dataType\":\"string\",\"name\":\"content_delivery_time\",\"id\":\"39111597665903139\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":19,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"ask_goal\",\"dataType\":\"boolean\",\"name\":\"ask_goal\",\"id\":\"41641597665554330\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"is_deleted\",\"dataType\":\"boolean\",\"name\":\"is_deleted\",\"id\":\"42761599121511579\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":27,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"fines\",\"dataType\":\"arrayLink\",\"name\":\"fines\",\"id\":\"45741597665817682\",\"link\":\"fine\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":17,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"chat\",\"dataType\":\"link\",\"name\":\"chat\",\"id\":\"49921597665708157\",\"link\":\"TChat\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"ask_aboutme\",\"dataType\":\"boolean\",\"name\":\"ask_aboutme\",\"id\":\"51371597665566666\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"hashtags\",\"dataType\":\"arrayLink\",\"name\":\"available hashtags\",\"id\":\"53921598437653004\",\"link\":\"hashtag_lib\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":24,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"deadline_time\",\"dataType\":\"string\",\"name\":\"deadline_time\",\"id\":\"55911597665932942\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":23,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"perekrestok_regions\",\"dataType\":\"arrayLink\",\"name\":\"perekrestok_regions\",\"id\":\"68661599244182491\",\"link\":\"region\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":31,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"deadline_dt\",\"dataType\":\"date\",\"name\":\"deadline_dt\",\"id\":\"69041598859283740\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":25,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"reminder_time\",\"dataType\":\"string\",\"name\":\"reminder_time\",\"id\":\"72321597665918455\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":21,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"short\",\"dataType\":\"string\",\"name\":\"short\",\"id\":\"72831597665604569\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"report_response_type\",\"dataType\":\"string\",\"name\":\"report_response_type\",\"id\":\"80611597665587263\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"access_link\",\"dataType\":\"string\",\"name\":\"access_link\",\"id\":\"85181597665678832\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"chat_link_json\",\"dataType\":\"json\",\"name\":\"chat_link_json\",\"id\":\"85631599135390169\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":29,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":true,\"indexExists\":false},{\"sysName\":\"locale\",\"dataType\":\"link\",\"name\":\"locale\",\"id\":\"87811597665848476\",\"link\":\"locale\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":18,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"preview_picture\",\"dataType\":\"file\",\"name\":\"preview_picture\",\"id\":\"90201597665659561\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"icon\",\"dataType\":\"string\",\"name\":\"icon\",\"id\":\"91641597665623401\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"fine_reminder_time\",\"dataType\":\"string\",\"name\":\"fine_reminder_time\",\"id\":\"94291597665924468\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":22,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"hashtag_ask\",\"dataType\":\"string\",\"name\":\"hashtag_ask\",\"id\":\"97001597665750753\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"hashtag\",\"dataType\":\"string\",\"name\":\"hashtag\",\"id\":\"98581597665739903\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"default_schedule\",\"dataType\":\"link\",\"name\":\"default_schedule\",\"id\":\"98631597665764359\",\"link\":\"schedule_lib\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false}]",
        "jsonGroupSettings": "[{\"id\":1599128823741,\"name\":\"Current State\",\"order\":0}]",
        "jsonViewIdSettings": "[{\"sysName\":\"title\"}]",
        "jsonSettings": null,
        "jsonNativeIndexSettings": null,
        "indexEnabled": true,
        "lastIndexUpdate": 0,
        "indexName": "",
        "dateChanged": "2020-09-04T18:30:25Z",
        "createBy": 3552,
        "changedBy": 3552,
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
          "indexExists": false,
          "linkOrArrayLinkType": false,
          "json": false,
          "arrayLink": false,
          "linkType": false
        },
        "objectIDSysName": "id",
        "folderId": 33585783
      }
    },
    "isSuccessWrite": false,
    "writeError": null,
    "writeResponse": null
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
              {/* <FpsCards data={exampleTableHH} />
              <br /><br /> */}
              <FpsCards data={exampleTable} />
              <br /><br />
              <FpsCards data={exampleTable2} />
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