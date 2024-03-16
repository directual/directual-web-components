import 'mapbox-gl/dist/mapbox-gl.css'
import FpsCards from '../components/fps/viewobjects/cards/FpsCards'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

export default {
  title: 'FPS/Components/Cards',
  component: FpsCards,
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
    "sl": "testManager",
    "pageSize": "10",
    "headerField": null,
    "params": {
        "data": {
            "readFields": [
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
                    "fieldSysName": "firstName",
                    "fetch": [],
                    "sysName": "firstName",
                    "name": "First name",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "lastName",
                    "fetch": [],
                    "sysName": "lastName",
                    "name": "Last name",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "ticket_ids",
                    "fetch": [
                        {
                            "fieldSysName": "id",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "internal_number",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "subject",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "status",
                            "condition": null,
                            "fetch": [
                                {
                                    "fieldSysName": "id",
                                    "condition": null,
                                    "fetch": []
                                },
                                {
                                    "fieldSysName": "status",
                                    "condition": null,
                                    "fetch": []
                                }
                            ]
                        },
                        {
                            "fieldSysName": "description",
                            "condition": null,
                            "fetch": []
                        }
                    ],
                    "sysName": "ticket_ids",
                    "name": "Tickets",
                    "dataType": "arrayLink",
                    "format": "",
                    "formatOptions": {},
                    "link": "tickets"
                }
            ],
            "writeFields": [],
            "fields": {
                "id": {
                    "id": "id",
                    "content": "Username (login)",
                    "type": "field",
                    "dataType": "id",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "firstName": {
                    "id": "firstName",
                    "content": "First name",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "lastName": {
                    "id": "lastName",
                    "content": "Last name",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "ticket_ids": {
                    "id": "ticket_ids",
                    "content": "Tickets",
                    "type": "field",
                    "dataType": "arrayLink",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "tickets",
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
                "firstName": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "lastName": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "ticket_ids": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": true,
                    "configureLinkedCard": {
                        "fields": {
                            "id": {
                                "id": "id",
                                "content": "id",
                                "type": "field",
                                "read": true,
                                "dataType": "id",
                                "format": null,
                                "formatOptions": {}
                            },
                            "internal_number": {
                                "id": "internal_number",
                                "content": "Internal number",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": {}
                            },
                            "subject": {
                                "id": "subject",
                                "content": "Subject",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": {}
                            },
                            "status": {
                                "id": "status",
                                "content": "Status",
                                "type": "field",
                                "read": true,
                                "dataType": "link",
                                "format": null,
                                "formatOptions": {}
                            },
                            "description": {
                                "id": "description",
                                "content": "Description",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": {}
                            }
                        },
                        "fieldParams": {
                            "id": {
                                "include": false,
                                "disableEditing": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "internal_number": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "subject": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "status": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "description": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            }
                        },
                        "fieldOrder": [
                            "id",
                            "internal_number",
                            "subject",
                            "status",
                            "description"
                        ]
                    },
                    "clickableType": "page",
                    "clickableField": "internal_number",
                    "clickableRoute": "fps/{{lastName}}",
                    "veiwOption": "tags",
                    "cartView": {
                        "title": true,
                        "titleField": "internal_number",
                        "price": false,
                        "priceField": null,
                        "quantity": false,
                        "quantityField": null,
                        "status": true,
                        "statusField": "status"
                    },
                    "tableView": {
                        "columns": [
                            {
                                "id": "1710527248643",
                                "field": "id"
                            },
                            {
                                "id": "1710527249141",
                                "field": "status"
                            }
                        ]
                    }
                }
            },
            "columns": {
                "tab-1": {
                    "id": "tab-1",
                    "title": "New section",
                    "fieldIds": [
                        "ticket_ids",
                        "id",
                        "firstName",
                        "lastName"
                    ]
                }
            },
            "columnOrder": [
                "tab-1"
            ],
            "actions": [],
            "cardsOrPage": "card",
            "pathField": "firstName"
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
            "firstName": {
                "include": true,
                "disableEditing": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "lastName": {
                "include": true,
                "disableEditing": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "ticket_ids": {
                "include": true,
                "disableEditing": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": true,
                "configureLinkedCard": {
                    "fields": {
                        "id": {
                            "id": "id",
                            "content": "id",
                            "type": "field",
                            "read": true,
                            "dataType": "id",
                            "format": null,
                            "formatOptions": {}
                        },
                        "internal_number": {
                            "id": "internal_number",
                            "content": "Internal number",
                            "type": "field",
                            "read": true,
                            "dataType": "string",
                            "format": null,
                            "formatOptions": {}
                        },
                        "subject": {
                            "id": "subject",
                            "content": "Subject",
                            "type": "field",
                            "read": true,
                            "dataType": "string",
                            "format": null,
                            "formatOptions": {}
                        },
                        "status": {
                            "id": "status",
                            "content": "Status",
                            "type": "field",
                            "read": true,
                            "dataType": "link",
                            "format": null,
                            "formatOptions": {}
                        },
                        "description": {
                            "id": "description",
                            "content": "Description",
                            "type": "field",
                            "read": true,
                            "dataType": "string",
                            "format": null,
                            "formatOptions": {}
                        }
                    },
                    "fieldParams": {
                        "id": {
                            "include": false,
                            "disableEditing": true,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "internal_number": {
                            "include": true,
                            "disableEditing": false,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "subject": {
                            "include": true,
                            "disableEditing": false,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "status": {
                            "include": true,
                            "disableEditing": false,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "description": {
                            "include": true,
                            "disableEditing": false,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        }
                    },
                    "fieldOrder": [
                        "id",
                        "internal_number",
                        "subject",
                        "status",
                        "description"
                    ]
                },
                "clickableType": "page",
                "clickableField": "internal_number",
                "clickableRoute": "fps/{{lastName}}",
                "veiwOption": "tags",
                "cartView": {
                    "title": true,
                    "titleField": "internal_number",
                    "price": false,
                    "priceField": null,
                    "quantity": false,
                    "quantityField": null,
                    "status": true,
                    "statusField": "status"
                },
                "tableView": {
                    "columns": [
                        {
                            "id": "1710527248643",
                            "field": "id"
                        },
                        {
                            "id": "1710527249141",
                            "field": "status"
                        }
                    ]
                }
            }
        },
        "filterParams": {
            "isFiltering": true,
            "filterFields": {
                "ticket_ids": {
                    "active": true,
                    "dataType": "arrayLink",
                    "format": "",
                    "formatOptions": {},
                    "name": "Tickets",
                    "textsearch": "choice",
                    "linkDirectory": [
                        {
                            "id": "207ae69d-c13c-461f-9695-b3bf54bf6b46",
                            "text": "SD-1001 Срать хочу"
                        },
                        {
                            "id": "0f40c0c6-63f6-48fe-b627-b78509c965f8",
                            "text": "SD-1002 Посрал"
                        },
                        {
                            "id": "28e267fd-d30a-4643-9c9f-849a461026d0",
                            "text": "SD-1003 Принесите мне чаю"
                        },
                        {
                            "id": "aec48e25-29cf-4905-804b-9110da2a51c4",
                            "text": "SD-1004 Нужна новая мышка"
                        }
                    ]
                },
                "lastName": {
                    "active": true,
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "name": "Last name",
                    "exactMatch": "exact"
                },
                "firstName": {
                    "active": true,
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "name": "First name"
                }
            }
        }
    },
    "tableTitle": "",
    "actions": null,
    "headers": [
        {
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
            "array": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false
        },
        {
            "sysName": "firstName",
            "dataType": "string",
            "name": "First name",
            "id": "7",
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
            "array": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false
        },
        {
            "sysName": "lastName",
            "dataType": "string",
            "name": "Last name",
            "id": "6",
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
            "array": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false
        },
        {
            "sysName": "ticket_ids",
            "dataType": "arrayLink",
            "name": "Tickets",
            "id": "16371710512840451",
            "link": "tickets",
            "group": "1710512825600",
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
            "array": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
            "linkType": false,
            "arrayLink": true,
            "indexExists": false
        }
    ],
    "data": [
        {
            "firstName": "Alejandro",
            "lastName": "Cruz",
            "ticket_ids": [
                {
                    "subject": "Срать хочу",
                    "description": "Но некогда",
                    "internal_number": "SD-1001",
                    "id": "207ae69d-c13c-461f-9695-b3bf54bf6b46",
                    "status": {
                        "id": "working",
                        "status": "Working on it"
                    }
                },
                {
                    "subject": "Посрал",
                    "description": "Закрывайте предыдущий тикет",
                    "internal_number": "SD-1002",
                    "id": "0f40c0c6-63f6-48fe-b627-b78509c965f8",
                    "status": {
                        "id": "moderation",
                        "status": "Under moderation"
                    }
                }
            ],
            "id": "manager1@directual.com"
        }
    ],
    "totalPages": 1,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [
        [
            "id",
            99281519
        ],
        [
            "firstName",
            99281519
        ],
        [
            "lastName",
            99281519
        ],
        [
            "ticket_ids.id",
            99289737
        ],
        [
            "ticket_ids.internal_number",
            99289737
        ],
        [
            "ticket_ids.subject",
            99289737
        ],
        [
            "ticket_ids.status.id",
            99289741
        ],
        [
            "ticket_ids.status.status",
            99289741
        ],
        [
            "ticket_ids.description",
            99289737
        ]
    ],
    "writeFields": [],
    "structures": {
        "99281519": {
            "networkID": 19736,
            "id": 99281519,
            "dateCreated": "2024-01-10T14:53:29Z",
            "hidden": false,
            "dateHidden": null,
            "name": "App users",
            "sysName": "WebUser",
            "jsonObject": "[{\"sysName\":\"dateLastActivity\",\"dataType\":\"string\",\"name\":\"dateLastActivity\",\"id\":\"10\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"dateCreated\",\"dataType\":\"string\",\"name\":\"dateCreated\",\"id\":\"13\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"isAuthorization\",\"dataType\":\"boolean\",\"name\":\"isAuthorization\",\"id\":\"9\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"notifications_counter\",\"dataType\":\"string\",\"name\":\"Notifications Counter\",\"id\":\"1\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"custom_labels\",\"dataType\":\"json\",\"name\":\"Custom labels\",\"id\":\"2\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"array\":false,\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"phone\",\"dataType\":\"string\",\"name\":\"Phone\",\"id\":\"12\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"email\",\"dataType\":\"string\",\"name\":\"Email\",\"id\":\"11\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"userpic\",\"dataType\":\"file\",\"name\":\"User pic\",\"id\":\"3\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":{},\"groupName\":\"Contacts\",\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"Username (login)\",\"id\":\"15\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"role\",\"dataType\":\"array\",\"name\":\"Roles\",\"id\":\"8\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"password\",\"dataType\":\"string\",\"name\":\"Password (hash)\",\"id\":\"14\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"firstName\",\"dataType\":\"string\",\"name\":\"First name\",\"id\":\"7\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"lastName\",\"dataType\":\"string\",\"name\":\"Last name\",\"id\":\"6\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"gender\",\"dataType\":\"string\",\"name\":\"Gender\",\"id\":\"5\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"isBlocked\",\"dataType\":\"boolean\",\"name\":\"Block user\",\"id\":\"4\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"systemMessage\",\"dataType\":\"string\",\"name\":\"System message\",\"id\":\"56921641637265680\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"secret\",\"dataType\":\"string\",\"name\":\"secret\",\"id\":\"81131636839496227\",\"link\":\"\",\"group\":\"1636839487957\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"notif_Email\",\"dataType\":\"boolean\",\"name\":\"Notify me by Email\",\"id\":\"61231639915065277\",\"link\":\"\",\"group\":\"1639915049523\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Yes\",\"No\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"ticket_ids\",\"dataType\":\"arrayLink\",\"name\":\"Tickets\",\"id\":\"16371710512840451\",\"link\":\"tickets\",\"group\":\"1710512825600\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false}]",
            "jsonGroupSettings": "[{\"id\":1710512825600,\"name\":\"Service desk\",\"order\":4},{\"id\":1636839487957,\"name\":\"Password restoring\",\"order\":2},{\"id\":-1776115286,\"name\":\"System fields (LEGACY)\",\"order\":3},{\"id\":1639915049523,\"name\":\"Notifications\",\"order\":1},{\"id\":-502807437,\"name\":\"Contacts\",\"order\":0}]",
            "jsonViewIdSettings": "[{\"sysName\":\"firstName\"},{\"sysName\":\"lastName\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-03-15T14:27:34Z",
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
                "array": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            "folderId": null
        },
        "99289737": {
            "networkID": 19736,
            "id": 99289737,
            "dateCreated": "2024-02-11T12:37:17Z",
            "hidden": false,
            "dateHidden": null,
            "name": "Tickets",
            "sysName": "tickets",
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"email\",\"dataType\":\"string\",\"name\":\"Email\",\"id\":\"57781707655041505\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"email\",\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"subject\",\"dataType\":\"string\",\"name\":\"Subject\",\"id\":\"87201707655050079\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"description\",\"dataType\":\"string\",\"name\":\"Description\",\"id\":\"91941707655057838\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"priority\",\"dataType\":\"json\",\"name\":\"Priority\",\"id\":\"68501707655073618\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"radioOptions\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"multipleChoice\":[{\"value\":\"low\",\"label\":\"Low\"},{\"value\":\"regular\",\"label\":\"Regular\"},{\"value\":\"high\",\"label\":\"🔥 High\"}]},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"files\",\"dataType\":\"file\",\"name\":\"Attach relevant files\",\"id\":\"89941707655124325\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"multipleFiles\",\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"internal_number\",\"dataType\":\"string\",\"name\":\"Internal number\",\"id\":\"70091707656698254\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"date_raised\",\"dataType\":\"date\",\"name\":\"Date raised\",\"id\":\"25281707655156851\",\"link\":\"\",\"group\":\"1707655162019\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"MMM DD\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"date_due\",\"dataType\":\"date\",\"name\":\"Due date\",\"id\":\"76811707655179999\",\"link\":\"\",\"group\":\"1707655162019\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"MMM DD\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"manager_id\",\"dataType\":\"link\",\"name\":\"Manager\",\"id\":\"36921707655169804\",\"link\":\"WebUser\",\"group\":\"1707655162019\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"prev_manager_id\",\"dataType\":\"link\",\"name\":\"Previous manager\",\"id\":\"69611709124076159\",\"link\":\"WebUser\",\"group\":\"1707655162019\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"comment_ids\",\"dataType\":\"arrayLink\",\"name\":\"Comments\",\"id\":\"17041707655231809\",\"link\":\"tickets_comments\",\"group\":\"1707655162019\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false},{\"sysName\":\"event_ids\",\"dataType\":\"arrayLink\",\"name\":\"Changelog\",\"id\":\"39961707655238067\",\"link\":\"tickets_changelog\",\"group\":\"1707655162019\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false},{\"sysName\":\"status\",\"dataType\":\"link\",\"name\":\"Status\",\"id\":\"66011707656077772\",\"link\":\"ticket_statuses\",\"group\":\"1707655162019\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"prev_status\",\"dataType\":\"link\",\"name\":\"Previous status\",\"id\":\"59601709123226785\",\"link\":\"ticket_statuses\",\"group\":\"1707655162019\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"changed_by\",\"dataType\":\"link\",\"name\":\"Changed by\",\"id\":\"32101709125002752\",\"link\":\"WebUser\",\"group\":\"1707655162019\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"priority_cell_color\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"77871707655517886\",\"link\":\"\",\"group\":\"1707655519815\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"status_cell_color\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"68401707655558604\",\"link\":\"\",\"group\":\"1707655519815\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"sync_processing_result\",\"dataType\":\"boolean\",\"name\":\"\",\"id\":\"51851707656627589\",\"link\":\"\",\"group\":\"1707655519815\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"sync_processing_title\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"21361707656647074\",\"link\":\"\",\"group\":\"1707655519815\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"sync_processing_text\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"30541707656654334\",\"link\":\"\",\"group\":\"1707655519815\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"weight\",\"dataType\":\"decimal\",\"name\":\"\",\"id\":\"82001710265018884\",\"link\":\"\",\"group\":\"1707655519815\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false}]",
            "jsonGroupSettings": "[{\"id\":1707655162019,\"name\":\"Processing\",\"order\":0},{\"id\":1707655519815,\"name\":\"Technical fields\",\"order\":1}]",
            "jsonViewIdSettings": "[{\"sysName\":\"internal_number\"},{\"sysName\":\"subject\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-03-12T17:37:05Z",
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
                "array": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            "folderId": 33787880
        },
        "99289741": {
            "networkID": 19736,
            "id": 99289741,
            "dateCreated": "2024-02-11T12:46:32Z",
            "hidden": false,
            "dateHidden": null,
            "name": "Ticket statuses",
            "sysName": "ticket_statuses",
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"status\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"97511707655598067\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"color\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"19121707655598571\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"status\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-02-11T12:46:50Z",
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
                "array": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            "folderId": 33792275
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
    locale: 'ENG',
    onChange: value => console.log(value),
    handleRoute: value => e => console.log("route => " + value),
  },
};
