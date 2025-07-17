import FpsForm2 from '../components/fps/dataentry/form/FpsForm2'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

export default {
  title: 'FPS/Components/Multistep Form',
  component: FpsForm2,
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

let exampleForm1 = {
    "sl": "cond",
    "pageSize": "10",
    "headerField": null,
    "params": {
        "steps": [
            {
                "id": "default_step",
                "sysName": "default step",
                "elements": [
                    {
                        "id": "elmnt_1740684320393",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17406843223430.4342042122041400104031",
                                "_field": "cond"
                            },
                            {
                                "id": "17406844415360.222210031440124432333232",
                                "_field": "cond3",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1740684448352",
                                        "_conditionalView_field": "cond",
                                        "_conditionalView_operator": "==",
                                        "_conditionalView_value": "2"
                                    }
                                ]
                            }
                        ],
                        "_input_fields_in_a_row": 2,
                        "_input_fields_in_a_row_column": "column"
                    },
                    {
                        "id": "elmnt_1740684326872",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17406843312900.34041241012203242404004",
                                "_field": "cond2"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1740684336849",
                                "_conditionalView_field": "cond",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "1"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_submitted",
                "sysName": "submitted",
                "elements": [
                    {
                        "id": "elmnt_1712052683797",
                        "type": "hint",
                        "hintColor": "ok",
                        "hintTitle": "Thank you!",
                        "hintText": "Submitted"
                    }
                ]
            }
        ],
        "general": {
            "showModel": true,
            "debugConditions": true
        }
    },
    "tableTitle": null,
    "actions": null,
    "headers": [],
    "data": [],
    "totalPages": 0,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [],
    "writeFields": [
        "cond3",
        "cond2",
        "cond"
    ],
    "structures": {},
    "isSuccessWrite": false,
    "writeError": null,
    "writeResponse": null,
    "fileds": [
        {
            "sysName": "cond3",
            "dataType": "string",
            "name": "",
            "id": "88021740683901608",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "cond2",
            "dataType": "string",
            "name": "",
            "id": "56801740683898675",
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
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "cond",
            "dataType": "string",
            "name": "",
            "id": "16991740683893620",
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
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        }
    ],
    "quickSearch": null,
    "httpParams": null,
    "cardCustomHtml": null,
    "cardCustomLayout": null,
    "comment": null,
    "response": false
}

