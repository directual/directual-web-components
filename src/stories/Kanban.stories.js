import 'mapbox-gl/dist/mapbox-gl.css'
import FpsKanban from '../components/fps/viewobjects/kanban/FpsKanban'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

export default {
  title: 'FPS/Components/Kanban',
  component: FpsKanban,
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
    "sl": "testTable",
    "pageSize": "10",
    "headerField": null,
    "params": {
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
                    "name": "Type",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "link": "types"
                },
                {
                    "fieldSysName": "types",
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
                    "sysName": "types",
                    "name": "Types",
                    "dataType": "arrayLink",
                    "format": "",
                    "formatOptions": {},
                    "link": "types"
                },
                {
                    "fieldSysName": "title",
                    "fetch": [],
                    "sysName": "title",
                    "name": "Title",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "date",
                    "fetch": [],
                    "sysName": "date",
                    "name": "",
                    "dataType": "date",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "weight",
                    "fetch": [],
                    "sysName": "weight",
                    "name": "",
                    "dataType": "decimal",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                }
            ],
            "writeFields": [
                {
                    "fieldSysName": "weight",
                    "fetch": [],
                    "sysName": "weight",
                    "name": "",
                    "dataType": "decimal",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
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
                    "fieldSysName": "type",
                    "fetch": [],
                    "sysName": "type",
                    "name": "Type",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "link": "types"
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
                    "write": true,
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "type": {
                    "id": "type",
                    "content": "Type",
                    "type": "field",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": "types",
                    "actions": []
                },
                "types": {
                    "id": "types",
                    "content": "Types",
                    "type": "field",
                    "dataType": "arrayLink",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "types",
                    "actions": []
                },
                "title": {
                    "id": "title",
                    "content": "Title",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "date": {
                    "id": "date",
                    "content": "",
                    "type": "field",
                    "dataType": "date",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "weight": {
                    "id": "weight",
                    "content": "",
                    "type": "field",
                    "dataType": "decimal",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
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
                "type": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "types": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "title": {
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
                },
                "weight": {
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
                        "type",
                        "types",
                        "title",
                        "date",
                        "weight"
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
            "type": {
                "include": true,
                "disableEditing": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "types": {
                "include": true,
                "disableEditing": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "title": {
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
            },
            "weight": {
                "include": true,
                "disableEditing": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            }
        },
        "kanbanParams": {
            "columnField": "type",
            "columnsStruct": "types",
            "sortField": "weight",
            "columnsOption": "endpoint",
            "columns": [
                {
                    "id": "1",
                    "name": "раз"
                },
                {
                    "id": "2",
                    "name": "два"
                },
                {
                    "id": "3",
                    "name": "три"
                }
            ],
            "columnsVisibility": {},
            "endpoint": "filterTypes"
        }
    },
    "tableTitle": "",
    "actions": null,
    "headers": [
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
            "formatOptions": {},
            "groupName": null,
            "array": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false
        },
        {
            "sysName": "type",
            "name": "Type",
            "dataType": "link",
            "id": "52051715859147835",
            "link": "types",
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
            "array": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false
        },
        {
            "sysName": "types",
            "name": "Types",
            "dataType": "arrayLink",
            "id": "31981715859158032",
            "link": "types",
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
            "formatOptions": {},
            "groupName": null,
            "array": false,
            "linkOrArrayLinkType": true,
            "linkType": false,
            "arrayLink": true,
            "typeVariable": {},
            "json": false,
            "indexExists": false
        },
        {
            "sysName": "title",
            "name": "Title",
            "dataType": "string",
            "id": "54811715859141654",
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
            "formatOptions": {},
            "groupName": null,
            "array": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false
        },
        {
            "sysName": "date",
            "name": "",
            "dataType": "date",
            "id": "40301715861056784",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false
        },
        {
            "sysName": "weight",
            "name": "",
            "dataType": "decimal",
            "id": "42411716286735457",
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
            "array": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false
        }
    ],
    "data": [
        {
            "id": "75937849-64a8-4621-b06c-430f5e596621",
            "date": 1715720400000,
            "title": "ще не вмерла усраина",
            "type": {
                "id": "2",
                "type": "два"
            },
            "types": [
                {
                    "type": "два",
                    "id": "2"
                },
                {
                    "type": "три",
                    "id": "3"
                }
            ]
        },
        {
            "id": "b43612c2-91c3-4145-8a72-df1e86450b34",
            "date": 1714942800000,
            "title": "еби хохлов — спасай Россию",
            "type": {
                "id": "1",
                "type": "раз"
            },
            "types": [
                {
                    "type": "раз",
                    "id": "1"
                },
                {
                    "type": "три",
                    "id": "3"
                }
            ]
        }
    ],
    "totalPages": 1,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [
        [
            "id",
            99312189
        ],
        [
            "type.id",
            99312190
        ],
        [
            "type.type",
            99312190
        ],
        [
            "types.id",
            99312190
        ],
        [
            "types.type",
            99312190
        ],
        [
            "title",
            99312189
        ],
        [
            "date",
            99312189
        ],
        [
            "weight",
            99312189
        ]
    ],
    "writeFields": [
        "weight",
        "id",
        "type"
    ],
    "structures": {
        "99312189": {
            "networkID": 20570,
            "id": 99312189,
            "dateCreated": "2024-05-16T11:31:34Z",
            "hidden": false,
            "dateHidden": null,
            "name": "objects",
            "sysName": "objects",
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"types\",\"name\":\"Types\",\"dataType\":\"arrayLink\",\"id\":\"31981715859158032\",\"link\":\"types\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"date\",\"name\":\"\",\"dataType\":\"date\",\"id\":\"40301715861056784\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"weight\",\"name\":\"\",\"dataType\":\"decimal\",\"id\":\"42411716286735457\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"type\",\"name\":\"Type\",\"dataType\":\"link\",\"id\":\"52051715859147835\",\"link\":\"types\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"title\",\"name\":\"Title\",\"dataType\":\"string\",\"id\":\"54811715859141654\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": null,
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-05-21T10:19:02Z",
            "createBy": 21,
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
                "formatOptions": {},
                "groupName": null,
                "array": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false
            },
            "folderId": null
        },
        "99312190": {
            "networkID": 20570,
            "id": 99312190,
            "dateCreated": "2024-05-16T11:31:41Z",
            "hidden": false,
            "dateHidden": null,
            "name": "types",
            "sysName": "types",
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"indexExists\":false},{\"sysName\":\"type\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"36981715859104914\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"indexExists\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"type\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-05-16T11:31:49Z",
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
                "formatOptions": {},
                "groupName": null,
                "array": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false
            },
            "folderId": null
        }
    },
    "isSuccessWrite": false,
    "writeError": null,
    "writeResponse": null,
    "fileds": [
        {
            "sysName": "weight",
            "name": "",
            "dataType": "decimal",
            "id": "42411716286735457",
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
            "array": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
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
            "formatOptions": {},
            "groupName": null,
            "array": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false
        },
        {
            "sysName": "type",
            "name": "Type",
            "dataType": "link",
            "id": "52051715859147835",
            "link": "types",
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
            "array": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false
        }
    ],
    "quickSearch": null,
    "httpParams": {},
    "cardCustomHtml": null,
    "cardCustomLayout": null,
    "comment": null
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
    handleRoute: value => e => console.log("route => " + value),
  },
};
