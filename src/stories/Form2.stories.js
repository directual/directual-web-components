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
    "sl": "check",
    "pageSize": "10",
    "headerField": null,
    "params": {
        "steps": [
            {
                "id": "default_step",
                "sysName": "default step",
                "elements": [
                    {
                        "id": "elmnt_1731060532260",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17310605354620.214240043334013311441042",
                                "_field": "text",
                                "_field_required": true
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1731060537831",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17310605395640.1421202100410333110303",
                                "_action": "action_1731073718074",
                                "_action_standardRequired": true
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
                        "id": "elmnt_1731060611993",
                        "type": "hint",
                        "hintText": "{{FormState.message}}"
                    },
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
                "id": "step_1731073729664",
                "sysName": "pop",
                "elements": [
                    {
                        "id": "elmnt_1731073731081",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17310737456120.33430122334420242031243",
                                "_field": "ddd",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "dd",
                                "_field_required": true
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1731079381686",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17310793838560.33440340441012422212032",
                                "_field": "text2",
                                "_field_required": true
                            }
                        ],
                        "_conditionalView": true,
                        "_action_conditionals_manual": "manual",
                        "_conditions": [
                            {
                                "id": "condition_1731079425004",
                                "_conditionalView_field": "ddd",
                                "_conditionalView_operator": "isNotNull"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1731074059536",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17310740647880.040402244400143023210022",
                                "_action": "action_1731060541586",
                                "_action_standardRequired": true,
                                "_action_label": "стандартные поля"
                            },
                            {
                                "id": "17310815108980.20343141214004304224122",
                                "_action": "action_1731060541586",
                                "_action_label": "кастомные",
                                "_action_standardRequired": false,
                                "_action_customRequired": true,
                                "_action_customRequired_fields": [
                                    "ddd",
                                    "text2"
                                ]
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": [
                            {
                                "id": "condition_1731076548057",
                                "_conditionalView_field": "text",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "1"
                            }
                        ],
                        "_actions_in_a_row": 2,
                        "_input_actions_in_a_row_column": "line",
                        "_stretch_buttons": false,
                        "_input_actions_alignment": "right"
                    },
                    {
                        "id": "elmnt_1731081528160",
                        "type": "submit"
                    }
                ]
            }
        ],
        "hideHint": true,
        "actions": [
            {
                "id": "action_1731060541586",
                "name": "commit",
                "actionType": "state",
                "stateMapping": [],
                "actionSubmit": true
            },
            {
                "id": "action_1731073718074",
                "name": "popup",
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1731073722125",
                        "field": "FormState.popup",
                        "value": "pop"
                    }
                ]
            }
        ],
        "state": {
            "step": "default step",
            "popup": null,
            "message": ""
        },
        "general": {
            "closePopupOnClick": true
        },
        "popup_width": 600
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
            "array": false,
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
            "id": "1"
        },
        {
            "id": "f3e3d0be-eeb5-417d-921d-ef40220dc680"
        },
        {
            "id": "9a3b09f4-bfde-4b3e-b86b-42c7bafb821a"
        },
        {
            "id": "244cc241-4f73-4a58-8ce8-4f0b9cea45f6"
        }
    ],
    "totalPages": 1,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [
        [
            "id",
            99354115
        ]
    ],
    "writeFields": [
        "text",
        "ddd",
        "text2"
    ],
    "structures": {
        "99354115": {
            "networkID": 22386,
            "sysName": "trigger",
            "name": "trigger",
            "id": 99354115,
            "dateCreated": "2024-11-07T08:33:50Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"text2\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"33501731077950006\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"ddd\",\"dataType\":\"link\",\"name\":\"\",\"id\":\"38781731073755334\",\"link\":\"ddd\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"text\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"63331731059277678\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"json\",\"dataType\":\"json\",\"name\":\"\",\"id\":\"76031730968431323\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": null,
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-11-08T14:59:17Z",
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
                "array": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false
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
            "id": "63331731059277678",
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
            "array": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false
        },
        {
            "sysName": "ddd",
            "dataType": "link",
            "name": "",
            "id": "38781731073755334",
            "link": "ddd",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false
        },
        {
            "sysName": "text2",
            "dataType": "string",
            "name": "",
            "id": "33501731077950006",
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
        }
    ],
    "quickSearch": null,
    "httpParams": null,
    "cardCustomHtml": null,
    "cardCustomLayout": null,
    "comment": null,
    "response": false
}

let authExample = {
    "isAuth": true,
    "custom_labels": "",
    "role": "jo_hrd,jo_recruiter,st_agreement,st_hrbp",
    "who_delegated_ids": "",
    "lastName": "Ershov",
    "firstName": "Pavel",
    "token": "e4728cb6-1fe7-4efc-9fcc-7c579c09a113",
    "whom_delegate_ids": "",
    "notifications_counter": "",
    "nid": 21335,
    "user": "aleksandra.kalina@lamoda.ru",
    "userpic": "https://api.directual.com/fileUploaded/basic-template/5fe98a71-196e-4f0d-98cb-be3ee8968fbf.jpg",
    "id": "aleksandra.kalina@lamoda.ru"
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
