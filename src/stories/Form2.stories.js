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

let exampleForm1 = {
    "sl": "cond",
    "pageSize": "10",
    "headerField": null,
    "params": {
        "steps": [
            {
                "id": "default_step",
                "sysName": "default step",
                "elements": [
                    {
                        "id": "elmnt_1740684320393",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17406843223430.4342042122041400104031",
                                "_field": "cond"
                            },
                            {
                                "id": "17406844415360.222210031440124432333232",
                                "_field": "cond3",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1740684448352",
                                        "_conditionalView_field": "cond",
                                        "_conditionalView_operator": "==",
                                        "_conditionalView_value": "2"
                                    }
                                ]
                            }
                        ],
                        "_input_fields_in_a_row": 2,
                        "_input_fields_in_a_row_column": "column"
                    },
                    {
                        "id": "elmnt_1740684326872",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17406843312900.34041241012203242404004",
                                "_field": "cond2"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1740684336849",
                                "_conditionalView_field": "cond",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "1"
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
            }
        ],
        "general": {
            "showModel": true,
            "debugConditions": true
        }
    },
    "tableTitle": null,
    "actions": null,
    "headers": [],
    "data": [],
    "totalPages": 0,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [],
    "writeFields": [
        "cond3",
        "cond2",
        "cond"
    ],
    "structures": {},
    "isSuccessWrite": false,
    "writeError": null,
    "writeResponse": null,
    "fileds": [
        {
            "sysName": "cond3",
            "dataType": "string",
            "name": "",
            "id": "88021740683901608",
            "link": "",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "cond2",
            "dataType": "string",
            "name": "",
            "id": "56801740683898675",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "cond",
            "dataType": "string",
            "name": "",
            "id": "16991740683893620",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
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

let exampleForm =  {
    "sl": "editCamp",
    "pageSize": "10",
    "headerField": null,
    "params": {
        "steps": [
            {
                "id": "default_step",
                "sysName": "default step",
                "elements": [
                    {
                        "id": "elmnt_1742478427423",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17424784324950.32011133330342411243214",
                                "_field": "department",
                                "_field_arrayLink_type": "tags",
                                "_field_arrayLink_endpoint": "dep_dd"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1742478464141",
                        "type": "text",
                        "paraText": "Количество участников рассылки: {{number}}",
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1742478480000",
                                "_conditionalView_field": "number",
                                "_conditionalView_operator": "isNotNull"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1742478502316",
                        "type": "submit",
                        "submitKeepModel": true,
                        "submitStep": "default step"
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
        "state": {
            "step": "default step",
            "popup": ""
        },
        "general": {
            "edittingOn": true,
            "showModel": true
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "number",
            "dataType": "number",
            "name": "",
            "id": "24711742478036536",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "status",
            "dataType": "string",
            "name": "",
            "id": "22541742478026661",
            "link": "",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "department",
            "dataType": "arrayLink",
            "name": "",
            "id": "78191742478022789",
            "link": "department",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
            "arrayLink": true,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "user_ids",
            "dataType": "arrayLink",
            "name": "",
            "id": "21151742478000706",
            "link": "users",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
            "arrayLink": true,
            "linkType": false,
            "indexExists": false,
            "array": false
        }
    ],
    "data": [
        {
            "status": "new",
            "department": [
                "hr"
            ],
            "number": 2,
            "id": "f56d87d0-02ec-4a51-bba0-aee1d5d4bebd"
        }
    ],
    "totalPages": 1,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [
        [
            "id",
            99385558
        ],
        [
            "number",
            99385558
        ],
        [
            "status",
            99385558
        ],
        [
            "department.id",
            99385557
        ],
        [
            "user_ids.id",
            99385556
        ]
    ],
    "writeFields": [
        "id",
        "number",
        "status",
        "department",
        "user_ids"
    ],
    "structures": {
        "99385556": {
            "networkID": 33144,
            "sysName": "users",
            "name": "users",
            "id": 99385556,
            "dateCreated": "2025-03-20T13:38:32Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"department_id\",\"dataType\":\"link\",\"name\":\"\",\"id\":\"54751742477933252\",\"link\":\"department\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"name\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"94001742477931600\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": null,
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2025-03-20T13:39:04Z",
            "createBy": 1,
            "changedBy": 1,
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            "folderId": null
        },
        "99385557": {
            "networkID": 33144,
            "sysName": "department",
            "name": "department",
            "id": 99385557,
            "dateCreated": "2025-03-20T13:38:40Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"title\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"34311742477948213\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"title\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2025-03-20T13:39:14Z",
            "createBy": 1,
            "changedBy": 1,
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            "folderId": null
        },
        "99385558": {
            "networkID": 33144,
            "sysName": "campaign",
            "name": "campaign",
            "id": 99385558,
            "dateCreated": "2025-03-20T13:38:47Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"user_ids\",\"dataType\":\"arrayLink\",\"name\":\"\",\"id\":\"21151742478000706\",\"link\":\"users\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"status\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"22541742478026661\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"number\",\"dataType\":\"number\",\"name\":\"\",\"id\":\"24711742478036536\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"department\",\"dataType\":\"arrayLink\",\"name\":\"\",\"id\":\"78191742478022789\",\"link\":\"department\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": null,
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2025-03-20T13:40:45Z",
            "createBy": 1,
            "changedBy": 1,
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "number",
            "dataType": "number",
            "name": "",
            "id": "24711742478036536",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "status",
            "dataType": "string",
            "name": "",
            "id": "22541742478026661",
            "link": "",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "department",
            "dataType": "arrayLink",
            "name": "",
            "id": "78191742478022789",
            "link": "department",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
            "arrayLink": true,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "user_ids",
            "dataType": "arrayLink",
            "name": "",
            "id": "21151742478000706",
            "link": "users",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
            "arrayLink": true,
            "linkType": false,
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
    "isAuth": true,
    "custom_labels": "",
    "role": "jo_hrbp,jo_agreement,jo_budget_holder,st_hrbp,st_budget_holder,hg_agreement,hg_hrbp,hg_budget_holder,sf_hrbp",
    "who_delegated_ids": "",
    "lastName": "Samsonova",
    "firstName": "Olga",
    "token": "4b692b4e-36dd-4e8d-990f-4f56d5e0a5b5",
    "whom_delegate_ids": "",
    "notifications_counter": "",
    "nid": 21335,
    "user": "olga.samsonova@lamoda.ru",
    "userpic": "https://api.directual.com/fileUploaded/basic-template/5fe98a71-196e-4f0d-98cb-be3ee8968fbf.jpg"
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
