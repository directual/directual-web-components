import React, { useState } from 'react'
import { FpsCards, FpsForm, Tree, Button, TabsPane } from 'directual-web-components'


export default function LayoutPage() {

    // const layoutExample = {
    //     "showHeader": true,
    //     "header": "Books!!",
    //     "tabs": [
    //         {
    //             "id": "tab_01",
    //             "title": "Tab 1"
    //         },
    //         // {
    //         //     "id": "tab_1616786206244",
    //         //     "title": "Tab 2"
    //         // },
    //         // {
    //         //     "id": "tab_3",
    //         //     "title": "Tab 3"
    //         // }
    //     ],
    //     "sections": {
    //         "tab_01": [
    //             {
    //                 "id": "section_610a56c4-3",
    //                 "tab": "tab_01",
    //                 "flexDirection": {
    //                     "mobile": "column",
    //                     "tablet": "column",
    //                     "desktop": "row"
    //                 },
    //                 "columns": [
    //                     {
    //                         "size": 60,
    //                         "id": "column_610a56c4-3",
    //                         "content": {
    //                             "clazz": "FpsCards",
    //                             "id": "610a56c4-39e4-f75b-98e5-9d79bf3b583a"
    //                         },
    //                         "render": (currentBP) => <FpsCards data={dataCards} currentBP={currentBP} />
    //                     },
    //                     {
    //                         "id": "column_161678617914a",
    //                         "content": {
    //                             "clazz": "FpsForm",
    //                             "id": "comp_161678618231a"
    //                         },
    //                         "size": 40,
    //                         "render": (currentBP) => <FpsCards data={dataCards} currentBP={currentBP} />
    //                     }
    //                 ]
    //             },
    //             {
    //                 "id": "section_1616786179144",
    //                 "tab": "tab_01",
    //                 "columns": [
    //                     {
    //                         "id": "column_1616786179144",
    //                         "content": {
    //                             "clazz": "FpsForm",
    //                             "id": "comp_1616786182315"
    //                         },
    //                         "size": 50,
    //                         "render": (currentBP) => <FpsForm data={dataForm} currentBP={currentBP} />
    //                     },
    //                     {
    //                         "id": "column_1616786202461",
    //                         "content": null,
    //                         "size": 50,
    //                         "render": (currentBP) => <div>{currentBP}</div>
    //                     }
    //                 ],
    //                 "flexDirection": {
    //                     "mobile": "column",
    //                     "tablet": "row",
    //                     "desktop": "row"
    //                 }
    //             }
    //         ],
    //         "tab_1616786206244": [
    //             {
    //                 "id": "section_1616786213464",
    //                 "tab": "tab_1616786206244",
    //                 "columns": [
    //                     {
    //                         "id": "column_1616786213464",
    //                         "content": null,
    //                         "size": 15,
    //                         "render": (currentBP) => <div>{currentBP}</div>
    //                     },
    //                     {
    //                         "id": "column_1616786216062",
    //                         "content": null,
    //                         "size": 61,
    //                         "render": () => (currentBP) => <div>{currentBP}</div>
    //                     },
    //                     {
    //                         "id": "column_1616786216338",
    //                         "content": null,
    //                         "size": 24,
    //                         "render": (currentBP) => <div>{currentBP}</div>
    //                     }
    //                 ],
    //                 "flexDirection": {
    //                     "mobile": "column",
    //                     "tablet": "row",
    //                     "desktop": "row"
    //                 }
    //             },
    //             {
    //                 "id": "section_1616786209058",
    //                 "tab": "tab_1616786206244",
    //                 "columns": [
    //                     {
    //                         "id": "column_1616786209058",
    //                         "content": {
    //                             "clazz": "FpsHtml",
    //                             "id": "comp_1616786211156"
    //                         },
    //                         "size": 100,
    //                         "render": (currentBP) => <div>FpsHtml - {currentBP}</div>
    //                     }
    //                 ],
    //                 "flexDirection": {
    //                     "mobile": "column",
    //                     "tablet": "row",
    //                     "desktop": "row"
    //                 }
    //             }
    //         ],
    //         "tab_03": []
    //     }
    // }

    // const dataForm = {
    //     "sl": "date",
    //     "formName": "",
    //     "formDesc": "",
    //     "formButton": "",
    //     "placeholder": "",
    //     "maxWidth": "",
    //     "formButtonResubmit": null,
    //     "params": {
    //         "result": {
    //             "resultTitleField": null,
    //             "resultMessageField": null,
    //             "isSuccessField": null
    //         }
    //     },
    //     "fileds": [
    //         {
    //             "sysName": "date",
    //             "dataType": "date",
    //             "name": "",
    //             "id": "57511618846087372",
    //             "link": "",
    //             "group": "0",
    //             "tags": null,
    //             "indexing": false,
    //             "ordering": false,
    //             "description": null,
    //             "weight": 0,
    //             "order": 1,
    //             "linkIndexFieldSysName": [],
    //             "defaultValue": null,
    //             "constraints": null,
    //             "synthetic": false,
    //             "format": null,
    //             "formatOptions": null,
    //             "groupName": null,
    //             "linkType": false,
    //             "typeVariable": {},
    //             "json": false,
    //             "arrayLink": false,
    //             "indexExists": false,
    //             "linkOrArrayLinkType": false,
    //             "params": {
    //                 "include": true,
    //                 "hidden": false,
    //                 "required": false,
    //                 "isTextarea": false,
    //                 "isMarkdown": false,
    //                 "textareaRows": 4,
    //                 "defaultValue": "",
    //                 "isPositive": false,
    //                 "quickSearch": true,
    //                 "allowAddLinks": false,
    //                 "dateTimeOn": true,
    //                 "isValid": true,
    //                 "weight": 0,
    //                 "jsonDisplay": "default",
    //                 "range": {
    //                     "min": 0,
    //                     "max": 100,
    //                     "step": 1,
    //                     "unitName": ""
    //                 }
    //             },
    //             "isValid": true
    //         }
    //     ],
    //     "error": null,
    //     "isSuccessWrite": false,
    //     "response": null,
    //     "data": null
    // }

    // const dataCards = {
    //     "sl": "adminQuestions",
    //     "pageSize": "10",
    //     "headerField": null,
    //     "params": {
    //         "cardListLayout": "grid",
    //         "cardHeaderComment": "user_id",
    //         "deleteField": "",
    //         "cardBodyText": "admin_id",
    //         "cardImage": false,
    //         "cardImageField": "",
    //         "cardImageType": "none",
    //         "cardImageSize": 100,
    //         "objectView": {},
    //         "data": {
    //             "readFields": [
    //                 {
    //                     "fieldSysName": "admin_id",
    //                     "fetch": [
    //                         {
    //                             "fieldSysName": "firstName",
    //                             "condition": null,
    //                             "fetch": []
    //                         },
    //                         {
    //                             "fieldSysName": "lastName",
    //                             "condition": null,
    //                             "fetch": []
    //                         }
    //                     ],
    //                     "sysName": "admin_id",
    //                     "name": "Кто ответил",
    //                     "dataType": "link",
    //                     "format": "",
    //                     "formatOptions": {},
    //                     "link": "WebUser"
    //                 },
    //                 {
    //                     "fieldSysName": "answer",
    //                     "fetch": [],
    //                     "sysName": "answer",
    //                     "name": "Ответ",
    //                     "dataType": "string",
    //                     "format": "",
    //                     "formatOptions": {},
    //                     "link": ""
    //                 },
    //                 {
    //                     "fieldSysName": "date",
    //                     "fetch": [],
    //                     "sysName": "date",
    //                     "name": "Дата вопроса",
    //                     "dataType": "date",
    //                     "format": "",
    //                     "formatOptions": {},
    //                     "link": ""
    //                 },
    //                 {
    //                     "fieldSysName": "date_answer",
    //                     "fetch": [],
    //                     "sysName": "date_answer",
    //                     "name": "Дата ответа",
    //                     "dataType": "date",
    //                     "format": "",
    //                     "formatOptions": {},
    //                     "link": ""
    //                 },
    //                 {
    //                     "fieldSysName": "id",
    //                     "fetch": [],
    //                     "sysName": "id",
    //                     "name": "id",
    //                     "dataType": "id",
    //                     "format": "",
    //                     "formatOptions": {},
    //                     "link": ""
    //                 },
    //                 {
    //                     "fieldSysName": "question",
    //                     "fetch": [],
    //                     "sysName": "question",
    //                     "name": "Вопрос",
    //                     "dataType": "string",
    //                     "format": "",
    //                     "formatOptions": {},
    //                     "link": ""
    //                 },
    //                 {
    //                     "fieldSysName": "user_id",
    //                     "fetch": [
    //                         {
    //                             "fieldSysName": "22_functions",
    //                             "condition": null,
    //                             "fetch": [
    //                                 {
    //                                     "fieldSysName": "name",
    //                                     "condition": null,
    //                                     "fetch": []
    //                                 }
    //                             ]
    //                         },
    //                         {
    //                             "fieldSysName": "52_functions",
    //                             "condition": null,
    //                             "fetch": [
    //                                 {
    //                                     "fieldSysName": "name",
    //                                     "condition": null,
    //                                     "fetch": []
    //                                 }
    //                             ]
    //                         },
    //                         {
    //                             "fieldSysName": "TG_username",
    //                             "condition": null,
    //                             "fetch": []
    //                         },
    //                         {
    //                             "fieldSysName": "firstName",
    //                             "condition": null,
    //                             "fetch": []
    //                         },
    //                         {
    //                             "fieldSysName": "image",
    //                             "condition": null,
    //                             "fetch": []
    //                         },
    //                         {
    //                             "fieldSysName": "isBlocked",
    //                             "condition": null,
    //                             "fetch": []
    //                         },
    //                         {
    //                             "fieldSysName": "jobs_selected",
    //                             "condition": null,
    //                             "fetch": []
    //                         },
    //                         {
    //                             "fieldSysName": "lastName",
    //                             "condition": null,
    //                             "fetch": []
    //                         },
    //                         {
    //                             "fieldSysName": "salary_text",
    //                             "condition": null,
    //                             "fetch": []
    //                         },
    //                         {
    //                             "fieldSysName": "type",
    //                             "condition": null,
    //                             "fetch": []
    //                         }
    //                     ],
    //                     "sysName": "user_id",
    //                     "name": "Кто спросил",
    //                     "dataType": "link",
    //                     "format": "",
    //                     "formatOptions": {},
    //                     "link": "WebUser"
    //                 }
    //             ],
    //             "writeFields": [],
    //             "fields": {
    //                 "admin_id": {
    //                     "id": "admin_id",
    //                     "content": "Кто ответил",
    //                     "type": "field",
    //                     "dataType": "link",
    //                     "format": "",
    //                     "formatOptions": {},
    //                     "read": true,
    //                     "link": "WebUser",
    //                     "actions": []
    //                 },
    //                 "answer": {
    //                     "id": "answer",
    //                     "content": "Ответ",
    //                     "type": "field",
    //                     "dataType": "string",
    //                     "format": "",
    //                     "formatOptions": {},
    //                     "read": true,
    //                     "link": "",
    //                     "actions": []
    //                 },
    //                 "date": {
    //                     "id": "date",
    //                     "content": "Дата вопроса",
    //                     "type": "field",
    //                     "dataType": "date",
    //                     "format": "",
    //                     "formatOptions": {},
    //                     "read": true,
    //                     "link": "",
    //                     "actions": []
    //                 },
    //                 "date_answer": {
    //                     "id": "date_answer",
    //                     "content": "Дата ответа",
    //                     "type": "field",
    //                     "dataType": "date",
    //                     "format": "",
    //                     "formatOptions": {},
    //                     "read": true,
    //                     "link": "",
    //                     "actions": []
    //                 },
    //                 "id": {
    //                     "id": "id",
    //                     "content": "id",
    //                     "type": "field",
    //                     "dataType": "id",
    //                     "format": "",
    //                     "formatOptions": {},
    //                     "read": true,
    //                     "link": "",
    //                     "actions": []
    //                 },
    //                 "question": {
    //                     "id": "question",
    //                     "content": "Вопрос",
    //                     "type": "field",
    //                     "dataType": "string",
    //                     "format": "",
    //                     "formatOptions": {},
    //                     "read": true,
    //                     "link": "",
    //                     "actions": []
    //                 },
    //                 "user_id": {
    //                     "id": "user_id",
    //                     "content": "Кто спросил",
    //                     "type": "field",
    //                     "dataType": "link",
    //                     "format": "",
    //                     "formatOptions": {},
    //                     "read": true,
    //                     "link": "WebUser",
    //                     "actions": []
    //                 },
    //                 "action__36061609255776251": {
    //                     "content": "Ответить",
    //                     "id": "action__36061609255776251",
    //                     "type": "action",
    //                     "actions": []
    //                 }
    //             },
    //             "fieldParams": {
    //                 "admin_id": {
    //                     "include": true,
    //                     "fileImageFormat": "square",
    //                     "quickSearch": false,
    //                     "fileImageSize": 200,
    //                     "clickable": false
    //                 },
    //                 "answer": {
    //                     "include": true,
    //                     "fileImageFormat": "square",
    //                     "quickSearch": false,
    //                     "fileImageSize": 200,
    //                     "clickable": false
    //                 },
    //                 "date": {
    //                     "include": true,
    //                     "fileImageFormat": "square",
    //                     "quickSearch": false,
    //                     "fileImageSize": 200,
    //                     "clickable": false
    //                 },
    //                 "date_answer": {
    //                     "include": true,
    //                     "fileImageFormat": "square",
    //                     "quickSearch": false,
    //                     "fileImageSize": 200,
    //                     "clickable": false
    //                 },
    //                 "id": {
    //                     "include": false,
    //                     "fileImageFormat": "square",
    //                     "quickSearch": false,
    //                     "fileImageSize": 200,
    //                     "clickable": false
    //                 },
    //                 "question": {
    //                     "include": true,
    //                     "fileImageFormat": "square",
    //                     "quickSearch": false,
    //                     "fileImageSize": 200,
    //                     "clickable": false
    //                 },
    //                 "user_id": {
    //                     "include": true,
    //                     "fileImageFormat": "square",
    //                     "quickSearch": false,
    //                     "fileImageSize": 200,
    //                     "clickable": true,
    //                     "configureLinkedCard": {
    //                         "fields": {
    //                             "22_functions": {
    //                                 "id": "22_functions",
    //                                 "content": "Функции для категории 22",
    //                                 "type": "field",
    //                                 "read": true,
    //                                 "dataType": "arrayLink",
    //                                 "format": null,
    //                                 "formatOptions": null
    //                             },
    //                             "52_functions": {
    //                                 "id": "52_functions",
    //                                 "content": "Функции для категории 52",
    //                                 "type": "field",
    //                                 "read": true,
    //                                 "dataType": "arrayLink",
    //                                 "format": null,
    //                                 "formatOptions": null
    //                             },
    //                             "TG_username": {
    //                                 "id": "TG_username",
    //                                 "content": "Telegram",
    //                                 "type": "field",
    //                                 "read": true,
    //                                 "dataType": "string",
    //                                 "format": null,
    //                                 "formatOptions": {}
    //                             },
    //                             "firstName": {
    //                                 "id": "firstName",
    //                                 "content": "Имя",
    //                                 "type": "field",
    //                                 "read": true,
    //                                 "dataType": "string",
    //                                 "format": null,
    //                                 "formatOptions": {}
    //                             },
    //                             "image": {
    //                                 "id": "image",
    //                                 "content": "image",
    //                                 "type": "field",
    //                                 "read": true,
    //                                 "dataType": "file",
    //                                 "format": null,
    //                                 "formatOptions": null
    //                             },
    //                             "isBlocked": {
    //                                 "id": "isBlocked",
    //                                 "content": "Block user",
    //                                 "type": "field",
    //                                 "read": true,
    //                                 "dataType": "boolean",
    //                                 "format": null,
    //                                 "formatOptions": {}
    //                             },
    //                             "lastName": {
    //                                 "id": "lastName",
    //                                 "content": "Фамилия",
    //                                 "type": "field",
    //                                 "read": true,
    //                                 "dataType": "string",
    //                                 "format": null,
    //                                 "formatOptions": {}
    //                             },
    //                             "salary_text": {
    //                                 "id": "salary_text",
    //                                 "content": "Ожидания по доходу",
    //                                 "type": "field",
    //                                 "read": true,
    //                                 "dataType": "string",
    //                                 "format": null,
    //                                 "formatOptions": null
    //                             },
    //                             "type": {
    //                                 "id": "type",
    //                                 "content": "Категория вакансий",
    //                                 "type": "field",
    //                                 "read": true,
    //                                 "dataType": "link",
    //                                 "format": null,
    //                                 "formatOptions": {
    //                                     "customOptionLabel": "My option",
    //                                     "keyValue": {
    //                                         "key": "key",
    //                                         "value": "value",
    //                                         "button": "One more"
    //                                     },
    //                                     "booleanOptions": [
    //                                         "2 через 2",
    //                                         "5 через 2"
    //                                     ],
    //                                     "customOptionPlaceholder": "Describe your option",
    //                                     "range": {},
    //                                     "customOptionType": "textarea"
    //                                 }
    //                             },
    //                             "jobs_selected": {
    //                                 "id": "jobs_selected",
    //                                 "content": "Количество подходящих вакансий",
    //                                 "type": "field",
    //                                 "read": true,
    //                                 "dataType": "number",
    //                                 "format": "positiveNum",
    //                                 "formatOptions": null
    //                             }
    //                         },
    //                         "fieldParams": {
    //                             "22_functions": {
    //                                 "include": true,
    //                                 "fileImageFormat": "square",
    //                                 "fileImageSize": 200
    //                             },
    //                             "52_functions": {
    //                                 "include": true,
    //                                 "fileImageFormat": "square",
    //                                 "fileImageSize": 200
    //                             },
    //                             "TG_username": {
    //                                 "include": true,
    //                                 "fileImageFormat": "square",
    //                                 "fileImageSize": 200
    //                             },
    //                             "firstName": {
    //                                 "include": true,
    //                                 "fileImageFormat": "square",
    //                                 "fileImageSize": 200
    //                             },
    //                             "image": {
    //                                 "include": true,
    //                                 "fileImageFormat": "circle",
    //                                 "fileImageSize": 200,
    //                                 "fileImage": true
    //                             },
    //                             "isBlocked": {
    //                                 "include": true,
    //                                 "fileImageFormat": "square",
    //                                 "fileImageSize": 200
    //                             },
    //                             "lastName": {
    //                                 "include": true,
    //                                 "fileImageFormat": "square",
    //                                 "fileImageSize": 200
    //                             },
    //                             "salary_text": {
    //                                 "include": true,
    //                                 "fileImageFormat": "square",
    //                                 "fileImageSize": 200
    //                             },
    //                             "type": {
    //                                 "include": true,
    //                                 "fileImageFormat": "square",
    //                                 "fileImageSize": 200
    //                             },
    //                             "jobs_selected": {
    //                                 "include": true,
    //                                 "fileImageFormat": "square",
    //                                 "fileImageSize": 200
    //                             }
    //                         },
    //                         "fieldOrder": [
    //                             "image",
    //                             "firstName",
    //                             "lastName",
    //                             "type",
    //                             "jobs_selected",
    //                             "22_functions",
    //                             "52_functions",
    //                             "TG_username",
    //                             "isBlocked",
    //                             "salary_text"
    //                         ]
    //                     },
    //                     "subHeader": "Пользователь: "
    //                 }
    //             },
    //             "columns": {
    //                 "tab-1": {
    //                     "id": "tab-1",
    //                     "title": "New section",
    //                     "fieldIds": [
    //                         "user_id",
    //                         "question",
    //                         "date",
    //                         "admin_id",
    //                         "answer",
    //                         "date_answer",
    //                         "id",
    //                         "action__36061609255776251"
    //                     ]
    //                 }
    //             },
    //             "columnOrder": [
    //                 "tab-1"
    //             ],
    //             "actions": [
    //                 {
    //                     "sysName": "adminQuestionsAnswer",
    //                     "id": "36061609255776251",
    //                     "name": "Ответить",
    //                     "displayAs": "form",
    //                     "SLtype": "other",
    //                     "fields": {
    //                         "readFields": [
    //                             {
    //                                 "fieldSysName": "id",
    //                                 "fetch": [],
    //                                 "sysName": "id",
    //                                 "name": "id",
    //                                 "dataType": "id",
    //                                 "format": "",
    //                                 "formatOptions": {},
    //                                 "link": ""
    //                             }
    //                         ],
    //                         "writeFields": [
    //                             {
    //                                 "fieldSysName": "admin_id",
    //                                 "fetch": [],
    //                                 "sysName": "admin_id",
    //                                 "name": "Кто ответил",
    //                                 "dataType": "link",
    //                                 "format": "",
    //                                 "formatOptions": {},
    //                                 "link": "WebUser"
    //                             },
    //                             {
    //                                 "fieldSysName": "answer",
    //                                 "fetch": [],
    //                                 "sysName": "answer",
    //                                 "name": "Ответ",
    //                                 "dataType": "string",
    //                                 "format": "",
    //                                 "formatOptions": {},
    //                                 "link": ""
    //                             },
    //                             {
    //                                 "fieldSysName": "id",
    //                                 "fetch": [],
    //                                 "sysName": "id",
    //                                 "name": "id",
    //                                 "dataType": "id",
    //                                 "format": "",
    //                                 "formatOptions": {},
    //                                 "link": ""
    //                             }
    //                         ]
    //                     },
    //                     "formFields": [
    //                         {
    //                             "id": "92531609255796165",
    //                             "field": {
    //                                 "fieldSysName": "answer",
    //                                 "fetch": [],
    //                                 "sysName": "answer",
    //                                 "name": "Ответ",
    //                                 "dataType": "string",
    //                                 "format": "",
    //                                 "formatOptions": {},
    //                                 "link": ""
    //                             }
    //                         }
    //                     ],
    //                     "formMapping": [
    //                         {
    //                             "id": "24221609255801992",
    //                             "target": "admin_id",
    //                             "type": "user",
    //                             "value": null
    //                         },
    //                         {
    //                             "id": "92331609255810510",
    //                             "target": "id",
    //                             "type": "objectField",
    //                             "value": "id"
    //                         }
    //                     ],
    //                     "closePopup": true
    //                 }
    //             ]
    //         },
    //         "fields": {
    //             "admin_id": {
    //                 "include": true,
    //                 "fileImageFormat": "square",
    //                 "quickSearch": false,
    //                 "fileImageSize": 200,
    //                 "clickable": false
    //             },
    //             "answer": {
    //                 "include": true,
    //                 "fileImageFormat": "square",
    //                 "quickSearch": false,
    //                 "fileImageSize": 200,
    //                 "clickable": false
    //             },
    //             "date": {
    //                 "include": true,
    //                 "fileImageFormat": "square",
    //                 "quickSearch": false,
    //                 "fileImageSize": 200,
    //                 "clickable": false
    //             },
    //             "date_answer": {
    //                 "include": true,
    //                 "fileImageFormat": "square",
    //                 "quickSearch": false,
    //                 "fileImageSize": 200,
    //                 "clickable": false
    //             },
    //             "id": {
    //                 "include": false,
    //                 "fileImageFormat": "square",
    //                 "quickSearch": false,
    //                 "fileImageSize": 200,
    //                 "clickable": false
    //             },
    //             "question": {
    //                 "include": true,
    //                 "fileImageFormat": "square",
    //                 "quickSearch": false,
    //                 "fileImageSize": 200,
    //                 "clickable": false
    //             },
    //             "user_id": {
    //                 "include": true,
    //                 "fileImageFormat": "square",
    //                 "quickSearch": false,
    //                 "fileImageSize": 200,
    //                 "clickable": true,
    //                 "configureLinkedCard": {
    //                     "fields": {
    //                         "22_functions": {
    //                             "id": "22_functions",
    //                             "content": "Функции для категории 22",
    //                             "type": "field",
    //                             "read": true,
    //                             "dataType": "arrayLink",
    //                             "format": null,
    //                             "formatOptions": null
    //                         },
    //                         "52_functions": {
    //                             "id": "52_functions",
    //                             "content": "Функции для категории 52",
    //                             "type": "field",
    //                             "read": true,
    //                             "dataType": "arrayLink",
    //                             "format": null,
    //                             "formatOptions": null
    //                         },
    //                         "TG_username": {
    //                             "id": "TG_username",
    //                             "content": "Telegram",
    //                             "type": "field",
    //                             "read": true,
    //                             "dataType": "string",
    //                             "format": null,
    //                             "formatOptions": {}
    //                         },
    //                         "firstName": {
    //                             "id": "firstName",
    //                             "content": "Имя",
    //                             "type": "field",
    //                             "read": true,
    //                             "dataType": "string",
    //                             "format": null,
    //                             "formatOptions": {}
    //                         },
    //                         "image": {
    //                             "id": "image",
    //                             "content": "image",
    //                             "type": "field",
    //                             "read": true,
    //                             "dataType": "file",
    //                             "format": null,
    //                             "formatOptions": null
    //                         },
    //                         "isBlocked": {
    //                             "id": "isBlocked",
    //                             "content": "Block user",
    //                             "type": "field",
    //                             "read": true,
    //                             "dataType": "boolean",
    //                             "format": null,
    //                             "formatOptions": {}
    //                         },
    //                         "lastName": {
    //                             "id": "lastName",
    //                             "content": "Фамилия",
    //                             "type": "field",
    //                             "read": true,
    //                             "dataType": "string",
    //                             "format": null,
    //                             "formatOptions": {}
    //                         },
    //                         "salary_text": {
    //                             "id": "salary_text",
    //                             "content": "Ожидания по доходу",
    //                             "type": "field",
    //                             "read": true,
    //                             "dataType": "string",
    //                             "format": null,
    //                             "formatOptions": null
    //                         },
    //                         "type": {
    //                             "id": "type",
    //                             "content": "Категория вакансий",
    //                             "type": "field",
    //                             "read": true,
    //                             "dataType": "link",
    //                             "format": null,
    //                             "formatOptions": {
    //                                 "customOptionLabel": "My option",
    //                                 "keyValue": {
    //                                     "key": "key",
    //                                     "value": "value",
    //                                     "button": "One more"
    //                                 },
    //                                 "booleanOptions": [
    //                                     "2 через 2",
    //                                     "5 через 2"
    //                                 ],
    //                                 "customOptionPlaceholder": "Describe your option",
    //                                 "range": {},
    //                                 "customOptionType": "textarea"
    //                             }
    //                         },
    //                         "jobs_selected": {
    //                             "id": "jobs_selected",
    //                             "content": "Количество подходящих вакансий",
    //                             "type": "field",
    //                             "read": true,
    //                             "dataType": "number",
    //                             "format": "positiveNum",
    //                             "formatOptions": null
    //                         }
    //                     },
    //                     "fieldParams": {
    //                         "22_functions": {
    //                             "include": true,
    //                             "fileImageFormat": "square",
    //                             "fileImageSize": 200
    //                         },
    //                         "52_functions": {
    //                             "include": true,
    //                             "fileImageFormat": "square",
    //                             "fileImageSize": 200
    //                         },
    //                         "TG_username": {
    //                             "include": true,
    //                             "fileImageFormat": "square",
    //                             "fileImageSize": 200
    //                         },
    //                         "firstName": {
    //                             "include": true,
    //                             "fileImageFormat": "square",
    //                             "fileImageSize": 200
    //                         },
    //                         "image": {
    //                             "include": true,
    //                             "fileImageFormat": "circle",
    //                             "fileImageSize": 200,
    //                             "fileImage": true
    //                         },
    //                         "isBlocked": {
    //                             "include": true,
    //                             "fileImageFormat": "square",
    //                             "fileImageSize": 200
    //                         },
    //                         "lastName": {
    //                             "include": true,
    //                             "fileImageFormat": "square",
    //                             "fileImageSize": 200
    //                         },
    //                         "salary_text": {
    //                             "include": true,
    //                             "fileImageFormat": "square",
    //                             "fileImageSize": 200
    //                         },
    //                         "type": {
    //                             "include": true,
    //                             "fileImageFormat": "square",
    //                             "fileImageSize": 200
    //                         },
    //                         "jobs_selected": {
    //                             "include": true,
    //                             "fileImageFormat": "square",
    //                             "fileImageSize": 200
    //                         }
    //                     },
    //                     "fieldOrder": [
    //                         "image",
    //                         "firstName",
    //                         "lastName",
    //                         "type",
    //                         "jobs_selected",
    //                         "22_functions",
    //                         "52_functions",
    //                         "TG_username",
    //                         "isBlocked",
    //                         "salary_text"
    //                     ]
    //                 },
    //                 "subHeader": "Пользователь: "
    //             }
    //         },
    //         "actions": [
    //             {
    //                 "sysName": "adminQuestionsAnswer",
    //                 "id": "36061609255776251",
    //                 "name": "Ответить",
    //                 "displayAs": "form",
    //                 "SLtype": "other",
    //                 "fields": {
    //                     "readFields": [
    //                         {
    //                             "fieldSysName": "id",
    //                             "fetch": [],
    //                             "sysName": "id",
    //                             "name": "id",
    //                             "dataType": "id",
    //                             "format": "",
    //                             "formatOptions": {},
    //                             "link": ""
    //                         }
    //                     ],
    //                     "writeFields": [
    //                         {
    //                             "fieldSysName": "admin_id",
    //                             "fetch": [],
    //                             "sysName": "admin_id",
    //                             "name": "Кто ответил",
    //                             "dataType": "link",
    //                             "format": "",
    //                             "formatOptions": {},
    //                             "link": "WebUser"
    //                         },
    //                         {
    //                             "fieldSysName": "answer",
    //                             "fetch": [],
    //                             "sysName": "answer",
    //                             "name": "Ответ",
    //                             "dataType": "string",
    //                             "format": "",
    //                             "formatOptions": {},
    //                             "link": ""
    //                         },
    //                         {
    //                             "fieldSysName": "id",
    //                             "fetch": [],
    //                             "sysName": "id",
    //                             "name": "id",
    //                             "dataType": "id",
    //                             "format": "",
    //                             "formatOptions": {},
    //                             "link": ""
    //                         }
    //                     ]
    //                 },
    //                 "formFields": [
    //                     {
    //                         "id": "92531609255796165",
    //                         "field": {
    //                             "fieldSysName": "answer",
    //                             "fetch": [],
    //                             "sysName": "answer",
    //                             "name": "Ответ",
    //                             "dataType": "string",
    //                             "format": "",
    //                             "formatOptions": {},
    //                             "link": ""
    //                         }
    //                     }
    //                 ],
    //                 "formMapping": [
    //                     {
    //                         "id": "24221609255801992",
    //                         "target": "admin_id",
    //                         "type": "user",
    //                         "value": null
    //                     },
    //                     {
    //                         "id": "92331609255810510",
    //                         "target": "id",
    //                         "type": "objectField",
    //                         "value": "id"
    //                     }
    //                 ],
    //                 "closePopup": true
    //             }
    //         ]
    //     },
    //     "tableTitle": "Вопросы пользователей",
    //     "actions": null,
    //     "headers": [
    //         {
    //             "sysName": "admin_id",
    //             "name": "Кто ответил",
    //             "dataType": "link",
    //             "id": "76431600436848180",
    //             "link": "WebUser",
    //             "group": "0",
    //             "tags": "",
    //             "indexing": false,
    //             "ordering": false,
    //             "description": null,
    //             "weight": null,
    //             "order": 2,
    //             "linkIndexFieldSysName": [],
    //             "defaultValue": "",
    //             "constraints": null,
    //             "synthetic": false,
    //             "format": null,
    //             "formatOptions": null,
    //             "groupName": null,
    //             "linkType": true,
    //             "linkOrArrayLinkType": true,
    //             "arrayLink": false,
    //             "typeVariable": {},
    //             "indexExists": false,
    //             "json": false
    //         },
    //         {
    //             "sysName": "answer",
    //             "name": "Ответ",
    //             "dataType": "string",
    //             "id": "97611600436853189",
    //             "link": "",
    //             "group": "0",
    //             "tags": "",
    //             "indexing": false,
    //             "ordering": false,
    //             "description": null,
    //             "weight": null,
    //             "order": 4,
    //             "linkIndexFieldSysName": [],
    //             "defaultValue": "",
    //             "constraints": null,
    //             "synthetic": false,
    //             "format": null,
    //             "formatOptions": null,
    //             "groupName": null,
    //             "linkType": false,
    //             "linkOrArrayLinkType": false,
    //             "arrayLink": false,
    //             "typeVariable": {},
    //             "indexExists": false,
    //             "json": false
    //         },
    //         {
    //             "sysName": "date",
    //             "name": "Дата вопроса",
    //             "dataType": "date",
    //             "id": "83411601287631450",
    //             "link": "",
    //             "group": "0",
    //             "tags": "",
    //             "indexing": false,
    //             "ordering": false,
    //             "description": null,
    //             "weight": null,
    //             "order": 5,
    //             "linkIndexFieldSysName": [],
    //             "defaultValue": "",
    //             "constraints": null,
    //             "synthetic": false,
    //             "format": null,
    //             "formatOptions": null,
    //             "groupName": null,
    //             "linkType": false,
    //             "linkOrArrayLinkType": false,
    //             "arrayLink": false,
    //             "typeVariable": {},
    //             "indexExists": false,
    //             "json": false
    //         },
    //         {
    //             "sysName": "date_answer",
    //             "name": "Дата ответа",
    //             "dataType": "date",
    //             "id": "86211605857182746",
    //             "link": "",
    //             "group": "0",
    //             "tags": "",
    //             "indexing": false,
    //             "ordering": false,
    //             "description": null,
    //             "weight": null,
    //             "order": 7,
    //             "linkIndexFieldSysName": [],
    //             "defaultValue": "",
    //             "constraints": null,
    //             "synthetic": false,
    //             "format": null,
    //             "formatOptions": null,
    //             "groupName": null,
    //             "linkType": false,
    //             "linkOrArrayLinkType": false,
    //             "arrayLink": false,
    //             "typeVariable": {},
    //             "indexExists": false,
    //             "json": false
    //         },
    //         {
    //             "sysName": "id",
    //             "name": "id",
    //             "dataType": "id",
    //             "id": "0",
    //             "link": "",
    //             "group": "0",
    //             "tags": "",
    //             "indexing": false,
    //             "ordering": false,
    //             "description": null,
    //             "weight": null,
    //             "order": 0,
    //             "linkIndexFieldSysName": [],
    //             "defaultValue": "",
    //             "constraints": null,
    //             "synthetic": false,
    //             "format": null,
    //             "formatOptions": null,
    //             "groupName": null,
    //             "linkType": false,
    //             "linkOrArrayLinkType": false,
    //             "arrayLink": false,
    //             "typeVariable": {},
    //             "indexExists": false,
    //             "json": false
    //         },
    //         {
    //             "sysName": "question",
    //             "name": "Вопрос",
    //             "dataType": "string",
    //             "id": "91971600436849319",
    //             "link": "",
    //             "group": "0",
    //             "tags": "",
    //             "indexing": false,
    //             "ordering": false,
    //             "description": null,
    //             "weight": null,
    //             "order": 3,
    //             "linkIndexFieldSysName": [],
    //             "defaultValue": "",
    //             "constraints": null,
    //             "synthetic": false,
    //             "format": null,
    //             "formatOptions": null,
    //             "groupName": null,
    //             "linkType": false,
    //             "linkOrArrayLinkType": false,
    //             "arrayLink": false,
    //             "typeVariable": {},
    //             "indexExists": false,
    //             "json": false
    //         },
    //         {
    //             "sysName": "user_id",
    //             "name": "Кто спросил",
    //             "dataType": "link",
    //             "id": "92661600436847692",
    //             "link": "WebUser",
    //             "group": "0",
    //             "tags": "",
    //             "indexing": false,
    //             "ordering": false,
    //             "description": null,
    //             "weight": null,
    //             "order": 1,
    //             "linkIndexFieldSysName": [],
    //             "defaultValue": "",
    //             "constraints": null,
    //             "synthetic": false,
    //             "format": null,
    //             "formatOptions": null,
    //             "groupName": null,
    //             "linkType": true,
    //             "linkOrArrayLinkType": true,
    //             "arrayLink": false,
    //             "typeVariable": {},
    //             "indexExists": false,
    //             "json": false
    //         }
    //     ],
    //     "data": [
    //         {
    //             "question": "Как откликнуться на вакансию?",
    //             "user_id": {
    //                 "jobs_selected": 0,
    //                 "image": "https://api.alfa.directual.com/fileUploaded/vitrina2252/380e6c7c-9347-4272-8e00-b60bab27d02e.jpg",
    //                 "lastName": "Носова",
    //                 "firstName": "Елена",
    //                 "TG_username": "dushevnenkaya",
    //                 "type": "22"
    //             },
    //             "date": 1617050400000,
    //             "id": "004c113e-284c-4ee5-a169-221a05de5176"
    //         },
    //         {
    //             "date": 1617020954000,
    //             "user_id": {
    //                 "jobs_selected": 42,
    //                 "image": "https://api.alfa.directual.com/fileUploaded/vitrina2252/c4c7f463-46f3-4620-a3b9-f4c57248243c.jpg",
    //                 "52_functions": [
    //                     {
    //                         "name": "SMM",
    //                         "id": "5c696884-c6e8-4608-a928-06ca86d28f52"
    //                     },
    //                     {
    //                         "name": "Контент",
    //                         "id": "14746650-98aa-44d7-8989-472c8162dba8"
    //                     },
    //                     {
    //                         "name": "Копирайтинг",
    //                         "id": "605143a0-bb72-49ec-a7c2-16d6a84baa6b"
    //                     },
    //                     {
    //                         "name": "Редактор",
    //                         "id": "565e74f1-6a97-491b-a97b-7578d26f9b0e"
    //                     },
    //                     {
    //                         "name": "HR",
    //                         "id": "f9e6e8ea-aea5-4a2e-b46c-4dfa353fec64"
    //                     },
    //                     {
    //                         "name": "Стажер ",
    //                         "id": "9d328ba3-59c4-43f8-809d-068d86dada3c"
    //                     },
    //                     {
    //                         "name": "Маркетинг",
    //                         "id": "b5ecf298-bc0b-4010-964a-9eb1f36e88c7"
    //                     },
    //                     {
    //                         "name": "Ассистент",
    //                         "id": "73b56a2a-78fe-447e-a9d4-8a574b9e9359"
    //                     },
    //                     {
    //                         "name": "Account ",
    //                         "id": "c68109f6-1b68-4f09-ac34-67a8390ea2dd"
    //                     }
    //                 ],
    //                 "lastName": "Шумова",
    //                 "firstName": "Екатерина",
    //                 "TG_username": "keitrinwotson",
    //                 "type": "52"
    //             },
    //             "question": "Добрый день\nЗабыла пароль, не могу его восстановить",
    //             "id": "ffac2f14-5b07-4f77-b8ca-ea9d11156bce"
    //         },
    //         {
    //             "date": 1616856439000,
    //             "user_id": {
    //                 "jobs_selected": 12,
    //                 "image": "https://api.alfa.directual.com/fileUploaded/vitrina2252/75bdc049-f3e2-4e5c-9802-d8ffcdc69d54.jpg",
    //                 "52_functions": [
    //                     {
    //                         "name": "Стилист",
    //                         "id": "2ee7a4c1-51a4-46d9-b93a-f4c06f9dc095"
    //                     },
    //                     {
    //                         "name": "Личный помощник",
    //                         "id": "6110b6ca-dada-4db8-ae7a-3c5750cfabb2"
    //                     },
    //                     {
    //                         "name": "Event",
    //                         "id": "286b253f-f862-49a5-bdca-2301edc2a679"
    //                     },
    //                     {
    //                         "name": "Администратор",
    //                         "id": "de84414a-0886-41c4-bc51-1321abf1f722"
    //                     }
    //                 ],
    //                 "lastName": "Быкова",
    //                 "firstName": "Софья",
    //                 "TG_username": "mamayabolshenebudda",
    //                 "type": "52"
    //             },
    //             "question": "добрый день! данная ссылка( https://forms\\.gle/DrUWLV7Fn5ytYGXp7 ), которая была отправлена мне от «semiotique» не работает. Я хотела бы узнать, вакансия уже закрыта или это сбой сервера ?",
    //             "id": "1caa2b40-7abd-4c4a-8453-28ebebcaeee8"
    //         },
    //         {
    //             "question": "Ссылки на отклик работодателю некликабельные, не открываются в браузере",
    //             "date_answer": 1616844206000,
    //             "user_id": {
    //                 "jobs_selected": 48,
    //                 "image": "https://api.alfa.directual.com/fileUploaded/vitrina2252/5d041931-03e8-43d4-864a-41ee3024fde6.jpg",
    //                 "52_functions": [
    //                     {
    //                         "name": "HR",
    //                         "id": "f9e6e8ea-aea5-4a2e-b46c-4dfa353fec64"
    //                     },
    //                     {
    //                         "name": "Редактор",
    //                         "id": "565e74f1-6a97-491b-a97b-7578d26f9b0e"
    //                     },
    //                     {
    //                         "name": "Копирайтинг",
    //                         "id": "605143a0-bb72-49ec-a7c2-16d6a84baa6b"
    //                     },
    //                     {
    //                         "name": "Фотограф",
    //                         "id": "d4e838bd-8e32-4a65-9d08-09ccf5e8956c"
    //                     },
    //                     {
    //                         "name": "Личный помощник",
    //                         "id": "6110b6ca-dada-4db8-ae7a-3c5750cfabb2"
    //                     },
    //                     {
    //                         "name": "Администратор",
    //                         "id": "de84414a-0886-41c4-bc51-1321abf1f722"
    //                     },
    //                     {
    //                         "name": "Продюссер",
    //                         "id": "69cf9997-fd45-442e-8590-74815535e949"
    //                     },
    //                     {
    //                         "name": "Маркетинг",
    //                         "id": "b5ecf298-bc0b-4010-964a-9eb1f36e88c7"
    //                     },
    //                     {
    //                         "name": "Менеджер проектов",
    //                         "id": "e3673d9f-84cc-4e92-bdae-5bd81ad3fefc"
    //                     },
    //                     {
    //                         "name": "Event",
    //                         "id": "286b253f-f862-49a5-bdca-2301edc2a679"
    //                     }
    //                 ],
    //                 "22_functions": [
    //                     {
    //                         "name": "Администратор",
    //                         "id": "cee393b6-1f7f-459b-8d5f-a9b59c41cf92"
    //                     },
    //                     {
    //                         "name": "Продавец-консультант",
    //                         "id": "58b198e4-6ec9-4cde-87cf-8edf8d88af95"
    //                     },
    //                     {
    //                         "name": "Управляющий",
    //                         "id": "d6d250fd-4f29-4b09-a140-9757ac0266aa"
    //                     },
    //                     {
    //                         "name": "Хостес",
    //                         "id": "ee6cd622-e697-4d59-bca0-d34d4d6fa058"
    //                     }
    //                 ],
    //                 "lastName": "Ефремова",
    //                 "firstName": "Алина",
    //                 "TG_username": "efremovalialife",
    //                 "type": "52"
    //             },
    //             "id": "02a262af-aa69-4a98-8093-bbeb15261075",
    //             "date": 1616843313000,
    //             "answer": "форвардни мне, пожалуйста, на @pavelershov сообщение с неработающей ссылкой",
    //             "admin_id": {
    //                 "lastName": "Ershov",
    //                 "firstName": "Pavel"
    //             }
    //         },
    //         {
    //             "user_id": {
    //                 "jobs_selected": 0,
    //                 "image": "https://api.alfa.directual.com/fileUploaded/vitrina2252/e1e39dd2-f833-4e98-8635-0c70e022e72a.jpg",
    //                 "52_functions": [
    //                     {
    //                         "name": "SMM",
    //                         "id": "5c696884-c6e8-4608-a928-06ca86d28f52"
    //                     },
    //                     {
    //                         "name": "Контент",
    //                         "id": "14746650-98aa-44d7-8989-472c8162dba8"
    //                     },
    //                     {
    //                         "name": "Копирайтинг",
    //                         "id": "605143a0-bb72-49ec-a7c2-16d6a84baa6b"
    //                     },
    //                     {
    //                         "name": "Фотограф",
    //                         "id": "d4e838bd-8e32-4a65-9d08-09ccf5e8956c"
    //                     },
    //                     {
    //                         "name": "Видеограф",
    //                         "id": "aaa68f68-4196-4561-b4ca-6957ee1f5271"
    //                     },
    //                     {
    //                         "name": "Стажер ",
    //                         "id": "9d328ba3-59c4-43f8-809d-068d86dada3c"
    //                     },
    //                     {
    //                         "name": "Администратор",
    //                         "id": "de84414a-0886-41c4-bc51-1321abf1f722"
    //                     },
    //                     {
    //                         "name": "Личный помощник",
    //                         "id": "6110b6ca-dada-4db8-ae7a-3c5750cfabb2"
    //                     }
    //                 ],
    //                 "lastName": "Халилова",
    //                 "firstName": "Эльза",
    //                 "TG_username": "elza0903",
    //                 "type": "52"
    //             },
    //             "question": "Можно ли загрузить несколько ссылок на резюме, чтобы разным работодателям отправлять разные ?",
    //             "date": 1616798944000,
    //             "id": "3c7f8890-0cd2-4387-8113-a82481287b01"
    //         },
    //         {
    //             "user_id": {
    //                 "jobs_selected": 0,
    //                 "image": "https://api.alfa.directual.com/fileUploaded/vitrina2252/e1e39dd2-f833-4e98-8635-0c70e022e72a.jpg",
    //                 "52_functions": [
    //                     {
    //                         "name": "SMM",
    //                         "id": "5c696884-c6e8-4608-a928-06ca86d28f52"
    //                     },
    //                     {
    //                         "name": "Контент",
    //                         "id": "14746650-98aa-44d7-8989-472c8162dba8"
    //                     },
    //                     {
    //                         "name": "Копирайтинг",
    //                         "id": "605143a0-bb72-49ec-a7c2-16d6a84baa6b"
    //                     },
    //                     {
    //                         "name": "Фотограф",
    //                         "id": "d4e838bd-8e32-4a65-9d08-09ccf5e8956c"
    //                     },
    //                     {
    //                         "name": "Видеограф",
    //                         "id": "aaa68f68-4196-4561-b4ca-6957ee1f5271"
    //                     },
    //                     {
    //                         "name": "Стажер ",
    //                         "id": "9d328ba3-59c4-43f8-809d-068d86dada3c"
    //                     },
    //                     {
    //                         "name": "Администратор",
    //                         "id": "de84414a-0886-41c4-bc51-1321abf1f722"
    //                     },
    //                     {
    //                         "name": "Личный помощник",
    //                         "id": "6110b6ca-dada-4db8-ae7a-3c5750cfabb2"
    //                     }
    //                 ],
    //                 "lastName": "Халилова",
    //                 "firstName": "Эльза",
    //                 "TG_username": "elza0903",
    //                 "type": "52"
    //             },
    //             "date": 1616798886000,
    //             "question": "я ответила на вакансию и бот написал, что мой отклик заинтересовал работодателя. И написал: \" Инструкция для связи: (и тут почта работодателя)\". То есть я сама должна писать им или как? \n",
    //             "id": "74e77ebe-915b-4a40-88de-bd8f86fafd93"
    //         },
    //         {
    //             "date": 1616783328000,
    //             "user_id": {
    //                 "jobs_selected": 0,
    //                 "image": "https://api.alfa.directual.com/fileUploaded/vitrina2252/bd70b0d5-bf8b-410e-ada5-86bee9db5430.jpg",
    //                 "52_functions": [
    //                     {
    //                         "name": "Личный помощник",
    //                         "id": "6110b6ca-dada-4db8-ae7a-3c5750cfabb2"
    //                     },
    //                     {
    //                         "name": "Администратор",
    //                         "id": "de84414a-0886-41c4-bc51-1321abf1f722"
    //                     },
    //                     {
    //                         "name": "Продюссер",
    //                         "id": "69cf9997-fd45-442e-8590-74815535e949"
    //                     },
    //                     {
    //                         "name": "Event",
    //                         "id": "286b253f-f862-49a5-bdca-2301edc2a679"
    //                     }
    //                 ],
    //                 "22_functions": [
    //                     {
    //                         "name": "Администратор",
    //                         "id": "cee393b6-1f7f-459b-8d5f-a9b59c41cf92"
    //                     },
    //                     {
    //                         "name": "Бариста",
    //                         "id": "8736e749-48f8-4dfb-ba6d-483d0ce9f350"
    //                     },
    //                     {
    //                         "name": "Управляющий",
    //                         "id": "d6d250fd-4f29-4b09-a140-9757ac0266aa"
    //                     },
    //                     {
    //                         "name": "Хостес",
    //                         "id": "ee6cd622-e697-4d59-bca0-d34d4d6fa058"
    //                     }
    //                 ],
    //                 "lastName": "Мирошниченко ",
    //                 "firstName": "Арина",
    //                 "TG_username": "mmm_orina",
    //                 "type": "22"
    //             },
    //             "question": "Новые вакансии?",
    //             "id": "849545ac-1c85-4ce8-a22b-c105a798b08d"
    //         },
    //         {
    //             "date": 1616752955000,
    //             "question": "Инструкции для связи с работодателем: info@artcentre\\.moscow",
    //             "user_id": {
    //                 "jobs_selected": 8,
    //                 "image": "https://api.alfa.directual.com/fileUploaded/vitrina2252/4feb1e5f-fafe-4cec-9f4e-b81e47dbbf46.jpg",
    //                 "52_functions": [
    //                     {
    //                         "name": "Копирайтинг",
    //                         "id": "605143a0-bb72-49ec-a7c2-16d6a84baa6b"
    //                     }
    //                 ],
    //                 "lastName": "Куделько",
    //                 "firstName": "Ярослава ",
    //                 "TG_username": "Lasunya",
    //                 "type": "52"
    //             },
    //             "id": "311cef21-f84f-4d9b-bb7f-76a418b2cb14"
    //         },
    //         {
    //             "date": 1616752955000,
    //             "question": "Как получить инструкцию для связи с работодателем? Это ссылка выдаёт в поиске просто страницы в гугле, связанные с артцентром",
    //             "user_id": {
    //                 "jobs_selected": 8,
    //                 "image": "https://api.alfa.directual.com/fileUploaded/vitrina2252/4feb1e5f-fafe-4cec-9f4e-b81e47dbbf46.jpg",
    //                 "52_functions": [
    //                     {
    //                         "name": "Копирайтинг",
    //                         "id": "605143a0-bb72-49ec-a7c2-16d6a84baa6b"
    //                     }
    //                 ],
    //                 "lastName": "Куделько",
    //                 "firstName": "Ярослава ",
    //                 "TG_username": "Lasunya",
    //                 "type": "52"
    //             },
    //             "id": "ddca2845-7852-4327-b734-122cc6d617ac"
    //         },
    //         {
    //             "user_id": {
    //                 "jobs_selected": 36,
    //                 "image": "https://api.alfa.directual.com/fileUploaded/vitrina2252/2f7a84ee-407e-4170-a9ea-895d4bf3a28a.jpg",
    //                 "52_functions": [
    //                     {
    //                         "name": "Редактор",
    //                         "id": "565e74f1-6a97-491b-a97b-7578d26f9b0e"
    //                     },
    //                     {
    //                         "name": "Контент",
    //                         "id": "14746650-98aa-44d7-8989-472c8162dba8"
    //                     },
    //                     {
    //                         "name": "Копирайтинг",
    //                         "id": "605143a0-bb72-49ec-a7c2-16d6a84baa6b"
    //                     },
    //                     {
    //                         "name": "Art-директор",
    //                         "id": "42793449-612e-4a86-b519-e59c8c4d0f7b"
    //                     },
    //                     {
    //                         "name": "Стажер ",
    //                         "id": "9d328ba3-59c4-43f8-809d-068d86dada3c"
    //                     },
    //                     {
    //                         "name": "Личный помощник",
    //                         "id": "6110b6ca-dada-4db8-ae7a-3c5750cfabb2"
    //                     },
    //                     {
    //                         "name": "Event",
    //                         "id": "286b253f-f862-49a5-bdca-2301edc2a679"
    //                     }
    //                 ],
    //                 "lastName": "Киселева",
    //                 "firstName": "Арина*",
    //                 "TG_username": "areollaa",
    //                 "type": "52"
    //             },
    //             "date": 1616719188000,
    //             "question": "Как можно отредактировать профиль и откликнуться на конкретную вакансию?",
    //             "id": "09679a04-25de-485e-a555-140b6ab6c60b"
    //         }
    //     ],
    //     "totalPages": 30,
    //     "pageNumber": 0,
    //     "error": null,
    //     "fieldScheme": [
    //         [
    //             "admin_id.firstName",
    //             1330951
    //         ],
    //         [
    //             "admin_id.lastName",
    //             1330951
    //         ],
    //         [
    //             "answer",
    //             1330969
    //         ],
    //         [
    //             "date",
    //             1330969
    //         ],
    //         [
    //             "date_answer",
    //             1330969
    //         ],
    //         [
    //             "id",
    //             1330969
    //         ],
    //         [
    //             "question",
    //             1330969
    //         ],
    //         [
    //             "user_id.22_functions.name",
    //             1330974
    //         ],
    //         [
    //             "user_id.52_functions.name",
    //             1330975
    //         ],
    //         [
    //             "user_id.TG_username",
    //             1330951
    //         ],
    //         [
    //             "user_id.firstName",
    //             1330951
    //         ],
    //         [
    //             "user_id.image",
    //             1330951
    //         ],
    //         [
    //             "user_id.isBlocked",
    //             1330951
    //         ],
    //         [
    //             "user_id.jobs_selected",
    //             1330951
    //         ],
    //         [
    //             "user_id.lastName",
    //             1330951
    //         ],
    //         [
    //             "user_id.salary_text",
    //             1330951
    //         ],
    //         [
    //             "user_id.type",
    //             1330951
    //         ]
    //     ],
    //     "writeFields": [],
    //     "structures": {
    //         "1330951": {
    //             "networkID": 4265,
    //             "id": 1330951,
    //             "dateCreated": "2020-12-25T09:02:32Z",
    //             "hidden": false,
    //             "dateHidden": null,
    //             "name": "App users",
    //             "sysName": "WebUser",
    //             "jsonObject": "[{\"sysName\":\"isBlocked\",\"dataType\":\"boolean\",\"name\":\"Block user\",\"id\":\"1\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false},{\"sysName\":\"dateCreated\",\"dataType\":\"string\",\"name\":\"dateCreated\",\"id\":\"10\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"linkType\":false,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false},{\"sysName\":\"jobs_active\",\"dataType\":\"number\",\"name\":\"Количество активных вакансий\",\"id\":\"10941610887494618\",\"link\":\"\",\"group\":\"1607938855954\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false},{\"sysName\":\"password\",\"dataType\":\"string\",\"name\":\"Password (hash)\",\"id\":\"11\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false},{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"Username (login)\",\"id\":\"12\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false},{\"sysName\":\"jobs_new\",\"dataType\":\"number\",\"name\":\"Количество вакансий, ожидающих оплату\",\"id\":\"17741610887511981\",\"link\":\"\",\"group\":\"1607938855954\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false},{\"sysName\":\"gender\",\"dataType\":\"string\",\"name\":\"Пол\",\"id\":\"2\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false},{\"sysName\":\"52_functions\",\"dataType\":\"arrayLink\",\"name\":\"Функции для категории 52\",\"id\":\"22101607077116998\",\"link\":\"functions52\",\"group\":\"1607016878115\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"json\":false},{\"sysName\":\"lastName\",\"dataType\":\"string\",\"name\":\"Фамилия\",\"id\":\"3\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false},{\"sysName\":\"TG_username\",\"dataType\":\"string\",\"name\":\"Telegram\",\"id\":\"33601607938915585\",\"link\":\"\",\"group\":\"1606985920923\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false},{\"sysName\":\"22_functions\",\"dataType\":\"arrayLink\",\"name\":\"Функции для категории 22\",\"id\":\"34391607077096514\",\"link\":\"functions22\",\"group\":\"1607016878115\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"json\":false},{\"sysName\":\"employer_description\",\"dataType\":\"string\",\"name\":\"Описание компании\",\"id\":\"34671609671007166\",\"link\":\"\",\"group\":\"1607938855954\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false},{\"sysName\":\"churn\",\"dataType\":\"boolean\",\"name\":\"Вышел из бота\",\"id\":\"37051614937701032\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false},{\"sysName\":\"firstName\",\"dataType\":\"string\",\"name\":\"Имя\",\"id\":\"4\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false},{\"sysName\":\"jobs_selected\",\"dataType\":\"number\",\"name\":\"Количество подходящих вакансий\",\"id\":\"49081610887960593\",\"link\":\"\",\"group\":\"1607016878115\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false},{\"sysName\":\"salary_text\",\"dataType\":\"string\",\"name\":\"Ожидания по доходу\",\"id\":\"49741607082338411\",\"link\":\"\",\"group\":\"1607016878115\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false},{\"sysName\":\"role\",\"dataType\":\"string\",\"name\":\"Роли\",\"id\":\"5\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false},{\"sysName\":\"TG_user_id\",\"dataType\":\"link\",\"name\":\"TG_user\",\"id\":\"55611607016886218\",\"link\":\"TUser\",\"group\":\"1607016878115\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":true,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"json\":false},{\"sysName\":\"isAuthorization\",\"dataType\":\"boolean\",\"name\":\"isAuthorization\",\"id\":\"6\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"linkType\":false,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false},{\"sysName\":\"salary_raw\",\"dataType\":\"json\",\"name\":\"Ожидания по доходу \",\"id\":\"63391607082324656\",\"link\":\"\",\"group\":\"1607016878115\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"rangeSlider\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"unitName\":\"k ₽\",\"booleanOptions\":[\"True\",\"False\"],\"customOptionPlaceholder\":\"Describe your option\",\"range\":{\"max\":300,\"min\":20,\"step\":10},\"customOptionType\":\"textarea\"},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":true},{\"sysName\":\"image\",\"dataType\":\"file\",\"name\":\"image\",\"id\":\"63411607068082205\",\"link\":\"\",\"group\":\"1607016878115\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false},{\"sysName\":\"Facebook_lonk\",\"dataType\":\"string\",\"name\":\"Facebook\",\"id\":\"64931609825374119\",\"link\":\"\",\"group\":\"1607016878115\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false},{\"sysName\":\"_salary_from\",\"dataType\":\"number\",\"name\":\"\",\"id\":\"67141609921387509\",\"link\":\"\",\"group\":\"1607016878115\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false},{\"sysName\":\"employer_name\",\"dataType\":\"string\",\"name\":\"Название компании\",\"id\":\"68021607939162171\",\"link\":\"\",\"group\":\"1607938855954\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false},{\"sysName\":\"employer_city_id\",\"dataType\":\"arrayLink\",\"name\":\"Город(а) компании\",\"id\":\"68231607939175436\",\"link\":\"cities\",\"group\":\"1607938855954\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"json\":false},{\"sysName\":\"type\",\"dataType\":\"link\",\"name\":\"Категория вакансий\",\"id\":\"68641607070972375\",\"link\":\"Type2252\",\"group\":\"1607016878115\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"booleanOptions\":[\"2 через 2\",\"5 через 2\"],\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\"},\"groupName\":null,\"linkType\":true,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"json\":false},{\"sysName\":\"jobs_selected_ids\",\"dataType\":\"arrayLink\",\"name\":\"Подходящие вакансии\",\"id\":\"69211616063671236\",\"link\":\"Jobs\",\"group\":\"1607016878115\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"json\":false},{\"sysName\":\"dateLastActivity\",\"dataType\":\"string\",\"name\":\"dateLastActivity\",\"id\":\"7\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"linkType\":false,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false},{\"sysName\":\"_salary_to\",\"dataType\":\"number\",\"name\":\"\",\"id\":\"77421609921394419\",\"link\":\"\",\"group\":\"1607016878115\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false},{\"sysName\":\"email\",\"dataType\":\"string\",\"name\":\"Email\",\"id\":\"8\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"email\",\"formatOptions\":{},\"groupName\":\"Contacts\",\"linkType\":false,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false},{\"sysName\":\"city\",\"dataType\":\"link\",\"name\":\"Город\",\"id\":\"80181607081867668\",\"link\":\"cities\",\"group\":\"1606985920923\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":true,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"json\":false},{\"sysName\":\"CV_file\",\"dataType\":\"file\",\"name\":\"Резюме\",\"id\":\"84081609825345581\",\"link\":\"\",\"group\":\"1607016878115\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false},{\"sysName\":\"feedback_ids\",\"dataType\":\"arrayLink\",\"name\":\"Фидбеки юзера\",\"id\":\"86081613409739256\",\"link\":\"Feedback\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"json\":false},{\"sysName\":\"employer_website\",\"dataType\":\"string\",\"name\":\"Сайт компании\",\"id\":\"89401607939216442\",\"link\":\"\",\"group\":\"1607938855954\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false},{\"sysName\":\"phone\",\"dataType\":\"string\",\"name\":\"Телефон\",\"id\":\"9\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"phone\",\"formatOptions\":{},\"groupName\":\"Contacts\",\"linkType\":false,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false},{\"sysName\":\"Instagram_link\",\"dataType\":\"string\",\"name\":\"Instagram\",\"id\":\"91391609825359387\",\"link\":\"\",\"group\":\"1607016878115\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false},{\"sysName\":\"CV_update_date\",\"dataType\":\"string\",\"name\":\"Дата обновления резюме\",\"id\":\"92571610010803323\",\"link\":\"\",\"group\":\"1607016878115\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false}]",
    //             "jsonGroupSettings": "[{\"name\":\"Contacts\",\"id\":1606985920923,\"order\":0},{\"name\":\"Кандидат\",\"id\":1607016878115,\"order\":1},{\"name\":\"Работодатель\",\"id\":1607938855954,\"order\":2}]",
    //             "jsonViewIdSettings": "[{\"sysName\":\"firstName\"},{\"sysName\":\"lastName\"}]",
    //             "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
    //             "jsonNativeIndexSettings": null,
    //             "indexEnabled": true,
    //             "lastIndexUpdate": 0,
    //             "indexName": "",
    //             "dateChanged": "2021-03-18T10:34:58Z",
    //             "createBy": 0,
    //             "changedBy": 1,
    //             "_settings": null,
    //             "_nativeIndexSettings": null,
    //             "objectIDSysName": "id",
    //             "innerIDField": {
    //                 "sysName": "id",
    //                 "name": "Username (login)",
    //                 "dataType": "id",
    //                 "id": "12",
    //                 "link": "",
    //                 "group": "0",
    //                 "tags": "",
    //                 "indexing": false,
    //                 "ordering": false,
    //                 "description": null,
    //                 "weight": null,
    //                 "order": 0,
    //                 "linkIndexFieldSysName": [],
    //                 "defaultValue": "",
    //                 "constraints": null,
    //                 "synthetic": false,
    //                 "format": null,
    //                 "formatOptions": {},
    //                 "groupName": null,
    //                 "linkType": false,
    //                 "linkOrArrayLinkType": false,
    //                 "arrayLink": false,
    //                 "typeVariable": {},
    //                 "indexExists": false,
    //                 "json": false
    //             },
    //             "folderId": null
    //         },
    //         "1330969": {
    //             "networkID": 4265,
    //             "id": 1330969,
    //             "dateCreated": "2020-09-18T13:33:20Z",
    //             "hidden": false,
    //             "dateHidden": null,
    //             "name": "Вопросы",
    //             "sysName": "questions",
    //             "jsonObject": "[{\"sysName\":\"@who\",\"dataType\":\"string\",\"name\":\"who changed\",\"id\":\"-1\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"@dateCreated\",\"dataType\":\"date\",\"name\":\"date created\",\"id\":\"-2\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"@dateChanged\",\"dataType\":\"date\",\"name\":\"date changed\",\"id\":\"-3\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"is_deleted\",\"dataType\":\"boolean\",\"name\":\"\",\"id\":\"30681603134054838\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"admin_id\",\"dataType\":\"link\",\"name\":\"Кто ответил\",\"id\":\"76431600436848180\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"json\":false,\"indexExists\":false},{\"sysName\":\"date\",\"dataType\":\"date\",\"name\":\"Дата вопроса\",\"id\":\"83411601287631450\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"date_answer\",\"dataType\":\"date\",\"name\":\"Дата ответа\",\"id\":\"86211605857182746\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"question\",\"dataType\":\"string\",\"name\":\"Вопрос\",\"id\":\"91971600436849319\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"user_id\",\"dataType\":\"link\",\"name\":\"Кто спросил\",\"id\":\"92661600436847692\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"json\":false,\"indexExists\":false},{\"sysName\":\"answer\",\"dataType\":\"string\",\"name\":\"Ответ\",\"id\":\"97611600436853189\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"json\":false,\"indexExists\":false}]",
    //             "jsonGroupSettings": "[]",
    //             "jsonViewIdSettings": "[{\"sysName\":\"question\"}]",
    //             "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
    //             "jsonNativeIndexSettings": null,
    //             "indexEnabled": true,
    //             "lastIndexUpdate": 0,
    //             "indexName": "",
    //             "dateChanged": "2020-11-20T07:26:33Z",
    //             "createBy": 1,
    //             "changedBy": 21,
    //             "_settings": null,
    //             "_nativeIndexSettings": null,
    //             "objectIDSysName": "id",
    //             "innerIDField": {
    //                 "sysName": "id",
    //                 "name": "id",
    //                 "dataType": "id",
    //                 "id": "0",
    //                 "link": "",
    //                 "group": "0",
    //                 "tags": "",
    //                 "indexing": false,
    //                 "ordering": false,
    //                 "description": null,
    //                 "weight": null,
    //                 "order": 0,
    //                 "linkIndexFieldSysName": [],
    //                 "defaultValue": "",
    //                 "constraints": null,
    //                 "synthetic": false,
    //                 "format": null,
    //                 "formatOptions": null,
    //                 "groupName": null,
    //                 "linkType": false,
    //                 "linkOrArrayLinkType": false,
    //                 "arrayLink": false,
    //                 "typeVariable": {},
    //                 "indexExists": false,
    //                 "json": false
    //             },
    //             "folderId": 33596510
    //         },
    //         "1330974": {
    //             "networkID": 4265,
    //             "id": 1330974,
    //             "dateCreated": "2020-12-04T10:19:23Z",
    //             "hidden": false,
    //             "dateHidden": null,
    //             "name": "Функции 22",
    //             "sysName": "functions22",
    //             "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"name\",\"name\":\"Функция\",\"dataType\":\"string\",\"id\":\"83101607077166818\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"isDelete\",\"name\":\"\",\"dataType\":\"boolean\",\"id\":\"96931607077672366\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"@who\",\"name\":\"who changed\",\"dataType\":\"string\",\"id\":\"-1\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"@dateCreated\",\"name\":\"date created\",\"dataType\":\"date\",\"id\":\"-2\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"@dateChanged\",\"name\":\"date changed\",\"dataType\":\"date\",\"id\":\"-3\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false}]",
    //             "jsonGroupSettings": null,
    //             "jsonViewIdSettings": "[{\"sysName\":\"name\"}]",
    //             "jsonSettings": null,
    //             "jsonNativeIndexSettings": null,
    //             "indexEnabled": true,
    //             "lastIndexUpdate": 0,
    //             "indexName": "",
    //             "dateChanged": "2020-12-04T10:30:14Z",
    //             "createBy": 1,
    //             "changedBy": 1,
    //             "_settings": null,
    //             "_nativeIndexSettings": null,
    //             "objectIDSysName": "id",
    //             "innerIDField": {
    //                 "sysName": "id",
    //                 "name": "id",
    //                 "dataType": "id",
    //                 "id": "0",
    //                 "link": "",
    //                 "group": "0",
    //                 "tags": "",
    //                 "indexing": false,
    //                 "ordering": false,
    //                 "description": null,
    //                 "weight": null,
    //                 "order": 0,
    //                 "linkIndexFieldSysName": [],
    //                 "defaultValue": "",
    //                 "constraints": null,
    //                 "synthetic": false,
    //                 "format": null,
    //                 "formatOptions": null,
    //                 "groupName": null,
    //                 "linkType": false,
    //                 "linkOrArrayLinkType": false,
    //                 "arrayLink": false,
    //                 "typeVariable": {},
    //                 "indexExists": false,
    //                 "json": false
    //             },
    //             "folderId": 33596509
    //         },
    //         "1330975": {
    //             "networkID": 4265,
    //             "id": 1330975,
    //             "dateCreated": "2020-12-04T10:19:52Z",
    //             "hidden": false,
    //             "dateHidden": null,
    //             "name": "Функции 52",
    //             "sysName": "functions52",
    //             "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"isDelete\",\"name\":\"\",\"dataType\":\"boolean\",\"id\":\"21621607077688079\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"name\",\"name\":\"Функция\",\"dataType\":\"string\",\"id\":\"83101607077166818\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"@who\",\"name\":\"who changed\",\"dataType\":\"string\",\"id\":\"-1\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"@dateCreated\",\"name\":\"date created\",\"dataType\":\"date\",\"id\":\"-2\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"@dateChanged\",\"name\":\"date changed\",\"dataType\":\"date\",\"id\":\"-3\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false}]",
    //             "jsonGroupSettings": null,
    //             "jsonViewIdSettings": "[{\"sysName\":\"name\"}]",
    //             "jsonSettings": null,
    //             "jsonNativeIndexSettings": null,
    //             "indexEnabled": true,
    //             "lastIndexUpdate": 0,
    //             "indexName": "",
    //             "dateChanged": "2020-12-04T10:28:14Z",
    //             "createBy": 1,
    //             "changedBy": 1,
    //             "_settings": null,
    //             "_nativeIndexSettings": null,
    //             "objectIDSysName": "id",
    //             "innerIDField": {
    //                 "sysName": "id",
    //                 "name": "id",
    //                 "dataType": "id",
    //                 "id": "0",
    //                 "link": "",
    //                 "group": "0",
    //                 "tags": "",
    //                 "indexing": false,
    //                 "ordering": false,
    //                 "description": null,
    //                 "weight": null,
    //                 "order": 0,
    //                 "linkIndexFieldSysName": [],
    //                 "defaultValue": "",
    //                 "constraints": null,
    //                 "synthetic": false,
    //                 "format": null,
    //                 "formatOptions": null,
    //                 "groupName": null,
    //                 "linkType": false,
    //                 "linkOrArrayLinkType": false,
    //                 "arrayLink": false,
    //                 "typeVariable": {},
    //                 "indexExists": false,
    //                 "json": false
    //             },
    //             "folderId": 33596509
    //         }
    //     },
    //     "isSuccessWrite": false,
    //     "writeError": null,
    //     "writeResponse": null,
    //     "fileds": []
    // }

    const exampleTabs = [
        { key: '1', title: 'Tab number 1', content: <div>Tab content 1</div>, hidden: false },
        { key: '2', title: 'Tab 2', content: <div>Tab content 2</div>, hidden: false },
        { key: '3', disabled: false, title: 'Tab 3 (disabled)', content: <div>Tab content 3</div> }
    ]

    const defaultOptions = [
        {
            "id": "33649723",
            "name": "System",
            "parentID": "root",
            "icon": "folder",
            "isFolder": true
        },
        {
            "id": "33649724",
            "name": "Logs",
            "parentID": "33649723",
            "icon": "folder",
            "isFolder": true
        },
        {
            "id": "33649725",
            "name": "Integrations",
            "parentID": "root",
            "icon": "folder",
            "isFolder": true
        },
        {
            "id": "33649726",
            "name": "Email",
            "parentID": "33649725",
            "icon": "folder",
            "isFolder": true
        },
        {
            "id": "33649727",
            "name": "SMS",
            "parentID": "33649725",
            "icon": "folder",
            "isFolder": true
        },
        {
            "id": "33649728",
            "name": "Telegram",
            "parentID": "33649725",
            "icon": "folder",
            "isFolder": true
        },
        {
            "id": "33649729",
            "name": "Zapier",
            "parentID": "33649725",
            "icon": "folder",
            "isFolder": true
        },
        {
            "id": "33649730",
            "name": "WebFlow",
            "parentID": "33649725",
            "icon": "folder",
            "isFolder": true
        },
        {
            "id": "33649731",
            "name": "Webhooks",
            "parentID": "33649725",
            "icon": "folder",
            "isFolder": true
        },
        {
            "id": "33656474",
            "name": "🛒 ECWID",
            "parentID": "root",
            "icon": "folder",
            "isFolder": true
        },
        {
            "id": "root",
            "name": "Root",
            "parentID": "null",
            "icon": "folder",
            "isFolder": true
        },
        {
            "id": "trash",
            "name": "Deleted structures",
            "parentID": "null",
            "icon": "delete",
            "isFolder": false
        },
        {
            "id": "1428580_structure",
            "name": "App users",
            "parentID": "root",
            "icon": "user",
            "sysName": 'WebUser',
            "isFolder": false
        },
        {
            "id": "1428581_structure",
            "name": "Files",
            "parentID": "root",
            "icon": "clip",
            "isFolder": false
        },
        {
            "id": "1428582_structure",
            "name": "App global constants",
            "parentID": "33649723",
            "icon": "database",
            "isFolder": false
        },
        {
            "id": "1428583_structure",
            "name": "System messages",
            "parentID": "33649724",
            "icon": "database",
            "isFolder": false
        },
        {
            "id": "1428584_structure",
            "name": "System exceptions",
            "parentID": "33649724",
            "icon": "database",
            "isFolder": false
        },
        {
            "id": "1428585_structure",
            "name": "Import data logs",
            "parentID": "33649724",
            "icon": "database",
            "isFolder": false
        },
        {
            "id": "1428586_structure",
            "name": "Incoming emails",
            "parentID": "33649726",
            "icon": "database",
            "isFolder": false
        },
        {
            "id": "1428587_structure",
            "name": "Sent emails",
            "parentID": "33649726",
            "icon": "database",
            "isFolder": false
        },
        {
            "id": "1428588_structure",
            "name": "SMS sent",
            "parentID": "33649727",
            "icon": "database",
            "isFolder": false
        },
        {
            "id": "1428589_structure",
            "name": "Incoming Telegram messages",
            "parentID": "33649728",
            "icon": "database",
            "isFolder": false
        },
        {
            "id": "1428590_structure",
            "name": "Outcoming Telegram messages",
            "parentID": "33649728",
            "icon": "database",
            "isFolder": false
        },
        {
            "id": "1428591_structure",
            "name": "Users Telegram",
            "parentID": "33649728",
            "icon": "database",
            "isFolder": false
        },
        {
            "id": "1428592_structure",
            "name": "Chats Telegram",
            "parentID": "33649728",
            "icon": "database",
            "isFolder": false
        },
        {
            "id": "1428593_structure",
            "name": "Keyboards Telegram",
            "parentID": "33649728",
            "icon": "database",
            "isFolder": false
        },
        {
            "id": "1428594_structure",
            "name": "Zapier access settings",
            "parentID": "33649729",
            "icon": "database",
            "isFolder": false
        },
        {
            "id": "1428595_structure",
            "name": "Webflow access settings",
            "parentID": "33649730",
            "icon": "database",
            "isFolder": false
        },
        {
            "id": "1428596_structure",
            "name": "Social users",
            "parentID": "33649723",
            "icon": "database",
            "isFolder": false
        },
        {
            "id": "1428597_structure",
            "name": "User sessions",
            "parentID": "33649723",
            "icon": "database",
            "isFolder": false
        },
        {
            "id": "99018107_structure",
            "name": "ChatBotWebHookData",
            "parentID": "33649731",
            "icon": "database",
            "isFolder": false
        },
        {
            "id": "99018110_structure",
            "name": "Ecwid Goods",
            "parentID": "33656474",
            "icon": "database",
            "isFolder": false
        },
        {
            "id": "99018113_structure",
            "name": "Ecwid updates",
            "parentID": "33656474",
            "icon": "database",
            "isFolder": false
        },
        {
            "id": "99018525_structure",
            "name": "Mockup Goods",
            "parentID": "root",
            "icon": "database",
            "isFolder": false
        },
        {
            "id": "99019069_structure",
            "name": "Ecwid pull integration",
            "parentID": "33656474",
            "icon": "database",
            "isFolder": false
        }
    ]

    const oneLevelOptions = [
        {
            "id": "root",
            "icon": "application",
            "value": "All scenarios"
        },
        {
            "id": "33649724",
            "name": "Logs",
            "parentID": "root",
            "icon": "folder",
            "isFolder": true
        },
        {
            "id": "3364972c",
            "name": "Logs2",
            "parentID": "root",
            "icon": "folder",
            "isFolder": true
        },
        {
            "id": "33649721",
            "name": "Home",
            "parentID": "3364972c",
            "icon": "application",
            "isFolder": false
        },
        {
            "id": "3364972a",
            "name": "Profile",
            "parentID": "root",
            "icon": "application",
            "isFolder": false
        },
        {
            "id": "3364972a1",
            "name": "Profile2",
            "parentID": "root",
            "icon": "application",
            "isFolder": false
        },
        {
            "id": "3364972aa",
            "name": "Profile123",
            "parentID": "3364972c",
            "icon": "application",
            "isFolder": false
        },
        {
            "id": "3364972aaa",
            "name": "Profile1234",
            "parentID": "3364972c",
            "icon": "application",
            "isFolder": false
        },
        {
            "id": "3364972b",
            "name": "All users",
            "parentID": "33649724",
            "icon": "application",
            "isFolder": false
        }
    ]

    const [options, setOptions] = useState(oneLevelOptions)
    const [selectedID, setSelectedID] = useState('root')
    const [tree,setTree] = useState(null)

    // console.log("tree")
    // console.log(tree)

    const [loading, setLoading] = useState(false)

    //return <TabsPane fpsTabs saveTabToURL tabs={exampleTabs} hideSingleTab fixedScroll={false} />

    // return <FpsLayout layout={layoutExample} />

    return <div style={{width:300}}>
        <Button onClick={()=>setLoading(!loading)}>loader...</Button><br />
        <Tree
            draggable
            options={options}
            currentTree={tree}
            submitTree={setTree}
            rootName = 'Main menu'
            selectedID={selectedID}
            loading={loading}
            //host='http://ya.ru/'
            onCheck={setSelectedID}
            move={(id, to) => {
                // const saveOptions = [...options]
                // console.log('saveOptions')
                // console.log(saveOptions)
                // const element = saveOptions.filter(i => i.id == id)[0]
                // const index = saveOptions.indexOf(element)
                // console.log(element)
                // console.log(index)
                // if (index == -1) { return }
                // element.parentID = to
                // saveOptions.splice(index,1)
                // saveOptions.splice(index,0,element)
                // console.log('saveOptions modified')
                // console.log(saveOptions)
                // setOptions(saveOptions)
            } }
        />
        <br />
        {/* <Tree
            draggable
            //oneLevel
            options={oneLevelOptions}
            //selectedID={selectedID}
            loading={loading}
            onCheck={setSelectedID}
        /> */}
    </div>
}




{/* 
    const exampleTabs = [
        { key: '1', title: 'Tab number 1', content: <div>Tab content 1</div> },
        { key: '2', title: 'Tab 2', content: <div>Tab content 2</div> },
        { key: '3', disabled: true, title: 'Tab 3 (disabled)', content: <div>Tab content 3</div> }
      ]

    <div>
            <h1>Layout</h1>
            <h2>Tabs</h2>
            <TabsPane tabs={exampleTabs} currentTabKey={1} fixedScroll={false} />
            <h2 style={{ marginTop: 32, marginBottom: 32 }}>Images-buttons</h2>
            <ImageButtons
                borderRadius={18}
                size={120}
                onClick={value=>console.log(value)}
                margin={18}
                options={[
                    {
                        image:'https://api.alfa.directual.com/fileUploaded/directual-site/094d439f-ac27-4a49-8f84-d41e39e33efc.png',
                        color:'#fff',
                        key:'gmail'
                    },
                    {
                        image:'https://api.alfa.directual.com/fileUploaded/directual-site/094d439f-ac27-4a49-8f84-d41e39e33efc.png',
                        color:'#8CD984',
                        key:'smtp'
                    }
                ]}
            />
        </div> */}
