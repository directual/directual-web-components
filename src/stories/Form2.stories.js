import 'mapbox-gl/dist/mapbox-gl.css'
import FpsForm2 from '../components/fps/dataentry/form/FpsForm2'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

export default {
  title: 'FPS/Components/Multistep Form',
  component: FpsForm2,
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

let exampleForm = {
    "sl": "usersbyrols",
    "pageSize": "10",
    "headerField": null,
    "params": {
        "steps": [
            {
                "id": "step_one",
                "sysName": "default step",
                "elements": []
            },
            {
                "id": "step_submitted",
                "sysName": "submitted",
                "elements": [
                    {
                        "id": "elmnt_1712052683797",
                        "type": "hint",
                        "hintColor": "ok",
                        "hintTitle": "Thank you!",
                        "hintText": "Submitted"
                    }
                ]
            }
        ],
        "general": {
            "edittingOn": false
        }
    },
    "tableTitle": null,
    "actions": null,
    "headers": [
        {
            "sysName": "id",
            "name": "Username (login)",
            "dataType": "id",
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
            "linkType": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "indexExists": false
        },
        {
            "sysName": "firstName",
            "name": "First name",
            "dataType": "string",
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
            "linkType": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "indexExists": false
        },
        {
            "sysName": "lastName",
            "name": "Last name",
            "dataType": "string",
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
            "linkType": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "indexExists": false
        },
        {
            "sysName": "Class",
            "name": "Класс",
            "dataType": "link",
            "id": "98141713089796004",
            "link": "groups",
            "group": "1713089785235",
            "tags": null,
            "indexing": true,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 0,
            "linkIndexFieldSysName": [
                "class",
                "id"
            ],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "array": false,
            "linkType": true,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
            "arrayLink": false,
            "indexExists": true
        },
        {
            "sysName": "role",
            "name": "Roles",
            "dataType": "array",
            "id": "8",
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
            "array": true,
            "linkType": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "indexExists": false
        }
    ],
    "data": [
        {
            "lastName": "Шипигузов",
            "firstName": "Николай",
            "id": "higolol@yandex.ru"
        }
    ],
    "totalPages": 1,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [
        [
            "id",
            99305002
        ],
        [
            "firstName",
            99305002
        ],
        [
            "lastName",
            99305002
        ],
        [
            "Class",
            99305002
        ],
        [
            "role",
            99305002
        ]
    ],
    "writeFields": [
        "role",
        "Class",
        "id"
    ],
    "structures": {
        "99305002": {
            "networkID": 20582,
            "sysName": "WebUser",
            "name": "App users",
            "id": 99305002,
            "dateCreated": "2024-04-09T08:16:29Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"dateLastActivity\",\"name\":\"dateLastActivity\",\"dataType\":\"string\",\"id\":\"10\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"array\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"dateCreated\",\"name\":\"dateCreated\",\"dataType\":\"string\",\"id\":\"13\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"array\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"isAuthorization\",\"name\":\"isAuthorization\",\"dataType\":\"boolean\",\"id\":\"9\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"array\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"notifications_counter\",\"name\":\"Notifications Counter\",\"dataType\":\"string\",\"id\":\"1\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"array\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"custom_labels\",\"name\":\"Custom labels\",\"dataType\":\"json\",\"id\":\"2\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"array\":false,\"linkType\":false,\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"phone\",\"name\":\"Phone\",\"dataType\":\"string\",\"id\":\"12\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"array\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"email\",\"name\":\"Email\",\"dataType\":\"string\",\"id\":\"11\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"array\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"userpic\",\"name\":\"User pic\",\"dataType\":\"file\",\"id\":\"3\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":{},\"groupName\":\"Contacts\",\"array\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"id\",\"name\":\"Username (login)\",\"dataType\":\"id\",\"id\":\"15\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"role\",\"name\":\"Roles\",\"dataType\":\"array\",\"id\":\"8\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":true,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"password\",\"name\":\"Password (hash)\",\"dataType\":\"string\",\"id\":\"14\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"firstName\",\"name\":\"First name\",\"dataType\":\"string\",\"id\":\"7\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"lastName\",\"name\":\"Last name\",\"dataType\":\"string\",\"id\":\"6\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"gender\",\"name\":\"Gender\",\"dataType\":\"string\",\"id\":\"5\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"isBlocked\",\"name\":\"Block user\",\"dataType\":\"boolean\",\"id\":\"4\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"systemMessage\",\"name\":\"System message\",\"dataType\":\"string\",\"id\":\"56921641637265680\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"secret\",\"name\":\"secret\",\"dataType\":\"string\",\"id\":\"81131636839496227\",\"link\":\"\",\"group\":\"1636839487957\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"notif_Email\",\"name\":\"Notify me by Email\",\"dataType\":\"boolean\",\"id\":\"61231639915065277\",\"link\":\"\",\"group\":\"1639915049523\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Yes\",\"No\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"Class\",\"name\":\"Класс\",\"dataType\":\"link\",\"id\":\"98141713089796004\",\"link\":\"groups\",\"group\":\"1713089785235\",\"tags\":null,\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[\"class\",\"id\"],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"indexExists\":true},{\"sysName\":\"t1\",\"name\":\"Task\",\"dataType\":\"arrayLink\",\"id\":\"76671713265494758\",\"link\":\"assessment\",\"group\":\"1713089785235\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"indexExists\":false},{\"sysName\":\"MarksA\",\"name\":\"Оценки по критерию А\",\"dataType\":\"arrayLink\",\"id\":\"51401713670095371\",\"link\":\"assessment\",\"group\":\"1713089785235\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"indexExists\":false},{\"sysName\":\"MarksB\",\"name\":\"Оценки по критерию В\",\"dataType\":\"arrayLink\",\"id\":\"18821713670150595\",\"link\":\"assessment\",\"group\":\"1713089785235\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"indexExists\":false}]",
            "jsonGroupSettings": "[{\"id\":1636839487957,\"name\":\"Password restoring\",\"order\":2},{\"id\":1713089785235,\"name\":\"School\",\"order\":4},{\"id\":-1776115286,\"name\":\"System fields (LEGACY)\",\"order\":3},{\"id\":1639915049523,\"name\":\"Notifications\",\"order\":1},{\"id\":-502807437,\"name\":\"Contacts\",\"order\":0}]",
            "jsonViewIdSettings": "[{\"sysName\":\"firstName\"},{\"sysName\":\"lastName\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-04-21T03:30:15Z",
            "createBy": 0,
            "changedBy": 23982,
            "_settings": null,
            "_nativeIndexSettings": null,
            "objectIDSysName": "id",
            "innerIDField": {
                "sysName": "id",
                "name": "Username (login)",
                "dataType": "id",
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
                "linkType": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
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
            "sysName": "role",
            "name": "Roles",
            "dataType": "array",
            "id": "8",
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
            "array": true,
            "linkType": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "indexExists": false
        },
        {
            "sysName": "Class",
            "name": "Класс",
            "dataType": "link",
            "id": "98141713089796004",
            "link": "groups",
            "group": "1713089785235",
            "tags": null,
            "indexing": true,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 0,
            "linkIndexFieldSysName": [
                "class",
                "id"
            ],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "array": false,
            "linkType": true,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
            "arrayLink": false,
            "indexExists": true
        },
        {
            "sysName": "id",
            "name": "Username (login)",
            "dataType": "id",
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
            "linkType": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "indexExists": false
        }
    ],
    "quickSearch": null,
    "httpParams": null,
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
    data: exampleForm,
    auth: authExample,
    locale: 'ESP',
    onChange: value => console.log(value),
  },
};
