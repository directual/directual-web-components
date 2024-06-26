import React from 'react';
import Comments from '../components/fps/comments/comments';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

export default {
  title: 'FPS/Components/Comments',
  component: Comments,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'left',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // icon: { control: 'select', options: icon_options.map(t => t.key) },
  },
};

const commentsData = {
  "sl": "comments",
  "pageSize": "10",
  "headerField": null,
  "params": {
      "_userField": "user",
      "_dateField": "date",
      "_fileField": "files",
      "_textField": "text",
      "_replyField": "parent_id"
  },
  "tableTitle": null,
  "actions": null,
  "headers": [
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
          "json": false,
          "linkOrArrayLinkType": false,
          "arrayLink": false,
          "linkType": false,
          "indexExists": false,
          "array": false
      },
      {
          "sysName": "date",
          "dataType": "date",
          "name": "",
          "id": "76441719167706461",
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
          "formatOptions": {
              "customOptionLabel": "My option",
              "keyValue": {
                  "key": "key",
                  "value": "value",
                  "button": "One more"
              },
              "dateLocale": "ru",
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
              "dateFormat": "DD MMM,",
              "timeFormat": " HH:mm",
              "isUTC": "false"
          },
          "groupName": null,
          "typeVariable": {},
          "json": false,
          "linkOrArrayLinkType": false,
          "arrayLink": false,
          "linkType": false,
          "indexExists": false,
          "array": false
      },
      {
          "sysName": "parent_id",
          "dataType": "link",
          "name": "",
          "id": "49741719167394297",
          "link": "comments",
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
          "json": false,
          "linkOrArrayLinkType": true,
          "arrayLink": false,
          "linkType": true,
          "indexExists": false,
          "array": false
      },
      {
          "sysName": "dislikes",
          "dataType": "number",
          "name": "",
          "id": "64061719167381125",
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
          "typeVariable": {},
          "json": false,
          "linkOrArrayLinkType": false,
          "arrayLink": false,
          "linkType": false,
          "indexExists": false,
          "array": false
      },
      {
          "sysName": "likes",
          "dataType": "number",
          "name": "",
          "id": "18081719167372308",
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
          "typeVariable": {},
          "json": false,
          "linkOrArrayLinkType": false,
          "arrayLink": false,
          "linkType": false,
          "indexExists": false,
          "array": false
      },
      {
          "sysName": "files",
          "dataType": "file",
          "name": "",
          "id": "83951719167364579",
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
          "format": "multipleFiles",
          "formatOptions": {},
          "groupName": null,
          "typeVariable": {},
          "json": false,
          "linkOrArrayLinkType": false,
          "arrayLink": false,
          "linkType": false,
          "indexExists": false,
          "array": false
      },
      {
          "sysName": "text",
          "dataType": "string",
          "name": "",
          "id": "14131719167362336",
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
          "json": false,
          "linkOrArrayLinkType": false,
          "arrayLink": false,
          "linkType": false,
          "indexExists": false,
          "array": false
      },
      {
          "sysName": "user",
          "dataType": "link",
          "name": "app user",
          "id": "16261719167351315",
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
          "typeVariable": {},
          "json": false,
          "linkOrArrayLinkType": true,
          "arrayLink": false,
          "linkType": true,
          "indexExists": false,
          "array": false
      }
  ],
  "data": [
      {
          "text": "Бей свиней, спасай Россию!",
          "files": "https://api.directual.com/fileUploaded/directual-site/e/message-2-line.svg,https://api.directual.com/fileUploaded/directual-site/e/message-2-line.svg",
          "id": "5b7e73b2-fa47-4a90-b337-8c181cb34ff0",
          "date": 1719090000000,
          "user": {}
      },
      {
          "parent_id": "5b7e73b2-fa47-4a90-b337-8c181cb34ff0",
          "text": "Русские вперед!\n\nРусские вперед!\n\nРусские вперед!",
          "id": "5dafff15-df63-4b62-b979-0683df945bb0",
          "date": 1719176400000,
          "user": {
              "lastName": "Ershov",
              "firstName": "Pavel",
              "userpic": "https://api.directual.com/fileUploaded/basic-template/5fe98a71-196e-4f0d-98cb-be3ee8968fbf.jpg",
              "id": "pavel"
          }
      },
      {
          "text": "Будет Новороссия!\n\nБудет!\n\nВсех убьем, всех ограбим!",
          "likes": 12,
          "id": "aa86f3a9-2f41-4907-926a-f13c6d46ce0f",
          "date": 1718312400000,
          "dislikes": 2,
          "user": {
              "lastName": "Ershov",
              "firstName": "Pavel",
              "userpic": "https://api.directual.com/fileUploaded/basic-template/5fe98a71-196e-4f0d-98cb-be3ee8968fbf.jpg",
              "id": "pavel"
          }
      },
      {
          "files": "https://api.directual.com/fileUploaded/comments/web/3003f573-8d57-4dc5-babf-20391a25bb46.jpeg",
          "parent_id": "5b7e73b2-fa47-4a90-b337-8c181cb34ff0",
          "text": "Воистину",
          "id": "aa055070-b94e-48af-b870-41124be3ca9f"
      }
  ],
  "totalPages": 1,
  "pageNumber": 0,
  "error": null,
  "fieldScheme": [
      [
          "id",
          99322166
      ],
      [
          "date",
          99322166
      ],
      [
          "parent_id.id",
          99322166
      ],
      [
          "dislikes",
          99322166
      ],
      [
          "likes",
          99322166
      ],
      [
          "files",
          99322166
      ],
      [
          "text",
          99322166
      ],
      [
          "user.id",
          99320062
      ],
      [
          "user.firstName",
          99320062
      ],
      [
          "user.lastName",
          99320062
      ],
      [
          "user.userpic",
          99320062
      ]
  ],
  "writeFields": [
      "text",
      "files",
      "parent_id"
  ],
  "structures": {
      "99320062": {
          "networkID": 21142,
          "id": 99320062,
          "dateCreated": "2024-06-17T14:52:23Z",
          "hidden": false,
          "dateHidden": null,
          "name": "App users",
          "sysName": "WebUser",
          "jsonObject": "[{\"sysName\":\"dateLastActivity\",\"dataType\":\"string\",\"name\":\"dateLastActivity\",\"id\":\"10\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"dateCreated\",\"dataType\":\"string\",\"name\":\"dateCreated\",\"id\":\"13\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"isAuthorization\",\"dataType\":\"boolean\",\"name\":\"isAuthorization\",\"id\":\"9\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"notifications_counter\",\"dataType\":\"string\",\"name\":\"Notifications Counter\",\"id\":\"1\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"custom_labels\",\"dataType\":\"json\",\"name\":\"Custom labels\",\"id\":\"2\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"phone\",\"dataType\":\"string\",\"name\":\"Phone\",\"id\":\"12\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"email\",\"dataType\":\"string\",\"name\":\"Email\",\"id\":\"11\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"userpic\",\"dataType\":\"file\",\"name\":\"User pic\",\"id\":\"3\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":{},\"groupName\":\"Contacts\",\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"Username (login)\",\"id\":\"15\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"role\",\"dataType\":\"array\",\"name\":\"Roles\",\"id\":\"8\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":true},{\"sysName\":\"password\",\"dataType\":\"string\",\"name\":\"Password (hash)\",\"id\":\"14\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"firstName\",\"dataType\":\"string\",\"name\":\"First name\",\"id\":\"7\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"lastName\",\"dataType\":\"string\",\"name\":\"Last name\",\"id\":\"6\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"gender\",\"dataType\":\"string\",\"name\":\"Gender\",\"id\":\"5\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"isBlocked\",\"dataType\":\"boolean\",\"name\":\"Block user\",\"id\":\"4\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"systemMessage\",\"dataType\":\"string\",\"name\":\"System message\",\"id\":\"56921641637265680\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"secret\",\"dataType\":\"string\",\"name\":\"secret\",\"id\":\"81131636839496227\",\"link\":\"\",\"group\":\"1636839487957\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"notif_Email\",\"dataType\":\"boolean\",\"name\":\"Notify me by Email\",\"id\":\"61231639915065277\",\"link\":\"\",\"group\":\"1639915049523\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Yes\",\"No\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false}]",
          "jsonGroupSettings": "[{\"name\":\"Contacts\",\"id\":-502807437,\"order\":0},{\"name\":\"Notifications\",\"id\":1639915049523,\"order\":1},{\"name\":\"Password restoring\",\"id\":1636839487957,\"order\":2},{\"name\":\"System fields (LEGACY)\",\"id\":-1776115286,\"order\":3}]",
          "jsonViewIdSettings": "[{\"sysName\":\"firstName\"},{\"sysName\":\"lastName\"}]",
          "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
          "jsonNativeIndexSettings": null,
          "indexEnabled": true,
          "lastIndexUpdate": 0,
          "indexName": "",
          "dateChanged": "2024-06-17T14:52:26Z",
          "createBy": 0,
          "changedBy": 0,
          "_settings": null,
          "_nativeIndexSettings": null,
          "innerIDField": {
              "sysName": "id",
              "dataType": "id",
              "name": "Username (login)",
              "id": "15",
              "link": "",
              "group": "",
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
              "typeVariable": {},
              "json": false,
              "linkOrArrayLinkType": false,
              "arrayLink": false,
              "linkType": false,
              "indexExists": false,
              "array": false
          },
          "objectIDSysName": "id",
          "folderId": null
      },
      "99322166": {
          "networkID": 21142,
          "id": 99322166,
          "dateCreated": "2024-06-23T18:25:57Z",
          "hidden": false,
          "dateHidden": null,
          "name": "comments",
          "sysName": "comments",
          "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"user\",\"dataType\":\"link\",\"name\":\"app user\",\"id\":\"16261719167351315\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"text\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"14131719167362336\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"files\",\"dataType\":\"file\",\"name\":\"\",\"id\":\"83951719167364579\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"multipleFiles\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"likes\",\"dataType\":\"number\",\"name\":\"\",\"id\":\"18081719167372308\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"dislikes\",\"dataType\":\"number\",\"name\":\"\",\"id\":\"64061719167381125\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"parent_id\",\"dataType\":\"link\",\"name\":\"\",\"id\":\"49741719167394297\",\"link\":\"comments\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"date\",\"dataType\":\"date\",\"name\":\"\",\"id\":\"76441719167706461\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD MMM,\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false}]",
          "jsonGroupSettings": null,
          "jsonViewIdSettings": null,
          "jsonSettings": null,
          "jsonNativeIndexSettings": null,
          "indexEnabled": true,
          "lastIndexUpdate": 0,
          "indexName": "",
          "dateChanged": "2024-06-23T20:06:03Z",
          "createBy": 1,
          "changedBy": 1,
          "_settings": {
              "inMemory": false,
              "isCacheable": false,
              "timeCache": 0,
              "indexEnabled": true,
              "lowPriority": false
          },
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
              "json": false,
              "linkOrArrayLinkType": false,
              "arrayLink": false,
              "linkType": false,
              "indexExists": false,
              "array": false
          },
          "objectIDSysName": "id",
          "folderId": null
      }
  },
  "isSuccessWrite": false,
  "writeError": null,
  "writeResponse": null,
  "fileds": [
      {
          "sysName": "text",
          "dataType": "string",
          "name": "",
          "id": "14131719167362336",
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
          "json": false,
          "linkOrArrayLinkType": false,
          "arrayLink": false,
          "linkType": false,
          "indexExists": false,
          "array": false
      },
      {
          "sysName": "files",
          "dataType": "file",
          "name": "",
          "id": "83951719167364579",
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
          "format": "multipleFiles",
          "formatOptions": {},
          "groupName": null,
          "typeVariable": {},
          "json": false,
          "linkOrArrayLinkType": false,
          "arrayLink": false,
          "linkType": false,
          "indexExists": false,
          "array": false
      },
      {
          "sysName": "parent_id",
          "dataType": "link",
          "name": "",
          "id": "49741719167394297",
          "link": "comments",
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
          "json": false,
          "linkOrArrayLinkType": true,
          "arrayLink": false,
          "linkType": true,
          "indexExists": false,
          "array": false
      }
  ],
  "quickSearch": null,
  "httpParams": null,
  "cardCustomHtml": null,
  "cardCustomLayout": null,
  "comment": "Комменты-хуенты",
  "response": null
}

let authExample = {
  "isAuth": true,
  "custom_labels": "{\n   \"foo\": \"hello brave new world!\",\n   \"bar\": \"foobar\"\n}",
  "role": "admin",
  "lastName": "Watson",
  "firstName": "David",
  "token": "1a9f10d0-d45f-4bf2-9e7e-d6ce2e752d03",
  "notifications_counter": "",
  "nid": 18924,
  "user": "david@directual.com",
  //"userpic": "https://api.directual.com/fileUploaded/basic-template/efdd480a-d36a-4a01-ac82-baf871ffd2fd.jpg"
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Regular = {
  args: {
    data: commentsData,
    locale: "ENG",
    auth: authExample,
  },
};

