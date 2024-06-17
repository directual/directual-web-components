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
    "sl": "createBot",
    "pageSize": "10",
    "headerField": null,
    "params": {
        "steps": [
            {
                "id": "step_1718614827583",
                "sysName": "0",
                "elements": [
                    {
                        "id": "elmnt_1718614915166",
                        "type": "text",
                        "paraText": "<h1>Add new bot </h1>"
                    },
                    {
                        "id": "elmnt_1718614835849",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17186148714050.0000032122144324430421104024",
                                "_action": "action_1718614841533"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718614953800",
                                "_conditionalView_field": "FormState.step",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "0"
                            }
                        ]
                    }
                ],
                "sectionVisibility": "always"
            },
            {
                "id": "default_step",
                "sysName": "default step",
                "elements": [
                    {
                        "id": "elmnt_1718225898483",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17182259011410.210000003321224333241312",
                                "_field": "_action",
                                "_field_required": false,
                                "_field_set_default": true,
                                "_field_default_value": "createBot",
                                "_field_hidden": true
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": [
                            {
                                "id": "condition_1718225909014"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718221366342",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17182214399960.13044010022334102021434",
                                "_action": "action_1718221401959",
                                "_action_icon": "help"
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": []
                    },
                    {
                        "id": "elmnt_1718223240267",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17182232494920.001244310411103443111003",
                                "_field": "url"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718224856329",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17182248631750.0431141101334310032224",
                                "_field": "botName"
                            },
                            {
                                "id": "17182248663170.0040332323340011222223343",
                                "_field": "secret_token"
                            }
                        ],
                        "_input_fields_in_a_row": 2,
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718225002577",
                                "_conditionalView_field": "url",
                                "_conditionalView_operator": "isNotNull"
                            }
                        ],
                        "_input_fields_in_a_row_column": "column"
                    },
                    {
                        "id": "elmnt_1718224891160",
                        "type": "submit",
                        "submitKeepModel": true,
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718224908443",
                                "_conditionalView_field": "url",
                                "_conditionalView_operator": "isNotNull"
                            },
                            {
                                "id": "condition_1718224920327",
                                "_conditionalView_field": "botName",
                                "_conditionalView_operator": "isNotNull"
                            },
                            {
                                "id": "condition_1718224927810",
                                "_conditionalView_field": "secret_token",
                                "_conditionalView_operator": "isNotNull"
                            }
                        ],
                        "submitLabel": "Add bot!"
                    }
                ]
            },
            {
                "id": "step_1718221369242",
                "sysName": "help",
                "elements": [
                    {
                        "id": "elmnt_1718221497943",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17182214997840.13012330320343110113213",
                                "_action": "action_1718221451976",
                                "_action_label": "close",
                                "_action_icon": "close"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718221377341",
                        "type": "text",
                        "paraText": "1. Go to api\n<br>\n\n2. Go to Webhooks\n<br>\n\n3. Copy \"Webhook url\"\n<br>\n\n<img  src=\"https://api.directual.com/fileUploaded/dev-tg/cecf9eac-5ef2-45ed-ba24-42a84ea88b13.png\" style=\"width:100%\"/>\n\n"
                    }
                ],
                "CSSclass": ""
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
                    },
                    {
                        "id": "elmnt_1718226319805",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17182263223020.142203404213030301422442",
                                "_action": "action_1718226167491",
                                "_action_icon": "plus"
                            }
                        ]
                    }
                ]
            }
        ],
        "general": {
            "edittingOn": true,
            "closePopupOnClick": true,
            "showModel": true
        },
        "state": {
            "step": "0",
            "popup": ""
        },
        "actions": [
            {
                "id": "action_1718221401959",
                "name": "help",
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1718221571694",
                        "field": "FormState.popup",
                        "value": "help"
                    }
                ]
            },
            {
                "id": "action_1718221451976",
                "name": "goBack",
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1718221459210",
                        "field": "FormState.popup",
                        "value": ""
                    }
                ]
            },
            {
                "id": "action_1718226167491",
                "name": "add another bot",
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1718226185924",
                        "field": "FormState.step",
                        "value": "default step"
                    },
                    {
                        "id": "stateMapping1718226191991",
                        "field": "botName"
                    },
                    {
                        "id": "stateMapping1718226197058",
                        "field": "secret_token"
                    }
                ],
                "discardModel": false,
                "autoAction": false
            },
            {
                "id": "action_1718614841533",
                "name": "add new bot",
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1718614857117",
                        "field": "FormState.step",
                        "value": "default step"
                    }
                ]
            }
        ],
        "popup_width": 1800
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
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "url",
            "dataType": "string",
            "name": "webhook",
            "id": "69851701844537964",
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
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "formJSON",
            "dataType": "json",
            "name": "",
            "id": "12931718223429867",
            "link": "",
            "group": "1718223428732",
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
            "typeVariable": {},
            "json": true,
            "indexExists": false,
            "array": false
        }
    ],
    "data": [
        {
            "id": "add"
        }
    ],
    "totalPages": 1,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [
        [
            "id",
            99272771
        ],
        [
            "url",
            99272771
        ],
        [
            "formJSON",
            99272771
        ]
    ],
    "writeFields": [
        "url",
        "secret_token",
        "botName",
        "webUser",
        "headers",
        "urlData",
        "id",
        "formJSON",
        "_action"
    ],
    "structures": {
        "99272771": {
            "networkID": 17774,
            "sysName": "addBot",
            "name": "addBot",
            "id": 99272771,
            "dateCreated": "2023-12-06T06:35:07Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"formJSON\",\"dataType\":\"json\",\"name\":\"\",\"id\":\"12931718223429867\",\"link\":\"\",\"group\":\"1718223428732\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"botName\",\"dataType\":\"string\",\"name\":\"bot Name\",\"id\":\"15411710246572654\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"tgJSON\",\"dataType\":\"json\",\"name\":\"\",\"id\":\"39511710246778035\",\"link\":\"\",\"group\":\"1710246776890\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"headers\",\"dataType\":\"json\",\"name\":\"\",\"id\":\"40891706798476527\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"secret_token\",\"dataType\":\"string\",\"name\":\"secret token\",\"id\":\"48641701844523348\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"_action\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"54551718225707430\",\"link\":\"\",\"group\":\"1718223428732\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"webUser\",\"dataType\":\"link\",\"name\":\"\",\"id\":\"67071706798459201\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"url\",\"dataType\":\"string\",\"name\":\"webhook\",\"id\":\"69851701844537964\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"status\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"72191710247728160\",\"link\":\"\",\"group\":\"1710246776890\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"urlData\",\"dataType\":\"json\",\"name\":\"\",\"id\":\"82501706798472299\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false}]",
            "jsonGroupSettings": "[{\"id\":1710246776890,\"name\":\"New Group 1\",\"order\":0},{\"id\":1718223428732,\"name\":\"New Group 2\",\"order\":1}]",
            "jsonViewIdSettings": null,
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-06-13T13:14:07Z",
            "createBy": 6452,
            "changedBy": 6452,
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
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            "objectIDSysName": "id",
            "folderId": 33796848
        }
    },
    "isSuccessWrite": false,
    "writeError": null,
    "writeResponse": null,
    "fileds": [
        {
            "sysName": "url",
            "dataType": "string",
            "name": "webhook",
            "id": "69851701844537964",
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
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "secret_token",
            "dataType": "string",
            "name": "secret token",
            "id": "48641701844523348",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "botName",
            "dataType": "string",
            "name": "bot Name",
            "id": "15411710246572654",
            "link": "",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "webUser",
            "dataType": "link",
            "name": "",
            "id": "67071706798459201",
            "link": "WebUser",
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
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "headers",
            "dataType": "json",
            "name": "",
            "id": "40891706798476527",
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
            "typeVariable": {},
            "json": true,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "urlData",
            "dataType": "json",
            "name": "",
            "id": "82501706798472299",
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
            "typeVariable": {},
            "json": true,
            "indexExists": false,
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
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "formJSON",
            "dataType": "json",
            "name": "",
            "id": "12931718223429867",
            "link": "",
            "group": "1718223428732",
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
            "typeVariable": {},
            "json": true,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "_action",
            "dataType": "string",
            "name": "",
            "id": "54551718225707430",
            "link": "",
            "group": "1718223428732",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
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
