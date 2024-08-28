import FpsCards from '../components/fps/viewobjects/cards/FpsCards'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

export default {
  title: 'FPS/Components/Cards',
  component: FpsCards,
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
    "sl": "tasks",
    "pageSize": "20",
    "headerField": null,
    "params": {
        "cardListLayout": "looseGrid",
        "cardHeaderComment": "Subject",
        "deleteField": "",
        "cardBodyText": "Deadline",
        "cardImage": true,
        "cardImageField": "Picture",
        "cardImageType": "left",
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
                    "fieldSysName": "Attachments",
                    "fetch": [],
                    "sysName": "Attachments",
                    "name": "Прикреплённые файлы",
                    "dataType": "file",
                    "format": "multipleFiles",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "Colour",
                    "fetch": [],
                    "sysName": "Colour",
                    "name": "Цвет",
                    "dataType": "string",
                    "format": "color",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "Picture",
                    "fetch": [],
                    "sysName": "Picture",
                    "name": "Картинка",
                    "dataType": "file",
                    "format": "image",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "Description",
                    "fetch": [],
                    "sysName": "Description",
                    "name": "Описание задания",
                    "dataType": "string",
                    "format": "markdown",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "Category",
                    "fetch": [],
                    "sysName": "Category",
                    "name": "Категория задачи",
                    "dataType": "json",
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
                                "value": "ToDo",
                                "label": "ToDo"
                            },
                            {
                                "value": "Homework",
                                "label": "Homework"
                            }
                        ]
                    },
                    "link": ""
                },
                {
                    "fieldSysName": "Type",
                    "fetch": [],
                    "sysName": "Type",
                    "name": "Тип задачи",
                    "dataType": "json",
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
                                "value": "Summative",
                                "label": "Summative"
                            },
                            {
                                "value": "Formative",
                                "label": "Formative"
                            }
                        ]
                    },
                    "link": ""
                },
                {
                    "fieldSysName": "Title",
                    "fetch": [],
                    "sysName": "Title",
                    "name": "Название задачи",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "Deadline",
                    "fetch": [],
                    "sysName": "Deadline",
                    "name": "Крайний срок выполнения",
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
                        "dateFormat": "DD/MM/Y",
                        "timeFormat": " HH:mm",
                        "isUTC": "false"
                    },
                    "link": ""
                },
                {
                    "fieldSysName": "Subject",
                    "fetch": [],
                    "sysName": "Subject",
                    "name": "Предмет",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "link": "subject"
                },
                {
                    "fieldSysName": "ATLskills_ids",
                    "fetch": [
                        {
                            "fieldSysName": "id",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "ATLskills",
                            "condition": null,
                            "fetch": []
                        }
                    ],
                    "sysName": "ATLskills_ids",
                    "name": "Навыки ATL",
                    "dataType": "arrayLink",
                    "format": "",
                    "formatOptions": {},
                    "link": "atl_skills"
                },
                {
                    "fieldSysName": "Taskauthor",
                    "fetch": [
                        {
                            "fieldSysName": "id",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "firstName",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "lastName",
                            "condition": null,
                            "fetch": []
                        }
                    ],
                    "sysName": "Taskauthor",
                    "name": "Автор задачи",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "link": "WebUser"
                },
                {
                    "fieldSysName": "Unit",
                    "fetch": [
                        {
                            "fieldSysName": "id",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "Title",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "Subject",
                            "condition": null,
                            "fetch": [
                                {
                                    "fieldSysName": "id",
                                    "condition": null,
                                    "fetch": []
                                },
                                {
                                    "fieldSysName": "Subject",
                                    "condition": null,
                                    "fetch": []
                                }
                            ]
                        },
                        {
                            "fieldSysName": "InquiryQuestions",
                            "condition": null,
                            "fetch": [
                                {
                                    "fieldSysName": "id",
                                    "condition": null,
                                    "fetch": []
                                },
                                {
                                    "fieldSysName": "InquiryQuestion",
                                    "condition": null,
                                    "fetch": []
                                }
                            ]
                        },
                        {
                            "fieldSysName": "RelatedConcepts",
                            "condition": null,
                            "fetch": [
                                {
                                    "fieldSysName": "id",
                                    "condition": null,
                                    "fetch": []
                                }
                            ]
                        },
                        {
                            "fieldSysName": "KeyConcept_id",
                            "condition": null,
                            "fetch": [
                                {
                                    "fieldSysName": "id",
                                    "condition": null,
                                    "fetch": []
                                }
                            ]
                        },
                        {
                            "fieldSysName": "Attachments",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "Cover",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "Creator",
                            "condition": null,
                            "fetch": [
                                {
                                    "fieldSysName": "id",
                                    "condition": null,
                                    "fetch": []
                                },
                                {
                                    "fieldSysName": "firstName",
                                    "condition": null,
                                    "fetch": []
                                },
                                {
                                    "fieldSysName": "lastName",
                                    "condition": null,
                                    "fetch": []
                                }
                            ]
                        },
                        {
                            "fieldSysName": "StatementofInquiry",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "Dateend",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "Datestart",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "Unittemplate",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "Description",
                            "condition": null,
                            "fetch": []
                        }
                    ],
                    "sysName": "Unit",
                    "format": "",
                    "formatOptions": {}
                },
                {
                    "fieldSysName": "Criteria",
                    "fetch": [
                        {
                            "fieldSysName": "id",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "Criteria",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "id",
                            "condition": null,
                            "fetch": []
                        }
                    ],
                    "sysName": "Criteria",
                    "format": "",
                    "formatOptions": {}
                }
            ],
            "writeFields": [],
            "fields": {
                "id": {
                    "id": "id",
                    "content": "id",
                    "type": "field",
                    "dataType": "id",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "Attachments": {
                    "id": "Attachments",
                    "content": "Прикреплённые файлы",
                    "type": "field",
                    "dataType": "file",
                    "format": "multipleFiles",
                    "formatOptions": {},
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "Colour": {
                    "id": "Colour",
                    "content": "Цвет",
                    "type": "field",
                    "dataType": "string",
                    "format": "color",
                    "formatOptions": {},
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "Picture": {
                    "id": "Picture",
                    "content": "Картинка",
                    "type": "field",
                    "dataType": "file",
                    "format": "image",
                    "formatOptions": {},
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "Description": {
                    "id": "Description",
                    "content": "Описание задания",
                    "type": "field",
                    "dataType": "string",
                    "format": "markdown",
                    "formatOptions": {},
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "Category": {
                    "id": "Category",
                    "content": "Категория задачи",
                    "type": "field",
                    "dataType": "json",
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
                                "value": "ToDo",
                                "label": "ToDo"
                            },
                            {
                                "value": "Homework",
                                "label": "Homework"
                            }
                        ]
                    },
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "Type": {
                    "id": "Type",
                    "content": "Тип задачи",
                    "type": "field",
                    "dataType": "json",
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
                                "value": "Summative",
                                "label": "Summative"
                            },
                            {
                                "value": "Formative",
                                "label": "Formative"
                            }
                        ]
                    },
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "Title": {
                    "id": "Title",
                    "content": "Название задачи",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "Deadline": {
                    "id": "Deadline",
                    "content": "Крайний срок выполнения",
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
                        "dateFormat": "DD/MM/Y",
                        "timeFormat": " HH:mm",
                        "isUTC": "false"
                    },
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "Subject": {
                    "id": "Subject",
                    "content": "Предмет",
                    "type": "field",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "subject",
                    "actions": []
                },
                "ATLskills_ids": {
                    "id": "ATLskills_ids",
                    "content": "Навыки ATL",
                    "type": "field",
                    "dataType": "arrayLink",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "atl_skills",
                    "actions": []
                },
                "Taskauthor": {
                    "id": "Taskauthor",
                    "content": "Автор задачи",
                    "type": "field",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "WebUser",
                    "actions": []
                },
                "Unit": {
                    "id": "Unit",
                    "type": "field",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "actions": []
                },
                "Criteria": {
                    "id": "Criteria",
                    "type": "field",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "actions": []
                },
                "action__11001713789049568": {
                    "content": "Закрыть задачу",
                    "id": "action__11001713789049568",
                    "type": "action",
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
                "Attachments": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "Colour": {
                    "include": false,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "Picture": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "Description": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "Category": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "Type": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "Title": {
                    "include": false,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "from": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "message_text": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "system": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "user_id": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "Deadline": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "Subject": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "ATLskills_ids": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "Taskauthor": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "Unit": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": true,
                    "configureLinkedCard": {
                        "fields": {
                            "id": {
                                "id": "id",
                                "content": "id",
                                "type": "field",
                                "read": true,
                                "dataType": "id",
                                "format": null,
                                "formatOptions": {}
                            },
                            "Title": {
                                "id": "Title",
                                "content": "Название юнита",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": {}
                            },
                            "Subject": {
                                "id": "Subject",
                                "content": "Предмет",
                                "type": "field",
                                "read": true,
                                "dataType": "arrayLink",
                                "format": null,
                                "formatOptions": {}
                            },
                            "InquiryQuestions": {
                                "id": "InquiryQuestions",
                                "content": "Inquiry Questions",
                                "type": "field",
                                "read": true,
                                "dataType": "arrayLink",
                                "format": null,
                                "formatOptions": {}
                            },
                            "RelatedConcepts": {
                                "id": "RelatedConcepts",
                                "content": "Related Concept(s)",
                                "type": "field",
                                "read": true,
                                "dataType": "arrayLink",
                                "format": null,
                                "formatOptions": {}
                            },
                            "KeyConcept_id": {
                                "id": "KeyConcept_id",
                                "content": "Key Concept",
                                "type": "field",
                                "read": true,
                                "dataType": "link",
                                "format": null,
                                "formatOptions": {}
                            },
                            "Attachments": {
                                "id": "Attachments",
                                "content": "Вложения",
                                "type": "field",
                                "read": true,
                                "dataType": "file",
                                "format": "multipleFiles",
                                "formatOptions": {}
                            },
                            "Cover": {
                                "id": "Cover",
                                "content": "Обложка",
                                "type": "field",
                                "read": true,
                                "dataType": "file",
                                "format": "image",
                                "formatOptions": {}
                            },
                            "Creator": {
                                "id": "Creator",
                                "content": "Создатель юнита",
                                "type": "field",
                                "read": true,
                                "dataType": "link",
                                "format": null,
                                "formatOptions": {}
                            },
                            "StatementofInquiry": {
                                "id": "StatementofInquiry",
                                "content": "Statement of Inquiry",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": "markdown",
                                "formatOptions": {}
                            },
                            "Dateend": {
                                "id": "Dateend",
                                "content": "Завершение юнита",
                                "type": "field",
                                "read": true,
                                "dataType": "date",
                                "format": null,
                                "formatOptions": {}
                            },
                            "Datestart": {
                                "id": "Datestart",
                                "content": "Начало юнита",
                                "type": "field",
                                "read": true,
                                "dataType": "date",
                                "format": null,
                                "formatOptions": {}
                            },
                            "Unittemplate": {
                                "id": "Unittemplate",
                                "content": "Unit Template",
                                "type": "field",
                                "read": true,
                                "dataType": "json",
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
                                            "value": "Standart",
                                            "label": "Standart"
                                        },
                                        {
                                            "value": "Interdisciplinary",
                                            "label": "Interdisciplinary"
                                        }
                                    ]
                                }
                            },
                            "Description": {
                                "id": "Description",
                                "content": "",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": "markdown",
                                "formatOptions": {}
                            }
                        },
                        "fieldParams": {
                            "id": {
                                "include": false,
                                "disableEditing": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "Title": {
                                "include": false,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "Subject": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "InquiryQuestions": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "RelatedConcepts": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "KeyConcept_id": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "Attachments": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "Cover": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200,
                                "descriptionFlag": false
                            },
                            "Creator": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "StatementofInquiry": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "Dateend": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "Datestart": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "Unittemplate": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "Description": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            }
                        },
                        "fieldOrder": [
                            "id",
                            "Title",
                            "Description",
                            "Cover",
                            "Subject",
                            "KeyConcept_id",
                            "RelatedConcepts",
                            "InquiryQuestions",
                            "StatementofInquiry",
                            "Datestart",
                            "Dateend",
                            "Unittemplate",
                            "Attachments",
                            "Creator"
                        ]
                    }
                },
                "Criteria": {
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
                        "Colour",
                        "Picture",
                        "Description",
                        "Category",
                        "Type",
                        "Title",
                        "Deadline",
                        "Subject",
                        "ATLskills_ids",
                        "Attachments",
                        "Taskauthor",
                        "Unit",
                        "action__11001713789049568",
                        "Criteria"
                    ]
                }
            },
            "columnOrder": [
                "tab-1"
            ],
            "actions": [
                {
                    "sysName": "",
                    "id": "11001713789049568",
                    "name": "Закрыть задачу",
                    "displayAs": "button",
                    "footerButtons": false,
                    "dropdown": true,
                    "SLtype": "same",
                    "callFrom": "main",
                    "buttonIcon": "close",
                    "closePopup": false,
                    "showMessage": false
                }
            ]
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
            "Attachments": {
                "include": true,
                "disableEditing": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "Colour": {
                "include": false,
                "disableEditing": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "Picture": {
                "include": true,
                "disableEditing": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "Description": {
                "include": true,
                "disableEditing": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "Category": {
                "include": true,
                "disableEditing": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "Type": {
                "include": true,
                "disableEditing": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "Title": {
                "include": false,
                "disableEditing": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "from": {
                "include": true,
                "disableEditing": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "message_text": {
                "include": true,
                "disableEditing": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "system": {
                "include": true,
                "disableEditing": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "user_id": {
                "include": true,
                "disableEditing": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "Deadline": {
                "include": true,
                "disableEditing": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "Subject": {
                "include": true,
                "disableEditing": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "ATLskills_ids": {
                "include": true,
                "disableEditing": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "Taskauthor": {
                "include": true,
                "disableEditing": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "Unit": {
                "include": true,
                "disableEditing": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": true,
                "configureLinkedCard": {
                    "fields": {
                        "id": {
                            "id": "id",
                            "content": "id",
                            "type": "field",
                            "read": true,
                            "dataType": "id",
                            "format": null,
                            "formatOptions": {}
                        },
                        "Title": {
                            "id": "Title",
                            "content": "Название юнита",
                            "type": "field",
                            "read": true,
                            "dataType": "string",
                            "format": null,
                            "formatOptions": {}
                        },
                        "Subject": {
                            "id": "Subject",
                            "content": "Предмет",
                            "type": "field",
                            "read": true,
                            "dataType": "arrayLink",
                            "format": null,
                            "formatOptions": {}
                        },
                        "InquiryQuestions": {
                            "id": "InquiryQuestions",
                            "content": "Inquiry Questions",
                            "type": "field",
                            "read": true,
                            "dataType": "arrayLink",
                            "format": null,
                            "formatOptions": {}
                        },
                        "RelatedConcepts": {
                            "id": "RelatedConcepts",
                            "content": "Related Concept(s)",
                            "type": "field",
                            "read": true,
                            "dataType": "arrayLink",
                            "format": null,
                            "formatOptions": {}
                        },
                        "KeyConcept_id": {
                            "id": "KeyConcept_id",
                            "content": "Key Concept",
                            "type": "field",
                            "read": true,
                            "dataType": "link",
                            "format": null,
                            "formatOptions": {}
                        },
                        "Attachments": {
                            "id": "Attachments",
                            "content": "Вложения",
                            "type": "field",
                            "read": true,
                            "dataType": "file",
                            "format": "multipleFiles",
                            "formatOptions": {}
                        },
                        "Cover": {
                            "id": "Cover",
                            "content": "Обложка",
                            "type": "field",
                            "read": true,
                            "dataType": "file",
                            "format": "image",
                            "formatOptions": {}
                        },
                        "Creator": {
                            "id": "Creator",
                            "content": "Создатель юнита",
                            "type": "field",
                            "read": true,
                            "dataType": "link",
                            "format": null,
                            "formatOptions": {}
                        },
                        "StatementofInquiry": {
                            "id": "StatementofInquiry",
                            "content": "Statement of Inquiry",
                            "type": "field",
                            "read": true,
                            "dataType": "string",
                            "format": "markdown",
                            "formatOptions": {}
                        },
                        "Dateend": {
                            "id": "Dateend",
                            "content": "Завершение юнита",
                            "type": "field",
                            "read": true,
                            "dataType": "date",
                            "format": null,
                            "formatOptions": {}
                        },
                        "Datestart": {
                            "id": "Datestart",
                            "content": "Начало юнита",
                            "type": "field",
                            "read": true,
                            "dataType": "date",
                            "format": null,
                            "formatOptions": {}
                        },
                        "Unittemplate": {
                            "id": "Unittemplate",
                            "content": "Unit Template",
                            "type": "field",
                            "read": true,
                            "dataType": "json",
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
                                        "value": "Standart",
                                        "label": "Standart"
                                    },
                                    {
                                        "value": "Interdisciplinary",
                                        "label": "Interdisciplinary"
                                    }
                                ]
                            }
                        },
                        "Description": {
                            "id": "Description",
                            "content": "",
                            "type": "field",
                            "read": true,
                            "dataType": "string",
                            "format": "markdown",
                            "formatOptions": {}
                        }
                    },
                    "fieldParams": {
                        "id": {
                            "include": false,
                            "disableEditing": true,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "Title": {
                            "include": false,
                            "disableEditing": false,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "Subject": {
                            "include": true,
                            "disableEditing": false,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "InquiryQuestions": {
                            "include": true,
                            "disableEditing": false,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "RelatedConcepts": {
                            "include": true,
                            "disableEditing": false,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "KeyConcept_id": {
                            "include": true,
                            "disableEditing": false,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "Attachments": {
                            "include": true,
                            "disableEditing": false,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "Cover": {
                            "include": true,
                            "disableEditing": false,
                            "fileImageFormat": "square",
                            "fileImageSize": 200,
                            "descriptionFlag": false
                        },
                        "Creator": {
                            "include": true,
                            "disableEditing": false,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "StatementofInquiry": {
                            "include": true,
                            "disableEditing": false,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "Dateend": {
                            "include": true,
                            "disableEditing": false,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "Datestart": {
                            "include": true,
                            "disableEditing": false,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "Unittemplate": {
                            "include": true,
                            "disableEditing": false,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "Description": {
                            "include": true,
                            "disableEditing": false,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        }
                    },
                    "fieldOrder": [
                        "id",
                        "Title",
                        "Description",
                        "Cover",
                        "Subject",
                        "KeyConcept_id",
                        "RelatedConcepts",
                        "InquiryQuestions",
                        "StatementofInquiry",
                        "Datestart",
                        "Dateend",
                        "Unittemplate",
                        "Attachments",
                        "Creator"
                    ]
                }
            },
            "Criteria": {
                "include": true,
                "disableEditing": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            }
        },
        "cardColor": "Colour",
        "cardColorOption": "border",
        "showCounter": false,
        "counterField": null,
        "counterText": null,
        "cardHeaderStyle": "h3",
        "filterParams": {
            "isSorting": true,
            "isFiltering": true,
            "filterFields": {
                "Subject": {
                    "active": true,
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "name": "Предмет",
                    "textsearch": "choice",
                    "linkDirectory": [
                        {
                            "id": "History",
                            "text": "History"
                        },
                        {
                            "id": "Geography",
                            "text": "Geography"
                        },
                        {
                            "id": "Biology",
                            "text": "Biology"
                        },
                        {
                            "id": "English",
                            "text": "English"
                        },
                        {
                            "id": "Literature",
                            "text": "Literature"
                        }
                    ]
                }
            }
        },
        "actions": [
            {
                "sysName": "statusoftaskbystudent",
                "id": "11001713789049568",
                "name": "Закрыть задачу",
                "displayAs": "button",
                "footerButtons": false,
                "dropdown": true,
                "SLtype": "other",
                "callFrom": "main",
                "buttonIcon": "close",
                "closePopup": false,
                "showMessage": false,
                "fields": {
                    "readFields": [
                        {
                            "fieldSysName": "id",
                            "fetch": [],
                            "sysName": "id",
                            "format": "",
                            "formatOptions": {}
                        },
                        {
                            "fieldSysName": "status",
                            "fetch": [],
                            "sysName": "status",
                            "format": "",
                            "formatOptions": {}
                        },
                        {
                            "fieldSysName": "student",
                            "fetch": [
                                {
                                    "fieldSysName": "id",
                                    "condition": null,
                                    "fetch": []
                                },
                                {
                                    "fieldSysName": "firstName",
                                    "condition": null,
                                    "fetch": []
                                },
                                {
                                    "fieldSysName": "lastName",
                                    "condition": null,
                                    "fetch": []
                                }
                            ],
                            "sysName": "student",
                            "format": "",
                            "formatOptions": {}
                        },
                        {
                            "fieldSysName": "task_id",
                            "fetch": [
                                {
                                    "fieldSysName": "id",
                                    "condition": null,
                                    "fetch": []
                                },
                                {
                                    "fieldSysName": "Title",
                                    "condition": null,
                                    "fetch": []
                                }
                            ],
                            "sysName": "task_id",
                            "format": "",
                            "formatOptions": {}
                        }
                    ],
                    "writeFields": [
                        {
                            "fieldSysName": "id",
                            "fetch": [],
                            "sysName": "id",
                            "format": "",
                            "formatOptions": {}
                        },
                        {
                            "fieldSysName": "status",
                            "fetch": [],
                            "sysName": "status",
                            "format": "",
                            "formatOptions": {}
                        },
                        {
                            "fieldSysName": "student",
                            "fetch": [],
                            "sysName": "student",
                            "format": "",
                            "formatOptions": {}
                        },
                        {
                            "fieldSysName": "task_id",
                            "fetch": [],
                            "sysName": "task_id",
                            "format": "",
                            "formatOptions": {}
                        }
                    ]
                },
                "formMapping": [
                    {
                        "id": "37901713794092059",
                        "target": "status",
                        "type": "const",
                        "value": "stop"
                    },
                    {
                        "id": "83681713794435073",
                        "target": "student",
                        "type": "user",
                        "value": null
                    },
                    {
                        "id": "51331713794460623",
                        "target": "task_id",
                        "type": "objectField",
                        "value": "id"
                    }
                ]
            }
        ]
    },
    "tableTitle": "All my tasks",
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
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "Attachments",
            "dataType": "file",
            "name": "Прикреплённые файлы",
            "id": "76431712652227464",
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
            "format": "multipleFiles",
            "formatOptions": {},
            "groupName": null,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "Colour",
            "dataType": "string",
            "name": "Цвет",
            "id": "67381712652193650",
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
            "format": "color",
            "formatOptions": {},
            "groupName": null,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "Picture",
            "dataType": "file",
            "name": "Картинка",
            "id": "79271712652088452",
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
            "format": "image",
            "formatOptions": {},
            "groupName": null,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "Description",
            "dataType": "string",
            "name": "Описание задания",
            "id": "19441712652067504",
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
            "format": "markdown",
            "formatOptions": {},
            "groupName": null,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "Category",
            "dataType": "json",
            "name": "Категория задачи",
            "id": "40381712651994456",
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
                        "value": "ToDo",
                        "label": "ToDo"
                    },
                    {
                        "value": "Homework",
                        "label": "Homework"
                    }
                ]
            },
            "groupName": null,
            "typeVariable": {},
            "json": true,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "Type",
            "dataType": "json",
            "name": "Тип задачи",
            "id": "11931712651803099",
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
                        "value": "Summative",
                        "label": "Summative"
                    },
                    {
                        "value": "Formative",
                        "label": "Formative"
                    }
                ]
            },
            "groupName": null,
            "typeVariable": {},
            "json": true,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "Title",
            "dataType": "string",
            "name": "Название задачи",
            "id": "60651712651783721",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "Deadline",
            "dataType": "date",
            "name": "Крайний срок выполнения",
            "id": "58551712653340005",
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
                "dateFormat": "DD/MM/Y",
                "timeFormat": " HH:mm",
                "isUTC": "false"
            },
            "groupName": null,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "Subject",
            "dataType": "link",
            "name": "Предмет",
            "id": "65271712653605422",
            "link": "subject",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
            "arrayLink": false,
            "linkType": true,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "ATLskills_ids",
            "dataType": "arrayLink",
            "name": "Навыки ATL",
            "id": "69301712909554884",
            "link": "atl_skills",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
            "arrayLink": true,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "Taskauthor",
            "dataType": "link",
            "name": "Автор задачи",
            "id": "77941712909990127",
            "link": "WebUser",
            "group": "0",
            "tags": "",
            "indexing": true,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 11,
            "linkIndexFieldSysName": [
                "id"
            ],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": {},
            "groupName": null,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
            "arrayLink": false,
            "linkType": true,
            "indexExists": true,
            "array": false
        },
        {
            "sysName": "Unit",
            "dataType": "link",
            "name": "Юнит",
            "id": "21601713523939260",
            "link": "units",
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
            "formatOptions": {},
            "groupName": null,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
            "arrayLink": false,
            "linkType": true,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "Criteria",
            "dataType": "arrayLink",
            "name": "Критерий оценивания",
            "id": "15271713543599499",
            "link": "criteria",
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 15,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
            "arrayLink": true,
            "linkType": false,
            "indexExists": false,
            "array": false
        }
    ],
    "data": [
        {
            "ATLskills_ids": [
                {
                    "ATLskills": "Собирать, записывать и проверять данные/информацию",
                    "id": "b295b28a-b623-489b-98e7-58578a21d678"
                },
                {
                    "ATLskills": "Устанавливать связи между различными источниками информации",
                    "id": "d87f8414-47e8-4ab3-8193-48a26ae227f6"
                },
                {
                    "ATLskills": "Тщательно наблюдать, чтобы распознавать проблемы",
                    "id": "eaa3ca65-af8e-4a16-8855-11743b0a6928"
                },
                {
                    "ATLskills": "Собирать и анализировать данные для принятия информированных решений",
                    "id": "9015cf82-48f8-4732-9a32-46187d34881d"
                }
            ],
            "Title": "Globe - planet model, parallels and meridians, geographical coordinates",
            "Category": "{\"ToDo\":true}",
            "Taskauthor": {
                "firstName": "Elena",
                "lastName": "Lerner",
                "id": "newmb.eg@gmail.com"
            },
            "Subject": "Geography",
            "Description": "1. Прочитать ученик параграфы 10-11 стр. 32-40 (по многочисленным просьбам). Учебник прикреплён здесь и есть на миро\n2. Выполнить задание по ссылке https://airtable.com/app2aZmxpcMmbmBJZ/shrzsqMIO4Nlj4gYe\n",
            "Colour": "#12bb00",
            "id": "fdc1448b-f512-436f-a29c-75abeb6afa57",
            "Criteria": [],
            "Unit": {
                "Title": "Maps - the language of geography",
                "Subject": [
                    {
                        "Subject": "Geography",
                        "id": "Geography"
                    }
                ],
                "Description": "Изучение базовых принципов чтения и создания карт",
                "KeyConcept_id": "Function",
                "Datestart": 1712955600000,
                "Creator": {
                    "firstName": "Elena",
                    "lastName": "Lerner",
                    "id": "newmb.eg@gmail.com"
                },
                "id": "2a703970-7254-4e62-9352-a9179179b04c",
                "Unittemplate": "{\"Standart\":true}",
                "Dateend": 1714424400000,
                "RelatedConcepts": [
                    "Scale"
                ],
                "StatementofInquiry": "Съешь ещё этих мягких французских булок, да выпей чаю",
                "InquiryQuestions": [
                    {
                        "InquiryQuestion": "Есть ли жизнь на Марсе?",
                        "id": "0741126d-6a34-42bc-8c01-69cdb91bc861"
                    }
                ],
                "Cover": "https://api.directual.com/fileUploaded/gooash/web/857f00c8-aa69-4674-b72d-9c8cf0b243ca.jpg"
            },
            "Picture": "https://api.directual.com/fileUploaded/gooash/web/3e86ec28-d048-43cb-a60c-b80ea743a8dd.png",
            "Deadline": 1713560400000,
            "Type": "{\"Formative\":true}"
        },
        {
            "ATLskills_ids": [
                {
                    "ATLskills": "Понимать, какое влияние оказывает форма подачи информации в медиа",
                    "id": "8e57184a-f11f-40b6-9675-558a14f0f8f4"
                }
            ],
            "Title": "Solar nad Lunar eclipse",
            "Category": "{\"Homework\":true}",
            "Taskauthor": {
                "firstName": "Elena",
                "lastName": "Lerner",
                "id": "newmb.eg@gmail.com"
            },
            "Subject": "Biology",
            "Description": "Watch the video https://youtu.be/n7tnHPDH5d8?si=0jwGs8_pgc0bKwSX and complete the worc this link",
            "id": "aa83d645-4567-483c-ad5b-f61e30e8789f",
            "Criteria": [],
            "Unit": {
                "Title": "Universe and us",
                "Subject": [
                    {
                        "Subject": "Geography",
                        "id": "Geography"
                    }
                ],
                "Description": "## A study of the solar system and the Earth as part of it. \n**The influence of the Earth's motion in the Solar System on life cycles of a number of processes.**",
                "KeyConcept_id": "Function",
                "Datestart": 1712869200000,
                "Creator": {
                    "firstName": "Elena",
                    "lastName": "Lerner",
                    "id": "newmb.eg@gmail.com"
                },
                "id": "2be5ae4f-5b2d-49d0-a176-4a5236a3a267",
                "Unittemplate": "{\"Standart\":true}",
                "Dateend": 1715115600000,
                "RelatedConcepts": [
                    "Causality"
                ],
                "InquiryQuestions": [
                    {
                        "InquiryQuestion": "Есть ли жизнь на Марсе?",
                        "id": "0741126d-6a34-42bc-8c01-69cdb91bc861"
                    }
                ],
                "Cover": "https://api.directual.com/fileUploaded/gooash/web/a716b4de-0c92-4427-9cca-f930a8ad53c4.jpg"
            },
            "Picture": "https://api.directual.com/fileUploaded/gooash/web/4bab8e87-d374-41d3-958a-4d1b7785aab7.jpg",
            "Deadline": 1713474000000,
            "Type": "{\"Formative\":true}"
        },
        {
            "ATLskills_ids": [
                {
                    "ATLskills": "Читать вдумчиво",
                    "id": "72857e90-9bd0-4a6b-ab46-5a450eb31d21"
                },
                {
                    "ATLskills": "Устанавливать связи между предметными группами и дисциплинами",
                    "id": "08b88fb8-cd20-46ac-9509-9b3f0b9064a4"
                },
                {
                    "ATLskills": "Находить, организовывать, анализировать, оценивать, синтезировать и этично использовать информацию из различных источников и медиа (включая социальные сети и онлайн платформы — например, каналы в Telegram)",
                    "id": "2597882f-0686-4163-9aec-be3e5487fe65"
                }
            ],
            "Title": "Patterns between the planets of the solar system",
            "Category": "{\"Homework\":true}",
            "Taskauthor": {
                "firstName": "Elena",
                "lastName": "Lerner",
                "id": "newmb.eg@gmail.com"
            },
            "Subject": "History",
            "Description": "**Сделать кучу всего и очень классно плюс потрать на это очень мало времени**",
            "id": "5c6a919a-15b6-4551-9e52-5282eee892b5",
            "Criteria": [],
            "Unit": {
                "Title": "Universe and us",
                "Subject": [
                    {
                        "Subject": "Geography",
                        "id": "Geography"
                    }
                ],
                "Description": "## A study of the solar system and the Earth as part of it. \n**The influence of the Earth's motion in the Solar System on life cycles of a number of processes.**",
                "KeyConcept_id": "Function",
                "Datestart": 1712869200000,
                "Creator": {
                    "firstName": "Elena",
                    "lastName": "Lerner",
                    "id": "newmb.eg@gmail.com"
                },
                "id": "2be5ae4f-5b2d-49d0-a176-4a5236a3a267",
                "Unittemplate": "{\"Standart\":true}",
                "Dateend": 1715115600000,
                "RelatedConcepts": [
                    "Causality"
                ],
                "InquiryQuestions": [
                    {
                        "InquiryQuestion": "Есть ли жизнь на Марсе?",
                        "id": "0741126d-6a34-42bc-8c01-69cdb91bc861"
                    }
                ],
                "Cover": "https://api.directual.com/fileUploaded/gooash/web/a716b4de-0c92-4427-9cca-f930a8ad53c4.jpg"
            },
            "Picture": "https://api.directual.com/fileUploaded/gooash/web/f21f6d1c-5092-4363-8296-94eb47639aca.jpg",
            "Deadline": 1713992400000,
            "Type": "{\"Summative\":true}"
        },
        {
            "ATLskills_ids": [
                {
                    "ATLskills": "Оценивать доказательства и аргументы",
                    "id": "5a3a678c-9215-4cbe-b86b-7e72809747a6"
                },
                {
                    "ATLskills": "Распознавать невысказанные допущения и необъективность",
                    "id": "606894a4-221e-420f-a782-2be2f4c904df"
                },
                {
                    "ATLskills": "Делать резонные выводы и обобщения",
                    "id": "c0d3bba6-823d-45d9-a125-48b60c0c93ea"
                }
            ],
            "Title": "Methods for depicting the earth's surface",
            "Category": "{\"Homework\":true}",
            "Taskauthor": {
                "firstName": "Elena",
                "lastName": "Lerner",
                "id": "newmb.eg@gmail.com"
            },
            "Subject": "Geography",
            "id": "73e51745-cdb8-4368-a527-9778859a79c0",
            "Criteria": [
                {
                    "Criteria": "Criteria",
                    "id": "C"
                },
                {
                    "Criteria": "Criteria",
                    "id": "A"
                }
            ],
            "Unit": {
                "Title": "Maps - the language of geography",
                "Subject": [
                    {
                        "Subject": "Geography",
                        "id": "Geography"
                    }
                ],
                "Description": "Изучение базовых принципов чтения и создания карт",
                "KeyConcept_id": "Function",
                "Datestart": 1712955600000,
                "Creator": {
                    "firstName": "Elena",
                    "lastName": "Lerner",
                    "id": "newmb.eg@gmail.com"
                },
                "id": "2a703970-7254-4e62-9352-a9179179b04c",
                "Unittemplate": "{\"Standart\":true}",
                "Dateend": 1714424400000,
                "RelatedConcepts": [
                    "Scale"
                ],
                "StatementofInquiry": "Съешь ещё этих мягких французских булок, да выпей чаю",
                "InquiryQuestions": [
                    {
                        "InquiryQuestion": "Есть ли жизнь на Марсе?",
                        "id": "0741126d-6a34-42bc-8c01-69cdb91bc861"
                    }
                ],
                "Cover": "https://api.directual.com/fileUploaded/gooash/web/857f00c8-aa69-4674-b72d-9c8cf0b243ca.jpg"
            },
            "Picture": "https://api.directual.com/fileUploaded/gooash/web/3b4b355a-94d3-473e-a81c-cffeeb808495.jpg",
            "Deadline": 1714424400000,
            "Type": "{\"Formative\":true}"
        },
        {
            "ATLskills_ids": [
                {
                    "ATLskills": "Распознавать невысказанные допущения и необъективность",
                    "id": "606894a4-221e-420f-a782-2be2f4c904df"
                },
                {
                    "ATLskills": "Делать резонные выводы и обобщения",
                    "id": "c0d3bba6-823d-45d9-a125-48b60c0c93ea"
                }
            ],
            "Title": "Methods for depicting the earth's surface",
            "Category": "{\"Homework\":true}",
            "Taskauthor": {
                "firstName": "Elena",
                "lastName": "Lerner",
                "id": "newmb.eg@gmail.com"
            },
            "Subject": "Geography",
            "Description": "Перейти по ссылке и выполнить задание при помощи атласа, который есть в кабинете географии https://airtable.com/app2aZmxpcMmbmBJZ/shr6mc85Z5eNrTomu ",
            "id": "e8ffb438-32cd-4d07-978e-080f6b2aa340",
            "Criteria": [
                {
                    "Criteria": "Criteria",
                    "id": "A"
                },
                {
                    "Criteria": "Criteria",
                    "id": "D"
                }
            ],
            "Unit": {
                "Title": "Maps - the language of geography",
                "Subject": [
                    {
                        "Subject": "Geography",
                        "id": "Geography"
                    }
                ],
                "Description": "Изучение базовых принципов чтения и создания карт",
                "KeyConcept_id": "Function",
                "Datestart": 1712955600000,
                "Creator": {
                    "firstName": "Elena",
                    "lastName": "Lerner",
                    "id": "newmb.eg@gmail.com"
                },
                "id": "2a703970-7254-4e62-9352-a9179179b04c",
                "Unittemplate": "{\"Standart\":true}",
                "Dateend": 1714424400000,
                "RelatedConcepts": [
                    "Scale"
                ],
                "StatementofInquiry": "Съешь ещё этих мягких французских булок, да выпей чаю",
                "InquiryQuestions": [
                    {
                        "InquiryQuestion": "Есть ли жизнь на Марсе?",
                        "id": "0741126d-6a34-42bc-8c01-69cdb91bc861"
                    }
                ],
                "Cover": "https://api.directual.com/fileUploaded/gooash/web/857f00c8-aa69-4674-b72d-9c8cf0b243ca.jpg"
            },
            "Picture": "https://api.directual.com/fileUploaded/gooash/web/eab00329-c3b6-437b-98ad-5a7d89c76d0c.jpg",
            "Deadline": 1714251600000,
            "Type": "{\"Formative\":true}"
        }
    ],
    "totalPages": 1,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [
        [
            "id",
            99305048
        ],
        [
            "Attachments",
            99305048
        ],
        [
            "Colour",
            99305048
        ],
        [
            "Picture",
            99305048
        ],
        [
            "Description",
            99305048
        ],
        [
            "Category",
            99305048
        ],
        [
            "Type",
            99305048
        ],
        [
            "Title",
            99305048
        ],
        [
            "Deadline",
            99305048
        ],
        [
            "Subject",
            99305048
        ],
        [
            "ATLskills_ids.id",
            99305470
        ],
        [
            "ATLskills_ids.ATLskills",
            99305470
        ],
        [
            "Taskauthor.id",
            99305002
        ],
        [
            "Taskauthor.firstName",
            99305002
        ],
        [
            "Taskauthor.lastName",
            99305002
        ],
        [
            "Unit.id",
            99305409
        ],
        [
            "Unit.Title",
            99305409
        ],
        [
            "Unit.Subject.id",
            99305471
        ],
        [
            "Unit.Subject.Subject",
            99305471
        ],
        [
            "Unit.InquiryQuestions.id",
            99305413
        ],
        [
            "Unit.InquiryQuestions.InquiryQuestion",
            99305413
        ],
        [
            "Unit.RelatedConcepts.id",
            99305411
        ],
        [
            "Unit.KeyConcept_id.id",
            99305410
        ],
        [
            "Unit.Attachments",
            99305409
        ],
        [
            "Unit.Cover",
            99305409
        ],
        [
            "Unit.Creator.id",
            99305002
        ],
        [
            "Unit.Creator.firstName",
            99305002
        ],
        [
            "Unit.Creator.lastName",
            99305002
        ],
        [
            "Unit.StatementofInquiry",
            99305409
        ],
        [
            "Unit.Dateend",
            99305409
        ],
        [
            "Unit.Datestart",
            99305409
        ],
        [
            "Unit.Unittemplate",
            99305409
        ],
        [
            "Unit.Description",
            99305409
        ],
        [
            "Criteria.id",
            99305472
        ],
        [
            "Criteria.Criteria",
            99305472
        ],
        [
            "Criteria.id",
            99305472
        ]
    ],
    "writeFields": [],
    "structures": {
        "99305002": {
            "networkID": 20582,
            "sysName": "WebUser",
            "name": "App users",
            "id": 99305002,
            "dateCreated": "2024-04-09T08:16:29Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"notifications_counter\",\"name\":\"Notifications Counter\",\"dataType\":\"string\",\"id\":\"1\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"array\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false},{\"sysName\":\"dateLastActivity\",\"name\":\"dateLastActivity\",\"dataType\":\"string\",\"id\":\"10\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"array\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false},{\"sysName\":\"email\",\"name\":\"Email\",\"dataType\":\"string\",\"id\":\"11\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"array\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false},{\"sysName\":\"phone\",\"name\":\"Phone\",\"dataType\":\"string\",\"id\":\"12\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"array\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false},{\"sysName\":\"dateCreated\",\"name\":\"dateCreated\",\"dataType\":\"string\",\"id\":\"13\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"array\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false},{\"sysName\":\"password\",\"name\":\"Password (hash)\",\"dataType\":\"string\",\"id\":\"14\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false},{\"sysName\":\"id\",\"name\":\"Username (login)\",\"dataType\":\"id\",\"id\":\"15\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false},{\"sysName\":\"MarksB\",\"name\":\"Оценки по критерию В\",\"dataType\":\"arrayLink\",\"id\":\"18821713670150595\",\"link\":\"assessment\",\"group\":\"1713089785235\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false},{\"sysName\":\"custom_labels\",\"name\":\"Custom labels\",\"dataType\":\"json\",\"id\":\"2\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"array\":false,\"json\":true,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false},{\"sysName\":\"userpic\",\"name\":\"User pic\",\"dataType\":\"file\",\"id\":\"3\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":{},\"groupName\":\"Contacts\",\"array\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false},{\"sysName\":\"isBlocked\",\"name\":\"Block user\",\"dataType\":\"boolean\",\"id\":\"4\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false},{\"sysName\":\"gender\",\"name\":\"Gender\",\"dataType\":\"string\",\"id\":\"5\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false},{\"sysName\":\"MarksA\",\"name\":\"Оценки по критерию А\",\"dataType\":\"arrayLink\",\"id\":\"51401713670095371\",\"link\":\"assessment\",\"group\":\"1713089785235\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false},{\"sysName\":\"systemMessage\",\"name\":\"System message\",\"dataType\":\"string\",\"id\":\"56921641637265680\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false},{\"sysName\":\"lastName\",\"name\":\"Last name\",\"dataType\":\"string\",\"id\":\"6\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false},{\"sysName\":\"notif_Email\",\"name\":\"Notify me by Email\",\"dataType\":\"boolean\",\"id\":\"61231639915065277\",\"link\":\"\",\"group\":\"1639915049523\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Yes\",\"No\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false},{\"sysName\":\"firstName\",\"name\":\"First name\",\"dataType\":\"string\",\"id\":\"7\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false},{\"sysName\":\"t1\",\"name\":\"Task\",\"dataType\":\"arrayLink\",\"id\":\"76671713265494758\",\"link\":\"assessment\",\"group\":\"1713089785235\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false},{\"sysName\":\"role\",\"name\":\"Roles\",\"dataType\":\"array\",\"id\":\"8\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":true,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false},{\"sysName\":\"secret\",\"name\":\"secret\",\"dataType\":\"string\",\"id\":\"81131636839496227\",\"link\":\"\",\"group\":\"1636839487957\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false},{\"sysName\":\"isAuthorization\",\"name\":\"isAuthorization\",\"dataType\":\"boolean\",\"id\":\"9\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"array\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false},{\"sysName\":\"Class\",\"name\":\"Класс\",\"dataType\":\"link\",\"id\":\"98141713089796004\",\"link\":\"groups\",\"group\":\"1713089785235\",\"tags\":null,\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[\"class\",\"id\"],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":true,\"indexExists\":true}]",
            "jsonGroupSettings": "[{\"id\":1636839487957,\"name\":\"Password restoring\",\"order\":2},{\"id\":1713089785235,\"name\":\"School\",\"order\":4},{\"id\":-1776115286,\"name\":\"System fields (LEGACY)\",\"order\":3},{\"id\":1639915049523,\"name\":\"Notifications\",\"order\":1},{\"id\":-502807437,\"name\":\"Contacts\",\"order\":0}]",
            "jsonViewIdSettings": "[{\"sysName\":\"firstName\"},{\"sysName\":\"lastName\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-04-21T03:30:15Z",
            "createBy": 0,
            "changedBy": 23982,
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            "objectIDSysName": "id",
            "folderId": null
        },
        "99305048": {
            "networkID": 20582,
            "sysName": "tasks",
            "name": "Tasks",
            "id": 99305048,
            "dateCreated": "2024-04-09T08:36:12Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"Type\",\"name\":\"Тип задачи\",\"dataType\":\"json\",\"id\":\"11931712651803099\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"checkboxes\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOption\":false,\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"multipleChoice\":[{\"value\":\"Summative\",\"label\":\"Summative\"},{\"value\":\"Formative\",\"label\":\"Formative\"}]},\"groupName\":null,\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"Criteria\",\"name\":\"Критерий оценивания\",\"dataType\":\"arrayLink\",\"id\":\"15271713543599499\",\"link\":\"criteria\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"Description\",\"name\":\"Описание задания\",\"dataType\":\"string\",\"id\":\"19441712652067504\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"Unit\",\"name\":\"Юнит\",\"dataType\":\"link\",\"id\":\"21601713523939260\",\"link\":\"units\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"Category\",\"name\":\"Категория задачи\",\"dataType\":\"json\",\"id\":\"40381712651994456\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"checkboxes\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"multipleChoice\":[{\"value\":\"ToDo\",\"label\":\"ToDo\"},{\"value\":\"Homework\",\"label\":\"Homework\"}]},\"groupName\":null,\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"Students\",\"name\":\"Студенты кому задано\",\"dataType\":\"string\",\"id\":\"52271713542104429\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"Classes\",\"name\":\"Классы для выполнения задачи\",\"dataType\":\"arrayLink\",\"id\":\"54321713526770801\",\"link\":\"groups\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"Deadline\",\"name\":\"Крайний срок выполнения\",\"dataType\":\"date\",\"id\":\"58551712653340005\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"Title\",\"name\":\"Название задачи\",\"dataType\":\"string\",\"id\":\"60651712651783721\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"Subject\",\"name\":\"Предмет\",\"dataType\":\"link\",\"id\":\"65271712653605422\",\"link\":\"subject\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"Colour\",\"name\":\"Цвет\",\"dataType\":\"string\",\"id\":\"67381712652193650\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ATLskills_ids\",\"name\":\"Навыки ATL\",\"dataType\":\"arrayLink\",\"id\":\"69301712909554884\",\"link\":\"atl_skills\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"Attachments\",\"name\":\"Прикреплённые файлы\",\"dataType\":\"file\",\"id\":\"76431712652227464\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"multipleFiles\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"Taskauthor\",\"name\":\"Автор задачи\",\"dataType\":\"link\",\"id\":\"77941712909990127\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[\"id\"],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"indexExists\":true,\"array\":false},{\"sysName\":\"Picture\",\"name\":\"Картинка\",\"dataType\":\"file\",\"id\":\"79271712652088452\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"Title\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-04-19T16:29:59Z",
            "createBy": 23982,
            "changedBy": 23982,
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            "objectIDSysName": "id",
            "folderId": 33800449
        },
        "99305409": {
            "networkID": 20582,
            "sysName": "units",
            "name": "Units",
            "id": 99305409,
            "dateCreated": "2024-04-11T17:03:43Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"Description\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"28861712855041922\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"Dateend\",\"name\":\"Завершение юнита\",\"dataType\":\"date\",\"id\":\"33601712855258898\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"Cover\",\"name\":\"Обложка\",\"dataType\":\"file\",\"id\":\"34401712855408258\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"Unittemplate\",\"name\":\"Unit Template\",\"dataType\":\"json\",\"id\":\"53691712855086113\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"checkboxes\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"multipleChoice\":[{\"value\":\"Standart\",\"label\":\"Standart\"},{\"value\":\"Interdisciplinary\",\"label\":\"Interdisciplinary\"}]},\"groupName\":null,\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"KeyConcept_id\",\"name\":\"Key Concept\",\"dataType\":\"link\",\"id\":\"55991712858132960\",\"link\":\"key_concepts\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"Creator\",\"name\":\"Создатель юнита\",\"dataType\":\"link\",\"id\":\"59511712855359066\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[\"id\"],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"indexExists\":true,\"array\":false},{\"sysName\":\"Title\",\"name\":\"Название юнита\",\"dataType\":\"string\",\"id\":\"59761712855027693\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"Subject\",\"name\":\"Предмет\",\"dataType\":\"arrayLink\",\"id\":\"63881712914193880\",\"link\":\"subject\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"Attachments\",\"name\":\"Вложения\",\"dataType\":\"file\",\"id\":\"81791712855451735\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"multipleFiles\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"Datestart\",\"name\":\"Начало юнита\",\"dataType\":\"date\",\"id\":\"88511712855233641\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"StatementofInquiry\",\"name\":\"Statement of Inquiry\",\"dataType\":\"string\",\"id\":\"90581712855338046\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"InquiryQuestions\",\"name\":\"Inquiry Questions\",\"dataType\":\"arrayLink\",\"id\":\"95391712858259836\",\"link\":\"inquiry_questions\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"RelatedConcepts\",\"name\":\"Related Concept(s)\",\"dataType\":\"arrayLink\",\"id\":\"97421712858210892\",\"link\":\"related_concepts\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"indexExists\":false,\"array\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"Title\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-04-20T09:46:02Z",
            "createBy": 23982,
            "changedBy": 23982,
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            "objectIDSysName": "id",
            "folderId": 33800449
        },
        "99305410": {
            "networkID": 20582,
            "sysName": "key_concepts",
            "name": "Key Concepts",
            "id": 99305410,
            "dateCreated": "2024-04-11T17:14:54Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"Definition\",\"dataType\":\"string\",\"name\":\"Definition\",\"id\":\"67621712856404717\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": null,
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-04-11T17:27:00Z",
            "createBy": 23982,
            "changedBy": 23982,
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            "objectIDSysName": "id",
            "folderId": 33800638
        },
        "99305411": {
            "networkID": 20582,
            "sysName": "related_concepts",
            "name": "Related Concepts",
            "id": 99305411,
            "dateCreated": "2024-04-11T17:27:52Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"Definition\",\"dataType\":\"string\",\"name\":\"Definition\",\"id\":\"18741712856480782\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": null,
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-04-11T17:29:07Z",
            "createBy": 23982,
            "changedBy": 23982,
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            "objectIDSysName": "id",
            "folderId": 33800638
        },
        "99305413": {
            "networkID": 20582,
            "sysName": "inquiry_questions",
            "name": "Inquiry Questions",
            "id": 99305413,
            "dateCreated": "2024-04-11T17:49:33Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"Type\",\"dataType\":\"json\",\"name\":\"Тип вопроса\",\"id\":\"11271712857842376\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"checkboxes\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"multipleChoice\":[{\"value\":\"Factual\",\"label\":\"Factual\"},{\"value\":\"Conseptual\",\"label\":\"Conseptual\"},{\"value\":\"Debateble\",\"label\":\"Debateble\"}]},\"groupName\":null,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"InquiryQuestion\",\"dataType\":\"string\",\"name\":\"Inquiry Question\",\"id\":\"39071712857780801\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"InquiryQuestion\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-04-23T12:08:53Z",
            "createBy": 23982,
            "changedBy": 23982,
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            "objectIDSysName": "id",
            "folderId": 33800638
        },
        "99305470": {
            "networkID": 20582,
            "sysName": "atl_skills",
            "name": "ATL skills",
            "id": 99305470,
            "dateCreated": "2024-04-12T08:10:03Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"7thgrade\",\"dataType\":\"string\",\"name\":\"7 класс\",\"id\":\"15141712907861787\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"5thgrade\",\"dataType\":\"string\",\"name\":\"5 класс\",\"id\":\"26361712907750161\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"Group\",\"dataType\":\"string\",\"name\":\"Группа\",\"id\":\"36591712907711290\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"6thgrade\",\"dataType\":\"string\",\"name\":\"6 класс\",\"id\":\"55351712907858119\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"Take\",\"dataType\":\"json\",\"name\":\"Берём\",\"id\":\"67211712907743600\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"checkboxes\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"multipleChoice\":[{\"value\":\"checked\",\"label\":\"checked\"}]},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"9thgrade\",\"dataType\":\"string\",\"name\":\"9 класс\",\"id\":\"73951712907872176\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"Subgroup\",\"dataType\":\"string\",\"name\":\"Подгруппа\",\"id\":\"79911712907887290\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"8thgrade\",\"dataType\":\"string\",\"name\":\"8 класс\",\"id\":\"86871712907865870\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"ATLskills\",\"dataType\":\"string\",\"name\":\"Навыки\",\"id\":\"88771712907695072\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"ATLskills\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-04-13T10:55:25Z",
            "createBy": 23982,
            "changedBy": 23982,
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            "objectIDSysName": "id",
            "folderId": 33800638
        },
        "99305471": {
            "networkID": 20582,
            "sysName": "subject",
            "name": "Subject",
            "id": 99305471,
            "dateCreated": "2024-04-12T09:21:09Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"Subject\",\"dataType\":\"string\",\"name\":\"Предмет\",\"id\":\"39301712913673945\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"Subject\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-04-12T09:21:33Z",
            "createBy": 23982,
            "changedBy": 23982,
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            "objectIDSysName": "id",
            "folderId": 33800449
        },
        "99305472": {
            "networkID": 20582,
            "sysName": "criteria",
            "name": "Criteria",
            "id": 99305472,
            "dateCreated": "2024-04-12T11:41:41Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"Criteria\",\"dataType\":\"string\",\"name\":\"Criteria\",\"id\":\"61481712922123483\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"Criteria\"},{\"sysName\":\"id\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-04-12T11:44:45Z",
            "createBy": 23982,
            "changedBy": 23982,
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            "objectIDSysName": "id",
            "folderId": 33800638
        }
    },
    "isSuccessWrite": false,
    "writeError": null,
    "writeResponse": null,
    "fileds": [],
    "quickSearch": "false",
    "httpParams": {},
    "cardCustomHtml": null,
    "cardCustomLayout": null,
    "comment": null
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
