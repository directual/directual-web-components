import React, { useState, useEffect, useRef } from 'react'
import Button from '../../button/button'
import styles from './fpsLayout.module.css'
import FpsCards from '../../viewobjects/cards/FpsCards'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

let cardActions = {
    "sl": "myJobsActive",
    "pageSize": "10",
    "headerField": null,
    "params": {
        "cardListLayout": "grid",
        "cardHeaderComment": "date_created",
        "deleteField": "",
        "cardBodyText": "job_status_message",
        "cardImage": false,
        "cardImageField": "",
        "cardImageType": "none",
        "cardImageSize": 100,
        "objectView": {},
        "data": {
            "readFields": [
                {
                    "fieldSysName": "candidates_quantity",
                    "fetch": [],
                    "sysName": "candidates_quantity",
                    "name": "Количество подходящих профилей кандидатов",
                    "dataType": "number",
                    "format": "positiveNum",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "company_city_ids",
                    "fetch": [
                        {
                            "fieldSysName": "id",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "name",
                            "condition": null,
                            "fetch": []
                        }
                    ],
                    "sysName": "company_city_ids",
                    "name": "Город(а) работодателя",
                    "dataType": "arrayLink",
                    "format": "",
                    "formatOptions": {},
                    "link": "cities"
                },
                {
                    "fieldSysName": "company_description",
                    "fetch": [],
                    "sysName": "company_description",
                    "name": "Описание компании работодателя",
                    "dataType": "string",
                    "format": "markdown",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "company_in_profile",
                    "fetch": [],
                    "sysName": "company_in_profile",
                    "name": "Работодатель",
                    "dataType": "boolean",
                    "format": "",
                    "formatOptions": {
                        "customOptionLabel": "My option",
                        "keyValue": {
                            "key": "key",
                            "value": "value",
                            "button": "One more"
                        },
                        "booleanOptions": [
                            "Указан в моем профиле работодателя",
                            "Другая компания"
                        ],
                        "customOptionPlaceholder": "Describe your option",
                        "range": {},
                        "customOptionType": "textarea"
                    },
                    "link": ""
                },
                {
                    "fieldSysName": "company_name",
                    "fetch": [],
                    "sysName": "company_name",
                    "name": "Название компании работодателя",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "company_website",
                    "fetch": [],
                    "sysName": "company_website",
                    "name": "Сайт работодателя",
                    "dataType": "string",
                    "format": "webLink",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "connect_instructions",
                    "fetch": [],
                    "sysName": "connect_instructions",
                    "name": "Инструкции для связи кандидату",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "connect_type",
                    "fetch": [],
                    "sysName": "connect_type",
                    "name": "Способ связи с кандидатом",
                    "dataType": "boolean",
                    "format": "",
                    "formatOptions": {
                        "customOptionLabel": "My option",
                        "keyValue": {
                            "key": "key",
                            "value": "value",
                            "button": "One more"
                        },
                        "booleanOptions": [
                            "Выслать кандидату мой телеграм",
                            "Другой способ"
                        ],
                        "customOptionPlaceholder": "Describe your option",
                        "range": {},
                        "customOptionType": "textarea"
                    },
                    "link": ""
                },
                {
                    "fieldSysName": "date_created",
                    "fetch": [],
                    "sysName": "date_created",
                    "name": "Дата размещения вакансии",
                    "dataType": "date",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "functions_22",
                    "fetch": [
                        {
                            "fieldSysName": "id",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "name",
                            "condition": null,
                            "fetch": []
                        }
                    ],
                    "sysName": "functions_22",
                    "name": "Функции 2/2",
                    "dataType": "arrayLink",
                    "format": "",
                    "formatOptions": {},
                    "link": "functions22"
                },
                {
                    "fieldSysName": "functions_52",
                    "fetch": [
                        {
                            "fieldSysName": "id",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "name",
                            "condition": null,
                            "fetch": []
                        }
                    ],
                    "sysName": "functions_52",
                    "name": "Функции 5/2",
                    "dataType": "arrayLink",
                    "format": "",
                    "formatOptions": {},
                    "link": "functions52"
                },
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
                    "fieldSysName": "job_description",
                    "fetch": [],
                    "sysName": "job_description",
                    "name": "Описание вакансии",
                    "dataType": "string",
                    "format": "markdown",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "job_name",
                    "fetch": [],
                    "sysName": "job_name",
                    "name": "Название вакансии",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "job_status_message",
                    "fetch": [],
                    "sysName": "job_status_message",
                    "name": "Статус вакансии",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "payment_link",
                    "fetch": [],
                    "sysName": "payment_link",
                    "name": "Оплатить размещение",
                    "dataType": "string",
                    "format": "webLink",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "responds_approved_ids",
                    "fetch": [
                        {
                            "fieldSysName": "Employer_respond",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "date_process",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "id",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "salary_text",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "user_CV",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "user_fb",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "user_insta",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "user_lastName",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "user_name",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "user_phone",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "user_photo",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "user_telegram",
                            "condition": null,
                            "fetch": []
                        }
                    ],
                    "sysName": "responds_approved_ids",
                    "name": "✅ Одобренные отклики",
                    "dataType": "arrayLink",
                    "format": "",
                    "formatOptions": {},
                    "link": "Responds"
                },
                {
                    "fieldSysName": "responds_declined_ids",
                    "fetch": [
                        {
                            "fieldSysName": "date_process",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "user_CV",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "user_fb",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "user_insta",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "user_lastName",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "user_name",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "user_photo",
                            "condition": null,
                            "fetch": []
                        }
                    ],
                    "sysName": "responds_declined_ids",
                    "name": "🚫 Отклоненные отклики",
                    "dataType": "arrayLink",
                    "format": "",
                    "formatOptions": {},
                    "link": "Responds"
                },
                {
                    "fieldSysName": "responds_new",
                    "fetch": [],
                    "sysName": "responds_new",
                    "name": "Новых откликов",
                    "dataType": "number",
                    "format": "positiveNum",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "responds_new_ids",
                    "fetch": [
                        {
                            "fieldSysName": "date_respond",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "id",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "salary_text",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "user_CV",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "user_fb",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "user_insta",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "user_lastName",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "user_name",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "user_photo",
                            "condition": null,
                            "fetch": []
                        }
                    ],
                    "sysName": "responds_new_ids",
                    "name": "🙋‍♂️ Новые отклики",
                    "dataType": "arrayLink",
                    "format": "",
                    "formatOptions": {},
                    "link": "Responds"
                },
                {
                    "fieldSysName": "salary_text",
                    "fetch": [],
                    "sysName": "salary_text",
                    "name": "Зарплатная вилка",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                },
                {
                    "fieldSysName": "type",
                    "fetch": [
                        {
                            "fieldSysName": "id",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "type",
                            "condition": null,
                            "fetch": []
                        }
                    ],
                    "sysName": "type",
                    "name": "График",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "link": "Type2252"
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
                    "fieldSysName": "job_status",
                    "fetch": [],
                    "sysName": "job_status",
                    "name": "Статус (техническое поле)",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                }
            ],
            "fields": {
                "candidates_quantity": {
                    "id": "candidates_quantity",
                    "content": "Количество подходящих профилей кандидатов",
                    "type": "field",
                    "dataType": "number",
                    "format": "positiveNum",
                    "formatOptions": {},
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "company_city_ids": {
                    "id": "company_city_ids",
                    "content": "Город(а) работодателя",
                    "type": "field",
                    "dataType": "arrayLink",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "cities",
                    "actions": []
                },
                "company_description": {
                    "id": "company_description",
                    "content": "Описание компании работодателя",
                    "type": "field",
                    "dataType": "string",
                    "format": "markdown",
                    "formatOptions": {},
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "company_in_profile": {
                    "id": "company_in_profile",
                    "content": "Работодатель",
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
                        "booleanOptions": [
                            "Указан в моем профиле работодателя",
                            "Другая компания"
                        ],
                        "customOptionPlaceholder": "Describe your option",
                        "range": {},
                        "customOptionType": "textarea"
                    },
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "company_name": {
                    "id": "company_name",
                    "content": "Название компании работодателя",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "company_website": {
                    "id": "company_website",
                    "content": "Сайт работодателя",
                    "type": "field",
                    "dataType": "string",
                    "format": "webLink",
                    "formatOptions": {},
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "connect_instructions": {
                    "id": "connect_instructions",
                    "content": "Инструкции для связи кандидату",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "connect_type": {
                    "id": "connect_type",
                    "content": "Способ связи с кандидатом",
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
                        "booleanOptions": [
                            "Выслать кандидату мой телеграм",
                            "Другой способ"
                        ],
                        "customOptionPlaceholder": "Describe your option",
                        "range": {},
                        "customOptionType": "textarea"
                    },
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "date_created": {
                    "id": "date_created",
                    "content": "Дата размещения вакансии",
                    "type": "field",
                    "dataType": "date",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "functions_22": {
                    "id": "functions_22",
                    "content": "Функции 2/2",
                    "type": "field",
                    "dataType": "arrayLink",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "functions22",
                    "actions": []
                },
                "functions_52": {
                    "id": "functions_52",
                    "content": "Функции 5/2",
                    "type": "field",
                    "dataType": "arrayLink",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "functions52",
                    "actions": []
                },
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
                "job_description": {
                    "id": "job_description",
                    "content": "Описание вакансии",
                    "type": "field",
                    "dataType": "string",
                    "format": "markdown",
                    "formatOptions": {},
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "job_name": {
                    "id": "job_name",
                    "content": "Название вакансии",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "job_status_message": {
                    "id": "job_status_message",
                    "content": "Статус вакансии",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "payment_link": {
                    "id": "payment_link",
                    "content": "Оплатить размещение",
                    "type": "field",
                    "dataType": "string",
                    "format": "webLink",
                    "formatOptions": {},
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "responds_approved_ids": {
                    "id": "responds_approved_ids",
                    "content": "✅ Одобренные отклики",
                    "type": "field",
                    "dataType": "arrayLink",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "Responds",
                    "actions": []
                },
                "responds_declined_ids": {
                    "id": "responds_declined_ids",
                    "content": "🚫 Отклоненные отклики",
                    "type": "field",
                    "dataType": "arrayLink",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "Responds",
                    "actions": []
                },
                "responds_new": {
                    "id": "responds_new",
                    "content": "Новых откликов",
                    "type": "field",
                    "dataType": "number",
                    "format": "positiveNum",
                    "formatOptions": {},
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "responds_new_ids": {
                    "id": "responds_new_ids",
                    "content": "🙋‍♂️ Новые отклики",
                    "type": "field",
                    "dataType": "arrayLink",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "Responds",
                    "actions": [
                        {
                            "sysName": "respondProcessing",
                            "id": "23791610105623418",
                            "name": "Одобрить",
                            "displayAs": "button",
                            "buttonIcon": "done",
                            "buttonType": "accent",
                            "closePopup": true,
                            "callFrom": "linked",
                            "callFromField": "responds_new_ids",
                            "SLtype": "other",
                            "fields": {
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
                                        "fieldSysName": "status",
                                        "fetch": [],
                                        "sysName": "status",
                                        "name": "Статус (suggested,new,approved,declined)",
                                        "dataType": "string",
                                        "format": "",
                                        "formatOptions": {},
                                        "link": ""
                                    }
                                ]
                            },
                            "formMapping": [
                                {
                                    "id": "82751610105650081",
                                    "target": "id",
                                    "type": "linkedField",
                                    "value": "id"
                                },
                                {
                                    "id": "86771610105697488",
                                    "target": "status",
                                    "type": "const",
                                    "value": "approved"
                                }
                            ]
                        },
                        {
                            "sysName": "respondProcessing",
                            "id": "90591610105714148",
                            "name": "Отклонить",
                            "displayAs": "button",
                            "buttonIcon": "ban",
                            "buttonType": "danger",
                            "closePopup": true,
                            "SLtype": "other",
                            "callFrom": "linked",
                            "callFromField": "responds_new_ids",
                            "fields": {
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
                                        "fieldSysName": "status",
                                        "fetch": [],
                                        "sysName": "status",
                                        "name": "Статус (suggested,new,approved,declined)",
                                        "dataType": "string",
                                        "format": "",
                                        "formatOptions": {},
                                        "link": ""
                                    }
                                ]
                            },
                            "formMapping": [
                                {
                                    "id": "40881610105737033",
                                    "target": "id",
                                    "type": "linkedField",
                                    "value": "id"
                                },
                                {
                                    "id": "91331610105743116",
                                    "target": "status",
                                    "type": "const",
                                    "value": "declined"
                                }
                            ]
                        }
                    ]
                },
                "salary_text": {
                    "id": "salary_text",
                    "content": "Зарплатная вилка",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": null,
                    "actions": []
                },
                "type": {
                    "id": "type",
                    "content": "График",
                    "type": "field",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "Type2252",
                    "actions": []
                },
                "job_status": {
                    "id": "job_status",
                    "content": "Статус (техническое поле)",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "link": "",
                    "actions": []
                },
                "action__40561609919684635": {
                    "content": "Архивировать вакансию",
                    "id": "action__40561609919684635",
                    "type": "action",
                    "actions": []
                },
                "action__23791610105623418": {
                    "content": "Одобрить",
                    "id": "action__23791610105623418",
                    "type": "action",
                    "actions": []
                },
                "action__90591610105714148": {
                    "content": "Отклонить",
                    "id": "action__90591610105714148",
                    "type": "action",
                    "actions": []
                }
            },
            "fieldParams": {
                "functions_22": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "functions_52": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "id": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "job_description": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "stringDisplay": "markdown"
                },
                "job_name": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "salary": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "jsonDisplay": {
                        "type": "range",
                        "unitName": "k ₽",
                        "range": {
                            "min": 0,
                            "max": 300,
                            "step": 10
                        }
                    },
                    "descriptionFlag": true,
                    "description": "Доход в мес, тыс. ₽"
                },
                "type": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "company_city_ids": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "company_in_profile": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "company_name": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "company_website": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "company_description": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "connect_instructions": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "connect_type": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "job_status_message": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "displayAsHint": true,
                    "hintType": "ok"
                },
                "responds_approved_ids": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": true,
                    "configureLinkedCard": {
                        "fields": {
                            "date_process": {
                                "id": "date_process",
                                "content": "Дата обработки работодателем",
                                "type": "field",
                                "read": true,
                                "dataType": "date"
                            },
                            "id": {
                                "id": "id",
                                "content": "id",
                                "type": "field",
                                "read": true,
                                "dataType": "id"
                            },
                            "salary_text": {
                                "id": "salary_text",
                                "content": "Зарплатная вилка",
                                "type": "field",
                                "read": true,
                                "dataType": "string"
                            },
                            "user_CV": {
                                "id": "user_CV",
                                "content": "Резюме кандидата",
                                "type": "field",
                                "read": true,
                                "dataType": "file"
                            },
                            "user_lastName": {
                                "id": "user_lastName",
                                "content": "Фамилия кандидата",
                                "type": "field",
                                "read": true,
                                "dataType": "string"
                            },
                            "user_name": {
                                "id": "user_name",
                                "content": "Имя кандидата",
                                "type": "field",
                                "read": true,
                                "dataType": "string"
                            },
                            "user_phone": {
                                "id": "user_phone",
                                "content": "Телефон кандидата",
                                "type": "field",
                                "read": true,
                                "dataType": "string"
                            },
                            "user_photo": {
                                "id": "user_photo",
                                "content": "Фото кандидата",
                                "type": "field",
                                "read": true,
                                "dataType": "file"
                            },
                            "user_telegram": {
                                "id": "user_telegram",
                                "content": "Telegram",
                                "type": "field",
                                "read": true,
                                "dataType": "string"
                            },
                            "Employer_respond": {
                                "id": "Employer_respond",
                                "content": "Ответ работодателя",
                                "type": "field",
                                "read": true,
                                "dataType": "string"
                            },
                            "user_insta": {
                                "id": "user_insta",
                                "content": "Instagram",
                                "type": "field",
                                "read": true,
                                "dataType": "string"
                            },
                            "user_fb": {
                                "id": "user_fb",
                                "content": "Facebook",
                                "type": "field",
                                "read": true,
                                "dataType": "string"
                            }
                        },
                        "fieldParams": {
                            "date_process": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "id": {
                                "include": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "salary_text": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "user_CV": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "user_lastName": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "user_name": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "user_phone": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "user_photo": {
                                "include": true,
                                "fileImageFormat": "circle",
                                "fileImageSize": 200,
                                "fileImage": true
                            },
                            "user_telegram": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "Employer_respond": {
                                "include": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "user_insta": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "user_fb": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            }
                        },
                        "fieldOrder": [
                            "date_process",
                            "user_photo",
                            "user_name",
                            "user_lastName",
                            "id",
                            "user_CV",
                            "user_insta",
                            "user_fb",
                            "salary_text",
                            "user_phone",
                            "user_telegram",
                            "Employer_respond"
                        ]
                    },
                    "subHeader": "Одобренный отклик: "
                },
                "responds_declined_ids": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": true,
                    "configureLinkedCard": {
                        "fields": {
                            "date_process": {
                                "id": "date_process",
                                "content": "Дата обработки работодателем",
                                "type": "field",
                                "read": true,
                                "dataType": "date"
                            },
                            "user_CV": {
                                "id": "user_CV",
                                "content": "Резюме кандидата",
                                "type": "field",
                                "read": true,
                                "dataType": "file"
                            },
                            "user_name": {
                                "id": "user_name",
                                "content": "Имя кандидата",
                                "type": "field",
                                "read": true,
                                "dataType": "string"
                            },
                            "user_photo": {
                                "id": "user_photo",
                                "content": "Фото кандидата",
                                "type": "field",
                                "read": true,
                                "dataType": "file"
                            },
                            "user_fb": {
                                "id": "user_fb",
                                "content": "Facebook",
                                "type": "field",
                                "read": true,
                                "dataType": "string"
                            },
                            "user_insta": {
                                "id": "user_insta",
                                "content": "Instagram",
                                "type": "field",
                                "read": true,
                                "dataType": "string"
                            },
                            "user_lastName": {
                                "id": "user_lastName",
                                "content": "Фамилия кандидата",
                                "type": "field",
                                "read": true,
                                "dataType": "string"
                            }
                        },
                        "fieldParams": {
                            "date_process": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "user_CV": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "user_name": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "user_photo": {
                                "include": true,
                                "fileImageFormat": "circle",
                                "fileImageSize": 200,
                                "fileImage": true
                            },
                            "user_fb": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "user_insta": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "user_lastName": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            }
                        },
                        "fieldOrder": [
                            "date_process",
                            "user_photo",
                            "user_name",
                            "user_lastName",
                            "user_CV",
                            "user_insta",
                            "user_fb"
                        ]
                    },
                    "subHeader": "Отклоненный отклик:"
                },
                "responds_new": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "responds_new_ids": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": true,
                    "configureLinkedCard": {
                        "fields": {
                            "date_respond": {
                                "id": "date_respond",
                                "content": "Дата отклика",
                                "type": "field",
                                "read": true,
                                "dataType": "date"
                            },
                            "salary_text": {
                                "id": "salary_text",
                                "content": "Зарплатная вилка",
                                "type": "field",
                                "read": true,
                                "dataType": "string"
                            },
                            "user_CV": {
                                "id": "user_CV",
                                "content": "Резюме кандидата",
                                "type": "field",
                                "read": true,
                                "dataType": "file"
                            },
                            "user_name": {
                                "id": "user_name",
                                "content": "Имя кандидата",
                                "type": "field",
                                "read": true,
                                "dataType": "string"
                            },
                            "user_photo": {
                                "id": "user_photo",
                                "content": "Фото кандидата",
                                "type": "field",
                                "read": true,
                                "dataType": "file"
                            },
                            "action__23791610105623418": {
                                "id": "action__23791610105623418",
                                "content": "Одобрить",
                                "type": "action"
                            },
                            "action__90591610105714148": {
                                "id": "action__90591610105714148",
                                "content": "Отклонить",
                                "type": "action"
                            },
                            "id": {
                                "id": "id",
                                "content": "id",
                                "type": "field",
                                "read": true,
                                "dataType": "id"
                            },
                            "user_fb": {
                                "id": "user_fb",
                                "content": "Facebook",
                                "type": "field",
                                "read": true,
                                "dataType": "string"
                            },
                            "user_insta": {
                                "id": "user_insta",
                                "content": "Instagram",
                                "type": "field",
                                "read": true,
                                "dataType": "string"
                            },
                            "user_lastName": {
                                "id": "user_lastName",
                                "content": "Фамилия кандидата",
                                "type": "field",
                                "read": true,
                                "dataType": "string"
                            }
                        },
                        "fieldParams": {
                            "date_respond": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "salary_text": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "user_CV": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "user_name": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "user_photo": {
                                "include": true,
                                "fileImageFormat": "circle",
                                "fileImageSize": 200,
                                "fileImage": true
                            },
                            "id": {
                                "include": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "user_fb": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "user_insta": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "user_lastName": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            }
                        },
                        "fieldOrder": [
                            "date_respond",
                            "user_photo",
                            "user_name",
                            "user_lastName",
                            "user_CV",
                            "user_insta",
                            "user_fb",
                            "salary_text",
                            "action__23791610105623418",
                            "action__90591610105714148",
                            "action__13451610105814316",
                            "id"
                        ]
                    },
                    "subHeader": "Новый отклик: "
                },
                "date_created": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "payment_link": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "displayAsButton": true,
                    "button": {
                        "icon": "creditcard",
                        "type": "accent",
                        "title": "Оплатить размещение за 3 999 ₽"
                    }
                },
                "job_status": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "salary_text": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "candidates_quantity": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                }
            },
            "columns": {
                "tab-1": {
                    "id": "tab-1",
                    "title": "Вакансия",
                    "fieldIds": [
                        "date_created",
                        "job_status_message",
                        "payment_link",
                        "job_name",
                        "job_description",
                        "salary_text",
                        "type",
                        "functions_22",
                        "functions_52",
                        "id",
                        "company_in_profile",
                        "connect_instructions",
                        "connect_type",
                        "job_status"
                    ]
                },
                "19801609831206780": {
                    "id": "19801609831206780",
                    "title": "Работодатель",
                    "fieldIds": [
                        "company_name",
                        "company_description",
                        "company_website",
                        "company_city_ids"
                    ]
                },
                "94701609918985017": {
                    "id": "94701609918985017",
                    "title": "Отклики",
                    "fieldIds": [
                        "candidates_quantity",
                        "responds_new_ids",
                        "responds_approved_ids",
                        "responds_declined_ids",
                        "responds_new"
                    ]
                },
                "45871609919735841": {
                    "id": "45871609919735841",
                    "title": "Действия с вакансией",
                    "fieldIds": [
                        "action__40561609919684635"
                    ]
                }
            },
            "columnOrder": [
                "94701609918985017",
                "tab-1",
                "19801609831206780",
                "45871609919735841"
            ],
            "actions": [
                {
                    "sysName": "",
                    "id": "40561609919684635",
                    "name": "Архивировать вакансию",
                    "displayAs": "button",
                    "buttonIcon": "delete",
                    "buttonType": "danger",
                    "closePopup": true,
                    "formMapping": [
                        {
                            "id": "65381609919709047",
                            "target": "id",
                            "type": "objectField",
                            "value": "id"
                        },
                        {
                            "id": "98791609919716151",
                            "target": "job_status",
                            "type": "const",
                            "value": "archived"
                        }
                    ]
                },
                {
                    "sysName": "respondProcessing",
                    "id": "23791610105623418",
                    "name": "Одобрить",
                    "displayAs": "button",
                    "buttonIcon": "done",
                    "buttonType": "accent",
                    "closePopup": true,
                    "callFrom": "linked",
                    "callFromField": "responds_new_ids",
                    "SLtype": "other",
                    "fields": {
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
                                "fieldSysName": "status",
                                "fetch": [],
                                "sysName": "status",
                                "name": "Статус (suggested,new,approved,declined)",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            }
                        ]
                    },
                    "formMapping": [
                        {
                            "id": "82751610105650081",
                            "target": "id",
                            "type": "linkedField",
                            "value": "id"
                        },
                        {
                            "id": "86771610105697488",
                            "target": "status",
                            "type": "const",
                            "value": "approved"
                        }
                    ]
                },
                {
                    "sysName": "respondProcessing",
                    "id": "90591610105714148",
                    "name": "Отклонить",
                    "displayAs": "button",
                    "buttonIcon": "ban",
                    "buttonType": "danger",
                    "closePopup": true,
                    "SLtype": "other",
                    "callFrom": "linked",
                    "callFromField": "responds_new_ids",
                    "fields": {
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
                                "fieldSysName": "status",
                                "fetch": [],
                                "sysName": "status",
                                "name": "Статус (suggested,new,approved,declined)",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            }
                        ]
                    },
                    "formMapping": [
                        {
                            "id": "40881610105737033",
                            "target": "id",
                            "type": "linkedField",
                            "value": "id"
                        },
                        {
                            "id": "91331610105743116",
                            "target": "status",
                            "type": "const",
                            "value": "declined"
                        }
                    ]
                }
            ]
        },
        "fields": {
            "functions_22": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "functions_52": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "id": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "job_description": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false,
                "stringDisplay": "markdown"
            },
            "job_name": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "salary": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false,
                "jsonDisplay": {
                    "type": "range",
                    "unitName": "k ₽",
                    "range": {
                        "min": 0,
                        "max": 300,
                        "step": 10
                    }
                },
                "descriptionFlag": true,
                "description": "Доход в мес, тыс. ₽"
            },
            "type": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "company_city_ids": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "company_in_profile": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "company_name": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "company_website": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "company_description": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "connect_instructions": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "connect_type": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "job_status_message": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false,
                "displayAsHint": true,
                "hintType": "ok"
            },
            "responds_approved_ids": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": true,
                "configureLinkedCard": {
                    "fields": {
                        "date_process": {
                            "id": "date_process",
                            "content": "Дата обработки работодателем",
                            "type": "field",
                            "read": true,
                            "dataType": "date"
                        },
                        "id": {
                            "id": "id",
                            "content": "id",
                            "type": "field",
                            "read": true,
                            "dataType": "id"
                        },
                        "salary_text": {
                            "id": "salary_text",
                            "content": "Зарплатная вилка",
                            "type": "field",
                            "read": true,
                            "dataType": "string"
                        },
                        "user_CV": {
                            "id": "user_CV",
                            "content": "Резюме кандидата",
                            "type": "field",
                            "read": true,
                            "dataType": "file"
                        },
                        "user_lastName": {
                            "id": "user_lastName",
                            "content": "Фамилия кандидата",
                            "type": "field",
                            "read": true,
                            "dataType": "string"
                        },
                        "user_name": {
                            "id": "user_name",
                            "content": "Имя кандидата",
                            "type": "field",
                            "read": true,
                            "dataType": "string"
                        },
                        "user_phone": {
                            "id": "user_phone",
                            "content": "Телефон кандидата",
                            "type": "field",
                            "read": true,
                            "dataType": "string"
                        },
                        "user_photo": {
                            "id": "user_photo",
                            "content": "Фото кандидата",
                            "type": "field",
                            "read": true,
                            "dataType": "file"
                        },
                        "user_telegram": {
                            "id": "user_telegram",
                            "content": "Telegram",
                            "type": "field",
                            "read": true,
                            "dataType": "string"
                        },
                        "Employer_respond": {
                            "id": "Employer_respond",
                            "content": "Ответ работодателя",
                            "type": "field",
                            "read": true,
                            "dataType": "string"
                        },
                        "user_insta": {
                            "id": "user_insta",
                            "content": "Instagram",
                            "type": "field",
                            "read": true,
                            "dataType": "string"
                        },
                        "user_fb": {
                            "id": "user_fb",
                            "content": "Facebook",
                            "type": "field",
                            "read": true,
                            "dataType": "string"
                        }
                    },
                    "fieldParams": {
                        "date_process": {
                            "include": true,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "id": {
                            "include": false,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "salary_text": {
                            "include": true,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "user_CV": {
                            "include": true,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "user_lastName": {
                            "include": true,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "user_name": {
                            "include": true,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "user_phone": {
                            "include": true,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "user_photo": {
                            "include": true,
                            "fileImageFormat": "circle",
                            "fileImageSize": 200,
                            "fileImage": true
                        },
                        "user_telegram": {
                            "include": true,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "Employer_respond": {
                            "include": false,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "user_insta": {
                            "include": true,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "user_fb": {
                            "include": true,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        }
                    },
                    "fieldOrder": [
                        "date_process",
                        "user_photo",
                        "user_name",
                        "user_lastName",
                        "id",
                        "user_CV",
                        "user_insta",
                        "user_fb",
                        "salary_text",
                        "user_phone",
                        "user_telegram",
                        "Employer_respond"
                    ]
                },
                "subHeader": "Одобренный отклик: "
            },
            "responds_declined_ids": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": true,
                "configureLinkedCard": {
                    "fields": {
                        "date_process": {
                            "id": "date_process",
                            "content": "Дата обработки работодателем",
                            "type": "field",
                            "read": true,
                            "dataType": "date"
                        },
                        "user_CV": {
                            "id": "user_CV",
                            "content": "Резюме кандидата",
                            "type": "field",
                            "read": true,
                            "dataType": "file"
                        },
                        "user_name": {
                            "id": "user_name",
                            "content": "Имя кандидата",
                            "type": "field",
                            "read": true,
                            "dataType": "string"
                        },
                        "user_photo": {
                            "id": "user_photo",
                            "content": "Фото кандидата",
                            "type": "field",
                            "read": true,
                            "dataType": "file"
                        },
                        "user_fb": {
                            "id": "user_fb",
                            "content": "Facebook",
                            "type": "field",
                            "read": true,
                            "dataType": "string"
                        },
                        "user_insta": {
                            "id": "user_insta",
                            "content": "Instagram",
                            "type": "field",
                            "read": true,
                            "dataType": "string"
                        },
                        "user_lastName": {
                            "id": "user_lastName",
                            "content": "Фамилия кандидата",
                            "type": "field",
                            "read": true,
                            "dataType": "string"
                        }
                    },
                    "fieldParams": {
                        "date_process": {
                            "include": true,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "user_CV": {
                            "include": true,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "user_name": {
                            "include": true,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "user_photo": {
                            "include": true,
                            "fileImageFormat": "circle",
                            "fileImageSize": 200,
                            "fileImage": true
                        },
                        "user_fb": {
                            "include": true,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "user_insta": {
                            "include": true,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "user_lastName": {
                            "include": true,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        }
                    },
                    "fieldOrder": [
                        "date_process",
                        "user_photo",
                        "user_name",
                        "user_lastName",
                        "user_CV",
                        "user_insta",
                        "user_fb"
                    ]
                },
                "subHeader": "Отклоненный отклик:"
            },
            "responds_new": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "responds_new_ids": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": true,
                "configureLinkedCard": {
                    "fields": {
                        "date_respond": {
                            "id": "date_respond",
                            "content": "Дата отклика",
                            "type": "field",
                            "read": true,
                            "dataType": "date"
                        },
                        "salary_text": {
                            "id": "salary_text",
                            "content": "Зарплатная вилка",
                            "type": "field",
                            "read": true,
                            "dataType": "string"
                        },
                        "user_CV": {
                            "id": "user_CV",
                            "content": "Резюме кандидата",
                            "type": "field",
                            "read": true,
                            "dataType": "file"
                        },
                        "user_name": {
                            "id": "user_name",
                            "content": "Имя кандидата",
                            "type": "field",
                            "read": true,
                            "dataType": "string"
                        },
                        "user_photo": {
                            "id": "user_photo",
                            "content": "Фото кандидата",
                            "type": "field",
                            "read": true,
                            "dataType": "file"
                        },
                        "action__23791610105623418": {
                            "id": "action__23791610105623418",
                            "content": "Одобрить",
                            "type": "action"
                        },
                        "action__90591610105714148": {
                            "id": "action__90591610105714148",
                            "content": "Отклонить",
                            "type": "action"
                        },
                        "id": {
                            "id": "id",
                            "content": "id",
                            "type": "field",
                            "read": true,
                            "dataType": "id"
                        },
                        "user_fb": {
                            "id": "user_fb",
                            "content": "Facebook",
                            "type": "field",
                            "read": true,
                            "dataType": "string"
                        },
                        "user_insta": {
                            "id": "user_insta",
                            "content": "Instagram",
                            "type": "field",
                            "read": true,
                            "dataType": "string"
                        },
                        "user_lastName": {
                            "id": "user_lastName",
                            "content": "Фамилия кандидата",
                            "type": "field",
                            "read": true,
                            "dataType": "string"
                        }
                    },
                    "fieldParams": {
                        "date_respond": {
                            "include": true,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "salary_text": {
                            "include": true,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "user_CV": {
                            "include": true,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "user_name": {
                            "include": true,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "user_photo": {
                            "include": true,
                            "fileImageFormat": "circle",
                            "fileImageSize": 200,
                            "fileImage": true
                        },
                        "id": {
                            "include": false,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "user_fb": {
                            "include": true,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "user_insta": {
                            "include": true,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "user_lastName": {
                            "include": true,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        }
                    },
                    "fieldOrder": [
                        "date_respond",
                        "user_photo",
                        "user_name",
                        "user_lastName",
                        "user_CV",
                        "user_insta",
                        "user_fb",
                        "salary_text",
                        "action__23791610105623418",
                        "action__90591610105714148",
                        "action__13451610105814316",
                        "id"
                    ]
                },
                "subHeader": "Новый отклик: "
            },
            "date_created": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "payment_link": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false,
                "displayAsButton": true,
                "button": {
                    "icon": "creditcard",
                    "type": "accent",
                    "title": "Оплатить размещение за 3 999 ₽"
                }
            },
            "job_status": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "salary_text": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "candidates_quantity": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            }
        },
        "showCounter": true,
        "counterField": "responds_new",
        "counterText": "новых откликов",
        "actions": [
            {
                "sysName": "",
                "id": "40561609919684635",
                "name": "Архивировать вакансию",
                "displayAs": "button",
                "buttonIcon": "delete",
                "buttonType": "danger",
                "closePopup": true,
                "formMapping": [
                    {
                        "id": "65381609919709047",
                        "target": "id",
                        "type": "objectField",
                        "value": "id"
                    },
                    {
                        "id": "98791609919716151",
                        "target": "job_status",
                        "type": "const",
                        "value": "archived"
                    }
                ]
            },
            {
                "sysName": "respondProcessing",
                "id": "23791610105623418",
                "name": "Одобрить",
                "displayAs": "button",
                "buttonIcon": "done",
                "buttonType": "accent",
                "closePopup": true,
                "callFrom": "linked",
                "callFromField": "responds_new_ids",
                "SLtype": "other",
                "fields": {
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
                            "fieldSysName": "status",
                            "fetch": [],
                            "sysName": "status",
                            "name": "Статус (suggested,new,approved,declined)",
                            "dataType": "string",
                            "format": "",
                            "formatOptions": {},
                            "link": ""
                        }
                    ]
                },
                "formMapping": [
                    {
                        "id": "82751610105650081",
                        "target": "id",
                        "type": "linkedField",
                        "value": "id"
                    },
                    {
                        "id": "86771610105697488",
                        "target": "status",
                        "type": "const",
                        "value": "approved"
                    }
                ]
            },
            {
                "sysName": "respondProcessing",
                "id": "90591610105714148",
                "name": "Отклонить",
                "displayAs": "button",
                "buttonIcon": "ban",
                "buttonType": "danger",
                "closePopup": true,
                "SLtype": "other",
                "callFrom": "linked",
                "callFromField": "responds_new_ids",
                "fields": {
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
                            "fieldSysName": "status",
                            "fetch": [],
                            "sysName": "status",
                            "name": "Статус (suggested,new,approved,declined)",
                            "dataType": "string",
                            "format": "",
                            "formatOptions": {},
                            "link": ""
                        }
                    ]
                },
                "formMapping": [
                    {
                        "id": "40881610105737033",
                        "target": "id",
                        "type": "linkedField",
                        "value": "id"
                    },
                    {
                        "id": "91331610105743116",
                        "target": "status",
                        "type": "const",
                        "value": "declined"
                    }
                ]
            }
        ]
    },
    "tableTitle": "👩🏻‍🎨 Активные вакансии",
    "actions": null,
    "headers": [
        {
            "sysName": "candidates_quantity",
            "dataType": "number",
            "name": "Количество подходящих профилей кандидатов",
            "id": "12591609943959558",
            "link": "",
            "group": "1609920960347",
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
            "typeVariable": {},
            "arrayLink": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "json": false
        },
        {
            "sysName": "company_city_ids",
            "dataType": "arrayLink",
            "name": "Город(а) работодателя",
            "id": "10281607944727109",
            "link": "cities",
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
            "arrayLink": true,
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": false,
            "json": false
        },
        {
            "sysName": "company_description",
            "dataType": "string",
            "name": "Описание компании работодателя",
            "id": "17331609671162114",
            "link": "",
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 11,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": "markdown",
            "formatOptions": null,
            "groupName": null,
            "typeVariable": {},
            "arrayLink": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "json": false
        },
        {
            "sysName": "company_in_profile",
            "dataType": "boolean",
            "name": "Работодатель",
            "id": "33951607944479971",
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
                "booleanOptions": [
                    "Указан в моем профиле работодателя",
                    "Другая компания"
                ],
                "customOptionPlaceholder": "Describe your option",
                "range": {},
                "customOptionType": "textarea"
            },
            "groupName": null,
            "typeVariable": {},
            "arrayLink": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "json": false
        },
        {
            "sysName": "company_name",
            "dataType": "string",
            "name": "Название компании работодателя",
            "id": "22051607944259558",
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
            "typeVariable": {},
            "arrayLink": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "json": false
        },
        {
            "sysName": "company_website",
            "dataType": "string",
            "name": "Сайт работодателя",
            "id": "76091607944603531",
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
            "format": "webLink",
            "formatOptions": {},
            "groupName": null,
            "typeVariable": {},
            "arrayLink": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "json": false
        },
        {
            "sysName": "connect_instructions",
            "dataType": "string",
            "name": "Инструкции для связи кандидату",
            "id": "64711607948185707",
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
            "formatOptions": {},
            "groupName": null,
            "typeVariable": {},
            "arrayLink": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "json": false
        },
        {
            "sysName": "connect_type",
            "dataType": "boolean",
            "name": "Способ связи с кандидатом",
            "id": "65731607948157836",
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
                "booleanOptions": [
                    "Выслать кандидату мой телеграм",
                    "Другой способ"
                ],
                "customOptionPlaceholder": "Describe your option",
                "range": {},
                "customOptionType": "textarea"
            },
            "groupName": null,
            "typeVariable": {},
            "arrayLink": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "json": false
        },
        {
            "sysName": "date_created",
            "dataType": "date",
            "name": "Дата размещения вакансии",
            "id": "76531609833917406",
            "link": "",
            "group": "1609833907682",
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
            "arrayLink": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "json": false
        },
        {
            "sysName": "functions_22",
            "dataType": "arrayLink",
            "name": "Функции 2/2",
            "id": "82251607941755646",
            "link": "functions22",
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
            "arrayLink": true,
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": false,
            "json": false
        },
        {
            "sysName": "functions_52",
            "dataType": "arrayLink",
            "name": "Функции 5/2",
            "id": "67731607941768628",
            "link": "functions52",
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
            "typeVariable": {},
            "arrayLink": true,
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": false,
            "json": false
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
            "typeVariable": {},
            "arrayLink": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "json": false
        },
        {
            "sysName": "job_description",
            "dataType": "string",
            "name": "Описание вакансии",
            "id": "74961607943694679",
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
            "typeVariable": {},
            "arrayLink": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "json": false
        },
        {
            "sysName": "job_name",
            "dataType": "string",
            "name": "Название вакансии",
            "id": "93071607941686773",
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
            "typeVariable": {},
            "arrayLink": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "json": false
        },
        {
            "sysName": "job_status_message",
            "dataType": "string",
            "name": "Статус вакансии",
            "id": "30881609826436336",
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
            "typeVariable": {},
            "arrayLink": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "json": false
        },
        {
            "sysName": "payment_link",
            "dataType": "string",
            "name": "Оплатить размещение",
            "id": "29021609872910913",
            "link": "",
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 17,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": "webLink",
            "formatOptions": null,
            "groupName": null,
            "typeVariable": {},
            "arrayLink": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "json": false
        },
        {
            "sysName": "responds_approved_ids",
            "dataType": "arrayLink",
            "name": "✅ Одобренные отклики",
            "id": "67331609830708204",
            "link": "Responds",
            "group": "1609753049831",
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
            "typeVariable": {},
            "arrayLink": true,
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": false,
            "json": false
        },
        {
            "sysName": "responds_declined_ids",
            "dataType": "arrayLink",
            "name": "🚫 Отклоненные отклики",
            "id": "19311609830709019",
            "link": "Responds",
            "group": "1609753049831",
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
            "arrayLink": true,
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": false,
            "json": false
        },
        {
            "sysName": "responds_new",
            "dataType": "number",
            "name": "Новых откликов",
            "id": "59481609753074292",
            "link": "",
            "group": "1609753049831",
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
            "typeVariable": {},
            "arrayLink": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "json": false
        },
        {
            "sysName": "responds_new_ids",
            "dataType": "arrayLink",
            "name": "🙋‍♂️ Новые отклики",
            "id": "52651609830657074",
            "link": "Responds",
            "group": "1609753049831",
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
            "arrayLink": true,
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": false,
            "json": false
        },
        {
            "sysName": "salary_text",
            "dataType": "string",
            "name": "Зарплатная вилка",
            "id": "68241609919064693",
            "link": null,
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 18,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "typeVariable": {},
            "arrayLink": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "json": false
        },
        {
            "sysName": "type",
            "dataType": "link",
            "name": "График",
            "id": "82641607941710823",
            "link": "Type2252",
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
            "arrayLink": false,
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "json": false
        }
    ],
    "data": [
        {
            "salary_text": "От 60k ₽ до 160k ₽",
            "date_created": 1610126592000,
            "connect_instructions": "позвони мне позвони",
            "company_name": "Tesla",
            "company_city_ids": [
                {
                    "name": "Другой город / за пределами РФ",
                    "id": "other"
                }
            ],
            "job_name": "Хостесс",
            "functions_52": [
                {
                    "name": "IT",
                    "id": "57816d4e-5d1a-4240-8eda-0041ccdc3d55"
                }
            ],
            "connect_type": false,
            "candidates_quantity": 1,
            "job_status_message": "Активная вакансия",
            "job_description": "### Требования \n- один\n- два\n- три\n\n### Обязанности\n- один\n- два\n- три\n\n### Условия \n- один\n- два\n- три",
            "id": "a2017a31-5da3-438c-a352-ac4b5ddf5892",
            "company_description": "Делаем электрокары\n\n- 1\n- 2",
            "responds_new_ids": [
                {
                    "salary_text": "От 60k ₽ до 160k ₽",
                    "user_photo": "https://api.alfa.directual.com/fileUploaded/vitrina2252/36a095fd-d824-4cda-aaf8-ee56c9fc316b.jpg",
                    "date_respond": 1610127689000,
                    "user_CV": "https://api.alfa.directual.com/fileUploaded/vitrina2252/43745852-bd2b-403a-bd2b-9da780a1034b.pdf",
                    "user_lastName": "Ershov",
                    "user_insta": "https://www.instagram.com/pavelers/",
                    "id": "c21ef2fa17f041518c75652e8d4199ba",
                    "user_name": "Pavel"
                }
            ],
            "responds_new": 1,
            "company_in_profile": true,
            "type": {
                "id": "52",
                "type": "график 5 через 2"
            },
            "company_website": "tesla.com",
            "job_status": ""
        },
        {
            "salary_text": "От 40k ₽ до 120k ₽",
            "date_created": 1610121667000,
            "connect_instructions": "позвони мне позвони",
            "company_name": "Tesla",
            "company_city_ids": [
                {
                    "name": "Другой город / за пределами РФ",
                    "id": "other"
                }
            ],
            "job_name": "хостес",
            "functions_52": [
                {
                    "name": "IT",
                    "id": "57816d4e-5d1a-4240-8eda-0041ccdc3d55"
                },
                {
                    "name": "Events",
                    "id": "f458982e-0569-4006-8c7a-edef0d59bc07"
                }
            ],
            "connect_type": false,
            "candidates_quantity": 1,
            "job_status_message": "Активная вакансия",
            "responds_approved_ids": [],
            "job_description": "### Требования \n- один\n- два\n- три\n\n### Обязанности\n- один\n- два\n- три\n\n### Условия \n- один\n- два\n- три",
            "id": "44442563-ddd5-47b8-b707-4132234783d6",
            "company_description": "Делаем электрокары\n\n- 1\n- 2",
            "responds_new_ids": [],
            "functions_22": [],
            "responds_new": 0,
            "company_in_profile": true,
            "type": {
                "id": "52",
                "type": "график 5 через 2"
            },
            "company_website": "tesla.com",
            "responds_declined_ids": [
                {
                    "user_photo": "https://api.alfa.directual.com/fileUploaded/vitrina2252/36a095fd-d824-4cda-aaf8-ee56c9fc316b.jpg",
                    "date_process": 1610121840000,
                    "user_CV": "https://api.alfa.directual.com/fileUploaded/vitrina2252/43745852-bd2b-403a-bd2b-9da780a1034b.pdf",
                    "user_lastName": "Ershov",
                    "user_insta": "https://www.instagram.com/pavelers/",
                    "id": "25ab9424e74f1a81df0ba51b7163f85c",
                    "user_name": "Pavel"
                }
            ],
            "job_status": ""
        },
        {
            "salary_text": "От 40k ₽ до 120k ₽",
            "date_created": 1610121665000,
            "company_name": "Tesla",
            "company_city_ids": [
                {
                    "name": "Другой город / за пределами РФ",
                    "id": "other"
                }
            ],
            "job_name": "ветеринар",
            "connect_type": true,
            "job_status_message": "Активная вакансия",
            "job_description": "### Требования \n- один\n- два\n- три\n\n### Обязанности\n- один\n- два\n- три\n\n### Условия \n- один\n- два\n- три",
            "id": "2293d8d0-6238-48e1-ba2f-f9141993e0d3",
            "company_description": "Делаем электрокары\n\n- 1\n- 2",
            "functions_22": [
                {
                    "name": "Повар",
                    "id": "cf10904f-55e2-4678-8b88-3f01f70b8308"
                }
            ],
            "company_in_profile": true,
            "type": {
                "id": "22",
                "type": "график 2 через 2"
            },
            "company_website": "tesla.com",
            "job_status": ""
        }
    ],
    "totalPages": 1,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [
        [
            "candidates_quantity",
            1330971
        ],
        [
            "company_city_ids.id",
            1330972
        ],
        [
            "company_city_ids.name",
            1330972
        ],
        [
            "company_description",
            1330971
        ],
        [
            "company_in_profile",
            1330971
        ],
        [
            "company_name",
            1330971
        ],
        [
            "company_website",
            1330971
        ],
        [
            "connect_instructions",
            1330971
        ],
        [
            "connect_type",
            1330971
        ],
        [
            "date_created",
            1330971
        ],
        [
            "functions_22.id",
            1330974
        ],
        [
            "functions_22.name",
            1330974
        ],
        [
            "functions_52.id",
            1330975
        ],
        [
            "functions_52.name",
            1330975
        ],
        [
            "id",
            1330971
        ],
        [
            "job_description",
            1330971
        ],
        [
            "job_name",
            1330971
        ],
        [
            "job_status_message",
            1330971
        ],
        [
            "payment_link",
            1330971
        ],
        [
            "responds_approved_ids.Employer_respond",
            1332190
        ],
        [
            "responds_approved_ids.date_process",
            1332190
        ],
        [
            "responds_approved_ids.id",
            1332190
        ],
        [
            "responds_approved_ids.salary_text",
            1332190
        ],
        [
            "responds_approved_ids.user_CV",
            1332190
        ],
        [
            "responds_approved_ids.user_fb",
            1332190
        ],
        [
            "responds_approved_ids.user_insta",
            1332190
        ],
        [
            "responds_approved_ids.user_lastName",
            1332190
        ],
        [
            "responds_approved_ids.user_name",
            1332190
        ],
        [
            "responds_approved_ids.user_phone",
            1332190
        ],
        [
            "responds_approved_ids.user_photo",
            1332190
        ],
        [
            "responds_approved_ids.user_telegram",
            1332190
        ],
        [
            "responds_declined_ids.date_process",
            1332190
        ],
        [
            "responds_declined_ids.user_CV",
            1332190
        ],
        [
            "responds_declined_ids.user_fb",
            1332190
        ],
        [
            "responds_declined_ids.user_insta",
            1332190
        ],
        [
            "responds_declined_ids.user_lastName",
            1332190
        ],
        [
            "responds_declined_ids.user_name",
            1332190
        ],
        [
            "responds_declined_ids.user_photo",
            1332190
        ],
        [
            "responds_new",
            1330971
        ],
        [
            "responds_new_ids.date_respond",
            1332190
        ],
        [
            "responds_new_ids.id",
            1332190
        ],
        [
            "responds_new_ids.salary_text",
            1332190
        ],
        [
            "responds_new_ids.user_CV",
            1332190
        ],
        [
            "responds_new_ids.user_fb",
            1332190
        ],
        [
            "responds_new_ids.user_insta",
            1332190
        ],
        [
            "responds_new_ids.user_lastName",
            1332190
        ],
        [
            "responds_new_ids.user_name",
            1332190
        ],
        [
            "responds_new_ids.user_photo",
            1332190
        ],
        [
            "salary_text",
            1330971
        ],
        [
            "type.id",
            1330973
        ],
        [
            "type.type",
            1330973
        ]
    ],
    "writeFields": [
        "id",
        "job_status"
    ],
    "structures": {
        "1330971": {
            "id": 1330971,
            "dateCreated": "2020-12-14T10:27:24Z",
            "hidden": false,
            "dateHidden": null,
            "networkID": 4265,
            "name": "Вакансии",
            "sysName": "Jobs",
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"company_city_ids\",\"dataType\":\"arrayLink\",\"name\":\"Город(а) работодателя\",\"id\":\"10281607944727109\",\"link\":\"cities\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":true,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"json\":false},{\"sysName\":\"candidates_quantity\",\"dataType\":\"number\",\"name\":\"Количество подходящих профилей кандидатов\",\"id\":\"12591609943959558\",\"link\":\"\",\"group\":\"1609920960347\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"job_status\",\"dataType\":\"string\",\"name\":\"Статус (техническое поле)\",\"id\":\"14461609825098470\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"salary\",\"dataType\":\"json\",\"name\":\"Зарплатная вилка\",\"id\":\"15401607941726857\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"rangeSlider\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"unitName\":\"k ₽\",\"booleanOptions\":[\"True\",\"False\"],\"customOptionPlaceholder\":\"Describe your option\",\"range\":{\"min\":20,\"max\":300,\"step\":10},\"customOptionType\":\"textarea\"},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":true},{\"sysName\":\"company_description\",\"dataType\":\"string\",\"name\":\"Описание компании работодателя\",\"id\":\"17331609671162114\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"responds_declined_ids\",\"dataType\":\"arrayLink\",\"name\":\"🚫 Отклоненные отклики\",\"id\":\"19311609830709019\",\"link\":\"Responds\",\"group\":\"1609753049831\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":true,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"json\":false},{\"sysName\":\"company_name\",\"dataType\":\"string\",\"name\":\"Название компании работодателя\",\"id\":\"22051607944259558\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"payment_link\",\"dataType\":\"string\",\"name\":\"Оплатить размещение\",\"id\":\"29021609872910913\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":17,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"job_status_message\",\"dataType\":\"string\",\"name\":\"Статус вакансии\",\"id\":\"30881609826436336\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":16,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"company_in_profile\",\"dataType\":\"boolean\",\"name\":\"Работодатель\",\"id\":\"33951607944479971\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"booleanOptions\":[\"Указан в моем профиле работодателя\",\"Другая компания\"],\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\"},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"user_id\",\"dataType\":\"link\",\"name\":\"Пользователь, разместивший вакансию\",\"id\":\"41481607941663169\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"json\":false},{\"sysName\":\"responds_new_ids\",\"dataType\":\"arrayLink\",\"name\":\"🙋‍♂️ Новые отклики\",\"id\":\"52651609830657074\",\"link\":\"Responds\",\"group\":\"1609753049831\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":true,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"json\":false},{\"sysName\":\"user_editor_id\",\"dataType\":\"link\",\"name\":\"Кто внес изменение\",\"id\":\"55761609867584495\",\"link\":\"WebUser\",\"group\":\"1609833907682\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"json\":false},{\"sysName\":\"responds_new\",\"dataType\":\"number\",\"name\":\"Новых откликов\",\"id\":\"59481609753074292\",\"link\":\"\",\"group\":\"1609753049831\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"connect_instructions\",\"dataType\":\"string\",\"name\":\"Инструкции для связи кандидату\",\"id\":\"64711607948185707\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"connect_type\",\"dataType\":\"boolean\",\"name\":\"Способ связи с кандидатом\",\"id\":\"65731607948157836\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"booleanOptions\":[\"Выслать кандидату мой телеграм\",\"Другой способ\"],\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\"},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"responds_approved_ids\",\"dataType\":\"arrayLink\",\"name\":\"✅ Одобренные отклики\",\"id\":\"67331609830708204\",\"link\":\"Responds\",\"group\":\"1609753049831\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":true,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"json\":false},{\"sysName\":\"functions_52\",\"dataType\":\"arrayLink\",\"name\":\"Функции 5/2\",\"id\":\"67731607941768628\",\"link\":\"functions52\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":true,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"json\":false},{\"sysName\":\"salary_text\",\"dataType\":\"string\",\"name\":\"Зарплатная вилка\",\"id\":\"68241609919064693\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":18,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"job_description\",\"dataType\":\"string\",\"name\":\"Описание вакансии\",\"id\":\"74961607943694679\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"responds_total\",\"dataType\":\"number\",\"name\":\"Всего откликов\",\"id\":\"74961609753055250\",\"link\":\"\",\"group\":\"1609753049831\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"company_website\",\"dataType\":\"string\",\"name\":\"Сайт работодателя\",\"id\":\"76091607944603531\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"date_created\",\"dataType\":\"date\",\"name\":\"Дата размещения вакансии\",\"id\":\"76531609833917406\",\"link\":\"\",\"group\":\"1609833907682\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"functions_22\",\"dataType\":\"arrayLink\",\"name\":\"Функции 2/2\",\"id\":\"82251607941755646\",\"link\":\"functions22\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":true,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"json\":false},{\"sysName\":\"type\",\"dataType\":\"link\",\"name\":\"График\",\"id\":\"82641607941710823\",\"link\":\"Type2252\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"json\":false},{\"sysName\":\"candidates_ids\",\"dataType\":\"arrayLink\",\"name\":\"Подходящие кандидаты\",\"id\":\"89551609920966036\",\"link\":\"WebUser\",\"group\":\"1609920960347\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"arrayLink\":true,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"json\":false},{\"sysName\":\"job_name\",\"dataType\":\"string\",\"name\":\"Название вакансии\",\"id\":\"93071607941686773\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false}]",
            "jsonGroupSettings": "[{\"name\":\"Отклики\",\"id\":1609753049831,\"order\":0},{\"name\":\"Timeline\",\"id\":1609833907682,\"order\":1},{\"name\":\"Matching\",\"id\":1609920960347,\"order\":2}]",
            "jsonViewIdSettings": "[{\"sysName\":\"job_name\"},{\"sysName\":\"company_name\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2021-01-08T12:43:06Z",
            "createBy": 21,
            "changedBy": 21,
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
                "arrayLink": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "json": false
            },
            "objectIDSysName": "id",
            "folderId": 33596511
        },
        "1330972": {
            "id": 1330972,
            "dateCreated": "2020-09-18T07:42:27Z",
            "hidden": false,
            "dateHidden": null,
            "networkID": 4265,
            "name": "Cities",
            "sysName": "cities",
            "jsonObject": "[{\"sysName\":\"@who\",\"dataType\":\"string\",\"name\":\"who changed\",\"id\":\"-1\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"@dateCreated\",\"dataType\":\"date\",\"name\":\"date created\",\"id\":\"-2\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"@dateChanged\",\"dataType\":\"date\",\"name\":\"date changed\",\"id\":\"-3\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"name\",\"dataType\":\"string\",\"name\":\"City name\",\"id\":\"64661600414975068\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"json\":false,\"indexExists\":false}]",
            "jsonGroupSettings": "[]",
            "jsonViewIdSettings": "[{\"sysName\":\"name\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":false,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": false,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2020-09-28T12:47:19Z",
            "createBy": 1,
            "changedBy": 21,
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
                "formatOptions": null,
                "groupName": null,
                "typeVariable": {},
                "arrayLink": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "json": false
            },
            "objectIDSysName": "id",
            "folderId": 33596509
        },
        "1330973": {
            "id": 1330973,
            "dateCreated": "2020-12-04T08:33:52Z",
            "hidden": false,
            "dateHidden": null,
            "networkID": 4265,
            "name": "Тип: 22 / 52",
            "sysName": "Type2252",
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"type\",\"name\":\"Тип работы\",\"dataType\":\"string\",\"id\":\"42681607070870540\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"@who\",\"name\":\"who changed\",\"dataType\":\"string\",\"id\":\"-1\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"@dateCreated\",\"name\":\"date created\",\"dataType\":\"date\",\"id\":\"-2\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"@dateChanged\",\"name\":\"date changed\",\"dataType\":\"date\",\"id\":\"-3\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"type\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": false,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2020-12-04T08:36:05Z",
            "createBy": 1,
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
                "formatOptions": null,
                "groupName": null,
                "typeVariable": {},
                "arrayLink": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "json": false
            },
            "objectIDSysName": "id",
            "folderId": 33596509
        },
        "1330974": {
            "id": 1330974,
            "dateCreated": "2020-12-04T10:19:23Z",
            "hidden": false,
            "dateHidden": null,
            "networkID": 4265,
            "name": "Функции 22",
            "sysName": "functions22",
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"name\",\"name\":\"Функция\",\"dataType\":\"string\",\"id\":\"83101607077166818\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"isDelete\",\"name\":\"\",\"dataType\":\"boolean\",\"id\":\"96931607077672366\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"@who\",\"name\":\"who changed\",\"dataType\":\"string\",\"id\":\"-1\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"@dateCreated\",\"name\":\"date created\",\"dataType\":\"date\",\"id\":\"-2\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"@dateChanged\",\"name\":\"date changed\",\"dataType\":\"date\",\"id\":\"-3\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"name\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2020-12-04T10:30:14Z",
            "createBy": 1,
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
                "formatOptions": null,
                "groupName": null,
                "typeVariable": {},
                "arrayLink": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "json": false
            },
            "objectIDSysName": "id",
            "folderId": 33596509
        },
        "1330975": {
            "id": 1330975,
            "dateCreated": "2020-12-04T10:19:52Z",
            "hidden": false,
            "dateHidden": null,
            "networkID": 4265,
            "name": "Функции 52",
            "sysName": "functions52",
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"isDelete\",\"name\":\"\",\"dataType\":\"boolean\",\"id\":\"21621607077688079\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"name\",\"name\":\"Функция\",\"dataType\":\"string\",\"id\":\"83101607077166818\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"@who\",\"name\":\"who changed\",\"dataType\":\"string\",\"id\":\"-1\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"@dateCreated\",\"name\":\"date created\",\"dataType\":\"date\",\"id\":\"-2\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"@dateChanged\",\"name\":\"date changed\",\"dataType\":\"date\",\"id\":\"-3\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"name\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2020-12-04T10:28:14Z",
            "createBy": 1,
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
                "formatOptions": null,
                "groupName": null,
                "typeVariable": {},
                "arrayLink": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "json": false
            },
            "objectIDSysName": "id",
            "folderId": 33596509
        },
        "1332190": {
            "id": 1332190,
            "dateCreated": "2021-01-04T09:40:26Z",
            "hidden": false,
            "dateHidden": null,
            "networkID": 4265,
            "name": "Отклики",
            "sysName": "Responds",
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"job_id\",\"dataType\":\"link\",\"name\":\"Вакансия\",\"id\":\"17681609753231539\",\"link\":\"Jobs\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"json\":false},{\"sysName\":\"jobCompany\",\"dataType\":\"string\",\"name\":\"Название компании работодателя\",\"id\":\"18201609753320275\",\"link\":\"\",\"group\":\"1609753298511\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"user_telegram\",\"dataType\":\"string\",\"name\":\"Telegram\",\"id\":\"18501610096811464\",\"link\":\"\",\"group\":\"1610096745541\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"user_photo\",\"dataType\":\"file\",\"name\":\"Фото кандидата\",\"id\":\"19891610104119331\",\"link\":\"\",\"group\":\"1610096745541\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"jobType\",\"dataType\":\"link\",\"name\":\"График\",\"id\":\"21591609753362987\",\"link\":\"Type2252\",\"group\":\"1609753298511\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"json\":false},{\"sysName\":\"date_created\",\"dataType\":\"date\",\"name\":\"Дата подбора вакансии\",\"id\":\"22671609753618893\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"user_id\",\"dataType\":\"link\",\"name\":\"Кандидат\",\"id\":\"30541609753246985\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"json\":false},{\"sysName\":\"user_CV\",\"dataType\":\"file\",\"name\":\"Резюме кандидата\",\"id\":\"42111610096763643\",\"link\":\"\",\"group\":\"1610096745541\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"jobFunctions22\",\"dataType\":\"arrayLink\",\"name\":\"Функции\",\"id\":\"45431609753369136\",\"link\":\"functions22\",\"group\":\"1609753298511\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":true,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"json\":false},{\"sysName\":\"jobName\",\"dataType\":\"string\",\"name\":\"Название вакансии\",\"id\":\"51461609753306387\",\"link\":\"\",\"group\":\"1609753298511\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"date_process\",\"dataType\":\"date\",\"name\":\"Дата обработки работодателем\",\"id\":\"62351609753664330\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"user_name\",\"dataType\":\"string\",\"name\":\"Имя кандидата\",\"id\":\"62681610095241918\",\"link\":\"\",\"group\":\"1610096745541\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"jobCompanySite\",\"dataType\":\"string\",\"name\":\"Сайт работодателя\",\"id\":\"63091609753320998\",\"link\":\"\",\"group\":\"1609753298511\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"jobCompanyCity\",\"dataType\":\"arrayLink\",\"name\":\"Город(а) работодателя\",\"id\":\"67721609753322261\",\"link\":\"cities\",\"group\":\"1609753298511\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":true,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"json\":false},{\"sysName\":\"date_respond\",\"dataType\":\"date\",\"name\":\"Дата отклика\",\"id\":\"68381609753647773\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"jobCompanyDesc\",\"dataType\":\"string\",\"name\":\"Описание компании работодателя\",\"id\":\"70501609753347877\",\"link\":\"\",\"group\":\"1609753298511\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"user_insta\",\"dataType\":\"string\",\"name\":\"Instagram\",\"id\":\"73291610114557556\",\"link\":\"\",\"group\":\"1610096745541\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"user_fb\",\"dataType\":\"string\",\"name\":\"Facebook\",\"id\":\"76181610114558163\",\"link\":\"\",\"group\":\"1610096745541\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"jobFunctions52\",\"dataType\":\"arrayLink\",\"name\":\"Функции\",\"id\":\"77141609753455553\",\"link\":\"functions52\",\"group\":\"1609753298511\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":true,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"json\":false},{\"sysName\":\"jobDescription\",\"dataType\":\"string\",\"name\":\"Описание вакансии\",\"id\":\"87151609753355684\",\"link\":\"\",\"group\":\"1609753298511\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"user_phone\",\"dataType\":\"string\",\"name\":\"Телефон кандидата\",\"id\":\"87451610096826236\",\"link\":\"\",\"group\":\"1610096745541\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"phone\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"salary_text\",\"dataType\":\"string\",\"name\":\"Зарплатная вилка\",\"id\":\"87951609753577950\",\"link\":\"\",\"group\":\"1609753298511\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"status\",\"dataType\":\"string\",\"name\":\"Статус (suggested,new,approved,declined)\",\"id\":\"91021609753267495\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"Employer_respond\",\"dataType\":\"string\",\"name\":\"Ответ работодателя\",\"id\":\"91271610110441320\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"user_lastName\",\"dataType\":\"string\",\"name\":\"Фамилия кандидата\",\"id\":\"93431610096794050\",\"link\":\"\",\"group\":\"1610096745541\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"json\":false}]",
            "jsonGroupSettings": "[{\"id\":1609753298511,\"name\":\"Описание вакансии\",\"order\":0},{\"id\":1610096745541,\"name\":\" Инфо о кандидате\",\"order\":1}]",
            "jsonViewIdSettings": "[{\"sysName\":\"jobName\"},{\"sysName\":\"jobCompany\"},{\"sysName\":\"user_name\"},{\"sysName\":\"user_lastName\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2021-01-08T14:03:05Z",
            "createBy": 1,
            "changedBy": 21,
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
                "arrayLink": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "json": false
            },
            "objectIDSysName": "id",
            "folderId": 33596511
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
            "arrayLink": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "json": false
        },
        {
            "sysName": "job_status",
            "dataType": "string",
            "name": "Статус (техническое поле)",
            "id": "14461609825098470",
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
            "format": null,
            "formatOptions": {},
            "groupName": null,
            "typeVariable": {},
            "arrayLink": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "json": false
        }
    ]
}


const layoutExample =
    [
        {
            id: 'section1',
            columns: [
                {
                    id: 'column1',
                    content: <div>col 1</div>,
                    width: '30%'
                },
                {
                    id: 'column2',
                    content: <div>col 2</div>,
                    width: '70%'
                }
            ]
        },
        {
            id: 'section2',
            columns: [
                {
                    id: 'column1',
                    content: <div>col 1</div>,
                    width: '100%'
                }
            ]
        },
        {
            id: 'section3',
            columns: [
                {
                    id: 'column1',
                    content: <div>col 1</div>,
                    width: '20%'
                },
                {
                    id: 'column2',
                    content: <div>col 2</div>,
                    width: '40%'
                },
                {
                    id: 'column3',
                    content: <div>col 3</div>,
                    width: '40%'
                }
            ]
        }
    ]


export function FpsLayout(props) {

    const addSection = (beforeSectionId) => {
        console.log('add section')
        console.log(beforeSectionId)
    }

    const deleteSection = (sectionId) => {

    }

    const [layout, setLayout] = useState(layoutExample)

    const onDragEnd = result => {
        console.log('dnd result')
        console.log(result)
    }
    return (
        <React.Fragment>
            <DragDropContext
                onDragEnd={onDragEnd}>
                <div className={styles.layoutWrapper}>
                    <div className={`${styles.fpsLayout}`} >
                        {layout.map((section, index) =>
                            <Section key={section.id} section={section} index={index} addSection={addSection} />
                        )}
                        <AddSection onClick={() => addSection('last')} />
                    </div>
                    <Settings />
                </div>
            </DragDropContext>
        </React.Fragment>)
}

function Section(props) {
    return (
        <React.Fragment>
            <AddSection onClick={() => props.addSection(props.section.id)} />
            <Droppable droppableId={props.section.id} type="columns">
                {(provided) => (
                    <div className={`${styles.section}`}
                        ref={provided.innerRef}
                        {...provided.droppableProps}>
                        <div className={styles.sectionColumns}>
                            {props.section.columns.map((column, index) => <Column column={column} index={index} key={column.id} />)}
                        </div>
                        <div className={styles.sectionSettings}>
                            <div className={`icon icon-details ${styles.sectionAction} ${styles.sectionDnd}`} />
                            <div className={`icon icon-settings ${styles.sectionAction}`} />
                        </div>
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </React.Fragment>
    )
}

function Column(props) {
    return <Draggable draggableId={props.column.id} index={props.index}>
        {(provided) => (<div className={styles.column}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}>
            {props.column.id}
        </div>)}
    </Draggable>
    //     {/* <div className={styles.overlayer} /> */}
}

function AddSection(props) {
    return <div className={`${styles.addSection}`}
        onClick={e => { e.preventDefault(); props.onClick && props.onClick() }}>
        <div className={styles.addSectionFill} />
        <div className={`icon icon-plus ${styles.plus}`} />
    </div>
}

function Settings(props) {
    return <div className={styles.layoutSettings}>
        <h3>Settings</h3>
        <p>Nothing is selected</p>
    </div>
}
