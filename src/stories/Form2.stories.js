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
    "sl": "getActiveCartClient",
    "pageSize": "10",
    "headerField": null,
    "params": {
        "steps": [
            {
                "id": "default_step",
                "sysName": "default step",
                "elements": [
                    {
                        "id": "elmnt_1725220473427",
                        "type": "text",
                        "paraText": "<script>\n  function getDeclension(number) {\n    const lastDigit = number % 10;\n    const lastTwoDigits = number % 100;\n    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) \n  \t\t{return 'Товаров';} else if (lastDigit === 1) {return 'Товар';} else if (lastDigit >= 2 && lastDigit <= 4) {return 'Товара';} \n  else {return 'Товаров';} \n}\nvar span = document.querySelector('.dynamicDesc');\nvar number = {{numberProduct}}\nconsole.log(\"=== ! ===\")\nconsole.log(span)\nconsole.log(number)\nif (!isNaN(number)) {\n   span.textContent = getDeclension(number);\n}\n</script>\n  <div><span class=\"dynamicDesc\">Товаров</span>: numberProduct <b>{{numberProduct}}</b>, на сумму <b style=\"font-size:22px\">{{totalPrice}} ₽ totalPrice</b>\n\n  </div>"
                    },
                    {
                        "id": "elmnt_1725451028229",
                        "type": "text",
                        "paraText": "<b>Старая цена: {{oldPrice}}</b>",
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1725451060429",
                                "_conditionalView_field": "promoCodeId",
                                "_conditionalView_operator": "isNotNull"
                            },
                            {
                                "id": "condition_1725451068976",
                                "_conditionalView_field": "promo",
                                "_conditionalView_operator": "isNotNull"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1728493008357",
                        "type": "text",
                        "paraText": "<div class=\"sdek_wrapper\">  \n<p>Стоимость доставки: {{costDelivery}} руб.</p>\n        <p style=\"opacity:.4\">Бесплатно от 3000 ₽, менее — 499 ₽</p>\n</div>",
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1728493023597",
                                "_conditionalView_field": "costDelivery",
                                "_conditionalView_operator": "isNotNull"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1728493091641",
                        "type": "text",
                        "paraText": "<div class=\"sdek_wrapper\">\n<p>Стоимость доставки: 0 руб.</p>\n        <p style=\"opacity:.4\">Бесплатно от 3000 ₽, менее — 499 ₽</p>    \n</div>",
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1728493105909",
                                "_conditionalView_field": "costDelivery",
                                "_conditionalView_operator": "isNull"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1725220969490",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17252209720220.1044334332402204211421",
                                "_action": "action_1725220753610",
                                "_action_button_type": "accent",
                                "_action_label": "ОФОРМИТЬ ЗАКАЗ НА {{finalPrice}} ₽",
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1729516636039",
                                        "_conditionalView_field": "FormState.step",
                                        "_conditionalView_operator": "==",
                                        "_conditionalView_value": "addpromo"
                                    }
                                ]
                            },
                            {
                                "id": "17295166210570.13323120322422021422342",
                                "_action": "action_1725372106607",
                                "_action_label": "Использовать промокод",
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1729516680437",
                                        "_conditionalView_field": "FormState.step",
                                        "_conditionalView_operator": "==",
                                        "_conditionalView_value": "addpromo"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": [
                            {
                                "id": "condition_1725372453543",
                                "_conditionalView_field": "FormState.step",
                                "_conditionalView_operator": "!==",
                                "_conditionalView_value": "addpromo"
                            }
                        ],
                        "_actions_in_a_row": 2,
                        "_input_actions_in_a_row_column": "column"
                    }
                ],
                "sectionVisibility": "always",
                "sectionGap": 2
            },
            {
                "id": "step_1725372136756",
                "sysName": "addpromo",
                "elements": [
                    {
                        "id": "elmnt_1725372177757",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17253721792770.03230431004210103124432",
                                "_input_type": "state",
                                "_state_field": "promo",
                                "_edit_state_input_label": "Введите промо-код"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1725451842884",
                                "_conditionalView_field": "FormState.promoStatus",
                                "_conditionalView_operator": "!==",
                                "_conditionalView_value": "Success"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1725372546111",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17253725502020.32403444224332014041432",
                                "_action": "action_1725372507443",
                                "_conditionalView": false,
                                "_conditions": [
                                    {
                                        "id": "condition_1729518858445"
                                    }
                                ],
                                "_action_label": "Отменить",
                                "_action_icon": "back"
                            },
                            {
                                "id": "17295188537320.30301320003442121434311",
                                "_action": "action_1725372211507",
                                "_action_button_type": "accent",
                                "_action_label": "Применить",
                                "_conditionalView": true,
                                "_action_conditional_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1729519138588",
                                        "_conditionalView_field": "FormState.promo",
                                        "_conditionalView_operator": "isNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1725452594552",
                                "_conditionalView_field": "FormState.promoStatus",
                                "_conditionalView_operator": "!==",
                                "_conditionalView_value": "Success"
                            }
                        ],
                        "_actions_in_a_row": 2
                    },
                    {
                        "id": "elmnt_1725374764651",
                        "type": "hint",
                        "hintColor": "error",
                        "hintTitle": "{{FormState.promoTitle}}",
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1725374815783",
                                "_conditionalView_field": "FormState.promoStatus",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "Error"
                            }
                        ],
                        "hintText": "{{FormState.promoDescription}}"
                    },
                    {
                        "id": "elmnt_1725376495411",
                        "type": "hint",
                        "hintTitle": "{{FormState.promoTitle}}",
                        "hintText": "{{FormState.promoDescription}}",
                        "hintColor": "ok",
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1725376666373",
                                "_conditionalView_field": "FormState.promoStatus",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "Success"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1725376516927",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17253765216940.10111023340412144042234",
                                "_action": "action_1725220753610",
                                "_action_button_type": "accent"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1725376693058",
                                "_conditionalView_field": "FormState.promoStatus",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "Success"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_submitted",
                "sysName": "redirect",
                "elements": [
                    {
                        "id": "elmnt_1725221198692",
                        "type": "redirect",
                        "redirect_url": "./checkout"
                    }
                ]
            }
        ],
        "form_title": "CУММА ЗАКАЗА",
        "general": {
            "edittingOn": true,
            "showFullModel": true
        },
        "actions": [
            {
                "id": "action_1725220753610",
                "name": "Перейти к оформлению",
                "actionType": "state",
                "endpoint": "proceedWithOrder",
                "mapping": [
                    {
                        "id": "mapping_1725220954757",
                        "field": "_action",
                        "value": "proceed with order"
                    }
                ],
                "stateMapping": [
                    {
                        "id": "stateMapping1725221174845",
                        "field": "FormState.step",
                        "value": "redirect"
                    }
                ]
            },
            {
                "id": "action_1725372106607",
                "name": "У меня есть промокод!",
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1725372119490",
                        "field": "FormState.step",
                        "value": "addpromo"
                    }
                ]
            },
            {
                "id": "action_1725372211507",
                "name": "Применить промокод!",
                "actionType": "endpoint",
                "endpoint": "addPromoToCard",
                "mapping": [
                    {
                        "id": "mapping_1725372352591",
                        "field": "_action",
                        "value": "addPromoToCard"
                    },
                    {
                        "id": "mapping_1725372356859",
                        "field": "promo",
                        "value": "{{FormState.promo}}"
                    },
                    {
                        "id": "mapping_1725372388825",
                        "field": "_cartID",
                        "value": "{{id}}"
                    }
                ]
            },
            {
                "id": "action_1725372507443",
                "name": "Отменить ввод промокода",
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1725372522243",
                        "field": "FormState.step",
                        "value": "default step"
                    },
                    {
                        "id": "stateMapping1729519025819",
                        "field": "FormState.promoDescription"
                    },
                    {
                        "id": "stateMapping1729519030597",
                        "field": "FormState.promoTitle"
                    },
                    {
                        "id": "stateMapping1729519075142",
                        "field": "FormState.promoStatus"
                    },
                    {
                        "id": "stateMapping1729519229255",
                        "field": "FormState.promo"
                    }
                ]
            }
        ],
        "hideActionsHint": true,
        "state": {
            "step": "default step",
            "popup": null,
            "promoStatus": "",
            "promoDescription": "",
            "promoTitle": "",
            "promo": ""
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
            "array": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false
        },
        {
            "sysName": "numberProduct",
            "dataType": "number",
            "name": "Количество товаров",
            "id": "23681721891737090",
            "link": "",
            "group": "1721891717040",
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
            "array": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false
        },
        {
            "sysName": "totalPrice",
            "dataType": "decimal",
            "name": "Итоговая стоимость",
            "id": "17901721891723888",
            "link": "",
            "group": "1721891717040",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false
        },
        {
            "sysName": "status",
            "dataType": "link",
            "name": "Статус",
            "id": "50591721891930522",
            "link": "CartStatus",
            "group": "1721891929674",
            "tags": null,
            "indexing": true,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 0,
            "linkIndexFieldSysName": [
                "id"
            ],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "array": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": true
        },
        {
            "sysName": "_contextProductIDs",
            "dataType": "arrayLink",
            "name": "",
            "id": "54951721893710764",
            "link": "ShoppingCart",
            "group": "1721891929674",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
            "linkType": false,
            "arrayLink": true,
            "indexExists": false
        },
        {
            "sysName": "userLastname",
            "dataType": "string",
            "name": "Фамилия получателя",
            "id": "43831723546397394",
            "link": null,
            "group": "1721891647510",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false
        },
        {
            "sysName": "userFirstname",
            "dataType": "string",
            "name": "Имя получателя",
            "id": "13521723546396762",
            "link": null,
            "group": "1721891647510",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false
        },
        {
            "sysName": "isApprovedPolitics",
            "dataType": "json",
            "name": "Согласие",
            "id": "21101723546481440",
            "link": "",
            "group": "1721891647510",
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
                        "value": "agee",
                        "label": "да, на все! абсалютли на все"
                    }
                ]
            },
            "groupName": null,
            "array": false,
            "typeVariable": {},
            "json": true,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false
        },
        {
            "sysName": "userID",
            "dataType": "link",
            "name": "Клиент",
            "id": "55411721891656571",
            "link": "WebUser",
            "group": "1721891647510",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false
        },
        {
            "sysName": "paymentWebLink",
            "dataType": "string",
            "name": "",
            "id": "13181723627545725",
            "link": "",
            "group": "1723627539006",
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
            "format": "webLink",
            "formatOptions": {},
            "groupName": null,
            "array": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false
        },
        {
            "sysName": "deliveryCityClient",
            "dataType": "link",
            "name": "Город",
            "id": "67211723807467571",
            "link": "CDEK_CITY",
            "group": "1722339392393",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false
        },
        {
            "sysName": "deliveryAddressClient",
            "dataType": "link",
            "name": "Пункт СДЭК (ПВЗ/постамата), на который будет доставлена посылка",
            "id": "19481723807468367",
            "link": "CDEK_DELIVERYPOINT",
            "group": "1722339392393",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false
        },
        {
            "sysName": "userContact",
            "dataType": "string",
            "name": "Контактный телефон",
            "id": "11911723807629413",
            "link": "",
            "group": "1721891647510",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false
        },
        {
            "sysName": "promoCodeId",
            "dataType": "link",
            "name": "",
            "id": "20741725450595944",
            "link": "promoCode",
            "group": "1721891717040",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false
        },
        {
            "sysName": "promo",
            "dataType": "string",
            "name": "Промо",
            "id": "95531725450579728",
            "link": "",
            "group": "1721891717040",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false
        },
        {
            "sysName": "oldPrice",
            "dataType": "decimal",
            "name": "Старая цена",
            "id": "97121725450561898",
            "link": "",
            "group": "1721891717040",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false
        },
        {
            "sysName": "costDelivery",
            "dataType": "decimal",
            "name": "Стоимость доставки",
            "id": "83971728480987245",
            "link": "",
            "group": "1721891717040",
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
            "array": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false
        },
        {
            "sysName": "finalPrice",
            "dataType": "decimal",
            "name": "Финальная стоимость",
            "id": "87621728481558902",
            "link": "",
            "group": "1721891717040",
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
            "array": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false
        },
        {
            "sysName": "userSurname",
            "dataType": "string",
            "name": "Отчество",
            "id": "95971729080738539",
            "link": "",
            "group": "1721891647510",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false
        }
    ],
    "data": [
        {
            "_contextProductIDs": [
                "c50eaf59-a508-4729-ba39-ab01202e9771"
            ],
            "userLastname": "Ershov",
            "numberProduct": 1,
            "totalPrice": 6499,
            "id": "a1d32312-d639-479b-94a1-2bf92d43333a",
            "status": {
                "id": "1",
                "title": "Новая корзина"
            },
            "finalPrice": 6499,
            "userContact": "79151845361",
            "costDelivery": 0,
            "userFirstname": "Pavel",
            "userID": {
                "id": "36142243",
                "isApprovedPolitics": "{\n   \"agree\": true\n}"
            }
        }
    ],
    "totalPages": 1,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [
        [
            "id",
            99352466
        ],
        [
            "numberProduct",
            99352466
        ],
        [
            "totalPrice",
            99352466
        ],
        [
            "status.id",
            99352467
        ],
        [
            "status.title",
            99352467
        ],
        [
            "_contextProductIDs.id",
            99352468
        ],
        [
            "userLastname",
            99352466
        ],
        [
            "userFirstname",
            99352466
        ],
        [
            "isApprovedPolitics",
            99352466
        ],
        [
            "userID.id",
            99352388
        ],
        [
            "userID.isApprovedPolitics",
            99352388
        ],
        [
            "paymentWebLink",
            99352466
        ],
        [
            "deliveryCityClient.id",
            99352454
        ],
        [
            "deliveryAddressClient.id",
            99352455
        ],
        [
            "userContact",
            99352466
        ],
        [
            "promoCodeId.id",
            99352411
        ],
        [
            "promoCodeId.promo",
            99352411
        ],
        [
            "promo",
            99352466
        ],
        [
            "oldPrice",
            99352466
        ],
        [
            "costDelivery",
            99352466
        ],
        [
            "finalPrice",
            99352466
        ],
        [
            "userSurname",
            99352466
        ]
    ],
    "writeFields": [
        "id",
        "userFirstname",
        "userLastname",
        "isApprovedPolitics",
        "userContact",
        "deliveryAddressClient",
        "deliveryCityClient",
        "generatePaymentWebLink",
        "userSurname"
    ],
    "structures": {
        "99352388": {
            "networkID": 22325,
            "sysName": "WebUser",
            "name": "App users",
            "id": 99352388,
            "dateCreated": "2024-10-30T14:48:35Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"dateLastActivity\",\"dataType\":\"string\",\"name\":\"dateLastActivity\",\"id\":\"10\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"dateCreated\",\"dataType\":\"string\",\"name\":\"dateCreated\",\"id\":\"13\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"isAuthorization\",\"dataType\":\"boolean\",\"name\":\"isAuthorization\",\"id\":\"9\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"notifications_counter\",\"dataType\":\"string\",\"name\":\"Notifications Counter\",\"id\":\"1\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"custom_labels\",\"dataType\":\"json\",\"name\":\"Custom labels\",\"id\":\"2\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"array\":false,\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"phone\",\"dataType\":\"string\",\"name\":\"Телефон\",\"id\":\"12\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"imask\":\"{\\n    mask: '+{7}(000)000-00-00',\\n    lazy: false\\n  }\",\"isUTC\":\"false\"},\"groupName\":\"Contacts\",\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"email\",\"dataType\":\"string\",\"name\":\"Email\",\"id\":\"11\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"userpic\",\"dataType\":\"file\",\"name\":\"Аватарка\",\"id\":\"3\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":{},\"groupName\":\"Contacts\",\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"Username (login)\",\"id\":\"15\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"role\",\"dataType\":\"array\",\"name\":\"Roles\",\"id\":\"8\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"password\",\"dataType\":\"string\",\"name\":\"Password (hash)\",\"id\":\"14\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"firstName\",\"dataType\":\"string\",\"name\":\"Имя\",\"id\":\"7\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"lastName\",\"dataType\":\"string\",\"name\":\"Фамилия\",\"id\":\"6\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"gender\",\"dataType\":\"string\",\"name\":\"Gender\",\"id\":\"5\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"isBlocked\",\"dataType\":\"boolean\",\"name\":\"Block user\",\"id\":\"4\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"systemMessage\",\"dataType\":\"string\",\"name\":\"System message\",\"id\":\"56921641637265680\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"userSurname\",\"dataType\":\"string\",\"name\":\"Отчество\",\"id\":\"90921729087283443\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"isMuted\",\"dataType\":\"string\",\"name\":\"Бесшумные сообщения\",\"id\":\"89071729166788517\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Не получать сообщения (СПАМ)\",\"Получать сообщения\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"date_register\",\"dataType\":\"date\",\"name\":\"Дата регистрации\",\"id\":\"61721729781069051\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD MMM, Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"secret\",\"dataType\":\"string\",\"name\":\"secret\",\"id\":\"81131636839496227\",\"link\":\"\",\"group\":\"1636839487957\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"notif_Email\",\"dataType\":\"boolean\",\"name\":\"Notify me by Email\",\"id\":\"61231639915065277\",\"link\":\"\",\"group\":\"1639915049523\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Yes\",\"No\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"isWithNotification\",\"dataType\":\"boolean\",\"name\":\"получать полезную рассылку\",\"id\":\"17481722367086341\",\"link\":\"\",\"group\":\"1639915049523\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"🤘 Канешн!\",\"😵‍💫 Не нада, канала достаточно\"],\"hideStandardBooleanIcons\":true,\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"TUserId\",\"dataType\":\"link\",\"name\":\"\",\"id\":\"52381715111381604\",\"link\":\"TUser\",\"group\":\"1715111380353\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"TChatId\",\"dataType\":\"link\",\"name\":\"\",\"id\":\"98201715111394771\",\"link\":\"TChat\",\"group\":\"1715111380353\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"tUserId\",\"dataType\":\"link\",\"name\":\"\",\"id\":\"13521722346611700\",\"link\":\"TUser\",\"group\":\"1722346610351\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"tChatId\",\"dataType\":\"link\",\"name\":\"\",\"id\":\"96381722346630070\",\"link\":\"TChat\",\"group\":\"1722346610351\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"isApprovedPolitics\",\"dataType\":\"json\",\"name\":\"Я согласен на все!\",\"id\":\"58601722367648684\",\"link\":\"\",\"group\":\"1723540619638\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"checkboxes\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOption\":false,\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"multipleChoice\":[{\"value\":\"agree\",\"label\":\"да, на все! абсалютли на все\"}]},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"isApprovedPoliticsBool\",\"dataType\":\"boolean\",\"name\":\"\",\"id\":\"83331728464705782\",\"link\":\"\",\"group\":\"1723540619638\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"userFirstname\",\"dataType\":\"string\",\"name\":\"Имя получателя\",\"id\":\"21561723546107801\",\"link\":null,\"group\":\"1723546047240\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"userLastname\",\"dataType\":\"string\",\"name\":\"Фамилия получателя\",\"id\":\"13961723546108554\",\"link\":null,\"group\":\"1723546047240\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"favoriteGoodIds\",\"dataType\":\"arrayLink\",\"name\":\"\",\"id\":\"19261727081898552\",\"link\":\"Product\",\"group\":\"1727081896821\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false},{\"sysName\":\"_adminId\",\"dataType\":\"link\",\"name\":\"\",\"id\":\"94591729168201038\",\"link\":\"WebUser\",\"group\":\"1729168192411\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false}]",
            "jsonGroupSettings": "[{\"id\":1722346610351,\"name\":\"New Group 5\",\"order\":4},{\"id\":1636839487957,\"name\":\"Password restoring\",\"order\":2},{\"id\":1729168192411,\"name\":\"LastUpadate\",\"order\":10},{\"id\":1723540619638,\"name\":\"license agreement\",\"order\":7},{\"id\":-1776115286,\"name\":\"System fields\",\"order\":1},{\"id\":1723546047240,\"name\":\"Personal Data is used in cart or order\",\"order\":8},{\"id\":1715111380353,\"name\":\"New Group 3\",\"order\":2},{\"id\":-1776115286,\"name\":\"System fields (LEGACY)\",\"order\":3},{\"id\":1727081896821,\"name\":\"New Group 10\",\"order\":9},{\"id\":1639915049523,\"name\":\"Notifications\",\"order\":1},{\"id\":-502807437,\"name\":\"Contacts\",\"order\":0}]",
            "jsonViewIdSettings": "[{\"sysName\":\"firstName\"},{\"sysName\":\"lastName\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-11-10T11:58:09Z",
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
                "array": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            "objectIDSysName": "id",
            "folderId": null
        },
        "99352411": {
            "networkID": 22325,
            "sysName": "promoCode",
            "name": "promoCode",
            "id": 99352411,
            "dateCreated": "2024-09-03T12:17:17Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"@who\",\"dataType\":\"string\",\"name\":\"who changed\",\"id\":\"-1\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"@dateCreated\",\"dataType\":\"date\",\"name\":\"date created\",\"id\":\"-2\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"@dateChanged\",\"dataType\":\"date\",\"name\":\"date changed\",\"id\":\"-3\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"promoCodeTypeId\",\"dataType\":\"link\",\"name\":\"Тип\",\"id\":\"18871725365889298\",\"link\":\"promoCodeType\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"deadline\",\"dataType\":\"date\",\"name\":\"Дата окончания\",\"id\":\"20311725365954167\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"quantity\",\"dataType\":\"number\",\"name\":\"Количество\",\"id\":\"20421725365930380\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"promoCodeStatusId\",\"dataType\":\"link\",\"name\":\"Статус\",\"id\":\"30681725365875465\",\"link\":\"promoCodeStatus\",\"group\":\"0\",\"tags\":null,\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[\"id\"],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":true,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"minPrice\",\"dataType\":\"decimal\",\"name\":\"Минимальная стоимость корзины\",\"id\":\"47101725375345744\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"promo\",\"dataType\":\"string\",\"name\":\"Промокод\",\"id\":\"54531725365865697\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"promoCodeDiscontTypeId\",\"dataType\":\"link\",\"name\":\"Формат скидки\",\"id\":\"64791725365900946\",\"link\":\"promoCodeDiscontType\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"discont\",\"dataType\":\"decimal\",\"name\":\"Скидка\",\"id\":\"65161725366072918\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"userId\",\"dataType\":\"link\",\"name\":\"Пользователь\",\"id\":\"78281725366050901\",\"link\":\"WebUser\",\"group\":\"1725366049318\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"ParticipantCompetitionId\",\"dataType\":\"link\",\"name\":\"Конкурс\",\"id\":\"79681726488007959\",\"link\":\"ParticipantCompetition\",\"group\":\"1726488006662\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"maxQuantity\",\"dataType\":\"number\",\"name\":\"Максимальное количество\",\"id\":\"95481725365921782\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false}]",
            "jsonGroupSettings": "[{\"id\":1725366049318,\"name\":\"New Group 1\",\"order\":0},{\"id\":1726488006662,\"name\":\"New Group 2\",\"order\":1}]",
            "jsonViewIdSettings": "[{\"sysName\":\"promo\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-09-16T12:00:48Z",
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
                "array": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            "objectIDSysName": "id",
            "folderId": 33825702
        },
        "99352454": {
            "networkID": 22325,
            "sysName": "CDEK_CITY",
            "name": "СDEK_CITY",
            "id": 99352454,
            "dateCreated": "2024-08-16T10:00:22Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"@who\",\"dataType\":\"string\",\"name\":\"who changed\",\"id\":\"-1\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"@dateCreated\",\"dataType\":\"date\",\"name\":\"date created\",\"id\":\"-2\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"@dateChanged\",\"dataType\":\"date\",\"name\":\"date changed\",\"id\":\"-3\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"UUID\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"region\",\"dataType\":\"string\",\"name\":\"Регион\",\"id\":\"10761723802466314\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"payment_limit\",\"dataType\":\"decimal\",\"name\":\"Ограничение на сумму наложенного платежа в населенном пункте\",\"id\":\"11401723802495905\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"CDEK_RESPONSE\",\"dataType\":\"json\",\"name\":\"\",\"id\":\"12011724398095819\",\"link\":\"\",\"group\":\"1724398091583\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":true,\"array\":false},{\"sysName\":\"longitude\",\"dataType\":\"decimal\",\"name\":\"Долгота центра населенного пункта\",\"id\":\"14381723802467679\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"kladr_code\",\"dataType\":\"string\",\"name\":\"Код КЛАДР региона\",\"id\":\"14831723802448782\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"country\",\"dataType\":\"string\",\"name\":\"Страна\",\"id\":\"15561723802449665\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"city\",\"dataType\":\"string\",\"name\":\"Населенный пункт\",\"id\":\"20311723802426771\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"time_zone\",\"dataType\":\"string\",\"name\":\"Часовой пояс населенного пункта\",\"id\":\"26811723802481243\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"sub_region\",\"dataType\":\"string\",\"name\":\"Название района региона населенного пункта\",\"id\":\"28401723803657724\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"country_code\",\"dataType\":\"string\",\"name\":\"Код страны\",\"id\":\"61811723802449288\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"code\",\"dataType\":\"number\",\"name\":\"Код\",\"id\":\"66041723802526771\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"latitude\",\"dataType\":\"decimal\",\"name\":\"Широта центра населенного пункта\",\"id\":\"77891723802480922\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"region_code\",\"dataType\":\"number\",\"name\":\"Код региона\",\"id\":\"94121723802466677\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false}]",
            "jsonGroupSettings": "[{\"id\":1724398091583,\"name\":\"System\",\"order\":0}]",
            "jsonViewIdSettings": "[{\"sysName\":\"city\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-08-23T07:28:24Z",
            "createBy": 7868,
            "changedBy": 6452,
            "_settings": null,
            "_nativeIndexSettings": null,
            "innerIDField": {
                "sysName": "id",
                "dataType": "id",
                "name": "UUID",
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            "objectIDSysName": "id",
            "folderId": 33825699
        },
        "99352455": {
            "networkID": 22325,
            "sysName": "CDEK_DELIVERYPOINT",
            "name": "CDEK_DELIVERYPOINT",
            "id": 99352455,
            "dateCreated": "2024-08-16T10:44:26Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"@who\",\"dataType\":\"string\",\"name\":\"who changed\",\"id\":\"-1\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"@dateCreated\",\"dataType\":\"date\",\"name\":\"date created\",\"id\":\"-2\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"@dateChanged\",\"dataType\":\"date\",\"name\":\"date changed\",\"id\":\"-3\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"UUID\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"longitude\",\"dataType\":\"decimal\",\"name\":\"Координаты местоположения (долгота) в градусах\",\"id\":\"16731723805297662\",\"link\":\"\",\"group\":\"1723805293297\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"address_comment\",\"dataType\":\"string\",\"name\":\"Описание местоположения\",\"id\":\"17241723805091072\",\"link\":\"\",\"group\":\"1723805293297\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"is_ltl\",\"dataType\":\"boolean\",\"name\":\"Работает ли офис с LTL (сборный груз)\",\"id\":\"17701723805248005\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"have_cashless\",\"dataType\":\"boolean\",\"name\":\"Есть безналичный расчет\",\"id\":\"24841723805248685\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"allowed_cod\",\"dataType\":\"boolean\",\"name\":\"Разрешен наложенный платеж в ПВЗ\",\"id\":\"32681723805270455\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":16,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"site\",\"dataType\":\"string\",\"name\":\"Ссылка на данный офис на сайте СДЭК\",\"id\":\"34011723805271228\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":18,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"have_fast_payment_system\",\"dataType\":\"boolean\",\"name\":\"Есть безналичный расчёт по СБП\",\"id\":\"35251723805269829\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"name\",\"dataType\":\"string\",\"name\":\"Название\",\"id\":\"36421723805090600\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"owner_code\",\"dataType\":\"string\",\"name\":\"Принадлежность офиса компании\",\"id\":\"37051723805224136\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"is_handout\",\"dataType\":\"boolean\",\"name\":\"Является пунктом выдачи\",\"id\":\"42681723805225001\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"address\",\"dataType\":\"string\",\"name\":\"Адрес (улица, дом, офис) в указанном городе\",\"id\":\"46151723805299148\",\"link\":\"\",\"group\":\"1723805293297\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"email\",\"dataType\":\"string\",\"name\":\"Адрес электронной почты\",\"id\":\"52611723805092065\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"type\",\"dataType\":\"string\",\"name\":\"Тип ПВЗ: PVZ — склад СДЭК, POSTAMAT — постамат СДЭК\",\"id\":\"53301723805093164\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"is_reception\",\"dataType\":\"boolean\",\"name\":\"Является пунктом приёма\",\"id\":\"56931723805225413\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"have_cash\",\"dataType\":\"boolean\",\"name\":\"Есть приём наличных\",\"id\":\"63011723805249300\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"is_dressing_room\",\"dataType\":\"boolean\",\"name\":\"Есть ли примерочная\",\"id\":\"66971723805247223\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"code\",\"dataType\":\"string\",\"name\":\"Код\",\"id\":\"67221723805090004\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"CDEK_RESPONSE\",\"dataType\":\"json\",\"name\":\"\",\"id\":\"70721724398042799\",\"link\":\"\",\"group\":\"1724398038417\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":true,\"array\":false},{\"sysName\":\"take_only\",\"dataType\":\"boolean\",\"name\":\"Является ли офис только пунктом выдачи или также осуществляет приём грузов\",\"id\":\"75661723805224650\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"city_uuid\",\"dataType\":\"link\",\"name\":\"Идентификатор города\",\"id\":\"78111723805390200\",\"link\":\"CDEK_CITY\",\"group\":\"1723805293297\",\"tags\":\"\",\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[\"id\"],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":true,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"phones\",\"dataType\":\"json\",\"name\":\"Список телефонов\",\"id\":\"83461723805091756\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":true,\"array\":false},{\"sysName\":\"address_full\",\"dataType\":\"string\",\"name\":\"Полный адрес с указанием страны, региона, города, и т.д.\",\"id\":\"85751723805387555\",\"link\":\"\",\"group\":\"1723805293297\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"latitude\",\"dataType\":\"decimal\",\"name\":\"Координаты местоположения (широта) в градусах\\t\",\"id\":\"92721723805298509\",\"link\":\"\",\"group\":\"1723805293297\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"work_time\",\"dataType\":\"string\",\"name\":\"Режим работы\",\"id\":\"94591723805091427\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"note\",\"dataType\":\"string\",\"name\":\"Примечание по офису\",\"id\":\"99071723805092795\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false}]",
            "jsonGroupSettings": "[{\"id\":1723805293297,\"name\":\"location\",\"order\":0},{\"id\":1724398038417,\"name\":\"System\",\"order\":1}]",
            "jsonViewIdSettings": "[{\"sysName\":\"address\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-08-23T07:27:33Z",
            "createBy": 7868,
            "changedBy": 6452,
            "_settings": null,
            "_nativeIndexSettings": null,
            "innerIDField": {
                "sysName": "id",
                "dataType": "id",
                "name": "UUID",
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            "objectIDSysName": "id",
            "folderId": 33825699
        },
        "99352466": {
            "networkID": 22325,
            "sysName": "Cart",
            "name": "Cart",
            "id": 99352466,
            "dateCreated": "2024-07-25T07:12:56Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"userContact\",\"dataType\":\"string\",\"name\":\"Контактный телефон\",\"id\":\"11911723807629413\",\"link\":\"\",\"group\":\"1721891647510\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"phone\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"imask\":\"{\\n    mask: '+{7}(000)000-00-00',\\n    lazy: false\\n  }\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"paymentWebLink\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"13181723627545725\",\"link\":\"\",\"group\":\"1723627539006\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"userFirstname\",\"dataType\":\"string\",\"name\":\"Имя получателя\",\"id\":\"13521723546396762\",\"link\":null,\"group\":\"1721891647510\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"totalPrice\",\"dataType\":\"decimal\",\"name\":\"Итоговая стоимость\",\"id\":\"17901721891723888\",\"link\":\"\",\"group\":\"1721891717040\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"deliveryAddressClient\",\"dataType\":\"link\",\"name\":\"Пункт СДЭК (ПВЗ/постамата), на который будет доставлена посылка\",\"id\":\"19481723807468367\",\"link\":\"CDEK_DELIVERYPOINT\",\"group\":\"1722339392393\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"promoCodeId\",\"dataType\":\"link\",\"name\":\"\",\"id\":\"20741725450595944\",\"link\":\"promoCode\",\"group\":\"1721891717040\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"isApprovedPolitics\",\"dataType\":\"json\",\"name\":\"Согласие\",\"id\":\"21101723546481440\",\"link\":\"\",\"group\":\"1721891647510\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"checkboxes\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"multipleChoice\":[{\"value\":\"agee\",\"label\":\"да, на все! абсалютли на все\"}]},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"numberProduct\",\"dataType\":\"number\",\"name\":\"Количество товаров\",\"id\":\"23681721891737090\",\"link\":\"\",\"group\":\"1721891717040\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"deliveryDepth\",\"dataType\":\"string\",\"name\":\"Глубина\",\"id\":\"24011722339413463\",\"link\":\"\",\"group\":\"1722339392393\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"title\",\"dataType\":\"string\",\"name\":\"Наименование\",\"id\":\"28231721891636923\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"generatePaymentWebLink\",\"dataType\":\"boolean\",\"name\":\"\",\"id\":\"37481724740495888\",\"link\":\"\",\"group\":\"1723627539006\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"_contextPackageIDs\",\"dataType\":\"arrayLink\",\"name\":\"\",\"id\":\"38271724228416866\",\"link\":\"PackagedCart\",\"group\":\"1721891929674\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false},{\"sysName\":\"packageIDs\",\"dataType\":\"link\",\"name\":\"Упаковка\",\"id\":\"38701724146086555\",\"link\":\"Packages\",\"group\":\"1722339392393\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"invoiceID\",\"dataType\":\"link\",\"name\":\"\",\"id\":\"39191723627547369\",\"link\":\"Invoice\",\"group\":\"1723627539006\",\"tags\":\"\",\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[\"alfa_cart\"],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":true},{\"sysName\":\"_contextPackagedProductIDs\",\"dataType\":\"arrayLink\",\"name\":\"Товары для упаковки\",\"id\":\"41101724235192885\",\"link\":\"ShoppingCart\",\"group\":\"1721891929674\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false},{\"sysName\":\"userLastname\",\"dataType\":\"string\",\"name\":\"Фамилия получателя\",\"id\":\"43831723546397394\",\"link\":null,\"group\":\"1721891647510\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"deliveryWeight\",\"dataType\":\"string\",\"name\":\"Вес\",\"id\":\"43911722339399449\",\"link\":\"\",\"group\":\"1722339392393\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"CDER_order_number\",\"dataType\":\"string\",\"name\":\"Трек номер заказа\",\"id\":\"44341725535214795\",\"link\":\"\",\"group\":\"1722339392393\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"warehouseAddressShipmentPoint\",\"dataType\":\"string\",\"name\":\"Склад\",\"id\":\"45461728473741731\",\"link\":null,\"group\":\"1722339392393\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"deliveryHeight\",\"dataType\":\"string\",\"name\":\"Высота\",\"id\":\"45741722339401138\",\"link\":\"\",\"group\":\"1722339392393\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"deliveryWidth\",\"dataType\":\"string\",\"name\":\"Ширина\",\"id\":\"46361722339400196\",\"link\":\"\",\"group\":\"1722339392393\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"status\",\"dataType\":\"link\",\"name\":\"Статус\",\"id\":\"50591721891930522\",\"link\":\"CartStatus\",\"group\":\"1721891929674\",\"tags\":null,\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[\"id\"],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":true},{\"sysName\":\"clientTitle\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"51751722340412117\",\"link\":\"\",\"group\":\"1721891647510\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"_contextProductIDs\",\"dataType\":\"arrayLink\",\"name\":\"\",\"id\":\"54951721893710764\",\"link\":\"ShoppingCart\",\"group\":\"1721891929674\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false},{\"sysName\":\"userID\",\"dataType\":\"link\",\"name\":\"Клиент\",\"id\":\"55411721891656571\",\"link\":\"WebUser\",\"group\":\"1721891647510\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"_amountProductInPackage\",\"dataType\":\"number\",\"name\":\"Количество товара в упаковке\",\"id\":\"61011729581730280\",\"link\":\"\",\"group\":\"1722339392393\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"deliveryCityClient\",\"dataType\":\"link\",\"name\":\"Город\",\"id\":\"67211723807467571\",\"link\":\"CDEK_CITY\",\"group\":\"1722339392393\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"deliveryAddressShipmentPoint\",\"dataType\":\"link\",\"name\":\"Пункт СДЭК, из которого будет отправлена посылка\",\"id\":\"77741724146984613\",\"link\":\"CDEK_DELIVERYPOINT\",\"group\":\"1722339392393\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"tgName\",\"dataType\":\"string\",\"name\":\"Ссылка на профиль TG\",\"id\":\"83961729088882893\",\"link\":\"\",\"group\":\"1721891647510\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"costDelivery\",\"dataType\":\"decimal\",\"name\":\"Стоимость доставки\",\"id\":\"83971728480987245\",\"link\":\"\",\"group\":\"1721891717040\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"finalPrice\",\"dataType\":\"decimal\",\"name\":\"Финальная стоимость\",\"id\":\"87621728481558902\",\"link\":\"\",\"group\":\"1721891717040\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"weight\",\"dataType\":\"decimal\",\"name\":\"\",\"id\":\"92601722337655678\",\"link\":\"\",\"group\":\"1721891929674\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"promo\",\"dataType\":\"string\",\"name\":\"Промо\",\"id\":\"95531725450579728\",\"link\":\"\",\"group\":\"1721891717040\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"userSurname\",\"dataType\":\"string\",\"name\":\"Отчество\",\"id\":\"95971729080738539\",\"link\":\"\",\"group\":\"1721891647510\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"oldPrice\",\"dataType\":\"decimal\",\"name\":\"Старая цена\",\"id\":\"97121725450561898\",\"link\":\"\",\"group\":\"1721891717040\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false}]",
            "jsonGroupSettings": "[{\"id\":1722339392393,\"name\":\"Delivery\",\"order\":2},{\"id\":1721891929674,\"name\":\"System\",\"order\":4},{\"id\":1723627539006,\"name\":\"Invoice\",\"order\":3},{\"id\":1721891717040,\"name\":\"Product\",\"order\":1},{\"id\":1721891647510,\"name\":\"Client\",\"order\":0}]",
            "jsonViewIdSettings": "[{\"sysName\":\"title\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-11-10T11:59:22Z",
            "createBy": 7868,
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
                "array": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            "objectIDSysName": "id",
            "folderId": 33825696
        },
        "99352467": {
            "networkID": 22325,
            "sysName": "CartStatus",
            "name": "CartStatus",
            "id": 99352467,
            "dateCreated": "2024-07-25T07:13:07Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"@who\",\"dataType\":\"string\",\"name\":\"who changed\",\"id\":\"-1\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"@dateCreated\",\"dataType\":\"date\",\"name\":\"date created\",\"id\":\"-2\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"@dateChanged\",\"dataType\":\"date\",\"name\":\"date changed\",\"id\":\"-3\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"weight\",\"dataType\":\"number\",\"name\":\"\",\"id\":\"17871728476240720\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"title\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"39651721893560158\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false}]",
            "jsonGroupSettings": "[]",
            "jsonViewIdSettings": "[{\"sysName\":\"title\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-10-09T12:36:13Z",
            "createBy": 7868,
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
                "array": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            "objectIDSysName": "id",
            "folderId": 33825696
        },
        "99352468": {
            "networkID": 22325,
            "sysName": "ShoppingCart",
            "name": "ShoppingCart",
            "id": 99352468,
            "dateCreated": "2024-07-25T07:20:24Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"@who\",\"dataType\":\"string\",\"name\":\"who changed\",\"id\":\"-1\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"@dateCreated\",\"dataType\":\"date\",\"name\":\"date created\",\"id\":\"-2\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"@dateChanged\",\"dataType\":\"date\",\"name\":\"date changed\",\"id\":\"-3\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"cartID\",\"dataType\":\"link\",\"name\":\"Корзина\",\"id\":\"54271721892082413\",\"link\":\"Cart\",\"group\":\"1721892077286\",\"tags\":null,\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[\"status.id\",\"status\",\"userID\"],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":true,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"productPrice\",\"dataType\":\"string\",\"name\":\"Стоимость\",\"id\":\"55231721892062992\",\"link\":null,\"group\":\"1721892028666\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"productID\",\"dataType\":\"link\",\"name\":\"Товар\",\"id\":\"59981721892029108\",\"link\":\"Product\",\"group\":\"1721892028666\",\"tags\":null,\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[\"id\"],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":true,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"productPhoto\",\"dataType\":\"file\",\"name\":\"Фото\",\"id\":\"75561721892057366\",\"link\":\"\",\"group\":\"1721892028666\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"productNumber\",\"dataType\":\"number\",\"name\":\"Количество\",\"id\":\"78301721892127951\",\"link\":\"\",\"group\":\"1721892028666\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"productName\",\"dataType\":\"string\",\"name\":\"Наименование\",\"id\":\"78421721892068383\",\"link\":null,\"group\":\"1721892028666\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"status\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"83531722254232580\",\"link\":\"\",\"group\":\"1721892077286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false}]",
            "jsonGroupSettings": "[{\"id\":1721892028666,\"name\":\"Product\",\"order\":0},{\"id\":1721892077286,\"name\":\"Cart\",\"order\":1}]",
            "jsonViewIdSettings": "[{\"sysName\":\"productName\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-10-05T11:14:11Z",
            "createBy": 7868,
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
                "array": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            "objectIDSysName": "id",
            "folderId": 33825696
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false
        },
        {
            "sysName": "userFirstname",
            "dataType": "string",
            "name": "Имя получателя",
            "id": "13521723546396762",
            "link": null,
            "group": "1721891647510",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false
        },
        {
            "sysName": "userLastname",
            "dataType": "string",
            "name": "Фамилия получателя",
            "id": "43831723546397394",
            "link": null,
            "group": "1721891647510",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false
        },
        {
            "sysName": "isApprovedPolitics",
            "dataType": "json",
            "name": "Согласие",
            "id": "21101723546481440",
            "link": "",
            "group": "1721891647510",
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
                        "value": "agee",
                        "label": "да, на все! абсалютли на все"
                    }
                ]
            },
            "groupName": null,
            "array": false,
            "typeVariable": {},
            "json": true,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false
        },
        {
            "sysName": "userContact",
            "dataType": "string",
            "name": "Контактный телефон",
            "id": "11911723807629413",
            "link": "",
            "group": "1721891647510",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false
        },
        {
            "sysName": "deliveryAddressClient",
            "dataType": "link",
            "name": "Пункт СДЭК (ПВЗ/постамата), на который будет доставлена посылка",
            "id": "19481723807468367",
            "link": "CDEK_DELIVERYPOINT",
            "group": "1722339392393",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false
        },
        {
            "sysName": "deliveryCityClient",
            "dataType": "link",
            "name": "Город",
            "id": "67211723807467571",
            "link": "CDEK_CITY",
            "group": "1722339392393",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false
        },
        {
            "sysName": "generatePaymentWebLink",
            "dataType": "boolean",
            "name": "",
            "id": "37481724740495888",
            "link": "",
            "group": "1723627539006",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false
        },
        {
            "sysName": "userSurname",
            "dataType": "string",
            "name": "Отчество",
            "id": "95971729080738539",
            "link": "",
            "group": "1721891647510",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false
        }
    ],
    "quickSearch": null,
    "httpParams": null,
    "cardCustomHtml": null,
    "cardCustomLayout": null,
    "comment": "Продолжить оформление заказа (редирект на сабпейдж)",
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
