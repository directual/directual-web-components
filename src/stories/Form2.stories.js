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

let exampleForm = {
    "sl": "staff_transfer",
    "pageSize": "10",
    "headerField": null,
    "params": {
        "steps": [
            {
                "id": "step_1726040058238",
                "sysName": "progress bar",
                "elements": [
                    {
                        "id": "elmnt_1726040074457",
                        "type": "text",
                        "paraText": "<style>.lmd-offer p {margin:10px 0}</style>\n<div classs=\"lmd\">\n<h2>Заявка {{number}}</h2>\n<p>Дата создания: {{date}}</p>\n<p>Статус заявки: {{status.status}}</p>\n<p>Кем создано: {{responsible_employee_id.employee_full_name}}</p>\n  <p>Ответственный за этап: {{responsible_employee_id.employee_full_name}}</p>\n<p>Дата последнего изменения:\n  {{last_change_date}}</p>\n</div>"
                    },
                    {
                        "id": "elmnt_1726040253875",
                        "type": "steps",
                        "_formSteps": {
                            "stepsOrder": [
                                "approval_current_direct",
                                "approval_out_hrbp",
                                "approval_in_hrbp"
                            ],
                            "settings": {
                                "steps": {
                                    "progress bar": false,
                                    "approval_current_up_direct": true,
                                    "approval_approval_current_direct": true,
                                    "approval_current_direct": true,
                                    "approval_out_hrbp": true,
                                    "approval_in_hrbp": true
                                }
                            },
                            "stepSettings": {
                                "approval_current_up_direct": {
                                    "title": "Согласование Верхнеуровневый руководитель"
                                },
                                "approval_current_direct": {
                                    "title": "Согласование Текущий руководитель"
                                },
                                "approval_out_hrbp": {
                                    "title": "Согласование Отдающий HRBP"
                                },
                                "approval_in_hrbp": {
                                    "title": "Cогласование Принимающий HRBP"
                                }
                            }
                        }
                    }
                ],
                "sectionVisibility": "always"
            },
            {
                "id": "default_step",
                "sysName": "approval_new_up_direct",
                "elements": [
                    {
                        "id": "elmnt_1726040565916",
                        "type": "text",
                        "paraText": "<b>Общие данные о переводе</b>"
                    },
                    {
                        "id": "elmnt_1726040568221",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406078490.022004404043104003301343",
                                "_field": "employee_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040626841",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040600291",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406498510.0031120303022104021434203",
                                "_field": "current_direct_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040663730",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040671676",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406741410.33113103323333123304412",
                                "_field": "planned_date",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040688242",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040697758",
                        "type": "text",
                        "paraText": "<b>Текущие данные по сотруднику</b>"
                    },
                    {
                        "id": "elmnt_1726040737501",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260407451930.14341411222424303134003",
                                "_field": "current_position",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040805444",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040738773",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260408195960.32041300442304243223301",
                                "_field": "current_division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040859585",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726640363502",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{current_org_structure}}"
                    },
                    {
                        "id": "elmnt_1726040868442",
                        "type": "text",
                        "paraText": "<b>Новые данные по сотруднику</b>"
                    },
                    {
                        "id": "elmnt_1726040900634",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260409027810.32012120130304431032131",
                                "_field": "new_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040915145",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040901379",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260409337130.34044234300421202120444",
                                "_field": "new_division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040946656",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726640395404",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{new_org_structure}}"
                    },
                    {
                        "id": "elmnt_1726040955528",
                        "type": "text",
                        "paraText": "<b>Согласующие лица</b>"
                    },
                    {
                        "id": "elmnt_1726040991914",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260410023030.32011020110233102444302",
                                "_field": "new_up_direct",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726041013530",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040992596",
                        "type": "input",
                        "_actions": [
                            {
                                "id": "17260410272230.11040442112144113000233"
                            }
                        ],
                        "_input_fields": [
                            {
                                "id": "17260410288100.03430142330212410110333",
                                "_field": "new_hrbp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726041053030",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_copy_1726044410314",
                "sysName": "approval_current_direct",
                "elements": [
                    {
                        "id": "elmnt_1726040565916",
                        "type": "text",
                        "paraText": "<b>Общие данные о переводе</b>"
                    },
                    {
                        "id": "elmnt_1726040568221",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406078490.022004404043104003301343",
                                "_field": "employee_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040626841",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040600291",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406498510.0031120303022104021434203",
                                "_field": "current_direct_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040663730",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040671676",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406741410.33113103323333123304412",
                                "_field": "planned_date",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040688242",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040697758",
                        "type": "text",
                        "paraText": "<b>Текущие данные по сотруднику</b>"
                    },
                    {
                        "id": "elmnt_1726040737501",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260407451930.14341411222424303134003",
                                "_field": "current_position",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040805444",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040738773",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260408195960.32041300442304243223301",
                                "_field": "current_division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040859585",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726640436186",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{current_org_structure}}"
                    },
                    {
                        "id": "elmnt_1726040868442",
                        "type": "text",
                        "paraText": "<b>Новые данные по сотруднику</b>"
                    },
                    {
                        "id": "elmnt_1726040900634",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260409027810.32012120130304431032131",
                                "_field": "new_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040915145",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040901379",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260409337130.34044234300421202120444",
                                "_field": "new_division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040946656",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726640428069",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{new_org_structure}}"
                    },
                    {
                        "id": "elmnt_1726040955528",
                        "type": "text",
                        "paraText": "<b>Согласующие лица</b>"
                    },
                    {
                        "id": "elmnt_1726040992596",
                        "type": "input",
                        "_actions": [
                            {
                                "id": "17260410272230.11040442112144113000233"
                            }
                        ],
                        "_input_fields": [
                            {
                                "id": "17260410288100.03430142330212410110333",
                                "_field": "current_hrbp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726041053030",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_agreement"
                                    }
                                ],
                                "_field_required": true
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_copy_1726139578959",
                "sysName": "approval_out_hrbp",
                "elements": [
                    {
                        "id": "elmnt_1726040565916",
                        "type": "text",
                        "paraText": "<b>Общие данные о переводе</b>"
                    },
                    {
                        "id": "elmnt_1726040568221",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406078490.022004404043104003301343",
                                "_field": "employee_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040626841",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040600291",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406498510.0031120303022104021434203",
                                "_field": "current_direct_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040663730",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040671676",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406741410.33113103323333123304412",
                                "_field": "planned_date",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040688242",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040697758",
                        "type": "text",
                        "paraText": "<b>Текущие данные по сотруднику</b>"
                    },
                    {
                        "id": "elmnt_1726139945744",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261399509360.23233222301113414324202",
                                "_field": "company",
                                "_field_required": true,
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_company",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140007449",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726640645042",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{current_hrbp.webuser_id.whom_delegate_ids}},{{current_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726139944505",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261400449420.24300030143243141031321",
                                "_field": "position_id",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140065875",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726641036065",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{current_hrbp.webuser_id.whom_delegate_ids}},{{current_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040737501",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260407451930.14341411222424303134003",
                                "_field": "current_position",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040805444",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040738773",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260408195960.32041300442304243223301",
                                "_field": "current_division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040859585",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726640522813",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{current_org_structure}}"
                    },
                    {
                        "id": "elmnt_1726644534728",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266445370370.42144130232143343031342",
                                "_field": "analytics_ops",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "analytics_for_ops",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726644557661",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726644559584",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{current_hrbp.webuser_id.whom_delegate_ids}},{{current_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040868442",
                        "type": "text",
                        "paraText": "<b>Новые данные по сотруднику</b>"
                    },
                    {
                        "id": "elmnt_1726040900634",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260409027810.32012120130304431032131",
                                "_field": "new_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040915145",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040901379",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260409337130.34044234300421202120444",
                                "_field": "new_division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040946656",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726656518310",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{new_org_structure}}"
                    },
                    {
                        "id": "elmnt_1726140215089",
                        "type": "text",
                        "paraText": "<b>Текущие условия компенсации</b>"
                    },
                    {
                        "id": "elmnt_1726140213974",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261406779720.42330342322444101241032",
                                "_field": "current_salary_with_rkisn",
                                "_field_required": true,
                                "_field_set_default": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140710257",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726641180269",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{current_hrbp.webuser_id.whom_delegate_ids}},{{current_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR",
                                "_field_add_description": true,
                                "_field_description_text": "например: 15000,55"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140214925",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261402466010.30202232231102313241314",
                                "_field": "period_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_bonus",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140556234",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726641119457",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{current_hrbp.webuser_id.whom_delegate_ids}},{{current_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140212896",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261407345820.40101131300413230120004",
                                "_field": "per_bonus",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140750266",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726641242534",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{current_hrbp.webuser_id.whom_delegate_ids}},{{current_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR",
                                "_field_add_description": true,
                                "_field_description_text": "например: 12(без процента)"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726140773505",
                                "_conditionalView_field": "period_bonus",
                                "_conditionalView_operator": "!==",
                                "_conditionalView_value": "without_bonus"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140820029",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261408219140.40311412313203400103412",
                                "_field": "current_total_salary",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140832626",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040955528",
                        "type": "text",
                        "paraText": "<b>Согласующие лица</b>"
                    },
                    {
                        "id": "elmnt_1726040992596",
                        "type": "input",
                        "_actions": [
                            {
                                "id": "17260410272230.11040442112144113000233"
                            }
                        ],
                        "_input_fields": [
                            {
                                "id": "17260410288100.03430142330212410110333",
                                "_field": "current_hrbp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726041053030",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726644782463",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{responsible_employee_id.webuser_id.whom_delegate_ids}},{{responsible_employee_id.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726644817335",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17266448219070.103213000213012203344341",
                                "_action": "action_1726644921945",
                                "_action_button_type": "accent",
                                "_action_icon": "gates",
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Новый ответственный назначен",
                                "_action_addTooltip": true,
                                "_action_addTooltip_text": "если согласование данной заявки не входит в твою зону ответственности, то проверь матрицу и переназначь",
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1726657419319",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726657530854",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{responsible_employee_id.webuser_id.whom_delegate_ids}},{{responsible_employee_id.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140860330",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261408902280.10320242310224014214242",
                                "_field": "new_up_direct",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140904060",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727073054838",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17270734429980.22034004303120041342314",
                                "_field": "add_approval_out",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "st_add_approval",
                                "_field_add_description": true,
                                "_field_description_text": "при необходимости укажите HR директора направления",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727073480782",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1727073521765",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{current_hrbp.webuser_id.whom_delegate_ids}},{{current_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140862257",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261410312950.3114013431030304013414",
                                "_field": "new_hrbp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726141048176",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726644691208",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{current_hrbp.webuser_id.whom_delegate_ids}},{{current_hrbp.webuser_id.id}} ",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726141098274",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261410998130.33241304321442303004334",
                                "_field": "current_cnb",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726141108328",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726644717344",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{current_hrbp.webuser_id.whom_delegate_ids}},{{current_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_copy_1727247879006",
                "sysName": "add_approval_out",
                "elements": [
                    {
                        "id": "elmnt_1726040565916",
                        "type": "text",
                        "paraText": "<b>Общие данные о переводе</b>"
                    },
                    {
                        "id": "elmnt_1726040568221",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406078490.022004404043104003301343",
                                "_field": "employee_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040626841",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040600291",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406498510.0031120303022104021434203",
                                "_field": "current_direct_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040663730",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040671676",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406741410.33113103323333123304412",
                                "_field": "planned_date",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040688242",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040697758",
                        "type": "text",
                        "paraText": "<b>Текущие данные по сотруднику</b>"
                    },
                    {
                        "id": "elmnt_1726139945744",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261399509360.23233222301113414324202",
                                "_field": "company",
                                "_field_required": true,
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_company",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140007449",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726640645042",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{current_hrbp.webuser_id.whom_delegate_ids}},{{current_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726139944505",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261400449420.24300030143243141031321",
                                "_field": "position_id",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140065875",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726641036065",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{current_hrbp.webuser_id.whom_delegate_ids}},{{current_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040737501",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260407451930.14341411222424303134003",
                                "_field": "current_position",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040805444",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040738773",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260408195960.32041300442304243223301",
                                "_field": "current_division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040859585",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726640522813",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{current_org_structure}}"
                    },
                    {
                        "id": "elmnt_1726644534728",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266445370370.42144130232143343031342",
                                "_field": "analytics_ops",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "analytics_for_ops",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726644557661",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726644559584",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{current_hrbp.webuser_id.whom_delegate_ids}},{{current_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040868442",
                        "type": "text",
                        "paraText": "<b>Новые данные по сотруднику</b>"
                    },
                    {
                        "id": "elmnt_1726040900634",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260409027810.32012120130304431032131",
                                "_field": "new_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040915145",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040901379",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260409337130.34044234300421202120444",
                                "_field": "new_division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040946656",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726656518310",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{new_org_structure}}"
                    },
                    {
                        "id": "elmnt_1726140215089",
                        "type": "text",
                        "paraText": "<b>Текущие условия компенсации</b>"
                    },
                    {
                        "id": "elmnt_1726140213974",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261406779720.42330342322444101241032",
                                "_field": "current_salary_with_rkisn",
                                "_field_required": true,
                                "_field_set_default": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140710257",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726641180269",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{current_hrbp.webuser_id.whom_delegate_ids}},{{current_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR",
                                "_field_add_description": true,
                                "_field_description_text": "например: 15000,55"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140214925",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261402466010.30202232231102313241314",
                                "_field": "period_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_bonus",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140556234",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726641119457",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{current_hrbp.webuser_id.whom_delegate_ids}},{{current_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140212896",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261407345820.40101131300413230120004",
                                "_field": "per_bonus",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140750266",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726641242534",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{current_hrbp.webuser_id.whom_delegate_ids}},{{current_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR",
                                "_field_add_description": true,
                                "_field_description_text": "например: 12(без процента)"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726140773505",
                                "_conditionalView_field": "period_bonus",
                                "_conditionalView_operator": "!==",
                                "_conditionalView_value": "without_bonus"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140820029",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261408219140.40311412313203400103412",
                                "_field": "current_total_salary",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140832626",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040955528",
                        "type": "text",
                        "paraText": "<b>Согласующие лица</b>"
                    },
                    {
                        "id": "elmnt_1726040992596",
                        "type": "input",
                        "_actions": [
                            {
                                "id": "17260410272230.11040442112144113000233"
                            }
                        ],
                        "_input_fields": [
                            {
                                "id": "17260410288100.03430142330212410110333",
                                "_field": "current_hrbp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726041053030",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726644782463",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{current_hrbp.webuser_id.whom_delegate_ids}},{{current_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140860330",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261408902280.10320242310224014214242",
                                "_field": "new_up_direct",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140904060",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727073054838",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17270734429980.22034004303120041342314",
                                "_field": "add_approval_out",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "st_add_approval",
                                "_field_add_description": true,
                                "_field_description_text": "при необходимости укажите HR директора направления",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727073480782",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1727073521765",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{current_hrbp.webuser_id.whom_delegate_ids}},{{current_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140862257",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261410312950.3114013431030304013414",
                                "_field": "new_hrbp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726141048176",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726644691208",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{current_hrbp.webuser_id.whom_delegate_ids}},{{current_hrbp.webuser_id.id}} ",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726141098274",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261410998130.33241304321442303004334",
                                "_field": "current_cnb",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726141108328",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726644717344",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{current_hrbp.webuser_id.whom_delegate_ids}},{{current_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_copy_1726141141964",
                "sysName": "approval_in_hrbp",
                "elements": [
                    {
                        "id": "elmnt_1726040565916",
                        "type": "text",
                        "paraText": "<b>Общие данные о переводе</b>"
                    },
                    {
                        "id": "elmnt_1726040568221",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406078490.022004404043104003301343",
                                "_field": "employee_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040626841",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040600291",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406498510.0031120303022104021434203",
                                "_field": "current_direct_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040663730",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727076167031",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17270761704420.33114433312300200003301",
                                "_field": "replacement_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_contract_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727076642972",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1727076660092",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726142004482",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261420434110.13004322440200241042301",
                                "_field": "contract_end_date",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726142051726",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726653159824",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726142064654",
                                "_conditionalView_field": "replacement_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726141860035",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261418619320.32104102311241004412023",
                                "_field": "replacement",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_replacement",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726141879349",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726652915206",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1727076775906",
                                "_conditionalView_field": "replacement_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726141899699",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261419056010.322444044324120121143",
                                "_field": "repl_empl_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726141918669",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726653042873",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726141934467",
                                "_conditionalView_field": "replacement_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            },
                            {
                                "id": "condition_1727076956615",
                                "_conditionalView_field": "replacement",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726141949681",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261419690950.13201232314202022420022",
                                "_field": "replacement_reason",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_reason_replacement",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726141982702",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726653134765",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1727077250091",
                                "_conditionalView_field": "replacement_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            },
                            {
                                "id": "condition_1727077286363",
                                "_conditionalView_field": "replacement",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040671676",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406741410.33113103323333123304412",
                                "_field": "planned_date",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040688242",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726657737333",
                        "type": "text",
                        "paraText": "<b>Текущие условия компенсации</b>"
                    },
                    {
                        "id": "elmnt_1726657851194",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266578632820.4140042211130340040021",
                                "_field": "current_salary_with_rkisn",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726657878677",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726657800903",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266578092710.22043144201123013341002",
                                "_field": "period_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726657835969",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726657892411",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266578966120.13210442142321200143212",
                                "_field": "per_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726657909622",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726657924639",
                                "_conditionalView_field": "period_bonus",
                                "_conditionalView_operator": "!==",
                                "_conditionalView_value": "without_bonus"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726657990084",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266579935840.41440211113441244442412",
                                "_field": "current_total_salary",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726658003373",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040868442",
                        "type": "text",
                        "paraText": "<b>Новые данные по сотруднику</b>"
                    },
                    {
                        "id": "elmnt_1726142468799",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261424711860.11121434314134431143214",
                                "_field": "new_company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_company",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726142486817",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726653227804",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726142502641",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261425103710.2444210030442211003404",
                                "_field": "new_position_id",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726142520500",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726653246215",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040900634",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260409027810.32012120130304431032131",
                                "_field": "new_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040915145",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726653405381",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040901379",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260409337130.34044234300421202120444",
                                "_field": "new_division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040946656",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726653451904",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726656554571",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{new_org_structure}}"
                    },
                    {
                        "id": "elmnt_1726142576051",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261425830980.2430302311234032401303",
                                "_field": "new_analytics_ops",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "analytics_for_ops",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726653481880",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1726653504455",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726142597414",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261425999980.44321143011342444144203",
                                "_field": "position_rate",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726653544400",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726653559786",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140215089",
                        "type": "text",
                        "paraText": "<b>Новые условия компенсации</b>"
                    },
                    {
                        "id": "elmnt_1726140213974",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261406779720.42330342322444101241032",
                                "_field": "new_salary_with_rkisn",
                                "_field_required": true,
                                "_field_set_default": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140710257",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726653700664",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140214925",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261402466010.30202232231102313241314",
                                "_field": "new_period_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_bonus",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140556234",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726653622652",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140212896",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261407345820.40101131300413230120004",
                                "_field": "new_per_bonus",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140750266",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726653726315",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726140773505",
                                "_conditionalView_field": "new_period_bonus",
                                "_conditionalView_operator": "!==",
                                "_conditionalView_value": "without_bonus"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140820029",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261408219140.40311412313203400103412",
                                "_field": "new_total_salary",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140832626",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727080245206",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17270802484350.3044211343433233403131",
                                "_field": "total_increase_per",
                                "_field_required": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727080448048",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726653828536",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266538324100.040330143130444410022043",
                                "_field": "orgdev",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726654753323",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726654771904",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726653830148",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266548212700.44030003421101403212023",
                                "_field": "comment_orgdev",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726654864268",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726654879052",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726654905598",
                                "_conditionalView_field": "orgdev",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040955528",
                        "type": "text",
                        "paraText": "<b>Согласующие лица</b>"
                    },
                    {
                        "id": "elmnt_1726040992596",
                        "type": "input",
                        "_actions": [
                            {
                                "id": "17260410272230.11040442112144113000233"
                            }
                        ],
                        "_input_fields": [
                            {
                                "id": "17260410288100.03430142330212410110333",
                                "_field": "current_hrbp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726041053030",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140860330",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261408902280.10320242310224014214242",
                                "_field": "new_up_direct",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140904060",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140862257",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261410312950.3114013431030304013414",
                                "_field": "new_hrbp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726141048176",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726655027154",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726655142061",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17266551453330.43201024012432131411122",
                                "_action": "action_1726644921945",
                                "_action_icon": "gates",
                                "_action_button_type": "accent",
                                "_action_oneTime": true,
                                "_action_addTooltip": true,
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1726655173683",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726655188819",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR",
                                "_action_addTooltip_text": "если согласование данной заявки не входит в твою зону ответственности, то проверь матрицу и переназначь",
                                "_action_oneTime_message": "Новый ответственный назначен"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727073683672",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17270736958190.141422310034030302413213",
                                "_field": "add_approval_in",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "st_add_approval",
                                "_field_add_description": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727073714259",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1727073729883",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{current_hrbp.webuser_id.whom_delegate_ids}},{{current_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR",
                                "_field_description_text": "при необходимости укажите HR директора направления"
                            }
                        ],
                        "_conditionalView": false
                    },
                    {
                        "id": "elmnt_1726655135493",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266553869780.32220144412201413030433",
                                "_field": "new_cnb",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726655403415",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726655423370",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726655450584",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266554599160.441441012004012300413",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726655468678",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726655485974",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR",
                                "_field": "hr_admin",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1727078458506",
                                "_conditionalView_field": "company",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "{{new_company}}"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_copy_1727247956508",
                "sysName": "add_approval_in",
                "elements": [
                    {
                        "id": "elmnt_1726040565916",
                        "type": "text",
                        "paraText": "<b>Общие данные о переводе</b>"
                    },
                    {
                        "id": "elmnt_1726040568221",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406078490.022004404043104003301343",
                                "_field": "employee_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040626841",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040600291",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406498510.0031120303022104021434203",
                                "_field": "current_direct_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040663730",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727076167031",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17270761704420.33114433312300200003301",
                                "_field": "replacement_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_contract_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727076642972",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1727076660092",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726142004482",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261420434110.13004322440200241042301",
                                "_field": "contract_end_date",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726142051726",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726653159824",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726142064654",
                                "_conditionalView_field": "replacement_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726141860035",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261418619320.32104102311241004412023",
                                "_field": "replacement",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_replacement",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726141879349",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726652915206",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1727076775906",
                                "_conditionalView_field": "replacement_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726141899699",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261419056010.322444044324120121143",
                                "_field": "repl_empl_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726141918669",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726653042873",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726141934467",
                                "_conditionalView_field": "replacement_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            },
                            {
                                "id": "condition_1727076956615",
                                "_conditionalView_field": "replacement",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726141949681",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261419690950.13201232314202022420022",
                                "_field": "replacement_reason",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_reason_replacement",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726141982702",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726653134765",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1727077250091",
                                "_conditionalView_field": "replacement_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            },
                            {
                                "id": "condition_1727077286363",
                                "_conditionalView_field": "replacement",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040671676",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406741410.33113103323333123304412",
                                "_field": "planned_date",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040688242",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726657737333",
                        "type": "text",
                        "paraText": "<b>Текущие условия компенсации</b>"
                    },
                    {
                        "id": "elmnt_1726657851194",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266578632820.4140042211130340040021",
                                "_field": "current_salary_with_rkisn",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726657878677",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726657800903",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266578092710.22043144201123013341002",
                                "_field": "period_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726657835969",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726657892411",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266578966120.13210442142321200143212",
                                "_field": "per_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726657909622",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726657924639",
                                "_conditionalView_field": "period_bonus",
                                "_conditionalView_operator": "!==",
                                "_conditionalView_value": "without_bonus"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726657990084",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266579935840.41440211113441244442412",
                                "_field": "current_total_salary",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726658003373",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040868442",
                        "type": "text",
                        "paraText": "<b>Новые данные по сотруднику</b>"
                    },
                    {
                        "id": "elmnt_1726142468799",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261424711860.11121434314134431143214",
                                "_field": "new_company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_company",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726142486817",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726653227804",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726142502641",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261425103710.2444210030442211003404",
                                "_field": "new_position_id",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726142520500",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726653246215",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040900634",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260409027810.32012120130304431032131",
                                "_field": "new_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040915145",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726653405381",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040901379",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260409337130.34044234300421202120444",
                                "_field": "new_division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040946656",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726653451904",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726656554571",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{new_org_structure}}"
                    },
                    {
                        "id": "elmnt_1726142576051",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261425830980.2430302311234032401303",
                                "_field": "new_analytics_ops",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "analytics_for_ops",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726653481880",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1726653504455",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726142597414",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261425999980.44321143011342444144203",
                                "_field": "position_rate",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726653544400",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726653559786",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140215089",
                        "type": "text",
                        "paraText": "<b>Новые условия компенсации</b>"
                    },
                    {
                        "id": "elmnt_1726140213974",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261406779720.42330342322444101241032",
                                "_field": "new_salary_with_rkisn",
                                "_field_required": true,
                                "_field_set_default": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140710257",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726653700664",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140214925",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261402466010.30202232231102313241314",
                                "_field": "new_period_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_bonus",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140556234",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726653622652",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140212896",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261407345820.40101131300413230120004",
                                "_field": "new_per_bonus",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140750266",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726653726315",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726140773505",
                                "_conditionalView_field": "new_period_bonus",
                                "_conditionalView_operator": "!==",
                                "_conditionalView_value": "without_bonus"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140820029",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261408219140.40311412313203400103412",
                                "_field": "new_total_salary",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140832626",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727080245206",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17270802484350.3044211343433233403131",
                                "_field": "total_increase_per",
                                "_field_required": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727080448048",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726653828536",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266538324100.040330143130444410022043",
                                "_field": "orgdev",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726654753323",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726654771904",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726653830148",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266548212700.44030003421101403212023",
                                "_field": "comment_orgdev",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726654864268",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726654879052",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726654905598",
                                "_conditionalView_field": "orgdev",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040955528",
                        "type": "text",
                        "paraText": "<b>Согласующие лица</b>"
                    },
                    {
                        "id": "elmnt_1726040992596",
                        "type": "input",
                        "_actions": [
                            {
                                "id": "17260410272230.11040442112144113000233"
                            }
                        ],
                        "_input_fields": [
                            {
                                "id": "17260410288100.03430142330212410110333",
                                "_field": "current_hrbp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726041053030",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140860330",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261408902280.10320242310224014214242",
                                "_field": "new_up_direct",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140904060",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140862257",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261410312950.3114013431030304013414",
                                "_field": "new_hrbp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726141048176",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726655027154",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727073683672",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17270736958190.141422310034030302413213",
                                "_field": "add_approval_in",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "st_add_approval",
                                "_field_add_description": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727073714259",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1727073729883",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{current_hrbp.webuser_id.whom_delegate_ids}},{{current_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR",
                                "_field_description_text": "при необходимости укажите HR директора направления"
                            }
                        ],
                        "_conditionalView": false
                    },
                    {
                        "id": "elmnt_1726655135493",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266553869780.32220144412201413030433",
                                "_field": "new_cnb",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726655403415",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726655423370",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726655450584",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266554599160.441441012004012300413",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726655468678",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1726655485974",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR",
                                "_field": "hr_admin",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1727078458506",
                                "_conditionalView_field": "company",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "{{new_company}}"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_copy_1726659365776",
                "sysName": "approval_in_cnb",
                "elements": [
                    {
                        "id": "elmnt_1726040565916",
                        "type": "text",
                        "paraText": "<b>Общие данные о переводе</b>"
                    },
                    {
                        "id": "elmnt_1726040568221",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406078490.022004404043104003301343",
                                "_field": "employee_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040626841",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040600291",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406498510.0031120303022104021434203",
                                "_field": "current_direct_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040663730",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727077389843",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17270773925180.40202343422002040421233",
                                "_field": "replacement_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_contract_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727077506045",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726142004482",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261420434110.13004322440200241042301",
                                "_field": "contract_end_date",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726142051726",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726142064654",
                                "_conditionalView_field": "replacement_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726141860035",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261418619320.32104102311241004412023",
                                "_field": "replacement",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_replacement",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726141879349",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1727077641456",
                                "_conditionalView_field": "replacement_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726141899699",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261419056010.322444044324120121143",
                                "_field": "repl_empl_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726141918669",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726141934467",
                                "_conditionalView_field": "replacement_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            },
                            {
                                "id": "condition_1727077724009",
                                "_conditionalView_field": "replacement",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726141949681",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261419690950.13201232314202022420022",
                                "_field": "replacement_reason",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_reason_replacement",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726141982702",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1727077779870",
                                "_conditionalView_field": "replacement_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            },
                            {
                                "id": "condition_1727077792686",
                                "_conditionalView_field": "replacement",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040671676",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406741410.33113103323333123304412",
                                "_field": "planned_date",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040688242",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726659453445",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266594589370.13403114441223331040333",
                                "_field": "budget_date",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726659473542",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_cnb"
                                    },
                                    {
                                        "id": "condition_1726659491240",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_cnb.webuser_id.whom_delegate_ids}},{{new_cnb.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726657737333",
                        "type": "text",
                        "paraText": "<b>Текущие условия компенсации</b>"
                    },
                    {
                        "id": "elmnt_1726657851194",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266578632820.4140042211130340040021",
                                "_field": "current_salary_with_rkisn",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726657878677",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726657800903",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266578092710.22043144201123013341002",
                                "_field": "period_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726657835969",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726657892411",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266578966120.13210442142321200143212",
                                "_field": "per_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726657909622",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726657924639",
                                "_conditionalView_field": "period_bonus",
                                "_conditionalView_operator": "!==",
                                "_conditionalView_value": "without_bonus"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726657990084",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266579935840.41440211113441244442412",
                                "_field": "current_total_salary",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726658003373",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726659541435",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266595443260.211103043033041202431102",
                                "_field": "current_cost_center",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726659557006",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_cnb"
                                    },
                                    {
                                        "id": "condition_1726659565808",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_cnb.webuser_id.whom_delegate_ids}},{{new_cnb.webuser_id.id}} ",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040868442",
                        "type": "text",
                        "paraText": "<b>Новые данные по сотруднику</b>"
                    },
                    {
                        "id": "elmnt_1726142468799",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261424711860.11121434314134431143214",
                                "_field": "new_company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_company",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726142486817",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726142502641",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261425103710.2444210030442211003404",
                                "_field": "new_position_id",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726142520500",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040900634",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260409027810.32012120130304431032131",
                                "_field": "new_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040915145",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040901379",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260409337130.34044234300421202120444",
                                "_field": "new_division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040946656",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726656554571",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{new_org_structure}}"
                    },
                    {
                        "id": "elmnt_1726142576051",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261425830980.2430302311234032401303",
                                "_field": "new_analytics_ops",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "analytics_for_ops",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726653481880",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726142597414",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261425999980.44321143011342444144203",
                                "_field": "position_rate",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726653544400",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140215089",
                        "type": "text",
                        "paraText": "<b>Новые условия компенсации</b>"
                    },
                    {
                        "id": "elmnt_1726140213974",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261406779720.42330342322444101241032",
                                "_field": "new_salary_with_rkisn",
                                "_field_required": true,
                                "_field_set_default": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140710257",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1727254619394",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}} ",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140214925",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261402466010.30202232231102313241314",
                                "_field": "new_period_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_bonus",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140556234",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1727254665270",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140212896",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261407345820.40101131300413230120004",
                                "_field": "new_per_bonus",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140750266",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hrbp"
                                    },
                                    {
                                        "id": "condition_1727254708041",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726140773505",
                                "_conditionalView_field": "new_period_bonus",
                                "_conditionalView_operator": "!==",
                                "_conditionalView_value": "without_bonus"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140820029",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261408219140.40311412313203400103412",
                                "_field": "new_total_salary",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140832626",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727081997236",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17270820003070.141220111021402011030022",
                                "_field": "total_increase_per",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727082014687",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726659887831",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266598910160.2233041024311232334113",
                                "_field": "new_cost_center",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726659906575",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_cnb"
                                    },
                                    {
                                        "id": "condition_1726659935351",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_cnb.webuser_id.whom_delegate_ids}},{{new_cnb.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040955528",
                        "type": "text",
                        "paraText": "<b>Согласующие лица</b>"
                    },
                    {
                        "id": "elmnt_1726659979440",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266599840650.30232000032244043444022",
                                "_field": "budget_holder",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726660019560",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_cnb"
                                    },
                                    {
                                        "id": "condition_1726660047914",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_cnb.webuser_id.whom_delegate_ids}},{{new_cnb.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727254843612",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17272548489260.22323403033433104013401",
                                "_field": "role_budget_holder",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727254865447",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_cnb"
                                    },
                                    {
                                        "id": "condition_1727254885394",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_cnb.webuser_id.whom_delegate_ids}},{{new_cnb.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1727254927294",
                                "_conditionalView_field": "budget_holder",
                                "_conditionalView_operator": "isNotNull"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040992596",
                        "type": "input",
                        "_actions": [
                            {
                                "id": "17260410272230.11040442112144113000233"
                            }
                        ],
                        "_input_fields": [
                            {
                                "id": "17260410288100.03430142330212410110333",
                                "_field": "current_hrbp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726041053030",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727254750669",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17272547538940.212024340433330430231142",
                                "_field": "add_approval_out",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_add_approval",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727254780374",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140860330",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261408902280.10320242310224014214242",
                                "_field": "new_up_direct",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140904060",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140862257",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261410312950.3114013431030304013414",
                                "_field": "new_hrbp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726141048176",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727254746624",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17272547936610.221301324434134412013243",
                                "_field": "add_approval_in",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_add_approval",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727254810641",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726655135493",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266553869780.32220144412201413030433",
                                "_field": "new_cnb",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726655403415",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_cnb"
                                    },
                                    {
                                        "id": "condition_1726655423370",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_cnb.webuser_id.whom_delegate_ids}},{{new_cnb.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726655142061",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17266551453330.43201024012432131411122",
                                "_action": "action_1726644921945",
                                "_action_icon": "gates",
                                "_action_button_type": "accent",
                                "_action_oneTime": true,
                                "_action_addTooltip": true,
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1726655173683",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_cnb"
                                    },
                                    {
                                        "id": "condition_1726655188819",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_cnb.webuser_id.whom_delegate_ids}},{{new_cnb.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR",
                                "_action_addTooltip_text": "если согласование данной заявки не входит в твою зону ответственности, то проверь матрицу и переназначь",
                                "_action_oneTime_message": "Новый ответственный назначен"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_copy_1726661496780",
                "sysName": "approval_in_budget_holder",
                "elements": [
                    {
                        "id": "elmnt_1726040868442",
                        "type": "text",
                        "paraText": "<b>Новые данные по сотруднику</b>"
                    },
                    {
                        "id": "elmnt_1726040568221",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406078490.022004404043104003301343",
                                "_field": "employee_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040626841",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726142468799",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261424711860.11121434314134431143214",
                                "_field": "new_company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_company",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726142486817",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040900634",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260409027810.32012120130304431032131",
                                "_field": "new_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040915145",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040901379",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260409337130.34044234300421202120444",
                                "_field": "new_division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040946656",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726656554571",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{new_org_structure}}"
                    },
                    {
                        "id": "elmnt_1726142597414",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261425999980.44321143011342444144203",
                                "_field": "position_rate",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726653544400",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140215089",
                        "type": "text",
                        "paraText": "<b>Новые условия компенсации</b>"
                    },
                    {
                        "id": "elmnt_1726140213974",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261406779720.42330342322444101241032",
                                "_field": "new_salary_with_rkisn",
                                "_field_required": true,
                                "_field_set_default": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140710257",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_cnb"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140214925",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261402466010.30202232231102313241314",
                                "_field": "new_period_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_bonus",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140556234",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_cnb"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140212896",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261407345820.40101131300413230120004",
                                "_field": "new_per_bonus",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140750266",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_cnb"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726140773505",
                                "_conditionalView_field": "new_period_bonus",
                                "_conditionalView_operator": "!==",
                                "_conditionalView_value": "without_bonus"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140820029",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261408219140.40311412313203400103412",
                                "_field": "new_total_salary",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140832626",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727082143457",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17270821463050.40222030313044002440223",
                                "_field": "total_increase_per",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727082158123",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726659887831",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266598910160.2233041024311232334113",
                                "_field": "new_cost_center",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726659906575",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_cnb"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040955528",
                        "type": "text",
                        "paraText": "<b>Согласующие лица</b>"
                    },
                    {
                        "id": "elmnt_1726659979440",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266599840650.30232000032244043444022",
                                "_field": "budget_holder",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726660019560",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_cnb"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040992596",
                        "type": "input",
                        "_actions": [
                            {
                                "id": "17260410272230.11040442112144113000233"
                            }
                        ],
                        "_input_fields": [
                            {
                                "id": "17260410288100.03430142330212410110333",
                                "_field": "current_hrbp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726041053030",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140860330",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261408902280.10320242310224014214242",
                                "_field": "new_up_direct",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140904060",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140862257",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261410312950.3114013431030304013414",
                                "_field": "new_hrbp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726141048176",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726655077435",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266550795720.4312212300234333303404",
                                "_field": "current_cnb",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726655122223",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140861241",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261409837140.40301202434322044434132",
                                "_field": "add_approval",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726141000525",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_field_add_description": true,
                                "_field_description_text": "если уровень позиции N-3 и выше, то добавь HRD направления",
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726655450584",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266554599160.441441012004012300413",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726655468678",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR",
                                "_field": "hr_admin",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726655135493",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266553869780.32220144412201413030433",
                                "_field": "new_cnb",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726655403415",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_cnb"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_1726662457325",
                "sysName": "present_offer",
                "elements": [
                    {
                        "id": "elmnt_1726662689839",
                        "type": "text",
                        "paraText": "<b>Новые данные по сотруднику</b>"
                    },
                    {
                        "id": "elmnt_1726662512795",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266625220460.102132313322242124020222",
                                "_field": "employee_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726662533326",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727084568686",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17270845714100.021111043242040314130423",
                                "_field": "new_company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_company",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727084610614",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726662693192",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266627048030.113004132223143411144033",
                                "_field": "new_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726662724992",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726662733762",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266627373370.141402213122344010220302",
                                "_field": "new_division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726662751660",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726662734569",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{new_org_structure}}"
                    },
                    {
                        "id": "elmnt_1727084655532",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17270846604970.2320412112144330422224",
                                "_field": "position_rate",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727084670210",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727082328653",
                        "type": "text",
                        "paraText": "<b>Новые условия компенсации</b>"
                    },
                    {
                        "id": "elmnt_1727084786256",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17270848308020.44142443433210303112104",
                                "_field": "new_salary_with_rkisn",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727084843715",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727084784789",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17270847896350.43144222233032401101102",
                                "_field": "new_period_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727084810205",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727084855555",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17270848589530.30221242310233314423422",
                                "_field": "new_per_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727084880670",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1727084943618",
                                "_conditionalView_field": "new_period_bonus",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "without_bonus"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727084787532",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17270849012640.010312234014100312043224",
                                "_field": "new_total_salary",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727084913576",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727082330109",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17270823532300.134201202013241424224122",
                                "_field": "total_increase_per",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727082362493",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727084750784",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17270847530220.0101431012201014134311213",
                                "_field": "budget_date",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727084765904",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726662514435",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266625851430.422431003421110423144",
                                "_field": "planned_date",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726662591073",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_agreement"
                                    },
                                    {
                                        "id": "condition_1727079788247",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{user_creator.webuser_id.whom_delegate_ids}},{{user_creator.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_copy_1726662412237",
                "sysName": "approval_orgdev",
                "elements": [
                    {
                        "id": "elmnt_1726040565916",
                        "type": "text",
                        "paraText": "<b>Общие данные о переводе</b>"
                    },
                    {
                        "id": "elmnt_1726040568221",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406078490.022004404043104003301343",
                                "_field": "employee_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040626841",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040600291",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406498510.0031120303022104021434203",
                                "_field": "current_direct_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040663730",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726663648050",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266636511900.14204324012210312013224",
                                "_field": "budget_date",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726663674051",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727085020265",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17270850231970.022334104402411232233432",
                                "_field": "planned_date",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727085037178",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726663726125",
                        "type": "text",
                        "paraText": "<b>Текущие данные по сотруднику</b>"
                    },
                    {
                        "id": "elmnt_1726663727782",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266637924040.004142430220042130120321",
                                "_field": "company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_company",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726663815296",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726663729315",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266638372570.142234220030211203110343",
                                "_field": "position_id",
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1726663860678",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726663874800",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266638828570.32222014423013421303343",
                                "_field": "current_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726663899281",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726663876468",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266639184430.31440310411313303311104",
                                "_field": "current_division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726663950011",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726663916182",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266639683630.24100420123400114402044",
                                "_field": "analytics_ops",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "analytics_for_ops",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726663996794",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040868442",
                        "type": "text",
                        "paraText": "<b>Новые данные по сотруднику</b>"
                    },
                    {
                        "id": "elmnt_1726142468799",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261424711860.11121434314134431143214",
                                "_field": "new_company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_company",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726142486817",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726142502641",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261425103710.2444210030442211003404",
                                "_field": "new_position_id",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726142520500",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040900634",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260409027810.32012120130304431032131",
                                "_field": "new_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040915145",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040901379",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260409337130.34044234300421202120444",
                                "_field": "new_division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040946656",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726656554571",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{new_org_structure}}"
                    },
                    {
                        "id": "elmnt_1726142576051",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261425830980.2430302311234032401303",
                                "_field": "new_analytics_ops",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "analytics_for_ops",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726653481880",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726142597414",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261425999980.44321143011342444144203",
                                "_field": "position_rate",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726653544400",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726657737333",
                        "type": "text",
                        "paraText": "<b>Текущие условия компенсации</b>"
                    },
                    {
                        "id": "elmnt_1726657851194",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266578632820.4140042211130340040021",
                                "_field": "current_salary_with_rkisn",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726657878677",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726657800903",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266578092710.22043144201123013341002",
                                "_field": "period_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726657835969",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726657892411",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266578966120.13210442142321200143212",
                                "_field": "per_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726657909622",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726657924639",
                                "_conditionalView_field": "period_bonus",
                                "_conditionalView_operator": "!==",
                                "_conditionalView_value": "without_bonus"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726657990084",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266579935840.41440211113441244442412",
                                "_field": "current_total_salary",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726658003373",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140215089",
                        "type": "text",
                        "paraText": "<b>Новые условия компенсации</b>"
                    },
                    {
                        "id": "elmnt_1726140213974",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261406779720.42330342322444101241032",
                                "_field": "new_salary_with_rkisn",
                                "_field_required": true,
                                "_field_set_default": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140710257",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_cnb"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140214925",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261402466010.30202232231102313241314",
                                "_field": "new_period_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_bonus",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140556234",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_cnb"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140212896",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261407345820.40101131300413230120004",
                                "_field": "new_per_bonus",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140750266",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_cnb"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726140773505",
                                "_conditionalView_field": "new_period_bonus",
                                "_conditionalView_operator": "!==",
                                "_conditionalView_value": "without_bonus"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140820029",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261408219140.40311412313203400103412",
                                "_field": "new_total_salary",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140832626",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040955528",
                        "type": "text",
                        "paraText": "<b>Согласующие лица</b>"
                    },
                    {
                        "id": "elmnt_1726659979440",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266599840650.30232000032244043444022",
                                "_field": "budget_holder",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726660019560",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_cnb"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040992596",
                        "type": "input",
                        "_actions": [
                            {
                                "id": "17260410272230.11040442112144113000233"
                            }
                        ],
                        "_input_fields": [
                            {
                                "id": "17260410288100.03430142330212410110333",
                                "_field": "current_hrbp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726041053030",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140860330",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261408902280.10320242310224014214242",
                                "_field": "new_up_direct",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726140904060",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140862257",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261410312950.3114013431030304013414",
                                "_field": "new_hrbp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726141048176",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726655077435",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266550795720.4312212300234333303404",
                                "_field": "current_cnb",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726655122223",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726140861241",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261409837140.40301202434322044434132",
                                "_field": "add_approval",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726141000525",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_field_add_description": true,
                                "_field_description_text": "если уровень позиции N-3 и выше, то добавь HRD направления",
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726655450584",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266554599160.441441012004012300413",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726655468678",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR",
                                "_field": "hr_admin",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726655135493",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266553869780.32220144412201413030433",
                                "_field": "new_cnb",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726655403415",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_cnb"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_copy_1727077867108",
                "sysName": "approval_hr_admin",
                "elements": [
                    {
                        "id": "elmnt_1726040565916",
                        "type": "text",
                        "paraText": "<b>Общие данные о переводе</b>"
                    },
                    {
                        "id": "elmnt_1726040568221",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406078490.022004404043104003301343",
                                "_field": "employee_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040626841",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726663648050",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266636511900.14204324012210312013224",
                                "_field": "budget_date",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726663674051",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727077943976",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17270779806090.214133022300040311333123",
                                "_field": "replacement_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_contract_type",
                                "_field_required": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727078000414",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727077945596",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17270780178850.42413341234012230312303",
                                "_field": "contract_end_date",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727078034419",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1727078044191",
                                "_conditionalView_field": "replacement_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727077946947",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17270780741960.11233223331100244220441",
                                "_field": "replacement",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727078096421",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1727078107580",
                                "_conditionalView_field": "replacement_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727077949065",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17270781231670.10104230324424420410443",
                                "_field": "repl_empl_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727078156205",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1727078170069",
                                "_conditionalView_field": "replacement_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            },
                            {
                                "id": "condition_1727078180356",
                                "_conditionalView_field": "replacement",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727077950513",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17270782177880.0100011213444320000100433",
                                "_field": "replacement_reason",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_reason_replacement",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727078230516",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1727078239435",
                                "_conditionalView_field": "replacement_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            },
                            {
                                "id": "condition_1727078253207",
                                "_conditionalView_field": "replacement",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726663726125",
                        "type": "text",
                        "paraText": "<b>Текущие данные по сотруднику</b>"
                    },
                    {
                        "id": "elmnt_1726663727782",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266637924040.004142430220042130120321",
                                "_field": "company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_company",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726663815296",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726663729315",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266638372570.142234220030211203110343",
                                "_field": "position_id",
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1726663860678",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726663874800",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266638828570.32222014423013421303343",
                                "_field": "current_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726663899281",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726663876468",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266639184430.31440310411313303311104",
                                "_field": "current_division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726663950011",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726663916182",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266639683630.24100420123400114402044",
                                "_field": "analytics_ops",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "analytics_for_ops",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726663996794",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040868442",
                        "type": "text",
                        "paraText": "<b>Новые данные по сотруднику</b>"
                    },
                    {
                        "id": "elmnt_1726142468799",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261424711860.11121434314134431143214",
                                "_field": "new_company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_company",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726142486817",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726142502641",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261425103710.2444210030442211003404",
                                "_field": "new_position_id",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726142520500",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040900634",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260409027810.32012120130304431032131",
                                "_field": "new_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040915145",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040901379",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260409337130.34044234300421202120444",
                                "_field": "new_division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040946656",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726656554571",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{new_org_structure}}"
                    },
                    {
                        "id": "elmnt_1726142576051",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261425830980.2430302311234032401303",
                                "_field": "new_analytics_ops",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "analytics_for_ops",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726653481880",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726142597414",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261425999980.44321143011342444144203",
                                "_field": "position_rate",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726653544400",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727078803750",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17270788062130.0104422220143432020422144",
                                "_field": "actual_date",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1727078847478",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "st_hr_admin"
                                    },
                                    {
                                        "id": "condition_1727079053382",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_admin.webuser_id.whom_delegate_ids}},{{hr_admin.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_copy_1726664382171",
                "sysName": "closed",
                "elements": [
                    {
                        "id": "elmnt_1726040565916",
                        "type": "text",
                        "paraText": "<b>Общие данные о переводе</b>"
                    },
                    {
                        "id": "elmnt_1726040568221",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406078490.022004404043104003301343",
                                "_field": "employee_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040626841",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040600291",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406498510.0031120303022104021434203",
                                "_field": "current_direct_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040663730",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726663648050",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266636511900.14204324012210312013224",
                                "_field": "budget_date",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726663674051",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726663726125",
                        "type": "text",
                        "paraText": "<b>Текущие данные по сотруднику</b>"
                    },
                    {
                        "id": "elmnt_1726663727782",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266637924040.004142430220042130120321",
                                "_field": "company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_company",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726663815296",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726663729315",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266638372570.142234220030211203110343",
                                "_field": "position_id",
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1726663860678",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726663874800",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266638828570.32222014423013421303343",
                                "_field": "current_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726663899281",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726663876468",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266639184430.31440310411313303311104",
                                "_field": "current_division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726663950011",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726663916182",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266639683630.24100420123400114402044",
                                "_field": "analytics_ops",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "analytics_for_ops",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726663996794",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040868442",
                        "type": "text",
                        "paraText": "<b>Новые данные по сотруднику</b>"
                    },
                    {
                        "id": "elmnt_1726142468799",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261424711860.11121434314134431143214",
                                "_field": "new_company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_company",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726142486817",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726142502641",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261425103710.2444210030442211003404",
                                "_field": "new_position_id",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726142520500",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040900634",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260409027810.32012120130304431032131",
                                "_field": "new_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040915145",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040901379",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260409337130.34044234300421202120444",
                                "_field": "new_division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040946656",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726656554571",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{new_org_structure}}"
                    },
                    {
                        "id": "elmnt_1726142576051",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261425830980.2430302311234032401303",
                                "_field": "new_analytics_ops",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "analytics_for_ops",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726653481880",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726142597414",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261425999980.44321143011342444144203",
                                "_field": "position_rate",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726653544400",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_copy_1726667578333",
                "sysName": "offer_refused",
                "elements": [
                    {
                        "id": "elmnt_1726040565916",
                        "type": "text",
                        "paraText": "<b>Общие данные о переводе</b>"
                    },
                    {
                        "id": "elmnt_1726040568221",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406078490.022004404043104003301343",
                                "_field": "employee_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040626841",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040600291",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260406498510.0031120303022104021434203",
                                "_field": "current_direct_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040663730",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726663648050",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266636511900.14204324012210312013224",
                                "_field": "budget_date",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726663674051",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726663726125",
                        "type": "text",
                        "paraText": "<b>Текущие данные по сотруднику</b>"
                    },
                    {
                        "id": "elmnt_1726663727782",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266637924040.004142430220042130120321",
                                "_field": "company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_company",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726663815296",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726663729315",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266638372570.142234220030211203110343",
                                "_field": "position_id",
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1726663860678",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726663874800",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266638828570.32222014423013421303343",
                                "_field": "current_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726663899281",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726663876468",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266639184430.31440310411313303311104",
                                "_field": "current_division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726663950011",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726663916182",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17266639683630.24100420123400114402044",
                                "_field": "analytics_ops",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "analytics_for_ops",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726663996794",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040868442",
                        "type": "text",
                        "paraText": "<b>Новые данные по сотруднику</b>"
                    },
                    {
                        "id": "elmnt_1726142468799",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261424711860.11121434314134431143214",
                                "_field": "new_company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "st_company",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726142486817",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726142502641",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261425103710.2444210030442211003404",
                                "_field": "new_position_id",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726142520500",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040900634",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260409027810.32012120130304431032131",
                                "_field": "new_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040915145",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726040901379",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17260409337130.34044234300421202120444",
                                "_field": "new_division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726040946656",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726656554571",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{new_org_structure}}"
                    },
                    {
                        "id": "elmnt_1726142576051",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261425830980.2430302311234032401303",
                                "_field": "new_analytics_ops",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "analytics_for_ops",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726653481880",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726142597414",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17261425999980.44321143011342444144203",
                                "_field": "position_rate",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1726653544400",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "st_hrbp"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
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
            },
            {
                "id": "step_1726041074359",
                "sysName": "actions",
                "elements": [
                    {
                        "id": "elmnt_1726137156777",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17261371587930.31314401423210214340344",
                                "_action": "action_1726041082861",
                                "_action_label": "Согласовать",
                                "_action_icon": "done",
                                "_action_button_type": "accent",
                                "_action_standardRequired": true,
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1726137203178",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_up_direct.webuser_id.whom_delegate_ids}},{{new_up_direct.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Заявка согласована"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726137276907",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "approval_new_up_direct"
                            },
                            {
                                "id": "condition_1726137300809",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "st_agreement"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726137344095",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17261373469320.014330103421103232201232",
                                "_action": "action_1726137094698",
                                "_action_label": "Согласовать",
                                "_action_icon": "done",
                                "_action_button_type": "accent",
                                "_action_standardRequired": true,
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1726137365646",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{current_direct_name.webuser_id.whom_delegate_ids}},{{current_direct_name.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726137425884",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "approval_current_direct"
                            },
                            {
                                "id": "condition_1726137444610",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "st_agreement"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726645167107",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17266451699890.30032211302334310310204",
                                "_action": "action_1726644837987",
                                "_action_label": "Согласовать",
                                "_action_icon": "done",
                                "_action_button_type": "accent",
                                "_action_oneTime": false,
                                "_action_standardRequired": true,
                                "_action_oneTime_message": "Заявка согласована",
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1726645223467",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{current_hrbp.webuser_id.whom_delegate_ids}},{{current_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726645317729",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "approval_out_hrbp"
                            },
                            {
                                "id": "condition_1726645354520",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "st_hrbp"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726658900809",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17266589248660.42242044302224324201312",
                                "_action": "action_1726658446511",
                                "_action_label": "Согласовать",
                                "_action_icon": "done",
                                "_action_button_type": "accent",
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Заявка согласована",
                                "_action_customRequired": false,
                                "_action_standardRequired": true,
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1726658982986",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{add_approval_out.webuser_id.whom_delegate_ids}},{{add_approval_out.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726659069009",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "add_approval_out"
                            },
                            {
                                "id": "condition_1726659093774",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "st_hrbp"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726646315160",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17266463175290.41102103201411213324432",
                                "_action": "action_1726646254631",
                                "_action_label": "Cогласовать",
                                "_action_icon": "done",
                                "_action_button_type": "accent",
                                "_action_standardRequired": true,
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1726646339129",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_hrbp.webuser_id.whom_delegate_ids}},{{new_hrbp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726646380877",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "approval_in_hrbp"
                            },
                            {
                                "id": "condition_1726646389575",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "st_hrbp"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727087091289",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17270870935580.4424023130320324000422",
                                "_action": "action_1727086634714",
                                "_action_label": "Согласовать",
                                "_action_icon": "done",
                                "_action_button_type": "accent",
                                "_action_standardRequired": true,
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Cогласовано",
                                "_conditionalView": true,
                                "_action_conditional_disable_or_hide": "hide",
                                "_conditions": [
                                    {
                                        "id": "condition_1727087131071",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{add_approval_in.webuser_id.whom_delegate_ids}},{{add_approval_in.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1727087185371",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "add_approval_in"
                            },
                            {
                                "id": "condition_1727087208714",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "st_hrbp"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726659130940",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17266591336680.11144114120413203322423",
                                "_action": "action_1726658528448",
                                "_action_label": "Согласовать",
                                "_action_icon": "done",
                                "_action_button_type": "accent",
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Заявка согласована",
                                "_action_standardRequired": true,
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1726659169276",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{new_cnb.webuser_id.whom_delegate_ids}},{{new_cnb.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726659217679",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "approval_in_cnb"
                            },
                            {
                                "id": "condition_1726659246522",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "st_cnb"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726661938039",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17266619410020.203102432011401141342133",
                                "_action": "action_1726662071610",
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
                                        "id": "condition_1726662238749",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{budget_holder.webuser_id.whom_delegate_ids}},{{budget_holder.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726662262429",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "approval_in_budget_holder"
                            },
                            {
                                "id": "condition_1726662264211",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "st_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726663321236",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17266633258410.40002013322041230100332",
                                "_action": "action_1726662874174",
                                "_action_icon": "done",
                                "_action_button_type": "accent",
                                "_action_oneTime": true,
                                "_action_standardRequired": true,
                                "_conditionalView": true,
                                "_action_conditional_disable_or_hide": "hide",
                                "_conditions": [
                                    {
                                        "id": "condition_1726663375599",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{user_creator.webuser_id.whom_delegate_ids}},{{user_creator.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_oneTime_message": "Решение подтверждено"
                            },
                            {
                                "id": "17266633277020.43143400242022141203112",
                                "_action": "action_1726663082108",
                                "_action_icon": "ban",
                                "_action_button_type": "danger",
                                "_conditionalView": true,
                                "_action_conditional_disable_or_hide": "hide",
                                "_conditions": [
                                    {
                                        "id": "condition_1726663433501",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{user_creator.webuser_id.whom_delegate_ids}},{{user_creator.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_oneTime": true,
                                "_action_standardRequired": true,
                                "_action_oneTime_message": "Решение подтверждено"
                            }
                        ],
                        "_actions_in_a_row": 2,
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726663461244",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "present_offer"
                            },
                            {
                                "id": "condition_1726663462456",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "st_agreement"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1726667423189",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17266674272880.430040012302421323422",
                                "_action": "action_1726667009439",
                                "_action_label": "Данные обновлены",
                                "_action_icon": "refresh",
                                "_action_button_type": "accent",
                                "_conditionalView": false,
                                "_action_standardRequired": true
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1726667473658",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "st_orgdev"
                            },
                            {
                                "id": "condition_1726667499985",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "approval_orgdev"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1727079158114",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17270793929640.12132444414431412034033",
                                "_action": "action_1727079172257",
                                "_action_label": "Подтвердить",
                                "_action_icon": "done",
                                "_action_button_type": "accent",
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Подтверждено",
                                "_action_standardRequired": true,
                                "_conditionalView": true,
                                "_action_conditional_disable_or_hide": "hide",
                                "_conditions": [
                                    {
                                        "id": "condition_1727079496236",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_admin.webuser_id.whom_delegate_ids}},{{hr_admin.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1727079556564",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "approval_hr_admin"
                            },
                            {
                                "id": "condition_1727079612352",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "st_hr_admin"
                            }
                        ]
                    }
                ],
                "sectionVisibility": "always"
            }
        ],
        "actions": [
            {
                "id": "action_1726041082861",
                "name": "Согласовать approval_new_up_direct",
                "actionSubmit": true,
                "actionType": "endpoint",
                "endpoint": "st_create_action",
                "mapping": [
                    {
                        "id": "mapping_1726041295129",
                        "field": "action",
                        "value": "change_status"
                    },
                    {
                        "id": "mapping_1726137059587",
                        "field": "pay_load",
                        "value": "approval_current_direct"
                    }
                ]
            },
            {
                "id": "action_1726137094698",
                "name": "Согласовать approval_current_direct",
                "actionType": "endpoint",
                "endpoint": "st_create_action",
                "mapping": [
                    {
                        "id": "mapping_1726137122243",
                        "field": "action",
                        "value": "change_status"
                    },
                    {
                        "id": "mapping_1726137123095",
                        "field": "pay_load",
                        "value": "approval_out_hrbp"
                    }
                ],
                "actionSubmit": true
            },
            {
                "id": "action_1726644837987",
                "name": "Согласовать approval_out_hrbp",
                "actionSubmit": true,
                "actionType": "endpoint",
                "endpoint": "st_create_action",
                "mapping": [
                    {
                        "id": "mapping_1726644881337",
                        "field": "action",
                        "value": "add_approval"
                    }
                ]
            },
            {
                "id": "action_1726644921945",
                "name": "Переназначить",
                "actionType": "endpoint",
                "endpoint": "st_create_action",
                "mapping": [
                    {
                        "id": "mapping_1726644990212",
                        "field": "action",
                        "value": "new_responsible"
                    }
                ],
                "actionSubmit": true
            },
            {
                "id": "action_1726646254631",
                "name": "Согласовать approval_in_hrbp",
                "actionType": "endpoint",
                "endpoint": "st_create_action",
                "mapping": [
                    {
                        "id": "mapping_1726646278343",
                        "field": "action",
                        "value": "add_approval"
                    }
                ],
                "actionSubmit": true
            },
            {
                "id": "action_1726658446511",
                "name": "Согласовать add_approval_out",
                "actionType": "endpoint",
                "endpoint": "st_create_action",
                "mapping": [
                    {
                        "id": "mapping_1726658458905",
                        "field": "action",
                        "value": "change_status"
                    },
                    {
                        "id": "mapping_1726658459801",
                        "field": "pay_load",
                        "value": "approval_in_hrbp"
                    }
                ],
                "actionSubmit": true
            },
            {
                "id": "action_1726658528448",
                "name": "Cогласовать approval_in_cnb",
                "actionSubmit": true,
                "actionType": "endpoint",
                "endpoint": "st_create_action",
                "mapping": [
                    {
                        "id": "mapping_1726658548206",
                        "field": "action",
                        "value": "budget_holder"
                    }
                ]
            },
            {
                "id": "action_1726662071610",
                "name": "Согласовать approval_in_budget_holder",
                "actionType": "endpoint",
                "endpoint": "st_create_action",
                "mapping": [
                    {
                        "id": "mapping_1726662124946",
                        "field": "action",
                        "value": "change_status"
                    },
                    {
                        "id": "mapping_1726662126555",
                        "field": "pay_load",
                        "value": "present_offer"
                    }
                ],
                "actionSubmit": true
            },
            {
                "id": "action_1726662874174",
                "name": "Сотрудник принял оффер",
                "actionType": "endpoint",
                "endpoint": "st_create_action",
                "mapping": [
                    {
                        "id": "mapping_1726662896012",
                        "field": "action",
                        "value": "orgdev"
                    }
                ],
                "actionSubmit": true
            },
            {
                "id": "action_1726663082108",
                "name": "Сотрудник отклонил оффер",
                "actionSubmit": true,
                "actionType": "endpoint",
                "endpoint": "st_create_action",
                "mapping": [
                    {
                        "id": "mapping_1726663109951",
                        "field": "action",
                        "value": "refused"
                    }
                ]
            },
            {
                "id": "action_1726667009439",
                "name": "Подтвердить orgdev",
                "actionSubmit": true,
                "actionType": "endpoint",
                "endpoint": "st_create_action",
                "mapping": [
                    {
                        "id": "mapping_1726667053656",
                        "field": "action",
                        "value": "hr_admin"
                    }
                ]
            },
            {
                "id": "action_1727079172257",
                "name": "Подтвердить hr admin",
                "actionType": "endpoint",
                "actionSubmit": true,
                "endpoint": "st_create_action",
                "mapping": [
                    {
                        "id": "mapping_1727079249704",
                        "field": "action",
                        "value": "change_status"
                    },
                    {
                        "id": "mapping_1727079254374",
                        "field": "pay_load",
                        "value": "closed"
                    }
                ]
            },
            {
                "id": "action_1727086634714",
                "name": "Согласовать add_approval_in",
                "actionType": "endpoint",
                "endpoint": "st_create_action",
                "mapping": [
                    {
                        "id": "mapping_1727086653556",
                        "field": "action",
                        "value": "add_approval"
                    }
                ],
                "actionSubmit": true
            }
        ],
        "general": {
            "edittingOn": true,
            "saveState": false,
            "autosubmit": "model",
            "autosubmit_model": [
                "per_bonus",
                "current_salary_with_rkisn",
                "new_per_bonus",
                "new_salary_with_rkisn",
                "current_total_salary",
                "new_total_salary"
            ],
            "showFullModel": true,
            "showAuthModel": false
        },
        "state": {
            "step": "{{status}}",
            "popup": null,
            "prevStep": "",
            "errorMessage": "",
            "reason": "",
            "cancelling": "false",
            "next": "false",
            "refuse": "false"
        }
    },
    "tableTitle": null,
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
            "array": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "new_hrbp",
            "dataType": "link",
            "name": "Новый HR BP",
            "id": "69701725431725005",
            "link": "employees",
            "group": "1725431710596",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "current_up_direct",
            "dataType": "link",
            "name": "Текущий верхнеуровневый руководитель (руководитель нанимающего менеджера) для Non-TECH / Директор департамента для TECH",
            "id": "43321725431723921",
            "link": "employees",
            "group": "1725431710596",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "new_division",
            "dataType": "link",
            "name": "Новое подразделение сотрудника",
            "id": "47731725431619206",
            "link": "structure",
            "group": "1725431600480",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "new_position",
            "dataType": "link",
            "name": "Новая должность сотрудника",
            "id": "46231725431618308",
            "link": "employees",
            "group": "1725431600480",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "current_division",
            "dataType": "link",
            "name": "Текущее подразделение сотрудника",
            "id": "75661725431461525",
            "link": "structure",
            "group": "1725431445711",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "current_position",
            "dataType": "string",
            "name": "Текущая должность сотрудника",
            "id": "18221725431460573",
            "link": "",
            "group": "1725431445711",
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "planned_date",
            "dataType": "date",
            "name": "Планируемая дата перевода",
            "id": "30281725431329024",
            "link": "",
            "group": "1725431234450",
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
                "timeFormat": "",
                "isUTC": "false"
            },
            "groupName": null,
            "array": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "current_direct_name",
            "dataType": "link",
            "name": "ФИО текущего руководителя ",
            "id": "22651725431263787",
            "link": "employees",
            "group": "1725431234450",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "employee_name",
            "dataType": "link",
            "name": "ФИО сотрудника",
            "id": "74491725431250990",
            "link": "employees",
            "group": "1725431234450",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "last_change_date",
            "dataType": "date",
            "name": "Дата последнего изменения",
            "id": "73651725433775126",
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
            "array": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "all_user_ids",
            "dataType": "arrayLink",
            "name": "Все пользователи, относящиеся к заявке",
            "id": "29371725433750833",
            "link": "employees",
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
            "formatOptions": {},
            "groupName": null,
            "array": false,
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": false,
            "arrayLink": true,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "responsible_roles",
            "dataType": "arrayLink",
            "name": "Ответственные роли",
            "id": "55271725433718683",
            "link": "roles",
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
            "array": false,
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": false,
            "arrayLink": true,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "responsible_employee_id",
            "dataType": "link",
            "name": "Ответственный за текущий этап",
            "id": "77841725433699314",
            "link": "employees",
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
            "array": false,
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "date_text",
            "dataType": "string",
            "name": "Дата",
            "id": "82361725433675003",
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "date",
            "dataType": "date",
            "name": "Дата создания заявки",
            "id": "96891725433646615",
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
            "array": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "number",
            "dataType": "string",
            "name": "Номер заявки",
            "id": "29661725433629762",
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
            "array": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "logs",
            "dataType": "arrayLink",
            "name": "История изменений",
            "id": "30101725433610853",
            "link": "st_logs",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": false,
            "arrayLink": true,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "user_creator",
            "dataType": "link",
            "name": "Кто создал заявку",
            "id": "24901725433580444",
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
            "array": false,
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "last_user",
            "dataType": "link",
            "name": "Кем изменено",
            "id": "85461725433561607",
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
            "array": false,
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "prev_status",
            "dataType": "link",
            "name": "Предыдущий статус",
            "id": "94001725433553894",
            "link": "st_statuses",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "status",
            "dataType": "link",
            "name": "Статус",
            "id": "53231725433518277",
            "link": "st_statuses",
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
            "array": false,
            "indexExists": true,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "current_total_salary",
            "dataType": "decimal",
            "name": "Текущий совокупный доход, gross руб/мес",
            "id": "74621726052058609",
            "link": "",
            "group": "1726051810227",
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "per_bonus",
            "dataType": "number",
            "name": "Текущий процент премии",
            "id": "97081726052045965",
            "link": "",
            "group": "1726051810227",
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
            "format": "positiveNum",
            "formatOptions": null,
            "groupName": null,
            "array": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "current_salary_with_rkisn",
            "dataType": "decimal",
            "name": "Текущий оклад, включая РКиСН и другие надбавки, gross руб/мес",
            "id": "98801726051969675",
            "link": "",
            "group": "1726051810227",
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "rkisn",
            "dataType": "decimal",
            "name": "РКиСН",
            "id": "85731726051943563",
            "link": "",
            "group": "1726051810227",
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "current_salary_without_rkisn",
            "dataType": "decimal",
            "name": "Текущий оклад без РКиСН, gross руб/мес",
            "id": "42431726051884641",
            "link": "",
            "group": "1726051810227",
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "period_bonus",
            "dataType": "link",
            "name": "Текущая периодичность выплаты премии",
            "id": "48991726051831109",
            "link": "st_bonus",
            "group": "1726051810227",
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
            "array": false,
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "analytics_ops",
            "dataType": "link",
            "name": "Текущая категория персонала (Analytics for Ops)",
            "id": "36071726045140500",
            "link": "analytics_for_ops",
            "group": "1725431445711",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "position_id",
            "dataType": "string",
            "name": "Текущий код позиции (из УШР)",
            "id": "45681726045097116",
            "link": null,
            "group": "1725431445711",
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "company",
            "dataType": "link",
            "name": "Текущая организация",
            "id": "27451726045070790",
            "link": "st_company",
            "group": "1725431445711",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "contract_end_date",
            "dataType": "date",
            "name": "Дата окончания договора",
            "id": "94091726044922925",
            "link": "",
            "group": "1725431234450",
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
                "isUTC": "false"
            },
            "groupName": null,
            "array": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "replacement_type",
            "dataType": "link",
            "name": "Тип перевода",
            "id": "42371726044856787",
            "link": "st_contract_type",
            "group": "1725431234450",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "repl_empl_name",
            "dataType": "link",
            "name": "ФИО заменяемого сотрудника",
            "id": "65551726044774422",
            "link": "employees",
            "group": "1725431234450",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "replacement",
            "dataType": "boolean",
            "name": "Замена сотрудника",
            "id": "44491726044721571",
            "link": "",
            "group": "1725431234450",
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
            "formatOptions": {
                "customOptionLabel": "My option",
                "keyValue": {
                    "key": "key",
                    "value": "value",
                    "button": "One more"
                },
                "dateLocale": "en-gb",
                "booleanOptions": [
                    "Да",
                    "Нет"
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "current_hrbp",
            "dataType": "link",
            "name": "Текущий HR BP",
            "id": "68841726044632237",
            "link": "employees",
            "group": "1725431710596",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "position_rate",
            "dataType": "string",
            "name": "Количество ставок на новой позиции",
            "id": "72981726142316557",
            "link": null,
            "group": "1725431600480",
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "new_analytics_ops",
            "dataType": "link",
            "name": "Новая категория персонала (Analytics for Ops)",
            "id": "94121726142293084",
            "link": "analytics_for_ops",
            "group": "1725431600480",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "new_position_id",
            "dataType": "string",
            "name": "Новый код позиции (из УШР) ",
            "id": "33951726142259108",
            "link": null,
            "group": "1725431600480",
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "new_company",
            "dataType": "link",
            "name": "Новая организация",
            "id": "15551726142220035",
            "link": "st_company",
            "group": "1725431600480",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "new_total_salary",
            "dataType": "decimal",
            "name": "Новый совокупный доход, gross руб/мес",
            "id": "38891726145546263",
            "link": "",
            "group": "1726145208794",
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "new_per_bonus",
            "dataType": "number",
            "name": "Новый процент премии",
            "id": "71771726145483919",
            "link": "",
            "group": "1726145208794",
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
            "format": "positiveNum",
            "formatOptions": null,
            "groupName": null,
            "array": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "new_salary_with_rkisn",
            "dataType": "decimal",
            "name": "Новый оклад, включая РКиСН и другие надбавки, gross руб/мес",
            "id": "99131726145453730",
            "link": "",
            "group": "1726145208794",
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "new_rkisn",
            "dataType": "decimal",
            "name": "Новый РКиСН",
            "id": "40591726145349693",
            "link": "",
            "group": "1726145208794",
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "new_salary_without_rkisn",
            "dataType": "decimal",
            "name": "Новый оклад без РКиСН, gross руб/мес",
            "id": "87511726145291105",
            "link": "",
            "group": "1726145208794",
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "new_period_bonus",
            "dataType": "link",
            "name": "Новая периодичность выплаты премии",
            "id": "49131726145232067",
            "link": "st_bonus",
            "group": "1726145208794",
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
            "array": false,
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "new_org_structure",
            "dataType": "string",
            "name": "Новая организационная структура",
            "id": "22651726596356199",
            "link": "",
            "group": "1725431600480",
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "current_org_structure",
            "dataType": "string",
            "name": "Текущая организационная структура",
            "id": "10551726596275813",
            "link": "",
            "group": "1725431445711",
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "new_up_direct",
            "dataType": "link",
            "name": "Верхнеуровневый руководитель (руководитель нанимающего менеджера) для Non-TECH / Директор департамента для TECH",
            "id": "49461726638728534",
            "link": "employees",
            "group": "1725431710596",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "comment_orgdev",
            "dataType": "string",
            "name": "Примечание для Оргдев",
            "id": "71921726653914186",
            "link": "",
            "group": "1726145208794",
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "new_cnb",
            "dataType": "link",
            "name": "Принимающий С&B",
            "id": "75681726654003783",
            "link": "employees",
            "group": "1725431710596",
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
            "array": false,
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "orgdev",
            "dataType": "boolean",
            "name": "Добавить Оргдев",
            "id": "54541726653864757",
            "link": "",
            "group": "1726145208794",
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
                    "Да",
                    "Нет"
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "current_cnb",
            "dataType": "link",
            "name": "Текущий C&B",
            "id": "58661726052187313",
            "link": "employees",
            "group": "1725431710596",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "hr_admin",
            "dataType": "link",
            "name": "HR Admin",
            "id": "80691726655523102",
            "link": "employees",
            "group": "1725431710596",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "budget_holder",
            "dataType": "link",
            "name": "Владелец бюджета (или лицо его заменяющее)",
            "id": "30591726656292225",
            "link": "employees",
            "group": "1725431710596",
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
            "array": false,
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "new_cost_center",
            "dataType": "string",
            "name": "Новый кост-центр (Optimacros)",
            "id": "48901726656261119",
            "link": "",
            "group": "1726145208794",
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
            "array": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "current_cost_center",
            "dataType": "string",
            "name": "Текущий кост-центр (Optimacros)",
            "id": "28041726656199647",
            "link": "",
            "group": "1726051810227",
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
            "array": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "budget_date",
            "dataType": "date",
            "name": "Бюджетная дата преревода",
            "id": "49131726656143374",
            "link": "",
            "group": "1725431234450",
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
                "dateFormat": "DD.MM.YYYY",
                "timeFormat": "",
                "isUTC": "false"
            },
            "groupName": null,
            "array": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "add_approval_in",
            "dataType": "link",
            "name": "Дополнительный согласующий",
            "id": "38281727073206486",
            "link": "add_approval",
            "group": "1725431710596",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "add_approval_out",
            "dataType": "link",
            "name": "Дополнительный согласующий",
            "id": "74711727073168576",
            "link": "add_approval",
            "group": "1725431710596",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "replacement_reason",
            "dataType": "link",
            "name": "Причина замены",
            "id": "61451727074752275",
            "link": "st_reason_replacement",
            "group": "1725431234450",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "actual_date",
            "dataType": "date",
            "name": "Фактическая дата перевода",
            "id": "64531727078660236",
            "link": "",
            "group": "1725431600480",
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
                "isUTC": "false"
            },
            "groupName": null,
            "array": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "total_increase_per",
            "dataType": "decimal",
            "name": "Процент прироста совокупного дохода(%)",
            "id": "69461727080268194",
            "link": "",
            "group": "1726145208794",
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "role_budget_holder",
            "dataType": "boolean",
            "name": "Добавить Владельца бюджета в качестве:",
            "id": "86541727248705190",
            "link": "",
            "group": "1725431710596",
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
            "formatOptions": {
                "customOptionLabel": "My option",
                "keyValue": {
                    "key": "key",
                    "value": "value",
                    "button": "One more"
                },
                "dateLocale": "en-gb",
                "booleanOptions": [
                    "Cогласующего лица",
                    "Получателя уведомления"
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        }
    ],
    "data": [
        {
            "number": "ST-123187",
            "prev_status": {
                "id": "approval_out_hrbp",
                "status": "Согласование Отдающий HRBP"
            },
            "current_org_structure": "Распределительный центр",
            "new_up_direct": {
                "email": "aleksandra.kalina@lamoda.ru",
                "division_name": "Группа бизнес-анализа",
                "id": "aleksandra.kalina@lamoda.ru",
                "position": "Аналитик по развитию корпоративных бизнес-приложений",
                "webuser_id": {
                    "who_delegated_ids": [],
                    "role": [
                        "st_hrbp",
                        "admin",
                        "jo_recruiter"
                    ],
                    "whom_delegate_ids": [],
                    "id": "aleksandra.kalina@lamoda.ru"
                },
                "employee_full_name": "Александра Калина"
            },
            "per_bonus": 3,
            "planned_date": 1726779600000,
            "analytics_ops": {
                "name": "Network",
                "id": "network"
            },
            "current_hrbp": {
                "email": "aleksandra.kalina@lamoda.ru",
                "division_name": "Группа бизнес-анализа",
                "id": "aleksandra.kalina@lamoda.ru",
                "position": "Аналитик по развитию корпоративных бизнес-приложений",
                "webuser_id": {
                    "who_delegated_ids": [],
                    "role": [
                        "st_hrbp",
                        "admin",
                        "jo_recruiter"
                    ],
                    "whom_delegate_ids": [],
                    "id": "aleksandra.kalina@lamoda.ru"
                },
                "employee_full_name": "Александра Калина"
            },
            "current_direct_name": {
                "email": "aleksandra.kalina@lamoda.ru",
                "division_name": "Группа бизнес-анализа",
                "id": "aleksandra.kalina@lamoda.ru",
                "position": "Аналитик по развитию корпоративных бизнес-приложений",
                "webuser_id": {
                    "who_delegated_ids": [],
                    "role": [
                        "st_hrbp",
                        "admin",
                        "jo_recruiter"
                    ],
                    "whom_delegate_ids": [],
                    "id": "aleksandra.kalina@lamoda.ru"
                },
                "employee_full_name": "Александра Калина"
            },
            "user_creator": {
                "email": "aleksandra.kalina@lamoda.ru",
                "division_name": "Группа бизнес-анализа",
                "id": "aleksandra.kalina@lamoda.ru",
                "position": "Аналитик по развитию корпоративных бизнес-приложений",
                "webuser_id": {
                    "who_delegated_ids": [],
                    "role": [
                        "st_hrbp",
                        "admin",
                        "jo_recruiter"
                    ],
                    "whom_delegate_ids": [],
                    "id": "aleksandra.kalina@lamoda.ru"
                },
                "employee_full_name": "Александра Калина"
            },
            "current_cnb": {
                "email": "aleksandra.kalina@lamoda.ru",
                "division_name": "Группа бизнес-анализа",
                "id": "aleksandra.kalina@lamoda.ru",
                "position": "Аналитик по развитию корпоративных бизнес-приложений",
                "webuser_id": {
                    "who_delegated_ids": [],
                    "role": [
                        "st_hrbp",
                        "admin",
                        "jo_recruiter"
                    ],
                    "whom_delegate_ids": [],
                    "id": "aleksandra.kalina@lamoda.ru"
                },
                "employee_full_name": "Александра Калина"
            },
            "employee_name": {
                "division_name": "Распределительный центр",
                "id": "employee",
                "position": "Позиция",
                "webuser_id": "employee",
                "employee_full_name": "Тестовый Сотрудник"
            },
            "new_org_structure": "Распределительный центр => Складской отдел => Смена №1 => Зона хранения товара => Участок размещения  => М2",
            "new_division": {
                "division_name": "Участок размещения М2",
                "id": "2439278"
            },
            "period_bonus": {
                "bonus": "Квартал",
                "id": "quarter"
            },
            "current_total_salary": 10298.97,
            "new_position": "а",
            "current_salary_with_rkisn": 9999,
            "last_change_date": 1727255916000,
            "current_division": {
                "division_name": "Распределительный центр",
                "id": "1358"
            },
            "responsible_employee_id": {
                "division_name": "Группа бизнес-анализа",
                "id": "aleksandra.kalina@lamoda.ru",
                "position": "Аналитик по развитию корпоративных бизнес-приложений",
                "webuser_id": {
                    "who_delegated_ids": [],
                    "role": [
                        "st_hrbp",
                        "admin",
                        "jo_recruiter"
                    ],
                    "whom_delegate_ids": [],
                    "id": "aleksandra.kalina@lamoda.ru"
                },
                "employee_full_name": "Александра Калина"
            },
            "company": {
                "company": "КУПИШУЗ",
                "id": "kupishoes"
            },
            "position_id": "12345",
            "id": "a935aa8d-894b-40e7-817f-ee007bd2241b",
            "current_position": "Позиция",
            "last_user": {
                "role": [
                    "jo_recruiter",
                    "jo_cnb",
                    "jo_hrd",
                    "jo_hrbp",
                    "jo_agreement",
                    "st_hrbp",
                    "admin"
                ],
                "who_delegated_ids": [],
                "division": "Directual",
                "lastName": "Ershov",
                "firstName": "Pavel",
                "id": "pavel@directual.com",
                "whom_delegate_ids": []
            },
            "all_user_ids": [],
            "date": 1727255496000,
            "add_approval_out": {
                "email": "aleksandrmaslov@lamoda.ru",
                "full_name": "Александр Маслов",
                "division": "aleksandrmaslov@lamoda.ru",
                "id": "aleksandrmaslov@lamoda.ru",
                "position": "Директор по персоналу операционного направления",
                "webuser_id": {
                    "whom_delegate_ids": "",
                    "id": ""
                }
            },
            "status": {
                "id": "approval_out_hrbp",
                "status": "Согласование Отдающий HRBP"
            },
            "logs": [
                {
                    "date_display": "25 сент. 2024, 12:18",
                    "text": "Согласование Отдающий HRBP. Назначен ответственный: aleksandra.kalina@lamoda.ru",
                    "ticket": "a935aa8d-894b-40e7-817f-ee007bd2241b",
                    "id": "833ec66f-6c51-4cd5-9ad5-34a4bbad5ca1",
                    "date": 1727255916000,
                    "user": "aleksandra.kalina@lamoda.ru"
                },
                {
                    "date_display": "25 сент. 2024, 12:16",
                    "text": "Согласование Текущий руководитель. Назначен ответственный: aleksandra.kalina@lamoda.ru",
                    "ticket": "a935aa8d-894b-40e7-817f-ee007bd2241b",
                    "id": "9fcb3d8a-7ea6-4d43-9ffe-82db5a586874",
                    "date": 1727255768000,
                    "user": "aleksandra.kalina@lamoda.ru"
                },
                {
                    "date_display": "25 сент. 2024, 12:11",
                    "text": "Согласование Новый Верхнеуровневый руководитель. Назначен ответственный: aleksandra.kalina@lamoda.ru",
                    "ticket": "a935aa8d-894b-40e7-817f-ee007bd2241b",
                    "id": "f662ad58-858e-48ef-ad10-55cd0cc340ca",
                    "date": 1727255514000,
                    "user": "aleksandra.kalina@lamoda.ru"
                },
                {
                    "date_display": "25 сент. 2024, 12:11",
                    "text": "Создание заявки: Aleksandra Kalina",
                    "ticket": "a935aa8d-894b-40e7-817f-ee007bd2241b",
                    "id": "eee14bd9-e534-4904-a7fb-6469cbb278fe",
                    "date": 1727255496000,
                    "user": "aleksandra.kalina@lamoda.ru"
                }
            ],
            "new_hrbp": {
                "email": "aleksandra.kalina@lamoda.ru",
                "division_name": "Группа бизнес-анализа",
                "id": "aleksandra.kalina@lamoda.ru",
                "position": "Аналитик по развитию корпоративных бизнес-приложений",
                "webuser_id": {
                    "who_delegated_ids": [],
                    "role": [
                        "st_hrbp",
                        "admin",
                        "jo_recruiter"
                    ],
                    "whom_delegate_ids": [],
                    "id": "aleksandra.kalina@lamoda.ru"
                },
                "employee_full_name": "Александра Калина"
            }
        }
    ],
    "totalPages": 1,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [
        [
            "id",
            99340946
        ],
        [
            "new_hrbp.id",
            99325487
        ],
        [
            "new_hrbp.employee_full_name",
            99325487
        ],
        [
            "new_hrbp.email",
            99325487
        ],
        [
            "new_hrbp.webuser_id.id",
            99325452
        ],
        [
            "new_hrbp.webuser_id.whom_delegate_ids.id",
            99325452
        ],
        [
            "new_hrbp.webuser_id.whom_delegate_ids.firstName",
            99325452
        ],
        [
            "new_hrbp.webuser_id.whom_delegate_ids.lastName",
            99325452
        ],
        [
            "new_hrbp.webuser_id.who_delegated_ids.id",
            99325452
        ],
        [
            "new_hrbp.webuser_id.who_delegated_ids.firstName",
            99325452
        ],
        [
            "new_hrbp.webuser_id.who_delegated_ids.lastName",
            99325452
        ],
        [
            "new_hrbp.webuser_id.email",
            99325452
        ],
        [
            "new_hrbp.webuser_id.role",
            99325452
        ],
        [
            "new_hrbp.division_name",
            99325487
        ],
        [
            "new_hrbp.position",
            99325487
        ],
        [
            "current_up_direct.id",
            99325487
        ],
        [
            "current_up_direct.employee_full_name",
            99325487
        ],
        [
            "current_up_direct.email",
            99325487
        ],
        [
            "current_up_direct.webuser_id.id",
            99325452
        ],
        [
            "current_up_direct.webuser_id.whom_delegate_ids.id",
            99325452
        ],
        [
            "current_up_direct.webuser_id.whom_delegate_ids.firstName",
            99325452
        ],
        [
            "current_up_direct.webuser_id.whom_delegate_ids.lastName",
            99325452
        ],
        [
            "current_up_direct.webuser_id.who_delegated_ids.id",
            99325452
        ],
        [
            "current_up_direct.webuser_id.who_delegated_ids.firstName",
            99325452
        ],
        [
            "current_up_direct.webuser_id.who_delegated_ids.lastName",
            99325452
        ],
        [
            "current_up_direct.webuser_id.email",
            99325452
        ],
        [
            "current_up_direct.webuser_id.role",
            99325452
        ],
        [
            "current_up_direct.division_name",
            99325487
        ],
        [
            "current_up_direct.position",
            99325487
        ],
        [
            "new_division.id",
            99325488
        ],
        [
            "new_division.division_name",
            99325488
        ],
        [
            "new_position.id",
            99325487
        ],
        [
            "new_position.employee_full_name",
            99325487
        ],
        [
            "new_position.webuser_id.id",
            99325452
        ],
        [
            "current_division.id",
            99325488
        ],
        [
            "current_division.division_name",
            99325488
        ],
        [
            "planned_date",
            99340946
        ],
        [
            "current_direct_name.webuser_id.id",
            99325452
        ],
        [
            "current_direct_name.webuser_id.whom_delegate_ids.id",
            99325452
        ],
        [
            "current_direct_name.webuser_id.whom_delegate_ids.firstName",
            99325452
        ],
        [
            "current_direct_name.webuser_id.whom_delegate_ids.lastName",
            99325452
        ],
        [
            "current_direct_name.webuser_id.who_delegated_ids.id",
            99325452
        ],
        [
            "current_direct_name.webuser_id.who_delegated_ids.firstName",
            99325452
        ],
        [
            "current_direct_name.webuser_id.who_delegated_ids.lastName",
            99325452
        ],
        [
            "current_direct_name.webuser_id.role",
            99325452
        ],
        [
            "current_direct_name.webuser_id.email",
            99325452
        ],
        [
            "current_direct_name.id",
            99325487
        ],
        [
            "current_direct_name.employee_full_name",
            99325487
        ],
        [
            "current_direct_name.email",
            99325487
        ],
        [
            "current_direct_name.position",
            99325487
        ],
        [
            "current_direct_name.division_name",
            99325487
        ],
        [
            "employee_name.id",
            99325487
        ],
        [
            "employee_name.employee_full_name",
            99325487
        ],
        [
            "employee_name.webuser_id.id",
            99325452
        ],
        [
            "employee_name.position",
            99325487
        ],
        [
            "employee_name.division_name",
            99325487
        ],
        [
            "last_change_date",
            99340946
        ],
        [
            "all_user_ids.id",
            99325487
        ],
        [
            "all_user_ids.employee_full_name",
            99325487
        ],
        [
            "all_user_ids.webuser_id.id",
            99325452
        ],
        [
            "all_user_ids.webuser_id.whom_delegate_ids.id",
            99325452
        ],
        [
            "all_user_ids.webuser_id.whom_delegate_ids.firstName",
            99325452
        ],
        [
            "all_user_ids.webuser_id.whom_delegate_ids.lastName",
            99325452
        ],
        [
            "all_user_ids.webuser_id.who_delegated_ids.id",
            99325452
        ],
        [
            "all_user_ids.webuser_id.who_delegated_ids.firstName",
            99325452
        ],
        [
            "all_user_ids.webuser_id.who_delegated_ids.lastName",
            99325452
        ],
        [
            "all_user_ids.webuser_id.role",
            99325452
        ],
        [
            "all_user_ids.webuser_id.email",
            99325452
        ],
        [
            "responsible_roles.id",
            99325477
        ],
        [
            "responsible_employee_id.id",
            99325487
        ],
        [
            "responsible_employee_id.employee_full_name",
            99325487
        ],
        [
            "responsible_employee_id.webuser_id.id",
            99325452
        ],
        [
            "responsible_employee_id.webuser_id.whom_delegate_ids.id",
            99325452
        ],
        [
            "responsible_employee_id.webuser_id.whom_delegate_ids.firstName",
            99325452
        ],
        [
            "responsible_employee_id.webuser_id.whom_delegate_ids.lastName",
            99325452
        ],
        [
            "responsible_employee_id.webuser_id.who_delegated_ids.id",
            99325452
        ],
        [
            "responsible_employee_id.webuser_id.who_delegated_ids.firstName",
            99325452
        ],
        [
            "responsible_employee_id.webuser_id.who_delegated_ids.lastName",
            99325452
        ],
        [
            "responsible_employee_id.webuser_id.role",
            99325452
        ],
        [
            "responsible_employee_id.webuser_id.email",
            99325452
        ],
        [
            "responsible_employee_id.position",
            99325487
        ],
        [
            "responsible_employee_id.division_name",
            99325487
        ],
        [
            "date_text",
            99340946
        ],
        [
            "date",
            99340946
        ],
        [
            "number",
            99340946
        ],
        [
            "logs.id",
            99342344
        ],
        [
            "logs.date_display",
            99342344
        ],
        [
            "logs.ticket.id",
            99340946
        ],
        [
            "logs.user.id",
            99325452
        ],
        [
            "logs.text",
            99342344
        ],
        [
            "logs.date",
            99342344
        ],
        [
            "user_creator.id",
            99325487
        ],
        [
            "user_creator.employee_full_name",
            99325487
        ],
        [
            "user_creator.email",
            99325487
        ],
        [
            "user_creator.webuser_id.id",
            99325452
        ],
        [
            "user_creator.webuser_id.whom_delegate_ids.id",
            99325452
        ],
        [
            "user_creator.webuser_id.whom_delegate_ids.firstName",
            99325452
        ],
        [
            "user_creator.webuser_id.whom_delegate_ids.lastName",
            99325452
        ],
        [
            "user_creator.webuser_id.who_delegated_ids.id",
            99325452
        ],
        [
            "user_creator.webuser_id.who_delegated_ids.firstName",
            99325452
        ],
        [
            "user_creator.webuser_id.who_delegated_ids.lastName",
            99325452
        ],
        [
            "user_creator.webuser_id.role",
            99325452
        ],
        [
            "user_creator.webuser_id.email",
            99325452
        ],
        [
            "user_creator.position",
            99325487
        ],
        [
            "user_creator.division_name",
            99325487
        ],
        [
            "last_user.id",
            99325452
        ],
        [
            "last_user.firstName",
            99325452
        ],
        [
            "last_user.lastName",
            99325452
        ],
        [
            "last_user.whom_delegate_ids.id",
            99325452
        ],
        [
            "last_user.whom_delegate_ids.firstName",
            99325452
        ],
        [
            "last_user.whom_delegate_ids.lastName",
            99325452
        ],
        [
            "last_user.position",
            99325452
        ],
        [
            "last_user.division",
            99325452
        ],
        [
            "last_user.who_delegated_ids.id",
            99325452
        ],
        [
            "last_user.who_delegated_ids.firstName",
            99325452
        ],
        [
            "last_user.who_delegated_ids.lastName",
            99325452
        ],
        [
            "last_user.role",
            99325452
        ],
        [
            "last_user.email",
            99325452
        ],
        [
            "prev_status.status",
            99340948
        ],
        [
            "prev_status.id",
            99340948
        ],
        [
            "status.id",
            99340948
        ],
        [
            "status.status",
            99340948
        ],
        [
            "current_total_salary",
            99340946
        ],
        [
            "per_bonus",
            99340946
        ],
        [
            "current_salary_with_rkisn",
            99340946
        ],
        [
            "rkisn",
            99340946
        ],
        [
            "current_salary_without_rkisn",
            99340946
        ],
        [
            "period_bonus.id",
            99342651
        ],
        [
            "period_bonus.bonus",
            99342651
        ],
        [
            "analytics_ops.id",
            99325500
        ],
        [
            "analytics_ops.name",
            99325500
        ],
        [
            "position_id",
            99340946
        ],
        [
            "company.id",
            99342650
        ],
        [
            "company.company",
            99342650
        ],
        [
            "contract_end_date",
            99340946
        ],
        [
            "replacement_type.id",
            99342653
        ],
        [
            "replacement_type.type",
            99342653
        ],
        [
            "repl_empl_name.id",
            99325487
        ],
        [
            "repl_empl_name.employee_full_name",
            99325487
        ],
        [
            "repl_empl_name.email",
            99325487
        ],
        [
            "repl_empl_name.webuser_id.id",
            99325452
        ],
        [
            "repl_empl_name.position",
            99325487
        ],
        [
            "repl_empl_name.division_name",
            99325487
        ],
        [
            "replacement",
            99340946
        ],
        [
            "current_hrbp.id",
            99325487
        ],
        [
            "current_hrbp.employee_full_name",
            99325487
        ],
        [
            "current_hrbp.email",
            99325487
        ],
        [
            "current_hrbp.webuser_id.id",
            99325452
        ],
        [
            "current_hrbp.webuser_id.whom_delegate_ids.id",
            99325452
        ],
        [
            "current_hrbp.webuser_id.whom_delegate_ids.firstName",
            99325452
        ],
        [
            "current_hrbp.webuser_id.whom_delegate_ids.lastName",
            99325452
        ],
        [
            "current_hrbp.webuser_id.who_delegated_ids.id",
            99325452
        ],
        [
            "current_hrbp.webuser_id.who_delegated_ids.firstName",
            99325452
        ],
        [
            "current_hrbp.webuser_id.who_delegated_ids.lastName",
            99325452
        ],
        [
            "current_hrbp.webuser_id.email",
            99325452
        ],
        [
            "current_hrbp.webuser_id.role",
            99325452
        ],
        [
            "current_hrbp.division_name",
            99325487
        ],
        [
            "current_hrbp.position",
            99325487
        ],
        [
            "position_rate",
            99340946
        ],
        [
            "new_analytics_ops.id",
            99325500
        ],
        [
            "new_analytics_ops.name",
            99325500
        ],
        [
            "new_position_id",
            99340946
        ],
        [
            "new_company.id",
            99342650
        ],
        [
            "new_company.company",
            99342650
        ],
        [
            "new_total_salary",
            99340946
        ],
        [
            "new_per_bonus",
            99340946
        ],
        [
            "new_salary_with_rkisn",
            99340946
        ],
        [
            "new_rkisn",
            99340946
        ],
        [
            "new_salary_without_rkisn",
            99340946
        ],
        [
            "new_period_bonus.id",
            99342651
        ],
        [
            "new_period_bonus.bonus",
            99342651
        ],
        [
            "new_org_structure",
            99340946
        ],
        [
            "current_org_structure",
            99340946
        ],
        [
            "new_up_direct.id",
            99325487
        ],
        [
            "new_up_direct.employee_full_name",
            99325487
        ],
        [
            "new_up_direct.email",
            99325487
        ],
        [
            "new_up_direct.webuser_id.id",
            99325452
        ],
        [
            "new_up_direct.webuser_id.whom_delegate_ids.id",
            99325452
        ],
        [
            "new_up_direct.webuser_id.whom_delegate_ids.firstName",
            99325452
        ],
        [
            "new_up_direct.webuser_id.whom_delegate_ids.lastName",
            99325452
        ],
        [
            "new_up_direct.webuser_id.who_delegated_ids.id",
            99325452
        ],
        [
            "new_up_direct.webuser_id.who_delegated_ids.firstName",
            99325452
        ],
        [
            "new_up_direct.webuser_id.who_delegated_ids.lastName",
            99325452
        ],
        [
            "new_up_direct.webuser_id.role",
            99325452
        ],
        [
            "new_up_direct.division_name",
            99325487
        ],
        [
            "new_up_direct.position",
            99325487
        ],
        [
            "comment_orgdev",
            99340946
        ],
        [
            "new_cnb.id",
            99325487
        ],
        [
            "new_cnb.employee_full_name",
            99325487
        ],
        [
            "new_cnb.email",
            99325487
        ],
        [
            "new_cnb.webuser_id.id",
            99325452
        ],
        [
            "new_cnb.webuser_id.whom_delegate_ids.id",
            99325452
        ],
        [
            "new_cnb.webuser_id.whom_delegate_ids.firstName",
            99325452
        ],
        [
            "new_cnb.webuser_id.whom_delegate_ids.lastName",
            99325452
        ],
        [
            "new_cnb.webuser_id.who_delegated_ids.id",
            99325452
        ],
        [
            "new_cnb.webuser_id.who_delegated_ids.firstName",
            99325452
        ],
        [
            "new_cnb.webuser_id.who_delegated_ids.lastName",
            99325452
        ],
        [
            "new_cnb.webuser_id.email",
            99325452
        ],
        [
            "new_cnb.webuser_id.role",
            99325452
        ],
        [
            "new_cnb.position",
            99325487
        ],
        [
            "new_cnb.division_name",
            99325487
        ],
        [
            "orgdev",
            99340946
        ],
        [
            "current_cnb.id",
            99325487
        ],
        [
            "current_cnb.employee_full_name",
            99325487
        ],
        [
            "current_cnb.email",
            99325487
        ],
        [
            "current_cnb.webuser_id.id",
            99325452
        ],
        [
            "current_cnb.webuser_id.whom_delegate_ids.id",
            99325452
        ],
        [
            "current_cnb.webuser_id.whom_delegate_ids.firstName",
            99325452
        ],
        [
            "current_cnb.webuser_id.whom_delegate_ids.lastName",
            99325452
        ],
        [
            "current_cnb.webuser_id.who_delegated_ids.id",
            99325452
        ],
        [
            "current_cnb.webuser_id.who_delegated_ids.firstName",
            99325452
        ],
        [
            "current_cnb.webuser_id.who_delegated_ids.lastName",
            99325452
        ],
        [
            "current_cnb.webuser_id.role",
            99325452
        ],
        [
            "current_cnb.division_name",
            99325487
        ],
        [
            "current_cnb.position",
            99325487
        ],
        [
            "hr_admin.id",
            99325487
        ],
        [
            "hr_admin.employee_full_name",
            99325487
        ],
        [
            "hr_admin.email",
            99325487
        ],
        [
            "hr_admin.webuser_id.id",
            99325452
        ],
        [
            "hr_admin.webuser_id.whom_delegate_ids.id",
            99325452
        ],
        [
            "hr_admin.webuser_id.whom_delegate_ids.firstName",
            99325452
        ],
        [
            "hr_admin.webuser_id.whom_delegate_ids.lastName",
            99325452
        ],
        [
            "hr_admin.webuser_id.who_delegated_ids.id",
            99325452
        ],
        [
            "hr_admin.webuser_id.who_delegated_ids.firstName",
            99325452
        ],
        [
            "hr_admin.webuser_id.who_delegated_ids.lastName",
            99325452
        ],
        [
            "hr_admin.webuser_id.role",
            99325452
        ],
        [
            "hr_admin.division_name",
            99325487
        ],
        [
            "hr_admin.position",
            99325487
        ],
        [
            "budget_holder.id",
            99325487
        ],
        [
            "budget_holder.employee_full_name",
            99325487
        ],
        [
            "budget_holder.webuser_id.id",
            99325452
        ],
        [
            "budget_holder.webuser_id.whom_delegate_ids.id",
            99325452
        ],
        [
            "budget_holder.webuser_id.whom_delegate_ids.firstName",
            99325452
        ],
        [
            "budget_holder.webuser_id.whom_delegate_ids.lastName",
            99325452
        ],
        [
            "budget_holder.webuser_id.who_delegated_ids.id",
            99325452
        ],
        [
            "budget_holder.webuser_id.who_delegated_ids.firstName",
            99325452
        ],
        [
            "budget_holder.webuser_id.who_delegated_ids.lastName",
            99325452
        ],
        [
            "budget_holder.webuser_id.email",
            99325452
        ],
        [
            "budget_holder.webuser_id.role",
            99325452
        ],
        [
            "budget_holder.position",
            99325487
        ],
        [
            "budget_holder.division_name",
            99325487
        ],
        [
            "budget_holder.email",
            99325487
        ],
        [
            "new_cost_center",
            99340946
        ],
        [
            "current_cost_center",
            99340946
        ],
        [
            "budget_date",
            99340946
        ],
        [
            "add_approval_in.id",
            99344956
        ],
        [
            "add_approval_in.full_name.id",
            99325487
        ],
        [
            "add_approval_in.full_name.webuser_id.id",
            99325452
        ],
        [
            "add_approval_in.full_name.webuser_id.whom_delegate_ids.id",
            99325452
        ],
        [
            "add_approval_in.full_name.webuser_id.whom_delegate_ids.firstName",
            99325452
        ],
        [
            "add_approval_in.full_name.webuser_id.whom_delegate_ids.lastName",
            99325452
        ],
        [
            "add_approval_in.full_name.webuser_id.who_delegated_ids.id",
            99325452
        ],
        [
            "add_approval_in.full_name.webuser_id.who_delegated_ids.firstName",
            99325452
        ],
        [
            "add_approval_in.full_name.webuser_id.who_delegated_ids.lastName",
            99325452
        ],
        [
            "add_approval_in.full_name.webuser_id.role",
            99325452
        ],
        [
            "add_approval_in.full_name.webuser_id.email",
            99325452
        ],
        [
            "add_approval_in.position",
            99344956
        ],
        [
            "add_approval_in.email.id",
            99325452
        ],
        [
            "add_approval_in.division.id",
            99325488
        ],
        [
            "add_approval_out.id",
            99344956
        ],
        [
            "add_approval_out.division.id",
            99325488
        ],
        [
            "add_approval_out.email.id",
            99325452
        ],
        [
            "add_approval_out.position",
            99344956
        ],
        [
            "add_approval_out.full_name.id",
            99325487
        ],
        [
            "add_approval_out.full_name.webuser_id.id",
            99325452
        ],
        [
            "add_approval_out.full_name.webuser_id.whom_delegate_ids.id",
            99325452
        ],
        [
            "add_approval_out.full_name.webuser_id.whom_delegate_ids.firstName",
            99325452
        ],
        [
            "add_approval_out.full_name.webuser_id.whom_delegate_ids.lastName",
            99325452
        ],
        [
            "add_approval_out.full_name.webuser_id.who_delegated_ids.id",
            99325452
        ],
        [
            "add_approval_out.full_name.webuser_id.who_delegated_ids.firstName",
            99325452
        ],
        [
            "add_approval_out.full_name.webuser_id.who_delegated_ids.lastName",
            99325452
        ],
        [
            "add_approval_out.full_name.webuser_id.role",
            99325452
        ],
        [
            "add_approval_out.full_name.webuser_id.email",
            99325452
        ],
        [
            "replacement_reason.id",
            99344980
        ],
        [
            "replacement_reason.reason",
            99344980
        ],
        [
            "actual_date",
            99340946
        ],
        [
            "total_increase_per",
            99340946
        ],
        [
            "role_budget_holder",
            99340946
        ]
    ],
    "writeFields": [
        "id",
        "new_hrbp",
        "current_up_direct",
        "new_division",
        "new_position",
        "current_division",
        "current_position",
        "planned_date",
        "current_direct_name",
        "employee_name",
        "last_user",
        "number",
        "date",
        "date_text",
        "last_change_date",
        "logs",
        "prev_status",
        "current_cnb",
        "current_total_salary",
        "per_bonus",
        "current_salary_with_rkisn",
        "rkisn",
        "current_salary_without_rkisn",
        "period_bonus",
        "analytics_ops",
        "position_id",
        "company",
        "contract_end_date",
        "replacement_type",
        "repl_empl_name",
        "current_hrbp",
        "user_creator",
        "position_rate",
        "new_analytics_ops",
        "new_position_id",
        "new_company",
        "new_per_bonus",
        "new_total_salary",
        "new_salary_with_rkisn",
        "new_rkisn",
        "new_salary_without_rkisn",
        "new_period_bonus",
        "new_org_structure",
        "current_org_structure",
        "new_up_direct",
        "new_cnb",
        "comment_orgdev",
        "orgdev",
        "hr_admin",
        "budget_holder",
        "new_cost_center",
        "current_cost_center",
        "budget_date",
        "add_approval_in",
        "add_approval_out",
        "replacement_reason",
        "replacement",
        "actual_date",
        "total_increase_per",
        "role_budget_holder"
    ],
    "structures": {
        "99325452": {
            "networkID": 21335,
            "id": 99325452,
            "dateCreated": "2024-07-04T06:41:34Z",
            "hidden": false,
            "dateHidden": null,
            "name": "App users",
            "sysName": "WebUser",
            "jsonObject": "[{\"sysName\":\"roles_ad\",\"dataType\":\"arrayLink\",\"name\":\"\",\"id\":\"31521720185270928\",\"link\":\"roles_ad\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"json\":false},{\"sysName\":\"dateLastActivity\",\"dataType\":\"string\",\"name\":\"dateLastActivity\",\"id\":\"10\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"dateCreated\",\"dataType\":\"string\",\"name\":\"dateCreated\",\"id\":\"13\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"isAuthorization\",\"dataType\":\"boolean\",\"name\":\"isAuthorization\",\"id\":\"9\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"notifications_counter\",\"dataType\":\"string\",\"name\":\"Notifications Counter\",\"id\":\"1\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"custom_labels\",\"dataType\":\"json\",\"name\":\"Custom labels\",\"id\":\"2\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":true},{\"sysName\":\"phone\",\"dataType\":\"string\",\"name\":\"Phone\",\"id\":\"12\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"email\",\"dataType\":\"string\",\"name\":\"Email\",\"id\":\"11\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"userpic\",\"dataType\":\"file\",\"name\":\"User pic\",\"id\":\"3\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":{},\"groupName\":\"Contacts\",\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"Username (login)\",\"id\":\"15\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"role\",\"dataType\":\"array\",\"name\":\"Roles\",\"id\":\"8\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":true,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"password\",\"dataType\":\"string\",\"name\":\"Password (hash)\",\"id\":\"14\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"firstName\",\"dataType\":\"string\",\"name\":\"First name\",\"id\":\"7\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"lastName\",\"dataType\":\"string\",\"name\":\"Last name\",\"id\":\"6\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"gender\",\"dataType\":\"string\",\"name\":\"Gender\",\"id\":\"5\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"isBlocked\",\"dataType\":\"boolean\",\"name\":\"Block user\",\"id\":\"4\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"systemMessage\",\"dataType\":\"string\",\"name\":\"System message\",\"id\":\"56921641637265680\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"employee\",\"dataType\":\"link\",\"name\":\"\",\"id\":\"65621717669435431\",\"link\":\"employees\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"position\",\"dataType\":\"string\",\"name\":\"Position\",\"id\":\"21611718980485707\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"division\",\"dataType\":\"string\",\"name\":\"Division\",\"id\":\"13761718980504077\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"isActive\",\"dataType\":\"boolean\",\"name\":\"isActive\",\"id\":\"28091718982360994\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"who_delegated_ids\",\"dataType\":\"arrayLink\",\"name\":\"Кто делегировал права?\",\"id\":\"18431723207371481\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"json\":false},{\"sysName\":\"whom_delegate_ids\",\"dataType\":\"arrayLink\",\"name\":\"Кому делегировал права?\",\"id\":\"29491723207412497\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"json\":false},{\"sysName\":\"secret\",\"dataType\":\"string\",\"name\":\"secret\",\"id\":\"81131636839496227\",\"link\":\"\",\"group\":\"1636839487957\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"notif_Email\",\"dataType\":\"boolean\",\"name\":\"Notify me by Email\",\"id\":\"61231639915065277\",\"link\":\"\",\"group\":\"1639915049523\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Yes\",\"No\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false}]",
            "jsonGroupSettings": "[{\"name\":\"Contacts\",\"id\":-502807437,\"order\":0},{\"name\":\"Notifications\",\"id\":1639915049523,\"order\":1},{\"name\":\"Password restoring\",\"id\":1636839487957,\"order\":2},{\"name\":\"System fields (LEGACY)\",\"id\":-1776115286,\"order\":3}]",
            "jsonViewIdSettings": "[{\"sysName\":\"firstName\"},{\"sysName\":\"lastName\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-08-09T12:44:34Z",
            "createBy": 0,
            "changedBy": 1,
            "_settings": null,
            "_nativeIndexSettings": null,
            "objectIDSysName": "id",
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
                "array": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false
            },
            "folderId": null
        },
        "99325477": {
            "networkID": 21335,
            "id": 99325477,
            "dateCreated": "2024-05-20T16:01:07Z",
            "hidden": false,
            "dateHidden": null,
            "name": "Roles",
            "sysName": "roles",
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"array\":false},{\"sysName\":\"ad_group\",\"dataType\":\"link\",\"name\":\"Ad group\",\"id\":\"37371716221203585\",\"link\":\"roles_ad\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":true,\"array\":false},{\"sysName\":\"role_name\",\"dataType\":\"string\",\"name\":\"Role name\",\"id\":\"62051716220877472\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"array\":false},{\"sysName\":\"visual_name\",\"dataType\":\"string\",\"name\":\"Роль\",\"id\":\"75311724655382921\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"array\":false},{\"sysName\":\"roles_group\",\"dataType\":\"string\",\"name\":\"Группа ролей\",\"id\":\"86651726602951238\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"array\":false}]",
            "jsonGroupSettings": "[]",
            "jsonViewIdSettings": "[{\"sysName\":\"visual_name\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":false,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-09-17T19:56:34Z",
            "createBy": 23015,
            "changedBy": 23015,
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
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false
            },
            "folderId": 33811341
        },
        "99325487": {
            "networkID": 21335,
            "id": 99325487,
            "dateCreated": "2024-05-14T07:46:19Z",
            "hidden": false,
            "dateHidden": null,
            "name": "Employees",
            "sysName": "employees",
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"employee_first_name\",\"name\":\"Employee First name\",\"dataType\":\"string\",\"id\":\"68431715675181675\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"employee_last_name\",\"name\":\"Employee Last name\",\"dataType\":\"string\",\"id\":\"60151715675210149\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"employee_full_name\",\"name\":\"Employee Full name\",\"dataType\":\"string\",\"id\":\"68071715777917101\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"email\",\"name\":\"Email\",\"dataType\":\"string\",\"id\":\"26531716224439241\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"direct_first_name\",\"name\":\"Direct First name\",\"dataType\":\"string\",\"id\":\"29311715675220848\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"direct_last_name\",\"name\":\"Direct Last name\",\"dataType\":\"string\",\"id\":\"20511715675238230\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"direct_full_name\",\"name\":\"Direct Full name\",\"dataType\":\"string\",\"id\":\"40141715777939624\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"direct_email\",\"name\":\"Direct email\",\"dataType\":\"string\",\"id\":\"36721717097550149\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"position_id\",\"name\":\"Position ID\",\"dataType\":\"string\",\"id\":\"80581717093206114\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"position\",\"name\":\"Position\",\"dataType\":\"string\",\"id\":\"28531715675330046\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"position_name_eng\",\"name\":\"Position name eng\",\"dataType\":\"string\",\"id\":\"14771717094032672\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"division_id\",\"name\":\"Division id\",\"dataType\":\"link\",\"id\":\"46921715675477884\",\"link\":\"structure\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"division_name\",\"name\":\"Division name\",\"dataType\":\"string\",\"id\":\"31271717093221879\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"webuser_id\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"21401717671535287\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[\"role\"],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"indexExists\":true,\"array\":false}]",
            "jsonGroupSettings": "[]",
            "jsonViewIdSettings": "[{\"sysName\":\"employee_full_name\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-09-11T11:30:07Z",
            "createBy": 23015,
            "changedBy": 23015,
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
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false
            },
            "folderId": 33820256
        },
        "99325488": {
            "networkID": 21335,
            "id": 99325488,
            "dateCreated": "2024-05-14T07:49:49Z",
            "hidden": false,
            "dateHidden": null,
            "name": "Structure",
            "sysName": "structure",
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"division_id\",\"name\":\"Division id\",\"dataType\":\"number\",\"id\":\"58271715673541979\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"division_name\",\"name\":\"Division name\",\"dataType\":\"string\",\"id\":\"63201715673599255\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"full_hierarchy\",\"name\":\"Full hierarchy\",\"dataType\":\"string\",\"id\":\"24721715777762327\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"division_num\",\"name\":\"Division num\",\"dataType\":\"string\",\"id\":\"62831721209206145\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false}]",
            "jsonGroupSettings": "[]",
            "jsonViewIdSettings": "[{\"sysName\":\"division_name\"},{\"sysName\":\"full_hierarchy\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-09-11T11:30:20Z",
            "createBy": 23015,
            "changedBy": 23015,
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
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false
            },
            "folderId": 33820256
        },
        "99325500": {
            "networkID": 21335,
            "id": 99325500,
            "dateCreated": "2024-05-30T20:59:17Z",
            "hidden": false,
            "dateHidden": null,
            "name": "Analytics for OPS",
            "sysName": "analytics_for_ops",
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"name\",\"dataType\":\"string\",\"name\":\"name\",\"id\":\"88871717102762537\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false}]",
            "jsonGroupSettings": "[]",
            "jsonViewIdSettings": "[]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-05-30T20:59:33Z",
            "createBy": 23015,
            "changedBy": 23015,
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
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false
            },
            "folderId": 33811358
        },
        "99340946": {
            "networkID": 21335,
            "id": 99340946,
            "dateCreated": "2024-09-04T06:24:48Z",
            "hidden": false,
            "dateHidden": null,
            "name": "staff_transfer",
            "sysName": "staff_transfer",
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"current_org_structure\",\"name\":\"Текущая организационная структура\",\"dataType\":\"string\",\"id\":\"10551726596275813\",\"link\":\"\",\"group\":\"1725431445711\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"new_company\",\"name\":\"Новая организация\",\"dataType\":\"link\",\"id\":\"15551726142220035\",\"link\":\"st_company\",\"group\":\"1725431600480\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"current_position\",\"name\":\"Текущая должность сотрудника\",\"dataType\":\"string\",\"id\":\"18221725431460573\",\"link\":\"\",\"group\":\"1725431445711\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"current_direct_name\",\"name\":\"ФИО текущего руководителя \",\"dataType\":\"link\",\"id\":\"22651725431263787\",\"link\":\"employees\",\"group\":\"1725431234450\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"new_org_structure\",\"name\":\"Новая организационная структура\",\"dataType\":\"string\",\"id\":\"22651726596356199\",\"link\":\"\",\"group\":\"1725431600480\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"user_creator\",\"name\":\"Кто создал заявку\",\"dataType\":\"link\",\"id\":\"24901725433580444\",\"link\":\"employees\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"company\",\"name\":\"Текущая организация\",\"dataType\":\"link\",\"id\":\"27451726045070790\",\"link\":\"st_company\",\"group\":\"1725431445711\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"current_cost_center\",\"name\":\"Текущий кост-центр (Optimacros)\",\"dataType\":\"string\",\"id\":\"28041726656199647\",\"link\":\"\",\"group\":\"1726051810227\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"all_user_ids\",\"name\":\"Все пользователи, относящиеся к заявке\",\"dataType\":\"arrayLink\",\"id\":\"29371725433750833\",\"link\":\"employees\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"json\":false},{\"sysName\":\"number\",\"name\":\"Номер заявки\",\"dataType\":\"string\",\"id\":\"29661725433629762\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"logs\",\"name\":\"История изменений\",\"dataType\":\"arrayLink\",\"id\":\"30101725433610853\",\"link\":\"st_logs\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"json\":false},{\"sysName\":\"planned_date\",\"name\":\"Планируемая дата перевода\",\"dataType\":\"date\",\"id\":\"30281725431329024\",\"link\":\"\",\"group\":\"1725431234450\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.YYYY\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"budget_holder\",\"name\":\"Владелец бюджета (или лицо его заменяющее)\",\"dataType\":\"link\",\"id\":\"30591726656292225\",\"link\":\"employees\",\"group\":\"1725431710596\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"new_position_id\",\"name\":\"Новый код позиции (из УШР) \",\"dataType\":\"string\",\"id\":\"33951726142259108\",\"link\":null,\"group\":\"1725431600480\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"analytics_ops\",\"name\":\"Текущая категория персонала (Analytics for Ops)\",\"dataType\":\"link\",\"id\":\"36071726045140500\",\"link\":\"analytics_for_ops\",\"group\":\"1725431445711\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"add_approval_in\",\"name\":\"Дополнительный согласующий\",\"dataType\":\"link\",\"id\":\"38281727073206486\",\"link\":\"add_approval\",\"group\":\"1725431710596\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"new_total_salary\",\"name\":\"Новый совокупный доход, gross руб/мес\",\"dataType\":\"decimal\",\"id\":\"38891726145546263\",\"link\":\"\",\"group\":\"1726145208794\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"new_rkisn\",\"name\":\"Новый РКиСН\",\"dataType\":\"decimal\",\"id\":\"40591726145349693\",\"link\":\"\",\"group\":\"1726145208794\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"replacement_type\",\"name\":\"Тип перевода\",\"dataType\":\"link\",\"id\":\"42371726044856787\",\"link\":\"st_contract_type\",\"group\":\"1725431234450\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"current_salary_without_rkisn\",\"name\":\"Текущий оклад без РКиСН, gross руб/мес\",\"dataType\":\"decimal\",\"id\":\"42431726051884641\",\"link\":\"\",\"group\":\"1726051810227\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"current_up_direct\",\"name\":\"Текущий верхнеуровневый руководитель (руководитель нанимающего менеджера) для Non-TECH / Директор департамента для TECH\",\"dataType\":\"link\",\"id\":\"43321725431723921\",\"link\":\"employees\",\"group\":\"1725431710596\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"replacement\",\"name\":\"Замена сотрудника\",\"dataType\":\"boolean\",\"id\":\"44491726044721571\",\"link\":\"\",\"group\":\"1725431234450\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Да\",\"Нет\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"position_id\",\"name\":\"Текущий код позиции (из УШР)\",\"dataType\":\"string\",\"id\":\"45681726045097116\",\"link\":null,\"group\":\"1725431445711\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"new_position\",\"name\":\"Новая должность сотрудника\",\"dataType\":\"link\",\"id\":\"46231725431618308\",\"link\":\"employees\",\"group\":\"1725431600480\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"new_division\",\"name\":\"Новое подразделение сотрудника\",\"dataType\":\"link\",\"id\":\"47731725431619206\",\"link\":\"structure\",\"group\":\"1725431600480\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"new_cost_center\",\"name\":\"Новый кост-центр (Optimacros)\",\"dataType\":\"string\",\"id\":\"48901726656261119\",\"link\":\"\",\"group\":\"1726145208794\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"period_bonus\",\"name\":\"Текущая периодичность выплаты премии\",\"dataType\":\"link\",\"id\":\"48991726051831109\",\"link\":\"st_bonus\",\"group\":\"1726051810227\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"new_period_bonus\",\"name\":\"Новая периодичность выплаты премии\",\"dataType\":\"link\",\"id\":\"49131726145232067\",\"link\":\"st_bonus\",\"group\":\"1726145208794\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"budget_date\",\"name\":\"Бюджетная дата преревода\",\"dataType\":\"date\",\"id\":\"49131726656143374\",\"link\":\"\",\"group\":\"1725431234450\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.YYYY\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"new_up_direct\",\"name\":\"Верхнеуровневый руководитель (руководитель нанимающего менеджера) для Non-TECH / Директор департамента для TECH\",\"dataType\":\"link\",\"id\":\"49461726638728534\",\"link\":\"employees\",\"group\":\"1725431710596\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"status\",\"name\":\"Статус\",\"dataType\":\"link\",\"id\":\"53231725433518277\",\"link\":\"st_statuses\",\"group\":\"0\",\"tags\":\"\",\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[\"id\"],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":true,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"orgdev\",\"name\":\"Добавить Оргдев\",\"dataType\":\"boolean\",\"id\":\"54541726653864757\",\"link\":\"\",\"group\":\"1726145208794\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Да\",\"Нет\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"responsible_roles\",\"name\":\"Ответственные роли\",\"dataType\":\"arrayLink\",\"id\":\"55271725433718683\",\"link\":\"roles\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"json\":false},{\"sysName\":\"current_cnb\",\"name\":\"Текущий C&B\",\"dataType\":\"link\",\"id\":\"58661726052187313\",\"link\":\"employees\",\"group\":\"1725431710596\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"replacement_reason\",\"name\":\"Причина замены\",\"dataType\":\"link\",\"id\":\"61451727074752275\",\"link\":\"st_reason_replacement\",\"group\":\"1725431234450\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"actual_date\",\"name\":\"Фактическая дата перевода\",\"dataType\":\"date\",\"id\":\"64531727078660236\",\"link\":\"\",\"group\":\"1725431600480\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.YYYY\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"repl_empl_name\",\"name\":\"ФИО заменяемого сотрудника\",\"dataType\":\"link\",\"id\":\"65551726044774422\",\"link\":\"employees\",\"group\":\"1725431234450\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"current_hrbp\",\"name\":\"Текущий HR BP\",\"dataType\":\"link\",\"id\":\"68841726044632237\",\"link\":\"employees\",\"group\":\"1725431710596\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"total_increase_per\",\"name\":\"Процент прироста совокупного дохода(%)\",\"dataType\":\"decimal\",\"id\":\"69461727080268194\",\"link\":\"\",\"group\":\"1726145208794\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"new_hrbp\",\"name\":\"Новый HR BP\",\"dataType\":\"link\",\"id\":\"69701725431725005\",\"link\":\"employees\",\"group\":\"1725431710596\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"new_per_bonus\",\"name\":\"Новый процент премии\",\"dataType\":\"number\",\"id\":\"71771726145483919\",\"link\":\"\",\"group\":\"1726145208794\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"comment_orgdev\",\"name\":\"Примечание для Оргдев\",\"dataType\":\"string\",\"id\":\"71921726653914186\",\"link\":\"\",\"group\":\"1726145208794\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"position_rate\",\"name\":\"Количество ставок на новой позиции\",\"dataType\":\"string\",\"id\":\"72981726142316557\",\"link\":null,\"group\":\"1725431600480\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"last_change_date\",\"name\":\"Дата последнего изменения\",\"dataType\":\"date\",\"id\":\"73651725433775126\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.YYYY\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"employee_name\",\"name\":\"ФИО сотрудника\",\"dataType\":\"link\",\"id\":\"74491725431250990\",\"link\":\"employees\",\"group\":\"1725431234450\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"current_total_salary\",\"name\":\"Текущий совокупный доход, gross руб/мес\",\"dataType\":\"decimal\",\"id\":\"74621726052058609\",\"link\":\"\",\"group\":\"1726051810227\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"add_approval_out\",\"name\":\"Дополнительный согласующий\",\"dataType\":\"link\",\"id\":\"74711727073168576\",\"link\":\"add_approval\",\"group\":\"1725431710596\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"current_division\",\"name\":\"Текущее подразделение сотрудника\",\"dataType\":\"link\",\"id\":\"75661725431461525\",\"link\":\"structure\",\"group\":\"1725431445711\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"new_cnb\",\"name\":\"Принимающий С&B\",\"dataType\":\"link\",\"id\":\"75681726654003783\",\"link\":\"employees\",\"group\":\"1725431710596\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"responsible_employee_id\",\"name\":\"Ответственный за текущий этап\",\"dataType\":\"link\",\"id\":\"77841725433699314\",\"link\":\"employees\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"hr_admin\",\"name\":\"HR Admin\",\"dataType\":\"link\",\"id\":\"80691726655523102\",\"link\":\"employees\",\"group\":\"1725431710596\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"date_text\",\"name\":\"Дата\",\"dataType\":\"string\",\"id\":\"82361725433675003\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"last_user\",\"name\":\"Кем изменено\",\"dataType\":\"link\",\"id\":\"85461725433561607\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"rkisn\",\"name\":\"РКиСН\",\"dataType\":\"decimal\",\"id\":\"85731726051943563\",\"link\":\"\",\"group\":\"1726051810227\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"role_budget_holder\",\"name\":\"Добавить Владельца бюджета в качестве:\",\"dataType\":\"boolean\",\"id\":\"86541727248705190\",\"link\":\"\",\"group\":\"1725431710596\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Cогласующего лица\",\"Получателя уведомления\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"new_salary_without_rkisn\",\"name\":\"Новый оклад без РКиСН, gross руб/мес\",\"dataType\":\"decimal\",\"id\":\"87511726145291105\",\"link\":\"\",\"group\":\"1726145208794\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"prev_status\",\"name\":\"Предыдущий статус\",\"dataType\":\"link\",\"id\":\"94001725433553894\",\"link\":\"st_statuses\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"contract_end_date\",\"name\":\"Дата окончания договора\",\"dataType\":\"date\",\"id\":\"94091726044922925\",\"link\":\"\",\"group\":\"1725431234450\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.YYYY\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"new_analytics_ops\",\"name\":\"Новая категория персонала (Analytics for Ops)\",\"dataType\":\"link\",\"id\":\"94121726142293084\",\"link\":\"analytics_for_ops\",\"group\":\"1725431600480\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"date\",\"name\":\"Дата создания заявки\",\"dataType\":\"date\",\"id\":\"96891725433646615\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.YYYY\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"per_bonus\",\"name\":\"Текущий процент премии\",\"dataType\":\"number\",\"id\":\"97081726052045965\",\"link\":\"\",\"group\":\"1726051810227\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"current_salary_with_rkisn\",\"name\":\"Текущий оклад, включая РКиСН и другие надбавки, gross руб/мес\",\"dataType\":\"decimal\",\"id\":\"98801726051969675\",\"link\":\"\",\"group\":\"1726051810227\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"new_salary_with_rkisn\",\"name\":\"Новый оклад, включая РКиСН и другие надбавки, gross руб/мес\",\"dataType\":\"decimal\",\"id\":\"99131726145453730\",\"link\":\"\",\"group\":\"1726145208794\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false}]",
            "jsonGroupSettings": "[{\"name\":\"Новые данные по сотруднику\",\"id\":1725431600480,\"order\":2},{\"name\":\"Согласующие лица\",\"id\":1725431710596,\"order\":5},{\"name\":\"Новые условия компенсации\",\"id\":1726145208794,\"order\":4},{\"name\":\"Текущие данные по сотруднику\",\"id\":1725431445711,\"order\":1},{\"name\":\"Общие данные о переводе\",\"id\":1725431234450,\"order\":0},{\"name\":\"Текущие условия компенсации\",\"id\":1726051810227,\"order\":3}]",
            "jsonViewIdSettings": null,
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-09-25T09:18:14Z",
            "createBy": 23015,
            "changedBy": 23015,
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
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false
            },
            "folderId": 33819483
        },
        "99340948": {
            "networkID": 21335,
            "id": 99340948,
            "dateCreated": "2024-09-04T07:14:59Z",
            "hidden": false,
            "dateHidden": null,
            "name": "st_statuses",
            "sysName": "st_statuses",
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false},{\"sysName\":\"status\",\"dataType\":\"string\",\"name\":\"Cтатус\",\"id\":\"30001725434156506\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false},{\"sysName\":\"prev_status\",\"dataType\":\"arrayLink\",\"name\":\"Предыдущий статус\",\"id\":\"60381725434163644\",\"link\":\"statuses\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"status\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": false,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-09-04T07:16:34Z",
            "createBy": 23015,
            "changedBy": 23015,
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
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false
            },
            "folderId": 33819484
        },
        "99342344": {
            "networkID": 21335,
            "id": 99342344,
            "dateCreated": "2024-09-11T06:48:58Z",
            "hidden": false,
            "dateHidden": null,
            "name": "st_logs",
            "sysName": "st_logs",
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"array\":false},{\"sysName\":\"date\",\"dataType\":\"date\",\"name\":\"Дата изменения\",\"id\":\"58751717136726535\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"array\":false},{\"sysName\":\"text\",\"dataType\":\"string\",\"name\":\"Изменение заявки\",\"id\":\"13041717136793732\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"array\":false},{\"sysName\":\"user\",\"dataType\":\"link\",\"name\":\"Кто внес изменения\",\"id\":\"83101717136837464\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":true,\"array\":false},{\"sysName\":\"ticket\",\"dataType\":\"link\",\"name\":\"Номер заявки\",\"id\":\"45681717136838095\",\"link\":\"staff_transfer\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":true,\"array\":false},{\"sysName\":\"date_display\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"87491717137718793\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"array\":false}]",
            "jsonGroupSettings": "[]",
            "jsonViewIdSettings": null,
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":false,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-09-12T10:57:40Z",
            "createBy": 23015,
            "changedBy": 23015,
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
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false
            },
            "folderId": 33819484
        },
        "99342650": {
            "networkID": 21335,
            "id": 99342650,
            "dateCreated": "2024-09-12T11:15:50Z",
            "hidden": false,
            "dateHidden": null,
            "name": "st_company",
            "sysName": "st_company",
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"company\",\"name\":\"Company\",\"dataType\":\"string\",\"id\":\"72701726139775701\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"company\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-09-12T11:16:33Z",
            "createBy": 23015,
            "changedBy": 23015,
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
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false
            },
            "folderId": 33819484
        },
        "99342651": {
            "networkID": 21335,
            "id": 99342651,
            "dateCreated": "2024-09-12T11:26:07Z",
            "hidden": false,
            "dateHidden": null,
            "name": "st_bonus",
            "sysName": "st_bonus",
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"bonus\",\"name\":\"Бонус\",\"dataType\":\"string\",\"id\":\"89351726140385687\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"bonus\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-09-12T11:26:35Z",
            "createBy": 23015,
            "changedBy": 23015,
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
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false
            },
            "folderId": 33819484
        },
        "99342653": {
            "networkID": 21335,
            "id": 99342653,
            "dateCreated": "2024-09-12T11:48:36Z",
            "hidden": false,
            "dateHidden": null,
            "name": "st_contract_type",
            "sysName": "st_contract_type",
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"type\",\"name\":\"Тип\",\"dataType\":\"string\",\"id\":\"68131726141720189\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"type\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-09-12T11:48:48Z",
            "createBy": 23015,
            "changedBy": 23015,
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
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false
            },
            "folderId": 33819484
        },
        "99344956": {
            "networkID": 21335,
            "id": 99344956,
            "dateCreated": "2024-09-23T06:21:50Z",
            "hidden": false,
            "dateHidden": null,
            "name": "Add approval",
            "sysName": "add_approval",
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false},{\"sysName\":\"position\",\"name\":\"Должность\",\"dataType\":\"string\",\"id\":\"23441727072534412\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false},{\"sysName\":\"email\",\"name\":\"Email\",\"dataType\":\"link\",\"id\":\"30331727072535530\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true},{\"sysName\":\"full_name\",\"name\":\"Полное имя\",\"dataType\":\"link\",\"id\":\"82061727072516196\",\"link\":\"employees\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true},{\"sysName\":\"division\",\"name\":\"Подразделение\",\"dataType\":\"link\",\"id\":\"94381727072585670\",\"link\":\"structure\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"full_name\"},{\"sysName\":\"position\"},{\"sysName\":\"email\"},{\"sysName\":\"division\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-09-23T06:25:00Z",
            "createBy": 23015,
            "changedBy": 23015,
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
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false
            },
            "folderId": 33819484
        },
        "99344980": {
            "networkID": 21335,
            "id": 99344980,
            "dateCreated": "2024-09-23T06:53:51Z",
            "hidden": false,
            "dateHidden": null,
            "name": "st_reason_replacement",
            "sysName": "st_reason_replacement",
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false},{\"sysName\":\"reason\",\"name\":\"Причина\",\"dataType\":\"string\",\"id\":\"26151726141366314\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false}]",
            "jsonGroupSettings": "[]",
            "jsonViewIdSettings": null,
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": null,
            "createBy": 23015,
            "changedBy": null,
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
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false
            },
            "folderId": 33819484
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
            "array": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "new_hrbp",
            "dataType": "link",
            "name": "Новый HR BP",
            "id": "69701725431725005",
            "link": "employees",
            "group": "1725431710596",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "current_up_direct",
            "dataType": "link",
            "name": "Текущий верхнеуровневый руководитель (руководитель нанимающего менеджера) для Non-TECH / Директор департамента для TECH",
            "id": "43321725431723921",
            "link": "employees",
            "group": "1725431710596",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "new_division",
            "dataType": "link",
            "name": "Новое подразделение сотрудника",
            "id": "47731725431619206",
            "link": "structure",
            "group": "1725431600480",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "new_position",
            "dataType": "link",
            "name": "Новая должность сотрудника",
            "id": "46231725431618308",
            "link": "employees",
            "group": "1725431600480",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "current_division",
            "dataType": "link",
            "name": "Текущее подразделение сотрудника",
            "id": "75661725431461525",
            "link": "structure",
            "group": "1725431445711",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "current_position",
            "dataType": "string",
            "name": "Текущая должность сотрудника",
            "id": "18221725431460573",
            "link": "",
            "group": "1725431445711",
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "planned_date",
            "dataType": "date",
            "name": "Планируемая дата перевода",
            "id": "30281725431329024",
            "link": "",
            "group": "1725431234450",
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
                "timeFormat": "",
                "isUTC": "false"
            },
            "groupName": null,
            "array": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "current_direct_name",
            "dataType": "link",
            "name": "ФИО текущего руководителя ",
            "id": "22651725431263787",
            "link": "employees",
            "group": "1725431234450",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "employee_name",
            "dataType": "link",
            "name": "ФИО сотрудника",
            "id": "74491725431250990",
            "link": "employees",
            "group": "1725431234450",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "last_user",
            "dataType": "link",
            "name": "Кем изменено",
            "id": "85461725433561607",
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
            "array": false,
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "number",
            "dataType": "string",
            "name": "Номер заявки",
            "id": "29661725433629762",
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
            "array": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "date",
            "dataType": "date",
            "name": "Дата создания заявки",
            "id": "96891725433646615",
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
            "array": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "date_text",
            "dataType": "string",
            "name": "Дата",
            "id": "82361725433675003",
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "last_change_date",
            "dataType": "date",
            "name": "Дата последнего изменения",
            "id": "73651725433775126",
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
            "array": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "logs",
            "dataType": "arrayLink",
            "name": "История изменений",
            "id": "30101725433610853",
            "link": "st_logs",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": false,
            "arrayLink": true,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "prev_status",
            "dataType": "link",
            "name": "Предыдущий статус",
            "id": "94001725433553894",
            "link": "st_statuses",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "current_cnb",
            "dataType": "link",
            "name": "Текущий C&B",
            "id": "58661726052187313",
            "link": "employees",
            "group": "1725431710596",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "current_total_salary",
            "dataType": "decimal",
            "name": "Текущий совокупный доход, gross руб/мес",
            "id": "74621726052058609",
            "link": "",
            "group": "1726051810227",
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "per_bonus",
            "dataType": "number",
            "name": "Текущий процент премии",
            "id": "97081726052045965",
            "link": "",
            "group": "1726051810227",
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
            "format": "positiveNum",
            "formatOptions": null,
            "groupName": null,
            "array": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "current_salary_with_rkisn",
            "dataType": "decimal",
            "name": "Текущий оклад, включая РКиСН и другие надбавки, gross руб/мес",
            "id": "98801726051969675",
            "link": "",
            "group": "1726051810227",
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "rkisn",
            "dataType": "decimal",
            "name": "РКиСН",
            "id": "85731726051943563",
            "link": "",
            "group": "1726051810227",
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "current_salary_without_rkisn",
            "dataType": "decimal",
            "name": "Текущий оклад без РКиСН, gross руб/мес",
            "id": "42431726051884641",
            "link": "",
            "group": "1726051810227",
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "period_bonus",
            "dataType": "link",
            "name": "Текущая периодичность выплаты премии",
            "id": "48991726051831109",
            "link": "st_bonus",
            "group": "1726051810227",
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
            "array": false,
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "analytics_ops",
            "dataType": "link",
            "name": "Текущая категория персонала (Analytics for Ops)",
            "id": "36071726045140500",
            "link": "analytics_for_ops",
            "group": "1725431445711",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "position_id",
            "dataType": "string",
            "name": "Текущий код позиции (из УШР)",
            "id": "45681726045097116",
            "link": null,
            "group": "1725431445711",
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "company",
            "dataType": "link",
            "name": "Текущая организация",
            "id": "27451726045070790",
            "link": "st_company",
            "group": "1725431445711",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "contract_end_date",
            "dataType": "date",
            "name": "Дата окончания договора",
            "id": "94091726044922925",
            "link": "",
            "group": "1725431234450",
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
                "isUTC": "false"
            },
            "groupName": null,
            "array": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "replacement_type",
            "dataType": "link",
            "name": "Тип перевода",
            "id": "42371726044856787",
            "link": "st_contract_type",
            "group": "1725431234450",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "repl_empl_name",
            "dataType": "link",
            "name": "ФИО заменяемого сотрудника",
            "id": "65551726044774422",
            "link": "employees",
            "group": "1725431234450",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "current_hrbp",
            "dataType": "link",
            "name": "Текущий HR BP",
            "id": "68841726044632237",
            "link": "employees",
            "group": "1725431710596",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "user_creator",
            "dataType": "link",
            "name": "Кто создал заявку",
            "id": "24901725433580444",
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
            "array": false,
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "position_rate",
            "dataType": "string",
            "name": "Количество ставок на новой позиции",
            "id": "72981726142316557",
            "link": null,
            "group": "1725431600480",
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "new_analytics_ops",
            "dataType": "link",
            "name": "Новая категория персонала (Analytics for Ops)",
            "id": "94121726142293084",
            "link": "analytics_for_ops",
            "group": "1725431600480",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "new_position_id",
            "dataType": "string",
            "name": "Новый код позиции (из УШР) ",
            "id": "33951726142259108",
            "link": null,
            "group": "1725431600480",
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "new_company",
            "dataType": "link",
            "name": "Новая организация",
            "id": "15551726142220035",
            "link": "st_company",
            "group": "1725431600480",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "new_per_bonus",
            "dataType": "number",
            "name": "Новый процент премии",
            "id": "71771726145483919",
            "link": "",
            "group": "1726145208794",
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
            "format": "positiveNum",
            "formatOptions": null,
            "groupName": null,
            "array": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "new_total_salary",
            "dataType": "decimal",
            "name": "Новый совокупный доход, gross руб/мес",
            "id": "38891726145546263",
            "link": "",
            "group": "1726145208794",
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "new_salary_with_rkisn",
            "dataType": "decimal",
            "name": "Новый оклад, включая РКиСН и другие надбавки, gross руб/мес",
            "id": "99131726145453730",
            "link": "",
            "group": "1726145208794",
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "new_rkisn",
            "dataType": "decimal",
            "name": "Новый РКиСН",
            "id": "40591726145349693",
            "link": "",
            "group": "1726145208794",
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "new_salary_without_rkisn",
            "dataType": "decimal",
            "name": "Новый оклад без РКиСН, gross руб/мес",
            "id": "87511726145291105",
            "link": "",
            "group": "1726145208794",
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "new_period_bonus",
            "dataType": "link",
            "name": "Новая периодичность выплаты премии",
            "id": "49131726145232067",
            "link": "st_bonus",
            "group": "1726145208794",
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
            "array": false,
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "new_org_structure",
            "dataType": "string",
            "name": "Новая организационная структура",
            "id": "22651726596356199",
            "link": "",
            "group": "1725431600480",
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "current_org_structure",
            "dataType": "string",
            "name": "Текущая организационная структура",
            "id": "10551726596275813",
            "link": "",
            "group": "1725431445711",
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "new_up_direct",
            "dataType": "link",
            "name": "Верхнеуровневый руководитель (руководитель нанимающего менеджера) для Non-TECH / Директор департамента для TECH",
            "id": "49461726638728534",
            "link": "employees",
            "group": "1725431710596",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "new_cnb",
            "dataType": "link",
            "name": "Принимающий С&B",
            "id": "75681726654003783",
            "link": "employees",
            "group": "1725431710596",
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
            "array": false,
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "comment_orgdev",
            "dataType": "string",
            "name": "Примечание для Оргдев",
            "id": "71921726653914186",
            "link": "",
            "group": "1726145208794",
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "orgdev",
            "dataType": "boolean",
            "name": "Добавить Оргдев",
            "id": "54541726653864757",
            "link": "",
            "group": "1726145208794",
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
                    "Да",
                    "Нет"
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "hr_admin",
            "dataType": "link",
            "name": "HR Admin",
            "id": "80691726655523102",
            "link": "employees",
            "group": "1725431710596",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "budget_holder",
            "dataType": "link",
            "name": "Владелец бюджета (или лицо его заменяющее)",
            "id": "30591726656292225",
            "link": "employees",
            "group": "1725431710596",
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
            "array": false,
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "new_cost_center",
            "dataType": "string",
            "name": "Новый кост-центр (Optimacros)",
            "id": "48901726656261119",
            "link": "",
            "group": "1726145208794",
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
            "array": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "current_cost_center",
            "dataType": "string",
            "name": "Текущий кост-центр (Optimacros)",
            "id": "28041726656199647",
            "link": "",
            "group": "1726051810227",
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
            "array": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "budget_date",
            "dataType": "date",
            "name": "Бюджетная дата преревода",
            "id": "49131726656143374",
            "link": "",
            "group": "1725431234450",
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
                "dateFormat": "DD.MM.YYYY",
                "timeFormat": "",
                "isUTC": "false"
            },
            "groupName": null,
            "array": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "add_approval_in",
            "dataType": "link",
            "name": "Дополнительный согласующий",
            "id": "38281727073206486",
            "link": "add_approval",
            "group": "1725431710596",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "add_approval_out",
            "dataType": "link",
            "name": "Дополнительный согласующий",
            "id": "74711727073168576",
            "link": "add_approval",
            "group": "1725431710596",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "replacement_reason",
            "dataType": "link",
            "name": "Причина замены",
            "id": "61451727074752275",
            "link": "st_reason_replacement",
            "group": "1725431234450",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "replacement",
            "dataType": "boolean",
            "name": "Замена сотрудника",
            "id": "44491726044721571",
            "link": "",
            "group": "1725431234450",
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
            "formatOptions": {
                "customOptionLabel": "My option",
                "keyValue": {
                    "key": "key",
                    "value": "value",
                    "button": "One more"
                },
                "dateLocale": "en-gb",
                "booleanOptions": [
                    "Да",
                    "Нет"
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "actual_date",
            "dataType": "date",
            "name": "Фактическая дата перевода",
            "id": "64531727078660236",
            "link": "",
            "group": "1725431600480",
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
                "isUTC": "false"
            },
            "groupName": null,
            "array": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "total_increase_per",
            "dataType": "decimal",
            "name": "Процент прироста совокупного дохода(%)",
            "id": "69461727080268194",
            "link": "",
            "group": "1726145208794",
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
        },
        {
            "sysName": "role_budget_holder",
            "dataType": "boolean",
            "name": "Добавить Владельца бюджета в качестве:",
            "id": "86541727248705190",
            "link": "",
            "group": "1725431710596",
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
            "formatOptions": {
                "customOptionLabel": "My option",
                "keyValue": {
                    "key": "key",
                    "value": "value",
                    "button": "One more"
                },
                "dateLocale": "en-gb",
                "booleanOptions": [
                    "Cогласующего лица",
                    "Получателя уведомления"
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false
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
    "role": "jo_hrd,jo_recruiter,st_agreement,st_hrbp",
    "who_delegated_ids": "",
    "lastName": "Ershov",
    "firstName": "Pavel",
    "token": "e4728cb6-1fe7-4efc-9fcc-7c579c09a113",
    "whom_delegate_ids": "",
    "notifications_counter": "",
    "nid": 21335,
    "user": "aleksandra.kalina@lamoda.ru",
    "userpic": "https://api.directual.com/fileUploaded/basic-template/5fe98a71-196e-4f0d-98cb-be3ee8968fbf.jpg",
    "id": "aleksandra.kalina@lamoda.ru"
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
