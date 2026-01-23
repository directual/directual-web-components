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
    "sl": "users",
    "pageSize": "20",
    "headerField": null,
    "params": {
        "data": {
            "readFields": [
                {
                    "fieldSysName": "code",
                    "fetch": [],
                    "sysName": "code",
                    "name": "",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "date_registered",
                    "fetch": [],
                    "sysName": "date_registered",
                    "name": "Date registered on Dev",
                    "dataType": "date",
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
                        "timeFormat": "",
                        "isUTC": "false"
                    },
                    "link": ""
                },
                {
                    "fieldSysName": "firstName",
                    "fetch": [],
                    "sysName": "firstName",
                    "name": "First name",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "id",
                    "fetch": [],
                    "sysName": "id",
                    "name": "Username (login)",
                    "dataType": "id",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "isEmailConfirmed",
                    "fetch": [],
                    "sysName": "isEmailConfirmed",
                    "name": "Email confirmed",
                    "dataType": "boolean",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "lastName",
                    "fetch": [],
                    "sysName": "lastName",
                    "name": "Last name",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "role",
                    "fetch": [],
                    "sysName": "role",
                    "name": "Roles",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "html",
                    "fetch": [],
                    "sysName": "html",
                    "name": "",
                    "dataType": "string",
                    "format": "html",
                    "formatOptions": {},
                    "link": ""
                }
            ],
            "writeFields": [
                {
                    "fieldSysName": "firstName",
                    "fetch": [],
                    "sysName": "firstName",
                    "name": "First name",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "id",
                    "fetch": [],
                    "sysName": "id",
                    "name": "Username (login)",
                    "dataType": "id",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "lastName",
                    "fetch": [],
                    "sysName": "lastName",
                    "name": "Last name",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                }
            ],
            "fields": {
                "code": {
                    "id": "code",
                    "content": "",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "date_registered": {
                    "id": "date_registered",
                    "content": "Date registered on Dev",
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
                        "timeFormat": "",
                        "isUTC": "false"
                    },
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "firstName": {
                    "id": "firstName",
                    "content": "First name",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "id": {
                    "id": "id",
                    "content": "Username (login)",
                    "type": "field",
                    "dataType": "id",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "isEmailConfirmed": {
                    "id": "isEmailConfirmed",
                    "content": "Email confirmed",
                    "type": "field",
                    "dataType": "boolean",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "lastName": {
                    "id": "lastName",
                    "content": "Last name",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "role": {
                    "id": "role",
                    "content": "Roles",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "html": {
                    "id": "html",
                    "content": "",
                    "type": "field",
                    "dataType": "string",
                    "format": "html",
                    "formatOptions": {},
                    "read": true,
                    "link": "",
                    "actions": []
                }
            },
            "fieldParams": {
                "code": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "firstName": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "id": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "isEmailConfirmed": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "lastName": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "role": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "date_registered": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "html": {
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
                        "role",
                        "firstName",
                        "lastName",
                        "isEmailConfirmed",
                        "code",
                        "date_registered",
                        "html"
                    ]
                }
            },
            "columnOrder": [
                "tab-1"
            ],
            "actions": []
        },
        "fields": {
            "code": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "firstName": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "id": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "isEmailConfirmed": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "lastName": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "role": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "date_registered": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "html": {
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
                    "fieldSysName": "code",
                    "fetch": [],
                    "sysName": "code",
                    "name": "",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "date_registered",
                    "fetch": [],
                    "sysName": "date_registered",
                    "name": "Date registered on Dev",
                    "dataType": "date",
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
                        "timeFormat": "",
                        "isUTC": "false"
                    },
                    "link": ""
                },
                {
                    "fieldSysName": "firstName",
                    "fetch": [],
                    "sysName": "firstName",
                    "name": "First name",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "id",
                    "fetch": [],
                    "sysName": "id",
                    "name": "Username (login)",
                    "dataType": "id",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "isEmailConfirmed",
                    "fetch": [],
                    "sysName": "isEmailConfirmed",
                    "name": "Email confirmed",
                    "dataType": "boolean",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "lastName",
                    "fetch": [],
                    "sysName": "lastName",
                    "name": "Last name",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "role",
                    "fetch": [],
                    "sysName": "role",
                    "name": "Roles",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "html",
                    "fetch": [],
                    "sysName": "html",
                    "name": "",
                    "dataType": "string",
                    "format": "html",
                    "formatOptions": {},
                    "link": ""
                }
            ],
            "writeFields": [
                {
                    "fieldSysName": "firstName",
                    "fetch": [],
                    "sysName": "firstName",
                    "name": "First name",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "id",
                    "fetch": [],
                    "sysName": "id",
                    "name": "Username (login)",
                    "dataType": "id",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "lastName",
                    "fetch": [],
                    "sysName": "lastName",
                    "name": "Last name",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                }
            ],
            "fields": {
                "code": {
                    "id": "code",
                    "content": "",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": ""
                },
                "date_registered": {
                    "id": "date_registered",
                    "content": "Date registered on Dev",
                    "dataType": "date",
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
                        "timeFormat": "",
                        "isUTC": "false"
                    },
                    "read": true,
                    "link": ""
                },
                "firstName": {
                    "id": "firstName",
                    "content": "First name",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": ""
                },
                "id": {
                    "id": "id",
                    "content": "Username (login)",
                    "dataType": "id",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": ""
                },
                "isEmailConfirmed": {
                    "id": "isEmailConfirmed",
                    "content": "Email confirmed",
                    "dataType": "boolean",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": ""
                },
                "lastName": {
                    "id": "lastName",
                    "content": "Last name",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": ""
                },
                "role": {
                    "id": "role",
                    "content": "Roles",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": ""
                },
                "html": {
                    "id": "html",
                    "content": "",
                    "dataType": "string",
                    "format": "html",
                    "formatOptions": {},
                    "read": true,
                    "link": ""
                }
            },
            "fieldParams": {
                "code": {
                    "include": false,
                    "fileImageFormat": "square",
                    "fileImageSize": 80
                },
                "firstName": {
                    "include": true,
                    "fileImageFormat": "square",
                    "fileImageSize": 80
                },
                "id": {
                    "include": true,
                    "fileImageFormat": "square",
                    "fileImageSize": 80
                },
                "isEmailConfirmed": {
                    "include": true,
                    "fileImageFormat": "square",
                    "fileImageSize": 80
                },
                "lastName": {
                    "include": true,
                    "fileImageFormat": "square",
                    "fileImageSize": 80
                },
                "role": {
                    "include": false,
                    "fileImageFormat": "square",
                    "fileImageSize": 80
                },
                "date_registered": {
                    "include": true,
                    "fileImageFormat": "square",
                    "fileImageSize": 80
                },
                "html": {
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
                "firstName",
                "lastName",
                "html",
                "isEmailConfirmed",
                "role",
                "code",
                "date_registered"
            ]
        },
        "filterParams": {
            "isSorting": true,
            "isFiltering": true,
            "filterFields": {
                "date_registered": {
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
                        "timeFormat": "",
                        "isUTC": "false"
                    },
                    "name": "Date registered on Dev"
                },
                "firstName": {
                    "active": true,
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "name": "First name"
                },
                "id": {
                    "active": false,
                    "dataType": "id",
                    "format": "",
                    "formatOptions": {},
                    "name": "Username (login)"
                },
                "isEmailConfirmed": {
                    "active": true,
                    "dataType": "boolean",
                    "format": "",
                    "formatOptions": {},
                    "name": "Email confirmed"
                }
            }
        },
        "lazyLoading": true
    },
    "tableTitle": "",
    "actions": [],
    "headers": [
        {
            "sysName": "code",
            "name": "",
            "dataType": "string",
            "id": "51351621027822811",
            "link": "",
            "group": "1621027815164",
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
            "arrayLink": false,
            "linkType": false,
            "indexExists": false
        },
        {
            "sysName": "date_registered",
            "name": "Date registered on Dev",
            "dataType": "date",
            "id": "14451621029358812",
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
                "timeFormat": "",
                "isUTC": "false"
            },
            "groupName": null,
            "array": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false
        },
        {
            "sysName": "firstName",
            "name": "First name",
            "dataType": "string",
            "id": "5",
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
            "array": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false
        },
        {
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
            "array": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false
        },
        {
            "sysName": "isEmailConfirmed",
            "name": "Email confirmed",
            "dataType": "boolean",
            "id": "60111621027825496",
            "link": "",
            "group": "1621027815164",
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
            "arrayLink": false,
            "linkType": false,
            "indexExists": false
        },
        {
            "sysName": "lastName",
            "name": "Last name",
            "dataType": "string",
            "id": "4",
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
            "array": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false
        },
        {
            "sysName": "role",
            "name": "Roles",
            "dataType": "string",
            "id": "6",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false
        },
        {
            "sysName": "html",
            "name": "",
            "dataType": "string",
            "id": "66441769161691317",
            "link": "",
            "group": "1621027815164",
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
            "format": "html",
            "formatOptions": {},
            "groupName": null,
            "array": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false
        }
    ],
    "data": [
        {
            "role": "god,confirmed",
            "code": "8e7e5",
            "lastName": "Ershov",
            "firstName": "Pavel",
            "id": "pavel@directual.com",
            "isEmailConfirmed": true,
            "html": "<h2>ОГОНЬ ПО БЛЯДСКОМУ ХУТОРУ!</h2>",
            "date_registered": 1621040334000
        },
        {
            "role": "notConfirmed,god",
            "lastName": "Navalikhin",
            "firstName": "Nikita",
            "id": "nikita@directual.com",
            "isEmailConfirmed": false,
            "date_registered": 1621356846000
        },
        {
            "role": "confirmed",
            "code": "0ba29",
            "lastName": "Dolgov",
            "firstName": "Nikita",
            "id": "n.dolgov@directual.com",
            "isEmailConfirmed": true,
            "date_registered": 1621375669000
        },
        {
            "role": "confirmed",
            "code": "e5414",
            "lastName": "Lykov",
            "firstName": "Max",
            "id": "mxf@mail.ru",
            "isEmailConfirmed": true,
            "date_registered": 1621376473000
        },
        {
            "role": "confirmed",
            "code": "740e1",
            "lastName": "Novozhilov",
            "firstName": "Dimitry",
            "id": "novozhilov@code-word.ru",
            "isEmailConfirmed": true,
            "date_registered": 1621380215000
        },
        {
            "role": "notConfirmed",
            "lastName": "Mozer",
            "firstName": "Anna",
            "id": "annmozer116@gmail.com",
            "isEmailConfirmed": false,
            "date_registered": 1621422342000
        },
        {
            "role": "confirmed",
            "code": "cd48d",
            "lastName": "Maisak",
            "firstName": "Efim",
            "id": "coldnaked@gmail.com",
            "isEmailConfirmed": true,
            "date_registered": 1621460006000
        },
        {
            "role": "notConfirmed",
            "lastName": "Kumswa",
            "firstName": "Nanfa",
            "id": "nanfa@availsys.com",
            "isEmailConfirmed": false,
            "date_registered": 1621517309000
        },
        {
            "role": "confirmed",
            "code": "be903",
            "lastName": "Novoseltsev",
            "firstName": "Vladimir",
            "id": "xtrms@yandex.ru",
            "isEmailConfirmed": true,
            "date_registered": 1621531581000
        },
        {
            "role": "notConfirmed",
            "lastName": "Novikov",
            "firstName": "Valentin",
            "id": "novikov84@gmail.com",
            "isEmailConfirmed": false,
            "date_registered": 1621634931000
        },
        {
            "role": "confirmed",
            "code": "0d48c",
            "lastName": "Udalov",
            "firstName": "YURI",
            "id": "udalov66@gmail.com",
            "isEmailConfirmed": true,
            "date_registered": 1621635560000
        },
        {
            "role": "notConfirmed",
            "lastName": "Boyko",
            "firstName": "Vladislav",
            "id": "for.work.vboyko@yandex.ru",
            "isEmailConfirmed": false,
            "date_registered": 1621949901000
        },
        {
            "role": "confirmed",
            "code": "e9b64",
            "lastName": "Baev",
            "firstName": "Egor",
            "id": "artosiris@gmail.com",
            "isEmailConfirmed": true,
            "date_registered": 1622138250000
        },
        {
            "role": "notConfirmed",
            "lastName": "nickolaev",
            "firstName": "nickolay",
            "id": "nickolaevnv@gmail.com",
            "isEmailConfirmed": false,
            "date_registered": 1622230567000
        },
        {
            "role": "notConfirmed",
            "lastName": "Shahbandaryan",
            "firstName": "David",
            "id": "d.shahbandaryan@bsl.dev",
            "isEmailConfirmed": false,
            "date_registered": 1622557391000
        },
        {
            "role": "notConfirmed",
            "lastName": "Vernikovsky",
            "firstName": "Dmitry",
            "id": "dmitry.vernikovsky@gmail.com",
            "isEmailConfirmed": false,
            "date_registered": 1622633437000
        },
        {
            "role": "notConfirmed",
            "lastName": "Malak",
            "firstName": "Max",
            "id": "max@edugram.com",
            "isEmailConfirmed": false,
            "date_registered": 1623760905000
        },
        {
            "role": "confirmed",
            "code": "f11d2",
            "lastName": "Tkachev",
            "firstName": "Roman",
            "id": "tkachev.rb@gmail.com",
            "isEmailConfirmed": true,
            "date_registered": 1625225335000
        },
        {
            "role": "confirmed",
            "code": "350e4",
            "lastName": "Stepanenko",
            "firstName": "Vladimir",
            "id": "vgstepanenko@gmail.com",
            "isEmailConfirmed": true,
            "date_registered": 1626509029000
        },
        {
            "role": "notConfirmed",
            "lastName": "Ruban",
            "firstName": "Yurii",
            "id": "verstku@gmail.com",
            "isEmailConfirmed": false,
            "date_registered": 1626953472000
        }
    ],
    "totalPages": 13,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [
        [
            "code",
            1385542
        ],
        [
            "date_registered",
            1385542
        ],
        [
            "firstName",
            1385542
        ],
        [
            "id",
            1385542
        ],
        [
            "isEmailConfirmed",
            1385542
        ],
        [
            "lastName",
            1385542
        ],
        [
            "role",
            1385542
        ],
        [
            "html",
            1385542
        ]
    ],
    "writeFields": [
        "firstName",
        "id",
        "lastName"
    ],
    "structures": {
        "1385542": {
            "networkID": 6829,
            "sysName": "WebUser",
            "name": "App users",
            "id": 1385542,
            "dateCreated": "2021-05-14T21:02:45Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"userpic\",\"name\":\"User pic\",\"dataType\":\"file\",\"id\":\"1\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":{},\"groupName\":\"Contacts\",\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"phone\",\"name\":\"Phone\",\"dataType\":\"string\",\"id\":\"10\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"dateCreated\",\"name\":\"dateCreated\",\"dataType\":\"string\",\"id\":\"11\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"password\",\"name\":\"Password (hash)\",\"dataType\":\"string\",\"id\":\"12\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"id\",\"name\":\"Username (login)\",\"dataType\":\"id\",\"id\":\"13\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"date_registered\",\"name\":\"Date registered on Dev\",\"dataType\":\"date\",\"id\":\"14451621029358812\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"isBlocked\",\"name\":\"Block user\",\"dataType\":\"boolean\",\"id\":\"2\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"request_counter\",\"name\":\"\",\"dataType\":\"json\",\"id\":\"26481752759056266\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"gender\",\"name\":\"Gender\",\"dataType\":\"string\",\"id\":\"3\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"lastName\",\"name\":\"Last name\",\"dataType\":\"string\",\"id\":\"4\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"firstName\",\"name\":\"First name\",\"dataType\":\"string\",\"id\":\"5\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"code\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"51351621027822811\",\"link\":\"\",\"group\":\"1621027815164\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"role\",\"name\":\"Roles\",\"dataType\":\"string\",\"id\":\"6\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"isEmailConfirmed\",\"name\":\"Email confirmed\",\"dataType\":\"boolean\",\"id\":\"60111621027825496\",\"link\":\"\",\"group\":\"1621027815164\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"transaction_ids\",\"name\":\"\",\"dataType\":\"arrayLink\",\"id\":\"63381754134242079\",\"link\":\"transactions\",\"group\":\"1754134105862\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"html\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"66441769161691317\",\"link\":\"\",\"group\":\"1621027815164\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"html\",\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"isAuthorization\",\"name\":\"isAuthorization\",\"dataType\":\"boolean\",\"id\":\"7\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"dateLastActivity\",\"name\":\"dateLastActivity\",\"dataType\":\"string\",\"id\":\"8\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"balance\",\"name\":\"Account balance\",\"dataType\":\"decimal\",\"id\":\"81481754134113259\",\"link\":\"\",\"group\":\"1754134105862\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"email\",\"name\":\"Email\",\"dataType\":\"string\",\"id\":\"9\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false}]",
            "jsonGroupSettings": "[{\"name\":\"Contacts\",\"id\":-502807437,\"order\":0},{\"name\":\"System fields\",\"id\":-1776115286,\"order\":1},{\"name\":\"Email confirmation\",\"id\":1621027815164,\"order\":2},{\"name\":\"BILLING\",\"id\":1754134105862,\"order\":3}]",
            "jsonViewIdSettings": "[{\"sysName\":\"firstName\"},{\"sysName\":\"lastName\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2026-01-23T09:48:17Z",
            "createBy": 0,
            "changedBy": 1,
            "_settings": null,
            "_nativeIndexSettings": null,
            "objectIDSysName": "id",
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
                "array": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false
            },
            "folderId": null
        }
    },
    "isSuccessWrite": false,
    "writeError": null,
    "writeResponse": null,
    "fileds": [
        {
            "sysName": "firstName",
            "name": "First name",
            "dataType": "string",
            "id": "5",
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
            "array": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false
        },
        {
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
            "array": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false
        },
        {
            "sysName": "lastName",
            "name": "Last name",
            "dataType": "string",
            "id": "4",
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
            "array": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false
        }
    ],
    "quickSearch": "true",
    "httpParams": {},
    "cardCustomHtml": null,
    "cardCustomLayout": {},
    "comment": "",
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

