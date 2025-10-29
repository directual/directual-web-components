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
    "sl": "new_application_agent",
    "pageSize": "10",
    "headerField": null,
    "params": {
        "steps": [
            {
                "id": "default_step",
                "sysName": "default step",
                "elements": [
                    {
                        "id": "elmnt_1759242867233",
                        "type": "text",
                        "paraText": "<h3 class=\"font-semibold text-neutral-800 mb-4 flex items-center\">\n    <span class=\"w-8 h-8 bg-primary-blue rounded-full flex items-center justify-center text-white text-sm font-bold mr-3\">1</span>\n    Заполните общую информацию\n  </h3>"
                    },
                    {
                        "id": "elmnt_1759220321776",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17592203234790.0241040242404411003020322",
                                "_field": "property_type",
                                "_field_required": true
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1759220335192",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17592203367250.22443344010330412333203",
                                "_field": "goal",
                                "_field_required": true,
                                "_input_type": "state",
                                "_state_field": "goal",
                                "_edit_state_input_label": "Цели",
                                "_edit_state_type": "select",
                                "_edit_state_options": [
                                    {
                                        "key": "Для жизни",
                                        "value": "Для жизни"
                                    },
                                    {
                                        "key": "Инвестиции",
                                        "value": "Инвестиции"
                                    },
                                    {
                                        "key": "Сдача в аренду",
                                        "value": "Сдача в аренду"
                                    },
                                    {
                                        "key": "Для коммерции",
                                        "value": "Для коммерции"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1759223365898",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17592233805740.130203113131423310210232",
                                "_field": "budget",
                                "_field_required": true
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1759220342892",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17592203474540.21201132140413014242424",
                                "_field": "budget_type",
                                "_field_required": true,
                                "_input_type": "state",
                                "_state_field": "budger",
                                "_edit_state_input_label": "Источник бюджета",
                                "_edit_state_type": "select",
                                "_edit_state_options": [
                                    {
                                        "key": "Собственные средства",
                                        "value": "Собственные средства"
                                    },
                                    {
                                        "key": "Ипотека",
                                        "value": "Ипотека"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1759221570898",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17592215722010.12143241100343204212112",
                                "_field": "additional_info",
                                "_input_type": "object",
                                "_state_field": "budger",
                                "_field_add_description": true,
                                "_field_description_text": "<!-- Info Section -->\n<div id=\"info-section\">\n    <div class=\"bg-blue-50 border border-blue-200 rounded-lg\">\n        <div class=\"flex items-start space-x-2\">\n            <i class=\"fa-solid fa-info-circle text-blue-600 m-2\"></i>\n            <div>\n                <p class=\"text-blue-700 text-sm py-2\">Укажите дополнительную информацию, которая отражает запрос клиента. </p>\n            </div>\n        </div>\n    </div>\n</div>",
                                "_field_set_default": false,
                                "_field_default_value": "Укажите дополнительную информацию, которая поможет агенту подобрать для вас лучшие варианты. ",
                                "_field_hide_label": false
                            }
                        ]
                    }
                ],
                "CSSclass": "bg-neutral-50 rounded-xl border border-neutral-200 mb-6 p-3 mb:p-6",
                "sectionVisibility": "always",
                "sectionCustomVisibility": "default step, init"
            },
            {
                "id": "step_1759242993228",
                "sysName": "Contact",
                "elements": [
                    {
                        "id": "elmnt_1759243076562",
                        "type": "text",
                        "paraText": "<!-- Step 2: Contact Information -->\n                    <h3 class=\"font-semibold text-neutral-800 mb-4 flex items-center\">\n                        <span class=\"w-8 h-8 bg-primary-blue rounded-full flex items-center justify-center text-white text-sm font-bold mr-3\">2</span>\n                        Контактная информация\n                    </h3>"
                    },
                    {
                        "id": "elmnt_1759243018678",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17592430203640.42011014423344441402131",
                                "_field": "user_id",
                                "_field_add_tooltip": false,
                                "_field_tooltip_text": "",
                                "_input_type": "object",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "fill_dropbox_users_for_agent",
                                "_field_arrayLink_endpoint_params": {},
                                "_field_link_bottomSelect": true,
                                "_field_link_reset": false
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1761725364522",
                        "type": "text",
                        "paraText": "<!-- Тогл -->\n    <button\n      id=\"toggleBtn\"\n      data-action-type=\"action\"\n      data-action-data=\"toggle_new_client\"\n      class=\"relative inline-flex items-center h-8 w-16 rounded-full bg-gray-300 focus:outline-none transition-colors duration-200 ease-in-out\">\n      <span\n        id=\"toggleCircle\"\n        class=\"inline-block h-6 w-6 bg-white rounded-full shadow transform transition-transform duration-200 ease-in-out translate-x-1\">\n      </span>\n    </button>"
                    },
                    {
                        "id": "elmnt_1759243041059",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17592430429530.004114400440403402123404",
                                "_field": "phone",
                                "_input_type": "object",
                                "_state_field": "FIO",
                                "_edit_state_type": "multiselect",
                                "_edit_state_manual_json": "manual",
                                "_field_set_default": false,
                                "_field_default_value": ""
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1759243048711",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17592430513080.201124304430343323224313",
                                "_field": "email",
                                "_input_type": "object",
                                "_state_field": "phone",
                                "_conditionalView": false
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1759243804839",
                        "type": "submit",
                        "submitLabel": "Создать заявку",
                        "submitAdditionalMapping": true,
                        "submitMapping": [
                            {
                                "id": "submitMapping1759243843396",
                                "field": "budget_type",
                                "value": "{{FormState.budger}}"
                            },
                            {
                                "id": "submitMapping1759243846260",
                                "field": "goal",
                                "value": "{{FormState.goal}}"
                            },
                            {
                                "id": "submitMapping1759243848959",
                                "field": "status",
                                "value": "Создана"
                            },
                            {
                                "id": "submitMapping1759243853363",
                                "field": "type",
                                "value": "Покупка"
                            },
                            {
                                "id": "submitMapping1759244045951",
                                "field": "budget",
                                "value": "{{budget}}"
                            },
                            {
                                "id": "submitMapping1759244059693",
                                "field": "additional_info",
                                "value": "{{additional_info}}"
                            },
                            {
                                "id": "submitMapping1759244074510",
                                "field": "FIO",
                                "value": "{{FIO}}"
                            },
                            {
                                "id": "submitMapping1759244100128",
                                "field": "phone",
                                "value": "{{phone}}"
                            },
                            {
                                "id": "submitMapping1759244109759",
                                "field": "email",
                                "value": "{{email}}"
                            }
                        ],
                        "submitStep": "close"
                    }
                ],
                "CSSclass": "bg-neutral-50 rounded-xl border border-neutral-200 mb-6 p-3 mb:p-6",
                "sectionVisibility": "always"
            },
            {
                "id": "step_submitted",
                "sysName": "submitted",
                "elements": [
                    {
                        "id": "elmnt_1712052683797",
                        "type": "submit",
                        "hintColor": "ok",
                        "hintTitle": "Спасибо!",
                        "hintText": "Отправлено",
                        "submitLabel": "Создать заявку",
                        "submitAdditionalMapping": true,
                        "submitMapping": [
                            {
                                "id": "submitMapping1759222445602",
                                "field": "budget_type",
                                "value": "{{FormState.budger}}"
                            },
                            {
                                "id": "submitMapping1759222463100",
                                "field": "goal",
                                "value": "{{FormState.goal}}"
                            },
                            {
                                "id": "submitMapping1759222606724",
                                "field": "status",
                                "value": "Создан"
                            },
                            {
                                "id": "submitMapping1759222617343",
                                "field": "type",
                                "value": "Покупка"
                            }
                        ],
                        "_conditionalView": false,
                        "submitStep": "close"
                    }
                ],
                "sectionVisibility": "custom",
                "sectionCustomVisibility": "никогда"
            },
            {
                "id": "step_1759223969956",
                "sysName": "close",
                "sectionVisibility": "custom",
                "sectionCustomVisibility": "close",
                "elements": [
                    {
                        "id": "elmnt_1759223985077",
                        "type": "redirect",
                        "redirect_url": "/applications/"
                    }
                ]
            },
            {
                "id": "step_1759246756534",
                "sysName": "init",
                "sectionVisibility": "custom",
                "sectionCustomVisibility": "init",
                "elements": [
                    {
                        "id": "elmnt_1759246828911",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17592469177760.3204102342202104033301",
                                "_action": "action_1759246831460",
                                "_conditionalView": false,
                                "_conditions": [
                                    {
                                        "id": "condition_1761653020758",
                                        "_conditionalView_field": "user_id",
                                        "_conditionalView_operator": "isNull"
                                    }
                                ],
                                "_action_conditional_disable_or_hide": "disable",
                                "_action_oneTime": false,
                                "_action_label": ""
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": [
                            {
                                "id": "condition_1761653332375",
                                "_conditionalView_field": "user_id",
                                "_conditionalView_operator": "isNotNull"
                            }
                        ]
                    }
                ]
            }
        ],
        "popup_width": null,
        "form_maxWidth": null,
        "state": {
            "step": "init",
            "popup": null,
            "loading": "false",
            "goal": "Для жизни",
            "budger": "Собственные средства",
            "FIO": "",
            "phone": "",
            "new_client": "false"
        },
        "actions": [
            {
                "id": "action_1759246831460",
                "name": "init",
                "actionType": "state",
                "autoAction": true,
                "stateMapping": [
                    {
                        "id": "stateMapping1759246844546",
                        "field": "phone",
                        "value": "{{user_id.phone}}",
                        "value_raw": false
                    },
                    {
                        "id": "stateMapping1759246850414",
                        "field": "email",
                        "value": "{{user_id.email}}",
                        "value_raw": false
                    },
                    {
                        "id": "stateMapping1759246893283",
                        "field": "FormState.step",
                        "value": "default step"
                    }
                ],
                "endpoint": "get_user_FIO_phone_email_for_agent",
                "autoAction_delay": null
            },
            {
                "id": "action_1761725517702",
                "name": "toggle_new_client",
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1761725538686",
                        "field": "FormState.new_client",
                        "value": "true"
                    }
                ],
                "_blank": false,
                "_href": "https://lenta.ru"
            }
        ],
        "general": {
            "saveState": false,
            "autosubmit": "no_autosubmit",
            "autosubmit_model": [
                "user_id"
            ],
            "showModel": false,
            "showFullModel": false,
            "showState": true
        },
        "_condition_library": []
    },
    "tableTitle": null,
    "actions": [],
    "headers": [
        {
            "sysName": "agent_id",
            "name": "Агент",
            "dataType": "link",
            "id": "52351759136428196",
            "link": "WebUser",
            "group": "0",
            "tags": "",
            "indexing": true,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 3,
            "linkIndexFieldSysName": [
                "id"
            ],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": {},
            "groupName": null,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": true,
            "array": false
        },
        {
            "sysName": "user_id",
            "name": "Клиент ",
            "dataType": "link",
            "id": "48701759136406732",
            "link": "WebUser",
            "group": "0",
            "tags": "",
            "indexing": true,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 2,
            "linkIndexFieldSysName": [
                "id"
            ],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": {},
            "groupName": null,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": true,
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        }
    ],
    "data": [
        {
            "user_id": {
                "email": "rusgaisin@gmail.com",
                "lastName": "Гайсин",
                "firstName": "Руслан",
                "id": "rusgaisin@gmail.com",
                "phone": "79172705131"
            },
            "id": "aa9e0c40-c56b-4677-a199-d49d1c2a7a1d"
        },
        {
            "user_id": {
                "email": "rusgaisin@gmail.com",
                "lastName": "Гайсин",
                "firstName": "Руслан",
                "id": "rusgaisin@gmail.com",
                "phone": "79172705131"
            },
            "id": "30abb9bd-ea1a-4399-95f8-aa3670de36d2"
        },
        {
            "user_id": {
                "email": "rusgaisin@gmail.com",
                "lastName": "Гайсин",
                "firstName": "Руслан",
                "id": "rusgaisin@gmail.com",
                "phone": "79172705131"
            },
            "id": "a2ab69c9-bb0e-4e16-92c8-ff2b77b24362"
        },
        {
            "user_id": {
                "email": "rusgaisin@gmail.com",
                "lastName": "Гайсин",
                "firstName": "Руслан",
                "id": "rusgaisin@gmail.com",
                "phone": "79172705131"
            },
            "id": "fcda5c8d-14c4-4872-a5fd-ef2bd0ce5221"
        },
        {
            "user_id": {
                "email": "rusgaisin@gmail.com",
                "lastName": "Гайсин",
                "firstName": "Руслан",
                "id": "rusgaisin@gmail.com",
                "phone": "79172705131"
            },
            "id": "21722c78-d1ec-45f4-85da-3592cf0dbab6"
        },
        {
            "user_id": {
                "email": "rusgaisin@gmail.com",
                "lastName": "Гайсин",
                "firstName": "Руслан",
                "id": "rusgaisin@gmail.com",
                "phone": "79172705131"
            },
            "id": "8a15bbf4-b609-45f5-952d-da62025331ab"
        },
        {
            "user_id": {
                "email": "rusgaisin@gmail.com",
                "lastName": "Гайсин",
                "firstName": "Руслан",
                "id": "rusgaisin@gmail.com",
                "phone": "79172705131"
            },
            "id": "c2d7fe95-109a-4260-ab97-ce65cfca284b"
        },
        {
            "user_id": {
                "email": "rusgaisin@gmail.com",
                "lastName": "Гайсин",
                "firstName": "Руслан",
                "id": "rusgaisin@gmail.com",
                "phone": "79172705131"
            },
            "id": "53b92289-a09e-4448-b918-80ee9cac16c6"
        },
        {
            "agent_id": "rusgaisin@gmail.com",
            "user_id": {
                "email": "baraschek",
                "lastName": "Шушурина",
                "firstName": "Анна",
                "id": "baraschek",
                "phone": "79172700001"
            },
            "id": "4c62d7f0-6bba-4844-80c1-facaba6acd79"
        },
        {
            "agent_id": "rusgaisin@gmail.com",
            "user_id": {
                "email": "baraschek",
                "lastName": "Шушурина",
                "firstName": "Анна",
                "id": "baraschek",
                "phone": "79172700001"
            },
            "id": "9b9cabbf-8c7a-4ab3-b63e-5c99f5f074f2"
        }
    ],
    "totalPages": 2,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [
        [
            "agent_id.id",
            99424199
        ],
        [
            "user_id.id",
            99424199
        ],
        [
            "user_id.fatherName",
            99424199
        ],
        [
            "user_id.phone",
            99424199
        ],
        [
            "user_id.email",
            99424199
        ],
        [
            "user_id.firstName",
            99424199
        ],
        [
            "user_id.lastName",
            99424199
        ],
        [
            "id",
            99425353
        ]
    ],
    "writeFields": [
        "id",
        "deleted",
        "date_create_app",
        "application_id",
        "email",
        "phone",
        "FIO",
        "budget",
        "budget_type",
        "additional_info",
        "property_type",
        "goal",
        "object_id",
        "status",
        "type",
        "agent_id",
        "user_id"
    ],
    "structures": {
        "99424199": {
            "networkID": 34461,
            "sysName": "WebUser",
            "name": "App users",
            "id": 99424199,
            "dateCreated": "2025-10-10T08:10:35Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"notifications_counter\",\"name\":\"Notifications Counter\",\"dataType\":\"string\",\"id\":\"1\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"dateLastActivity\",\"name\":\"dateLastActivity\",\"dataType\":\"string\",\"id\":\"10\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"closed_applications\",\"name\":\"Закрытые заявки\",\"dataType\":\"number\",\"id\":\"10861761567172239\",\"link\":\"\",\"group\":\"1758016720667\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"email\",\"name\":\"Email\",\"dataType\":\"string\",\"id\":\"11\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"phone\",\"name\":\"Phone\",\"dataType\":\"string\",\"id\":\"12\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"dateCreated\",\"name\":\"dateCreated\",\"dataType\":\"string\",\"id\":\"13\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"password\",\"name\":\"Password (hash)\",\"dataType\":\"string\",\"id\":\"14\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"objects_count\",\"name\":\"Количество объектов\",\"dataType\":\"number\",\"id\":\"14661758013570867\",\"link\":\"\",\"group\":\"1758013543847\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"id\",\"name\":\"Username (login)\",\"dataType\":\"id\",\"id\":\"15\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"secret\",\"name\":\"Secret\",\"dataType\":\"string\",\"id\":\"15751756840351674\",\"link\":\"\",\"group\":\"1756840338934\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"comment\",\"name\":\"Комментарий\",\"dataType\":\"string\",\"id\":\"16001760707374363\",\"link\":\"\",\"group\":\"1758016720667\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"notif_tg\",\"name\":\"Оповещение в telegram\",\"dataType\":\"boolean\",\"id\":\"18061756841950002\",\"link\":\"\",\"group\":\"1756841910106\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Да\",\"Нет\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"custom_labels\",\"name\":\"Custom labels\",\"dataType\":\"json\",\"id\":\"2\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"mortgage_type\",\"name\":\"Тип ипотеки\",\"dataType\":\"string\",\"id\":\"23191760684751253\",\"link\":\"\",\"group\":\"1758016720667\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"notif_Email\",\"name\":\"Оповещение по email\",\"dataType\":\"boolean\",\"id\":\"24281756841922586\",\"link\":\"\",\"group\":\"1756841910106\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Да\",\"Нет\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"userpic\",\"name\":\"User pic\",\"dataType\":\"file\",\"id\":\"3\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":{},\"groupName\":\"Contacts\",\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"down_payment\",\"name\":\"Первоначальный взнос\",\"dataType\":\"decimal\",\"id\":\"31341760684518483\",\"link\":\"\",\"group\":\"1758016720667\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"imask\":\"{\\n    mask: '₽num',\\n    blocks: {\\n      num: {\\n        mask: Number,\\n        thousandsSeparator: ' '\\n      }\\n    }\\n  }\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"notifications_count\",\"name\":\"\",\"dataType\":\"number\",\"id\":\"34391759396254509\",\"link\":\"\",\"group\":\"1756841910106\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"offer_signed_date\",\"name\":\"Дата подписания публичной оферты\",\"dataType\":\"date\",\"id\":\"36481759339313256\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"market_portfolio_value\",\"name\":\"Рыночная стоимость портфеля\",\"dataType\":\"decimal\",\"id\":\"39061758013724685\",\"link\":\"\",\"group\":\"1758013543847\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"isBlocked\",\"name\":\"Block user\",\"dataType\":\"boolean\",\"id\":\"4\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"fatherName\",\"name\":\"Отчество\",\"dataType\":\"string\",\"id\":\"43791759323115100\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"payments_per_month\",\"name\":\"Платежей в месяц\",\"dataType\":\"decimal\",\"id\":\"44921758013974704\",\"link\":\"\",\"group\":\"1758013543847\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"View\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"47621757359258171\",\"link\":\"\",\"group\":\"1757359140620\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"sum_square\",\"name\":\"Общая площадь\",\"dataType\":\"decimal\",\"id\":\"48421758641468898\",\"link\":\"\",\"group\":\"1758013543847\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"gender\",\"name\":\"Gender\",\"dataType\":\"string\",\"id\":\"5\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"client_type\",\"name\":\"Тип клиента\",\"dataType\":\"string\",\"id\":\"51551760684787372\",\"link\":\"\",\"group\":\"1758016720667\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"choise_application_bool\",\"name\":\"\",\"dataType\":\"boolean\",\"id\":\"52551759236401066\",\"link\":\"\",\"group\":\"1757359140620\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"goal\",\"name\":\"Цель\",\"dataType\":\"string\",\"id\":\"57331760684769450\",\"link\":\"\",\"group\":\"1758016720667\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"lastName\",\"name\":\"Last name\",\"dataType\":\"string\",\"id\":\"6\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"all_applications\",\"name\":\"Все заявки\",\"dataType\":\"number\",\"id\":\"63381761567136108\",\"link\":\"\",\"group\":\"1758016720667\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"last_month_applications\",\"name\":\"Заявки за месяц\",\"dataType\":\"number\",\"id\":\"63901761567189156\",\"link\":\"\",\"group\":\"1758016720667\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"total_portfolio_value\",\"name\":\"Общая стоимость портфеля\",\"dataType\":\"decimal\",\"id\":\"64201758013715392\",\"link\":\"\",\"group\":\"1758013543847\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"invested\",\"name\":\"Вложено\",\"dataType\":\"decimal\",\"id\":\"65291758013946623\",\"link\":\"\",\"group\":\"1758013543847\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"imask\":\"{\\n    mask: '₽num',\\n    blocks: {\\n      num: {\\n        mask: Number,\\n        thousandsSeparator: ' '\\n      }\\n    }\\n  }\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"mat_capital\",\"name\":\"Материнский капитал\",\"dataType\":\"decimal\",\"id\":\"66071760684669136\",\"link\":\"\",\"group\":\"1758016720667\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"imask\":\"{\\n    mask: '₽num',\\n    blocks: {\\n      num: {\\n        mask: Number,\\n        thousandsSeparator: ' '\\n      }\\n    }\\n  }\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"notification_type\",\"name\":\"Способ оповещения\",\"dataType\":\"string\",\"id\":\"69691759326638399\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"firstName\",\"name\":\"First name\",\"dataType\":\"string\",\"id\":\"7\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"last_contact\",\"name\":\"Последний контакт\",\"dataType\":\"date\",\"id\":\"74381760684818351\",\"link\":\"\",\"group\":\"1758016720667\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"agent\",\"name\":\"Агенты\",\"dataType\":\"arrayLink\",\"id\":\"74481760705763300\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"choise_obj_application\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"74831759235959446\",\"link\":\"real_estate_objects\",\"group\":\"1757359140620\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"rented_count\",\"name\":\"Сколько в аренде\",\"dataType\":\"number\",\"id\":\"75181758356440489\",\"link\":\"\",\"group\":\"1758013543847\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"earned_archive\",\"name\":\"Сколько заработано (архив)\",\"dataType\":\"decimal\",\"id\":\"79571758014057185\",\"link\":\"\",\"group\":\"1758013543847\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"role\",\"name\":\"Roles\",\"dataType\":\"array\",\"id\":\"8\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":true},{\"sysName\":\"rental_income\",\"name\":\"Доход от аренды\",\"dataType\":\"decimal\",\"id\":\"81961758023642015\",\"link\":\"\",\"group\":\"1758013543847\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"active_applications\",\"name\":\"Активные заявки\",\"dataType\":\"number\",\"id\":\"86471761567157457\",\"link\":\"\",\"group\":\"1758016720667\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"isAuthorization\",\"name\":\"isAuthorization\",\"dataType\":\"boolean\",\"id\":\"9\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"debt\",\"name\":\"Долг\",\"dataType\":\"decimal\",\"id\":\"93741758014022408\",\"link\":\"\",\"group\":\"1758013543847\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"telegram\",\"name\":\"Telegram\",\"dataType\":\"string\",\"id\":\"94981759323328772\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"source\",\"name\":\"Источник\",\"dataType\":\"string\",\"id\":\"96871760784918277\",\"link\":\"\",\"group\":\"1758016720667\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"system_status\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"98541757403098870\",\"link\":\"\",\"group\":\"1757359140620\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false}]",
            "jsonGroupSettings": "[{\"id\":1756841910106,\"name\":\"Notification\",\"order\":3},{\"id\":1757359140620,\"name\":\"Settings\",\"order\":4},{\"id\":1758016720667,\"name\":\"Agent Filled\",\"order\":6},{\"id\":1758013543847,\"name\":\"Portfolio indicators\",\"order\":5},{\"id\":-1776115286,\"name\":\"System fields\",\"order\":1},{\"id\":1756840338934,\"name\":\"Password restored\",\"order\":2},{\"id\":-502807437,\"name\":\"Contacts\",\"order\":0}]",
            "jsonViewIdSettings": "[]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false,\"onlinePriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2025-10-27T12:13:35Z",
            "createBy": 0,
            "changedBy": 29295,
            "_settings": null,
            "_nativeIndexSettings": null,
            "objectIDSysName": "id",
            "innerIDField": {
                "sysName": "id",
                "name": "Username (login)",
                "dataType": "id",
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
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "array": false
            },
            "folderId": null
        },
        "99425353": {
            "networkID": 34461,
            "sysName": "application",
            "name": "Заявки",
            "id": 99425353,
            "dateCreated": "2025-09-29T09:00:01Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"application_id\",\"name\":\"IDAPP\",\"dataType\":\"string\",\"id\":\"90061759256605385\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"user_id\",\"name\":\"Клиент \",\"dataType\":\"link\",\"id\":\"48701759136406732\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[\"id\"],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":true,\"array\":false},{\"sysName\":\"agent_id\",\"name\":\"Агент\",\"dataType\":\"link\",\"id\":\"52351759136428196\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[\"id\"],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":true,\"array\":false},{\"sysName\":\"type\",\"name\":\"Тип\",\"dataType\":\"string\",\"id\":\"47921759136526728\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"status\",\"name\":\"Статус\",\"dataType\":\"string\",\"id\":\"19221759136536052\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"date_create_app\",\"name\":\"Дата создания\",\"dataType\":\"date\",\"id\":\"87531759258466687\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"deleted\",\"name\":\"\",\"dataType\":\"boolean\",\"id\":\"57731761027971952\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"object_id\",\"name\":\"Объект\",\"dataType\":\"link\",\"id\":\"27031759136555279\",\"link\":\"real_estate_objects\",\"group\":\"1759136492964\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"goal\",\"name\":\"Цели\",\"dataType\":\"string\",\"id\":\"62531759136605679\",\"link\":\"\",\"group\":\"1759136506081\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"property_type\",\"name\":\"Тип объекта\",\"dataType\":\"string\",\"id\":\"57481759136619135\",\"link\":\"\",\"group\":\"1759136506081\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"budget_type\",\"name\":\"Источник бюджета\",\"dataType\":\"string\",\"id\":\"87871759136727490\",\"link\":\"\",\"group\":\"1759136506081\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"additional_info\",\"name\":\"Дополнительная информация\",\"dataType\":\"string\",\"id\":\"65631759136665813\",\"link\":\"\",\"group\":\"1759136506081\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"budget\",\"name\":\"Первоначальный взнос\",\"dataType\":\"decimal\",\"id\":\"61961759222838272\",\"link\":\"\",\"group\":\"1759136506081\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"imask\":\"{\\n    mask: '₽num',\\n    blocks: {\\n      num: {\\n        mask: Number,\\n        thousandsSeparator: ' '\\n      }\\n    }\\n  }\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"FIO\",\"name\":\"ФИО\",\"dataType\":\"string\",\"id\":\"13701759240130511\",\"link\":\"\",\"group\":\"1759240119560\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"phone\",\"name\":\"Телефон\",\"dataType\":\"string\",\"id\":\"33321759240138395\",\"link\":\"\",\"group\":\"1759240119560\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"phone\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"imask\":\"{\\n    mask: '+{0}(000)000-00-00',\\n    lazy: false\\n  }\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"email\",\"name\":\"email\",\"dataType\":\"string\",\"id\":\"95341759240157792\",\"link\":\"\",\"group\":\"1759240119560\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"email\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false}]",
            "jsonGroupSettings": "[{\"id\":1759136492964,\"name\":\"Продажа\",\"order\":0},{\"id\":1759136506081,\"name\":\"Покупка\",\"order\":1},{\"id\":1759240119560,\"name\":\"Контактные данные\",\"order\":2}]",
            "jsonViewIdSettings": null,
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2025-10-21T06:26:20Z",
            "createBy": 29295,
            "changedBy": 29295,
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "array": false
            },
            "folderId": 33869199
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "deleted",
            "name": "",
            "dataType": "boolean",
            "id": "57731761027971952",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "date_create_app",
            "name": "Дата создания",
            "dataType": "date",
            "id": "87531759258466687",
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
                "timeFormat": "",
                "isUTC": "false"
            },
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
            "sysName": "application_id",
            "name": "IDAPP",
            "dataType": "string",
            "id": "90061759256605385",
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
        },
        {
            "sysName": "email",
            "name": "email",
            "dataType": "string",
            "id": "95341759240157792",
            "link": "",
            "group": "1759240119560",
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
            "format": "email",
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
                "isUTC": "false"
            },
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
            "sysName": "phone",
            "name": "Телефон",
            "dataType": "string",
            "id": "33321759240138395",
            "link": "",
            "group": "1759240119560",
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
                "imask": "{\n    mask: '+{0}(000)000-00-00',\n    lazy: false\n  }",
                "isUTC": "false"
            },
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
            "sysName": "FIO",
            "name": "ФИО",
            "dataType": "string",
            "id": "13701759240130511",
            "link": "",
            "group": "1759240119560",
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
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "budget",
            "name": "Первоначальный взнос",
            "dataType": "decimal",
            "id": "61961759222838272",
            "link": "",
            "group": "1759136506081",
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
                "imask": "{\n    mask: '₽num',\n    blocks: {\n      num: {\n        mask: Number,\n        thousandsSeparator: ' '\n      }\n    }\n  }",
                "isUTC": "false"
            },
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
            "sysName": "budget_type",
            "name": "Источник бюджета",
            "dataType": "string",
            "id": "87871759136727490",
            "link": "",
            "group": "1759136506081",
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
            "sysName": "additional_info",
            "name": "Дополнительная информация",
            "dataType": "string",
            "id": "65631759136665813",
            "link": "",
            "group": "1759136506081",
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
                "isUTC": "false"
            },
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
            "sysName": "property_type",
            "name": "Тип объекта",
            "dataType": "string",
            "id": "57481759136619135",
            "link": "",
            "group": "1759136506081",
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
        },
        {
            "sysName": "goal",
            "name": "Цели",
            "dataType": "string",
            "id": "62531759136605679",
            "link": "",
            "group": "1759136506081",
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
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "object_id",
            "name": "Объект",
            "dataType": "link",
            "id": "27031759136555279",
            "link": "real_estate_objects",
            "group": "1759136492964",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "status",
            "name": "Статус",
            "dataType": "string",
            "id": "19221759136536052",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "type",
            "name": "Тип",
            "dataType": "string",
            "id": "47921759136526728",
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
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "agent_id",
            "name": "Агент",
            "dataType": "link",
            "id": "52351759136428196",
            "link": "WebUser",
            "group": "0",
            "tags": "",
            "indexing": true,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 3,
            "linkIndexFieldSysName": [
                "id"
            ],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": {},
            "groupName": null,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": true,
            "array": false
        },
        {
            "sysName": "user_id",
            "name": "Клиент ",
            "dataType": "link",
            "id": "48701759136406732",
            "link": "WebUser",
            "group": "0",
            "tags": "",
            "indexing": true,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 2,
            "linkIndexFieldSysName": [
                "id"
            ],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": {},
            "groupName": null,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": true,
            "array": false
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
