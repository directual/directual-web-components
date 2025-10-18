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

let exampleTableShipiga = {
    "sl": "All_products",
    "pageSize": "30",
    "headerField": null,
    "params": {
        "comp_ID": "Rjbu3i",
        "cards_layout": "grid",
        "card_layout_type": "regular",
        "card_type_dir": {
            "image_height": 160,
            "body": " <style>\n        .prod-txt-blk {\n            display: flex;\n            flex-direction: column;\n            justify-content: space-between;\n            flex-grow: 1;\n            padding: 2px 0;\n            min-width: 0;\n        }\n\n        .prod-txt-blk__title {\n            font-size: 10pt;\n            color: #333333;\n            margin: 0 0 5px 0;\n            line-height: 1.35;\n            font-weight: 500;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            display: -webkit-box;\n            -webkit-line-clamp: 2;\n            -webkit-box-orient: vertical;\n            margin-left: 6px;\n            height: 2.7em;\n        }\n\n        .prod-txt-blk__price {\n            font-size: 12pt;\n            color: #30B440;\n            font-weight: bold;\n            margin-left: 6px;\n        }\n    </style>\n</head>\n<body>\n\n    <div class=\"prod-txt-blk\">\n        <h3 class=\"prod-txt-blk__title\" title=\"{{name}}\">{{name}}</h3>\n        <p class=\"prod-txt-blk__price\">{{price}} ₸</p>\n    </div>\n\n</body>\n</html>",
            "favoritesOn": true,
            "actionsOn": true,
            "favoritesPosition": "right",
            "image": "{{large_image}}",
            "favoritesEndpoint": "takeToFavorites",
            "favoritesField": "product_id",
            "favoritesHiddenField": "user_id",
            "favoritesIconOff": "love",
            "favoritesIconOn": "loveFill",
            "image_border_radius": 8,
            "image_padding": 8,
            "_actions": [
                {
                    "id": "action_1746075904386",
                    "action_id": "action_1746075866035",
                    "_action_label": "в корзину!",
                    "_action_icon": "cart",
                    "_action_addTooltip": false,
                    "_action_oneTime": true,
                    "_action_oneTime_message": "Товар добавлен в корзину",
                    "_action_button_type": "normal",
                    "_action_button_size": "small"
                }
            ],
            "actionsLayout": "column"
        },
        "card_border": 1,
        "card_padding": 8,
        "grid_layout__mobile": 2,
        "filterParams": {
            "isFiltering": false,
            "filterFields": {
                "name": {
                    "active": true,
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "name": "Название продукта"
                },
                "price": {
                    "active": true,
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "name": "Цена продукта"
                },
                "main_category": {
                    "active": false,
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "name": "Category"
                }
            },
            "isSorting": false
        },
        "routing": "redirect",
        "routing_where": "/catalog/{{id}}",
        "card_border_radius": 6,
        "actions": [
            {
                "id": "action_1746075866035",
                "name": "купить",
                "actionType": "endpoint",
                "endpoint": "put_product_into_basket",
                "mapping": [
                    {
                        "id": "mapping_1746075992358",
                        "field": "product_id",
                        "value": "{{id}}"
                    },
                    {
                        "id": "mapping_1746076006208",
                        "field": "quantity",
                        "value": "1"
                    },
                    {
                        "id": "mapping_1746076052974",
                        "field": "status",
                        "value": "new"
                    }
                ]
            }
        ],
        "grid_layout__desktop": 4,
        "grid_layout__wideDesktop": 5,
        "grid_layout__gap": 10,
        "cards_title": "Каталог"
    },
    "tableTitle": null,
    "actions": [],
    "headers": [
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "name",
            "name": "Название продукта",
            "dataType": "string",
            "id": "49481745125946814",
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "banner_lastchange",
            "name": "Banner display last change",
            "dataType": "date",
            "id": "85161749753122193",
            "link": "",
            "group": "1749744399797",
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "banner_position",
            "name": "Banner Position",
            "dataType": "string",
            "id": "63441749751277302",
            "link": "",
            "group": "1749744399797",
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "banner_display",
            "name": "Banner Display",
            "dataType": "boolean",
            "id": "84811749744410275",
            "link": "",
            "group": "1749744399797",
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "multyImages",
            "name": "",
            "dataType": "file",
            "id": "67011745998760327",
            "link": "",
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
            "format": "multipleImages",
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "front_qa",
            "name": "Questions & Answers",
            "dataType": "string",
            "id": "72721745535864934",
            "link": "",
            "group": "1745535832303",
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "front_tags",
            "name": "Tags",
            "dataType": "string",
            "id": "93251745535846543",
            "link": "",
            "group": "1745535832303",
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
            "sysName": "store",
            "name": "Магазин",
            "dataType": "link",
            "id": "24251745425879095",
            "link": "stores",
            "group": "0",
            "tags": "",
            "indexing": true,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 18,
            "linkIndexFieldSysName": [
                "id"
            ],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": {},
            "groupName": null,
            "indexExists": true,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "city",
            "name": "Город",
            "dataType": "link",
            "id": "65541745425865936",
            "link": "cities",
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
            "format": null,
            "formatOptions": {},
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
            "sysName": "large_image",
            "name": "Основная карточка товара",
            "dataType": "file",
            "id": "52401745147934741",
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
            "format": "image",
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
            "sysName": "thumbail_image",
            "name": "Product Image Thumbail",
            "dataType": "file",
            "id": "81791745147902908",
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
            "format": "image",
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
            "sysName": "main_category",
            "name": "Category",
            "dataType": "string",
            "id": "47441745126201929",
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
            "sysName": "subCategoryName",
            "name": "Sub Category",
            "dataType": "string",
            "id": "76761745126019666",
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "price",
            "name": "Цена продукта",
            "dataType": "string",
            "id": "26431745125991395",
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "description",
            "name": "Описание продукта",
            "dataType": "string",
            "id": "10291745125961370",
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
            "large_image": "https://api.directual.com/fileUploaded/amarant/web/1fba9346-2cc7-42d2-8b20-93e642d67ac7.jpg",
            "name": "4Life Transform Бёрн (60 капсул).",
            "description": "4Life Transform Бёрн – это продукт, разработанный для поддержки здорового метаболизма и управления весом. Он содержит смесь ингредиентов, которые помогают ускорить сжигание жира, повысить уровень энергии и улучшить общее самочувствие. Этот продукт предназначен для людей, стремящихся контролировать свой вес и поддерживать активный образ жизни. Каждая капсула содержит специально подобранные компоненты, способствующие термогенезу и подавлению аппетита, что делает процесс похудения более эффективным.",
            "price": "999999",
            "id": "ae9215ca-a1bb-46e7-9fce-16e4134f1cd0"
        },
        {
            "large_image": "https://api.directual.com/fileUploaded/amarant/web/f4b8248b-8f0e-470e-a3a0-29443ab3e83b.webp",
            "name": "Trace Minerals Adult Enzyme Guard 60 капсул",
            "description": "Пищеварительные ферменты (энзимы) в капсулах от компании Trace Minerals.\n\nПротеаза (также называемая пептидазой или протеиназой) - это фермент, который катализирует (увеличивает скорость реакции или \"ускоряет\") протеолиз, расщепление белков на более мелкие полипептиды или отдельные аминокислоты. Они делают это, расщепляя пептидные связи внутри белков путем гидролиза-реакции, при которой вода разрушает связи.\n\nСеррапептаза - протеолитический фермент, выделенный из непатогенной кишечной бактерии Serratia E15. Оказывает фибринолитическое, про-тивовоспалительное и противоотечное действие. Помимо уменьшения воспалительного процесса, серрапептаза уменьшает выраженность боли по-средством снижения высвобождения болевых ами-нов из воспаленных тканей.  \n\nМуколаза /Mucolase - уменьшает вязкость мокроты и количество слизи. Применяют чаще всего в комплексном лечении плевритов и перитонитов, гейморитов, для облегчения симптомов хронического обструктивного заболевания легких (ХОБЛ),острых и хронических бронхитах, трахеобронхитах, астматическом бронхите и др.  \n\nКаталаза - это фермент, который разлагает перекись водорода на более простые формы, кислород и воду, чтобы защитить клетки от окислительного повреждения.\n\nВ состав входят протеолитические ферменты, помогающие поддерживать иммунную функцию, здоровое кровообращение, контроль и целостность клеток.\n\nКак принимать: принимать по 1 капсуле два раза в день. Для достижения наилучших результатов натощак за 1 час до или через 2 часа после еды.\n\n",
            "price": "666666666",
            "id": "f2f5fed8-af11-4d65-95d5-6dceb17ee52e",
            "multyImages": [
                "https://api.directual.com/fileUploaded/amarant/web/10f3a9cd-4859-4490-9645-d994fb6611fa.webp"
            ]
        },
        {
            "large_image": "https://api.directual.com/fileUploaded/amarant/web/26a330c0-5ffa-4bfd-8b14-f8e363a9b58b.png",
            "name": "Trace Minerals Adult Liquid Omega-3 ОМЕГА-3 118 мл.",
            "description": "Trace Minerals Омега 3, рыбий жир, Adult Liquid Omega-3 118 мл  это высококачественная жидкая добавка, которая обеспечивает организм необходимыми омега-3 жирными кислотами, поддерживающими общее здоровье. Этот продукт идеально подходит для тех, кто ищет удобный способ получить омега 3, без необходимости принимать капсулы. Омега-3 жирные кислоты, содержащиеся в этом рыбьем жире, играют ключевую роль в поддержании здоровья сердца, мозга и суставов, что делает этот продукт важным элементом в ежедневном рационе.\n\nЭта добавка подходит для мужчин и женщин, обеспечивая им необходимую поддержку организма в виде омега3 витамины для взрослых. Жидкая форма омега 3 1000 мг в каждой порции помогает легко усваиваться и может стать частью спортивного питания, особенно для тех, кто активно занимается фитнесом и заботится о своем здоровье. Кроме того, рыбий жир от Trace Minerals можно использовать как дополнение к витаминам для мужчин комплекс, способствующим улучшению физической формы и общего самочувствия.\n\nЭтот продукт также может быть полезен для женщин, стремящихся улучшить состояние волос, кожи и ногтей, предотвращая их выпадение, а также для поддержки суставов. Включение омега-3 в ежедневный рацион способствует поддержанию здоровья на долгие годы и может стать важной частью бада и витаминов для всей семьи.\n\nРекомендации по применению:\n\nВзрослым принимать по 2,5 мл во время еды.",
            "price": "6666666",
            "id": "82c4051d-8fda-4189-b6d4-1e01d1760fdc"
        },
        {
            "large_image": "https://api.directual.com/fileUploaded/amarant/web/5d8a6184-33eb-44e0-b696-42271943210a.jpeg",
            "name": "Trace Minerals Adult Liquid Omega-3 ОМЕГА-3 237 мл.",
            "description": "Жидкая омега-3 для взрослых от Trace Minerals - это восхитительный способ обеспечить организм незаменимыми жирными кислотами омега-3 - ЭПК и ДГК.\n\nРазработано для поддержки когнитивных функций, иммунитета и здоровья нервной системы.\n\nНе имеет рыбного привкуса.",
            "price": "777777777",
            "id": "0b6a99dd-1e0d-4846-8079-e4260580822f",
            "multyImages": [
                "https://api.directual.com/fileUploaded/amarant/web/245b1205-834e-46c7-8658-d933abb251e1.jpg"
            ]
        },
        {
            "large_image": "https://api.directual.com/fileUploaded/amarant/web/5aa3da17-5344-42b9-8d25-a8c81179658e.jpg",
            "name": "Trace Minerals Пробиотик жевательный для детей Chewable Probiotic 30 пластинок",
            "description": "Способ применения\nДетям от 2 лет и старше принимать по 1 жевательному драже в день натощак. Открытую упаковку хранить в холодильнике для сохранения его пробиотической эффективности.\n\nПоказания\nДетский жевательный пробиотик Trace Minerals разработан специально для детей. Детские ферменты помогают поддерживать здоровый баланс кишечной флоры и укрепляют иммунитет ребенка.\nChildren's Chewable Probiotic Trace Minerals - это вкусный жевательный пробиотик для детей, который понравится каждому малышу. Пробиотик с виноградом детский включает в себя пребиотик инулин и 4 штамма жизнеспособных организмов, бифидобактерии и лактобациллы, а так же бактерии, наиболее часто встречающиеся в толстом и тонком кишечнике. Детские пробиотики, пребиотики улучшают обмен веществ, поддерживают работу ЖКТ, помогают усвоению лактозы и молока. Баланс здоровой кишечной флоры помогает избежать несварения или расстройства желудка.",
            "price": "11111",
            "id": "81fc4dc9-2a02-42b3-9245-d178c2450997",
            "multyImages": [
                "https://api.directual.com/fileUploaded/amarant/web/036989f3-1521-44a6-a1d7-4ba6759eb561.webp",
                "https://api.directual.com/fileUploaded/amarant/web/babc7187-49cc-480c-a4f9-79678a178348.webp",
                "https://api.directual.com/fileUploaded/amarant/web/0fc7315a-99c5-432c-b68f-dc557b04c790.webp",
                "https://api.directual.com/fileUploaded/amarant/web/ca6f1098-5a16-47b5-9651-9dbc8a9dbbd1.jpg",
                "https://api.directual.com/fileUploaded/amarant/web/f2cc6728-00a4-4711-8566-832878662514.webp"
            ]
        }
    ],
    "totalPages": 1,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [
        [
            "id",
            99389969
        ],
        [
            "name",
            99389969
        ],
        [
            "banner_lastchange",
            99389969
        ],
        [
            "banner_position",
            99389969
        ],
        [
            "banner_display",
            99389969
        ],
        [
            "multyImages",
            99389969
        ],
        [
            "front_qa",
            99389969
        ],
        [
            "front_tags",
            99389969
        ],
        [
            "store.id",
            99389842
        ],
        [
            "store.store_name",
            99389842
        ],
        [
            "city.id",
            99389839
        ],
        [
            "city.name",
            99389839
        ],
        [
            "large_image",
            99389969
        ],
        [
            "thumbail_image",
            99389969
        ],
        [
            "main_category",
            99389969
        ],
        [
            "subCategoryName",
            99389969
        ],
        [
            "price",
            99389969
        ],
        [
            "description",
            99389969
        ]
    ],
    "writeFields": [],
    "structures": {
        "99389839": {
            "networkID": 33259,
            "sysName": "cities",
            "name": "cities",
            "id": 99389839,
            "dateCreated": "2025-04-18T19:31:27Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"related_strores\",\"name\":\"Stores\",\"dataType\":\"arrayLink\",\"id\":\"79151745011843963\",\"link\":\"stores\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"array\":false},{\"sysName\":\"name\",\"name\":\"City Name\",\"dataType\":\"string\",\"id\":\"95481745006866778\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"name\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2025-04-24T02:18:12Z",
            "createBy": 17816,
            "changedBy": 40587,
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
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "array": false
            },
            "folderId": 33850461
        },
        "99389842": {
            "networkID": 33259,
            "sysName": "stores",
            "name": "stores",
            "id": 99389842,
            "dateCreated": "2025-04-18T20:55:09Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"store_email\",\"name\":\"email\",\"dataType\":\"string\",\"id\":\"12521745010151638\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"store_products\",\"name\":\"Products\",\"dataType\":\"arrayLink\",\"id\":\"12991745018166665\",\"link\":\"products\",\"group\":\"1745018507349\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"json\":false},{\"sysName\":\"store_kaspi\",\"name\":\"Kaspi Pay\",\"dataType\":\"string\",\"id\":\"16211745010347181\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"Store_total_products\",\"name\":\"Total Products\",\"dataType\":\"string\",\"id\":\"25471745018646883\",\"link\":\"\",\"group\":\"1745018507349\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"admin\",\"name\":\"Admin\",\"dataType\":\"link\",\"id\":\"33971755859267306\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"store_name\",\"name\":\"Name\",\"dataType\":\"string\",\"id\":\"34481745010077403\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"store_city\",\"name\":\"City\",\"dataType\":\"string\",\"id\":\"38691745009722568\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"location_map\",\"name\":\"Store Location Map\",\"dataType\":\"json\",\"id\":\"45101745359517751\",\"link\":\"\",\"group\":\"1745018507349\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"geo\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"mapToken\":\"pk.eyJ1IjoiZGlnaXRhbGdlYm8iLCJhIjoiY204ZGpveDJ0MHBoNDJvb2xlM3hvbjlmeCJ9.AM26qGIJI5TbfPLq-yHOrw\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"mapColour\":\"mapbox://styles/mapbox/streets-v11\"},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":true},{\"sysName\":\"storeApi_url\",\"name\":\"Api Url\",\"dataType\":\"string\",\"id\":\"52061745013573468\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"store_warehouse\",\"name\":\"Warehouse\",\"dataType\":\"string\",\"id\":\"61931745010175380\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"store_type\",\"name\":\"Type\",\"dataType\":\"string\",\"id\":\"74401745010219346\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"city_link\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"80101745459471465\",\"link\":\"cities\",\"group\":\"1745018507349\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"storeProducts_input\",\"name\":\"Products Input\",\"dataType\":\"json\",\"id\":\"81191745018186194\",\"link\":\"\",\"group\":\"1745018507349\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":true},{\"sysName\":\"store_phone\",\"name\":\"Phone\",\"dataType\":\"string\",\"id\":\"82471745010369825\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"storageID\",\"name\":\"Original Storage ID\",\"dataType\":\"string\",\"id\":\"82771745015986835\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"tags\",\"name\":\"Tags\",\"dataType\":\"arrayLink\",\"id\":\"90271745150982708\",\"link\":\"tags\",\"group\":\"1745018507349\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"json\":false},{\"sysName\":\"storageName\",\"name\":\"Original Storage Name\",\"dataType\":\"string\",\"id\":\"90661745015963924\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"products_link\",\"name\":\"Link Products\",\"dataType\":\"link\",\"id\":\"94691745128589465\",\"link\":\"products\",\"group\":\"1745018507349\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false}]",
            "jsonGroupSettings": "[{\"id\":1745018507349,\"name\":\"Store Products\",\"order\":0}]",
            "jsonViewIdSettings": "[{\"sysName\":\"store_name\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2025-08-22T10:41:37Z",
            "createBy": 17816,
            "changedBy": 40587,
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
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "array": false
            },
            "folderId": 33850461
        },
        "99389969": {
            "networkID": 33259,
            "sysName": "products",
            "name": "products",
            "id": 99389969,
            "dateCreated": "2025-04-20T05:10:01Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"description\",\"name\":\"Описание продукта\",\"dataType\":\"string\",\"id\":\"10291745125961370\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"D_subcategory\",\"name\":\"Подкатегория\",\"dataType\":\"arrayLink\",\"id\":\"14191751541036633\",\"link\":\"subcategory\",\"group\":\"1749744399797\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"application_kz\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"14571755694773777\",\"link\":\"\",\"group\":\"1752980311017\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"product_composition\",\"name\":\"Composition\",\"dataType\":\"string\",\"id\":\"19801752980341278\",\"link\":\"\",\"group\":\"1752980311017\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"compound\",\"name\":\"Состав\",\"dataType\":\"string\",\"id\":\"20001753620659904\",\"link\":\"\",\"group\":\"1749744399797\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"store\",\"name\":\"Магазин\",\"dataType\":\"link\",\"id\":\"24251745425879095\",\"link\":\"stores\",\"group\":\"0\",\"tags\":\"\",\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":18,\"linkIndexFieldSysName\":[\"id\"],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":true,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"price\",\"name\":\"Цена продукта\",\"dataType\":\"string\",\"id\":\"26431745125991395\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"admin\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"29151755538610432\",\"link\":\"WebUser\",\"group\":\"1752980311017\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"storageName\",\"name\":\"Storage Name\",\"dataType\":\"string\",\"id\":\"36291745126144722\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"q_and_a\",\"name\":\"Related Questions and answers\",\"dataType\":\"arrayLink\",\"id\":\"36601745126343684\",\"link\":\"q_and_a\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"price_for_search\",\"name\":\"\",\"dataType\":\"number\",\"id\":\"40661750825387908\",\"link\":\"\",\"group\":\"1750116278446\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"storageID\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"42501745126166452\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"main_image_url\",\"name\":\"Product Main Image\",\"dataType\":\"file\",\"id\":\"44851745126240517\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"count\",\"name\":\"Склад\",\"dataType\":\"string\",\"id\":\"47101745126178181\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"main_category\",\"name\":\"Category\",\"dataType\":\"string\",\"id\":\"47441745126201929\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"name\",\"name\":\"Название продукта\",\"dataType\":\"string\",\"id\":\"49481745125946814\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"imageBase64\",\"name\":\"Base64\",\"dataType\":\"string\",\"id\":\"51191753078352215\",\"link\":\"\",\"group\":\"1752980311017\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"large_image\",\"name\":\"Основная карточка товара\",\"dataType\":\"file\",\"id\":\"52401745147934741\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":16,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"banner_position\",\"name\":\"Banner Position\",\"dataType\":\"string\",\"id\":\"63441749751277302\",\"link\":\"\",\"group\":\"1749744399797\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"articul\",\"name\":\"Артикул\",\"dataType\":\"string\",\"id\":\"64271745126067244\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"city\",\"name\":\"Город\",\"dataType\":\"link\",\"id\":\"65541745425865936\",\"link\":\"cities\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":17,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"multyImages\",\"name\":\"\",\"dataType\":\"file\",\"id\":\"67011745998760327\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":19,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"multipleImages\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"tags\",\"name\":\"Related Tags\",\"dataType\":\"arrayLink\",\"id\":\"67841745126365684\",\"link\":\"tags\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"product_autofill\",\"name\":\"Autofill\",\"dataType\":\"boolean\",\"id\":\"68661752982266239\",\"link\":\"\",\"group\":\"1752980311017\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"hideStandardBooleanIcons\":false,\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"front_qa\",\"name\":\"Questions & Answers\",\"dataType\":\"string\",\"id\":\"72721745535864934\",\"link\":\"\",\"group\":\"1745535832303\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"categoryID\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"73721745126225530\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"product_filtering\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"75121750740565299\",\"link\":\"product_filtering\",\"group\":\"1750116278446\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"product_application\",\"name\":\"Применение\",\"dataType\":\"string\",\"id\":\"75921752980363413\",\"link\":\"\",\"group\":\"1752980311017\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"json2\",\"name\":\"\",\"dataType\":\"json\",\"id\":\"76021755536718719\",\"link\":\"\",\"group\":\"1752980311017\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":true,\"array\":false},{\"sysName\":\"subCategoryName\",\"name\":\"Sub Category\",\"dataType\":\"string\",\"id\":\"76761745126019666\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"thumbail_image\",\"name\":\"Product Image Thumbail\",\"dataType\":\"file\",\"id\":\"81791745147902908\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"description_kz\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"84061755694743579\",\"link\":\"\",\"group\":\"1752980311017\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"banner_display\",\"name\":\"Banner Display\",\"dataType\":\"boolean\",\"id\":\"84811749744410275\",\"link\":\"\",\"group\":\"1749744399797\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"banner_lastchange\",\"name\":\"Banner display last change\",\"dataType\":\"date\",\"id\":\"85161749753122193\",\"link\":\"\",\"group\":\"1749744399797\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"subCategoryID\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"90821745126050228\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"front_tags\",\"name\":\"Tags\",\"dataType\":\"string\",\"id\":\"93251745535846543\",\"link\":\"\",\"group\":\"1745535832303\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"D_category\",\"name\":\"Категория\",\"dataType\":\"link\",\"id\":\"93841751541002279\",\"link\":\"category\",\"group\":\"1749744399797\",\"tags\":\"\",\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[\"id\"],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":true,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"composition_kz\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"94531755694751472\",\"link\":\"\",\"group\":\"1752980311017\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"isNew\",\"name\":\"New\",\"dataType\":\"boolean\",\"id\":\"95921750116292494\",\"link\":\"\",\"group\":\"1750116278446\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"json_responce\",\"name\":\"\",\"dataType\":\"json\",\"id\":\"97071755528443405\",\"link\":\"\",\"group\":\"1752980311017\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":true,\"array\":false}]",
            "jsonGroupSettings": "[{\"name\":\"Front\",\"id\":1745535832303,\"order\":0},{\"name\":\"Banner\",\"id\":1749744399797,\"order\":1},{\"name\":\"New Products\",\"id\":1750116278446,\"order\":2},{\"name\":\"Ai autocomplete\",\"id\":1752980311017,\"order\":3}]",
            "jsonViewIdSettings": "[{\"sysName\":\"name\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2025-08-20T13:00:53Z",
            "createBy": 17816,
            "changedBy": 40587,
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
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "array": false
            },
            "folderId": 33850464
        }
    },
    "isSuccessWrite": false,
    "writeError": null,
    "writeResponse": null,
    "fileds": [],
    "quickSearch": "",
    "httpParams": {},
    "cardCustomHtml": null,
    "cardCustomLayout": {},
    "comment": "Card_RU",
    "response": false
}

