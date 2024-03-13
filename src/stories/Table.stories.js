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
    "sl": "adminPromoCodes",
    "pageSize": "20",
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
                    "fieldSysName": "allowed_uses",
                    "fetch": [],
                    "sysName": "allowed_uses",
                    "name": "Allowed Uses\t",
                    "dataType": "number",
                    "format": "positiveNum",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "amount",
                    "fetch": [],
                    "sysName": "amount",
                    "name": "Amount of Dcoins",
                    "dataType": "decimal",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "code",
                    "fetch": [],
                    "sysName": "code",
                    "name": "Code",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                },
                {
                    "fieldSysName": "date_issued",
                    "fetch": [],
                    "sysName": "date_issued",
                    "name": "Date issued",
                    "dataType": "date",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "date_used",
                    "fetch": [],
                    "sysName": "date_used",
                    "name": "Date used",
                    "dataType": "date",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "description",
                    "fetch": [],
                    "sysName": "description",
                    "name": "Code description",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                },
                {
                    "fieldSysName": "generte_automatically",
                    "fetch": [],
                    "sysName": "generte_automatically",
                    "name": "Generate automatically",
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
                            "Automatically",
                            "Manually"
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
                    "fieldSysName": "isBasic",
                    "fetch": [],
                    "sysName": "isBasic",
                    "name": "Basic code (can be applied only 1 basic code)",
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
                            "Basic",
                            "Special"
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
                    "fieldSysName": "isHidden",
                    "fetch": [],
                    "sysName": "isHidden",
                    "name": "Hidden",
                    "dataType": "boolean",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "isUsed",
                    "fetch": [],
                    "sysName": "isUsed",
                    "name": "Fully used",
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
                            "Used",
                            "Not yet"
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
                    "fieldSysName": "promo_type",
                    "fetch": [],
                    "sysName": "promo_type",
                    "name": "Promo Type",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "link": "promotypes"
                },
                {
                    "fieldSysName": "user_ids",
                    "fetch": [
                        {
                            "fieldSysName": "id",
                            "condition": null,
                            "fetch": []
                        }
                    ],
                    "sysName": "user_ids",
                    "name": "Users (keep empty for universal)",
                    "dataType": "arrayLink",
                    "format": "",
                    "formatOptions": {},
                    "link": "Cloud_users"
                },
                {
                    "fieldSysName": "users_used_ids",
                    "fetch": [
                        {
                            "fieldSysName": "first_name",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "id",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "last_name",
                            "condition": null,
                            "fetch": []
                        }
                    ],
                    "sysName": "users_used_ids",
                    "name": "Who used",
                    "dataType": "arrayLink",
                    "format": "",
                    "formatOptions": {},
                    "link": "Cloud_users"
                },
                {
                    "fieldSysName": "uses_counter",
                    "fetch": [],
                    "sysName": "uses_counter",
                    "name": "Uses Counter",
                    "dataType": "number",
                    "format": "positiveNum",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "affiliate_user",
                    "fetch": [
                        {
                            "fieldSysName": "id",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "country",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "first_name",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "last_name",
                            "condition": null,
                            "fetch": []
                        }
                    ],
                    "sysName": "affiliate_user",
                    "name": "Affiliate user",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "link": "Cloud_users"
                }
            ],
            "writeFields": [
                {
                    "fieldSysName": "allowed_uses",
                    "fetch": [],
                    "sysName": "allowed_uses",
                    "name": "Allowed Uses\t",
                    "dataType": "number",
                    "format": "positiveNum",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "amount",
                    "fetch": [],
                    "sysName": "amount",
                    "name": "Amount of Dcoins",
                    "dataType": "decimal",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "code",
                    "fetch": [],
                    "sysName": "code",
                    "name": "Code",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                },
                {
                    "fieldSysName": "description",
                    "fetch": [],
                    "sysName": "description",
                    "name": "Code description",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                },
                {
                    "fieldSysName": "generte_automatically",
                    "fetch": [],
                    "sysName": "generte_automatically",
                    "name": "Generate automatically",
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
                            "Automatically",
                            "Manually"
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
                    "fieldSysName": "isBasic",
                    "fetch": [],
                    "sysName": "isBasic",
                    "name": "Basic code (can be applied only 1 basic code)",
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
                            "Basic",
                            "Special"
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
                    "fieldSysName": "isHidden",
                    "fetch": [],
                    "sysName": "isHidden",
                    "name": "Hidden",
                    "dataType": "boolean",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "promo_type",
                    "fetch": [],
                    "sysName": "promo_type",
                    "name": "Promo Type",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "link": "promotypes"
                },
                {
                    "fieldSysName": "user_ids",
                    "fetch": [],
                    "sysName": "user_ids",
                    "name": "Users (keep empty for universal)",
                    "dataType": "arrayLink",
                    "format": "",
                    "formatOptions": {},
                    "link": "Cloud_users"
                },
                {
                    "fieldSysName": "affiliate_user",
                    "fetch": [],
                    "sysName": "affiliate_user",
                    "name": "Affiliate user",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "link": "Cloud_users"
                }
            ],
            "fields": {
                "allowed_uses": {
                    "id": "allowed_uses",
                    "content": "Allowed Uses\t",
                    "type": "field",
                    "dataType": "number",
                    "format": "positiveNum",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "amount": {
                    "id": "amount",
                    "content": "Amount of Dcoins",
                    "type": "field",
                    "dataType": "decimal",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "code": {
                    "id": "code",
                    "content": "Code",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": null,
                    "actions": []
                },
                "date_issued": {
                    "id": "date_issued",
                    "content": "Date issued",
                    "type": "field",
                    "dataType": "date",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "date_used": {
                    "id": "date_used",
                    "content": "Date used",
                    "type": "field",
                    "dataType": "date",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "description": {
                    "id": "description",
                    "content": "Code description",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": null,
                    "actions": []
                },
                "generte_automatically": {
                    "id": "generte_automatically",
                    "content": "Generate automatically",
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
                            "Automatically",
                            "Manually"
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
                    "write": true,
                    "read": true,
                    "link": "",
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
                "isBasic": {
                    "id": "isBasic",
                    "content": "Basic code (can be applied only 1 basic code)",
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
                            "Basic",
                            "Special"
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
                    "write": true,
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "isHidden": {
                    "id": "isHidden",
                    "content": "Hidden",
                    "type": "field",
                    "dataType": "boolean",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "isUsed": {
                    "id": "isUsed",
                    "content": "Fully used",
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
                            "Used",
                            "Not yet"
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
                "promo_type": {
                    "id": "promo_type",
                    "content": "Promo Type",
                    "type": "field",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": "promotypes",
                    "actions": []
                },
                "user_ids": {
                    "id": "user_ids",
                    "content": "Users (keep empty for universal)",
                    "type": "field",
                    "dataType": "arrayLink",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": "Cloud_users",
                    "actions": []
                },
                "users_used_ids": {
                    "id": "users_used_ids",
                    "content": "Who used",
                    "type": "field",
                    "dataType": "arrayLink",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "Cloud_users",
                    "actions": []
                },
                "uses_counter": {
                    "id": "uses_counter",
                    "content": "Uses Counter",
                    "type": "field",
                    "dataType": "number",
                    "format": "positiveNum",
                    "formatOptions": {},
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "affiliate_user": {
                    "id": "affiliate_user",
                    "content": "Affiliate user",
                    "type": "field",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": "Cloud_users",
                    "actions": []
                }
            },
            "fieldParams": {
                "amount": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "code": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "date_issued": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "date_used": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "description": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "id": {
                    "include": false,
                    "disableEditing": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "isHidden": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "isUsed": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "promo_type": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "user_ids": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "allowed_uses": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "uses_counter": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "generte_automatically": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "isBasic": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "users_used_ids": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": true,
                    "configureLinkedCard": {
                        "fields": {
                            "first_name": {
                                "id": "first_name",
                                "content": "First name",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": null
                            },
                            "id": {
                                "id": "id",
                                "content": "id",
                                "type": "field",
                                "read": true,
                                "dataType": "id",
                                "format": null,
                                "formatOptions": null
                            },
                            "last_name": {
                                "id": "last_name",
                                "content": "Last name",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": null
                            }
                        },
                        "fieldParams": {
                            "first_name": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "id": {
                                "include": true,
                                "disableEditing": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "last_name": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            }
                        },
                        "fieldOrder": [
                            "id",
                            "first_name",
                            "last_name"
                        ]
                    }
                },
                "affiliate_user": {
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
                        "amount",
                        "code",
                        "date_issued",
                        "date_used",
                        "description",
                        "affiliate_user",
                        "id",
                        "isHidden",
                        "isUsed",
                        "promo_type",
                        "user_ids",
                        "allowed_uses",
                        "uses_counter",
                        "generte_automatically",
                        "isBasic",
                        "users_used_ids"
                    ]
                }
            },
            "columnOrder": [
                "tab-1"
            ],
            "actions": []
        },
        "fields": {
            "amount": {
                "include": true,
                "disableEditing": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "code": {
                "include": true,
                "disableEditing": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "date_issued": {
                "include": true,
                "disableEditing": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "date_used": {
                "include": true,
                "disableEditing": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "description": {
                "include": true,
                "disableEditing": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "id": {
                "include": false,
                "disableEditing": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "isHidden": {
                "include": true,
                "disableEditing": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "isUsed": {
                "include": true,
                "disableEditing": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "promo_type": {
                "include": true,
                "disableEditing": false,
                "fileImageFormat": "square",
                "quickSearch": true,
                "fileImageSize": 200,
                "clickable": false,
                "searchData": [
                    {
                        "key": "loyalty",
                        "value": "loyalty"
                    },
                    {
                        "key": "affiliate",
                        "value": "affiliate"
                    },
                    {
                        "key": "education",
                        "value": "education"
                    },
                    {
                        "key": "billing mistakes",
                        "value": "billing mistakes"
                    },
                    {
                        "key": "welcome",
                        "value": "welcome"
                    },
                    {
                        "key": "partner_grant",
                        "value": "partner_grant"
                    },
                    {
                        "key": "dao-tutorials",
                        "value": "dao-tutorials"
                    },
                    {
                        "key": "marketing-promos",
                        "value": "marketing-promos"
                    },
                    {
                        "key": "bug-report",
                        "value": "bug-report"
                    }
                ]
            },
            "user_ids": {
                "include": true,
                "disableEditing": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "allowed_uses": {
                "include": true,
                "disableEditing": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "uses_counter": {
                "include": true,
                "disableEditing": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "generte_automatically": {
                "include": true,
                "disableEditing": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "isBasic": {
                "include": true,
                "disableEditing": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "users_used_ids": {
                "include": true,
                "disableEditing": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": true,
                "configureLinkedCard": {
                    "fields": {
                        "first_name": {
                            "id": "first_name",
                            "content": "First name",
                            "type": "field",
                            "read": true,
                            "dataType": "string",
                            "format": null,
                            "formatOptions": null
                        },
                        "id": {
                            "id": "id",
                            "content": "id",
                            "type": "field",
                            "read": true,
                            "dataType": "id",
                            "format": null,
                            "formatOptions": null
                        },
                        "last_name": {
                            "id": "last_name",
                            "content": "Last name",
                            "type": "field",
                            "read": true,
                            "dataType": "string",
                            "format": null,
                            "formatOptions": null
                        }
                    },
                    "fieldParams": {
                        "first_name": {
                            "include": true,
                            "disableEditing": false,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "id": {
                            "include": true,
                            "disableEditing": true,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "last_name": {
                            "include": true,
                            "disableEditing": false,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        }
                    },
                    "fieldOrder": [
                        "id",
                        "first_name",
                        "last_name"
                    ]
                }
            },
            "affiliate_user": {
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
                    "fieldSysName": "allowed_uses",
                    "fetch": [],
                    "sysName": "allowed_uses",
                    "name": "Allowed Uses\t",
                    "dataType": "number",
                    "format": "positiveNum",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "amount",
                    "fetch": [],
                    "sysName": "amount",
                    "name": "Amount of Dcoins",
                    "dataType": "decimal",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "code",
                    "fetch": [],
                    "sysName": "code",
                    "name": "Code",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                },
                {
                    "fieldSysName": "date_issued",
                    "fetch": [],
                    "sysName": "date_issued",
                    "name": "Date issued",
                    "dataType": "date",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "date_used",
                    "fetch": [],
                    "sysName": "date_used",
                    "name": "Date used",
                    "dataType": "date",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "description",
                    "fetch": [],
                    "sysName": "description",
                    "name": "Code description",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                },
                {
                    "fieldSysName": "generte_automatically",
                    "fetch": [],
                    "sysName": "generte_automatically",
                    "name": "Generate automatically",
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
                            "Automatically",
                            "Manually"
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
                    "fieldSysName": "isBasic",
                    "fetch": [],
                    "sysName": "isBasic",
                    "name": "Basic code (can be applied only 1 basic code)",
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
                            "Basic",
                            "Special"
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
                    "fieldSysName": "isHidden",
                    "fetch": [],
                    "sysName": "isHidden",
                    "name": "Hidden",
                    "dataType": "boolean",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "isUsed",
                    "fetch": [],
                    "sysName": "isUsed",
                    "name": "Fully used",
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
                            "Used",
                            "Not yet"
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
                    "fieldSysName": "promo_type",
                    "fetch": [],
                    "sysName": "promo_type",
                    "name": "Promo Type",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "link": "promotypes"
                },
                {
                    "fieldSysName": "user_ids",
                    "fetch": [
                        {
                            "fieldSysName": "id",
                            "condition": null,
                            "fetch": []
                        }
                    ],
                    "sysName": "user_ids",
                    "name": "Users (keep empty for universal)",
                    "dataType": "arrayLink",
                    "format": "",
                    "formatOptions": {},
                    "link": "Cloud_users"
                },
                {
                    "fieldSysName": "users_used_ids",
                    "fetch": [
                        {
                            "fieldSysName": "first_name",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "id",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "last_name",
                            "condition": null,
                            "fetch": []
                        }
                    ],
                    "sysName": "users_used_ids",
                    "name": "Who used",
                    "dataType": "arrayLink",
                    "format": "",
                    "formatOptions": {},
                    "link": "Cloud_users"
                },
                {
                    "fieldSysName": "uses_counter",
                    "fetch": [],
                    "sysName": "uses_counter",
                    "name": "Uses Counter",
                    "dataType": "number",
                    "format": "positiveNum",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "affiliate_user",
                    "fetch": [
                        {
                            "fieldSysName": "id",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "country",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "first_name",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "last_name",
                            "condition": null,
                            "fetch": []
                        }
                    ],
                    "sysName": "affiliate_user",
                    "name": "Affiliate user",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "link": "Cloud_users"
                }
            ],
            "writeFields": [
                {
                    "fieldSysName": "allowed_uses",
                    "fetch": [],
                    "sysName": "allowed_uses",
                    "name": "Allowed Uses\t",
                    "dataType": "number",
                    "format": "positiveNum",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "amount",
                    "fetch": [],
                    "sysName": "amount",
                    "name": "Amount of Dcoins",
                    "dataType": "decimal",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "code",
                    "fetch": [],
                    "sysName": "code",
                    "name": "Code",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                },
                {
                    "fieldSysName": "description",
                    "fetch": [],
                    "sysName": "description",
                    "name": "Code description",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                },
                {
                    "fieldSysName": "generte_automatically",
                    "fetch": [],
                    "sysName": "generte_automatically",
                    "name": "Generate automatically",
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
                            "Automatically",
                            "Manually"
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
                    "fieldSysName": "isBasic",
                    "fetch": [],
                    "sysName": "isBasic",
                    "name": "Basic code (can be applied only 1 basic code)",
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
                            "Basic",
                            "Special"
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
                    "fieldSysName": "isHidden",
                    "fetch": [],
                    "sysName": "isHidden",
                    "name": "Hidden",
                    "dataType": "boolean",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "promo_type",
                    "fetch": [],
                    "sysName": "promo_type",
                    "name": "Promo Type",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "link": "promotypes"
                },
                {
                    "fieldSysName": "user_ids",
                    "fetch": [],
                    "sysName": "user_ids",
                    "name": "Users (keep empty for universal)",
                    "dataType": "arrayLink",
                    "format": "",
                    "formatOptions": {},
                    "link": "Cloud_users"
                },
                {
                    "fieldSysName": "affiliate_user",
                    "fetch": [],
                    "sysName": "affiliate_user",
                    "name": "Affiliate user",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "link": "Cloud_users"
                }
            ],
            "fields": {
                "allowed_uses": {
                    "id": "allowed_uses",
                    "content": "Allowed Uses\t",
                    "dataType": "number",
                    "format": "positiveNum",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": ""
                },
                "amount": {
                    "id": "amount",
                    "content": "Amount of Dcoins",
                    "dataType": "decimal",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": ""
                },
                "code": {
                    "id": "code",
                    "content": "Code",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": null
                },
                "date_issued": {
                    "id": "date_issued",
                    "content": "Date issued",
                    "dataType": "date",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": ""
                },
                "date_used": {
                    "id": "date_used",
                    "content": "Date used",
                    "dataType": "date",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": ""
                },
                "description": {
                    "id": "description",
                    "content": "Code description",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": null
                },
                "generte_automatically": {
                    "id": "generte_automatically",
                    "content": "Generate automatically",
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
                            "Automatically",
                            "Manually"
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
                    "write": true,
                    "read": true,
                    "link": ""
                },
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
                "isBasic": {
                    "id": "isBasic",
                    "content": "Basic code (can be applied only 1 basic code)",
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
                            "Basic",
                            "Special"
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
                    "write": true,
                    "read": true,
                    "link": ""
                },
                "isHidden": {
                    "id": "isHidden",
                    "content": "Hidden",
                    "dataType": "boolean",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": ""
                },
                "isUsed": {
                    "id": "isUsed",
                    "content": "Fully used",
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
                            "Used",
                            "Not yet"
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
                "promo_type": {
                    "id": "promo_type",
                    "content": "Promo Type",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": "promotypes"
                },
                "user_ids": {
                    "id": "user_ids",
                    "content": "Users (keep empty for universal)",
                    "dataType": "arrayLink",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": "Cloud_users"
                },
                "users_used_ids": {
                    "id": "users_used_ids",
                    "content": "Who used",
                    "dataType": "arrayLink",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "Cloud_users"
                },
                "uses_counter": {
                    "id": "uses_counter",
                    "content": "Uses Counter",
                    "dataType": "number",
                    "format": "positiveNum",
                    "formatOptions": {},
                    "read": true,
                    "link": ""
                },
                "affiliate_user": {
                    "id": "affiliate_user",
                    "content": "Affiliate user",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": "Cloud_users"
                }
            },
            "fieldParams": {
                "amount": {
                    "include": true,
                    "fileImageFormat": "square",
                    "fileImageSize": 80,
                    "colorCode": false,
                    "colorFormat": "square",
                    "colorSize": 40
                },
                "code": {
                    "include": true,
                    "fileImageFormat": "square",
                    "fileImageSize": 80,
                    "colorCode": false,
                    "colorFormat": "square",
                    "colorSize": 40
                },
                "date_issued": {
                    "include": true,
                    "fileImageFormat": "square",
                    "fileImageSize": 80,
                    "colorCode": false,
                    "colorFormat": "square",
                    "colorSize": 40
                },
                "date_used": {
                    "include": false,
                    "fileImageFormat": "square",
                    "fileImageSize": 80,
                    "colorCode": false,
                    "colorFormat": "square",
                    "colorSize": 40
                },
                "description": {
                    "include": true,
                    "fileImageFormat": "square",
                    "fileImageSize": 80,
                    "colorCode": false,
                    "colorFormat": "square",
                    "colorSize": 40
                },
                "id": {
                    "include": false,
                    "fileImageFormat": "square",
                    "fileImageSize": 80,
                    "colorCode": false,
                    "colorFormat": "square",
                    "colorSize": 40
                },
                "isHidden": {
                    "include": true,
                    "fileImageFormat": "square",
                    "fileImageSize": 80,
                    "colorCode": false,
                    "colorFormat": "square",
                    "colorSize": 40
                },
                "isUsed": {
                    "include": true,
                    "fileImageFormat": "square",
                    "fileImageSize": 80,
                    "colorCode": false,
                    "colorFormat": "square",
                    "colorSize": 40
                },
                "promo_type": {
                    "include": true,
                    "fileImageFormat": "square",
                    "fileImageSize": 80,
                    "colorCode": false,
                    "colorFormat": "square",
                    "colorSize": 40
                },
                "user_ids": {
                    "include": false,
                    "fileImageFormat": "square",
                    "fileImageSize": 80,
                    "colorCode": false,
                    "colorFormat": "square",
                    "colorSize": 40
                },
                "allowed_uses": {
                    "include": true,
                    "fileImageFormat": "square",
                    "fileImageSize": 80,
                    "colorCode": false,
                    "colorFormat": "square",
                    "colorSize": 40
                },
                "generte_automatically": {
                    "include": false,
                    "fileImageFormat": "square",
                    "fileImageSize": 80,
                    "colorCode": false,
                    "colorFormat": "square",
                    "colorSize": 40
                },
                "uses_counter": {
                    "include": true,
                    "fileImageFormat": "square",
                    "fileImageSize": 80,
                    "colorCode": false,
                    "colorFormat": "square",
                    "colorSize": 40
                },
                "isBasic": {
                    "include": true,
                    "fileImageFormat": "square",
                    "fileImageSize": 80,
                    "colorCode": false,
                    "colorFormat": "square",
                    "colorSize": 40
                },
                "users_used_ids": {
                    "include": true,
                    "fileImageFormat": "square",
                    "fileImageSize": 80,
                    "colorCode": false,
                    "colorFormat": "square",
                    "colorSize": 40
                },
                "affiliate_user": {
                    "include": true,
                    "fileImageFormat": "square",
                    "fileImageSize": 80,
                    "colorCode": false,
                    "colorFormat": "square",
                    "colorSize": 40
                }
            },
            "fieldOrder": [
                "code",
                "amount",
                "isBasic",
                "date_issued",
                "promo_type",
                "isUsed",
                "allowed_uses",
                "affiliate_user",
                "uses_counter",
                "description",
                "isHidden",
                "date_used",
                "id",
                "user_ids",
                "generte_automatically",
                "users_used_ids"
            ]
        },
        "filterParams": {
            "isFiltering": true,
            "filterFields": {
                "amount": {
                    "active": false,
                    "dataType": "decimal",
                    "format": "",
                    "formatOptions": {},
                    "name": "Amount of Dcoins"
                },
                "isBasic": {
                    "active": false,
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
                            "Basic",
                            "Special"
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
                    "name": "Basic code (can be applied only 1 basic code)"
                },
                "isUsed": {
                    "active": true,
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
                            "Used",
                            "Not yet"
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
                    "name": "Fully used"
                },
                "promo_type": {
                    "active": true,
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "name": "Promo Type",
                    "linkDirectory": [
                        {
                            "id": "loyalty",
                            "text": "loyalty"
                        },
                        {
                            "id": "affiliate",
                            "text": "affiliate"
                        },
                        {
                            "id": "education",
                            "text": "education"
                        },
                        {
                            "id": "billing mistakes",
                            "text": "billing mistakes"
                        },
                        {
                            "id": "welcome",
                            "text": "welcome"
                        },
                        {
                            "id": "partner_grant",
                            "text": "partner_grant"
                        },
                        {
                            "id": "dao-tutorials",
                            "text": "dao-tutorials"
                        },
                        {
                            "id": "marketing-promos",
                            "text": "marketing-promos"
                        },
                        {
                            "id": "bug-report",
                            "text": "bug-report"
                        }
                    ]
                },
                "affiliate_user": {
                    "active": true,
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "name": "Affiliate user",
                    "textsearch": "fulltext"
                },
                "code": {
                    "active": true,
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "name": "Code"
                }
            }
        },
        "tableCellPadding": 4,
        "hideExpandTD": true
    },
    "tableTitle": "",
    "actions": null,
    "headers": [
        {
            "sysName": "allowed_uses",
            "dataType": "number",
            "name": "Allowed Uses\t",
            "id": "88521644226688720",
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
            "format": "positiveNum",
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
            "sysName": "amount",
            "dataType": "decimal",
            "name": "Amount of Dcoins",
            "id": "68541644177974289",
            "link": "",
            "group": "0",
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
            "sysName": "code",
            "dataType": "string",
            "name": "Code",
            "id": "78531644177969497",
            "link": null,
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
            "array": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false
        },
        {
            "sysName": "date_issued",
            "dataType": "date",
            "name": "Date issued",
            "id": "55421644178094578",
            "link": "",
            "group": "0",
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
            "sysName": "date_used",
            "dataType": "date",
            "name": "Date used",
            "id": "61701644178084931",
            "link": "",
            "group": "0",
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
            "sysName": "description",
            "dataType": "string",
            "name": "Code description",
            "id": "88451644178135134",
            "link": null,
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 7,
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
            "sysName": "generte_automatically",
            "dataType": "boolean",
            "name": "Generate automatically",
            "id": "89591644226836608",
            "link": "",
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
            "formatOptions": {
                "customOptionLabel": "My option",
                "keyValue": {
                    "key": "key",
                    "value": "value",
                    "button": "One more"
                },
                "dateLocale": "en-gb",
                "booleanOptions": [
                    "Automatically",
                    "Manually"
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
            "array": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false
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
            "array": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false
        },
        {
            "sysName": "isBasic",
            "dataType": "boolean",
            "name": "Basic code (can be applied only 1 basic code)",
            "id": "50301644246301889",
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
                    "Basic",
                    "Special"
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
            "array": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false
        },
        {
            "sysName": "isHidden",
            "dataType": "boolean",
            "name": "Hidden",
            "id": "80591644226547443",
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
            "array": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false
        },
        {
            "sysName": "isUsed",
            "dataType": "boolean",
            "name": "Fully used",
            "id": "71121644178066378",
            "link": "",
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 9,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
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
                    "Used",
                    "Not yet"
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
            "array": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false
        },
        {
            "sysName": "promo_type",
            "dataType": "link",
            "name": "Promo Type",
            "id": "74721644178529580",
            "link": "promotypes",
            "group": "0",
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
            "sysName": "user_ids",
            "dataType": "arrayLink",
            "name": "Users (keep empty for universal)",
            "id": "56801644177989021",
            "link": "Cloud_users",
            "group": "0",
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
            "sysName": "users_used_ids",
            "dataType": "arrayLink",
            "name": "Who used",
            "id": "43611644249010660",
            "link": "Cloud_users",
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
            "array": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
            "linkType": false,
            "arrayLink": true,
            "indexExists": false
        },
        {
            "sysName": "uses_counter",
            "dataType": "number",
            "name": "Uses Counter",
            "id": "42931644226750822",
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
            "format": "positiveNum",
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
            "sysName": "affiliate_user",
            "dataType": "link",
            "name": "Affiliate user",
            "id": "91431709457683437",
            "link": "Cloud_users",
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
            "array": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false
        }
    ],
    "data": [
        {
            "allowed_uses": 1,
            "description": "bug report",
            "uses_counter": 1,
            "generte_automatically": true,
            "amount": 25,
            "code": "KIL1PKD6XBT9",
            "id": "a58de872-4c1f-43b9-83c2-e456ebf3c83b",
            "isUsed": true,
            "date_used": 1710240346000,
            "users_used_ids": [
                {
                    "first_name": "MKD",
                    "last_name": "GROUP",
                    "id": "eXmoul@mail.ru"
                }
            ],
            "isBasic": "",
            "date_issued": 1710239956000,
            "isHidden": "",
            "promo_type": "",
            "user_ids": "",
            "affiliate_user": ""
        },
        {
            "allowed_uses": 1,
            "description": "за качественный ролик",
            "uses_counter": 1,
            "promo_type": "education",
            "generte_automatically": true,
            "amount": 250,
            "code": "G6SOE1VH1TT9",
            "id": "ca23af93-c4a3-4c44-9fc8-4507dc107dbd",
            "isUsed": true,
            "date_used": 1709014269000,
            "users_used_ids": [
                {
                    "first_name": "Adel",
                    "last_name": "Kadyrov",
                    "id": "kadyrovadel.i@yandex.ru"
                }
            ],
            "isBasic": "",
            "date_issued": 1709011920000,
            "isHidden": "",
            "user_ids": "",
            "affiliate_user": ""
        },
        {
            "allowed_uses": 1,
            "description": "bug report",
            "generte_automatically": true,
            "amount": 25,
            "code": "7XVL9WSCQ5MI",
            "id": "c83493bb-9eb9-4c82-ac12-6ae4d1d4a63a",
            "isBasic": "",
            "date_issued": 1708705706000,
            "isHidden": "",
            "promo_type": "",
            "user_ids": "",
            "affiliate_user": ""
        },
        {
            "allowed_uses": 1,
            "description": "welcome",
            "promo_type": "welcome",
            "generte_automatically": "",
            "amount": 120,
            "code": "CHINGIZ",
            "id": "3ff148ad-b597-461e-baf6-e5eed903d20b",
            "isBasic": true,
            "date_issued": 1708001075000,
            "isHidden": "",
            "user_ids": "",
            "affiliate_user": ""
        },
        {
            "allowed_uses": 1,
            "description": "bug report",
            "uses_counter": 1,
            "promo_type": "bug-report",
            "generte_automatically": true,
            "amount": 25,
            "code": "3K9V0246AJOR",
            "id": "da4df198-d7bb-4bbd-a9f1-16c28f879f39",
            "isUsed": true,
            "date_used": 1707479376000,
            "users_used_ids": [
                {
                    "first_name": "Adel",
                    "last_name": "Kadyrov",
                    "id": "kadyrovadel.i@yandex.ru"
                }
            ],
            "isBasic": "",
            "date_issued": 1707478581000,
            "isHidden": "",
            "user_ids": "",
            "affiliate_user": ""
        },
        {
            "allowed_uses": 1,
            "uses_counter": 1,
            "promo_type": "loyalty",
            "generte_automatically": true,
            "amount": 199,
            "code": "Z4L3HBR6YLDI",
            "id": "d08b4c82-ad34-4c29-aa9c-24de6214d20c",
            "isUsed": true,
            "date_used": 1705678518000,
            "users_used_ids": [
                {
                    "last_name": "Baev",
                    "first_name": "Egor",
                    "id": "artosiris@gmail.com"
                }
            ],
            "user_ids": [
                ""
            ],
            "date_issued": 1705672973000,
            "description": "",
            "isBasic": "",
            "isHidden": "",
            "affiliate_user": ""
        },
        {
            "allowed_uses": 1,
            "uses_counter": 1,
            "generte_automatically": true,
            "amount": 200,
            "code": "L30QS5JQBYB9",
            "id": "7c5f4ca9-0579-4b69-9812-2e9592085736",
            "isUsed": true,
            "date_used": 1705670826000,
            "users_used_ids": [
                {
                    "last_name": "Hellenbrand",
                    "first_name": "Leo",
                    "id": "leo@directual.com"
                }
            ],
            "isBasic": "",
            "date_issued": 1705670267000,
            "description": "",
            "isHidden": "",
            "promo_type": "",
            "user_ids": "",
            "affiliate_user": ""
        },
        {
            "allowed_uses": 300,
            "description": "Happy New Year!",
            "uses_counter": 22,
            "promo_type": "loyalty",
            "generte_automatically": "",
            "amount": 60,
            "code": "HAPPY2024",
            "id": "c82cad13-cb2f-413b-a448-149634f17d58",
            "users_used_ids": [
                {
                    "first_name": "Tris",
                    "last_name": ".",
                    "id": "investments@tutamail.com"
                },
                {
                    "first_name": "Adel",
                    "last_name": "Kadyrov",
                    "id": "kadyrovadel.i@yandex.ru"
                },
                {
                    "first_name": "Alejandro",
                    "last_name": "Hintze",
                    "id": "digitalgebo@gmail.com"
                },
                {
                    "first_name": "Kinger",
                    "last_name": "Mallik",
                    "id": "kmallik@yahoo.com"
                },
                {
                    "last_name": "Harris",
                    "first_name": "Gregory",
                    "id": "gharrisvan@gmail.com"
                },
                {
                    "first_name": "Steve",
                    "id": "letsbuildenglish@gmail.com"
                },
                {
                    "first_name": "Anders",
                    "id": "anders@bjoernoe.com"
                },
                {
                    "last_name": "ShowVision",
                    "first_name": "Компания",
                    "id": "it@showvision.ru"
                },
                {
                    "last_name": "M",
                    "first_name": "Imad",
                    "id": "imad.moudouani.hats@gmail.com"
                },
                {
                    "first_name": "Kent Lucky Buhawe",
                    "id": "kent@luckykeniks.com"
                },
                {
                    "first_name": "Thomas",
                    "id": "me@tteoh.com"
                },
                {
                    "first_name": "Food",
                    "last_name": "Maid",
                    "id": "foodmaidai@gmail.com"
                },
                {
                    "first_name": "Maxim",
                    "last_name": "Lykov",
                    "id": "lykovmaxim@gmail.com"
                },
                {
                    "first_name": "Imad",
                    "id": "im@hatsconsulting.com"
                },
                {
                    "last_name": "Nader",
                    "first_name": "Kamil",
                    "id": "kamil@leverall.com"
                },
                {
                    "first_name": "Drew",
                    "last_name": "Harrison",
                    "id": "drewharrison@outlook.com"
                },
                {
                    "last_name": "Saible",
                    "first_name": "Dmitry",
                    "id": "saibleonetwo@gmail.com"
                },
                {
                    "first_name": "Mariiya",
                    "last_name": "Mariiya",
                    "id": "hard8manager1@gmail.com"
                },
                {
                    "first_name": "Renato Mugrabi Pinto",
                    "id": "renato.casa.corre@gmail.com"
                },
                {
                    "first_name": "Ilan",
                    "last_name": "Manoim",
                    "id": "ilan@ezcell.ca"
                },
                {
                    "first_name": "Mark",
                    "last_name": "Vokes",
                    "id": "mark@concept2commerce.com"
                },
                {
                    "first_name": "emily",
                    "last_name": "thacker",
                    "id": "emily@inorbit.com"
                }
            ],
            "isBasic": "",
            "date_issued": 1704014463000,
            "isHidden": "",
            "user_ids": "",
            "affiliate_user": ""
        },
        {
            "allowed_uses": 1,
            "description": "Grand for university",
            "promo_type": "partner_grant",
            "amount": 1000,
            "code": "ANKARAEDU",
            "id": "73850dc4-ebe8-46d7-bb9c-4d4d599f11eb",
            "user_ids": [
                ""
            ],
            "date_issued": 1701184829000,
            "generte_automatically": "",
            "isBasic": "",
            "isHidden": "",
            "affiliate_user": ""
        },
        {
            "allowed_uses": 1000,
            "description": "ComUnity промо-код",
            "uses_counter": 1,
            "promo_type": "welcome",
            "generte_automatically": "",
            "amount": 60,
            "code": "COMUNITY",
            "id": "e81342a9-1470-439c-89a8-dbcd2e56f1bd",
            "users_used_ids": [
                {
                    "first_name": "Eugene",
                    "last_name": "I.",
                    "id": "uixfox@gmail.com"
                }
            ],
            "isBasic": true,
            "date_issued": 1699881777000,
            "isHidden": "",
            "user_ids": "",
            "affiliate_user": ""
        },
        {
            "allowed_uses": 1,
            "description": "Bug report",
            "promo_type": "bug-report",
            "generte_automatically": true,
            "amount": 50,
            "code": "XHZJXCI60F6R",
            "id": "e2350694-dafe-4ad3-83de-2e1e97261a6d",
            "isBasic": "",
            "date_issued": 1699716036000,
            "isHidden": "",
            "user_ids": "",
            "affiliate_user": ""
        },
        {
            "allowed_uses": 1,
            "description": "Startup grant",
            "uses_counter": 1,
            "promo_type": "partner_grant",
            "generte_automatically": true,
            "amount": 600,
            "code": "BFDPXDZK6GVI",
            "id": "a1ced809-3c46-4dd5-86e1-8cbec166635c",
            "isUsed": true,
            "date_used": 1708524763000,
            "users_used_ids": [
                {
                    "first_name": "Tour",
                    "last_name": "Connect",
                    "id": "tourconnect001@gmail.com"
                }
            ],
            "isBasic": true,
            "date_issued": 1697630676000,
            "isHidden": "",
            "user_ids": "",
            "affiliate_user": ""
        },
        {
            "allowed_uses": 100,
            "description": "Грант для студентов курса \"Управление цифровым продуктом\"",
            "promo_type": "welcome",
            "generte_automatically": "",
            "amount": 120,
            "code": "dpm",
            "id": "2c7263d8-ec5c-4b60-9d52-e01c43073f3f",
            "isBasic": true,
            "date_issued": 1696657608000,
            "isHidden": "",
            "user_ids": "",
            "affiliate_user": ""
        },
        {
            "allowed_uses": 1000,
            "description": "Грант для студентов курса \"Управление цифровым продуктом\"",
            "promo_type": "welcome",
            "generte_automatically": "",
            "amount": 120,
            "code": "DPM",
            "id": "1ef88234-756c-4808-96cf-b9fcf40b5587",
            "isBasic": true,
            "date_issued": 1696657443000,
            "isHidden": "",
            "user_ids": "",
            "affiliate_user": ""
        },
        {
            "allowed_uses": 1000,
            "description": "Welcome to Direcual, Bestadstrategy fellow!",
            "promo_type": "welcome",
            "generte_automatically": "",
            "amount": 100,
            "code": "BESTADSTRATEGY",
            "id": "9794b849-72c1-45ad-ba55-4c76ff619719",
            "isBasic": true,
            "date_issued": 1695824967000,
            "isHidden": "",
            "user_ids": "",
            "affiliate_user": ""
        },
        {
            "allowed_uses": 1,
            "description": "Grant for NPO",
            "promo_type": "welcome",
            "generte_automatically": true,
            "amount": 120,
            "code": "6CA9SHC15RK9",
            "id": "c6aff687-4da7-4e3a-bb57-d33bba70de70",
            "isBasic": true,
            "date_issued": 1694415157000,
            "isHidden": "",
            "user_ids": "",
            "affiliate_user": ""
        },
        {
            "allowed_uses": 1,
            "uses_counter": 1,
            "promo_type": "bug-report",
            "generte_automatically": true,
            "amount": 25,
            "code": "S17FHHE3766R",
            "id": "f40dadad-c578-4103-83e2-88861c1a5678",
            "isUsed": true,
            "date_used": 1691509340000,
            "users_used_ids": [
                {
                    "last_name": "Marquez",
                    "first_name": "Anthony",
                    "id": "anthony.h.marquez@gmail.com"
                }
            ],
            "isBasic": "",
            "date_issued": 1691508986000,
            "description": "",
            "isHidden": "",
            "user_ids": "",
            "affiliate_user": ""
        },
        {
            "allowed_uses": 1,
            "description": "Бот для VC",
            "uses_counter": 1,
            "promo_type": "partner_grant",
            "generte_automatically": true,
            "amount": 39,
            "code": "WNCH4Y47K3XR",
            "id": "ccfa8ffc-549f-461d-a097-abb201f19ea8",
            "isUsed": true,
            "date_used": 1689932729000,
            "users_used_ids": [
                {
                    "last_name": "Sorokin",
                    "first_name": "Alexey",
                    "id": "alexey.sorokin@softlex.pro"
                }
            ],
            "isBasic": "",
            "date_issued": 1689924672000,
            "isHidden": "",
            "user_ids": "",
            "affiliate_user": ""
        },
        {
            "allowed_uses": 1,
            "description": "Bug report",
            "uses_counter": 1,
            "promo_type": "bug-report",
            "generte_automatically": true,
            "amount": 100,
            "code": "FDOGH45TBKF",
            "id": "a68c4c66-827b-4d52-bfdd-e5adad20477c",
            "isUsed": true,
            "date_used": 1688135866000,
            "users_used_ids": [
                {
                    "first_name": "Timofey",
                    "last_name": "Kolgushkin",
                    "id": "kolgtim@gmail.com"
                }
            ],
            "user_ids": [
                ""
            ],
            "date_issued": 1688128098000,
            "isBasic": "",
            "isHidden": "",
            "affiliate_user": ""
        },
        {
            "allowed_uses": 1,
            "description": "bug report",
            "uses_counter": 1,
            "promo_type": "bug-report",
            "generte_automatically": true,
            "amount": 25,
            "code": "UZX8OD7SNHFR",
            "id": "82f7f57f-17ef-4c2c-8f9c-06e716078f1e",
            "isUsed": true,
            "date_used": 1687782396000,
            "users_used_ids": [
                {
                    "first_name": "Maxim",
                    "last_name": "Lykov",
                    "id": "lykovmaxim@gmail.com"
                }
            ],
            "isBasic": "",
            "user_ids": [
                "lykovmaxim@gmail.com"
            ],
            "date_issued": 1687782091000,
            "isHidden": "",
            "affiliate_user": ""
        }
    ],
    "totalPages": 9,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [
        [
            "allowed_uses",
            99073050
        ],
        [
            "amount",
            99073050
        ],
        [
            "code",
            99073050
        ],
        [
            "date_issued",
            99073050
        ],
        [
            "date_used",
            99073050
        ],
        [
            "description",
            99073050
        ],
        [
            "generte_automatically",
            99073050
        ],
        [
            "id",
            99073050
        ],
        [
            "isBasic",
            99073050
        ],
        [
            "isHidden",
            99073050
        ],
        [
            "isUsed",
            99073050
        ],
        [
            "promo_type",
            99073050
        ],
        [
            "user_ids.id",
            1282551
        ],
        [
            "users_used_ids.first_name",
            1282551
        ],
        [
            "users_used_ids.id",
            1282551
        ],
        [
            "users_used_ids.last_name",
            1282551
        ],
        [
            "uses_counter",
            99073050
        ],
        [
            "affiliate_user.id",
            1282551
        ],
        [
            "affiliate_user.country",
            1282551
        ],
        [
            "affiliate_user.first_name",
            1282551
        ],
        [
            "affiliate_user.last_name",
            1282551
        ]
    ],
    "writeFields": [
        "allowed_uses",
        "amount",
        "code",
        "description",
        "generte_automatically",
        "id",
        "isBasic",
        "isHidden",
        "promo_type",
        "user_ids",
        "affiliate_user"
    ],
    "structures": {
        "1282551": {
            "networkID": 1822,
            "id": 1282551,
            "dateCreated": "2019-10-05T15:17:37Z",
            "hidden": false,
            "dateHidden": null,
            "name": "👨🏻 Cloud users",
            "sysName": "Cloud_users",
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":true,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"note\",\"dataType\":\"string\",\"name\":\"Note\",\"id\":\"34591570383079323\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"first_name\",\"dataType\":\"string\",\"name\":\"First name\",\"id\":\"23971570288647049\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"last_name\",\"dataType\":\"string\",\"name\":\"Last name\",\"id\":\"81941570288646826\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"locale\",\"dataType\":\"string\",\"name\":\"locale\",\"id\":\"47031570379144750\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"source\",\"dataType\":\"string\",\"name\":\"Source\",\"id\":\"92371570288676773\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"request_id\",\"dataType\":\"link\",\"name\":\"Request ID\",\"id\":\"23691571997337572\",\"link\":\"Requests\",\"group\":\"0\",\"tags\":null,\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[\"\"],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":true,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"ip\",\"dataType\":\"string\",\"name\":\"ip\",\"id\":\"70561588673350213\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"country\",\"dataType\":\"link\",\"name\":\"Country\",\"id\":\"37101588673355053\",\"link\":\"CountriesISO\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"social_register\",\"dataType\":\"boolean\",\"name\":\"social_register\",\"id\":\"71461588678509868\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"register_date\",\"dataType\":\"date\",\"name\":\"Register date\",\"id\":\"36551588868841568\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.YYYY\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"country_id\",\"dataType\":\"link\",\"name\":\"Country link (ISO)\",\"id\":\"31401588873548829\",\"link\":\"CountriesISO\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"raw_id\",\"dataType\":\"link\",\"name\":\"Raw ID\",\"id\":\"39691642000254942\",\"link\":\"cloud_users_ids\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"isBlocked\",\"dataType\":\"boolean\",\"name\":\"\",\"id\":\"42921686321097973\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"last_activity_date\",\"dataType\":\"date\",\"name\":\"Last activity date\",\"id\":\"96951570962621002\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"apps\",\"dataType\":\"arrayLink\",\"name\":\"Apps\",\"id\":\"80561587152006234\",\"link\":\"AppInfo\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"array\":false},{\"sysName\":\"number_of_sl\",\"dataType\":\"number\",\"name\":\"Number of SLs\",\"id\":\"41141570962898360\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"number_of_structures\",\"dataType\":\"number\",\"name\":\"Number of structures\",\"id\":\"70371570962891170\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"number_of_scenarios\",\"dataType\":\"number\",\"name\":\"Number of scenarios\",\"id\":\"71201570962890259\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"logged_in\",\"dataType\":\"boolean\",\"name\":\"Have logged in\",\"id\":\"42361570962605801\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"number_of_apps\",\"dataType\":\"number\",\"name\":\"Number of apps\",\"id\":\"41911570383626553\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"today_stat_id\",\"dataType\":\"link\",\"name\":\"Today stat link\",\"id\":\"42431587908594891\",\"link\":\"Dashboard_data\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"team_ids\",\"dataType\":\"arrayLink\",\"name\":\"Teams\",\"id\":\"26441632905559721\",\"link\":\"Teams\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"array\":false},{\"sysName\":\"current_team_plans\",\"dataType\":\"arrayLink\",\"name\":\"Current team plans\",\"id\":\"45021632906172898\",\"link\":\"TeamTariffs\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"array\":false},{\"sysName\":\"isLTD_user\",\"dataType\":\"boolean\",\"name\":\"LTD user\",\"id\":\"13531632918815271\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"Paid_app_plan_user\",\"dataType\":\"boolean\",\"name\":\"Paid app plan user\",\"id\":\"22421632918830874\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"current_app_plans\",\"dataType\":\"arrayLink\",\"name\":\"Current app plans\",\"id\":\"54321632918865581\",\"link\":\"Tariff\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"array\":false},{\"sysName\":\"creditCardIsLinked\",\"dataType\":\"boolean\",\"name\":\"CreditCardIsLinked?\",\"id\":\"42541642072780075\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"notifications\",\"dataType\":\"arrayLink\",\"name\":\"Notifications\",\"id\":\"72051693242822317\",\"link\":\"user_notifications\",\"group\":\"1570379125072\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"array\":false},{\"sysName\":\"unsubscribed\",\"dataType\":\"boolean\",\"name\":\"Unsubscribed\",\"id\":\"20361600521081143\",\"link\":\"\",\"group\":\"1570379125072\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"subscription_settings\",\"dataType\":\"link\",\"name\":\"\",\"id\":\"73111693243486754\",\"link\":\"subscription_settings\",\"group\":\"1570379125072\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"email_campaigns\",\"dataType\":\"arrayLink\",\"name\":\"Email campaigns\",\"id\":\"26601693323488417\",\"link\":\"email_campaigns\",\"group\":\"1570379125072\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"array\":false},{\"sysName\":\"app_description\",\"dataType\":\"string\",\"name\":\"App description\",\"id\":\"72461572603438535\",\"link\":null,\"group\":\"1570381436668\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"customer_type\",\"dataType\":\"string\",\"name\":\"Customer type\",\"id\":\"93281572603437791\",\"link\":null,\"group\":\"1570381436668\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"utm_source\",\"dataType\":\"string\",\"name\":\"utm_source\",\"id\":\"91131588673287122\",\"link\":\"\",\"group\":\"1570381436668\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"utm_medium\",\"dataType\":\"string\",\"name\":\"utm_medium\",\"id\":\"27621588673319861\",\"link\":\"\",\"group\":\"1570381436668\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"utm_campaign\",\"dataType\":\"string\",\"name\":\"utm_campaign\",\"id\":\"85671588673320381\",\"link\":\"\",\"group\":\"1570381436668\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"survey_ids\",\"dataType\":\"arrayLink\",\"name\":\"Surveys\",\"id\":\"27581591180002769\",\"link\":\"Surveys\",\"group\":\"1570381436668\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"array\":false},{\"sysName\":\"ref\",\"dataType\":\"string\",\"name\":\"ref\",\"id\":\"68451626349155030\",\"link\":null,\"group\":\"1570381436668\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"storage\",\"dataType\":\"json\",\"name\":\"Survey storage\",\"id\":\"86371627198748459\",\"link\":\"\",\"group\":\"1570381436668\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":true,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"survey_step_1_raw\",\"dataType\":\"string\",\"name\":\"Which describes you best\",\"id\":\"24041632732046851\",\"link\":null,\"group\":\"1570381436668\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"survey_step_2_raw\",\"dataType\":\"string\",\"name\":\"Whom do you want to build apps for\",\"id\":\"57151632732047604\",\"link\":null,\"group\":\"1570381436668\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"survey_step_3_raw\",\"dataType\":\"string\",\"name\":\"How did you know about Directual\",\"id\":\"98341632732048278\",\"link\":null,\"group\":\"1570381436668\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"survey_is_aborted\",\"dataType\":\"boolean\",\"name\":\"\",\"id\":\"75331632901439193\",\"link\":\"\",\"group\":\"1570381436668\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"notifications_account\",\"dataType\":\"boolean\",\"name\":\"Notify about Account\",\"id\":\"49381572378982097\",\"link\":\"\",\"group\":\"1572378880897\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"notifications_academy\",\"dataType\":\"boolean\",\"name\":\"Notify about Academy\",\"id\":\"97951572378981844\",\"link\":\"\",\"group\":\"1572378880897\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"notifications_blog\",\"dataType\":\"boolean\",\"name\":\"Notify about Blog\",\"id\":\"20211572378981407\",\"link\":\"\",\"group\":\"1572378880897\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"unsibscribed_reason\",\"dataType\":\"string\",\"name\":\"unsibscribed_reason\",\"id\":\"87491600521243757\",\"link\":\"\",\"group\":\"1572378880897\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"admin_notification_text\",\"dataType\":\"string\",\"name\":\"admin_notification_text\",\"id\":\"21331602224278958\",\"link\":\"\",\"group\":\"1572378880897\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"whom_to_alert\",\"dataType\":\"arrayLink\",\"name\":\"\",\"id\":\"61381602224446180\",\"link\":\"TUser\",\"group\":\"1572378880897\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"array\":false},{\"sysName\":\"MailerLite_id\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"73551663229204538\",\"link\":\"\",\"group\":\"1572378880897\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"MailerLite_MAIN\",\"dataType\":\"boolean\",\"name\":\"\",\"id\":\"28941663229219515\",\"link\":\"\",\"group\":\"1572378880897\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"MailerLite_Onboarding\",\"dataType\":\"boolean\",\"name\":\"\",\"id\":\"16811663229232291\",\"link\":\"\",\"group\":\"1572378880897\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"LTD_allow_dcoins\",\"dataType\":\"boolean\",\"name\":\"\",\"id\":\"72171695637445784\",\"link\":\"\",\"group\":\"1572378880897\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"LTD_prolong_upgrades\",\"dataType\":\"boolean\",\"name\":\"\",\"id\":\"16841709287833062\",\"link\":\"\",\"group\":\"1572378880897\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"email_hash\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"40581588875619696\",\"link\":\"\",\"group\":\"1588875605532\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"gravatar\",\"dataType\":\"string\",\"name\":\"Gravatar\",\"id\":\"89411588875620336\",\"link\":\"\",\"group\":\"1588875605532\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"gravatar_pic\",\"dataType\":\"file\",\"name\":\" \",\"id\":\"77261619116355317\",\"link\":\"\",\"group\":\"1588875605532\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"is_suspended\",\"dataType\":\"boolean\",\"name\":\"\",\"id\":\"97901644220993828\",\"link\":\"\",\"group\":\"1644221182856\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"is_failed\",\"dataType\":\"boolean\",\"name\":\"\",\"id\":\"10721644221276956\",\"link\":\"\",\"group\":\"1644221182856\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"basic_promo_code\",\"dataType\":\"boolean\",\"name\":\"\",\"id\":\"62581644246255699\",\"link\":\"\",\"group\":\"1644221182856\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"wallet_transactions\",\"dataType\":\"arrayLink\",\"name\":\"\",\"id\":\"53431648999094908\",\"link\":\"appwallet\",\"group\":\"1644221182856\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"array\":false},{\"sysName\":\"wallet_balance\",\"dataType\":\"decimal\",\"name\":\"\",\"id\":\"60951648999103921\",\"link\":\"\",\"group\":\"1644221182856\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"paid_apps_ids\",\"dataType\":\"arrayLink\",\"name\":\"\",\"id\":\"96621663160984409\",\"link\":\"Apps\",\"group\":\"1644221182856\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"array\":false},{\"sysName\":\"sent_to_partner\",\"dataType\":\"boolean\",\"name\":\"\",\"id\":\"82171680675432429\",\"link\":\"\",\"group\":\"1644221182856\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"paddle_id\",\"dataType\":\"string\",\"name\":\"paddle id\",\"id\":\"69331644221263888\",\"link\":null,\"group\":\"1644221182856\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"paddle_status\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"99591644221269393\",\"link\":null,\"group\":\"1644221182856\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"update_url\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"44161644221281677\",\"link\":null,\"group\":\"1644221182856\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"paddle_cancel_url\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"27901682774248073\",\"link\":\"\",\"group\":\"1644221182856\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"paddle_method\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"78841682873134749\",\"link\":null,\"group\":\"1644221182856\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"paddle_card_type\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"46161682873174727\",\"link\":null,\"group\":\"1644221182856\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"paddle_digits\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"26711682873142482\",\"link\":null,\"group\":\"1644221182856\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"paddle_date_expiry\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"94461682873159773\",\"link\":null,\"group\":\"1644221182856\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"tinkoff_rebill_id\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"97601678722478382\",\"link\":null,\"group\":\"1644221182856\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"tinkoff_status\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"11351683570594828\",\"link\":\"\",\"group\":\"1644221182856\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":16,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"tinkoff_digits\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"13861682873811387\",\"link\":null,\"group\":\"1644221182856\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":17,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"tinkoff_card_type\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"34471682873837848\",\"link\":null,\"group\":\"1644221182856\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":18,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"tinkoff_date_expiry\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"24521682873848595\",\"link\":null,\"group\":\"1644221182856\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":19,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"tinkoff_update_url\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"63031682874690044\",\"link\":null,\"group\":\"1644221182856\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":20,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"tinkoff_cancel_url\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"36191682874701304\",\"link\":null,\"group\":\"1644221182856\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":21,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"default_method\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"59911682875603989\",\"link\":null,\"group\":\"1644221182856\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":22,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"date_basic_subscr_added\",\"dataType\":\"date\",\"name\":\"\",\"id\":\"20911707207894653\",\"link\":\"\",\"group\":\"1644221182856\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":23,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"dcoins_affiliate\",\"dataType\":\"decimal\",\"name\":\"\",\"id\":\"69971709287718664\",\"link\":\"\",\"group\":\"1644221182856\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":24,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"dcoins_promo\",\"dataType\":\"decimal\",\"name\":\"\",\"id\":\"36031709287728546\",\"link\":\"\",\"group\":\"1644221182856\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":25,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"dcoins_added\",\"dataType\":\"decimal\",\"name\":\"\",\"id\":\"70171709287738619\",\"link\":\"\",\"group\":\"1644221182856\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":26,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"dcoins_manual\",\"dataType\":\"decimal\",\"name\":\"\",\"id\":\"99961709287751221\",\"link\":\"\",\"group\":\"1644221182856\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":27,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"dcoins_other\",\"dataType\":\"decimal\",\"name\":\"\",\"id\":\"65441709287762218\",\"link\":\"\",\"group\":\"1644221182856\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":28,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"dcoins_transfer\",\"dataType\":\"decimal\",\"name\":\"\",\"id\":\"92941709309686616\",\"link\":\"\",\"group\":\"1644221182856\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":29,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false}]",
            "jsonGroupSettings": "[{\"id\":1570381436668,\"name\":\"CRM\",\"order\":3},{\"id\":1588875605532,\"name\":\"Gravatar\",\"order\":4},{\"id\":1570379125072,\"name\":\"Emails\",\"order\":0},{\"id\":1570288674389,\"name\":\"Cloud usage\",\"order\":2},{\"id\":1572378880897,\"name\":\"LEGACY Notifications settings\",\"order\":5},{\"id\":1644221182856,\"name\":\"Billing\",\"order\":1}]",
            "jsonViewIdSettings": "[{\"sysName\":\"first_name\"},{\"sysName\":\"last_name\"},{\"sysName\":\"country\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-03-01T16:15:01Z",
            "createBy": 21,
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
                "ordering": true,
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
                "array": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            "folderId": 667556
        },
        "99073050": {
            "networkID": 1822,
            "id": 99073050,
            "dateCreated": "2022-02-06T20:05:48Z",
            "hidden": false,
            "dateHidden": null,
            "name": "promo codes",
            "sysName": "promo_codes",
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"uses_counter\",\"name\":\"Uses Counter\",\"dataType\":\"number\",\"id\":\"42931644226750822\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"users_used_ids\",\"name\":\"Who used\",\"dataType\":\"arrayLink\",\"id\":\"43611644249010660\",\"link\":\"Cloud_users\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkType\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"indexExists\":false},{\"sysName\":\"isBasic\",\"name\":\"Basic code (can be applied only 1 basic code)\",\"dataType\":\"boolean\",\"id\":\"50301644246301889\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Basic\",\"Special\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"date_issued\",\"name\":\"Date issued\",\"dataType\":\"date\",\"id\":\"55421644178094578\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"user_ids\",\"name\":\"Users (keep empty for universal)\",\"dataType\":\"arrayLink\",\"id\":\"56801644177989021\",\"link\":\"Cloud_users\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkType\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"indexExists\":false},{\"sysName\":\"date_used\",\"name\":\"Date used\",\"dataType\":\"date\",\"id\":\"61701644178084931\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"amount\",\"name\":\"Amount of Dcoins\",\"dataType\":\"decimal\",\"id\":\"68541644177974289\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"isUsed\",\"name\":\"Fully used\",\"dataType\":\"boolean\",\"id\":\"71121644178066378\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Used\",\"Not yet\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"promo_type\",\"name\":\"Promo Type\",\"dataType\":\"link\",\"id\":\"74721644178529580\",\"link\":\"promotypes\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkType\":true,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"code\",\"name\":\"Code\",\"dataType\":\"string\",\"id\":\"78531644177969497\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"isHidden\",\"name\":\"Hidden\",\"dataType\":\"boolean\",\"id\":\"80591644226547443\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"description\",\"name\":\"Code description\",\"dataType\":\"string\",\"id\":\"88451644178135134\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"allowed_uses\",\"name\":\"Allowed Uses\\t\",\"dataType\":\"number\",\"id\":\"88521644226688720\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"generte_automatically\",\"name\":\"Generate automatically\",\"dataType\":\"boolean\",\"id\":\"89591644226836608\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Automatically\",\"Manually\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"affiliate_user\",\"name\":\"Affiliate user\",\"dataType\":\"link\",\"id\":\"91431709457683437\",\"link\":\"Cloud_users\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkType\":true,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"indexExists\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"code\"},{\"sysName\":\"promo_type\"},{\"sysName\":\"amount\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-03-03T09:21:44Z",
            "createBy": 3527,
            "changedBy": 21,
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
                "array": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            "folderId": 33684151
        }
    },
    "isSuccessWrite": false,
    "writeError": null,
    "writeResponse": null,
    "fileds": [
        {
            "sysName": "allowed_uses",
            "dataType": "number",
            "name": "Allowed Uses\t",
            "id": "88521644226688720",
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
            "format": "positiveNum",
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
            "sysName": "amount",
            "dataType": "decimal",
            "name": "Amount of Dcoins",
            "id": "68541644177974289",
            "link": "",
            "group": "0",
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
            "sysName": "code",
            "dataType": "string",
            "name": "Code",
            "id": "78531644177969497",
            "link": null,
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
            "dataType": "string",
            "name": "Code description",
            "id": "88451644178135134",
            "link": null,
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 7,
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
            "sysName": "generte_automatically",
            "dataType": "boolean",
            "name": "Generate automatically",
            "id": "89591644226836608",
            "link": "",
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
            "formatOptions": {
                "customOptionLabel": "My option",
                "keyValue": {
                    "key": "key",
                    "value": "value",
                    "button": "One more"
                },
                "dateLocale": "en-gb",
                "booleanOptions": [
                    "Automatically",
                    "Manually"
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
            "array": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false
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
            "array": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false
        },
        {
            "sysName": "isBasic",
            "dataType": "boolean",
            "name": "Basic code (can be applied only 1 basic code)",
            "id": "50301644246301889",
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
                    "Basic",
                    "Special"
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
            "array": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false
        },
        {
            "sysName": "isHidden",
            "dataType": "boolean",
            "name": "Hidden",
            "id": "80591644226547443",
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
            "array": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false
        },
        {
            "sysName": "promo_type",
            "dataType": "link",
            "name": "Promo Type",
            "id": "74721644178529580",
            "link": "promotypes",
            "group": "0",
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
            "sysName": "user_ids",
            "dataType": "arrayLink",
            "name": "Users (keep empty for universal)",
            "id": "56801644177989021",
            "link": "Cloud_users",
            "group": "0",
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
            "sysName": "affiliate_user",
            "dataType": "link",
            "name": "Affiliate user",
            "id": "91431709457683437",
            "link": "Cloud_users",
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
            "array": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false
        }
    ],
    "quickSearch": "true",
    "httpParams": {},
    "cardCustomHtml": null,
    "cardCustomLayout": null
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
  },
};
