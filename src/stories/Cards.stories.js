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
    "sl": "manageFeatures",
    "pageSize": "15",
    "headerField": null,
    "params": {
        "data": {
            "readFields": [
                {
                    "fieldSysName": "color",
                    "fetch": [],
                    "sysName": "color",
                    "name": "Card color",
                    "dataType": "string",
                    "format": "color",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "date_added",
                    "fetch": [],
                    "sysName": "date_added",
                    "name": "Date added",
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
                        "dateFormat": "D MMMM, Y",
                        "timeFormat": "",
                        "isUTC": "false"
                    },
                    "link": ""
                },
                {
                    "fieldSysName": "description",
                    "fetch": [],
                    "sysName": "description",
                    "name": "Feature description",
                    "dataType": "string",
                    "format": "markdown",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "dev_status",
                    "fetch": [
                        {
                            "fieldSysName": "id",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "status",
                            "condition": null,
                            "fetch": []
                        }
                    ],
                    "sysName": "dev_status",
                    "name": "Development status",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "link": "development_status"
                },
                {
                    "fieldSysName": "feature_id",
                    "fetch": [],
                    "sysName": "feature_id",
                    "name": "Inner ID",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                },
                {
                    "fieldSysName": "feature_type",
                    "fetch": [],
                    "sysName": "feature_type",
                    "name": "Feature type",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "link": "feature_type"
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
                    "fieldSysName": "progress",
                    "fetch": [],
                    "sysName": "progress",
                    "name": "Progress",
                    "dataType": "json",
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
                    "link": ""
                },
                {
                    "fieldSysName": "screenshots",
                    "fetch": [],
                    "sysName": "screenshots",
                    "name": "Screenshots or Screencast",
                    "dataType": "file",
                    "format": "multipleFiles",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "status",
                    "fetch": [
                        {
                            "fieldSysName": "id",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "status",
                            "condition": null,
                            "fetch": []
                        }
                    ],
                    "sysName": "status",
                    "name": "Request status",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "link": "request_status"
                },
                {
                    "fieldSysName": "subscriber_ids",
                    "fetch": [
                        {
                            "fieldSysName": "firstName",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "id",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "lastName",
                            "condition": null,
                            "fetch": []
                        }
                    ],
                    "sysName": "subscriber_ids",
                    "name": "Subscribers",
                    "dataType": "arrayLink",
                    "format": "",
                    "formatOptions": {},
                    "link": "WebUser"
                },
                {
                    "fieldSysName": "tags",
                    "fetch": [],
                    "sysName": "tags",
                    "name": "Tags",
                    "dataType": "arrayLink",
                    "format": "",
                    "formatOptions": {},
                    "link": "tags"
                },
                {
                    "fieldSysName": "title",
                    "fetch": [],
                    "sysName": "title",
                    "name": "Feature title",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                },
                {
                    "fieldSysName": "user_id",
                    "fetch": [
                        {
                            "fieldSysName": "firstName",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "id",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "lastName",
                            "condition": null,
                            "fetch": []
                        }
                    ],
                    "sysName": "user_id",
                    "name": "Who suggested",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "link": "WebUser"
                },
                {
                    "fieldSysName": "votes",
                    "fetch": [],
                    "sysName": "votes",
                    "name": "Number of upvotes",
                    "dataType": "number",
                    "format": "positiveNum",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "votes_ids",
                    "fetch": [
                        {
                            "fieldSysName": "firstName",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "id",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "lastName",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "user_name",
                            "condition": null,
                            "fetch": []
                        }
                    ],
                    "sysName": "votes_ids",
                    "name": "Who upvoted",
                    "dataType": "arrayLink",
                    "format": "",
                    "formatOptions": {},
                    "link": "WebUser"
                }
            ],
            "writeFields": [
                {
                    "fieldSysName": "color",
                    "fetch": [],
                    "sysName": "color",
                    "name": "Card color",
                    "dataType": "string",
                    "format": "color",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "description",
                    "fetch": [],
                    "sysName": "description",
                    "name": "Feature description",
                    "dataType": "string",
                    "format": "markdown",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "dev_status",
                    "fetch": [],
                    "sysName": "dev_status",
                    "name": "Development status",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "link": "development_status"
                },
                {
                    "fieldSysName": "feature_type",
                    "fetch": [],
                    "sysName": "feature_type",
                    "name": "Feature type",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "link": "feature_type"
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
                    "fieldSysName": "progress",
                    "fetch": [],
                    "sysName": "progress",
                    "name": "Progress",
                    "dataType": "json",
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
                    "link": ""
                },
                {
                    "fieldSysName": "status",
                    "fetch": [],
                    "sysName": "status",
                    "name": "Request status",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "link": "request_status"
                },
                {
                    "fieldSysName": "tags",
                    "fetch": [],
                    "sysName": "tags",
                    "name": "Tags",
                    "dataType": "arrayLink",
                    "format": "",
                    "formatOptions": {},
                    "link": "tags"
                },
                {
                    "fieldSysName": "title",
                    "fetch": [],
                    "sysName": "title",
                    "name": "Feature title",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                }
            ],
            "fields": {
                "color": {
                    "id": "color",
                    "content": "Card color",
                    "type": "field",
                    "dataType": "string",
                    "format": "color",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "date_added": {
                    "id": "date_added",
                    "content": "Date added",
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
                        "dateFormat": "D MMMM, Y",
                        "timeFormat": "",
                        "isUTC": "false"
                    },
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "description": {
                    "id": "description",
                    "content": "Feature description",
                    "type": "field",
                    "dataType": "string",
                    "format": "markdown",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "dev_status": {
                    "id": "dev_status",
                    "content": "Development status",
                    "type": "field",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": "development_status",
                    "actions": []
                },
                "feature_id": {
                    "id": "feature_id",
                    "content": "Inner ID",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": null,
                    "actions": []
                },
                "feature_type": {
                    "id": "feature_type",
                    "content": "Feature type",
                    "type": "field",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": "feature_type",
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
                "progress": {
                    "id": "progress",
                    "content": "Progress",
                    "type": "field",
                    "dataType": "json",
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
                    "write": true,
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "screenshots": {
                    "id": "screenshots",
                    "content": "Screenshots or Screencast",
                    "type": "field",
                    "dataType": "file",
                    "format": "multipleFiles",
                    "formatOptions": {},
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "status": {
                    "id": "status",
                    "content": "Request status",
                    "type": "field",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": "request_status",
                    "actions": []
                },
                "subscriber_ids": {
                    "id": "subscriber_ids",
                    "content": "Subscribers",
                    "type": "field",
                    "dataType": "arrayLink",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "WebUser",
                    "actions": []
                },
                "tags": {
                    "id": "tags",
                    "content": "Tags",
                    "type": "field",
                    "dataType": "arrayLink",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": "tags",
                    "actions": []
                },
                "title": {
                    "id": "title",
                    "content": "Feature title",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": null,
                    "actions": []
                },
                "user_id": {
                    "id": "user_id",
                    "content": "Who suggested",
                    "type": "field",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "WebUser",
                    "actions": []
                },
                "votes": {
                    "id": "votes",
                    "content": "Number of upvotes",
                    "type": "field",
                    "dataType": "number",
                    "format": "positiveNum",
                    "formatOptions": {},
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "votes_ids": {
                    "id": "votes_ids",
                    "content": "Who upvoted",
                    "type": "field",
                    "dataType": "arrayLink",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "WebUser",
                    "actions": []
                },
                "action__10531621343955723": {
                    "content": "Pick for development",
                    "id": "action__10531621343955723",
                    "type": "action",
                    "actions": []
                },
                "action__37201621343964714": {
                    "content": "Put back to backlog",
                    "id": "action__37201621343964714",
                    "type": "action",
                    "actions": []
                },
                "action__14851621345231893": {
                    "content": "Release!",
                    "id": "action__14851621345231893",
                    "type": "action",
                    "actions": []
                }
            },
            "fieldParams": {
                "color": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "date_added": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "description": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "dev_status": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
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
                "status": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "title": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "user_id": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "votes": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "votes_ids": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
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
                            "user_name": {
                                "id": "user_name",
                                "content": "User name",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": null
                            }
                        },
                        "fieldParams": {
                            "id": {
                                "include": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "user_name": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            }
                        },
                        "fieldOrder": [
                            "id",
                            "user_name"
                        ]
                    }
                },
                "feature_type": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "feature_id": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "subscriber_ids": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "tags": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "progress": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "screenshots": {
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
                    "title": "Feature",
                    "fieldIds": [
                        "feature_id",
                        "progress",
                        "user_id",
                        "date_added",
                        "feature_type",
                        "title",
                        "description",
                        "status",
                        "dev_status",
                        "color",
                        "id",
                        "tags",
                        "screenshots"
                    ]
                },
                "82431621030139706": {
                    "id": "82431621030139706",
                    "title": "Votes",
                    "fieldIds": [
                        "subscriber_ids",
                        "votes_ids",
                        "votes"
                    ]
                },
                "29571621344123729": {
                    "id": "29571621344123729",
                    "title": "Manage",
                    "fieldIds": [
                        "action__10531621343955723",
                        "action__14851621345231893",
                        "action__37201621343964714"
                    ]
                }
            },
            "columnOrder": [
                "tab-1",
                "82431621030139706",
                "29571621344123729"
            ],
            "actions": [
                {
                    "sysName": "",
                    "id": "10531621343955723",
                    "name": "Pick for development",
                    "displayAs": "button",
                    "buttonIcon": "arrowRight",
                    "buttonType": "accent",
                    "formMapping": [
                        {
                            "id": "13041621344021008",
                            "target": "id",
                            "type": "objectField",
                            "value": "id"
                        },
                        {
                            "id": "30131621344029217",
                            "target": "dev_status",
                            "type": "const",
                            "value": "under_development"
                        }
                    ],
                    "conditionals": [
                        {
                            "id": "40471621344079447",
                            "target": "field",
                            "value": "planned",
                            "field": "dev_status"
                        }
                    ],
                    "dropdown": true,
                    "closePopup": true
                },
                {
                    "sysName": "",
                    "id": "37201621343964714",
                    "name": "Put back to backlog",
                    "displayAs": "button",
                    "buttonIcon": "arrowLeft",
                    "buttonType": "accent",
                    "dropdown": true,
                    "closePopup": true,
                    "formMapping": [
                        {
                            "id": "37871621344159914",
                            "target": "id",
                            "type": "objectField",
                            "value": "id"
                        },
                        {
                            "id": "69381621344160975",
                            "target": "dev_status",
                            "type": "const",
                            "value": "planned"
                        }
                    ],
                    "conditionals": [
                        {
                            "id": "75151621344162098",
                            "target": "field",
                            "value": "under_development",
                            "field": "dev_status"
                        }
                    ]
                },
                {
                    "sysName": "",
                    "id": "14851621345231893",
                    "name": "Release!",
                    "displayAs": "button",
                    "buttonIcon": "rocket",
                    "buttonType": "accent",
                    "dropdown": true,
                    "closePopup": true,
                    "formMapping": [
                        {
                            "id": "24921621345250090",
                            "target": "id",
                            "type": "objectField",
                            "value": "id"
                        },
                        {
                            "id": "38651621345261152",
                            "target": "dev_status",
                            "type": "const",
                            "value": "released"
                        }
                    ],
                    "conditionals": [
                        {
                            "id": "78811621345270074",
                            "target": "field",
                            "value": "under_development",
                            "field": "dev_status"
                        }
                    ]
                }
            ]
        },
        "fields": {
            "color": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "date_added": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "description": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "dev_status": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": true,
                "fileImageSize": 200,
                "clickable": false,
                "searchData": [
                    {
                        "key": "planned",
                        "value": "Planned"
                    },
                    {
                        "key": "released",
                        "value": "Released"
                    },
                    {
                        "key": "under_development",
                        "value": "Under development"
                    }
                ]
            },
            "id": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "status": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": true,
                "fileImageSize": 200,
                "clickable": false,
                "searchData": [
                    {
                        "key": "approved",
                        "value": "Approved"
                    },
                    {
                        "key": "double",
                        "value": "Double"
                    },
                    {
                        "key": "declined",
                        "value": "Declined"
                    },
                    {
                        "key": "new",
                        "value": "New"
                    }
                ]
            },
            "title": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "user_id": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "votes": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "votes_ids": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false,
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
                        "user_name": {
                            "id": "user_name",
                            "content": "User name",
                            "type": "field",
                            "read": true,
                            "dataType": "string",
                            "format": null,
                            "formatOptions": null
                        }
                    },
                    "fieldParams": {
                        "id": {
                            "include": false,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "user_name": {
                            "include": true,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        }
                    },
                    "fieldOrder": [
                        "id",
                        "user_name"
                    ]
                }
            },
            "feature_type": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": true,
                "fileImageSize": 200,
                "clickable": false,
                "searchData": [
                    {
                        "key": "feature",
                        "value": "feature"
                    },
                    {
                        "key": "bug",
                        "value": "bug"
                    }
                ]
            },
            "feature_id": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "subscriber_ids": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "tags": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": true,
                "fileImageSize": 200,
                "clickable": false,
                "searchData": [
                    {
                        "key": "scenarios",
                        "value": "scenarios"
                    },
                    {
                        "key": "api-builder",
                        "value": "api-builder"
                    },
                    {
                        "key": "web-pages",
                        "value": "web-pages"
                    },
                    {
                        "key": "integrations",
                        "value": "integrations"
                    },
                    {
                        "key": "database",
                        "value": "database"
                    },
                    {
                        "key": "billing",
                        "value": "billing"
                    },
                    {
                        "key": "app life cycle management",
                        "value": "app life cycle management"
                    },
                    {
                        "key": "reports",
                        "value": "reports"
                    },
                    {
                        "key": "general issues",
                        "value": "general issues"
                    },
                    {
                        "key": "plugin",
                        "value": "plugin"
                    },
                    {
                        "key": "team plans",
                        "value": "team plans"
                    },
                    {
                        "key": "web3",
                        "value": "web3"
                    }
                ]
            },
            "progress": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "screenshots": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            }
        },
        "cardColor": "color",
        "cardColorOption": "border",
        "cardHeaderComment": "dev_status",
        "cardBodyText": "progress",
        "showCounter": true,
        "counterField": "votes",
        "counterText": " upvotes",
        "actions": [
            {
                "sysName": "",
                "id": "10531621343955723",
                "name": "Pick for development",
                "displayAs": "button",
                "buttonIcon": "arrowRight",
                "buttonType": "accent",
                "formMapping": [
                    {
                        "id": "13041621344021008",
                        "target": "id",
                        "type": "objectField",
                        "value": "id"
                    },
                    {
                        "id": "30131621344029217",
                        "target": "dev_status",
                        "type": "const",
                        "value": "under_development"
                    }
                ],
                "conditionals": [
                    {
                        "id": "40471621344079447",
                        "target": "field",
                        "value": "planned",
                        "field": "dev_status",
                        "fieldValue": "planned"
                    }
                ],
                "dropdown": true,
                "closePopup": true
            },
            {
                "sysName": "",
                "id": "37201621343964714",
                "name": "Put back to backlog",
                "displayAs": "button",
                "buttonIcon": "arrowLeft",
                "buttonType": "accent",
                "dropdown": true,
                "closePopup": true,
                "formMapping": [
                    {
                        "id": "37871621344159914",
                        "target": "id",
                        "type": "objectField",
                        "value": "id"
                    },
                    {
                        "id": "69381621344160975",
                        "target": "dev_status",
                        "type": "const",
                        "value": "planned"
                    }
                ],
                "conditionals": [
                    {
                        "id": "75151621344162098",
                        "target": "field",
                        "value": "under_development",
                        "field": "dev_status",
                        "fieldValue": "planned"
                    }
                ]
            },
            {
                "sysName": "",
                "id": "14851621345231893",
                "name": "Release!",
                "displayAs": "button",
                "buttonIcon": "rocket",
                "buttonType": "accent",
                "dropdown": true,
                "closePopup": true,
                "formMapping": [
                    {
                        "id": "24921621345250090",
                        "target": "id",
                        "type": "objectField",
                        "value": "id"
                    },
                    {
                        "id": "38651621345261152",
                        "target": "dev_status",
                        "type": "const",
                        "value": "released"
                    }
                ],
                "conditionals": [
                    {
                        "id": "78811621345270074",
                        "target": "field",
                        "value": "under_development",
                        "field": "dev_status",
                        "fieldValue": "planned"
                    }
                ]
            }
        ],
        "filterParams": {
            "filteringType": "regular",
            "isFiltering": true,
            "filterFields": {
                "date_added": {
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
                        "dateFormat": "D MMMM, Y",
                        "timeFormat": "",
                        "isUTC": "false"
                    },
                    "name": "Date added"
                },
                "dev_status": {
                    "active": true,
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "name": "Development status",
                    "linkDirectory": [
                        {
                            "id": "planned",
                            "text": "Planned"
                        },
                        {
                            "id": "released",
                            "text": "Released"
                        },
                        {
                            "id": "under_development",
                            "text": "Under development"
                        }
                    ]
                },
                "status": {
                    "active": true,
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "name": "Request status",
                    "linkDirectory": [
                        {
                            "id": "approved",
                            "text": "Approved"
                        },
                        {
                            "id": "double",
                            "text": "Double"
                        },
                        {
                            "id": "declined",
                            "text": "Declined"
                        },
                        {
                            "id": "new",
                            "text": "New"
                        }
                    ]
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
                }
            },
            "isSorting": false
        },
        "lazyLoading": true
    },
    "tableTitle": "",
    "actions": null,
    "headers": [
        {
            "sysName": "color",
            "dataType": "string",
            "name": "Card color",
            "id": "61881621017200362",
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
            "format": "color",
            "formatOptions": null,
            "groupName": null,
            "indexExists": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "date_added",
            "dataType": "date",
            "name": "Date added",
            "id": "68351620832123660",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "description",
            "dataType": "string",
            "name": "Feature description",
            "id": "77031620832091108",
            "link": "",
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
            "format": "markdown",
            "formatOptions": null,
            "groupName": null,
            "indexExists": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "dev_status",
            "dataType": "link",
            "name": "Development status",
            "id": "85621620832330584",
            "link": "development_status",
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 8,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "indexExists": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
            "arrayLink": false,
            "linkType": true,
            "array": false
        },
        {
            "sysName": "feature_id",
            "dataType": "string",
            "name": "Inner ID",
            "id": "23601621342083348",
            "link": null,
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
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "indexExists": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "feature_type",
            "dataType": "link",
            "name": "Feature type",
            "id": "55371621030232780",
            "link": "feature_type",
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 10,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "indexExists": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
            "arrayLink": false,
            "linkType": true,
            "array": false
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
            "indexExists": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "progress",
            "dataType": "json",
            "name": "Progress",
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
            "typeVariable": {},
            "json": true,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "screenshots",
            "dataType": "file",
            "name": "Screenshots or Screencast",
            "id": "61091637158867177",
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
            "format": "multipleFiles",
            "formatOptions": null,
            "groupName": null,
            "indexExists": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "status",
            "dataType": "link",
            "name": "Request status",
            "id": "40251620832303364",
            "link": "request_status",
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
            "indexExists": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
            "arrayLink": false,
            "linkType": true,
            "array": false
        },
        {
            "sysName": "subscriber_ids",
            "dataType": "arrayLink",
            "name": "Subscribers",
            "id": "26751621348189191",
            "link": "WebUser",
            "group": "1621348185318",
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
            "indexExists": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
            "arrayLink": true,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "tags",
            "dataType": "arrayLink",
            "name": "Tags",
            "id": "67851621409605492",
            "link": "tags",
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
            "indexExists": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
            "arrayLink": true,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "title",
            "dataType": "string",
            "name": "Feature title",
            "id": "79031620832091734",
            "link": null,
            "group": "0",
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
            "indexExists": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "user_id",
            "dataType": "link",
            "name": "Who suggested",
            "id": "59421620832153105",
            "link": "WebUser",
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
            "indexExists": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
            "arrayLink": false,
            "linkType": true,
            "array": false
        },
        {
            "sysName": "votes",
            "dataType": "number",
            "name": "Number of upvotes",
            "id": "68061620832170304",
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
            "format": "positiveNum",
            "formatOptions": null,
            "groupName": null,
            "indexExists": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "votes_ids",
            "dataType": "arrayLink",
            "name": "Who upvoted",
            "id": "14001620832180875",
            "link": "WebUser",
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
            "indexExists": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
            "arrayLink": true,
            "linkType": false,
            "array": false
        }
    ],
    "data": [
        {
            "subscriber_ids": [
                {
                    "lastName": "Ershov",
                    "firstName": "Pavel",
                    "id": "pavel@directual.com"
                }
            ],
            "description": "A service \"Build an app for me\" where: \n- One can create a brief for an app.\n- Certified developers would offer their services.\n- Client deposits sum in D-coins.\n- When the work is done, D-coins are transferred to the developer.",
            "tags": [
                "general issues"
            ],
            "feature_id": "PLT-454",
            "color": "57bf97",
            "user_id": {
                "lastName": "Ershov",
                "firstName": "Pavel",
                "id": "pavel@directual.com"
            },
            "feature_type": "feature",
            "id": "4caf08d6-f7e6-40a3-bb9e-704e0ffeba0c",
            "progress": "{\"firstValue\":100}",
            "dev_status": {
                "id": "under_development",
                "status": "Under development"
            },
            "status": {
                "id": "approved",
                "status": "Approved"
            },
            "date_added": 1720187535000,
            "title": "Hire a developer section"
        },
        {
            "subscriber_ids": [
                {
                    "lastName": "Ershov",
                    "firstName": "Pavel",
                    "id": "pavel@directual.com"
                }
            ],
            "description": "Add the \"Called from\" list for scenario:\n\n- Scenarios that are linked with the scenario\n- API endpoints that call scenario synchronically",
            "tags": [
                "scenarios"
            ],
            "feature_id": "PLT-457",
            "color": "57bf97",
            "user_id": {
                "lastName": "Ershov",
                "firstName": "Pavel",
                "id": "pavel@directual.com"
            },
            "feature_type": "feature",
            "id": "6e276c99-065c-4268-a49b-0a058a8c8bc5",
            "progress": "{\"firstValue\":70}",
            "dev_status": {
                "id": "under_development",
                "status": "Under development"
            },
            "status": {
                "id": "approved",
                "status": "Approved"
            },
            "date_added": 1726071007000,
            "title": "\"Called from\" list for scenario"
        },
        {
            "subscriber_ids": [
                {
                    "lastName": "Ershov",
                    "firstName": "Pavel",
                    "id": "pavel@directual.com"
                }
            ],
            "description": "Upgrade cards component: add new layouts, improve iteractions with cards, etc.",
            "tags": [
                "web-pages"
            ],
            "feature_id": "PLT-460",
            "color": "57bf97",
            "user_id": {
                "lastName": "Ershov",
                "firstName": "Pavel",
                "id": "pavel@directual.com"
            },
            "feature_type": "feature",
            "id": "4af27e44-58f5-4d03-97ef-55302ea96aed",
            "progress": "{\"firstValue\":75}",
            "dev_status": {
                "id": "under_development",
                "status": "Under development"
            },
            "status": {
                "id": "approved",
                "status": "Approved"
            },
            "date_added": 1730226584000,
            "title": "New Cards component (Cards '24)"
        },
        {
            "subscriber_ids": [
                {
                    "lastName": "Ershov",
                    "firstName": "Pavel",
                    "id": "pavel@directual.com"
                }
            ],
            "description": "- Add multiple addresses via SMTP plugin\n- Add a select of the email in email-step",
            "tags": [
                "scenarios",
                "integrations"
            ],
            "feature_id": "PLT-461",
            "color": "57bf97",
            "user_id": {
                "lastName": "Ershov",
                "firstName": "Pavel",
                "id": "pavel@directual.com"
            },
            "feature_type": "feature",
            "id": "e3d66246-e04a-4225-b178-267474eac458",
            "progress": "{\"firstValue\":80}",
            "dev_status": {
                "id": "under_development",
                "status": "Under development"
            },
            "status": {
                "id": "approved",
                "status": "Approved"
            },
            "date_added": 1730226692000,
            "title": "Add multiple addresses in SMTP plugin"
        },
        {
            "subscriber_ids": [
                {
                    "lastName": "Ershov",
                    "firstName": "Pavel",
                    "id": "pavel@directual.com"
                }
            ],
            "description": "Add templates for conditions and re-use them!",
            "tags": [
                "web-pages"
            ],
            "feature_id": "PLT-466",
            "color": "57bf97",
            "user_id": {
                "lastName": "Ershov",
                "firstName": "Pavel",
                "id": "pavel@directual.com"
            },
            "feature_type": "feature",
            "id": "c90782c9-9840-450d-8535-8b4605ecb86d",
            "progress": "{\"firstValue\":90}",
            "dev_status": {
                "id": "under_development",
                "status": "Under development"
            },
            "status": {
                "id": "approved",
                "status": "Approved"
            },
            "date_added": 1739915274000,
            "title": "Condition templates for Multistep form"
        },
        {
            "votes": 31,
            "subscriber_ids": [
                {
                    "firstName": "Victor",
                    "lastName": "Zaborskiy",
                    "id": "victor@zaborskiy.com"
                },
                {
                    "firstName": "Александр",
                    "lastName": "Головков",
                    "id": "a.golovkoff@gmail.com"
                },
                {
                    "id": "mf.alexander@gmail.com"
                },
                {
                    "firstName": "Nuno",
                    "lastName": "Poço",
                    "id": "nuno.poco@gmail.com"
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
                    "lastName": "Quinn",
                    "firstName": "Niki",
                    "id": "niki_q@icloud.com"
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
                    "id": "subrtt@gmail.com"
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
                    "id": "newmb.eg@gmail.com"
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
                    "lastName": "Chandler",
                    "firstName": "Jacob",
                    "id": "jrchandler@gmail.com"
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
                    "id": "lykovmaxim@gmail.com"
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
                    "id": "xavvis308@gmail.com"
                },
                {
                    "id": "sergey.azarov@gmail.com"
                },
                {
                    "firstName": "Elise",
                    "lastName": "Boonstra-Legerstee",
                    "id": "elise.legerstee@gmail.com"
                },
                {
                    "firstName": "Hao",
                    "lastName": "Ngo",
                    "id": "hao.ngolv@gmail.com"
                },
                {
                    "id": "kovgan96@gmail.com"
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
            "description": "Calendar view for the structure",
            "tags": [
                "web-pages"
            ],
            "feature_id": "PLT-113",
            "color": "57bf97",
            "user_id": {
                "lastName": "Ershov",
                "firstName": "Pavel",
                "id": "pavel@directual.com"
            },
            "feature_type": "feature",
            "id": "2c7192b1-cae4-4234-a245-8e5d0160ee2f",
            "dev_status": {
                "id": "planned",
                "status": "Planned"
            },
            "status": {
                "id": "approved",
                "status": "Approved"
            },
            "date_added": 1621374804000,
            "votes_ids": [
                {
                    "firstName": "Victor",
                    "lastName": "Zaborskiy",
                    "id": "victor@zaborskiy.com"
                },
                {
                    "firstName": "Александр",
                    "lastName": "Головков",
                    "id": "a.golovkoff@gmail.com"
                },
                {
                    "id": "mf.alexander@gmail.com"
                },
                {
                    "firstName": "Nuno",
                    "lastName": "Poço",
                    "id": "nuno.poco@gmail.com"
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
                    "lastName": "Quinn",
                    "firstName": "Niki",
                    "id": "niki_q@icloud.com"
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
                    "id": "subrtt@gmail.com"
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
                    "id": "newmb.eg@gmail.com"
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
                    "lastName": "Chandler",
                    "firstName": "Jacob",
                    "id": "jrchandler@gmail.com"
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
                    "id": "lykovmaxim@gmail.com"
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
                    "id": "xavvis308@gmail.com"
                },
                {
                    "id": "sergey.azarov@gmail.com"
                },
                {
                    "firstName": "Elise",
                    "lastName": "Boonstra-Legerstee",
                    "id": "elise.legerstee@gmail.com"
                },
                {
                    "firstName": "Hao",
                    "lastName": "Ngo",
                    "id": "hao.ngolv@gmail.com"
                },
                {
                    "id": "kovgan96@gmail.com"
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
            "title": "Calendar component",
            "progress": ""
        },
        {
            "votes": 17,
            "subscriber_ids": [
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
                    "lastName": "Ershov",
                    "firstName": "Pavel",
                    "id": "pavel@directual.com"
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
            "description": "Option to restrict any access to files on Directual for non-authorised users",
            "tags": [
                "database"
            ],
            "feature_id": "PLT-177",
            "color": "57bf97",
            "user_id": {
                "lastName": "Ershov",
                "firstName": "Pavel",
                "id": "pavel@directual.com"
            },
            "feature_type": "feature",
            "id": "3874bd01-38af-4d0c-a04f-5eb999733d4f",
            "progress": "{\"firstValue\":0}",
            "dev_status": {
                "id": "planned",
                "status": "Planned"
            },
            "status": {
                "id": "approved",
                "status": "Approved"
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
            "title": "Restrict access to files "
        },
        {
            "votes": 15,
            "subscriber_ids": [
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
            "description": "from the table row",
            "tags": [
                "web-pages"
            ],
            "feature_id": "PLT-107",
            "color": "57bf97",
            "user_id": {
                "lastName": "Ershov",
                "firstName": "Pavel",
                "id": "pavel@directual.com"
            },
            "feature_type": "feature",
            "id": "bcfb59c9-235d-4d4a-96d9-07c73ec20124",
            "dev_status": {
                "id": "planned",
                "status": "Planned"
            },
            "status": {
                "id": "approved",
                "status": "Approved"
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
            "progress": ""
        },
        {
            "votes": 12,
            "subscriber_ids": [
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
            "description": "As of today, arrayLink is displayed as a simple list. It would be great to have:\n\n- Comments\n- ✅ Sorted list (in prod)\n- Cards\n- ✅ Table (in prod)\n- ✅ Shopping cart (in prod)\n- Calendar",
            "tags": [
                "web-pages"
            ],
            "feature_id": "PLT-114",
            "color": "57bf97",
            "user_id": {
                "lastName": "Ershov",
                "firstName": "Pavel",
                "id": "pavel@directual.com"
            },
            "feature_type": "feature",
            "id": "db3ce173-737a-4b9b-9872-f9c5d090f015",
            "progress": "{\"firstValue\":40}",
            "dev_status": {
                "id": "planned",
                "status": "Planned"
            },
            "status": {
                "id": "approved",
                "status": "Approved"
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
            "title": "Sophisticated view for arrayLinks on object cards"
        },
        {
            "votes": 11,
            "subscriber_ids": [
                {
                    "firstName": "Egor",
                    "lastName": "Baev",
                    "id": "artosiris@gmail.com"
                },
                {
                    "firstName": "Kashtanov",
                    "lastName": "Dmitry",
                    "id": "y3sw0r1d@gmail.com"
                },
                {
                    "firstName": "Vladislav",
                    "lastName": "Boyko",
                    "id": "for.work.vboyko@yandex.ru"
                },
                {
                    "firstName": "Dimitry",
                    "lastName": "Novozhilov",
                    "id": "novozhilov@code-word.ru"
                },
                {
                    "firstName": "Roman",
                    "lastName": "Tkachev",
                    "id": "tkachev.rb@gmail.com"
                },
                {
                    "id": "effgenij@gmail.com"
                },
                {
                    "lastName": "Mozer",
                    "firstName": "Anna",
                    "id": "annmozer116@gmail.com"
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
            "description": "Allow users to copy and paste cubes in scenarios",
            "tags": [
                "scenarios"
            ],
            "feature_id": "PLT-117",
            "color": "57bf97",
            "user_id": {
                "lastName": "Dolgov",
                "firstName": "Nikita",
                "id": "n.dolgov@directual.com"
            },
            "feature_type": "feature",
            "id": "48d88933-add5-49a8-aa6d-a3748cdca468",
            "dev_status": {
                "id": "planned",
                "status": "Planned"
            },
            "status": {
                "id": "approved",
                "status": "Approved"
            },
            "date_added": 1621375728000,
            "votes_ids": [
                {
                    "firstName": "Egor",
                    "lastName": "Baev",
                    "id": "artosiris@gmail.com"
                },
                {
                    "firstName": "Kashtanov",
                    "lastName": "Dmitry",
                    "id": "y3sw0r1d@gmail.com"
                },
                {
                    "firstName": "Vladislav",
                    "lastName": "Boyko",
                    "id": "for.work.vboyko@yandex.ru"
                },
                {
                    "firstName": "Dimitry",
                    "lastName": "Novozhilov",
                    "id": "novozhilov@code-word.ru"
                },
                {
                    "firstName": "Roman",
                    "lastName": "Tkachev",
                    "id": "tkachev.rb@gmail.com"
                },
                {
                    "id": "effgenij@gmail.com"
                },
                {
                    "lastName": "Mozer",
                    "firstName": "Anna",
                    "id": "annmozer116@gmail.com"
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
            "title": "Copy cubes",
            "progress": ""
        },
        {
            "votes": 11,
            "subscriber_ids": [
                {
                    "firstName": "Egor",
                    "lastName": "Baev",
                    "id": "artosiris@gmail.com"
                },
                {
                    "firstName": "Artem",
                    "lastName": "Laptev",
                    "id": "artemlaptev7@gmail.com"
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
            "description": "When a structure becomes big with hundreds of parameters it usually makes it difficult to manage and to find in scenario parameter we need. Usually a lot of parameters with time become unused. The easiest way to fix this problem but not to broke old scenarios and other structures, connected with our unused parameters is to allow user to hide it both in structures and scenarios, something like adding them to archive from which we can drop them back any time we want.   ",
            "tags": [
                "database"
            ],
            "feature_id": "PLT-281",
            "color": "57bf97",
            "user_id": {
                "firstName": "Artem",
                "lastName": "Laptev",
                "id": "artemlaptev7@gmail.com"
            },
            "feature_type": "feature",
            "id": "4dee093a-d6b6-461c-997c-7bce76b93027",
            "dev_status": {
                "id": "planned",
                "status": "Planned"
            },
            "status": {
                "id": "approved",
                "status": "Approved"
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
            "progress": ""
        },
        {
            "votes": 10,
            "subscriber_ids": [
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
            "description": "Two-step import of CSV/XLS\n\n### Step 1\nFields aliases, with quick structure editing.\n\n### Step 2\nImport itself\n\nP.S. Webflow has similar mechanism of CSV import.\n\nPlus:\n- import from Airtable\n- import from Google Sheets\n- import from popular CRMs\n- Listeners on SQL databases",
            "tags": [
                "database"
            ],
            "feature_id": "PLT-102",
            "color": "57bf97",
            "user_id": {
                "lastName": "Ershov",
                "firstName": "Pavel",
                "id": "pavel@directual.com"
            },
            "feature_type": "feature",
            "id": "b5ca7520-f1d3-48da-af26-0cdacab94757",
            "progress": "{\"firstValue\":40}",
            "dev_status": {
                "id": "planned",
                "status": "Planned"
            },
            "status": {
                "id": "approved",
                "status": "Approved"
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
            "title": "Import updating"
        },
        {
            "votes": 10,
            "subscriber_ids": [
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
            "description": "Add \"not in array\" filter in condition cube and in api filter section. Ideally add 2 new options: \n1. object is NOT in array\n2. array does NOT contain all\n2. array does NOT contain any",
            "tags": [
                "scenarios",
                "api-builder"
            ],
            "feature_id": "PLT-120",
            "color": "57bf97",
            "user_id": {
                "lastName": "Dolgov",
                "firstName": "Nikita",
                "id": "n.dolgov@directual.com"
            },
            "feature_type": "feature",
            "id": "7d8635da-2738-44cf-b4b7-1d509611f8ed",
            "progress": "{\"firstValue\":0}",
            "dev_status": {
                "id": "planned",
                "status": "Planned"
            },
            "status": {
                "id": "approved",
                "status": "Approved"
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
            "title": "Add NOT-filters for arrays"
        },
        {
            "votes": 10,
            "subscriber_ids": [
                {
                    "firstName": "Egor",
                    "lastName": "Baev",
                    "id": "artosiris@gmail.com"
                },
                {
                    "firstName": "Vladimir",
                    "lastName": "Stepanenko",
                    "id": "vgstepanenko@gmail.com"
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
                    "id": "trustpropsonline@gmail.com"
                },
                {
                    "firstName": "JOHNLY",
                    "lastName": "NARAG",
                    "id": "johnly_s_narag@yahoo.com"
                }
            ],
            "description": "Copy pages in Web-pages",
            "tags": [
                "web-pages"
            ],
            "feature_id": "PLT-215",
            "color": "57bf97",
            "user_id": {
                "firstName": "Vladimir",
                "lastName": "Stepanenko",
                "id": "vgstepanenko@gmail.com"
            },
            "feature_type": "feature",
            "id": "67b93ec9-cff1-4870-8d92-42a4a53e60d9",
            "progress": "{\"firstValue\":0}",
            "dev_status": {
                "id": "planned",
                "status": "Planned"
            },
            "status": {
                "id": "approved",
                "status": "Approved"
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
                    "id": "trustpropsonline@gmail.com"
                },
                {
                    "firstName": "JOHNLY",
                    "lastName": "NARAG",
                    "id": "johnly_s_narag@yahoo.com"
                }
            ],
            "title": "Copy page on portal"
        },
        {
            "votes": 10,
            "subscriber_ids": [
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
                    "lastName": "Ershov",
                    "firstName": "Pavel",
                    "id": "pavel@directual.com"
                },
                {
                    "firstName": "Otto",
                    "lastName": "Baumann",
                    "id": "ob@it-setup.dk"
                },
                {
                    "firstName": "Antwan",
                    "lastName": "Carr",
                    "id": "unlabeledlifestyle@gmail.com"
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
            "description": "- XML sitemap\n- robots.txt\n- canonical URLs\n- Schema.org Open Graph\n- 404\n- htaccess\n- Meta: Title, description, Keywords, Content-Type\n- Alt for pictures\n\n[SEO checklist](https://dminhvu.com/nextjs-seo)",
            "tags": [
                "web-pages"
            ],
            "feature_id": "PLT-304",
            "color": "57bf97",
            "user_id": {
                "lastName": "Ershov",
                "firstName": "Pavel",
                "id": "pavel@directual.com"
            },
            "feature_type": "feature",
            "id": "014091fa-909b-4657-b309-5be994ec1e4c",
            "progress": "{\"firstValue\":0}",
            "dev_status": {
                "id": "planned",
                "status": "Planned"
            },
            "status": {
                "id": "approved",
                "status": "Approved"
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
            "title": "SEO-related features"
        }
    ],
    "totalPages": 4,
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
            "description",
            1385610
        ],
        [
            "dev_status.id",
            1385613
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
            "screenshots",
            1385610
        ],
        [
            "status.id",
            1385612
        ],
        [
            "status.status",
            1385612
        ],
        [
            "subscriber_ids.firstName",
            1385542
        ],
        [
            "subscriber_ids.id",
            1385542
        ],
        [
            "subscriber_ids.lastName",
            1385542
        ],
        [
            "tags",
            1385610
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
            "votes_ids.user_name",
            1385542
        ]
    ],
    "writeFields": [
        "color",
        "description",
        "dev_status",
        "feature_type",
        "id",
        "progress",
        "status",
        "tags",
        "title"
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
            "jsonObject": "[{\"sysName\":\"dateLastActivity\",\"dataType\":\"string\",\"name\":\"dateLastActivity\",\"id\":\"8\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"dateCreated\",\"dataType\":\"string\",\"name\":\"dateCreated\",\"id\":\"11\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"isAuthorization\",\"dataType\":\"boolean\",\"name\":\"isAuthorization\",\"id\":\"7\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"phone\",\"dataType\":\"string\",\"name\":\"Phone\",\"id\":\"10\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"email\",\"dataType\":\"string\",\"name\":\"Email\",\"id\":\"9\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"userpic\",\"dataType\":\"file\",\"name\":\"User pic\",\"id\":\"1\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"Username (login)\",\"id\":\"13\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"role\",\"dataType\":\"string\",\"name\":\"Roles\",\"id\":\"6\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"password\",\"dataType\":\"string\",\"name\":\"Password (hash)\",\"id\":\"12\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"firstName\",\"dataType\":\"string\",\"name\":\"First name\",\"id\":\"5\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"lastName\",\"dataType\":\"string\",\"name\":\"Last name\",\"id\":\"4\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"gender\",\"dataType\":\"string\",\"name\":\"Gender\",\"id\":\"3\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"date_registered\",\"dataType\":\"date\",\"name\":\"Date registered on Dev\",\"id\":\"14451621029358812\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"isBlocked\",\"dataType\":\"boolean\",\"name\":\"Block user\",\"id\":\"2\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"code\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"51351621027822811\",\"link\":null,\"group\":\"1621027815164\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"isEmailConfirmed\",\"dataType\":\"boolean\",\"name\":\"Email confirmed\",\"id\":\"60111621027825496\",\"link\":\"\",\"group\":\"1621027815164\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false}]",
            "jsonGroupSettings": "[{\"id\":-502807437,\"name\":\"Contacts\",\"order\":0},{\"id\":-1776115286,\"name\":\"System fields\",\"order\":1},{\"id\":1621027815164,\"name\":\"Email confirmation\",\"order\":2}]",
            "jsonViewIdSettings": "[{\"sysName\":\"firstName\"},{\"sysName\":\"lastName\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2021-11-20T16:05:00Z",
            "createBy": 0,
            "changedBy": 0,
            "_settings": null,
            "_nativeIndexSettings": null,
            "objectIDSysName": "id",
            "innerIDField": {
                "sysName": "id",
                "dataType": "id",
                "name": "Username (login)",
                "id": "13",
                "link": "",
                "group": "",
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "array": false
            },
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
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"votes_ids\",\"dataType\":\"arrayLink\",\"name\":\"Who upvoted\",\"id\":\"14001620832180875\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"feature_id\",\"dataType\":\"string\",\"name\":\"Inner ID\",\"id\":\"23601621342083348\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"subscriber_ids\",\"dataType\":\"arrayLink\",\"name\":\"Subscribers\",\"id\":\"26751621348189191\",\"link\":\"WebUser\",\"group\":\"1621348185318\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"status\",\"dataType\":\"link\",\"name\":\"Request status\",\"id\":\"40251620832303364\",\"link\":\"request_status\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"release_id\",\"dataType\":\"link\",\"name\":\"Release\",\"id\":\"40791621408746909\",\"link\":\"Releases\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"feature_type\",\"dataType\":\"link\",\"name\":\"Feature type\",\"id\":\"55371621030232780\",\"link\":\"feature_type\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"user_id\",\"dataType\":\"link\",\"name\":\"Who suggested\",\"id\":\"59421620832153105\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"screenshots\",\"dataType\":\"file\",\"name\":\"Screenshots or Screencast\",\"id\":\"61091637158867177\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":17,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"multipleFiles\",\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"color\",\"dataType\":\"string\",\"name\":\"Card color\",\"id\":\"61881621017200362\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"tags\",\"dataType\":\"arrayLink\",\"name\":\"Tags\",\"id\":\"67851621409605492\",\"link\":\"tags\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"votes\",\"dataType\":\"number\",\"name\":\"Number of upvotes\",\"id\":\"68061620832170304\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"date_added\",\"dataType\":\"date\",\"name\":\"Date added\",\"id\":\"68351620832123660\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"D MMMM, Y\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"progress\",\"dataType\":\"json\",\"name\":\"Progress\",\"id\":\"68751622642385874\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":16,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"slider\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"unitName\":\"%\",\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{\"min\":0,\"max\":100,\"step\":5},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"release_date\",\"dataType\":\"date\",\"name\":\"Release date\",\"id\":\"71651621345011532\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"D MMMM, Y\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"decline_reason\",\"dataType\":\"string\",\"name\":\"Reason of decline\",\"id\":\"73671621342083940\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"date_updated\",\"dataType\":\"date\",\"name\":\"Date updated\",\"id\":\"74581670507990970\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"D MMMM, Y\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"description\",\"dataType\":\"string\",\"name\":\"Feature description\",\"id\":\"77031620832091108\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"title\",\"dataType\":\"string\",\"name\":\"Feature title\",\"id\":\"79031620832091734\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"dev_status\",\"dataType\":\"link\",\"name\":\"Development status\",\"id\":\"85621620832330584\",\"link\":\"development_status\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"array\":false}]",
            "jsonGroupSettings": "[{\"name\":\"Subscriptions\",\"id\":1621348185318,\"order\":0}]",
            "jsonViewIdSettings": "[{\"sysName\":\"feature_id\"},{\"sysName\":\"title\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2022-12-08T14:02:39Z",
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
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "array": false
            },
            "folderId": 33625685
        },
        "1385612": {
            "networkID": 6829,
            "sysName": "request_status",
            "name": "request_status",
            "id": 1385612,
            "dateCreated": "2021-05-12T15:13:21Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false},{\"sysName\":\"status\",\"dataType\":\"string\",\"name\":\"Status\",\"id\":\"76241620832406222\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false},{\"sysName\":\"@who\",\"dataType\":\"string\",\"name\":\"who changed\",\"id\":\"-1\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false},{\"sysName\":\"@dateCreated\",\"dataType\":\"date\",\"name\":\"date created\",\"id\":\"-2\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false},{\"sysName\":\"@dateChanged\",\"dataType\":\"date\",\"name\":\"date changed\",\"id\":\"-3\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"status\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": false,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2021-05-12T15:13:35Z",
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
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "array": false
            },
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
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"status\",\"dataType\":\"string\",\"name\":\"Status\",\"id\":\"23221620832490508\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false}]",
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
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "array": false
            },
            "folderId": 33625685
        }
    },
    "isSuccessWrite": false,
    "writeError": null,
    "writeResponse": null,
    "fileds": [
        {
            "sysName": "color",
            "dataType": "string",
            "name": "Card color",
            "id": "61881621017200362",
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
            "format": "color",
            "formatOptions": null,
            "groupName": null,
            "indexExists": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "description",
            "dataType": "string",
            "name": "Feature description",
            "id": "77031620832091108",
            "link": "",
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
            "format": "markdown",
            "formatOptions": null,
            "groupName": null,
            "indexExists": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "dev_status",
            "dataType": "link",
            "name": "Development status",
            "id": "85621620832330584",
            "link": "development_status",
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 8,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "indexExists": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
            "arrayLink": false,
            "linkType": true,
            "array": false
        },
        {
            "sysName": "feature_type",
            "dataType": "link",
            "name": "Feature type",
            "id": "55371621030232780",
            "link": "feature_type",
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 10,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "indexExists": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
            "arrayLink": false,
            "linkType": true,
            "array": false
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
            "indexExists": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "progress",
            "dataType": "json",
            "name": "Progress",
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
            "typeVariable": {},
            "json": true,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "status",
            "dataType": "link",
            "name": "Request status",
            "id": "40251620832303364",
            "link": "request_status",
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
            "indexExists": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
            "arrayLink": false,
            "linkType": true,
            "array": false
        },
        {
            "sysName": "tags",
            "dataType": "arrayLink",
            "name": "Tags",
            "id": "67851621409605492",
            "link": "tags",
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
            "indexExists": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
            "arrayLink": true,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "title",
            "dataType": "string",
            "name": "Feature title",
            "id": "79031620832091734",
            "link": null,
            "group": "0",
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
            "indexExists": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "array": false
        }
    ],
    "quickSearch": "true",
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
    locale: 'ENG',
    onChange: value => console.log(value),
    handleRoute: value => e => console.log("route => " + value),
  },
};
