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
    "sl": "createPublication",
    "pageSize": "10",
    "headerField": null,
    "params": {
        "steps": [
            {
                "id": "step_one",
                "sysName": "1",
                "elements": [
                    {
                        "id": "elmnt_1713948453935",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17139484562400.404120230441231411344",
                                "_field": "_action",
                                "_field_hidden": true
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1713948460887",
                        "type": "action",
                        "_input_fields": [
                            {
                                "id": "17139484630230.00042421404203341213400123"
                            }
                        ],
                        "_actions": [
                            {
                                "id": "17139484669870.13420341320204034210301",
                                "_action": "action_1713948407836"
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
                "id": "step_1713948472020",
                "sysName": "2",
                "elements": [
                    {
                        "id": "elmnt_1713948475788",
                        "type": "text",
                        "paraText": "фываыав"
                    }
                ]
            }
        ],
        "general": {
            "showModel": true
        },
        "actions": [
            {
                "id": "action_1713948407836",
                "name": "sds",
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1713948433303",
                        "field": "FormState.step",
                        "value": "2"
                    }
                ]
            }
        ],
        "state": {
            "step": "1"
        }
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
            "linkType": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "json": false,
            "typeVariable": {},
            "array": false
        },
        {
            "sysName": "languageId",
            "name": "language",
            "dataType": "link",
            "id": "39481713191089142",
            "link": "language",
            "group": "0",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 12,
            "linkIndexFieldSysName": [],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": {},
            "groupName": null,
            "linkType": true,
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "arrayLink": false,
            "json": false,
            "typeVariable": {},
            "array": false
        },
        {
            "sysName": "nameRU",
            "name": "Title",
            "dataType": "string",
            "id": "48831632165620918",
            "link": "",
            "group": "1632165585442",
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "json": false,
            "typeVariable": {},
            "array": false
        },
        {
            "sysName": "publicationType",
            "name": "",
            "dataType": "json",
            "id": "78991713250949888",
            "link": "",
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 13,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": "radioOptions",
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
                "isUTC": "false",
                "multipleChoice": [
                    {
                        "value": "new",
                        "label": "new"
                    },
                    {
                        "value": "copy",
                        "label": "old"
                    }
                ]
            },
            "groupName": null,
            "linkType": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "json": true,
            "typeVariable": {},
            "array": false
        },
        {
            "sysName": "tagId",
            "name": "main tag",
            "dataType": "link",
            "id": "55191632165497120",
            "link": "tag",
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
            "linkType": true,
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "arrayLink": false,
            "json": false,
            "typeVariable": {},
            "array": false
        }
    ],
    "data": [
        {
            "tagId": {
                "name": "🎛️ JS",
                "id": "js"
            },
            "nameRU": "ыфва",
            "id": "8f1fff69-5bac-4c8b-ad52-5e48cc47f38d"
        },
        {
            "tagId": {
                "name": "🎛️ JS",
                "id": "js"
            },
            "nameRU": "тест",
            "id": "d7fa9b42-0bbc-4716-bdff-5a063a06efa7"
        },
        {
            "id": "13d2fc0a-8c17-40c4-ab54-b4969b8218b9"
        },
        {
            "id": "6d0420b6-955d-4a8a-8cc2-8e61b1f31eb0"
        },
        {
            "id": "13256749-3d85-492f-bea7-8cd9ebce4b8c"
        },
        {
            "id": "980d76f4-2203-46dd-9479-62e002be6d51"
        },
        {
            "id": "cc22ff54-7ee0-455a-a4d6-7b7959be722a"
        },
        {
            "id": "0a1c25da-d0d6-4496-8c43-00ac4686f468"
        },
        {
            "id": "29cfb2d5-d60a-49e6-b898-0fd24c86223f"
        },
        {
            "tagId": {
                "name": "🎛️ JS",
                "id": "js"
            },
            "nameRU": "тест",
            "id": "ec17a423-086e-4c1a-94cf-7048c6a60db7"
        }
    ],
    "totalPages": 29,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [
        [
            "id",
            99140970
        ],
        [
            "languageId.id",
            99306231
        ],
        [
            "languageId.title",
            99306231
        ],
        [
            "nameRU",
            99140970
        ],
        [
            "publicationType",
            99140970
        ],
        [
            "tagId.id",
            99108790
        ],
        [
            "tagId.name",
            99108790
        ]
    ],
    "writeFields": [
        "_action",
        "publicationType",
        "languageId",
        "image",
        "nameRU",
        "tagId",
        "tagIds",
        "preview",
        "_creatorId",
        "_publicationId"
    ],
    "structures": {
        "99108790": {
            "networkID": 9496,
            "sysName": "tag",
            "name": "tag",
            "id": 99108790,
            "dateCreated": "2022-05-31T08:19:00Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false},{\"sysName\":\"isDelete\",\"name\":\"\",\"dataType\":\"boolean\",\"id\":\"23311653985152265\",\"link\":\"\",\"group\":\"1653985151234\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false},{\"sysName\":\"publicationIds\",\"name\":\"\",\"dataType\":\"arrayLink\",\"id\":\"38831653985166696\",\"link\":\"publication\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"json\":false,\"typeVariable\":{},\"indexExists\":false},{\"sysName\":\"name\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"77791653985147388\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false},{\"sysName\":\"color\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"78531665747792434\",\"link\":\"\",\"group\":\"1653985151234\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false}]",
            "jsonGroupSettings": "[{\"id\":1653985151234,\"name\":\"New Group 1\",\"order\":0}]",
            "jsonViewIdSettings": "[{\"sysName\":\"name\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2022-11-20T11:15:27Z",
            "createBy": 6452,
            "changedBy": 13420,
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
                "linkType": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "json": false,
                "typeVariable": {},
                "array": false
            },
            "folderId": 33681938
        },
        "99140970": {
            "networkID": 9496,
            "sysName": "_publicationAction",
            "name": "_publicationAction",
            "id": 99140970,
            "dateCreated": "2022-10-17T11:17:06Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"_publicationId\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"18311713188200363\",\"link\":\"publication\",\"group\":\"1713188170063\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":true,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"preview\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"20931653917187874\",\"link\":\"\",\"group\":\"1632165585442\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"nameEN\",\"name\":\"name\",\"dataType\":\"string\",\"id\":\"26311632165637027\",\"link\":\"\",\"group\":\"1632165585442\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"_checkbox\",\"name\":\"Confirm\",\"dataType\":\"json\",\"id\":\"26781713188611568\",\"link\":\"\",\"group\":\"1713188170063\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"checkboxes\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"multipleChoice\":[{\"value\":\"confirm\",\"label\":\"I confirm the action.\"}]},\"groupName\":null,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"dateDisplayedRU\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"28191632165454824\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"youtubeLink\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"33761653917207356\",\"link\":\"\",\"group\":\"1632165585442\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"languageId\",\"name\":\"language\",\"dataType\":\"link\",\"id\":\"39481713191089142\",\"link\":\"language\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":true,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"_action\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"41451713188171815\",\"link\":\"\",\"group\":\"1713188170063\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"action\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"41841666005437249\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"_url\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"43661713188192282\",\"link\":\"\",\"group\":\"1713188170063\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"authorId\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"43941653917243261\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":true,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"sectionIds\",\"name\":\"\",\"dataType\":\"arrayLink\",\"id\":\"45401666251244627\",\"link\":\"section\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"array\":false},{\"sysName\":\"childPublicationIds\",\"name\":\"\",\"dataType\":\"arrayLink\",\"id\":\"45891653985355363\",\"link\":\"publication\",\"group\":\"1632165585442\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"array\":false},{\"sysName\":\"nameRU\",\"name\":\"Title\",\"dataType\":\"string\",\"id\":\"48831632165620918\",\"link\":\"\",\"group\":\"1632165585442\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"date\",\"name\":\"Дата\",\"dataType\":\"date\",\"id\":\"48931632165450379\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"status\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"49941713188221832\",\"link\":\"\",\"group\":\"1713188170063\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"body\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"50121653917139114\",\"link\":\"\",\"group\":\"1632165585442\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"tagIds\",\"name\":\"\",\"dataType\":\"arrayLink\",\"id\":\"54761632165506620\",\"link\":\"tag\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"array\":false},{\"sysName\":\"tagId\",\"name\":\"main tag\",\"dataType\":\"link\",\"id\":\"55191632165497120\",\"link\":\"tag\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":true,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"_creatorId\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"57251713188175846\",\"link\":\"WebUser\",\"group\":\"1713188170063\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":true,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"commentIds\",\"name\":\"\",\"dataType\":\"arrayLink\",\"id\":\"61531653986247630\",\"link\":\"comment\",\"group\":\"1632165585442\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"array\":false},{\"sysName\":\"sectionJSON\",\"name\":\"\",\"dataType\":\"json\",\"id\":\"76411666363870154\",\"link\":\"\",\"group\":\"1666251190954\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"publicationStatusId\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"76421653987437108\",\"link\":\"publicationStatus\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":true,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"dateDisplayedEN\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"78931632165468612\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"publicationType\",\"name\":\"\",\"dataType\":\"json\",\"id\":\"78991713250949888\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"radioOptions\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"multipleChoice\":[{\"value\":\"new\",\"label\":\"new\"},{\"value\":\"copy\",\"label\":\"old\"}]},\"groupName\":null,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"url\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"90041666251192194\",\"link\":\"\",\"group\":\"1666251190954\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"parentPublicationId\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"90891653985338245\",\"link\":\"publication\",\"group\":\"1632165585442\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":true,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"image\",\"name\":\"\",\"dataType\":\"file\",\"id\":\"93751653990307598\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"publicationId\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"98991666005445841\",\"link\":\"publication\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":true,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"array\":false}]",
            "jsonGroupSettings": "[{\"name\":\"material\",\"id\":1632165585442,\"order\":0},{\"name\":\"New Group 2\",\"id\":1666251190954,\"order\":1},{\"name\":\"New Group 3\",\"id\":1713188170063,\"order\":2}]",
            "jsonViewIdSettings": null,
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-04-16T07:03:42Z",
            "createBy": 6452,
            "changedBy": 6452,
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
                "linkType": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "json": false,
                "typeVariable": {},
                "array": false
            },
            "folderId": 33681937
        },
        "99306231": {
            "networkID": 9496,
            "sysName": "language",
            "name": "language",
            "id": 99306231,
            "dateCreated": "2024-04-15T13:24:24Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"title\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"13781713187469336\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"title\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-04-15T13:24:37Z",
            "createBy": 6452,
            "changedBy": 6452,
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
                "linkType": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "json": false,
                "typeVariable": {},
                "array": false
            },
            "folderId": 33681938
        }
    },
    "isSuccessWrite": false,
    "writeError": null,
    "writeResponse": null,
    "fileds": [
        {
            "sysName": "_action",
            "name": "",
            "dataType": "string",
            "id": "41451713188171815",
            "link": "",
            "group": "1713188170063",
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "json": false,
            "typeVariable": {},
            "array": false
        },
        {
            "sysName": "publicationType",
            "name": "",
            "dataType": "json",
            "id": "78991713250949888",
            "link": "",
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 13,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": "radioOptions",
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
                "isUTC": "false",
                "multipleChoice": [
                    {
                        "value": "new",
                        "label": "new"
                    },
                    {
                        "value": "copy",
                        "label": "old"
                    }
                ]
            },
            "groupName": null,
            "linkType": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "json": true,
            "typeVariable": {},
            "array": false
        },
        {
            "sysName": "languageId",
            "name": "language",
            "dataType": "link",
            "id": "39481713191089142",
            "link": "language",
            "group": "0",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 12,
            "linkIndexFieldSysName": [],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": {},
            "groupName": null,
            "linkType": true,
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "arrayLink": false,
            "json": false,
            "typeVariable": {},
            "array": false
        },
        {
            "sysName": "image",
            "name": "",
            "dataType": "file",
            "id": "93751653990307598",
            "link": "",
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 8,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": "image",
            "formatOptions": null,
            "groupName": null,
            "linkType": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "json": false,
            "typeVariable": {},
            "array": false
        },
        {
            "sysName": "nameRU",
            "name": "Title",
            "dataType": "string",
            "id": "48831632165620918",
            "link": "",
            "group": "1632165585442",
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "json": false,
            "typeVariable": {},
            "array": false
        },
        {
            "sysName": "tagId",
            "name": "main tag",
            "dataType": "link",
            "id": "55191632165497120",
            "link": "tag",
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
            "linkType": true,
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "arrayLink": false,
            "json": false,
            "typeVariable": {},
            "array": false
        },
        {
            "sysName": "tagIds",
            "name": "",
            "dataType": "arrayLink",
            "id": "54761632165506620",
            "link": "tag",
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
            "linkType": false,
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "arrayLink": true,
            "json": false,
            "typeVariable": {},
            "array": false
        },
        {
            "sysName": "preview",
            "name": "",
            "dataType": "string",
            "id": "20931653917187874",
            "link": "",
            "group": "1632165585442",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 3,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": "markdown",
            "formatOptions": null,
            "groupName": null,
            "linkType": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "json": false,
            "typeVariable": {},
            "array": false
        },
        {
            "sysName": "_creatorId",
            "name": "",
            "dataType": "link",
            "id": "57251713188175846",
            "link": "WebUser",
            "group": "1713188170063",
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
            "linkType": true,
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "arrayLink": false,
            "json": false,
            "typeVariable": {},
            "array": false
        },
        {
            "sysName": "_publicationId",
            "name": "",
            "dataType": "link",
            "id": "18311713188200363",
            "link": "publication",
            "group": "1713188170063",
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
            "linkType": true,
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "arrayLink": false,
            "json": false,
            "typeVariable": {},
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
