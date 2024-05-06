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
    "sl": "fpsform2",
    "pageSize": "10",
    "headerField": null,
    "params": {
        "steps": [
            {
                "id": "step_1714495808163",
                "sysName": "pictures",
                "elements": [
                    {
                        "id": "elmnt_1715004660303",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17150046618240.341114000140023414023",
                                "_field": "arrayLink",
                                "_field_arrayLink_type": "tags",
                                "_field_arrayLink_endpoint": "dropdown"
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
                        "hintTitle": "Успех",
                        "hintText": "Ваша заявка отправлена"
                    },
                    {
                        "id": "elmnt_1714310838290",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17143108540860.00022114311413130240240341",
                                "_action": "action_1714310842476"
                            }
                        ]
                    }
                ]
            }
        ],
        "actions": [
            {
                "id": "action_1714310842476",
                "name": "reset",
                "actionType": "state",
                "resetModel": true,
                "stateMapping": [
                    {
                        "id": "stateMapping1714310878178",
                        "field": "FormState.step"
                    }
                ]
            },
            {
                "id": "action_1714371469576",
                "name": "Go to step 2",
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1714371476783",
                        "field": "FormState.step",
                        "value": "2"
                    }
                ]
            },
            {
                "id": "action_copy_1714371483488",
                "name": "Go to step 3",
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1714371476783",
                        "field": "FormState.step",
                        "value": "3"
                    }
                ]
            },
            {
                "id": "action_copy_1714371492012",
                "name": "Go to step 1",
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1714371476783",
                        "field": "FormState.step",
                        "value": "1"
                    }
                ]
            }
        ],
        "hideHint": true,
        "form_title": "New form ",
        "form_description": "",
        "form_maxWidth": 500,
        "state": {
            "step": "pictures",
            "message": "При пожаре воруй, убивай, еби гусей, жди ответного гудка!",
            "filter": ""
        },
        "general": {
            "edittingOn": false,
            "showState": true,
            "showModel": true
        },
        "hideActionsHint": true,
        "form_titleRaw": false
    },
    "tableTitle": null,
    "actions": null,
    "headers": [
        {
            "sysName": "arrayLink",
            "dataType": "arrayLink",
            "name": "Много ссылог",
            "id": "52411712666018687",
            "link": "WebUser",
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
            "linkOrArrayLinkType": true,
            "linkType": false,
            "json": false,
            "indexExists": false,
            "arrayLink": true,
            "array": false
        }
    ],
    "data": [
        {
            "arrayLink": []
        },
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {}
    ],
    "totalPages": 2,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [
        [
            "arrayLink.id",
            99304695
        ],
        [
            "arrayLink.firstName",
            99304695
        ],
        [
            "arrayLink.lastName",
            99304695
        ]
    ],
    "writeFields": [
        "pictures",
        "one_picture",
        "arrayLink"
    ],
    "structures": {
        "99304695": {
            "id": 99304695,
            "dateCreated": "2024-04-07T14:55:52Z",
            "hidden": false,
            "dateHidden": null,
            "networkID": 20570,
            "name": "App users",
            "sysName": "WebUser",
            "jsonObject": "[{\"sysName\":\"notifications_counter\",\"name\":\"Notifications Counter\",\"dataType\":\"string\",\"id\":\"1\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"dateLastActivity\",\"name\":\"dateLastActivity\",\"dataType\":\"string\",\"id\":\"10\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"email\",\"name\":\"Email\",\"dataType\":\"string\",\"id\":\"11\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"phone\",\"name\":\"Phone\",\"dataType\":\"string\",\"id\":\"12\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"dateCreated\",\"name\":\"dateCreated\",\"dataType\":\"string\",\"id\":\"13\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"password\",\"name\":\"Password (hash)\",\"dataType\":\"string\",\"id\":\"14\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"id\",\"name\":\"Username (login)\",\"dataType\":\"id\",\"id\":\"15\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"custom_labels\",\"name\":\"Custom labels\",\"dataType\":\"json\",\"id\":\"2\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":true,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"gen_id\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"22931713599449141\",\"link\":\"genders\",\"group\":\"1712578571780\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"indexExists\":false,\"linkType\":true},{\"sysName\":\"userpic\",\"name\":\"User pic\",\"dataType\":\"file\",\"id\":\"3\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":{},\"groupName\":\"Contacts\",\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"user_ids\",\"name\":\"Users\",\"dataType\":\"arrayLink\",\"id\":\"33341712578573528\",\"link\":\"WebUser\",\"group\":\"1712578571780\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":true,\"json\":false,\"linkOrArrayLinkType\":true,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"user_id\",\"name\":\"Usver\",\"dataType\":\"link\",\"id\":\"39811712578574247\",\"link\":\"WebUser\",\"group\":\"1712578571780\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"indexExists\":false,\"linkType\":true},{\"sysName\":\"isBlocked\",\"name\":\"Block user\",\"dataType\":\"boolean\",\"id\":\"4\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"gender\",\"name\":\"Gender\",\"dataType\":\"string\",\"id\":\"5\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"systemMessage\",\"name\":\"System message\",\"dataType\":\"string\",\"id\":\"56921641637265680\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"lastName\",\"name\":\"Last name\",\"dataType\":\"string\",\"id\":\"6\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"notif_Email\",\"name\":\"Notify me by Email\",\"dataType\":\"boolean\",\"id\":\"61231639915065277\",\"link\":\"\",\"group\":\"1639915049523\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Yes\",\"No\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"firstName\",\"name\":\"First name\",\"dataType\":\"string\",\"id\":\"7\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"role\",\"name\":\"Roles\",\"dataType\":\"array\",\"id\":\"8\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":true,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"secret\",\"name\":\"secret\",\"dataType\":\"string\",\"id\":\"81131636839496227\",\"link\":\"\",\"group\":\"1636839487957\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"isAuthorization\",\"name\":\"isAuthorization\",\"dataType\":\"boolean\",\"id\":\"9\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"linkType\":false}]",
            "jsonGroupSettings": "[{\"name\":\"New Group 5\",\"id\":1712578571780,\"order\":4},{\"name\":\"Password restoring\",\"id\":1636839487957,\"order\":2},{\"name\":\"System fields (LEGACY)\",\"id\":-1776115286,\"order\":3},{\"name\":\"Notifications\",\"id\":1639915049523,\"order\":1},{\"name\":\"Contacts\",\"id\":-502807437,\"order\":0}]",
            "jsonViewIdSettings": "[{\"sysName\":\"firstName\"},{\"sysName\":\"lastName\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-04-20T07:50:59Z",
            "createBy": 0,
            "changedBy": 1,
            "_settings": null,
            "_nativeIndexSettings": null,
            "objectIDSysName": "id",
            "innerIDField": {
                "sysName": "id",
                "dataType": "id",
                "name": "Username (login)",
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
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "linkType": false,
                "json": false,
                "indexExists": false,
                "arrayLink": false,
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
            "sysName": "pictures",
            "dataType": "arrayLink",
            "name": "",
            "id": "86211714495762107",
            "link": "pictures",
            "group": "0",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 40,
            "linkIndexFieldSysName": [],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": {},
            "groupName": null,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": false,
            "json": false,
            "indexExists": false,
            "arrayLink": true,
            "array": false
        },
        {
            "sysName": "one_picture",
            "dataType": "link",
            "name": "Picture",
            "id": "75731714981605900",
            "link": "pictures",
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 41,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "json": false,
            "indexExists": false,
            "arrayLink": false,
            "array": false
        },
        {
            "sysName": "arrayLink",
            "dataType": "arrayLink",
            "name": "Много ссылог",
            "id": "52411712666018687",
            "link": "WebUser",
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
            "linkOrArrayLinkType": true,
            "linkType": false,
            "json": false,
            "indexExists": false,
            "arrayLink": true,
            "array": false
        }
    ],
    "quickSearch": null,
    "httpParams": null,
    "cardCustomHtml": null,
    "cardCustomLayout": null,
    "comment": "Мультишаговая форма"
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