// Пример кастомных HTML фильтров
const customFilterHTML = `
<div style="padding: 20px; border: 2px solid #007bff; border-radius: 8px; background: #f8f9fa;">
    <h3 style="margin-top: 0; color: #007bff;">🔥 Кастомные фильтры</h3>
    
    <div style="margin-bottom: 15px;">
        <label style="display: block; margin-bottom: 5px; font-weight: bold;">Поиск по тексту:</label>
        <input type="text" id="textFilter" placeholder="Введи текст для поиска..." 
               style="width: 300px; padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
        <button onclick="applyTextFilter()" style="margin-left: 10px; padding: 8px 16px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">
            Применить
        </button>
    </div>
    
    <div style="margin-bottom: 15px;">
        <label style="display: block; margin-bottom: 5px; font-weight: bold;">Фильтр по числу:</label>
        <input type="number" id="numberFilter" placeholder="Минимальное число" 
               style="width: 200px; padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
        <button onclick="applyNumberFilter()" style="margin-left: 10px; padding: 8px 16px; background: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer;">
            Фильтр
        </button>
    </div>
    
    <div style="margin-bottom: 15px;">
        <label style="display: block; margin-bottom: 5px; font-weight: bold;">Сортировка:</label>
        <select id="sortField" style="width: 150px; padding: 8px; border: 1px solid #ccc; border-radius: 4px; margin-right: 10px;">
            <option value="">Без сортировки</option>
            <option value="text">По тексту</option>
            <option value="number">По числу</option>
            <option value="id">По ID</option>
        </select>
        <select id="sortDirection" style="width: 100px; padding: 8px; border: 1px solid #ccc; border-radius: 4px; margin-right: 10px;">
            <option value="asc">По возрастанию</option>
            <option value="desc">По убыванию</option>
        </select>
        <button onclick="applySorting()" style="padding: 8px 16px; background: #17a2b8; color: white; border: none; border-radius: 4px; cursor: pointer;">
            Сортировать
        </button>
    </div>
    
    <div style="margin-bottom: 15px;">
        <button onclick="clearAllFilters()" style="padding: 8px 16px; background: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer;">
            Очистить все фильтры
        </button>
        <button onclick="showAPIInfo()" style="margin-left: 10px; padding: 8px 16px; background: #6c757d; color: white; border: none; border-radius: 4px; cursor: pointer;">
            Показать API
        </button>
    </div>
    
    <div id="apiInfo" style="display: none; background: #e9ecef; padding: 10px; border-radius: 4px; font-family: monospace; font-size: 12px;">
        <strong>window.DirectualFilter API:</strong><br>
        • props.currentFilter - текущий DQL фильтр<br>
        • props.fields - доступные поля<br>
        • emit(dql) - отправить новый фильтр
    </div>
</div>

<script>
function applyTextFilter() {
    const value = document.getElementById('textFilter').value;
    if (value) {
        // Формируем DQL запрос для поиска по полю text
        const dql = "'text' like '" + value + "'";
        console.log('Applying text filter:', dql);
        
        // Сохраняем текущую сортировку
        const currentSort = getCurrentSort();
        window.DirectualFilter.emit(dql, currentSort);
    }
}

function applyNumberFilter() {
    const value = document.getElementById('numberFilter').value;
    if (value) {
        // Формируем DQL запрос для фильтрации по числу
        const dql = "'number' >= '" + value + "'";
        console.log('Applying number filter:', dql);
        
        // Сохраняем текущую сортировку
        const currentSort = getCurrentSort();
        window.DirectualFilter.emit(dql, currentSort);
    }
}

function getCurrentSort() {
    const field = document.getElementById('sortField').value;
    const direction = document.getElementById('sortDirection').value;
    
    if (field) {
        return { field: field, direction: direction };
    }
    return null;
}

function applySorting() {
    const field = document.getElementById('sortField').value;
    const direction = document.getElementById('sortDirection').value;
    
    if (field) {
        const sortOptions = { field: field, direction: direction };
        console.log('Applying sorting:', sortOptions);
        
        // Сохраняем текущий фильтр и применяем новую сортировку
        const currentFilter = getCurrentFilter();
        window.DirectualFilter.emit(currentFilter, sortOptions);
    } else {
        // Убираем сортировку
        const currentFilter = getCurrentFilter();
        window.DirectualFilter.emit(currentFilter, null);
    }
}

function getCurrentFilter() {
    const textValue = document.getElementById('textFilter').value;
    const numberValue = document.getElementById('numberFilter').value;
    
    let conditions = [];
    if (textValue) conditions.push("'text' like '" + textValue + "'");
    if (numberValue) conditions.push("'number' >= '" + numberValue + "'");
    
    return conditions.join(' AND ');
}

function clearAllFilters() {
    document.getElementById('textFilter').value = '';
    document.getElementById('numberFilter').value = '';
    document.getElementById('sortField').value = '';
    console.log('Clearing all filters and sorting');
    window.DirectualFilter.emit('', null);
}

function showAPIInfo() {
    const info = document.getElementById('apiInfo');
    if (info.style.display === 'none') {
        info.style.display = 'block';
        if (window.DirectualFilter) {
            info.innerHTML = '<strong>window.DirectualFilter API:</strong><br>' +
                '• props.currentFilter: ' + (window.DirectualFilter.props.currentFilter || 'пусто') + '<br>' +
                '• props.fields: ' + JSON.stringify(window.DirectualFilter.props.fields, null, 2) + '<br>' +
                '• emit(dql) - отправить новый фильтр';
        }
    } else {
        info.style.display = 'none';
    }
}

// Автоматически показываем информацию об API при загрузке
setTimeout(() => {
    if (window.DirectualFilter) {
        console.log('🔥 DirectualFilter API готов!', window.DirectualFilter);
    }
}, 1000);
</script>
`;

export const CustomHTMLFilters = {
  args: {
    data: {
      ...exampleTable,
      customHTMLfilters: true,
      customHTMLfiltersContent: customFilterHTML,
    },
    auth: authExample,
    locale: 'ESP',
    onChange: value => console.log('Table changed:', value),
    handleRoute: value => e => console.log("route => " + value),
  },
};
