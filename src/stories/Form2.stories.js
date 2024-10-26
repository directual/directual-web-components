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
    "sl": "getAllProductToCatalog",
    "pageSize": "10",
    "headerField": null,
    "params": {
        "steps": [
            {
                "id": "default_step",
                "sysName": "0",
                "elements": [
                    {
                        "id": "elmnt_1721818111133",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17218181125790.023302012213433230220241",
                                "_action": "action_1721818099735",
                                "_action_button_type": "accent",
                                "_action_label": "В КОРЗИНУ",
                                "_action_icon": "cart",
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Товар добавлен в корзину"
                            }
                        ],
                        "_actions_in_a_row": 1,
                        "_input_actions_in_a_row_column": "column",
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1729689316158",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "inStock"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1729715849430",
                        "type": "hint",
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1729715855186",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "outStock"
                            }
                        ],
                        "hintText": "Товар временно недоступен"
                    },
                    {
                        "id": "elmnt_1729716313603",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17297163164290.04220020342231223004013",
                                "_action": "action_1729716250695",
                                "_action_icon": "love",
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Товар добавлен в избранное"
                            }
                        ],
                        "_actions_in_a_row": 1,
                        "_input_actions_in_a_row_column": "column"
                    },
                    {
                        "id": "elmnt_1729931704399",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17299317076630.03330133023313434123202",
                                "_action": "action_1729931832219",
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1729935383092",
                                        "_conditionalView_field": "ozon",
                                        "_conditionalView_operator": "isNull"
                                    }
                                ],
                                "_action_label_picture": "picture",
                                "_action_picure_color": "#005BFF",
                                "_action_picure_border_color": "#F1117E",
                                "_action_picure": "https://api.directual.com/fileUploaded/directual-site/plugins/bf9e81d0-5268-4ffe-b357-7aeac23ccfa8.svg",
                                "_action_label_picture_source": "from_tempalte",
                                "_action_picure_templ": "{{ozon}}"
                            },
                            {
                                "id": "17299317086980.21413114442213312314324",
                                "_action": "action_1729934516185",
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1729935403575",
                                        "_conditionalView_field": "yandexMarket",
                                        "_conditionalView_operator": "isNull"
                                    }
                                ],
                                "_action_label_picture": "picture",
                                "_action_picure": "https://api.directual.com/fileUploaded/directual-site/plugins/218935ec-1980-4f88-9b33-62d7e534b168.svg"
                            }
                        ],
                        "_actions_in_a_row": 2,
                        "_input_actions_in_a_row_column": "line",
                        "_conditionalView": false,
                        "_conditions": [
                            {
                                "id": "condition_1729931812288",
                                "_conditionalView_field": "yandexMarket",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "hide"
                            }
                        ],
                        "_stretch_buttons": true
                    }
                ],
                "CSSclass": "action-button"
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
        "state": {
            "step": "0",
            "popup": null
        },
        "general": {
            "edittingOn": true
        },
        "form_title": "",
        "actions": [
            {
                "id": "action_1721818099735",
                "name": "В корзину",
                "actionType": "endpoint",
                "endpoint": "addProductToCart",
                "mapping": [
                    {
                        "id": "mapping_1721892456564",
                        "field": "_action",
                        "value": "addProductToCart"
                    },
                    {
                        "id": "mapping_1721892465866",
                        "field": "productID",
                        "value": "{{id}}"
                    },
                    {
                        "id": "mapping_1721893140730",
                        "field": "numberProduct",
                        "value": "1"
                    }
                ]
            },
            {
                "id": "action_1729716250695",
                "name": "В избранное",
                "actionType": "endpoint",
                "endpoint": "newCatalogueFavorites",
                "mapping": [
                    {
                        "id": "mapping_1729716268049",
                        "field": "productId",
                        "value": "{{id}}"
                    },
                    {
                        "id": "mapping_1729716275202",
                        "field": "is_hidden",
                        "value": "false"
                    }
                ]
            },
            {
                "id": "action_1729931832219",
                "name": "Ozon",
                "actionType": "link",
                "_blank": true,
                "_href": "{{ozon}}"
            },
            {
                "id": "action_1729934516185",
                "name": "Яндекс Маркет",
                "actionType": "link",
                "_blank": true,
                "_href": "{{yandexMarket}}"
            }
        ]
    },
    "tableTitle": null,
    "actions": null,
    "headers": [
        {
            "sysName": "id",
            "name": "SKU",
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
            "array": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false
        },
        {
            "sysName": "title",
            "name": "Наименование",
            "dataType": "string",
            "id": "72911721208849150",
            "link": null,
            "group": "1721208844635",
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
            "sysName": "productCollectionID",
            "name": "Коллекция",
            "dataType": "link",
            "id": "67661721209011891",
            "link": "ProductCollection",
            "group": "1721208991936",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false
        },
        {
            "sysName": "productCategoryID",
            "name": "Категория",
            "dataType": "link",
            "id": "17861721209011230",
            "link": "ProductCategory",
            "group": "1721208991936",
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
            "sysName": "yandexMarket",
            "name": "Яндекс маркет",
            "dataType": "string",
            "id": "47961721208931365",
            "link": null,
            "group": "1721208925948",
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
            "sysName": "ozon",
            "name": "Ozon",
            "dataType": "string",
            "id": "39661721208930902",
            "link": null,
            "group": "1721208925948",
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
            "sysName": "additionalPhotos",
            "name": "Дополнительные фото",
            "dataType": "file",
            "id": "48711721208894486",
            "link": "",
            "group": "1721208844635",
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
            "format": "multipleImages",
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
            "sysName": "mainPhoto",
            "name": "Фото",
            "dataType": "file",
            "id": "31971721208886150",
            "link": "",
            "group": "1721208844635",
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
            "format": "image",
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
            "sysName": "quantity",
            "name": "Остатки",
            "dataType": "number",
            "id": "18351721208850819",
            "link": "",
            "group": "1721208844635",
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
            "sysName": "price",
            "name": "Стоимость",
            "dataType": "decimal",
            "id": "38571721208850461",
            "link": "",
            "group": "1721208844635",
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
            "sysName": "description",
            "name": "Описание",
            "dataType": "string",
            "id": "38291721208849781",
            "link": "",
            "group": "1721208844635",
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
            "format": "markdown",
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
            "name": "Статус",
            "dataType": "link",
            "id": "40191721211193024",
            "link": "ProductStatus",
            "group": "1721211188835",
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
            "sysName": "alert",
            "name": "",
            "dataType": "string",
            "id": "19371721734507443",
            "link": "",
            "group": "1721211188835",
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
            "quantity": 0,
            "ozon": "https://www.ozon.ru/product/konstruktor-plastikovyy-kiberbuhanka-1681370044/",
            "description": "Этот киберконструктор посвящен ЕЙ - легендарной советской буханке. Всего за пару движений аэротранспорт, бороздящий марсианские просторы, превращается в старую добрую Булю, и наоборот. Подвозить Робогозина, проводить космические экскурсии, поддавать “газку”, переводя колеса в киберрежим или просто доставлять почту - выбирать тебе. Ведь сюжеты для игр бесконечны, как наша Вселенная.\n\n_Размер коробки: 28х18х10_\n\n_Высота собранной буханки с подставкой: 17 см, без подставки: 10 см._\n\n_В наборе: детальки, сепаратор, подставка, инструкция, космическое настроение_\n",
            "alert": "alert",
            "price": 6499,
            "productCategoryID": {
                "id": "e259da2f-6990-496c-bc72-8bee7aa43d5c",
                "title": "Кинопоиск"
            },
            "mainPhoto": "https://api.directual.com/fileUploaded/rubrick-shop/web/447dff10-db02-4e60-b955-c3c5d4e680f6.webp",
            "id": "09665568-7e75-11ef-980d-da4cfc219399",
            "status": "outStock",
            "yandexMarket": "https://market.yandex.ru/pr/5533433697",
            "title": "Кибербуханка",
            "additionalPhotos": [
                "https://api.directual.com/fileUploaded/rubrick-shop/web/5a3c86ef-1a1a-49b6-a280-fd701183b49f.webp",
                "https://api.directual.com/fileUploaded/rubrick-shop/web/8d6e6f85-151c-4306-b5ca-07cb55d3a0e5.webp",
                "https://api.directual.com/fileUploaded/rubrick-shop/web/0415f6f1-072c-4573-91e8-b7842ad9bf94.webp",
                "https://api.directual.com/fileUploaded/rubrick-shop/web/ae5c563e-8adc-46ec-be66-54815d4a2fe6.webp",
                "https://api.directual.com/fileUploaded/rubrick-shop/web/dc63e976-27f0-437b-b123-03cc9098bfe3.webp",
                "https://api.directual.com/fileUploaded/rubrick-shop/web/758882c2-fb47-4c14-bb35-47f44dba28fd.webp",
                "https://api.directual.com/fileUploaded/rubrick-shop/web/40fc9932-d77c-4ff1-ad69-85dae38bf48b.mp4"
            ]
        }
    ],
    "totalPages": 1,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [
        [
            "id",
            99329233
        ],
        [
            "title",
            99329233
        ],
        [
            "productCollectionID.id",
            99329235
        ],
        [
            "productCollectionID.title",
            99329235
        ],
        [
            "productCategoryID.id",
            99329234
        ],
        [
            "productCategoryID.title",
            99329234
        ],
        [
            "yandexMarket",
            99329233
        ],
        [
            "ozon",
            99329233
        ],
        [
            "additionalPhotos",
            99329233
        ],
        [
            "mainPhoto",
            99329233
        ],
        [
            "quantity",
            99329233
        ],
        [
            "price",
            99329233
        ],
        [
            "description",
            99329233
        ],
        [
            "status",
            99329233
        ],
        [
            "alert",
            99329233
        ]
    ],
    "writeFields": [
        "id",
        "description",
        "price",
        "mainPhoto",
        "additionalPhotos"
    ],
    "structures": {
        "99329233": {
            "networkID": 21464,
            "sysName": "Product",
            "name": "Product",
            "id": 99329233,
            "dateCreated": "2024-07-17T09:20:05Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"SKU\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"productCategoryID\",\"dataType\":\"link\",\"name\":\"Категория\",\"id\":\"17861721209011230\",\"link\":\"ProductCategory\",\"group\":\"1721208991936\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"quantity\",\"dataType\":\"number\",\"name\":\"Остатки\",\"id\":\"18351721208850819\",\"link\":\"\",\"group\":\"1721208844635\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"visibleName\",\"dataType\":\"string\",\"name\":\"Тайтл\",\"id\":\"19211721725957111\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"alert\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"19371721734507443\",\"link\":\"\",\"group\":\"1721211188835\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"mainPhoto\",\"dataType\":\"file\",\"name\":\"Фото\",\"id\":\"31971721208886150\",\"link\":\"\",\"group\":\"1721208844635\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"barcode\",\"dataType\":\"string\",\"name\":\"Штрихкод (Серийный номер / EAN)\",\"id\":\"33141729002335941\",\"link\":\"\",\"group\":\"1721208844635\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"description\",\"dataType\":\"string\",\"name\":\"Описание\",\"id\":\"38291721208849781\",\"link\":\"\",\"group\":\"1721208844635\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"price\",\"dataType\":\"decimal\",\"name\":\"Стоимость\",\"id\":\"38571721208850461\",\"link\":\"\",\"group\":\"1721208844635\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"ozon\",\"dataType\":\"string\",\"name\":\"Ozon\",\"id\":\"39661721208930902\",\"link\":null,\"group\":\"1721208925948\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"status\",\"dataType\":\"link\",\"name\":\"Статус\",\"id\":\"40191721211193024\",\"link\":\"ProductStatus\",\"group\":\"1721211188835\",\"tags\":null,\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[\"id\"],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":true,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"yandexMarket\",\"dataType\":\"string\",\"name\":\"Яндекс маркет\",\"id\":\"47961721208931365\",\"link\":null,\"group\":\"1721208925948\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"additionalPhotos\",\"dataType\":\"file\",\"name\":\"Дополнительные фото\",\"id\":\"48711721208894486\",\"link\":\"\",\"group\":\"1721208844635\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"multipleImages\",\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"weight\",\"dataType\":\"decimal\",\"name\":\"Вес (за единицу товара, в граммах)\",\"id\":\"51391724146144147\",\"link\":\"\",\"group\":\"1721208844635\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"sort_weight\",\"dataType\":\"number\",\"name\":\"Сортировка (от большего к меньшему)\",\"id\":\"53991729367251991\",\"link\":\"\",\"group\":\"1721208844635\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"age_restriction\",\"dataType\":\"number\",\"name\":\"Минимальный возраст ребенка\",\"id\":\"56221729002367405\",\"link\":\"\",\"group\":\"1721208844635\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"wildberries\",\"dataType\":\"string\",\"name\":\"Wildberries\",\"id\":\"61651721208930228\",\"link\":null,\"group\":\"1721208925948\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"parts\",\"dataType\":\"number\",\"name\":\"Количество деталей конструктора\",\"id\":\"67271729002280323\",\"link\":\"\",\"group\":\"1721208844635\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"productCollectionID\",\"dataType\":\"link\",\"name\":\"Коллекция\",\"id\":\"67661721209011891\",\"link\":\"ProductCollection\",\"group\":\"1721208991936\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"title\",\"dataType\":\"string\",\"name\":\"Наименование\",\"id\":\"72911721208849150\",\"link\":null,\"group\":\"1721208844635\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"wareKey\",\"dataType\":\"string\",\"name\":\"Артикул\",\"id\":\"77501724146246999\",\"link\":\"\",\"group\":\"1721208844635\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"country\",\"dataType\":\"string\",\"name\":\"Страна-изготовитель\",\"id\":\"86941729002326375\",\"link\":\"\",\"group\":\"1721208844635\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false}]",
            "jsonGroupSettings": "[{\"id\":1721208844635,\"name\":\"Base info\",\"order\":0},{\"id\":1721208925948,\"name\":\"Link to\",\"order\":1},{\"id\":1721208991936,\"name\":\"Link to structures\",\"order\":2},{\"id\":1721211188835,\"name\":\"System\",\"order\":3}]",
            "jsonViewIdSettings": "[{\"sysName\":\"visibleName\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-10-19T19:56:20Z",
            "createBy": 7868,
            "changedBy": 1,
            "_settings": null,
            "_nativeIndexSettings": null,
            "objectIDSysName": "id",
            "innerIDField": {
                "sysName": "id",
                "name": "SKU",
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
                "array": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            "folderId": 33813299
        },
        "99329234": {
            "networkID": 21464,
            "sysName": "ProductCategory",
            "name": "ProductCategory",
            "id": 99329234,
            "dateCreated": "2024-07-17T09:20:55Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"title\",\"name\":\"Наименование\",\"dataType\":\"string\",\"id\":\"92321721209107957\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"description\",\"name\":\"Описание\",\"dataType\":\"string\",\"id\":\"35361721214824255\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"photo\",\"name\":\"Фото\",\"dataType\":\"file\",\"id\":\"90771721214824835\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"status\",\"name\":\"Статус\",\"dataType\":\"link\",\"id\":\"53851721215222208\",\"link\":\"productCategoryStatus\",\"group\":\"1721215216477\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false}]",
            "jsonGroupSettings": "[{\"id\":1721215216477,\"name\":\"System\",\"order\":0}]",
            "jsonViewIdSettings": "[{\"sysName\":\"title\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-08-30T12:30:27Z",
            "createBy": 7868,
            "changedBy": 6452,
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
                "array": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            "folderId": 33813299
        },
        "99329235": {
            "networkID": 21464,
            "sysName": "ProductCollection",
            "name": "ProductCollection",
            "id": 99329235,
            "dateCreated": "2024-07-17T09:26:54Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"description\",\"name\":\"Описание\",\"dataType\":\"string\",\"id\":\"32331721214853861\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"photo\",\"name\":\"Фото\",\"dataType\":\"file\",\"id\":\"32601721214854252\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"title\",\"name\":\"Наименование\",\"dataType\":\"string\",\"id\":\"85321721209123359\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"status\",\"name\":\"Статус\",\"dataType\":\"link\",\"id\":\"95151721215232658\",\"link\":\"ProductCollectionStatus\",\"group\":\"1721215228626\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"indexExists\":false,\"arrayLink\":false,\"array\":false}]",
            "jsonGroupSettings": "[{\"id\":1721215228626,\"name\":\"System\",\"order\":0}]",
            "jsonViewIdSettings": "[{\"sysName\":\"title\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-07-17T11:38:38Z",
            "createBy": 7868,
            "changedBy": 7868,
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
                "array": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            "folderId": 33813299
        }
    },
    "isSuccessWrite": false,
    "writeError": null,
    "writeResponse": null,
    "fileds": [
        {
            "sysName": "id",
            "name": "SKU",
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
            "array": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false
        },
        {
            "sysName": "description",
            "name": "Описание",
            "dataType": "string",
            "id": "38291721208849781",
            "link": "",
            "group": "1721208844635",
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
            "format": "markdown",
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
            "sysName": "price",
            "name": "Стоимость",
            "dataType": "decimal",
            "id": "38571721208850461",
            "link": "",
            "group": "1721208844635",
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
            "sysName": "mainPhoto",
            "name": "Фото",
            "dataType": "file",
            "id": "31971721208886150",
            "link": "",
            "group": "1721208844635",
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
            "format": "image",
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
            "sysName": "additionalPhotos",
            "name": "Дополнительные фото",
            "dataType": "file",
            "id": "48711721208894486",
            "link": "",
            "group": "1721208844635",
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
            "format": "multipleImages",
            "formatOptions": null,
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
    "comment": "Кнопка \"В КОРЗИНУ\" / \"В ИЗБРАННОЕ\" / и маркетплейсы",
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
