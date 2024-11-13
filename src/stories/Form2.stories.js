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
                        "id": "elmnt_1731521292621",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17315212940380.0032200314411410001014244",
                                "_field": "maskedString"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1731521333254",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17315213351550.0100200211440324402311133",
                                "_field": "maskedNumber"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1731521346899",
                                "_conditionalView_field": "maskedNumber",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "1,2"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1731521299726",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17315213020400.343041032330210420343",
                                "_field": "maskedEmail",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1731521315707",
                                        "_conditionalView_field": "maskedNumber",
                                        "_conditionalView_operator": "==",
                                        "_conditionalView_value": "2"
                                    },
                                    {
                                        "id": "condition_1731532405651",
                                        "_conditionalView_field": "maskedNumber",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_action_conditionals_and_or": "AND"
                            },
                            {
                                "id": "17315213030410.10040411013302400223314",
                                "_field": "maskedNumber"
                            }
                        ],
                        "_input_fields_in_a_row": 2,
                        "_input_fields_in_a_row_column": "column"
                    },
                    {
                        "id": "elmnt_1731533051690",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17315330558710.40043404440230412110211",
                                "_action": "action_1731060541586",
                                "_conditionalView": true,
                                "_action_conditional_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1731533064300",
                                        "_conditionalView_field": "maskedNumber",
                                        "_conditionalView_operator": "==",
                                        "_conditionalView_value": "1"
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
            "closePopupOnClick": true,
            "edittingOn": true,
            "debugConditions": true,
            "showModel": true
        },
        "popup_width": 600,
        "form_maxWidth": 400
    },
    "tableTitle": null,
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "array",
            "name": "",
            "dataType": "arrayLink",
            "id": "16691731230607720",
            "link": "socket",
            "group": "0",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 10,
            "linkIndexFieldSysName": [],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": {},
            "groupName": null,
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": false,
            "arrayLink": true,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "maskedDecimal",
            "name": "",
            "dataType": "decimal",
            "id": "80161731092819528",
            "link": "",
            "group": "0",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 9,
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
                "dateFormat": "DD/MM/Y",
                "timeFormat": " HH:mm",
                "imask": "{\n    mask: Number,\n    scale: 2,\n    thousandsSeparator: '',\n    padFractionalZeros: false,\n    normalizeZeros: true,\n    radix: '.',\n    mapToRadix: ['.',',']\n  }",
                "isUTC": "false"
            },
            "groupName": null,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "maskedPhone",
            "name": "",
            "dataType": "string",
            "id": "25551731092809653",
            "link": "",
            "group": "0",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 8,
            "linkIndexFieldSysName": [],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": "phone",
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
                "dateFormat": "DD/MM/Y",
                "timeFormat": " HH:mm",
                "imask": "{\n    mask: '+{7}(000)000-00-00',\n    lazy: false\n  }",
                "isUTC": "false"
            },
            "groupName": null,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "maskedEmail",
            "name": "",
            "dataType": "string",
            "id": "59481731092802195",
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
            "format": "email",
            "formatOptions": {},
            "groupName": null,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "maskedNumber",
            "name": "",
            "dataType": "number",
            "id": "28581731092797759",
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
                "dateFormat": "DD/MM/Y",
                "timeFormat": " HH:mm",
                "imask": "{\n    mask: Number,\n    min: -10000,\n    max: 10000,\n    thousandsSeparator: ' '\n  }",
                "isUTC": "false"
            },
            "groupName": null,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "maskedString",
            "name": "num",
            "dataType": "string",
            "id": "74181731092791538",
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
                "dateFormat": "DD/MM/Y",
                "timeFormat": " HH:mm",
                "imask": "{\n    mask: Number,\n    min: -10000,\n    max: 10000,\n    thousandsSeparator: ' '\n  }",
                "isUTC": "false"
            },
            "groupName": null,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "text2",
            "name": "date",
            "dataType": "string",
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
                "dateFormat": "DD/MM/Y",
                "timeFormat": " HH:mm",
                "imask": "{\n    mask: Date,\n    min: new Date('1989-12-31T21:00:00.000Z'),\n    max: new Date('2023-12-31T21:00:00.000Z'),\n    lazy: false\n  }",
                "isUTC": "false"
            },
            "groupName": null,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "ddd",
            "name": "",
            "dataType": "link",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "text",
            "name": "XXX",
            "dataType": "string",
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
                "dateFormat": "DD/MM/Y",
                "timeFormat": " HH:mm",
                "imask": "{\n  mask: 'XXX-XX-0000',\n  definitions: {\n    X: {\n      mask: '0',\n      displayChar: 'X',\n      placeholderChar: '#'\n    }\n  },\n  lazy: false,\n  overwrite: 'shift'\n}",
                "isUTC": "false"
            },
            "groupName": null,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "json",
            "name": "",
            "dataType": "json",
            "id": "76031730968431323",
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": true,
            "array": false
        }
    ],
    "data": [],
    "totalPages": 0,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [
        [
            "id",
            99354115
        ],
        [
            "array.id",
            99354116
        ],
        [
            "maskedDecimal",
            99354115
        ],
        [
            "maskedPhone",
            99354115
        ],
        [
            "maskedEmail",
            99354115
        ],
        [
            "maskedNumber",
            99354115
        ],
        [
            "maskedString",
            99354115
        ],
        [
            "text2",
            99354115
        ],
        [
            "ddd.id",
            99354188
        ],
        [
            "text",
            99354115
        ],
        [
            "json",
            99354115
        ]
    ],
    "writeFields": [
        "text",
        "ddd",
        "text2",
        "id",
        "array",
        "maskedDecimal",
        "maskedPhone",
        "maskedEmail",
        "maskedNumber",
        "maskedString",
        "json"
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
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"array\",\"dataType\":\"arrayLink\",\"name\":\"\",\"id\":\"16691731230607720\",\"link\":\"socket\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false},{\"sysName\":\"maskedPhone\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"25551731092809653\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"phone\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"imask\":\"{\\n    mask: '+{7}(000)000-00-00',\\n    lazy: false\\n  }\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"maskedNumber\",\"dataType\":\"number\",\"name\":\"\",\"id\":\"28581731092797759\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"imask\":\"{\\n    mask: Number,\\n    min: -10000,\\n    max: 10000,\\n    thousandsSeparator: ' '\\n  }\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"text2\",\"dataType\":\"string\",\"name\":\"date\",\"id\":\"33501731077950006\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"imask\":\"{\\n    mask: Date,\\n    min: new Date('1989-12-31T21:00:00.000Z'),\\n    max: new Date('2023-12-31T21:00:00.000Z'),\\n    lazy: false\\n  }\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"ddd\",\"dataType\":\"link\",\"name\":\"\",\"id\":\"38781731073755334\",\"link\":\"ddd\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"maskedEmail\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"59481731092802195\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"email\",\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"text\",\"dataType\":\"string\",\"name\":\"XXX\",\"id\":\"63331731059277678\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"imask\":\"{\\n  mask: 'XXX-XX-0000',\\n  definitions: {\\n    X: {\\n      mask: '0',\\n      displayChar: 'X',\\n      placeholderChar: '#'\\n    }\\n  },\\n  lazy: false,\\n  overwrite: 'shift'\\n}\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"maskedString\",\"dataType\":\"string\",\"name\":\"num\",\"id\":\"74181731092791538\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"imask\":\"{\\n    mask: Number,\\n    min: -10000,\\n    max: 10000,\\n    thousandsSeparator: ' '\\n  }\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"json\",\"dataType\":\"json\",\"name\":\"\",\"id\":\"76031730968431323\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"maskedDecimal\",\"dataType\":\"decimal\",\"name\":\"\",\"id\":\"80161731092819528\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"imask\":\"{\\n    mask: Number,\\n    scale: 2,\\n    thousandsSeparator: '',\\n    padFractionalZeros: false,\\n    normalizeZeros: true,\\n    radix: '.',\\n    mapToRadix: ['.',',']\\n  }\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": null,
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-11-10T11:46:42Z",
            "createBy": 1,
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
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "array": false
            },
            "folderId": null
        },
        "99354116": {
            "networkID": 22386,
            "sysName": "socket",
            "name": "socket",
            "id": 99354116,
            "dateCreated": "2024-11-07T08:51:21Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"message\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"31611730969480930\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": null,
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-11-07T08:51:27Z",
            "createBy": 1,
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
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "array": false
            },
            "folderId": null
        },
        "99354188": {
            "networkID": 22386,
            "sysName": "ddd",
            "name": "ddd",
            "id": 99354188,
            "dateCreated": "2024-11-08T13:47:37Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"title\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"66311731073665194\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"title\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-11-08T13:48:28Z",
            "createBy": 1,
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
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "array": false
            },
            "folderId": null
        }
    },
    "isSuccessWrite": false,
    "writeError": null,
    "writeResponse": null,
    "fileds": [
        {
            "sysName": "text",
            "name": "XXX",
            "dataType": "string",
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
                "dateFormat": "DD/MM/Y",
                "timeFormat": " HH:mm",
                "imask": "{\n  mask: 'XXX-XX-0000',\n  definitions: {\n    X: {\n      mask: '0',\n      displayChar: 'X',\n      placeholderChar: '#'\n    }\n  },\n  lazy: false,\n  overwrite: 'shift'\n}",
                "isUTC": "false"
            },
            "groupName": null,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "ddd",
            "name": "",
            "dataType": "link",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "text2",
            "name": "date",
            "dataType": "string",
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
                "dateFormat": "DD/MM/Y",
                "timeFormat": " HH:mm",
                "imask": "{\n    mask: Date,\n    min: new Date('1989-12-31T21:00:00.000Z'),\n    max: new Date('2023-12-31T21:00:00.000Z'),\n    lazy: false\n  }",
                "isUTC": "false"
            },
            "groupName": null,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "array": false
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "array",
            "name": "",
            "dataType": "arrayLink",
            "id": "16691731230607720",
            "link": "socket",
            "group": "0",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 10,
            "linkIndexFieldSysName": [],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": {},
            "groupName": null,
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": false,
            "arrayLink": true,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "maskedDecimal",
            "name": "",
            "dataType": "decimal",
            "id": "80161731092819528",
            "link": "",
            "group": "0",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 9,
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
                "dateFormat": "DD/MM/Y",
                "timeFormat": " HH:mm",
                "imask": "{\n    mask: Number,\n    scale: 2,\n    thousandsSeparator: '',\n    padFractionalZeros: false,\n    normalizeZeros: true,\n    radix: '.',\n    mapToRadix: ['.',',']\n  }",
                "isUTC": "false"
            },
            "groupName": null,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "maskedPhone",
            "name": "",
            "dataType": "string",
            "id": "25551731092809653",
            "link": "",
            "group": "0",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 8,
            "linkIndexFieldSysName": [],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": "phone",
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
                "dateFormat": "DD/MM/Y",
                "timeFormat": " HH:mm",
                "imask": "{\n    mask: '+{7}(000)000-00-00',\n    lazy: false\n  }",
                "isUTC": "false"
            },
            "groupName": null,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "maskedEmail",
            "name": "",
            "dataType": "string",
            "id": "59481731092802195",
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
            "format": "email",
            "formatOptions": {},
            "groupName": null,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "maskedNumber",
            "name": "",
            "dataType": "number",
            "id": "28581731092797759",
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
                "dateFormat": "DD/MM/Y",
                "timeFormat": " HH:mm",
                "imask": "{\n    mask: Number,\n    min: -10000,\n    max: 10000,\n    thousandsSeparator: ' '\n  }",
                "isUTC": "false"
            },
            "groupName": null,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "maskedString",
            "name": "num",
            "dataType": "string",
            "id": "74181731092791538",
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
                "dateFormat": "DD/MM/Y",
                "timeFormat": " HH:mm",
                "imask": "{\n    mask: Number,\n    min: -10000,\n    max: 10000,\n    thousandsSeparator: ' '\n  }",
                "isUTC": "false"
            },
            "groupName": null,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "json",
            "name": "",
            "dataType": "json",
            "id": "76031730968431323",
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
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
