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
    "sl": "hiring",
    "pageSize": "10",
    "headerField": null,
    "params": {
        "steps": [
            {
                "id": "step_1732185137168",
                "sysName": "progress bar",
                "sectionVisibility": "always",
                "elements": [
                    {
                        "id": "elmnt_1732185158960",
                        "type": "text",
                        "paraText": "<style>.lmd-offer p {margin:10px 0}</style>\n<div classs=\"lmd\">\n<h2>Заявка {{number}}</h2>\n<p>Дата создания: {{date}}</p>\n<p>Статус заявки: {{status.status}}</p>\n<p>Кем создано: {{user_creator.employee_full_name}}</p>\n  <p>Ответственный за этап: {{responsible_employee_id.employee_full_name}}</p>\n<p>Дата последнего изменения:\n  {{last_change_date}}</p>\n</div>"
                    },
                    {
                        "id": "elmnt_1732185209565",
                        "type": "steps",
                        "_formSteps": {
                            "stepsOrder": [
                                "approval_direct",
                                "approval_up_direct",
                                "approval_hrbp",
                                "add_approval_1",
                                "add_approval_2",
                                "approval_cnb",
                                "approval_budget_holder",
                                "teamlead",
                                "recruitment",
                                "closed"
                            ],
                            "settings": {
                                "steps": {
                                    "approval_up_direct": true,
                                    "approval_hrbp": true,
                                    "add_approval_1": true,
                                    "approval_cnb": true,
                                    "approval_budget_holder": true,
                                    "teamlead": true,
                                    "recruitment": true,
                                    "add_approval_2": true,
                                    "closed": true,
                                    "approval_direct": true
                                }
                            },
                            "stepSettings": {
                                "approval_up_direct": {
                                    "title": "Согласование с верхнеуровневым руководителем"
                                },
                                "approval_hrbp": {
                                    "title": "Согласование с HRBP"
                                },
                                "add_approval_1": {
                                    "title": "Согласование с доп согласующим 1"
                                },
                                "add_approval_2": {
                                    "title": "Согласование с доп согласующим 2"
                                },
                                "approval_cnb": {
                                    "title": "Согласование с C&B"
                                },
                                "approval_budget_holder": {
                                    "title": "Подтверждение от держателя бюджета"
                                },
                                "teamlead": {
                                    "title": "Назначение рекрутера"
                                },
                                "recruitment": {
                                    "title": "Вакансия в работе"
                                },
                                "closed": {
                                    "title": "Заявка закрыта"
                                },
                                "approval_direct": {
                                    "title": "Согласование с нанимающим менеджером"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "id": "step_copy_1733209576847",
                "sysName": "approval_direct",
                "elements": [
                    {
                        "id": "elmnt_1732102953656",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321029550580.133131331113240321214422",
                                "_field": "conf_search",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732535758391",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732535784795",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR",
                                "_field_add_tooltip": true,
                                "_field_tooltip_text": "Вакансия не будет публиковаться в открытых ресурсах"
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": []
                    },
                    {
                        "id": "elmnt_1732103048806",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321031578130.32404212133424222404414",
                                "_field": "reason_vacancy",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_reason_of_vacancy",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732535911926",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    },
                                    {
                                        "id": "condition_1732535922786",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732186397301",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321864096900.12403132324044310231021",
                                "_field": "replacement_status",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_replacement_status",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732535951752",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732535963696",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732186497701",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "replacement,another_company"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732186514664",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321865258300.104014414310000003102322",
                                "_field": "resigning_empl_full_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_action_conditionals_manual": "manual",
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732536000587",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732536054794",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732186544827",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "replacement"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732186571711",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321865732680.13024433240441420043002",
                                "_field": "resigning_empl_full_name_strng",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732536099255",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}} ",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732536115918",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732186583095",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "another_company"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732186618606",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321866201540.003120001043112441403343",
                                "_field": "position_release_date",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732536146789",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732536165541",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732186627349",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "replacement,another_company"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732186650611",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321866608570.13422121424022220002211",
                                "_field": "position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732536288241",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732536303765",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732186669394",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321866710570.110224133130311040030424",
                                "_field": "company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_company",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732536338475",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732536353281",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732186693964",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321866956970.23040120334134102231413",
                                "_field": "need_virtual_team",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732536385868",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732536407598",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR",
                                "_field_add_tooltip": true,
                                "_field_tooltip_text": "Виртуальная команда необходима только для вакансий TECH"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732186703094",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321867067050.03133412032322314421003",
                                "_field": "virtual_team",
                                "_field_link_type": "select",
                                "_field_link_pageSize": 0,
                                "_field_arrayLink_endpoint": "hg_virtual_team",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732536441726",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732536452862",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732186720962",
                                "_conditionalView_field": "need_virtual_team",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732186704096",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321867390680.014431431330314444101444",
                                "_field": "virtual_team_other",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732536488877",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732536507353",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732186751162",
                                "_conditionalView_field": "need_virtual_team",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1732186765116",
                                "_conditionalView_field": "virtual_team",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "other"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732186791298",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321868482970.044143002024001003233441",
                                "_field": "division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732536544294",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732536557302",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    },
                                    {
                                        "id": "condition_1732801206194",
                                        "_conditionalView_field": "replacement_status",
                                        "_conditionalView_operator": "in",
                                        "_conditionalView_value": "quit,current_position"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732186874382",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{org_structure}}"
                    },
                    {
                        "id": "elmnt_1732186878779",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321869167520.01423103234404403113404",
                                "_field": "contract_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_contract_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732536848537",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732536869834",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732186929496",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321869318010.3224123421432413431123",
                                "_field": "contract_period",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732536905148",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732536921563",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732187382687",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732186949351",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321869514690.142232223210102001122243",
                                "_field": "reason_contract",
                                "_field_link_type": "select",
                                "_field_required": true,
                                "_field_arrayLink_endpoint": "hg_reason_fixed_contract_type",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732536978549",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732537013249",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732187404603",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732520095714",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325200989910.3102041421103433332404",
                                "_field": "job_rate",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732537056209",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732537070885",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732520096906",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325201156720.022230334023403213323321",
                                "_field": "employment_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_employment_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732537114946",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732537135221",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732520097615",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325201384320.34200233433300230322122",
                                "_field": "work_place",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732537179334",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732537195934",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732520147649",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325201510340.030201004302233010434101",
                                "_field": "work_schedule",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732537243469",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    },
                                    {
                                        "id": "condition_1732537254452",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732520148382",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325201589280.124414204232201042314442",
                                "_field": "salary",
                                "_field_required": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732537329368",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732537331502",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR",
                                "_field_set_debounce": true,
                                "_field_debounce_value": 500
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732520149115",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325201735870.12001221433220412000202",
                                "_field": "period_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_period_bonus",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732537488636",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732537516697",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732520183183",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325201912710.12440033144103421421201",
                                "_field": "per_bonus",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732538123898",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732538145402",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR",
                                "_field_set_debounce": true,
                                "_field_debounce_value": 500
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732520206833",
                                "_conditionalView_field": "period_bonus",
                                "_conditionalView_operator": "isNotNull"
                            },
                            {
                                "id": "condition_1732520224583",
                                "_conditionalView_field": "period_bonus",
                                "_conditionalView_operator": "!==",
                                "_conditionalView_value": "whithout_bonus"
                            }
                        ],
                        "_action_conditionals_and_or": "AND"
                    },
                    {
                        "id": "elmnt_1732520262007",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325202710370.024413240441042110204434",
                                "_field": "responsibilities",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732538310465",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732538331916",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732520263316",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325202806100.31124421041232210202033",
                                "_field": "prof_skills",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732538398041",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732538416534",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732520288637",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325202902760.31201223442344121324023",
                                "_field": "candidate_description",
                                "_field_required": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732538443750",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732538456831",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732520308766",
                        "type": "text",
                        "paraText": "<b>Участники процесса согласования</b>"
                    },
                    {
                        "id": "elmnt_1732520389784",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325203919490.21002142312021004132014",
                                "_field": "hr_bp_creator",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526339757",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325263419810.10010144210430101111114",
                                "_field": "user_creator",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732520417366",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325204222130.31412423322320220223311",
                                "_field": "manager",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732520457523",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325204730650.13101303040412122233233",
                                "_field": "up_manager",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732520499732",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325205012190.114243320004242404302443",
                                "_field": "hr_bp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732648686199",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732648712342",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "default_step",
                "sysName": "approval_up_direct",
                "elements": [
                    {
                        "id": "elmnt_1732102953656",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321029550580.133131331113240321214422",
                                "_field": "conf_search",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732535758391",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{up_manager.webuser_id.whom_delegate_ids}},{{up_manager.webuser_id.id}},{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732535784795",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR",
                                "_field_add_tooltip": true,
                                "_field_tooltip_text": "Вакансия не будет публиковаться в открытых ресурсах"
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": []
                    },
                    {
                        "id": "elmnt_1732103048806",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321031578130.32404212133424222404414",
                                "_field": "reason_vacancy",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_reason_of_vacancy",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732535911926",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    },
                                    {
                                        "id": "condition_1732535922786",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{up_manager.webuser_id.whom_delegate_ids}},{{up_manager.webuser_id.id}},{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732186397301",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321864096900.12403132324044310231021",
                                "_field": "replacement_status",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_replacement_status",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732535951752",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{up_manager.webuser_id.whom_delegate_ids}},{{up_manager.webuser_id.id}},{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732535963696",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732186497701",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "replacement,another_company"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732186514664",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321865258300.104014414310000003102322",
                                "_field": "resigning_empl_full_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_action_conditionals_manual": "manual",
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732536000587",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{up_manager.webuser_id.whom_delegate_ids}},{{up_manager.webuser_id.id}},{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732536054794",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732186544827",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "replacement"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732186571711",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321865732680.13024433240441420043002",
                                "_field": "resigning_empl_full_name_strng",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732536099255",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{up_manager.webuser_id.whom_delegate_ids}},{{up_manager.webuser_id.id}},{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}} ",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732536115918",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732186583095",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "another_company"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732186618606",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321866201540.003120001043112441403343",
                                "_field": "position_release_date",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732536146789",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{up_manager.webuser_id.whom_delegate_ids}},{{up_manager.webuser_id.id}},{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732536165541",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732186627349",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "replacement,another_company"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732186650611",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321866608570.13422121424022220002211",
                                "_field": "position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732536288241",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{up_manager.webuser_id.whom_delegate_ids}},{{up_manager.webuser_id.id}},{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732536303765",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732186669394",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321866710570.110224133130311040030424",
                                "_field": "company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_company",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732536338475",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{up_manager.webuser_id.whom_delegate_ids}},{{up_manager.webuser_id.id}},{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732536353281",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732186693964",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321866956970.23040120334134102231413",
                                "_field": "need_virtual_team",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732536385868",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{up_manager.webuser_id.whom_delegate_ids}},{{up_manager.webuser_id.id}},{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732536407598",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR",
                                "_field_add_tooltip": true,
                                "_field_tooltip_text": "Виртуальная команда необходима только для вакансий TECH"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732186703094",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321867067050.03133412032322314421003",
                                "_field": "virtual_team",
                                "_field_link_type": "select",
                                "_field_link_pageSize": 0,
                                "_field_arrayLink_endpoint": "hg_virtual_team",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732536441726",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{up_manager.webuser_id.whom_delegate_ids}},{{up_manager.webuser_id.id}},{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732536452862",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732186720962",
                                "_conditionalView_field": "need_virtual_team",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732186704096",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321867390680.014431431330314444101444",
                                "_field": "virtual_team_other",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732536488877",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{up_manager.webuser_id.whom_delegate_ids}},{{up_manager.webuser_id.id}},{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732536507353",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732186751162",
                                "_conditionalView_field": "need_virtual_team",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1732186765116",
                                "_conditionalView_field": "virtual_team",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "other"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732186791298",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321868482970.044143002024001003233441",
                                "_field": "division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732536544294",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{up_manager.webuser_id.whom_delegate_ids}},{{up_manager.webuser_id.id}},{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732536557302",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    },
                                    {
                                        "id": "condition_1732801206194",
                                        "_conditionalView_field": "replacement_status",
                                        "_conditionalView_operator": "in",
                                        "_conditionalView_value": "quit,current_position"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732186874382",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{org_structure}}"
                    },
                    {
                        "id": "elmnt_1732186878779",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321869167520.01423103234404403113404",
                                "_field": "contract_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_contract_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732536848537",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{up_manager.webuser_id.whom_delegate_ids}},{{up_manager.webuser_id.id}},{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732536869834",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732186929496",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321869318010.3224123421432413431123",
                                "_field": "contract_period",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732536905148",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{up_manager.webuser_id.whom_delegate_ids}},{{up_manager.webuser_id.id}},{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732536921563",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732187382687",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732186949351",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321869514690.142232223210102001122243",
                                "_field": "reason_contract",
                                "_field_link_type": "select",
                                "_field_required": true,
                                "_field_arrayLink_endpoint": "hg_reason_fixed_contract_type",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732536978549",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{up_manager.webuser_id.whom_delegate_ids}},{{up_manager.webuser_id.id}},{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732537013249",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732187404603",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732520095714",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325200989910.3102041421103433332404",
                                "_field": "job_rate",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732537056209",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{up_manager.webuser_id.whom_delegate_ids}},{{up_manager.webuser_id.id}},{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732537070885",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732520096906",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325201156720.022230334023403213323321",
                                "_field": "employment_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_employment_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732537114946",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{up_manager.webuser_id.whom_delegate_ids}},{{up_manager.webuser_id.id}},{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732537135221",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732520097615",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325201384320.34200233433300230322122",
                                "_field": "work_place",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732537179334",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{up_manager.webuser_id.whom_delegate_ids}},{{up_manager.webuser_id.id}},{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732537195934",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732520147649",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325201510340.030201004302233010434101",
                                "_field": "work_schedule",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732537243469",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    },
                                    {
                                        "id": "condition_1732537254452",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{up_manager.webuser_id.whom_delegate_ids}},{{up_manager.webuser_id.id}},{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732520148382",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325201589280.124414204232201042314442",
                                "_field": "salary",
                                "_field_required": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732537329368",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{up_manager.webuser_id.whom_delegate_ids}},{{up_manager.webuser_id.id}},{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732537331502",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR",
                                "_field_set_debounce": true,
                                "_field_debounce_value": 500
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732520149115",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325201735870.12001221433220412000202",
                                "_field": "period_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_period_bonus",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732537488636",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{up_manager.webuser_id.whom_delegate_ids}},{{up_manager.webuser_id.id}},{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732537516697",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732520183183",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325201912710.12440033144103421421201",
                                "_field": "per_bonus",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732538123898",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{up_manager.webuser_id.whom_delegate_ids}},{{up_manager.webuser_id.id}},{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732538145402",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR",
                                "_field_set_debounce": true,
                                "_field_debounce_value": 500
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732520206833",
                                "_conditionalView_field": "period_bonus",
                                "_conditionalView_operator": "isNotNull"
                            },
                            {
                                "id": "condition_1732520224583",
                                "_conditionalView_field": "period_bonus",
                                "_conditionalView_operator": "!==",
                                "_conditionalView_value": "whithout_bonus"
                            }
                        ],
                        "_action_conditionals_and_or": "AND"
                    },
                    {
                        "id": "elmnt_1732520262007",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325202710370.024413240441042110204434",
                                "_field": "responsibilities",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732538310465",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{up_manager.webuser_id.whom_delegate_ids}},{{up_manager.webuser_id.id}},{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732538331916",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732520263316",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325202806100.31124421041232210202033",
                                "_field": "prof_skills",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732538398041",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{up_manager.webuser_id.whom_delegate_ids}},{{up_manager.webuser_id.id}},{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732538416534",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732520288637",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325202902760.31201223442344121324023",
                                "_field": "candidate_description",
                                "_field_required": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732538443750",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{up_manager.webuser_id.whom_delegate_ids}},{{up_manager.webuser_id.id}},{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732538456831",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732520308766",
                        "type": "text",
                        "paraText": "<b>Участники процесса согласования</b>"
                    },
                    {
                        "id": "elmnt_1732520389784",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325203919490.21002142312021004132014",
                                "_field": "hr_bp_creator",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526339757",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325263419810.10010144210430101111114",
                                "_field": "user_creator",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732520417366",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325204222130.31412423322320220223311",
                                "_field": "manager",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732520457523",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325204730650.13101303040412122233233",
                                "_field": "up_manager",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732520499732",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325205012190.114243320004242404302443",
                                "_field": "hr_bp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732648686199",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{up_manager.webuser_id.whom_delegate_ids}},{{up_manager.webuser_id.id}},{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732648712342",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_1732185224392",
                "sysName": "approval_hrbp",
                "elements": [
                    {
                        "id": "elmnt_1732522709882",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325227171270.021440113020403112121103",
                                "_field": "conf_search",
                                "_field_required": true,
                                "_field_add_tooltip": true,
                                "_field_tooltip_text": "Вакансия не будет публиковаться в открытых ресурсах",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732660567572",
                                        "_conditionalView_value": "hg_hrbp",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains"
                                    },
                                    {
                                        "id": "condition_1732660600754",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.id}},{{hr_bp.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522710625",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325227306210.30342241104330113024443",
                                "_field": "reason_vacancy",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_reason_of_vacancy",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732659440152",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.id}},{{hr_bp.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732659441561",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": []
                    },
                    {
                        "id": "elmnt_1732522712125",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325227540980.031203402433040303004342",
                                "_field": "replacement_status",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_replacement_status",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732659476128",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.id}},{{hr_bp.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732659478103",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732694358042",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "replacement,another_company"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522712865",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325227661190.14234213244213004413133",
                                "_field": "resigning_empl_full_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732659511296",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.id}},{{hr_bp.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732659513471",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732694378216",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "replacement"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522713599",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325227953600.2132330401333100442143",
                                "_field": "resigning_empl_full_name_strng",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732659547404",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.id}},{{hr_bp.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732659560237",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732694419800",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "another_company"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522801958",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325228141500.123340021202113043420343",
                                "_field": "position_release_date",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732659586278",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.id}},{{hr_bp.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732659587670",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732694452059",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "replacement,another_company"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522803323",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325228358970.32433313311121402044002",
                                "_field": "position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732659626713",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.id}},{{hr_bp.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732659639302",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522802625",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325228225780.20331220141113244332024",
                                "_field": "company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_company",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732659667662",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.id}},{{hr_bp.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732659679704",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522804113",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325228549140.012121231203123001412211",
                                "_field": "need_virtual_team",
                                "_field_required": true,
                                "_field_add_tooltip": true,
                                "_field_tooltip_text": "Виртуальная команда необходима только для вакансий TECH",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732659744928",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.id}},{{hr_bp.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732659758631",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522860657",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325228644190.02331412014322044020034",
                                "_field": "virtual_team",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_virtual_team",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732659788687",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.id}},{{hr_bp.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732659790498",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732694505443",
                                "_conditionalView_field": "need_virtual_team",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522878779",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325228805180.2400134211311333000003",
                                "_field": "virtual_team_other",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732659834090",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.id}},{{hr_bp.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732659835737",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732694534476",
                                "_conditionalView_field": "need_virtual_team",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1732694545610",
                                "_conditionalView_field": "virtual_team",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "other"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522861373",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325229005820.40132202401002221013024",
                                "_field": "division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732659877062",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.id}},{{hr_bp.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732659891484",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_hrbp"
                                    },
                                    {
                                        "id": "condition_1732801240553",
                                        "_conditionalView_field": "replacement_status",
                                        "_conditionalView_operator": "in",
                                        "_conditionalView_value": "quit,current_position"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522862089",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{org_structure}}"
                    },
                    {
                        "id": "elmnt_1732522862831",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325251828420.11441130130442300442441",
                                "_field": "vacancy_id",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732691189539",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.id}},{{hr_bp.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732691207332",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732525191037",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325252013450.103323401332210230244413",
                                "_field": "id_position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732691238812",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.id}},{{hr_bp.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732691240538",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732525968928",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325259829310.20024203143014113412023",
                                "_field": "contract_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_contract_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732696320799",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.id}},{{hr_bp.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732696322665",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732525970526",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325260025820.34241223330343140340012",
                                "_field": "contract_period",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732696359466",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.id}},{{hr_bp.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732696361116",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732526013693",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732525971308",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325260539640.020230124310004011120124",
                                "_field": "reason_contract",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_reason_fixed_contract_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732696397548",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.id}},{{hr_bp.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732696399365",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732526073392",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732525973027",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325260996210.0023324424140102214131423",
                                "_field": "job_rate",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732696430533",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.id}},{{hr_bp.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732696431783",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_value": "hg_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732525973942",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325261192000.24033141233331402341103",
                                "_field": "employment_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_employment_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732696475219",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.id}},{{hr_bp.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732696492000",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526131392",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325261489730.43011031002032221114",
                                "_field": "work_place",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732696531315",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.id}},{{hr_bp.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732696532600",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526132308",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325261587970.40434201132011220104313",
                                "_field": "work_schedule",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732696575765",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.id}},{{hr_bp.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732696577265",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526156009",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325261656250.101001211310001201333043",
                                "_field": "salary",
                                "_field_required": true,
                                "_field_set_debounce": true,
                                "_field_debounce_value": 500,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732696613279",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.id}},{{hr_bp.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732696615136",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526157143",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325261823280.42223144314222101001141",
                                "_field": "period_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_period_bonus",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732696667716",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.id}},{{hr_bp.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732696669250",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526173029",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325262014160.34233132010343233440001",
                                "_field": "per_bonus",
                                "_field_required": true,
                                "_field_set_debounce": true,
                                "_field_debounce_value": 500,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732696711348",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.id}},{{hr_bp.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732696718984",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732526218258",
                                "_conditionalView_field": "period_bonus",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "without_bonus"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526239942",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325262532160.2321123031134220324103",
                                "_field": "hide_income",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732696783659",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.id}},{{hr_bp.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732696785899",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR",
                                "_field_add_tooltip": true,
                                "_field_tooltip_text": "Поля дохода будут скрыты от нанимающего менеджера, его руководителя и доп.согласующих"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732869372148",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "hg_cnb,hg_hrbp"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526241042",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325262708150.4334321032323433123203",
                                "_field": "responsibilities",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732696844016",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.id}},{{hr_bp.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732696846230",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526241808",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325262786790.32332434404241140232024",
                                "_field": "prof_skills",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732696902286",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.id}},{{hr_bp.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true,
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn"
                                    },
                                    {
                                        "id": "condition_1732696904530",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526242799",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325262908540.201313200400010411331223",
                                "_field": "candidate_description",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732696949747",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.id}},{{hr_bp.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732696952757",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526296942",
                        "type": "text",
                        "paraText": "<b>Участники процесса согласования</b>"
                    },
                    {
                        "id": "elmnt_1732526297841",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325263844770.32424013300243111010004",
                                "_field": "hr_bp_creator",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526298615",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325264171950.23441434332241300432",
                                "_field": "user_creator",
                                "_field_link_type": "complexSelect",
                                "_field_required": false,
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526448085",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325264502420.44320210143332401141331",
                                "_field": "manager",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526486708",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325264925140.30002312121203141400121",
                                "_field": "up_manager",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526505725",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325265293170.213302002014110332220133",
                                "_field": "hr_bp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732697101402",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{responsible_employee_id.webuser_id.whom_delegate_ids}},{{responsible_employee_id.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732697104380",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732697165144",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17326971691780.3320422203311112100141",
                                "_action": "action_1732651863436",
                                "_action_icon": "refresh",
                                "_action_button_type": "accent",
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Новый ответственный назначен",
                                "_action_addTooltip": true,
                                "_action_addTooltip_text": "Если согласование данной заявки не входит в Вашу зону ответственности, то проверьте матрицу и переназначьте заявку",
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1732697239663",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{responsible_employee_id.webuser_id.whom_delegate_ids}},{{responsible_employee_id.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732697258973",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526544899",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325265489340.034224432214204342033224",
                                "_field": "add_approval_1",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732697538062",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.id}},{{hr_bp.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732697540161",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526545935",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325265698590.33011201413442301303023",
                                "_field": "approval_1",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732697608088",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.id}},{{hr_bp.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732697610345",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732526592874",
                                "_conditionalView_field": "add_approval_1",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "{\"add\":true}"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526546857",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325266953080.211304432113120144240042",
                                "_field": "add_approval_2",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732697659102",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.id}},{{hr_bp.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732697672245",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732526707391",
                                "_conditionalView_field": "add_approval_1",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "{\"add\":true}"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526726674",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325267286440.11440002103024040314431",
                                "_field": "approval_2",
                                "_field_link_type": "complexSelect",
                                "_field_required": true,
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732697717065",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.id}},{{hr_bp.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732697719654",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732526751993",
                                "_conditionalView_field": "add_approval_2",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "{\"add\":true}"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526774196",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325267850250.30324103201013411302141",
                                "_field": "cnb",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732697783294",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.id}},{{hr_bp.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732697786294",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526782163",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325268012700.2404041140043023323421",
                                "_field": "budget_holder",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732697837899",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.id}},{{hr_bp.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732697840460",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526783141",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325268186860.22443241124233232431112",
                                "_field": "teamlead",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732697900887",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.id}},{{hr_bp.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732697904659",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_copy_1732652730074",
                "sysName": "add_approval_1",
                "elements": [
                    {
                        "id": "elmnt_1732102953656",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321029550580.133131331113240321214422",
                                "_field": "conf_search",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR",
                                "_field_add_tooltip": true,
                                "_field_tooltip_text": "Вакансия не будет публиковаться в открытых ресурсах"
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": []
                    },
                    {
                        "id": "elmnt_1732103048806",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321031578130.32404212133424222404414",
                                "_field": "reason_vacancy",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_reason_of_vacancy",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732186397301",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321864096900.12403132324044310231021",
                                "_field": "replacement_status",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_replacement_status",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732186497701",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "replacement,another_company"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732186514664",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321865258300.104014414310000003102322",
                                "_field": "resigning_empl_full_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_action_conditionals_manual": "manual",
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732186544827",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "replacement"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732186571711",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321865732680.13024433240441420043002",
                                "_field": "resigning_empl_full_name_strng",
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
                                "id": "condition_1732186583095",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "another_company"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732186618606",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321866201540.003120001043112441403343",
                                "_field": "position_release_date",
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
                                "id": "condition_1732186627349",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "replacement,another_company"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732186650611",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321866608570.13422121424022220002211",
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
                        "id": "elmnt_1732186669394",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321866710570.110224133130311040030424",
                                "_field": "company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_company",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732186693964",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321866956970.23040120334134102231413",
                                "_field": "need_virtual_team",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR",
                                "_field_add_tooltip": true,
                                "_field_tooltip_text": "Виртуальная команда необходима только для вакансий TECH"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732186703094",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321867067050.03133412032322314421003",
                                "_field": "virtual_team",
                                "_field_link_type": "select",
                                "_field_link_pageSize": 0,
                                "_field_arrayLink_endpoint": "hg_virtual_team",
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
                                "id": "condition_1732186720962",
                                "_conditionalView_field": "need_virtual_team",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732186704096",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321867390680.014431431330314444101444",
                                "_field": "virtual_team_other",
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
                                "id": "condition_1732186751162",
                                "_conditionalView_field": "need_virtual_team",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1732186765116",
                                "_conditionalView_field": "virtual_team",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "other"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732186791298",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321868482970.044143002024001003233441",
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
                        "id": "elmnt_1732186874382",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{org_structure}}"
                    },
                    {
                        "id": "elmnt_1732186878779",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321869167520.01423103234404403113404",
                                "_field": "contract_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_contract_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732186929496",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321869318010.3224123421432413431123",
                                "_field": "contract_period",
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
                                "id": "condition_1732187382687",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732186949351",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321869514690.142232223210102001122243",
                                "_field": "reason_contract",
                                "_field_link_type": "select",
                                "_field_required": true,
                                "_field_arrayLink_endpoint": "hg_reason_fixed_contract_type",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732187404603",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732520095714",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325200989910.3102041421103433332404",
                                "_field": "job_rate",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732520096906",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325201156720.022230334023403213323321",
                                "_field": "employment_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_employment_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732520097615",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325201384320.34200233433300230322122",
                                "_field": "work_place",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732520147649",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325201510340.030201004302233010434101",
                                "_field": "work_schedule",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732520148382",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325201589280.124414204232201042314442",
                                "_field": "salary",
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
                                "id": "condition_1732653163321",
                                "_conditionalView_field": "hide_income",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "false"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732520149115",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325201735870.12001221433220412000202",
                                "_field": "period_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_period_bonus",
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
                                "id": "condition_1732700038683",
                                "_conditionalView_field": "hide_income",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "false"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732520183183",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325201912710.12440033144103421421201",
                                "_field": "per_bonus",
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
                                "id": "condition_1732520206833",
                                "_conditionalView_field": "period_bonus",
                                "_conditionalView_operator": "isNotNull"
                            },
                            {
                                "id": "condition_1732520224583",
                                "_conditionalView_field": "period_bonus",
                                "_conditionalView_operator": "!==",
                                "_conditionalView_value": "whithout_bonus"
                            },
                            {
                                "id": "condition_1732700058899",
                                "_conditionalView_field": "hide_income",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "false"
                            }
                        ],
                        "_action_conditionals_and_or": "AND"
                    },
                    {
                        "id": "elmnt_1732520262007",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325202710370.024413240441042110204434",
                                "_field": "responsibilities",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732520263316",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325202806100.31124421041232210202033",
                                "_field": "prof_skills",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732520288637",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325202902760.31201223442344121324023",
                                "_field": "candidate_description",
                                "_field_required": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732520308766",
                        "type": "text",
                        "paraText": "<b>Участники процесса согласования</b>"
                    },
                    {
                        "id": "elmnt_1732520389784",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325203919490.21002142312021004132014",
                                "_field": "hr_bp_creator",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526339757",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325263419810.10010144210430101111114",
                                "_field": "user_creator",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732520417366",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325204222130.31412423322320220223311",
                                "_field": "manager",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732520457523",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325204730650.13101303040412122233233",
                                "_field": "up_manager",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732520499732",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325205012190.114243320004242404302443",
                                "_field": "hr_bp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_copy_1732700160902",
                "sysName": "add_approval_2",
                "elements": [
                    {
                        "id": "elmnt_1732102953656",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321029550580.133131331113240321214422",
                                "_field": "conf_search",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR",
                                "_field_add_tooltip": true,
                                "_field_tooltip_text": "Вакансия не будет публиковаться в открытых ресурсах"
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": []
                    },
                    {
                        "id": "elmnt_1732103048806",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321031578130.32404212133424222404414",
                                "_field": "reason_vacancy",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_reason_of_vacancy",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732186397301",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321864096900.12403132324044310231021",
                                "_field": "replacement_status",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_replacement_status",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732186497701",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "replacement,another_company"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732186514664",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321865258300.104014414310000003102322",
                                "_field": "resigning_empl_full_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_action_conditionals_manual": "manual",
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732186544827",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "replacement"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732186571711",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321865732680.13024433240441420043002",
                                "_field": "resigning_empl_full_name_strng",
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
                                "id": "condition_1732186583095",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "another_company"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732186618606",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321866201540.003120001043112441403343",
                                "_field": "position_release_date",
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
                                "id": "condition_1732186627349",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "replacement,another_company"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732186650611",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321866608570.13422121424022220002211",
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
                        "id": "elmnt_1732186669394",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321866710570.110224133130311040030424",
                                "_field": "company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_company",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732186693964",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321866956970.23040120334134102231413",
                                "_field": "need_virtual_team",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR",
                                "_field_add_tooltip": true,
                                "_field_tooltip_text": "Виртуальная команда необходима только для вакансий TECH"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732186703094",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321867067050.03133412032322314421003",
                                "_field": "virtual_team",
                                "_field_link_type": "select",
                                "_field_link_pageSize": 0,
                                "_field_arrayLink_endpoint": "hg_virtual_team",
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
                                "id": "condition_1732186720962",
                                "_conditionalView_field": "need_virtual_team",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732186704096",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321867390680.014431431330314444101444",
                                "_field": "virtual_team_other",
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
                                "id": "condition_1732186751162",
                                "_conditionalView_field": "need_virtual_team",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1732186765116",
                                "_conditionalView_field": "virtual_team",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "other"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732186791298",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321868482970.044143002024001003233441",
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
                        "id": "elmnt_1732186874382",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{org_structure}}"
                    },
                    {
                        "id": "elmnt_1732186878779",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321869167520.01423103234404403113404",
                                "_field": "contract_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_contract_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732186929496",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321869318010.3224123421432413431123",
                                "_field": "contract_period",
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
                                "id": "condition_1732187382687",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732186949351",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17321869514690.142232223210102001122243",
                                "_field": "reason_contract",
                                "_field_link_type": "select",
                                "_field_required": true,
                                "_field_arrayLink_endpoint": "hg_reason_fixed_contract_type",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732187404603",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732520095714",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325200989910.3102041421103433332404",
                                "_field": "job_rate",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732520096906",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325201156720.022230334023403213323321",
                                "_field": "employment_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_employment_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732520097615",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325201384320.34200233433300230322122",
                                "_field": "work_place",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732520147649",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325201510340.030201004302233010434101",
                                "_field": "work_schedule",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732520148382",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325201589280.124414204232201042314442",
                                "_field": "salary",
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
                                "id": "condition_1732653163321",
                                "_conditionalView_field": "hide_income",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "false"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732520149115",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325201735870.12001221433220412000202",
                                "_field": "period_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_period_bonus",
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
                                "id": "condition_1732700038683",
                                "_conditionalView_field": "hide_income",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "false"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732520183183",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325201912710.12440033144103421421201",
                                "_field": "per_bonus",
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
                                "id": "condition_1732520206833",
                                "_conditionalView_field": "period_bonus",
                                "_conditionalView_operator": "isNotNull"
                            },
                            {
                                "id": "condition_1732520224583",
                                "_conditionalView_field": "period_bonus",
                                "_conditionalView_operator": "!==",
                                "_conditionalView_value": "whithout_bonus"
                            },
                            {
                                "id": "condition_1732700058899",
                                "_conditionalView_field": "hide_income",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "false"
                            }
                        ],
                        "_action_conditionals_and_or": "AND"
                    },
                    {
                        "id": "elmnt_1732520262007",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325202710370.024413240441042110204434",
                                "_field": "responsibilities",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732520263316",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325202806100.31124421041232210202033",
                                "_field": "prof_skills",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732520288637",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325202902760.31201223442344121324023",
                                "_field": "candidate_description",
                                "_field_required": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732520308766",
                        "type": "text",
                        "paraText": "<b>Участники процесса согласования</b>"
                    },
                    {
                        "id": "elmnt_1732520389784",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325203919490.21002142312021004132014",
                                "_field": "hr_bp_creator",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526339757",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325263419810.10010144210430101111114",
                                "_field": "user_creator",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732520417366",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325204222130.31412423322320220223311",
                                "_field": "manager",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732520457523",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325204730650.13101303040412122233233",
                                "_field": "up_manager",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732520499732",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325205012190.114243320004242404302443",
                                "_field": "hr_bp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_copy_1732701550655",
                "sysName": "approval_cnb",
                "elements": [
                    {
                        "id": "elmnt_1732522709882",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325227171270.021440113020403112121103",
                                "_field": "conf_search",
                                "_field_required": true,
                                "_field_add_tooltip": true,
                                "_field_tooltip_text": "Вакансия не будет публиковаться в открытых ресурсах",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522710625",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325227306210.30342241104330113024443",
                                "_field": "reason_vacancy",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_reason_of_vacancy",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": []
                    },
                    {
                        "id": "elmnt_1732522712125",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325227540980.031203402433040303004342",
                                "_field": "replacement_status",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_replacement_status",
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
                                "id": "condition_1732694358042",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "replacement,another_company"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522712865",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325227661190.14234213244213004413133",
                                "_field": "resigning_empl_full_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
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
                                "id": "condition_1732694378216",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "replacement"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522713599",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325227953600.2132330401333100442143",
                                "_field": "resigning_empl_full_name_strng",
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
                                "id": "condition_1732694419800",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "another_company"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522801958",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325228141500.123340021202113043420343",
                                "_field": "position_release_date",
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
                                "id": "condition_1732694452059",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "replacement,another_company"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732701703769",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17327017059640.24040032114431303211341",
                                "_field": "budget_date",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732701716334",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{cnb.webuser_id.id}},{{cnb.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732701717990",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_cnb"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522803323",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325228358970.32433313311121402044002",
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
                        "id": "elmnt_1732701834139",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17327018364170.41240333110212003141223",
                                "_field": "position_name",
                                "_field_use_mask": false,
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732701849927",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{cnb.webuser_id.id}},{{cnb.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732701851462",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_cnb"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522802625",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325228225780.20331220141113244332024",
                                "_field": "company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_company",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522804113",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325228549140.012121231203123001412211",
                                "_field": "need_virtual_team",
                                "_field_required": true,
                                "_field_add_tooltip": true,
                                "_field_tooltip_text": "Виртуальная команда необходима только для вакансий TECH",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522860657",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325228644190.02331412014322044020034",
                                "_field": "virtual_team",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_virtual_team",
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
                                "id": "condition_1732694505443",
                                "_conditionalView_field": "need_virtual_team",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522878779",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325228805180.2400134211311333000003",
                                "_field": "virtual_team_other",
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
                                "id": "condition_1732694534476",
                                "_conditionalView_field": "need_virtual_team",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1732694545610",
                                "_conditionalView_field": "virtual_team",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "other"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522861373",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325229005820.40132202401002221013024",
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
                        "id": "elmnt_1732522862089",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{org_structure}}"
                    },
                    {
                        "id": "elmnt_1732522862831",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325251828420.11441130130442300442441",
                                "_field": "vacancy_id",
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
                                "id": "condition_1732702069248",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "hg_hrbp,hg_cnb,hg_orgdev,hg_recruiter"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732525191037",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325252013450.103323401332210230244413",
                                "_field": "id_position",
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
                                "id": "condition_1732702316120",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "hg_hrbp,hg_cnb,hg_orgdev,hg_recruiter"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732525211643",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325252208810.104344314403334111312322",
                                "_field": "org_dev",
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
                                "id": "condition_1732702339053",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "hg_hrbp,hg_cnb,hg_orgdev,hg_recruiter"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732525212870",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325252345920.13021021334134343113",
                                "_field": "select_structure",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_select_structure",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditions": [],
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732702425671",
                                "_conditionalView_field": "org_dev",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1732702440581",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "hg_hrbp,hg_cnb,hg_orgdev,hg_recruiter"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732525213553",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325252559190.22321401122114313331043",
                                "_field": "structures_difference",
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
                                "id": "condition_1732691936495",
                                "_conditionalView_field": "select_structure",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "both_structures"
                            },
                            {
                                "id": "condition_1732702966313",
                                "_conditionalView_field": "org_dev",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1732702981286",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "hg_hrbp,hg_cnb,hg_orgdev,hg_recruiter"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732691506342",
                        "type": "text",
                        "paraText": "<style>\n.custom_container {\n      display: flex;\n      gap: 20px;\n    }\n\n    .custom_column {\n      flex: 1; /* Оба столбца будут равной ширины */\n    }\n</style>\n<div class=\"custom_container\">\n    <div class=\"custom_column\">\n      <p><b>Управленческая структура</b></p>\n    </div>\n    <div class=\"custom_column\">\n      <p><b>Юридическая структура</b>\n      </p>\n    </div>\n  </div>",
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732691859420",
                                "_conditionalView_field": "select_structure",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "both_structures"
                            },
                            {
                                "id": "condition_1732702999027",
                                "_conditionalView_field": "org_dev",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1732703014346",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "hg_hrbp,hg_cnb,hg_orgdev,hg_recruiter"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732525741391",
                        "type": "text",
                        "paraText": "<b>Управленческая структура</b>",
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732525783910",
                                "_conditionalView_field": "select_structure",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "management_structure"
                            },
                            {
                                "id": "condition_1732703030264",
                                "_conditionalView_field": "org_dev",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1732703066379",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "hg_hrbp,hg_cnb,hg_orgdev,hg_recruiter"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732525815092",
                        "type": "text",
                        "paraText": "<b>Юридическая структура</b>",
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732525849943",
                                "_conditionalView_field": "select_structure",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "legal_structure"
                            },
                            {
                                "id": "condition_1732703084566",
                                "_conditionalView_field": "org_dev",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1732703086287",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "hg_hrbp,hg_cnb,hg_orgdev,hg_recruiter"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732692471653",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17326924807090.10031314133323320412124",
                                "_field": "management_division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR",
                                "_conditionalView_disable_or_hide": "disable"
                            },
                            {
                                "id": "17326925049640.14402333431030202402323",
                                "_conditionalView": true,
                                "_field": "legal_division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_field_required": true,
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR",
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ],
                        "_input_fields_in_a_row": 2,
                        "_input_fields_in_a_row_column": "row",
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732693322036",
                                "_conditionalView_field": "select_structure",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "both_structures"
                            },
                            {
                                "id": "condition_1732703197711",
                                "_conditionalView_field": "org_dev",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1732703214076",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "hg_hrbp,hg_cnb,hg_orgdev,hg_recruiter"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732692474734",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17326934241000.21402121331241032322403",
                                "_field": "management_position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR",
                                "_field_set_debounce": true,
                                "_field_debounce_value": 1000
                            },
                            {
                                "id": "17326934265720.04230223421422403231021",
                                "_field": "legal_position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_input_fields_in_a_row": 2,
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732693580694",
                                "_conditionalView_field": "select_structure",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "both_structures"
                            },
                            {
                                "id": "condition_1732703251117",
                                "_conditionalView_field": "org_dev",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1732703253106",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "hg_hrbp,hg_cnb,hg_orgdev,hg_recruiter"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732692476887",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17326936284660.14242211424312431120114",
                                "_field": "management_direct",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            },
                            {
                                "id": "17326936329910.30114400003001024330133",
                                "_field": "legal_direct",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_input_fields_in_a_row": 2,
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732693762410",
                                "_conditionalView_field": "select_structure",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "both_structures"
                            },
                            {
                                "id": "condition_1732703302284",
                                "_conditionalView_field": "org_dev",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1732703304389",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "hg_hrbp,hg_cnb,hg_orgdev,hg_recruiter"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732525247922",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325252877230.234024210004223312343",
                                "_field": "management_division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            },
                            {
                                "id": "17325252895320.213202401300122440233133",
                                "_field": "management_position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            },
                            {
                                "id": "17325253127680.212411204030202234400022",
                                "_field": "management_direct",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_hidden": false,
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_input_fields_in_a_row": 3,
                        "_input_fields_in_a_row_column": "column",
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732525387593",
                                "_conditionalView_field": "select_structure",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "management_structure"
                            },
                            {
                                "id": "condition_1732703367096",
                                "_conditionalView_field": "org_dev",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1732703369426",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "hg_hrbp,hg_cnb,hg_orgdev,hg_recruiter"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732525249070",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325253180980.24032231321443333103442",
                                "_field": "legal_division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            },
                            {
                                "id": "17325253199200.0304412142423220404304",
                                "_field": "legal_position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            },
                            {
                                "id": "17325253204920.34442033124200340001403",
                                "_field": "legal_direct",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_input_fields_in_a_row": 3,
                        "_input_fields_in_a_row_column": "column",
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732525606243",
                                "_conditionalView_field": "select_structure",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "legal_structure"
                            },
                            {
                                "id": "condition_1732703433395",
                                "_conditionalView_field": "org_dev",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1732703436535",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "hg_hrbp,hg_cnb,hg_orgdev,hg_recruiter"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732525968928",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325259829310.20024203143014113412023",
                                "_field": "contract_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_contract_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732525970526",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325260025820.34241223330343140340012",
                                "_field": "contract_period",
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
                                "id": "condition_1732526013693",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732525971308",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325260539640.020230124310004011120124",
                                "_field": "reason_contract",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_reason_fixed_contract_type",
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
                                "id": "condition_1732526073392",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732525973027",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325260996210.0023324424140102214131423",
                                "_field": "job_rate",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732525973942",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325261192000.24033141233331402341103",
                                "_field": "employment_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_employment_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526131392",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325261489730.43011031002032221114",
                                "_field": "work_place",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526132308",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325261587970.40434201132011220104313",
                                "_field": "work_schedule",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732703647255",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17327036538510.100300303222440304030344",
                                "_field": "analytics_ops",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_analytics_for_ops",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732703679741",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{cnb.webuser_id.id}},{{cnb.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732703682537",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_cnb"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732703649938",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17327037630880.0233233313304202314303",
                                "_field": "cost_center",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732703777405",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{cnb.webuser_id.id}},{{cnb.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732703780304",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_cnb"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526156009",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325261656250.101001211310001201333043",
                                "_field": "salary",
                                "_field_required": true,
                                "_field_set_debounce": true,
                                "_field_debounce_value": 500,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732696615136",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_cnb"
                                    },
                                    {
                                        "id": "condition_1732703900442",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{cnb.webuser_id.id}},{{cnb.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732704065991",
                                "_conditionalView_field": "hide_income",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1732704090434",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "hg_hrbp,hg_cnb,hg_orgdev,hg_recruiter"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732704060585",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17327041171320.44110144044433102302123",
                                "_field": "salary",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732704131509",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{cnb.webuser_id.id}},{{cnb.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732704136993",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_cnb"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR",
                                "_field_set_debounce": true,
                                "_field_debounce_value": 500
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732704142795",
                                "_conditionalView_field": "hide_income",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "false"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526157143",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325261823280.42223144314222101001141",
                                "_field": "period_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_period_bonus",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732696667716",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{cnb.webuser_id.id}},{{cnb.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732696669250",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_cnb"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732704316327",
                                "_conditionalView_field": "hide_income",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1732704340512",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "hg_hrbp,hg_cnb,hg_orgdev,hg_recruiter"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732704231927",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17327042765230.3121413144102123341123",
                                "_field": "period_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_period_bonus",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732704385878",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{cnb.webuser_id.id}},{{cnb.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732704388678",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_cnb"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732704447925",
                                "_conditionalView_field": "hide_income",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "false"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526173029",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325262014160.34233132010343233440001",
                                "_field": "per_bonus",
                                "_field_required": true,
                                "_field_set_debounce": true,
                                "_field_debounce_value": 500,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732696711348",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{cnb.webuser_id.id}},{{cnb.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732696718984",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_cnb"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732526218258",
                                "_conditionalView_field": "period_bonus",
                                "_conditionalView_operator": "!==",
                                "_conditionalView_value": "without_bonus"
                            },
                            {
                                "id": "condition_1732704695247",
                                "_conditionalView_field": "hide_income",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1732704720385",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "hg_hrbp,hg_cnb,hg_orgdev,hg_recruiter"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732704234976",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17327045165510.1004101113134411144112",
                                "_field": "per_bonus",
                                "_field_required": true,
                                "_field_set_debounce": true,
                                "_field_debounce_value": 500,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732704765482",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{cnb.webuser_id.id}},{{cnb.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732704769065",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_cnb"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732704823059",
                                "_conditionalView_field": "hide_income",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "false"
                            },
                            {
                                "id": "condition_1732862776040",
                                "_conditionalView_field": "period_bonus",
                                "_conditionalView_operator": "!==",
                                "_conditionalView_value": "without_bonus"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732704246582",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17327048634810.30411420132403220222321",
                                "_field": "comment_salary",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732704901112",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{cnb.webuser_id.id}},{{cnb.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732704904467",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_cnb"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732704956967",
                                "_conditionalView_field": "hide_income",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1732704961466",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "hg_hrbp,hg_cnb,hg_orgdev,hg_recruiter"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732704270086",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17327048842900.4022141412311202133244",
                                "_field": "comment_salary",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732705016900",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_cnb"
                                    },
                                    {
                                        "id": "condition_1732705020599",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{cnb.webuser_id.id}},{{cnb.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732705027166",
                                "_conditionalView_field": "hide_income",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "false"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526239942",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325262532160.2321123031134220324103",
                                "_field": "hide_income",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR",
                                "_field_add_tooltip": true,
                                "_field_tooltip_text": "Поля дохода будут скрыты от нанимающего менеджера, его руководителя и доп.согласующих"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732869651610",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "hg_cnb,hg_hrbp"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526241042",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325262708150.4334321032323433123203",
                                "_field": "responsibilities",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526241808",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325262786790.32332434404241140232024",
                                "_field": "prof_skills",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526242799",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325262908540.201313200400010411331223",
                                "_field": "candidate_description",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526296942",
                        "type": "text",
                        "paraText": "<b>Участники процесса согласования</b>"
                    },
                    {
                        "id": "elmnt_1732526297841",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325263844770.32424013300243111010004",
                                "_field": "hr_bp_creator",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526298615",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325264171950.23441434332241300432",
                                "_field": "user_creator",
                                "_field_link_type": "complexSelect",
                                "_field_required": false,
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526448085",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325264502420.44320210143332401141331",
                                "_field": "manager",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526486708",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325264925140.30002312121203141400121",
                                "_field": "up_manager",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526505725",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325265293170.213302002014110332220133",
                                "_field": "hr_bp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526544899",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325265489340.034224432214204342033224",
                                "_field": "add_approval_1",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526545935",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325265698590.33011201413442301303023",
                                "_field": "approval_1",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
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
                                "id": "condition_1732526592874",
                                "_conditionalView_field": "add_approval_1",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "{\"add\":true}"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526546857",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325266953080.211304432113120144240042",
                                "_field": "add_approval_2",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732526707391",
                                "_conditionalView_field": "add_approval_1",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "{\"add\":true}"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526726674",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325267286440.11440002103024040314431",
                                "_field": "approval_2",
                                "_field_link_type": "complexSelect",
                                "_field_required": true,
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732526751993",
                                "_conditionalView_field": "add_approval_2",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "{\"add\":true}"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526774196",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325267850250.30324103201013411302141",
                                "_field": "cnb",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732697783294",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{cnb.webuser_id.id}},{{cnb.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732697786294",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_cnb"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732697165144",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17326971691780.3320422203311112100141",
                                "_action": "action_1732651863436",
                                "_action_icon": "refresh",
                                "_action_button_type": "accent",
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Новый ответственный назначен",
                                "_action_addTooltip": true,
                                "_action_addTooltip_text": "Если согласование данной заявки не входит в Вашу зону ответственности, то проверьте матрицу и переназначьте заявку",
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1732697239663",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{responsible_employee_id.webuser_id.whom_delegate_ids}},{{responsible_employee_id.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732697258973",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_cnb"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526782163",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325268012700.2404041140043023323421",
                                "_field": "budget_holder",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732697837899",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{cnb.webuser_id.id}},{{cnb.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732697840460",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_cnb"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526783141",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325268186860.22443241124233232431112",
                                "_field": "teamlead",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732697900887",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{cnb.webuser_id.id}},{{cnb.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732697904659",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_cnb"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_copy_1732705828382",
                "sysName": "approval_budget_holder",
                "elements": [
                    {
                        "id": "elmnt_1732522709882",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325227171270.021440113020403112121103",
                                "_field": "conf_search",
                                "_field_required": true,
                                "_field_add_tooltip": true,
                                "_field_tooltip_text": "Вакансия не будет публиковаться в открытых ресурсах",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522710625",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325227306210.30342241104330113024443",
                                "_field": "reason_vacancy",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_reason_of_vacancy",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": []
                    },
                    {
                        "id": "elmnt_1732522712125",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325227540980.031203402433040303004342",
                                "_field": "replacement_status",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_replacement_status",
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
                                "id": "condition_1732694358042",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "replacement,another_company"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522712865",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325227661190.14234213244213004413133",
                                "_field": "resigning_empl_full_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
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
                                "id": "condition_1732694378216",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "replacement"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522713599",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325227953600.2132330401333100442143",
                                "_field": "resigning_empl_full_name_strng",
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
                                "id": "condition_1732694419800",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "another_company"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522801958",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325228141500.123340021202113043420343",
                                "_field": "position_release_date",
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
                                "id": "condition_1732694452059",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "replacement,another_company"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732701703769",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17327017059640.24040032114431303211341",
                                "_field": "budget_date",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522803323",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325228358970.32433313311121402044002",
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
                        "id": "elmnt_1732701834139",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17327018364170.41240333110212003141223",
                                "_field": "position_name",
                                "_field_use_mask": false,
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522802625",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325228225780.20331220141113244332024",
                                "_field": "company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_company",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522804113",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325228549140.012121231203123001412211",
                                "_field": "need_virtual_team",
                                "_field_required": true,
                                "_field_add_tooltip": true,
                                "_field_tooltip_text": "Виртуальная команда необходима только для вакансий TECH",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522860657",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325228644190.02331412014322044020034",
                                "_field": "virtual_team",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_virtual_team",
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
                                "id": "condition_1732694505443",
                                "_conditionalView_field": "need_virtual_team",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522878779",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325228805180.2400134211311333000003",
                                "_field": "virtual_team_other",
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
                                "id": "condition_1732694534476",
                                "_conditionalView_field": "need_virtual_team",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1732694545610",
                                "_conditionalView_field": "virtual_team",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "other"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522861373",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325229005820.40132202401002221013024",
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
                        "id": "elmnt_1732522862089",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{org_structure}}"
                    },
                    {
                        "id": "elmnt_1732525968928",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325259829310.20024203143014113412023",
                                "_field": "contract_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_contract_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732525970526",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325260025820.34241223330343140340012",
                                "_field": "contract_period",
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
                                "id": "condition_1732526013693",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732525971308",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325260539640.020230124310004011120124",
                                "_field": "reason_contract",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_reason_fixed_contract_type",
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
                                "id": "condition_1732526073392",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732525973027",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325260996210.0023324424140102214131423",
                                "_field": "job_rate",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732525973942",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325261192000.24033141233331402341103",
                                "_field": "employment_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_employment_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526131392",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325261489730.43011031002032221114",
                                "_field": "work_place",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526132308",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325261587970.40434201132011220104313",
                                "_field": "work_schedule",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732703647255",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17327036538510.100300303222440304030344",
                                "_field": "analytics_ops",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_analytics_for_ops",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732703649938",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17327037630880.0233233313304202314303",
                                "_field": "cost_center",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526156009",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325261656250.101001211310001201333043",
                                "_field": "salary",
                                "_field_required": true,
                                "_field_set_debounce": true,
                                "_field_debounce_value": 500,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732704065991",
                                "_conditionalView_field": "hide_income",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1732704090434",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "hg_hrbp,hg_cnb,hg_orgdev,hg_recruiter,hg_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732704060585",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17327041171320.44110144044433102302123",
                                "_field": "salary",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR",
                                "_field_set_debounce": true,
                                "_field_debounce_value": 500
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732704142795",
                                "_conditionalView_field": "hide_income",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "false"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526157143",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325261823280.42223144314222101001141",
                                "_field": "period_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_period_bonus",
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
                                "id": "condition_1732704316327",
                                "_conditionalView_field": "hide_income",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1732704340512",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "hg_hrbp,hg_cnb,hg_orgdev,hg_recruiter,hg_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732704231927",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17327042765230.3121413144102123341123",
                                "_field": "period_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_period_bonus",
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
                                "id": "condition_1732704447925",
                                "_conditionalView_field": "hide_income",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "false"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526173029",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325262014160.34233132010343233440001",
                                "_field": "per_bonus",
                                "_field_required": true,
                                "_field_set_debounce": true,
                                "_field_debounce_value": 500,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732526218258",
                                "_conditionalView_field": "period_bonus",
                                "_conditionalView_operator": "!==",
                                "_conditionalView_value": "without_bonus"
                            },
                            {
                                "id": "condition_1732704695247",
                                "_conditionalView_field": "hide_income",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1732704720385",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "hg_hrbp,hg_cnb,hg_orgdev,hg_recruiter,hg_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732704234976",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17327045165510.1004101113134411144112",
                                "_field": "per_bonus",
                                "_field_required": true,
                                "_field_set_debounce": true,
                                "_field_debounce_value": 500,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732704823059",
                                "_conditionalView_field": "hide_income",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "false"
                            },
                            {
                                "id": "condition_1732869935825",
                                "_conditionalView_field": "period_bonus",
                                "_conditionalView_operator": "!==",
                                "_conditionalView_value": "without_bonus"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732704246582",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17327048634810.30411420132403220222321",
                                "_field": "comment_salary",
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
                                "id": "condition_1732704956967",
                                "_conditionalView_field": "hide_income",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1732704961466",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "hg_hrbp,hg_cnb,hg_orgdev,hg_recruiter,hg_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732704270086",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17327048842900.4022141412311202133244",
                                "_field": "comment_salary",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": []
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732705027166",
                                "_conditionalView_field": "hide_income",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "false"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526239942",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325262532160.2321123031134220324103",
                                "_field": "hide_income",
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
                                "id": "condition_1732862253371",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "hg_cnb,hg_hrbp"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526241042",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325262708150.4334321032323433123203",
                                "_field": "responsibilities",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526241808",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325262786790.32332434404241140232024",
                                "_field": "prof_skills",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526242799",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325262908540.201313200400010411331223",
                                "_field": "candidate_description",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526296942",
                        "type": "text",
                        "paraText": "<b>Участники процесса согласования</b>"
                    },
                    {
                        "id": "elmnt_1732526297841",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325263844770.32424013300243111010004",
                                "_field": "hr_bp_creator",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526298615",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325264171950.23441434332241300432",
                                "_field": "user_creator",
                                "_field_link_type": "complexSelect",
                                "_field_required": false,
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526448085",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325264502420.44320210143332401141331",
                                "_field": "manager",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526486708",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325264925140.30002312121203141400121",
                                "_field": "up_manager",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526505725",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325265293170.213302002014110332220133",
                                "_field": "hr_bp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526544899",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325265489340.034224432214204342033224",
                                "_field": "add_approval_1",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526545935",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325265698590.33011201413442301303023",
                                "_field": "approval_1",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
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
                                "id": "condition_1732526592874",
                                "_conditionalView_field": "add_approval_1",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "{\"add\":true}"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526546857",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325266953080.211304432113120144240042",
                                "_field": "add_approval_2",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732526707391",
                                "_conditionalView_field": "add_approval_1",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "{\"add\":true}"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526726674",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325267286440.11440002103024040314431",
                                "_field": "approval_2",
                                "_field_link_type": "complexSelect",
                                "_field_required": true,
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732526751993",
                                "_conditionalView_field": "add_approval_2",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "{\"add\":true}"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526774196",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325267850250.30324103201013411302141",
                                "_field": "cnb",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526782163",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325268012700.2404041140043023323421",
                                "_field": "budget_holder",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732697837899",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{cnb.webuser_id.id}},{{cnb.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732697840460",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_cnb"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732697165144",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17326971691780.3320422203311112100141",
                                "_action": "action_1732651863436",
                                "_action_icon": "refresh",
                                "_action_button_type": "accent",
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Новый ответственный назначен",
                                "_action_addTooltip": true,
                                "_action_addTooltip_text": "Если согласование данной заявки не входит в Вашу зону ответственности, то проверьте матрицу и переназначьте заявку",
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1732697239663",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{cnb.webuser_id.id}},{{cnb.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732697258973",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_cnb"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526783141",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325268186860.22443241124233232431112",
                                "_field": "teamlead",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_copy_1732706664593",
                "sysName": "teamlead",
                "elements": [
                    {
                        "id": "elmnt_1732522709882",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325227171270.021440113020403112121103",
                                "_field": "conf_search",
                                "_field_required": true,
                                "_field_add_tooltip": true,
                                "_field_tooltip_text": "Вакансия не будет публиковаться в открытых ресурсах",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522710625",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325227306210.30342241104330113024443",
                                "_field": "reason_vacancy",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_reason_of_vacancy",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": []
                    },
                    {
                        "id": "elmnt_1732522712125",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325227540980.031203402433040303004342",
                                "_field": "replacement_status",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_replacement_status",
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
                                "id": "condition_1732694358042",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "replacement,another_company"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522712865",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325227661190.14234213244213004413133",
                                "_field": "resigning_empl_full_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
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
                                "id": "condition_1732694378216",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "replacement"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522713599",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325227953600.2132330401333100442143",
                                "_field": "resigning_empl_full_name_strng",
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
                                "id": "condition_1732694419800",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "another_company"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522801958",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325228141500.123340021202113043420343",
                                "_field": "position_release_date",
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
                                "id": "condition_1732694452059",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "replacement,another_company"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732701703769",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17327017059640.24040032114431303211341",
                                "_field": "budget_date",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522803323",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325228358970.32433313311121402044002",
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
                        "id": "elmnt_1732701834139",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17327018364170.41240333110212003141223",
                                "_field": "position_name",
                                "_field_use_mask": false,
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522802625",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325228225780.20331220141113244332024",
                                "_field": "company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_company",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522804113",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325228549140.012121231203123001412211",
                                "_field": "need_virtual_team",
                                "_field_required": true,
                                "_field_add_tooltip": true,
                                "_field_tooltip_text": "Виртуальная команда необходима только для вакансий TECH",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522860657",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325228644190.02331412014322044020034",
                                "_field": "virtual_team",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_virtual_team",
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
                                "id": "condition_1732694505443",
                                "_conditionalView_field": "need_virtual_team",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522878779",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325228805180.2400134211311333000003",
                                "_field": "virtual_team_other",
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
                                "id": "condition_1732694534476",
                                "_conditionalView_field": "need_virtual_team",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1732694545610",
                                "_conditionalView_field": "virtual_team",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "other"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522861373",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325229005820.40132202401002221013024",
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
                        "id": "elmnt_1732522862089",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{org_structure}}"
                    },
                    {
                        "id": "elmnt_1732525968928",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325259829310.20024203143014113412023",
                                "_field": "contract_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_contract_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732525970526",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325260025820.34241223330343140340012",
                                "_field": "contract_period",
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
                                "id": "condition_1732526013693",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732525971308",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325260539640.020230124310004011120124",
                                "_field": "reason_contract",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_reason_fixed_contract_type",
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
                                "id": "condition_1732526073392",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732525973027",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325260996210.0023324424140102214131423",
                                "_field": "job_rate",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732525973942",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325261192000.24033141233331402341103",
                                "_field": "employment_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_employment_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526131392",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325261489730.43011031002032221114",
                                "_field": "work_place",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526132308",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325261587970.40434201132011220104313",
                                "_field": "work_schedule",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732703647255",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17327036538510.100300303222440304030344",
                                "_field": "analytics_ops",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_analytics_for_ops",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732703649938",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17327037630880.0233233313304202314303",
                                "_field": "cost_center",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526156009",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325261656250.101001211310001201333043",
                                "_field": "salary",
                                "_field_required": true,
                                "_field_set_debounce": true,
                                "_field_debounce_value": 500,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732704065991",
                                "_conditionalView_field": "hide_income",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1732704090434",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "hg_hrbp,hg_cnb,hg_orgdev,hg_recruiter"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732704060585",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17327041171320.44110144044433102302123",
                                "_field": "salary",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR",
                                "_field_set_debounce": true,
                                "_field_debounce_value": 500
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732704142795",
                                "_conditionalView_field": "hide_income",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "false"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526157143",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325261823280.42223144314222101001141",
                                "_field": "period_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_period_bonus",
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
                                "id": "condition_1732704316327",
                                "_conditionalView_field": "hide_income",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1732704340512",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "hg_hrbp,hg_cnb,hg_orgdev,hg_recruiter"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732704231927",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17327042765230.3121413144102123341123",
                                "_field": "period_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_period_bonus",
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
                                "id": "condition_1732704447925",
                                "_conditionalView_field": "hide_income",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "false"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526173029",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325262014160.34233132010343233440001",
                                "_field": "per_bonus",
                                "_field_required": true,
                                "_field_set_debounce": true,
                                "_field_debounce_value": 500,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732526218258",
                                "_conditionalView_field": "period_bonus",
                                "_conditionalView_operator": "!==",
                                "_conditionalView_value": "without_bonus"
                            },
                            {
                                "id": "condition_1732704695247",
                                "_conditionalView_field": "hide_income",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1732704720385",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "hg_hrbp,hg_cnb,hg_orgdev,hg_recruiter"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732704234976",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17327045165510.1004101113134411144112",
                                "_field": "per_bonus",
                                "_field_required": true,
                                "_field_set_debounce": true,
                                "_field_debounce_value": 500,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732704823059",
                                "_conditionalView_field": "hide_income",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "false"
                            },
                            {
                                "id": "condition_1732869987521",
                                "_conditionalView_field": "period_bonus",
                                "_conditionalView_operator": "!==",
                                "_conditionalView_value": "without_bonus"
                            }
                        ],
                        "_action_conditionals_and_or": "AND"
                    },
                    {
                        "id": "elmnt_1732704246582",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17327048634810.30411420132403220222321",
                                "_field": "comment_salary",
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
                                "id": "condition_1732704956967",
                                "_conditionalView_field": "hide_income",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1732704961466",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "hg_hrbp,hg_cnb,hg_orgdev,hg_recruiter"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732704270086",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17327048842900.4022141412311202133244",
                                "_field": "comment_salary",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": []
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732705027166",
                                "_conditionalView_field": "hide_income",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "false"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526239942",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325262532160.2321123031134220324103",
                                "_field": "hide_income",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_action_conditionals_manual": "manual",
                        "_conditions": [
                            {
                                "id": "condition_1732869702799",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "hg_cnb,hg_hrbp"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526241042",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325262708150.4334321032323433123203",
                                "_field": "responsibilities",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526241808",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325262786790.32332434404241140232024",
                                "_field": "prof_skills",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526242799",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325262908540.201313200400010411331223",
                                "_field": "candidate_description",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526296942",
                        "type": "text",
                        "paraText": "<b>Участники процесса согласования</b>"
                    },
                    {
                        "id": "elmnt_1732526297841",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325263844770.32424013300243111010004",
                                "_field": "hr_bp_creator",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526298615",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325264171950.23441434332241300432",
                                "_field": "user_creator",
                                "_field_link_type": "complexSelect",
                                "_field_required": false,
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526448085",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325264502420.44320210143332401141331",
                                "_field": "manager",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526486708",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325264925140.30002312121203141400121",
                                "_field": "up_manager",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526505725",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325265293170.213302002014110332220133",
                                "_field": "hr_bp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526544899",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325265489340.034224432214204342033224",
                                "_field": "add_approval_1",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526545935",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325265698590.33011201413442301303023",
                                "_field": "approval_1",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
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
                                "id": "condition_1732526592874",
                                "_conditionalView_field": "add_approval_1",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "{\"add\":true}"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526546857",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325266953080.211304432113120144240042",
                                "_field": "add_approval_2",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732526707391",
                                "_conditionalView_field": "add_approval_1",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "{\"add\":true}"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526726674",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325267286440.11440002103024040314431",
                                "_field": "approval_2",
                                "_field_link_type": "complexSelect",
                                "_field_required": true,
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732526751993",
                                "_conditionalView_field": "add_approval_2",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "{\"add\":true}"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526774196",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325267850250.30324103201013411302141",
                                "_field": "cnb",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526782163",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325268012700.2404041140043023323421",
                                "_field": "budget_holder",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526783141",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325268186860.22443241124233232431112",
                                "_field": "teamlead",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732706779299",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17327067967690.103220311022340400340131",
                                "_field": "recruiter",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732706812660",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{teamlead.webuser_id.id}},{{teamlead.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732706813876",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_recruiter"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_copy_1732707112488",
                "sysName": "recruitment",
                "elements": [
                    {
                        "id": "elmnt_1732522709882",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325227171270.021440113020403112121103",
                                "_field": "conf_search",
                                "_field_required": true,
                                "_field_add_tooltip": true,
                                "_field_tooltip_text": "Вакансия не будет публиковаться в открытых ресурсах",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522710625",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325227306210.30342241104330113024443",
                                "_field": "reason_vacancy",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_reason_of_vacancy",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": []
                    },
                    {
                        "id": "elmnt_1732522712125",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325227540980.031203402433040303004342",
                                "_field": "replacement_status",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_replacement_status",
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
                                "id": "condition_1732694358042",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "replacement,another_company"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522712865",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325227661190.14234213244213004413133",
                                "_field": "resigning_empl_full_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
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
                                "id": "condition_1732694378216",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "replacement"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522713599",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325227953600.2132330401333100442143",
                                "_field": "resigning_empl_full_name_strng",
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
                                "id": "condition_1732694419800",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "another_company"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522801958",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325228141500.123340021202113043420343",
                                "_field": "position_release_date",
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
                                "id": "condition_1732694452059",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "replacement,another_company"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732701703769",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17327017059640.24040032114431303211341",
                                "_field": "budget_date",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522803323",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325228358970.32433313311121402044002",
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
                        "id": "elmnt_1732701834139",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17327018364170.41240333110212003141223",
                                "_field": "position_name",
                                "_field_use_mask": false,
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522802625",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325228225780.20331220141113244332024",
                                "_field": "company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_company",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522804113",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325228549140.012121231203123001412211",
                                "_field": "need_virtual_team",
                                "_field_required": true,
                                "_field_add_tooltip": true,
                                "_field_tooltip_text": "Виртуальная команда необходима только для вакансий TECH",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522860657",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325228644190.02331412014322044020034",
                                "_field": "virtual_team",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_virtual_team",
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
                                "id": "condition_1732694505443",
                                "_conditionalView_field": "need_virtual_team",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522878779",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325228805180.2400134211311333000003",
                                "_field": "virtual_team_other",
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
                                "id": "condition_1732694534476",
                                "_conditionalView_field": "need_virtual_team",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1732694545610",
                                "_conditionalView_field": "virtual_team",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "other"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522861373",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325229005820.40132202401002221013024",
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
                        "id": "elmnt_1732522862089",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{org_structure}}"
                    },
                    {
                        "id": "elmnt_1732525968928",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325259829310.20024203143014113412023",
                                "_field": "contract_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_contract_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732525970526",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325260025820.34241223330343140340012",
                                "_field": "contract_period",
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
                                "id": "condition_1732526013693",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732525971308",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325260539640.020230124310004011120124",
                                "_field": "reason_contract",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_reason_fixed_contract_type",
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
                                "id": "condition_1732526073392",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732525973027",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325260996210.0023324424140102214131423",
                                "_field": "job_rate",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732525973942",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325261192000.24033141233331402341103",
                                "_field": "employment_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_employment_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526131392",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325261489730.43011031002032221114",
                                "_field": "work_place",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526132308",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325261587970.40434201132011220104313",
                                "_field": "work_schedule",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732703647255",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17327036538510.100300303222440304030344",
                                "_field": "analytics_ops",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_analytics_for_ops",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732703649938",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17327037630880.0233233313304202314303",
                                "_field": "cost_center",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526156009",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325261656250.101001211310001201333043",
                                "_field": "salary",
                                "_field_required": true,
                                "_field_set_debounce": true,
                                "_field_debounce_value": 500,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732704065991",
                                "_conditionalView_field": "hide_income",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1732704090434",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "hg_hrbp,hg_cnb,hg_orgdev,hg_recruiter"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732704060585",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17327041171320.44110144044433102302123",
                                "_field": "salary",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR",
                                "_field_set_debounce": true,
                                "_field_debounce_value": 500
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732704142795",
                                "_conditionalView_field": "hide_income",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "false"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526157143",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325261823280.42223144314222101001141",
                                "_field": "period_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_period_bonus",
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
                                "id": "condition_1732704316327",
                                "_conditionalView_field": "hide_income",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1732704340512",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "hg_hrbp,hg_cnb,hg_orgdev,hg_recruiter"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732704231927",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17327042765230.3121413144102123341123",
                                "_field": "period_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_period_bonus",
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
                                "id": "condition_1732704447925",
                                "_conditionalView_field": "hide_income",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "false"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526173029",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325262014160.34233132010343233440001",
                                "_field": "per_bonus",
                                "_field_required": true,
                                "_field_set_debounce": true,
                                "_field_debounce_value": 500,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732526218258",
                                "_conditionalView_field": "period_bonus",
                                "_conditionalView_operator": "!==",
                                "_conditionalView_value": "without_bonus"
                            },
                            {
                                "id": "condition_1732704695247",
                                "_conditionalView_field": "hide_income",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1732704720385",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "hg_hrbp,hg_cnb,hg_orgdev,hg_recruiter"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732704234976",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17327045165510.1004101113134411144112",
                                "_field": "per_bonus",
                                "_field_required": true,
                                "_field_set_debounce": true,
                                "_field_debounce_value": 500,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732704823059",
                                "_conditionalView_field": "hide_income",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "false"
                            },
                            {
                                "id": "condition_1732870042312",
                                "_conditionalView_field": "period_bonus",
                                "_conditionalView_operator": "!==",
                                "_conditionalView_value": "without_bonus"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732704246582",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17327048634810.30411420132403220222321",
                                "_field": "comment_salary",
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
                                "id": "condition_1732704956967",
                                "_conditionalView_field": "hide_income",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1732704961466",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "hg_hrbp,hg_cnb,hg_orgdev,hg_recruiter"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732704270086",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17327048842900.4022141412311202133244",
                                "_field": "comment_salary",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": []
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732705027166",
                                "_conditionalView_field": "hide_income",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "false"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526239942",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325262532160.2321123031134220324103",
                                "_field": "hide_income",
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
                                "id": "condition_1732869726558",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "hg_cnb,hg_hrbp"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526241042",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325262708150.4334321032323433123203",
                                "_field": "responsibilities",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526241808",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325262786790.32332434404241140232024",
                                "_field": "prof_skills",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526242799",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325262908540.201313200400010411331223",
                                "_field": "candidate_description",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526296942",
                        "type": "text",
                        "paraText": "<b>Участники процесса согласования</b>"
                    },
                    {
                        "id": "elmnt_1732526297841",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325263844770.32424013300243111010004",
                                "_field": "hr_bp_creator",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526298615",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325264171950.23441434332241300432",
                                "_field": "user_creator",
                                "_field_link_type": "complexSelect",
                                "_field_required": false,
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526448085",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325264502420.44320210143332401141331",
                                "_field": "manager",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526486708",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325264925140.30002312121203141400121",
                                "_field": "up_manager",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526505725",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325265293170.213302002014110332220133",
                                "_field": "hr_bp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526544899",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325265489340.034224432214204342033224",
                                "_field": "add_approval_1",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526545935",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325265698590.33011201413442301303023",
                                "_field": "approval_1",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
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
                                "id": "condition_1732526592874",
                                "_conditionalView_field": "add_approval_1",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "{\"add\":true}"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526546857",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325266953080.211304432113120144240042",
                                "_field": "add_approval_2",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732526707391",
                                "_conditionalView_field": "add_approval_1",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "{\"add\":true}"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526726674",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325267286440.11440002103024040314431",
                                "_field": "approval_2",
                                "_field_link_type": "complexSelect",
                                "_field_required": true,
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732526751993",
                                "_conditionalView_field": "add_approval_2",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "{\"add\":true}"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526774196",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325267850250.30324103201013411302141",
                                "_field": "cnb",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526782163",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325268012700.2404041140043023323421",
                                "_field": "budget_holder",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526783141",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325268186860.22443241124233232431112",
                                "_field": "teamlead",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732706779299",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17327067967690.103220311022340400340131",
                                "_field": "recruiter",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732706812660",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{teamlead.webuser_id.id}},{{teamlead.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732706813876",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_recruiter"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732864131398",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17328641351500.42421312440324312131143",
                                "_action": "action_1732651863436",
                                "_action_button_type": "accent",
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1732864155098",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "{{teamlead.webuser_id.id}},{{teamlead.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732864178061",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_recruiter"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR",
                                "_action_addTooltip": true,
                                "_action_addTooltip_text": "Если согласование данной заявки не входит в Вашу зону ответственности, то проверьте матрицу и переназначьте заявку"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732707137713",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17327071465270.33302434012040303100001",
                                "_field": "which_candidate",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_which_candidate",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732707161800",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_recruiter"
                                    },
                                    {
                                        "id": "condition_1732707178214",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{recruiter.webuser_id.id}},{{recruiter.webuser_id.whom_delegate_ids}},{{teamlead.webuser_id.id}},{{teamlead.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR",
                                "_field_required": true
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732707138789",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17327072824850.13043313003401344141321",
                                "_field": "internal_candidate_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1732707324215",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{recruiter.webuser_id.id}},{{recruiter.webuser_id.whom_delegate_ids}},{{teamlead.webuser_id.id}},{{teamlead.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732707339482",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_recruiter"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732707312030",
                                "_conditionalView_field": "which_candidate",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "internal"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_copy_1732862828783",
                "sysName": "closed",
                "elements": [
                    {
                        "id": "elmnt_1732522709882",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325227171270.021440113020403112121103",
                                "_field": "conf_search",
                                "_field_required": true,
                                "_field_add_tooltip": true,
                                "_field_tooltip_text": "Вакансия не будет публиковаться в открытых ресурсах",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522710625",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325227306210.30342241104330113024443",
                                "_field": "reason_vacancy",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_reason_of_vacancy",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": []
                    },
                    {
                        "id": "elmnt_1732522712125",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325227540980.031203402433040303004342",
                                "_field": "replacement_status",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_replacement_status",
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
                                "id": "condition_1732694358042",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "replacement,another_company"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522712865",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325227661190.14234213244213004413133",
                                "_field": "resigning_empl_full_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
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
                                "id": "condition_1732694378216",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "replacement"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522713599",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325227953600.2132330401333100442143",
                                "_field": "resigning_empl_full_name_strng",
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
                                "id": "condition_1732694419800",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "another_company"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522801958",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325228141500.123340021202113043420343",
                                "_field": "position_release_date",
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
                                "id": "condition_1732694452059",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "replacement,another_company"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732701703769",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17327017059640.24040032114431303211341",
                                "_field": "budget_date",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522803323",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325228358970.32433313311121402044002",
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
                        "id": "elmnt_1732701834139",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17327018364170.41240333110212003141223",
                                "_field": "position_name",
                                "_field_use_mask": false,
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522802625",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325228225780.20331220141113244332024",
                                "_field": "company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_company",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522804113",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325228549140.012121231203123001412211",
                                "_field": "need_virtual_team",
                                "_field_required": true,
                                "_field_add_tooltip": true,
                                "_field_tooltip_text": "Виртуальная команда необходима только для вакансий TECH",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522860657",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325228644190.02331412014322044020034",
                                "_field": "virtual_team",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_virtual_team",
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
                                "id": "condition_1732694505443",
                                "_conditionalView_field": "need_virtual_team",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522878779",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325228805180.2400134211311333000003",
                                "_field": "virtual_team_other",
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
                                "id": "condition_1732694534476",
                                "_conditionalView_field": "need_virtual_team",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1732694545610",
                                "_conditionalView_field": "virtual_team",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "other"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732522861373",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325229005820.40132202401002221013024",
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
                        "id": "elmnt_1732522862089",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{org_structure}}"
                    },
                    {
                        "id": "elmnt_1732522862831",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325251828420.11441130130442300442441",
                                "_field": "vacancy_id",
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
                                "id": "condition_1732702069248",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "hg_hrbp,hg_cnb,hg_orgdev,hg_recruiter"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732525191037",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325252013450.103323401332210230244413",
                                "_field": "id_position",
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
                                "id": "condition_1732702316120",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "hg_hrbp,hg_cnb,hg_orgdev,hg_recruiter"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732525211643",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325252208810.104344314403334111312322",
                                "_field": "org_dev",
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
                                "id": "condition_1732702339053",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "hg_hrbp,hg_cnb,hg_orgdev"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732525212870",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325252345920.13021021334134343113",
                                "_field": "select_structure",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_select_structure",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditions": [],
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732702425671",
                                "_conditionalView_field": "org_dev",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1732702440581",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "hg_hrbp,hg_cnb,hg_orgdev"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732525213553",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325252559190.22321401122114313331043",
                                "_field": "structures_difference",
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
                                "id": "condition_1732691936495",
                                "_conditionalView_field": "select_structure",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "both_structures"
                            },
                            {
                                "id": "condition_1732702966313",
                                "_conditionalView_field": "org_dev",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1732702981286",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "hg_hrbp,hg_cnb,hg_orgdev"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732691506342",
                        "type": "text",
                        "paraText": "<style>\n.custom_container {\n      display: flex;\n      gap: 20px;\n    }\n\n    .custom_column {\n      flex: 1; /* Оба столбца будут равной ширины */\n    }\n</style>\n<div class=\"custom_container\">\n    <div class=\"custom_column\">\n      <p><b>Управленческая структура</b></p>\n    </div>\n    <div class=\"custom_column\">\n      <p><b>Юридическая структура</b>\n      </p>\n    </div>\n  </div>",
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732691859420",
                                "_conditionalView_field": "select_structure",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "both_structures"
                            },
                            {
                                "id": "condition_1732702999027",
                                "_conditionalView_field": "org_dev",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1732703014346",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "hg_hrbp,hg_cnb,hg_orgdev"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732525741391",
                        "type": "text",
                        "paraText": "<b>Управленческая структура</b>",
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732525783910",
                                "_conditionalView_field": "select_structure",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "management_structure"
                            },
                            {
                                "id": "condition_1732703030264",
                                "_conditionalView_field": "org_dev",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1732703066379",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "hg_hrbp,hg_cnb,hg_orgdev"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732525815092",
                        "type": "text",
                        "paraText": "<b>Юридическая структура</b>",
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732525849943",
                                "_conditionalView_field": "select_structure",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "legal_structure"
                            },
                            {
                                "id": "condition_1732703084566",
                                "_conditionalView_field": "org_dev",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1732703086287",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "hg_hrbp,hg_cnb,hg_orgdev"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732692471653",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17326924807090.10031314133323320412124",
                                "_field": "management_division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR",
                                "_conditionalView_disable_or_hide": "disable"
                            },
                            {
                                "id": "17326925049640.14402333431030202402323",
                                "_conditionalView": true,
                                "_field": "legal_division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_field_required": true,
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR",
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ],
                        "_input_fields_in_a_row": 2,
                        "_input_fields_in_a_row_column": "row",
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732693322036",
                                "_conditionalView_field": "select_structure",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "both_structures"
                            },
                            {
                                "id": "condition_1732703197711",
                                "_conditionalView_field": "org_dev",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1732703214076",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "hg_hrbp,hg_cnb,hg_orgdev"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732692474734",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17326934241000.21402121331241032322403",
                                "_field": "management_position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR",
                                "_field_set_debounce": true,
                                "_field_debounce_value": 1000
                            },
                            {
                                "id": "17326934265720.04230223421422403231021",
                                "_field": "legal_position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_input_fields_in_a_row": 2,
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732693580694",
                                "_conditionalView_field": "select_structure",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "both_structures"
                            },
                            {
                                "id": "condition_1732703251117",
                                "_conditionalView_field": "org_dev",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1732703253106",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "hg_hrbp,hg_cnb,hg_orgdev"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732692476887",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17326936284660.14242211424312431120114",
                                "_field": "management_direct",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            },
                            {
                                "id": "17326936329910.30114400003001024330133",
                                "_field": "legal_direct",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_input_fields_in_a_row": 2,
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732693762410",
                                "_conditionalView_field": "select_structure",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "both_structures"
                            },
                            {
                                "id": "condition_1732703302284",
                                "_conditionalView_field": "org_dev",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1732703304389",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "hg_hrbp,hg_cnb,hg_orgdev"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732525247922",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325252877230.234024210004223312343",
                                "_field": "management_division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            },
                            {
                                "id": "17325252895320.213202401300122440233133",
                                "_field": "management_position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            },
                            {
                                "id": "17325253127680.212411204030202234400022",
                                "_field": "management_direct",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_hidden": false,
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_input_fields_in_a_row": 3,
                        "_input_fields_in_a_row_column": "column",
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732525387593",
                                "_conditionalView_field": "select_structure",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "management_structure"
                            },
                            {
                                "id": "condition_1732703367096",
                                "_conditionalView_field": "org_dev",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1732703369426",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "hg_hrbp,hg_cnb,hg_orgdev"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732525249070",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325253180980.24032231321443333103442",
                                "_field": "legal_division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            },
                            {
                                "id": "17325253199200.0304412142423220404304",
                                "_field": "legal_position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            },
                            {
                                "id": "17325253204920.34442033124200340001403",
                                "_field": "legal_direct",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_input_fields_in_a_row": 3,
                        "_input_fields_in_a_row_column": "column",
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732525606243",
                                "_conditionalView_field": "select_structure",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "legal_structure"
                            },
                            {
                                "id": "condition_1732703433395",
                                "_conditionalView_field": "org_dev",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1732703436535",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "hg_hrbp,hg_cnb,hg_orgdev"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732525968928",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325259829310.20024203143014113412023",
                                "_field": "contract_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_contract_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732525970526",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325260025820.34241223330343140340012",
                                "_field": "contract_period",
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
                                "id": "condition_1732526013693",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732525971308",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325260539640.020230124310004011120124",
                                "_field": "reason_contract",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_reason_fixed_contract_type",
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
                                "id": "condition_1732526073392",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732525973027",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325260996210.0023324424140102214131423",
                                "_field": "job_rate",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732525973942",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325261192000.24033141233331402341103",
                                "_field": "employment_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_employment_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526131392",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325261489730.43011031002032221114",
                                "_field": "work_place",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526132308",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325261587970.40434201132011220104313",
                                "_field": "work_schedule",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732703647255",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17327036538510.100300303222440304030344",
                                "_field": "analytics_ops",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_analytics_for_ops",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732703649938",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17327037630880.0233233313304202314303",
                                "_field": "cost_center",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526156009",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325261656250.101001211310001201333043",
                                "_field": "salary",
                                "_field_required": true,
                                "_field_set_debounce": true,
                                "_field_debounce_value": 500,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732704065991",
                                "_conditionalView_field": "hide_income",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1732704090434",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "hg_hrbp,hg_cnb,hg_orgdev,hg_recruiter,hg_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732704060585",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17327041171320.44110144044433102302123",
                                "_field": "salary",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR",
                                "_field_set_debounce": true,
                                "_field_debounce_value": 500
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732704142795",
                                "_conditionalView_field": "hide_income",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "false"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526157143",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325261823280.42223144314222101001141",
                                "_field": "period_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_period_bonus",
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
                                "id": "condition_1732704316327",
                                "_conditionalView_field": "hide_income",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1732704340512",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "hg_hrbp,hg_cnb,hg_orgdev,hg_recruiter,hg_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732704231927",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17327042765230.3121413144102123341123",
                                "_field": "period_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_period_bonus",
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
                                "id": "condition_1732704447925",
                                "_conditionalView_field": "hide_income",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "false"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526173029",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325262014160.34233132010343233440001",
                                "_field": "per_bonus",
                                "_field_required": true,
                                "_field_set_debounce": true,
                                "_field_debounce_value": 500,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732526218258",
                                "_conditionalView_field": "period_bonus",
                                "_conditionalView_operator": "!==",
                                "_conditionalView_value": "without_bonus"
                            },
                            {
                                "id": "condition_1732704695247",
                                "_conditionalView_field": "hide_income",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1732704720385",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "hg_hrbp,hg_cnb,hg_orgdev,hg_recruiter,hg_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732704234976",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17327045165510.1004101113134411144112",
                                "_field": "per_bonus",
                                "_field_required": true,
                                "_field_set_debounce": true,
                                "_field_debounce_value": 500,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732704823059",
                                "_conditionalView_field": "hide_income",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "false"
                            },
                            {
                                "id": "condition_1732862776040",
                                "_conditionalView_field": "period_bonus",
                                "_conditionalView_operator": "!==",
                                "_conditionalView_value": "without_bonus"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732704246582",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17327048634810.30411420132403220222321",
                                "_field": "comment_salary",
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
                                "id": "condition_1732704956967",
                                "_conditionalView_field": "hide_income",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1732704961466",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "hg_hrbp,hg_cnb,hg_orgdev,hg_recruiter,hg_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732704270086",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17327048842900.4022141412311202133244",
                                "_field": "comment_salary",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": []
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732705027166",
                                "_conditionalView_field": "hide_income",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "false"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526239942",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325262532160.2321123031134220324103",
                                "_field": "hide_income",
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
                                "id": "condition_1732863039037",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "hg_cnb,hg_hrbp"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526241042",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325262708150.4334321032323433123203",
                                "_field": "responsibilities",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526241808",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325262786790.32332434404241140232024",
                                "_field": "prof_skills",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526242799",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325262908540.201313200400010411331223",
                                "_field": "candidate_description",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526296942",
                        "type": "text",
                        "paraText": "<b>Участники процесса согласования</b>"
                    },
                    {
                        "id": "elmnt_1732526297841",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325263844770.32424013300243111010004",
                                "_field": "hr_bp_creator",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526298615",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325264171950.23441434332241300432",
                                "_field": "user_creator",
                                "_field_link_type": "complexSelect",
                                "_field_required": false,
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526448085",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325264502420.44320210143332401141331",
                                "_field": "manager",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526486708",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325264925140.30002312121203141400121",
                                "_field": "up_manager",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526505725",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325265293170.213302002014110332220133",
                                "_field": "hr_bp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526544899",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325265489340.034224432214204342033224",
                                "_field": "add_approval_1",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526545935",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325265698590.33011201413442301303023",
                                "_field": "approval_1",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
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
                                "id": "condition_1732526592874",
                                "_conditionalView_field": "add_approval_1",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "{\"add\":true}"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526546857",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325266953080.211304432113120144240042",
                                "_field": "add_approval_2",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732526707391",
                                "_conditionalView_field": "add_approval_1",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "{\"add\":true}"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526726674",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325267286440.11440002103024040314431",
                                "_field": "approval_2",
                                "_field_link_type": "complexSelect",
                                "_field_required": true,
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732526751993",
                                "_conditionalView_field": "add_approval_2",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "{\"add\":true}"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526774196",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325267850250.30324103201013411302141",
                                "_field": "cnb",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526782163",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325268012700.2404041140043023323421",
                                "_field": "budget_holder",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732526783141",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17325268186860.22443241124233232431112",
                                "_field": "teamlead",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732863111606",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17328631149280.21440211234304324332221",
                                "_field": "recruiter",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732863140672",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17328631441790.0122230121433213402411431",
                                "_field": "which_candidate",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "hg_which_candidate",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732863173755",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17328631771780.04343223244023224330343",
                                "_field": "internal_candidate_name",
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
                                "id": "condition_1732863203954",
                                "_conditionalView_field": "which_candidate",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "internal"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_1732650668146",
                "sysName": "popup_cancel",
                "elements": [
                    {
                        "id": "elmnt_1732650683543",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17326506851880.31211043304123140232313",
                                "_field": "cancel_reason",
                                "_field_required": true
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732652009862",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17326520121640.110333220100000304031341",
                                "_action": "action_1732651080144",
                                "_action_label": "Ок",
                                "_action_button_type": "accent",
                                "_action_standardRequired": false,
                                "_action_customRequired": true,
                                "_action_customRequired_fields": [
                                    "cancel_reason"
                                ]
                            },
                            {
                                "id": "17328007176020.41303123041002300132041",
                                "_action": "action_1732651014844",
                                "_action_label": "Назад",
                                "_action_icon": "back"
                            }
                        ],
                        "_input_actions_alignment": "center",
                        "_actions_in_a_row": 2
                    }
                ]
            },
            {
                "id": "step_1732185364550",
                "sysName": "actions",
                "elements": [
                    {
                        "id": "elmnt_1733305420202",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17333054247930.41201431224132123001204",
                                "_action": "action_1733210091604",
                                "_action_label": "Cогласовать",
                                "_action_button_type": "accent",
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Заявка согласована",
                                "_action_standardRequired": true,
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1733305456015",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1733305457298",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1733305511044",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "approval_direct"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732482721618",
                        "type": "action",
                        "_input_fields": [
                            {
                                "id": "17324827245210.0020331102021414322143004"
                            }
                        ],
                        "_actions": [
                            {
                                "id": "17324827369470.34313103222233414242021",
                                "_action": "action_1732482315979",
                                "_action_icon": "done",
                                "_action_button_type": "accent",
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Заявка согласована",
                                "_action_customRequired": false,
                                "_action_standardRequired": true,
                                "_action_label": "Согласовать",
                                "_conditionalView": true,
                                "_action_conditionals_manual": "manual",
                                "_conditions": [
                                    {
                                        "id": "condition_1732482871351",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{up_manager.webuser_id.id}},{{up_manager.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732482924734",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "approval_up_direct"
                            },
                            {
                                "id": "condition_1732482956891",
                                "_conditionalView_value": "hg_agreement",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732658642280",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17326586444180.0131213420032434042440423",
                                "_action": "action_1732651518110",
                                "_action_button_type": "accent",
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Данные обновлены!",
                                "_action_standardRequired": true,
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1732658687048",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732658704584",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR",
                                "_action_label": "Сохранить"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732658790843",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "approval_up_direct"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732658731511",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17326587338440.30031423331122102442104",
                                "_action": "action_1732651133793",
                                "_action_button_type": "accent",
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Заявка согласована",
                                "_action_standardRequired": true,
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1732658779027",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.whom_delegate_ids}},{{hr_bpюwebuser.id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732658854633",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_hrbp"
                                    }
                                ],
                                "_action_label": "Согласовать",
                                "_action_icon": "done"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732658857260",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "approval_hrbp"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732699301472",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17326993037550.31420022343022242323324",
                                "_action": "action_1732651179526",
                                "_action_label": "Согласовать",
                                "_action_button_type": "accent",
                                "_action_icon": "done",
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Заявка согласована",
                                "_action_standardRequired": true,
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1732699364605",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{approval_1.webuser_id.id}},{{approval_1.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732699366122",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732699545942",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "add_approval_1"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732699667177",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17326996710530.3033114323314242343023",
                                "_action": "action_1732651236776",
                                "_action_label": "Согласовать",
                                "_action_button_type": "accent",
                                "_action_icon": "done",
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Заявка согласована",
                                "_action_standardRequired": true,
                                "_conditionalView": true,
                                "_action_conditional_disable_or_hide": "hide",
                                "_conditions": [
                                    {
                                        "id": "condition_1732699728094",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{approval_2.webuser_id.id}},{{approval_2.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732699730260",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_agreement"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732699704927",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "add_approval_2",
                                "_conditionalView_field": "status"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732705481747",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17327054867890.14200341140010014433433",
                                "_action": "action_1732651299676",
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
                                        "id": "condition_1732705520630",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{cnb.webuser_id.id}},{{cnb.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732705523263",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_cnb"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732705564314",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "approval_cnb"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732706323868",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17327063268330.003443134120314304302114",
                                "_action": "action_1732651369093",
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
                                        "id": "condition_1732706358949",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{budget_holder.webuser_id.id}},{{budget_holder.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732706367833",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_budget_holder"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732706927642",
                        "type": "action",
                        "_input_fields": [
                            {
                                "id": "17327069310840.04214121341203334334201"
                            }
                        ],
                        "_actions": [
                            {
                                "id": "17327069331810.134302434222201124111233",
                                "_action": "action_1732651413276",
                                "_action_label": "Подтвердить",
                                "_action_icon": "done",
                                "_action_button_type": "accent",
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Рекрутер назначен",
                                "_action_standardRequired": true,
                                "_conditionalView": true,
                                "_action_conditional_disable_or_hide": "hide",
                                "_conditions": [
                                    {
                                        "id": "condition_1732706971725",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{teamlead.webuser_id.id}},{{teamlead.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732706986998",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_recruiter"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732707661828",
                                "_conditionalView_value": "teamlead",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "=="
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732877561718",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17328775650380.20012132040143020310024",
                                "_action": "action_1732651462965",
                                "_action_label": "Кандидат оформлен",
                                "_action_button_type": "accent",
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Заявка закрыта",
                                "_action_standardRequired": true,
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1732877602601",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{recruiter.webuser_id.id}},{{recruiter.webuser_id.whom_delegate_ids}},{{teamlead.webuser_id.id}},{{teamlead.webuser_id.whom_delegate_ids}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732877608733",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_recruiter"
                                    },
                                    {
                                        "id": "condition_1732877842433",
                                        "_conditionalView_field": "which_candidate",
                                        "_conditionalView_operator": "isNull"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            },
                            {
                                "id": "17328775661080.33400434123102020101434",
                                "_action": "action_1732650623791",
                                "_action_button_type": "danger",
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Заявка отменена",
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1732877735733",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{teamlead.webuser_id.id}},{{teamlead.webuser_id.whom_delegate_ids}} ",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1732877744966",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hg_recruiter"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_actions_in_a_row": 2,
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732877782600",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "recruitment"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1732652198093",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17326522004040.033314343130443333103341",
                                "_action": "action_1732650623791",
                                "_action_button_type": "danger",
                                "_conditionalView": true,
                                "_action_conditional_disable_or_hide": "hide",
                                "_conditions": [
                                    {
                                        "id": "condition_1732652219336",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{user_creator.webuser_id.whom_delegate_ids}},{{user_creator.webuser_id.id}},{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}},{{hr_bp.webuser_id.whom_delegate_ids}},{{hr_bp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1732652276138",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "hg_agreement,hg_hrbp"
                            },
                            {
                                "id": "condition_1732652297760",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "closed,rejected"
                            }
                        ]
                    }
                ],
                "sectionVisibility": "always"
            },
            {
                "id": "step_submitted",
                "sysName": "submitted",
                "elements": []
            }
        ],
        "general": {
            "edittingOn": true,
            "showModel": true,
            "showFullModel": false,
            "autosubmit": "model",
            "autosubmit_model": [
                "management_division",
                "management_position",
                "management_direct",
                "resigning_empl_full_name",
                "division"
            ],
            "debugForUsers": true,
            "debugUsers": "hrbp,aleksandra.kalina@lamoda.ru",
            "closePopupOnClick": false,
            "showState": true
        },
        "state": {
            "step": "{{status}}",
            "popup": null
        },
        "actions": [
            {
                "id": "action_1732482315979",
                "name": "Согласовать approval_up_direct",
                "actionType": "endpoint",
                "endpoint": "hg_actions",
                "actionSubmit": true,
                "stateMapping": [
                    {
                        "id": "stateMapping1732482415817"
                    }
                ],
                "mapping": [
                    {
                        "id": "mapping_1732482651518",
                        "field": "action",
                        "value": "change_status"
                    },
                    {
                        "id": "mapping_1732482681485",
                        "field": "pay_load",
                        "value": "approval_hrbp"
                    }
                ]
            },
            {
                "id": "action_1732650623791",
                "name": "Отменить",
                "actionType": "state",
                "endpoint": "hg_actions",
                "stateMapping": [
                    {
                        "id": "stateMapping1732651069676",
                        "field": "FormState.popup",
                        "value": "popup_cancel"
                    }
                ]
            },
            {
                "id": "action_1732651014844",
                "name": "Закрыть popup",
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1732651026525",
                        "field": "FormState.popup"
                    }
                ]
            },
            {
                "id": "action_1732651080144",
                "name": "Ок (cancel)",
                "actionType": "endpoint",
                "endpoint": "hg_actions",
                "mapping": [
                    {
                        "id": "mapping_1732651115709",
                        "field": "action",
                        "value": "cancel"
                    }
                ],
                "actionSubmit": true
            },
            {
                "id": "action_1732651133793",
                "name": "Согласовать approval_hr_bp",
                "actionType": "endpoint",
                "endpoint": "hg_actions",
                "mapping": [
                    {
                        "id": "mapping_1732651169112",
                        "field": "action",
                        "value": "hrbp"
                    }
                ],
                "actionSubmit": true
            },
            {
                "id": "action_1732651179526",
                "name": "Согласовать add_approval_1",
                "actionType": "endpoint",
                "endpoint": "hg_actions",
                "mapping": [
                    {
                        "id": "mapping_1732651218681",
                        "field": "action",
                        "value": "approval_1"
                    }
                ],
                "actionSubmit": true
            },
            {
                "id": "action_1732651236776",
                "name": "Согласовать add_approval_2",
                "actionType": "endpoint",
                "endpoint": "hg_actions",
                "mapping": [
                    {
                        "id": "mapping_1732651272598",
                        "field": "action",
                        "value": "change_status"
                    },
                    {
                        "id": "mapping_1732651276279",
                        "field": "pay_load",
                        "value": "approval_cnb"
                    }
                ],
                "actionSubmit": true
            },
            {
                "id": "action_1732651299676",
                "name": "Согласовать approval_cnb",
                "actionType": "endpoint",
                "endpoint": "hg_actions",
                "mapping": [
                    {
                        "id": "mapping_1732651330759",
                        "field": "action",
                        "value": "change_status"
                    },
                    {
                        "id": "mapping_1732651342761",
                        "field": "pay_load",
                        "value": "approval_budget_holder"
                    }
                ],
                "actionSubmit": true
            },
            {
                "id": "action_1732651369093",
                "name": "Согласовать approval_budget_holder",
                "actionType": "endpoint",
                "endpoint": "hg_actions",
                "mapping": [
                    {
                        "id": "mapping_1732651385499",
                        "field": "action",
                        "value": "change_status"
                    },
                    {
                        "id": "mapping_1732651396097",
                        "field": "pay_load",
                        "value": "teamlead"
                    }
                ],
                "actionSubmit": true
            },
            {
                "id": "action_1732651413276",
                "name": "Подтвердить teamlead",
                "actionType": "endpoint",
                "endpoint": "hg_actions",
                "mapping": [
                    {
                        "id": "mapping_1732651425543",
                        "field": "action",
                        "value": "change_status"
                    },
                    {
                        "id": "mapping_1732651426543",
                        "field": "pay_load",
                        "value": "recruitment"
                    }
                ],
                "actionSubmit": true
            },
            {
                "id": "action_1732651462965",
                "name": "Заявка закрыта",
                "actionType": "endpoint",
                "endpoint": "hg_actions",
                "mapping": [
                    {
                        "id": "mapping_1732651501797",
                        "field": "action",
                        "value": "change_status"
                    },
                    {
                        "id": "mapping_1732654061910",
                        "field": "pay_load",
                        "value": "closed"
                    }
                ],
                "actionSubmit": true
            },
            {
                "id": "action_1732651518110",
                "name": "Сохранить нанимающий",
                "actionType": "endpoint",
                "endpoint": "hg_actions",
                "mapping": [
                    {
                        "id": "mapping_1732651532761",
                        "field": "action",
                        "value": "save"
                    }
                ],
                "actionSubmit": true
            },
            {
                "id": "action_1732651734130",
                "name": "Сохранить вакансия в работе",
                "actionType": "endpoint",
                "endpoint": "hg_actions",
                "mapping": [
                    {
                        "id": "mapping_1732651767713",
                        "field": "action",
                        "value": "save"
                    }
                ],
                "actionSubmit": true
            },
            {
                "id": "action_1732651863436",
                "name": "Переназначить",
                "actionType": "endpoint",
                "endpoint": "hg_actions",
                "mapping": [
                    {
                        "id": "mapping_1732651883566",
                        "field": "action",
                        "value": "new_responsible"
                    }
                ],
                "actionSubmit": true
            },
            {
                "id": "action_1733210091604",
                "name": "Согласовать approval_direct",
                "actionType": "endpoint",
                "endpoint": "hg_actions",
                "mapping": [
                    {
                        "id": "mapping_1733210119819",
                        "field": "action",
                        "value": "change_status"
                    },
                    {
                        "id": "mapping_1733210121137",
                        "field": "pay_load",
                        "value": "approval_up_direct"
                    }
                ],
                "actionSubmit": true
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "candidate_description",
            "dataType": "string",
            "name": "Портрет кандидата (только для OPS)",
            "id": "30681731662096240",
            "link": "",
            "group": "1731661738585",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 25,
            "linkIndexFieldSysName": [],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": {},
            "groupName": null,
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "prof_skills",
            "dataType": "string",
            "name": "Профессиональные навыки",
            "id": "25741731662089756",
            "link": "",
            "group": "1731661738585",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 24,
            "linkIndexFieldSysName": [],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": {},
            "groupName": null,
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "responsibilities",
            "dataType": "string",
            "name": "Обязанности",
            "id": "35381731662082846",
            "link": "",
            "group": "1731661738585",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 23,
            "linkIndexFieldSysName": [],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": {},
            "groupName": null,
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "per_bonus",
            "dataType": "number",
            "name": "Процент премии",
            "id": "43691731662006890",
            "link": "",
            "group": "1731661738585",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 22,
            "linkIndexFieldSysName": [],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": "positiveNum",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "period_bonus",
            "dataType": "link",
            "name": "Периодичность выплаты премии",
            "id": "70001731661977055",
            "link": "hg_period_bonus",
            "group": "1731661738585",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "salary",
            "dataType": "decimal",
            "name": "Оклад без РКиСН (gross) руб/мес",
            "id": "69361731661843194",
            "link": "",
            "group": "1731661738585",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "work_schedule",
            "dataType": "string",
            "name": "График и время работы",
            "id": "66861731661781138",
            "link": "",
            "group": "1731661738585",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "work_place",
            "dataType": "string",
            "name": "Место работы",
            "id": "99931731661775579",
            "link": "",
            "group": "1731661738585",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "employment_type",
            "dataType": "link",
            "name": "Формат работы",
            "id": "18361731661141596",
            "link": "hg_employment_type",
            "group": "1731661738585",
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
            "format": null,
            "formatOptions": {},
            "groupName": null,
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "job_rate",
            "dataType": "decimal",
            "name": "Коэффициент занятости",
            "id": "61351731661078792",
            "link": "",
            "group": "1731661738585",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "reason_contract",
            "dataType": "link",
            "name": "Обоснование срочного ТД",
            "id": "41551731661053754",
            "link": "hg_reason_fixed_contract_type",
            "group": "1731661738585",
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
            "format": null,
            "formatOptions": {},
            "groupName": null,
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "contract_period",
            "dataType": "string",
            "name": "Укажите период срочного договора",
            "id": "28591731660966461",
            "link": "",
            "group": "1731661738585",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "contract_type",
            "dataType": "link",
            "name": "Тип договора",
            "id": "69111731660937960",
            "link": "hg_contract_type",
            "group": "1731661738585",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "org_structure",
            "dataType": "string",
            "name": "Организационная структура",
            "id": "12681731660914203",
            "link": "",
            "group": "1731661738585",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "division",
            "dataType": "link",
            "name": "Подразделение",
            "id": "93991731660871577",
            "link": "structure",
            "group": "1731661738585",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "virtual_team_other",
            "dataType": "string",
            "name": "Другое",
            "id": "37631731660847855",
            "link": "",
            "group": "1731661738585",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "virtual_team",
            "dataType": "link",
            "name": "Виртуальная команда, в которой будет работать сотрудник",
            "id": "62151731660743623",
            "link": "hg_virtual_team",
            "group": "1731661738585",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "need_virtual_team",
            "dataType": "boolean",
            "name": "Нужна виртуальная команда?",
            "id": "20311731660658407",
            "link": "",
            "group": "1731661738585",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "company",
            "dataType": "link",
            "name": "Юр. лицо",
            "id": "45981731660649886",
            "link": "hg_company",
            "group": "1731661738585",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "position",
            "dataType": "string",
            "name": "Должность",
            "id": "59801731660584994",
            "link": "",
            "group": "1731661738585",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "position_release_date",
            "dataType": "date",
            "name": "Дата освобождения позиции",
            "id": "24771731660505528",
            "link": "",
            "group": "1731661738585",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "resigning_empl_full_name_strng",
            "dataType": "string",
            "name": "ФИО заменяемого сотрудника",
            "id": "50701731660482112",
            "link": "",
            "group": "1731661738585",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "resigning_empl_full_name",
            "dataType": "link",
            "name": "ФИО заменяемого сотрудника",
            "id": "64831731660388600",
            "link": "employees",
            "group": "1731661738585",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "replacement_status",
            "dataType": "link",
            "name": "Статус заменяемого сотрудника",
            "id": "73611731660160163",
            "link": "hg_replacement_status",
            "group": "1731661738585",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "reason_vacancy",
            "dataType": "link",
            "name": "Причина появления вакансии",
            "id": "68821731659809724",
            "link": "hg_reason_of_vacancy",
            "group": "1731661738585",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "conf_search",
            "dataType": "boolean",
            "name": "Конфиденциальный поиск",
            "id": "75771731659760040",
            "link": "",
            "group": "1731661738585",
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
                "hideStandardBooleanIcons": false,
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "internal_candidate_name",
            "dataType": "link",
            "name": "ФИО внутреннего кандидата",
            "id": "51041732098190614",
            "link": "employees",
            "group": "1731662124558",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "which_candidate",
            "dataType": "link",
            "name": "Кем будет закрыта вакансия?",
            "id": "65291732098169032",
            "link": "hg_which_candidate",
            "group": "1731662124558",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "recruiter",
            "dataType": "link",
            "name": "Отвественный рекрутер",
            "id": "50501732098143748",
            "link": "employees",
            "group": "1731662124558",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "teamlead",
            "dataType": "link",
            "name": "Руководитель направления подбора персонала",
            "id": "36711732098134082",
            "link": "employees",
            "group": "1731662124558",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "cnb",
            "dataType": "link",
            "name": "C&B",
            "id": "14371732098124414",
            "link": "employees",
            "group": "1731662124558",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "budget_holder",
            "dataType": "link",
            "name": "Держатель бюджета",
            "id": "22461732098115380",
            "link": "employees",
            "group": "1731662124558",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "approval_2",
            "dataType": "link",
            "name": "Дополнительный согласующий (руководитель) 2",
            "id": "60781732097962282",
            "link": "employees",
            "group": "1731662124558",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "approval_1",
            "dataType": "link",
            "name": "Дополнительный согласующий (руководитель) 1 ",
            "id": "85491732097941627",
            "link": "employees",
            "group": "1731662124558",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "add_approval_2",
            "dataType": "json",
            "name": "Добавить дополнительного согласующего?",
            "id": "14161732097917550",
            "link": "",
            "group": "1731662124558",
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
                "customOption": false,
                "customOptionPlaceholder": "Describe your option",
                "range": {},
                "customOptionType": "textarea",
                "dateFormat": "DD/MM/Y",
                "timeFormat": " HH:mm",
                "isUTC": "false",
                "multipleChoice": [
                    {
                        "value": "add",
                        "label": null
                    }
                ]
            },
            "groupName": null,
            "json": true,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "add_approval_1",
            "dataType": "json",
            "name": "Добавить дополнительного согласующего?",
            "id": "93711732097810014",
            "link": "",
            "group": "1731662124558",
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
                        "value": "add",
                        "label": null
                    }
                ]
            },
            "groupName": null,
            "json": true,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "hr_bp",
            "dataType": "link",
            "name": "Cогласующий HR BP",
            "id": "54801732097785732",
            "link": "employees",
            "group": "1731662124558",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "up_manager",
            "dataType": "link",
            "name": "Верхнеуровневый руководитель",
            "id": "21751732097711574",
            "link": "employees",
            "group": "1731662124558",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "hr_bp_creator",
            "dataType": "json",
            "name": "Заявка создана HR BP, вместо руководителя",
            "id": "13741732097541879",
            "link": "",
            "group": "1731662124558",
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
            "json": true,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "manager",
            "dataType": "link",
            "name": "Нанимающий менеджер",
            "id": "94501732097520540",
            "link": "employees",
            "group": "1731662124558",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "responsible_employee_id",
            "dataType": "link",
            "name": "Ответственный за текущий этап",
            "id": "80521732097268481",
            "link": "employees",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "date",
            "dataType": "date",
            "name": "Дата создания заявки",
            "id": "38501732097228191",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "number",
            "dataType": "string",
            "name": "Номер заявки",
            "id": "19551732097216287",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "logs",
            "dataType": "arrayLink",
            "name": "История изменений",
            "id": "61921732097200714",
            "link": "hg_logs",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": false,
            "arrayLink": true,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "user_creator",
            "dataType": "link",
            "name": "Инициатор заявки",
            "id": "51381732097181650",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "prev_status",
            "dataType": "link",
            "name": "Предыдущий статус",
            "id": "50941732097133797",
            "link": "hg_statuses",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "status",
            "dataType": "link",
            "name": "Статус",
            "id": "77021732097122174",
            "link": "hg_statuses",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": true,
            "array": false
        },
        {
            "sysName": "last_change_date",
            "dataType": "date",
            "name": "Дата последнего изменения",
            "id": "54871732097356664",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "all_user_ids",
            "dataType": "arrayLink",
            "name": "Все пользователи, относящиеся к заявке",
            "id": "56911732097330019",
            "link": "employees",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": false,
            "arrayLink": true,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "responsible_roles",
            "dataType": "arrayLink",
            "name": "Ответственные роли",
            "id": "20831732097292042",
            "link": "roles",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": false,
            "arrayLink": true,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "last_user",
            "dataType": "link",
            "name": "Кем изменено",
            "id": "27981732097155934",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "hide_income",
            "dataType": "boolean",
            "name": "Скрыть поля дохода?",
            "id": "34721732524127128",
            "link": "",
            "group": "1731661738585",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 42,
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "comment_salary",
            "dataType": "string",
            "name": "Комментарий к структуре надбавок",
            "id": "29541732524051837",
            "link": null,
            "group": "1731661738585",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "cost_center",
            "dataType": "string",
            "name": "Кост-центр",
            "id": "31801732524038668",
            "link": null,
            "group": "1731661738585",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 40,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "analytics_ops",
            "dataType": "link",
            "name": "Категория персонала (Analytics for OPS)",
            "id": "21631732523965857",
            "link": "hg_analytics_for_ops",
            "group": "1731661738585",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 39,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "position_name",
            "dataType": "string",
            "name": "Position name",
            "id": "39831732523953542",
            "link": null,
            "group": "1731661738585",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 38,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "legal_direct",
            "dataType": "link",
            "name": "ФИО руководителя",
            "id": "74661732523748577",
            "link": "employees",
            "group": "1731661738585",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 37,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "management_direct",
            "dataType": "link",
            "name": "ФИО руководителя",
            "id": "18191732523739162",
            "link": "employees",
            "group": "1731661738585",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 36,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "legal_position",
            "dataType": "string",
            "name": "Должность",
            "id": "47821732523738367",
            "link": null,
            "group": "1731661738585",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 35,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "management_position",
            "dataType": "string",
            "name": "Должность",
            "id": "95841732523725558",
            "link": null,
            "group": "1731661738585",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 34,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "legal_division",
            "dataType": "link",
            "name": "Подразделение",
            "id": "79361732523718953",
            "link": "structure",
            "group": "1731661738585",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "management_division",
            "dataType": "link",
            "name": "Подразделение",
            "id": "74581732523685221",
            "link": "structure",
            "group": "1731661738585",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "structures_difference",
            "dataType": "boolean",
            "name": "Есть ли разница в управленческой и юридической структурах?",
            "id": "40731732523540970",
            "link": "",
            "group": "1731661738585",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "select_structure",
            "dataType": "link",
            "name": "В какой структуре будут происходить изменения?",
            "id": "26721732523217174",
            "link": "hg_select_structure",
            "group": "1731661738585",
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
            "formatOptions": null,
            "groupName": null,
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "org_dev",
            "dataType": "boolean",
            "name": "Нужен OrgDev?",
            "id": "75441732523216236",
            "link": "",
            "group": "1731661738585",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "id_position",
            "dataType": "string",
            "name": "Код позиции (из УШР)",
            "id": "37671732523177005",
            "link": null,
            "group": "1731661738585",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "vacancy_id",
            "dataType": "string",
            "name": "ID вакансии (из Optimacros)",
            "id": "85101732523164507",
            "link": null,
            "group": "1731661738585",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 27,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "budget_date",
            "dataType": "date",
            "name": "Бюджетная дата от C&B",
            "id": "77191732523054191",
            "link": "",
            "group": "1731661738585",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 26,
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "cancel_reason",
            "dataType": "string",
            "name": "Укажите причину",
            "id": "13271732534584664",
            "link": null,
            "group": "1732097408116",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        }
    ],
    "data": [
        {
            "number": "HG-886677",
            "prev_status": {
                "next_status_ids": [
                    {
                        "status": "Согласование с C&B",
                        "id": "approval_cnb"
                    },
                    {
                        "status": "Согласование с доп согласующим 1",
                        "id": "add_approval_1"
                    }
                ],
                "id": "approval_hrbp",
                "status": "Согласование с HRBP"
            },
            "per_bonus": 1,
            "conf_search": false,
            "resigning_empl_full_name": {
                "email": "Aleksandra.Kobozeva@lamoda.ru",
                "division_name": "Участок консолидации и упаковки заказов",
                "id": "Aleksandra.Kobozeva@lamoda.ru",
                "position": "Сотрудник склада",
                "webuser_id": "Aleksandra.Kobozeva@lamoda.ru",
                "employee_full_name": "Александра Кобозева"
            },
            "hr_bp_creator": "{\"hrbp\":true}",
            "user_creator": {
                "email": "hrbp",
                "division_name": "Департамент по работе с персоналом корпоративных функций",
                "id": "hrbp",
                "position": "Бизнес-партнер",
                "webuser_id": {
                    "who_delegated_ids": [],
                    "role": [
                        "hg_hrbp",
                        "demo"
                    ],
                    "whom_delegate_ids": [],
                    "id": "hrbp"
                },
                "employee_full_name": "Demo"
            },
            "period_bonus": {
                "period": "2. Месяц",
                "id": "month"
            },
            "last_change_date": 1733308374000,
            "division": {
                "division_name": "Пункт выдачи заказов Софьи Ковалевской 1к.1лит.А",
                "full_hierarchy": "Операционная дирекция\\Департамент доставки\\Управление собственной доставкой \"Ламода Экспресс\"\\Дивизион Северо-Западный\\Кластер Санкт-Петербург\\Санкт-Петербург\\Группа собственной сети ПВЗ\\Пункт выдачи заказов Софьи Ковалевской 1к.1лит.А",
                "division_num": "RU0КЗК-1374",
                "id": "7710307",
                "division_id": "7710307"
            },
            "work_place": "1",
            "replacement_status": {
                "id": "another_position",
                "status": "Заменяемый сотрудник перевелся на другую позицию"
            },
            "responsible_employee_id": {
                "email": "hrbp",
                "division_name": "Департамент по работе с персоналом корпоративных функций",
                "id": "hrbp",
                "position": "Бизнес-партнер",
                "webuser_id": {
                    "who_delegated_ids": [],
                    "role": [
                        "hg_hrbp",
                        "demo"
                    ],
                    "whom_delegate_ids": [],
                    "id": "hrbp"
                },
                "employee_full_name": "Demo"
            },
            "company": {
                "company": "ЛАМОДА ТЕХ АМ",
                "id": "lamoda_tech_am"
            },
            "work_schedule": "1",
            "salary": 1,
            "hr_bp": {
                "email": "hrbp",
                "division_name": "Департамент по работе с персоналом корпоративных функций",
                "id": "hrbp",
                "position": "Бизнес-партнер",
                "webuser_id": {
                    "who_delegated_ids": [],
                    "role": [
                        "hg_hrbp",
                        "demo"
                    ],
                    "whom_delegate_ids": [],
                    "id": "hrbp"
                },
                "employee_full_name": "Demo"
            },
            "responsible_roles": [
                {
                    "visual_name": "HG: Все заявки",
                    "id": "hg_all_requests"
                }
            ],
            "id": "2996c3d1-9128-4102-a177-d65d47da8032",
            "last_user": {
                "who_delegated_ids": [],
                "role": [
                    "jo_recruiter",
                    "jo_agreement",
                    "admin"
                ],
                "whom_delegate_ids": [],
                "id": "aleksandra.kalina@lamoda.ru"
            },
            "job_rate": 1,
            "all_user_ids": [
                {
                    "email": "hrbp",
                    "division_name": "Департамент по работе с персоналом корпоративных функций",
                    "id": "hrbp",
                    "position": "Бизнес-партнер",
                    "webuser_id": {
                        "who_delegated_ids": [],
                        "role": [
                            "hg_hrbp",
                            "demo"
                        ],
                        "whom_delegate_ids": [],
                        "id": "hrbp"
                    },
                    "employee_full_name": "Demo"
                },
                {
                    "email": "direct",
                    "division_name": "Группа дизайна собственных брендов",
                    "id": "direct",
                    "position": "Руководитель группы дизайна собственных брендов",
                    "webuser_id": {
                        "who_delegated_ids": [],
                        "role": [
                            "hg_agreement",
                            "demo"
                        ],
                        "whom_delegate_ids": [],
                        "id": "direct"
                    },
                    "employee_full_name": "Demo Direct"
                },
                {
                    "email": "updirect",
                    "division_name": "Отдел дизайна",
                    "id": "updirect",
                    "position": "Руководитель отдела дизайна",
                    "webuser_id": {
                        "who_delegated_ids": [],
                        "role": [
                            "hg_agreement",
                            "demo"
                        ],
                        "whom_delegate_ids": [],
                        "id": "updirect"
                    },
                    "employee_full_name": "Demo Updirect"
                }
            ],
            "date": 1733306878000,
            "reason_vacancy": {
                "reason": "Замена сотрудника",
                "id": "replacement"
            },
            "prof_skills": "1",
            "manager": {
                "email": "direct",
                "division_name": "Группа дизайна собственных брендов",
                "id": "direct",
                "position": "Руководитель группы дизайна собственных брендов",
                "webuser_id": {
                    "who_delegated_ids": [],
                    "role": [
                        "hg_agreement",
                        "demo"
                    ],
                    "whom_delegate_ids": [],
                    "id": "direct"
                },
                "employee_full_name": "Demo Direct"
            },
            "status": {
                "id": "approval_hrbp",
                "status": "Согласование с HRBP"
            },
            "need_virtual_team": false,
            "position": "1",
            "contract_type": {
                "id": "open_ended",
                "type": "Бессрочный"
            },
            "up_manager": {
                "email": "updirect",
                "division_name": "Отдел дизайна",
                "id": "updirect",
                "position": "Руководитель отдела дизайна",
                "webuser_id": {
                    "who_delegated_ids": [],
                    "role": [
                        "hg_agreement",
                        "demo"
                    ],
                    "whom_delegate_ids": [],
                    "id": "updirect"
                },
                "employee_full_name": "Demo Updirect"
            },
            "candidate_description": "1",
            "logs": [
                {
                    "date_display": "04 дек. 2024, 13:32",
                    "text": "Согласование HRBP. Назначен ответственный: hrbp",
                    "ticket": "2996c3d1-9128-4102-a177-d65d47da8032",
                    "id": "88ad6b97-f110-409d-997e-e7e1d3d2d96b",
                    "date": "1733308374000",
                    "user": "updirect"
                },
                {
                    "date_display": "04 дек. 2024, 13:10",
                    "text": "Согласование Верхнеуровневый руководитель. Назначен ответственный: updirect",
                    "ticket": "2996c3d1-9128-4102-a177-d65d47da8032",
                    "id": "007a236c-e9c0-4702-92df-1ac4097d691f",
                    "date": "1733307022000",
                    "user": "direct"
                },
                {
                    "date_display": "04 дек. 2024, 13:08",
                    "text": "Согласование Нанимающий менеджер. Назначен ответственный: direct",
                    "ticket": "2996c3d1-9128-4102-a177-d65d47da8032",
                    "id": "f33d6fb9-2162-4ffc-bd1b-6602f7266949",
                    "date": "1733306926000",
                    "user": "hrbp"
                },
                {
                    "date_display": "04 дек. 2024, 13:07",
                    "text": "Создание заявки: Test Hrbp",
                    "ticket": "2996c3d1-9128-4102-a177-d65d47da8032",
                    "id": "069f8849-8694-4fde-98ff-c4016db50e3f",
                    "date": "1733306878000",
                    "user": "hrbp"
                }
            ],
            "responsibilities": "1",
            "employment_type": {
                "employment_type": "Гибрид",
                "id": "flex"
            },
            "org_structure": "Операционная дирекция => Департамент доставки => Управление собственной доставкой \"Ламода Экспресс\" => Дивизион Северо-Западный => Кластер Санкт-Петербург => Санкт-Петербург => Группа собственной сети ПВЗ => Пункт выдачи заказов Софьи Ковалевской 1к.1лит.А"
        }
    ],
    "totalPages": 1,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [
        [
            "id",
            99355110
        ],
        [
            "candidate_description",
            99355110
        ],
        [
            "prof_skills",
            99355110
        ],
        [
            "responsibilities",
            99355110
        ],
        [
            "per_bonus",
            99355110
        ],
        [
            "period_bonus.id",
            99355543
        ],
        [
            "period_bonus.period",
            99355543
        ],
        [
            "salary",
            99355110
        ],
        [
            "work_schedule",
            99355110
        ],
        [
            "work_place",
            99355110
        ],
        [
            "employment_type.id",
            99355539
        ],
        [
            "employment_type.employment_type",
            99355539
        ],
        [
            "job_rate",
            99355110
        ],
        [
            "reason_contract.id",
            99356721
        ],
        [
            "reason_contract.reason",
            99356721
        ],
        [
            "contract_period",
            99355110
        ],
        [
            "contract_type.id",
            99355542
        ],
        [
            "contract_type.type",
            99355542
        ],
        [
            "org_structure",
            99355110
        ],
        [
            "division.id",
            99325488
        ],
        [
            "division.full_hierarchy",
            99325488
        ],
        [
            "division.division_name",
            99325488
        ],
        [
            "division.division_num",
            99325488
        ],
        [
            "division.division_id",
            99325488
        ],
        [
            "virtual_team_other",
            99355110
        ],
        [
            "virtual_team.id",
            99355541
        ],
        [
            "virtual_team.team",
            99355541
        ],
        [
            "need_virtual_team",
            99355110
        ],
        [
            "company.id",
            99355537
        ],
        [
            "company.company",
            99355537
        ],
        [
            "position",
            99355110
        ],
        [
            "position_release_date",
            99355110
        ],
        [
            "resigning_empl_full_name_strng",
            99355110
        ],
        [
            "resigning_empl_full_name.id",
            99325487
        ],
        [
            "resigning_empl_full_name.employee_full_name",
            99325487
        ],
        [
            "resigning_empl_full_name.webuser_id.id",
            99325452
        ],
        [
            "resigning_empl_full_name.division_name",
            99325487
        ],
        [
            "resigning_empl_full_name.email",
            99325487
        ],
        [
            "resigning_empl_full_name.position",
            99325487
        ],
        [
            "replacement_status.id",
            99355534
        ],
        [
            "replacement_status.status",
            99355534
        ],
        [
            "reason_vacancy.id",
            99355533
        ],
        [
            "reason_vacancy.reason",
            99355533
        ],
        [
            "conf_search",
            99355110
        ],
        [
            "internal_candidate_name.id",
            99325487
        ],
        [
            "internal_candidate_name.employee_full_name",
            99325487
        ],
        [
            "internal_candidate_name.webuser_id.id",
            99325452
        ],
        [
            "internal_candidate_name.email",
            99325487
        ],
        [
            "internal_candidate_name.position",
            99325487
        ],
        [
            "internal_candidate_name.division_name",
            99325487
        ],
        [
            "which_candidate.id",
            99356522
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
            "recruiter.webuser_id.whom_delegate_ids.firstName",
            99325452
        ],
        [
            "recruiter.webuser_id.whom_delegate_ids.lastName",
            99325452
        ],
        [
            "recruiter.webuser_id.who_delegated_ids.id",
            99325452
        ],
        [
            "recruiter.webuser_id.who_delegated_ids.firstName",
            99325452
        ],
        [
            "recruiter.webuser_id.who_delegated_ids.lastName",
            99325452
        ],
        [
            "recruiter.webuser_id.role",
            99325452
        ],
        [
            "recruiter.webuser_id.email",
            99325452
        ],
        [
            "recruiter.email",
            99325487
        ],
        [
            "recruiter.division_name",
            99325487
        ],
        [
            "recruiter.position",
            99325487
        ],
        [
            "teamlead.id",
            99325487
        ],
        [
            "teamlead.employee_full_name",
            99325487
        ],
        [
            "teamlead.webuser_id.id",
            99325452
        ],
        [
            "teamlead.webuser_id.whom_delegate_ids.id",
            99325452
        ],
        [
            "teamlead.webuser_id.whom_delegate_ids.firstName",
            99325452
        ],
        [
            "teamlead.webuser_id.whom_delegate_ids.lastName",
            99325452
        ],
        [
            "teamlead.webuser_id.who_delegated_ids.id",
            99325452
        ],
        [
            "teamlead.webuser_id.who_delegated_ids.firstName",
            99325452
        ],
        [
            "teamlead.webuser_id.who_delegated_ids.lastName",
            99325452
        ],
        [
            "teamlead.webuser_id.role",
            99325452
        ],
        [
            "teamlead.webuser_id.email",
            99325452
        ],
        [
            "teamlead.email",
            99325487
        ],
        [
            "teamlead.division_name",
            99325487
        ],
        [
            "teamlead.position",
            99325487
        ],
        [
            "cnb.id",
            99325487
        ],
        [
            "cnb.employee_full_name",
            99325487
        ],
        [
            "cnb.webuser_id.id",
            99325452
        ],
        [
            "cnb.webuser_id.whom_delegate_ids.id",
            99325452
        ],
        [
            "cnb.webuser_id.whom_delegate_ids.firstName",
            99325452
        ],
        [
            "cnb.webuser_id.whom_delegate_ids.lastName",
            99325452
        ],
        [
            "cnb.webuser_id.who_delegated_ids.id",
            99325452
        ],
        [
            "cnb.webuser_id.who_delegated_ids.firstName",
            99325452
        ],
        [
            "cnb.webuser_id.who_delegated_ids.lastName",
            99325452
        ],
        [
            "cnb.webuser_id.email",
            99325452
        ],
        [
            "cnb.webuser_id.role",
            99325452
        ],
        [
            "cnb.division_name",
            99325487
        ],
        [
            "cnb.email",
            99325487
        ],
        [
            "cnb.position",
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
            "budget_holder.webuser_id.role",
            99325452
        ],
        [
            "budget_holder.webuser_id.email",
            99325452
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
            "budget_holder.position",
            99325487
        ],
        [
            "approval_2.id",
            99325487
        ],
        [
            "approval_2.employee_full_name",
            99325487
        ],
        [
            "approval_2.webuser_id.id",
            99325452
        ],
        [
            "approval_2.webuser_id.role",
            99325452
        ],
        [
            "approval_2.webuser_id.email",
            99325452
        ],
        [
            "approval_2.webuser_id.who_delegated_ids.id",
            99325452
        ],
        [
            "approval_2.webuser_id.who_delegated_ids.firstName",
            99325452
        ],
        [
            "approval_2.webuser_id.who_delegated_ids.lastName",
            99325452
        ],
        [
            "approval_2.webuser_id.whom_delegate_ids.id",
            99325452
        ],
        [
            "approval_2.webuser_id.whom_delegate_ids.firstName",
            99325452
        ],
        [
            "approval_2.webuser_id.whom_delegate_ids.lastName",
            99325452
        ],
        [
            "approval_2.email",
            99325487
        ],
        [
            "approval_2.position",
            99325487
        ],
        [
            "approval_2.division_name",
            99325487
        ],
        [
            "approval_1.id",
            99325487
        ],
        [
            "approval_1.employee_full_name",
            99325487
        ],
        [
            "approval_1.webuser_id.id",
            99325452
        ],
        [
            "approval_1.webuser_id.whom_delegate_ids.id",
            99325452
        ],
        [
            "approval_1.webuser_id.whom_delegate_ids.firstName",
            99325452
        ],
        [
            "approval_1.webuser_id.whom_delegate_ids.lastName",
            99325452
        ],
        [
            "approval_1.webuser_id.who_delegated_ids.id",
            99325452
        ],
        [
            "approval_1.webuser_id.who_delegated_ids.firstName",
            99325452
        ],
        [
            "approval_1.webuser_id.who_delegated_ids.lastName",
            99325452
        ],
        [
            "approval_1.webuser_id.email",
            99325452
        ],
        [
            "approval_1.webuser_id.role",
            99325452
        ],
        [
            "approval_1.division_name",
            99325487
        ],
        [
            "approval_1.email",
            99325487
        ],
        [
            "approval_1.position",
            99325487
        ],
        [
            "add_approval_2",
            99355110
        ],
        [
            "add_approval_1",
            99355110
        ],
        [
            "hr_bp.id",
            99325487
        ],
        [
            "hr_bp.employee_full_name",
            99325487
        ],
        [
            "hr_bp.webuser_id.id",
            99325452
        ],
        [
            "hr_bp.webuser_id.whom_delegate_ids.id",
            99325452
        ],
        [
            "hr_bp.webuser_id.whom_delegate_ids.firstName",
            99325452
        ],
        [
            "hr_bp.webuser_id.whom_delegate_ids.lastName",
            99325452
        ],
        [
            "hr_bp.webuser_id.who_delegated_ids.id",
            99325452
        ],
        [
            "hr_bp.webuser_id.who_delegated_ids.firstName",
            99325452
        ],
        [
            "hr_bp.webuser_id.who_delegated_ids.lastName",
            99325452
        ],
        [
            "hr_bp.webuser_id.email",
            99325452
        ],
        [
            "hr_bp.webuser_id.role",
            99325452
        ],
        [
            "hr_bp.division_name",
            99325487
        ],
        [
            "hr_bp.email",
            99325487
        ],
        [
            "hr_bp.position",
            99325487
        ],
        [
            "up_manager.id",
            99325487
        ],
        [
            "up_manager.employee_full_name",
            99325487
        ],
        [
            "up_manager.webuser_id.id",
            99325452
        ],
        [
            "up_manager.webuser_id.who_delegated_ids.id",
            99325452
        ],
        [
            "up_manager.webuser_id.who_delegated_ids.firstName",
            99325452
        ],
        [
            "up_manager.webuser_id.who_delegated_ids.lastName",
            99325452
        ],
        [
            "up_manager.webuser_id.whom_delegate_ids.id",
            99325452
        ],
        [
            "up_manager.webuser_id.whom_delegate_ids.firstName",
            99325452
        ],
        [
            "up_manager.webuser_id.whom_delegate_ids.lastName",
            99325452
        ],
        [
            "up_manager.webuser_id.email",
            99325452
        ],
        [
            "up_manager.webuser_id.role",
            99325452
        ],
        [
            "up_manager.division_name",
            99325487
        ],
        [
            "up_manager.email",
            99325487
        ],
        [
            "up_manager.position",
            99325487
        ],
        [
            "hr_bp_creator",
            99355110
        ],
        [
            "manager.id",
            99325487
        ],
        [
            "manager.employee_full_name",
            99325487
        ],
        [
            "manager.webuser_id.id",
            99325452
        ],
        [
            "manager.webuser_id.whom_delegate_ids.id",
            99325452
        ],
        [
            "manager.webuser_id.whom_delegate_ids.firstName",
            99325452
        ],
        [
            "manager.webuser_id.whom_delegate_ids.lastName",
            99325452
        ],
        [
            "manager.webuser_id.who_delegated_ids.id",
            99325452
        ],
        [
            "manager.webuser_id.who_delegated_ids.firstName",
            99325452
        ],
        [
            "manager.webuser_id.who_delegated_ids.lastName",
            99325452
        ],
        [
            "manager.webuser_id.email",
            99325452
        ],
        [
            "manager.webuser_id.role",
            99325452
        ],
        [
            "manager.division_name",
            99325487
        ],
        [
            "manager.email",
            99325487
        ],
        [
            "manager.position",
            99325487
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
            "responsible_employee_id.webuser_id.email",
            99325452
        ],
        [
            "responsible_employee_id.webuser_id.role",
            99325452
        ],
        [
            "responsible_employee_id.email",
            99325487
        ],
        [
            "responsible_employee_id.division_name",
            99325487
        ],
        [
            "responsible_employee_id.position",
            99325487
        ],
        [
            "date",
            99355110
        ],
        [
            "number",
            99355110
        ],
        [
            "logs.id",
            99356520
        ],
        [
            "logs.date_display",
            99356520
        ],
        [
            "logs.ticket.id",
            99355110
        ],
        [
            "logs.user.id",
            99325452
        ],
        [
            "logs.text",
            99356520
        ],
        [
            "logs.date",
            99356520
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
            "user_creator.webuser_id.email",
            99325452
        ],
        [
            "user_creator.webuser_id.role",
            99325452
        ],
        [
            "user_creator.email",
            99325487
        ],
        [
            "user_creator.division_name",
            99325487
        ],
        [
            "user_creator.position",
            99325487
        ],
        [
            "prev_status.id",
            99356519
        ],
        [
            "prev_status.status",
            99356519
        ],
        [
            "prev_status.next_status_ids.id",
            99356519
        ],
        [
            "prev_status.next_status_ids.status",
            99356519
        ],
        [
            "status.id",
            99356519
        ],
        [
            "status.status",
            99356519
        ],
        [
            "last_change_date",
            99355110
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
            "all_user_ids.webuser_id.email",
            99325452
        ],
        [
            "all_user_ids.webuser_id.role",
            99325452
        ],
        [
            "all_user_ids.division_name",
            99325487
        ],
        [
            "all_user_ids.email",
            99325487
        ],
        [
            "all_user_ids.position",
            99325487
        ],
        [
            "responsible_roles.id",
            99325477
        ],
        [
            "responsible_roles.visual_name",
            99325477
        ],
        [
            "last_user.id",
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
            "last_user.email",
            99325452
        ],
        [
            "last_user.role",
            99325452
        ],
        [
            "hide_income",
            99355110
        ],
        [
            "comment_salary",
            99355110
        ],
        [
            "cost_center",
            99355110
        ],
        [
            "analytics_ops.id",
            99357340
        ],
        [
            "analytics_ops.name",
            99357340
        ],
        [
            "position_name",
            99355110
        ],
        [
            "legal_direct.id",
            99325487
        ],
        [
            "legal_direct.employee_full_name",
            99325487
        ],
        [
            "management_direct.id",
            99325487
        ],
        [
            "management_direct.employee_full_name",
            99325487
        ],
        [
            "legal_position",
            99355110
        ],
        [
            "management_position",
            99355110
        ],
        [
            "legal_division.id",
            99325488
        ],
        [
            "legal_division.division_name",
            99325488
        ],
        [
            "management_division.id",
            99325488
        ],
        [
            "management_division.division_name",
            99325488
        ],
        [
            "structures_difference",
            99355110
        ],
        [
            "select_structure.id",
            99357339
        ],
        [
            "org_dev",
            99355110
        ],
        [
            "id_position",
            99355110
        ],
        [
            "vacancy_id",
            99355110
        ],
        [
            "budget_date",
            99355110
        ],
        [
            "cancel_reason",
            99355110
        ]
    ],
    "writeFields": [
        "candidate_description",
        "prof_skills",
        "responsibilities",
        "per_bonus",
        "period_bonus",
        "salary",
        "work_schedule",
        "work_place",
        "employment_type",
        "job_rate",
        "reason_contract",
        "contract_period",
        "contract_type",
        "org_structure",
        "division",
        "virtual_team_other",
        "virtual_team",
        "need_virtual_team",
        "company",
        "position",
        "position_release_date",
        "resigning_empl_full_name_strng",
        "resigning_empl_full_name",
        "replacement_status",
        "reason_vacancy",
        "conf_search",
        "internal_candidate_name",
        "which_candidate",
        "recruiter",
        "teamlead",
        "cnb",
        "budget_holder",
        "approval_2",
        "approval_1",
        "add_approval_2",
        "add_approval_1",
        "hr_bp",
        "up_manager",
        "hr_bp_creator",
        "manager",
        "id",
        "hide_income",
        "comment_salary",
        "cost_center",
        "analytics_ops",
        "position_name",
        "legal_direct",
        "management_direct",
        "legal_position",
        "management_position",
        "legal_division",
        "management_division",
        "structures_difference",
        "select_structure",
        "org_dev",
        "id_position",
        "vacancy_id",
        "budget_date",
        "user_creator",
        "cancel_reason"
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
            "jsonObject": "[{\"sysName\":\"roles_ad\",\"dataType\":\"arrayLink\",\"name\":\"\",\"id\":\"31521720185270928\",\"link\":\"roles_ad\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"dateLastActivity\",\"dataType\":\"string\",\"name\":\"dateLastActivity\",\"id\":\"10\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"json\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"dateCreated\",\"dataType\":\"string\",\"name\":\"dateCreated\",\"id\":\"13\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"json\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"isAuthorization\",\"dataType\":\"boolean\",\"name\":\"isAuthorization\",\"id\":\"9\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"json\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"notifications_counter\",\"dataType\":\"string\",\"name\":\"Notifications Counter\",\"id\":\"1\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"json\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"custom_labels\",\"dataType\":\"json\",\"name\":\"Custom labels\",\"id\":\"2\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"json\":true,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"phone\",\"dataType\":\"string\",\"name\":\"Phone\",\"id\":\"12\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"json\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"email\",\"dataType\":\"string\",\"name\":\"Email\",\"id\":\"11\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"json\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"userpic\",\"dataType\":\"file\",\"name\":\"User pic\",\"id\":\"3\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":{},\"groupName\":\"Contacts\",\"json\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"Username (login)\",\"id\":\"15\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"role\",\"dataType\":\"array\",\"name\":\"Roles\",\"id\":\"8\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":true},{\"sysName\":\"password\",\"dataType\":\"string\",\"name\":\"Password (hash)\",\"id\":\"14\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"firstName\",\"dataType\":\"string\",\"name\":\"First name\",\"id\":\"7\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"lastName\",\"dataType\":\"string\",\"name\":\"Last name\",\"id\":\"6\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"gender\",\"dataType\":\"string\",\"name\":\"Gender\",\"id\":\"5\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"isBlocked\",\"dataType\":\"boolean\",\"name\":\"Block user\",\"id\":\"4\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"systemMessage\",\"dataType\":\"string\",\"name\":\"System message\",\"id\":\"56921641637265680\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"employee\",\"dataType\":\"link\",\"name\":\"\",\"id\":\"65621717669435431\",\"link\":\"employees\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"position\",\"dataType\":\"string\",\"name\":\"Position\",\"id\":\"21611718980485707\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"division\",\"dataType\":\"string\",\"name\":\"Division\",\"id\":\"13761718980504077\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"isActive\",\"dataType\":\"boolean\",\"name\":\"isActive\",\"id\":\"28091718982360994\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"who_delegated_ids\",\"dataType\":\"arrayLink\",\"name\":\"Кто делегировал права?\",\"id\":\"18431723207371481\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"whom_delegate_ids\",\"dataType\":\"arrayLink\",\"name\":\"Кому делегировал права?\",\"id\":\"29491723207412497\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"all_bosses_ids\",\"dataType\":\"arrayLink\",\"name\":\"Все руководители вверх по иерархии\",\"id\":\"45451730474812010\",\"link\":\"employees\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"secret\",\"dataType\":\"string\",\"name\":\"secret\",\"id\":\"81131636839496227\",\"link\":\"\",\"group\":\"1636839487957\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"notif_Email\",\"dataType\":\"boolean\",\"name\":\"Notify me by Email\",\"id\":\"61231639915065277\",\"link\":\"\",\"group\":\"1639915049523\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Yes\",\"No\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"employees_first_day\",\"dataType\":\"arrayLink\",\"name\":\"Сотрудники 1 день\",\"id\":\"77871732470209469\",\"link\":\"onboarding\",\"group\":\"1639915049523\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false,\"array\":false}]",
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
                "json": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "array": false
            },
            "objectIDSysName": "id",
            "folderId": null
        },
        "99325477": {
            "networkID": 21335,
            "sysName": "roles",
            "name": "Roles",
            "id": 99325477,
            "dateCreated": "2024-05-20T16:01:07Z",
            "hidden": false,
            "dateHidden": null,
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
                "json": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "array": false
            },
            "objectIDSysName": "id",
            "folderId": 33811341
        },
        "99325487": {
            "networkID": 21335,
            "sysName": "employees",
            "name": "Employees",
            "id": 99325487,
            "dateCreated": "2024-05-14T07:46:19Z",
            "hidden": false,
            "dateHidden": null,
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
                "json": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "array": false
            },
            "objectIDSysName": "id",
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
                "json": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "array": false
            },
            "objectIDSysName": "id",
            "folderId": 33820256
        },
        "99355110": {
            "networkID": 21335,
            "sysName": "hiring",
            "name": "hiring",
            "id": 99355110,
            "dateCreated": "2024-11-13T12:57:10Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"org_structure\",\"dataType\":\"string\",\"name\":\"Организационная структура\",\"id\":\"12681731660914203\",\"link\":\"\",\"group\":\"1731661738585\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"cancel_reason\",\"dataType\":\"string\",\"name\":\"Укажите причину\",\"id\":\"13271732534584664\",\"link\":null,\"group\":\"1732097408116\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"hr_bp_creator\",\"dataType\":\"json\",\"name\":\"Заявка создана HR BP, вместо руководителя\",\"id\":\"13741732097541879\",\"link\":\"\",\"group\":\"1731662124558\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"checkboxes\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"multipleChoice\":[{\"value\":\"hrbp\",\"label\":null}]},\"groupName\":null,\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"add_approval_2\",\"dataType\":\"json\",\"name\":\"Добавить дополнительного согласующего?\",\"id\":\"14161732097917550\",\"link\":\"\",\"group\":\"1731662124558\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"checkboxes\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOption\":false,\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"multipleChoice\":[{\"value\":\"add\",\"label\":null}]},\"groupName\":null,\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"cnb\",\"dataType\":\"link\",\"name\":\"C&B\",\"id\":\"14371732098124414\",\"link\":\"employees\",\"group\":\"1731662124558\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"management_direct\",\"dataType\":\"link\",\"name\":\"ФИО руководителя\",\"id\":\"18191732523739162\",\"link\":\"employees\",\"group\":\"1731661738585\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":36,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"employment_type\",\"dataType\":\"link\",\"name\":\"Формат работы\",\"id\":\"18361731661141596\",\"link\":\"hg_employment_type\",\"group\":\"1731661738585\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":17,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"number\",\"dataType\":\"string\",\"name\":\"Номер заявки\",\"id\":\"19551732097216287\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"need_virtual_team\",\"dataType\":\"boolean\",\"name\":\"Нужна виртуальная команда?\",\"id\":\"20311731660658407\",\"link\":\"\",\"group\":\"1731661738585\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Да\",\"Нет\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"responsible_roles\",\"dataType\":\"arrayLink\",\"name\":\"Ответственные роли\",\"id\":\"20831732097292042\",\"link\":\"roles\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"analytics_ops\",\"dataType\":\"link\",\"name\":\"Категория персонала (Analytics for OPS)\",\"id\":\"21631732523965857\",\"link\":\"hg_analytics_for_ops\",\"group\":\"1731661738585\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":39,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"up_manager\",\"dataType\":\"link\",\"name\":\"Верхнеуровневый руководитель\",\"id\":\"21751732097711574\",\"link\":\"employees\",\"group\":\"1731662124558\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"budget_holder\",\"dataType\":\"link\",\"name\":\"Держатель бюджета\",\"id\":\"22461732098115380\",\"link\":\"employees\",\"group\":\"1731662124558\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"position_release_date\",\"dataType\":\"date\",\"name\":\"Дата освобождения позиции\",\"id\":\"24771731660505528\",\"link\":\"\",\"group\":\"1731661738585\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.YYYY\",\"timeFormat\":\"\",\"isUTC\":\"true\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"prof_skills\",\"dataType\":\"string\",\"name\":\"Профессиональные навыки\",\"id\":\"25741731662089756\",\"link\":\"\",\"group\":\"1731661738585\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":24,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"select_structure\",\"dataType\":\"link\",\"name\":\"В какой структуре будут происходить изменения?\",\"id\":\"26721732523217174\",\"link\":\"hg_select_structure\",\"group\":\"1731661738585\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":30,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"last_user\",\"dataType\":\"link\",\"name\":\"Кем изменено\",\"id\":\"27981732097155934\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"contract_period\",\"dataType\":\"string\",\"name\":\"Укажите период срочного договора\",\"id\":\"28591731660966461\",\"link\":\"\",\"group\":\"1731661738585\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"comment_salary\",\"dataType\":\"string\",\"name\":\"Комментарий к структуре надбавок\",\"id\":\"29541732524051837\",\"link\":null,\"group\":\"1731661738585\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":41,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"candidate_description\",\"dataType\":\"string\",\"name\":\"Портрет кандидата (только для OPS)\",\"id\":\"30681731662096240\",\"link\":\"\",\"group\":\"1731661738585\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":25,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"cost_center\",\"dataType\":\"string\",\"name\":\"Кост-центр\",\"id\":\"31801732524038668\",\"link\":null,\"group\":\"1731661738585\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":40,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"hide_income\",\"dataType\":\"boolean\",\"name\":\"Скрыть поля дохода?\",\"id\":\"34721732524127128\",\"link\":\"\",\"group\":\"1731661738585\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":42,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Да\",\"Нет\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"responsibilities\",\"dataType\":\"string\",\"name\":\"Обязанности\",\"id\":\"35381731662082846\",\"link\":\"\",\"group\":\"1731661738585\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":23,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"teamlead\",\"dataType\":\"link\",\"name\":\"Руководитель направления подбора персонала\",\"id\":\"36711732098134082\",\"link\":\"employees\",\"group\":\"1731662124558\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"virtual_team_other\",\"dataType\":\"string\",\"name\":\"Другое\",\"id\":\"37631731660847855\",\"link\":\"\",\"group\":\"1731661738585\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"id_position\",\"dataType\":\"string\",\"name\":\"Код позиции (из УШР)\",\"id\":\"37671732523177005\",\"link\":null,\"group\":\"1731661738585\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":28,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"date\",\"dataType\":\"date\",\"name\":\"Дата создания заявки\",\"id\":\"38501732097228191\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.YYYY\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"position_name\",\"dataType\":\"string\",\"name\":\"Position name\",\"id\":\"39831732523953542\",\"link\":null,\"group\":\"1731661738585\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":38,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"structures_difference\",\"dataType\":\"boolean\",\"name\":\"Есть ли разница в управленческой и юридической структурах?\",\"id\":\"40731732523540970\",\"link\":\"\",\"group\":\"1731661738585\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":31,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Да\",\"Нет\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"reason_contract\",\"dataType\":\"link\",\"name\":\"Обоснование срочного ТД\",\"id\":\"41551731661053754\",\"link\":\"hg_reason_fixed_contract_type\",\"group\":\"1731661738585\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"per_bonus\",\"dataType\":\"number\",\"name\":\"Процент премии\",\"id\":\"43691731662006890\",\"link\":\"\",\"group\":\"1731661738585\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":22,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"imask\":\"{\\n    mask: Number,\\n    min: -10000,\\n    max: 10000,\\n    thousandsSeparator: ' '\\n  }\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"company\",\"dataType\":\"link\",\"name\":\"Юр. лицо\",\"id\":\"45981731660649886\",\"link\":\"hg_company\",\"group\":\"1731661738585\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"legal_position\",\"dataType\":\"string\",\"name\":\"Должность\",\"id\":\"47821732523738367\",\"link\":null,\"group\":\"1731661738585\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":35,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"recruiter\",\"dataType\":\"link\",\"name\":\"Отвественный рекрутер\",\"id\":\"50501732098143748\",\"link\":\"employees\",\"group\":\"1731662124558\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"resigning_empl_full_name_strng\",\"dataType\":\"string\",\"name\":\"ФИО заменяемого сотрудника\",\"id\":\"50701731660482112\",\"link\":\"\",\"group\":\"1731661738585\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"prev_status\",\"dataType\":\"link\",\"name\":\"Предыдущий статус\",\"id\":\"50941732097133797\",\"link\":\"hg_statuses\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"internal_candidate_name\",\"dataType\":\"link\",\"name\":\"ФИО внутреннего кандидата\",\"id\":\"51041732098190614\",\"link\":\"employees\",\"group\":\"1731662124558\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"user_creator\",\"dataType\":\"link\",\"name\":\"Инициатор заявки\",\"id\":\"51381732097181650\",\"link\":\"employees\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"hr_bp\",\"dataType\":\"link\",\"name\":\"Cогласующий HR BP\",\"id\":\"54801732097785732\",\"link\":\"employees\",\"group\":\"1731662124558\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"last_change_date\",\"dataType\":\"date\",\"name\":\"Дата последнего изменения\",\"id\":\"54871732097356664\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.YYYY\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"all_user_ids\",\"dataType\":\"arrayLink\",\"name\":\"Все пользователи, относящиеся к заявке\",\"id\":\"56911732097330019\",\"link\":\"employees\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"other_reason_contract\",\"dataType\":\"string\",\"name\":\"Другое\",\"id\":\"58431732878160615\",\"link\":\"\",\"group\":\"1731661738585\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":43,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"position\",\"dataType\":\"string\",\"name\":\"Должность\",\"id\":\"59801731660584994\",\"link\":\"\",\"group\":\"1731661738585\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"approval_2\",\"dataType\":\"link\",\"name\":\"Дополнительный согласующий (руководитель) 2\",\"id\":\"60781732097962282\",\"link\":\"employees\",\"group\":\"1731662124558\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"job_rate\",\"dataType\":\"decimal\",\"name\":\"Коэффициент занятости\",\"id\":\"61351731661078792\",\"link\":\"\",\"group\":\"1731661738585\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":16,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"imask\":\"{\\n    mask: Number,\\n    scale: 2,\\n    thousandsSeparator: '',\\n    padFractionalZeros: false,\\n    normalizeZeros: true,\\n    radix: ',',\\n    mapToRadix: ['.']\\n  }\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"logs\",\"dataType\":\"arrayLink\",\"name\":\"История изменений\",\"id\":\"61921732097200714\",\"link\":\"hg_logs\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"virtual_team\",\"dataType\":\"link\",\"name\":\"Виртуальная команда, в которой будет работать сотрудник\",\"id\":\"62151731660743623\",\"link\":\"hg_virtual_team\",\"group\":\"1731661738585\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"resigning_empl_full_name\",\"dataType\":\"link\",\"name\":\"ФИО заменяемого сотрудника\",\"id\":\"64831731660388600\",\"link\":\"employees\",\"group\":\"1731661738585\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"which_candidate\",\"dataType\":\"link\",\"name\":\"Кем будет закрыта вакансия?\",\"id\":\"65291732098169032\",\"link\":\"hg_which_candidate\",\"group\":\"1731662124558\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"work_schedule\",\"dataType\":\"string\",\"name\":\"График и время работы\",\"id\":\"66861731661781138\",\"link\":\"\",\"group\":\"1731661738585\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":19,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"reason_vacancy\",\"dataType\":\"link\",\"name\":\"Причина появления вакансии\",\"id\":\"68821731659809724\",\"link\":\"hg_reason_of_vacancy\",\"group\":\"1731661738585\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"contract_type\",\"dataType\":\"link\",\"name\":\"Тип договора\",\"id\":\"69111731660937960\",\"link\":\"hg_contract_type\",\"group\":\"1731661738585\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"salary\",\"dataType\":\"decimal\",\"name\":\"Оклад без РКиСН (gross) руб/мес\",\"id\":\"69361731661843194\",\"link\":\"\",\"group\":\"1731661738585\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":20,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"imask\":\"{\\n    mask: Number,\\n    scale: 2,\\n    thousandsSeparator: '',\\n    padFractionalZeros: false,\\n    normalizeZeros: true,\\n    radix: ',',\\n    mapToRadix: ['.']\\n  }\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"period_bonus\",\"dataType\":\"link\",\"name\":\"Периодичность выплаты премии\",\"id\":\"70001731661977055\",\"link\":\"hg_period_bonus\",\"group\":\"1731661738585\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":21,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"replacement_status\",\"dataType\":\"link\",\"name\":\"Статус заменяемого сотрудника\",\"id\":\"73611731660160163\",\"link\":\"hg_replacement_status\",\"group\":\"1731661738585\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"management_division\",\"dataType\":\"link\",\"name\":\"Подразделение\",\"id\":\"74581732523685221\",\"link\":\"structure\",\"group\":\"1731661738585\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":32,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"legal_direct\",\"dataType\":\"link\",\"name\":\"ФИО руководителя\",\"id\":\"74661732523748577\",\"link\":\"employees\",\"group\":\"1731661738585\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":37,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"org_dev\",\"dataType\":\"boolean\",\"name\":\"Нужен OrgDev?\",\"id\":\"75441732523216236\",\"link\":\"\",\"group\":\"1731661738585\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":29,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Да\",\"Нет\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"conf_search\",\"dataType\":\"boolean\",\"name\":\"Конфиденциальный поиск\",\"id\":\"75771731659760040\",\"link\":\"\",\"group\":\"1731661738585\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Да\",\"Нет\"],\"hideStandardBooleanIcons\":false,\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"status\",\"dataType\":\"link\",\"name\":\"Статус\",\"id\":\"77021732097122174\",\"link\":\"hg_statuses\",\"group\":\"0\",\"tags\":\"\",\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[\"id\"],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":true,\"array\":false},{\"sysName\":\"budget_date\",\"dataType\":\"date\",\"name\":\"Бюджетная дата от C&B\",\"id\":\"77191732523054191\",\"link\":\"\",\"group\":\"1731661738585\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":26,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.YYYY\",\"timeFormat\":\"\",\"isUTC\":\"true\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"legal_division\",\"dataType\":\"link\",\"name\":\"Подразделение\",\"id\":\"79361732523718953\",\"link\":\"structure\",\"group\":\"1731661738585\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":33,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"responsible_employee_id\",\"dataType\":\"link\",\"name\":\"Ответственный за текущий этап\",\"id\":\"80521732097268481\",\"link\":\"employees\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"vacancy_id\",\"dataType\":\"string\",\"name\":\"ID вакансии (из Optimacros)\",\"id\":\"85101732523164507\",\"link\":null,\"group\":\"1731661738585\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":27,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"approval_1\",\"dataType\":\"link\",\"name\":\"Дополнительный согласующий (руководитель) 1 \",\"id\":\"85491732097941627\",\"link\":\"employees\",\"group\":\"1731662124558\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"add_approval_1\",\"dataType\":\"json\",\"name\":\"Добавить дополнительного согласующего?\",\"id\":\"93711732097810014\",\"link\":\"\",\"group\":\"1731662124558\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"checkboxes\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"multipleChoice\":[{\"value\":\"add\",\"label\":null}]},\"groupName\":null,\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"division\",\"dataType\":\"link\",\"name\":\"Подразделение\",\"id\":\"93991731660871577\",\"link\":\"structure\",\"group\":\"1731661738585\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"manager\",\"dataType\":\"link\",\"name\":\"Нанимающий менеджер\",\"id\":\"94501732097520540\",\"link\":\"employees\",\"group\":\"1731662124558\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"management_position\",\"dataType\":\"string\",\"name\":\"Должность\",\"id\":\"95841732523725558\",\"link\":null,\"group\":\"1731661738585\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":34,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"work_place\",\"dataType\":\"string\",\"name\":\"Место работы\",\"id\":\"99931731661775579\",\"link\":\"\",\"group\":\"1731661738585\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":18,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false}]",
            "jsonGroupSettings": "[{\"id\":1732097408116,\"name\":\"Отмена заявок\",\"order\":0},{\"id\":1731661738585,\"name\":\"Общие данные\",\"order\":1},{\"id\":1731662124558,\"name\":\"Участники процесса согласования\",\"order\":2}]",
            "jsonViewIdSettings": null,
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-12-04T10:31:27Z",
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
                "json": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "array": false
            },
            "objectIDSysName": "id",
            "folderId": 33827348
        },
        "99355533": {
            "networkID": 21335,
            "sysName": "hg_reason_of_vacancy",
            "name": "hg_reason_of_vacancy",
            "id": 99355533,
            "dateCreated": "2024-11-15T08:39:14Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"reason\",\"dataType\":\"string\",\"name\":\"Reason\",\"id\":\"15771715691639283\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false}]",
            "jsonGroupSettings": "[]",
            "jsonViewIdSettings": "[{\"sysName\":\"reason\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-11-15T08:44:18Z",
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
                "json": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "array": false
            },
            "objectIDSysName": "id",
            "folderId": 33827350
        },
        "99355534": {
            "networkID": 21335,
            "sysName": "hg_replacement_status",
            "name": "hg_replacement_status",
            "id": 99355534,
            "dateCreated": "2024-11-15T08:43:35Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"status\",\"dataType\":\"string\",\"name\":\"Status\",\"id\":\"45011731660222263\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"status\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-11-15T08:44:11Z",
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
                "json": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "array": false
            },
            "objectIDSysName": "id",
            "folderId": 33827350
        },
        "99355537": {
            "networkID": 21335,
            "sysName": "hg_company",
            "name": "hg_company",
            "id": 99355537,
            "dateCreated": "2024-11-15T08:51:32Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"company\",\"dataType\":\"string\",\"name\":\"Company\",\"id\":\"29941731661341049\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"company\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-11-15T09:02:45Z",
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
                "json": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "array": false
            },
            "objectIDSysName": "id",
            "folderId": 33827350
        },
        "99355539": {
            "networkID": 21335,
            "sysName": "hg_employment_type",
            "name": "hg_employment_type",
            "id": 99355539,
            "dateCreated": "2024-11-15T09:00:42Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"employment_type\",\"dataType\":\"string\",\"name\":\"Тип занятости\",\"id\":\"11211716226454609\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false}]",
            "jsonGroupSettings": "[]",
            "jsonViewIdSettings": "[{\"sysName\":\"employment_type\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-11-15T09:02:53Z",
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
                "json": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "array": false
            },
            "objectIDSysName": "id",
            "folderId": 33827350
        },
        "99355541": {
            "networkID": 21335,
            "sysName": "hg_virtual_team",
            "name": "hg_virtual_team",
            "id": 99355541,
            "dateCreated": "2024-11-15T09:05:55Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"team\",\"dataType\":\"string\",\"name\":\"Team\",\"id\":\"21921731661558011\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"team\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-11-15T09:06:10Z",
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
                "json": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "array": false
            },
            "objectIDSysName": "id",
            "folderId": 33827350
        },
        "99355542": {
            "networkID": 21335,
            "sysName": "hg_contract_type",
            "name": "hg_contract_type",
            "id": 99355542,
            "dateCreated": "2024-11-15T09:06:58Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"type\",\"dataType\":\"string\",\"name\":\"Type\",\"id\":\"61721731661621376\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"type\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-11-15T09:07:20Z",
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
                "json": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "array": false
            },
            "objectIDSysName": "id",
            "folderId": 33827350
        },
        "99355543": {
            "networkID": 21335,
            "sysName": "hg_period_bonus",
            "name": "hg_period_bonus",
            "id": 99355543,
            "dateCreated": "2024-11-15T09:17:57Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"period\",\"dataType\":\"string\",\"name\":\"Period\",\"id\":\"13291731662283346\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"period\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-11-15T09:18:13Z",
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
                "json": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "array": false
            },
            "objectIDSysName": "id",
            "folderId": 33827350
        },
        "99356519": {
            "networkID": 21335,
            "sysName": "hg_statuses",
            "name": "hg_statuses",
            "id": 99356519,
            "dateCreated": "2024-11-20T10:28:36Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"next_status_ids\",\"dataType\":\"arrayLink\",\"name\":\"Допустимый следующий статус\",\"id\":\"27461729716723723\",\"link\":\"hg_statuses\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"prev_stat\",\"dataType\":\"arrayLink\",\"name\":\"Предыдущий статус\",\"id\":\"58011723473133112\",\"link\":\"hg_statuses\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"status\",\"dataType\":\"string\",\"name\":\"Cтатус\",\"id\":\"68061716237170513\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false}]",
            "jsonGroupSettings": "[]",
            "jsonViewIdSettings": "[{\"sysName\":\"status\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":false,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": false,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-11-26T21:45:27Z",
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
                "json": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "array": false
            },
            "objectIDSysName": "id",
            "folderId": 33827350
        },
        "99356520": {
            "networkID": 21335,
            "sysName": "hg_logs",
            "name": "hg_logs",
            "id": 99356520,
            "dateCreated": "2024-11-20T10:29:02Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"date\",\"dataType\":\"date\",\"name\":\"Дата изменения\",\"id\":\"58751717136726535\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"text\",\"dataType\":\"string\",\"name\":\"Изменение заявки\",\"id\":\"13041717136793732\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"user\",\"dataType\":\"link\",\"name\":\"Кто внес изменения\",\"id\":\"83101717136837464\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ticket\",\"dataType\":\"link\",\"name\":\"Номер заявки\",\"id\":\"45681717136838095\",\"link\":\"hiring\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"date_display\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"87491717137718793\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false}]",
            "jsonGroupSettings": "[]",
            "jsonViewIdSettings": null,
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-11-29T07:39:56Z",
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
                "json": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "array": false
            },
            "objectIDSysName": "id",
            "folderId": 33827350
        },
        "99356522": {
            "networkID": 21335,
            "sysName": "hg_which_candidate",
            "name": "hg_which_candidate",
            "id": 99356522,
            "dateCreated": "2024-11-20T10:34:17Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"candidate\",\"dataType\":\"string\",\"name\":\"Candidate\",\"id\":\"56621732098580969\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false}]",
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
                "json": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "array": false
            },
            "objectIDSysName": "id",
            "folderId": 33827350
        },
        "99356721": {
            "networkID": 21335,
            "sysName": "hg_reason_fixed_contract_type",
            "name": "hg_reason_fixed_contract_type",
            "id": 99356721,
            "dateCreated": "2024-11-21T11:16:21Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"reason\",\"name\":\"Reason\",\"dataType\":\"string\",\"id\":\"74141732187791268\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"reason\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-11-21T11:16:41Z",
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
                "json": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "array": false
            },
            "objectIDSysName": "id",
            "folderId": 33827350
        },
        "99357339": {
            "networkID": 21335,
            "sysName": "hg_select_structure",
            "name": "hg_select_structure",
            "id": 99357339,
            "dateCreated": "2024-11-25T08:29:03Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"structure\",\"name\":\"Structure\",\"dataType\":\"string\",\"id\":\"75581732523349715\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"structure\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-11-25T08:29:31Z",
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
                "json": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "array": false
            },
            "objectIDSysName": "id",
            "folderId": 33827350
        },
        "99357340": {
            "networkID": 21335,
            "sysName": "hg_analytics_for_ops",
            "name": "hg_analytics_for_ops",
            "id": 99357340,
            "dateCreated": "2024-11-25T08:45:28Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"name\",\"name\":\"name\",\"dataType\":\"string\",\"id\":\"88871717102762537\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false}]",
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
                "json": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "array": false
            },
            "objectIDSysName": "id",
            "folderId": 33827350
        }
    },
    "isSuccessWrite": false,
    "writeError": null,
    "writeResponse": null,
    "fileds": [
        {
            "sysName": "candidate_description",
            "dataType": "string",
            "name": "Портрет кандидата (только для OPS)",
            "id": "30681731662096240",
            "link": "",
            "group": "1731661738585",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 25,
            "linkIndexFieldSysName": [],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": {},
            "groupName": null,
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "prof_skills",
            "dataType": "string",
            "name": "Профессиональные навыки",
            "id": "25741731662089756",
            "link": "",
            "group": "1731661738585",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 24,
            "linkIndexFieldSysName": [],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": {},
            "groupName": null,
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "responsibilities",
            "dataType": "string",
            "name": "Обязанности",
            "id": "35381731662082846",
            "link": "",
            "group": "1731661738585",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 23,
            "linkIndexFieldSysName": [],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": {},
            "groupName": null,
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "per_bonus",
            "dataType": "number",
            "name": "Процент премии",
            "id": "43691731662006890",
            "link": "",
            "group": "1731661738585",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 22,
            "linkIndexFieldSysName": [],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": "positiveNum",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "period_bonus",
            "dataType": "link",
            "name": "Периодичность выплаты премии",
            "id": "70001731661977055",
            "link": "hg_period_bonus",
            "group": "1731661738585",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "salary",
            "dataType": "decimal",
            "name": "Оклад без РКиСН (gross) руб/мес",
            "id": "69361731661843194",
            "link": "",
            "group": "1731661738585",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "work_schedule",
            "dataType": "string",
            "name": "График и время работы",
            "id": "66861731661781138",
            "link": "",
            "group": "1731661738585",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "work_place",
            "dataType": "string",
            "name": "Место работы",
            "id": "99931731661775579",
            "link": "",
            "group": "1731661738585",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "employment_type",
            "dataType": "link",
            "name": "Формат работы",
            "id": "18361731661141596",
            "link": "hg_employment_type",
            "group": "1731661738585",
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
            "format": null,
            "formatOptions": {},
            "groupName": null,
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "job_rate",
            "dataType": "decimal",
            "name": "Коэффициент занятости",
            "id": "61351731661078792",
            "link": "",
            "group": "1731661738585",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "reason_contract",
            "dataType": "link",
            "name": "Обоснование срочного ТД",
            "id": "41551731661053754",
            "link": "hg_reason_fixed_contract_type",
            "group": "1731661738585",
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
            "format": null,
            "formatOptions": {},
            "groupName": null,
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "contract_period",
            "dataType": "string",
            "name": "Укажите период срочного договора",
            "id": "28591731660966461",
            "link": "",
            "group": "1731661738585",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "contract_type",
            "dataType": "link",
            "name": "Тип договора",
            "id": "69111731660937960",
            "link": "hg_contract_type",
            "group": "1731661738585",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "org_structure",
            "dataType": "string",
            "name": "Организационная структура",
            "id": "12681731660914203",
            "link": "",
            "group": "1731661738585",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "division",
            "dataType": "link",
            "name": "Подразделение",
            "id": "93991731660871577",
            "link": "structure",
            "group": "1731661738585",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "virtual_team_other",
            "dataType": "string",
            "name": "Другое",
            "id": "37631731660847855",
            "link": "",
            "group": "1731661738585",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "virtual_team",
            "dataType": "link",
            "name": "Виртуальная команда, в которой будет работать сотрудник",
            "id": "62151731660743623",
            "link": "hg_virtual_team",
            "group": "1731661738585",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "need_virtual_team",
            "dataType": "boolean",
            "name": "Нужна виртуальная команда?",
            "id": "20311731660658407",
            "link": "",
            "group": "1731661738585",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "company",
            "dataType": "link",
            "name": "Юр. лицо",
            "id": "45981731660649886",
            "link": "hg_company",
            "group": "1731661738585",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "position",
            "dataType": "string",
            "name": "Должность",
            "id": "59801731660584994",
            "link": "",
            "group": "1731661738585",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "position_release_date",
            "dataType": "date",
            "name": "Дата освобождения позиции",
            "id": "24771731660505528",
            "link": "",
            "group": "1731661738585",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "resigning_empl_full_name_strng",
            "dataType": "string",
            "name": "ФИО заменяемого сотрудника",
            "id": "50701731660482112",
            "link": "",
            "group": "1731661738585",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "resigning_empl_full_name",
            "dataType": "link",
            "name": "ФИО заменяемого сотрудника",
            "id": "64831731660388600",
            "link": "employees",
            "group": "1731661738585",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "replacement_status",
            "dataType": "link",
            "name": "Статус заменяемого сотрудника",
            "id": "73611731660160163",
            "link": "hg_replacement_status",
            "group": "1731661738585",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "reason_vacancy",
            "dataType": "link",
            "name": "Причина появления вакансии",
            "id": "68821731659809724",
            "link": "hg_reason_of_vacancy",
            "group": "1731661738585",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "conf_search",
            "dataType": "boolean",
            "name": "Конфиденциальный поиск",
            "id": "75771731659760040",
            "link": "",
            "group": "1731661738585",
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
                "hideStandardBooleanIcons": false,
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "internal_candidate_name",
            "dataType": "link",
            "name": "ФИО внутреннего кандидата",
            "id": "51041732098190614",
            "link": "employees",
            "group": "1731662124558",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "which_candidate",
            "dataType": "link",
            "name": "Кем будет закрыта вакансия?",
            "id": "65291732098169032",
            "link": "hg_which_candidate",
            "group": "1731662124558",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "recruiter",
            "dataType": "link",
            "name": "Отвественный рекрутер",
            "id": "50501732098143748",
            "link": "employees",
            "group": "1731662124558",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "teamlead",
            "dataType": "link",
            "name": "Руководитель направления подбора персонала",
            "id": "36711732098134082",
            "link": "employees",
            "group": "1731662124558",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "cnb",
            "dataType": "link",
            "name": "C&B",
            "id": "14371732098124414",
            "link": "employees",
            "group": "1731662124558",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "budget_holder",
            "dataType": "link",
            "name": "Держатель бюджета",
            "id": "22461732098115380",
            "link": "employees",
            "group": "1731662124558",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "approval_2",
            "dataType": "link",
            "name": "Дополнительный согласующий (руководитель) 2",
            "id": "60781732097962282",
            "link": "employees",
            "group": "1731662124558",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "approval_1",
            "dataType": "link",
            "name": "Дополнительный согласующий (руководитель) 1 ",
            "id": "85491732097941627",
            "link": "employees",
            "group": "1731662124558",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "add_approval_2",
            "dataType": "json",
            "name": "Добавить дополнительного согласующего?",
            "id": "14161732097917550",
            "link": "",
            "group": "1731662124558",
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
                "customOption": false,
                "customOptionPlaceholder": "Describe your option",
                "range": {},
                "customOptionType": "textarea",
                "dateFormat": "DD/MM/Y",
                "timeFormat": " HH:mm",
                "isUTC": "false",
                "multipleChoice": [
                    {
                        "value": "add",
                        "label": null
                    }
                ]
            },
            "groupName": null,
            "json": true,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "add_approval_1",
            "dataType": "json",
            "name": "Добавить дополнительного согласующего?",
            "id": "93711732097810014",
            "link": "",
            "group": "1731662124558",
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
                        "value": "add",
                        "label": null
                    }
                ]
            },
            "groupName": null,
            "json": true,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "hr_bp",
            "dataType": "link",
            "name": "Cогласующий HR BP",
            "id": "54801732097785732",
            "link": "employees",
            "group": "1731662124558",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "up_manager",
            "dataType": "link",
            "name": "Верхнеуровневый руководитель",
            "id": "21751732097711574",
            "link": "employees",
            "group": "1731662124558",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "hr_bp_creator",
            "dataType": "json",
            "name": "Заявка создана HR BP, вместо руководителя",
            "id": "13741732097541879",
            "link": "",
            "group": "1731662124558",
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
            "json": true,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "manager",
            "dataType": "link",
            "name": "Нанимающий менеджер",
            "id": "94501732097520540",
            "link": "employees",
            "group": "1731662124558",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "hide_income",
            "dataType": "boolean",
            "name": "Скрыть поля дохода?",
            "id": "34721732524127128",
            "link": "",
            "group": "1731661738585",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 42,
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "comment_salary",
            "dataType": "string",
            "name": "Комментарий к структуре надбавок",
            "id": "29541732524051837",
            "link": null,
            "group": "1731661738585",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "cost_center",
            "dataType": "string",
            "name": "Кост-центр",
            "id": "31801732524038668",
            "link": null,
            "group": "1731661738585",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 40,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "analytics_ops",
            "dataType": "link",
            "name": "Категория персонала (Analytics for OPS)",
            "id": "21631732523965857",
            "link": "hg_analytics_for_ops",
            "group": "1731661738585",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 39,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "position_name",
            "dataType": "string",
            "name": "Position name",
            "id": "39831732523953542",
            "link": null,
            "group": "1731661738585",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 38,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "legal_direct",
            "dataType": "link",
            "name": "ФИО руководителя",
            "id": "74661732523748577",
            "link": "employees",
            "group": "1731661738585",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 37,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "management_direct",
            "dataType": "link",
            "name": "ФИО руководителя",
            "id": "18191732523739162",
            "link": "employees",
            "group": "1731661738585",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 36,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "legal_position",
            "dataType": "string",
            "name": "Должность",
            "id": "47821732523738367",
            "link": null,
            "group": "1731661738585",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 35,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "management_position",
            "dataType": "string",
            "name": "Должность",
            "id": "95841732523725558",
            "link": null,
            "group": "1731661738585",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 34,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "legal_division",
            "dataType": "link",
            "name": "Подразделение",
            "id": "79361732523718953",
            "link": "structure",
            "group": "1731661738585",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "management_division",
            "dataType": "link",
            "name": "Подразделение",
            "id": "74581732523685221",
            "link": "structure",
            "group": "1731661738585",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "structures_difference",
            "dataType": "boolean",
            "name": "Есть ли разница в управленческой и юридической структурах?",
            "id": "40731732523540970",
            "link": "",
            "group": "1731661738585",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "select_structure",
            "dataType": "link",
            "name": "В какой структуре будут происходить изменения?",
            "id": "26721732523217174",
            "link": "hg_select_structure",
            "group": "1731661738585",
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
            "formatOptions": null,
            "groupName": null,
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "org_dev",
            "dataType": "boolean",
            "name": "Нужен OrgDev?",
            "id": "75441732523216236",
            "link": "",
            "group": "1731661738585",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "id_position",
            "dataType": "string",
            "name": "Код позиции (из УШР)",
            "id": "37671732523177005",
            "link": null,
            "group": "1731661738585",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "vacancy_id",
            "dataType": "string",
            "name": "ID вакансии (из Optimacros)",
            "id": "85101732523164507",
            "link": null,
            "group": "1731661738585",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 27,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "budget_date",
            "dataType": "date",
            "name": "Бюджетная дата от C&B",
            "id": "77191732523054191",
            "link": "",
            "group": "1731661738585",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 26,
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "user_creator",
            "dataType": "link",
            "name": "Инициатор заявки",
            "id": "51381732097181650",
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
            "json": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "cancel_reason",
            "dataType": "string",
            "name": "Укажите причину",
            "id": "13271732534584664",
            "link": null,
            "group": "1732097408116",
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
            "json": false,
            "typeVariable": {},
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
