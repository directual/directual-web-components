import 'mapbox-gl/dist/mapbox-gl.css'
import FpsTable from '../components/fps/viewobjects/table/FpsTable'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

export default {
  title: 'FPS/Components/Table',
  component: FpsTable,
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
    "sl": "personellReqPositions",
    "pageSize": "40",
    "headerField": null,
    "params": {
        "cardListLayout": "grid",
        "cardHeaderComment": "",
        "deleteField": "",
        "cardBodyText": "",
        "cardImage": false,
        "cardImageField": "",
        "cardImageType": "none",
        "cardImageSize": 100,
        "objectView": {},
        "data": {
            "readFields": [
                {
                    "fieldSysName": "id",
                    "fetch": [],
                    "sysName": "id",
                    "name": "id",
                    "dataType": "id",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "is_manual",
                    "fetch": [],
                    "sysName": "is_manual",
                    "name": "Добавлено вручную (не экспорт)",
                    "dataType": "boolean",
                    "format": "",
                    "formatOptions": {
                        "customOptionLabel": "My option",
                        "keyValue": {
                            "key": "key",
                            "value": "value",
                            "button": "One more"
                        },
                        "dateLocale": "en-gb",
                        "booleanOptions": [
                            "Из файла",
                            "Вручную"
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
                    "link": ""
                },
                {
                    "fieldSysName": "number_required",
                    "fetch": [],
                    "sysName": "number_required",
                    "name": "Необходимое кол-во сотрудников",
                    "dataType": "number",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "min_performance",
                    "fetch": [],
                    "sysName": "min_performance",
                    "name": "Необходимая минимальная производительность сотрудников",
                    "dataType": "number",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "date",
                    "fetch": [],
                    "sysName": "date",
                    "name": "Дата",
                    "dataType": "date",
                    "format": "",
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
                        "dateFormat": "DD.MM.Y",
                        "timeFormat": "",
                        "isUTC": "false"
                    },
                    "link": ""
                },
                {
                    "fieldSysName": "skill_id",
                    "fetch": [
                        {
                            "fieldSysName": "id",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "title",
                            "condition": null,
                            "fetch": []
                        }
                    ],
                    "sysName": "skill_id",
                    "name": "Необходимый навык",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "link": "skills"
                },
                {
                    "fieldSysName": "place_id",
                    "fetch": [
                        {
                            "fieldSysName": "id",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "title",
                            "condition": null,
                            "fetch": []
                        }
                    ],
                    "sysName": "place_id",
                    "name": "Объект",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "link": "places"
                }
            ],
            "writeFields": [
                {
                    "fieldSysName": "id",
                    "fetch": [],
                    "sysName": "id",
                    "name": "id",
                    "dataType": "id",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "number_required",
                    "fetch": [],
                    "sysName": "number_required",
                    "name": "Необходимое кол-во сотрудников",
                    "dataType": "number",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "min_performance",
                    "fetch": [],
                    "sysName": "min_performance",
                    "name": "Необходимая минимальная производительность сотрудников",
                    "dataType": "number",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                }
            ],
            "fields": {
                "id": {
                    "id": "id",
                    "content": "id",
                    "type": "field",
                    "dataType": "id",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "is_manual": {
                    "id": "is_manual",
                    "content": "Добавлено вручную (не экспорт)",
                    "type": "field",
                    "dataType": "boolean",
                    "format": "",
                    "formatOptions": {
                        "customOptionLabel": "My option",
                        "keyValue": {
                            "key": "key",
                            "value": "value",
                            "button": "One more"
                        },
                        "dateLocale": "en-gb",
                        "booleanOptions": [
                            "Из файла",
                            "Вручную"
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
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "number_required": {
                    "id": "number_required",
                    "content": "Необходимое кол-во сотрудников",
                    "type": "field",
                    "dataType": "number",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "min_performance": {
                    "id": "min_performance",
                    "content": "Необходимая минимальная производительность сотрудников",
                    "type": "field",
                    "dataType": "number",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "date": {
                    "id": "date",
                    "content": "Дата",
                    "type": "field",
                    "dataType": "date",
                    "format": "",
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
                        "dateFormat": "DD.MM.Y",
                        "timeFormat": "",
                        "isUTC": "false"
                    },
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "skill_id": {
                    "id": "skill_id",
                    "content": "Необходимый навык",
                    "type": "field",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "skills",
                    "actions": []
                },
                "place_id": {
                    "id": "place_id",
                    "content": "Объект",
                    "type": "field",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "places",
                    "actions": []
                }
            },
            "fieldParams": {
                "id": {
                    "include": false,
                    "disableEditing": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "is_manual": {
                    "include": false,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "number_required": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "min_performance": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "date": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "skill_id": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "place_id": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                }
            },
            "columns": {
                "tab-1": {
                    "id": "tab-1",
                    "title": "New section",
                    "fieldIds": [
                        "id",
                        "place_id",
                        "date",
                        "skill_id",
                        "number_required",
                        "min_performance",
                        "is_manual"
                    ]
                }
            },
            "columnOrder": [
                "tab-1"
            ],
            "actions": []
        },
        "fields": {
            "id": {
                "include": false,
                "disableEditing": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "is_manual": {
                "include": false,
                "disableEditing": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "number_required": {
                "include": true,
                "disableEditing": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "min_performance": {
                "include": true,
                "disableEditing": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "date": {
                "include": true,
                "disableEditing": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "skill_id": {
                "include": true,
                "disableEditing": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "place_id": {
                "include": true,
                "disableEditing": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            }
        },
        "tableParams": {
            "readFields": [
                {
                    "fieldSysName": "id",
                    "fetch": [],
                    "sysName": "id",
                    "name": "id",
                    "dataType": "id",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "is_manual",
                    "fetch": [],
                    "sysName": "is_manual",
                    "name": "Добавлено вручную (не экспорт)",
                    "dataType": "boolean",
                    "format": "",
                    "formatOptions": {
                        "customOptionLabel": "My option",
                        "keyValue": {
                            "key": "key",
                            "value": "value",
                            "button": "One more"
                        },
                        "dateLocale": "en-gb",
                        "booleanOptions": [
                            "Из файла",
                            "Вручную"
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
                    "link": ""
                },
                {
                    "fieldSysName": "number_required",
                    "fetch": [],
                    "sysName": "number_required",
                    "name": "Необходимое кол-во сотрудников",
                    "dataType": "number",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "min_performance",
                    "fetch": [],
                    "sysName": "min_performance",
                    "name": "Необходимая минимальная производительность сотрудников",
                    "dataType": "number",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "date",
                    "fetch": [],
                    "sysName": "date",
                    "name": "Дата",
                    "dataType": "date",
                    "format": "",
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
                        "dateFormat": "DD.MM.Y",
                        "timeFormat": "",
                        "isUTC": "false"
                    },
                    "link": ""
                },
                {
                    "fieldSysName": "skill_id",
                    "fetch": [
                        {
                            "fieldSysName": "id",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "title",
                            "condition": null,
                            "fetch": []
                        }
                    ],
                    "sysName": "skill_id",
                    "name": "Необходимый навык",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "link": "skills"
                },
                {
                    "fieldSysName": "place_id",
                    "fetch": [
                        {
                            "fieldSysName": "id",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "title",
                            "condition": null,
                            "fetch": []
                        }
                    ],
                    "sysName": "place_id",
                    "name": "Объект",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "link": "places"
                }
            ],
            "writeFields": [
                {
                    "fieldSysName": "id",
                    "fetch": [],
                    "sysName": "id",
                    "name": "id",
                    "dataType": "id",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "number_required",
                    "fetch": [],
                    "sysName": "number_required",
                    "name": "Необходимое кол-во сотрудников",
                    "dataType": "number",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "min_performance",
                    "fetch": [],
                    "sysName": "min_performance",
                    "name": "Необходимая минимальная производительность сотрудников",
                    "dataType": "number",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                }
            ],
            "fields": {
                "id": {
                    "id": "id",
                    "content": "id",
                    "dataType": "id",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": ""
                },
                "is_manual": {
                    "id": "is_manual",
                    "content": "Добавлено вручную (не экспорт)",
                    "dataType": "boolean",
                    "format": "",
                    "formatOptions": {
                        "customOptionLabel": "My option",
                        "keyValue": {
                            "key": "key",
                            "value": "value",
                            "button": "One more"
                        },
                        "dateLocale": "en-gb",
                        "booleanOptions": [
                            "Из файла",
                            "Вручную"
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
                    "read": true,
                    "link": ""
                },
                "number_required": {
                    "id": "number_required",
                    "content": "Необходимое кол-во сотрудников",
                    "dataType": "number",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": ""
                },
                "min_performance": {
                    "id": "min_performance",
                    "content": "Необходимая минимальная производительность сотрудников",
                    "dataType": "number",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": ""
                },
                "date": {
                    "id": "date",
                    "content": "Дата",
                    "dataType": "date",
                    "format": "",
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
                        "dateFormat": "DD.MM.Y",
                        "timeFormat": "",
                        "isUTC": "false"
                    },
                    "read": true,
                    "link": ""
                },
                "skill_id": {
                    "id": "skill_id",
                    "content": "Необходимый навык",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "skills"
                },
                "place_id": {
                    "id": "place_id",
                    "content": "Объект",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "places"
                }
            },
            "fieldParams": {
                "id": {
                    "include": false,
                    "fileImageFormat": "square",
                    "fileImageSize": 80,
                    "colorCode": false,
                    "colorFormat": "square",
                    "colorSize": 40
                },
                "is_manual": {
                    "include": false,
                    "fileImageFormat": "square",
                    "fileImageSize": 80,
                    "colorCode": false,
                    "colorFormat": "square",
                    "colorSize": 40
                },
                "number_required": {
                    "include": true,
                    "fileImageFormat": "square",
                    "fileImageSize": 80,
                    "colorCode": false,
                    "colorFormat": "square",
                    "colorSize": 40
                },
                "min_performance": {
                    "include": true,
                    "fileImageFormat": "square",
                    "fileImageSize": 80,
                    "colorCode": false,
                    "colorFormat": "square",
                    "colorSize": 40
                },
                "date": {
                    "include": true,
                    "fileImageFormat": "square",
                    "fileImageSize": 80,
                    "colorCode": false,
                    "colorFormat": "square",
                    "colorSize": 40
                },
                "skill_id": {
                    "include": true,
                    "fileImageFormat": "square",
                    "fileImageSize": 80,
                    "colorCode": false,
                    "colorFormat": "square",
                    "colorSize": 40
                },
                "place_id": {
                    "include": true,
                    "fileImageFormat": "square",
                    "fileImageSize": 80,
                    "colorCode": false,
                    "colorFormat": "square",
                    "colorSize": 40
                }
            },
            "fieldOrder": [
                "id",
                "place_id",
                "date",
                "skill_id",
                "is_manual",
                "number_required",
                "min_performance"
            ]
        },
        "tableCellPadding": 6,
        "filterParams": {
            "isSorting": true,
            "isFiltering": true,
            "filterFields": {
                "date": {
                    "active": true,
                    "dataType": "date",
                    "format": "",
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
                        "dateFormat": "DD.MM.Y",
                        "timeFormat": "",
                        "isUTC": "false"
                    },
                    "name": "Дата"
                },
                "skill_id": {
                    "active": true,
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "name": "Необходимый навык",
                    "textsearch": "choice",
                    "linkDirectory": [
                        {
                            "id": "PICKING_TOTAL",
                            "text": "Сборка"
                        },
                        {
                            "id": "PUTAWAY_TOTAL",
                            "text": "Размещение на складе"
                        },
                        {
                            "id": "RETURNS_TOTAL",
                            "text": "Возвраты"
                        }
                    ]
                },
                "place_id": {
                    "active": true,
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "name": "Объект",
                    "textsearch": "choice",
                    "linkDirectory": [
                        {
                            "id": "Объект 1",
                            "text": "Объект 1"
                        },
                        {
                            "id": "Объект 2",
                            "text": "Объект 2"
                        },
                        {
                            "id": "Объект 3",
                            "text": "Объект 3"
                        }
                    ]
                }
            }
        }
    },
    "tableTitle": "Позиции в заявке",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "is_manual",
            "dataType": "boolean",
            "name": "Добавлено вручную (не экспорт)",
            "id": "41031731927536969",
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
                "dateLocale": "en-gb",
                "booleanOptions": [
                    "Из файла",
                    "Вручную"
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "number_required",
            "dataType": "number",
            "name": "Необходимое кол-во сотрудников",
            "id": "52631731927336152",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "min_performance",
            "dataType": "number",
            "name": "Необходимая минимальная производительность сотрудников",
            "id": "96111731927152986",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "date",
            "dataType": "date",
            "name": "Дата",
            "id": "38521731927118737",
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
                "dateFormat": "DD.MM.Y",
                "timeFormat": "",
                "isUTC": "false"
            },
            "groupName": null,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "skill_id",
            "dataType": "link",
            "name": "Необходимый навык",
            "id": "24981731926898180",
            "link": "skills",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "place_id",
            "dataType": "link",
            "name": "Объект",
            "id": "22451731926881080",
            "link": "places",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        }
    ],
    "data": [
        {
            "number_required": 5,
            "skill_id": {
                "id": "PICKING_TOTAL",
                "title": "Сборка"
            },
            "id": "bf2bba6a-7ad7-4ef3-bc0e-f31ac283683d",
            "date": 1728950400000,
            "is_manual": false,
            "min_performance": 100,
            "place_id": {
                "id": "Объект 1",
                "title": "Объект 1"
            }
        },
        {
            "number_required": 5,
            "skill_id": {
                "id": "PUTAWAY_TOTAL",
                "title": "Размещение на складе"
            },
            "id": "2da71d08-c730-41da-ac5d-507cff157cef",
            "date": 1728950400000,
            "is_manual": false,
            "min_performance": 100,
            "place_id": {
                "id": "Объект 1",
                "title": "Объект 1"
            }
        },
        {
            "number_required": 5,
            "skill_id": {
                "id": "RETURNS_TOTAL",
                "title": "Возвраты"
            },
            "id": "fda14fae-e238-4f12-8bca-d33398e94f12",
            "date": 1728950400000,
            "is_manual": false,
            "min_performance": 100,
            "place_id": {
                "id": "Объект 1",
                "title": "Объект 1"
            }
        },
        {
            "number_required": 7,
            "skill_id": {
                "id": "PICKING_TOTAL",
                "title": "Сборка"
            },
            "id": "dd6008e3-54ef-4b26-87d7-d77090287eca",
            "date": 1729036800000,
            "is_manual": false,
            "min_performance": 100,
            "place_id": {
                "id": "Объект 1",
                "title": "Объект 1"
            }
        },
        {
            "number_required": 5,
            "skill_id": {
                "id": "PUTAWAY_TOTAL",
                "title": "Размещение на складе"
            },
            "id": "cdd2c6a9-0106-475a-8eae-2bf2ee3f6580",
            "date": 1729036800000,
            "is_manual": false,
            "min_performance": 100,
            "place_id": {
                "id": "Объект 1",
                "title": "Объект 1"
            }
        },
        {
            "number_required": 9,
            "skill_id": {
                "id": "RETURNS_TOTAL",
                "title": "Возвраты"
            },
            "id": "e5d68c44-6211-457e-bbc2-421c4890c3e9",
            "date": 1729036800000,
            "is_manual": false,
            "min_performance": 100,
            "place_id": {
                "id": "Объект 1",
                "title": "Объект 1"
            }
        },
        {
            "number_required": 6,
            "skill_id": {
                "id": "PICKING_TOTAL",
                "title": "Сборка"
            },
            "id": "3db23596-a19b-41bf-9511-5aaa2d67b994",
            "date": 1729123200000,
            "is_manual": false,
            "min_performance": 100,
            "place_id": {
                "id": "Объект 1",
                "title": "Объект 1"
            }
        },
        {
            "number_required": 3,
            "skill_id": {
                "id": "PUTAWAY_TOTAL",
                "title": "Размещение на складе"
            },
            "id": "aaaa13c5-3a00-46a6-9b95-4bd750b3da84",
            "date": 1729123200000,
            "is_manual": false,
            "min_performance": 100,
            "place_id": {
                "id": "Объект 1",
                "title": "Объект 1"
            }
        },
        {
            "number_required": 5,
            "skill_id": {
                "id": "RETURNS_TOTAL",
                "title": "Возвраты"
            },
            "id": "d038e362-2690-4972-8475-ae3270322560",
            "date": 1729123200000,
            "is_manual": false,
            "min_performance": 100,
            "place_id": {
                "id": "Объект 1",
                "title": "Объект 1"
            }
        },
        {
            "number_required": 3,
            "skill_id": {
                "id": "PICKING_TOTAL",
                "title": "Сборка"
            },
            "id": "7ef0e67e-28c0-4369-976c-6046d83160f7",
            "date": 1728950400000,
            "is_manual": false,
            "min_performance": 60,
            "place_id": {
                "id": "Объект 2",
                "title": "Объект 2"
            }
        },
        {
            "number_required": 3,
            "skill_id": {
                "id": "PUTAWAY_TOTAL",
                "title": "Размещение на складе"
            },
            "id": "6c0f26ef-7378-4b6c-ae0c-408186681941",
            "date": 1728950400000,
            "is_manual": false,
            "min_performance": 60,
            "place_id": {
                "id": "Объект 2",
                "title": "Объект 2"
            }
        },
        {
            "number_required": 3,
            "skill_id": {
                "id": "RETURNS_TOTAL",
                "title": "Возвраты"
            },
            "id": "50eaebbc-730a-4836-a0b1-ae937c0ceb3a",
            "date": 1728950400000,
            "is_manual": false,
            "min_performance": 60,
            "place_id": {
                "id": "Объект 2",
                "title": "Объект 2"
            }
        },
        {
            "number_required": 2,
            "skill_id": {
                "id": "PICKING_TOTAL",
                "title": "Сборка"
            },
            "id": "0f5f7a55-f563-49da-91cc-fd4385b1d72d",
            "date": 1729036800000,
            "is_manual": false,
            "min_performance": 60,
            "place_id": {
                "id": "Объект 2",
                "title": "Объект 2"
            }
        },
        {
            "number_required": "",
            "skill_id": {
                "id": "PUTAWAY_TOTAL",
                "title": "Размещение на складе"
            },
            "id": "d8a8170b-7df9-472e-87e4-6d261f585b09",
            "date": 1729036800000,
            "is_manual": false,
            "min_performance": 60,
            "place_id": {
                "id": "Объект 2",
                "title": "Объект 2"
            }
        },
        {
            "number_required": 3,
            "skill_id": {
                "id": "RETURNS_TOTAL",
                "title": "Возвраты"
            },
            "id": "73aa4aa6-7833-4645-b4f0-e7c41be47c88",
            "date": 1729036800000,
            "is_manual": false,
            "min_performance": 60,
            "place_id": {
                "id": "Объект 2",
                "title": "Объект 2"
            }
        },
        {
            "number_required": 3,
            "skill_id": {
                "id": "PICKING_TOTAL",
                "title": "Сборка"
            },
            "id": "b0f63bac-63af-4ab4-82a8-72336a1ae3ad",
            "date": 1729123200000,
            "is_manual": false,
            "min_performance": 60,
            "place_id": {
                "id": "Объект 2",
                "title": "Объект 2"
            }
        },
        {
            "number_required": 1,
            "skill_id": {
                "id": "PUTAWAY_TOTAL",
                "title": "Размещение на складе"
            },
            "id": "e48bc79c-1d79-4934-a8d3-f46963aabbbf",
            "date": 1729123200000,
            "is_manual": false,
            "min_performance": 60,
            "place_id": {
                "id": "Объект 2",
                "title": "Объект 2"
            }
        },
        {
            "number_required": "",
            "skill_id": {
                "id": "RETURNS_TOTAL",
                "title": "Возвраты"
            },
            "id": "152d9099-dc62-4590-975d-73cf09dc64d3",
            "date": 1729123200000,
            "is_manual": false,
            "min_performance": 60,
            "place_id": {
                "id": "Объект 2",
                "title": "Объект 2"
            }
        },
        {
            "number_required": 5,
            "skill_id": {
                "id": "PUTAWAY_TOTAL",
                "title": "Размещение на складе"
            },
            "id": "1ba5ded8-b2ba-4815-872e-e1045a78dcbe",
            "date": 1731542400000,
            "is_manual": true,
            "min_performance": 120,
            "place_id": {
                "id": "Объект 2",
                "title": "Объект 2"
            }
        },
        {
            "number_required": 5,
            "skill_id": {
                "id": "PUTAWAY_TOTAL",
                "title": "Размещение на складе"
            },
            "id": "ff5f796c-0bfc-483e-b1a7-5b527a2f3e18",
            "date": 1732060800000,
            "is_manual": true,
            "min_performance": 100,
            "place_id": {
                "id": "Объект 3",
                "title": "Объект 3"
            }
        },
        {
            "number_required": 100,
            "skill_id": {
                "id": "RETURNS_TOTAL",
                "title": "Возвраты"
            },
            "id": "a7128713-49d0-4d89-86bd-6fb221d7ac9a",
            "date": 1732147200000,
            "is_manual": true,
            "min_performance": 10,
            "place_id": {
                "id": "Объект 3",
                "title": "Объект 3"
            }
        }
    ],
    "totalPages": 1,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [
        [
            "id",
            99355974
        ],
        [
            "is_manual",
            99355974
        ],
        [
            "number_required",
            99355974
        ],
        [
            "min_performance",
            99355974
        ],
        [
            "date",
            99355974
        ],
        [
            "skill_id.id",
            99353796
        ],
        [
            "skill_id.title",
            99353796
        ],
        [
            "place_id.id",
            99353795
        ],
        [
            "place_id.title",
            99353795
        ]
    ],
    "writeFields": [
        "id",
        "number_required",
        "min_performance"
    ],
    "structures": {
        "99353795": {
            "networkID": 22351,
            "sysName": "places",
            "name": "Объекты",
            "id": 99353795,
            "dateCreated": "2024-11-05T17:29:49Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"title\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"15291730827795166\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"title\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-11-19T08:41:39Z",
            "createBy": 1,
            "changedBy": 1,
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "array": false
            },
            "folderId": 33826092
        },
        "99353796": {
            "networkID": 22351,
            "sysName": "skills",
            "name": "Навыки ",
            "id": 99353796,
            "dateCreated": "2024-11-05T17:31:01Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"code\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"78051732027311609\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"title\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"86541730827864647\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"title\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-11-19T14:41:54Z",
            "createBy": 1,
            "changedBy": 1,
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "array": false
            },
            "folderId": 33826092
        },
        "99355974": {
            "networkID": 22351,
            "sysName": "personell_requests_positions",
            "name": "Позиции заявки на персонал",
            "id": 99355974,
            "dateCreated": "2024-11-18T10:46:51Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"place_id\",\"dataType\":\"link\",\"name\":\"Объект\",\"id\":\"22451731926881080\",\"link\":\"places\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"skill_id\",\"dataType\":\"link\",\"name\":\"Необходимый навык\",\"id\":\"24981731926898180\",\"link\":\"skills\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"personell_request_id\",\"dataType\":\"link\",\"name\":\"Заявка на персонал\",\"id\":\"33471731926908753\",\"link\":\"personell_requests\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"isDeleted\",\"dataType\":\"boolean\",\"name\":\"\",\"id\":\"37881732022173870\",\"link\":\"\",\"group\":\"1732022163927\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"date\",\"dataType\":\"date\",\"name\":\"Дата\",\"id\":\"38521731927118737\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.Y\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"is_manual\",\"dataType\":\"boolean\",\"name\":\"Добавлено вручную (не экспорт)\",\"id\":\"41031731927536969\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Из файла\",\"Вручную\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"number_required\",\"dataType\":\"number\",\"name\":\"Необходимое кол-во сотрудников\",\"id\":\"52631731927336152\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"min_performance\",\"dataType\":\"number\",\"name\":\"Необходимая минимальная производительность сотрудников\",\"id\":\"96111731927152986\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false}]",
            "jsonGroupSettings": "[{\"name\":\"DELETED\",\"id\":1732022163927,\"order\":0}]",
            "jsonViewIdSettings": "[{\"sysName\":\"date\"},{\"sysName\":\"place_id\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-11-19T13:16:19Z",
            "createBy": 1,
            "changedBy": 1,
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "array": false
            },
            "folderId": 33827808
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "number_required",
            "dataType": "number",
            "name": "Необходимое кол-во сотрудников",
            "id": "52631731927336152",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "min_performance",
            "dataType": "number",
            "name": "Необходимая минимальная производительность сотрудников",
            "id": "96111731927152986",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        }
    ],
    "quickSearch": "false",
    "httpParams": {},
    "cardCustomHtml": null,
    "cardCustomLayout": null,
    "comment": null,
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
    locale: 'ESP',
    onChange: value => console.log(value),
    handleRoute: value => e => console.log("route => " + value),
  },
};
