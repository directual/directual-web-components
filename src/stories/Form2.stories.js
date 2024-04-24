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
    "sl": "crateCourse",
    "pageSize": "10",
    "headerField": null,
    "params": {
        "steps": [
            {
                "id": "step_submitted",
                "sysName": "submitted",
                "elements": [
                    {
                        "id": "elmnt_1712052683797",
                        "type": "hint",
                        "hintColor": "useTemplating",
                        "hintTitle": "Thank you! ",
                        "hintText": "Submitted"
                    }
                ]
            },
            {
                "id": "step_1713960120044",
                "sysName": "1",
                "elements": [
                    {
                        "id": "elmnt_1713960129811",
                        "type": "text",
                        "paraText": "Title"
                    },
                    {
                        "id": "elmnt_1713960142611",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17139601530070.11203342244240323400014",
                                "_field": "title"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1713965717265",
                        "type": "text",
                        "paraText": "```\ncreateCourse\n```"
                    },
                    {
                        "id": "elmnt_1713965697996",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17139657003360.102331221404142440124302",
                                "_field": "_action",
                                "_field_set_default": true,
                                "_field_default_value": "createCourse",
                                "_field_add_description": false,
                                "_field_description_text": "test"
                            }
                        ],
                        "_conditionalView": false,
                        "_conditionalView_field": "FormState.ioba",
                        "_conditionalView_operator": "==",
                        "_conditionalView_value": "huyamba"
                    },
                    {
                        "id": "elmnt_1713965705299",
                        "type": "submit",
                        "_actions": [
                            {
                                "id": "17139657110720.31323413314120112334121"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1713969682950",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17139696876000.23401133232243440332033",
                                "_field": "modulesIds",
                                "_field_arrayLink_type": "select",
                                "_field_arrayLink_endpoint": "getMyModules"
                            }
                        ]
                    }
                ]
            }
        ],
        "state": {
            "step": "1",
            "ioba": "nryoba"
        },
        "general": {
            "showModel": true
        },
        "actions": [
            {
                "id": "action_1713960188731",
                "name": "2",
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1713960193745",
                        "field": "FormState.step",
                        "value": "2"
                    },
                    {
                        "id": "stateMapping1713960509286",
                        "field": "FormState.ioba",
                        "value": "huyoba!"
                    }
                ]
            },
            {
                "id": "action_1713961620851",
                "name": "1",
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1713961624632",
                        "field": "FormState.step",
                        "value": "1"
                    }
                ]
            },
            {
                "id": "action_1713961814054",
                "name": "3",
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1713961817886",
                        "field": "FormState.step",
                        "value": "3"
                    }
                ]
            }
        ]
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
            "linkType": false,
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        }
    ],
    "data": [
        {
            "id": "4d7bb8ec-c3d5-4288-b1b3-b0baddc3fd5d"
        }
    ],
    "totalPages": 1,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [
        [
            "id",
            99306516
        ]
    ],
    "writeFields": [
        "_action",
        "image",
        "title",
        "description",
        "langueageId",
        "tagIds",
        "modulesIds",
        "articlesIds"
    ],
    "structures": {
        "99306516": {
            "networkID": 9496,
            "sysName": "_course",
            "name": "_course",
            "id": 99306516,
            "dateCreated": "2024-04-17T14:13:13Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"_courseId\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"10941713363216029\",\"link\":\"course\",\"group\":\"1713363197644\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":true,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"title\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"14771713363142326\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"courseStatusId\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"19081667305694300\",\"link\":\"courseStatus\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":true,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"description\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"22251713363383129\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"modulesIds\",\"name\":\"\",\"dataType\":\"arrayLink\",\"id\":\"27251713963246584\",\"link\":\"module\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"json\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"dateDisplayedRU\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"28191632165454824\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"_creatorId\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"38181713363242194\",\"link\":\"WebUser\",\"group\":\"1713363197644\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":true,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"langueageId\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"42471713363704379\",\"link\":\"language\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":true,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"authorId\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"43941653917243261\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":true,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"date\",\"name\":\"Дата\",\"dataType\":\"date\",\"id\":\"48931632165450379\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"articlesIds\",\"name\":\"\",\"dataType\":\"arrayLink\",\"id\":\"70261713963578687\",\"link\":\"article\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"json\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"tagIds\",\"name\":\"\",\"dataType\":\"arrayLink\",\"id\":\"79881713364698528\",\"link\":\"tag\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"json\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"_action\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"82271713363227559\",\"link\":\"\",\"group\":\"1713363197644\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"_url\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"90831713363232644\",\"link\":\"\",\"group\":\"1713363197644\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"image\",\"name\":\"\",\"dataType\":\"file\",\"id\":\"93751653990307598\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"status\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"95431713363265027\",\"link\":\"\",\"group\":\"1713363197644\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"array\":false}]",
            "jsonGroupSettings": "[{\"name\":\"New Group 1\",\"id\":1713363197644,\"order\":0}]",
            "jsonViewIdSettings": null,
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-04-24T12:59:49Z",
            "createBy": 6452,
            "changedBy": 6452,
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
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            "folderId": 33681937
        }
    },
    "isSuccessWrite": false,
    "writeError": null,
    "writeResponse": null,
    "fileds": [
        {
            "sysName": "_action",
            "dataType": "string",
            "name": "",
            "id": "82271713363227559",
            "link": "",
            "group": "1713363197644",
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
            "linkType": false,
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "image",
            "dataType": "file",
            "name": "",
            "id": "93751653990307598",
            "link": "",
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 4,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": "image",
            "formatOptions": null,
            "groupName": null,
            "linkType": false,
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "title",
            "dataType": "string",
            "name": "",
            "id": "14771713363142326",
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
            "linkType": false,
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "description",
            "dataType": "string",
            "name": "",
            "id": "22251713363383129",
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
            "format": null,
            "formatOptions": {},
            "groupName": null,
            "linkType": false,
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "langueageId",
            "dataType": "link",
            "name": "",
            "id": "42471713363704379",
            "link": "language",
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
            "format": null,
            "formatOptions": {},
            "groupName": null,
            "linkType": true,
            "json": false,
            "linkOrArrayLinkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "tagIds",
            "dataType": "arrayLink",
            "name": "",
            "id": "79881713364698528",
            "link": "tag",
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
            "formatOptions": {},
            "groupName": null,
            "linkType": false,
            "json": false,
            "linkOrArrayLinkType": true,
            "arrayLink": true,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "modulesIds",
            "dataType": "arrayLink",
            "name": "",
            "id": "27251713963246584",
            "link": "module",
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 10,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "linkType": false,
            "json": false,
            "linkOrArrayLinkType": true,
            "arrayLink": true,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "articlesIds",
            "dataType": "arrayLink",
            "name": "",
            "id": "70261713963578687",
            "link": "article",
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 11,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "linkType": false,
            "json": false,
            "linkOrArrayLinkType": true,
            "arrayLink": true,
            "typeVariable": {},
            "indexExists": false,
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
