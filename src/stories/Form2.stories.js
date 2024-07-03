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
    "sl": "CreateD__contract",
    "pageSize": "10",
    "headerField": null,
    "params": {
        "steps": [
            {
                "id": "default_step",
                "sysName": "0",
                "elements": [
                    {
                        "id": "elmnt_1719394970967",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17193951529810.42334231210421030201123",
                                "_action": "action_1719394984117"
                            }
                        ],
                        "_actions_in_a_row": 1
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
                    },
                    {
                        "id": "elmnt_1719525973450",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17195259765680.1211241402044303200204",
                                "_action": "action_1719394984117"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_1719395007134",
                "sysName": "create",
                "elements": [
                    {
                        "id": "elmnt_1719395009366",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17193950119740.41012123233404113200243",
                                "_field": "sum"
                            },
                            {
                                "id": "17193950299340.21213332401344444203233",
                                "_field": "monthQuantity"
                            },
                            {
                                "id": "17193950404180.20340001424103003130111",
                                "_field": "contractServiceId",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "getContractService"
                            },
                            {
                                "id": "17193950876800.033212210141131431440314",
                                "_field": "rateTypeId",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "getRateType"
                            },
                            {
                                "id": "17193953532870.0120213010112330230044102",
                                "_field": "dateStart"
                            },
                            {
                                "id": "17195254126660.4301033321143131413202",
                                "_field": "basic",
                                "_field_set_default": true,
                                "_field_default_value": "1.1.\tЗаказчик намерен осуществить запуск производства наборов детских конструкторов (далее Продукция):  заключить договоры с обладателями прав на использование анимационных фильмов (далее «правообладатели») на использование анимационных фильмов (элементов дизайна/картинок/рисунков/логотипов/персонажей героев, домов и др.) (далее «оригинальные произведения) при производстве наборов детских конструкторов (далее Продукция»);  осуществить производство Продукции, согласовав с Правообладателем элементы Продукции (дизайн макеты, образцы Продукции) в соответствии с установленными Правообладателями правилами.  1.2. Автор намерен принять участие в производстве наборов детских конструкторов:  создать модели-прототипы наборов детских конструкторов, осуществив переработку Оригинальных произведений (далее «создать Производные произведения»); осуществлять взаимодействие с Правообладателями по согласованию элементов Продукции (дизайн макеты, образцы Продукции) в соответствии с установленными Правообладателями правилами; осуществить взаимодействие с заводом изготовителем в целях осуществления контроля за соответствием готовой Продукции утвержденному Правообладателем дизайну; осуществлять взаимодействие с патентными поверенными (по запросу Заказчика), в случае регистрации Заказчиком полезных моделей на Производные произведения.  1.3. Производные произведения включают в себя:  •\tмодели-прототипы деталей конструктора; •\tвиртуальные модели деталей конструктора в программе stud.io; •\tинструкцию по сборке модели; •\tсписок элементов, необходимых для производства конструктора/детали конструктора.",
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1719840626676",
                                        "_conditionalView_operator": "!==",
                                        "_conditionalView_field": "contractServiceId",
                                        "_conditionalView_value": "construction"
                                    }
                                ]
                            },
                            {
                                "id": "17195254128740.44442140004203043232333",
                                "_field": "body",
                                "_conditionalView": true,
                                "_field_set_default": true,
                                "_field_default_value": "2.1. Автор, на условиях настоящего Договора и приложений к нему, обязуется по заказу Заказчика оказывать следующие услуги: 2.1.1. создавать модели-прототипы наборов детских конструкторов в целях демонстрации Правообладателям (далее «Демонстрационные модели») и передавать Заказчику в порядке отчуждения исключительные права на использование Демонстрационной модели; 2.1.2.  на основе предоставленного Заказчиком Brandbook от Правообладателя перерабатывать Оригинальные произведения и создавать на их основе Производные произведения - модели-прототипы наборов детских конструкторов, передавать Заказчику в порядке отчуждения исключительные права на использование Производных произведений; 2.1.3. создавать   инструкции по сборке моделей и списки элементов, необходимых для производства Продукции; 2.1.4. оказывать Заказчику содействие в части согласования Производных произведений с Правообладателями, патентными поверенными, привлеченными Заказчиком, заводами–изготовителями Продукции на каждом этапе ее создания (далее «Услуги»). 2.2.  Заказчик обязуется выплачивать Автору вознаграждение за оказание Услуг и отчуждение в полном объеме исключительных (авторских) прав на создаваемые в рамках исполнения настоящего Договора и Приложений к нему Производные произведения. 2.3. Момент передачи прав на Демонстрационную модель/Производные произведения (момент создания Демонстрационных моделей/Производных произведений (доработанных Производных произведений))– передача Демонстрационных моделей/Производных произведений (доработанных Производных произведений) Заказчику по электронным каналам связи (п. 4.4 Договора).  2.4.\tАвтор подтверждает право Заказчика не указывать имя Автора при использовании Демонстрационных моделей/Производных произведений (право на анонимное использование).",
                                "_conditions": [
                                    {
                                        "id": "condition_1719840797731",
                                        "_conditionalView_value": "",
                                        "_conditionalView_operator": "isNull",
                                        "_conditionalView_field": "contractServiceId"
                                    }
                                ]
                            },
                            {
                                "id": "17195620121210.133412212143002014303412",
                                "_field": "isWithPhoto"
                            }
                        ],
                        "_input_fields_in_a_row": 8,
                        "_input_fields_in_a_row_column": "column",
                        "_conditionalView": false
                    },
                    {
                        "id": "elmnt_1719395116252",
                        "type": "submit",
                        "submitKeepModel": true,
                        "submitLabel": "Создать договор",
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1719395267721",
                                "_conditionalView_field": "rateTypeId",
                                "_conditionalView_operator": "isNotNull"
                            },
                            {
                                "id": "condition_1719395281419",
                                "_conditionalView_field": "contractServiceId",
                                "_conditionalView_operator": "isNotNull"
                            },
                            {
                                "id": "condition_1719395291986",
                                "_conditionalView_field": "monthQuantity",
                                "_conditionalView_operator": "isNotNull"
                            },
                            {
                                "id": "condition_1719395302670",
                                "_conditionalView_field": "sum",
                                "_conditionalView_operator": "isNotNull"
                            },
                            {
                                "id": "condition_1719395333369",
                                "_conditionalView_field": "dateStart",
                                "_conditionalView_operator": "isNotNull"
                            },
                            {
                                "id": "condition_1719562037815",
                                "_conditionalView_field": "body",
                                "_conditionalView_operator": "isNotNull"
                            },
                            {
                                "id": "condition_1719562049498",
                                "_conditionalView_field": "basic",
                                "_conditionalView_operator": "isNotNull"
                            },
                            {
                                "id": "condition_1719562055431",
                                "_conditionalView_field": "isWithPhoto",
                                "_conditionalView_operator": "isNotNull"
                            }
                        ],
                        "submitAdditionalMapping": true,
                        "submitMapping": [
                            {
                                "id": "submitMapping1719395568370",
                                "field": "_action",
                                "value": "CreateD__contract"
                            }
                        ]
                    }
                ]
            }
        ],
        "state": {
            "step": "0",
            "popup": null
        },
        "actions": [
            {
                "id": "action_1719394984117",
                "name": "Новый договор",
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1719394992835",
                        "field": "FormState.step",
                        "value": "create"
                    }
                ]
            },
            {
                "id": "action_copy_1719996557959",
                "name": "Новый договор copy",
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1719394992835",
                        "field": "FormState.step",
                        "value": "create"
                    }
                ]
            }
        ],
        "general": {
            "edittingOn": false,
            "showState": false
        }
    },
    "tableTitle": null,
    "actions": [],
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
        }
    ],
    "data": [
        {
            "id": "37517be5-3ef3-4eb7-9dc8-f83d23c624f6"
        },
        {
            "id": "46c4286c-b441-40c7-b992-11deaf62d102"
        },
        {
            "id": "f5bc3a4b-af55-4dfb-b6f0-6867a9adbd14"
        },
        {
            "id": "332abdbf-17e3-435a-89c8-a390d62f6e07"
        },
        {
            "id": "daaea90a-fcfe-4d7e-8757-c86105caf4ff"
        },
        {
            "id": "8f4b9b2b-d7ad-4e41-9806-cc4850542ac6"
        },
        {
            "id": "f246e06a-558b-4e47-a6b2-712c6f6fb3b3"
        },
        {
            "id": "528cefe3-f83b-4dc6-9c68-162b006dd8cb"
        },
        {
            "id": "9a200799-c05c-472e-84ce-373c38de6203"
        },
        {
            "id": "21e357b9-f9b1-4a01-8bbe-72f0ef6a45af"
        }
    ],
    "totalPages": 6,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [
        [
            "id",
            99323120
        ]
    ],
    "writeFields": [
        "id",
        "rateTypeId",
        "contractServiceId",
        "contractStatusId",
        "sum",
        "monthQuantity",
        "dateStart",
        "_action",
        "basic",
        "body",
        "isWithPhoto"
    ],
    "structures": {
        "99323120": {
            "networkID": 21231,
            "sysName": "_d__contract",
            "name": "_d__contract",
            "id": 99323120,
            "dateCreated": "2024-06-26T09:36:59Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"sum\",\"dataType\":\"number\",\"name\":\"сумма\",\"id\":\"13791719323519163\",\"link\":\"\",\"group\":\"1719323501196\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"zakazDoc\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"20441719912001525\",\"link\":\"\",\"group\":\"1719911997542\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"dateStartDisplayed\",\"dataType\":\"string\",\"name\":\"Дата\",\"id\":\"22171719323487161\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"_creatorId\",\"dataType\":\"link\",\"name\":\"\",\"id\":\"22641719394640700\",\"link\":\"WebUser\",\"group\":\"1719394626101\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"actDoc\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"22731719912002357\",\"link\":\"\",\"group\":\"1719911997542\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"body\",\"dataType\":\"string\",\"name\":\"ПРЕДМЕТ ДОГОВОРА\",\"id\":\"25691719523978781\",\"link\":\"\",\"group\":\"1719323501196\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"monthQuantity\",\"dataType\":\"number\",\"name\":\"количество месяцев\",\"id\":\"27211719323502612\",\"link\":\"\",\"group\":\"1719323501196\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"companyId\",\"dataType\":\"link\",\"name\":\"Компания\",\"id\":\"29791719323462796\",\"link\":\"d__company\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"_d__contractId\",\"dataType\":\"link\",\"name\":\"\",\"id\":\"38301719394627250\",\"link\":\"d__contract\",\"group\":\"1719394626101\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"actHtml\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"44191719912032140\",\"link\":\"\",\"group\":\"1719911997542\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"_action\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"45721719394652584\",\"link\":\"\",\"group\":\"1719394626101\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"currentServiceIds\",\"dataType\":\"arrayLink\",\"name\":\"\",\"id\":\"48761719906742468\",\"link\":\"d__service\",\"group\":\"1719906662151\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"array\":false},{\"sysName\":\"dateStart\",\"dataType\":\"date\",\"name\":\"Дата старта проекта\",\"id\":\"50141719323476362\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"contractServiceId\",\"dataType\":\"link\",\"name\":\"услуга\",\"id\":\"57751719323570179\",\"link\":\"d__contractService\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"currentPartId\",\"dataType\":\"link\",\"name\":\"\",\"id\":\"64571719906665619\",\"link\":\"d__contractPart\",\"group\":\"1719906662151\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"rateTypeId\",\"dataType\":\"link\",\"name\":\"тип\",\"id\":\"64681719323580393\",\"link\":\"d__rateType\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"contractStatusId\",\"dataType\":\"link\",\"name\":\"статус\",\"id\":\"70391719323543813\",\"link\":\"d__contractStatus\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"isWithPhoto\",\"dataType\":\"boolean\",\"name\":\"акт с фотографией?\",\"id\":\"74531719558999838\",\"link\":\"\",\"group\":\"1719323501196\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Да\",\"Нет\"],\"hideStandardBooleanIcons\":true,\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"basic\",\"dataType\":\"string\",\"name\":\"ОБЩИЕ ПОЛОЖЕНИЯ\",\"id\":\"74681719523985230\",\"link\":\"\",\"group\":\"1719323501196\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"currentPaymentIds\",\"dataType\":\"arrayLink\",\"name\":\"\",\"id\":\"90281719906687583\",\"link\":\"d__payment\",\"group\":\"1719906662151\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"array\":false},{\"sysName\":\"zakazHtml\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"94831719912003042\",\"link\":\"\",\"group\":\"1719911997542\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"_url\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"99181719394656749\",\"link\":\"\",\"group\":\"1719394626101\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false}]",
            "jsonGroupSettings": "[{\"id\":1719911999107,\"name\":\"New Group 5\",\"order\":4},{\"id\":1719323501196,\"name\":\"New Group 1\",\"order\":0},{\"id\":1719394626101,\"name\":\"New Group 2\",\"order\":1},{\"id\":1719906662151,\"name\":\"New Group 3\",\"order\":2},{\"id\":1719911997542,\"name\":\"New Group 4\",\"order\":3}]",
            "jsonViewIdSettings": null,
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":false,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-07-02T09:21:06Z",
            "createBy": 6452,
            "changedBy": 6452,
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
            "folderId": 33809862
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
            "sysName": "rateTypeId",
            "dataType": "link",
            "name": "тип",
            "id": "64681719323580393",
            "link": "d__rateType",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "contractServiceId",
            "dataType": "link",
            "name": "услуга",
            "id": "57751719323570179",
            "link": "d__contractService",
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
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "contractStatusId",
            "dataType": "link",
            "name": "статус",
            "id": "70391719323543813",
            "link": "d__contractStatus",
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
            "sysName": "sum",
            "dataType": "number",
            "name": "сумма",
            "id": "13791719323519163",
            "link": "",
            "group": "1719323501196",
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
            "format": "positiveNum",
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
            "sysName": "monthQuantity",
            "dataType": "number",
            "name": "количество месяцев",
            "id": "27211719323502612",
            "link": "",
            "group": "1719323501196",
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
            "format": "positiveNum",
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
            "sysName": "dateStart",
            "dataType": "date",
            "name": "Дата старта проекта",
            "id": "50141719323476362",
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
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "_action",
            "dataType": "string",
            "name": "",
            "id": "45721719394652584",
            "link": "",
            "group": "1719394626101",
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
            "sysName": "basic",
            "dataType": "string",
            "name": "ОБЩИЕ ПОЛОЖЕНИЯ",
            "id": "74681719523985230",
            "link": "",
            "group": "1719323501196",
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
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "body",
            "dataType": "string",
            "name": "ПРЕДМЕТ ДОГОВОРА",
            "id": "25691719523978781",
            "link": "",
            "group": "1719323501196",
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
            "sysName": "isWithPhoto",
            "dataType": "boolean",
            "name": "акт с фотографией?",
            "id": "74531719558999838",
            "link": "",
            "group": "1719323501196",
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
                    "Да",
                    "Нет"
                ],
                "hideStandardBooleanIcons": true,
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
