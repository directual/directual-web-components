import 'mapbox-gl/dist/mapbox-gl.css'
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
    "sl": "interns_hiring",
    "pageSize": "10",
    "headerField": null,
    "params": {
        "steps": [
            {
                "id": "default_step",
                "sysName": "progress bar",
                "elements": [
                    {
                        "id": "elmnt_1743007029441",
                        "type": "text",
                        "paraText": "<style>.lmd-offer p {margin:10px 0}</style>\n<div classs=\"lmd\">\n<h2>Заявка {{number}}</h2>\n<p>Дата создания: {{date}}</p>\n<p>Статус заявки: {{status.status}}</p>\n<p>Кем создано: {{user_creator.employee_full_name}}</p>\n  <p>Ответственный за этап: {{responsible_employee_id.employee_full_name}}</p>\n<p>Дата последнего изменения:\n  {{last_change_date}}</p>\n</div>"
                    },
                    {
                        "id": "elmnt_1743007030039",
                        "type": "steps",
                        "_formSteps": {
                            "stepsOrder": [
                                "approval_manager",
                                "validation",
                                "approval_hrbp",
                                "approval_dep_manager",
                                "approval_int_manager",
                                "approval_cnb",
                                "cancel",
                                "rejected",
                                "approved"
                            ],
                            "settings": {
                                "steps": {
                                    "approval_manager": true,
                                    "validation": true,
                                    "approval_hrbp": true,
                                    "approval_dep_manager": true,
                                    "approval_int_manager": true,
                                    "approval_cnb": true,
                                    "approved": true,
                                    "cancel": true,
                                    "rejected": true
                                }
                            },
                            "stepSettings": {
                                "approval_manager": {
                                    "title": "Согласование с нанимающим менеджером"
                                },
                                "validation": {
                                    "title": "Валидация"
                                },
                                "approval_hrbp": {
                                    "title": "Согласование с HRBP"
                                },
                                "approval_dep_manager": {
                                    "title": "Согласование с руководителем департамента"
                                },
                                "approval_int_manager": {
                                    "title": "Отбор заявок"
                                },
                                "approval_cnb": {
                                    "title": "Согласование с C&B"
                                },
                                "cancel": {
                                    "title": "Отменена"
                                },
                                "rejected": {
                                    "title": "Отклонена"
                                },
                                "approved": {
                                    "title": "Одобрена"
                                }
                            }
                        }
                    }
                ],
                "sectionVisibility": "always"
            },
            {
                "id": "step_1743006999511",
                "sysName": "approval_manager",
                "elements": [
                    {
                        "id": "elmnt_1743007182524",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430071846350.022110122323311144342033",
                                "_conditionalView": true,
                                "_action_conditionals_manual": "from_list",
                                "_field": "reason_vacancy",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "ih_reason_of_vacancy",
                                "_field_required": true,
                                "_action_conditionals_manual_list": "condition_1743007123754",
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1743009741515"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743008538268",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430085411300.44330404011214440003133",
                                "_field": "resigning_int_full_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "dropdown_employees",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743007123754"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1743008642166",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "replacement"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009035286",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430090372090.2441233404122241322222",
                                "_field": "position_release_date",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1743009771063"
                                    }
                                ],
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743007123754"
                            }
                        ],
                        "_conditionalView": true,
                        "_action_conditionals_manual": "manual",
                        "_conditions": [
                            {
                                "id": "condition_1743009065287",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "replacement"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009082073",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430090989140.031411224013003020431034",
                                "_field": "direction",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "ih_direction",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743007123754"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009082823",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430091161520.22321003301243031232303",
                                "_field": "company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "interns_company",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743007123754"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009084871",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430091314690.32300411332213402111322",
                                "_field": "division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743007123754"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009146955",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{org_structure}}"
                    },
                    {
                        "id": "elmnt_1743009147721",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430091926840.44130234413341204314023",
                                "_field": "employment_status",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743007123754"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009148521",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092008280.2413311104332024443011",
                                "_field": "employment_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "employment_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743007123754"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009149205",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092231570.31224140412143303104131",
                                "_field": "work_place",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1743009862831"
                                    }
                                ],
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743007123754"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009213245",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092306630.23340310222042002011413",
                                "_field": "work_schedule",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743007123754"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009213971",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092383820.022321243423242310202031",
                                "_field": "salary",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743007123754"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009214722",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092582840.02104334233100103201341",
                                "_field": "responsibilities",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1743009889698"
                                    }
                                ],
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743007123754"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009246356",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092667280.2013014224422102110324",
                                "_field": "prof_skills",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743007123754"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009247139",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092747460.23033011302131320030112",
                                "_field": "education",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743007123754"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009248419",
                        "type": "text",
                        "paraText": "<b>Участники процесса согласования</b>"
                    },
                    {
                        "id": "elmnt_1743009284707",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430093113210.4214443030033114303214",
                                "_field": "manager",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "dropdown_employees",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009285672",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430093270980.24313000134312004310432",
                                "_field": "hrbp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "dropdown_employees",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743007123754"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_copy_1743009355022",
                "sysName": "validation",
                "elements": [
                    {
                        "id": "elmnt_1743007182524",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430071846350.022110122323311144342033",
                                "_conditionalView": true,
                                "_action_conditionals_manual": "from_list",
                                "_field": "reason_vacancy",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "ih_reason_of_vacancy",
                                "_field_required": true,
                                "_action_conditionals_manual_list": "condition_1743010117351",
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743008538268",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430085411300.44330404011214440003133",
                                "_field": "resigning_int_full_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "dropdown_employees",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743010117351"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1743008642166",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "replacement"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009035286",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430090372090.2441233404122241322222",
                                "_field": "position_release_date",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_action_conditionals_manual": "from_list",
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual_list": "condition_1743010117351"
                            }
                        ],
                        "_conditionalView": true,
                        "_action_conditionals_manual": "manual",
                        "_conditions": [
                            {
                                "id": "condition_1743009065287",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "replacement"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009082073",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430090989140.031411224013003020431034",
                                "_field": "direction",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "ih_direction",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743010117351"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009082823",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430091161520.22321003301243031232303",
                                "_field": "company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "interns_company",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743010117351"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009084871",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430091314690.32300411332213402111322",
                                "_field": "division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743010117351"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009146955",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{org_structure}}"
                    },
                    {
                        "id": "elmnt_1743009147721",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430091926840.44130234413341204314023",
                                "_field": "employment_status",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743010117351"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009148521",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092008280.2413311104332024443011",
                                "_field": "employment_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "employment_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743010117351"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009149205",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092231570.31224140412143303104131",
                                "_field": "work_place",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743010117351"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009213245",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092306630.23340310222042002011413",
                                "_field": "work_schedule",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743010117351"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009213971",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092383820.022321243423242310202031",
                                "_field": "salary",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743010117351"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009214722",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092582840.02104334233100103201341",
                                "_field": "responsibilities",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743010117351"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009246356",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092667280.2013014224422102110324",
                                "_field": "prof_skills",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743010117351"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009247139",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092747460.23033011302131320030112",
                                "_field": "education",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743010117351"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009248419",
                        "type": "text",
                        "paraText": "<b>Участники процесса согласования</b>"
                    },
                    {
                        "id": "elmnt_1743009284707",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430093113210.4214443030033114303214",
                                "_field": "manager",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "dropdown_employees",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009285672",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430093270980.24313000134312004310432",
                                "_field": "hrbp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "dropdown_employees",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743010117351"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_copy_1743009439190",
                "sysName": "approval_hrbp",
                "elements": [
                    {
                        "id": "elmnt_1743007182524",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430071846350.022110122323311144342033",
                                "_conditionalView": true,
                                "_action_conditionals_manual": "from_list",
                                "_field": "reason_vacancy",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "ih_reason_of_vacancy",
                                "_field_required": true,
                                "_action_conditionals_manual_list": "condition_1743007285784",
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743008538268",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430085411300.44330404011214440003133",
                                "_field": "resigning_int_full_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "dropdown_employees",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743007285784"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1743008642166",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "replacement"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009035286",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430090372090.2441233404122241322222",
                                "_field": "position_release_date",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743007285784"
                            }
                        ],
                        "_conditionalView": true,
                        "_action_conditionals_manual": "manual",
                        "_conditions": [
                            {
                                "id": "condition_1743009065287",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "replacement"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009082073",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430090989140.031411224013003020431034",
                                "_field": "direction",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "ih_direction",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743007285784"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009082823",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430091161520.22321003301243031232303",
                                "_field": "company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "interns_company",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743007285784"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009084871",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430091314690.32300411332213402111322",
                                "_field": "division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743007285784"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009146955",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{org_structure}}"
                    },
                    {
                        "id": "elmnt_1743009147721",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430091926840.44130234413341204314023",
                                "_field": "employment_status",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743007285784"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009148521",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092008280.2413311104332024443011",
                                "_field": "employment_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "employment_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743007285784"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009149205",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092231570.31224140412143303104131",
                                "_field": "work_place",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743007285784"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009213245",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092306630.23340310222042002011413",
                                "_field": "work_schedule",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743007285784"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009213971",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092383820.022321243423242310202031",
                                "_field": "salary",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743007285784"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009214722",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092582840.02104334233100103201341",
                                "_field": "responsibilities",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743007285784"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009246356",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092667280.2013014224422102110324",
                                "_field": "prof_skills",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743007285784"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009247139",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092747460.23033011302131320030112",
                                "_field": "education",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743007285784"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009248419",
                        "type": "text",
                        "paraText": "<b>Участники процесса согласования</b>"
                    },
                    {
                        "id": "elmnt_1743009284707",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430093113210.4214443030033114303214",
                                "_field": "manager",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "dropdown_employees",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009285672",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430093270980.24313000134312004310432",
                                "_field": "hrbp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "dropdown_employees",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1743013808922",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{responsible_employee_id.employee_email}}"
                                    },
                                    {
                                        "id": "condition_1743013840351",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743011036858",
                        "type": "action",
                        "_input_fields": [
                            {
                                "id": "17430110408020.043313201000310330321232"
                            }
                        ],
                        "_actions": [
                            {
                                "id": "17430110455670.023444421433431014432332",
                                "_action": "action_1743010786939",
                                "_action_label": "Переназначить",
                                "_action_icon": "refresh",
                                "_action_button_type": "accent",
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Заявка переназначена!",
                                "_action_customRequired": true,
                                "_action_customRequired_fields": [
                                    "hrbp"
                                ],
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1743013958277",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{responsible_employee_id.employee_email}}"
                                    },
                                    {
                                        "id": "condition_1743013968078",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743010417532",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430104365630.243310034333433440214",
                                "_field": "dep_manager",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "dropdown_employees",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743007285784"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743010451219",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430104528550.23023333220422130004114",
                                "_field": "cnb",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "dropdown_employees",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743007285784"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_copy_1743010490467",
                "sysName": "approval_dep_manager",
                "elements": [
                    {
                        "id": "elmnt_1743007182524",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430071846350.022110122323311144342033",
                                "_conditionalView": true,
                                "_action_conditionals_manual": "manual",
                                "_field": "reason_vacancy",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "ih_reason_of_vacancy",
                                "_field_required": true,
                                "_action_conditionals_manual_list": null,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743008538268",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430085411300.44330404011214440003133",
                                "_field": "resigning_int_full_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "dropdown_employees",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1743008642166",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "replacement"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009035286",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430090372090.2441233404122241322222",
                                "_field": "position_release_date",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ],
                        "_conditionalView": true,
                        "_action_conditionals_manual": "manual",
                        "_conditions": [
                            {
                                "id": "condition_1743009065287",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "replacement"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009082073",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430090989140.031411224013003020431034",
                                "_field": "direction",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "ih_direction",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009082823",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430091161520.22321003301243031232303",
                                "_field": "company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "interns_company",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009084871",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430091314690.32300411332213402111322",
                                "_field": "division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009146955",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{org_structure}}"
                    },
                    {
                        "id": "elmnt_1743009147721",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430091926840.44130234413341204314023",
                                "_field": "employment_status",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009148521",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092008280.2413311104332024443011",
                                "_field": "employment_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "employment_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009149205",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092231570.31224140412143303104131",
                                "_field": "work_place",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009213245",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092306630.23340310222042002011413",
                                "_field": "work_schedule",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009213971",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092383820.022321243423242310202031",
                                "_field": "salary",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009214722",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092582840.02104334233100103201341",
                                "_field": "responsibilities",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009246356",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092667280.2013014224422102110324",
                                "_field": "prof_skills",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009247139",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092747460.23033011302131320030112",
                                "_field": "education",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009248419",
                        "type": "text",
                        "paraText": "<b>Участники процесса согласования</b>"
                    },
                    {
                        "id": "elmnt_1743009284707",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430093113210.4214443030033114303214",
                                "_field": "manager",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "dropdown_employees",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009285672",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430093270980.24313000134312004310432",
                                "_field": "hrbp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "dropdown_employees",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743010417532",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430104365630.243310034333433440214",
                                "_field": "dep_manager",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "dropdown_employees",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743010451219",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430104528550.23023333220422130004114",
                                "_field": "cnb",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "dropdown_employees",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_copy_1743010529853",
                "sysName": "approval_int_manager",
                "elements": [
                    {
                        "id": "elmnt_1743007182524",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430071846350.022110122323311144342033",
                                "_conditionalView": true,
                                "_action_conditionals_manual": "from_list",
                                "_field": "reason_vacancy",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "ih_reason_of_vacancy",
                                "_field_required": true,
                                "_action_conditionals_manual_list": "condition_1743007291846",
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743008538268",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430085411300.44330404011214440003133",
                                "_field": "resigning_int_full_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "dropdown_employees",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1743008642166",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "replacement"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009035286",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430090372090.2441233404122241322222",
                                "_field": "position_release_date",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ],
                        "_conditionalView": true,
                        "_action_conditionals_manual": "manual",
                        "_conditions": [
                            {
                                "id": "condition_1743009065287",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "replacement"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743014668548",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430146709840.103000101201114144224301",
                                "_field": "budget_date",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009082073",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430090989140.031411224013003020431034",
                                "_field": "direction",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "ih_direction",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009082823",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430091161520.22321003301243031232303",
                                "_field": "company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "interns_company",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009084871",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430091314690.32300411332213402111322",
                                "_field": "division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009146955",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{org_structure}}"
                    },
                    {
                        "id": "elmnt_1743009147721",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430091926840.44130234413341204314023",
                                "_field": "employment_status",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009148521",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092008280.2413311104332024443011",
                                "_field": "employment_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "employment_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009149205",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092231570.31224140412143303104131",
                                "_field": "work_place",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009213245",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092306630.23340310222042002011413",
                                "_field": "work_schedule",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743014892964",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430148954350.221441234240104221204213",
                                "_field": "analytics_ops",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "analytics_for_ops",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009213971",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092383820.022321243423242310202031",
                                "_field": "salary",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009214722",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092582840.02104334233100103201341",
                                "_field": "responsibilities",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009246356",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092667280.2013014224422102110324",
                                "_field": "prof_skills",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009247139",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092747460.23033011302131320030112",
                                "_field": "education",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009248419",
                        "type": "text",
                        "paraText": "<b>Участники процесса согласования</b>"
                    },
                    {
                        "id": "elmnt_1743009284707",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430093113210.4214443030033114303214",
                                "_field": "manager",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "dropdown_employees",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009285672",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430093270980.24313000134312004310432",
                                "_field": "hrbp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "dropdown_employees",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743010417532",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430104365630.243310034333433440214",
                                "_field": "dep_manager",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "dropdown_employees",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743010451219",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430104528550.23023333220422130004114",
                                "_field": "cnb",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "dropdown_employees",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_copy_1743015022683",
                "sysName": "approval_cnb",
                "elements": [
                    {
                        "id": "elmnt_1743007182524",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430071846350.022110122323311144342033",
                                "_conditionalView": true,
                                "_action_conditionals_manual": "manual",
                                "_field": "reason_vacancy",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "ih_reason_of_vacancy",
                                "_field_required": true,
                                "_action_conditionals_manual_list": "condition_1743007291846",
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743008538268",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430085411300.44330404011214440003133",
                                "_field": "resigning_int_full_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "dropdown_employees",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1743008642166",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "replacement"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009035286",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430090372090.2441233404122241322222",
                                "_field": "position_release_date",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ],
                        "_conditionalView": true,
                        "_action_conditionals_manual": "manual",
                        "_conditions": [
                            {
                                "id": "condition_1743009065287",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "replacement"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743014668548",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430146709840.103000101201114144224301",
                                "_field": "budget_date",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009082073",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430090989140.031411224013003020431034",
                                "_field": "direction",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "ih_direction",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009082823",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430091161520.22321003301243031232303",
                                "_field": "company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "interns_company",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009084871",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430091314690.32300411332213402111322",
                                "_field": "division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009146955",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{org_structure}}"
                    },
                    {
                        "id": "elmnt_1743009147721",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430091926840.44130234413341204314023",
                                "_field": "employment_status",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009148521",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092008280.2413311104332024443011",
                                "_field": "employment_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "employment_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009149205",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092231570.31224140412143303104131",
                                "_field": "work_place",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009213245",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092306630.23340310222042002011413",
                                "_field": "work_schedule",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743014892964",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430148954350.221441234240104221204213",
                                "_field": "analytics_ops",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "analytics_for_ops",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009213971",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092383820.022321243423242310202031",
                                "_field": "salary",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009214722",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092582840.02104334233100103201341",
                                "_field": "responsibilities",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009246356",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092667280.2013014224422102110324",
                                "_field": "prof_skills",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009247139",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092747460.23033011302131320030112",
                                "_field": "education",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009248419",
                        "type": "text",
                        "paraText": "<b>Участники процесса согласования</b>"
                    },
                    {
                        "id": "elmnt_1743009284707",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430093113210.4214443030033114303214",
                                "_field": "manager",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "dropdown_employees",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009285672",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430093270980.24313000134312004310432",
                                "_field": "hrbp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "dropdown_employees",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743010417532",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430104365630.243310034333433440214",
                                "_field": "dep_manager",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "dropdown_employees",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743010451219",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430104528550.23023333220422130004114",
                                "_field": "cnb",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "dropdown_employees",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846",
                                "_conditions": [
                                    {
                                        "id": "condition_1743015464475",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{responsible_employee_id.employee_email}}"
                                    },
                                    {
                                        "id": "condition_1743015468357",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "cnb"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743015526499",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17430155298100.31214134124320242314244",
                                "_action": "action_1743010786939",
                                "_action_label": "Переназначить",
                                "_action_icon": "refresh",
                                "_action_button_type": "accent",
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Заявка переназначена!",
                                "_action_customRequired": true,
                                "_action_customRequired_fields": [
                                    "cnb"
                                ],
                                "_conditionalView": true,
                                "_action_conditional_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1743015580609",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{responsible_employee_id.employee_email}}"
                                    },
                                    {
                                        "id": "condition_1743015582074",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "cnb"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_copy_1743015647405",
                "sysName": "approved",
                "elements": [
                    {
                        "id": "elmnt_1743007182524",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430071846350.022110122323311144342033",
                                "_conditionalView": true,
                                "_action_conditionals_manual": "manual",
                                "_field": "reason_vacancy",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "ih_reason_of_vacancy",
                                "_field_required": true,
                                "_action_conditionals_manual_list": "condition_1743007291846",
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743008538268",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430085411300.44330404011214440003133",
                                "_field": "resigning_int_full_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "dropdown_employees",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1743008642166",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "replacement"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009035286",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430090372090.2441233404122241322222",
                                "_field": "position_release_date",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ],
                        "_conditionalView": true,
                        "_action_conditionals_manual": "manual",
                        "_conditions": [
                            {
                                "id": "condition_1743009065287",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "replacement"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743014668548",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430146709840.103000101201114144224301",
                                "_field": "budget_date",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009082073",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430090989140.031411224013003020431034",
                                "_field": "direction",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "ih_direction",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009082823",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430091161520.22321003301243031232303",
                                "_field": "company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "interns_company",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009084871",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430091314690.32300411332213402111322",
                                "_field": "division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009146955",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{org_structure}}"
                    },
                    {
                        "id": "elmnt_1743009147721",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430091926840.44130234413341204314023",
                                "_field": "employment_status",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009148521",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092008280.2413311104332024443011",
                                "_field": "employment_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "employment_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009149205",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092231570.31224140412143303104131",
                                "_field": "work_place",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009213245",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092306630.23340310222042002011413",
                                "_field": "work_schedule",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743014892964",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430148954350.221441234240104221204213",
                                "_field": "analytics_ops",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "analytics_for_ops",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009213971",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092383820.022321243423242310202031",
                                "_field": "salary",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009214722",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092582840.02104334233100103201341",
                                "_field": "responsibilities",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009246356",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092667280.2013014224422102110324",
                                "_field": "prof_skills",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009247139",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092747460.23033011302131320030112",
                                "_field": "education",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009248419",
                        "type": "text",
                        "paraText": "<b>Участники процесса согласования</b>"
                    },
                    {
                        "id": "elmnt_1743009284707",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430093113210.4214443030033114303214",
                                "_field": "manager",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "dropdown_employees",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009285672",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430093270980.24313000134312004310432",
                                "_field": "hrbp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "dropdown_employees",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743010417532",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430104365630.243310034333433440214",
                                "_field": "dep_manager",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "dropdown_employees",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743010451219",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430104528550.23023333220422130004114",
                                "_field": "cnb",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "dropdown_employees",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743015674478",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430158103600.22231013223230321114014",
                                "_field": "intern_name",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743007302680"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743015887969",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17430158907340.30120030244144431100341",
                                "_action": "action_1743010987206",
                                "_action_button_type": "accent",
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Данные обновлены",
                                "_conditionalView": true,
                                "_action_conditional_disable_or_hide": "hide",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743007302680"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_copy_1743015960581",
                "sysName": "cancel",
                "elements": [
                    {
                        "id": "elmnt_1743007182524",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430071846350.022110122323311144342033",
                                "_conditionalView": true,
                                "_action_conditionals_manual": "manual",
                                "_field": "reason_vacancy",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "ih_reason_of_vacancy",
                                "_field_required": true,
                                "_action_conditionals_manual_list": "condition_1743007291846",
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743008538268",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430085411300.44330404011214440003133",
                                "_field": "resigning_int_full_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "dropdown_employees",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1743008642166",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "replacement"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009035286",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430090372090.2441233404122241322222",
                                "_field": "position_release_date",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ],
                        "_conditionalView": true,
                        "_action_conditionals_manual": "manual",
                        "_conditions": [
                            {
                                "id": "condition_1743009065287",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "replacement"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743014668548",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430146709840.103000101201114144224301",
                                "_field": "budget_date",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009082073",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430090989140.031411224013003020431034",
                                "_field": "direction",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "ih_direction",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009082823",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430091161520.22321003301243031232303",
                                "_field": "company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "interns_company",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009084871",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430091314690.32300411332213402111322",
                                "_field": "division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009146955",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{org_structure}}"
                    },
                    {
                        "id": "elmnt_1743009147721",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430091926840.44130234413341204314023",
                                "_field": "employment_status",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009148521",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092008280.2413311104332024443011",
                                "_field": "employment_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "employment_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009149205",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092231570.31224140412143303104131",
                                "_field": "work_place",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009213245",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092306630.23340310222042002011413",
                                "_field": "work_schedule",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743014892964",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430148954350.221441234240104221204213",
                                "_field": "analytics_ops",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "analytics_for_ops",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009213971",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092383820.022321243423242310202031",
                                "_field": "salary",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009214722",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092582840.02104334233100103201341",
                                "_field": "responsibilities",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009246356",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092667280.2013014224422102110324",
                                "_field": "prof_skills",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009247139",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092747460.23033011302131320030112",
                                "_field": "education",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009248419",
                        "type": "text",
                        "paraText": "<b>Участники процесса согласования</b>"
                    },
                    {
                        "id": "elmnt_1743009284707",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430093113210.4214443030033114303214",
                                "_field": "manager",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "dropdown_employees",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009285672",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430093270980.24313000134312004310432",
                                "_field": "hrbp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "dropdown_employees",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743010417532",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430104365630.243310034333433440214",
                                "_field": "dep_manager",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "dropdown_employees",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743010451219",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430104528550.23023333220422130004114",
                                "_field": "cnb",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "dropdown_employees",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_copy_1743016001579",
                "sysName": "rejected",
                "elements": [
                    {
                        "id": "elmnt_1743007182524",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430071846350.022110122323311144342033",
                                "_conditionalView": true,
                                "_action_conditionals_manual": "manual",
                                "_field": "reason_vacancy",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "ih_reason_of_vacancy",
                                "_field_required": true,
                                "_action_conditionals_manual_list": "condition_1743007291846",
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743008538268",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430085411300.44330404011214440003133",
                                "_field": "resigning_int_full_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "dropdown_employees",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1743008642166",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "replacement"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009035286",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430090372090.2441233404122241322222",
                                "_field": "position_release_date",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ],
                        "_conditionalView": true,
                        "_action_conditionals_manual": "manual",
                        "_conditions": [
                            {
                                "id": "condition_1743009065287",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "replacement"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743014668548",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430146709840.103000101201114144224301",
                                "_field": "budget_date",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009082073",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430090989140.031411224013003020431034",
                                "_field": "direction",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "ih_direction",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009082823",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430091161520.22321003301243031232303",
                                "_field": "company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "interns_company",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009084871",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430091314690.32300411332213402111322",
                                "_field": "division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009146955",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{org_structure}}"
                    },
                    {
                        "id": "elmnt_1743009147721",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430091926840.44130234413341204314023",
                                "_field": "employment_status",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009148521",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092008280.2413311104332024443011",
                                "_field": "employment_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "employment_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009149205",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092231570.31224140412143303104131",
                                "_field": "work_place",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009213245",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092306630.23340310222042002011413",
                                "_field": "work_schedule",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743014892964",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430148954350.221441234240104221204213",
                                "_field": "analytics_ops",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "analytics_for_ops",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009213971",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092383820.022321243423242310202031",
                                "_field": "salary",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009214722",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092582840.02104334233100103201341",
                                "_field": "responsibilities",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009246356",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092667280.2013014224422102110324",
                                "_field": "prof_skills",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009247139",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430092747460.23033011302131320030112",
                                "_field": "education",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009248419",
                        "type": "text",
                        "paraText": "<b>Участники процесса согласования</b>"
                    },
                    {
                        "id": "elmnt_1743009284707",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430093113210.4214443030033114303214",
                                "_field": "manager",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "dropdown_employees",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743009285672",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430093270980.24313000134312004310432",
                                "_field": "hrbp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "dropdown_employees",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743010417532",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430104365630.243310034333433440214",
                                "_field": "dep_manager",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "dropdown_employees",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743010451219",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430104528550.23023333220422130004114",
                                "_field": "cnb",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "dropdown_employees",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_manual": "manual",
                                "_action_conditionals_manual_list": "condition_1743007291846",
                                "_conditions": [],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_1743007003559",
                "sysName": "popup_cancel",
                "elements": [
                    {
                        "id": "elmnt_1743016081085",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17430160842200.114142133311034100120102",
                                "_field": "cancel_reason"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743016082093",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17430161008810.0004342340242034104013323",
                                "_action": "action_1743016038585",
                                "_action_label": "Ок",
                                "_action_button_type": "accent",
                                "_action_customRequired": true,
                                "_action_customRequired_fields": [
                                    "cancel_reason"
                                ]
                            },
                            {
                                "id": "17430161020890.3202443130340142314411",
                                "_action": "action_1743016039692",
                                "_action_label": "Назад",
                                "_action_icon": "back"
                            }
                        ],
                        "_actions_in_a_row": 2
                    }
                ]
            },
            {
                "id": "step_1743007005824",
                "sysName": "actions",
                "elements": [
                    {
                        "id": "elmnt_1743016168836",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17430161792510.44323340221140004031302",
                                "_action": "action_1743010754643",
                                "_action_label": "Согласовать",
                                "_action_icon": "done",
                                "_action_button_type": "accent",
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Заявка согласована!",
                                "_action_standardRequired": true,
                                "_conditionalView": true,
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743007123754"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1743016230049",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "approval_manager"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743016169928",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17430162502940.0420221011300022134311",
                                "_action": "action_1743010769378",
                                "_action_label": "Согласовать",
                                "_action_icon": "done",
                                "_action_button_type": "accent",
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Заявка согласована!",
                                "_action_standardRequired": true,
                                "_conditionalView": true,
                                "_action_conditional_disable_or_hide": "hide",
                                "_conditions": [
                                    {
                                        "id": "condition_1743016286799"
                                    }
                                ],
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743010117351"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1743016304929",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "validation"
                            }
                        ],
                        "_action_conditionals_manual": "manual"
                    },
                    {
                        "id": "elmnt_1743016170745",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17430163292480.30412043241203141420332",
                                "_action": "action_1743010779090",
                                "_action_label": "Согласовать",
                                "_action_icon": "done",
                                "_action_button_type": "accent",
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Заявка согласована",
                                "_action_standardRequired": true,
                                "_conditionalView": true,
                                "_action_conditional_disable_or_hide": "hide",
                                "_conditions": [
                                    {
                                        "id": "condition_1743016357898"
                                    }
                                ],
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743007285784"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1743016365361",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "approval_hrbp"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743016172027",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17430163882670.23333124231443234334024",
                                "_action": "action_1743010800975",
                                "_action_label": "Согласовать",
                                "_action_icon": "done",
                                "_action_button_type": "accent",
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Заявка согласована",
                                "_action_standardRequired": true,
                                "_conditionalView": true,
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743007429173"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1743016439030",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "approval_dep_manager"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743016172862",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17430164601630.23343121441332443132444",
                                "_action": "action_1743010926547",
                                "_action_label": "Одобрить",
                                "_action_icon": "done",
                                "_action_button_type": "accent",
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Заявка одобрена!",
                                "_action_standardRequired": true,
                                "_conditionalView": true,
                                "_action_conditional_disable_or_hide": "hide",
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            },
                            {
                                "id": "17430165243230.04231132002323220440233",
                                "_action": "action_1743011017072",
                                "_action_label": "Отклонить",
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Заявка отклонена!",
                                "_action_button_type": "danger",
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1743016576084"
                                    }
                                ],
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743007291846"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1743016499131",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "approval_int_manager"
                            }
                        ],
                        "_actions_in_a_row": 2
                    },
                    {
                        "id": "elmnt_1743016593788",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17430166016460.24002030314403112231031",
                                "_action": "action_1743010973206",
                                "_action_label": "Согласовать",
                                "_action_icon": "done",
                                "_action_button_type": "accent",
                                "_action_oneTime": true,
                                "_action_standardRequired": true,
                                "_action_oneTime_message": "Заявка согласована!",
                                "_conditionalView": true,
                                "_action_conditionals_manual": "from_list",
                                "_action_conditionals_manual_list": "condition_1743007497823"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1743016647567",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "approval_cnb"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743016664601",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17430166696360.4333113324010234143124",
                                "_action": "action_1743011008375",
                                "_action_label": "Отменить",
                                "_action_button_type": "danger",
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Заявка отменена!",
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1743016708200",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{manager.employee_email}},{{hrbp.employee_email}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1743017070837",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "agreement,teamlead,hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1743017199574",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "approved,cancel,rejected"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1743017184427",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17430171864570.34240402220114023234414",
                                "_action": "action_1743011008375",
                                "_action_label": "Отменить",
                                "_action_button_type": "danger",
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Заявка отменена!",
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1743017256023",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "hip"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1743017276539",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "approved,cancel,rejected"
                            }
                        ]
                    }
                ],
                "sectionVisibility": "always"
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
        "state": {
            "step": "{{status}}",
            "popup": ""
        },
        "general": {
            "edittingOn": true,
            "autosubmit": "model",
            "autosubmit_model": [
                "reason_vacancy",
                "resigning_int_full_name",
                "division"
            ],
            "debugConditions": true
        },
        "_condition_library": [
            {
                "id": "condition_1743007123754",
                "_conditionalView": true,
                "title": "manager",
                "_conditions": [
                    {
                        "id": "condition_1743007152475",
                        "_conditionalView_field": "WebUser.id",
                        "_conditionalView_operator": "notIn",
                        "_conditionalView_value": "{{manager.employee_email}}"
                    },
                    {
                        "id": "condition_1743007269155",
                        "_conditionalView_field": "WebUser.role",
                        "_conditionalView_operator": "notContains",
                        "_conditionalView_value": "agreement,teamlead"
                    }
                ],
                "_action_conditionals_and_or": "OR"
            },
            {
                "id": "condition_1743007285784",
                "_conditionalView": true,
                "title": "hrbp",
                "_conditions": [
                    {
                        "id": "condition_1743007306978",
                        "_conditionalView_field": "WebUser.id",
                        "_conditionalView_operator": "notIn",
                        "_conditionalView_value": "{{hrbp.employee_email}}"
                    },
                    {
                        "id": "condition_1743007328598",
                        "_conditionalView_field": "WebUser.role",
                        "_conditionalView_operator": "notContains",
                        "_conditionalView_value": "hrbp"
                    }
                ],
                "_action_conditionals_and_or": "OR"
            },
            {
                "id": "condition_1743007291846",
                "_conditionalView": true,
                "title": "hip",
                "_conditions": [
                    {
                        "id": "condition_1743007394811",
                        "_conditionalView_field": "WebUser.role",
                        "_conditionalView_operator": "notContains",
                        "_conditionalView_value": "hip"
                    }
                ]
            },
            {
                "id": "condition_1743007302680",
                "_conditionalView": true,
                "title": "ipt",
                "_conditions": [
                    {
                        "id": "condition_1743007405825",
                        "_conditionalView_field": "WebUser.role",
                        "_conditionalView_operator": "notContains",
                        "_conditionalView_value": "ipt"
                    }
                ]
            },
            {
                "id": "condition_1743007429173",
                "_conditionalView": true,
                "title": "dep_manager",
                "_conditions": [
                    {
                        "id": "condition_1743007444641",
                        "_conditionalView_field": "WebUser.id",
                        "_conditionalView_operator": "notIn",
                        "_conditionalView_value": "{{dep_manager.employee_email}}"
                    },
                    {
                        "id": "condition_1743007475505",
                        "_conditionalView_field": "WebUser.role",
                        "_conditionalView_operator": "notContains",
                        "_conditionalView_value": "agreement"
                    }
                ],
                "_action_conditionals_and_or": "OR"
            },
            {
                "id": "condition_1743007497823",
                "_conditionalView": true,
                "title": "cnb",
                "_conditions": [
                    {
                        "id": "condition_1743007500587",
                        "_conditionalView_field": "WebUser.id",
                        "_conditionalView_operator": "notIn",
                        "_conditionalView_value": "{{cnb.employee_email}}"
                    },
                    {
                        "id": "condition_1743008134728",
                        "_conditionalView_field": "WebUser.role",
                        "_conditionalView_operator": "notContains",
                        "_conditionalView_value": "cnb"
                    }
                ],
                "_action_conditionals_and_or": "OR"
            },
            {
                "id": "condition_1743010117351",
                "_conditionalView": true,
                "title": "hip + ipt",
                "_conditions": [
                    {
                        "id": "condition_1743010132038",
                        "_conditionalView_field": "WebUser.role",
                        "_conditionalView_operator": "notContains",
                        "_conditionalView_value": "hip,ipt"
                    }
                ]
            }
        ],
        "actions": [
            {
                "id": "action_1743010754643",
                "name": "Согласовать manager",
                "actionType": "endpoint",
                "endpoint": "ih_actions",
                "mapping": [
                    {
                        "id": "mapping_1743023160256",
                        "field": "action",
                        "value": "change_status"
                    },
                    {
                        "id": "mapping_1743023165173",
                        "field": "pay_load",
                        "value": "validation"
                    }
                ],
                "actionSubmit": true
            },
            {
                "id": "action_1743010769378",
                "name": "Согласовать валидация",
                "actionType": "endpoint",
                "endpoint": "ih_actions",
                "mapping": [
                    {
                        "id": "mapping_1743023220075",
                        "field": "action",
                        "value": "change_status"
                    },
                    {
                        "id": "mapping_1743023221506",
                        "field": "pay_load",
                        "value": "approval_hrbp"
                    }
                ],
                "actionSubmit": true
            },
            {
                "id": "action_1743010779090",
                "name": "Согласовать hrbp",
                "actionType": "endpoint",
                "endpoint": "ih_actions",
                "mapping": [
                    {
                        "id": "mapping_1743023270158",
                        "field": "action",
                        "value": "change_status"
                    },
                    {
                        "id": "mapping_1743023271137",
                        "field": "pay_load",
                        "value": "approval_dep_manager"
                    }
                ],
                "discardModel": false,
                "actionSubmit": true
            },
            {
                "id": "action_1743010786939",
                "name": "Переназначить",
                "actionSubmit": true,
                "actionType": "endpoint",
                "endpoint": "ih_actions",
                "mapping": [
                    {
                        "id": "mapping_1743023336373",
                        "field": "action",
                        "value": "new_responsible"
                    }
                ]
            },
            {
                "id": "action_1743010800975",
                "name": "Согласовать dep_manager",
                "actionType": "endpoint",
                "endpoint": "ih_actions",
                "mapping": [
                    {
                        "id": "mapping_1743023317089",
                        "field": "action",
                        "value": "change_status"
                    },
                    {
                        "id": "mapping_1743023320862",
                        "field": "pay_load",
                        "value": "approval_int_manager"
                    }
                ]
            },
            {
                "id": "action_1743010926547",
                "name": "Одобрить отбор",
                "actionType": "endpoint",
                "endpoint": "ih_actions",
                "mapping": [
                    {
                        "id": "mapping_1743024724940",
                        "field": "action",
                        "value": "change_status"
                    },
                    {
                        "id": "mapping_1743024726261",
                        "field": "pay_load",
                        "value": "approval_cnb"
                    }
                ],
                "actionSubmit": true
            },
            {
                "id": "action_1743010973206",
                "name": "Согласовать cnb",
                "actionType": "endpoint",
                "endpoint": "ih_actions",
                "mapping": [
                    {
                        "id": "mapping_1743024757441",
                        "field": "action",
                        "value": "change_status"
                    },
                    {
                        "id": "mapping_1743024758474",
                        "field": "pay_load",
                        "value": "approved"
                    }
                ],
                "actionSubmit": true
            },
            {
                "id": "action_1743010987206",
                "name": "Сохранить",
                "actionType": "endpoint",
                "endpoint": "ih_actions",
                "mapping": [
                    {
                        "id": "mapping_1743024784608",
                        "field": "action",
                        "value": "save"
                    }
                ],
                "actionSubmit": true
            },
            {
                "id": "action_1743011008375",
                "name": "Отменить",
                "actionType": "state",
                "endpoint": "ih_actions",
                "mapping": [
                    {
                        "id": "mapping_1743024801076",
                        "field": "action",
                        "value": "cancel"
                    }
                ],
                "actionSubmit": false,
                "stateMapping": [
                    {
                        "id": "stateMapping1743024919159",
                        "field": "FormState.popup",
                        "value": "popup_cancel"
                    }
                ]
            },
            {
                "id": "action_1743011017072",
                "name": "Отклонить",
                "actionType": "endpoint",
                "endpoint": "ih_actions",
                "stateMapping": [
                    {
                        "id": "stateMapping1743024838509",
                        "field": "FormState.popup",
                        "value": "popup_cancel"
                    }
                ],
                "mapping": [
                    {
                        "id": "mapping_1743025174421",
                        "field": "action",
                        "value": "rejected"
                    }
                ],
                "actionSubmit": true
            },
            {
                "id": "action_1743016038585",
                "name": "Ок (cancel)",
                "actionSubmit": true,
                "actionType": "endpoint",
                "endpoint": "ih_actions",
                "mapping": [
                    {
                        "id": "mapping_1743025198776",
                        "field": "action",
                        "value": "cancel"
                    }
                ]
            },
            {
                "id": "action_1743016039692",
                "name": "Закрыть popup",
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1743025218112",
                        "field": "FormState.popup"
                    }
                ]
            }
        ]
    },
    "tableTitle": null,
    "actions": null,
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "indexExists": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "hrbp",
            "name": "HR BP",
            "dataType": "link",
            "id": "29271742847593944",
            "link": "employees",
            "group": "1742846057420",
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
            "linkOrArrayLinkType": true,
            "arrayLink": false,
            "indexExists": false,
            "linkType": true,
            "array": false
        },
        {
            "sysName": "dep_manager",
            "name": "Руководитель департамента (N-1)",
            "dataType": "link",
            "id": "91901742847592995",
            "link": "employees",
            "group": "1742846057420",
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
            "arrayLink": false,
            "indexExists": false,
            "linkType": true,
            "array": false
        },
        {
            "sysName": "manager",
            "name": "Нанимающий менеджер",
            "dataType": "link",
            "id": "18141742847592094",
            "link": "employees",
            "group": "1742846057420",
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
            "linkOrArrayLinkType": true,
            "arrayLink": false,
            "indexExists": false,
            "linkType": true,
            "array": false
        },
        {
            "sysName": "education",
            "name": "Образование",
            "dataType": "string",
            "id": "27871742847500836",
            "link": "",
            "group": "1742846050126",
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
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "indexExists": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "prof_skills",
            "name": "Требования",
            "dataType": "string",
            "id": "88761742847500112",
            "link": "",
            "group": "1742846050126",
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
            "formatOptions": {},
            "groupName": null,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "indexExists": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "responsibilities",
            "name": "Обязанности",
            "dataType": "string",
            "id": "96831742847499074",
            "link": "",
            "group": "1742846050126",
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
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "indexExists": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "salary",
            "name": "Оклад на полную ставку, руб. (в гросс)",
            "dataType": "decimal",
            "id": "85441742847408744",
            "link": "",
            "group": "1742846050126",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "indexExists": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "work_schedule",
            "name": "График и время работы",
            "dataType": "string",
            "id": "86831742847408040",
            "link": "",
            "group": "1742846050126",
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
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "indexExists": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "work_place",
            "name": "Место работы",
            "dataType": "string",
            "id": "90291742847166877",
            "link": "",
            "group": "1742846050126",
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
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "indexExists": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "employment_type",
            "name": "Формат работы",
            "dataType": "link",
            "id": "12161742847164744",
            "link": "employment_type",
            "group": "1742846050126",
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
            "json": false,
            "linkOrArrayLinkType": true,
            "arrayLink": false,
            "indexExists": false,
            "linkType": true,
            "array": false
        },
        {
            "sysName": "employment_status",
            "name": "Желаемая степень занятости",
            "dataType": "json",
            "id": "92881742847163519",
            "link": "",
            "group": "1742846050126",
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
                        "value": "full",
                        "label": "Полная (40 часов)"
                    },
                    {
                        "value": "part",
                        "label": "Частичная (30 часов)"
                    }
                ]
            },
            "groupName": null,
            "typeVariable": {},
            "json": true,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "indexExists": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "org_structure",
            "name": "Организационная структура",
            "dataType": "string",
            "id": "19621742847092706",
            "link": "",
            "group": "1742846050126",
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
            "arrayLink": false,
            "indexExists": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "division",
            "name": "Подразделение",
            "dataType": "link",
            "id": "24141742847092141",
            "link": "structure",
            "group": "1742846050126",
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
            "linkOrArrayLinkType": true,
            "arrayLink": false,
            "indexExists": false,
            "linkType": true,
            "array": false
        },
        {
            "sysName": "company",
            "name": "Юр. лицо",
            "dataType": "link",
            "id": "13411742846951190",
            "link": "company",
            "group": "1742846050126",
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
            "arrayLink": false,
            "indexExists": false,
            "linkType": true,
            "array": false
        },
        {
            "sysName": "direction",
            "name": "Направление",
            "dataType": "link",
            "id": "76841742846950538",
            "link": "ih_direction",
            "group": "1742846050126",
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
            "linkOrArrayLinkType": true,
            "arrayLink": false,
            "indexExists": false,
            "linkType": true,
            "array": false
        },
        {
            "sysName": "position_release_date",
            "name": "Дата освобождения позиции",
            "dataType": "date",
            "id": "94781742846858921",
            "link": "",
            "group": "1742846050126",
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
                "dateFormat": "DD.MM.YYYY",
                "timeFormat": "",
                "isUTC": "true"
            },
            "groupName": null,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "indexExists": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "resigning_int_full_name",
            "name": "ФИО заменяемого стажера",
            "dataType": "link",
            "id": "85361742846858204",
            "link": "employees",
            "group": "1742846050126",
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
            "linkOrArrayLinkType": true,
            "arrayLink": false,
            "indexExists": false,
            "linkType": true,
            "array": false
        },
        {
            "sysName": "reason_vacancy",
            "name": "Причина появления вакансии",
            "dataType": "link",
            "id": "40401742846857454",
            "link": "ih_reason_of_vacancy",
            "group": "1742846050126",
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
            "linkOrArrayLinkType": true,
            "arrayLink": false,
            "indexExists": false,
            "linkType": true,
            "array": false
        },
        {
            "sysName": "cancel_reason",
            "name": "Укажите причину",
            "dataType": "string",
            "id": "33411742846820487",
            "link": "",
            "group": "1742846805849",
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
            "indexExists": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "is_test",
            "name": "Тестовая заявка",
            "dataType": "json",
            "id": "93091742843109687",
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
                        "value": "test",
                        "label": "без уведомлений"
                    },
                    {
                        "value": "notice",
                        "label": "с уведомлениями"
                    }
                ]
            },
            "groupName": null,
            "typeVariable": {},
            "json": true,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "indexExists": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "all_delegants",
            "name": "Все делеганты",
            "dataType": "arrayLink",
            "id": "11401742843089557",
            "link": "employees",
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
            "json": false,
            "linkOrArrayLinkType": true,
            "arrayLink": true,
            "indexExists": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "all_managers",
            "name": "Все руководители",
            "dataType": "arrayLink",
            "id": "55931742843070628",
            "link": "employees",
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
            "json": false,
            "linkOrArrayLinkType": true,
            "arrayLink": true,
            "indexExists": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "watchers_logs",
            "name": "Логи наблюдатели",
            "dataType": "arrayLink",
            "id": "56791742843040713",
            "link": "ih_watchers_logs",
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
            "formatOptions": {},
            "groupName": null,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
            "arrayLink": true,
            "indexExists": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "watchers",
            "name": "Наблюдатели",
            "dataType": "arrayLink",
            "id": "76011742843039552",
            "link": "employees",
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
            "arrayLink": true,
            "indexExists": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "last_change_date",
            "name": "Дата последнего изменения",
            "dataType": "date",
            "id": "71761742843038747",
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
                "dateFormat": "DD.MM.YYYY",
                "timeFormat": " HH:mm",
                "isUTC": "false"
            },
            "groupName": null,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "indexExists": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "all_user_ids",
            "name": "Все пользователи, относящиеся к заявке",
            "dataType": "arrayLink",
            "id": "22541742843027154",
            "link": "employees",
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
            "indexExists": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "responsible_roles",
            "name": "Ответственные роли",
            "dataType": "arrayLink",
            "id": "51401742843011636",
            "link": "roles",
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
            "arrayLink": true,
            "indexExists": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "responsible_employee_id",
            "name": "Ответственный за текущий этап",
            "dataType": "link",
            "id": "47011742843010814",
            "link": "employees",
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
            "json": false,
            "linkOrArrayLinkType": true,
            "arrayLink": false,
            "indexExists": false,
            "linkType": true,
            "array": false
        },
        {
            "sysName": "date",
            "name": "Дата создания заявки",
            "dataType": "date",
            "id": "69671742842982676",
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
                "dateFormat": "DD.MM.YYYY",
                "timeFormat": " HH:mm",
                "isUTC": "false"
            },
            "groupName": null,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "indexExists": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "number",
            "name": "Номер заявки",
            "dataType": "string",
            "id": "89881742842981021",
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
            "arrayLink": false,
            "indexExists": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "logs",
            "name": "История изменений",
            "dataType": "arrayLink",
            "id": "18241742842971575",
            "link": "ih_logs",
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
            "linkOrArrayLinkType": true,
            "arrayLink": true,
            "indexExists": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "user_creator",
            "name": "Инициатор заявки",
            "dataType": "link",
            "id": "84941742842970848",
            "link": "employees",
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
            "arrayLink": false,
            "indexExists": false,
            "linkType": true,
            "array": false
        },
        {
            "sysName": "last_user",
            "name": "Кем изменено",
            "dataType": "link",
            "id": "56801742842950687",
            "link": "WebUser",
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
            "linkOrArrayLinkType": true,
            "arrayLink": false,
            "indexExists": false,
            "linkType": true,
            "array": false
        },
        {
            "sysName": "prev_status",
            "name": "Предыдущий статус",
            "dataType": "link",
            "id": "38831742842950102",
            "link": "ih_statuses",
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
            "arrayLink": false,
            "indexExists": false,
            "linkType": true,
            "array": false
        },
        {
            "sysName": "status",
            "name": "Статус",
            "dataType": "link",
            "id": "88131742842949457",
            "link": "ih_statuses",
            "group": "0",
            "tags": "",
            "indexing": true,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 1,
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
            "indexExists": true,
            "linkType": true,
            "array": false
        },
        {
            "sysName": "cnb",
            "name": "CnB",
            "dataType": "link",
            "id": "33821743007872149",
            "link": "employees",
            "group": "1742846057420",
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
            "arrayLink": false,
            "indexExists": false,
            "linkType": true,
            "array": false
        },
        {
            "sysName": "analytics_ops",
            "name": "Категория персонала (Analytics for OPS)",
            "dataType": "link",
            "id": "41381743014388698",
            "link": "analytics_for_ops",
            "group": "1742846050126",
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
            "json": false,
            "linkOrArrayLinkType": true,
            "arrayLink": false,
            "indexExists": false,
            "linkType": true,
            "array": false
        },
        {
            "sysName": "budget_date",
            "name": "Бюджетная дата от C&B",
            "dataType": "date",
            "id": "83181743014316029",
            "link": "",
            "group": "1742846050126",
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
                "dateFormat": "DD.MM.YYYY",
                "timeFormat": "",
                "isUTC": "true"
            },
            "groupName": null,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "indexExists": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "hr_bp_creator",
            "name": "Заявка создана HR BP, вместо руководителя",
            "dataType": "json",
            "id": "74721742996036851",
            "link": "",
            "group": "1742846057420",
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
                        "value": "hrbp",
                        "label": ""
                    }
                ]
            },
            "groupName": null,
            "typeVariable": {},
            "json": true,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "indexExists": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "intern_name",
            "name": "ФИО стажера",
            "dataType": "string",
            "id": "65151743015722173",
            "link": "",
            "group": "1742846050126",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "indexExists": false,
            "linkType": false,
            "array": false
        }
    ],
    "data": [
        {
            "all_delegants": [
                ""
            ],
            "number": "IH-889559",
            "prev_status": {
                "id": "approval_hrbp",
                "status": "Согласование с HRBP"
            },
            "user_creator": {
                "id": "0ЛЗК-00529",
                "employee_full_name": "Александра Калина"
            },
            "direction": {
                "id": "non_tech",
                "direction": "Стажер Non-Tech"
            },
            "last_change_date": 1743098447000,
            "division": {
                "division_name": "Отдел развития и поддержки партнеров",
                "id": "000000238"
            },
            "work_place": "1",
            "responsible_employee_id": {
                "id": "0ЛЗК-00529",
                "employee_full_name": "Александра Калина",
                "employee_email": ""
            },
            "company": {
                "company": "ЛАМОДА ТЕХ",
                "id": "lamoda_tech"
            },
            "work_schedule": "2",
            "salary": 1,
            "responsible_roles": [
                "admin",
                "ih_all_requests",
                "ipt",
                "hip"
            ],
            "id": "69359a83-2d8b-4a1d-bd73-945b95f31c44",
            "last_user": {
                "firstName": "Aleksandra",
                "lastName": "Kalina",
                "id": "aleksandra.kalina@lamoda.ru"
            },
            "education": "e",
            "all_user_ids": [
                "0ЛЗК-00529"
            ],
            "date": 1743098013000,
            "reason_vacancy": {
                "reason": "Новая ставка",
                "is_active": true,
                "id": "new"
            },
            "prof_skills": "w",
            "manager": {
                "employee_email": "aleksandra.kalina@lamoda.ru",
                "id": "0ЛЗК-00529",
                "position": "Аналитик по развитию корпоративных бизнес-приложений",
                "webuser_id": {
                    "who_delegated_ids": [
                        ""
                    ],
                    "role": [
                        "cnb"
                    ],
                    "whom_delegate_ids": [
                        ""
                    ],
                    "id": "aleksandra.kalina@lamoda.ru"
                },
                "employee_full_name": "Александра Калина"
            },
            "status": {
                "id": "approval_hrbp",
                "status": "Согласование с HRBP"
            },
            "employment_status": "{\"full\":true,\"part\":true}",
            "all_managers": [
                ""
            ],
            "logs": [
                {
                    "date_display": "27 мар. 2025, 21:00",
                    "user": "aleksandra.kalina@lamoda.ru",
                    "text": "Согласование HRBP. Назначен ответственный: aleksandra.kalina@lamoda.ru",
                    "id": "9ff0d96b-6f67-460e-bcf6-6b50f181c5f3"
                },
                {
                    "date_display": "27 мар. 2025, 20:54",
                    "text": "Валидация. Назначен ответственный: Менеджер стажерских программ",
                    "user": "aleksandra.kalina@lamoda.ru",
                    "id": "b9879e53-d90b-4cf0-ab70-ba472b4eed96"
                },
                {
                    "text": "Создание заявки: Aleksandra Kalina",
                    "user": "aleksandra.kalina@lamoda.ru",
                    "date_display": "27 мар. 2025, 20:53",
                    "id": "42ea90af-0cc3-42f0-8207-aeff9ed36d70"
                }
            ],
            "responsibilities": "e",
            "employment_type": {
                "employment_type": "Гибрид",
                "id": "flex"
            },
            "hrbp": {
                "employee_email": "aleksandra.kalina@lamoda.ru",
                "id": "0ЛЗК-00529",
                "position": "Аналитик по развитию корпоративных бизнес-приложений",
                "webuser_id": {
                    "who_delegated_ids": [
                        ""
                    ],
                    "role": [
                        "cnb"
                    ],
                    "whom_delegate_ids": [
                        ""
                    ],
                    "id": "aleksandra.kalina@lamoda.ru"
                },
                "employee_full_name": "Александра Калина"
            },
            "org_structure": "Коммерческая дирекция => Департамент развития и поддержки коммерческой деятельности => Отдел развития и поддержки партнеров"
        }
    ],
    "totalPages": 1,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [
        [
            "id",
            99374664
        ],
        [
            "hrbp.id",
            99373694
        ],
        [
            "hrbp.employee_full_name",
            99373694
        ],
        [
            "hrbp.employee_email",
            99373694
        ],
        [
            "hrbp.position",
            99373694
        ],
        [
            "hrbp.webuser_id.id",
            99371986
        ],
        [
            "hrbp.webuser_id.whom_delegate_ids.id",
            99371986
        ],
        [
            "hrbp.webuser_id.who_delegated_ids.id",
            99371986
        ],
        [
            "hrbp.webuser_id.role",
            99371986
        ],
        [
            "dep_manager.id",
            99373694
        ],
        [
            "dep_manager.employee_full_name",
            99373694
        ],
        [
            "dep_manager.employee_email",
            99373694
        ],
        [
            "dep_manager.position",
            99373694
        ],
        [
            "dep_manager.webuser_id.id",
            99371986
        ],
        [
            "dep_manager.webuser_id.whom_delegate_ids.id",
            99371986
        ],
        [
            "dep_manager.webuser_id.who_delegated_ids.id",
            99371986
        ],
        [
            "dep_manager.webuser_id.role",
            99371986
        ],
        [
            "manager.id",
            99373694
        ],
        [
            "manager.employee_full_name",
            99373694
        ],
        [
            "manager.employee_email",
            99373694
        ],
        [
            "manager.position",
            99373694
        ],
        [
            "manager.webuser_id.id",
            99371986
        ],
        [
            "manager.webuser_id.role",
            99371986
        ],
        [
            "manager.webuser_id.whom_delegate_ids.id",
            99371986
        ],
        [
            "manager.webuser_id.who_delegated_ids.id",
            99371986
        ],
        [
            "education",
            99374664
        ],
        [
            "prof_skills",
            99374664
        ],
        [
            "responsibilities",
            99374664
        ],
        [
            "salary",
            99374664
        ],
        [
            "work_schedule",
            99374664
        ],
        [
            "work_place",
            99374664
        ],
        [
            "employment_type.id",
            99373706
        ],
        [
            "employment_type.employment_type",
            99373706
        ],
        [
            "employment_status",
            99374664
        ],
        [
            "org_structure",
            99374664
        ],
        [
            "division.id",
            99373695
        ],
        [
            "division.division_name",
            99373695
        ],
        [
            "company.id",
            99373704
        ],
        [
            "company.company",
            99373704
        ],
        [
            "direction.id",
            99386162
        ],
        [
            "direction.direction",
            99386162
        ],
        [
            "position_release_date",
            99374664
        ],
        [
            "resigning_int_full_name.id",
            99373694
        ],
        [
            "resigning_int_full_name.employee_full_name",
            99373694
        ],
        [
            "resigning_int_full_name.employee_email",
            99373694
        ],
        [
            "resigning_int_full_name.webuser_id.id",
            99371986
        ],
        [
            "resigning_int_full_name.webuser_id.whom_delegate_ids.id",
            99371986
        ],
        [
            "resigning_int_full_name.webuser_id.who_delegated_ids.id",
            99371986
        ],
        [
            "resigning_int_full_name.webuser_id.role",
            99371986
        ],
        [
            "resigning_int_full_name.position",
            99373694
        ],
        [
            "reason_vacancy.id",
            99385856
        ],
        [
            "reason_vacancy.reason",
            99385856
        ],
        [
            "reason_vacancy.is_active",
            99385856
        ],
        [
            "cancel_reason",
            99374664
        ],
        [
            "is_test",
            99374664
        ],
        [
            "all_delegants.id",
            99373694
        ],
        [
            "all_managers.id",
            99373694
        ],
        [
            "watchers_logs.id",
            99385859
        ],
        [
            "watchers.id",
            99373694
        ],
        [
            "last_change_date",
            99374664
        ],
        [
            "all_user_ids.id",
            99373694
        ],
        [
            "responsible_roles.id",
            99373658
        ],
        [
            "responsible_employee_id.id",
            99373694
        ],
        [
            "responsible_employee_id.employee_full_name",
            99373694
        ],
        [
            "date",
            99374664
        ],
        [
            "number",
            99374664
        ],
        [
            "logs.id",
            99385857
        ],
        [
            "logs.date_display",
            99385857
        ],
        [
            "logs.user.id",
            99371986
        ],
        [
            "logs.text",
            99385857
        ],
        [
            "user_creator.id",
            99373694
        ],
        [
            "user_creator.employee_full_name",
            99373694
        ],
        [
            "last_user.id",
            99371986
        ],
        [
            "last_user.lastName",
            99371986
        ],
        [
            "last_user.firstName",
            99371986
        ],
        [
            "prev_status.id",
            99385855
        ],
        [
            "prev_status.status",
            99385855
        ],
        [
            "status.id",
            99385855
        ],
        [
            "status.status",
            99385855
        ],
        [
            "cnb.id",
            99373694
        ],
        [
            "cnb.employee_full_name",
            99373694
        ],
        [
            "cnb.position",
            99373694
        ],
        [
            "cnb.employee_email",
            99373694
        ],
        [
            "cnb.webuser_id.id",
            99371986
        ],
        [
            "cnb.webuser_id.role",
            99371986
        ],
        [
            "cnb.webuser_id.whom_delegate_ids.id",
            99371986
        ],
        [
            "cnb.webuser_id.who_delegated_ids.id",
            99371986
        ],
        [
            "analytics_ops.id",
            99373709
        ],
        [
            "analytics_ops.name",
            99373709
        ],
        [
            "budget_date",
            99374664
        ],
        [
            "hr_bp_creator",
            99374664
        ],
        [
            "intern_name",
            99374664
        ]
    ],
    "writeFields": [
        "id",
        "hrbp",
        "dep_manager",
        "manager",
        "education",
        "prof_skills",
        "responsibilities",
        "salary",
        "work_schedule",
        "work_place",
        "employment_type",
        "employment_status",
        "org_structure",
        "division",
        "company",
        "direction",
        "position_release_date",
        "resigning_int_full_name",
        "reason_vacancy",
        "cancel_reason",
        "cnb",
        "analytics_ops",
        "budget_date",
        "intern_name"
    ],
    "structures": {
        "99371986": {
            "networkID": 23019,
            "sysName": "WebUser",
            "name": "App users",
            "id": 99371986,
            "dateCreated": "2025-02-24T09:55:35Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"roles_ad\",\"dataType\":\"arrayLink\",\"name\":\"\",\"id\":\"31521720185270928\",\"link\":\"roles_ad\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"array\":false},{\"sysName\":\"dateLastActivity\",\"dataType\":\"string\",\"name\":\"dateLastActivity\",\"id\":\"10\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"dateCreated\",\"dataType\":\"string\",\"name\":\"dateCreated\",\"id\":\"13\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"isAuthorization\",\"dataType\":\"boolean\",\"name\":\"isAuthorization\",\"id\":\"9\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"notifications_counter\",\"dataType\":\"string\",\"name\":\"Notifications Counter\",\"id\":\"1\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"custom_labels\",\"dataType\":\"json\",\"name\":\"Custom labels\",\"id\":\"2\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"typeVariable\":{},\"indexExists\":false,\"json\":true,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"phone\",\"dataType\":\"string\",\"name\":\"Phone\",\"id\":\"12\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"email\",\"dataType\":\"string\",\"name\":\"Email\",\"id\":\"11\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"userpic\",\"dataType\":\"file\",\"name\":\"Фотография профиля\",\"id\":\"3\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":{},\"groupName\":\"Contacts\",\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"Username (login)\",\"id\":\"15\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"role\",\"dataType\":\"array\",\"name\":\"Роли\",\"id\":\"8\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":true},{\"sysName\":\"password\",\"dataType\":\"string\",\"name\":\"Password (hash)\",\"id\":\"14\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"firstName\",\"dataType\":\"string\",\"name\":\"Имя\",\"id\":\"7\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"lastName\",\"dataType\":\"string\",\"name\":\"Фамилия\",\"id\":\"6\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"gender\",\"dataType\":\"string\",\"name\":\"Пол\",\"id\":\"5\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"isBlocked\",\"dataType\":\"boolean\",\"name\":\"Block user\",\"id\":\"4\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"systemMessage\",\"dataType\":\"string\",\"name\":\"System message\",\"id\":\"56921641637265680\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"employee\",\"dataType\":\"link\",\"name\":\"\",\"id\":\"65621717669435431\",\"link\":\"employees\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"array\":false},{\"sysName\":\"position\",\"dataType\":\"string\",\"name\":\"Должность\",\"id\":\"21611718980485707\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"division\",\"dataType\":\"string\",\"name\":\"Подразделение\",\"id\":\"13761718980504077\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"isActive\",\"dataType\":\"boolean\",\"name\":\"isActive\",\"id\":\"28091718982360994\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"who_delegated_ids\",\"dataType\":\"arrayLink\",\"name\":\"Кто делегировал права?\",\"id\":\"18431723207371481\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"array\":false},{\"sysName\":\"whom_delegate_ids\",\"dataType\":\"arrayLink\",\"name\":\"Кому делегировал права?\",\"id\":\"29491723207412497\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"array\":false},{\"sysName\":\"all_bosses_ids\",\"dataType\":\"arrayLink\",\"name\":\"Все руководители вверх по иерархии\",\"id\":\"45451730474812010\",\"link\":\"employees\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"array\":false},{\"sysName\":\"visual_roles\",\"dataType\":\"arrayLink\",\"name\":\"Роли\",\"id\":\"17671742849887639\",\"link\":\"roles\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"array\":false},{\"sysName\":\"employee_ids\",\"dataType\":\"arrayLink\",\"name\":\"Табельные номера\",\"id\":\"70731743017750469\",\"link\":\"employees\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":16,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"array\":false},{\"sysName\":\"person_id\",\"dataType\":\"string\",\"name\":\"Код физ лица\",\"id\":\"35961743017933601\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":17,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"secret\",\"dataType\":\"string\",\"name\":\"secret\",\"id\":\"81131636839496227\",\"link\":\"\",\"group\":\"1636839487957\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"notif_Email\",\"dataType\":\"boolean\",\"name\":\"Notify me by Email\",\"id\":\"61231639915065277\",\"link\":\"\",\"group\":\"1639915049523\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Yes\",\"No\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"employees_first_day\",\"dataType\":\"arrayLink\",\"name\":\"Сотрудники 1 день\",\"id\":\"77871732470209469\",\"link\":\"onboarding\",\"group\":\"1639915049523\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"array\":false}]",
            "jsonGroupSettings": "[{\"id\":-502807437,\"name\":\"Contacts\",\"order\":0},{\"id\":1639915049523,\"name\":\"Notifications\",\"order\":1},{\"id\":1636839487957,\"name\":\"Password restoring\",\"order\":2},{\"id\":-1776115286,\"name\":\"System fields (LEGACY)\",\"order\":3}]",
            "jsonViewIdSettings": "[{\"sysName\":\"firstName\"},{\"sysName\":\"lastName\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false,\"onlinePriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2025-03-26T19:39:21Z",
            "createBy": 0,
            "changedBy": 23015,
            "_settings": null,
            "_nativeIndexSettings": null,
            "objectIDSysName": "id",
            "innerIDField": {
                "sysName": "id",
                "name": "Username (login)",
                "dataType": "id",
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
                "indexExists": false,
                "linkType": false,
                "array": false
            },
            "folderId": null
        },
        "99373658": {
            "networkID": 23019,
            "sysName": "roles",
            "name": "Roles",
            "id": 99373658,
            "dateCreated": "2024-05-20T16:01:07Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"ad_group\",\"name\":\"Ad group\",\"dataType\":\"link\",\"id\":\"37371716221203585\",\"link\":\"roles_ad\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"visual_name\",\"name\":\"Роль\",\"dataType\":\"string\",\"id\":\"75311724655382921\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false}]",
            "jsonGroupSettings": "[]",
            "jsonViewIdSettings": "[{\"sysName\":\"visual_name\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false,\"onlinePriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2025-03-13T08:00:01Z",
            "createBy": 23015,
            "changedBy": 23015,
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "indexExists": false,
                "linkType": false,
                "array": false
            },
            "folderId": 33836262
        },
        "99373694": {
            "networkID": 23019,
            "sysName": "employees",
            "name": "Employees",
            "id": 99373694,
            "dateCreated": "2024-05-14T07:46:19Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"Табельный номер\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"manager_full_name\",\"dataType\":\"string\",\"name\":\"Полное имя руководителя\",\"id\":\"10881741625409029\",\"link\":null,\"group\":\"1741625922416\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"position_name_eng\",\"dataType\":\"string\",\"name\":\"Position name eng\",\"id\":\"14771717094032672\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"webuser_id\",\"dataType\":\"link\",\"name\":\"Пользователь\",\"id\":\"21401717671535287\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":20,\"linkIndexFieldSysName\":[\"role\"],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"array\":false},{\"sysName\":\"manager_person_id\",\"dataType\":\"string\",\"name\":\"Код физ лица руководителя\",\"id\":\"22121741626972606\",\"link\":null,\"group\":\"1741625922416\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"is_active\",\"dataType\":\"string\",\"name\":\"Активный?\",\"id\":\"23861741626104303\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"email\",\"dataType\":\"string\",\"name\":\"Email\",\"id\":\"26531716224439241\",\"link\":null,\"group\":\"1741625789281\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"start_date_position\",\"dataType\":\"date\",\"name\":\"На позиции с\",\"id\":\"27871741626688387\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":22,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.YYYY\",\"timeFormat\":\"\",\"isUTC\":\"true\"},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"start_date_lamoda\",\"dataType\":\"date\",\"name\":\"В lamoda с\",\"id\":\"28151741626689036\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":24,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.YYYY\",\"timeFormat\":\"\",\"isUTC\":\"true\"},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"position\",\"dataType\":\"string\",\"name\":\"Позиция\",\"id\":\"28531715675330046\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"division_name\",\"dataType\":\"string\",\"name\":\"Подраздение\",\"id\":\"31271717093221879\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":18,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"is_primary\",\"dataType\":\"string\",\"name\":\"Основная позиция?\",\"id\":\"32061741626109171\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"country_manager\",\"dataType\":\"string\",\"name\":\"Страна руководителя\",\"id\":\"34641741626997526\",\"link\":null,\"group\":\"1741625922416\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"direct_email\",\"dataType\":\"link\",\"name\":\"Direct email\",\"id\":\"36721717097550149\",\"link\":\"employees\",\"group\":\"1741625789281\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"array\":false},{\"sysName\":\"direct_full_name\",\"dataType\":\"string\",\"name\":\"Direct Full name\",\"id\":\"40141715777939624\",\"link\":null,\"group\":\"1741625789281\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"workplace\",\"dataType\":\"string\",\"name\":\"Место работы\",\"id\":\"41461741626599409\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":19,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"person_id\",\"dataType\":\"string\",\"name\":\"Код физ лица\",\"id\":\"42891741626081167\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"rate\",\"dataType\":\"decimal\",\"name\":\"Ставка\",\"id\":\"43471741626484808\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"division_id\",\"dataType\":\"link\",\"name\":\"ID подразделения\",\"id\":\"46921715675477884\",\"link\":\"structure\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":17,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"array\":false},{\"sysName\":\"entity\",\"dataType\":\"string\",\"name\":\"Юр лицо\",\"id\":\"51521741626519400\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":16,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"all_managers\",\"dataType\":\"arrayLink\",\"name\":\"Все руководители\",\"id\":\"52201738753592523\",\"link\":\"employees\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":21,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"array\":false},{\"sysName\":\"manager_first_name\",\"dataType\":\"string\",\"name\":\"Имя руководителя\",\"id\":\"59011741625406135\",\"link\":null,\"group\":\"1741625922416\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"is_manager\",\"dataType\":\"string\",\"name\":\"Руководитель?\",\"id\":\"59641741626487079\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"employee_last_name\",\"dataType\":\"string\",\"name\":\"Фамилия\",\"id\":\"60151715675210149\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"start_date_entity\",\"dataType\":\"date\",\"name\":\"В юр лице с\",\"id\":\"60701741626685046\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":23,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.YYYY\",\"timeFormat\":\"\",\"isUTC\":\"true\"},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"gender\",\"dataType\":\"string\",\"name\":\"Пол\",\"id\":\"66061741626418504\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"employee_full_name\",\"dataType\":\"string\",\"name\":\"Полное имя\",\"id\":\"68071715777917101\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"employee_first_name\",\"dataType\":\"string\",\"name\":\"Имя\",\"id\":\"68431715675181675\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"manager_email\",\"dataType\":\"string\",\"name\":\"Email руководителя\",\"id\":\"73841741627059023\",\"link\":\"\",\"group\":\"1741625922416\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"manager_id\",\"dataType\":\"link\",\"name\":\"Табельный номер руководителя\",\"id\":\"76911741625991030\",\"link\":\"employees\",\"group\":\"1741625922416\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"array\":false},{\"sysName\":\"manager_last_name\",\"dataType\":\"string\",\"name\":\"Фамилия руководителя\",\"id\":\"77531741625408338\",\"link\":null,\"group\":\"1741625922416\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"position_id\",\"dataType\":\"string\",\"name\":\"ID Позиции\",\"id\":\"80581717093206114\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"dismissal_date\",\"dataType\":\"date\",\"name\":\"Дата увольнения\",\"id\":\"84581741626875882\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":25,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.YYYY\",\"timeFormat\":\"\",\"isUTC\":\"true\"},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"birth_date\",\"dataType\":\"date\",\"name\":\"Дата рождения\",\"id\":\"87891741626416420\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.YYYY\",\"timeFormat\":\"\",\"isUTC\":\"true\"},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"country_employee\",\"dataType\":\"string\",\"name\":\"Cтрана\",\"id\":\"88991741626277565\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"employee_email\",\"dataType\":\"string\",\"name\":\"Email\",\"id\":\"95741741626344382\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false}]",
            "jsonGroupSettings": "[{\"id\":1741625922416,\"name\":\"Руководитель\",\"order\":0},{\"id\":1741625789281,\"name\":\"под удаление\",\"order\":1}]",
            "jsonViewIdSettings": "[{\"sysName\":\"employee_full_name\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false,\"onlinePriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2025-03-26T22:44:03Z",
            "createBy": 23015,
            "changedBy": 23015,
            "_settings": null,
            "_nativeIndexSettings": null,
            "objectIDSysName": "id",
            "innerIDField": {
                "sysName": "id",
                "name": "Табельный номер",
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "indexExists": false,
                "linkType": false,
                "array": false
            },
            "folderId": 33837138
        },
        "99373695": {
            "networkID": 23019,
            "sysName": "structure",
            "name": "Structure",
            "id": 99373695,
            "dateCreated": "2024-05-14T07:49:49Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"ID Подразделения\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false},{\"sysName\":\"department\",\"name\":\"Департамент\",\"dataType\":\"string\",\"id\":\"22661741709111011\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false},{\"sysName\":\"full_hierarchy\",\"name\":\"Full hierarchy\",\"dataType\":\"string\",\"id\":\"24721715777762327\",\"link\":null,\"group\":\"1741709034632\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false},{\"sysName\":\"full_structure\",\"name\":\"Полная структура\",\"dataType\":\"string\",\"id\":\"25031741709234671\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false},{\"sysName\":\"hrbp_id\",\"name\":\"Ответственный HR BP\",\"dataType\":\"link\",\"id\":\"37851741709291078\",\"link\":\"employees\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true},{\"sysName\":\"division_num\",\"name\":\"Division num\",\"dataType\":\"string\",\"id\":\"62831721209206145\",\"link\":null,\"group\":\"1741709034632\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false},{\"sysName\":\"division_name\",\"name\":\"Подразделение\",\"dataType\":\"string\",\"id\":\"63201715673599255\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false},{\"sysName\":\"parent_division_id\",\"name\":\"ID родительского подразделения\",\"dataType\":\"link\",\"id\":\"96451741709112293\",\"link\":\"structure\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true}]",
            "jsonGroupSettings": "[{\"id\":1741709034632,\"name\":\"Под удаление\",\"order\":0}]",
            "jsonViewIdSettings": "[{\"sysName\":\"division_name\"},{\"sysName\":\"full_structure\"},{\"sysName\":\"id\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false,\"onlinePriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2025-03-26T14:49:53Z",
            "createBy": 23015,
            "changedBy": 23015,
            "_settings": null,
            "_nativeIndexSettings": null,
            "objectIDSysName": "id",
            "innerIDField": {
                "sysName": "id",
                "name": "ID Подразделения",
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "indexExists": false,
                "linkType": false,
                "array": false
            },
            "folderId": 33837138
        },
        "99373704": {
            "networkID": 23019,
            "sysName": "company",
            "name": "Company",
            "id": 99373704,
            "dateCreated": "2024-05-14T13:20:27Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"company\",\"dataType\":\"string\",\"name\":\"Компания\",\"id\":\"89321715692830953\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"ushr_name\",\"dataType\":\"array\",\"name\":\"УШР нейминг\",\"id\":\"75111741710828747\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":true,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"is_active\",\"dataType\":\"boolean\",\"name\":\"Активный\",\"id\":\"40531741710938028\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false}]",
            "jsonGroupSettings": "[]",
            "jsonViewIdSettings": "[{\"sysName\":\"company\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false,\"onlinePriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2025-03-11T16:50:03Z",
            "createBy": 23015,
            "changedBy": 23015,
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "indexExists": false,
                "linkType": false,
                "array": false
            },
            "folderId": 33837597
        },
        "99373706": {
            "networkID": 23019,
            "sysName": "employment_type",
            "name": "Employment type",
            "id": 99373706,
            "dateCreated": "2024-05-20T17:34:08Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"employment_type\",\"dataType\":\"string\",\"name\":\"Тип занятости\",\"id\":\"11211716226454609\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false}]",
            "jsonGroupSettings": "[]",
            "jsonViewIdSettings": "[{\"sysName\":\"employment_type\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false,\"onlinePriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2025-03-26T18:43:34Z",
            "createBy": 23015,
            "changedBy": 23015,
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "indexExists": false,
                "linkType": false,
                "array": false
            },
            "folderId": 33837597
        },
        "99373709": {
            "networkID": 23019,
            "sysName": "analytics_for_ops",
            "name": "Analytics for OPS",
            "id": 99373709,
            "dateCreated": "2024-05-30T20:59:17Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"name\",\"dataType\":\"string\",\"name\":\"name\",\"id\":\"88871717102762537\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false}]",
            "jsonGroupSettings": "[]",
            "jsonViewIdSettings": "[{\"sysName\":\"name\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false,\"onlinePriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2025-03-26T18:43:27Z",
            "createBy": 23015,
            "changedBy": 23015,
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "indexExists": false,
                "linkType": false,
                "array": false
            },
            "folderId": 33837597
        },
        "99374664": {
            "networkID": 23019,
            "sysName": "interns_hiring",
            "name": "interns_hiring",
            "id": 99374664,
            "dateCreated": "2025-03-13T08:21:03Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"all_delegants\",\"dataType\":\"arrayLink\",\"name\":\"Все делеганты\",\"id\":\"11401742843089557\",\"link\":\"employees\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"array\":false},{\"sysName\":\"employment_type\",\"dataType\":\"link\",\"name\":\"Формат работы\",\"id\":\"12161742847164744\",\"link\":\"employment_type\",\"group\":\"1742846050126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"array\":false},{\"sysName\":\"company\",\"dataType\":\"link\",\"name\":\"Юр. лицо\",\"id\":\"13411742846951190\",\"link\":\"company\",\"group\":\"1742846050126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"array\":false},{\"sysName\":\"manager\",\"dataType\":\"link\",\"name\":\"Нанимающий менеджер\",\"id\":\"18141742847592094\",\"link\":\"employees\",\"group\":\"1742846057420\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"array\":false},{\"sysName\":\"logs\",\"dataType\":\"arrayLink\",\"name\":\"История изменений\",\"id\":\"18241742842971575\",\"link\":\"ih_logs\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"array\":false},{\"sysName\":\"org_structure\",\"dataType\":\"string\",\"name\":\"Организационная структура\",\"id\":\"19621742847092706\",\"link\":\"\",\"group\":\"1742846050126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"all_user_ids\",\"dataType\":\"arrayLink\",\"name\":\"Все пользователи, относящиеся к заявке\",\"id\":\"22541742843027154\",\"link\":\"employees\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"array\":false},{\"sysName\":\"division\",\"dataType\":\"link\",\"name\":\"Подразделение\",\"id\":\"24141742847092141\",\"link\":\"structure\",\"group\":\"1742846050126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"array\":false},{\"sysName\":\"education\",\"dataType\":\"string\",\"name\":\"Образование\",\"id\":\"27871742847500836\",\"link\":\"\",\"group\":\"1742846050126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"hrbp\",\"dataType\":\"link\",\"name\":\"HR BP\",\"id\":\"29271742847593944\",\"link\":\"employees\",\"group\":\"1742846057420\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"array\":false},{\"sysName\":\"cancel_reason\",\"dataType\":\"string\",\"name\":\"Укажите причину\",\"id\":\"33411742846820487\",\"link\":\"\",\"group\":\"1742846805849\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"cnb\",\"dataType\":\"link\",\"name\":\"CnB\",\"id\":\"33821743007872149\",\"link\":\"employees\",\"group\":\"1742846057420\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"array\":false},{\"sysName\":\"prev_status\",\"dataType\":\"link\",\"name\":\"Предыдущий статус\",\"id\":\"38831742842950102\",\"link\":\"ih_statuses\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"array\":false},{\"sysName\":\"reason_vacancy\",\"dataType\":\"link\",\"name\":\"Причина появления вакансии\",\"id\":\"40401742846857454\",\"link\":\"ih_reason_of_vacancy\",\"group\":\"1742846050126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"array\":false},{\"sysName\":\"analytics_ops\",\"dataType\":\"link\",\"name\":\"Категория персонала (Analytics for OPS)\",\"id\":\"41381743014388698\",\"link\":\"analytics_for_ops\",\"group\":\"1742846050126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":16,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"array\":false},{\"sysName\":\"responsible_employee_id\",\"dataType\":\"link\",\"name\":\"Ответственный за текущий этап\",\"id\":\"47011742843010814\",\"link\":\"employees\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"array\":false},{\"sysName\":\"prev_division\",\"dataType\":\"link\",\"name\":\"Предыдущее подразделение\",\"id\":\"49921743090077893\",\"link\":\"structure\",\"group\":\"1742846050126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":18,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"array\":false},{\"sysName\":\"responsible_roles\",\"dataType\":\"arrayLink\",\"name\":\"Ответственные роли\",\"id\":\"51401742843011636\",\"link\":\"roles\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"array\":false},{\"sysName\":\"all_managers\",\"dataType\":\"arrayLink\",\"name\":\"Все руководители\",\"id\":\"55931742843070628\",\"link\":\"employees\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"array\":false},{\"sysName\":\"watchers_logs\",\"dataType\":\"arrayLink\",\"name\":\"Логи наблюдатели\",\"id\":\"56791742843040713\",\"link\":\"ih_watchers_logs\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"array\":false},{\"sysName\":\"last_user\",\"dataType\":\"link\",\"name\":\"Кем изменено\",\"id\":\"56801742842950687\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"array\":false},{\"sysName\":\"intern_name\",\"dataType\":\"string\",\"name\":\"ФИО стажера\",\"id\":\"65151743015722173\",\"link\":\"\",\"group\":\"1742846050126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":17,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"date\",\"dataType\":\"date\",\"name\":\"Дата создания заявки\",\"id\":\"69671742842982676\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.YYYY\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"last_change_date\",\"dataType\":\"date\",\"name\":\"Дата последнего изменения\",\"id\":\"71761742843038747\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.YYYY\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"hr_bp_creator\",\"dataType\":\"json\",\"name\":\"Заявка создана HR BP, вместо руководителя\",\"id\":\"74721742996036851\",\"link\":\"\",\"group\":\"1742846057420\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"checkboxes\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"multipleChoice\":[{\"value\":\"hrbp\",\"label\":\"\"}]},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":true,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"watchers\",\"dataType\":\"arrayLink\",\"name\":\"Наблюдатели\",\"id\":\"76011742843039552\",\"link\":\"employees\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"array\":false},{\"sysName\":\"direction\",\"dataType\":\"link\",\"name\":\"Направление\",\"id\":\"76841742846950538\",\"link\":\"ih_direction\",\"group\":\"1742846050126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"array\":false},{\"sysName\":\"budget_date\",\"dataType\":\"date\",\"name\":\"Бюджетная дата от C&B\",\"id\":\"83181743014316029\",\"link\":\"\",\"group\":\"1742846050126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.YYYY\",\"timeFormat\":\"\",\"isUTC\":\"true\"},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"user_creator\",\"dataType\":\"link\",\"name\":\"Инициатор заявки\",\"id\":\"84941742842970848\",\"link\":\"employees\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"array\":false},{\"sysName\":\"resigning_int_full_name\",\"dataType\":\"link\",\"name\":\"ФИО заменяемого стажера\",\"id\":\"85361742846858204\",\"link\":\"employees\",\"group\":\"1742846050126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"array\":false},{\"sysName\":\"salary\",\"dataType\":\"decimal\",\"name\":\"Оклад на полную ставку, руб. (в гросс)\",\"id\":\"85441742847408744\",\"link\":\"\",\"group\":\"1742846050126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"work_schedule\",\"dataType\":\"string\",\"name\":\"График и время работы\",\"id\":\"86831742847408040\",\"link\":\"\",\"group\":\"1742846050126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"status\",\"dataType\":\"link\",\"name\":\"Статус\",\"id\":\"88131742842949457\",\"link\":\"ih_statuses\",\"group\":\"0\",\"tags\":\"\",\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[\"id\"],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"indexExists\":true,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"array\":false},{\"sysName\":\"prof_skills\",\"dataType\":\"string\",\"name\":\"Требования\",\"id\":\"88761742847500112\",\"link\":\"\",\"group\":\"1742846050126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"number\",\"dataType\":\"string\",\"name\":\"Номер заявки\",\"id\":\"89881742842981021\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"work_place\",\"dataType\":\"string\",\"name\":\"Место работы\",\"id\":\"90291742847166877\",\"link\":\"\",\"group\":\"1742846050126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"dep_manager\",\"dataType\":\"link\",\"name\":\"Руководитель департамента (N-1)\",\"id\":\"91901742847592995\",\"link\":\"employees\",\"group\":\"1742846057420\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"array\":false},{\"sysName\":\"employment_status\",\"dataType\":\"json\",\"name\":\"Желаемая степень занятости\",\"id\":\"92881742847163519\",\"link\":\"\",\"group\":\"1742846050126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"checkboxes\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"multipleChoice\":[{\"value\":\"full\",\"label\":\"Полная (40 часов)\"},{\"value\":\"part\",\"label\":\"Частичная (30 часов)\"}]},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":true,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"is_test\",\"dataType\":\"json\",\"name\":\"Тестовая заявка\",\"id\":\"93091742843109687\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":16,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"checkboxes\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"multipleChoice\":[{\"value\":\"test\",\"label\":\"без уведомлений\"},{\"value\":\"notice\",\"label\":\"с уведомлениями\"}]},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":true,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"position_release_date\",\"dataType\":\"date\",\"name\":\"Дата освобождения позиции\",\"id\":\"94781742846858921\",\"link\":\"\",\"group\":\"1742846050126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.YYYY\",\"timeFormat\":\"\",\"isUTC\":\"true\"},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"responsibilities\",\"dataType\":\"string\",\"name\":\"Обязанности\",\"id\":\"96831742847499074\",\"link\":\"\",\"group\":\"1742846050126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false}]",
            "jsonGroupSettings": "[{\"id\":1742846050126,\"name\":\"Поля\",\"order\":0},{\"id\":1742846057420,\"name\":\"Cогласующие\",\"order\":1},{\"id\":1742846805849,\"name\":\"Отмена заявок\",\"order\":2}]",
            "jsonViewIdSettings": null,
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2025-03-27T15:41:43Z",
            "createBy": 23015,
            "changedBy": 23015,
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "indexExists": false,
                "linkType": false,
                "array": false
            },
            "folderId": 33837673
        },
        "99385855": {
            "networkID": 23019,
            "sysName": "ih_statuses",
            "name": "ih_statuses",
            "id": 99385855,
            "dateCreated": "2025-03-24T19:10:35Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"next_status_ids\",\"dataType\":\"arrayLink\",\"name\":\"Допустимый следующий статус\",\"id\":\"27461729716723723\",\"link\":\"ih_statuses\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"indexExists\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"status\",\"dataType\":\"string\",\"name\":\"Cтатус\",\"id\":\"68061716237170513\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"linkType\":false,\"array\":false}]",
            "jsonGroupSettings": "[]",
            "jsonViewIdSettings": "[{\"sysName\":\"status\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false,\"onlinePriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2025-03-24T19:11:01Z",
            "createBy": 23015,
            "changedBy": 23015,
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "indexExists": false,
                "linkType": false,
                "array": false
            },
            "folderId": 33848333
        },
        "99385856": {
            "networkID": 23019,
            "sysName": "ih_reason_of_vacancy",
            "name": "ih_reason_of_vacancy",
            "id": 99385856,
            "dateCreated": "2025-03-24T19:28:36Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"reason\",\"dataType\":\"string\",\"name\":\"Reason\",\"id\":\"15771715691639283\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"is_active\",\"dataType\":\"boolean\",\"name\":\"Активная?\",\"id\":\"42361741850683598\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false}]",
            "jsonGroupSettings": "[]",
            "jsonViewIdSettings": "[{\"sysName\":\"reason\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false,\"onlinePriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2025-03-24T19:30:18Z",
            "createBy": 23015,
            "changedBy": 23015,
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "indexExists": false,
                "linkType": false,
                "array": false
            },
            "folderId": 33848333
        },
        "99385857": {
            "networkID": 23019,
            "sysName": "ih_logs",
            "name": "ih_logs",
            "id": 99385857,
            "dateCreated": "2025-03-24T19:58:01Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"date\",\"dataType\":\"date\",\"name\":\"Дата изменения\",\"id\":\"58751717136726535\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"text\",\"dataType\":\"string\",\"name\":\"Изменение заявки\",\"id\":\"13041717136793732\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"user\",\"dataType\":\"link\",\"name\":\"Кто внес изменения\",\"id\":\"83101717136837464\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"array\":false},{\"sysName\":\"ticket\",\"dataType\":\"link\",\"name\":\"Номер заявки\",\"id\":\"45681717136838095\",\"link\":\"interns_hiring\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"array\":false},{\"sysName\":\"date_display\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"87491717137718793\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false}]",
            "jsonGroupSettings": "[]",
            "jsonViewIdSettings": null,
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false,\"onlinePriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2025-03-24T19:58:29Z",
            "createBy": 23015,
            "changedBy": 23015,
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "indexExists": false,
                "linkType": false,
                "array": false
            },
            "folderId": 33848337
        },
        "99385859": {
            "networkID": 23019,
            "sysName": "ih_watchers_logs",
            "name": "ih_watchers_logs",
            "id": 99385859,
            "dateCreated": "2025-03-24T20:00:34Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"arrayLink\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"employee\",\"dataType\":\"string\",\"name\":\"Кто внес изменение\",\"id\":\"10161738701463579\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"arrayLink\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ih_id\",\"dataType\":\"link\",\"name\":\"Номер заявки\",\"id\":\"13251743030970289\",\"link\":\"interns_hiring\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"arrayLink\":false,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"action\",\"dataType\":\"string\",\"name\":\"Действие\",\"id\":\"38881738702548297\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"arrayLink\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"text\",\"dataType\":\"string\",\"name\":\"Текст\",\"id\":\"61821738701480564\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"arrayLink\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"date_text\",\"dataType\":\"string\",\"name\":\"Дата\",\"id\":\"83121738702290282\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"arrayLink\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"date\",\"dataType\":\"date\",\"name\":\"Дата\",\"id\":\"87941738701481345\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.YYYY\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"arrayLink\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"array\":false}]",
            "jsonGroupSettings": "[]",
            "jsonViewIdSettings": null,
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false,\"onlinePriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2025-03-26T23:16:43Z",
            "createBy": 23015,
            "changedBy": 23015,
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "indexExists": false,
                "linkType": false,
                "array": false
            },
            "folderId": 33848338
        },
        "99386162": {
            "networkID": 23019,
            "sysName": "ih_direction",
            "name": "ih_direction",
            "id": 99386162,
            "dateCreated": "2025-03-26T12:46:27Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"direction\",\"dataType\":\"string\",\"name\":\"Направление\",\"id\":\"14801742993191134\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"direction\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2025-03-26T12:46:47Z",
            "createBy": 23015,
            "changedBy": 23015,
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "indexExists": false,
                "linkType": false,
                "array": false
            },
            "folderId": 33848333
        }
    },
    "isSuccessWrite": false,
    "writeError": null,
    "writeResponse": null,
    "fileds": [
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "indexExists": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "hrbp",
            "name": "HR BP",
            "dataType": "link",
            "id": "29271742847593944",
            "link": "employees",
            "group": "1742846057420",
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
            "linkOrArrayLinkType": true,
            "arrayLink": false,
            "indexExists": false,
            "linkType": true,
            "array": false
        },
        {
            "sysName": "dep_manager",
            "name": "Руководитель департамента (N-1)",
            "dataType": "link",
            "id": "91901742847592995",
            "link": "employees",
            "group": "1742846057420",
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
            "arrayLink": false,
            "indexExists": false,
            "linkType": true,
            "array": false
        },
        {
            "sysName": "manager",
            "name": "Нанимающий менеджер",
            "dataType": "link",
            "id": "18141742847592094",
            "link": "employees",
            "group": "1742846057420",
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
            "linkOrArrayLinkType": true,
            "arrayLink": false,
            "indexExists": false,
            "linkType": true,
            "array": false
        },
        {
            "sysName": "education",
            "name": "Образование",
            "dataType": "string",
            "id": "27871742847500836",
            "link": "",
            "group": "1742846050126",
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
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "indexExists": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "prof_skills",
            "name": "Требования",
            "dataType": "string",
            "id": "88761742847500112",
            "link": "",
            "group": "1742846050126",
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
            "formatOptions": {},
            "groupName": null,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "indexExists": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "responsibilities",
            "name": "Обязанности",
            "dataType": "string",
            "id": "96831742847499074",
            "link": "",
            "group": "1742846050126",
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
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "indexExists": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "salary",
            "name": "Оклад на полную ставку, руб. (в гросс)",
            "dataType": "decimal",
            "id": "85441742847408744",
            "link": "",
            "group": "1742846050126",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "indexExists": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "work_schedule",
            "name": "График и время работы",
            "dataType": "string",
            "id": "86831742847408040",
            "link": "",
            "group": "1742846050126",
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
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "indexExists": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "work_place",
            "name": "Место работы",
            "dataType": "string",
            "id": "90291742847166877",
            "link": "",
            "group": "1742846050126",
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
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "indexExists": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "employment_type",
            "name": "Формат работы",
            "dataType": "link",
            "id": "12161742847164744",
            "link": "employment_type",
            "group": "1742846050126",
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
            "json": false,
            "linkOrArrayLinkType": true,
            "arrayLink": false,
            "indexExists": false,
            "linkType": true,
            "array": false
        },
        {
            "sysName": "employment_status",
            "name": "Желаемая степень занятости",
            "dataType": "json",
            "id": "92881742847163519",
            "link": "",
            "group": "1742846050126",
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
                        "value": "full",
                        "label": "Полная (40 часов)"
                    },
                    {
                        "value": "part",
                        "label": "Частичная (30 часов)"
                    }
                ]
            },
            "groupName": null,
            "typeVariable": {},
            "json": true,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "indexExists": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "org_structure",
            "name": "Организационная структура",
            "dataType": "string",
            "id": "19621742847092706",
            "link": "",
            "group": "1742846050126",
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
            "arrayLink": false,
            "indexExists": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "division",
            "name": "Подразделение",
            "dataType": "link",
            "id": "24141742847092141",
            "link": "structure",
            "group": "1742846050126",
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
            "linkOrArrayLinkType": true,
            "arrayLink": false,
            "indexExists": false,
            "linkType": true,
            "array": false
        },
        {
            "sysName": "company",
            "name": "Юр. лицо",
            "dataType": "link",
            "id": "13411742846951190",
            "link": "company",
            "group": "1742846050126",
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
            "arrayLink": false,
            "indexExists": false,
            "linkType": true,
            "array": false
        },
        {
            "sysName": "direction",
            "name": "Направление",
            "dataType": "link",
            "id": "76841742846950538",
            "link": "ih_direction",
            "group": "1742846050126",
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
            "linkOrArrayLinkType": true,
            "arrayLink": false,
            "indexExists": false,
            "linkType": true,
            "array": false
        },
        {
            "sysName": "position_release_date",
            "name": "Дата освобождения позиции",
            "dataType": "date",
            "id": "94781742846858921",
            "link": "",
            "group": "1742846050126",
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
                "dateFormat": "DD.MM.YYYY",
                "timeFormat": "",
                "isUTC": "true"
            },
            "groupName": null,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "indexExists": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "resigning_int_full_name",
            "name": "ФИО заменяемого стажера",
            "dataType": "link",
            "id": "85361742846858204",
            "link": "employees",
            "group": "1742846050126",
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
            "linkOrArrayLinkType": true,
            "arrayLink": false,
            "indexExists": false,
            "linkType": true,
            "array": false
        },
        {
            "sysName": "reason_vacancy",
            "name": "Причина появления вакансии",
            "dataType": "link",
            "id": "40401742846857454",
            "link": "ih_reason_of_vacancy",
            "group": "1742846050126",
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
            "linkOrArrayLinkType": true,
            "arrayLink": false,
            "indexExists": false,
            "linkType": true,
            "array": false
        },
        {
            "sysName": "cancel_reason",
            "name": "Укажите причину",
            "dataType": "string",
            "id": "33411742846820487",
            "link": "",
            "group": "1742846805849",
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
            "indexExists": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "cnb",
            "name": "CnB",
            "dataType": "link",
            "id": "33821743007872149",
            "link": "employees",
            "group": "1742846057420",
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
            "arrayLink": false,
            "indexExists": false,
            "linkType": true,
            "array": false
        },
        {
            "sysName": "analytics_ops",
            "name": "Категория персонала (Analytics for OPS)",
            "dataType": "link",
            "id": "41381743014388698",
            "link": "analytics_for_ops",
            "group": "1742846050126",
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
            "json": false,
            "linkOrArrayLinkType": true,
            "arrayLink": false,
            "indexExists": false,
            "linkType": true,
            "array": false
        },
        {
            "sysName": "budget_date",
            "name": "Бюджетная дата от C&B",
            "dataType": "date",
            "id": "83181743014316029",
            "link": "",
            "group": "1742846050126",
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
                "dateFormat": "DD.MM.YYYY",
                "timeFormat": "",
                "isUTC": "true"
            },
            "groupName": null,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "indexExists": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "intern_name",
            "name": "ФИО стажера",
            "dataType": "string",
            "id": "65151743015722173",
            "link": "",
            "group": "1742846050126",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "indexExists": false,
            "linkType": false,
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

let authExample = {
    "isAuth": true,
    "custom_labels": "",
    "role": "jo_hrbp,jo_agreement,jo_budget_holder,st_hrbp,st_budget_holder,hg_agreement,hg_hrbp,hg_budget_holder,sf_hrbp",
    "who_delegated_ids": "",
    "lastName": "Samsonova",
    "firstName": "Olga",
    "token": "4b692b4e-36dd-4e8d-990f-4f56d5e0a5b5",
    "whom_delegate_ids": "",
    "notifications_counter": "",
    "nid": 21335,
    "user": "olga.samsonova@lamoda.ru",
    "userpic": "https://api.directual.com/fileUploaded/basic-template/5fe98a71-196e-4f0d-98cb-be3ee8968fbf.jpg"
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
