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
    "sl": "getGuests",
    "pageSize": "10",
    "headerField": null,
    "params": {
        "comp_ID": "xUtIub",
        "cards_layout": "grid",
        "card_layout_type": "regular",
        "card_type_dir": {
            "image_position": "top",
            "image_border_radius": 0,
            "image": "{{photo}}",
            "body": "<div style=\"padding-top:12px\">\n  \n{{title}}<br />\n<b style=\"font-size: 22px\">{{name}}</b><br />\n<div class=\"date\" style=\"padding-top:3px; opacity:.5\">{{date}}</div>\n</div>\n<script>\n(function () {\n  const toRusDate = (date) => {\n    const parts = new Intl.DateTimeFormat('ru-RU', {\n      day: 'numeric', month: 'long', year: 'numeric'\n    }).formatToParts(date).reduce((a, p) => (a[p.type] = p.value, a), {});\n    return `${parts.day} ${parts.month} ${parts.year}`; // без \"г.\"\n  };\n\n  const parseDate = (raw) => {\n    const s = String(raw).trim();\n    // сначала пробуем как число (включая микросек/нано)\n    const num = s.match(/-?\\d+/)?.[0];\n    if (num) {\n      let n = Number(num);\n      if (!Number.isFinite(n)) return null;\n      // нормализуем масштаб к миллисекундам\n      if (Math.abs(n) < 1e12) n *= 1000;                 // сек → мс\n      else if (Math.abs(n) > 1e15 && Math.abs(n) < 1e18) n = Math.floor(n / 1000); // мкс → мс\n      else if (Math.abs(n) >= 1e18) n = Math.floor(n / 1e6); // нс → мс\n      const d = new Date(n);\n      return isNaN(d) ? null : d;\n    }\n    // иначе пытаемся распарсить как строковую дату (ISO и т.п.)\n    const d = new Date(s);\n    return isNaN(d) ? null : d;\n  };\n\n  const formatNode = (el) => {\n    if (el.dataset.formatted) return; // не переформатировать повторно\n    const d = parseDate(el.textContent);\n    if (d) {\n      el.textContent = toRusDate(d);\n      el.dataset.formatted = '1';\n    }\n  };\n\n  const processAll = (root = document) => {\n    root.querySelectorAll('.date').forEach(formatNode);\n  };\n\n  // первый прогон\n  if (document.readyState === 'loading') {\n    document.addEventListener('DOMContentLoaded', () => processAll());\n  } else {\n    processAll();\n  }\n\n  // на случай, если Directual дорисовывает узлы после загрузки\n  const mo = new MutationObserver((mutations) => {\n    for (const m of mutations) {\n      m.addedNodes.forEach((node) => {\n        if (node.nodeType !== 1) return;\n        if (node.matches?.('.date')) formatNode(node);\n        node.querySelectorAll?.('.date').forEach(formatNode);\n      });\n    }\n  });\n  mo.observe(document.body, { childList: true, subtree: true });\n})();\n</script>",
            "paraTemplateEngine": "front",
            "image_height": 200,
            "image_padding": 0
        },
        "card_min_height": 50,
        "grid_layout__wideDesktop": 4,
        "grid_layout__desktop": 3,
        "card_padding": 0,
        "card_border": 0,
        "general": {
            "allowPagination": false
        },
        "routing": "modal",
        "routing_where": "./{{id}}"
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
            "array": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false
        },
        {
            "sysName": "title",
            "name": "",
            "dataType": "string",
            "id": "93861758273394929",
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
            "typeVariable": {},
            "json": false,
            "indexExists": false
        },
        {
            "sysName": "name",
            "name": "",
            "dataType": "string",
            "id": "14671758268117705",
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
            "typeVariable": {},
            "json": false,
            "indexExists": false
        },
        {
            "sysName": "topic",
            "name": "",
            "dataType": "string",
            "id": "99961758273371019",
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
            "array": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false
        },
        {
            "sysName": "vk_embed",
            "name": "",
            "dataType": "string",
            "id": "37231758273348792",
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
            "format": "html",
            "formatOptions": {},
            "groupName": null,
            "array": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false
        },
        {
            "sysName": "youtube_embed",
            "name": "",
            "dataType": "string",
            "id": "48411758273335313",
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
            "format": "html",
            "formatOptions": {},
            "groupName": null,
            "array": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false
        },
        {
            "sysName": "date",
            "name": "",
            "dataType": "date",
            "id": "37071758273206005",
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
                "dateFormat": "DD MMMM, Y",
                "timeFormat": "",
                "isUTC": "false"
            },
            "groupName": null,
            "array": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false
        },
        {
            "sysName": "photo",
            "name": "",
            "dataType": "file",
            "id": "24471758268125747",
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
            "format": "image",
            "formatOptions": {},
            "groupName": null,
            "array": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false
        },
        {
            "sysName": "description",
            "name": "",
            "dataType": "string",
            "id": "99251758268121593",
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
            "format": "markdown",
            "formatOptions": {},
            "groupName": null,
            "array": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false
        }
    ],
    "data": [
        {
            "name": "Адель Кадыров, Kale Care",
            "photo": "https://api.alfa.directual.com/fileUploaded/podcast/67346c61-5239-49c2-b0e9-568bd37608ea.jpg",
            "description": "В первом выпуске подкаста Directual Talks мы общаемся с Аделем Кадыровым — маркетологом, который с помощью no-code разработал сервис Kale Care, достигший $15k MRR.\nАдель — солопренёр, AI-энтузиаст и консультант, который делится опытом, инсайтами и советами для тех, кто хочет запустить свой проект в одиночку.\n\nВ беседе:\n- путь от маркетинга к no-code разработке;\n- как запустить прибыльный продукт без команды;\n- роль ИИ в автоматизации и масштабировании;\n- советы начинающим солопренерам;\n- взгляд на будущее no-code и AI.\n\n📌 Подписывайтесь на канал [Аделя в Telegram](https://t.me/ad_kad)",
            "id": "590cd5dd-f39f-45e3-b24e-62802ff0323f",
            "date": 1755205200000,
            "youtube_embed": "<div style=\"max-width: 1000px; margin: 0 auto 40px auto; aspect-ratio: 16 / 9; overflow:hidden; border-radius: 20px\">\n  <iframe\n    src=\"https://www.youtube.com/embed/_OaYa0PhlQo?si=TtLsvNu7pvOAXsvd\" \n    style=\"width: 100%; height: 100%; border: 0;\"\n    allow=\"encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;\" \n    allowfullscreen>\n  </iframe>\n</div>",
            "topic": "Как солопренёр построил $15k MRR сервис на no-code",
            "vk_embed": "<div style=\"max-width: 1000px; margin: 0 auto 40px auto; aspect-ratio: 16 / 9; overflow:hidden; border-radius: 20px\">\n  <iframe\n    src=\"https://vkvideo.ru/video_ext.php?oid=-69230533&id=456239030&hd=2\" \n    style=\"width: 100%; height: 100%; border: 0;\"\n    allow=\"encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;\" \n    allowfullscreen>\n  </iframe>\n</div>",
            "title": "Directual Talks #1"
        }
    ],
    "totalPages": 1,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [
        [
            "id",
            99418062
        ],
        [
            "title",
            99418062
        ],
        [
            "name",
            99418062
        ],
        [
            "topic",
            99418062
        ],
        [
            "vk_embed",
            99418062
        ],
        [
            "youtube_embed",
            99418062
        ],
        [
            "date",
            99418062
        ],
        [
            "photo",
            99418062
        ],
        [
            "description",
            99418062
        ]
    ],
    "writeFields": [],
    "structures": {
        "99418062": {
            "networkID": 34225,
            "sysName": "guests",
            "name": "guests",
            "id": 99418062,
            "dateCreated": "2025-09-19T07:48:12Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"name\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"14671758268117705\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"photo\",\"name\":\"\",\"dataType\":\"file\",\"id\":\"24471758268125747\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"date\",\"name\":\"\",\"dataType\":\"date\",\"id\":\"37071758273206005\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD MMMM, Y\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"vk_embed\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"37231758273348792\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"html\",\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"youtube_embed\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"48411758273335313\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"html\",\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"title\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"93861758273394929\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"description\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"99251758268121593\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"topic\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"99961758273371019\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"title\"},{\"sysName\":\"name\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2025-09-19T09:16:49Z",
            "createBy": 1,
            "changedBy": 1,
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false
            },
            "folderId": null
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
    "comment": "",
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

export const WithDataActions = {
  args: {
    data: {
      "sl": "All_products",
      "pageSize": "30", 
      "headerField": null,
      "params": {
        "comp_ID": "DataActions",
        "cards_layout": "grid",
        "card_layout_type": "regular",
        "card_type_dir": {
          "image_height": 200,
          "body": `
            <div style="padding: 12px;">
              <h3>{{name}}</h3>
              <p>{{description}}</p>
              
              <!-- Кнопка для вызова экшона -->
              <button data-action-type="action" 
                      data-action-data="like_action"
                      style="background: #007bff; color: white; border: none; padding: 8px 16px; border-radius: 4px; margin: 4px;">
                👍 Лайк
              </button>
              
              <!-- Ссылка для перехода на страницу -->
              <a data-action-type="route" 
                 data-action-data="/profile/{{id}}"
                 style="display: inline-block; background: #28a745; color: white; text-decoration: none; padding: 8px 16px; border-radius: 4px; margin: 4px;">
                👤 Профиль
              </a>
              
              <!-- Кнопка для открытия модального окна -->
              <span data-action-type="modal" 
                    data-action-data="/edit/{{id}}"
                    style="display: inline-block; background: #ffc107; color: black; padding: 8px 16px; border-radius: 4px; margin: 4px; cursor: pointer;">
                ✏️ Редактировать
              </span>
            </div>
          `,
          "image": "{{photo}}",
          "image_border_radius": 8,
          "image_padding": 0,
          "paraTemplateEngine": "front"
        },
        "card_min_height": 50,
        "grid_layout__wideDesktop": 3,
        "grid_layout__desktop": 2,
        "card_padding": 12,
        "card_border": 1,
        "general": {
          "allowPagination": false
        },
        "actions": [
          {
            "id": "like_action",
            "name": "like_action", 
            "actionType": "endpoint",
            "endpoint": "/api/like",
            "mapping": [
              {"field": "objectId", "value": "{{id}}"},
              {"field": "action", "value": "like"}
            ]
          },
          {
            "id": "share_action",
            "name": "share_action",
            "actionType": "endpoint", 
            "endpoint": "/api/share",
            "mapping": [
              {"field": "objectId", "value": "{{id}}"},
              {"field": "action", "value": "share"}
            ]
          }
        ]
      },
      "data": [
        {
          "id": "1",
          "name": "Карточка с data-action",
          "description": "Эта карточка демонстрирует работу с data-action элементами",
          "photo": "https://via.placeholder.com/300x200/4CAF50/white?text=Card+1"
        },
        {
          "id": "2", 
          "name": "Вторая карточка",
          "description": "Еще один пример интерактивной карточки",
          "photo": "https://via.placeholder.com/300x200/2196F3/white?text=Card+2"
        },
        {
          "id": "3",
          "name": "Третья карточка", 
          "description": "И еще одна карточка для демонстрации",
          "photo": "https://via.placeholder.com/300x200/FF9800/white?text=Card+3"
        }
      ]
    },
    callEndpoint: (endpoint, method, body, params, callback) => {
      console.log('Mock callEndpoint:', { endpoint, method, body, params });
      setTimeout(() => callback('ok', 'Success'), 500);
    },
    handleRoute: (path) => (e) => {
      console.log('Mock handleRoute:', path);
      alert(`Переход на: ${path}`);
    },
    handleModalRoute: (path) => (e) => {
      console.log('Mock handleModalRoute:', path);
      alert(`Открыть модальное окно: ${path}`);
    },
    auth: { user: "123", name: "Test User" },
    debug: true
  },
};
