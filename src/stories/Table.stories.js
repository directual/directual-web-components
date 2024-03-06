import 'mapbox-gl/dist/mapbox-gl.css'
import FpsTable from '../components/fps/viewobjects/table/FpsTable'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

export default {
  title: 'FPS/Components/Table',
  component: FpsTable,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'left',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
  },
};

let exampleTable = {
  "sl": "pendingInvitations",
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
                  "fieldSysName": "email",
                  "fetch": [
                      {
                          "fieldSysName": "id",
                          "condition": null,
                          "fetch": []
                      },
                      {
                          "fieldSysName": "firstName",
                          "condition": null,
                          "fetch": []
                      },
                      {
                          "fieldSysName": "lastName",
                          "condition": null,
                          "fetch": []
                      }
                  ],
                  "sysName": "email",
                  "name": "Email",
                  "dataType": "link",
                  "format": "",
                  "formatOptions": {},
                  "link": "WebUser"
              },
              {
                  "fieldSysName": "isAccepted",
                  "fetch": [],
                  "sysName": "isAccepted",
                  "name": "Invitation is accepted",
                  "dataType": "boolean",
                  "format": "",
                  "formatOptions": {
                      "customOptionLabel": "My option",
                      "keyValue": {
                          "key": "key",
                          "value": "value",
                          "button": "One more"
                      },
                      "dateLocale": "en-gb",
                      "booleanOptions": [
                          "Accepted",
                          "Pending"
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
                      "dateFormat": "DD/MM/Y",
                      "timeFormat": " HH:mm",
                      "isUTC": "false"
                  },
                  "link": ""
              },
              {
                  "fieldSysName": "date",
                  "fetch": [],
                  "sysName": "date",
                  "name": "Invite Date",
                  "dataType": "date",
                  "format": "",
                  "formatOptions": {
                      "customOptionLabel": "My option",
                      "keyValue": {
                          "key": "key",
                          "value": "value",
                          "button": "One more"
                      },
                      "dateLocale": "en-gb",
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
                      "dateFormat": "DD MMM, Y",
                      "timeFormat": " HH:mm",
                      "isUTC": "false"
                  },
                  "link": ""
              }
          ],
          "writeFields": [],
          "fields": {
              "id": {
                  "id": "id",
                  "content": "id",
                  "type": "field",
                  "dataType": "id",
                  "format": "",
                  "formatOptions": {},
                  "read": true,
                  "link": "",
                  "actions": []
              },
              "email": {
                  "id": "email",
                  "content": "Email",
                  "type": "field",
                  "dataType": "link",
                  "format": "",
                  "formatOptions": {},
                  "read": true,
                  "link": "WebUser",
                  "actions": []
              },
              "isAccepted": {
                  "id": "isAccepted",
                  "content": "Invitation is accepted",
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
                      "dateLocale": "en-gb",
                      "booleanOptions": [
                          "Accepted",
                          "Pending"
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
                      "dateFormat": "DD/MM/Y",
                      "timeFormat": " HH:mm",
                      "isUTC": "false"
                  },
                  "read": true,
                  "link": "",
                  "actions": []
              },
              "date": {
                  "id": "date",
                  "content": "Invite Date",
                  "type": "field",
                  "dataType": "date",
                  "format": "",
                  "formatOptions": {
                      "customOptionLabel": "My option",
                      "keyValue": {
                          "key": "key",
                          "value": "value",
                          "button": "One more"
                      },
                      "dateLocale": "en-gb",
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
                      "dateFormat": "DD MMM, Y",
                      "timeFormat": " HH:mm",
                      "isUTC": "false"
                  },
                  "read": true,
                  "link": "",
                  "actions": []
              }
          },
          "fieldParams": {
              "id": {
                  "include": false,
                  "disableEditing": true,
                  "fileImageFormat": "square",
                  "quickSearch": false,
                  "fileImageSize": 200,
                  "clickable": false
              },
              "email": {
                  "include": true,
                  "disableEditing": false,
                  "fileImageFormat": "square",
                  "quickSearch": false,
                  "fileImageSize": 200,
                  "clickable": false
              },
              "isAccepted": {
                  "include": true,
                  "disableEditing": false,
                  "fileImageFormat": "square",
                  "quickSearch": false,
                  "fileImageSize": 200,
                  "clickable": false
              },
              "date": {
                  "include": true,
                  "disableEditing": false,
                  "fileImageFormat": "square",
                  "quickSearch": false,
                  "fileImageSize": 200,
                  "clickable": false
              }
          },
          "columns": {
              "tab-1": {
                  "id": "tab-1",
                  "title": "New section",
                  "fieldIds": [
                      "id",
                      "email",
                      "isAccepted",
                      "date"
                  ]
              }
          },
          "columnOrder": [
              "tab-1"
          ],
          "actions": []
      },
      "fields": {
          "id": {
              "include": false,
              "disableEditing": true,
              "fileImageFormat": "square",
              "quickSearch": false,
              "fileImageSize": 200,
              "clickable": false
          },
          "email": {
              "include": true,
              "disableEditing": false,
              "fileImageFormat": "square",
              "quickSearch": false,
              "fileImageSize": 200,
              "clickable": false
          },
          "isAccepted": {
              "include": true,
              "disableEditing": false,
              "fileImageFormat": "square",
              "quickSearch": false,
              "fileImageSize": 200,
              "clickable": false
          },
          "date": {
              "include": true,
              "disableEditing": false,
              "fileImageFormat": "square",
              "quickSearch": false,
              "fileImageSize": 200,
              "clickable": false
          }
      },
      "tableParams": {
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
              },
              {
                  "fieldSysName": "email",
                  "fetch": [
                      {
                          "fieldSysName": "id",
                          "condition": null,
                          "fetch": []
                      },
                      {
                          "fieldSysName": "firstName",
                          "condition": null,
                          "fetch": []
                      },
                      {
                          "fieldSysName": "lastName",
                          "condition": null,
                          "fetch": []
                      }
                  ],
                  "sysName": "email",
                  "name": "Email",
                  "dataType": "link",
                  "format": "",
                  "formatOptions": {},
                  "link": "WebUser"
              },
              {
                  "fieldSysName": "isAccepted",
                  "fetch": [],
                  "sysName": "isAccepted",
                  "name": "Invitation is accepted",
                  "dataType": "boolean",
                  "format": "",
                  "formatOptions": {
                      "customOptionLabel": "My option",
                      "keyValue": {
                          "key": "key",
                          "value": "value",
                          "button": "One more"
                      },
                      "dateLocale": "en-gb",
                      "booleanOptions": [
                          "Accepted",
                          "Pending"
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
                      "dateFormat": "DD/MM/Y",
                      "timeFormat": " HH:mm",
                      "isUTC": "false"
                  },
                  "link": ""
              },
              {
                  "fieldSysName": "date",
                  "fetch": [],
                  "sysName": "date",
                  "name": "Invite Date",
                  "dataType": "date",
                  "format": "",
                  "formatOptions": {
                      "customOptionLabel": "My option",
                      "keyValue": {
                          "key": "key",
                          "value": "value",
                          "button": "One more"
                      },
                      "dateLocale": "en-gb",
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
                      "dateFormat": "DD MMM, Y",
                      "timeFormat": " HH:mm",
                      "isUTC": "false"
                  },
                  "link": ""
              }
          ],
          "writeFields": [],
          "fields": {
              "id": {
                  "id": "id",
                  "content": "id",
                  "dataType": "id",
                  "format": "",
                  "formatOptions": {},
                  "read": true,
                  "link": ""
              },
              "email": {
                  "id": "email",
                  "content": "Email",
                  "dataType": "link",
                  "format": "",
                  "formatOptions": {},
                  "read": true,
                  "link": "WebUser"
              },
              "isAccepted": {
                  "id": "isAccepted",
                  "content": "Invitation is accepted",
                  "dataType": "boolean",
                  "format": "",
                  "formatOptions": {
                      "customOptionLabel": "My option",
                      "keyValue": {
                          "key": "key",
                          "value": "value",
                          "button": "One more"
                      },
                      "dateLocale": "en-gb",
                      "booleanOptions": [
                          "Accepted",
                          "Pending"
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
                      "dateFormat": "DD/MM/Y",
                      "timeFormat": " HH:mm",
                      "isUTC": "false"
                  },
                  "read": true,
                  "link": ""
              },
              "date": {
                  "id": "date",
                  "content": "Invite Date",
                  "dataType": "date",
                  "format": "",
                  "formatOptions": {
                      "customOptionLabel": "My option",
                      "keyValue": {
                          "key": "key",
                          "value": "value",
                          "button": "One more"
                      },
                      "dateLocale": "en-gb",
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
                      "dateFormat": "DD MMM, Y",
                      "timeFormat": " HH:mm",
                      "isUTC": "false"
                  },
                  "read": true,
                  "link": ""
              }
          },
          "fieldParams": {
              "id": {
                  "include": false,
                  "fileImageFormat": "square",
                  "fileImageSize": 80,
                  "colorCode": false,
                  "colorFormat": "square",
                  "colorSize": 40
              },
              "email": {
                  "include": true,
                  "fileImageFormat": "square",
                  "fileImageSize": 80,
                  "colorCode": false,
                  "colorFormat": "square",
                  "colorSize": 40
              },
              "isAccepted": {
                  "include": true,
                  "fileImageFormat": "square",
                  "fileImageSize": 80,
                  "colorCode": false,
                  "colorFormat": "square",
                  "colorSize": 40
              },
              "date": {
                  "include": true,
                  "fileImageFormat": "square",
                  "fileImageSize": 80,
                  "colorCode": false,
                  "colorFormat": "square",
                  "colorSize": 40
              }
          },
          "fieldOrder": [
              "id",
              "email",
              "isAccepted",
              "date"
          ]
      },
      "hideExpandTD": true,
      "largeFont": true,
      "autoRefresh": false
  },
  "tableTitle": "Pending invitations",
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
          "linkType": false,
          "typeVariable": {},
          "json": false,
          "linkOrArrayLinkType": false,
          "arrayLink": false,
          "indexExists": false,
          "array": false
      },
      {
          "sysName": "email",
          "dataType": "link",
          "name": "Email",
          "id": "24101707396110757",
          "link": "WebUser",
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
          "linkType": true,
          "typeVariable": {},
          "json": false,
          "linkOrArrayLinkType": true,
          "arrayLink": false,
          "indexExists": false,
          "array": false
      },
      {
          "sysName": "isAccepted",
          "dataType": "boolean",
          "name": "Invitation is accepted",
          "id": "29501707396120889",
          "link": "",
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
          "formatOptions": {
              "customOptionLabel": "My option",
              "keyValue": {
                  "key": "key",
                  "value": "value",
                  "button": "One more"
              },
              "dateLocale": "en-gb",
              "booleanOptions": [
                  "Accepted",
                  "Pending"
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
              "dateFormat": "DD/MM/Y",
              "timeFormat": " HH:mm",
              "isUTC": "false"
          },
          "groupName": null,
          "linkType": false,
          "typeVariable": {},
          "json": false,
          "linkOrArrayLinkType": false,
          "arrayLink": false,
          "indexExists": false,
          "array": false
      },
      {
          "sysName": "date",
          "dataType": "date",
          "name": "Invite Date",
          "id": "44931707396917063",
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
          "formatOptions": {
              "customOptionLabel": "My option",
              "keyValue": {
                  "key": "key",
                  "value": "value",
                  "button": "One more"
              },
              "dateLocale": "en-gb",
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
              "dateFormat": "DD MMM, Y",
              "timeFormat": " HH:mm",
              "isUTC": "false"
          },
          "groupName": null,
          "linkType": false,
          "typeVariable": {},
          "json": false,
          "linkOrArrayLinkType": false,
          "arrayLink": false,
          "indexExists": false,
          "array": false
      }
  ],
  "data": [
      {
          "isAccepted": false,
          "date": 1707397022000,
          "email": {
              "id": "manager3@directual.com"
          },
          "id": "5e38e751-7d8a-4ab7-8a49-83bf7d6d93b9"
      },
      {
          "email": {
              "id": "manager4@directual.com"
          },
          "isAccepted": false,
          "date": 1707397029000,
          "id": "cd5bb851-6e0e-43fc-be2c-e30fbdcd991a"
      }
  ],
  "totalPages": 1,
  "pageNumber": 0,
  "error": null,
  "fieldScheme": [
      [
          "id",
          99289098
      ],
      [
          "email.id",
          99288791
      ],
      [
          "email.firstName",
          99288791
      ],
      [
          "email.lastName",
          99288791
      ],
      [
          "isAccepted",
          99289098
      ],
      [
          "date",
          99289098
      ]
  ],
  "writeFields": [],
  "structures": {
      "99288791": {
          "networkID": 20000,
          "id": 99288791,
          "dateCreated": "2024-02-07T11:51:04Z",
          "hidden": false,
          "dateHidden": null,
          "name": "App users",
          "sysName": "WebUser",
          "jsonObject": "[{\"sysName\":\"dateLastActivity\",\"dataType\":\"string\",\"name\":\"dateLastActivity\",\"id\":\"10\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"dateCreated\",\"dataType\":\"string\",\"name\":\"dateCreated\",\"id\":\"13\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"isAuthorization\",\"dataType\":\"boolean\",\"name\":\"isAuthorization\",\"id\":\"9\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"notifications_counter\",\"dataType\":\"string\",\"name\":\"Notifications Counter\",\"id\":\"1\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"custom_labels\",\"dataType\":\"json\",\"name\":\"Custom labels\",\"id\":\"2\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"phone\",\"dataType\":\"string\",\"name\":\"Phone\",\"id\":\"12\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"email\",\"dataType\":\"string\",\"name\":\"Email\",\"id\":\"11\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"userpic\",\"dataType\":\"file\",\"name\":\"User pic\",\"id\":\"3\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":{},\"groupName\":\"Contacts\",\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"Username (login)\",\"id\":\"15\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"role\",\"dataType\":\"array\",\"name\":\"Roles\",\"id\":\"8\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":true},{\"sysName\":\"password\",\"dataType\":\"string\",\"name\":\"Password (hash)\",\"id\":\"14\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"firstName\",\"dataType\":\"string\",\"name\":\"First name\",\"id\":\"7\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"lastName\",\"dataType\":\"string\",\"name\":\"Last name\",\"id\":\"6\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"gender\",\"dataType\":\"string\",\"name\":\"Gender\",\"id\":\"5\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"isBlocked\",\"dataType\":\"boolean\",\"name\":\"Block user\",\"id\":\"4\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"systemMessage\",\"dataType\":\"string\",\"name\":\"System message\",\"id\":\"56921641637265680\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"secret\",\"dataType\":\"string\",\"name\":\"secret\",\"id\":\"81131636839496227\",\"link\":\"\",\"group\":\"1636839487957\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"notif_Email\",\"dataType\":\"boolean\",\"name\":\"Notify me by Email\",\"id\":\"61231639915065277\",\"link\":\"\",\"group\":\"1639915049523\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Yes\",\"No\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"order_ids\",\"dataType\":\"arrayLink\",\"name\":\"Orders\",\"id\":\"58381707387786424\",\"link\":\"orders\",\"group\":\"1707387782409\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"new_orders\",\"dataType\":\"number\",\"name\":\"New orders\",\"id\":\"84131707387797551\",\"link\":\"\",\"group\":\"1707387782409\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"orders_processed\",\"dataType\":\"number\",\"name\":\"Orders under processing\",\"id\":\"58631707387811881\",\"link\":\"\",\"group\":\"1707387782409\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"orderscompleted\",\"dataType\":\"number\",\"name\":\"Orders processed\",\"id\":\"56551707387824042\",\"link\":\"\",\"group\":\"1707387782409\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false}]",
          "jsonGroupSettings": "[{\"id\":1636839487957,\"name\":\"Password restoring\",\"order\":2},{\"id\":1707387782409,\"name\":\"CRM\",\"order\":4},{\"id\":-1776115286,\"name\":\"System fields (LEGACY)\",\"order\":3},{\"id\":1639915049523,\"name\":\"Notifications\",\"order\":1},{\"id\":-502807437,\"name\":\"Contacts\",\"order\":0}]",
          "jsonViewIdSettings": "[{\"sysName\":\"firstName\"},{\"sysName\":\"lastName\"}]",
          "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
          "jsonNativeIndexSettings": null,
          "indexEnabled": true,
          "lastIndexUpdate": 0,
          "indexName": "",
          "dateChanged": "2024-02-08T10:26:22Z",
          "createBy": 0,
          "changedBy": 21,
          "_settings": null,
          "_nativeIndexSettings": null,
          "objectIDSysName": "id",
          "innerIDField": {
              "sysName": "id",
              "dataType": "id",
              "name": "Username (login)",
              "id": "15",
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
              "linkType": false,
              "typeVariable": {},
              "json": false,
              "linkOrArrayLinkType": false,
              "arrayLink": false,
              "indexExists": false,
              "array": false
          },
          "folderId": null
      },
      "99289098": {
          "networkID": 20000,
          "id": 99289098,
          "dateCreated": "2024-02-08T12:41:47Z",
          "hidden": false,
          "dateHidden": null,
          "name": "Invite Manager",
          "sysName": "invite_manager",
          "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"indexExists\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"email\",\"name\":\"Email\",\"dataType\":\"link\",\"id\":\"24101707396110757\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"indexExists\":false,\"linkType\":true,\"array\":false},{\"sysName\":\"isAccepted\",\"name\":\"Invitation is accepted\",\"dataType\":\"boolean\",\"id\":\"29501707396120889\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Accepted\",\"Pending\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"indexExists\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"date\",\"name\":\"Invite Date\",\"dataType\":\"date\",\"id\":\"44931707396917063\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD MMM, Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"indexExists\":false,\"linkType\":false,\"array\":false}]",
          "jsonGroupSettings": null,
          "jsonViewIdSettings": "[{\"sysName\":\"email\"}]",
          "jsonSettings": null,
          "jsonNativeIndexSettings": null,
          "indexEnabled": true,
          "lastIndexUpdate": 0,
          "indexName": "",
          "dateChanged": "2024-02-08T12:55:30Z",
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
              "formatOptions": {},
              "groupName": null,
              "linkType": false,
              "typeVariable": {},
              "json": false,
              "linkOrArrayLinkType": false,
              "arrayLink": false,
              "indexExists": false,
              "array": false
          },
          "folderId": 33791706
      }
  },
  "isSuccessWrite": false,
  "writeError": null,
  "writeResponse": null,
  "fileds": [],
  "quickSearch": "false",
  "httpParams": {},
  "cardCustomHtml": null,
  "cardCustomLayout": null
}

let authExample = {
  "isAuth": false,
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
    data: exampleTable,
    auth: authExample,
    locale: 'ESP',
    onChange: value => console.log(value),
  },
};
