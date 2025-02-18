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
    "sl": "staffing",
    "pageSize": "10",
    "headerField": null,
    "params": {
        "steps": [
            {
                "id": "step_1734711228485",
                "sysName": "progress bar",
                "elements": [
                    {
                        "id": "elmnt_1734983636576",
                        "type": "text",
                        "paraText": "<style>.lmd-offer p {margin:10px 0}</style>\n<div classs=\"lmd\">\n<h2>Заявка {{number}}</h2>\n<p>Причина оформления: <a href=\"{{parent_link}}\">Оффер {{parent_link_number}}</a></p> \n<p>Дата создания: {{date}}</p>\n<p>Статус заявки: {{status.status}}</p>\n<p>Ответственный за этап: {{responsible_employee_id.employee_full_name}}</p>\n<p>Дата последнего изменения:\n  {{last_change_date}}</p>\n</div>",
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1735129637169",
                                "_conditionalView_field": "type_id",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "J"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1735129649343",
                        "type": "text",
                        "paraText": "<style>.lmd-offer p {margin:10px 0}</style>\n<div classs=\"lmd\">\n<h2>Заявка {{number}}</h2>\n<p>Причина оформления: <a href=\"{{parent_link}}\">Перевод {{parent_link_number}}</a></p> \n<p>Дата создания: {{date}}</p>\n<p>Статус заявки: {{status.status}}</p>\n<p>Ответственный за этап: {{responsible_employee_id.employee_full_name}}</p>\n<p>Дата последнего изменения:\n  {{last_change_date}}</p>\n</div>",
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1735129664653",
                                "_conditionalView_field": "type_id",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "S"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734711253825",
                        "type": "steps",
                        "_formSteps": {
                            "stepsOrder": [
                                "recruiter",
                                "hr_admin",
                                "waiting_approval",
                                "staffing_closed",
                                "transfer_closed",
                                "staffing_cancel",
                                "transfer_cancel"
                            ],
                            "settings": {
                                "steps": {
                                    "recruiter": true,
                                    "hr_admin": true,
                                    "tnd": true,
                                    "staffing_closed": true,
                                    "transfer_closed": true,
                                    "staffing_cancel": true,
                                    "transfer_cancel": true,
                                    "waiting_approval": true
                                }
                            },
                            "stepSettings": {
                                "recruiter": {
                                    "title": "Подготовка документов"
                                },
                                "hr_admin": {
                                    "title": "Оформление приема"
                                },
                                "tnd": {
                                    "title": "Ожидание подтверждения приема"
                                },
                                "waiting_approval": {
                                    "title": "Ожидание подтверждения приема"
                                },
                                "staffing_closed": {
                                    "title": "Прием завершен"
                                },
                                "transfer_closed": {
                                    "title": "Перевод завершен"
                                },
                                "staffing_cancel": {
                                    "title": "Прием отменен"
                                },
                                "transfer_cancel": {
                                    "title": "Перевод отменен"
                                }
                            }
                        }
                    }
                ],
                "sectionVisibility": "always"
            },
            {
                "id": "default_step",
                "sysName": "recruiter",
                "elements": [
                    {
                        "id": "elmnt_1734710816913",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347146413190.33141003334234424103232",
                                "_field": "candidate_fname",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714612700",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347146526320.140000144212221230432413",
                                "_field": "first_work_day",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1734977348869",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{recruiter.webuser_id.id}},{{recruiter.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1734977350039",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "sf_recruiter"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714613368",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347146703900.30222321441413120142202",
                                "_field": "vacancy_id",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714613972",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347146818270.2110144023140104111122",
                                "_field": "id_position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1739307431934",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17393074490600.2210411222200141112424",
                                "_field": "reason_of_vacancy",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "sf_reason_of_vacancy",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714615019",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347146975480.41341113112020402424213",
                                "_field": "division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714615917",
                        "type": "text",
                        "_input_fields": [
                            {
                                "id": "17347147169920.4342112104124141430411"
                            }
                        ],
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{org_structure}}"
                    },
                    {
                        "id": "elmnt_1734714617071",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347147607730.34133024414422213042023",
                                "_field": "company",
                                "_field_required": true,
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "sf_company",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714690537",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347147679320.013414021113423231341243",
                                "_field": "position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1734979148050",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{recruiter.webuser_id.id}},{{recruiter.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1734979149151",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "sf_recruiter"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714691688",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347147840080.214434231143422313411122",
                                "_field": "direct_fname",
                                "_field_required": true,
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1734979268183",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{recruiter.webuser_id.id}},{{recruiter.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1734979269315",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "sf_recruiter"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714782838",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347147959030.34023104330330213120202",
                                "_field": "employment_type",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "sf_employment_type",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1734979312801",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{recruiter.webuser_id.id}},{{recruiter.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1734979324424",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "sf_recruiter"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR",
                                "_field_required": true
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1739304973097",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17393049786620.013130443131420242203423",
                                "_field": "contract_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "sf_contranct_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1739305053021",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{recruiter.webuser_id.id}},{{recruiter.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1739305070974",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "sf_recruiter"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1739304975334",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17393050012140.0203442232001404310020323",
                                "_field": "contract_period",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1739305113022",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{recruiter.webuser_id.id}},{{recruiter.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1739305114170",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "sf_recruiter"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_action_conditionals_manual": "manual",
                        "_conditions": [
                            {
                                "id": "condition_1739305172265",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "fixed_term,gph"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1739304976567",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17393052557210.23442214104330213413234",
                                "_field": "contract_end_date",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1739305274153",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{recruiter.webuser_id.id}},{{recruiter.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1739305276009",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "sf_recruiter"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1739305297493",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "fixed_term,gph"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734979381257",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17349793839600.231312102241410024102",
                                "_field": "pass",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1734979396290",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{recruiter.webuser_id.id}},{{recruiter.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1734979403850",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "sf_recruiter"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734979381965",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17349794362800.01122424402113143122012",
                                "_field": "equipment",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1734979465157",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{recruiter.webuser_id.id}},{{recruiter.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1734979470652",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "sf_recruiter"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734979605445",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17349796070890.11321133422220132324101",
                                "_field": "desire_equipment",
                                "_field_required": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1734979622327",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{recruiter.webuser_id.id}},{{recruiter.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1734979623224",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "sf_recruiter"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1734979674339",
                                "_conditionalView_field": "equipment",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1739307658098",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17393076823740.44311341243442401030021",
                                "_field": "address",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1739307701976",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{recruiter.webuser_id.id}},{{recruiter.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1739307703025",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "sf_recruiter"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1739307720242",
                                "_conditionalView_field": "equipment",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1739307659507",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17393077748250.2341012024230242440303",
                                "_field": "phone_number",
                                "_field_required": true,
                                "_field_use_mask": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1739307795141",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{recruiter.webuser_id.id}},{{recruiter.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1739307796296",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "sf_recruiter"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734979774210",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17349797759350.22213242430221302003211",
                                "_field": "vk_dm",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1734979837085",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{recruiter.webuser_id.id}},{{recruiter.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1734979838014",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "sf_recruiter"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR",
                                "_field_add_tooltip": false,
                                "_field_tooltip_text": ""
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734979887932",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17349798893160.34102332424330234224124",
                                "_field": "documents",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1734979903665",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{recruiter.webuser_id.id}},{{recruiter.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1734979964581",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "sf_recruiter"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR",
                                "_field_add_tooltip": true,
                                "_field_tooltip_text": "Можно вложить только архив с документами\nФормат файла - zip/rar/7z (7-zip)\nПароль от архива - нужно указать в hiring list"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1734979948585",
                                "_conditionalView_field": "vk_dm",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "false"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734980096371",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17349800986050.2410021313411342403113",
                                "_field": "candidate_photo",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1734980107119",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{recruiter.webuser_id.id}},{{recruiter.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1734980108595",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "sf_recruiter"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR",
                                "_field_add_tooltip": true,
                                "_field_tooltip_text": "Формат - не менее 1000-1000 pix\nТолько JPEG/PNG\nФото должно быть не ниже груди (портрет по плечи), на однородном светлом фоне, без объектов сзади (без очков и без головных уборов)."
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1734980151685",
                                "_conditionalView_field": "pass",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734980268312",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17349803486490.102212041222021301430222",
                                "_field": "recruiter",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1735121826143",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{recruiter.direct_email.id}}"
                                    },
                                    {
                                        "id": "condition_1735121851189",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "sf_recruiter"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1735121660853",
                        "type": "action",
                        "_input_fields": [
                            {
                                "id": "17351216624870.04210442121132133203112"
                            }
                        ],
                        "_actions": [
                            {
                                "id": "17351216654820.4001114111044202011241",
                                "_action": "action_1735121525168",
                                "_action_icon": "refresh",
                                "_action_button_type": "accent",
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Рекрутер переназначен!"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1735121708116",
                                "_conditionalView_field": "WebUser.id",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "{{recruiter.direct_email.id}}"
                            },
                            {
                                "id": "condition_1735121785685",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "sf_recruiter"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1737415713854",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17374157164710.120444214442023040413",
                                "_field": "direction_hr_admin",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "sf_hr_admins",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1737415784874",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{recruiter.webuser_id.id}},{{recruiter.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1737415796857",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "sf_recruiter"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_copy_1734980435815",
                "sysName": "hr_admin",
                "elements": [
                    {
                        "id": "elmnt_1734710816913",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347146413190.33141003334234424103232",
                                "_field": "candidate_fname",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714612700",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347146526320.140000144212221230432413",
                                "_field": "first_work_day",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1734977350039",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "sf_hr_admin"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714613368",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347146703900.30222321441413120142202",
                                "_field": "vacancy_id",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1734980878400",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "sf_hr_admin"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714613972",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347146818270.2110144023140104111122",
                                "_field": "id_position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1734980931217",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "sf_hr_admin"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1739307482898",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17393074851270.3134222402422104110024",
                                "_field": "reason_of_vacancy",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "sf_reason_of_vacancy",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1739307499411",
                                "_conditionalView_field": "type_id",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "J"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714615019",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347146975480.41341113112020402424213",
                                "_field": "division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1734980963652",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "sf_hr_admin"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714615917",
                        "type": "text",
                        "_input_fields": [
                            {
                                "id": "17347147169920.4342112104124141430411"
                            }
                        ],
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{org_structure}}"
                    },
                    {
                        "id": "elmnt_1734714617071",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347147607730.34133024414422213042023",
                                "_field": "company",
                                "_field_required": true,
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "sf_company",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714690537",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347147679320.013414021113423231341243",
                                "_field": "position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1734979149151",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "sf_hr_admin"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714691688",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347147840080.214434231143422313411122",
                                "_field": "direct_fname",
                                "_field_required": true,
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1734979269315",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "sf_hr_admin"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714782838",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347147959030.34023104330330213120202",
                                "_field": "employment_type",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "sf_employment_type",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1734979324424",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "sf_hr_admin"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR",
                                "_field_required": true
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1739305384537",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17393053897530.32340242422432034304414",
                                "_field": "contract_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "sf_contranct_type",
                                "_field_hidden": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1739305429636",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "sf_hr_admin"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": [
                            {
                                "id": "condition_1739305440587"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1739305385949",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17393053938880.13114303214123131404124",
                                "_field": "contract_period",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1739305467236",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "sf_hr_admin"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1739305519420",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "fixed_term,gph"
                            },
                            {
                                "id": "condition_1739305569181",
                                "_conditionalView_field": "type_id",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "J"
                            }
                        ],
                        "_action_conditionals_manual": "manual"
                    },
                    {
                        "id": "elmnt_1739305387205",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17393053964520.114120042303401334424003",
                                "_field": "contract_end_date",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1739305490353",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "sf_hr_admin"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1739305553805",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "fixed_term,gph"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734979774210",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17349797759350.22213242430221302003211",
                                "_field": "vk_dm",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1734981316265",
                                "_conditionalView_field": "type_id",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "J"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734979887932",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17349798893160.34102332424330234224124",
                                "_field": "documents",
                                "_field_required": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR",
                                "_field_add_tooltip": true,
                                "_field_tooltip_text": "Можно вложить только архив с документами\nФормат файла - zip/rar/7z (7-zip)\nПароль от архива - нужно указать в hiring list"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1734979948585",
                                "_conditionalView_field": "vk_dm",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "false"
                            },
                            {
                                "id": "condition_1734981332458",
                                "_conditionalView_field": "type_id",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "J"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734980267536",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17349802739640.40343041321001001414423",
                                "_field": "pers_number",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1734981405591",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "sf_hr_admin"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734980268312",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17349803486490.102212041222021301430222",
                                "_field": "recruiter",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1734981466918",
                                "_conditionalView_field": "type_id",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "J"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734981483432",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17349814846700.41133443230143212240233",
                                "_field": "hrbp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1734981507750",
                                "_conditionalView_field": "type_id",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "S"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1737415839745",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17374158446250.0031220014230241032443144",
                                "_field": "direction_hr_admin",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "sf_hr_admins",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1737415865703",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "sf_hr_admin"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1737444147991",
                                "_conditionalView_field": "type_id",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "J"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_copy_1734981742283",
                "sysName": "waiting_approval",
                "elements": [
                    {
                        "id": "elmnt_1734710816913",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347146413190.33141003334234424103232",
                                "_field": "candidate_fname",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714612700",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347146526320.140000144212221230432413",
                                "_field": "first_work_day",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1734977350039",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "sf_hr_admin"
                                    },
                                    {
                                        "id": "condition_1737413664685",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{recruiter.webuser_id.id}},{{recruiter.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "AND"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714613368",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347146703900.30222321441413120142202",
                                "_field": "vacancy_id",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714613972",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347146818270.2110144023140104111122",
                                "_field": "id_position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1739307516425",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17393075184440.41103330302142420402432",
                                "_field": "reason_of_vacancy",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "sf_reason_of_vacancy",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1739307533361",
                                "_conditionalView_field": "type_id",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "J"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714615019",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347146975480.41341113112020402424213",
                                "_field": "division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714615917",
                        "type": "text",
                        "_input_fields": [
                            {
                                "id": "17347147169920.4342112104124141430411"
                            }
                        ],
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{org_structure}}"
                    },
                    {
                        "id": "elmnt_1734714617071",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347147607730.34133024414422213042023",
                                "_field": "company",
                                "_field_required": true,
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "sf_company",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714690537",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347147679320.013414021113423231341243",
                                "_field": "position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714691688",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347147840080.214434231143422313411122",
                                "_field": "direct_fname",
                                "_field_required": true,
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714782838",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347147959030.34023104330330213120202",
                                "_field": "employment_type",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "sf_employment_type",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR",
                                "_field_required": true
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1739305605231",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17393056104240.020101401244214123124301",
                                "_field": "contract_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "sf_contranct_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1739305606532",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17393056528040.130120331103334410204312",
                                "_field": "contract_period",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1739305663935",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "fixed_term,gph"
                            },
                            {
                                "id": "condition_1739305674679",
                                "_conditionalView_field": "type_id",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "J"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1739305607649",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17393056891320.221320444344422204310422",
                                "_field": "contract_end_date",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1739305699735",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "fixed_term,gph"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734979381257",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17349793839600.231312102241410024102",
                                "_field": "pass",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1734981244230",
                                "_conditionalView_field": "type_id",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "J"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734979381965",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17349794362800.01122424402113143122012",
                                "_field": "equipment",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1734981274141",
                                "_conditionalView_field": "type_id",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "J"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734979605445",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17349796070890.11321133422220132324101",
                                "_field": "desire_equipment",
                                "_field_required": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1734979674339",
                                "_conditionalView_field": "equipment",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1734981293324",
                                "_conditionalView_field": "type_id",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "J"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1739307889166",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17393079028250.44144000200024341102101",
                                "_field": "address",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1739307913734",
                                "_conditionalView_field": "equipment",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1739307890503",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17393078929300.011324414232022422040102",
                                "_field": "phone_number",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734980267536",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17349802739640.40343041321001001414423",
                                "_field": "pers_number",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734980268312",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17349803486490.102212041222021301430222",
                                "_field": "recruiter",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1734981466918",
                                "_conditionalView_field": "type_id",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "J"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734981483432",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17349814846700.41133443230143212240233",
                                "_field": "hrbp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1734981507750",
                                "_conditionalView_field": "type_id",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "S"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734980377885",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17349804024920.40110420330122120202323",
                                "_field": "direction_hr_admin",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "sf_hr_admins",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_copy_1735119916192",
                "sysName": "staffing_closed",
                "elements": [
                    {
                        "id": "elmnt_1734710816913",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347146413190.33141003334234424103232",
                                "_field": "candidate_fname",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714612700",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347146526320.140000144212221230432413",
                                "_field": "first_work_day",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714613368",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347146703900.30222321441413120142202",
                                "_field": "vacancy_id",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714613972",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347146818270.2110144023140104111122",
                                "_field": "id_position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1739307552275",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17393075542930.121211030104321102441003",
                                "_field": "reason_of_vacancy",
                                "_field_link_type": "select",
                                "_field_link_pageSize": 0,
                                "_field_arrayLink_endpoint": "sf_reason_of_vacancy",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714615019",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347146975480.41341113112020402424213",
                                "_field": "division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714615917",
                        "type": "text",
                        "_input_fields": [
                            {
                                "id": "17347147169920.4342112104124141430411"
                            }
                        ],
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{org_structure}}"
                    },
                    {
                        "id": "elmnt_1734714617071",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347147607730.34133024414422213042023",
                                "_field": "company",
                                "_field_required": true,
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "sf_company",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714690537",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347147679320.013414021113423231341243",
                                "_field": "position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714691688",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347147840080.214434231143422313411122",
                                "_field": "direct_fname",
                                "_field_required": true,
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714782838",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347147959030.34023104330330213120202",
                                "_field": "employment_type",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "sf_employment_type",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR",
                                "_field_required": true
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1739305884075",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17393058865830.41344420434234230040044",
                                "_field": "contract_period",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": []
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1739305907280",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "fixed_term,gph"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1739305739236",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17393057463390.3130010403313221231141",
                                "_field": "contract_end_date",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1739305846673",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "fixed_term,gph"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734979381257",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17349793839600.231312102241410024102",
                                "_field": "pass",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1734981244230",
                                "_conditionalView_field": "type_id",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "J"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734979381965",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17349794362800.01122424402113143122012",
                                "_field": "equipment",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1734981274141",
                                "_conditionalView_field": "type_id",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "J"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734979605445",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17349796070890.11321133422220132324101",
                                "_field": "desire_equipment",
                                "_field_required": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1734979674339",
                                "_conditionalView_field": "equipment",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1734981293324",
                                "_conditionalView_field": "type_id",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "J"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1739307950736",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17393079663170.41100222433300301021411",
                                "_field": "address",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1739307979189",
                                "_conditionalView_field": "equipment",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1739307951931",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17393079541220.30140403313033200020223",
                                "_field": "phone_number",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1735130261386",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17351302638700.112232013130023014343343",
                                "_field": "documents",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": []
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1735130282216",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "sf_hr_admin"
                            },
                            {
                                "id": "condition_1737463069526",
                                "_conditionalView_field": "vk_dm",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "false"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734980267536",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17349802739640.40343041321001001414423",
                                "_field": "pers_number",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734980268312",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17349803486490.102212041222021301430222",
                                "_field": "recruiter",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1734981466918",
                                "_conditionalView_field": "type_id",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "J"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734981483432",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17349814846700.41133443230143212240233",
                                "_field": "hrbp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1734981507750",
                                "_conditionalView_field": "type_id",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "S"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734980377885",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17349804024920.40110420330122120202323",
                                "_field": "hr_admin",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_copy_1735130378344",
                "sysName": "transfer_closed",
                "elements": [
                    {
                        "id": "elmnt_1734710816913",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347146413190.33141003334234424103232",
                                "_field": "candidate_fname",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714612700",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347146526320.140000144212221230432413",
                                "_field": "first_work_day",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714613368",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347146703900.30222321441413120142202",
                                "_field": "vacancy_id",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714613972",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347146818270.2110144023140104111122",
                                "_field": "id_position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714615019",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347146975480.41341113112020402424213",
                                "_field": "division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714615917",
                        "type": "text",
                        "_input_fields": [
                            {
                                "id": "17347147169920.4342112104124141430411"
                            }
                        ],
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{org_structure}}"
                    },
                    {
                        "id": "elmnt_1734714617071",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347147607730.34133024414422213042023",
                                "_field": "company",
                                "_field_required": true,
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "sf_company",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714690537",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347147679320.013414021113423231341243",
                                "_field": "position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714691688",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347147840080.214434231143422313411122",
                                "_field": "direct_fname",
                                "_field_required": true,
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714782838",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347147959030.34023104330330213120202",
                                "_field": "employment_type",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "sf_employment_type",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR",
                                "_field_required": true
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1739305931894",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17393059352860.00132223414002042322202423",
                                "_field": "contract_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "sf_contranct_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1739305933327",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17393059581500.012334301230021424104422",
                                "_field": "contract_end_date",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1739305973635",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "fixed_term,gph"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734979381257",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17349793839600.231312102241410024102",
                                "_field": "pass",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1734981244230",
                                "_conditionalView_field": "type_id",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "J"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734979381965",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17349794362800.01122424402113143122012",
                                "_field": "equipment",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1734981274141",
                                "_conditionalView_field": "type_id",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "J"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1739308000946",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17393080168620.102204223214323212424213",
                                "_field": "address",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1739308025803",
                                "_conditionalView_field": "equipment",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1739308002165",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17393080043700.41233334240313003100024",
                                "_field": "phone_number",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734979605445",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17349796070890.11321133422220132324101",
                                "_field": "desire_equipment",
                                "_field_required": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1734979674339",
                                "_conditionalView_field": "equipment",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1734981293324",
                                "_conditionalView_field": "type_id",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "J"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1735130261386",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17351302638700.112232013130023014343343",
                                "_field": "documents",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": []
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1735130282216",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "sf_hr_admin"
                            },
                            {
                                "id": "condition_1737463137640",
                                "_conditionalView_field": "vk_dm",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "false"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734980267536",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17349802739640.40343041321001001414423",
                                "_field": "pers_number",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734980268312",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17349803486490.102212041222021301430222",
                                "_field": "recruiter",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1734981466918",
                                "_conditionalView_field": "type_id",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "J"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734981483432",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17349814846700.41133443230143212240233",
                                "_field": "hrbp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1734981507750",
                                "_conditionalView_field": "type_id",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "S"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734980377885",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17349804024920.40110420330122120202323",
                                "_field": "hr_admin",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_copy_1735130408813",
                "sysName": "staffing_cancel",
                "elements": [
                    {
                        "id": "elmnt_1734710816913",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347146413190.33141003334234424103232",
                                "_field": "candidate_fname",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714612700",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347146526320.140000144212221230432413",
                                "_field": "first_work_day",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714613368",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347146703900.30222321441413120142202",
                                "_field": "vacancy_id",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714613972",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347146818270.2110144023140104111122",
                                "_field": "id_position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1739307582364",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17393075841790.41122223421402401021142",
                                "_field": "reason_of_vacancy",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "sf_reason_of_vacancy",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714615019",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347146975480.41341113112020402424213",
                                "_field": "division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714615917",
                        "type": "text",
                        "_input_fields": [
                            {
                                "id": "17347147169920.4342112104124141430411"
                            }
                        ],
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{org_structure}}"
                    },
                    {
                        "id": "elmnt_1734714617071",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347147607730.34133024414422213042023",
                                "_field": "company",
                                "_field_required": true,
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "sf_company",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714690537",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347147679320.013414021113423231341243",
                                "_field": "position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714691688",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347147840080.214434231143422313411122",
                                "_field": "direct_fname",
                                "_field_required": true,
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714782838",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347147959030.34023104330330213120202",
                                "_field": "employment_type",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "sf_employment_type",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR",
                                "_field_required": true
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1739305997277",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17393060184230.213231011444232441431133",
                                "_field": "contract_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "sf_contranct_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": [
                            {
                                "id": "condition_1739306036147"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1739305998527",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17393060423850.3114042324302441443324",
                                "_field": "contract_period",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1739306056114",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "fixed_term,gph"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1739305999743",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17393060686850.020023014134442334422313",
                                "_field": "contract_end_date",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1739306083881",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "fixed_term,gph"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734979381257",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17349793839600.231312102241410024102",
                                "_field": "pass",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1734981244230",
                                "_conditionalView_field": "type_id",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "J"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734979381965",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17349794362800.01122424402113143122012",
                                "_field": "equipment",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1734981274141",
                                "_conditionalView_field": "type_id",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "J"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1739308052954",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17393080674160.41414343321033302013303",
                                "_field": "address",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1739308085858",
                                "_conditionalView_field": "equipment",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1739308053971",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17393080568120.33343330321230102204103",
                                "_field": "phone_number",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734979605445",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17349796070890.11321133422220132324101",
                                "_field": "desire_equipment",
                                "_field_required": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1734979674339",
                                "_conditionalView_field": "equipment",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1734981293324",
                                "_conditionalView_field": "type_id",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "J"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1735130261386",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17351302638700.112232013130023014343343",
                                "_field": "documents",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": []
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1735130282216",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "sf_hr_admin"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734980267536",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17349802739640.40343041321001001414423",
                                "_field": "pers_number",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734980268312",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17349803486490.102212041222021301430222",
                                "_field": "recruiter",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1734981466918",
                                "_conditionalView_field": "type_id",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "J"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734981483432",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17349814846700.41133443230143212240233",
                                "_field": "hrbp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1734981507750",
                                "_conditionalView_field": "type_id",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "S"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734980377885",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17349804024920.40110420330122120202323",
                                "_field": "hr_admin",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_copy_1735130427094",
                "sysName": "transfer_cancel",
                "elements": [
                    {
                        "id": "elmnt_1734710816913",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347146413190.33141003334234424103232",
                                "_field": "candidate_fname",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714612700",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347146526320.140000144212221230432413",
                                "_field": "first_work_day",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714613368",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347146703900.30222321441413120142202",
                                "_field": "vacancy_id",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714613972",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347146818270.2110144023140104111122",
                                "_field": "id_position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714615019",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347146975480.41341113112020402424213",
                                "_field": "division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714615917",
                        "type": "text",
                        "_input_fields": [
                            {
                                "id": "17347147169920.4342112104124141430411"
                            }
                        ],
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{org_structure}}"
                    },
                    {
                        "id": "elmnt_1734714617071",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347147607730.34133024414422213042023",
                                "_field": "company",
                                "_field_required": true,
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "sf_company",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714690537",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347147679320.013414021113423231341243",
                                "_field": "position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714691688",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347147840080.214434231143422313411122",
                                "_field": "direct_fname",
                                "_field_required": true,
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734714782838",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17347147959030.34023104330330213120202",
                                "_field": "employment_type",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "sf_employment_type",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR",
                                "_field_required": true
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1739306114691",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17393061177570.04304010024041011110344",
                                "_field": "contract_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "sf_contranct_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1739306115596",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17393061342880.30220330034441333430212",
                                "_field": "contract_end_date",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1739306147185",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "fixed_term,gph"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734979381257",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17349793839600.231312102241410024102",
                                "_field": "pass",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1734981244230",
                                "_conditionalView_field": "type_id",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "J"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734979381965",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17349794362800.01122424402113143122012",
                                "_field": "equipment",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1734981274141",
                                "_conditionalView_field": "type_id",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "J"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734979605445",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17349796070890.11321133422220132324101",
                                "_field": "desire_equipment",
                                "_field_required": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1734979674339",
                                "_conditionalView_field": "equipment",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1734981293324",
                                "_conditionalView_field": "type_id",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "J"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1739308106427",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17393081235080.30023420314001124343322",
                                "_field": "address",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1739308138307",
                                "_conditionalView_field": "equipment",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1739308107975",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17393081103100.33111441014140131312101",
                                "_field": "phone_number",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ],
                        "_conditionalView": false
                    },
                    {
                        "id": "elmnt_1735130261386",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17351302638700.112232013130023014343343",
                                "_field": "documents",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": []
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1735130282216",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "sf_hr_admin"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734980267536",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17349802739640.40343041321001001414423",
                                "_field": "pers_number",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734980268312",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17349803486490.102212041222021301430222",
                                "_field": "recruiter",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1734981466918",
                                "_conditionalView_field": "type_id",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "J"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734981483432",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17349814846700.41133443230143212240233",
                                "_field": "hrbp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1734981507750",
                                "_conditionalView_field": "type_id",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "S"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734980377885",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17349804024920.40110420330122120202323",
                                "_field": "hr_admin",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_1735128849235",
                "sysName": "popup_cancel",
                "elements": [
                    {
                        "id": "elmnt_1738321350628",
                        "type": "hint",
                        "hintTitle": "",
                        "hintText": "Обращаем ваше внимание, что при отмене заявки на оформление, родительская заявка на оффер или перевод будет автоматически аннулирована.",
                        "hintColor": "orange"
                    },
                    {
                        "id": "elmnt_1735128856437",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17351288592450.3142040103123121320102",
                                "_field": "cancel_reason",
                                "_field_required": false
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1737365004070",
                                "_conditionalView_field": "type_id",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "S"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1737364978271",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17373649819620.221204134004234404241002",
                                "_field": "cancel_reason_list",
                                "_field_arrayLink_type": "select",
                                "_field_arrayLink_endpoint": "sf_cancel_reasons",
                                "_field_required": false,
                                "_field_link_type": "select"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1737365026603",
                                "_conditionalView_field": "type_id",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "J"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1737412560605",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17374125678790.00132220413441331344142243",
                                "_field": "why_didnt_applied",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "sf_reason_didnt_applied",
                                "_conditionalView": false
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1737412607881",
                                "_conditionalView_field": "type_id",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "J"
                            },
                            {
                                "id": "condition_1737412625031",
                                "_conditionalView_field": "cancel_reason_list",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "didnt_applied"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1737412563009",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17374126779970.22423214210010021400222",
                                "_field": "other"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1737412688814",
                                "_conditionalView_field": "type_id",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "J"
                            },
                            {
                                "id": "condition_1737412696980",
                                "_conditionalView_field": "why_didnt_applied",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "other"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1735128893443",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17351288955260.0220134230302202024440102",
                                "_action": "action_1735128908214",
                                "_action_label": "Назад",
                                "_action_button_type": "normal",
                                "_action_customRequired": false,
                                "_action_customRequired_fields": null,
                                "_action_icon": "back"
                            },
                            {
                                "id": "17351288980980.024432302431400230223242",
                                "_action": "action_1735128907049",
                                "_action_label": "Ок",
                                "_action_icon": null,
                                "_action_button_type": "accent"
                            }
                        ],
                        "_actions_in_a_row": 2
                    }
                ]
            },
            {
                "id": "step_1734978812247",
                "sysName": "actions",
                "elements": [
                    {
                        "id": "elmnt_1734984160556",
                        "type": "action",
                        "_input_fields": [
                            {
                                "id": "17349841685240.12134040134442012030241"
                            }
                        ],
                        "_actions": [
                            {
                                "id": "17349841710300.04421241044230042041144",
                                "_action": "action_1734983722566",
                                "_action_label": "Подтвердить",
                                "_action_button_type": "accent",
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Заявка подтверждена!",
                                "_action_standardRequired": true,
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1734984196512",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{recruiter.webuser_id.id}},{{recruiter.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1734984198021",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "sf_recruiter"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1734984238314",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "recruiter"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734984161352",
                        "type": "action",
                        "_input_fields": [
                            {
                                "id": "17349842618240.33340014022101133041201"
                            }
                        ],
                        "_actions": [
                            {
                                "id": "17349842660490.01323133143142310044443",
                                "_action": "action_1734983723534",
                                "_action_label": "Подтвердить",
                                "_action_button_type": "accent",
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Заявка подтверждена!",
                                "_action_standardRequired": true,
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1734984289202",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "sf_hr_admin"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1734984327745",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "hr_admin"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1734984161935",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17349843487720.24133420311300214322321",
                                "_action": "action_1734983777511",
                                "_action_label": "Сохранить",
                                "_action_button_type": "accent",
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Данные обновлены!",
                                "_action_standardRequired": true,
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1734984380951",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "sf_hr_admin,hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1734984418157",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "waiting_approval"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1737413513954",
                        "type": "action",
                        "_input_fields": [
                            {
                                "id": "17374135164780.130300242030342443243223"
                            }
                        ],
                        "_actions": [
                            {
                                "id": "17374135206480.44224000212433034210422",
                                "_action": "action_1734983777511",
                                "_action_label": "Сохранить",
                                "_action_button_type": "accent",
                                "_action_customRequired": true,
                                "_action_customRequired_fields": [
                                    "first_work_day"
                                ],
                                "_conditionalView": true,
                                "_action_conditional_disable_or_hide": "hide",
                                "_conditions": [
                                    {
                                        "id": "condition_1737413544894",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{recruiter.webuser_id.id}},{{recruiter.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1737413559258",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "sf_recruiter"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR",
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Данные обновлены!"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1737413582035",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "waiting_approval"
                            }
                        ],
                        "_action_conditionals_manual": "manual"
                    },
                    {
                        "id": "elmnt_1734984166486",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17349844405860.130140311324314332000332",
                                "_action": "action_1734983811614",
                                "_action_label": "Отменить",
                                "_action_button_type": "danger",
                                "_action_oneTime": false,
                                "_action_oneTime_message": "Заявка отменена",
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1734984471111",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "sf_recruiter,sf_tnd"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1734984480936",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "recruiter,hr_admin,waiting_approval"
                            },
                            {
                                "id": "condition_1737365226426",
                                "_conditionalView_field": "type_id",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "J"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1737365077505",
                        "type": "action",
                        "_input_fields": [
                            {
                                "id": "17373650846450.04233133102404330211301"
                            }
                        ],
                        "_actions": [
                            {
                                "id": "17373650870930.30023032311430034300404",
                                "_action": "action_1734983811614",
                                "_action_label": "Отменить",
                                "_action_button_type": "danger",
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1737365126148",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "sf_hrbp"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1737365209719",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "hr_admin,waiting_approval"
                            },
                            {
                                "id": "condition_1737365222936",
                                "_conditionalView_field": "type_id",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "S"
                            }
                        ]
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
                        "hintTitle": "Thank you!",
                        "hintText": "Submitted"
                    }
                ]
            }
        ],
        "general": {
            "edittingOn": true,
            "debugConditions": false
        },
        "state": {
            "step": "{{status}}",
            "popup": ""
        },
        "actions": [
            {
                "id": "action_1734983722566",
                "name": "Подтвердить рекрутер",
                "actionSubmit": true,
                "actionType": "endpoint",
                "endpoint": "sf_actions",
                "mapping": [
                    {
                        "id": "mapping_1734983896641",
                        "field": "action",
                        "value": "change_status"
                    },
                    {
                        "id": "mapping_1734987105645",
                        "field": "pay_load",
                        "value": "hr_admin"
                    }
                ]
            },
            {
                "id": "action_1734983723534",
                "name": "Подтвердить hr admin",
                "actionSubmit": true,
                "actionType": "endpoint",
                "endpoint": "sf_actions",
                "mapping": [
                    {
                        "id": "mapping_1734983931591",
                        "field": "action",
                        "value": "change_status"
                    },
                    {
                        "id": "mapping_1734987125083",
                        "field": "pay_load",
                        "value": "waiting_approval"
                    }
                ]
            },
            {
                "id": "action_1734983777511",
                "name": "Сохранить прием",
                "actionSubmit": true,
                "actionType": "endpoint",
                "endpoint": "sf_actions",
                "mapping": [
                    {
                        "id": "mapping_1734983961491",
                        "field": "action",
                        "value": "save"
                    }
                ]
            },
            {
                "id": "action_1734983811614",
                "name": "Отменить",
                "actionSubmit": true,
                "actionType": "state",
                "endpoint": "sf_actions",
                "mapping": [
                    {
                        "id": "mapping_1734983989524",
                        "field": "action",
                        "value": "cancel"
                    }
                ],
                "stateMapping": [
                    {
                        "id": "stateMapping1735129005018",
                        "field": "FormState.popup",
                        "value": "popup_cancel"
                    }
                ]
            },
            {
                "id": "action_1735121525168",
                "name": "Переназначить",
                "actionType": "endpoint",
                "endpoint": "sf_actions",
                "mapping": [
                    {
                        "id": "mapping_1735121541378",
                        "field": "action",
                        "value": "new_responsible"
                    }
                ],
                "actionSubmit": true
            },
            {
                "id": "action_1735128907049",
                "name": "Ок (cancel)",
                "actionType": "endpoint",
                "endpoint": "sf_actions",
                "mapping": [
                    {
                        "id": "mapping_1735128940778",
                        "field": "action",
                        "value": "cancel"
                    }
                ],
                "actionSubmit": true
            },
            {
                "id": "action_1735128908214",
                "name": "Закрыть popup",
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1735128974266",
                        "field": "FormState.popup"
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
            "array": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "last_change_date",
            "dataType": "date",
            "name": "Дата последнего изменения",
            "id": "61571734609407655",
            "link": "",
            "group": "1734609202257",
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
            "array": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "all_user_ids",
            "dataType": "arrayLink",
            "name": "Все пользователи, относящиеся к заявке",
            "id": "51791734609364162",
            "link": "WebUser",
            "group": "1734609202257",
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
            "array": false,
            "linkOrArrayLinkType": true,
            "linkType": false,
            "arrayLink": true,
            "indexExists": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "responsible_roles",
            "dataType": "array",
            "name": "Ответственные роли",
            "id": "98531734609363365",
            "link": "",
            "group": "1734609202257",
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
            "array": true,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "responsible_employee_id",
            "dataType": "link",
            "name": "Ответственный за текущий этап",
            "id": "51451734609318870",
            "link": "employees",
            "group": "1734609202257",
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
            "array": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "date_text",
            "dataType": "string",
            "name": "Дата",
            "id": "85411734609317979",
            "link": "",
            "group": "1734609202257",
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
            "array": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "date",
            "dataType": "date",
            "name": "Дата создания заявки",
            "id": "47241734609316816",
            "link": "",
            "group": "1734609202257",
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
            "array": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "type_id",
            "dataType": "string",
            "name": "Тип заявки",
            "id": "40291734609209863",
            "link": "",
            "group": "1734609202257",
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
            "array": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "number",
            "dataType": "string",
            "name": "Номер заявки",
            "id": "15731734609209213",
            "link": "",
            "group": "1734609202257",
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
            "sysName": "logs",
            "dataType": "arrayLink",
            "name": "История изменений",
            "id": "53231734609208230",
            "link": "sf_logs",
            "group": "1734609202257",
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
            "linkType": false,
            "arrayLink": true,
            "indexExists": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "user_creator",
            "dataType": "link",
            "name": "Кто создал заявку",
            "id": "71041734609207564",
            "link": "WebUser",
            "group": "1734609202257",
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
            "array": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "last_user",
            "dataType": "link",
            "name": "Кем изменено",
            "id": "83261734609206581",
            "link": "WebUser",
            "group": "1734609202257",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "prev_status",
            "dataType": "link",
            "name": "Предыдущий статус",
            "id": "59791734609205087",
            "link": "sf_statuses",
            "group": "1734609202257",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "status",
            "dataType": "link",
            "name": "Статус",
            "id": "27821734609204081",
            "link": "sf_statuses",
            "group": "1734609202257",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "hr_admin",
            "dataType": "link",
            "name": "Ответственный HR admin",
            "id": "61221734609187779",
            "link": "employees",
            "group": "0",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 21,
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
            "sysName": "hrbp",
            "dataType": "link",
            "name": "Ответственный HRBP",
            "id": "30561734609166720",
            "link": "employees",
            "group": "0",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 20,
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
            "sysName": "recruiter",
            "dataType": "link",
            "name": "Ответственный рекрутер",
            "id": "68441734609158616",
            "link": "employees",
            "group": "0",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 19,
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
            "sysName": "pers_number",
            "dataType": "string",
            "name": "Табельный номер",
            "id": "39881734609137152",
            "link": "",
            "group": "0",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 18,
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
            "sysName": "parent_link",
            "dataType": "string",
            "name": "Ссылка на заявку на оффер/перевод",
            "id": "16221734609136549",
            "link": "",
            "group": "0",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 17,
            "linkIndexFieldSysName": [],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": "webLink",
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
            "sysName": "candidate_photo",
            "dataType": "file",
            "name": "Фото кандидата",
            "id": "25931734609135129",
            "link": "",
            "group": "0",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 16,
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
            "sysName": "documents",
            "dataType": "file",
            "name": "Вложить сканы документов кандидата",
            "id": "74341734609099397",
            "link": "",
            "group": "0",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 15,
            "linkIndexFieldSysName": [],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": "multipleFiles",
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
            "sysName": "vk_dm",
            "dataType": "boolean",
            "name": "Документы канидидата получены через VK КЭДО",
            "id": "30631734609098736",
            "link": "",
            "group": "0",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 14,
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
            "array": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "desire_equipment",
            "dataType": "string",
            "name": "Пожелания к оборудованию",
            "id": "95691734609097453",
            "link": "",
            "group": "0",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 13,
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
            "sysName": "equipment",
            "dataType": "boolean",
            "name": "Нужно выдать оборудование",
            "id": "73991734609096662",
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
            "array": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "pass",
            "dataType": "boolean",
            "name": "Нужен пропуск",
            "id": "27631734609073650",
            "link": "",
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
            "array": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "employment_type",
            "dataType": "link",
            "name": "Тип занятости",
            "id": "83041734609073003",
            "link": "sf_employment_type",
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
            "array": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "direct_fname",
            "dataType": "link",
            "name": "Фамилия и имя руководителя",
            "id": "41341734609071541",
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
            "array": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "position",
            "dataType": "string",
            "name": "Должность",
            "id": "39551734609047649",
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
            "array": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "company",
            "dataType": "link",
            "name": "Юр. лицо",
            "id": "32341734609047022",
            "link": "sf_company",
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
            "array": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "org_structure",
            "dataType": "string",
            "name": "Орг. структура",
            "id": "76331734609045798",
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
            "array": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "division",
            "dataType": "link",
            "name": "Подразделение",
            "id": "25601734609045199",
            "link": "structure",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "id_position",
            "dataType": "string",
            "name": "Код позиции (из УШР)",
            "id": "85561734608991981",
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
            "array": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "vacancy_id",
            "dataType": "string",
            "name": "ID вакансии",
            "id": "33721734608991431",
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
            "array": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "first_work_day",
            "dataType": "date",
            "name": "Дата выхода на работу",
            "id": "11391734608990815",
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
                "isUTC": "true"
            },
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
            "sysName": "candidate_fname",
            "dataType": "string",
            "name": "ФИО кандидата",
            "id": "17441734608990202",
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
            "indexExists": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "cancel_reason",
            "dataType": "string",
            "name": "Укажите причину отмены",
            "id": "30581735128770582",
            "link": null,
            "group": "1735128763546",
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
            "array": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "parent_link_number",
            "dataType": "string",
            "name": "Номер родительской заявки",
            "id": "50771735129535375",
            "link": null,
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 22,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
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
            "sysName": "cancel_reason_list",
            "dataType": "link",
            "name": "Укажите причину отмены",
            "id": "84621737364597613",
            "link": "sf_cancel_reasons",
            "group": "1735128763546",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "other",
            "dataType": "string",
            "name": "Другое",
            "id": "78761737412396526",
            "link": null,
            "group": "1735128763546",
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
            "array": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "why_didnt_applied",
            "dataType": "link",
            "name": "Укажите причину невыхода на работу",
            "id": "17801737412285435",
            "link": "sf_reason_didnt_applied",
            "group": "1735128763546",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "direction_hr_admin",
            "dataType": "link",
            "name": "Направление HR Admin",
            "id": "43361737415636057",
            "link": "sf_hr_admins",
            "group": "0",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 26,
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
            "sysName": "old_first_w_day",
            "dataType": "date",
            "name": "Старая дата выхода",
            "id": "58061737464112775",
            "link": "",
            "group": "0",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 27,
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
                "isUTC": "true"
            },
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
            "sysName": "watchers",
            "dataType": "arrayLink",
            "name": "Наблюдатели",
            "id": "89731738707497468",
            "link": "WebUser",
            "group": "1734609202257",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 14,
            "linkIndexFieldSysName": [],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": {},
            "groupName": null,
            "array": false,
            "linkOrArrayLinkType": true,
            "linkType": false,
            "arrayLink": true,
            "indexExists": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "sf_all_managers",
            "dataType": "arrayLink",
            "name": "Все руководители",
            "id": "33421738754629456",
            "link": "employees",
            "group": "1734609202257",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 16,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "array": false,
            "linkOrArrayLinkType": true,
            "linkType": false,
            "arrayLink": true,
            "indexExists": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "contract_period",
            "dataType": "string",
            "name": "Укажите период",
            "id": "37831739304094042",
            "link": null,
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 29,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
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
            "sysName": "contract_end_date",
            "dataType": "date",
            "name": "Дата окончания договора",
            "id": "92071739303915276",
            "link": "",
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 30,
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
                "isUTC": "true"
            },
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
            "sysName": "contract_type",
            "dataType": "link",
            "name": "Тип договора",
            "id": "78261739303881185",
            "link": "sf_contranct_type",
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 28,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
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
            "sysName": "reason_of_vacancy",
            "dataType": "link",
            "name": "Причина появления вакансии",
            "id": "64151739306956483",
            "link": "sf_reason_of_vacancy",
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 33,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
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
            "sysName": "address",
            "dataType": "string",
            "name": "Адрес доставки оборудования",
            "id": "97111739306955698",
            "link": null,
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 32,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
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
            "sysName": "phone_number",
            "dataType": "string",
            "name": "Номер телефона кандидата",
            "id": "23141739306954801",
            "link": "",
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 31,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
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
                "imask": "{\n    mask: '+{7}(000)000-00-00',\n    lazy: false\n  }",
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
    "data": [
        {
            "number": "SF-J-205776",
            "vk_dm": false,
            "prev_status": {
                "id": "recruiter",
                "status": "Подготовка документов"
            },
            "vacancy_id": "12345",
            "parent_link": "https://lamoda-hr.directual.app/job-offers-list/a775aef5-49be-486e-b478-8e4e9039f13b",
            "first_work_day": 1737406800000,
            "last_change_date": 1738065292000,
            "division": {
                "division_name": "Участок консолидации и упаковки заказов",
                "id": "1419"
            },
            "responsible_employee_id": {
                "webuser_id": {
                    "who_delegated_ids": [
                        ""
                    ],
                    "role": [
                        "hg_recruiter",
                        "demo",
                        "jo_recruiter",
                        "test",
                        "sf_recruiter"
                    ],
                    "whom_delegate_ids": [
                        ""
                    ],
                    "id": "recruiter"
                },
                "id": "recruiter",
                "employee_full_name": "Demo Recruiter"
            },
            "company": {
                "company": "ЛАМОДА ТЕХ",
                "id": "lamoda_tech"
            },
            "candidate_fname": "Тест тестов",
            "responsible_roles": [
                "sf_all_requests",
                "sf_tnd"
            ],
            "id": "12c45593-3145-4c4b-ab68-9434ec0fcd74",
            "all_user_ids": [
                "recruiter"
            ],
            "date": 1738065292000,
            "status": {
                "id": "recruiter",
                "status": "Подготовка документов"
            },
            "sf_all_managers": [
                ""
            ],
            "pass": true,
            "type_id": "J",
            "position": "Специалист",
            "recruiter": {
                "webuser_id": {
                    "who_delegated_ids": [
                        ""
                    ],
                    "role": [
                        "hg_recruiter",
                        "demo",
                        "jo_recruiter",
                        "test",
                        "sf_recruiter"
                    ],
                    "whom_delegate_ids": [
                        ""
                    ],
                    "id": "recruiter"
                },
                "id": "recruiter",
                "employee_full_name": "Demo Recruiter",
                "direct_email": {
                    "id": ""
                }
            },
            "equipment": false,
            "logs": [
                {
                    "user": "Система",
                    "text": "Создание заявки на оформление",
                    "date_display": "28 янв. 2025, 14:54",
                    "id": "82336007-3123-45b1-882f-1c954f3fb02d"
                },
                {
                    "user": "Система",
                    "text": "Подготовка документов. Назначен ответственный: recruiter",
                    "date_display": "28 янв. 2025, 14:54",
                    "id": "31ed0656-0786-4518-a822-bb397ef04d3a"
                }
            ],
            "parent_link_number": "N-4-533320",
            "employment_type": {
                "employment_type": "Офис",
                "id": "fix"
            },
            "id_position": "65438",
            "direct_fname": {
                "id": "direct",
                "employee_full_name": "Demo Direct"
            },
            "org_structure": "Распределительный центр => Складской отдел => Смена №3 => Исходящий поток => Участок консолидации и упаковки заказов"
        }
    ],
    "totalPages": 1,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [
        [
            "id",
            99361448
        ],
        [
            "last_change_date",
            99361448
        ],
        [
            "all_user_ids.id",
            99325452
        ],
        [
            "responsible_roles",
            99361448
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
            "responsible_employee_id.webuser_id.who_delegated_ids.id",
            99325452
        ],
        [
            "responsible_employee_id.webuser_id.email",
            99325452
        ],
        [
            "responsible_employee_id.webuser_id.role",
            99325452
        ],
        [
            "date_text",
            99361448
        ],
        [
            "date",
            99361448
        ],
        [
            "type_id",
            99361448
        ],
        [
            "number",
            99361448
        ],
        [
            "logs.id",
            99361450
        ],
        [
            "logs.date_display",
            99361450
        ],
        [
            "logs.user.id",
            99325452
        ],
        [
            "logs.text",
            99361450
        ],
        [
            "user_creator.id",
            99325452
        ],
        [
            "last_user.id",
            99325452
        ],
        [
            "prev_status.status",
            99361449
        ],
        [
            "prev_status.id",
            99361449
        ],
        [
            "status.status",
            99361449
        ],
        [
            "status.id",
            99361449
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
            "hr_admin.webuser_id.id",
            99325452
        ],
        [
            "hr_admin.webuser_id.whom_delegate_ids.id",
            99325452
        ],
        [
            "hr_admin.webuser_id.who_delegated_ids.id",
            99325452
        ],
        [
            "hr_admin.webuser_id.email",
            99325452
        ],
        [
            "hr_admin.webuser_id.role",
            99325452
        ],
        [
            "hrbp.employee_full_name",
            99325487
        ],
        [
            "hrbp.id",
            99325487
        ],
        [
            "hrbp.webuser_id.id",
            99325452
        ],
        [
            "hrbp.webuser_id.whom_delegate_ids.id",
            99325452
        ],
        [
            "hrbp.webuser_id.who_delegated_ids.id",
            99325452
        ],
        [
            "hrbp.webuser_id.email",
            99325452
        ],
        [
            "hrbp.webuser_id.role",
            99325452
        ],
        [
            "recruiter.id",
            99325487
        ],
        [
            "recruiter.employee_full_name",
            99325487
        ],
        [
            "recruiter.webuser_id.id",
            99325452
        ],
        [
            "recruiter.webuser_id.whom_delegate_ids.id",
            99325452
        ],
        [
            "recruiter.webuser_id.who_delegated_ids.id",
            99325452
        ],
        [
            "recruiter.webuser_id.email",
            99325452
        ],
        [
            "recruiter.webuser_id.role",
            99325452
        ],
        [
            "recruiter.direct_email.id",
            99325487
        ],
        [
            "recruiter.direct_email.employee_full_name",
            99325487
        ],
        [
            "pers_number",
            99361448
        ],
        [
            "parent_link",
            99361448
        ],
        [
            "candidate_photo",
            99361448
        ],
        [
            "documents",
            99361448
        ],
        [
            "vk_dm",
            99361448
        ],
        [
            "desire_equipment",
            99361448
        ],
        [
            "equipment",
            99361448
        ],
        [
            "pass",
            99361448
        ],
        [
            "employment_type.id",
            99361451
        ],
        [
            "employment_type.employment_type",
            99361451
        ],
        [
            "direct_fname.employee_full_name",
            99325487
        ],
        [
            "direct_fname.id",
            99325487
        ],
        [
            "position",
            99361448
        ],
        [
            "company.company",
            99361456
        ],
        [
            "company.id",
            99361456
        ],
        [
            "org_structure",
            99361448
        ],
        [
            "division.id",
            99325488
        ],
        [
            "division.division_name",
            99325488
        ],
        [
            "id_position",
            99361448
        ],
        [
            "vacancy_id",
            99361448
        ],
        [
            "first_work_day",
            99361448
        ],
        [
            "candidate_fname",
            99361448
        ],
        [
            "cancel_reason",
            99361448
        ],
        [
            "parent_link_number",
            99361448
        ],
        [
            "cancel_reason_list.id",
            99366759
        ],
        [
            "other",
            99361448
        ],
        [
            "why_didnt_applied.id",
            99366799
        ],
        [
            "why_didnt_applied.reason",
            99366799
        ],
        [
            "direction_hr_admin.id",
            99366800
        ],
        [
            "old_first_w_day",
            99361448
        ],
        [
            "watchers.id",
            99325452
        ],
        [
            "sf_all_managers.id",
            99325487
        ],
        [
            "contract_period",
            99361448
        ],
        [
            "contract_end_date",
            99361448
        ],
        [
            "contract_type.id",
            99370453
        ],
        [
            "contract_type.contract_type",
            99370453
        ],
        [
            "reason_of_vacancy.id",
            99370454
        ],
        [
            "reason_of_vacancy.employment_type",
            99370454
        ],
        [
            "address",
            99361448
        ],
        [
            "phone_number",
            99361448
        ]
    ],
    "writeFields": [
        "id",
        "hr_admin",
        "hrbp",
        "recruiter",
        "pers_number",
        "candidate_photo",
        "documents",
        "vk_dm",
        "desire_equipment",
        "equipment",
        "pass",
        "employment_type",
        "direct_fname",
        "position",
        "company",
        "org_structure",
        "division",
        "id_position",
        "vacancy_id",
        "first_work_day",
        "candidate_fname",
        "parent_link",
        "cancel_reason",
        "parent_link_number",
        "cancel_reason_list",
        "other",
        "why_didnt_applied",
        "direction_hr_admin",
        "old_first_w_day",
        "watchers",
        "contract_period",
        "contract_end_date",
        "contract_type",
        "reason_of_vacancy",
        "address",
        "phone_number"
    ],
    "structures": {
        "99325452": {
            "networkID": 21335,
            "sysName": "WebUser",
            "name": "App users",
            "id": 99325452,
            "dateCreated": "2024-07-04T06:41:34Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"roles_ad\",\"name\":\"\",\"dataType\":\"arrayLink\",\"id\":\"31521720185270928\",\"link\":\"roles_ad\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"dateLastActivity\",\"name\":\"dateLastActivity\",\"dataType\":\"string\",\"id\":\"10\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"dateCreated\",\"name\":\"dateCreated\",\"dataType\":\"string\",\"id\":\"13\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"isAuthorization\",\"name\":\"isAuthorization\",\"dataType\":\"boolean\",\"id\":\"9\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"notifications_counter\",\"name\":\"Notifications Counter\",\"dataType\":\"string\",\"id\":\"1\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"custom_labels\",\"name\":\"Custom labels\",\"dataType\":\"json\",\"id\":\"2\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":true,\"indexExists\":false},{\"sysName\":\"phone\",\"name\":\"Phone\",\"dataType\":\"string\",\"id\":\"12\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"email\",\"name\":\"Email\",\"dataType\":\"string\",\"id\":\"11\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"userpic\",\"name\":\"User pic\",\"dataType\":\"file\",\"id\":\"3\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":{},\"groupName\":\"Contacts\",\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"id\",\"name\":\"Username (login)\",\"dataType\":\"id\",\"id\":\"15\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"role\",\"name\":\"Roles\",\"dataType\":\"array\",\"id\":\"8\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":true,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"password\",\"name\":\"Password (hash)\",\"dataType\":\"string\",\"id\":\"14\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"firstName\",\"name\":\"First name\",\"dataType\":\"string\",\"id\":\"7\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"lastName\",\"name\":\"Last name\",\"dataType\":\"string\",\"id\":\"6\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"gender\",\"name\":\"Gender\",\"dataType\":\"string\",\"id\":\"5\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"isBlocked\",\"name\":\"Block user\",\"dataType\":\"boolean\",\"id\":\"4\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"systemMessage\",\"name\":\"System message\",\"dataType\":\"string\",\"id\":\"56921641637265680\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"employee\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"65621717669435431\",\"link\":\"employees\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"position\",\"name\":\"Position\",\"dataType\":\"string\",\"id\":\"21611718980485707\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"division\",\"name\":\"Division\",\"dataType\":\"string\",\"id\":\"13761718980504077\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"isActive\",\"name\":\"isActive\",\"dataType\":\"boolean\",\"id\":\"28091718982360994\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"who_delegated_ids\",\"name\":\"Кто делегировал права?\",\"dataType\":\"arrayLink\",\"id\":\"18431723207371481\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"whom_delegate_ids\",\"name\":\"Кому делегировал права?\",\"dataType\":\"arrayLink\",\"id\":\"29491723207412497\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"all_bosses_ids\",\"name\":\"Все руководители вверх по иерархии\",\"dataType\":\"arrayLink\",\"id\":\"45451730474812010\",\"link\":\"employees\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"secret\",\"name\":\"secret\",\"dataType\":\"string\",\"id\":\"81131636839496227\",\"link\":\"\",\"group\":\"1636839487957\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"notif_Email\",\"name\":\"Notify me by Email\",\"dataType\":\"boolean\",\"id\":\"61231639915065277\",\"link\":\"\",\"group\":\"1639915049523\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Yes\",\"No\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"employees_first_day\",\"name\":\"Сотрудники 1 день\",\"dataType\":\"arrayLink\",\"id\":\"77871732470209469\",\"link\":\"onboarding\",\"group\":\"1639915049523\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"json\":false,\"indexExists\":false}]",
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
                "array": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false
            },
            "folderId": null
        },
        "99325487": {
            "networkID": 21335,
            "sysName": "employees",
            "name": "Employees",
            "id": 99325487,
            "dateCreated": "2024-05-14T07:46:19Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"position_name_eng\",\"name\":\"Position name eng\",\"dataType\":\"string\",\"id\":\"14771717094032672\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"direct_last_name\",\"name\":\"Direct Last name\",\"dataType\":\"string\",\"id\":\"20511715675238230\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"webuser_id\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"21401717671535287\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[\"role\"],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":true,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"email\",\"name\":\"Email\",\"dataType\":\"string\",\"id\":\"26531716224439241\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"position\",\"name\":\"Position\",\"dataType\":\"string\",\"id\":\"28531715675330046\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"direct_first_name\",\"name\":\"Direct First name\",\"dataType\":\"string\",\"id\":\"29311715675220848\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"division_name\",\"name\":\"Division name\",\"dataType\":\"string\",\"id\":\"31271717093221879\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"direct_email\",\"name\":\"Direct email\",\"dataType\":\"link\",\"id\":\"36721717097550149\",\"link\":\"employees\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"direct_full_name\",\"name\":\"Direct Full name\",\"dataType\":\"string\",\"id\":\"40141715777939624\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"division_id\",\"name\":\"Division id\",\"dataType\":\"link\",\"id\":\"46921715675477884\",\"link\":\"structure\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"all_managers\",\"name\":\"Все руководители\",\"dataType\":\"arrayLink\",\"id\":\"52201738753592523\",\"link\":\"employees\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"employee_last_name\",\"name\":\"Employee Last name\",\"dataType\":\"string\",\"id\":\"60151715675210149\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"employee_full_name\",\"name\":\"Employee Full name\",\"dataType\":\"string\",\"id\":\"68071715777917101\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"employee_first_name\",\"name\":\"Employee First name\",\"dataType\":\"string\",\"id\":\"68431715675181675\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"position_id\",\"name\":\"Position ID\",\"dataType\":\"string\",\"id\":\"80581717093206114\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false}]",
            "jsonGroupSettings": "[]",
            "jsonViewIdSettings": "[{\"sysName\":\"employee_full_name\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2025-02-05T11:07:06Z",
            "createBy": 23015,
            "changedBy": 23015,
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false
            },
            "folderId": 33820256
        },
        "99325488": {
            "networkID": 21335,
            "sysName": "structure",
            "name": "Structure",
            "id": 99325488,
            "dateCreated": "2024-05-14T07:49:49Z",
            "hidden": false,
            "dateHidden": null,
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false
            },
            "folderId": 33820256
        },
        "99361448": {
            "networkID": 21335,
            "sysName": "staffing",
            "name": "staffing",
            "id": 99361448,
            "dateCreated": "2024-12-19T11:49:44Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"json\":false,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"first_work_day\",\"name\":\"Дата выхода на работу\",\"dataType\":\"date\",\"id\":\"11391734608990815\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.YYYY\",\"timeFormat\":\"\",\"isUTC\":\"true\"},\"groupName\":null,\"array\":false,\"json\":false,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"number\",\"name\":\"Номер заявки\",\"dataType\":\"string\",\"id\":\"15731734609209213\",\"link\":\"\",\"group\":\"1734609202257\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"json\":false,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"parent_link\",\"name\":\"Ссылка на заявку на оффер/перевод\",\"dataType\":\"string\",\"id\":\"16221734609136549\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":17,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"array\":false,\"json\":false,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"candidate_fname\",\"name\":\"ФИО кандидата\",\"dataType\":\"string\",\"id\":\"17441734608990202\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"json\":false,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"why_didnt_applied\",\"name\":\"Укажите причину невыхода на работу\",\"dataType\":\"link\",\"id\":\"17801737412285435\",\"link\":\"sf_reason_didnt_applied\",\"group\":\"1735128763546\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false},{\"sysName\":\"jo_id\",\"name\":\"ID родительской заявки оффер\",\"dataType\":\"link\",\"id\":\"22551737365957080\",\"link\":\"job_offers\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":25,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"json\":false,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false},{\"sysName\":\"phone_number\",\"name\":\"Номер телефона кандидата\",\"dataType\":\"string\",\"id\":\"23141739306954801\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":31,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"phone\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"imask\":\"{\\n    mask: '+{7}(000)000-00-00',\\n    lazy: false\\n  }\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"json\":false,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"division\",\"name\":\"Подразделение\",\"dataType\":\"link\",\"id\":\"25601734609045199\",\"link\":\"structure\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"json\":false,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false},{\"sysName\":\"candidate_email\",\"name\":\"Email сотрудника\",\"dataType\":\"string\",\"id\":\"25791737351747846\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":23,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"json\":false,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"candidate_photo\",\"name\":\"Фото кандидата\",\"dataType\":\"file\",\"id\":\"25931734609135129\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":16,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"json\":false,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"pass\",\"name\":\"Нужен пропуск\",\"dataType\":\"boolean\",\"id\":\"27631734609073650\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Да\",\"Нет\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"json\":false,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"status\",\"name\":\"Статус\",\"dataType\":\"link\",\"id\":\"27821734609204081\",\"link\":\"sf_statuses\",\"group\":\"1734609202257\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"json\":false,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false},{\"sysName\":\"hrbp\",\"name\":\"Ответственный HRBP\",\"dataType\":\"link\",\"id\":\"30561734609166720\",\"link\":\"employees\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":20,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"json\":false,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false},{\"sysName\":\"cancel_reason\",\"name\":\"Укажите причину отмены\",\"dataType\":\"string\",\"id\":\"30581735128770582\",\"link\":null,\"group\":\"1735128763546\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"vk_dm\",\"name\":\"Документы канидидата получены через VK КЭДО\",\"dataType\":\"boolean\",\"id\":\"30631734609098736\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Да\",\"Нет\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"json\":false,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"company\",\"name\":\"Юр. лицо\",\"dataType\":\"link\",\"id\":\"32341734609047022\",\"link\":\"sf_company\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"json\":false,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false},{\"sysName\":\"sf_all_managers\",\"name\":\"Все руководители\",\"dataType\":\"arrayLink\",\"id\":\"33421738754629456\",\"link\":\"employees\",\"group\":\"1734609202257\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":16,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true},{\"sysName\":\"vacancy_id\",\"name\":\"ID вакансии\",\"dataType\":\"string\",\"id\":\"33721734608991431\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"json\":false,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"contract_period\",\"name\":\"Укажите период\",\"dataType\":\"string\",\"id\":\"37831739304094042\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":29,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"position\",\"name\":\"Должность\",\"dataType\":\"string\",\"id\":\"39551734609047649\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"json\":false,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"pers_number\",\"name\":\"Табельный номер\",\"dataType\":\"string\",\"id\":\"39881734609137152\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":18,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"json\":false,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"type_id\",\"name\":\"Тип заявки\",\"dataType\":\"string\",\"id\":\"40291734609209863\",\"link\":\"\",\"group\":\"1734609202257\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"json\":false,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"direct_fname\",\"name\":\"Фамилия и имя руководителя\",\"dataType\":\"link\",\"id\":\"41341734609071541\",\"link\":\"employees\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"json\":false,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false},{\"sysName\":\"direction_hr_admin\",\"name\":\"Направление HR Admin\",\"dataType\":\"link\",\"id\":\"43361737415636057\",\"link\":\"sf_hr_admins\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":26,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"json\":false,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false},{\"sysName\":\"date\",\"name\":\"Дата создания заявки\",\"dataType\":\"date\",\"id\":\"47241734609316816\",\"link\":\"\",\"group\":\"1734609202257\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.YYYY\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"json\":false,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"parent_link_number\",\"name\":\"Номер родительской заявки\",\"dataType\":\"string\",\"id\":\"50771735129535375\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":22,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"responsible_employee_id\",\"name\":\"Ответственный за текущий этап\",\"dataType\":\"link\",\"id\":\"51451734609318870\",\"link\":\"employees\",\"group\":\"1734609202257\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"json\":false,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false},{\"sysName\":\"all_user_ids\",\"name\":\"Все пользователи, относящиеся к заявке\",\"dataType\":\"arrayLink\",\"id\":\"51791734609364162\",\"link\":\"WebUser\",\"group\":\"1734609202257\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"json\":false,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true},{\"sysName\":\"logs\",\"name\":\"История изменений\",\"dataType\":\"arrayLink\",\"id\":\"53231734609208230\",\"link\":\"sf_logs\",\"group\":\"1734609202257\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"json\":false,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true},{\"sysName\":\"old_first_w_day\",\"name\":\"Старая дата выхода\",\"dataType\":\"date\",\"id\":\"58061737464112775\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":27,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.YYYY\",\"timeFormat\":\"\",\"isUTC\":\"true\"},\"groupName\":null,\"array\":false,\"json\":false,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"prev_status\",\"name\":\"Предыдущий статус\",\"dataType\":\"link\",\"id\":\"59791734609205087\",\"link\":\"sf_statuses\",\"group\":\"1734609202257\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"json\":false,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false},{\"sysName\":\"hr_admin\",\"name\":\"Ответственный HR admin\",\"dataType\":\"link\",\"id\":\"61221734609187779\",\"link\":\"employees\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":21,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"json\":false,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false},{\"sysName\":\"last_change_date\",\"name\":\"Дата последнего изменения\",\"dataType\":\"date\",\"id\":\"61571734609407655\",\"link\":\"\",\"group\":\"1734609202257\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.YYYY\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"json\":false,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"reason_of_vacancy\",\"name\":\"Причина появления вакансии\",\"dataType\":\"link\",\"id\":\"64151739306956483\",\"link\":\"sf_reason_of_vacancy\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":33,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false},{\"sysName\":\"recruiter\",\"name\":\"Ответственный рекрутер\",\"dataType\":\"link\",\"id\":\"68441734609158616\",\"link\":\"employees\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":19,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"json\":false,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false},{\"sysName\":\"user_creator\",\"name\":\"Кто создал заявку\",\"dataType\":\"link\",\"id\":\"71041734609207564\",\"link\":\"WebUser\",\"group\":\"1734609202257\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"json\":false,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false},{\"sysName\":\"equipment\",\"name\":\"Нужно выдать оборудование\",\"dataType\":\"boolean\",\"id\":\"73991734609096662\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Да\",\"Нет\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"json\":false,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"documents\",\"name\":\"Вложить сканы документов кандидата\",\"dataType\":\"file\",\"id\":\"74341734609099397\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"multipleFiles\",\"formatOptions\":{},\"groupName\":null,\"array\":false,\"json\":false,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"org_structure\",\"name\":\"Орг. структура\",\"dataType\":\"string\",\"id\":\"76331734609045798\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"json\":false,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"contract_type\",\"name\":\"Тип договора\",\"dataType\":\"link\",\"id\":\"78261739303881185\",\"link\":\"sf_contranct_type\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":28,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false},{\"sysName\":\"other\",\"name\":\"Другое\",\"dataType\":\"string\",\"id\":\"78761737412396526\",\"link\":null,\"group\":\"1735128763546\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"st_id\",\"name\":\"ID родительской заявки перевод\",\"dataType\":\"link\",\"id\":\"81381737365888635\",\"link\":\"staff_transfer\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":24,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"json\":false,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false},{\"sysName\":\"watchers_logs\",\"name\":\"Логи наблюдатели\",\"dataType\":\"arrayLink\",\"id\":\"82371738710513477\",\"link\":\"sf_watchers_logs\",\"group\":\"1734609202257\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"json\":false,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true},{\"sysName\":\"employment_type\",\"name\":\"Тип занятости\",\"dataType\":\"link\",\"id\":\"83041734609073003\",\"link\":\"sf_employment_type\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"json\":false,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false},{\"sysName\":\"last_user\",\"name\":\"Кем изменено\",\"dataType\":\"link\",\"id\":\"83261734609206581\",\"link\":\"WebUser\",\"group\":\"1734609202257\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"json\":false,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false},{\"sysName\":\"cancel_reason_list\",\"name\":\"Укажите причину отмены\",\"dataType\":\"link\",\"id\":\"84621737364597613\",\"link\":\"sf_cancel_reasons\",\"group\":\"1735128763546\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"json\":false,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false},{\"sysName\":\"date_text\",\"name\":\"Дата\",\"dataType\":\"string\",\"id\":\"85411734609317979\",\"link\":\"\",\"group\":\"1734609202257\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"json\":false,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"id_position\",\"name\":\"Код позиции (из УШР)\",\"dataType\":\"string\",\"id\":\"85561734608991981\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"json\":false,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"filter_on_me\",\"name\":\"На мне\",\"dataType\":\"link\",\"id\":\"89561737706548079\",\"link\":\"staffing\",\"group\":\"1734609202257\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"json\":false,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false},{\"sysName\":\"watchers\",\"name\":\"Наблюдатели\",\"dataType\":\"arrayLink\",\"id\":\"89731738707497468\",\"link\":\"WebUser\",\"group\":\"1734609202257\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"json\":false,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true},{\"sysName\":\"contract_end_date\",\"name\":\"Дата окончания договора\",\"dataType\":\"date\",\"id\":\"92071739303915276\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":30,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.YYYY\",\"timeFormat\":\"\",\"isUTC\":\"true\"},\"groupName\":null,\"array\":false,\"json\":false,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"desire_equipment\",\"name\":\"Пожелания к оборудованию\",\"dataType\":\"string\",\"id\":\"95691734609097453\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"json\":false,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"address\",\"name\":\"Адрес доставки оборудования\",\"dataType\":\"string\",\"id\":\"97111739306955698\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":32,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"responsible_roles\",\"name\":\"Ответственные роли\",\"dataType\":\"array\",\"id\":\"98531734609363365\",\"link\":\"\",\"group\":\"1734609202257\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":true,\"json\":false,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false}]",
            "jsonGroupSettings": "[{\"id\":1734609202257,\"name\":\"New Group 1\",\"order\":0},{\"id\":1735128763546,\"name\":\"Отмена\",\"order\":1}]",
            "jsonViewIdSettings": null,
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2025-02-11T21:18:16Z",
            "createBy": 23015,
            "changedBy": 23015,
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false
            },
            "folderId": 33830768
        },
        "99361449": {
            "networkID": 21335,
            "sysName": "sf_statuses",
            "name": "sf_statuses",
            "id": 99361449,
            "dateCreated": "2024-12-19T13:24:13Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"next_status_ids\",\"name\":\"Допустимый следующий статус\",\"dataType\":\"arrayLink\",\"id\":\"27461729716723723\",\"link\":\"sf_statuses\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"status\",\"name\":\"Cтатус\",\"dataType\":\"string\",\"id\":\"68061716237170513\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false}]",
            "jsonGroupSettings": "[]",
            "jsonViewIdSettings": "[{\"sysName\":\"status\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false,\"onlinePriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-12-19T13:28:30Z",
            "createBy": 23015,
            "changedBy": 23015,
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false
            },
            "folderId": 33830769
        },
        "99361450": {
            "networkID": 21335,
            "sysName": "sf_logs",
            "name": "sf_logs",
            "id": 99361450,
            "dateCreated": "2024-12-19T13:24:28Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"date\",\"name\":\"Дата изменения\",\"dataType\":\"date\",\"id\":\"58751717136726535\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"text\",\"name\":\"Изменение заявки\",\"dataType\":\"string\",\"id\":\"13041717136793732\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"user\",\"name\":\"Кто внес изменения\",\"dataType\":\"link\",\"id\":\"83101717136837464\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"ticket\",\"name\":\"Номер заявки\",\"dataType\":\"link\",\"id\":\"45681717136838095\",\"link\":\"staffing\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"date_display\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"87491717137718793\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false}]",
            "jsonGroupSettings": "[]",
            "jsonViewIdSettings": null,
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false,\"onlinePriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2025-01-29T11:57:51Z",
            "createBy": 23015,
            "changedBy": 23015,
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false
            },
            "folderId": 33834261
        },
        "99361451": {
            "networkID": 21335,
            "sysName": "sf_employment_type",
            "name": "sf_employment_type",
            "id": 99361451,
            "dateCreated": "2024-12-19T13:24:58Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"employment_type\",\"dataType\":\"string\",\"name\":\"Тип занятости\",\"id\":\"11211716226454609\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false}]",
            "jsonGroupSettings": "[]",
            "jsonViewIdSettings": "[{\"sysName\":\"employment_type\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false,\"onlinePriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-12-20T16:24:49Z",
            "createBy": 23015,
            "changedBy": 23015,
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false
            },
            "folderId": 33830769
        },
        "99361456": {
            "networkID": 21335,
            "sysName": "sf_company",
            "name": "sf_company",
            "id": 99361456,
            "dateCreated": "2024-12-19T13:26:21Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"company\",\"name\":\"Company\",\"dataType\":\"string\",\"id\":\"29941731661341049\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false}]",
            "jsonGroupSettings": "[]",
            "jsonViewIdSettings": "[{\"sysName\":\"company\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false,\"onlinePriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-12-20T16:26:17Z",
            "createBy": 23015,
            "changedBy": 23015,
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false
            },
            "folderId": 33830769
        },
        "99366759": {
            "networkID": 21335,
            "sysName": "sf_cancel_reasons",
            "name": "sf_cancel_reasons",
            "id": 99366759,
            "dateCreated": "2025-01-20T09:19:38Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"reason\",\"dataType\":\"string\",\"name\":\"Причина\",\"id\":\"55841737364860668\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"reason\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2025-01-20T09:21:10Z",
            "createBy": 23015,
            "changedBy": 23015,
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false
            },
            "folderId": 33830769
        },
        "99366799": {
            "networkID": 21335,
            "sysName": "sf_reason_didnt_applied",
            "name": "sf_reason_didnt_applied",
            "id": 99366799,
            "dateCreated": "2025-01-20T22:29:21Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"reason\",\"name\":\"Причина\",\"dataType\":\"string\",\"id\":\"78541737412244357\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"reason\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2025-01-20T22:30:55Z",
            "createBy": 23015,
            "changedBy": 23015,
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false
            },
            "folderId": 33830769
        },
        "99366800": {
            "networkID": 21335,
            "sysName": "sf_hr_admins",
            "name": "sf_hr_admins",
            "id": 99366800,
            "dateCreated": "2025-01-20T23:18:38Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"direction\",\"dataType\":\"string\",\"name\":\"Направление\",\"id\":\"78311737415124689\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"direction\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2025-01-20T23:19:22Z",
            "createBy": 23015,
            "changedBy": 23015,
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false
            },
            "folderId": 33830769
        },
        "99370453": {
            "networkID": 21335,
            "sysName": "sf_contranct_type",
            "name": "sf_contranct_type",
            "id": 99370453,
            "dateCreated": "2025-02-11T20:05:42Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"contract_type\",\"dataType\":\"string\",\"name\":\"Тип договора\",\"id\":\"22691716226346260\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false}]",
            "jsonGroupSettings": "[]",
            "jsonViewIdSettings": "[{\"sysName\":\"contract_type\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false,\"onlinePriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2025-02-11T20:08:27Z",
            "createBy": 23015,
            "changedBy": 23015,
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false
            },
            "folderId": 33830769
        },
        "99370454": {
            "networkID": 21335,
            "sysName": "sf_reason_of_vacancy",
            "name": "sf_reason_of_vacancy",
            "id": 99370454,
            "dateCreated": "2025-02-11T20:51:53Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"reason\",\"name\":\"Reason\",\"dataType\":\"string\",\"id\":\"15771715691639283\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false}]",
            "jsonGroupSettings": "[]",
            "jsonViewIdSettings": "[{\"sysName\":\"reason\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false,\"onlinePriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2025-02-11T20:55:35Z",
            "createBy": 23015,
            "changedBy": 23015,
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false
            },
            "folderId": 33830769
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "hr_admin",
            "dataType": "link",
            "name": "Ответственный HR admin",
            "id": "61221734609187779",
            "link": "employees",
            "group": "0",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 21,
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
            "sysName": "hrbp",
            "dataType": "link",
            "name": "Ответственный HRBP",
            "id": "30561734609166720",
            "link": "employees",
            "group": "0",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 20,
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
            "sysName": "recruiter",
            "dataType": "link",
            "name": "Ответственный рекрутер",
            "id": "68441734609158616",
            "link": "employees",
            "group": "0",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 19,
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
            "sysName": "pers_number",
            "dataType": "string",
            "name": "Табельный номер",
            "id": "39881734609137152",
            "link": "",
            "group": "0",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 18,
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
            "sysName": "candidate_photo",
            "dataType": "file",
            "name": "Фото кандидата",
            "id": "25931734609135129",
            "link": "",
            "group": "0",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 16,
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
            "sysName": "documents",
            "dataType": "file",
            "name": "Вложить сканы документов кандидата",
            "id": "74341734609099397",
            "link": "",
            "group": "0",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 15,
            "linkIndexFieldSysName": [],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": "multipleFiles",
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
            "sysName": "vk_dm",
            "dataType": "boolean",
            "name": "Документы канидидата получены через VK КЭДО",
            "id": "30631734609098736",
            "link": "",
            "group": "0",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 14,
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
            "array": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "desire_equipment",
            "dataType": "string",
            "name": "Пожелания к оборудованию",
            "id": "95691734609097453",
            "link": "",
            "group": "0",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 13,
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
            "sysName": "equipment",
            "dataType": "boolean",
            "name": "Нужно выдать оборудование",
            "id": "73991734609096662",
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
            "array": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "pass",
            "dataType": "boolean",
            "name": "Нужен пропуск",
            "id": "27631734609073650",
            "link": "",
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
            "array": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "employment_type",
            "dataType": "link",
            "name": "Тип занятости",
            "id": "83041734609073003",
            "link": "sf_employment_type",
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
            "array": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "direct_fname",
            "dataType": "link",
            "name": "Фамилия и имя руководителя",
            "id": "41341734609071541",
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
            "array": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "position",
            "dataType": "string",
            "name": "Должность",
            "id": "39551734609047649",
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
            "array": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "company",
            "dataType": "link",
            "name": "Юр. лицо",
            "id": "32341734609047022",
            "link": "sf_company",
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
            "array": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "org_structure",
            "dataType": "string",
            "name": "Орг. структура",
            "id": "76331734609045798",
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
            "array": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "division",
            "dataType": "link",
            "name": "Подразделение",
            "id": "25601734609045199",
            "link": "structure",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "id_position",
            "dataType": "string",
            "name": "Код позиции (из УШР)",
            "id": "85561734608991981",
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
            "array": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "vacancy_id",
            "dataType": "string",
            "name": "ID вакансии",
            "id": "33721734608991431",
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
            "array": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "first_work_day",
            "dataType": "date",
            "name": "Дата выхода на работу",
            "id": "11391734608990815",
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
                "isUTC": "true"
            },
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
            "sysName": "candidate_fname",
            "dataType": "string",
            "name": "ФИО кандидата",
            "id": "17441734608990202",
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
            "indexExists": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "parent_link",
            "dataType": "string",
            "name": "Ссылка на заявку на оффер/перевод",
            "id": "16221734609136549",
            "link": "",
            "group": "0",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 17,
            "linkIndexFieldSysName": [],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": "webLink",
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
            "sysName": "cancel_reason",
            "dataType": "string",
            "name": "Укажите причину отмены",
            "id": "30581735128770582",
            "link": null,
            "group": "1735128763546",
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
            "array": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "parent_link_number",
            "dataType": "string",
            "name": "Номер родительской заявки",
            "id": "50771735129535375",
            "link": null,
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 22,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
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
            "sysName": "cancel_reason_list",
            "dataType": "link",
            "name": "Укажите причину отмены",
            "id": "84621737364597613",
            "link": "sf_cancel_reasons",
            "group": "1735128763546",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "other",
            "dataType": "string",
            "name": "Другое",
            "id": "78761737412396526",
            "link": null,
            "group": "1735128763546",
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
            "array": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "why_didnt_applied",
            "dataType": "link",
            "name": "Укажите причину невыхода на работу",
            "id": "17801737412285435",
            "link": "sf_reason_didnt_applied",
            "group": "1735128763546",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "direction_hr_admin",
            "dataType": "link",
            "name": "Направление HR Admin",
            "id": "43361737415636057",
            "link": "sf_hr_admins",
            "group": "0",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 26,
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
            "sysName": "old_first_w_day",
            "dataType": "date",
            "name": "Старая дата выхода",
            "id": "58061737464112775",
            "link": "",
            "group": "0",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 27,
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
                "isUTC": "true"
            },
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
            "sysName": "watchers",
            "dataType": "arrayLink",
            "name": "Наблюдатели",
            "id": "89731738707497468",
            "link": "WebUser",
            "group": "1734609202257",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 14,
            "linkIndexFieldSysName": [],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": {},
            "groupName": null,
            "array": false,
            "linkOrArrayLinkType": true,
            "linkType": false,
            "arrayLink": true,
            "indexExists": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "contract_period",
            "dataType": "string",
            "name": "Укажите период",
            "id": "37831739304094042",
            "link": null,
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 29,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
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
            "sysName": "contract_end_date",
            "dataType": "date",
            "name": "Дата окончания договора",
            "id": "92071739303915276",
            "link": "",
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 30,
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
                "isUTC": "true"
            },
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
            "sysName": "contract_type",
            "dataType": "link",
            "name": "Тип договора",
            "id": "78261739303881185",
            "link": "sf_contranct_type",
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 28,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
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
            "sysName": "reason_of_vacancy",
            "dataType": "link",
            "name": "Причина появления вакансии",
            "id": "64151739306956483",
            "link": "sf_reason_of_vacancy",
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 33,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
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
            "sysName": "address",
            "dataType": "string",
            "name": "Адрес доставки оборудования",
            "id": "97111739306955698",
            "link": null,
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 32,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
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
            "sysName": "phone_number",
            "dataType": "string",
            "name": "Номер телефона кандидата",
            "id": "23141739306954801",
            "link": "",
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 31,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
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
                "imask": "{\n    mask: '+{7}(000)000-00-00',\n    lazy: false\n  }",
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
    "role": "jo_recruiter,jo_agreement,hg_cnb,hg_agreement,hg_hrbp",
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
