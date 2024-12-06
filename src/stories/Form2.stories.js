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
    "sl": "staff_transfer",
    "pageSize": "10",
    "headerField": null,
    "params": {
        "steps": [
            {
                "id": "step_1726040058238",
                "sysName": "progress bar",
                "elements": [
                    {
                        "id": "elmnt_1726040074457",
                        "type": "text",
                        "paraText": "<style>.lmd-offer p {margin:10px 0}</style>\n<div classs=\"lmd\">\n<h2>Заявка {{number}}</h2>\n<p>Дата создания: {{date}}</p>\n<p>Статус заявки: {{status.status}}</p>\n<p>Кем создано: {{user_creator.employee_full_name}}</p>\n  <p>Ответственный за этап: {{responsible_employee_id.employee_full_name}}</p>\n<p>Дата последнего изменения:\n  {{last_change_date}}</p>\n</div>"
                    },
                    {
                        "id": "elmnt_1726040253875",
                        "type": "steps",
                        "_formSteps": {
                            "stepsOrder": [
                                "approval_new_direct",
                                "approval_new_up_direct",
                                "approval_current_direct",
                                "approval_out_hrbp",
                                "add_approval_out",
                                "approval_in_hrbp",
                                "add_approval_in",
                                "approval_in_cnb",
                                "approval_ss_specialist",
                                "approval_in_budget_holder",
                                "present_offer",
                                "offer_refused",
                                "approval_orgdev",
                                "approval_hr_admin",
                                "closed"
                            ],
                            "settings": {
                                "steps": {
                                    "progress bar": false,
                                    "approval_current_up_direct": true,
                                    "approval_approval_current_direct": true,
                                    "approval_current_direct": true,
                                    "approval_out_hrbp": true,
                                    "approval_in_hrbp": true,
                                    "add_approval_out": true,
                                    "approval_new_up_direct": true,
                                    "add_approval_in": true,
                                    "approval_in_cnb": true,
                                    "approval_in_budget_holder": true,
                                    "present_offer": true,
                                    "approval_orgdev": true,
                                    "approval_hr_admin": true,
                                    "closed": true,
                                    "offer_refused": true,
                                    "approval_new_direct": true,
                                    "approval_ss_specialist": true
                                }
                            },
                            "stepSettings": {
                                "approval_current_up_direct": {
                                    "title": "Согласование Верхнеуровневый руководитель"
                                },
                                "approval_current_direct": {
                                    "title": "Согласование с руководителем"
                                },
                                "approval_out_hrbp": {
                                    "title": "Согласование с отдающим HRBP"
                                },
                                "approval_in_hrbp": {
                                    "title": "Согласование с принимающим HRBP"
                                },
                                "add_approval_out": {
                                    "title": "Согласование с текущим HR директором направления"
                                },
                                "approval_new_up_direct": {
                                    "title": "Согласование с новым верхнеуровневым руководителем"
                                },
                                "add_approval_in": {
                                    "title": "Согласование с текущим HR директором направления"
                                },
                                "approval_in_cnb": {
                                    "title": "Согласование с принимающим CnB"
                                },
                                "approval_in_budget_holder": {
                                    "title": "Подтверждение от держателя бюджета"
                                },
                                "present_offer": {
                                    "title": "Презентация оффера"
                                },
                                "approval_orgdev": {
                                    "title": "Подтверждение от Orgdev"
                                },
                                "approval_hr_admin": {
                                    "title": "Подтверждение от HR Admin"
                                },
                                "closed": {
                                    "title": "Заявка закрыта"
                                },
                                "offer_refused": {
                                    "title": "Сотрудник отклонил оффер"
                                },
                                "approval_new_direct": {
                                    "title": "Согласование с новым руководителем"
                                },
                                "approval_ss_specialist": {
                                    "title": "Подтверждение от специалиста ШР"
                                }
                            }
                        }
                    }
                ],
                "sectionVisibility": "always"
            },
            {
                "id": "step_copy_1733426516499",
                "sysName": "approval_new_direct",
                "elements": [
                    {
                        "id": "elmnt_1726040565916",
                        "type": "text",
                        "paraText": "<b>Общие данные о переводе</b>"
                    },
                    {
                        "id": "elmnt_1726040568221",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406078490.022004404043104003301343",
                                "_field": "employee_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040626841",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040600291",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406498510.0031120303022104021434203",
                                "_field": "current_direct_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040663730",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040671676",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406741410.33113103323333123304412",
                                "_field": "planned_date",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040688242",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040697758",
                        "type": "text",
                        "paraText": "<b>Текущие данные по сотруднику</b>"
                    },
                    {
                        "id": "elmnt_1726040737501",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260407451930.14341411222424303134003",
                                "_field": "current_position",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040805444",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040738773",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260408195960.32041300442304243223301",
                                "_field": "current_division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040859585",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726640363502",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{current_org_structure}}"
                    },
                    {
                        "id": "elmnt_1726040868442",
                        "type": "text",
                        "paraText": "<b>Новые данные по сотруднику</b>"
                    },
                    {
                        "id": "elmnt_1726040900634",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260409027810.32012120130304431032131",
                                "_field": "new_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040915145",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040901379",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260409337130.34044234300421202120444",
                                "_field": "new_division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040946656",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726640395404",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{new_org_structure}}"
                    },
                    {
                        "id": "elmnt_1730319160755",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17303191631330.14020122023300102431144",
                                "_field": "new_employment_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_employment_type",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1730319255585",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040955528",
                        "type": "text",
                        "paraText": "<b>Согласующие лица</b>"
                    },
                    {
                        "id": "elmnt_1726040991914",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260410023030.32011020110233102444302",
                                "_field": "new_up_direct",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726041013530",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040992596",
                        "type": "input",
                        "_actions": [
                            {
                                "id": "17260410272230.11040442112144113000233"
                            }
                        ],
                        "_input_fields": [
                            {
                                "id": "17260410288100.03430142330212410110333",
                                "_field": "new_hrbp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726041053030",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "id": "default_step",
                "sysName": "approval_new_up_direct",
                "elements": [
                    {
                        "id": "elmnt_1726040565916",
                        "type": "text",
                        "paraText": "<b>Общие данные о переводе</b>"
                    },
                    {
                        "id": "elmnt_1726040568221",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406078490.022004404043104003301343",
                                "_field": "employee_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040626841",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040600291",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406498510.0031120303022104021434203",
                                "_field": "current_direct_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040663730",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040671676",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406741410.33113103323333123304412",
                                "_field": "planned_date",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040688242",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040697758",
                        "type": "text",
                        "paraText": "<b>Текущие данные по сотруднику</b>"
                    },
                    {
                        "id": "elmnt_1726040737501",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260407451930.14341411222424303134003",
                                "_field": "current_position",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040805444",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040738773",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260408195960.32041300442304243223301",
                                "_field": "current_division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040859585",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726640363502",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{current_org_structure}}"
                    },
                    {
                        "id": "elmnt_1726040868442",
                        "type": "text",
                        "paraText": "<b>Новые данные по сотруднику</b>"
                    },
                    {
                        "id": "elmnt_1726040900634",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260409027810.32012120130304431032131",
                                "_field": "new_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040915145",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040901379",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260409337130.34044234300421202120444",
                                "_field": "new_division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040946656",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726640395404",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{new_org_structure}}"
                    },
                    {
                        "id": "elmnt_1730319160755",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17303191631330.14020122023300102431144",
                                "_field": "new_employment_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_employment_type",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1730319255585",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040955528",
                        "type": "text",
                        "paraText": "<b>Согласующие лица</b>"
                    },
                    {
                        "id": "elmnt_1726040991914",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260410023030.32011020110233102444302",
                                "_field": "new_up_direct",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726041013530",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040992596",
                        "type": "input",
                        "_actions": [
                            {
                                "id": "17260410272230.11040442112144113000233"
                            }
                        ],
                        "_input_fields": [
                            {
                                "id": "17260410288100.03430142330212410110333",
                                "_field": "new_hrbp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726041053030",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_copy_1726044410314",
                "sysName": "approval_current_direct",
                "elements": [
                    {
                        "id": "elmnt_1726040565916",
                        "type": "text",
                        "paraText": "<b>Общие данные о переводе</b>"
                    },
                    {
                        "id": "elmnt_1726040568221",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406078490.022004404043104003301343",
                                "_field": "employee_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040626841",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040600291",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406498510.0031120303022104021434203",
                                "_field": "current_direct_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040663730",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040671676",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406741410.33113103323333123304412",
                                "_field": "planned_date",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040688242",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040697758",
                        "type": "text",
                        "paraText": "<b>Текущие данные по сотруднику</b>"
                    },
                    {
                        "id": "elmnt_1726040737501",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260407451930.14341411222424303134003",
                                "_field": "current_position",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040805444",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040738773",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260408195960.32041300442304243223301",
                                "_field": "current_division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040859585",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726640436186",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{current_org_structure}}"
                    },
                    {
                        "id": "elmnt_1726040868442",
                        "type": "text",
                        "paraText": "<b>Новые данные по сотруднику</b>"
                    },
                    {
                        "id": "elmnt_1726040900634",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260409027810.32012120130304431032131",
                                "_field": "new_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040915145",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040901379",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260409337130.34044234300421202120444",
                                "_field": "new_division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040946656",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726640428069",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{new_org_structure}}"
                    },
                    {
                        "id": "elmnt_1726040955528",
                        "type": "text",
                        "paraText": "<b>Согласующие лица</b>"
                    },
                    {
                        "id": "elmnt_1726040992596",
                        "type": "input",
                        "_actions": [
                            {
                                "id": "17260410272230.11040442112144113000233"
                            }
                        ],
                        "_input_fields": [
                            {
                                "id": "17260410288100.03430142330212410110333",
                                "_field": "current_hrbp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726041053030",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_agreement"
                                    }
                                ],
                                "_field_required": true
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_copy_1726139578959",
                "sysName": "approval_out_hrbp",
                "elements": [
                    {
                        "id": "elmnt_1726040565916",
                        "type": "text",
                        "paraText": "<b>Общие данные о переводе</b>"
                    },
                    {
                        "id": "elmnt_1726040568221",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406078490.022004404043104003301343",
                                "_field": "employee_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040626841",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040600291",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406498510.0031120303022104021434203",
                                "_field": "current_direct_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040663730",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040671676",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406741410.33113103323333123304412",
                                "_field": "planned_date",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040688242",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040697758",
                        "type": "text",
                        "paraText": "<b>Текущие данные по сотруднику</b>"
                    },
                    {
                        "id": "elmnt_1726139945744",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261399509360.23233222301113414324202",
                                "_field": "company",
                                "_field_required": true,
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_company",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140007449",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726640645042",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{current_hrbp.webuser_id.whom_delegate_ids}},{{current_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726139944505",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261400449420.24300030143243141031321",
                                "_field": "position_id",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140065875",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726641036065",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{current_hrbp.webuser_id.whom_delegate_ids}},{{current_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040737501",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260407451930.14341411222424303134003",
                                "_field": "current_position",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040805444",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040738773",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260408195960.32041300442304243223301",
                                "_field": "current_division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040859585",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726640522813",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{current_org_structure}}"
                    },
                    {
                        "id": "elmnt_1726644534728",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266445370370.42144130232143343031342",
                                "_field": "analytics_ops",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "analytics_for_ops",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726644557661",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726644559584",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{current_hrbp.webuser_id.whom_delegate_ids}},{{current_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040868442",
                        "type": "text",
                        "paraText": "<b>Новые данные по сотруднику</b>"
                    },
                    {
                        "id": "elmnt_1726040900634",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260409027810.32012120130304431032131",
                                "_field": "new_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040915145",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040901379",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260409337130.34044234300421202120444",
                                "_field": "new_division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040946656",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726656518310",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{new_org_structure}}"
                    },
                    {
                        "id": "elmnt_1726140215089",
                        "type": "text",
                        "paraText": "<b>Текущие условия компенсации</b>"
                    },
                    {
                        "id": "elmnt_1726140213974",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261406779720.42330342322444101241032",
                                "_field": "current_salary_with_rkisn",
                                "_field_required": true,
                                "_field_set_default": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140710257",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726641180269",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{current_hrbp.webuser_id.whom_delegate_ids}},{{current_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR",
                                "_field_add_description": true,
                                "_field_description_text": "Например: 150555,55",
                                "_field_default_value": "",
                                "_field_set_debounce": true,
                                "_field_debounce_value": 999
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727461020944",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17274610240840.22203021230324104302212",
                                "_field": "comment_current_salary",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727461062091",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1727461089426",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{current_hrbp.webuser_id.whom_delegate_ids}},{{current_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_field_add_description": true,
                                "_field_description_text": "Укажите тип, размер и сроки надбавок",
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140214925",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261402466010.30202232231102313241314",
                                "_field": "period_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_bonus",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140556234",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726641119457",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{current_hrbp.webuser_id.whom_delegate_ids}},{{current_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140212896",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261407345820.40101131300413230120004",
                                "_field": "per_bonus",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140750266",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726641242534",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{current_hrbp.webuser_id.whom_delegate_ids}},{{current_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR",
                                "_field_add_description": true,
                                "_field_description_text": "Например: 12(без процента)",
                                "_field_set_debounce": true,
                                "_field_debounce_value": 1000
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726140773505",
                                "_conditionalView_field": "period_bonus",
                                "_conditionalView_operator": "!==",
                                "_conditionalView_value": "without_bonus"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140820029",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261408219140.40311412313203400103412",
                                "_field": "current_total_salary",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140832626",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_field_set_debounce": true,
                                "_field_debounce_value": 1000
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040955528",
                        "type": "text",
                        "paraText": "<b>Согласующие лица</b>"
                    },
                    {
                        "id": "elmnt_1726040992596",
                        "type": "input",
                        "_actions": [
                            {
                                "id": "17260410272230.11040442112144113000233"
                            }
                        ],
                        "_input_fields": [
                            {
                                "id": "17260410288100.03430142330212410110333",
                                "_field": "current_hrbp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726041053030",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726644782463",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{responsible_employee_id.webuser_id.whom_delegate_ids}},{{responsible_employee_id.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726644817335",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17266448219070.103213000213012203344341",
                                "_action": "action_1726644921945",
                                "_action_button_type": "accent",
                                "_action_icon": "gates",
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Новый ответственный назначен",
                                "_action_addTooltip": true,
                                "_action_addTooltip_text": "Если согласование данной заявки не входит в Вашу зону ответственности, то проверьте матрицу и переназначьте заявку",
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1726657419319",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726657530854",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{responsible_employee_id.webuser_id.whom_delegate_ids}},{{responsible_employee_id.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140860330",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261408902280.10320242310224014214242",
                                "_field": "new_up_direct",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140904060",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727073054838",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17270734429980.22034004303120041342314",
                                "_field": "add_approval_out",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "st_add_approval",
                                "_field_add_description": true,
                                "_field_description_text": "Добавить при необходимости",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727073480782",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1727073521765",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{current_hrbp.webuser_id.whom_delegate_ids}},{{current_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140862257",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261410312950.3114013431030304013414",
                                "_field": "new_hrbp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726141048176",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726644691208",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{current_hrbp.webuser_id.whom_delegate_ids}},{{current_hrbp.webuser_id.id}} ",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726141098274",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261410998130.33241304321442303004334",
                                "_field": "current_cnb",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726141108328",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726644717344",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{current_hrbp.webuser_id.whom_delegate_ids}},{{current_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_copy_1727247879006",
                "sysName": "add_approval_out",
                "elements": [
                    {
                        "id": "elmnt_1726040565916",
                        "type": "text",
                        "paraText": "<b>Общие данные о переводе</b>"
                    },
                    {
                        "id": "elmnt_1726040568221",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406078490.022004404043104003301343",
                                "_field": "employee_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040626841",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040600291",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406498510.0031120303022104021434203",
                                "_field": "current_direct_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040663730",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040671676",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406741410.33113103323333123304412",
                                "_field": "planned_date",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040688242",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040697758",
                        "type": "text",
                        "paraText": "<b>Текущие данные по сотруднику</b>"
                    },
                    {
                        "id": "elmnt_1726139945744",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261399509360.23233222301113414324202",
                                "_field": "company",
                                "_field_required": true,
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_company",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140007449",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726139944505",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261400449420.24300030143243141031321",
                                "_field": "position_id",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140065875",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040737501",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260407451930.14341411222424303134003",
                                "_field": "current_position",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040805444",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040738773",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260408195960.32041300442304243223301",
                                "_field": "current_division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040859585",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726640522813",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{current_org_structure}}"
                    },
                    {
                        "id": "elmnt_1726644534728",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266445370370.42144130232143343031342",
                                "_field": "analytics_ops",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "analytics_for_ops",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726644557661",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040868442",
                        "type": "text",
                        "paraText": "<b>Новые данные по сотруднику</b>"
                    },
                    {
                        "id": "elmnt_1726040900634",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260409027810.32012120130304431032131",
                                "_field": "new_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040915145",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040901379",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260409337130.34044234300421202120444",
                                "_field": "new_division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040946656",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726656518310",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{new_org_structure}}"
                    },
                    {
                        "id": "elmnt_1726140215089",
                        "type": "text",
                        "paraText": "<b>Текущие условия компенсации</b>"
                    },
                    {
                        "id": "elmnt_1726140213974",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261406779720.42330342322444101241032",
                                "_field": "current_salary_with_rkisn",
                                "_field_required": true,
                                "_field_set_default": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140710257",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR",
                                "_field_add_description": true,
                                "_field_description_text": "Например: 150555,55",
                                "_field_set_debounce": true,
                                "_field_debounce_value": 1000
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727461166846",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17274611721820.34201133412003323242113",
                                "_field": "comment_current_salary",
                                "_field_add_description": true,
                                "_field_description_text": "Укажите тип, размер и сроки надбавок",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727461221616",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140214925",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261402466010.30202232231102313241314",
                                "_field": "period_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_bonus",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140556234",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140212896",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261407345820.40101131300413230120004",
                                "_field": "per_bonus",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140750266",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR",
                                "_field_add_description": true,
                                "_field_description_text": "Например: 12(без процента)",
                                "_field_set_debounce": true,
                                "_field_debounce_value": 1000
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726140773505",
                                "_conditionalView_field": "period_bonus",
                                "_conditionalView_operator": "!==",
                                "_conditionalView_value": "without_bonus"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140820029",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261408219140.40311412313203400103412",
                                "_field": "current_total_salary",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140832626",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_field_set_debounce": true,
                                "_field_debounce_value": 1000
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040955528",
                        "type": "text",
                        "paraText": "<b>Согласующие лица</b>"
                    },
                    {
                        "id": "elmnt_1726040992596",
                        "type": "input",
                        "_actions": [
                            {
                                "id": "17260410272230.11040442112144113000233"
                            }
                        ],
                        "_input_fields": [
                            {
                                "id": "17260410288100.03430142330212410110333",
                                "_field": "current_hrbp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726041053030",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140860330",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261408902280.10320242310224014214242",
                                "_field": "new_up_direct",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140904060",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727073054838",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17270734429980.22034004303120041342314",
                                "_field": "add_approval_out",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "st_add_approval",
                                "_field_add_description": true,
                                "_field_description_text": "Добавить при необходимости",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727073480782",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140862257",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261410312950.3114013431030304013414",
                                "_field": "new_hrbp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726141048176",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726141098274",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261410998130.33241304321442303004334",
                                "_field": "current_cnb",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726141108328",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_copy_1726141141964",
                "sysName": "approval_in_hrbp",
                "elements": [
                    {
                        "id": "elmnt_1726040565916",
                        "type": "text",
                        "paraText": "<b>Общие данные о переводе</b>"
                    },
                    {
                        "id": "elmnt_1726040568221",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406078490.022004404043104003301343",
                                "_field": "employee_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040626841",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040600291",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406498510.0031120303022104021434203",
                                "_field": "current_direct_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040663730",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727076167031",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17270761704420.33114433312300200003301",
                                "_field": "replacement_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_contract_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727076642972",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1727076660092",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726142004482",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261420434110.13004322440200241042301",
                                "_field": "contract_end_date",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726142051726",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726653159824",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726142064654",
                                "_conditionalView_field": "replacement_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726141860035",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261418619320.32104102311241004412023",
                                "_field": "replacement",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_replacement",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726141879349",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726652915206",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1727076775906",
                                "_conditionalView_field": "replacement_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726141899699",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261419056010.322444044324120121143",
                                "_field": "repl_empl_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726141918669",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726653042873",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726141934467",
                                "_conditionalView_field": "replacement_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            },
                            {
                                "id": "condition_1727076956615",
                                "_conditionalView_field": "replacement",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726141949681",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261419690950.13201232314202022420022",
                                "_field": "replacement_reason",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_reason_replacement",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726141982702",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726653134765",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1727077250091",
                                "_conditionalView_field": "replacement_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            },
                            {
                                "id": "condition_1727077286363",
                                "_conditionalView_field": "replacement",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040671676",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406741410.33113103323333123304412",
                                "_field": "planned_date",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040688242",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726657737333",
                        "type": "text",
                        "paraText": "<b>Текущие условия компенсации</b>"
                    },
                    {
                        "id": "elmnt_1726657851194",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266578632820.4140042211130340040021",
                                "_field": "current_salary_with_rkisn",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726657878677",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_field_set_debounce": true,
                                "_field_debounce_value": 1000
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727461312729",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17274613152110.020201312141101431201333",
                                "_field": "comment_current_salary",
                                "_field_add_description": true,
                                "_field_description_text": "Укажите тип, размер и сроки надбавок",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727461338775",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726657800903",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266578092710.22043144201123013341002",
                                "_field": "period_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726657835969",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726657892411",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266578966120.13210442142321200143212",
                                "_field": "per_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726657909622",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_field_set_debounce": true,
                                "_field_debounce_value": 1000
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726657924639",
                                "_conditionalView_field": "period_bonus",
                                "_conditionalView_operator": "!==",
                                "_conditionalView_value": "without_bonus"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726657990084",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266579935840.41440211113441244442412",
                                "_field": "current_total_salary",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726658003373",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040868442",
                        "type": "text",
                        "paraText": "<b>Новые данные по сотруднику</b>"
                    },
                    {
                        "id": "elmnt_1726142468799",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261424711860.11121434314134431143214",
                                "_field": "new_company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_company",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726142486817",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726653227804",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726142502641",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261425103710.2444210030442211003404",
                                "_field": "new_position_id",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726142520500",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726653246215",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727462506326",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17274625088540.21242012131022410131333",
                                "_field": "new_vacancy_id",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727462539212",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1727462557375",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040900634",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260409027810.32012120130304431032131",
                                "_field": "new_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040915145",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726653405381",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040901379",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260409337130.34044234300421202120444",
                                "_field": "new_division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040946656",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726653451904",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726656554571",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{new_org_structure}}"
                    },
                    {
                        "id": "elmnt_1730319406430",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17303194092470.134031311010431302331302",
                                "_field": "new_employment_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_employment_type",
                                "_field_link_bottomSelect": false,
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1730319437239",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1730319443567",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726142576051",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261425830980.2430302311234032401303",
                                "_field": "new_analytics_ops",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "analytics_for_ops",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726653481880",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1726653504455",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726142597414",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261425999980.44321143011342444144203",
                                "_field": "position_rate",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726653544400",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726653559786",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR",
                                "_field_set_default": true,
                                "_field_default_value": "1"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140215089",
                        "type": "text",
                        "paraText": "<b>Новые условия компенсации</b>"
                    },
                    {
                        "id": "elmnt_1726140213974",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261406779720.42330342322444101241032",
                                "_field": "new_salary_with_rkisn",
                                "_field_required": true,
                                "_field_set_default": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140710257",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726653700664",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR",
                                "_field_add_description": true,
                                "_field_description_text": "Например: 150555,55",
                                "_field_set_debounce": true,
                                "_field_debounce_value": 1000
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727461382594",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17274613852790.04012311010310022113222",
                                "_field": "comment_new_salary",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727461397647",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1727461416636",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140214925",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261402466010.30202232231102313241314",
                                "_field": "new_period_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_bonus",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140556234",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726653622652",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140212896",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261407345820.40101131300413230120004",
                                "_field": "new_per_bonus",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140750266",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726653726315",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR",
                                "_field_add_description": true,
                                "_field_description_text": "Например: 12(без процента)",
                                "_field_set_debounce": true,
                                "_field_debounce_value": 1000
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726140773505",
                                "_conditionalView_field": "new_period_bonus",
                                "_conditionalView_operator": "!==",
                                "_conditionalView_value": "without_bonus"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140820029",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261408219140.40311412313203400103412",
                                "_field": "new_total_salary",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140832626",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_field_set_debounce": false
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727080245206",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17270802484350.3044211343433233403131",
                                "_field": "total_increase_per",
                                "_field_required": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727080448048",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040955528",
                        "type": "text",
                        "paraText": "<b>Согласующие лица</b>"
                    },
                    {
                        "id": "elmnt_1726040992596",
                        "type": "input",
                        "_actions": [
                            {
                                "id": "17260410272230.11040442112144113000233"
                            }
                        ],
                        "_input_fields": [
                            {
                                "id": "17260410288100.03430142330212410110333",
                                "_field": "current_hrbp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726041053030",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140860330",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261408902280.10320242310224014214242",
                                "_field": "new_up_direct",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140904060",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140862257",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261410312950.3114013431030304013414",
                                "_field": "new_hrbp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726141048176",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726655027154",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{responsible_employee_id.webuser_id.whom_delegate_ids}},{{responsible_employee_id.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726655142061",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17266551453330.43201024012432131411122",
                                "_action": "action_1726644921945",
                                "_action_icon": "gates",
                                "_action_button_type": "accent",
                                "_action_oneTime": true,
                                "_action_addTooltip": true,
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1726655173683",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726655188819",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{responsible_employee_id.webuser_id.whom_delegate_ids}},{{responsible_employee_id.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR",
                                "_action_addTooltip_text": "Если согласование данной заявки не входит в Вашу зону ответственности, то проверьте матрицу и переназначьте заявку",
                                "_action_oneTime_message": "Новый ответственный назначен"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727073683672",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17270736958190.141422310034030302413213",
                                "_field": "add_approval_in",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "st_add_approval",
                                "_field_add_description": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727073714259",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1727073729883",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{current_hrbp.webuser_id.whom_delegate_ids}},{{current_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR",
                                "_field_description_text": "Добавить при необходимости"
                            }
                        ],
                        "_conditionalView": false
                    },
                    {
                        "id": "elmnt_1726655135493",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266553869780.32220144412201413030433",
                                "_field": "new_cnb",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726655403415",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726655423370",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726655450584",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266554599160.441441012004012300413",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726655468678",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726655485974",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR",
                                "_field": "hr_admin",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1727078458506",
                                "_conditionalView_field": "company",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "{{new_company}}"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_copy_1727247956508",
                "sysName": "add_approval_in",
                "elements": [
                    {
                        "id": "elmnt_1726040565916",
                        "type": "text",
                        "paraText": "<b>Общие данные о переводе</b>"
                    },
                    {
                        "id": "elmnt_1726040568221",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406078490.022004404043104003301343",
                                "_field": "employee_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040626841",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040600291",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406498510.0031120303022104021434203",
                                "_field": "current_direct_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040663730",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727076167031",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17270761704420.33114433312300200003301",
                                "_field": "replacement_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_contract_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727076642972",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726142004482",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261420434110.13004322440200241042301",
                                "_field": "contract_end_date",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726142051726",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726142064654",
                                "_conditionalView_field": "replacement_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726141860035",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261418619320.32104102311241004412023",
                                "_field": "replacement",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_replacement",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726141879349",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1727076775906",
                                "_conditionalView_field": "replacement_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726141899699",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261419056010.322444044324120121143",
                                "_field": "repl_empl_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726141918669",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726141934467",
                                "_conditionalView_field": "replacement_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            },
                            {
                                "id": "condition_1727076956615",
                                "_conditionalView_field": "replacement",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726141949681",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261419690950.13201232314202022420022",
                                "_field": "replacement_reason",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_reason_replacement",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726141982702",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1727077250091",
                                "_conditionalView_field": "replacement_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            },
                            {
                                "id": "condition_1727077286363",
                                "_conditionalView_field": "replacement",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040671676",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406741410.33113103323333123304412",
                                "_field": "planned_date",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040688242",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726657737333",
                        "type": "text",
                        "paraText": "<b>Текущие условия компенсации</b>"
                    },
                    {
                        "id": "elmnt_1726657851194",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266578632820.4140042211130340040021",
                                "_field": "current_salary_with_rkisn",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726657878677",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727461637133",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17274616422480.101200231433110201242014",
                                "_field": "comment_current_salary",
                                "_field_add_description": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727461658230",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_field_description_text": "Укажите тип, размер и сроки надбавок"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726657800903",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266578092710.22043144201123013341002",
                                "_field": "period_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726657835969",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726657892411",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266578966120.13210442142321200143212",
                                "_field": "per_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726657909622",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726657924639",
                                "_conditionalView_field": "period_bonus",
                                "_conditionalView_operator": "!==",
                                "_conditionalView_value": "without_bonus"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726657990084",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266579935840.41440211113441244442412",
                                "_field": "current_total_salary",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726658003373",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040868442",
                        "type": "text",
                        "paraText": "<b>Новые данные по сотруднику</b>"
                    },
                    {
                        "id": "elmnt_1726142468799",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261424711860.11121434314134431143214",
                                "_field": "new_company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_company",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726142486817",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726142502641",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261425103710.2444210030442211003404",
                                "_field": "new_position_id",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726142520500",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727462611642",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17274626144050.4024002343112033013003",
                                "_field": "new_vacancy_id",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727462638825",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040900634",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260409027810.32012120130304431032131",
                                "_field": "new_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040915145",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040901379",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260409337130.34044234300421202120444",
                                "_field": "new_division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040946656",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726656554571",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{new_org_structure}}"
                    },
                    {
                        "id": "elmnt_1730319541729",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17303195442240.00111013142301044233011433",
                                "_field": "new_employment_type",
                                "_field_link_type": "select",
                                "_field_link_pageSize": 0,
                                "_field_arrayLink_endpoint": "st_employment_type",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1730319562604",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726142576051",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261425830980.2430302311234032401303",
                                "_field": "new_analytics_ops",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "analytics_for_ops",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726653481880",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726142597414",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261425999980.44321143011342444144203",
                                "_field": "position_rate",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726653544400",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140215089",
                        "type": "text",
                        "paraText": "<b>Новые условия компенсации</b>"
                    },
                    {
                        "id": "elmnt_1726140213974",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261406779720.42330342322444101241032",
                                "_field": "new_salary_with_rkisn",
                                "_field_required": true,
                                "_field_set_default": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140710257",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR",
                                "_field_add_description": true,
                                "_field_description_text": "Например: 150555,55"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727461764912",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17274617675870.32443011330241224211344",
                                "_field": "comment_new_salary",
                                "_field_add_description": true,
                                "_field_description_text": "Укажите тип, размер и сроки надбавок",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727461787995",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140214925",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261402466010.30202232231102313241314",
                                "_field": "new_period_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_bonus",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140556234",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140212896",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261407345820.40101131300413230120004",
                                "_field": "new_per_bonus",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140750266",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR",
                                "_field_add_description": true,
                                "_field_description_text": "Например: 12(без процента)"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726140773505",
                                "_conditionalView_field": "new_period_bonus",
                                "_conditionalView_operator": "!==",
                                "_conditionalView_value": "without_bonus"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140820029",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261408219140.40311412313203400103412",
                                "_field": "new_total_salary",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140832626",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727080245206",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17270802484350.3044211343433233403131",
                                "_field": "total_increase_per",
                                "_field_required": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727080448048",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040955528",
                        "type": "text",
                        "paraText": "<b>Согласующие лица</b>"
                    },
                    {
                        "id": "elmnt_1726040992596",
                        "type": "input",
                        "_actions": [
                            {
                                "id": "17260410272230.11040442112144113000233"
                            }
                        ],
                        "_input_fields": [
                            {
                                "id": "17260410288100.03430142330212410110333",
                                "_field": "current_hrbp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726041053030",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140860330",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261408902280.10320242310224014214242",
                                "_field": "new_up_direct",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140904060",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140862257",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261410312950.3114013431030304013414",
                                "_field": "new_hrbp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726141048176",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727073683672",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17270736958190.141422310034030302413213",
                                "_field": "add_approval_in",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "st_add_approval",
                                "_field_add_description": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727073714259",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR",
                                "_field_description_text": "Добавить при необходимости"
                            }
                        ],
                        "_conditionalView": false
                    },
                    {
                        "id": "elmnt_1726655135493",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266553869780.32220144412201413030433",
                                "_field": "new_cnb",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726655403415",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726655450584",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266554599160.441441012004012300413",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726655468678",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR",
                                "_field": "hr_admin",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1727078458506",
                                "_conditionalView_field": "company",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "{{new_company}}"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_copy_1726659365776",
                "sysName": "approval_in_cnb",
                "elements": [
                    {
                        "id": "elmnt_1726040565916",
                        "type": "text",
                        "paraText": "<b>Общие данные о переводе</b>"
                    },
                    {
                        "id": "elmnt_1726040568221",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406078490.022004404043104003301343",
                                "_field": "employee_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040626841",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040600291",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406498510.0031120303022104021434203",
                                "_field": "current_direct_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040663730",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727077389843",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17270773925180.40202343422002040421233",
                                "_field": "replacement_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_contract_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727077506045",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726142004482",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261420434110.13004322440200241042301",
                                "_field": "contract_end_date",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726142051726",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726142064654",
                                "_conditionalView_field": "replacement_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726141860035",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261418619320.32104102311241004412023",
                                "_field": "replacement",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_replacement",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726141879349",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1727077641456",
                                "_conditionalView_field": "replacement_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726141899699",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261419056010.322444044324120121143",
                                "_field": "repl_empl_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726141918669",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726141934467",
                                "_conditionalView_field": "replacement_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            },
                            {
                                "id": "condition_1727077724009",
                                "_conditionalView_field": "replacement",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726141949681",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261419690950.13201232314202022420022",
                                "_field": "replacement_reason",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_reason_replacement",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726141982702",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1727077779870",
                                "_conditionalView_field": "replacement_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            },
                            {
                                "id": "condition_1727077792686",
                                "_conditionalView_field": "replacement",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040671676",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406741410.33113103323333123304412",
                                "_field": "planned_date",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040688242",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726659453445",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266594589370.13403114441223331040333",
                                "_field": "budget_date",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726659473542",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_cnb"
                                    },
                                    {
                                        "id": "condition_1726659491240",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_cnb.webuser_id.whom_delegate_ids}},{{new_cnb.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726657737333",
                        "type": "text",
                        "paraText": "<b>Текущие условия компенсации</b>"
                    },
                    {
                        "id": "elmnt_1726657851194",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266578632820.4140042211130340040021",
                                "_field": "current_salary_with_rkisn",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726657878677",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727461935679",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17274619441510.33031434000041303140434",
                                "_field": "comment_current_salary",
                                "_field_add_description": true,
                                "_field_description_text": "Укажите тип, размер и сроки надбавок",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727461967339",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726657800903",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266578092710.22043144201123013341002",
                                "_field": "period_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726657835969",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726657892411",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266578966120.13210442142321200143212",
                                "_field": "per_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726657909622",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726657924639",
                                "_conditionalView_field": "period_bonus",
                                "_conditionalView_operator": "!==",
                                "_conditionalView_value": "without_bonus"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726657990084",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266579935840.41440211113441244442412",
                                "_field": "current_total_salary",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726658003373",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726659541435",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266595443260.211103043033041202431102",
                                "_field": "current_cost_center",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726659557006",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_cnb"
                                    },
                                    {
                                        "id": "condition_1726659565808",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_cnb.webuser_id.whom_delegate_ids}},{{new_cnb.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040868442",
                        "type": "text",
                        "paraText": "<b>Новые данные по сотруднику</b>"
                    },
                    {
                        "id": "elmnt_1726142468799",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261424711860.11121434314134431143214",
                                "_field": "new_company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_company",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726142486817",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726142502641",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261425103710.2444210030442211003404",
                                "_field": "new_position_id",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726142520500",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727462694996",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17274626983360.132320214041304214301223",
                                "_field": "new_vacancy_id",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727462719909",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_cnb"
                                    },
                                    {
                                        "id": "condition_1727462751697",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_cnb.webuser_id.whom_delegate_ids}},{{new_cnb.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040900634",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260409027810.32012120130304431032131",
                                "_field": "new_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040915145",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040901379",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260409337130.34044234300421202120444",
                                "_field": "new_division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040946656",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726656554571",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{new_org_structure}}"
                    },
                    {
                        "id": "elmnt_1726142576051",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261425830980.2430302311234032401303",
                                "_field": "new_analytics_ops",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "analytics_for_ops",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726653481880",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726142597414",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261425999980.44321143011342444144203",
                                "_field": "position_rate",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726653544400",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140215089",
                        "type": "text",
                        "paraText": "<b>Новые условия компенсации</b>"
                    },
                    {
                        "id": "elmnt_1726140213974",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261406779720.42330342322444101241032",
                                "_field": "new_salary_with_rkisn",
                                "_field_required": true,
                                "_field_set_default": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140710257",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1727254619394",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727461989618",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17274619962540.2040331321214310224013",
                                "_field": "comment_new_salary",
                                "_field_add_description": true,
                                "_field_description_text": "Укажите тип, размер и сроки надбавок",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727462016306",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1727462084587",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140214925",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261402466010.30202232231102313241314",
                                "_field": "new_period_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_bonus",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140556234",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1727254665270",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140212896",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261407345820.40101131300413230120004",
                                "_field": "new_per_bonus",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140750266",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1727254708041",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726140773505",
                                "_conditionalView_field": "new_period_bonus",
                                "_conditionalView_operator": "!==",
                                "_conditionalView_value": "without_bonus"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140820029",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261408219140.40311412313203400103412",
                                "_field": "new_total_salary",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140832626",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727081997236",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17270820003070.141220111021402011030022",
                                "_field": "total_increase_per",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727082014687",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726659887831",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266598910160.2233041024311232334113",
                                "_field": "new_cost_center",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726659906575",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_cnb"
                                    },
                                    {
                                        "id": "condition_1726659935351",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_cnb.webuser_id.whom_delegate_ids}},{{new_cnb.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040955528",
                        "type": "text",
                        "paraText": "<b>Согласующие лица</b>"
                    },
                    {
                        "id": "elmnt_1726659979440",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266599840650.30232000032244043444022",
                                "_field": "budget_holder",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726660019560",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_cnb"
                                    },
                                    {
                                        "id": "condition_1726660047914",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_cnb.webuser_id.whom_delegate_ids}},{{new_cnb.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727254843612",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17272548489260.22323403033433104013401",
                                "_field": "role_budget_holder",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727254865447",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_cnb"
                                    },
                                    {
                                        "id": "condition_1727254885394",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_cnb.webuser_id.whom_delegate_ids}},{{new_cnb.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": [
                            {
                                "id": "condition_1727254927294",
                                "_conditionalView_field": "budget_holder",
                                "_conditionalView_operator": "isNotNull"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040992596",
                        "type": "input",
                        "_actions": [
                            {
                                "id": "17260410272230.11040442112144113000233"
                            }
                        ],
                        "_input_fields": [
                            {
                                "id": "17260410288100.03430142330212410110333",
                                "_field": "current_hrbp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726041053030",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727254750669",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17272547538940.212024340433330430231142",
                                "_field": "add_approval_out",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_add_approval",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727254780374",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140860330",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261408902280.10320242310224014214242",
                                "_field": "new_up_direct",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140904060",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140862257",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261410312950.3114013431030304013414",
                                "_field": "new_hrbp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726141048176",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727254746624",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17272547936610.221301324434134412013243",
                                "_field": "add_approval_in",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_add_approval",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727254810641",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726655135493",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266553869780.32220144412201413030433",
                                "_field": "new_cnb",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726655403415",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_cnb"
                                    },
                                    {
                                        "id": "condition_1726655423370",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{responsible_employee_id.webuser_id.whom_delegate_ids}},{{responsible_employee_id.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726655142061",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17266551453330.43201024012432131411122",
                                "_action": "action_1726644921945",
                                "_action_icon": "gates",
                                "_action_button_type": "accent",
                                "_action_oneTime": true,
                                "_action_addTooltip": true,
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1726655173683",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_cnb"
                                    },
                                    {
                                        "id": "condition_1726655188819",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{responsible_employee_id.webuser_id.whom_delegate_ids}},{{responsible_employee_id.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR",
                                "_action_addTooltip_text": "Если согласование данной заявки не входит в Вашу зону ответственности, то проверьте матрицу и переназначьте заявку",
                                "_action_oneTime_message": "Новый ответственный назначен"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_copy_1733426621900",
                "sysName": "approval_ss_specialist",
                "elements": [
                    {
                        "id": "elmnt_1726040565916",
                        "type": "text",
                        "paraText": "<b>Общие данные о переводе</b>"
                    },
                    {
                        "id": "elmnt_1726040568221",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406078490.022004404043104003301343",
                                "_field": "employee_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040626841",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040600291",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406498510.0031120303022104021434203",
                                "_field": "current_direct_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040663730",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726663648050",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266636511900.14204324012210312013224",
                                "_field": "budget_date",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726663674051",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727085020265",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17270850231970.022334104402411232233432",
                                "_field": "planned_date",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727085037178",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726663726125",
                        "type": "text",
                        "paraText": "<b>Текущие данные по сотруднику</b>"
                    },
                    {
                        "id": "elmnt_1726663727782",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266637924040.004142430220042130120321",
                                "_field": "company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_company",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726663815296",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726663729315",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266638372570.142234220030211203110343",
                                "_field": "position_id",
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1726663860678",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_orgdev"
                                    }
                                ],
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726663874800",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266638828570.32222014423013421303343",
                                "_field": "current_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726663899281",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726663876468",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266639184430.31440310411313303311104",
                                "_field": "current_division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726663950011",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1729703435344",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{current_org_structure}}"
                    },
                    {
                        "id": "elmnt_1726663916182",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266639683630.24100420123400114402044",
                                "_field": "analytics_ops",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "analytics_for_ops",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726663996794",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040868442",
                        "type": "text",
                        "paraText": "<b>Новые данные по сотруднику</b>"
                    },
                    {
                        "id": "elmnt_1726142468799",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261424711860.11121434314134431143214",
                                "_field": "new_company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_company",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726142486817",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726142502641",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261425103710.2444210030442211003404",
                                "_field": "new_position_id",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726142520500",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_orgdev"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727462922214",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17274629275090.003404331440324340422231",
                                "_field": "new_vacancy_id",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727462940771",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040900634",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260409027810.32012120130304431032131",
                                "_field": "new_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040915145",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040901379",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260409337130.34044234300421202120444",
                                "_field": "new_division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040946656",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726656554571",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{new_org_structure}}"
                    },
                    {
                        "id": "elmnt_1726142576051",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261425830980.2430302311234032401303",
                                "_field": "new_analytics_ops",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "analytics_for_ops",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726653481880",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726142597414",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261425999980.44321143011342444144203",
                                "_field": "position_rate",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726653544400",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726657737333",
                        "type": "text",
                        "paraText": "<b>Текущие условия компенсации</b>"
                    },
                    {
                        "id": "elmnt_1726657851194",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266578632820.4140042211130340040021",
                                "_field": "current_salary_with_rkisn",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726657878677",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727462349160",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17274623525190.04004114432021011002141",
                                "_field": "comment_current_salary",
                                "_field_add_description": true,
                                "_field_description_text": "Укажите тип, размер и сроки надбавок",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727462367247",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726657800903",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266578092710.22043144201123013341002",
                                "_field": "period_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726657835969",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726657892411",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266578966120.13210442142321200143212",
                                "_field": "per_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726657909622",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726657924639",
                                "_conditionalView_field": "period_bonus",
                                "_conditionalView_operator": "!==",
                                "_conditionalView_value": "without_bonus"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726657990084",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266579935840.41440211113441244442412",
                                "_field": "current_total_salary",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726658003373",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140215089",
                        "type": "text",
                        "paraText": "<b>Новые условия компенсации</b>"
                    },
                    {
                        "id": "elmnt_1726140213974",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261406779720.42330342322444101241032",
                                "_field": "new_salary_with_rkisn",
                                "_field_required": true,
                                "_field_set_default": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140710257",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_cnb"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727462380955",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17274623840520.4113111004044211240211",
                                "_field": "comment_new_salary",
                                "_field_add_description": true,
                                "_field_description_text": "Укажите тип, размер и сроки надбавок",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727462401460",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140214925",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261402466010.30202232231102313241314",
                                "_field": "new_period_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_bonus",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140556234",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_cnb"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140212896",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261407345820.40101131300413230120004",
                                "_field": "new_per_bonus",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140750266",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_cnb"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726140773505",
                                "_conditionalView_field": "new_period_bonus",
                                "_conditionalView_operator": "!==",
                                "_conditionalView_value": "without_bonus"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140820029",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261408219140.40311412313203400103412",
                                "_field": "new_total_salary",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140832626",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040955528",
                        "type": "text",
                        "paraText": "<b>Согласующие лица</b>"
                    },
                    {
                        "id": "elmnt_1726659979440",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266599840650.30232000032244043444022",
                                "_field": "budget_holder",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726660019560",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_cnb"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040992596",
                        "type": "input",
                        "_actions": [
                            {
                                "id": "17260410272230.11040442112144113000233"
                            }
                        ],
                        "_input_fields": [
                            {
                                "id": "17260410288100.03430142330212410110333",
                                "_field": "current_hrbp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726041053030",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140860330",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261408902280.10320242310224014214242",
                                "_field": "new_up_direct",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140904060",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140862257",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261410312950.3114013431030304013414",
                                "_field": "new_hrbp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726141048176",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726655077435",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266550795720.4312212300234333303404",
                                "_field": "current_cnb",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726655122223",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726655450584",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266554599160.441441012004012300413",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726655468678",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR",
                                "_field": "hr_admin",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726655135493",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266553869780.32220144412201413030433",
                                "_field": "new_cnb",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726655403415",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_cnb"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_copy_1726661496780",
                "sysName": "approval_in_budget_holder",
                "elements": [
                    {
                        "id": "elmnt_1726040868442",
                        "type": "text",
                        "paraText": "<b>Новые данные по сотруднику</b>"
                    },
                    {
                        "id": "elmnt_1726040568221",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406078490.022004404043104003301343",
                                "_field": "employee_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040626841",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726142468799",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261424711860.11121434314134431143214",
                                "_field": "new_company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_company",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726142486817",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040900634",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260409027810.32012120130304431032131",
                                "_field": "new_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040915145",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040901379",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260409337130.34044234300421202120444",
                                "_field": "new_division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040946656",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726656554571",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{new_org_structure}}"
                    },
                    {
                        "id": "elmnt_1726142597414",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261425999980.44321143011342444144203",
                                "_field": "position_rate",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726653544400",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140215089",
                        "type": "text",
                        "paraText": "<b>Новые условия компенсации</b>"
                    },
                    {
                        "id": "elmnt_1726140213974",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261406779720.42330342322444101241032",
                                "_field": "new_salary_with_rkisn",
                                "_field_required": true,
                                "_field_set_default": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140710257",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_cnb"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727462200360",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17274622036420.043012111320123104001413",
                                "_field": "comment_new_salary",
                                "_field_add_description": true,
                                "_field_description_text": "Укажите тип, размер и сроки надбавок",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727462250595",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140214925",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261402466010.30202232231102313241314",
                                "_field": "new_period_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_bonus",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140556234",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_cnb"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140212896",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261407345820.40101131300413230120004",
                                "_field": "new_per_bonus",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140750266",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_cnb"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726140773505",
                                "_conditionalView_field": "new_period_bonus",
                                "_conditionalView_operator": "!==",
                                "_conditionalView_value": "without_bonus"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140820029",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261408219140.40311412313203400103412",
                                "_field": "new_total_salary",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140832626",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727082143457",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17270821463050.40222030313044002440223",
                                "_field": "total_increase_per",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727082158123",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726659887831",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266598910160.2233041024311232334113",
                                "_field": "new_cost_center",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726659906575",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_cnb"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727462881008",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17274628836510.3010144314233011114032",
                                "_field": "new_vacancy_id",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727462891934",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_field_required": true
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040955528",
                        "type": "text",
                        "paraText": "<b>Согласующие лица</b>"
                    },
                    {
                        "id": "elmnt_1726659979440",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266599840650.30232000032244043444022",
                                "_field": "budget_holder",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726660019560",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_cnb"
                                    },
                                    {
                                        "id": "condition_1730482388901",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_cnb.webuser_id.whom_delegate_ids}},{{new_cnb.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730482227732",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17304822304430.023421040241040434430111",
                                "_action": "action_1726644921945",
                                "_action_icon": "gates",
                                "_action_button_type": "accent",
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Переназначено",
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1730482347467",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_cnb"
                                    },
                                    {
                                        "id": "condition_1730482369788",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_cnb.webuser_id.whom_delegate_ids}},{{new_cnb.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040992596",
                        "type": "input",
                        "_actions": [
                            {
                                "id": "17260410272230.11040442112144113000233"
                            }
                        ],
                        "_input_fields": [
                            {
                                "id": "17260410288100.03430142330212410110333",
                                "_field": "current_hrbp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726041053030",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140860330",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261408902280.10320242310224014214242",
                                "_field": "new_up_direct",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140904060",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140862257",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261410312950.3114013431030304013414",
                                "_field": "new_hrbp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726141048176",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726655077435",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266550795720.4312212300234333303404",
                                "_field": "current_cnb",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726655122223",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726655450584",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266554599160.441441012004012300413",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726655468678",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR",
                                "_field": "hr_admin",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726655135493",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266553869780.32220144412201413030433",
                                "_field": "new_cnb",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726655403415",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_cnb"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_1726662457325",
                "sysName": "present_offer",
                "elements": [
                    {
                        "id": "elmnt_1726662689839",
                        "type": "text",
                        "paraText": "<b>Новые данные по сотруднику</b>"
                    },
                    {
                        "id": "elmnt_1726662512795",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266625220460.102132313322242124020222",
                                "_field": "employee_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726662533326",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727084568686",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17270845714100.021111043242040314130423",
                                "_field": "new_company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_company",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727084610614",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726662693192",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266627048030.113004132223143411144033",
                                "_field": "new_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726662724992",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726662733762",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266627373370.141402213122344010220302",
                                "_field": "new_division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726662751660",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726662734569",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{new_org_structure}}"
                    },
                    {
                        "id": "elmnt_1730319636457",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17303196385580.44012031440020403021414",
                                "_field": "new_employment_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_employment_type",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1730319653505",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727084655532",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17270846604970.2320412112144330422224",
                                "_field": "position_rate",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727084670210",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727082328653",
                        "type": "text",
                        "paraText": "<b>Новые условия компенсации</b>"
                    },
                    {
                        "id": "elmnt_1727084786256",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17270848308020.44142443433210303112104",
                                "_field": "new_salary_with_rkisn",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727084843715",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727462286446",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17274622898230.04344420323330123103221",
                                "_field": "comment_new_salary",
                                "_field_add_description": true,
                                "_field_description_text": "Укажите тип, размер и сроки надбавок",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727462316773",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727084784789",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17270847896350.43144222233032401101102",
                                "_field": "new_period_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727084810205",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727084855555",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17270848589530.30221242310233314423422",
                                "_field": "new_per_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727084880670",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1727084943618",
                                "_conditionalView_field": "new_period_bonus",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "without_bonus"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727084787532",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17270849012640.010312234014100312043224",
                                "_field": "new_total_salary",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727084913576",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727082330109",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17270823532300.134201202013241424224122",
                                "_field": "total_increase_per",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727082362493",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727084750784",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17270847530220.0101431012201014134311213",
                                "_field": "budget_date",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727084765904",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726662514435",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266625851430.422431003421110423144",
                                "_field": "planned_date",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726662591073",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_agreement"
                                    },
                                    {
                                        "id": "condition_1727079788247",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{user_creator.webuser_id.whom_delegate_ids}},{{user_creator.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_copy_1726662412237",
                "sysName": "approval_orgdev",
                "elements": [
                    {
                        "id": "elmnt_1726040565916",
                        "type": "text",
                        "paraText": "<b>Общие данные о переводе</b>"
                    },
                    {
                        "id": "elmnt_1726040568221",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406078490.022004404043104003301343",
                                "_field": "employee_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040626841",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040600291",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406498510.0031120303022104021434203",
                                "_field": "current_direct_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040663730",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726663648050",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266636511900.14204324012210312013224",
                                "_field": "budget_date",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726663674051",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727085020265",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17270850231970.022334104402411232233432",
                                "_field": "planned_date",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727085037178",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726663726125",
                        "type": "text",
                        "paraText": "<b>Текущие данные по сотруднику</b>"
                    },
                    {
                        "id": "elmnt_1726663727782",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266637924040.004142430220042130120321",
                                "_field": "company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_company",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726663815296",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726663729315",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266638372570.142234220030211203110343",
                                "_field": "position_id",
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1726663860678",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_orgdev"
                                    }
                                ],
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726663874800",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266638828570.32222014423013421303343",
                                "_field": "current_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726663899281",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726663876468",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266639184430.31440310411313303311104",
                                "_field": "current_division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726663950011",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1729703435344",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{current_org_structure}}"
                    },
                    {
                        "id": "elmnt_1726663916182",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266639683630.24100420123400114402044",
                                "_field": "analytics_ops",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "analytics_for_ops",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726663996794",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040868442",
                        "type": "text",
                        "paraText": "<b>Новые данные по сотруднику</b>"
                    },
                    {
                        "id": "elmnt_1726142468799",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261424711860.11121434314134431143214",
                                "_field": "new_company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_company",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726142486817",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726142502641",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261425103710.2444210030442211003404",
                                "_field": "new_position_id",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726142520500",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_orgdev"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727462922214",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17274629275090.003404331440324340422231",
                                "_field": "new_vacancy_id",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727462940771",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040900634",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260409027810.32012120130304431032131",
                                "_field": "new_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040915145",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040901379",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260409337130.34044234300421202120444",
                                "_field": "new_division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040946656",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726656554571",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{new_org_structure}}"
                    },
                    {
                        "id": "elmnt_1726142576051",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261425830980.2430302311234032401303",
                                "_field": "new_analytics_ops",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "analytics_for_ops",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726653481880",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726142597414",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261425999980.44321143011342444144203",
                                "_field": "position_rate",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726653544400",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726657737333",
                        "type": "text",
                        "paraText": "<b>Текущие условия компенсации</b>"
                    },
                    {
                        "id": "elmnt_1726657851194",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266578632820.4140042211130340040021",
                                "_field": "current_salary_with_rkisn",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726657878677",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727462349160",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17274623525190.04004114432021011002141",
                                "_field": "comment_current_salary",
                                "_field_add_description": true,
                                "_field_description_text": "Укажите тип, размер и сроки надбавок",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727462367247",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726657800903",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266578092710.22043144201123013341002",
                                "_field": "period_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726657835969",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726657892411",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266578966120.13210442142321200143212",
                                "_field": "per_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726657909622",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726657924639",
                                "_conditionalView_field": "period_bonus",
                                "_conditionalView_operator": "!==",
                                "_conditionalView_value": "without_bonus"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726657990084",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266579935840.41440211113441244442412",
                                "_field": "current_total_salary",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726658003373",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140215089",
                        "type": "text",
                        "paraText": "<b>Новые условия компенсации</b>"
                    },
                    {
                        "id": "elmnt_1726140213974",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261406779720.42330342322444101241032",
                                "_field": "new_salary_with_rkisn",
                                "_field_required": true,
                                "_field_set_default": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140710257",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_cnb"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727462380955",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17274623840520.4113111004044211240211",
                                "_field": "comment_new_salary",
                                "_field_add_description": true,
                                "_field_description_text": "Укажите тип, размер и сроки надбавок",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727462401460",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140214925",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261402466010.30202232231102313241314",
                                "_field": "new_period_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_bonus",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140556234",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_cnb"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140212896",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261407345820.40101131300413230120004",
                                "_field": "new_per_bonus",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140750266",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_cnb"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726140773505",
                                "_conditionalView_field": "new_period_bonus",
                                "_conditionalView_operator": "!==",
                                "_conditionalView_value": "without_bonus"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140820029",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261408219140.40311412313203400103412",
                                "_field": "new_total_salary",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140832626",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727440052711",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17274400553530.3220101220000441042312",
                                "_field": "comment_orgdev",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727440063787",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040955528",
                        "type": "text",
                        "paraText": "<b>Согласующие лица</b>"
                    },
                    {
                        "id": "elmnt_1726659979440",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266599840650.30232000032244043444022",
                                "_field": "budget_holder",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726660019560",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_cnb"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040992596",
                        "type": "input",
                        "_actions": [
                            {
                                "id": "17260410272230.11040442112144113000233"
                            }
                        ],
                        "_input_fields": [
                            {
                                "id": "17260410288100.03430142330212410110333",
                                "_field": "current_hrbp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726041053030",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140860330",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261408902280.10320242310224014214242",
                                "_field": "new_up_direct",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140904060",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140862257",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261410312950.3114013431030304013414",
                                "_field": "new_hrbp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726141048176",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726655077435",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266550795720.4312212300234333303404",
                                "_field": "current_cnb",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726655122223",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726655450584",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266554599160.441441012004012300413",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726655468678",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR",
                                "_field": "hr_admin",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726655135493",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266553869780.32220144412201413030433",
                                "_field": "new_cnb",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726655403415",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_cnb"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_copy_1727077867108",
                "sysName": "approval_hr_admin",
                "elements": [
                    {
                        "id": "elmnt_1726040565916",
                        "type": "text",
                        "paraText": "<b>Общие данные о переводе</b>"
                    },
                    {
                        "id": "elmnt_1726040568221",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406078490.022004404043104003301343",
                                "_field": "employee_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040626841",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726663648050",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266636511900.14204324012210312013224",
                                "_field": "budget_date",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726663674051",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727077943976",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17270779806090.214133022300040311333123",
                                "_field": "replacement_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_contract_type",
                                "_field_required": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727078000414",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727077945596",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17270780178850.42413341234012230312303",
                                "_field": "contract_end_date",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727078034419",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1727078044191",
                                "_conditionalView_field": "replacement_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727077946947",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17270780741960.11233223331100244220441",
                                "_field": "replacement",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727078096421",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1727078107580",
                                "_conditionalView_field": "replacement_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727077949065",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17270781231670.10104230324424420410443",
                                "_field": "repl_empl_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727078156205",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1727078170069",
                                "_conditionalView_field": "replacement_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            },
                            {
                                "id": "condition_1727078180356",
                                "_conditionalView_field": "replacement",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727077950513",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17270782177880.0100011213444320000100433",
                                "_field": "replacement_reason",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_reason_replacement",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727078230516",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1727078239435",
                                "_conditionalView_field": "replacement_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            },
                            {
                                "id": "condition_1727078253207",
                                "_conditionalView_field": "replacement",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726663726125",
                        "type": "text",
                        "paraText": "<b>Текущие данные по сотруднику</b>"
                    },
                    {
                        "id": "elmnt_1726663727782",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266637924040.004142430220042130120321",
                                "_field": "company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_company",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726663815296",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726663729315",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266638372570.142234220030211203110343",
                                "_field": "position_id",
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1726663860678",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726663874800",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266638828570.32222014423013421303343",
                                "_field": "current_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726663899281",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726663876468",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266639184430.31440310411313303311104",
                                "_field": "current_division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726663950011",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1729704023406",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{current_org_structure}}"
                    },
                    {
                        "id": "elmnt_1726663916182",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266639683630.24100420123400114402044",
                                "_field": "analytics_ops",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "analytics_for_ops",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726663996794",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040868442",
                        "type": "text",
                        "paraText": "<b>Новые данные по сотруднику</b>"
                    },
                    {
                        "id": "elmnt_1726142468799",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261424711860.11121434314134431143214",
                                "_field": "new_company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_company",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726142486817",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726142502641",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261425103710.2444210030442211003404",
                                "_field": "new_position_id",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726142520500",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040900634",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260409027810.32012120130304431032131",
                                "_field": "new_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040915145",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040901379",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260409337130.34044234300421202120444",
                                "_field": "new_division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040946656",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726656554571",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{new_org_structure}}"
                    },
                    {
                        "id": "elmnt_1730319703389",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17303197062010.0422202101142302014342",
                                "_field": "new_employment_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_employment_type",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1730319722389",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726142576051",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261425830980.2430302311234032401303",
                                "_field": "new_analytics_ops",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "analytics_for_ops",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726653481880",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726142597414",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261425999980.44321143011342444144203",
                                "_field": "position_rate",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726653544400",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727078803750",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17270788062130.0104422220143432020422144",
                                "_field": "actual_date",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727078847478",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hr_admin"
                                    },
                                    {
                                        "id": "condition_1727079053382",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_admin.webuser_id.whom_delegate_ids}},{{hr_admin.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730320473393",
                        "type": "text",
                        "paraText": "<b>Новые условия компенсации</b>"
                    },
                    {
                        "id": "elmnt_1730320472398",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17303205301270.20120413203301330130342",
                                "_field": "new_salary_with_rkisn",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1730320707179",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730847455124",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17308474579750.03104430202001323132332",
                                "_field": "comment_new_salary",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1730847480777",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730320471685",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17303207435110.32422414401200213243121",
                                "_field": "new_period_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1730320769377",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730320470742",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17303207887530.2443204141411341041002",
                                "_field": "new_per_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1730320814226",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1730320852928",
                                "_conditionalView_field": "new_period_bonus",
                                "_conditionalView_operator": "!==",
                                "_conditionalView_value": "without_bonus"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730320469176",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17303208950080.013042310200421243140331",
                                "_field": "new_total_salary",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1730320907879",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730320725958",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17303209517980.32441444311143300402021",
                                "_field": "total_increase_per",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1730320973831",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730320948441",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17303209870540.041000244032234010342403",
                                "_field": "new_cost_center",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1730321001467",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727332842519",
                        "type": "text",
                        "paraText": "<b>Согласующие лица</b>"
                    },
                    {
                        "id": "elmnt_1727332836518",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17273328397320.04100433040204131244401",
                                "_field": "hr_admin",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727332901189",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hr_admin"
                                    },
                                    {
                                        "id": "condition_1727332937057",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{responsible_employee_id.webuser_id.whom_delegate_ids}},{{responsible_employee_id.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727332967042",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17273329713380.24100100202003322330322",
                                "_action": "action_1726644921945",
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1727333172246",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hr_admin"
                                    },
                                    {
                                        "id": "condition_1727333240890",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{responsible_employee_id.webuser_id.whom_delegate_ids}},{{responsible_employee_id.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_standardRequired": false,
                                "_action_conditionals_and_or": "OR",
                                "_action_icon": "refresh",
                                "_action_button_type": "accent",
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Переназначено",
                                "_action_addTooltip": true,
                                "_action_addTooltip_text": "Если согласование данной заявки не входит в Вашу зону ответственности, то проверьте матрицу и переназначьте заявку"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_copy_1730323992965",
                "sysName": "offer_refused",
                "elements": [
                    {
                        "id": "elmnt_1726040565916",
                        "type": "text",
                        "paraText": "<b>Новые данные по сотруднику</b>"
                    },
                    {
                        "id": "elmnt_1726040568221",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406078490.022004404043104003301343",
                                "_field": "employee_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040626841",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726142468799",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261424711860.11121434314134431143214",
                                "_field": "new_company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_company",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726142486817",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726142502641",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261425103710.2444210030442211003404",
                                "_field": "new_position_id",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726142520500",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040900634",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260409027810.32012120130304431032131",
                                "_field": "new_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040915145",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040901379",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260409337130.34044234300421202120444",
                                "_field": "new_division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040946656",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726656554571",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{new_org_structure}}"
                    },
                    {
                        "id": "elmnt_1730319806423",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17303198091760.4211132141421243033203",
                                "_field": "new_employment_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_employment_type",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1730319825022",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726142576051",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261425830980.2430302311234032401303",
                                "_field": "new_analytics_ops",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "analytics_for_ops",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726653481880",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726142597414",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261425999980.44321143011342444144203",
                                "_field": "position_rate",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726653544400",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730321831377",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17303220005890.3222443320413000124123",
                                "_field": "replacement_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_contract_type",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1730322069829",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730321832394",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17303221018790.4012100121120443443314",
                                "_field": "contract_end_date",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1730322120278",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1730322149714",
                                "_conditionalView_field": "replacement_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730321833493",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17303221945940.3301102413401210114142",
                                "_field": "replacement",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1730322213192",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1730322225063",
                                "_conditionalView_field": "replacement_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730321835226",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17303222788600.44011233242130224123321",
                                "_field": "repl_empl_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1730322309731",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1730322322948",
                                "_conditionalView_field": "replacement_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            },
                            {
                                "id": "condition_1730322324860",
                                "_conditionalView_field": "replacement",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            }
                        ],
                        "_action_conditionals_and_or": "AND"
                    },
                    {
                        "id": "elmnt_1730321836494",
                        "type": "text",
                        "paraText": "<b>Новые условия компенсации</b>"
                    },
                    {
                        "id": "elmnt_1730321838126",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17303227507090.044444211411303323410042",
                                "_field": "new_salary_with_rkisn",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1730322791973",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1730322806682",
                                "_conditionalView_field": "WebUser.id",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "{{user_creator.webuser_id.whom_delegate_ids}},{{user_creator.webuser_id.id}},{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}},{{new_cnb.webuser_id.whom_delegate_ids}},{{new_cnb.webuser_id.id}},{{hr_admin.webuser_id.whom_delegate_ids}},{{hr_admin.webuser_id.id}}",
                                "_conditionalView_value_RAW": true
                            },
                            {
                                "id": "condition_1730322853321",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "st_agreement,st_cnb,st_hrbp,st_hr_admin,st_orgdev"
                            }
                        ],
                        "_action_conditionals_and_or": "AND"
                    },
                    {
                        "id": "elmnt_1730322736388",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17303232645850.044214201302424212302143",
                                "_field": "comment_new_salary",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1730323278778",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1730323291422",
                                "_conditionalView_field": "WebUser.id",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "{{user_creator.webuser_id.whom_delegate_ids}},{{user_creator.webuser_id.id}},{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}},{{new_cnb.webuser_id.whom_delegate_ids}},{{new_cnb.webuser_id.id}},{{hr_admin.webuser_id.whom_delegate_ids}},{{hr_admin.webuser_id.id}}",
                                "_conditionalView_value_RAW": true
                            },
                            {
                                "id": "condition_1730323293476",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "st_agreement,st_cnb,st_hrbp,st_hr_admin,st_orgdev"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730322737813",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17303233341800.1021244234211322333343",
                                "_field": "new_period_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1730323382012",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1730323397382",
                                "_conditionalView_field": "WebUser.id",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "{{user_creator.webuser_id.whom_delegate_ids}},{{user_creator.webuser_id.id}},{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}},{{new_cnb.webuser_id.whom_delegate_ids}},{{new_cnb.webuser_id.id}},{{hr_admin.webuser_id.whom_delegate_ids}},{{hr_admin.webuser_id.id}}",
                                "_conditionalView_value_RAW": true
                            },
                            {
                                "id": "condition_1730323400010",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "st_agreement,st_cnb,st_hrbp,st_hr_admin,st_orgdev"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730322739295",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17303234578390.4212340201014310433434",
                                "_field": "new_per_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1730323478629",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1730323490861",
                                "_conditionalView_field": "new_period_bonus",
                                "_conditionalView_operator": "!==",
                                "_conditionalView_value": "whithout_bonus"
                            },
                            {
                                "id": "condition_1730323493205",
                                "_conditionalView_field": "WebUser.id",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "{{user_creator.webuser_id.whom_delegate_ids}},{{user_creator.webuser_id.id}},{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}},{{new_cnb.webuser_id.whom_delegate_ids}},{{new_cnb.webuser_id.id}},{{hr_admin.webuser_id.whom_delegate_ids}},{{hr_admin.webuser_id.id}}",
                                "_conditionalView_value_RAW": true
                            },
                            {
                                "id": "condition_1730323495391",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "st_agreement,st_cnb,st_hrbp,st_hr_admin,st_orgdev"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730323336995",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17303236515890.124210004342411300204222",
                                "_field": "new_total_salary",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1730323663997",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1730323682263",
                                "_conditionalView_field": "WebUser.id",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "{{user_creator.webuser_id.whom_delegate_ids}},{{user_creator.webuser_id.id}},{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}},{{new_cnb.webuser_id.whom_delegate_ids}},{{new_cnb.webuser_id.id}},{{hr_admin.webuser_id.whom_delegate_ids}},{{hr_admin.webuser_id.id}}",
                                "_conditionalView_value_RAW": true
                            },
                            {
                                "id": "condition_1730323684161",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "st_agreement,st_cnb,st_hrbp,st_hr_admin,st_orgdev"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730323338763",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17303237588540.023003242100140412041322",
                                "_field": "total_increase_per",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1730323773671",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1730323790330",
                                "_conditionalView_field": "WebUser.id",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "{{user_creator.webuser_id.whom_delegate_ids}},{{user_creator.webuser_id.id}},{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}},{{new_cnb.webuser_id.whom_delegate_ids}},{{new_cnb.webuser_id.id}},{{hr_admin.webuser_id.whom_delegate_ids}},{{hr_admin.webuser_id.id}}",
                                "_conditionalView_value_RAW": true
                            },
                            {
                                "id": "condition_1730323796701",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "st_agreement,st_cnb,st_hrbp,st_hr_admin,st_orgdev"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730323923031",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17303239321580.103414430121311024320432",
                                "_field": "budget_date",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1730323940806",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730323924547",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17303239525290.014013432333310113444404",
                                "_field": "actual_date",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1730323966592",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_copy_1726664382171",
                "sysName": "closed",
                "elements": [
                    {
                        "id": "elmnt_1726040565916",
                        "type": "text",
                        "paraText": "<b>Новые данные по сотруднику</b>"
                    },
                    {
                        "id": "elmnt_1726040568221",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406078490.022004404043104003301343",
                                "_field": "employee_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040626841",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726142468799",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261424711860.11121434314134431143214",
                                "_field": "new_company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_company",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726142486817",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726142502641",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261425103710.2444210030442211003404",
                                "_field": "new_position_id",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726142520500",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040900634",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260409027810.32012120130304431032131",
                                "_field": "new_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040915145",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040901379",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260409337130.34044234300421202120444",
                                "_field": "new_division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040946656",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726656554571",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{new_org_structure}}"
                    },
                    {
                        "id": "elmnt_1730319806423",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17303198091760.4211132141421243033203",
                                "_field": "new_employment_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_employment_type",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1730319825022",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726142576051",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261425830980.2430302311234032401303",
                                "_field": "new_analytics_ops",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "analytics_for_ops",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726653481880",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726142597414",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261425999980.44321143011342444144203",
                                "_field": "position_rate",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726653544400",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730321831377",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17303220005890.3222443320413000124123",
                                "_field": "replacement_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_contract_type",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1730322069829",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730321832394",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17303221018790.4012100121120443443314",
                                "_field": "contract_end_date",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1730322120278",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1730322149714",
                                "_conditionalView_field": "replacement_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730321833493",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17303221945940.3301102413401210114142",
                                "_field": "replacement",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1730322213192",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1730322225063",
                                "_conditionalView_field": "replacement_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730321835226",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17303222788600.44011233242130224123321",
                                "_field": "repl_empl_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1730322309731",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1730322322948",
                                "_conditionalView_field": "replacement_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            },
                            {
                                "id": "condition_1730322324860",
                                "_conditionalView_field": "replacement",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            }
                        ],
                        "_action_conditionals_and_or": "AND"
                    },
                    {
                        "id": "elmnt_1730321836494",
                        "type": "text",
                        "paraText": "<b>Новые условия компенсации</b>"
                    },
                    {
                        "id": "elmnt_1730321838126",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17303227507090.044444211411303323410042",
                                "_field": "new_salary_with_rkisn",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1730322791973",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1730322806682",
                                "_conditionalView_field": "WebUser.id",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "{{user_creator.webuser_id.whom_delegate_ids}},{{user_creator.webuser_id.id}},{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}},{{new_cnb.webuser_id.whom_delegate_ids}},{{new_cnb.webuser_id.id}},{{hr_admin.webuser_id.whom_delegate_ids}},{{hr_admin.webuser_id.id}}",
                                "_conditionalView_value_RAW": true
                            },
                            {
                                "id": "condition_1730322853321",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "st_agreement,st_cnb,st_hrbp,st_hr_admin,st_orgdev"
                            }
                        ],
                        "_action_conditionals_and_or": "AND"
                    },
                    {
                        "id": "elmnt_1730322736388",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17303232645850.044214201302424212302143",
                                "_field": "comment_new_salary",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1730323278778",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1730323291422",
                                "_conditionalView_field": "WebUser.id",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "{{user_creator.webuser_id.whom_delegate_ids}},{{user_creator.webuser_id.id}},{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}},{{new_cnb.webuser_id.whom_delegate_ids}},{{new_cnb.webuser_id.id}},{{hr_admin.webuser_id.whom_delegate_ids}},{{hr_admin.webuser_id.id}}",
                                "_conditionalView_value_RAW": true
                            },
                            {
                                "id": "condition_1730323293476",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "st_agreement,st_cnb,st_hrbp,st_hr_admin,st_orgdev"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730322737813",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17303233341800.1021244234211322333343",
                                "_field": "new_period_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1730323382012",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1730323397382",
                                "_conditionalView_field": "WebUser.id",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "{{user_creator.webuser_id.whom_delegate_ids}},{{user_creator.webuser_id.id}},{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}},{{new_cnb.webuser_id.whom_delegate_ids}},{{new_cnb.webuser_id.id}},{{hr_admin.webuser_id.whom_delegate_ids}},{{hr_admin.webuser_id.id}}",
                                "_conditionalView_value_RAW": true
                            },
                            {
                                "id": "condition_1730323400010",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "st_agreement,st_cnb,st_hrbp,st_hr_admin,st_orgdev"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730322739295",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17303234578390.4212340201014310433434",
                                "_field": "new_per_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1730323478629",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1730323490861",
                                "_conditionalView_field": "new_period_bonus",
                                "_conditionalView_operator": "!==",
                                "_conditionalView_value": "whithout_bonus"
                            },
                            {
                                "id": "condition_1730323493205",
                                "_conditionalView_field": "WebUser.id",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "{{user_creator.webuser_id.whom_delegate_ids}},{{user_creator.webuser_id.id}},{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}},{{new_cnb.webuser_id.whom_delegate_ids}},{{new_cnb.webuser_id.id}},{{hr_admin.webuser_id.whom_delegate_ids}},{{hr_admin.webuser_id.id}}",
                                "_conditionalView_value_RAW": true
                            },
                            {
                                "id": "condition_1730323495391",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "st_agreement,st_cnb,st_hrbp,st_hr_admin,st_orgdev"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730323336995",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17303236515890.124210004342411300204222",
                                "_field": "new_total_salary",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1730323663997",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1730323682263",
                                "_conditionalView_field": "WebUser.id",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "{{user_creator.webuser_id.whom_delegate_ids}},{{user_creator.webuser_id.id}},{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}},{{new_cnb.webuser_id.whom_delegate_ids}},{{new_cnb.webuser_id.id}},{{hr_admin.webuser_id.whom_delegate_ids}},{{hr_admin.webuser_id.id}}",
                                "_conditionalView_value_RAW": true
                            },
                            {
                                "id": "condition_1730323684161",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "st_agreement,st_cnb,st_hrbp,st_hr_admin,st_orgdev"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730323338763",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17303237588540.023003242100140412041322",
                                "_field": "total_increase_per",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1730323773671",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1730323790330",
                                "_conditionalView_field": "WebUser.id",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "{{user_creator.webuser_id.whom_delegate_ids}},{{user_creator.webuser_id.id}},{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}},{{new_cnb.webuser_id.whom_delegate_ids}},{{new_cnb.webuser_id.id}},{{hr_admin.webuser_id.whom_delegate_ids}},{{hr_admin.webuser_id.id}}",
                                "_conditionalView_value_RAW": true
                            },
                            {
                                "id": "condition_1730323796701",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "st_agreement,st_cnb,st_hrbp,st_hr_admin,st_orgdev"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730323923031",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17303239321580.103414430121311024320432",
                                "_field": "budget_date",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1730323940806",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730323924547",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17303239525290.014013432333310113444404",
                                "_field": "actual_date",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1730323966592",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
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
                        "id": "elmnt_1712052683797",
                        "type": "hint",
                        "hintColor": "ok",
                        "hintTitle": "Thank you!",
                        "hintText": "Submitted"
                    }
                ]
            },
            {
                "id": "step_1733436456385",
                "sysName": "popup_cancel",
                "elements": [
                    {
                        "id": "elmnt_1733436466284",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17334364757340.42342020224030204232441",
                                "_field": "cancel_reason",
                                "_field_required": true
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1733436959179",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17334369623470.024204332230411111333432",
                                "_action": "action_1733436850200",
                                "_action_label": "Ок",
                                "_action_button_type": "accent",
                                "_action_customRequired": true,
                                "_action_customRequired_fields": [
                                    "cancel_reason"
                                ]
                            },
                            {
                                "id": "17334369648340.43342221411323431311042",
                                "_action": "action_1733436912683",
                                "_action_label": "Назад",
                                "_action_icon": "back"
                            }
                        ],
                        "_actions_in_a_row": 2
                    }
                ]
            },
            {
                "id": "step_1726041074359",
                "sysName": "actions",
                "elements": [
                    {
                        "id": "elmnt_1733428096962",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17334281008560.4132304040203201202432",
                                "_action": "action_1733426746239",
                                "_action_label": "Согласовать",
                                "_action_button_type": "accent",
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Заявка согласована",
                                "_action_standardRequired": true,
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1733428129829",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn"
                                    },
                                    {
                                        "id": "condition_1733428132435",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1733428170879",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "approval_new_direct"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726137156777",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17261371587930.31314401423210214340344",
                                "_action": "action_1726041082861",
                                "_action_label": "Согласовать",
                                "_action_icon": "done",
                                "_action_button_type": "accent",
                                "_action_standardRequired": true,
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1726137203178",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_up_direct.webuser_id.whom_delegate_ids}},{{new_up_direct.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Заявка согласована"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726137276907",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "approval_new_up_direct"
                            },
                            {
                                "id": "condition_1726137300809",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "st_agreement"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726137344095",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17261373469320.014330103421103232201232",
                                "_action": "action_1726137094698",
                                "_action_label": "Согласовать",
                                "_action_icon": "done",
                                "_action_button_type": "accent",
                                "_action_standardRequired": true,
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1726137365646",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{current_direct_name.webuser_id.whom_delegate_ids}},{{current_direct_name.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Заявка согласована"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726137425884",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "approval_current_direct"
                            },
                            {
                                "id": "condition_1726137444610",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "st_agreement"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726645167107",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17266451699890.30032211302334310310204",
                                "_action": "action_1726644837987",
                                "_action_label": "Согласовать",
                                "_action_icon": "done",
                                "_action_button_type": "accent",
                                "_action_oneTime": true,
                                "_action_standardRequired": true,
                                "_action_oneTime_message": "Заявка согласована",
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1726645223467",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{current_hrbp.webuser_id.whom_delegate_ids}},{{current_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726645317729",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "approval_out_hrbp"
                            },
                            {
                                "id": "condition_1726645354520",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "st_hrbp"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726658900809",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17266589248660.42242044302224324201312",
                                "_action": "action_1726658446511",
                                "_action_label": "Согласовать",
                                "_action_icon": "done",
                                "_action_button_type": "accent",
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Заявка согласована",
                                "_action_customRequired": false,
                                "_action_standardRequired": true,
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1726658982986",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{responsible_employee_id.webuser_id.whom_delegate_ids}},{{responsible_employee_id.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726659069009",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "add_approval_out"
                            },
                            {
                                "id": "condition_1726659093774",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "st_hrbp"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726646315160",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17266463175290.41102103201411213324432",
                                "_action": "action_1726646254631",
                                "_action_label": "Cогласовать",
                                "_action_icon": "done",
                                "_action_button_type": "accent",
                                "_action_standardRequired": true,
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1726646339129",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Заявка согласована"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726646380877",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "approval_in_hrbp"
                            },
                            {
                                "id": "condition_1726646389575",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "st_hrbp"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727087091289",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17270870935580.4424023130320324000422",
                                "_action": "action_1727086634714",
                                "_action_label": "Согласовать",
                                "_action_icon": "done",
                                "_action_button_type": "accent",
                                "_action_standardRequired": false,
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Заявка согласована",
                                "_conditionalView": true,
                                "_action_conditional_disable_or_hide": "hide",
                                "_conditions": [
                                    {
                                        "id": "condition_1727087131071",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{responsible_employee_id.webuser_id.whom_delegate_ids}},{{responsible_employee_id.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_addTooltip": true,
                                "_action_addTooltip_text": "Согласовано"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1727087185371",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "add_approval_in"
                            },
                            {
                                "id": "condition_1727087208714",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "st_hrbp"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726659130940",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17266591336680.11144114120413203322423",
                                "_action": "action_1726658528448",
                                "_action_label": "Согласовать",
                                "_action_icon": "done",
                                "_action_button_type": "accent",
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Заявка согласована",
                                "_action_standardRequired": true,
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1726659169276",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_cnb.webuser_id.whom_delegate_ids}},{{new_cnb.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726659217679",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "approval_in_cnb"
                            },
                            {
                                "id": "condition_1726659246522",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "st_cnb"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1733428194428",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17334282007810.42302032222320200012224",
                                "_action": "action_1733426878011",
                                "_action_label": "Данные обновлены",
                                "_action_button_type": "accent",
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Заявка подтверждена",
                                "_action_standardRequired": true,
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1733428273645",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_orgdev"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1733428311061",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "approval_ss_specialist"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727333677531",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17273336913100.42434140312311012433403",
                                "_action": "action_1727333802381",
                                "_action_icon": null,
                                "_action_button_type": "accent",
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Данные сохранены",
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1727335405841",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1727333706664",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "approval_in_cnb"
                            },
                            {
                                "id": "condition_1727333758709",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "st_hrbp"
                            }
                        ],
                        "_action_conditionals_and_or": "AND"
                    },
                    {
                        "id": "elmnt_1726661938039",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17266619410020.203102432011401141342133",
                                "_action": "action_1726662071610",
                                "_action_label": "Согласовать",
                                "_action_icon": "done",
                                "_action_button_type": "accent",
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Заявка согласована",
                                "_action_standardRequired": true,
                                "_conditionalView": true,
                                "_action_conditional_disable_or_hide": "hide",
                                "_conditions": [
                                    {
                                        "id": "condition_1726662238749",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{budget_holder.webuser_id.whom_delegate_ids}},{{budget_holder.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726662262429",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "approval_in_budget_holder"
                            },
                            {
                                "id": "condition_1726662264211",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "st_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726663321236",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17266633258410.40002013322041230100332",
                                "_action": "action_1726662874174",
                                "_action_icon": "done",
                                "_action_button_type": "accent",
                                "_action_oneTime": true,
                                "_action_standardRequired": true,
                                "_conditionalView": true,
                                "_action_conditional_disable_or_hide": "hide",
                                "_conditions": [
                                    {
                                        "id": "condition_1726663375599",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{user_creator.webuser_id.whom_delegate_ids}},{{user_creator.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_oneTime_message": "Решение подтверждено"
                            },
                            {
                                "id": "17266633277020.43143400242022141203112",
                                "_action": "action_1726663082108",
                                "_action_icon": "ban",
                                "_action_button_type": "danger",
                                "_conditionalView": true,
                                "_action_conditional_disable_or_hide": "hide",
                                "_conditions": [
                                    {
                                        "id": "condition_1726663433501",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{user_creator.webuser_id.whom_delegate_ids}},{{user_creator.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_oneTime": true,
                                "_action_standardRequired": true,
                                "_action_oneTime_message": "Решение подтверждено"
                            }
                        ],
                        "_actions_in_a_row": 2,
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726663461244",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "present_offer"
                            },
                            {
                                "id": "condition_1726663462456",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "st_agreement"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726667423189",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17266674272880.430040012302421323422",
                                "_action": "action_1726667009439",
                                "_action_label": "Данные обновлены",
                                "_action_icon": "refresh",
                                "_action_button_type": "accent",
                                "_conditionalView": false,
                                "_action_standardRequired": true,
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Заявка подтверждена"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726667473658",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "st_orgdev"
                            },
                            {
                                "id": "condition_1726667499985",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "approval_orgdev"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727079158114",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17270793929640.12132444414431412034033",
                                "_action": "action_1727079172257",
                                "_action_label": "Подтвердить",
                                "_action_icon": "done",
                                "_action_button_type": "accent",
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Заявка подтверждена",
                                "_action_standardRequired": true,
                                "_conditionalView": true,
                                "_action_conditional_disable_or_hide": "hide",
                                "_conditions": [
                                    {
                                        "id": "condition_1727079496236",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_admin.webuser_id.whom_delegate_ids}},{{hr_admin.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1727079556564",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "approval_hr_admin"
                            },
                            {
                                "id": "condition_1727079612352",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "st_hr_admin"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1733437172458",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17334371749400.204221412131040222112422",
                                "_action": "action_1733437123960",
                                "_action_button_type": "danger",
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1733437189381",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{user_creator.webuser_id.whom_delegate_ids}},{{user_creator.webuser_id.id}},{{new_direct.webuser_id.id}},{{new_direct.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1733437200428",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_agreement,st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1733437354675",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "closed,rejected"
                            }
                        ]
                    }
                ],
                "sectionVisibility": "always"
            }
        ],
        "actions": [
            {
                "id": "action_1726041082861",
                "name": "Согласовать approval_new_up_direct",
                "actionSubmit": true,
                "actionType": "endpoint",
                "endpoint": "st_create_action",
                "mapping": [
                    {
                        "id": "mapping_1726041295129",
                        "field": "action",
                        "value": "change_status"
                    },
                    {
                        "id": "mapping_1726137059587",
                        "field": "pay_load",
                        "value": "approval_current_direct"
                    }
                ]
            },
            {
                "id": "action_1726137094698",
                "name": "Согласовать approval_current_direct",
                "actionType": "endpoint",
                "endpoint": "st_create_action",
                "mapping": [
                    {
                        "id": "mapping_1726137122243",
                        "field": "action",
                        "value": "change_status"
                    },
                    {
                        "id": "mapping_1726137123095",
                        "field": "pay_load",
                        "value": "approval_out_hrbp"
                    }
                ],
                "actionSubmit": true
            },
            {
                "id": "action_1726644837987",
                "name": "Согласовать approval_out_hrbp",
                "actionSubmit": true,
                "actionType": "endpoint",
                "endpoint": "st_create_action",
                "mapping": [
                    {
                        "id": "mapping_1726644881337",
                        "field": "action",
                        "value": "add_approval"
                    }
                ]
            },
            {
                "id": "action_1726644921945",
                "name": "Переназначить",
                "actionType": "endpoint",
                "endpoint": "st_create_action",
                "mapping": [
                    {
                        "id": "mapping_1726644990212",
                        "field": "action",
                        "value": "new_responsible"
                    }
                ],
                "actionSubmit": true
            },
            {
                "id": "action_1726646254631",
                "name": "Согласовать approval_in_hrbp",
                "actionType": "endpoint",
                "endpoint": "st_create_action",
                "mapping": [
                    {
                        "id": "mapping_1726646278343",
                        "field": "action",
                        "value": "add_approval"
                    }
                ],
                "actionSubmit": true
            },
            {
                "id": "action_1726658446511",
                "name": "Согласовать add_approval_out",
                "actionType": "endpoint",
                "endpoint": "st_create_action",
                "mapping": [
                    {
                        "id": "mapping_1726658458905",
                        "field": "action",
                        "value": "change_status"
                    },
                    {
                        "id": "mapping_1726658459801",
                        "field": "pay_load",
                        "value": "approval_in_hrbp"
                    }
                ],
                "actionSubmit": true
            },
            {
                "id": "action_1726658528448",
                "name": "Cогласовать approval_in_cnb",
                "actionSubmit": true,
                "actionType": "endpoint",
                "endpoint": "st_create_action",
                "mapping": [
                    {
                        "id": "mapping_1726658548206",
                        "field": "action",
                        "value": "change_status"
                    },
                    {
                        "id": "mapping_1733427042528",
                        "field": "pay_load",
                        "value": "approval_ss_specialist"
                    }
                ]
            },
            {
                "id": "action_1726662071610",
                "name": "Согласовать approval_in_budget_holder",
                "actionType": "endpoint",
                "endpoint": "st_create_action",
                "mapping": [
                    {
                        "id": "mapping_1726662124946",
                        "field": "action",
                        "value": "change_status"
                    },
                    {
                        "id": "mapping_1726662126555",
                        "field": "pay_load",
                        "value": "present_offer"
                    }
                ],
                "actionSubmit": true
            },
            {
                "id": "action_1726662874174",
                "name": "Сотрудник принял оффер",
                "actionType": "endpoint",
                "endpoint": "st_create_action",
                "mapping": [
                    {
                        "id": "mapping_1726662896012",
                        "field": "action",
                        "value": "orgdev"
                    }
                ],
                "actionSubmit": true
            },
            {
                "id": "action_1726663082108",
                "name": "Сотрудник отклонил оффер",
                "actionSubmit": true,
                "actionType": "endpoint",
                "endpoint": "st_create_action",
                "mapping": [
                    {
                        "id": "mapping_1726663109951",
                        "field": "action",
                        "value": "refused"
                    }
                ]
            },
            {
                "id": "action_1726667009439",
                "name": "Подтвердить orgdev",
                "actionSubmit": true,
                "actionType": "endpoint",
                "endpoint": "st_create_action",
                "mapping": [
                    {
                        "id": "mapping_1726667053656",
                        "field": "action",
                        "value": "hr_admin"
                    }
                ]
            },
            {
                "id": "action_1727079172257",
                "name": "Подтвердить hr admin",
                "actionType": "endpoint",
                "actionSubmit": true,
                "endpoint": "st_create_action",
                "mapping": [
                    {
                        "id": "mapping_1727079249704",
                        "field": "action",
                        "value": "change_status"
                    },
                    {
                        "id": "mapping_1727079254374",
                        "field": "pay_load",
                        "value": "closed"
                    }
                ]
            },
            {
                "id": "action_1727086634714",
                "name": "Согласовать add_approval_in",
                "actionType": "endpoint",
                "endpoint": "st_create_action",
                "mapping": [
                    {
                        "id": "mapping_1727086653556",
                        "field": "action",
                        "value": "add_approval"
                    }
                ],
                "actionSubmit": true
            },
            {
                "id": "action_1727333802381",
                "name": "Сохранить",
                "actionType": "endpoint",
                "actionSubmit": true,
                "endpoint": "st_create_action",
                "mapping": [
                    {
                        "id": "mapping_1727333838626",
                        "field": "action",
                        "value": "save"
                    }
                ]
            },
            {
                "id": "action_1733426746239",
                "name": "Cогласовать approval_new_direct",
                "actionType": "endpoint",
                "endpoint": "st_create_action",
                "mapping": [
                    {
                        "id": "mapping_1733426787429",
                        "field": "action",
                        "value": "change_status"
                    },
                    {
                        "id": "mapping_1733426802018",
                        "field": "pay_load",
                        "value": "approval_new_up_direct"
                    }
                ],
                "actionSubmit": true
            },
            {
                "id": "action_1733426878011",
                "name": "Подтвердить ss specialist",
                "actionType": "endpoint",
                "endpoint": "st_create_action",
                "mapping": [
                    {
                        "id": "mapping_1733426942330",
                        "field": "action",
                        "value": "budget_holder"
                    }
                ]
            },
            {
                "id": "action_1733436850200",
                "name": "Ок (cancel)",
                "actionType": "endpoint",
                "endpoint": "st_create_action",
                "mapping": [
                    {
                        "id": "mapping_1733436870348",
                        "field": "action",
                        "value": "cancel"
                    }
                ],
                "actionSubmit": true
            },
            {
                "id": "action_1733436912683",
                "name": "Закрыть popup",
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1733436931047",
                        "field": "FormState.popup"
                    }
                ]
            },
            {
                "id": "action_1733437123960",
                "name": "Отменить",
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1733437146142",
                        "field": "FormState.popup",
                        "value": "popup_cancel"
                    }
                ]
            }
        ],
        "general": {
            "edittingOn": true,
            "saveState": false,
            "autosubmit": "model",
            "autosubmit_model": [
                "per_bonus",
                "current_salary_with_rkisn",
                "new_per_bonus",
                "new_salary_with_rkisn",
                "current_total_salary",
                "new_total_salary"
            ],
            "showFullModel": false,
            "showAuthModel": false,
            "showModel": true,
            "showState": true,
            "closePopupOnClick": true,
            "debugForUsers": true,
            "debugUsers": "hrbp"
        },
        "state": {
            "step": "{{status}}",
            "popup": null,
            "prevStep": "",
            "errorMessage": "",
            "reason": "",
            "cancelling": "false",
            "next": "false",
            "refuse": "false"
        },
        "hideHint": true
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "new_hrbp",
            "dataType": "link",
            "name": "Новый HR BP",
            "id": "69701725431725005",
            "link": "employees",
            "group": "1725431710596",
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
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "current_up_direct",
            "dataType": "link",
            "name": "Текущий верхнеуровневый руководитель (руководитель нанимающего менеджера) для Non-TECH / Директор департамента для TECH",
            "id": "43321725431723921",
            "link": "employees",
            "group": "1725431710596",
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
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "new_division",
            "dataType": "link",
            "name": "Новое подразделение сотрудника",
            "id": "47731725431619206",
            "link": "structure",
            "group": "1725431600480",
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
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "new_position",
            "dataType": "link",
            "name": "Новая должность сотрудника",
            "id": "46231725431618308",
            "link": "employees",
            "group": "1725431600480",
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
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "current_division",
            "dataType": "link",
            "name": "Текущее подразделение сотрудника",
            "id": "75661725431461525",
            "link": "structure",
            "group": "1725431445711",
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
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "current_position",
            "dataType": "string",
            "name": "Текущая должность сотрудника",
            "id": "18221725431460573",
            "link": "",
            "group": "1725431445711",
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
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "planned_date",
            "dataType": "date",
            "name": "Планируемая дата перевода",
            "id": "30281725431329024",
            "link": "",
            "group": "1725431234450",
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
                "dateFormat": "DD.MM.YYYY",
                "timeFormat": "",
                "isUTC": "false"
            },
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "current_direct_name",
            "dataType": "link",
            "name": "ФИО текущего руководителя ",
            "id": "22651725431263787",
            "link": "employees",
            "group": "1725431234450",
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
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "employee_name",
            "dataType": "link",
            "name": "ФИО сотрудника",
            "id": "74491725431250990",
            "link": "employees",
            "group": "1725431234450",
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
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "last_change_date",
            "dataType": "date",
            "name": "Дата последнего изменения",
            "id": "73651725433775126",
            "link": "",
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
                "dateFormat": "DD.MM.YYYY",
                "timeFormat": " HH:mm",
                "isUTC": "false"
            },
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "all_user_ids",
            "dataType": "arrayLink",
            "name": "Все пользователи, относящиеся к заявке",
            "id": "29371725433750833",
            "link": "employees",
            "group": "0",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 11,
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
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "responsible_roles",
            "dataType": "arrayLink",
            "name": "Ответственные роли",
            "id": "55271725433718683",
            "link": "roles",
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
            "linkOrArrayLinkType": true,
            "linkType": false,
            "arrayLink": true,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "responsible_employee_id",
            "dataType": "link",
            "name": "Ответственный за текущий этап",
            "id": "77841725433699314",
            "link": "employees",
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
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "date_text",
            "dataType": "string",
            "name": "Дата",
            "id": "82361725433675003",
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
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "date",
            "dataType": "date",
            "name": "Дата создания заявки",
            "id": "96891725433646615",
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
                "dateFormat": "DD.MM.YYYY",
                "timeFormat": " HH:mm",
                "isUTC": "false"
            },
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "number",
            "dataType": "string",
            "name": "Номер заявки",
            "id": "29661725433629762",
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
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "logs",
            "dataType": "arrayLink",
            "name": "История изменений",
            "id": "30101725433610853",
            "link": "st_logs",
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
            "linkOrArrayLinkType": true,
            "linkType": false,
            "arrayLink": true,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "user_creator",
            "dataType": "link",
            "name": "Инициатор заявки",
            "id": "24901725433580444",
            "link": "employees",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "last_user",
            "dataType": "link",
            "name": "Кем изменено",
            "id": "85461725433561607",
            "link": "WebUser",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "prev_status",
            "dataType": "link",
            "name": "Предыдущий статус",
            "id": "94001725433553894",
            "link": "st_statuses",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "status",
            "dataType": "link",
            "name": "Статус",
            "id": "53231725433518277",
            "link": "st_statuses",
            "group": "0",
            "tags": "",
            "indexing": true,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 1,
            "linkIndexFieldSysName": [
                "id"
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
            "typeVariable": {},
            "json": false,
            "indexExists": true,
            "array": false
        },
        {
            "sysName": "current_total_salary",
            "dataType": "decimal",
            "name": "Текущий совокупный доход, gross руб/мес",
            "id": "74621726052058609",
            "link": "",
            "group": "1726051810227",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "per_bonus",
            "dataType": "number",
            "name": "Текущий процент премии",
            "id": "97081726052045965",
            "link": "",
            "group": "1726051810227",
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
            "format": "positiveNum",
            "formatOptions": null,
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "current_salary_with_rkisn",
            "dataType": "decimal",
            "name": "Текущий оклад, включая РКиСН и другие надбавки, gross руб/мес",
            "id": "98801726051969675",
            "link": "",
            "group": "1726051810227",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "rkisn",
            "dataType": "decimal",
            "name": "РКиСН",
            "id": "85731726051943563",
            "link": "",
            "group": "1726051810227",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "current_salary_without_rkisn",
            "dataType": "decimal",
            "name": "Текущий оклад без РКиСН, gross руб/мес",
            "id": "42431726051884641",
            "link": "",
            "group": "1726051810227",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "period_bonus",
            "dataType": "link",
            "name": "Текущая периодичность выплаты премии",
            "id": "48991726051831109",
            "link": "st_bonus",
            "group": "1726051810227",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 0,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "analytics_ops",
            "dataType": "link",
            "name": "Текущая категория персонала (Analytics for Ops)",
            "id": "36071726045140500",
            "link": "analytics_for_ops",
            "group": "1725431445711",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "position_id",
            "dataType": "string",
            "name": "Текущий код позиции (из УШР)",
            "id": "45681726045097116",
            "link": null,
            "group": "1725431445711",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "company",
            "dataType": "link",
            "name": "Текущая организация",
            "id": "27451726045070790",
            "link": "st_company",
            "group": "1725431445711",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "contract_end_date",
            "dataType": "date",
            "name": "Дата окончания договора",
            "id": "94091726044922925",
            "link": "",
            "group": "1725431234450",
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
                "dateFormat": "DD.MM.YYYY",
                "timeFormat": "",
                "isUTC": "false"
            },
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "replacement_type",
            "dataType": "link",
            "name": "Тип перевода",
            "id": "42371726044856787",
            "link": "st_contract_type",
            "group": "1725431234450",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "repl_empl_name",
            "dataType": "link",
            "name": "ФИО заменяемого сотрудника",
            "id": "65551726044774422",
            "link": "employees",
            "group": "1725431234450",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "replacement",
            "dataType": "boolean",
            "name": "Замена сотрудника",
            "id": "44491726044721571",
            "link": "",
            "group": "1725431234450",
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
            "formatOptions": {
                "customOptionLabel": "My option",
                "keyValue": {
                    "key": "key",
                    "value": "value",
                    "button": "One more"
                },
                "dateLocale": "en-gb",
                "booleanOptions": [
                    "Да",
                    "Нет"
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "current_hrbp",
            "dataType": "link",
            "name": "Текущий HR BP",
            "id": "68841726044632237",
            "link": "employees",
            "group": "1725431710596",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "position_rate",
            "dataType": "string",
            "name": "Коэффициент занятости на новой позиции",
            "id": "72981726142316557",
            "link": "",
            "group": "1725431600480",
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
                "imask": "{\n    mask: Number,\n    scale: 2,\n    thousandsSeparator: '',\n    padFractionalZeros: false,\n    normalizeZeros: true,\n    radix: ',',\n    mapToRadix: ['.']\n  }",
                "isUTC": "false"
            },
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "new_analytics_ops",
            "dataType": "link",
            "name": "Новая категория персонала (Analytics for Ops)",
            "id": "94121726142293084",
            "link": "analytics_for_ops",
            "group": "1725431600480",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "new_position_id",
            "dataType": "string",
            "name": "Новый код позиции (из УШР) ",
            "id": "33951726142259108",
            "link": null,
            "group": "1725431600480",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "new_company",
            "dataType": "link",
            "name": "Новая организация",
            "id": "15551726142220035",
            "link": "st_company",
            "group": "1725431600480",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "new_total_salary",
            "dataType": "decimal",
            "name": "Новый совокупный доход, gross руб/мес",
            "id": "38891726145546263",
            "link": "",
            "group": "1726145208794",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "new_per_bonus",
            "dataType": "number",
            "name": "Новый процент премии",
            "id": "71771726145483919",
            "link": "",
            "group": "1726145208794",
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
            "format": "positiveNum",
            "formatOptions": null,
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "new_salary_with_rkisn",
            "dataType": "decimal",
            "name": "Новый оклад, включая РКиСН и другие надбавки, gross руб/мес",
            "id": "99131726145453730",
            "link": "",
            "group": "1726145208794",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "new_rkisn",
            "dataType": "decimal",
            "name": "Новый РКиСН",
            "id": "40591726145349693",
            "link": "",
            "group": "1726145208794",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "new_salary_without_rkisn",
            "dataType": "decimal",
            "name": "Новый оклад без РКиСН, gross руб/мес",
            "id": "87511726145291105",
            "link": "",
            "group": "1726145208794",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "new_period_bonus",
            "dataType": "link",
            "name": "Новая периодичность выплаты премии",
            "id": "49131726145232067",
            "link": "st_bonus",
            "group": "1726145208794",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 0,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "new_org_structure",
            "dataType": "string",
            "name": "Новая организационная структура",
            "id": "22651726596356199",
            "link": "",
            "group": "1725431600480",
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
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "current_org_structure",
            "dataType": "string",
            "name": "Текущая организационная структура",
            "id": "10551726596275813",
            "link": "",
            "group": "1725431445711",
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
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "new_up_direct",
            "dataType": "link",
            "name": "Верхнеуровневый руководитель (руководитель нанимающего менеджера) для Non-TECH / Директор департамента для TECH",
            "id": "49461726638728534",
            "link": "employees",
            "group": "1725431710596",
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
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "comment_orgdev",
            "dataType": "string",
            "name": "Примечание для Оргдев",
            "id": "71921726653914186",
            "link": "",
            "group": "1726145208794",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "new_cnb",
            "dataType": "link",
            "name": "Принимающий С&B",
            "id": "75681726654003783",
            "link": "employees",
            "group": "1725431710596",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "orgdev",
            "dataType": "boolean",
            "name": "Добавить Оргдев",
            "id": "54541726653864757",
            "link": "",
            "group": "1726145208794",
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
            "formatOptions": {
                "customOptionLabel": "My option",
                "keyValue": {
                    "key": "key",
                    "value": "value",
                    "button": "One more"
                },
                "dateLocale": "en-gb",
                "booleanOptions": [
                    "Да",
                    "Нет"
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "current_cnb",
            "dataType": "link",
            "name": "Текущий C&B",
            "id": "58661726052187313",
            "link": "employees",
            "group": "1725431710596",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "hr_admin",
            "dataType": "link",
            "name": "HR Admin",
            "id": "80691726655523102",
            "link": "employees",
            "group": "1725431710596",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "budget_holder",
            "dataType": "link",
            "name": "Владелец бюджета (или лицо его заменяющее)",
            "id": "30591726656292225",
            "link": "employees",
            "group": "1725431710596",
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
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "new_cost_center",
            "dataType": "string",
            "name": "Новый кост-центр (Optimacros)",
            "id": "48901726656261119",
            "link": "",
            "group": "1726145208794",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "current_cost_center",
            "dataType": "string",
            "name": "Текущий кост-центр (Optimacros)",
            "id": "28041726656199647",
            "link": "",
            "group": "1726051810227",
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
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "budget_date",
            "dataType": "date",
            "name": "Бюджетная дата преревода",
            "id": "49131726656143374",
            "link": "",
            "group": "1725431234450",
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
                "dateFormat": "DD.MM.YYYY",
                "timeFormat": "",
                "isUTC": "false"
            },
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "add_approval_in",
            "dataType": "link",
            "name": "Новый HR директор направления",
            "id": "38281727073206486",
            "link": "add_approval",
            "group": "1725431710596",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "add_approval_out",
            "dataType": "link",
            "name": "Текущий HR директор направления",
            "id": "74711727073168576",
            "link": "add_approval",
            "group": "1725431710596",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "replacement_reason",
            "dataType": "link",
            "name": "Причина замены",
            "id": "61451727074752275",
            "link": "st_reason_replacement",
            "group": "1725431234450",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "actual_date",
            "dataType": "date",
            "name": "Фактическая дата перевода",
            "id": "64531727078660236",
            "link": "",
            "group": "1725431600480",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 9,
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
                "dateFormat": "DD.MM.YYYY",
                "timeFormat": "",
                "isUTC": "false"
            },
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "total_increase_per",
            "dataType": "decimal",
            "name": "Процент прироста совокупного дохода(%)",
            "id": "69461727080268194",
            "link": "",
            "group": "1726145208794",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "role_budget_holder",
            "dataType": "boolean",
            "name": "Добавить Владельца бюджета в качестве:",
            "id": "86541727248705190",
            "link": "",
            "group": "1725431710596",
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
            "formatOptions": {
                "customOptionLabel": "My option",
                "keyValue": {
                    "key": "key",
                    "value": "value",
                    "button": "One more"
                },
                "dateLocale": "en-gb",
                "booleanOptions": [
                    "Cогласующего лица",
                    "Получателя уведомления"
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "new_vacancy_id",
            "dataType": "string",
            "name": "ID вакансии (из Optimacros)",
            "id": "95861727459733761",
            "link": null,
            "group": "1725431600480",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "comment_new_salary",
            "dataType": "string",
            "name": "Комментарий к структуре нового дохода",
            "id": "63431727459599943",
            "link": null,
            "group": "1726145208794",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "comment_current_salary",
            "dataType": "string",
            "name": "Комментарий к структуре текущего дохода",
            "id": "11561727459549308",
            "link": null,
            "group": "1726051810227",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "new_employment_type",
            "dataType": "link",
            "name": "Новый формат работы сотрудника",
            "id": "46561730316605258",
            "link": "st_employment_type",
            "group": "1725431600480",
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
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "cancel_reason_refused",
            "dataType": "string",
            "name": "Причина",
            "id": "10131730487702232",
            "link": "",
            "group": "1730487656046",
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
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "cancel_reason_bfr_prsnt",
            "dataType": "string",
            "name": "Причина",
            "id": "22341730487701249",
            "link": "",
            "group": "1730487656046",
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
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "cancel_reason",
            "dataType": "string",
            "name": "Укажите причину",
            "id": "59261733436687927",
            "link": "",
            "group": "1730487656046",
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
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "new_direct",
            "dataType": "link",
            "name": "Новый руководитель",
            "id": "75461733428579077",
            "link": "employees",
            "group": "1725431710596",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "hr_bp_creator",
            "dataType": "json",
            "name": "Заявка создана HR BP, вместо руководителя",
            "id": "84751733428448544",
            "link": "",
            "group": "1725431710596",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 11,
            "linkIndexFieldSysName": [],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": "checkboxes",
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
                        "value": "hrbp",
                        "label": null
                    }
                ]
            },
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": true,
            "indexExists": false,
            "array": false
        }
    ],
    "data": [
        {
            "number": "ST-79295",
            "prev_status": {
                "id": "approval_new_direct",
                "status": "Согласование с новым руководителем"
            },
            "current_org_structure": "Распределительный центр => Складской отдел => Участок инвентаризации и проблемного товара => Смена №3",
            "new_up_direct": {
                "email": "aleksandra.kalina@lamoda.ru",
                "division_name": "Группа бизнес-анализа",
                "id": "aleksandra.kalina@lamoda.ru",
                "position": "Аналитик по развитию корпоративных бизнес-приложений",
                "webuser_id": {
                    "who_delegated_ids": [],
                    "role": [
                        "jo_recruiter",
                        "jo_agreement",
                        "admin"
                    ],
                    "whom_delegate_ids": [],
                    "id": "aleksandra.kalina@lamoda.ru"
                },
                "employee_full_name": "Александра Калина"
            },
            "planned_date": 1735333200000,
            "hr_bp_creator": "{\"hrbp\":true}",
            "current_direct_name": {
                "email": "aleksandra.kalina@lamoda.ru",
                "division_name": "Группа бизнес-анализа",
                "id": "aleksandra.kalina@lamoda.ru",
                "position": "Аналитик по развитию корпоративных бизнес-приложений",
                "webuser_id": {
                    "who_delegated_ids": [],
                    "role": [
                        "jo_recruiter",
                        "jo_agreement",
                        "admin"
                    ],
                    "whom_delegate_ids": [],
                    "id": "aleksandra.kalina@lamoda.ru"
                },
                "employee_full_name": "Александра Калина"
            },
            "user_creator": {
                "email": "aleksandra.kalina@lamoda.ru",
                "division_name": "Группа бизнес-анализа",
                "id": "aleksandra.kalina@lamoda.ru",
                "position": "Аналитик по развитию корпоративных бизнес-приложений",
                "webuser_id": {
                    "who_delegated_ids": [],
                    "role": [
                        "jo_recruiter",
                        "jo_agreement",
                        "admin"
                    ],
                    "whom_delegate_ids": [],
                    "id": "aleksandra.kalina@lamoda.ru"
                },
                "employee_full_name": "Александра Калина"
            },
            "new_employment_type": "flex",
            "employee_name": {
                "division_name": "Смена №3",
                "id": "test.employee",
                "position": "Специалист",
                "webuser_id": "test.employee",
                "employee_full_name": "Тестовый Сотрудник"
            },
            "new_org_structure": "Распределительный центр => Складской отдел => Смена №1 => Зона хранения товара => Участок размещения М2",
            "new_division": {
                "division_name": "Участок размещения М2",
                "id": "2439278"
            },
            "new_position": "1",
            "last_change_date": 1733433750000,
            "current_division": {
                "division_name": "Смена №3",
                "id": "706616"
            },
            "responsible_employee_id": {
                "division_name": "Группа бизнес-анализа",
                "id": "aleksandra.kalina@lamoda.ru",
                "position": "Аналитик по развитию корпоративных бизнес-приложений",
                "webuser_id": {
                    "who_delegated_ids": [],
                    "role": [
                        "jo_recruiter",
                        "jo_agreement",
                        "admin"
                    ],
                    "whom_delegate_ids": [],
                    "id": "aleksandra.kalina@lamoda.ru"
                },
                "employee_full_name": "Александра Калина"
            },
            "responsible_roles": [
                "st_all_requests"
            ],
            "id": "b09ac34b-0014-43a8-9921-ff410e72768b",
            "current_position": "Специалист",
            "last_user": {
                "role": [
                    "jo_recruiter",
                    "jo_agreement",
                    "admin"
                ],
                "who_delegated_ids": [],
                "division": "Группа бизнес-анализа",
                "lastName": "Kalina",
                "firstName": "Aleksandra",
                "id": "aleksandra.kalina@lamoda.ru",
                "whom_delegate_ids": [],
                "position": "Аналитик по развитию корпоративных бизнес-приложений"
            },
            "all_user_ids": [
                {
                    "webuser_id": {
                        "who_delegated_ids": [],
                        "role": [
                            "jo_recruiter",
                            "jo_agreement",
                            "admin"
                        ],
                        "whom_delegate_ids": [],
                        "id": "aleksandra.kalina@lamoda.ru"
                    },
                    "employee_full_name": "Александра Калина",
                    "id": "aleksandra.kalina@lamoda.ru"
                }
            ],
            "date": 1733433617000,
            "status": {
                "id": "approval_new_direct",
                "status": "Согласование с новым руководителем"
            },
            "logs": [
                {
                    "date_display": "06 дек. 2024, 00:22",
                    "text": "Согласование Новый руководитель. Назначен ответственный: aleksandra.kalina@lamoda.ru",
                    "ticket": "b09ac34b-0014-43a8-9921-ff410e72768b",
                    "id": "0e99227a-674a-4e82-b6ec-8e8e5b9b3251",
                    "date": "1733433750000",
                    "user": "aleksandra.kalina@lamoda.ru"
                },
                {
                    "date_display": "06 дек. 2024, 00:20",
                    "text": "Создание заявки: Aleksandra Kalina",
                    "ticket": "b09ac34b-0014-43a8-9921-ff410e72768b",
                    "id": "22b2b580-39e3-46ac-b780-40e801346ed6",
                    "date": "1733433617000",
                    "user": "aleksandra.kalina@lamoda.ru"
                }
            ],
            "new_hrbp": {
                "email": "aleksandra.kalina@lamoda.ru",
                "division_name": "Группа бизнес-анализа",
                "id": "aleksandra.kalina@lamoda.ru",
                "position": "Аналитик по развитию корпоративных бизнес-приложений",
                "webuser_id": {
                    "who_delegated_ids": [],
                    "role": [
                        "jo_recruiter",
                        "jo_agreement",
                        "admin"
                    ],
                    "whom_delegate_ids": [],
                    "id": "aleksandra.kalina@lamoda.ru"
                },
                "employee_full_name": "Александра Калина"
            }
        }
    ],
    "totalPages": 1,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [
        [
            "id",
            99340946
        ],
        [
            "new_hrbp.id",
            99325487
        ],
        [
            "new_hrbp.employee_full_name",
            99325487
        ],
        [
            "new_hrbp.email",
            99325487
        ],
        [
            "new_hrbp.webuser_id.id",
            99325452
        ],
        [
            "new_hrbp.webuser_id.whom_delegate_ids.id",
            99325452
        ],
        [
            "new_hrbp.webuser_id.whom_delegate_ids.firstName",
            99325452
        ],
        [
            "new_hrbp.webuser_id.whom_delegate_ids.lastName",
            99325452
        ],
        [
            "new_hrbp.webuser_id.who_delegated_ids.id",
            99325452
        ],
        [
            "new_hrbp.webuser_id.who_delegated_ids.firstName",
            99325452
        ],
        [
            "new_hrbp.webuser_id.who_delegated_ids.lastName",
            99325452
        ],
        [
            "new_hrbp.webuser_id.email",
            99325452
        ],
        [
            "new_hrbp.webuser_id.role",
            99325452
        ],
        [
            "new_hrbp.division_name",
            99325487
        ],
        [
            "new_hrbp.position",
            99325487
        ],
        [
            "current_up_direct.id",
            99325487
        ],
        [
            "current_up_direct.employee_full_name",
            99325487
        ],
        [
            "current_up_direct.email",
            99325487
        ],
        [
            "current_up_direct.webuser_id.id",
            99325452
        ],
        [
            "current_up_direct.webuser_id.whom_delegate_ids.id",
            99325452
        ],
        [
            "current_up_direct.webuser_id.whom_delegate_ids.firstName",
            99325452
        ],
        [
            "current_up_direct.webuser_id.whom_delegate_ids.lastName",
            99325452
        ],
        [
            "current_up_direct.webuser_id.who_delegated_ids.id",
            99325452
        ],
        [
            "current_up_direct.webuser_id.who_delegated_ids.firstName",
            99325452
        ],
        [
            "current_up_direct.webuser_id.who_delegated_ids.lastName",
            99325452
        ],
        [
            "current_up_direct.webuser_id.email",
            99325452
        ],
        [
            "current_up_direct.webuser_id.role",
            99325452
        ],
        [
            "current_up_direct.division_name",
            99325487
        ],
        [
            "current_up_direct.position",
            99325487
        ],
        [
            "new_division.id",
            99325488
        ],
        [
            "new_division.division_name",
            99325488
        ],
        [
            "new_position.id",
            99325487
        ],
        [
            "new_position.employee_full_name",
            99325487
        ],
        [
            "new_position.webuser_id.id",
            99325452
        ],
        [
            "current_division.id",
            99325488
        ],
        [
            "current_division.division_name",
            99325488
        ],
        [
            "planned_date",
            99340946
        ],
        [
            "current_direct_name.webuser_id.id",
            99325452
        ],
        [
            "current_direct_name.webuser_id.whom_delegate_ids.id",
            99325452
        ],
        [
            "current_direct_name.webuser_id.whom_delegate_ids.firstName",
            99325452
        ],
        [
            "current_direct_name.webuser_id.whom_delegate_ids.lastName",
            99325452
        ],
        [
            "current_direct_name.webuser_id.who_delegated_ids.id",
            99325452
        ],
        [
            "current_direct_name.webuser_id.who_delegated_ids.firstName",
            99325452
        ],
        [
            "current_direct_name.webuser_id.who_delegated_ids.lastName",
            99325452
        ],
        [
            "current_direct_name.webuser_id.role",
            99325452
        ],
        [
            "current_direct_name.webuser_id.email",
            99325452
        ],
        [
            "current_direct_name.id",
            99325487
        ],
        [
            "current_direct_name.employee_full_name",
            99325487
        ],
        [
            "current_direct_name.email",
            99325487
        ],
        [
            "current_direct_name.position",
            99325487
        ],
        [
            "current_direct_name.division_name",
            99325487
        ],
        [
            "employee_name.id",
            99325487
        ],
        [
            "employee_name.employee_full_name",
            99325487
        ],
        [
            "employee_name.webuser_id.id",
            99325452
        ],
        [
            "employee_name.position",
            99325487
        ],
        [
            "employee_name.division_name",
            99325487
        ],
        [
            "last_change_date",
            99340946
        ],
        [
            "all_user_ids.id",
            99325487
        ],
        [
            "all_user_ids.employee_full_name",
            99325487
        ],
        [
            "all_user_ids.webuser_id.id",
            99325452
        ],
        [
            "all_user_ids.webuser_id.whom_delegate_ids.id",
            99325452
        ],
        [
            "all_user_ids.webuser_id.whom_delegate_ids.firstName",
            99325452
        ],
        [
            "all_user_ids.webuser_id.whom_delegate_ids.lastName",
            99325452
        ],
        [
            "all_user_ids.webuser_id.who_delegated_ids.id",
            99325452
        ],
        [
            "all_user_ids.webuser_id.who_delegated_ids.firstName",
            99325452
        ],
        [
            "all_user_ids.webuser_id.who_delegated_ids.lastName",
            99325452
        ],
        [
            "all_user_ids.webuser_id.role",
            99325452
        ],
        [
            "all_user_ids.webuser_id.email",
            99325452
        ],
        [
            "responsible_roles.id",
            99325477
        ],
        [
            "responsible_employee_id.id",
            99325487
        ],
        [
            "responsible_employee_id.employee_full_name",
            99325487
        ],
        [
            "responsible_employee_id.webuser_id.id",
            99325452
        ],
        [
            "responsible_employee_id.webuser_id.whom_delegate_ids.id",
            99325452
        ],
        [
            "responsible_employee_id.webuser_id.whom_delegate_ids.firstName",
            99325452
        ],
        [
            "responsible_employee_id.webuser_id.whom_delegate_ids.lastName",
            99325452
        ],
        [
            "responsible_employee_id.webuser_id.who_delegated_ids.id",
            99325452
        ],
        [
            "responsible_employee_id.webuser_id.who_delegated_ids.firstName",
            99325452
        ],
        [
            "responsible_employee_id.webuser_id.who_delegated_ids.lastName",
            99325452
        ],
        [
            "responsible_employee_id.webuser_id.role",
            99325452
        ],
        [
            "responsible_employee_id.webuser_id.email",
            99325452
        ],
        [
            "responsible_employee_id.position",
            99325487
        ],
        [
            "responsible_employee_id.division_name",
            99325487
        ],
        [
            "date_text",
            99340946
        ],
        [
            "date",
            99340946
        ],
        [
            "number",
            99340946
        ],
        [
            "logs.id",
            99342344
        ],
        [
            "logs.date_display",
            99342344
        ],
        [
            "logs.ticket.id",
            99340946
        ],
        [
            "logs.user.id",
            99325452
        ],
        [
            "logs.text",
            99342344
        ],
        [
            "logs.date",
            99342344
        ],
        [
            "user_creator.id",
            99325487
        ],
        [
            "user_creator.employee_full_name",
            99325487
        ],
        [
            "user_creator.email",
            99325487
        ],
        [
            "user_creator.webuser_id.id",
            99325452
        ],
        [
            "user_creator.webuser_id.whom_delegate_ids.id",
            99325452
        ],
        [
            "user_creator.webuser_id.whom_delegate_ids.firstName",
            99325452
        ],
        [
            "user_creator.webuser_id.whom_delegate_ids.lastName",
            99325452
        ],
        [
            "user_creator.webuser_id.who_delegated_ids.id",
            99325452
        ],
        [
            "user_creator.webuser_id.who_delegated_ids.firstName",
            99325452
        ],
        [
            "user_creator.webuser_id.who_delegated_ids.lastName",
            99325452
        ],
        [
            "user_creator.webuser_id.role",
            99325452
        ],
        [
            "user_creator.webuser_id.email",
            99325452
        ],
        [
            "user_creator.position",
            99325487
        ],
        [
            "user_creator.division_name",
            99325487
        ],
        [
            "last_user.id",
            99325452
        ],
        [
            "last_user.firstName",
            99325452
        ],
        [
            "last_user.lastName",
            99325452
        ],
        [
            "last_user.whom_delegate_ids.id",
            99325452
        ],
        [
            "last_user.whom_delegate_ids.firstName",
            99325452
        ],
        [
            "last_user.whom_delegate_ids.lastName",
            99325452
        ],
        [
            "last_user.position",
            99325452
        ],
        [
            "last_user.division",
            99325452
        ],
        [
            "last_user.who_delegated_ids.id",
            99325452
        ],
        [
            "last_user.who_delegated_ids.firstName",
            99325452
        ],
        [
            "last_user.who_delegated_ids.lastName",
            99325452
        ],
        [
            "last_user.role",
            99325452
        ],
        [
            "last_user.email",
            99325452
        ],
        [
            "prev_status.status",
            99340948
        ],
        [
            "prev_status.id",
            99340948
        ],
        [
            "status.id",
            99340948
        ],
        [
            "status.status",
            99340948
        ],
        [
            "current_total_salary",
            99340946
        ],
        [
            "per_bonus",
            99340946
        ],
        [
            "current_salary_with_rkisn",
            99340946
        ],
        [
            "rkisn",
            99340946
        ],
        [
            "current_salary_without_rkisn",
            99340946
        ],
        [
            "period_bonus.id",
            99342651
        ],
        [
            "period_bonus.bonus",
            99342651
        ],
        [
            "analytics_ops.id",
            99325500
        ],
        [
            "analytics_ops.name",
            99325500
        ],
        [
            "position_id",
            99340946
        ],
        [
            "company.id",
            99342650
        ],
        [
            "company.company",
            99342650
        ],
        [
            "contract_end_date",
            99340946
        ],
        [
            "replacement_type.id",
            99342653
        ],
        [
            "replacement_type.type",
            99342653
        ],
        [
            "repl_empl_name.id",
            99325487
        ],
        [
            "repl_empl_name.employee_full_name",
            99325487
        ],
        [
            "repl_empl_name.email",
            99325487
        ],
        [
            "repl_empl_name.webuser_id.id",
            99325452
        ],
        [
            "repl_empl_name.position",
            99325487
        ],
        [
            "repl_empl_name.division_name",
            99325487
        ],
        [
            "replacement",
            99340946
        ],
        [
            "current_hrbp.id",
            99325487
        ],
        [
            "current_hrbp.employee_full_name",
            99325487
        ],
        [
            "current_hrbp.email",
            99325487
        ],
        [
            "current_hrbp.webuser_id.id",
            99325452
        ],
        [
            "current_hrbp.webuser_id.whom_delegate_ids.id",
            99325452
        ],
        [
            "current_hrbp.webuser_id.whom_delegate_ids.firstName",
            99325452
        ],
        [
            "current_hrbp.webuser_id.whom_delegate_ids.lastName",
            99325452
        ],
        [
            "current_hrbp.webuser_id.who_delegated_ids.id",
            99325452
        ],
        [
            "current_hrbp.webuser_id.who_delegated_ids.firstName",
            99325452
        ],
        [
            "current_hrbp.webuser_id.who_delegated_ids.lastName",
            99325452
        ],
        [
            "current_hrbp.webuser_id.email",
            99325452
        ],
        [
            "current_hrbp.webuser_id.role",
            99325452
        ],
        [
            "current_hrbp.division_name",
            99325487
        ],
        [
            "current_hrbp.position",
            99325487
        ],
        [
            "position_rate",
            99340946
        ],
        [
            "new_analytics_ops.id",
            99325500
        ],
        [
            "new_analytics_ops.name",
            99325500
        ],
        [
            "new_position_id",
            99340946
        ],
        [
            "new_company.id",
            99342650
        ],
        [
            "new_company.company",
            99342650
        ],
        [
            "new_total_salary",
            99340946
        ],
        [
            "new_per_bonus",
            99340946
        ],
        [
            "new_salary_with_rkisn",
            99340946
        ],
        [
            "new_rkisn",
            99340946
        ],
        [
            "new_salary_without_rkisn",
            99340946
        ],
        [
            "new_period_bonus.id",
            99342651
        ],
        [
            "new_period_bonus.bonus",
            99342651
        ],
        [
            "new_org_structure",
            99340946
        ],
        [
            "current_org_structure",
            99340946
        ],
        [
            "new_up_direct.id",
            99325487
        ],
        [
            "new_up_direct.employee_full_name",
            99325487
        ],
        [
            "new_up_direct.email",
            99325487
        ],
        [
            "new_up_direct.webuser_id.id",
            99325452
        ],
        [
            "new_up_direct.webuser_id.whom_delegate_ids.id",
            99325452
        ],
        [
            "new_up_direct.webuser_id.whom_delegate_ids.firstName",
            99325452
        ],
        [
            "new_up_direct.webuser_id.whom_delegate_ids.lastName",
            99325452
        ],
        [
            "new_up_direct.webuser_id.who_delegated_ids.id",
            99325452
        ],
        [
            "new_up_direct.webuser_id.who_delegated_ids.firstName",
            99325452
        ],
        [
            "new_up_direct.webuser_id.who_delegated_ids.lastName",
            99325452
        ],
        [
            "new_up_direct.webuser_id.role",
            99325452
        ],
        [
            "new_up_direct.division_name",
            99325487
        ],
        [
            "new_up_direct.position",
            99325487
        ],
        [
            "comment_orgdev",
            99340946
        ],
        [
            "new_cnb.id",
            99325487
        ],
        [
            "new_cnb.employee_full_name",
            99325487
        ],
        [
            "new_cnb.email",
            99325487
        ],
        [
            "new_cnb.webuser_id.id",
            99325452
        ],
        [
            "new_cnb.webuser_id.whom_delegate_ids.id",
            99325452
        ],
        [
            "new_cnb.webuser_id.whom_delegate_ids.firstName",
            99325452
        ],
        [
            "new_cnb.webuser_id.whom_delegate_ids.lastName",
            99325452
        ],
        [
            "new_cnb.webuser_id.who_delegated_ids.id",
            99325452
        ],
        [
            "new_cnb.webuser_id.who_delegated_ids.firstName",
            99325452
        ],
        [
            "new_cnb.webuser_id.who_delegated_ids.lastName",
            99325452
        ],
        [
            "new_cnb.webuser_id.email",
            99325452
        ],
        [
            "new_cnb.webuser_id.role",
            99325452
        ],
        [
            "new_cnb.position",
            99325487
        ],
        [
            "new_cnb.division_name",
            99325487
        ],
        [
            "orgdev",
            99340946
        ],
        [
            "current_cnb.id",
            99325487
        ],
        [
            "current_cnb.employee_full_name",
            99325487
        ],
        [
            "current_cnb.email",
            99325487
        ],
        [
            "current_cnb.webuser_id.id",
            99325452
        ],
        [
            "current_cnb.webuser_id.whom_delegate_ids.id",
            99325452
        ],
        [
            "current_cnb.webuser_id.whom_delegate_ids.firstName",
            99325452
        ],
        [
            "current_cnb.webuser_id.whom_delegate_ids.lastName",
            99325452
        ],
        [
            "current_cnb.webuser_id.who_delegated_ids.id",
            99325452
        ],
        [
            "current_cnb.webuser_id.who_delegated_ids.firstName",
            99325452
        ],
        [
            "current_cnb.webuser_id.who_delegated_ids.lastName",
            99325452
        ],
        [
            "current_cnb.webuser_id.role",
            99325452
        ],
        [
            "current_cnb.division_name",
            99325487
        ],
        [
            "current_cnb.position",
            99325487
        ],
        [
            "hr_admin.id",
            99325487
        ],
        [
            "hr_admin.employee_full_name",
            99325487
        ],
        [
            "hr_admin.email",
            99325487
        ],
        [
            "hr_admin.webuser_id.id",
            99325452
        ],
        [
            "hr_admin.webuser_id.whom_delegate_ids.id",
            99325452
        ],
        [
            "hr_admin.webuser_id.whom_delegate_ids.firstName",
            99325452
        ],
        [
            "hr_admin.webuser_id.whom_delegate_ids.lastName",
            99325452
        ],
        [
            "hr_admin.webuser_id.who_delegated_ids.id",
            99325452
        ],
        [
            "hr_admin.webuser_id.who_delegated_ids.firstName",
            99325452
        ],
        [
            "hr_admin.webuser_id.who_delegated_ids.lastName",
            99325452
        ],
        [
            "hr_admin.webuser_id.role",
            99325452
        ],
        [
            "hr_admin.division_name",
            99325487
        ],
        [
            "hr_admin.position",
            99325487
        ],
        [
            "budget_holder.id",
            99325487
        ],
        [
            "budget_holder.employee_full_name",
            99325487
        ],
        [
            "budget_holder.webuser_id.id",
            99325452
        ],
        [
            "budget_holder.webuser_id.whom_delegate_ids.id",
            99325452
        ],
        [
            "budget_holder.webuser_id.whom_delegate_ids.firstName",
            99325452
        ],
        [
            "budget_holder.webuser_id.whom_delegate_ids.lastName",
            99325452
        ],
        [
            "budget_holder.webuser_id.who_delegated_ids.id",
            99325452
        ],
        [
            "budget_holder.webuser_id.who_delegated_ids.firstName",
            99325452
        ],
        [
            "budget_holder.webuser_id.who_delegated_ids.lastName",
            99325452
        ],
        [
            "budget_holder.webuser_id.email",
            99325452
        ],
        [
            "budget_holder.webuser_id.role",
            99325452
        ],
        [
            "budget_holder.position",
            99325487
        ],
        [
            "budget_holder.division_name",
            99325487
        ],
        [
            "budget_holder.email",
            99325487
        ],
        [
            "new_cost_center",
            99340946
        ],
        [
            "current_cost_center",
            99340946
        ],
        [
            "budget_date",
            99340946
        ],
        [
            "add_approval_in.id",
            99344956
        ],
        [
            "add_approval_in.position",
            99344956
        ],
        [
            "add_approval_in.email.id",
            99325452
        ],
        [
            "add_approval_in.division.id",
            99325488
        ],
        [
            "add_approval_out.id",
            99344956
        ],
        [
            "add_approval_out.division.id",
            99325488
        ],
        [
            "add_approval_out.email.id",
            99325452
        ],
        [
            "add_approval_out.position",
            99344956
        ],
        [
            "replacement_reason.id",
            99344980
        ],
        [
            "replacement_reason.reason",
            99344980
        ],
        [
            "actual_date",
            99340946
        ],
        [
            "total_increase_per",
            99340946
        ],
        [
            "role_budget_holder",
            99340946
        ],
        [
            "new_vacancy_id",
            99340946
        ],
        [
            "comment_new_salary",
            99340946
        ],
        [
            "comment_current_salary",
            99340946
        ],
        [
            "new_employment_type.id",
            99352484
        ],
        [
            "cancel_reason_refused",
            99340946
        ],
        [
            "cancel_reason_bfr_prsnt",
            99340946
        ],
        [
            "cancel_reason",
            99340946
        ],
        [
            "new_direct.id",
            99325487
        ],
        [
            "hr_bp_creator",
            99340946
        ]
    ],
    "writeFields": [
        "id",
        "new_hrbp",
        "current_up_direct",
        "new_division",
        "new_position",
        "current_division",
        "current_position",
        "planned_date",
        "current_direct_name",
        "employee_name",
        "number",
        "date",
        "date_text",
        "last_change_date",
        "logs",
        "prev_status",
        "current_cnb",
        "current_total_salary",
        "per_bonus",
        "current_salary_with_rkisn",
        "rkisn",
        "current_salary_without_rkisn",
        "period_bonus",
        "analytics_ops",
        "position_id",
        "company",
        "contract_end_date",
        "replacement_type",
        "repl_empl_name",
        "current_hrbp",
        "position_rate",
        "new_analytics_ops",
        "new_position_id",
        "new_company",
        "new_per_bonus",
        "new_total_salary",
        "new_salary_with_rkisn",
        "new_rkisn",
        "new_salary_without_rkisn",
        "new_period_bonus",
        "new_org_structure",
        "current_org_structure",
        "new_up_direct",
        "new_cnb",
        "comment_orgdev",
        "orgdev",
        "hr_admin",
        "budget_holder",
        "new_cost_center",
        "current_cost_center",
        "budget_date",
        "add_approval_in",
        "add_approval_out",
        "replacement_reason",
        "replacement",
        "actual_date",
        "total_increase_per",
        "role_budget_holder",
        "new_vacancy_id",
        "comment_new_salary",
        "comment_current_salary",
        "new_employment_type",
        "cancel_reason_refused",
        "cancel_reason_bfr_prsnt",
        "cancel_reason",
        "new_direct",
        "hr_bp_creator",
        "user_creator"
    ],
    "structures": {
        "99325452": {
            "id": 99325452,
            "dateCreated": "2024-07-04T06:41:34Z",
            "hidden": false,
            "dateHidden": null,
            "networkID": 21335,
            "name": "App users",
            "sysName": "WebUser",
            "jsonObject": "[{\"sysName\":\"roles_ad\",\"name\":\"\",\"dataType\":\"arrayLink\",\"id\":\"31521720185270928\",\"link\":\"roles_ad\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"dateLastActivity\",\"name\":\"dateLastActivity\",\"dataType\":\"string\",\"id\":\"10\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"dateCreated\",\"name\":\"dateCreated\",\"dataType\":\"string\",\"id\":\"13\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"isAuthorization\",\"name\":\"isAuthorization\",\"dataType\":\"boolean\",\"id\":\"9\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"notifications_counter\",\"name\":\"Notifications Counter\",\"dataType\":\"string\",\"id\":\"1\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"custom_labels\",\"name\":\"Custom labels\",\"dataType\":\"json\",\"id\":\"2\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"phone\",\"name\":\"Phone\",\"dataType\":\"string\",\"id\":\"12\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"email\",\"name\":\"Email\",\"dataType\":\"string\",\"id\":\"11\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"userpic\",\"name\":\"User pic\",\"dataType\":\"file\",\"id\":\"3\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":{},\"groupName\":\"Contacts\",\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"id\",\"name\":\"Username (login)\",\"dataType\":\"id\",\"id\":\"15\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"role\",\"name\":\"Roles\",\"dataType\":\"array\",\"id\":\"8\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":true},{\"sysName\":\"password\",\"name\":\"Password (hash)\",\"dataType\":\"string\",\"id\":\"14\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"firstName\",\"name\":\"First name\",\"dataType\":\"string\",\"id\":\"7\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"lastName\",\"name\":\"Last name\",\"dataType\":\"string\",\"id\":\"6\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"gender\",\"name\":\"Gender\",\"dataType\":\"string\",\"id\":\"5\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"isBlocked\",\"name\":\"Block user\",\"dataType\":\"boolean\",\"id\":\"4\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"systemMessage\",\"name\":\"System message\",\"dataType\":\"string\",\"id\":\"56921641637265680\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"employee\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"65621717669435431\",\"link\":\"employees\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"position\",\"name\":\"Position\",\"dataType\":\"string\",\"id\":\"21611718980485707\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"division\",\"name\":\"Division\",\"dataType\":\"string\",\"id\":\"13761718980504077\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"isActive\",\"name\":\"isActive\",\"dataType\":\"boolean\",\"id\":\"28091718982360994\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"who_delegated_ids\",\"name\":\"Кто делегировал права?\",\"dataType\":\"arrayLink\",\"id\":\"18431723207371481\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"whom_delegate_ids\",\"name\":\"Кому делегировал права?\",\"dataType\":\"arrayLink\",\"id\":\"29491723207412497\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"all_bosses_ids\",\"name\":\"Все руководители вверх по иерархии\",\"dataType\":\"arrayLink\",\"id\":\"45451730474812010\",\"link\":\"employees\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"secret\",\"name\":\"secret\",\"dataType\":\"string\",\"id\":\"81131636839496227\",\"link\":\"\",\"group\":\"1636839487957\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"notif_Email\",\"name\":\"Notify me by Email\",\"dataType\":\"boolean\",\"id\":\"61231639915065277\",\"link\":\"\",\"group\":\"1639915049523\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Yes\",\"No\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"employees_first_day\",\"name\":\"Сотрудники 1 день\",\"dataType\":\"arrayLink\",\"id\":\"77871732470209469\",\"link\":\"onboarding\",\"group\":\"1639915049523\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false,\"array\":false}]",
            "jsonGroupSettings": "[{\"name\":\"Contacts\",\"id\":-502807437,\"order\":0},{\"name\":\"Notifications\",\"id\":1639915049523,\"order\":1},{\"name\":\"Password restoring\",\"id\":1636839487957,\"order\":2},{\"name\":\"System fields (LEGACY)\",\"id\":-1776115286,\"order\":3}]",
            "jsonViewIdSettings": "[{\"sysName\":\"firstName\"},{\"sysName\":\"lastName\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-11-24T17:43:39Z",
            "createBy": 0,
            "changedBy": 1,
            "_settings": null,
            "_nativeIndexSettings": null,
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            "objectIDSysName": "id",
            "folderId": null
        },
        "99325477": {
            "id": 99325477,
            "dateCreated": "2024-05-20T16:01:07Z",
            "hidden": false,
            "dateHidden": null,
            "networkID": 21335,
            "name": "Roles",
            "sysName": "roles",
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"array\":false},{\"sysName\":\"ad_group\",\"dataType\":\"link\",\"name\":\"Ad group\",\"id\":\"37371716221203585\",\"link\":\"roles_ad\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":true,\"array\":false},{\"sysName\":\"role_name\",\"dataType\":\"string\",\"name\":\"Role name\",\"id\":\"62051716220877472\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"array\":false},{\"sysName\":\"visual_name\",\"dataType\":\"string\",\"name\":\"Роль\",\"id\":\"75311724655382921\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"array\":false},{\"sysName\":\"roles_group\",\"dataType\":\"string\",\"name\":\"Группа ролей\",\"id\":\"86651726602951238\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"array\":false}]",
            "jsonGroupSettings": "[]",
            "jsonViewIdSettings": "[{\"sysName\":\"visual_name\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":false,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-09-17T19:56:34Z",
            "createBy": 23015,
            "changedBy": 23015,
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
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            "objectIDSysName": "id",
            "folderId": 33811341
        },
        "99325487": {
            "id": 99325487,
            "dateCreated": "2024-05-14T07:46:19Z",
            "hidden": false,
            "dateHidden": null,
            "networkID": 21335,
            "name": "Employees",
            "sysName": "employees",
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"position_name_eng\",\"dataType\":\"string\",\"name\":\"Position name eng\",\"id\":\"14771717094032672\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"direct_last_name\",\"dataType\":\"string\",\"name\":\"Direct Last name\",\"id\":\"20511715675238230\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"webuser_id\",\"dataType\":\"link\",\"name\":\"\",\"id\":\"21401717671535287\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[\"role\"],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":true,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"email\",\"dataType\":\"string\",\"name\":\"Email\",\"id\":\"26531716224439241\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"position\",\"dataType\":\"string\",\"name\":\"Position\",\"id\":\"28531715675330046\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"direct_first_name\",\"dataType\":\"string\",\"name\":\"Direct First name\",\"id\":\"29311715675220848\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"division_name\",\"dataType\":\"string\",\"name\":\"Division name\",\"id\":\"31271717093221879\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"direct_email\",\"dataType\":\"link\",\"name\":\"Direct email\",\"id\":\"36721717097550149\",\"link\":\"employees\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"direct_full_name\",\"dataType\":\"string\",\"name\":\"Direct Full name\",\"id\":\"40141715777939624\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"division_id\",\"dataType\":\"link\",\"name\":\"Division id\",\"id\":\"46921715675477884\",\"link\":\"structure\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"employee_last_name\",\"dataType\":\"string\",\"name\":\"Employee Last name\",\"id\":\"60151715675210149\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"employee_full_name\",\"dataType\":\"string\",\"name\":\"Employee Full name\",\"id\":\"68071715777917101\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"employee_first_name\",\"dataType\":\"string\",\"name\":\"Employee First name\",\"id\":\"68431715675181675\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"position_id\",\"dataType\":\"string\",\"name\":\"Position ID\",\"id\":\"80581717093206114\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false}]",
            "jsonGroupSettings": "[]",
            "jsonViewIdSettings": "[{\"sysName\":\"employee_full_name\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-11-01T15:29:51Z",
            "createBy": 23015,
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
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            "objectIDSysName": "id",
            "folderId": 33820256
        },
        "99325488": {
            "id": 99325488,
            "dateCreated": "2024-05-14T07:49:49Z",
            "hidden": false,
            "dateHidden": null,
            "networkID": 21335,
            "name": "Structure",
            "sysName": "structure",
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"division_id\",\"name\":\"Division id\",\"dataType\":\"number\",\"id\":\"58271715673541979\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"division_name\",\"name\":\"Division name\",\"dataType\":\"string\",\"id\":\"63201715673599255\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"full_hierarchy\",\"name\":\"Full hierarchy\",\"dataType\":\"string\",\"id\":\"24721715777762327\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"division_num\",\"name\":\"Division num\",\"dataType\":\"string\",\"id\":\"62831721209206145\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false}]",
            "jsonGroupSettings": "[]",
            "jsonViewIdSettings": "[{\"sysName\":\"division_name\"},{\"sysName\":\"full_hierarchy\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-09-11T11:30:20Z",
            "createBy": 23015,
            "changedBy": 23015,
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
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            "objectIDSysName": "id",
            "folderId": 33820256
        },
        "99325500": {
            "id": 99325500,
            "dateCreated": "2024-05-30T20:59:17Z",
            "hidden": false,
            "dateHidden": null,
            "networkID": 21335,
            "name": "Analytics for OPS",
            "sysName": "analytics_for_ops",
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"name\",\"dataType\":\"string\",\"name\":\"name\",\"id\":\"88871717102762537\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false}]",
            "jsonGroupSettings": "[]",
            "jsonViewIdSettings": "[]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-05-30T20:59:33Z",
            "createBy": 23015,
            "changedBy": 23015,
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
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            "objectIDSysName": "id",
            "folderId": 33811358
        },
        "99340946": {
            "id": 99340946,
            "dateCreated": "2024-09-04T06:24:48Z",
            "hidden": false,
            "dateHidden": null,
            "networkID": 21335,
            "name": "staff_transfer",
            "sysName": "staff_transfer",
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"cancel_reason_refused\",\"dataType\":\"string\",\"name\":\"Причина\",\"id\":\"10131730487702232\",\"link\":\"\",\"group\":\"1730487656046\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"current_org_structure\",\"dataType\":\"string\",\"name\":\"Текущая организационная структура\",\"id\":\"10551726596275813\",\"link\":\"\",\"group\":\"1725431445711\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"comment_current_salary\",\"dataType\":\"string\",\"name\":\"Комментарий к структуре текущего дохода\",\"id\":\"11561727459549308\",\"link\":null,\"group\":\"1726051810227\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"new_company\",\"dataType\":\"link\",\"name\":\"Новая организация\",\"id\":\"15551726142220035\",\"link\":\"st_company\",\"group\":\"1725431600480\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"current_position\",\"dataType\":\"string\",\"name\":\"Текущая должность сотрудника\",\"id\":\"18221725431460573\",\"link\":\"\",\"group\":\"1725431445711\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"cancel_reason_bfr_prsnt\",\"dataType\":\"string\",\"name\":\"Причина\",\"id\":\"22341730487701249\",\"link\":\"\",\"group\":\"1730487656046\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"current_direct_name\",\"dataType\":\"link\",\"name\":\"ФИО текущего руководителя \",\"id\":\"22651725431263787\",\"link\":\"employees\",\"group\":\"1725431234450\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"new_org_structure\",\"dataType\":\"string\",\"name\":\"Новая организационная структура\",\"id\":\"22651726596356199\",\"link\":\"\",\"group\":\"1725431600480\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"user_creator\",\"dataType\":\"link\",\"name\":\"Инициатор заявки\",\"id\":\"24901725433580444\",\"link\":\"employees\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"company\",\"dataType\":\"link\",\"name\":\"Текущая организация\",\"id\":\"27451726045070790\",\"link\":\"st_company\",\"group\":\"1725431445711\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"current_cost_center\",\"dataType\":\"string\",\"name\":\"Текущий кост-центр (Optimacros)\",\"id\":\"28041726656199647\",\"link\":\"\",\"group\":\"1726051810227\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"all_user_ids\",\"dataType\":\"arrayLink\",\"name\":\"Все пользователи, относящиеся к заявке\",\"id\":\"29371725433750833\",\"link\":\"employees\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"number\",\"dataType\":\"string\",\"name\":\"Номер заявки\",\"id\":\"29661725433629762\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"logs\",\"dataType\":\"arrayLink\",\"name\":\"История изменений\",\"id\":\"30101725433610853\",\"link\":\"st_logs\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"planned_date\",\"dataType\":\"date\",\"name\":\"Планируемая дата перевода\",\"id\":\"30281725431329024\",\"link\":\"\",\"group\":\"1725431234450\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.YYYY\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"budget_holder\",\"dataType\":\"link\",\"name\":\"Владелец бюджета (или лицо его заменяющее)\",\"id\":\"30591726656292225\",\"link\":\"employees\",\"group\":\"1725431710596\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"new_position_id\",\"dataType\":\"string\",\"name\":\"Новый код позиции (из УШР) \",\"id\":\"33951726142259108\",\"link\":null,\"group\":\"1725431600480\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"analytics_ops\",\"dataType\":\"link\",\"name\":\"Текущая категория персонала (Analytics for Ops)\",\"id\":\"36071726045140500\",\"link\":\"analytics_for_ops\",\"group\":\"1725431445711\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"add_approval_in\",\"dataType\":\"link\",\"name\":\"Новый HR директор направления\",\"id\":\"38281727073206486\",\"link\":\"add_approval\",\"group\":\"1725431710596\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"new_total_salary\",\"dataType\":\"decimal\",\"name\":\"Новый совокупный доход, gross руб/мес\",\"id\":\"38891726145546263\",\"link\":\"\",\"group\":\"1726145208794\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"new_rkisn\",\"dataType\":\"decimal\",\"name\":\"Новый РКиСН\",\"id\":\"40591726145349693\",\"link\":\"\",\"group\":\"1726145208794\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"replacement_type\",\"dataType\":\"link\",\"name\":\"Тип перевода\",\"id\":\"42371726044856787\",\"link\":\"st_contract_type\",\"group\":\"1725431234450\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"current_salary_without_rkisn\",\"dataType\":\"decimal\",\"name\":\"Текущий оклад без РКиСН, gross руб/мес\",\"id\":\"42431726051884641\",\"link\":\"\",\"group\":\"1726051810227\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"current_up_direct\",\"dataType\":\"link\",\"name\":\"Текущий верхнеуровневый руководитель (руководитель нанимающего менеджера) для Non-TECH / Директор департамента для TECH\",\"id\":\"43321725431723921\",\"link\":\"employees\",\"group\":\"1725431710596\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"replacement\",\"dataType\":\"boolean\",\"name\":\"Замена сотрудника\",\"id\":\"44491726044721571\",\"link\":\"\",\"group\":\"1725431234450\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Да\",\"Нет\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"position_id\",\"dataType\":\"string\",\"name\":\"Текущий код позиции (из УШР)\",\"id\":\"45681726045097116\",\"link\":null,\"group\":\"1725431445711\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"new_position\",\"dataType\":\"link\",\"name\":\"Новая должность сотрудника\",\"id\":\"46231725431618308\",\"link\":\"employees\",\"group\":\"1725431600480\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"new_employment_type\",\"dataType\":\"link\",\"name\":\"Новый формат работы сотрудника\",\"id\":\"46561730316605258\",\"link\":\"st_employment_type\",\"group\":\"1725431600480\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"new_division\",\"dataType\":\"link\",\"name\":\"Новое подразделение сотрудника\",\"id\":\"47731725431619206\",\"link\":\"structure\",\"group\":\"1725431600480\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"new_cost_center\",\"dataType\":\"string\",\"name\":\"Новый кост-центр (Optimacros)\",\"id\":\"48901726656261119\",\"link\":\"\",\"group\":\"1726145208794\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"period_bonus\",\"dataType\":\"link\",\"name\":\"Текущая периодичность выплаты премии\",\"id\":\"48991726051831109\",\"link\":\"st_bonus\",\"group\":\"1726051810227\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"new_period_bonus\",\"dataType\":\"link\",\"name\":\"Новая периодичность выплаты премии\",\"id\":\"49131726145232067\",\"link\":\"st_bonus\",\"group\":\"1726145208794\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"budget_date\",\"dataType\":\"date\",\"name\":\"Бюджетная дата преревода\",\"id\":\"49131726656143374\",\"link\":\"\",\"group\":\"1725431234450\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.YYYY\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"new_up_direct\",\"dataType\":\"link\",\"name\":\"Верхнеуровневый руководитель (руководитель нанимающего менеджера) для Non-TECH / Директор департамента для TECH\",\"id\":\"49461726638728534\",\"link\":\"employees\",\"group\":\"1725431710596\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"status\",\"dataType\":\"link\",\"name\":\"Статус\",\"id\":\"53231725433518277\",\"link\":\"st_statuses\",\"group\":\"0\",\"tags\":\"\",\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[\"id\"],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":true,\"array\":false},{\"sysName\":\"orgdev\",\"dataType\":\"boolean\",\"name\":\"Добавить Оргдев\",\"id\":\"54541726653864757\",\"link\":\"\",\"group\":\"1726145208794\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Да\",\"Нет\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"responsible_roles\",\"dataType\":\"arrayLink\",\"name\":\"Ответственные роли\",\"id\":\"55271725433718683\",\"link\":\"roles\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"current_cnb\",\"dataType\":\"link\",\"name\":\"Текущий C&B\",\"id\":\"58661726052187313\",\"link\":\"employees\",\"group\":\"1725431710596\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"cancel_reason\",\"dataType\":\"string\",\"name\":\"Укажите причину\",\"id\":\"59261733436687927\",\"link\":\"\",\"group\":\"1730487656046\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"replacement_reason\",\"dataType\":\"link\",\"name\":\"Причина замены\",\"id\":\"61451727074752275\",\"link\":\"st_reason_replacement\",\"group\":\"1725431234450\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"comment_new_salary\",\"dataType\":\"string\",\"name\":\"Комментарий к структуре нового дохода\",\"id\":\"63431727459599943\",\"link\":null,\"group\":\"1726145208794\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"actual_date\",\"dataType\":\"date\",\"name\":\"Фактическая дата перевода\",\"id\":\"64531727078660236\",\"link\":\"\",\"group\":\"1725431600480\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.YYYY\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"repl_empl_name\",\"dataType\":\"link\",\"name\":\"ФИО заменяемого сотрудника\",\"id\":\"65551726044774422\",\"link\":\"employees\",\"group\":\"1725431234450\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"current_hrbp\",\"dataType\":\"link\",\"name\":\"Текущий HR BP\",\"id\":\"68841726044632237\",\"link\":\"employees\",\"group\":\"1725431710596\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"total_increase_per\",\"dataType\":\"decimal\",\"name\":\"Процент прироста совокупного дохода(%)\",\"id\":\"69461727080268194\",\"link\":\"\",\"group\":\"1726145208794\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"new_hrbp\",\"dataType\":\"link\",\"name\":\"Новый HR BP\",\"id\":\"69701725431725005\",\"link\":\"employees\",\"group\":\"1725431710596\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"new_per_bonus\",\"dataType\":\"number\",\"name\":\"Новый процент премии\",\"id\":\"71771726145483919\",\"link\":\"\",\"group\":\"1726145208794\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"comment_orgdev\",\"dataType\":\"string\",\"name\":\"Примечание для Оргдев\",\"id\":\"71921726653914186\",\"link\":\"\",\"group\":\"1726145208794\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"position_rate\",\"dataType\":\"string\",\"name\":\"Коэффициент занятости на новой позиции\",\"id\":\"72981726142316557\",\"link\":\"\",\"group\":\"1725431600480\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"imask\":\"{\\n    mask: Number,\\n    scale: 2,\\n    thousandsSeparator: '',\\n    padFractionalZeros: false,\\n    normalizeZeros: true,\\n    radix: ',',\\n    mapToRadix: ['.']\\n  }\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"last_change_date\",\"dataType\":\"date\",\"name\":\"Дата последнего изменения\",\"id\":\"73651725433775126\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.YYYY\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"employee_name\",\"dataType\":\"link\",\"name\":\"ФИО сотрудника\",\"id\":\"74491725431250990\",\"link\":\"employees\",\"group\":\"1725431234450\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"current_total_salary\",\"dataType\":\"decimal\",\"name\":\"Текущий совокупный доход, gross руб/мес\",\"id\":\"74621726052058609\",\"link\":\"\",\"group\":\"1726051810227\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"add_approval_out\",\"dataType\":\"link\",\"name\":\"Текущий HR директор направления\",\"id\":\"74711727073168576\",\"link\":\"add_approval\",\"group\":\"1725431710596\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"new_direct\",\"dataType\":\"link\",\"name\":\"Новый руководитель\",\"id\":\"75461733428579077\",\"link\":\"employees\",\"group\":\"1725431710596\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"current_division\",\"dataType\":\"link\",\"name\":\"Текущее подразделение сотрудника\",\"id\":\"75661725431461525\",\"link\":\"structure\",\"group\":\"1725431445711\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"new_cnb\",\"dataType\":\"link\",\"name\":\"Принимающий С&B\",\"id\":\"75681726654003783\",\"link\":\"employees\",\"group\":\"1725431710596\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"responsible_employee_id\",\"dataType\":\"link\",\"name\":\"Ответственный за текущий этап\",\"id\":\"77841725433699314\",\"link\":\"employees\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"hr_admin\",\"dataType\":\"link\",\"name\":\"HR Admin\",\"id\":\"80691726655523102\",\"link\":\"employees\",\"group\":\"1725431710596\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"date_text\",\"dataType\":\"string\",\"name\":\"Дата\",\"id\":\"82361725433675003\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"hr_bp_creator\",\"dataType\":\"json\",\"name\":\"Заявка создана HR BP, вместо руководителя\",\"id\":\"84751733428448544\",\"link\":\"\",\"group\":\"1725431710596\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"checkboxes\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"multipleChoice\":[{\"value\":\"hrbp\",\"label\":null}]},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"last_user\",\"dataType\":\"link\",\"name\":\"Кем изменено\",\"id\":\"85461725433561607\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"rkisn\",\"dataType\":\"decimal\",\"name\":\"РКиСН\",\"id\":\"85731726051943563\",\"link\":\"\",\"group\":\"1726051810227\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"role_budget_holder\",\"dataType\":\"boolean\",\"name\":\"Добавить Владельца бюджета в качестве:\",\"id\":\"86541727248705190\",\"link\":\"\",\"group\":\"1725431710596\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Cогласующего лица\",\"Получателя уведомления\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"new_salary_without_rkisn\",\"dataType\":\"decimal\",\"name\":\"Новый оклад без РКиСН, gross руб/мес\",\"id\":\"87511726145291105\",\"link\":\"\",\"group\":\"1726145208794\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"prev_status\",\"dataType\":\"link\",\"name\":\"Предыдущий статус\",\"id\":\"94001725433553894\",\"link\":\"st_statuses\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"contract_end_date\",\"dataType\":\"date\",\"name\":\"Дата окончания договора\",\"id\":\"94091726044922925\",\"link\":\"\",\"group\":\"1725431234450\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.YYYY\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"new_analytics_ops\",\"dataType\":\"link\",\"name\":\"Новая категория персонала (Analytics for Ops)\",\"id\":\"94121726142293084\",\"link\":\"analytics_for_ops\",\"group\":\"1725431600480\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"new_vacancy_id\",\"dataType\":\"string\",\"name\":\"ID вакансии (из Optimacros)\",\"id\":\"95861727459733761\",\"link\":null,\"group\":\"1725431600480\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"date\",\"dataType\":\"date\",\"name\":\"Дата создания заявки\",\"id\":\"96891725433646615\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.YYYY\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"per_bonus\",\"dataType\":\"number\",\"name\":\"Текущий процент премии\",\"id\":\"97081726052045965\",\"link\":\"\",\"group\":\"1726051810227\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"current_salary_with_rkisn\",\"dataType\":\"decimal\",\"name\":\"Текущий оклад, включая РКиСН и другие надбавки, gross руб/мес\",\"id\":\"98801726051969675\",\"link\":\"\",\"group\":\"1726051810227\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"new_salary_with_rkisn\",\"dataType\":\"decimal\",\"name\":\"Новый оклад, включая РКиСН и другие надбавки, gross руб/мес\",\"id\":\"99131726145453730\",\"link\":\"\",\"group\":\"1726145208794\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false}]",
            "jsonGroupSettings": "[{\"id\":1725431600480,\"name\":\"Новые данные по сотруднику\",\"order\":3},{\"id\":1725431710596,\"name\":\"Согласующие лица\",\"order\":6},{\"id\":1726145208794,\"name\":\"Новые условия компенсации\",\"order\":5},{\"id\":1725431445711,\"name\":\"Текущие данные по сотруднику\",\"order\":2},{\"id\":1725431234450,\"name\":\"Общие данные о переводе\",\"order\":1},{\"id\":1726051810227,\"name\":\"Текущие условия компенсации\",\"order\":4},{\"id\":1730487656046,\"name\":\"Отмена заявок\",\"order\":0}]",
            "jsonViewIdSettings": null,
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-12-05T22:11:57Z",
            "createBy": 23015,
            "changedBy": 23015,
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
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            "objectIDSysName": "id",
            "folderId": 33819483
        },
        "99340948": {
            "id": 99340948,
            "dateCreated": "2024-09-04T07:14:59Z",
            "hidden": false,
            "dateHidden": null,
            "networkID": 21335,
            "name": "st_statuses",
            "sysName": "st_statuses",
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"status\",\"dataType\":\"string\",\"name\":\"Cтатус\",\"id\":\"30001725434156506\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"prev_status\",\"dataType\":\"arrayLink\",\"name\":\"Предыдущий статус\",\"id\":\"60381725434163644\",\"link\":\"st_statuses\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"next_status\",\"dataType\":\"arrayLink\",\"name\":\"Допустимый следующий статус\",\"id\":\"61171729748713411\",\"link\":\"st_statuses\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"json\":false,\"array\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"status\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": false,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-11-26T21:45:00Z",
            "createBy": 23015,
            "changedBy": 23015,
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
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            "objectIDSysName": "id",
            "folderId": 33819484
        },
        "99342344": {
            "id": 99342344,
            "dateCreated": "2024-09-11T06:48:58Z",
            "hidden": false,
            "dateHidden": null,
            "networkID": 21335,
            "name": "st_logs",
            "sysName": "st_logs",
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"date\",\"dataType\":\"date\",\"name\":\"Дата изменения\",\"id\":\"58751717136726535\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"text\",\"dataType\":\"string\",\"name\":\"Изменение заявки\",\"id\":\"13041717136793732\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"user\",\"dataType\":\"link\",\"name\":\"Кто внес изменения\",\"id\":\"83101717136837464\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"ticket\",\"dataType\":\"link\",\"name\":\"Номер заявки\",\"id\":\"45681717136838095\",\"link\":\"staff_transfer\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"date_display\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"87491717137718793\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false}]",
            "jsonGroupSettings": "[]",
            "jsonViewIdSettings": null,
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":false,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-09-12T10:57:40Z",
            "createBy": 23015,
            "changedBy": 23015,
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
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            "objectIDSysName": "id",
            "folderId": 33819484
        },
        "99342650": {
            "id": 99342650,
            "dateCreated": "2024-09-12T11:15:50Z",
            "hidden": false,
            "dateHidden": null,
            "networkID": 21335,
            "name": "st_company",
            "sysName": "st_company",
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"company\",\"name\":\"Company\",\"dataType\":\"string\",\"id\":\"72701726139775701\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"company\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-09-12T11:16:33Z",
            "createBy": 23015,
            "changedBy": 23015,
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
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            "objectIDSysName": "id",
            "folderId": 33819484
        },
        "99342651": {
            "id": 99342651,
            "dateCreated": "2024-09-12T11:26:07Z",
            "hidden": false,
            "dateHidden": null,
            "networkID": 21335,
            "name": "st_bonus",
            "sysName": "st_bonus",
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"bonus\",\"name\":\"Бонус\",\"dataType\":\"string\",\"id\":\"89351726140385687\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"bonus\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-09-12T11:26:35Z",
            "createBy": 23015,
            "changedBy": 23015,
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
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            "objectIDSysName": "id",
            "folderId": 33819484
        },
        "99342653": {
            "id": 99342653,
            "dateCreated": "2024-09-12T11:48:36Z",
            "hidden": false,
            "dateHidden": null,
            "networkID": 21335,
            "name": "st_contract_type",
            "sysName": "st_contract_type",
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"type\",\"name\":\"Тип\",\"dataType\":\"string\",\"id\":\"68131726141720189\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"type\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-09-12T11:48:48Z",
            "createBy": 23015,
            "changedBy": 23015,
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
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            "objectIDSysName": "id",
            "folderId": 33819484
        },
        "99344956": {
            "id": 99344956,
            "dateCreated": "2024-09-23T06:21:50Z",
            "hidden": false,
            "dateHidden": null,
            "networkID": 21335,
            "name": "Add approval",
            "sysName": "add_approval",
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"position\",\"name\":\"Должность\",\"dataType\":\"string\",\"id\":\"23441727072534412\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"email\",\"name\":\"Email\",\"dataType\":\"link\",\"id\":\"30331727072535530\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"full_name\",\"name\":\"Полное имя\",\"dataType\":\"string\",\"id\":\"82061727072516196\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"division\",\"name\":\"Подразделение\",\"dataType\":\"link\",\"id\":\"94381727072585670\",\"link\":\"structure\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"full_name\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-09-26T10:11:27Z",
            "createBy": 23015,
            "changedBy": 23015,
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
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            "objectIDSysName": "id",
            "folderId": 33819484
        },
        "99344980": {
            "id": 99344980,
            "dateCreated": "2024-09-23T06:53:51Z",
            "hidden": false,
            "dateHidden": null,
            "networkID": 21335,
            "name": "st_reason_replacement",
            "sysName": "st_reason_replacement",
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false},{\"sysName\":\"reason\",\"name\":\"Причина\",\"dataType\":\"string\",\"id\":\"26151726141366314\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false}]",
            "jsonGroupSettings": "[]",
            "jsonViewIdSettings": null,
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": null,
            "createBy": 23015,
            "changedBy": null,
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
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            "objectIDSysName": "id",
            "folderId": 33819484
        },
        "99352484": {
            "id": 99352484,
            "dateCreated": "2024-10-30T19:26:52Z",
            "hidden": false,
            "dateHidden": null,
            "networkID": 21335,
            "name": "st_employment_type",
            "sysName": "st_employment_type",
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"employment_type\",\"dataType\":\"string\",\"name\":\"Тип занятости\",\"id\":\"11211716226454609\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": null,
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-10-30T19:27:40Z",
            "createBy": 23015,
            "changedBy": 23015,
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
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            "objectIDSysName": "id",
            "folderId": 33819484
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
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "new_hrbp",
            "dataType": "link",
            "name": "Новый HR BP",
            "id": "69701725431725005",
            "link": "employees",
            "group": "1725431710596",
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
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "current_up_direct",
            "dataType": "link",
            "name": "Текущий верхнеуровневый руководитель (руководитель нанимающего менеджера) для Non-TECH / Директор департамента для TECH",
            "id": "43321725431723921",
            "link": "employees",
            "group": "1725431710596",
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
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "new_division",
            "dataType": "link",
            "name": "Новое подразделение сотрудника",
            "id": "47731725431619206",
            "link": "structure",
            "group": "1725431600480",
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
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "new_position",
            "dataType": "link",
            "name": "Новая должность сотрудника",
            "id": "46231725431618308",
            "link": "employees",
            "group": "1725431600480",
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
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "current_division",
            "dataType": "link",
            "name": "Текущее подразделение сотрудника",
            "id": "75661725431461525",
            "link": "structure",
            "group": "1725431445711",
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
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "current_position",
            "dataType": "string",
            "name": "Текущая должность сотрудника",
            "id": "18221725431460573",
            "link": "",
            "group": "1725431445711",
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
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "planned_date",
            "dataType": "date",
            "name": "Планируемая дата перевода",
            "id": "30281725431329024",
            "link": "",
            "group": "1725431234450",
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
                "dateFormat": "DD.MM.YYYY",
                "timeFormat": "",
                "isUTC": "false"
            },
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "current_direct_name",
            "dataType": "link",
            "name": "ФИО текущего руководителя ",
            "id": "22651725431263787",
            "link": "employees",
            "group": "1725431234450",
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
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "employee_name",
            "dataType": "link",
            "name": "ФИО сотрудника",
            "id": "74491725431250990",
            "link": "employees",
            "group": "1725431234450",
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
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "number",
            "dataType": "string",
            "name": "Номер заявки",
            "id": "29661725433629762",
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
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "date",
            "dataType": "date",
            "name": "Дата создания заявки",
            "id": "96891725433646615",
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
                "dateFormat": "DD.MM.YYYY",
                "timeFormat": " HH:mm",
                "isUTC": "false"
            },
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "date_text",
            "dataType": "string",
            "name": "Дата",
            "id": "82361725433675003",
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
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "last_change_date",
            "dataType": "date",
            "name": "Дата последнего изменения",
            "id": "73651725433775126",
            "link": "",
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
                "dateFormat": "DD.MM.YYYY",
                "timeFormat": " HH:mm",
                "isUTC": "false"
            },
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "logs",
            "dataType": "arrayLink",
            "name": "История изменений",
            "id": "30101725433610853",
            "link": "st_logs",
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
            "linkOrArrayLinkType": true,
            "linkType": false,
            "arrayLink": true,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "prev_status",
            "dataType": "link",
            "name": "Предыдущий статус",
            "id": "94001725433553894",
            "link": "st_statuses",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "current_cnb",
            "dataType": "link",
            "name": "Текущий C&B",
            "id": "58661726052187313",
            "link": "employees",
            "group": "1725431710596",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "current_total_salary",
            "dataType": "decimal",
            "name": "Текущий совокупный доход, gross руб/мес",
            "id": "74621726052058609",
            "link": "",
            "group": "1726051810227",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "per_bonus",
            "dataType": "number",
            "name": "Текущий процент премии",
            "id": "97081726052045965",
            "link": "",
            "group": "1726051810227",
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
            "format": "positiveNum",
            "formatOptions": null,
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "current_salary_with_rkisn",
            "dataType": "decimal",
            "name": "Текущий оклад, включая РКиСН и другие надбавки, gross руб/мес",
            "id": "98801726051969675",
            "link": "",
            "group": "1726051810227",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "rkisn",
            "dataType": "decimal",
            "name": "РКиСН",
            "id": "85731726051943563",
            "link": "",
            "group": "1726051810227",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "current_salary_without_rkisn",
            "dataType": "decimal",
            "name": "Текущий оклад без РКиСН, gross руб/мес",
            "id": "42431726051884641",
            "link": "",
            "group": "1726051810227",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "period_bonus",
            "dataType": "link",
            "name": "Текущая периодичность выплаты премии",
            "id": "48991726051831109",
            "link": "st_bonus",
            "group": "1726051810227",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 0,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "analytics_ops",
            "dataType": "link",
            "name": "Текущая категория персонала (Analytics for Ops)",
            "id": "36071726045140500",
            "link": "analytics_for_ops",
            "group": "1725431445711",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "position_id",
            "dataType": "string",
            "name": "Текущий код позиции (из УШР)",
            "id": "45681726045097116",
            "link": null,
            "group": "1725431445711",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "company",
            "dataType": "link",
            "name": "Текущая организация",
            "id": "27451726045070790",
            "link": "st_company",
            "group": "1725431445711",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "contract_end_date",
            "dataType": "date",
            "name": "Дата окончания договора",
            "id": "94091726044922925",
            "link": "",
            "group": "1725431234450",
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
                "dateFormat": "DD.MM.YYYY",
                "timeFormat": "",
                "isUTC": "false"
            },
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "replacement_type",
            "dataType": "link",
            "name": "Тип перевода",
            "id": "42371726044856787",
            "link": "st_contract_type",
            "group": "1725431234450",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "repl_empl_name",
            "dataType": "link",
            "name": "ФИО заменяемого сотрудника",
            "id": "65551726044774422",
            "link": "employees",
            "group": "1725431234450",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "current_hrbp",
            "dataType": "link",
            "name": "Текущий HR BP",
            "id": "68841726044632237",
            "link": "employees",
            "group": "1725431710596",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "position_rate",
            "dataType": "string",
            "name": "Коэффициент занятости на новой позиции",
            "id": "72981726142316557",
            "link": "",
            "group": "1725431600480",
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
                "imask": "{\n    mask: Number,\n    scale: 2,\n    thousandsSeparator: '',\n    padFractionalZeros: false,\n    normalizeZeros: true,\n    radix: ',',\n    mapToRadix: ['.']\n  }",
                "isUTC": "false"
            },
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "new_analytics_ops",
            "dataType": "link",
            "name": "Новая категория персонала (Analytics for Ops)",
            "id": "94121726142293084",
            "link": "analytics_for_ops",
            "group": "1725431600480",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "new_position_id",
            "dataType": "string",
            "name": "Новый код позиции (из УШР) ",
            "id": "33951726142259108",
            "link": null,
            "group": "1725431600480",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "new_company",
            "dataType": "link",
            "name": "Новая организация",
            "id": "15551726142220035",
            "link": "st_company",
            "group": "1725431600480",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "new_per_bonus",
            "dataType": "number",
            "name": "Новый процент премии",
            "id": "71771726145483919",
            "link": "",
            "group": "1726145208794",
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
            "format": "positiveNum",
            "formatOptions": null,
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "new_total_salary",
            "dataType": "decimal",
            "name": "Новый совокупный доход, gross руб/мес",
            "id": "38891726145546263",
            "link": "",
            "group": "1726145208794",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "new_salary_with_rkisn",
            "dataType": "decimal",
            "name": "Новый оклад, включая РКиСН и другие надбавки, gross руб/мес",
            "id": "99131726145453730",
            "link": "",
            "group": "1726145208794",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "new_rkisn",
            "dataType": "decimal",
            "name": "Новый РКиСН",
            "id": "40591726145349693",
            "link": "",
            "group": "1726145208794",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "new_salary_without_rkisn",
            "dataType": "decimal",
            "name": "Новый оклад без РКиСН, gross руб/мес",
            "id": "87511726145291105",
            "link": "",
            "group": "1726145208794",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "new_period_bonus",
            "dataType": "link",
            "name": "Новая периодичность выплаты премии",
            "id": "49131726145232067",
            "link": "st_bonus",
            "group": "1726145208794",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 0,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "new_org_structure",
            "dataType": "string",
            "name": "Новая организационная структура",
            "id": "22651726596356199",
            "link": "",
            "group": "1725431600480",
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
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "current_org_structure",
            "dataType": "string",
            "name": "Текущая организационная структура",
            "id": "10551726596275813",
            "link": "",
            "group": "1725431445711",
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
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "new_up_direct",
            "dataType": "link",
            "name": "Верхнеуровневый руководитель (руководитель нанимающего менеджера) для Non-TECH / Директор департамента для TECH",
            "id": "49461726638728534",
            "link": "employees",
            "group": "1725431710596",
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
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "new_cnb",
            "dataType": "link",
            "name": "Принимающий С&B",
            "id": "75681726654003783",
            "link": "employees",
            "group": "1725431710596",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "comment_orgdev",
            "dataType": "string",
            "name": "Примечание для Оргдев",
            "id": "71921726653914186",
            "link": "",
            "group": "1726145208794",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "orgdev",
            "dataType": "boolean",
            "name": "Добавить Оргдев",
            "id": "54541726653864757",
            "link": "",
            "group": "1726145208794",
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
            "formatOptions": {
                "customOptionLabel": "My option",
                "keyValue": {
                    "key": "key",
                    "value": "value",
                    "button": "One more"
                },
                "dateLocale": "en-gb",
                "booleanOptions": [
                    "Да",
                    "Нет"
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "hr_admin",
            "dataType": "link",
            "name": "HR Admin",
            "id": "80691726655523102",
            "link": "employees",
            "group": "1725431710596",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "budget_holder",
            "dataType": "link",
            "name": "Владелец бюджета (или лицо его заменяющее)",
            "id": "30591726656292225",
            "link": "employees",
            "group": "1725431710596",
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
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "new_cost_center",
            "dataType": "string",
            "name": "Новый кост-центр (Optimacros)",
            "id": "48901726656261119",
            "link": "",
            "group": "1726145208794",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "current_cost_center",
            "dataType": "string",
            "name": "Текущий кост-центр (Optimacros)",
            "id": "28041726656199647",
            "link": "",
            "group": "1726051810227",
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
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "budget_date",
            "dataType": "date",
            "name": "Бюджетная дата преревода",
            "id": "49131726656143374",
            "link": "",
            "group": "1725431234450",
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
                "dateFormat": "DD.MM.YYYY",
                "timeFormat": "",
                "isUTC": "false"
            },
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "add_approval_in",
            "dataType": "link",
            "name": "Новый HR директор направления",
            "id": "38281727073206486",
            "link": "add_approval",
            "group": "1725431710596",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "add_approval_out",
            "dataType": "link",
            "name": "Текущий HR директор направления",
            "id": "74711727073168576",
            "link": "add_approval",
            "group": "1725431710596",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "replacement_reason",
            "dataType": "link",
            "name": "Причина замены",
            "id": "61451727074752275",
            "link": "st_reason_replacement",
            "group": "1725431234450",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "replacement",
            "dataType": "boolean",
            "name": "Замена сотрудника",
            "id": "44491726044721571",
            "link": "",
            "group": "1725431234450",
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
            "formatOptions": {
                "customOptionLabel": "My option",
                "keyValue": {
                    "key": "key",
                    "value": "value",
                    "button": "One more"
                },
                "dateLocale": "en-gb",
                "booleanOptions": [
                    "Да",
                    "Нет"
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "actual_date",
            "dataType": "date",
            "name": "Фактическая дата перевода",
            "id": "64531727078660236",
            "link": "",
            "group": "1725431600480",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 9,
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
                "dateFormat": "DD.MM.YYYY",
                "timeFormat": "",
                "isUTC": "false"
            },
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "total_increase_per",
            "dataType": "decimal",
            "name": "Процент прироста совокупного дохода(%)",
            "id": "69461727080268194",
            "link": "",
            "group": "1726145208794",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "role_budget_holder",
            "dataType": "boolean",
            "name": "Добавить Владельца бюджета в качестве:",
            "id": "86541727248705190",
            "link": "",
            "group": "1725431710596",
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
            "formatOptions": {
                "customOptionLabel": "My option",
                "keyValue": {
                    "key": "key",
                    "value": "value",
                    "button": "One more"
                },
                "dateLocale": "en-gb",
                "booleanOptions": [
                    "Cогласующего лица",
                    "Получателя уведомления"
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "new_vacancy_id",
            "dataType": "string",
            "name": "ID вакансии (из Optimacros)",
            "id": "95861727459733761",
            "link": null,
            "group": "1725431600480",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "comment_new_salary",
            "dataType": "string",
            "name": "Комментарий к структуре нового дохода",
            "id": "63431727459599943",
            "link": null,
            "group": "1726145208794",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "comment_current_salary",
            "dataType": "string",
            "name": "Комментарий к структуре текущего дохода",
            "id": "11561727459549308",
            "link": null,
            "group": "1726051810227",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "new_employment_type",
            "dataType": "link",
            "name": "Новый формат работы сотрудника",
            "id": "46561730316605258",
            "link": "st_employment_type",
            "group": "1725431600480",
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
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "cancel_reason_refused",
            "dataType": "string",
            "name": "Причина",
            "id": "10131730487702232",
            "link": "",
            "group": "1730487656046",
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
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "cancel_reason_bfr_prsnt",
            "dataType": "string",
            "name": "Причина",
            "id": "22341730487701249",
            "link": "",
            "group": "1730487656046",
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
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "cancel_reason",
            "dataType": "string",
            "name": "Укажите причину",
            "id": "59261733436687927",
            "link": "",
            "group": "1730487656046",
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
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "new_direct",
            "dataType": "link",
            "name": "Новый руководитель",
            "id": "75461733428579077",
            "link": "employees",
            "group": "1725431710596",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "hr_bp_creator",
            "dataType": "json",
            "name": "Заявка создана HR BP, вместо руководителя",
            "id": "84751733428448544",
            "link": "",
            "group": "1725431710596",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 11,
            "linkIndexFieldSysName": [],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": "checkboxes",
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
                        "value": "hrbp",
                        "label": null
                    }
                ]
            },
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": true,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "user_creator",
            "dataType": "link",
            "name": "Инициатор заявки",
            "id": "24901725433580444",
            "link": "employees",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
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
