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
    "sl": "editApplicationByID",
    "pageSize": "10",
    "headerField": null,
    "params": {
        "steps": [
            {
                "id": "step_1716465415121",
                "sysName": "progress bar (always visible)",
                "sectionVisibility": "custom",
                "elements": [
                    {
                        "id": "elmnt_1716465427353",
                        "type": "steps",
                        "_formSteps": {
                            "stepsOrder": [
                                "2",
                                "3",
                                "4",
                                "5",
                                "6",
                                "7"
                            ],
                            "settings": {
                                "steps": {
                                    "2": true,
                                    "3": true,
                                    "4": true,
                                    "5": true,
                                    "6": true,
                                    "7": true,
                                    "2. Согласование HR Admin": true,
                                    "3. Согласование CnB": true,
                                    "4. Согласование HR BP": true,
                                    "5. Согласование Руководитель": true,
                                    "6. Согласование Директор (опциональный шаг)": true,
                                    "7. Ожидание кандидата (финальный шаг)": true
                                }
                            },
                            "stepSettings": [
                                null,
                                null,
                                {
                                    "title": "Согласование HR админом"
                                },
                                {
                                    "title": "Согласование CnB"
                                },
                                {
                                    "title": "Согласование HR BP"
                                },
                                {
                                    "title": "Согласование Руководитель"
                                },
                                {
                                    "title": "Согласование Директор"
                                },
                                {
                                    "title": "Ожидание Кандидата"
                                }
                            ]
                        }
                    }
                ],
                "sectionCustomVisibility": "2,3,4,5,6,7"
            },
            {
                "id": "default_step",
                "sysName": "2",
                "elements": [
                    {
                        "id": "elmnt_1716531870847",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17165318757680.32031212202332003212023",
                                "_field": "field4"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1716469848841",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17164698505690.21134011342110014230333",
                                "_action": "action_1716469400300",
                                "_action_icon": "back",
                                "_action_button_type": "danger",
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1716542791775",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "hr_admin,admin"
                                    }
                                ],
                                "_action_customRequired": false
                            },
                            {
                                "id": "17165427558220.23340110224012431000414",
                                "_action": "action_1716542614611",
                                "_action_icon": "ban",
                                "_action_button_type": "danger",
                                "_conditionalView": false,
                                "_action_customRequired": true,
                                "_action_customRequired_fields": [
                                    "field4"
                                ]
                            },
                            {
                                "id": "17165428373630.3213241002130201300022",
                                "_action": "action_1716542677798",
                                "_action_button_type": "accent",
                                "_action_icon": "forward"
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": [
                            {
                                "id": "condition_1716469862081",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "hr_admin,admin"
                            }
                        ],
                        "_actions_in_a_row": 3
                    }
                ]
            },
            {
                "id": "step_1716465475966",
                "sysName": "3"
            },
            {
                "id": "step_1716465494304",
                "sysName": "4"
            },
            {
                "id": "step_1716465511323",
                "sysName": "5"
            },
            {
                "id": "step_1716465535759",
                "sysName": "6"
            },
            {
                "id": "step_1716465589005",
                "sysName": "7"
            },
            {
                "id": "step_1716470081647",
                "sysName": "cancelled",
                "elements": [
                    {
                        "id": "elmnt_1716470091847",
                        "type": "hint",
                        "hintColor": "error",
                        "hintTitle": "Заявка отозвана"
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
                "id": "step_1716530982278",
                "sysName": "error",
                "elements": [
                    {
                        "id": "elmnt_1716530999178",
                        "type": "hint",
                        "hintColor": "error",
                        "hintTitle": "Ошибка",
                        "hintText": "{{FormState.errorMessage}}"
                    }
                ]
            },
            {
                "id": "step_copy_1716543101019",
                "sysName": "denied",
                "elements": [
                    {
                        "id": "elmnt_1716470091847",
                        "type": "hint",
                        "hintColor": "error",
                        "hintTitle": "Заявка отклонена"
                    }
                ]
            }
        ],
        "hideHint": true,
        "form_maxWidth": 650,
        "general": {
            "edittingOn": true
        },
        "state": {
            "step": "{{status_id}}",
            "popup": null,
            "errorMessage": "",
            "prevStep": ""
        },
        "actions": [
            {
                "id": "action_1716469400300",
                "name": "Отозвать",
                "actionType": "endpoint",
                "endpoint": "applicationAction",
                "mapping": [
                    {
                        "id": "mapping_1716469827636",
                        "field": "action",
                        "value": "cancel_application"
                    }
                ],
                "resetModel": false,
                "discardModel": false,
                "autoAction": false,
                "fieldChangeAction": false,
                "sendModel": false
            },
            {
                "id": "action_1716542614611",
                "name": "Отклонить",
                "actionType": "endpoint",
                "endpoint": "editApplicationByID",
                "sendModel": true,
                "mapping": [
                    {
                        "id": "mapping_1716542625435",
                        "field": "status_id",
                        "value": "denied"
                    }
                ]
            },
            {
                "id": "action_1716542677798",
                "name": "Согласовать",
                "actionType": "endpoint",
                "endpoint": "editApplicationByID",
                "sendModel": true,
                "mapping": [
                    {
                        "id": "mapping_1716542712007",
                        "field": "status_id",
                        "value": "3"
                    }
                ]
            }
        ],
        "hideActionsHint": true,
        "form_title": ""
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "status_id",
            "dataType": "link",
            "name": "Статус заявки",
            "id": "51161716293463975",
            "link": "application_statuses",
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 2,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "array": false,
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "field4",
            "dataType": "string",
            "name": "Поле для второго шага",
            "id": "25761716530387143",
            "link": "",
            "group": "1716530372249",
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        }
    ],
    "data": [
        {
            "status_id": {
                "id": "2",
                "status": "Согласование HR админ"
            },
            "id": "7f1eaf27-988d-432a-9afc-c41e6d6465ce"
        }
    ],
    "totalPages": 1,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [
        [
            "id",
            99313120
        ],
        [
            "status_id.id",
            99313122
        ],
        [
            "status_id.status",
            99313122
        ],
        [
            "status_id.id",
            99313122
        ],
        [
            "field4",
            99313120
        ]
    ],
    "writeFields": [
        "id",
        "field4",
        "status_id"
    ],
    "structures": {
        "99313120": {
            "id": 99313120,
            "dateCreated": "2024-05-21T11:59:40Z",
            "hidden": false,
            "dateHidden": null,
            "networkID": 20879,
            "name": "📜 Заявки",
            "sysName": "applications",
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"type_id\",\"dataType\":\"link\",\"name\":\"Тип заявки\",\"id\":\"23081716293484376\",\"link\":\"application_type\",\"group\":\"1716293471829\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"field4\",\"dataType\":\"string\",\"name\":\"Поле для второго шага\",\"id\":\"25761716530387143\",\"link\":\"\",\"group\":\"1716530372249\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"prev_status_id\",\"dataType\":\"link\",\"name\":\"Предыдущий статус\",\"id\":\"31931716293890656\",\"link\":\"application_statuses\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"app_number\",\"dataType\":\"string\",\"name\":\"Номер заявки\",\"id\":\"37171716293405564\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"date_created\",\"dataType\":\"date\",\"name\":\"Дата создания заявки\",\"id\":\"50321716294000672\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD MMM, Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"status_id\",\"dataType\":\"link\",\"name\":\"Статус заявки\",\"id\":\"51161716293463975\",\"link\":\"application_statuses\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"field1\",\"dataType\":\"string\",\"name\":\"Поле для первого шага (для n-1 и n-3)\",\"id\":\"56551716293383921\",\"link\":null,\"group\":\"1716293471829\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"field3\",\"dataType\":\"string\",\"name\":\"Поле для первого шага (для n-2 и n-4)\",\"id\":\"57801716295500644\",\"link\":null,\"group\":\"1716293471829\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"last_user_id\",\"dataType\":\"link\",\"name\":\"Последнее изменение\",\"id\":\"60431716293846869\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"log_ids\",\"dataType\":\"arrayLink\",\"name\":\"История заявки\",\"id\":\"70181716293864479\",\"link\":\"application_logs\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"array\":false},{\"sysName\":\"field2\",\"dataType\":\"string\",\"name\":\"Поле для первого шага (для n-1 и n-3)\",\"id\":\"84221716295491497\",\"link\":null,\"group\":\"1716293471829\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false}]",
            "jsonGroupSettings": "[{\"name\":\"Этап 1. Создание заявки\",\"id\":1716293471829,\"order\":0},{\"name\":\"Этап 2. Согласование HR admin\",\"id\":1716530372249,\"order\":1}]",
            "jsonViewIdSettings": "[{\"sysName\":\"app_number\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-05-24T06:00:00Z",
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
                "array": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false
            },
            "folderId": 33804727
        },
        "99313122": {
            "id": 99313122,
            "dateCreated": "2024-05-21T12:05:55Z",
            "hidden": false,
            "dateHidden": null,
            "networkID": 20879,
            "name": "Статус заявки",
            "sysName": "application_statuses",
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"status\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"19681716293163254\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"status\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": false,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-05-24T06:42:53Z",
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
                "array": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false
            },
            "folderId": 33804728
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
            "array": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "field4",
            "dataType": "string",
            "name": "Поле для второго шага",
            "id": "25761716530387143",
            "link": "",
            "group": "1716530372249",
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "status_id",
            "dataType": "link",
            "name": "Статус заявки",
            "id": "51161716293463975",
            "link": "application_statuses",
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 2,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "array": false,
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        }
    ],
    "quickSearch": null,
    "httpParams": null,
    "cardCustomHtml": null,
    "cardCustomLayout": null,
    "comment": "Редактирование и согласование заявки"
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
