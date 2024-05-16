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
    "sl": "newRequest",
    "pageSize": "10",
    "headerField": null,
    "params": {
        "steps": [
            {
                "id": "default_step",
                "sysName": "default step",
                "elements": [
                    {
                        "id": "elmnt_1715508401601",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17155084045190.12034124333143401220314",
                                "_input_type": "state",
                                "_state_field": "test",
                                "_edit_state_type": "buttons",
                                "_edit_state_manual_json": "manual",
                                "_edit_state_json_source": "options",
                                "_edit_state_options": [
                                    {
                                        "key": "step1",
                                        "value": "ШАГ 1"
                                    },
                                    {
                                        "key": "step2",
                                        "value": "ШАГ 2"
                                    }
                                ],
                                "_edit_state_pedal_stretch": true,
                                "_edit_state_pedal_width": 350
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1715583082804",
                        "type": "submit"
                    }
                ]
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
        "actions": [
            {
                "id": "action_1715501953817",
                "name": "open popup",
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1715501959561",
                        "field": "FormState.popup",
                        "value": "popup1"
                    }
                ]
            },
            {
                "id": "action_1715502005947",
                "name": "close popup",
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1715502024146",
                        "field": "FormState.popup"
                    }
                ]
            },
            {
                "id": "action_1715505782080",
                "name": "go to popup2",
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1715505788737",
                        "field": "FormState.popup",
                        "value": "popup2"
                    }
                ]
            }
        ],
        "general": {
            "showState": true,
            "closePopupOnClick": true,
            "edittingOn": false,
            "showModel": true,
            "saveState": false,
            "saveStateTo": "storeState",
            "restoreState": false
        },
        "popup_width": 200,
        "state": {
            "step": "default step",
            "popup": null,
            "test": ""
        }
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
            "arrayLink": false,
            "json": false,
            "linkOrArrayLinkType": false,
            "typeVariable": {},
            "indexExists": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "people",
            "dataType": "arrayLink",
            "name": "people",
            "id": "28621715333642402",
            "link": "people",
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
            "arrayLink": true,
            "json": false,
            "linkOrArrayLinkType": true,
            "typeVariable": {},
            "indexExists": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "name",
            "dataType": "link",
            "name": "People",
            "id": "68451715022511853",
            "link": "people",
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
            "arrayLink": false,
            "json": false,
            "linkOrArrayLinkType": true,
            "typeVariable": {},
            "indexExists": false,
            "linkType": true,
            "array": false
        },
        {
            "sysName": "gender",
            "dataType": "link",
            "name": "Whom are you looking for?",
            "id": "66281715022483586",
            "link": "gender",
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
            "arrayLink": false,
            "json": false,
            "linkOrArrayLinkType": true,
            "typeVariable": {},
            "indexExists": false,
            "linkType": true,
            "array": false
        },
        {
            "sysName": "options",
            "dataType": "json",
            "name": "",
            "id": "40321715508164793",
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
            "arrayLink": false,
            "json": true,
            "linkOrArrayLinkType": false,
            "typeVariable": {},
            "indexExists": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "storeState",
            "dataType": "json",
            "name": "",
            "id": "43151715508157761",
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
            "arrayLink": false,
            "json": true,
            "linkOrArrayLinkType": false,
            "typeVariable": {},
            "indexExists": false,
            "linkType": false,
            "array": false
        }
    ],
    "data": [
        {
            "people": [
                {
                    "name": "Peter",
                    "id": "9100a8fb-4743-402a-b1f1-0081c7e2e777"
                },
                {
                    "name": "Paul",
                    "id": "ac32238e-e7cd-4038-90eb-752f97edbaf6"
                }
            ],
            "options": "[\n   {\n      \"key\": \"foo\",\n      \"value\": \"_foo\"\n   },\n   {\n      \"key\": \"bar\",\n      \"value\": \"_bar\"\n   }\n]",
            "storeState": "{\n   \"test\": \"hello world!\"\n}",
            "id": "8eaea1be-a6f4-461d-96ee-9b7aeadf1114"
        }
    ],
    "totalPages": 1,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [
        [
            "id",
            99310333
        ],
        [
            "people.id",
            99310332
        ],
        [
            "people.name",
            99310332
        ],
        [
            "name.id",
            99310332
        ],
        [
            "name.name",
            99310332
        ],
        [
            "gender.id",
            99310331
        ],
        [
            "gender.gender",
            99310331
        ],
        [
            "options",
            99310333
        ],
        [
            "storeState",
            99310333
        ]
    ],
    "writeFields": [
        "name",
        "gender",
        "people",
        "id",
        "options",
        "storeState"
    ],
    "structures": {
        "99310331": {
            "networkID": 20686,
            "id": 99310331,
            "dateCreated": "2024-05-06T18:33:58Z",
            "hidden": false,
            "dateHidden": null,
            "name": "gender",
            "sysName": "gender",
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"gender\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"35891715020441941\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"gender\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-05-06T18:34:06Z",
            "createBy": 1,
            "changedBy": 1,
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
                "formatOptions": {},
                "groupName": null,
                "arrayLink": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "typeVariable": {},
                "indexExists": false,
                "linkType": false,
                "array": false
            },
            "objectIDSysName": "id",
            "folderId": null
        },
        "99310332": {
            "networkID": 20686,
            "id": 99310332,
            "dateCreated": "2024-05-06T19:05:49Z",
            "hidden": false,
            "dateHidden": null,
            "name": "people",
            "sysName": "people",
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"gender\",\"dataType\":\"link\",\"name\":\"\",\"id\":\"44461715022352603\",\"link\":\"gender\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":true,\"json\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"name\",\"dataType\":\"string\",\"name\":\"Name\",\"id\":\"91911715022364368\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"name\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-05-06T19:06:14Z",
            "createBy": 1,
            "changedBy": 1,
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
                "formatOptions": {},
                "groupName": null,
                "arrayLink": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "typeVariable": {},
                "indexExists": false,
                "linkType": false,
                "array": false
            },
            "objectIDSysName": "id",
            "folderId": null
        },
        "99310333": {
            "networkID": 20686,
            "id": 99310333,
            "dateCreated": "2024-05-06T19:07:59Z",
            "hidden": false,
            "dateHidden": null,
            "name": "request",
            "sysName": "request",
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"array\":false},{\"sysName\":\"people\",\"dataType\":\"arrayLink\",\"name\":\"people\",\"id\":\"28621715333642402\",\"link\":\"people\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"array\":false},{\"sysName\":\"options\",\"dataType\":\"json\",\"name\":\"\",\"id\":\"40321715508164793\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"array\":false},{\"sysName\":\"storeState\",\"dataType\":\"json\",\"name\":\"\",\"id\":\"43151715508157761\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"array\":false},{\"sysName\":\"gender\",\"dataType\":\"link\",\"name\":\"Whom are you looking for?\",\"id\":\"66281715022483586\",\"link\":\"gender\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"array\":false},{\"sysName\":\"name\",\"dataType\":\"link\",\"name\":\"People\",\"id\":\"68451715022511853\",\"link\":\"people\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"array\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": null,
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-05-12T10:02:53Z",
            "createBy": 1,
            "changedBy": 1,
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
                "formatOptions": {},
                "groupName": null,
                "arrayLink": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "typeVariable": {},
                "indexExists": false,
                "linkType": false,
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
            "sysName": "name",
            "dataType": "link",
            "name": "People",
            "id": "68451715022511853",
            "link": "people",
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
            "arrayLink": false,
            "json": false,
            "linkOrArrayLinkType": true,
            "typeVariable": {},
            "indexExists": false,
            "linkType": true,
            "array": false
        },
        {
            "sysName": "gender",
            "dataType": "link",
            "name": "Whom are you looking for?",
            "id": "66281715022483586",
            "link": "gender",
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
            "arrayLink": false,
            "json": false,
            "linkOrArrayLinkType": true,
            "typeVariable": {},
            "indexExists": false,
            "linkType": true,
            "array": false
        },
        {
            "sysName": "people",
            "dataType": "arrayLink",
            "name": "people",
            "id": "28621715333642402",
            "link": "people",
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
            "arrayLink": true,
            "json": false,
            "linkOrArrayLinkType": true,
            "typeVariable": {},
            "indexExists": false,
            "linkType": false,
            "array": false
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
            "formatOptions": {},
            "groupName": null,
            "arrayLink": false,
            "json": false,
            "linkOrArrayLinkType": false,
            "typeVariable": {},
            "indexExists": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "options",
            "dataType": "json",
            "name": "",
            "id": "40321715508164793",
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
            "arrayLink": false,
            "json": true,
            "linkOrArrayLinkType": false,
            "typeVariable": {},
            "indexExists": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "storeState",
            "dataType": "json",
            "name": "",
            "id": "43151715508157761",
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
            "arrayLink": false,
            "json": true,
            "linkOrArrayLinkType": false,
            "typeVariable": {},
            "indexExists": false,
            "linkType": false,
            "array": false
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