let exampleTable = {
    "sl": "newRoadMap",
    "pageSize": "12",
    "headerField": null,
    "params": {
        "comp_ID": "mq3O5",
        "cards_layout": "grid",
        "flex_layout__width": 251,
        "flex_layout__gap": 23,
        "general": {
            "showObjCount": true,
            "allowPagination": true
        },
        "cards_title": "Custom filter",
        "grid_layout__gap": 15,
        "card_layout_type": "regular",
        "card_border_radius": 12,
        "html_type_content": "Привет нахуй",
        "card_border": 0,
        "card_min_height": 120,
        "card_padding": 0,
        "filteringOn": true,
        "filterParams": {
            "dev_status": {
                "active": true,
                "dataType": "link",
                "format": "",
                "formatOptions": {},
                "name": "Development status",
                "textsearch": "endpoint",
                "endpoint": "dd"
            },
            "title": {
                "active": true,
                "dataType": "string",
                "format": "",
                "formatOptions": {},
                "name": "Feature title"
            },
            "feature_id": {
                "active": true,
                "dataType": "string",
                "format": "",
                "formatOptions": {},
                "name": "Inner ID"
            },
            "isFiltering": false,
            "isSorting": false,
            "filterFields": {
                "description": {
                    "active": true,
                    "dataType": "string",
                    "format": "markdown",
                    "formatOptions": {},
                    "name": "Feature description"
                },
                "dev_status": {
                    "active": true,
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "name": "Development status",
                    "textsearch": "choice",
                    "linkDirectory": [
                        {
                            "id": "planned",
                            "text": "Backlog"
                        },
                        {
                            "id": "released",
                            "text": "Released"
                        },
                        {
                            "id": "under_development",
                            "text": "Under development"
                        },
                        {
                            "id": "nearest_plans",
                            "text": "Planned"
                        }
                    ]
                },
                "feature_id": {
                    "active": true,
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "name": "Inner ID"
                },
                "feature_type": {
                    "active": true,
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "name": "Feature type",
                    "textsearch": "choice",
                    "linkDirectory": [
                        {
                            "id": "feature",
                            "text": "feature"
                        },
                        {
                            "id": "bug",
                            "text": "bug"
                        }
                    ]
                }
            },
            "filteringSortingLayout": "custom",
            "filteringSortingLayoutHTML": "<div style=\"padding: 20px; border: 1px solid #ddd; border-radius: 8px;\">\n    <h4>Custom Filters</h4>\n    \n    <!-- Text Search -->\n    <div style=\"margin-bottom: 15px;\">\n        <label>Search Text:</label>\n        <input type=\"text\" id=\"textSearch\" placeholder=\"Enter search term...\">\n        <button onclick=\"applyTextFilter()\">Apply</button>\n    </div>\n    \n    <!-- Numeric Range -->\n    <div style=\"margin-bottom: 15px;\">\n        <label>Number Range:</label>\n        <input type=\"number\" id=\"minNumber\" placeholder=\"Min\">\n        <input type=\"number\" id=\"maxNumber\" placeholder=\"Max\">\n        <button onclick=\"applyNumberFilter()\">Filter</button>\n    </div>\n    \n    <!-- Sorting -->\n    <div style=\"margin-bottom: 15px;\">\n        <label>Sort by:</label>\n        <select id=\"sortField\">\n            <option value=\"\">No sorting</option>\n            <option value=\"fieldName\">Field Name</option>\n            <option value=\"numberField\">Number Field</option>\n        </select>\n        <select id=\"sortDirection\">\n            <option value=\"asc\">Ascending</option>\n            <option value=\"desc\">Descending</option>\n        </select>\n        <button onclick=\"applySorting()\">Sort</button>\n    </div>\n    \n    <!-- Actions -->\n    <button onclick=\"clearFilters()\">Clear All</button>\n</div>\n\n<script>\nfunction applyTextFilter() {\n    const value = document.getElementById('textSearch').value;\n    if (value) {\n        const dql = \"'fieldName' like '\" + value + \"'\";\n        const currentSort = getCurrentSort();\n        window.DirectualFilter.emit(dql, currentSort);\n    }\n}\n\nfunction applyNumberFilter() {\n    const min = document.getElementById('minNumber').value;\n    const max = document.getElementById('maxNumber').value;\n    \n    let conditions = [];\n    if (min) conditions.push(\"'numberField' >= '\" + min + \"'\");\n    if (max) conditions.push(\"'numberField' <= '\" + max + \"'\");\n    \n    const dql = conditions.join(' AND ');\n    const currentSort = getCurrentSort();\n    window.DirectualFilter.emit(dql, currentSort);\n}\n\nfunction applySorting() {\n    const field = document.getElementById('sortField').value;\n    const direction = document.getElementById('sortDirection').value;\n    \n    if (field) {\n        const sortOptions = { field: field, direction: direction };\n        const currentFilter = getCurrentFilter();\n        window.DirectualFilter.emit(currentFilter, sortOptions);\n    }\n}\n\nfunction getCurrentSort() {\n    const field = document.getElementById('sortField').value;\n    const direction = document.getElementById('sortDirection').value;\n    return field ? { field: field, direction: direction } : null;\n}\n\nfunction getCurrentFilter() {\n    const text = document.getElementById('textSearch').value;\n    const min = document.getElementById('minNumber').value;\n    const max = document.getElementById('maxNumber').value;\n    \n    let conditions = [];\n    if (text) conditions.push(\"'fieldName' like '\" + text + \"'\");\n    if (min) conditions.push(\"'numberField' >= '\" + min + \"'\");\n    if (max) conditions.push(\"'numberField' <= '\" + max + \"'\");\n    \n    return conditions.join(' AND ');\n}\n\nfunction clearFilters() {\n    document.getElementById('textSearch').value = '';\n    document.getElementById('minNumber').value = '';\n    document.getElementById('maxNumber').value = '';\n    document.getElementById('sortField').value = '';\n    window.DirectualFilter.emit('', null);\n}\n\n// Initialize on load\nsetTimeout(() => {\n    console.log('Available fields:', window.DirectualFilter.props.fields);\n}, 100);\n</script>"
        },
        "card_type_dir": {
            "body": "<div class=\"feature-container\" style=\"border-color:#{{color}};\">\n  <span class=\"feature-type-label\" style=\"color:#{{color}};\">{{feature_type}}</span>\n  <!-- Upvote -->\n  <label class=\"upvote-btn\" tabindex=\"0\"\n         data-action-type=\"action\" \n         data-action-data=\"upvote\"\n         >\n    <input type=\"checkbox\" />\n    <div class=\"upvote-arrow\"></div>\n    <span class=\"upvote-count\">{{votes}}</span>\n  </label>\n\n  <code class=\"feature-code\">{{feature_id}}</code><br>\n  <div>\n    <b class=\"feature-title\">{{title}}</b>\n    <div class=\"tags-container\">\n      {{#tags}}\n      <div class=\"tag-item\" style=\"background-color:{{color}}; color:{{color_text}};\">{{id}}</div>\n      {{/tags}}\n    </div>\n  </div>\n</div>",
            "image_position": "no_image",
            "actionsOn": true,
            "_actions": [
                {
                    "id": "action_1753284728122",
                    "_conditionalView": true,
                    "_conditions": [
                        {
                            "id": "condition_1753284733984",
                            "_conditionalView_field": "WebUser.role",
                            "_conditionalView_operator": "notContains",
                            "_conditionalView_value": "god"
                        }
                    ],
                    "action_id": "action_1753284701822",
                    "_action_label": "Release!",
                    "_action_button_size": "small",
                    "_action_icon": "arrowRightMany",
                    "_action_button_type": "accent",
                    "_action_conditionals_manual": "manual",
                    "_action_conditional_disable_or_hide": "hide"
                }
            ],
            "_actionsDebug": {
                "debugConditions": false
            },
            "paraTemplateEngine": "api"
        },
        "routing": "modal",
        "routing_where": "/roadmap/{{feature_id}}",
        "actions": [
            {
                "id": "action_1753284701822",
                "name": "Release!",
                "actionType": "endpoint",
                "endpoint": "postAdminAction",
                "mapping": [
                    {
                        "id": "mapping_1753284713577",
                        "field": "action",
                        "value": "release!"
                    },
                    {
                        "id": "mapping_1753284966223",
                        "field": "feature_id",
                        "value": "{{id}}"
                    }
                ]
            },
            {
                "id": "action_1759926523909",
                "name": "upvote",
                "actionType": "endpoint",
                "endpoint": "upvote",
                "mapping": [
                    {
                        "id": "mapping_1759926547835",
                        "field": "feature",
                        "value": "{{id}}"
                    }
                ]
            }
        ]
    },
    "tableTitle": null,
    "actions": [],
    "headers": [
        {
            "sysName": "color",
            "name": "Card color",
            "dataType": "string",
            "id": "61881621017200362",
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
            "format": "color",
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
            "sysName": "date_added",
            "name": "Date added",
            "dataType": "date",
            "id": "68351620832123660",
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
                "dateFormat": "D MMMM, Y",
                "timeFormat": "",
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
            "sysName": "date_updated",
            "name": "Date updated",
            "dataType": "date",
            "id": "74581670507990970",
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
                "dateFormat": "D MMMM, Y",
                "timeFormat": "",
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
            "sysName": "description",
            "name": "Feature description",
            "dataType": "string",
            "id": "77031620832091108",
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
            "format": "markdown",
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
            "sysName": "dev_status",
            "name": "Development status",
            "dataType": "link",
            "id": "85621620832330584",
            "link": "development_status",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "feature_id",
            "name": "Inner ID",
            "dataType": "string",
            "id": "23601621342083348",
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
            "sysName": "feature_type",
            "name": "Feature type",
            "dataType": "link",
            "id": "55371621030232780",
            "link": "feature_type",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "progress",
            "name": "Progress",
            "dataType": "json",
            "id": "68751622642385874",
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
            "format": "slider",
            "formatOptions": {
                "customOptionLabel": "My option",
                "keyValue": {
                    "key": "key",
                    "value": "value",
                    "button": "One more"
                },
                "unitName": "%",
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
                "range": {
                    "min": 0,
                    "max": 100,
                    "step": 5
                },
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
            "json": true,
            "array": false
        },
        {
            "sysName": "tags",
            "name": "Tags",
            "dataType": "arrayLink",
            "id": "67851621409605492",
            "link": "tags",
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
            "format": null,
            "formatOptions": {},
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
            "sysName": "title",
            "name": "Feature title",
            "dataType": "string",
            "id": "79031620832091734",
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
            "sysName": "user_id",
            "name": "Who suggested",
            "dataType": "link",
            "id": "59421620832153105",
            "link": "WebUser",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "votes",
            "name": "Number of upvotes",
            "dataType": "number",
            "id": "68061620832170304",
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
            "format": "positiveNum",
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
            "sysName": "votes_ids",
            "name": "Who upvoted",
            "dataType": "arrayLink",
            "id": "14001620832180875",
            "link": "WebUser",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": false,
            "arrayLink": true,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "progress_value",
            "name": "",
            "dataType": "decimal",
            "id": "96111752753166071",
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
            "sysName": "release_date",
            "name": "Release date",
            "dataType": "date",
            "id": "71651621345011532",
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
                "dateFormat": "D MMMM, Y",
                "timeFormat": "",
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
            "votes": 17,
            "description": "Option to restrict any access to files on Directual for non-authorised users",
            "tags": [
                {
                    "color": "#0BBAB5",
                    "color_text": "rgba(0,0,0,.5)",
                    "id": "database"
                }
            ],
            "feature_id": "PLT-177",
            "color": "57bf97",
            "user_id": {
                "lastName": "Ershov",
                "firstName": "Pavel",
                "id": "pavel@directual.com"
            },
            "date_updated": 1670519010000,
            "feature_type": "feature",
            "id": "3874bd01-38af-4d0c-a04f-5eb999733d4f",
            "progress": "{\"firstValue\":0}",
            "dev_status": {
                "status": "Backlog"
            },
            "date_added": 1625253351000,
            "votes_ids": [
                {
                    "firstName": "Egor",
                    "lastName": "Baev",
                    "id": "artosiris@gmail.com"
                },
                {
                    "id": "dave@tomorrowready.com"
                },
                {
                    "firstName": "Mathew",
                    "lastName": "Tusa",
                    "id": "mobileactionim@gmail.com"
                },
                {
                    "lastName": "H",
                    "firstName": "Alejandro",
                    "id": "digitalgebo@gmail.com"
                },
                {
                    "firstName": "Dimitry",
                    "lastName": "Novozhilov",
                    "id": "novozhilov@code-word.ru"
                },
                {
                    "firstName": "Vladimir",
                    "lastName": "Stepanenko",
                    "id": "vgstepanenko@gmail.com"
                },
                {
                    "firstName": "A",
                    "lastName": "A",
                    "id": "admin@agdigitals.com"
                },
                {
                    "firstName": "Roman",
                    "lastName": "Tkachev",
                    "id": "tkachev.rb@gmail.com"
                },
                {
                    "lastName": "Pearson",
                    "firstName": "Lloyd",
                    "id": "lloydpearson@packagecues.com"
                },
                {
                    "lastName": "N",
                    "firstName": "Kamil",
                    "id": "kamil@leverall.com"
                },
                {
                    "firstName": "titouan",
                    "lastName": "albouy",
                    "id": "titouan@akatek.io"
                },
                {
                    "firstName": "VISHAL",
                    "lastName": "SETHI",
                    "id": "vs301991@gmail.com"
                },
                {
                    "firstName": "Elise",
                    "lastName": "Boonstra-Legerstee",
                    "id": "elise.legerstee@gmail.com"
                },
                {
                    "firstName": "Thomas",
                    "lastName": "Omaley",
                    "id": "thomasomaley1964@gmail.com"
                },
                {
                    "id": "trustpropsonline@gmail.com"
                },
                {
                    "id": "lindamacdonalde@gmail.com"
                },
                {
                    "firstName": "JOHNLY",
                    "lastName": "NARAG",
                    "id": "johnly_s_narag@yahoo.com"
                }
            ],
            "title": "Restrict access to files ",
            "progress_value": 0
        },
        {
            "votes": 16,
            "description": "from the table row",
            "tags": [
                {
                    "color": "#00A8F0",
                    "color_text": "rgba(255,255,255,.8)",
                    "id": "web-pages"
                }
            ],
            "feature_id": "PLT-107",
            "color": "57bf97",
            "user_id": {
                "lastName": "Ershov",
                "firstName": "Pavel",
                "id": "pavel@directual.com"
            },
            "date_updated": 1674056358000,
            "feature_type": "feature",
            "id": "bcfb59c9-235d-4d4a-96d9-07c73ec20124",
            "dev_status": {
                "status": "Backlog"
            },
            "date_added": 1621374197000,
            "votes_ids": [
                {
                    "firstName": "Egor",
                    "lastName": "Baev",
                    "id": "artosiris@gmail.com"
                },
                {
                    "lastName": "Nazarov",
                    "firstName": "Oleg",
                    "id": "olegnazarov@hotmail.com"
                },
                {
                    "id": "mf.alexander@gmail.com"
                },
                {
                    "firstName": "Dimitry",
                    "lastName": "Novozhilov",
                    "id": "novozhilov@code-word.ru"
                },
                {
                    "firstName": "Vladimir",
                    "lastName": "Stepanenko",
                    "id": "vgstepanenko@gmail.com"
                },
                {
                    "firstName": "Roman",
                    "lastName": "Tkachev",
                    "id": "tkachev.rb@gmail.com"
                },
                {
                    "id": "hamelmesfin@gmail.com"
                },
                {
                    "id": "av.volgin@gmail.com"
                },
                {
                    "firstName": "Aleksandra",
                    "lastName": "Kalina",
                    "id": "aleksandra.kalina@lamoda.ru"
                },
                {
                    "lastName": "Goncharov",
                    "firstName": "Pavel",
                    "id": "pavel@goncharov.me"
                },
                {
                    "lastName": "Khokhlov",
                    "firstName": "Alexey",
                    "id": "alexhohlov89@gmail.com"
                },
                {
                    "firstName": "Max",
                    "lastName": "Lykov",
                    "id": "mxf@mail.ru"
                },
                {
                    "id": "lykovmaxim@gmail.com"
                },
                {
                    "id": "trustpropsonline@gmail.com"
                },
                {
                    "lastName": "Титов",
                    "firstName": "Олег",
                    "id": "easylife9525@gmail.com"
                },
                {
                    "firstName": "JOHNLY",
                    "lastName": "NARAG",
                    "id": "johnly_s_narag@yahoo.com"
                }
            ],
            "title": "Actions in Table",
            "progress_value": 0
        },
        {
            "votes": 13,
            "description": "As of today, arrayLink is displayed as a simple list. It would be great to have:\n\n- Comments\n- ✅ Sorted list (in prod)\n- Cards\n- ✅ Table (in prod)\n- ✅ Shopping cart (in prod)\n- Calendar",
            "tags": [
                {
                    "color": "#00A8F0",
                    "color_text": "rgba(255,255,255,.8)",
                    "id": "web-pages"
                }
            ],
            "feature_id": "PLT-114",
            "color": "57bf97",
            "user_id": {
                "lastName": "Ershov",
                "firstName": "Pavel",
                "id": "pavel@directual.com"
            },
            "date_updated": 1670519010000,
            "feature_type": "feature",
            "id": "db3ce173-737a-4b9b-9872-f9c5d090f015",
            "progress": "{\"firstValue\":40}",
            "dev_status": {
                "status": "Backlog"
            },
            "date_added": 1621374947000,
            "votes_ids": [
                {
                    "firstName": "Egor",
                    "lastName": "Baev",
                    "id": "artosiris@gmail.com"
                },
                {
                    "firstName": "Dimitry",
                    "lastName": "Novozhilov",
                    "id": "novozhilov@code-word.ru"
                },
                {
                    "lastName": "Reyes",
                    "firstName": "Cathy",
                    "id": "iamcathyreyes@yahoo.com"
                },
                {
                    "firstName": "Vladimir",
                    "lastName": "Stepanenko",
                    "id": "vgstepanenko@gmail.com"
                },
                {
                    "firstName": "Aleksandra",
                    "lastName": "Kalina",
                    "id": "aleksandra.kalina@lamoda.ru"
                },
                {
                    "firstName": "Do",
                    "lastName": "Do",
                    "id": "dodo@inboxbear.com"
                },
                {
                    "lastName": "Goncharov",
                    "firstName": "Pavel",
                    "id": "pavel@goncharov.me"
                },
                {
                    "firstName": "Max",
                    "lastName": "Lykov",
                    "id": "mxf@mail.ru"
                },
                {
                    "firstName": "Efim",
                    "lastName": "Maisak",
                    "id": "coldnaked@gmail.com"
                },
                {
                    "id": "kolgtim@gmail.com"
                },
                {
                    "lastName": "Ershov",
                    "firstName": "Pavel",
                    "id": "pavel@directual.com"
                },
                {
                    "firstName": "Renato",
                    "lastName": "Pinto",
                    "id": "renato.casa.corre@gmail.com"
                },
                {
                    "firstName": "JOHNLY",
                    "lastName": "NARAG",
                    "id": "johnly_s_narag@yahoo.com"
                }
            ],
            "title": "Sophisticated view for arrayLinks on object cards",
            "progress_value": 40
        },
        {
            "votes": 11,
            "description": "- XML sitemap\n- robots.txt\n- canonical URLs\n- Schema.org Open Graph\n- 404\n- htaccess\n- Meta: Title, description, Keywords, Content-Type\n- Alt for pictures\n\n[SEO checklist](https://dminhvu.com/nextjs-seo)",
            "tags": [
                {
                    "color": "#00A8F0",
                    "color_text": "rgba(255,255,255,.8)",
                    "id": "web-pages"
                }
            ],
            "feature_id": "PLT-304",
            "color": "57bf97",
            "user_id": {
                "lastName": "Ershov",
                "firstName": "Pavel",
                "id": "pavel@directual.com"
            },
            "date_updated": 1711715915000,
            "feature_type": "feature",
            "id": "014091fa-909b-4657-b309-5be994ec1e4c",
            "progress": "{\"firstValue\":0}",
            "dev_status": {
                "status": "Backlog"
            },
            "date_added": 1643554566000,
            "votes_ids": [
                {
                    "firstName": "Egor",
                    "lastName": "Baev",
                    "id": "artosiris@gmail.com"
                },
                {
                    "lastName": "Online",
                    "firstName": "Bisapco",
                    "id": "atr.service.msk@gmail.com"
                },
                {
                    "firstName": "Dimitry",
                    "lastName": "Novozhilov",
                    "id": "novozhilov@code-word.ru"
                },
                {
                    "lastName": "Ershov",
                    "firstName": "Pavel",
                    "id": "pavel@ershov.org"
                },
                {
                    "firstName": "Joses",
                    "lastName": "Saumaitoga",
                    "id": "josesjjs@tpg.com.au"
                },
                {
                    "lastName": "Goncharov",
                    "firstName": "Pavel",
                    "id": "pavel@goncharov.me"
                },
                {
                    "lastName": "N",
                    "firstName": "Kamil",
                    "id": "kamil@leverall.com"
                },
                {
                    "firstName": "Otto",
                    "lastName": "Baumann",
                    "id": "ob@it-setup.dk"
                },
                {
                    "id": "sergey.azarov@gmail.com"
                },
                {
                    "id": "trustpropsonline@gmail.com"
                },
                {
                    "firstName": "JOHNLY",
                    "lastName": "NARAG",
                    "id": "johnly_s_narag@yahoo.com"
                }
            ],
            "title": "SEO-related features",
            "progress_value": 0
        },
        {
            "votes": 11,
            "description": "Copy pages in Web-pages",
            "tags": [
                {
                    "color": "#00A8F0",
                    "color_text": "rgba(255,255,255,.8)",
                    "id": "web-pages"
                }
            ],
            "feature_id": "PLT-215",
            "color": "57bf97",
            "user_id": {
                "firstName": "Vladimir",
                "lastName": "Stepanenko",
                "id": "vgstepanenko@gmail.com"
            },
            "date_updated": 1670519011000,
            "feature_type": "feature",
            "id": "67b93ec9-cff1-4870-8d92-42a4a53e60d9",
            "progress": "{\"firstValue\":0}",
            "dev_status": {
                "status": "Backlog"
            },
            "date_added": 1628176984000,
            "votes_ids": [
                {
                    "firstName": "Egor",
                    "lastName": "Baev",
                    "id": "artosiris@gmail.com"
                },
                {
                    "firstName": "Joses",
                    "lastName": "Saumaitoga",
                    "id": "josesjjs@tpg.com.au"
                },
                {
                    "lastName": "Nichols",
                    "firstName": "Joanne",
                    "id": "jonichols@me.com"
                },
                {
                    "firstName": "Max",
                    "lastName": "Lykov",
                    "id": "mxf@mail.ru"
                },
                {
                    "lastName": "Goncharov",
                    "firstName": "Pavel",
                    "id": "office@ingros.ru"
                },
                {
                    "id": "victorblan@gmail.com"
                },
                {
                    "id": "lykovmaxim@gmail.com"
                },
                {
                    "lastName": "Ershov",
                    "firstName": "Pavel",
                    "id": "pavel@directual.com"
                },
                {
                    "lastName": "Gaisin",
                    "firstName": "Ruslan",
                    "id": "rusgaisin@gmail.com"
                },
                {
                    "id": "trustpropsonline@gmail.com"
                },
                {
                    "firstName": "JOHNLY",
                    "lastName": "NARAG",
                    "id": "johnly_s_narag@yahoo.com"
                }
            ],
            "title": "Copy page on portal",
            "progress_value": 0
        },
        {
            "votes": 11,
            "description": "Add \"not in array\" filter in condition cube and in api filter section. Ideally add 2 new options: \n1. object is NOT in array\n2. array does NOT contain all\n2. array does NOT contain any",
            "tags": [
                {
                    "color_text": "rgba(0,0,0,.5)",
                    "color": "#F28B82",
                    "id": "scenarios"
                },
                {
                    "color_text": "rgba(0,0,0,.5)",
                    "color": "#FDD663",
                    "id": "api-builder"
                }
            ],
            "feature_id": "PLT-120",
            "color": "57bf97",
            "user_id": {
                "lastName": "Dolgov",
                "firstName": "Nikita",
                "id": "n.dolgov@directual.com"
            },
            "date_updated": 1692696268000,
            "feature_type": "feature",
            "id": "7d8635da-2738-44cf-b4b7-1d509611f8ed",
            "progress": "{\"firstValue\":0}",
            "dev_status": {
                "status": "Backlog"
            },
            "date_added": 1621377697000,
            "votes_ids": [
                {
                    "firstName": "Egor",
                    "lastName": "Baev",
                    "id": "artosiris@gmail.com"
                },
                {
                    "firstName": "Dimitry",
                    "lastName": "Novozhilov",
                    "id": "novozhilov@code-word.ru"
                },
                {
                    "lastName": "Ermolaev",
                    "firstName": "Timur",
                    "id": "ermolaev@code-word.ru"
                },
                {
                    "firstName": "Anton",
                    "lastName": "Sidorov",
                    "id": "a@preencipium.com"
                },
                {
                    "firstName": "Max",
                    "lastName": "Lykov",
                    "id": "mxf@mail.ru"
                },
                {
                    "id": "drammichd@gmail.com"
                },
                {
                    "id": "kolgtim@gmail.com"
                },
                {
                    "lastName": "Ershov",
                    "firstName": "Pavel",
                    "id": "pavel@directual.com"
                },
                {
                    "lastName": "Титов",
                    "firstName": "Олег",
                    "id": "easylife9525@gmail.com"
                },
                {
                    "firstName": "JOHNLY",
                    "lastName": "NARAG",
                    "id": "johnly_s_narag@yahoo.com"
                },
                {
                    "lastName": "Dolgov",
                    "firstName": "Nikita",
                    "id": "n.dolgov@directual.com"
                }
            ],
            "title": "Add NOT-filters for arrays",
            "progress_value": 0
        },
        {
            "votes": 11,
            "description": "When a structure becomes big with hundreds of parameters it usually makes it difficult to manage and to find in scenario parameter we need. Usually a lot of parameters with time become unused. The easiest way to fix this problem but not to broke old scenarios and other structures, connected with our unused parameters is to allow user to hide it both in structures and scenarios, something like adding them to archive from which we can drop them back any time we want.   ",
            "tags": [
                {
                    "color": "#0BBAB5",
                    "color_text": "rgba(0,0,0,.5)",
                    "id": "database"
                }
            ],
            "feature_id": "PLT-281",
            "color": "57bf97",
            "user_id": {
                "firstName": "Artem",
                "lastName": "Laptev",
                "id": "artemlaptev7@gmail.com"
            },
            "date_updated": 1670519011000,
            "feature_type": "feature",
            "id": "4dee093a-d6b6-461c-997c-7bce76b93027",
            "dev_status": {
                "status": "Backlog"
            },
            "date_added": 1637408122000,
            "votes_ids": [
                {
                    "firstName": "Egor",
                    "lastName": "Baev",
                    "id": "artosiris@gmail.com"
                },
                {
                    "firstName": "Dimitry",
                    "lastName": "Novozhilov",
                    "id": "novozhilov@code-word.ru"
                },
                {
                    "firstName": "Joses",
                    "lastName": "Saumaitoga",
                    "id": "josesjjs@tpg.com.au"
                },
                {
                    "lastName": "Nichols",
                    "firstName": "Joanne",
                    "id": "jonichols@me.com"
                },
                {
                    "lastName": "O'Hara",
                    "firstName": "Andrew",
                    "id": "andrewohara111@gmail.com"
                },
                {
                    "firstName": "Anton",
                    "lastName": "Sidorov",
                    "id": "a@preencipium.com"
                },
                {
                    "firstName": "Max",
                    "lastName": "Lykov",
                    "id": "mxf@mail.ru"
                },
                {
                    "lastName": "Ershov",
                    "firstName": "Pavel",
                    "id": "pavel@directual.com"
                },
                {
                    "id": "sergey.azarov@gmail.com"
                },
                {
                    "id": "lindamacdonalde@gmail.com"
                },
                {
                    "firstName": "JOHNLY",
                    "lastName": "NARAG",
                    "id": "johnly_s_narag@yahoo.com"
                }
            ],
            "title": "hide unused fields",
            "progress_value": 0
        },
        {
            "votes": 11,
            "description": "- Custom fields\n- Edit Sign in page\n- If there is only one sign in method, show the button in the menu\n- Sync scenario under the hood",
            "tags": [
                {
                    "color": "#00A8F0",
                    "color_text": "rgba(255,255,255,.8)",
                    "id": "web-pages"
                }
            ],
            "feature_id": "PLT-321",
            "color": "57bf97",
            "user_id": {
                "lastName": "Ershov",
                "firstName": "Pavel",
                "id": "pavel@directual.com"
            },
            "date_updated": 1679934103000,
            "feature_type": "feature",
            "id": "3b69de70-1c09-4d37-ac59-a11d071996c1",
            "progress": "{\"firstValue\":0}",
            "dev_status": {
                "status": "Backlog"
            },
            "date_added": 1653668903000,
            "votes_ids": [
                {
                    "firstName": "Anton",
                    "lastName": "Romaniuk",
                    "id": "eddress@yandex.ru"
                },
                {
                    "lastName": "Online",
                    "firstName": "Bisapco",
                    "id": "atr.service.msk@gmail.com"
                },
                {
                    "id": "zhgenty@gmail.com"
                },
                {
                    "lastName": "D",
                    "firstName": "Vadim",
                    "id": "logicunit@gmail.com"
                },
                {
                    "lastName": "Khokhlov",
                    "firstName": "Alexey",
                    "id": "alexhohlov89@gmail.com"
                },
                {
                    "lastName": "Goncharov",
                    "firstName": "Pavel",
                    "id": "office@ingros.ru"
                },
                {
                    "id": "mrjackfeliciano@gmail.com"
                },
                {
                    "id": "viktor.iwan@doxadigital.com"
                },
                {
                    "lastName": "Титов",
                    "firstName": "Олег",
                    "id": "easylife9525@gmail.com"
                },
                {
                    "firstName": "Mark",
                    "lastName": "Vokes",
                    "id": "mark@concept2commerce.com"
                },
                {
                    "firstName": "JOHNLY",
                    "lastName": "NARAG",
                    "id": "johnly_s_narag@yahoo.com"
                }
            ],
            "title": "Refactor Sign Up",
            "progress_value": 0
        },
        {
            "votes": 11,
            "description": "With auto-logging-in",
            "tags": [
                {
                    "color": "#00A8F0",
                    "color_text": "rgba(255,255,255,.8)",
                    "id": "web-pages"
                }
            ],
            "feature_id": "PLT-266",
            "color": "57bf97",
            "user_id": {
                "lastName": "Ershov",
                "firstName": "Pavel",
                "id": "pavel@directual.com"
            },
            "date_updated": 1710500343000,
            "feature_type": "feature",
            "id": "c8012055-0d2a-41ac-b7d0-35e2b34aec53",
            "dev_status": {
                "status": "Backlog"
            },
            "date_added": 1634772726000,
            "votes_ids": [
                {
                    "firstName": "Egor",
                    "lastName": "Baev",
                    "id": "artosiris@gmail.com"
                },
                {
                    "firstName": "Dimitry",
                    "lastName": "Novozhilov",
                    "id": "novozhilov@code-word.ru"
                },
                {
                    "lastName": "Pearson",
                    "firstName": "Lloyd",
                    "id": "lloydpearson@packagecues.com"
                },
                {
                    "lastName": "N",
                    "firstName": "Kamil",
                    "id": "kamil@leverall.com"
                },
                {
                    "lastName": "Ershov",
                    "firstName": "Pavel",
                    "id": "pavel@directual.com"
                },
                {
                    "firstName": "Renato",
                    "lastName": "Pinto",
                    "id": "renato.casa.corre@gmail.com"
                },
                {
                    "lastName": "Mihailov",
                    "firstName": "Mike",
                    "id": "edueduedoo@gmail.com"
                },
                {
                    "lastName": "Титов",
                    "firstName": "Олег",
                    "id": "easylife9525@gmail.com"
                },
                {
                    "id": "ilan@ezcell.ca"
                },
                {
                    "id": "lindamacdonalde@gmail.com"
                },
                {
                    "firstName": "JOHNLY",
                    "lastName": "NARAG",
                    "id": "johnly_s_narag@yahoo.com"
                }
            ],
            "title": "\"Magic link\" to app",
            "progress_value": 0
        },
        {
            "votes": 10,
            "description": "Two-step import of CSV/XLS\n\n### Step 1\nFields aliases, with quick structure editing.\n\n### Step 2\nImport itself\n\nP.S. Webflow has similar mechanism of CSV import.\n\nPlus:\n- import from Airtable\n- import from Google Sheets\n- import from popular CRMs\n- Listeners on SQL databases",
            "tags": [
                {
                    "color": "#0BBAB5",
                    "color_text": "rgba(0,0,0,.5)",
                    "id": "database"
                }
            ],
            "feature_id": "PLT-102",
            "color": "57bf97",
            "user_id": {
                "lastName": "Ershov",
                "firstName": "Pavel",
                "id": "pavel@directual.com"
            },
            "date_updated": 1731529807000,
            "feature_type": "feature",
            "id": "b5ca7520-f1d3-48da-af26-0cdacab94757",
            "progress": "{\"firstValue\":40}",
            "dev_status": {
                "status": "Backlog"
            },
            "date_added": 1621373725000,
            "votes_ids": [
                {
                    "firstName": "Egor",
                    "lastName": "Baev",
                    "id": "artosiris@gmail.com"
                },
                {
                    "firstName": "Roman",
                    "lastName": "Tkachev",
                    "id": "tkachev.rb@gmail.com"
                },
                {
                    "lastName": "Nichols",
                    "firstName": "Joanne",
                    "id": "jonichols@me.com"
                },
                {
                    "lastName": "Pearson",
                    "firstName": "Lloyd",
                    "id": "lloydpearson@packagecues.com"
                },
                {
                    "lastName": "Ershov",
                    "firstName": "Pavel",
                    "id": "pavel@directual.com"
                },
                {
                    "firstName": "Elise",
                    "lastName": "Boonstra-Legerstee",
                    "id": "elise.legerstee@gmail.com"
                },
                {
                    "firstName": "Renato",
                    "lastName": "Pinto",
                    "id": "renato.casa.corre@gmail.com"
                },
                {
                    "lastName": "Grimalsky",
                    "firstName": "Slava",
                    "id": "itareo@gmail.com"
                },
                {
                    "id": "lindamacdonalde@gmail.com"
                },
                {
                    "firstName": "JOHNLY",
                    "lastName": "NARAG",
                    "id": "johnly_s_narag@yahoo.com"
                }
            ],
            "title": "Import updating",
            "progress_value": 40
        },
        {
            "votes": 9,
            "description": "Add a setting in \"Sent text message\" mode to choose the keyboard layout: vertical or horizontal",
            "tags": [
                {
                    "color_text": "rgba(0,0,0,.5)",
                    "color": "#F28B82",
                    "id": "scenarios"
                }
            ],
            "feature_id": "PLT-228",
            "color": "57bf97",
            "user_id": {
                "lastName": "Ershov",
                "firstName": "Pavel",
                "id": "pavel@directual.com"
            },
            "date_updated": 1670519011000,
            "feature_type": "feature",
            "id": "5cd1b1d3-2e29-4df5-94e9-c1aedb16043a",
            "dev_status": {
                "status": "Backlog"
            },
            "date_added": 1629374375000,
            "votes_ids": [
                {
                    "lastName": "Leonov",
                    "firstName": "Alexey",
                    "id": "alex@yolki24.ru"
                },
                {
                    "firstName": "Joses",
                    "lastName": "Saumaitoga",
                    "id": "josesjjs@tpg.com.au"
                },
                {
                    "firstName": "Max",
                    "lastName": "Lykov",
                    "id": "mxf@mail.ru"
                },
                {
                    "id": "lykovmaxim@gmail.com"
                },
                {
                    "lastName": "Ershov",
                    "firstName": "Pavel",
                    "id": "pavel@directual.com"
                },
                {
                    "id": "sergey.azarov@gmail.com"
                },
                {
                    "firstName": "Thomas",
                    "lastName": "Omaley",
                    "id": "thomasomaley1964@gmail.com"
                },
                {
                    "firstName": "Hao",
                    "lastName": "Ngo",
                    "id": "hao.ngolv@gmail.com"
                },
                {
                    "firstName": "JOHNLY",
                    "lastName": "NARAG",
                    "id": "johnly_s_narag@yahoo.com"
                }
            ],
            "title": "Telegram step – vertical/horizontal keyboard",
            "progress_value": 0
        },
        {
            "votes": 7,
            "description": "Fast import from Airtable",
            "feature_id": "PLT-182",
            "color": "57bf97",
            "user_id": {
                "lastName": "Ershov",
                "firstName": "Pavel",
                "id": "pavel@directual.com"
            },
            "date_updated": 1670519010000,
            "feature_type": "feature",
            "id": "e54e9618-65ed-4c6b-ae65-028efa41de25",
            "dev_status": {
                "status": "Backlog"
            },
            "date_added": 1626367475000,
            "votes_ids": [
                {
                    "firstName": "Roman",
                    "lastName": "Tkachev",
                    "id": "tkachev.rb@gmail.com"
                },
                {
                    "id": "subrtt@gmail.com"
                },
                {
                    "firstName": "Do",
                    "lastName": "Do",
                    "id": "dodo@inboxbear.com"
                },
                {
                    "firstName": "Ken",
                    "lastName": "Lyle",
                    "id": "kenlyle@gmail.com"
                },
                {
                    "firstName": "Thomas",
                    "lastName": "Omaley",
                    "id": "thomasomaley1964@gmail.com"
                },
                {
                    "id": "trustpropsonline@gmail.com"
                },
                {
                    "firstName": "JOHNLY",
                    "lastName": "NARAG",
                    "id": "johnly_s_narag@yahoo.com"
                }
            ],
            "title": "Import from Airtable",
            "progress_value": 0
        }
    ],
    "totalPages": 6,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [
        [
            "color",
            1385610
        ],
        [
            "date_added",
            1385610
        ],
        [
            "date_updated",
            1385610
        ],
        [
            "description",
            1385610
        ],
        [
            "dev_status.status",
            1385613
        ],
        [
            "feature_id",
            1385610
        ],
        [
            "feature_type",
            1385610
        ],
        [
            "id",
            1385610
        ],
        [
            "progress",
            1385610
        ],
        [
            "tags.id",
            1386924
        ],
        [
            "tags.color_text",
            1386924
        ],
        [
            "tags.color",
            1386924
        ],
        [
            "title",
            1385610
        ],
        [
            "user_id.firstName",
            1385542
        ],
        [
            "user_id.id",
            1385542
        ],
        [
            "user_id.lastName",
            1385542
        ],
        [
            "votes",
            1385610
        ],
        [
            "votes_ids.firstName",
            1385542
        ],
        [
            "votes_ids.id",
            1385542
        ],
        [
            "votes_ids.lastName",
            1385542
        ],
        [
            "progress_value",
            1385610
        ],
        [
            "release_date",
            1385610
        ]
    ],
    "writeFields": [],
    "structures": {
        "1385542": {
            "networkID": 6829,
            "sysName": "WebUser",
            "name": "App users",
            "id": 1385542,
            "dateCreated": "2021-05-14T21:02:45Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"dateLastActivity\",\"name\":\"dateLastActivity\",\"dataType\":\"string\",\"id\":\"8\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"dateCreated\",\"name\":\"dateCreated\",\"dataType\":\"string\",\"id\":\"11\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"isAuthorization\",\"name\":\"isAuthorization\",\"dataType\":\"boolean\",\"id\":\"7\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"request_counter\",\"name\":\"\",\"dataType\":\"json\",\"id\":\"26481752759056266\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":true,\"array\":false},{\"sysName\":\"phone\",\"name\":\"Phone\",\"dataType\":\"string\",\"id\":\"10\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"email\",\"name\":\"Email\",\"dataType\":\"string\",\"id\":\"9\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"userpic\",\"name\":\"User pic\",\"dataType\":\"file\",\"id\":\"1\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":{},\"groupName\":\"Contacts\",\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"id\",\"name\":\"Username (login)\",\"dataType\":\"id\",\"id\":\"13\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"role\",\"name\":\"Roles\",\"dataType\":\"string\",\"id\":\"6\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"password\",\"name\":\"Password (hash)\",\"dataType\":\"string\",\"id\":\"12\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"firstName\",\"name\":\"First name\",\"dataType\":\"string\",\"id\":\"5\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"lastName\",\"name\":\"Last name\",\"dataType\":\"string\",\"id\":\"4\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"gender\",\"name\":\"Gender\",\"dataType\":\"string\",\"id\":\"3\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"date_registered\",\"name\":\"Date registered on Dev\",\"dataType\":\"date\",\"id\":\"14451621029358812\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"isBlocked\",\"name\":\"Block user\",\"dataType\":\"boolean\",\"id\":\"2\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"code\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"51351621027822811\",\"link\":\"\",\"group\":\"1621027815164\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"isEmailConfirmed\",\"name\":\"Email confirmed\",\"dataType\":\"boolean\",\"id\":\"60111621027825496\",\"link\":\"\",\"group\":\"1621027815164\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"balance\",\"name\":\"Account balance\",\"dataType\":\"decimal\",\"id\":\"81481754134113259\",\"link\":\"\",\"group\":\"1754134105862\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"transaction_ids\",\"name\":\"\",\"dataType\":\"arrayLink\",\"id\":\"63381754134242079\",\"link\":\"transactions\",\"group\":\"1754134105862\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"json\":false,\"array\":false}]",
            "jsonGroupSettings": "[{\"name\":\"Contacts\",\"id\":-502807437,\"order\":0},{\"name\":\"System fields\",\"id\":-1776115286,\"order\":1},{\"name\":\"Email confirmation\",\"id\":1621027815164,\"order\":2},{\"name\":\"BILLING\",\"id\":1754134105862,\"order\":3}]",
            "jsonViewIdSettings": "[{\"sysName\":\"firstName\"},{\"sysName\":\"lastName\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2025-08-02T20:51:02Z",
            "createBy": 0,
            "changedBy": 1,
            "_settings": null,
            "_nativeIndexSettings": null,
            "innerIDField": {
                "sysName": "id",
                "name": "Username (login)",
                "dataType": "id",
                "id": "13",
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
            "objectIDSysName": "id",
            "folderId": null
        },
        "1385610": {
            "networkID": 6829,
            "sysName": "Features",
            "name": "Feature requests and Bug reports",
            "id": 1385610,
            "dateCreated": "2021-05-12T15:06:56Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"votes_ids\",\"name\":\"Who upvoted\",\"dataType\":\"arrayLink\",\"id\":\"14001620832180875\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"feature_id\",\"name\":\"Inner ID\",\"dataType\":\"string\",\"id\":\"23601621342083348\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"subscriber_ids\",\"name\":\"Subscribers\",\"dataType\":\"arrayLink\",\"id\":\"26751621348189191\",\"link\":\"WebUser\",\"group\":\"1621348185318\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"status\",\"name\":\"Request status\",\"dataType\":\"link\",\"id\":\"40251620832303364\",\"link\":\"request_status\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"release_id\",\"name\":\"Release\",\"dataType\":\"link\",\"id\":\"40791621408746909\",\"link\":\"Releases\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"feature_type\",\"name\":\"Feature type\",\"dataType\":\"link\",\"id\":\"55371621030232780\",\"link\":\"feature_type\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"user_id\",\"name\":\"Who suggested\",\"dataType\":\"link\",\"id\":\"59421620832153105\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"screenshots\",\"name\":\"Screenshots or Screencast\",\"dataType\":\"file\",\"id\":\"61091637158867177\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":18,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"multipleFiles\",\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"color\",\"name\":\"Card color\",\"dataType\":\"string\",\"id\":\"61881621017200362\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"tags\",\"name\":\"Tags\",\"dataType\":\"arrayLink\",\"id\":\"67851621409605492\",\"link\":\"tags\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"votes\",\"name\":\"Number of upvotes\",\"dataType\":\"number\",\"id\":\"68061620832170304\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"date_added\",\"name\":\"Date added\",\"dataType\":\"date\",\"id\":\"68351620832123660\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"D MMMM, Y\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"progress\",\"name\":\"Progress\",\"dataType\":\"json\",\"id\":\"68751622642385874\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":16,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"slider\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"unitName\":\"%\",\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{\"min\":0,\"max\":100,\"step\":5},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"release_date\",\"name\":\"Release date\",\"dataType\":\"date\",\"id\":\"71651621345011532\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"D MMMM, Y\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"decline_reason\",\"name\":\"Reason of decline\",\"dataType\":\"string\",\"id\":\"73671621342083940\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"date_updated\",\"name\":\"Date updated\",\"dataType\":\"date\",\"id\":\"74581670507990970\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"D MMMM, Y\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"description\",\"name\":\"Feature description\",\"dataType\":\"string\",\"id\":\"77031620832091108\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"title\",\"name\":\"Feature title\",\"dataType\":\"string\",\"id\":\"79031620832091734\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"dev_status\",\"name\":\"Development status\",\"dataType\":\"link\",\"id\":\"85621620832330584\",\"link\":\"development_status\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"progress_value\",\"name\":\"\",\"dataType\":\"decimal\",\"id\":\"96111752753166071\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":17,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false}]",
            "jsonGroupSettings": "[{\"name\":\"Subscriptions\",\"id\":1621348185318,\"order\":0}]",
            "jsonViewIdSettings": "[{\"sysName\":\"feature_id\"},{\"sysName\":\"title\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2025-07-17T11:52:59Z",
            "createBy": 1,
            "changedBy": 1,
            "_settings": null,
            "_nativeIndexSettings": null,
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
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "array": false
            },
            "objectIDSysName": "id",
            "folderId": 33625685
        },
        "1385613": {
            "networkID": 6829,
            "sysName": "development_status",
            "name": "development_status",
            "id": 1385613,
            "dateCreated": "2021-05-12T15:14:45Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false},{\"sysName\":\"status\",\"dataType\":\"string\",\"name\":\"Status\",\"id\":\"23221620832490508\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false},{\"sysName\":\"@who\",\"dataType\":\"string\",\"name\":\"who changed\",\"id\":\"-1\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false},{\"sysName\":\"@dateCreated\",\"dataType\":\"date\",\"name\":\"date created\",\"id\":\"-2\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false},{\"sysName\":\"@dateChanged\",\"dataType\":\"date\",\"name\":\"date changed\",\"id\":\"-3\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"status\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2021-05-12T15:14:59Z",
            "createBy": 1,
            "changedBy": 1,
            "_settings": null,
            "_nativeIndexSettings": null,
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
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "array": false
            },
            "objectIDSysName": "id",
            "folderId": 33625685
        },
        "1386924": {
            "networkID": 6829,
            "sysName": "tags",
            "name": "tags",
            "id": 1386924,
            "dateCreated": "2021-05-19T07:32:38Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"color\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"36801751108901500\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"color_text\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"42251751109783628\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"id\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2025-06-28T11:23:11Z",
            "createBy": 1,
            "changedBy": 1,
            "_settings": null,
            "_nativeIndexSettings": null,
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
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "array": false
            },
            "objectIDSysName": "id",
            "folderId": 33625685
        }
    },
    "isSuccessWrite": false,
    "writeError": null,
    "writeResponse": null,
    "fileds": [],
    "quickSearch": "",
    "httpParams": {
        "status": "planned"
    },
    "cardCustomHtml": null,
    "cardCustomLayout": {},
    "comment": "Backlog",
    "response": false
}

let authExample = {
  "isAuth": false,
  "custom_labels": "{\n   \"foo\": \"hello brave new world!\",\n   \"bar\": \"foobar\"\n}",
  "role": "admin,god",
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
    debug: true // в сторибуке всегда включаем дебаг режим
  },
};

// Story с кастомными фильтрами для карточек
export const CustomHTMLFilters = {
  args: {
    data: exampleTable,
    auth: authExample,
    locale: 'ENG',
    onChange: value => console.log(value),
    handleRoute: value => e => console.log("route => " + value),
    debug: true
  },
};
