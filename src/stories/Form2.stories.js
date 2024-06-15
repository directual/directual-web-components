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
                "id": "step_1716390177590",
                "sysName": "progress",
                "elements": [
                    {
                        "id": "elmnt_1716390181363",
                        "type": "steps",
                        "_formSteps": {
                            "stepsOrder": [
                                "step1",
                                "step2",
                                "step3"
                            ],
                            "settings": {
                                "steps": {
                                    "step1": true,
                                    "step2": true,
                                    "step3": true
                                }
                            },
                            "stepSettings": {
                                "step1": {
                                    "title": "Step 1",
                                    "description": "Step description"
                                },
                                "step2": {
                                    "title": "Step 2"
                                },
                                "step3": {
                                    "title": "Step 3"
                                }
                            }
                        }
                    }
                ],
                "sectionVisibility": "always"
            },
            {
                "id": "step_1715854081782",
                "sysName": "step1",
                "elements": [
                    {
                        "id": "elmnt_1715854087662",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17158540903060.024230014112004323432101",
                                "_field": "people",
                                "_field_arrayLink_type": "select",
                                "_field_arrayLink_endpoint": "getPeopleDropdown",
                                "_field_hidden": false,
                                "_field_link_pageSize": null,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718471084257",
                                        "_conditionalView_field": "FormState.pedal",
                                        "_conditionalView_operator": "==",
                                        "_conditionalView_value": "1"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": false,
                        "_conditionalView_disable_or_hide": "disable",
                        "_conditions": [
                            {
                                "id": "condition_1718470365215",
                                "_conditionalView_field": "FormState.pedal",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "1"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1716387998746",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17163880005370.30034130114414220304422",
                                "_action": "action_1715849919348",
                                "_action_label": "Next step",
                                "_action_button_type": "accent",
                                "_action_icon": "forward",
                                "_conditionalView": true,
                                "_action_conditional_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1716390475925",
                                        "_conditionalView_operator": "modelNotChanged"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718470308660",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17184703105740.41120114034310410244403",
                                "_input_type": "state",
                                "_state_field": "pedal",
                                "_edit_state_type": "buttons",
                                "_edit_state_options": [
                                    {
                                        "key": "1",
                                        "value": "1"
                                    },
                                    {
                                        "key": "2",
                                        "value": "2"
                                    }
                                ]
                            }
                        ]
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
            },
            {
                "id": "step_1716390164650",
                "sysName": "step2",
                "elements": [
                    {
                        "id": "elmnt_1716390287766",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17163902897620.0031214142333144424043004",
                                "_input_type": "state",
                                "_state_field": "Name"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_1716390174036",
                "sysName": "step3"
            }
        ],
        "actions": [
            {
                "id": "action_1715849919348",
                "name": "create new user",
                "discardModel": false,
                "resetModel": false,
                "autoAction": false,
                "autoAction_delay": 2,
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1716387955293",
                        "field": "FormState.step",
                        "value": "step2"
                    }
                ]
            }
        ],
        "general": {
            "showState": false,
            "closePopupOnClick": true,
            "edittingOn": false,
            "showModel": false,
            "saveState": false,
            "saveStateTo": "storeState",
            "restoreState": true
        },
        "popup_width": 200,
        "state": {
            "step": "step1",
            "popup": null,
            "Name": "",
            "pedal": "1"
        },
        "hideActionsHint": true,
        "hideHint": true
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false,
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
            "linkOrArrayLinkType": true,
            "linkType": false,
            "arrayLink": true,
            "indexExists": false,
            "typeVariable": {},
            "json": false,
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false,
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false,
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": true,
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": true,
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
            "sysName": "gender",
            "name": "gender",
            "id": 99310331,
            "dateCreated": "2024-05-06T18:33:58Z",
            "hidden": false,
            "dateHidden": null,
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "array": false
            },
            "objectIDSysName": "id",
            "folderId": null
        },
        "99310332": {
            "networkID": 20686,
            "sysName": "people",
            "name": "people",
            "id": 99310332,
            "dateCreated": "2024-05-06T19:05:49Z",
            "hidden": false,
            "dateHidden": null,
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "array": false
            },
            "objectIDSysName": "id",
            "folderId": null
        },
        "99310333": {
            "networkID": 20686,
            "sysName": "request",
            "name": "request",
            "id": 99310333,
            "dateCreated": "2024-05-06T19:07:59Z",
            "hidden": false,
            "dateHidden": null,
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false,
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false,
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
            "linkOrArrayLinkType": true,
            "linkType": false,
            "arrayLink": true,
            "indexExists": false,
            "typeVariable": {},
            "json": false,
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false,
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": true,
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": true,
            "array": false
        }
    ],
    "quickSearch": null,
    "httpParams": null,
    "cardCustomHtml": null,
    "cardCustomLayout": null,
    "comment": null,
    "response": null
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
