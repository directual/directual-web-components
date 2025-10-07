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
        "sl": "f",
        "pageSize": "10",
        "headerField": null,
        "params": {
            "steps": [
                {
                    "id": "default_step",
                    "sysName": "default step",
                    "elements": [
                        {
                            "id": "elmnt_1759836006565",
                            "type": "steps",
                            "_formSteps": {
                                "stepsOrder": [
                                    "default step",
                                    "2",
                                    "submitted"
                                ],
                                "settings": {
                                    "steps": {
                                        "2": true,
                                        "default step": true,
                                        "submitted": true
                                    }
                                },
                                "stepSettings": {
                                    "default step": {
                                        "title": "1"
                                    }
                                }
                            }
                        },
                        {
                            "id": "elmnt_1759835888683",
                            "type": "input",
                            "_input_fields": [
                                {
                                    "id": "17598358909110.0122334311122142421332341",
                                    "_field": "hello"
                                }
                            ]
                        },
                        {
                            "id": "elmnt_1759835912753",
                            "type": "submit"
                        }
                    ],
                    "sectionVisibility": "always"
                },
                {
                    "id": "step_submitted",
                    "sysName": "submitted",
                    "elements": [
                        {
                            "id": "elmnt_1712052683797",
                            "type": "hint",
                            "hintColor": "ok",
                            "hintTitle": "Спасибо!",
                            "hintText": "Отправлено"
                        }
                    ]
                },
                {
                    "id": "step_1759836029315",
                    "sysName": "2"
                }
            ],
            "general": {
                "edittingOn": true,
                "saveState": true,
                "saveStateTo": "state",
                "restoreState": true,
                "showModel": true,
                "showState": true,
                "autosubmit": "always"
            },
            "state": {
                "step": "default step",
                "popup": null,
                "loading": "false"
            },
            "form_title": "form"
        },
        "tableTitle": null,
        "actions": [],
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
                "sysName": "state",
                "name": "",
                "dataType": "json",
                "id": "60821759835847371",
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
                "json": true,
                "indexExists": false
            },
            {
                "sysName": "hello",
                "name": "",
                "dataType": "string",
                "id": "84511759835849670",
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
                "state": "{\n   \"step\": \"2\",\n   \"popup\": null,\n   \"loading\": \"false\"\n}",
                "hello": "foo bar1",
                "id": "baa7b24e-a84b-47eb-888d-e248f95cc21c"
            }
        ],
        "totalPages": 1,
        "pageNumber": 0,
        "error": null,
        "fieldScheme": [
            [
                "id",
                99423741
            ],
            [
                "state",
                99423741
            ],
            [
                "hello",
                99423741
            ]
        ],
        "writeFields": [
            "id",
            "hello",
            "state"
        ],
        "structures": {
            "99423741": {
                "networkID": 34443,
                "sysName": "form",
                "name": "form",
                "id": 99423741,
                "dateCreated": "2025-10-07T11:17:20Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"state\",\"name\":\"\",\"dataType\":\"json\",\"id\":\"60821759835847371\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":true,\"indexExists\":false},{\"sysName\":\"hello\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"84511759835849670\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": null,
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2025-10-07T11:17:35Z",
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
                "sysName": "hello",
                "name": "",
                "dataType": "string",
                "id": "84511759835849670",
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false
            },
            {
                "sysName": "state",
                "name": "",
                "dataType": "json",
                "id": "60821759835847371",
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
                "json": true,
                "indexExists": false
            }
        ],
        "quickSearch": "",
        "httpParams": {},
        "cardCustomHtml": null,
        "cardCustomLayout": {},
        "comment": "",
        "response": false
    }

let authExample = {
    "empl_who_delegated_ids": "",
    "isAuth": true,
    "custom_labels": "",
    "role": "hrbp",
    "employee_ids": "0ЛЗК-00950",
    "who_delegated_ids": "",
    "token": "319dffb0-611f-4dd8-b6da-4e422101de49",
    "whom_delegate_ids": "",
    "empl_whom_delegate_ids": "",
    "notifications_counter": "",
    "nid": 33745,
    "userpic": null,
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
