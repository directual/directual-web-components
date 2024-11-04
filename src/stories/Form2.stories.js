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
    "sl": "getRequestByID",
    "pageSize": "10",
    "headerField": null,
    "params": {
        "steps": [
            {
                "id": "default_step",
                "sysName": "default step",
                "elements": [
                    {
                        "id": "elmnt_1730660313467",
                        "type": "text",
                        "paraText": "<style>\n  .zayavka_wrapper b {\n  padding-left:8px\n  }\n  .zayavka_wrapper {\n  margin-top: 8px;\n  display:flex;\n  align-items: center\n  }\n</style>\n<div class=\"zayavka_wrapper\">\n  Заявка от: <b>{{name}} {{inn}}/{{kpp}}</b>\n</div>\n<div class=\"zayavka_wrapper\">\n  Заявитель: <b>{{person_name}}</b>\n</div>\n<div class=\"zayavka_wrapper\">\n  Email: <b>{{email}}</b>\n</div>"
                    },
                    {
                        "id": "elmnt_1730663030562",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17306630339620.43432334044420204312004",
                                "_action": "action_1730663038545",
                                "_action_icon": "mail"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730664277410",
                        "type": "text",
                        "paraText": "<div class=\"zayavka_wrapper\">\n  Свидетельство ИНН: <a target=\"_blank\" href=\"{{document_1}}\" class='icon icon-clip'>посмотреть</a>\n</div>\n<div class=\"zayavka_wrapper\">\n  Свидетельство ОГРН: <a target=\"_blank\" href=\"{{document_2}}\" class='icon icon-clip'>посмотреть</a>\n</div>\n<div class=\"zayavka_wrapper\">\n  Устав: <a target=\"_blank\" href=\"{{document_3}}\" class='icon icon-clip'>посмотреть</a>\n</div>\n<div class=\"zayavka_wrapper\">\n  Заявление о присоединении: <a target=\"_blank\" href=\"{{document_1}}\" class='icon icon-clip'>посмотреть</a>\n</div>"
                    },
                    {
                        "id": "elmnt_1730663541751",
                        "type": "subheader",
                        "subheaderTitle": "Чек-лист ОНЗ"
                    },
                    {
                        "id": "elmnt_1730663556368",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17306635591010.134202444144301214423222",
                                "_field": "check_1",
                                "_field_arrayLink_type": "checkboxes",
                                "_field_link_pageSize": 1,
                                "_field_arrayLink_endpoint": "checkOPZ",
                                "_field_arrayLink_endpoint_params": {
                                    "check": "FormState.check1"
                                },
                                "_conditionalView": false,
                                "_field_required": true,
                                "_field_hide_label": true
                            },
                            {
                                "id": "17306635602780.33331010133212423033414",
                                "_field": "check_2",
                                "_field_arrayLink_type": "checkboxes",
                                "_field_arrayLink_endpoint": "checkOPZ",
                                "_field_arrayLink_endpoint_params": {
                                    "check": "FormState.check2"
                                },
                                "_field_required": true,
                                "_field_hide_label": true
                            },
                            {
                                "id": "17306635604080.34321322110231324041342",
                                "_field": "check_3",
                                "_field_arrayLink_type": "checkboxes",
                                "_field_arrayLink_endpoint": "checkOPZ",
                                "_field_arrayLink_endpoint_params": {
                                    "check": "FormState.check3"
                                },
                                "_field_required": true,
                                "_field_hide_label": true
                            },
                            {
                                "id": "17306635609760.12100434023223232412244",
                                "_field": "check_4",
                                "_field_arrayLink_type": "checkboxes",
                                "_field_arrayLink_endpoint": "checkOPZ",
                                "_field_arrayLink_endpoint_params": {
                                    "check": "FormState.check4"
                                },
                                "_field_required": true,
                                "_field_hide_label": true
                            }
                        ],
                        "_input_fields_in_a_row": 4,
                        "_input_fields_in_a_row_column": "column"
                    },
                    {
                        "id": "elmnt_1730660896793",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17306608996260.33302432400013203424311",
                                "_action": "action_1730660882199",
                                "_action_icon": "done",
                                "_action_button_type": "accent",
                                "_action_addTooltip": true,
                                "_action_addTooltip_text": "Недостающие документы запросите у контрагента по электронной почте",
                                "_conditionalView": true,
                                "_action_conditional_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1730660937131",
                                        "_conditionalView_field": "check_1",
                                        "_conditionalView_operator": "isNull",
                                        "_conditionalView_value": "{\"inn\":true,\"ogrn\":true,\"ustav\":true,\"zayavl\":true}"
                                    },
                                    {
                                        "id": "condition_1730663802722",
                                        "_conditionalView_field": "check_2",
                                        "_conditionalView_operator": "isNull"
                                    },
                                    {
                                        "id": "condition_1730663814023",
                                        "_conditionalView_field": "check_3",
                                        "_conditionalView_operator": "isNull"
                                    },
                                    {
                                        "id": "condition_1730663815221",
                                        "_conditionalView_field": "check_4",
                                        "_conditionalView_operator": "isNull"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
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
                "id": "step_1730663140277",
                "sysName": "email",
                "elements": [
                    {
                        "id": "elmnt_1730663142631",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17306631448190.41344042221221132311232",
                                "_input_type": "state",
                                "_state_field": "email",
                                "_edit_state_input_label": "Сообщите контрагенту каких документов не хватает"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730665558344",
                        "type": "hint",
                        "hintText": "Контрагенту будет выслана уникальная ссылка на редактирование анкеты, он сам прикрепит некорректные или недостающие документы."
                    },
                    {
                        "id": "elmnt_1730663178297",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17306631800280.1341003421133223421101",
                                "_action": "action_1730663170029",
                                "_action_label": "Отправить Email",
                                "_action_icon": "mail",
                                "_action_button_type": "accent"
                            },
                            {
                                "id": "17306631814600.0113343202201231211204242",
                                "_action": "action_1730663159963",
                                "_action_label": "Отменить",
                                "_action_icon": "close",
                                "_action_button_type": "danger"
                            }
                        ],
                        "_actions_in_a_row": 2
                    }
                ]
            }
        ],
        "general": {
            "edittingOn": true,
            "showModel": false,
            "closePopupOnClick": true
        },
        "actions": [
            {
                "id": "action_1730660882199",
                "name": "Согласовать Отделом Непрямых Закупок",
                "actionType": "endpoint",
                "endpoint": "actionsRequests",
                "mapping": [
                    {
                        "id": "mapping_1730665396020",
                        "field": "action",
                        "value": "onz_approve"
                    }
                ]
            },
            {
                "id": "action_1730663038545",
                "name": "Отправить email",
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1730663051095",
                        "field": "FormState.popup",
                        "value": "email"
                    }
                ]
            },
            {
                "id": "action_1730663159963",
                "name": "cancel email",
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1730663166331",
                        "field": "FormState.popup"
                    }
                ]
            },
            {
                "id": "action_1730663170029",
                "name": "send email",
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1730664720781",
                        "field": "FormState.popup"
                    }
                ]
            }
        ],
        "hideActionsHint": true,
        "state": {
            "step": "default step",
            "popup": null,
            "email": "Уважаемый {{person_name}}!",
            "check1": "inn",
            "check2": "kpp",
            "check3": "ustav",
            "check4": "join"
        },
        "popup_width": 600,
        "form_maxWidth": null
    },
    "tableTitle": null,
    "actions": null,
    "headers": [
        {
            "sysName": "color",
            "dataType": "string",
            "name": "",
            "id": "67921730653436432",
            "link": "",
            "group": "1730653428043",
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
            "format": "color",
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
            "sysName": "consent",
            "dataType": "arrayLink",
            "name": "Согласие",
            "id": "11571730649609439",
            "link": "consent",
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
            "linkOrArrayLinkType": true,
            "linkType": false,
            "arrayLink": true,
            "indexExists": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "date",
            "dataType": "date",
            "name": "Дата заявки",
            "id": "58211730649663165",
            "link": "",
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
            "formatOptions": {
                "customOptionLabel": "My option",
                "keyValue": {
                    "key": "key",
                    "value": "value",
                    "button": "One more"
                },
                "dateLocale": "ru",
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
                "dateFormat": "DD MMM, Y",
                "timeFormat": " HH:mm",
                "isUTC": "false"
            },
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
            "sysName": "document_1",
            "dataType": "file",
            "name": "Свидетельство ИНН",
            "id": "48451730649519443",
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
            "json": false,
            "array": false
        },
        {
            "sysName": "document_2",
            "dataType": "file",
            "name": "Свидетельство ОГРН",
            "id": "49211730649535477",
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
            "indexExists": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "document_3",
            "dataType": "file",
            "name": "Устав",
            "id": "32731730649539798",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "document_4",
            "dataType": "file",
            "name": "Заявление о присоединении",
            "id": "73661730649558943",
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
            "sysName": "email",
            "dataType": "string",
            "name": "Ваша электронная почта",
            "id": "83871730651386761",
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
            "format": "email",
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
            "sysName": "inn",
            "dataType": "string",
            "name": "ИНН",
            "id": "10891730649504144",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "kpp",
            "dataType": "string",
            "name": "КПП",
            "id": "94291730649506280",
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
            "json": false,
            "array": false
        },
        {
            "sysName": "name",
            "dataType": "string",
            "name": "Название компании",
            "id": "37661730649496557",
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
            "indexExists": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "person_name",
            "dataType": "string",
            "name": "Ваше имя",
            "id": "32731730651408429",
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
            "indexExists": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "status",
            "dataType": "link",
            "name": "Статус заявки",
            "id": "71611730653435781",
            "link": "request_statuses",
            "group": "1730653428043",
            "tags": "",
            "indexing": true,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 0,
            "linkIndexFieldSysName": [
                "role_ids"
            ],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": {},
            "groupName": null,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": true,
            "typeVariable": {},
            "json": false,
            "array": false
        }
    ],
    "data": [
        {
            "document_4": "https://api.directual.com/fileUploaded/lamoda-lkp/web/d779df56-a5a5-4d5f-b804-20b655118fb5.pdf",
            "name": "ООО \"Дирекчуал\"",
            "email": "pavel@directual.com",
            "kpp": "774301001",
            "document_3": "https://api.directual.com/fileUploaded/lamoda-lkp/web/ddf4497c-3698-43b9-bb60-20b00c0e50d1.tiff",
            "id": "42016a2c-101f-4672-8e4f-59f5c81ea45e",
            "date": 1730709551000,
            "status": {
                "id": "1_onz",
                "status": "На согласовании у Отдела Непрямых Закупок"
            },
            "document_2": "https://api.directual.com/fileUploaded/lamoda-lkp/web/203d11e8-b7e7-41b6-bd51-e924634bf310.jpeg",
            "inn": "7743927983",
            "consent": [
                "Согласен"
            ],
            "document_1": "https://api.directual.com/fileUploaded/lamoda-lkp/web/91834db4-9468-4079-bf54-fe7263d4b580.jpeg",
            "person_name": "Павел Ершов"
        }
    ],
    "totalPages": 1,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [
        [
            "color",
            99353178
        ],
        [
            "consent.id",
            99353179
        ],
        [
            "date",
            99353178
        ],
        [
            "document_1",
            99353178
        ],
        [
            "document_2",
            99353178
        ],
        [
            "document_3",
            99353178
        ],
        [
            "document_4",
            99353178
        ],
        [
            "email",
            99353178
        ],
        [
            "id",
            99353178
        ],
        [
            "inn",
            99353178
        ],
        [
            "kpp",
            99353178
        ],
        [
            "name",
            99353178
        ],
        [
            "person_name",
            99353178
        ],
        [
            "status.id",
            99353181
        ],
        [
            "status.status",
            99353181
        ]
    ],
    "writeFields": [
        "id",
        "check_4",
        "check_3",
        "check_2",
        "check_1"
    ],
    "structures": {
        "99353178": {
            "networkID": 22351,
            "sysName": "business_requests",
            "name": "Заявки на сотрудничество",
            "id": 99353178,
            "dateCreated": "2024-11-03T15:57:36Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"inn\",\"dataType\":\"string\",\"name\":\"ИНН\",\"id\":\"10891730649504144\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"consent\",\"dataType\":\"arrayLink\",\"name\":\"Согласие\",\"id\":\"11571730649609439\",\"link\":\"consent\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"document_3\",\"dataType\":\"file\",\"name\":\"Устав\",\"id\":\"32731730649539798\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"person_name\",\"dataType\":\"string\",\"name\":\"Ваше имя\",\"id\":\"32731730651408429\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"name\",\"dataType\":\"string\",\"name\":\"Название компании\",\"id\":\"37661730649496557\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"check_3\",\"dataType\":\"arrayLink\",\"name\":\"Проверено\",\"id\":\"43691730663466267\",\"link\":\"request_npz_checklist\",\"group\":\"1730663457026\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"document_1\",\"dataType\":\"file\",\"name\":\"Свидетельство ИНН\",\"id\":\"48451730649519443\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"document_2\",\"dataType\":\"file\",\"name\":\"Свидетельство ОГРН\",\"id\":\"49211730649535477\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"check_1\",\"dataType\":\"arrayLink\",\"name\":\"Проверено\",\"id\":\"50471730663464134\",\"link\":\"request_npz_checklist\",\"group\":\"1730663457026\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"check_4\",\"dataType\":\"arrayLink\",\"name\":\"Проверено\",\"id\":\"51021730663491653\",\"link\":\"request_npz_checklist\",\"group\":\"1730663457026\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"date\",\"dataType\":\"date\",\"name\":\"Дата заявки\",\"id\":\"58211730649663165\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD MMM, Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"color\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"67921730653436432\",\"link\":\"\",\"group\":\"1730653428043\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"status\",\"dataType\":\"link\",\"name\":\"Статус заявки\",\"id\":\"71611730653435781\",\"link\":\"request_statuses\",\"group\":\"1730653428043\",\"tags\":\"\",\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[\"role_ids\"],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":true,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"document_4\",\"dataType\":\"file\",\"name\":\"Заявление о присоединении\",\"id\":\"73661730649558943\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"email\",\"dataType\":\"string\",\"name\":\"Ваша электронная почта\",\"id\":\"83871730651386761\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"email\",\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"check_2\",\"dataType\":\"arrayLink\",\"name\":\"Проверено\",\"id\":\"87831730663464800\",\"link\":\"request_npz_checklist\",\"group\":\"1730663457026\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"kpp\",\"dataType\":\"string\",\"name\":\"КПП\",\"id\":\"94291730649506280\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false}]",
            "jsonGroupSettings": "[{\"name\":\"Процесс согласования\",\"id\":1730653428043,\"order\":0},{\"name\":\"Чек-лист ОНЗ\",\"id\":1730663457026,\"order\":1}]",
            "jsonViewIdSettings": "[{\"sysName\":\"name\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-11-03T19:52:00Z",
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
            "folderId": 33826091
        },
        "99353179": {
            "networkID": 22351,
            "sysName": "consent",
            "name": "Consent",
            "id": 99353179,
            "dateCreated": "2024-11-03T16:00:44Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": null,
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-11-03T16:00:44Z",
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
                "group": "",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": null,
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
            "folderId": 33826092
        },
        "99353181": {
            "networkID": 22351,
            "sysName": "request_statuses",
            "name": "Статусы заявок",
            "id": 99353181,
            "dateCreated": "2024-11-03T17:04:26Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"next_status_id\",\"dataType\":\"link\",\"name\":\"\",\"id\":\"51411730653729461\",\"link\":\"request_statuses\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"role_ids\",\"dataType\":\"arrayLink\",\"name\":\"Согласующие роли\",\"id\":\"56391730654526973\",\"link\":\"roles\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"status\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"95761730653466009\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"status\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": false,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-11-03T17:22:36Z",
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
            "folderId": 33826092
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "check_4",
            "dataType": "arrayLink",
            "name": "Проверено",
            "id": "51021730663491653",
            "link": "request_npz_checklist",
            "group": "1730663457026",
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
            "sysName": "check_3",
            "dataType": "arrayLink",
            "name": "Проверено",
            "id": "43691730663466267",
            "link": "request_npz_checklist",
            "group": "1730663457026",
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
            "linkType": false,
            "arrayLink": true,
            "indexExists": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "check_2",
            "dataType": "arrayLink",
            "name": "Проверено",
            "id": "87831730663464800",
            "link": "request_npz_checklist",
            "group": "1730663457026",
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
            "linkType": false,
            "arrayLink": true,
            "indexExists": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "check_1",
            "dataType": "arrayLink",
            "name": "Проверено",
            "id": "50471730663464134",
            "link": "request_npz_checklist",
            "group": "1730663457026",
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
            "linkOrArrayLinkType": true,
            "linkType": false,
            "arrayLink": true,
            "indexExists": false,
            "typeVariable": {},
            "json": false,
            "array": false
        }
    ],
    "quickSearch": null,
    "httpParams": null,
    "cardCustomHtml": null,
    "cardCustomLayout": null,
    "comment": "Формы",
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