let exampleForm =  {
    "sl": "newRoadmapAddfeature",
    "pageSize": "10",
    "headerField": null,
    "params": {
        "steps": [
            {
                "id": "default_step",
                "sysName": "default step",
                "elements": [
                    {
                        "id": "elmnt_1751618367433",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17516196245710.32113303414322100420401",
                                "_conditionalView": false,
                                "_field": "feature_type",
                                "_field_link_type": "tags",
                                "_field_arrayLink_endpoint": "ddTypes",
                                "_field_required": true
                            },
                            {
                                "id": "17516222967380.00344313244330401121323",
                                "_field": "title",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1751624300536"
                            },
                            {
                                "id": "17516223088130.40342221322012101134301",
                                "_field": "description",
                                "_field_required": true,
                                "_conditionalView": false,
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1751624300536"
                            }
                        ],
                        "_input_fields_in_a_row": 3,
                        "_conditionalView": false,
                        "_input_fields_in_a_row_column": "column"
                    },
                    {
                        "id": "elmnt_1752760802095",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17527608087470.11242020404242241302143",
                                "_action": "action_1752760747016",
                                "_action_label": "Beautify title and description with AI!",
                                "_action_icon": "ai",
                                "_action_button_type": "normal"
                            }
                        ],
                        "_conditionalView": false
                    },
                    {
                        "id": "elmnt_1752760870150",
                        "type": "text",
                        "paraText": "error: {{FormState.error}}"
                    },
                    {
                        "id": "elmnt_1751622603723",
                        "type": "text",
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1751622610958",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "god"
                            }
                        ],
                        "paraText": "<h3 style=\"margin-top:20px\">\n  Admin area\n</h3>",
                        "_action_conditionals_manual": "from_list",
                        "_action_conditionals_manual_list": "condition_1751622981882"
                    },
                    {
                        "id": "elmnt_1751622974995",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17516230079790.10014024220121411103313",
                                "_field": "dev_status",
                                "_field_link_type": "tags",
                                "_field_arrayLink_endpoint": "ddDevStats"
                            },
                            {
                                "id": "17516230095550.40400140233031402341023",
                                "_field": "status",
                                "_field_link_type": "tags",
                                "_field_arrayLink_endpoint": "ddReqStatus"
                            },
                            {
                                "id": "17516237696120.103311303012430443123442",
                                "_field": "tags",
                                "_field_arrayLink_type": "tags",
                                "_field_arrayLink_endpoint": "ddTags"
                            }
                        ],
                        "_input_fields_in_a_row": 3,
                        "_input_fields_in_a_row_column": "column",
                        "_conditionalView": true,
                        "_action_conditionals_manual": "from_list",
                        "_action_conditionals_manual_list": "condition_1751622981882"
                    },
                    {
                        "id": "elmnt_1751623066677",
                        "type": "submit",
                        "submitLabel": "Submit",
                        "submitIcon": "idea",
                        "_conditionalView": false,
                        "_conditions": [
                            {
                                "id": "condition_1751624424037"
                            }
                        ],
                        "_action_conditionals_manual": "manual"
                    }
                ]
            },
            {
                "id": "step_submitted",
                "sysName": "submitted",
                "elements": [
                    {
                        "id": "elmnt_1712052683797",
                        "type": "hint",
                        "hintColor": "ok",
                        "hintTitle": "Thank you!",
                        "hintText": "The {{feature_type}} is submitted"
                    },
                    {
                        "id": "elmnt_1751623718722",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17516237228120.34022231203121210032243",
                                "_action": "action_1751623690679"
                            }
                        ]
                    }
                ]
            }
        ],
        "form_maxWidth": 600,
        "_condition_library": [
            {
                "id": "condition_1751622981882",
                "_conditionalView": true,
                "title": "god",
                "_conditions": [
                    {
                        "id": "condition_1751622984759",
                        "_conditionalView_field": "WebUser.role",
                        "_conditionalView_operator": "contains",
                        "_conditionalView_value": "god"
                    },
                    {
                        "id": "condition_1751624398962",
                        "_conditionalView_field": "feature_type",
                        "_conditionalView_operator": "isNotNull"
                    }
                ]
            },
            {
                "id": "condition_1751624300536",
                "_conditionalView": true,
                "title": "type is empty",
                "_conditions": [
                    {
                        "id": "condition_1751624307345",
                        "_conditionalView_field": "feature_type",
                        "_conditionalView_operator": "isNull"
                    }
                ]
            }
        ],
        "state": {
            "step": "default step",
            "popup": "",
            "error": ""
        },
        "actions": [
            {
                "id": "action_1751623690679",
                "name": "redirect",
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1751623698570",
                        "field": "FormState.step",
                        "value": "default step"
                    }
                ],
                "autoAction": true,
                "autoAction_delay": 5
            },
            {
                "id": "action_1752760747016",
                "name": "ai request",
                "actionType": "endpoint",
                "endpoint": "generateAIdesc",
                "mapping": [
                    {
                        "id": "mapping_1752760759407",
                        "field": "title",
                        "value": "{{title}}"
                    },
                    {
                        "id": "mapping_1752760764665",
                        "field": "description",
                        "value": "{{description}}"
                    }
                ]
            }
        ]
    },
    "tableTitle": null,
    "actions": [],
    "headers": [],
    "data": [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {}
    ],
    "totalPages": 38,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [],
    "writeFields": [
        "screenshots",
        "tags",
        "feature_type",
        "dev_status",
        "status",
        "title",
        "description"
    ],
    "structures": {},
    "isSuccessWrite": false,
    "writeError": null,
    "writeResponse": null,
    "fileds": [
        {
            "sysName": "screenshots",
            "name": "Screenshots or Screencast",
            "dataType": "file",
            "id": "61091637158867177",
            "link": "",
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
            "format": "multipleFiles",
            "formatOptions": null,
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
            "sysName": "tags",
            "name": "Tags",
            "dataType": "arrayLink",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
            "arrayLink": true,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "feature_type",
            "name": "Feature type",
            "dataType": "link",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
            "arrayLink": false,
            "linkType": true,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "dev_status",
            "name": "Development status",
            "dataType": "link",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
            "arrayLink": false,
            "linkType": true,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "status",
            "name": "Request status",
            "dataType": "link",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
            "arrayLink": false,
            "linkType": true,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "title",
            "name": "Feature title",
            "dataType": "string",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "description",
            "name": "Feature description",
            "dataType": "string",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
            "array": false
        }
    ],
    "quickSearch": "",
    "httpParams": {},
    "cardCustomHtml": null,
    "cardCustomLayout": {},
    "comment": "",
    "response": false
}

let authExample = {
 }

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Regular = {
  args: {
    data: exampleForm,
    auth: authExample,
    locale: 'ESP',
    onChange: value => console.log(value),
  },
};
