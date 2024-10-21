import FpsCards2 from '../components/fps/viewobjects/cards2/FpsCards2'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

export default {
  title: 'FPS/Components/Cards2',
  component: FpsCards2,
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

let exampleTable = {
    "sl": "userGetFavorites",
    "pageSize": "10",
    "headerField": null,
    "params": {
        "comp_ID": "CYfuuA",
        "cards_title": "ИЗБРАННЫЕ ТОВАРЫ",
        "cards_layout": "grid",
        "grid_layout__mobile": 1,
        "grid_layout__gap": 12,
        "card_layout_type": "regular",
        "card_border_radius": 0,
        "card_border": 0,
        "card_type_dir": {
            "image_height": 139,
            "image_padding": 1,
            "image": "{{productId.mainPhoto}}",
            "favoritesOn": false,
            "favoritesEndpoint": "newCatalogueFavorites",
            "favoritesIconOff": "love",
            "favoritesIconOn": "loveFill",
            "favoritesField": "productId",
            "favoritesHiddenField": "is_hidden",
            "image_position": "left",
            "body": "<div>\n  <b>{{productId.price}} ₽</b><div>\n  <div style=\"margin:6px 0\">{{productId.visibleName}}</div>\n  <div class=\"cat_item_tag\">{{productId.productCategoryID.title}}</div>",
            "actionsOn": true,
            "_actions": [
                {
                    "id": "action_1729520301663",
                    "action_id": "action_1729520279694",
                    "_action_button_type": "accent",
                    "_action_icon": "cart"
                },
                {
                    "id": "action_1729520314652",
                    "action_id": "action_1729520284655",
                    "_action_button_type": "danger",
                    "_action_icon": "delete"
                }
            ]
        },
        "routing": "redirect",
        "routing_where": "/catalog/{{id}}",
        "grid_layout__wideDesktop": 1,
        "grid_layout__desktop": 1,
        "grid_layout__tablet": 1,
        "actions": [
            {
                "id": "action_1729520279694",
                "name": "В корзину!"
            },
            {
                "id": "action_1729520284655",
                "name": "Удалить из избранного"
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "productId",
            "dataType": "link",
            "name": "",
            "id": "77031727080919763",
            "link": "Product",
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
            "indexExists": false,
            "typeVariable": {},
            "json": false,
            "array": false
        }
    ],
    "data": [
        {
            "productId": {
                "visibleName": "Ёлочка «Балет» Музыкальная",
                "description": "Музыкальная Ёлочка-шкатулка по мотивам балета «Щелкунчик»\n\nАх, это чувство, будто вот-вот произойдёт что-то такое удивительное, такое замечательное! И кто знает, может быть, именно для тебя, прямо как в “Щелкунчике”, скоро начнут происходить чудеса.\n\nМари, Крысиный Король, стойкие оловянные солдатики и, конечно, храбрый главный герой не дадут заскучать, а прекрасная мелодия “Танец Феи Драже” создаст новогоднее настроение! \nТем более, что сцена у нашей ёлочки не хуже, чем в театре!\n\nФишки набора:\n- Музыка из балета\n- Сюрприз под сценой\n- Возможность выиграть семейную поездку на Родину Деда Мороза\n\n_Размер коробки: 32х25х11_\n\n_Высота собранной ёлочки: 28 см_\n\n_В наборе: детальки, сепаратор, музыкальный механизм, инструкция, театральное настроение_",
                "price": 5999,
                "productCategoryID": {
                    "id": "b89ff0d4-3888-46d0-bc92-d7adfe4f0fb2",
                    "title": "Новогодняя коллекция"
                },
                "mainPhoto": "https://api.directual.com/fileUploaded/rubrick-shop/web/59894f1a-1450-4f53-b7ad-94bd8e28e3c0.webp",
                "id": "fb61c824-b68e-448c-92f5-76de440556ec",
                "title": "Ёлочка «Балет» Музыкальная"
            },
            "id": "b368feb1-fe49-402d-878e-73ba07e8d62a"
        },
        {
            "productId": {
                "visibleName": "Морозик",
                "description": "Наш Дед Морозик размером с ладошку, но не думай, что он так прост! \n\nСмотри, что он может:\n- Украшать ёлочку\n- Стоять на полочке\n- Прятаться за оливье\n- Поднимать настроение\n\nФишки набора:\n- Возможность выиграть семейную поездку на Родину Деда Мороза\n\n_Размер коробки: 17х12х6_\n\n_Высота собранной фигурки: 12 см_\n\n_В наборе: детальки, инструкция, новогоднее настроение_\n",
                "price": 999,
                "productCategoryID": {
                    "id": "b89ff0d4-3888-46d0-bc92-d7adfe4f0fb2",
                    "title": "Новогодняя коллекция"
                },
                "mainPhoto": "https://api.directual.com/fileUploaded/rubrick-shop/web/2d6881af-7709-402e-8c2a-1e200d5ca55c.webp",
                "id": "RU-0004",
                "title": "Морозик"
            },
            "id": "c51b2532-30b3-4b3d-a79c-06e7930ab11f"
        },
        {
            "productId": {
                "visibleName": "Снежка",
                "description": "Наша Снегурочка размером с ладошку, но не думай, что она так проста!\n\nСмотри, что она умеет:\n- Хихикать под ёлочкой\n- Красоваться на полочке\n- Прятаться в мандаринках\n- Поднимать настроение\n\nФишки набора:\n- Возможность выиграть семейную поездку на Родину Деда Мороза\n\n_Размер коробки: 17х12х6_\n\n_Высота собранной фигурки: 11 см_\n\n_В наборе: детальки, инструкция, новогоднее настроение_\n",
                "price": 999,
                "productCategoryID": {
                    "id": "b89ff0d4-3888-46d0-bc92-d7adfe4f0fb2",
                    "title": "Новогодняя коллекция"
                },
                "mainPhoto": "https://api.directual.com/fileUploaded/rubrick-shop/web/cd644f96-ca7a-4a2d-aca7-996fd7cf8d44.webp",
                "id": "RU-0005",
                "title": "Снежка"
            },
            "id": "5a4b9e8e-b6a9-4a94-b5f0-22110b52b140"
        }
    ],
    "totalPages": 1,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [
        [
            "id",
            99345029
        ],
        [
            "productId.id",
            99329233
        ],
        [
            "productId.visibleName",
            99329233
        ],
        [
            "productId.mainPhoto",
            99329233
        ],
        [
            "productId.price",
            99329233
        ],
        [
            "productId.description",
            99329233
        ],
        [
            "productId.title",
            99329233
        ],
        [
            "productId.productCategoryID.id",
            99329234
        ],
        [
            "productId.productCategoryID.title",
            99329234
        ]
    ],
    "writeFields": [
        "id",
        "is_hidden",
        "productId"
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
            "innerIDField": {
                "sysName": "id",
                "dataType": "id",
                "name": "SKU",
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
            "folderId": 33813299
        },
        "99345029": {
            "networkID": 21464,
            "sysName": "favoriteGoods",
            "name": "favoriteGoods",
            "id": 99345029,
            "dateCreated": "2024-09-23T08:32:51Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"is_hidden\",\"name\":\"\",\"dataType\":\"boolean\",\"id\":\"69661727874767012\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"productId\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"77031727080919763\",\"link\":\"Product\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"userId\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"89781727080375073\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": null,
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-10-02T13:12:54Z",
            "createBy": 6452,
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
            "folderId": 33821638
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
            "sysName": "is_hidden",
            "dataType": "boolean",
            "name": "",
            "id": "69661727874767012",
            "link": "",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "productId",
            "dataType": "link",
            "name": "",
            "id": "77031727080919763",
            "link": "Product",
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
    "comment": "ИЗБРАННОЕ",
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
    data: exampleTable,
    auth: authExample,
    locale: 'ENG',
    onChange: value => console.log(value),
    handleRoute: value => e => console.log("route => " + value),
  },
};
