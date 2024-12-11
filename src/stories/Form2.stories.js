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
    "sl": "getPutSpecificNomenclature",
    "pageSize": "10",
    "headerField": null,
    "params": {
        "steps": [
            {
                "id": "default_step",
                "sysName": "default step",
                "elements": [
                    {
                        "id": "elmnt_1731552208041",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17315522118590.020444433312002343110221",
                                "_field": "nomenclatureName",
                                "_field_required": true
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1731552217491",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17315522252880.32203023232003314233311",
                                "_field": "nomenclatureType",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "getTmcTypeFilteredByActive"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732208632136",
                        "type": "text",
                        "paraText": "<button id=\"goback\" style=\"height:48px\" class=\"_F2GoE \n                        false\n                        undefined\n                        undefined\n                        false\n                        false \n                        undefined \n                        undefined\n                        undefined\n                        false\n                        undefined\n                        undefined\n                        undefined\n                        false\n                        undefined\n                        undefined\n                        \"\n        onclick=\"window.open('https://visionservicecrm.directual.app/addtmctype', '_blank');\">+ Добавить Тип </button>\n"
                    },
                    {
                        "id": "elmnt_1731552289590",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17315522942370.211403123230140102323143",
                                "_field": "nomenclatureVendor",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "getVendorCompnay"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1731552322682",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17315523289410.0213332310140342010323443",
                                "_field": "nomenclatureModel"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1731552334289",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17315523382110.212032442001122034443312",
                                "_field": "nomenclatureVersion"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1731552342424",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17315523464190.4303043321022240240322",
                                "_field": "nomenclatureArticle"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1731552350121",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17315523547120.014320234111314043000002",
                                "_field": "nomenclatureUnitsOfMeasure",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "getUnitsOfMeasureFilteredActive",
                                "_field_required": true,
                                "_field_arrayLink_type": "select",
                                "_field_set_default": true,
                                "_field_default_value": "e91c9d31-8729-4c16-b195-f04920db553d"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732208366850",
                        "type": "text",
                        "paraText": "<button id=\"goback\" style=\"height:48px\" class=\"_F2GoE \n                        false\n                        undefined\n                        undefined\n                        false\n                        false \n                        undefined \n                        undefined\n                        undefined\n                        false\n                        undefined\n                        undefined\n                        undefined\n                        false\n                        undefined\n                        undefined\n                        \"\n        onclick=\"window.open('https://visionservicecrm.directual.app/addunitsofmeasure', '_blank');\">+ Добавить Ед. измерения </button>\n"
                    },
                    {
                        "id": "elmnt_1731552370957",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17315523728930.31040003001442140413042",
                                "_field": "nomenclatureComments"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732722362357",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17327223650320.33022104020412013242224",
                                "_field": "sortingPriority"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732802870581",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17328028721000.121131314301200313243133",
                                "_field": "nomenclatureStatus",
                                "_field_set_default": true,
                                "_field_default_value": "true"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1731552378140",
                        "type": "submit",
                        "submitLabel": "Сохранить",
                        "submitIcon": "done"
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
                        "hintTitle": "",
                        "hintText": "Номенклатура был сохранена"
                    },
                    {
                        "id": "elmnt_1731552421694",
                        "type": "redirect",
                        "redirect_delay": 1,
                        "redirect_url": "/nomenclature"
                    }
                ]
            }
        ],
        "form_title": "Редактировать номенклатуру",
        "general": {
            "debugConditions": false,
            "edittingOn": true
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "nomenclatureName",
            "dataType": "string",
            "name": "Номенклатура",
            "id": "60841731512330254",
            "link": null,
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 1,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
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
            "sysName": "nomenclatureUnitsOfMeasure",
            "dataType": "arrayLink",
            "name": "Ед. измерения",
            "id": "53521731512612952",
            "link": "unitsOfMeasures",
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
            "format": null,
            "formatOptions": null,
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
            "sysName": "nomenclatureComments",
            "dataType": "string",
            "name": "Комментарии",
            "id": "80831731512508887",
            "link": null,
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 7,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
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
            "sysName": "nomenclatureArticle",
            "dataType": "string",
            "name": "Артикул",
            "id": "10071731512479725",
            "link": null,
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 6,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
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
            "sysName": "nomenclatureVersion",
            "dataType": "string",
            "name": "Версия",
            "id": "70141731512455062",
            "link": null,
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 5,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
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
            "sysName": "nomenclatureModel",
            "dataType": "string",
            "name": "Марка/Модель",
            "id": "42601731512432644",
            "link": null,
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
            "format": null,
            "formatOptions": null,
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
            "sysName": "nomenclatureVendor",
            "dataType": "link",
            "name": "Вендор",
            "id": "32491731512392123",
            "link": "companies",
            "group": "0",
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
            "format": null,
            "formatOptions": null,
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
            "sysName": "nomenclatureType",
            "dataType": "link",
            "name": "Тип",
            "id": "41841731512354676",
            "link": "tmcTypes",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "sortingPriority",
            "dataType": "number",
            "name": "Приоритет",
            "id": "45321732722164245",
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
            "sysName": "nomenclatureStatus",
            "dataType": "boolean",
            "name": "Статус",
            "id": "90681732802250181",
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
                "dateLocale": "en-gb",
                "booleanOptions": [
                    "Активно",
                    "Не активно"
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "array": false
        }
    ],
    "data": [
        {
            "nomenclatureName": "Test",
            "id": "6929345d-21d0-43bc-9e93-bcd74ef00f6f",
            "nomenclatureUnitsOfMeasure": [
                {
                    "unitsOfMeasure": "шт.",
                    "id": "e91c9d31-8729-4c16-b195-f04920db553d"
                }
            ],
            "sortingPriority": 10,
            "nomenclatureStatus": false
        }
    ],
    "totalPages": 1,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [
        [
            "id",
            99355160
        ],
        [
            "nomenclatureName",
            99355160
        ],
        [
            "nomenclatureUnitsOfMeasure.id",
            99355112
        ],
        [
            "nomenclatureUnitsOfMeasure.unitsOfMeasure",
            99355112
        ],
        [
            "nomenclatureComments",
            99355160
        ],
        [
            "nomenclatureArticle",
            99355160
        ],
        [
            "nomenclatureVersion",
            99355160
        ],
        [
            "nomenclatureModel",
            99355160
        ],
        [
            "nomenclatureVendor.id",
            99244537
        ],
        [
            "nomenclatureVendor.name",
            99244537
        ],
        [
            "nomenclatureType.id",
            99355111
        ],
        [
            "nomenclatureType.types",
            99355111
        ],
        [
            "sortingPriority",
            99355160
        ],
        [
            "nomenclatureStatus",
            99355160
        ]
    ],
    "writeFields": [
        "id",
        "nomenclatureUnitsOfMeasure",
        "nomenclatureComments",
        "nomenclatureArticle",
        "nomenclatureVersion",
        "nomenclatureModel",
        "nomenclatureVendor",
        "nomenclatureType",
        "nomenclatureName",
        "sortingPriority",
        "nomenclatureStatus"
    ],
    "structures": {
        "99244537": {
            "networkID": 17932,
            "id": 99244537,
            "dateCreated": "2023-08-23T12:16:53Z",
            "hidden": false,
            "dateHidden": null,
            "name": "Companies",
            "sysName": "companies",
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"tencaht\",\"dataType\":\"string\",\"name\":\"Tencaht\",\"id\":\"13001692806795385\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"location\",\"dataType\":\"link\",\"name\":\"Город\",\"id\":\"39341692806559306\",\"link\":\"cities\",\"group\":\"0\",\"tags\":\"\",\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[\"id\"],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":true,\"array\":false},{\"sysName\":\"name\",\"dataType\":\"string\",\"name\":\"Название\",\"id\":\"41531692806494313\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"shortName\",\"dataType\":\"string\",\"name\":\"Официальное наименование\",\"id\":\"42691692806508269\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"address\",\"dataType\":\"string\",\"name\":\"Адрес\",\"id\":\"43451692806592939\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"telegram\",\"dataType\":\"string\",\"name\":\"Telegram\",\"id\":\"43871692806714670\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"companyType\",\"dataType\":\"arrayLink\",\"name\":\"Признаки компании\",\"id\":\"44191693410178333\",\"link\":\"company_types\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"instagramm\",\"dataType\":\"string\",\"name\":\"Instagramm\",\"id\":\"48681692806678193\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"companyPhone\",\"dataType\":\"string\",\"name\":\"Телефон компании\",\"id\":\"53551720005077674\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":17,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"comments\",\"dataType\":\"string\",\"name\":\"Комментарий\",\"id\":\"59451692806811105\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"inn\",\"dataType\":\"string\",\"name\":\"ИНН\",\"id\":\"60511692806611628\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"vk\",\"dataType\":\"string\",\"name\":\"VK\",\"id\":\"62621692806779570\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"whatsapp\",\"dataType\":\"string\",\"name\":\"WhatsApp\",\"id\":\"66911719926803270\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"website\",\"dataType\":\"string\",\"name\":\"Сайт\",\"id\":\"73421692806643452\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"toBeDeleted\",\"dataType\":\"boolean\",\"name\":\"\",\"id\":\"80481693922290303\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"activityTypes\",\"dataType\":\"string\",\"name\":\"Виды деятельности\",\"id\":\"93381696845820849\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"companyEmail\",\"dataType\":\"string\",\"name\":\" Email  компании\",\"id\":\"93781720005058097\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":16,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"email\",\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"name\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-07-11T12:50:14Z",
            "createBy": 19088,
            "changedBy": 20579,
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
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "array": false
            },
            "folderId": 33770433
        },
        "99355111": {
            "networkID": 17932,
            "id": 99355111,
            "dateCreated": "2024-11-13T13:00:53Z",
            "hidden": false,
            "dateHidden": null,
            "name": "Типы",
            "sysName": "tmcTypes",
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"statusText\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"14221732286946611\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"typeImage\",\"dataType\":\"file\",\"name\":\"Пиктограмма\",\"id\":\"17901732801579144\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"description\",\"dataType\":\"string\",\"name\":\"Описание\",\"id\":\"24441731502902312\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"status\",\"dataType\":\"boolean\",\"name\":\"Статус\",\"id\":\"28441731502919071\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Активен\",\"Не активен\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"multipleChoice\":[{\"value\":\"active\",\"label\":\"Активен\"},{\"value\":\"notActive\",\"label\":\"Не активен\"}]},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"statusColor\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"81051732094983263\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"testPhone\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"81241732534509415\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"imask\":\"{\\n    mask: '+{7}(000)000-00-00',\\n    lazy: false\\n  }\",\"isUTC\":\"false\"},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"sortingPriority\",\"dataType\":\"number\",\"name\":\"Приоритет\",\"id\":\"84141731512141491\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"imask\":\"{\\n    \\n  }\",\"isUTC\":\"false\"},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"types\",\"dataType\":\"string\",\"name\":\"Тип\",\"id\":\"91891731502877779\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"types\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-11-29T13:25:03Z",
            "createBy": 20579,
            "changedBy": 20579,
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
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "array": false
            },
            "folderId": 33827349
        },
        "99355112": {
            "networkID": 17932,
            "id": 99355112,
            "dateCreated": "2024-11-13T13:05:45Z",
            "hidden": false,
            "dateHidden": null,
            "name": "Ед.измерения",
            "sysName": "unitsOfMeasures",
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"toBeDeleted\",\"dataType\":\"boolean\",\"name\":\"\",\"id\":\"15361732888175525\",\"link\":\"\",\"group\":\"1732888197152\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"unitsOfMeasureForRecalculation\",\"dataType\":\"link\",\"name\":\"Ед. изм-я для пересчета\",\"id\":\"42731731511998426\",\"link\":\"unitsOfMeasures\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"recalculationFormulaString\",\"dataType\":\"string\",\"name\":\"Формула пересчета\",\"id\":\"43041732540606310\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"coefficient\",\"dataType\":\"number\",\"name\":\"К\",\"id\":\"44781731512054181\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"imask\":\"{\\n    mask: Number, // Use the number mask\\n    min: 1,       // Minimum value for positive integers\\n    max: Infinity, // No upper limit (or set one if needed)\\n    thousandsSeparator: '', // No separators\\n  }\",\"isUTC\":\"false\"},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"statusColor\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"51291732542155151\",\"link\":\"\",\"group\":\"1732888197152\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"sortingPriority\",\"dataType\":\"number\",\"name\":\"Приоритет\",\"id\":\"68361731511974058\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"imask\":\"{\\n  \\n  }\",\"isUTC\":\"false\"},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"statusText\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"69131732797211013\",\"link\":\"\",\"group\":\"1732888197152\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"staus\",\"dataType\":\"boolean\",\"name\":\"Статус\",\"id\":\"73591731513329007\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Активный\",\"Не активный\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"multipleChoice\":[{\"value\":\"active\",\"label\":\"Активен\"},{\"value\":\"notActive\",\"label\":\"Не активен\"}]},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"unitsOfMeasure\",\"dataType\":\"string\",\"name\":\" Ед. изм-я\",\"id\":\"77641731511938996\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false}]",
            "jsonGroupSettings": "[{\"name\":\"System\",\"id\":1732888197152,\"order\":0}]",
            "jsonViewIdSettings": "[{\"sysName\":\"unitsOfMeasure\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-11-29T13:51:08Z",
            "createBy": 20579,
            "changedBy": 20579,
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
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "array": false
            },
            "folderId": 33827349
        },
        "99355160": {
            "networkID": 17932,
            "id": 99355160,
            "dateCreated": "2024-11-13T15:38:26Z",
            "hidden": false,
            "dateHidden": null,
            "name": "Номенклатура",
            "sysName": "tmcNomenclature",
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"nomenclatureArticle\",\"dataType\":\"string\",\"name\":\"Артикул\",\"id\":\"10071731512479725\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"nomenclatureStatusText\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"16951732802271598\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"nomenclatureStatusColor\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"17701732802265614\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"nomenclatureVendor\",\"dataType\":\"link\",\"name\":\"Вендор\",\"id\":\"32491731512392123\",\"link\":\"companies\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"nomenclatureType\",\"dataType\":\"link\",\"name\":\"Тип\",\"id\":\"41841731512354676\",\"link\":\"tmcTypes\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"nomenclatureModel\",\"dataType\":\"string\",\"name\":\"Марка/Модель\",\"id\":\"42601731512432644\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"sortingPriority\",\"dataType\":\"number\",\"name\":\"Приоритет\",\"id\":\"45321732722164245\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"imask\":\"{\\n    mask: Number,\\n    min: -10000,\\n    max: 10000,\\n    thousandsSeparator: ' '\\n  }\",\"isUTC\":\"false\"},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"nomenclatureUnitsOfMeasure\",\"dataType\":\"arrayLink\",\"name\":\"Ед. измерения\",\"id\":\"53521731512612952\",\"link\":\"unitsOfMeasures\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"nomenclatureName\",\"dataType\":\"string\",\"name\":\"Номенклатура\",\"id\":\"60841731512330254\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"nomenclatureVersion\",\"dataType\":\"string\",\"name\":\"Версия\",\"id\":\"70141731512455062\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"nomenclatureComments\",\"dataType\":\"string\",\"name\":\"Комментарии\",\"id\":\"80831731512508887\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"nomenclatureStatus\",\"dataType\":\"boolean\",\"name\":\"Статус\",\"id\":\"90681732802250181\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Активно\",\"Не активно\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"nomenclatureName\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-11-29T13:39:59Z",
            "createBy": 20579,
            "changedBy": 20579,
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
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "array": false
            },
            "folderId": 33827349
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "nomenclatureUnitsOfMeasure",
            "dataType": "arrayLink",
            "name": "Ед. измерения",
            "id": "53521731512612952",
            "link": "unitsOfMeasures",
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
            "format": null,
            "formatOptions": null,
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
            "sysName": "nomenclatureComments",
            "dataType": "string",
            "name": "Комментарии",
            "id": "80831731512508887",
            "link": null,
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 7,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
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
            "sysName": "nomenclatureArticle",
            "dataType": "string",
            "name": "Артикул",
            "id": "10071731512479725",
            "link": null,
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 6,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
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
            "sysName": "nomenclatureVersion",
            "dataType": "string",
            "name": "Версия",
            "id": "70141731512455062",
            "link": null,
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 5,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
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
            "sysName": "nomenclatureModel",
            "dataType": "string",
            "name": "Марка/Модель",
            "id": "42601731512432644",
            "link": null,
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
            "format": null,
            "formatOptions": null,
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
            "sysName": "nomenclatureVendor",
            "dataType": "link",
            "name": "Вендор",
            "id": "32491731512392123",
            "link": "companies",
            "group": "0",
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
            "format": null,
            "formatOptions": null,
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
            "sysName": "nomenclatureType",
            "dataType": "link",
            "name": "Тип",
            "id": "41841731512354676",
            "link": "tmcTypes",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "nomenclatureName",
            "dataType": "string",
            "name": "Номенклатура",
            "id": "60841731512330254",
            "link": null,
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 1,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
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
            "sysName": "sortingPriority",
            "dataType": "number",
            "name": "Приоритет",
            "id": "45321732722164245",
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
            "sysName": "nomenclatureStatus",
            "dataType": "boolean",
            "name": "Статус",
            "id": "90681732802250181",
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
                "dateLocale": "en-gb",
                "booleanOptions": [
                    "Активно",
                    "Не активно"
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
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
    "sl": "witdrawalRequest",
    "pageSize": "10",
    "headerField": null,
    "params": {
        "steps": [
            {
                "id": "default_step",
                "sysName": "new request",
                "elements": [
                    {
                        "id": "elmnt_1733929926428",
                        "type": "text",
                        "paraText": "<h2>\n  Request Withdrawal\n</h2>"
                    },
                    {
                        "id": "elmnt_1733929248910",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17339292505520.22041300344332233131231",
                                "_field": "option_id",
                                "_field_link_type": "tags",
                                "_field_arrayLink_endpoint": "ddWDOptions",
                                "_field_required": true
                            },
                            {
                                "id": "17339292520890.34341410041223440323234",
                                "_field": "amount",
                                "_field_required": true
                            }
                        ],
                        "_input_fields_in_a_row": 2,
                        "_input_fields_in_a_row_column": "column"
                    },
                    {
                        "id": "elmnt_1733930060747",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17339300620450.103203241343012243032033",
                                "_action": "action_1733929964468",
                                "_action_icon": "money",
                                "_action_button_type": "accent",
                                "_action_standardRequired": true,
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Requested..."
                            },
                            {
                                "id": "17339300629260.03300131303304144021133",
                                "_action": "action_1733929899126",
                                "_action_label": "",
                                "_action_icon": "back"
                            }
                        ],
                        "_actions_in_a_row": 2
                    }
                ]
            },
            {
                "id": "step_1733929890690",
                "sysName": "default step",
                "elements": [
                    {
                        "id": "elmnt_1733929937239",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17339299386890.4401040111044204203411",
                                "_action": "action_1733929898580",
                                "_action_icon": "money",
                                "_action_button_type": "accent",
                                "_action_standardRequired": false
                            },
                            {
                                "id": "17339299394360.2440023340301442343002",
                                "_action": "action_1733930002198",
                                "_action_icon": "list"
                            }
                        ],
                        "_actions_in_a_row": 2
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
        "hideHint": true,
        "form_title": "",
        "actions": [
            {
                "id": "action_1733929898580",
                "name": "Request Withdrawal",
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1733929908905",
                        "field": "FormState.step",
                        "value": "new request"
                    }
                ]
            },
            {
                "id": "action_1733929899126",
                "name": "Cancel",
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1733929958625",
                        "field": "FormState.step",
                        "value": "default step"
                    }
                ]
            },
            {
                "id": "action_1733929964468",
                "name": "Request",
                "actionType": "endpoint",
                "endpoint": "witdrawalRequest",
                "sendModel": false,
                "actionSubmit": true
            },
            {
                "id": "action_1733930002198",
                "name": "All Withdrawal Requests",
                "actionType": "link",
                "_href": "/withdraw/all-requests"
            }
        ],
        "hideActionsHint": true
    },
    "tableTitle": null,
    "actions": [],
    "headers": [],
    "data": [],
    "totalPages": 0,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [],
    "writeFields": [
        "comment",
        "option_id",
        "amount"
    ],
    "structures": {},
    "isSuccessWrite": false,
    "writeError": null,
    "writeResponse": null,
    "fileds": [
        {
            "sysName": "comment",
            "dataType": "string",
            "name": "Comment",
            "id": "95061733929173098",
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
            "array": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "option_id",
            "dataType": "link",
            "name": "Withdrawal Option",
            "id": "44021733929157685",
            "link": "withdrawal_options",
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
            "array": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "amount",
            "dataType": "decimal",
            "name": "Amount",
            "id": "70001733929003207",
            "link": "",
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
                "imask": "{\n    mask: Number,\n    scale: 2,\n  \tmin: 0,\n    thousandsSeparator: '',\n    padFractionalZeros: false,\n    normalizeZeros: true,\n    radix: ',',\n    mapToRadix: ['.']\n  }",
                "isUTC": "false"
            },
            "groupName": null,
            "array": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false
        }
    ],
    "quickSearch": "",
    "httpParams": {},
    "cardCustomHtml": null,
    "cardCustomLayout": {},
    "comment": "Withdrawal request",
    "response": false
}

let authExample = {
    "isAuth": true,
    "custom_labels": "",
    "role": "jo_recruiter,jo_agreement,jo_hrbp,st_orgdev,hg_hrbp,admin,demo",
    "who_delegated_ids": "",
    "lastName": "Ershov",
    "firstName": "Pavel",
    "token": "e4728cb6-1fe7-4efc-9fcc-7c579c09a113",
    "whom_delegate_ids": "",
    "notifications_counter": "",
    "nid": 21335,
    "user": "hrbp",
    "userpic": "https://api.directual.com/fileUploaded/basic-template/5fe98a71-196e-4f0d-98cb-be3ee8968fbf.jpg",
    "id": "hrbp"
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
