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
    "sl": "job_offers_n-4",
    "pageSize": "10",
    "headerField": null,
    "params": {
        "steps": [
            {
                "id": "step_1717401600886",
                "sysName": "progress bar",
                "elements": [
                    {
                        "id": "elmnt_1720014923287",
                        "type": "text",
                        "paraText": "<style>.lmd-offer p {margin:10px 0}</style>\n<div classs=\"lmd-offer\">\n<h2>Заявка {{number}}</h2>\n<p>Дата создания: {{date}}</p>\n<p>Статус заявки: {{status.status}}</p>\n<p>Кем создано: {{user_creator.employee_full_name}}</p>\n  <p>Ответственный за этап: {{responsible_employee_id.employee_full_name}}</p>\n<p>Дата последнего изменения:\n  {{last_change_date}}</p>\n</div>",
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1723491418754",
                                "_conditionalView_field": "type_id",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "N-4"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718121437095",
                        "type": "steps",
                        "_formSteps": {
                            "stepsOrder": [
                                "approval_cnb",
                                "approval_hr_bp",
                                "approval_direct",
                                "approval_direct_up1",
                                "present_offer",
                                "approval_org_dev",
                                "offer_accepted",
                                "rejected",
                                "cancel",
                                "offer_refused",
                                "exit_confirmation",
                                "candidate_applied_job",
                                "candidate_didnt_applied_job"
                            ],
                            "settings": {
                                "steps": {
                                    "approval_cnb": true,
                                    "approval_hrbp": true,
                                    "approval_budget_holder": true,
                                    "approval_direct": true,
                                    "approval_direct_up1": true,
                                    "approval_org_dev": true,
                                    "rejected": true,
                                    "cancel": true,
                                    "approval_hr_bp": true,
                                    "present_offer": true,
                                    "approval_budget_holder_copy": false,
                                    "offer_refused": true,
                                    "offer_accepted": true,
                                    "candidate_applied_job": true,
                                    "candidate_didnt_applied_job": true,
                                    "exit_confirmation": true
                                }
                            },
                            "stepSettings": {
                                "approval_cnb": {
                                    "title": "Согласование СnB"
                                },
                                "approval_hrbp": {
                                    "title": "Согласование HR BP"
                                },
                                "approval_budget_holder": {
                                    "title": "Согласование Держатель бюджета"
                                },
                                "approval_direct": {
                                    "title": "Уведомление Руководитель"
                                },
                                "approval_direct_up1": {
                                    "title": "Уведомление Верхнеуровневый руководитель"
                                },
                                "approval_org_dev": {
                                    "title": "Уведомление Орг дев"
                                },
                                "rejected": {
                                    "title": "Отозвана"
                                },
                                "cancel": {
                                    "title": "Отменена"
                                },
                                "approval_hr_bp": {
                                    "title": "Согласование HR BP"
                                },
                                "present_offer": {
                                    "title": "Презентация оффера кандидату"
                                },
                                "offer_accepted": {
                                    "title": "Кандидат принял оффер"
                                },
                                "offer_refused": {
                                    "title": "Кандидат отклонил оффер"
                                },
                                "candidate_applied_job": {
                                    "title": "Кандидат вышел на работу"
                                },
                                "candidate_didnt_applied_job": {
                                    "title": "Кандидат не вышел на работу"
                                },
                                "exit_confirmation": {
                                    "title": "Подтверждение выхода сотрудника"
                                }
                            }
                        },
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1723491438730",
                                "_conditionalView_field": "type_id",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "N-4"
                            }
                        ]
                    }
                ],
                "sectionVisibility": "always",
                "sectionCustomVisibility": "approval_cnb"
            },
            {
                "id": "default_step",
                "sysName": "approval_cnb",
                "elements": [
                    {
                        "id": "elmnt_1724744147250",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17247441545690.34221104431021311220433",
                                "_field": "budget_date",
                                "_conditionalView": false,
                                "_field_required": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1724744176138",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "jo_cnb"
                                    },
                                    {
                                        "id": "condition_1724744193657",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{cnb.webuser_id.whom_delegate_ids}},{{cnb.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    }
                ],
                "sectionVisibility": "default"
            },
            {
                "id": "step_copy_1717665813221",
                "sysName": "approval_hr_bp",
                "elements": [
                    {
                        "id": "elmnt_1717401969375",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174019861660.44033242412004300134131",
                                "_field": "reason_vacancy",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "reason_of_vacancy",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718906597289",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "jo_hrbp"
                                    },
                                    {
                                        "id": "condition_1724745186275",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.whom_delegate_ids}},{{hr_bp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401972782",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174020491080.040423420111410243244003",
                                "_field": "resigning_empl_full_name",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718906641455",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "jo_hrbp"
                                    },
                                    {
                                        "id": "condition_1724745222724",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.whom_delegate_ids}},{{hr_bp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1717402099495",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "replacement,transfer"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1725267905546",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17252679096520.23314114131032311304401",
                                "_field": "resigning_empl_full_name_strng",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1725268120529",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "jo_hrbp"
                                    },
                                    {
                                        "id": "condition_1725268132292",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.whom_delegate_ids}},{{hr_bp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1725267934270",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "another_company"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401973476",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174020816510.12114333434113323312312",
                                "_field": "vacancy_id",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718906672589",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "jo_hrbp"
                                    },
                                    {
                                        "id": "condition_1724745401542",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.whom_delegate_ids}},{{hr_bp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": [
                            {
                                "id": "condition_1724678432743",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "replacement,transfer,another_company"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717682480564",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176824834990.42430222211444120422003",
                                "_field": "id_position",
                                "_field_link_type": "input",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718906827189",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "jo_hrbp"
                                    },
                                    {
                                        "id": "condition_1724745443724",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.whom_delegate_ids}},{{hr_bp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_field_required": true,
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401971964",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174020239580.034443214424020322312221",
                                "_field": "company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "company",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718906845134",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "jo_hrbp"
                                    },
                                    {
                                        "id": "condition_1724745474807",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.whom_delegate_ids}},{{hr_bp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401974161",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174022108360.42432332032431101343242",
                                "_field": "country_city",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718906867969",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "jo_hrbp"
                                    },
                                    {
                                        "id": "condition_1724745504626",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.whom_delegate_ids}},{{hr_bp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401975581",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174022292800.41233342331013140101322",
                                "_field": "candidate_full_name",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718906885922",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401976342",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174022385390.41413003113212134344013",
                                "_field": "position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718906907405",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "jo_hrbp"
                                    },
                                    {
                                        "id": "condition_1724745543484",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.whom_delegate_ids}},{{hr_bp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401977901",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174022611150.034404033342112410322443",
                                "_field": "division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718906930237",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "jo_hrbp"
                                    },
                                    {
                                        "id": "condition_1724745582939",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.whom_delegate_ids}},{{hr_bp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718907049505",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{org_structure_text}}"
                    },
                    {
                        "id": "elmnt_1717401980266",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174034095080.204034201400132330433023",
                                "_field": "direct_full_name",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718908520382",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "jo_hrbp"
                                    },
                                    {
                                        "id": "condition_1724745620914",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.whom_delegate_ids}},{{hr_bp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401981568",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174034417050.3313104212013141213002",
                                "_field": "contract_type",
                                "_field_link_type": "select",
                                "_field_link_pageSize": 0,
                                "_field_arrayLink_endpoint": "contract_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718908541732",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "jo_hrbp"
                                    },
                                    {
                                        "id": "condition_1724745656906",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.whom_delegate_ids}},{{hr_bp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403456249",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174034624150.121233343410212143130322",
                                "_field": "contract_period",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718908557248",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "jo_hrbp"
                                    },
                                    {
                                        "id": "condition_1724745730696",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.whom_delegate_ids}},{{hr_bp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1717403483837",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403457018",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174035278340.33101024023140002031314",
                                "_field": "reason_contract",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718908574165",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "jo_hrbp"
                                    },
                                    {
                                        "id": "condition_1724745762502",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.whom_delegate_ids}},{{hr_bp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1717403537149",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403458048",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174035504160.111023104414034231320012",
                                "_field": "employment_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "employment_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718908621649",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "jo_hrbp"
                                    },
                                    {
                                        "id": "condition_1724745811846",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.whom_delegate_ids}},{{hr_bp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730359643352",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17303596463180.43244323020010143421404",
                                "_field": "job_rate",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1730359657155",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403458753",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174035776140.14144124233210031011332",
                                "_field": "probation",
                                "_field_set_default": true,
                                "_field_default_value": "3 месяца",
                                "_field_use_mask": false,
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718908637750",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "jo_hrbp"
                                    },
                                    {
                                        "id": "condition_1724745850532",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.whom_delegate_ids}},{{hr_bp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403459511",
                        "type": "input",
                        "_actions": [
                            {
                                "id": "17174037621020.03103013304004423013203"
                            }
                        ],
                        "_input_fields": [
                            {
                                "id": "17174037643110.03143223331032342444034",
                                "_field": "assessment_type",
                                "_field_set_default": true,
                                "_field_default_value": "Perfomance review",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718908653066",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "jo_hrbp"
                                    },
                                    {
                                        "id": "condition_1724745889235",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.whom_delegate_ids}},{{hr_bp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_field_required": true,
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "PerfomanceReview",
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403790993",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174037928860.201343434142011013233443",
                                "_field": "cost_center",
                                "_field_required": true,
                                "_input_type": "object",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718908674166",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "jo_hrbp"
                                    },
                                    {
                                        "id": "condition_1724745933359",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.whom_delegate_ids}},{{hr_bp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403803414",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174038054740.13023132041203302304222",
                                "_field": "name_position",
                                "_field_required": true,
                                "_input_type": "object",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718908692783",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "jo_hrbp"
                                    },
                                    {
                                        "id": "condition_1724745973227",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.whom_delegate_ids}},{{hr_bp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403818332",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174038283770.11114422230112401311221",
                                "_field": "analytics_ops",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718908713148",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "jo_hrbp"
                                    },
                                    {
                                        "id": "condition_1724746014171",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.whom_delegate_ids}},{{hr_bp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "analytics_for_ops"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717618621517",
                        "type": "text",
                        "paraText": "<b>Блок C&B</b>"
                    },
                    {
                        "id": "elmnt_1717618692210",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176187132000.203242424112144324403322",
                                "_field": "company_name",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718908124048",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717618694976",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176187499670.20203144142142111134322",
                                "_field": "current_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718908141331",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            },
                            {
                                "id": "17176187512460.40344110231333121101124",
                                "_field": "offer_position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718908153899",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_input_fields_in_a_row": 2
                    },
                    {
                        "id": "elmnt_1717618697756",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176187721430.2123314340231314444413",
                                "_field": "count_empl_direct",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718908167167",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            },
                            {
                                "id": "17176187737450.2323003024303223112313",
                                "_field": "offer_count_empl_direct",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718908181266",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "jo_hrbp"
                                    },
                                    {
                                        "id": "condition_1724746115924",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.whom_delegate_ids}},{{hr_bp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ],
                        "_input_fields_in_a_row": 2
                    },
                    {
                        "id": "elmnt_1717618700298",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176188322270.211013232204120400211132",
                                "_field": "current_salary_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718908195549",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            },
                            {
                                "id": "17176188340780.04130102032020214243111",
                                "_field": "offer_salary_bonus",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718908208850",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_input_fields_in_a_row": 2
                    },
                    {
                        "id": "elmnt_1719253440425",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17192535014690.04414144131310003343204",
                                "_field": "current_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1719253518540",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": ""
                                    }
                                ]
                            },
                            {
                                "id": "17247461756720.40112240210303120313312",
                                "_field": "offer_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1724746238931",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_input_fields_in_a_row": 2
                    },
                    {
                        "id": "elmnt_1719253577832",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17192535815110.13111121141244222300023",
                                "_input_type": "object",
                                "_field": "current_bonus_amount",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1719253601652",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            },
                            {
                                "id": "17247462797570.211341441213443420213443",
                                "_field": "offer_bonus_amount",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1724746315952",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": [
                            {
                                "id": "condition_1719253632739",
                                "_conditionalView_field": "current_bonus",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "quarter,month,half_year,year"
                            }
                        ],
                        "_input_fields_in_a_row": 2
                    },
                    {
                        "id": "elmnt_1724746342517",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17247463500210.14120322043443002323",
                                "_field": "budget_date",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1724746372100",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "jo_hrbp"
                                    },
                                    {
                                        "id": "condition_1724746387079",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.whom_delegate_ids}},{{hr_bp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717619089531",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176190985890.32414434230040222411024",
                                "_field": "cr",
                                "_field_required": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718908333583",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_field": "WebUser.role"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717682511109",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176825135140.24233022141202211044101",
                                "_field": "org_dev",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718908351201",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "jo_hrbp"
                                    },
                                    {
                                        "id": "condition_1724746491416",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.whom_delegate_ids}},{{hr_bp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1729707563755",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17297075700680.44232323001240110211312",
                                "_field": "hr_bp",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1729707637021",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "jo_hrbp"
                                    },
                                    {
                                        "id": "condition_1729707653155",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.whom_delegate_ids}},{{hr_bp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_conditionalView_disable_or_hide": "disable",
                                "_action_conditionals_and_or": "OR",
                                "_field_required": true
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1729707703284",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17297077077870.21130414234201121200343",
                                "_action": "action_1729706912530",
                                "_action_icon": "gates",
                                "_action_button_type": "accent",
                                "_action_oneTime": true,
                                "_action_addTooltip": true,
                                "_action_oneTime_message": "Новый ответственный назначен",
                                "_action_addTooltip_text": "Если согласование данной заявки не входит в Вашу зону ответственности, то проверьте матрицу и переназначьте заявку",
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1729707761626",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "jo_hrbp"
                                    },
                                    {
                                        "id": "condition_1729707775771",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.whom_delegate_ids}},{{hr_bp.webuser_id.id}}",
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
                "id": "step_copy_1719255054567",
                "sysName": "approval_direct",
                "elements": [
                    {
                        "id": "elmnt_1717401969375",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174019861660.44033242412004300134131",
                                "_field": "reason_vacancy",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "reason_of_vacancy",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922492690",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401972782",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174020491080.040423420111410243244003",
                                "_field": "resigning_empl_full_name",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922521652",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1717402099495",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "replacement,transfer"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1725267968696",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17252679870140.014012302130432033222312",
                                "_field": "resigning_empl_full_name_strng",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1725268042572",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1725268022326",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "another_company"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401973476",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174020816510.12114333434113323312312",
                                "_field": "vacancy_id",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922537991",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": [
                            {
                                "id": "condition_1724678624650",
                                "_conditionalView_value": "replacement,transfer,another_company",
                                "_conditionalView_operator": "in",
                                "_conditionalView_field": "reason_vacancy"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717682480564",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176824834990.42430222211444120422003",
                                "_field": "id_position",
                                "_field_link_type": "input",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922552505",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401971964",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174020239580.034443214424020322312221",
                                "_field": "company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "company",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922570027",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401974161",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174022108360.42432332032431101343242",
                                "_field": "country_city",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922585223",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401975581",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174022292800.41233342331013140101322",
                                "_field": "candidate_full_name",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922598486",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401976342",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174022385390.41413003113212134344013",
                                "_field": "position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922615368",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401977901",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174022611150.034404033342112410322443",
                                "_field": "division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922637757",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1719259364146",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{org_structure_text}}"
                    },
                    {
                        "id": "elmnt_1717401980266",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174034095080.204034201400132330433023",
                                "_field": "direct_full_name",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922678100",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401981568",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174034417050.3313104212013141213002",
                                "_field": "contract_type",
                                "_field_link_type": "select",
                                "_field_link_pageSize": 0,
                                "_field_arrayLink_endpoint": "contract_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922697124",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403456249",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174034624150.121233343410212143130322",
                                "_field": "contract_period",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922715274",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1717403483837",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403457018",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174035278340.33101024023140002031314",
                                "_field": "reason_contract",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922733792",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1717403537149",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403458048",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174035504160.111023104414034231320012",
                                "_field": "employment_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "employment_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922751228",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730359680030",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17303596831040.21332224233242314434",
                                "_field": "job_rate",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1730359691580",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403458753",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174035776140.14144124233210031011332",
                                "_field": "probation",
                                "_field_set_default": true,
                                "_field_default_value": "3 месяца",
                                "_field_use_mask": false,
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922771042",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403459511",
                        "type": "input",
                        "_actions": [
                            {
                                "id": "17174037621020.03103013304004423013203"
                            }
                        ],
                        "_input_fields": [
                            {
                                "id": "17174037643110.03143223331032342444034",
                                "_field": "assessment_type",
                                "_field_set_default": true,
                                "_field_default_value": "Perfomance review",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922790472",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "PerfomanceReview",
                                "_field_required": true
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403790993",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174037928860.201343434142011013233443",
                                "_field": "cost_center",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922822326",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403803414",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174038054740.13023132041203302304222",
                                "_field": "name_position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922847702",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403818332",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174038283770.11114422230112401311221",
                                "_field": "analytics_ops",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922865944",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "analytics_for_ops"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717618621517",
                        "type": "text",
                        "paraText": "<b>Блок C&B</b>"
                    },
                    {
                        "id": "elmnt_1717618692210",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176187132000.203242424112144324403322",
                                "_field": "company_name",
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1718922918212",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": []
                    },
                    {
                        "id": "elmnt_1717618694976",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176187499670.20203144142142111134322",
                                "_field": "current_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923360353",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            },
                            {
                                "id": "17176187512460.40344110231333121101124",
                                "_field": "offer_position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923378809",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_input_fields_in_a_row": 2,
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718923399089",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718923349235",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189233536630.121344113333442403110313",
                                "_field": "offer_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923465686",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718923497386",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717618697756",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176187721430.2123314340231314444413",
                                "_field": "count_empl_direct",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923661126",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            },
                            {
                                "id": "17176187737450.2323003024303223112313",
                                "_field": "offer_count_empl_direct",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923682417",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_input_fields_in_a_row": 2,
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718923697041",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718923588830",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189235968040.24424302413133303242132",
                                "_field": "offer_count_empl_direct",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923613364",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718923632393",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717618700298",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176188322270.211013232204120400211132",
                                "_field": "current_salary_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924060329",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            },
                            {
                                "id": "17176188340780.04130102032020214243111",
                                "_field": "offer_salary_bonus",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924083613",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_input_fields_in_a_row": 2,
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718924096269",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718923985042",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189239904910.33043344043124302211002",
                                "_field": "offer_salary_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924005261",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718924022827",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1719253946047",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17192539489360.21230022301314121032122",
                                "_field": "current_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1719253965916",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1719254185946",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1719254020164",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17192540224310.034312002130012101232101",
                                "_field": "current_bonus_amount",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1719254033850",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1719254049080",
                                "_conditionalView_field": "current_bonus",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "quarter,month,half_year,year"
                            },
                            {
                                "id": "condition_1719254847534",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718924121917",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189241252960.33300032020344134142404",
                                "_field": "offer_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924214666",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "bonus",
                                "_field_required": true
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": []
                    },
                    {
                        "id": "elmnt_1718924245554",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189242500770.40213003303440030101114",
                                "_field": "offer_bonus_amount",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924324134",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_field_required": true
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1719254161118",
                                "_conditionalView_field": "offer_bonus",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "quarter,month,half_year,year"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1724746670978",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17247466802750.042202313430232104104424",
                                "_field": "budget_date",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1724746703121",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717619089531",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176190985890.32414434230040222411024",
                                "_field": "cr",
                                "_field_required": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924531836",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718924553119",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717682511109",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176825135140.24233022141202211044101",
                                "_field": "org_dev",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924599870",
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
                "id": "step_copy_1719255089442",
                "sysName": "approval_direct_up1",
                "elements": [
                    {
                        "id": "elmnt_1717401969375",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174019861660.44033242412004300134131",
                                "_field": "reason_vacancy",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "reason_of_vacancy",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922492690",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401972782",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174020491080.040423420111410243244003",
                                "_field": "resigning_empl_full_name",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922521652",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1717402099495",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "replacement,transfer"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1725268413406",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17252684334430.10044011033134030212342",
                                "_field": "resigning_empl_full_name_strng",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1725268465250",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1725268450307",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "another_company"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401973476",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174020816510.12114333434113323312312",
                                "_field": "vacancy_id",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922537991",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": [
                            {
                                "id": "condition_1724678685215",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "replacement,transfer,another_company"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717682480564",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176824834990.42430222211444120422003",
                                "_field": "id_position",
                                "_field_link_type": "input",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922552505",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401971964",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174020239580.034443214424020322312221",
                                "_field": "company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "company",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922570027",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401974161",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174022108360.42432332032431101343242",
                                "_field": "country_city",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922585223",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401975581",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174022292800.41233342331013140101322",
                                "_field": "candidate_full_name",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922598486",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401976342",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174022385390.41413003113212134344013",
                                "_field": "position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922615368",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401977901",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174022611150.034404033342112410322443",
                                "_field": "division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922637757",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1719259391843",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{org_structure_text}}"
                    },
                    {
                        "id": "elmnt_1717401980266",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174034095080.204034201400132330433023",
                                "_field": "direct_full_name",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922678100",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401981568",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174034417050.3313104212013141213002",
                                "_field": "contract_type",
                                "_field_link_type": "select",
                                "_field_link_pageSize": 0,
                                "_field_arrayLink_endpoint": "contract_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922697124",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403456249",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174034624150.121233343410212143130322",
                                "_field": "contract_period",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922715274",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1717403483837",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403457018",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174035278340.33101024023140002031314",
                                "_field": "reason_contract",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922733792",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1717403537149",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403458048",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174035504160.111023104414034231320012",
                                "_field": "employment_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "employment_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922751228",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730359719173",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17303597252900.30333404222102342220144",
                                "_field": "job_rate",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1730359734366",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403458753",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174035776140.14144124233210031011332",
                                "_field": "probation",
                                "_field_set_default": true,
                                "_field_default_value": "3 месяца",
                                "_field_use_mask": false,
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922771042",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403459511",
                        "type": "input",
                        "_actions": [
                            {
                                "id": "17174037621020.03103013304004423013203"
                            }
                        ],
                        "_input_fields": [
                            {
                                "id": "17174037643110.03143223331032342444034",
                                "_field": "assessment_type",
                                "_field_set_default": true,
                                "_field_default_value": "Perfomance review",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922790472",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_field_required": true,
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "PerfomanceReview"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403790993",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174037928860.201343434142011013233443",
                                "_field": "cost_center",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922822326",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403803414",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174038054740.13023132041203302304222",
                                "_field": "name_position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922847702",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403818332",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174038283770.11114422230112401311221",
                                "_field": "analytics_ops",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922865944",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "analytics_for_ops"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717618621517",
                        "type": "text",
                        "paraText": "<b>Блок C&B</b>"
                    },
                    {
                        "id": "elmnt_1717618692210",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176187132000.203242424112144324403322",
                                "_field": "company_name",
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1718922918212",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": []
                    },
                    {
                        "id": "elmnt_1717618694976",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176187499670.20203144142142111134322",
                                "_field": "current_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923360353",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            },
                            {
                                "id": "17176187512460.40344110231333121101124",
                                "_field": "offer_position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923378809",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_input_fields_in_a_row": 2,
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718923399089",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718923349235",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189233536630.121344113333442403110313",
                                "_field": "offer_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923465686",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718923497386",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717618697756",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176187721430.2123314340231314444413",
                                "_field": "count_empl_direct",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923661126",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            },
                            {
                                "id": "17176187737450.2323003024303223112313",
                                "_field": "offer_count_empl_direct",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923682417",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_input_fields_in_a_row": 2,
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718923697041",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718923588830",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189235968040.24424302413133303242132",
                                "_field": "offer_count_empl_direct",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923613364",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718923632393",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717618700298",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176188322270.211013232204120400211132",
                                "_field": "current_salary_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924060329",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            },
                            {
                                "id": "17176188340780.04130102032020214243111",
                                "_field": "offer_salary_bonus",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924083613",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_input_fields_in_a_row": 2,
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718924096269",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718923985042",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189239904910.33043344043124302211002",
                                "_field": "offer_salary_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924005261",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718924022827",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1719253946047",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17192539489360.21230022301314121032122",
                                "_field": "current_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1719253965916",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1719254185946",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1719254020164",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17192540224310.034312002130012101232101",
                                "_field": "current_bonus_amount",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1719254033850",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1719254049080",
                                "_conditionalView_field": "current_bonus",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "quarter,month,half_year,year"
                            },
                            {
                                "id": "condition_1719254847534",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718924121917",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189241252960.33300032020344134142404",
                                "_field": "offer_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924214666",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "bonus",
                                "_field_required": true
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": []
                    },
                    {
                        "id": "elmnt_1718924245554",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189242500770.40213003303440030101114",
                                "_field": "offer_bonus_amount",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924324134",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_field_required": true
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1719254161118",
                                "_conditionalView_field": "offer_bonus",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "quarter,month,half_year,year"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717619089531",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176190985890.32414434230040222411024",
                                "_field": "cr",
                                "_field_required": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924531836",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718924553119",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717682511109",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176825135140.24233022141202211044101",
                                "_field": "org_dev",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924599870",
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
                "id": "step_copy_1719255136508",
                "sysName": "present_offer",
                "elements": [
                    {
                        "id": "elmnt_1717401969375",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174019861660.44033242412004300134131",
                                "_field": "reason_vacancy",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "reason_of_vacancy",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922492690",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401972782",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174020491080.040423420111410243244003",
                                "_field": "resigning_empl_full_name",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922521652",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1717402099495",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "replacement,transfer"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1725268546933",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17252685508150.44233404341112041103331",
                                "_field": "resigning_empl_full_name_strng",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1725268570718",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1725268585035",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "another_company"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401973476",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174020816510.12114333434113323312312",
                                "_field": "vacancy_id",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922537991",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": [
                            {
                                "id": "condition_1724678800059",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "replacement,transfer,another_company"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717682480564",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176824834990.42430222211444120422003",
                                "_field": "id_position",
                                "_field_link_type": "input",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922552505",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401971964",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174020239580.034443214424020322312221",
                                "_field": "company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "company",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922570027",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401974161",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174022108360.42432332032431101343242",
                                "_field": "country_city",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922585223",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401975581",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174022292800.41233342331013140101322",
                                "_field": "candidate_full_name",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922598486",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401976342",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174022385390.41413003113212134344013",
                                "_field": "position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922615368",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401977901",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174022611150.034404033342112410322443",
                                "_field": "division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922637757",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1719259425127",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{org_structure_text}}"
                    },
                    {
                        "id": "elmnt_1717401980266",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174034095080.204034201400132330433023",
                                "_field": "direct_full_name",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922678100",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401981568",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174034417050.3313104212013141213002",
                                "_field": "contract_type",
                                "_field_link_type": "select",
                                "_field_link_pageSize": 0,
                                "_field_arrayLink_endpoint": "contract_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922697124",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403456249",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174034624150.121233343410212143130322",
                                "_field": "contract_period",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922715274",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1717403483837",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403457018",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174035278340.33101024023140002031314",
                                "_field": "reason_contract",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922733792",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1717403537149",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403458048",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174035504160.111023104414034231320012",
                                "_field": "employment_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "employment_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922751228",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403458753",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174035776140.14144124233210031011332",
                                "_field": "probation",
                                "_field_set_default": true,
                                "_field_default_value": "3 месяца",
                                "_field_use_mask": false,
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922771042",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730359759251",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17303597624220.4213243203231430233024",
                                "_field": "job_rate",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1730359772141",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403459511",
                        "type": "input",
                        "_actions": [
                            {
                                "id": "17174037621020.03103013304004423013203"
                            }
                        ],
                        "_input_fields": [
                            {
                                "id": "17174037643110.03143223331032342444034",
                                "_field": "assessment_type",
                                "_field_set_default": true,
                                "_field_default_value": "Perfomance review",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922790472",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "PerfomanceReview",
                                "_field_required": true
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403790993",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174037928860.201343434142011013233443",
                                "_field": "cost_center",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922822326",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403803414",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174038054740.13023132041203302304222",
                                "_field": "name_position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922847702",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403818332",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174038283770.11114422230112401311221",
                                "_field": "analytics_ops",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922865944",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "analytics_for_ops"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717618621517",
                        "type": "text",
                        "paraText": "<b>Блок C&B</b>"
                    },
                    {
                        "id": "elmnt_1717618692210",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176187132000.203242424112144324403322",
                                "_field": "company_name",
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1718922918212",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": []
                    },
                    {
                        "id": "elmnt_1717618694976",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176187499670.20203144142142111134322",
                                "_field": "current_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923360353",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            },
                            {
                                "id": "17176187512460.40344110231333121101124",
                                "_field": "offer_position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923378809",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_input_fields_in_a_row": 2,
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718923399089",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718923349235",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189233536630.121344113333442403110313",
                                "_field": "offer_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923465686",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718923497386",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717618697756",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176187721430.2123314340231314444413",
                                "_field": "count_empl_direct",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923661126",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            },
                            {
                                "id": "17176187737450.2323003024303223112313",
                                "_field": "offer_count_empl_direct",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923682417",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_input_fields_in_a_row": 2,
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718923697041",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718923588830",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189235968040.24424302413133303242132",
                                "_field": "offer_count_empl_direct",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923613364",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718923632393",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717618700298",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176188322270.211013232204120400211132",
                                "_field": "current_salary_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924060329",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            },
                            {
                                "id": "17176188340780.04130102032020214243111",
                                "_field": "offer_salary_bonus",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924083613",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_input_fields_in_a_row": 2,
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718924096269",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718923985042",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189239904910.33043344043124302211002",
                                "_field": "offer_salary_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924005261",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718924022827",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1719253946047",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17192539489360.21230022301314121032122",
                                "_field": "current_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1719253965916",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1719254185946",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1719254020164",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17192540224310.034312002130012101232101",
                                "_field": "current_bonus_amount",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1719254033850",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1719254049080",
                                "_conditionalView_field": "current_bonus",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "quarter,month,half_year,year"
                            },
                            {
                                "id": "condition_1719254847534",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718924121917",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189241252960.33300032020344134142404",
                                "_field": "offer_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924214666",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "bonus",
                                "_field_required": true
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": []
                    },
                    {
                        "id": "elmnt_1718924245554",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189242500770.40213003303440030101114",
                                "_field": "offer_bonus_amount",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924324134",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_field_required": true
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1719254161118",
                                "_conditionalView_field": "offer_bonus",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "quarter,month,half_year,year"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717619089531",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176190985890.32414434230040222411024",
                                "_field": "cr",
                                "_field_required": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924531836",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718924553119",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717682511109",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176825135140.24233022141202211044101",
                                "_field": "org_dev",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924599870",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730532254619",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17305322568230.010430123240114043343422",
                                "_field": "approved_date",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1730532277454",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{user_creator.webuser_id.whom_delegate_ids}},{{user_creator.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1730532430000",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "jo_recruiter"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR",
                                "_field_add_description": true,
                                "_field_description_text": "Не должна предшествовать бюджетной дате от C&B партнера"
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": []
                    }
                ]
            },
            {
                "id": "step_copy_1719255223910",
                "sysName": "offer_refused",
                "elements": [
                    {
                        "id": "elmnt_1717401969375",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174019861660.44033242412004300134131",
                                "_field": "reason_vacancy",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "reason_of_vacancy",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922492690",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401972782",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174020491080.040423420111410243244003",
                                "_field": "resigning_empl_full_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922521652",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1717402099495",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "replacement,transfer"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1725268646169",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17252686490540.0224312141324224221042113",
                                "_field": "resigning_empl_full_name_strng",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1725268663666",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1725268676370",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "another_company"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401973476",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174020816510.12114333434113323312312",
                                "_field": "vacancy_id",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922537991",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": [
                            {
                                "id": "condition_1724678920915",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "replacement,transfer,another_company"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717682480564",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176824834990.42430222211444120422003",
                                "_field": "id_position",
                                "_field_link_type": "input",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922552505",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401971964",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174020239580.034443214424020322312221",
                                "_field": "company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "company",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922570027",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401974161",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174022108360.42432332032431101343242",
                                "_field": "country_city",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922585223",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401975581",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174022292800.41233342331013140101322",
                                "_field": "candidate_full_name",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922598486",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401976342",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174022385390.41413003113212134344013",
                                "_field": "position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922615368",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401977901",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174022611150.034404033342112410322443",
                                "_field": "division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922637757",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1719259466209",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{org_structure_text}}"
                    },
                    {
                        "id": "elmnt_1717401980266",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174034095080.204034201400132330433023",
                                "_field": "direct_full_name",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922678100",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401981568",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174034417050.3313104212013141213002",
                                "_field": "contract_type",
                                "_field_link_type": "select",
                                "_field_link_pageSize": 0,
                                "_field_arrayLink_endpoint": "contract_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922697124",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403456249",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174034624150.121233343410212143130322",
                                "_field": "contract_period",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922715274",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1717403483837",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403457018",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174035278340.33101024023140002031314",
                                "_field": "reason_contract",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922733792",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1717403537149",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403458048",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174035504160.111023104414034231320012",
                                "_field": "employment_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "employment_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922751228",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730359797385",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17303598035290.43443231304012121341242",
                                "_field": "job_rate",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1730359812777",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403458753",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174035776140.14144124233210031011332",
                                "_field": "probation",
                                "_field_set_default": true,
                                "_field_default_value": "3 месяца",
                                "_field_use_mask": false,
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922771042",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403459511",
                        "type": "input",
                        "_actions": [
                            {
                                "id": "17174037621020.03103013304004423013203"
                            }
                        ],
                        "_input_fields": [
                            {
                                "id": "17174037643110.03143223331032342444034",
                                "_field": "assessment_type",
                                "_field_set_default": true,
                                "_field_default_value": "Perfomance review",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922790472",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_field_required": true,
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "PerfomanceReview"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403790993",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174037928860.201343434142011013233443",
                                "_field": "cost_center",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922822326",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403803414",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174038054740.13023132041203302304222",
                                "_field": "name_position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922847702",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403818332",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174038283770.11114422230112401311221",
                                "_field": "analytics_ops",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922865944",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "analytics_for_ops"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717618621517",
                        "type": "text",
                        "paraText": "<b>Блок C&B</b>"
                    },
                    {
                        "id": "elmnt_1717618692210",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176187132000.203242424112144324403322",
                                "_field": "company_name",
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1718922918212",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": []
                    },
                    {
                        "id": "elmnt_1717618694976",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176187499670.20203144142142111134322",
                                "_field": "current_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923360353",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            },
                            {
                                "id": "17176187512460.40344110231333121101124",
                                "_field": "offer_position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923378809",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_input_fields_in_a_row": 2,
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718923399089",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718923349235",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189233536630.121344113333442403110313",
                                "_field": "offer_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923465686",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718923497386",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717618697756",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176187721430.2123314340231314444413",
                                "_field": "count_empl_direct",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923661126",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            },
                            {
                                "id": "17176187737450.2323003024303223112313",
                                "_field": "offer_count_empl_direct",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923682417",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_input_fields_in_a_row": 2,
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718923697041",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718923588830",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189235968040.24424302413133303242132",
                                "_field": "offer_count_empl_direct",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923613364",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718923632393",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717618700298",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176188322270.211013232204120400211132",
                                "_field": "current_salary_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924060329",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            },
                            {
                                "id": "17176188340780.04130102032020214243111",
                                "_field": "offer_salary_bonus",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924083613",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_input_fields_in_a_row": 2,
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718924096269",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718923985042",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189239904910.33043344043124302211002",
                                "_field": "offer_salary_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924005261",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718924022827",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1719253946047",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17192539489360.21230022301314121032122",
                                "_field": "current_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1719253965916",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1719254185946",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1719254020164",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17192540224310.034312002130012101232101",
                                "_field": "current_bonus_amount",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1719254033850",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1719254049080",
                                "_conditionalView_field": "current_bonus",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "quarter,month,half_year,year"
                            },
                            {
                                "id": "condition_1719254847534",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718924121917",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189241252960.33300032020344134142404",
                                "_field": "offer_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924214666",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "bonus",
                                "_field_required": true
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": []
                    },
                    {
                        "id": "elmnt_1718924245554",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189242500770.40213003303440030101114",
                                "_field": "offer_bonus_amount",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924324134",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_field_required": true
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1719254161118",
                                "_conditionalView_field": "offer_bonus",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "quarter,month,half_year,year"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717619089531",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176190985890.32414434230040222411024",
                                "_field": "cr",
                                "_field_required": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924531836",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718924553119",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717682511109",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176825135140.24233022141202211044101",
                                "_field": "org_dev",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924599870",
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
                "id": "step_copy_1719255248225",
                "sysName": "approval_org_dev",
                "elements": [
                    {
                        "id": "elmnt_1717401969375",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174019861660.44033242412004300134131",
                                "_field": "reason_vacancy",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "reason_of_vacancy",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922492690",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401972782",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174020491080.040423420111410243244003",
                                "_field": "resigning_empl_full_name",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922521652",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1717402099495",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "replacement,transfer"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1725268725780",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17252687290180.1322234303400243142402",
                                "_field": "resigning_empl_full_name_strng",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1725268742161",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1725268754971",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "another_company"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401973476",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174020816510.12114333434113323312312",
                                "_field": "vacancy_id",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922537991",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": [
                            {
                                "id": "condition_1724679344711",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "replacement,transfer,another_company"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717682480564",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176824834990.42430222211444120422003",
                                "_field": "id_position",
                                "_field_link_type": "input",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922552505",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "jo_orgdev"
                                    }
                                ],
                                "_field_required": true
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401971964",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174020239580.034443214424020322312221",
                                "_field": "company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "company",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922570027",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401974161",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174022108360.42432332032431101343242",
                                "_field": "country_city",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922585223",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401975581",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174022292800.41233342331013140101322",
                                "_field": "candidate_full_name",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922598486",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401976342",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174022385390.41413003113212134344013",
                                "_field": "position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922615368",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401977901",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174022611150.034404033342112410322443",
                                "_field": "division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922637757",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1719259591784",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{org_structure_text}}"
                    },
                    {
                        "id": "elmnt_1717401980266",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174034095080.204034201400132330433023",
                                "_field": "direct_full_name",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922678100",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401981568",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174034417050.3313104212013141213002",
                                "_field": "contract_type",
                                "_field_link_type": "select",
                                "_field_link_pageSize": 0,
                                "_field_arrayLink_endpoint": "contract_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922697124",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403456249",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174034624150.121233343410212143130322",
                                "_field": "contract_period",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922715274",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1717403483837",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403457018",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174035278340.33101024023140002031314",
                                "_field": "reason_contract",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922733792",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1717403537149",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403458048",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174035504160.111023104414034231320012",
                                "_field": "employment_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "employment_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922751228",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730359929702",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17303599336840.4013212404324343024411",
                                "_field": "job_rate",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1730359947102",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403458753",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174035776140.14144124233210031011332",
                                "_field": "probation",
                                "_field_set_default": true,
                                "_field_default_value": "3 месяца",
                                "_field_use_mask": false,
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922771042",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403459511",
                        "type": "input",
                        "_actions": [
                            {
                                "id": "17174037621020.03103013304004423013203"
                            }
                        ],
                        "_input_fields": [
                            {
                                "id": "17174037643110.03143223331032342444034",
                                "_field": "assessment_type",
                                "_field_set_default": true,
                                "_field_default_value": "Perfomance review",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922790472",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "PerfomanceReview",
                                "_field_required": true
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403790993",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174037928860.201343434142011013233443",
                                "_field": "cost_center",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922822326",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403803414",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174038054740.13023132041203302304222",
                                "_field": "name_position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922847702",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403818332",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174038283770.11114422230112401311221",
                                "_field": "analytics_ops",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922865944",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "analytics_for_ops"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717618621517",
                        "type": "text",
                        "paraText": "<b>Блок C&B</b>"
                    },
                    {
                        "id": "elmnt_1717618692210",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176187132000.203242424112144324403322",
                                "_field": "company_name",
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1718922918212",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": []
                    },
                    {
                        "id": "elmnt_1717618694976",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176187499670.20203144142142111134322",
                                "_field": "current_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923360353",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            },
                            {
                                "id": "17176187512460.40344110231333121101124",
                                "_field": "offer_position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923378809",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_input_fields_in_a_row": 2,
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718923399089",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718923349235",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189233536630.121344113333442403110313",
                                "_field": "offer_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923465686",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718923497386",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717618697756",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176187721430.2123314340231314444413",
                                "_field": "count_empl_direct",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923661126",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            },
                            {
                                "id": "17176187737450.2323003024303223112313",
                                "_field": "offer_count_empl_direct",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923682417",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_input_fields_in_a_row": 2,
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718923697041",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718923588830",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189235968040.24424302413133303242132",
                                "_field": "offer_count_empl_direct",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923613364",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718923632393",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717618700298",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176188322270.211013232204120400211132",
                                "_field": "current_salary_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924060329",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            },
                            {
                                "id": "17176188340780.04130102032020214243111",
                                "_field": "offer_salary_bonus",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924083613",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_input_fields_in_a_row": 2,
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718924096269",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718923985042",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189239904910.33043344043124302211002",
                                "_field": "offer_salary_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924005261",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718924022827",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1719253946047",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17192539489360.21230022301314121032122",
                                "_field": "current_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1719253965916",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1719254185946",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1719254020164",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17192540224310.034312002130012101232101",
                                "_field": "current_bonus_amount",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1719254033850",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1719254049080",
                                "_conditionalView_field": "current_bonus",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "quarter,month,half_year,year"
                            },
                            {
                                "id": "condition_1719254847534",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718924121917",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189241252960.33300032020344134142404",
                                "_field": "offer_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924214666",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "bonus",
                                "_field_required": true
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": []
                    },
                    {
                        "id": "elmnt_1718924245554",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189242500770.40213003303440030101114",
                                "_field": "offer_bonus_amount",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924324134",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_field_required": true
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1719254161118",
                                "_conditionalView_field": "offer_bonus",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "quarter,month,half_year,year"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1724747303490",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17247473166930.011012004143341101410443",
                                "_field": "budget_date",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1724747344908",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717619089531",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176190985890.32414434230040222411024",
                                "_field": "cr",
                                "_field_required": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924531836",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718924553119",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717682511109",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176825135140.24233022141202211044101",
                                "_field": "org_dev",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924599870",
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
                "id": "step_copy_1719255273634",
                "sysName": "offer_accepted",
                "elements": [
                    {
                        "id": "elmnt_1717401969375",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174019861660.44033242412004300134131",
                                "_field": "reason_vacancy",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "reason_of_vacancy",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922492690",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401972782",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174020491080.040423420111410243244003",
                                "_field": "resigning_empl_full_name",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922521652",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1717402099495",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "replacement,transfer"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1725268913590",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17252689170230.0034102222140321422421443",
                                "_field": "resigning_empl_full_name_strng",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1725268933158",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1725268945842",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "another_company"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401973476",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174020816510.12114333434113323312312",
                                "_field": "vacancy_id",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922537991",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": [
                            {
                                "id": "condition_1724679544580",
                                "_conditionalView_value": "replacement,transfer,another_company",
                                "_conditionalView_operator": "in",
                                "_conditionalView_field": "reason_vacancy"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717682480564",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176824834990.42430222211444120422003",
                                "_field": "id_position",
                                "_field_link_type": "input",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922552505",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401971964",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174020239580.034443214424020322312221",
                                "_field": "company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "company",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922570027",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401974161",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174022108360.42432332032431101343242",
                                "_field": "country_city",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922585223",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401975581",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174022292800.41233342331013140101322",
                                "_field": "candidate_full_name",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922598486",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401976342",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174022385390.41413003113212134344013",
                                "_field": "position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922615368",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401977901",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174022611150.034404033342112410322443",
                                "_field": "division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922637757",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1719259621701",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{org_structure_text}}"
                    },
                    {
                        "id": "elmnt_1717401980266",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174034095080.204034201400132330433023",
                                "_field": "direct_full_name",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922678100",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401981568",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174034417050.3313104212013141213002",
                                "_field": "contract_type",
                                "_field_link_type": "select",
                                "_field_link_pageSize": 0,
                                "_field_arrayLink_endpoint": "contract_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922697124",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403456249",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174034624150.121233343410212143130322",
                                "_field": "contract_period",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922715274",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1717403483837",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403457018",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174035278340.33101024023140002031314",
                                "_field": "reason_contract",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922733792",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1717403537149",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403458048",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174035504160.111023104414034231320012",
                                "_field": "employment_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "employment_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922751228",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730359993668",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17303599971350.214033021042200342123332",
                                "_field": "job_rate",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1730360008379",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403458753",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174035776140.14144124233210031011332",
                                "_field": "probation",
                                "_field_set_default": true,
                                "_field_default_value": "3 месяца",
                                "_field_use_mask": false,
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922771042",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403459511",
                        "type": "input",
                        "_actions": [
                            {
                                "id": "17174037621020.03103013304004423013203"
                            }
                        ],
                        "_input_fields": [
                            {
                                "id": "17174037643110.03143223331032342444034",
                                "_field": "assessment_type",
                                "_field_set_default": true,
                                "_field_default_value": "Perfomance review",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922790472",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_field_required": true,
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "PerfomanceReview"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403790993",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174037928860.201343434142011013233443",
                                "_field": "cost_center",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922822326",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403803414",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174038054740.13023132041203302304222",
                                "_field": "name_position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922847702",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403818332",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174038283770.11114422230112401311221",
                                "_field": "analytics_ops",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922865944",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "analytics_for_ops"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717618621517",
                        "type": "text",
                        "paraText": "<b>Блок C&B</b>"
                    },
                    {
                        "id": "elmnt_1717618692210",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176187132000.203242424112144324403322",
                                "_field": "company_name",
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1718922918212",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": []
                    },
                    {
                        "id": "elmnt_1717618694976",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176187499670.20203144142142111134322",
                                "_field": "current_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923360353",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            },
                            {
                                "id": "17176187512460.40344110231333121101124",
                                "_field": "offer_position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923378809",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_input_fields_in_a_row": 2,
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718923399089",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718923349235",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189233536630.121344113333442403110313",
                                "_field": "offer_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923465686",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718923497386",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717618697756",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176187721430.2123314340231314444413",
                                "_field": "count_empl_direct",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923661126",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            },
                            {
                                "id": "17176187737450.2323003024303223112313",
                                "_field": "offer_count_empl_direct",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923682417",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_input_fields_in_a_row": 2,
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718923697041",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718923588830",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189235968040.24424302413133303242132",
                                "_field": "offer_count_empl_direct",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923613364",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718923632393",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717618700298",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176188322270.211013232204120400211132",
                                "_field": "current_salary_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924060329",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            },
                            {
                                "id": "17176188340780.04130102032020214243111",
                                "_field": "offer_salary_bonus",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924083613",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_input_fields_in_a_row": 2,
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718924096269",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718923985042",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189239904910.33043344043124302211002",
                                "_field": "offer_salary_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924005261",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718924022827",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1719253946047",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17192539489360.21230022301314121032122",
                                "_field": "current_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1719253965916",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1719254185946",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1719254020164",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17192540224310.034312002130012101232101",
                                "_field": "current_bonus_amount",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1719254033850",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1719254049080",
                                "_conditionalView_field": "current_bonus",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "quarter,month,half_year,year"
                            },
                            {
                                "id": "condition_1719254847534",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718924121917",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189241252960.33300032020344134142404",
                                "_field": "offer_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924214666",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "bonus",
                                "_field_required": true
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": []
                    },
                    {
                        "id": "elmnt_1718924245554",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189242500770.40213003303440030101114",
                                "_field": "offer_bonus_amount",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924324134",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_field_required": true
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1719254161118",
                                "_conditionalView_field": "offer_bonus",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "quarter,month,half_year,year"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717619089531",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176190985890.32414434230040222411024",
                                "_field": "cr",
                                "_field_required": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924531836",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718924553119",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717682511109",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176825135140.24233022141202211044101",
                                "_field": "org_dev",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924599870",
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
                "id": "step_copy_1719255698386",
                "sysName": "exit_confirmation",
                "elements": [
                    {
                        "id": "elmnt_1717401969375",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174019861660.44033242412004300134131",
                                "_field": "reason_vacancy",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "reason_of_vacancy",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922492690",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401972782",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174020491080.040423420111410243244003",
                                "_field": "resigning_empl_full_name",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922521652",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1717402099495",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "replacement,transfer"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1725269068354",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17252690713560.34224221340210340044023",
                                "_field": "resigning_empl_full_name_strng",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1725269085536",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1725269099816",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "another_company"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401973476",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174020816510.12114333434113323312312",
                                "_field": "vacancy_id",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922537991",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": []
                    },
                    {
                        "id": "elmnt_1717682480564",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176824834990.42430222211444120422003",
                                "_field": "id_position",
                                "_field_link_type": "input",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922552505",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401971964",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174020239580.034443214424020322312221",
                                "_field": "company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "company",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922570027",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401974161",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174022108360.42432332032431101343242",
                                "_field": "country_city",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922585223",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401975581",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174022292800.41233342331013140101322",
                                "_field": "candidate_full_name",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922598486",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401976342",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174022385390.41413003113212134344013",
                                "_field": "position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922615368",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401977901",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174022611150.034404033342112410322443",
                                "_field": "division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922637757",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1719259654101",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{org_structure_text}}"
                    },
                    {
                        "id": "elmnt_1717401980266",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174034095080.204034201400132330433023",
                                "_field": "direct_full_name",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922678100",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401981568",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174034417050.3313104212013141213002",
                                "_field": "contract_type",
                                "_field_link_type": "select",
                                "_field_link_pageSize": 0,
                                "_field_arrayLink_endpoint": "contract_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922697124",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403456249",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174034624150.121233343410212143130322",
                                "_field": "contract_period",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922715274",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1717403483837",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403457018",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174035278340.33101024023140002031314",
                                "_field": "reason_contract",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922733792",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1717403537149",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403458048",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174035504160.111023104414034231320012",
                                "_field": "employment_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "employment_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922751228",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730360035818",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17303600393650.14341304313440403200024",
                                "_field": "job_rate",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1730360048872",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403458753",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174035776140.14144124233210031011332",
                                "_field": "probation",
                                "_field_set_default": true,
                                "_field_default_value": "3 месяца",
                                "_field_use_mask": false,
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922771042",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403459511",
                        "type": "input",
                        "_actions": [
                            {
                                "id": "17174037621020.03103013304004423013203"
                            }
                        ],
                        "_input_fields": [
                            {
                                "id": "17174037643110.03143223331032342444034",
                                "_field": "assessment_type",
                                "_field_set_default": true,
                                "_field_default_value": "Perfomance review",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922790472",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "PerfomanceReview",
                                "_field_required": true
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403790993",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174037928860.201343434142011013233443",
                                "_field": "cost_center",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922822326",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403803414",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174038054740.13023132041203302304222",
                                "_field": "name_position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922847702",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403818332",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174038283770.11114422230112401311221",
                                "_field": "analytics_ops",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922865944",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "analytics_for_ops"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717618621517",
                        "type": "text",
                        "paraText": "<b>Блок C&B</b>"
                    },
                    {
                        "id": "elmnt_1717618692210",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176187132000.203242424112144324403322",
                                "_field": "company_name",
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1718922918212",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": []
                    },
                    {
                        "id": "elmnt_1717618694976",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176187499670.20203144142142111134322",
                                "_field": "current_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923360353",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            },
                            {
                                "id": "17176187512460.40344110231333121101124",
                                "_field": "offer_position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923378809",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_input_fields_in_a_row": 2,
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718923399089",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718923349235",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189233536630.121344113333442403110313",
                                "_field": "offer_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923465686",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718923497386",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717618697756",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176187721430.2123314340231314444413",
                                "_field": "count_empl_direct",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923661126",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            },
                            {
                                "id": "17176187737450.2323003024303223112313",
                                "_field": "offer_count_empl_direct",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923682417",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_input_fields_in_a_row": 2,
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718923697041",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718923588830",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189235968040.24424302413133303242132",
                                "_field": "offer_count_empl_direct",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923613364",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718923632393",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717618700298",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176188322270.211013232204120400211132",
                                "_field": "current_salary_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924060329",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            },
                            {
                                "id": "17176188340780.04130102032020214243111",
                                "_field": "offer_salary_bonus",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924083613",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_input_fields_in_a_row": 2,
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718924096269",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718923985042",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189239904910.33043344043124302211002",
                                "_field": "offer_salary_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924005261",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718924022827",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1719253946047",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17192539489360.21230022301314121032122",
                                "_field": "current_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1719253965916",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1719254185946",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1719254020164",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17192540224310.034312002130012101232101",
                                "_field": "current_bonus_amount",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1719254033850",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1719254049080",
                                "_conditionalView_field": "current_bonus",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "quarter,month,half_year,year"
                            },
                            {
                                "id": "condition_1719254847534",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718924121917",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189241252960.33300032020344134142404",
                                "_field": "offer_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924214666",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "bonus",
                                "_field_required": true
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": []
                    },
                    {
                        "id": "elmnt_1718924245554",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189242500770.40213003303440030101114",
                                "_field": "offer_bonus_amount",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924324134",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_field_required": true
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1719254161118",
                                "_conditionalView_field": "offer_bonus",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "quarter,month,half_year,year"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717619089531",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176190985890.32414434230040222411024",
                                "_field": "cr",
                                "_field_required": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924531836",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718924553119",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717682511109",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176825135140.24233022141202211044101",
                                "_field": "org_dev",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924599870",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730532479898",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17305324827640.04430312101133230324201",
                                "_field": "approved_date",
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1730532491014",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{user_creator.webuser_id.whom_delegate_ids}},{{user_creator.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    },
                                    {
                                        "id": "condition_1730532505749",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notContains",
                                        "_conditionalView_value": "jo_recruiter"
                                    }
                                ],
                                "_conditionalView_disable_or_hide": "disable",
                                "_field_add_description": true,
                                "_field_description_text": "Не должна предшествовать бюджетной дате от C&B партнера",
                                "_action_conditionals_and_or": "OR"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_copy_1719255326026",
                "sysName": "candidate_applied_job",
                "elements": [
                    {
                        "id": "elmnt_1717401969375",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174019861660.44033242412004300134131",
                                "_field": "reason_vacancy",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "reason_of_vacancy",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922492690",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401972782",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174020491080.040423420111410243244003",
                                "_field": "resigning_empl_full_name",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922521652",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1717402099495",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "replacement,transfer"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1725269157655",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17252691612800.42114442440231433001324",
                                "_field": "resigning_empl_full_name_strng",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1725269174755",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1725269188820",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "another_company"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401973476",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174020816510.12114333434113323312312",
                                "_field": "vacancy_id",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922537991",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": []
                    },
                    {
                        "id": "elmnt_1717682480564",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176824834990.42430222211444120422003",
                                "_field": "id_position",
                                "_field_link_type": "input",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922552505",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401971964",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174020239580.034443214424020322312221",
                                "_field": "company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "company",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922570027",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401974161",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174022108360.42432332032431101343242",
                                "_field": "country_city",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922585223",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401975581",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174022292800.41233342331013140101322",
                                "_field": "candidate_full_name",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922598486",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401976342",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174022385390.41413003113212134344013",
                                "_field": "position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922615368",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401977901",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174022611150.034404033342112410322443",
                                "_field": "division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922637757",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1719259693849",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{org_structure_text}}"
                    },
                    {
                        "id": "elmnt_1717401980266",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174034095080.204034201400132330433023",
                                "_field": "direct_full_name",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922678100",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401981568",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174034417050.3313104212013141213002",
                                "_field": "contract_type",
                                "_field_link_type": "select",
                                "_field_link_pageSize": 0,
                                "_field_arrayLink_endpoint": "contract_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922697124",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403456249",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174034624150.121233343410212143130322",
                                "_field": "contract_period",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922715274",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1717403483837",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403457018",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174035278340.33101024023140002031314",
                                "_field": "reason_contract",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922733792",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1717403537149",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403458048",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174035504160.111023104414034231320012",
                                "_field": "employment_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "employment_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922751228",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730360082822",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17303600862610.442033424210013401444",
                                "_field": "job_rate",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1730360093817",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403458753",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174035776140.14144124233210031011332",
                                "_field": "probation",
                                "_field_set_default": true,
                                "_field_default_value": "3 месяца",
                                "_field_use_mask": false,
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922771042",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403459511",
                        "type": "input",
                        "_actions": [
                            {
                                "id": "17174037621020.03103013304004423013203"
                            }
                        ],
                        "_input_fields": [
                            {
                                "id": "17174037643110.03143223331032342444034",
                                "_field": "assessment_type",
                                "_field_set_default": true,
                                "_field_default_value": "Perfomance review",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922790472",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "PerfomanceReview",
                                "_field_required": true
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403790993",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174037928860.201343434142011013233443",
                                "_field": "cost_center",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922822326",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403803414",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174038054740.13023132041203302304222",
                                "_field": "name_position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922847702",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403818332",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174038283770.11114422230112401311221",
                                "_field": "analytics_ops",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922865944",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "analytics_for_ops"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717618621517",
                        "type": "text",
                        "paraText": "<b>Блок C&B</b>"
                    },
                    {
                        "id": "elmnt_1717618692210",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176187132000.203242424112144324403322",
                                "_field": "company_name",
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1718922918212",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": []
                    },
                    {
                        "id": "elmnt_1717618694976",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176187499670.20203144142142111134322",
                                "_field": "current_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923360353",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            },
                            {
                                "id": "17176187512460.40344110231333121101124",
                                "_field": "offer_position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923378809",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_input_fields_in_a_row": 2,
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718923399089",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718923349235",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189233536630.121344113333442403110313",
                                "_field": "offer_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923465686",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718923497386",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717618697756",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176187721430.2123314340231314444413",
                                "_field": "count_empl_direct",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923661126",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            },
                            {
                                "id": "17176187737450.2323003024303223112313",
                                "_field": "offer_count_empl_direct",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923682417",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_input_fields_in_a_row": 2,
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718923697041",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718923588830",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189235968040.24424302413133303242132",
                                "_field": "offer_count_empl_direct",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923613364",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718923632393",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717618700298",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176188322270.211013232204120400211132",
                                "_field": "current_salary_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924060329",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            },
                            {
                                "id": "17176188340780.04130102032020214243111",
                                "_field": "offer_salary_bonus",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924083613",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_input_fields_in_a_row": 2,
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718924096269",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718923985042",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189239904910.33043344043124302211002",
                                "_field": "offer_salary_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924005261",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718924022827",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1719253946047",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17192539489360.21230022301314121032122",
                                "_field": "current_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1719253965916",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1719254185946",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1719254020164",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17192540224310.034312002130012101232101",
                                "_field": "current_bonus_amount",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1719254033850",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1719254049080",
                                "_conditionalView_field": "current_bonus",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "quarter,month,half_year,year"
                            },
                            {
                                "id": "condition_1719254847534",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718924121917",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189241252960.33300032020344134142404",
                                "_field": "offer_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924214666",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "bonus",
                                "_field_required": true
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": []
                    },
                    {
                        "id": "elmnt_1718924245554",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189242500770.40213003303440030101114",
                                "_field": "offer_bonus_amount",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924324134",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_field_required": true
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1719254161118",
                                "_conditionalView_field": "offer_bonus",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "quarter,month,half_year,year"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717619089531",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176190985890.32414434230040222411024",
                                "_field": "cr",
                                "_field_required": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924531836",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718924553119",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717682511109",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176825135140.24233022141202211044101",
                                "_field": "org_dev",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924599870",
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
                "id": "step_copy_1719255341150",
                "sysName": "candidate_didnt_applied_job",
                "elements": [
                    {
                        "id": "elmnt_1717401969375",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174019861660.44033242412004300134131",
                                "_field": "reason_vacancy",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "reason_of_vacancy",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922492690",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401972782",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174020491080.040423420111410243244003",
                                "_field": "resigning_empl_full_name",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922521652",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1717402099495",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "replacement,transfer"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1725269255301",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17252693448890.11144001010241211224202",
                                "_field": "resigning_empl_full_name_strng",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1725269359740",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1725269374670",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "another_company"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401973476",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174020816510.12114333434113323312312",
                                "_field": "vacancy_id",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922537991",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": []
                    },
                    {
                        "id": "elmnt_1717682480564",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176824834990.42430222211444120422003",
                                "_field": "id_position",
                                "_field_link_type": "input",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922552505",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401971964",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174020239580.034443214424020322312221",
                                "_field": "company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "company",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922570027",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401974161",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174022108360.42432332032431101343242",
                                "_field": "country_city",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922585223",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401975581",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174022292800.41233342331013140101322",
                                "_field": "candidate_full_name",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922598486",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401976342",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174022385390.41413003113212134344013",
                                "_field": "position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922615368",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401977901",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174022611150.034404033342112410322443",
                                "_field": "division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922637757",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1719259724918",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{org_structure_text}}"
                    },
                    {
                        "id": "elmnt_1717401980266",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174034095080.204034201400132330433023",
                                "_field": "direct_full_name",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922678100",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401981568",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174034417050.3313104212013141213002",
                                "_field": "contract_type",
                                "_field_link_type": "select",
                                "_field_link_pageSize": 0,
                                "_field_arrayLink_endpoint": "contract_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922697124",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403456249",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174034624150.121233343410212143130322",
                                "_field": "contract_period",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922715274",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1717403483837",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403457018",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174035278340.33101024023140002031314",
                                "_field": "reason_contract",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922733792",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1717403537149",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403458048",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174035504160.111023104414034231320012",
                                "_field": "employment_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "employment_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922751228",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730360116460",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17303601197730.23230340101214421142332",
                                "_field": "job_rate",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1730360128975",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403458753",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174035776140.14144124233210031011332",
                                "_field": "probation",
                                "_field_set_default": true,
                                "_field_default_value": "3 месяца",
                                "_field_use_mask": false,
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922771042",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403459511",
                        "type": "input",
                        "_actions": [
                            {
                                "id": "17174037621020.03103013304004423013203"
                            }
                        ],
                        "_input_fields": [
                            {
                                "id": "17174037643110.03143223331032342444034",
                                "_field": "assessment_type",
                                "_field_set_default": true,
                                "_field_default_value": "Perfomance review",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922790472",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "PerfomanceReview",
                                "_field_link_saveQuantity": false,
                                "_field_required": true
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403790993",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174037928860.201343434142011013233443",
                                "_field": "cost_center",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922822326",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403803414",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174038054740.13023132041203302304222",
                                "_field": "name_position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922847702",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403818332",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174038283770.11114422230112401311221",
                                "_field": "analytics_ops",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922865944",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "analytics_for_ops"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717618621517",
                        "type": "text",
                        "paraText": "<b>Блок C&B</b>"
                    },
                    {
                        "id": "elmnt_1717618692210",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176187132000.203242424112144324403322",
                                "_field": "company_name",
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1718922918212",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": []
                    },
                    {
                        "id": "elmnt_1717618694976",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176187499670.20203144142142111134322",
                                "_field": "current_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923360353",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            },
                            {
                                "id": "17176187512460.40344110231333121101124",
                                "_field": "offer_position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923378809",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_input_fields_in_a_row": 2,
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718923399089",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718923349235",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189233536630.121344113333442403110313",
                                "_field": "offer_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923465686",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718923497386",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717618697756",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176187721430.2123314340231314444413",
                                "_field": "count_empl_direct",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923661126",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            },
                            {
                                "id": "17176187737450.2323003024303223112313",
                                "_field": "offer_count_empl_direct",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923682417",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_input_fields_in_a_row": 2,
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718923697041",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718923588830",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189235968040.24424302413133303242132",
                                "_field": "offer_count_empl_direct",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923613364",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718923632393",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717618700298",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176188322270.211013232204120400211132",
                                "_field": "current_salary_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924060329",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            },
                            {
                                "id": "17176188340780.04130102032020214243111",
                                "_field": "offer_salary_bonus",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924083613",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_input_fields_in_a_row": 2,
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718924096269",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718923985042",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189239904910.33043344043124302211002",
                                "_field": "offer_salary_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924005261",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718924022827",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1719253946047",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17192539489360.21230022301314121032122",
                                "_field": "current_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1719253965916",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1719254185946",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1719254020164",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17192540224310.034312002130012101232101",
                                "_field": "current_bonus_amount",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1719254033850",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1719254049080",
                                "_conditionalView_field": "current_bonus",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "quarter,month,half_year,year"
                            },
                            {
                                "id": "condition_1719254847534",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718924121917",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189241252960.33300032020344134142404",
                                "_field": "offer_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924214666",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "bonus",
                                "_field_required": true
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": []
                    },
                    {
                        "id": "elmnt_1718924245554",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189242500770.40213003303440030101114",
                                "_field": "offer_bonus_amount",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924324134",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_field_required": true
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1719254161118",
                                "_conditionalView_field": "offer_bonus",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "quarter,month,half_year,year"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717619089531",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176190985890.32414434230040222411024",
                                "_field": "cr",
                                "_field_required": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924531836",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718924553119",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717682511109",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176825135140.24233022141202211044101",
                                "_field": "org_dev",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924599870",
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
                "id": "step_copy_1719255365712",
                "sysName": "rejected",
                "elements": [
                    {
                        "id": "elmnt_1717401969375",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174019861660.44033242412004300134131",
                                "_field": "reason_vacancy",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "reason_of_vacancy",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922492690",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401972782",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174020491080.040423420111410243244003",
                                "_field": "resigning_empl_full_name",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922521652",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1717402099495",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "replacement,transfer"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1725269497591",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17252695014170.3222432020112032303414",
                                "_field": "resigning_empl_full_name_strng",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1725269520065",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1725269532690",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "another_company"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401973476",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174020816510.12114333434113323312312",
                                "_field": "vacancy_id",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922537991",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": []
                    },
                    {
                        "id": "elmnt_1717682480564",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176824834990.42430222211444120422003",
                                "_field": "id_position",
                                "_field_link_type": "input",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922552505",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401971964",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174020239580.034443214424020322312221",
                                "_field": "company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "company",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922570027",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401974161",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174022108360.42432332032431101343242",
                                "_field": "country_city",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922585223",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401975581",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174022292800.41233342331013140101322",
                                "_field": "candidate_full_name",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922598486",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401976342",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174022385390.41413003113212134344013",
                                "_field": "position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922615368",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401977901",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174022611150.034404033342112410322443",
                                "_field": "division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922637757",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1719259762384",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{org_structure_text}}"
                    },
                    {
                        "id": "elmnt_1717401980266",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174034095080.204034201400132330433023",
                                "_field": "direct_full_name",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922678100",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401981568",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174034417050.3313104212013141213002",
                                "_field": "contract_type",
                                "_field_link_type": "select",
                                "_field_link_pageSize": 0,
                                "_field_arrayLink_endpoint": "contract_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922697124",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403456249",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174034624150.121233343410212143130322",
                                "_field": "contract_period",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922715274",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1717403483837",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403457018",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174035278340.33101024023140002031314",
                                "_field": "reason_contract",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922733792",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1717403537149",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403458048",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174035504160.111023104414034231320012",
                                "_field": "employment_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "employment_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922751228",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730360160824",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17303601639560.144403331330444423330312",
                                "_field": "job_rate",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1730360172979",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403458753",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174035776140.14144124233210031011332",
                                "_field": "probation",
                                "_field_set_default": true,
                                "_field_default_value": "3 месяца",
                                "_field_use_mask": false,
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922771042",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403459511",
                        "type": "input",
                        "_actions": [
                            {
                                "id": "17174037621020.03103013304004423013203"
                            }
                        ],
                        "_input_fields": [
                            {
                                "id": "17174037643110.03143223331032342444034",
                                "_field": "assessment_type",
                                "_field_set_default": true,
                                "_field_default_value": "Perfomance review",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922790472",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "PerfomanceReview",
                                "_field_required": true
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403790993",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174037928860.201343434142011013233443",
                                "_field": "cost_center",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922822326",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403803414",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174038054740.13023132041203302304222",
                                "_field": "name_position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922847702",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403818332",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174038283770.11114422230112401311221",
                                "_field": "analytics_ops",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922865944",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "analytics_for_ops"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717618621517",
                        "type": "text",
                        "paraText": "<b>Блок C&B</b>"
                    },
                    {
                        "id": "elmnt_1717618692210",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176187132000.203242424112144324403322",
                                "_field": "company_name",
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1718922918212",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": []
                    },
                    {
                        "id": "elmnt_1717618694976",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176187499670.20203144142142111134322",
                                "_field": "current_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923360353",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            },
                            {
                                "id": "17176187512460.40344110231333121101124",
                                "_field": "offer_position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923378809",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_input_fields_in_a_row": 2,
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718923399089",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718923349235",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189233536630.121344113333442403110313",
                                "_field": "offer_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923465686",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718923497386",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717618697756",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176187721430.2123314340231314444413",
                                "_field": "count_empl_direct",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923661126",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            },
                            {
                                "id": "17176187737450.2323003024303223112313",
                                "_field": "offer_count_empl_direct",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923682417",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_input_fields_in_a_row": 2,
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718923697041",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718923588830",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189235968040.24424302413133303242132",
                                "_field": "offer_count_empl_direct",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923613364",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718923632393",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717618700298",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176188322270.211013232204120400211132",
                                "_field": "current_salary_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924060329",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            },
                            {
                                "id": "17176188340780.04130102032020214243111",
                                "_field": "offer_salary_bonus",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924083613",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_input_fields_in_a_row": 2,
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718924096269",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718923985042",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189239904910.33043344043124302211002",
                                "_field": "offer_salary_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924005261",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718924022827",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1719253946047",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17192539489360.21230022301314121032122",
                                "_field": "current_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1719253965916",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1719254185946",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1719254020164",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17192540224310.034312002130012101232101",
                                "_field": "current_bonus_amount",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1719254033850",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1719254049080",
                                "_conditionalView_field": "current_bonus",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "quarter,month,half_year,year"
                            },
                            {
                                "id": "condition_1719254847534",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718924121917",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189241252960.33300032020344134142404",
                                "_field": "offer_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924214666",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "bonus",
                                "_field_required": true
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": []
                    },
                    {
                        "id": "elmnt_1718924245554",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189242500770.40213003303440030101114",
                                "_field": "offer_bonus_amount",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924324134",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_field_required": true
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1719254161118",
                                "_conditionalView_field": "offer_bonus",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "quarter,month,half_year,year"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717619089531",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176190985890.32414434230040222411024",
                                "_field": "cr",
                                "_field_required": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924531836",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718924553119",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717682511109",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176825135140.24233022141202211044101",
                                "_field": "org_dev",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924599870",
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
                "id": "step_copy_1719255380168",
                "sysName": "cancel",
                "elements": [
                    {
                        "id": "elmnt_1717401969375",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174019861660.44033242412004300134131",
                                "_field": "reason_vacancy",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "reason_of_vacancy",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922492690",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401972782",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174020491080.040423420111410243244003",
                                "_field": "resigning_empl_full_name",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922521652",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1717402099495",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "replacement,transfer"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1725269581212",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17252695846490.30440310012201001030444",
                                "_field": "resigning_empl_full_name_strng",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1725269598490",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1725269941822",
                                "_conditionalView_field": "reason_vacancy",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "another_company"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401973476",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174020816510.12114333434113323312312",
                                "_field": "vacancy_id",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922537991",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": []
                    },
                    {
                        "id": "elmnt_1717682480564",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176824834990.42430222211444120422003",
                                "_field": "id_position",
                                "_field_link_type": "input",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922552505",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401971964",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174020239580.034443214424020322312221",
                                "_field": "company",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "company",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922570027",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401974161",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174022108360.42432332032431101343242",
                                "_field": "country_city",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922585223",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401975581",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174022292800.41233342331013140101322",
                                "_field": "candidate_full_name",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922598486",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401976342",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174022385390.41413003113212134344013",
                                "_field": "position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922615368",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401977901",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174022611150.034404033342112410322443",
                                "_field": "division",
                                "_field_link_type": "complexSelect",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922637757",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1719259792410",
                        "type": "text",
                        "paraText": "<div class=\"form_label\">Организационная структура:</div>\n{{org_structure_text}}"
                    },
                    {
                        "id": "elmnt_1717401980266",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174034095080.204034201400132330433023",
                                "_field": "direct_full_name",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "employees_full_name_dropdown",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922678100",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717401981568",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174034417050.3313104212013141213002",
                                "_field": "contract_type",
                                "_field_link_type": "select",
                                "_field_link_pageSize": 0,
                                "_field_arrayLink_endpoint": "contract_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922697124",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403456249",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174034624150.121233343410212143130322",
                                "_field": "contract_period",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922715274",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1717403483837",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403457018",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174035278340.33101024023140002031314",
                                "_field": "reason_contract",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922733792",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1717403537149",
                                "_conditionalView_field": "contract_type",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "fixed_term"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403458048",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174035504160.111023104414034231320012",
                                "_field": "employment_type",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "employment_type",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922751228",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730360206208",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17303602093340.4224122444434011122441",
                                "_field": "job_rate",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1730360217232",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403458753",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174035776140.14144124233210031011332",
                                "_field": "probation",
                                "_field_set_default": true,
                                "_field_default_value": "3 месяца",
                                "_field_use_mask": false,
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922771042",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403459511",
                        "type": "input",
                        "_actions": [
                            {
                                "id": "17174037621020.03103013304004423013203"
                            }
                        ],
                        "_input_fields": [
                            {
                                "id": "17174037643110.03143223331032342444034",
                                "_field": "assessment_type",
                                "_field_set_default": true,
                                "_field_default_value": "Perfomance review",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922790472",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "PerfomanceReview",
                                "_field_required": true
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403790993",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174037928860.201343434142011013233443",
                                "_field": "cost_center",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922822326",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403803414",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174038054740.13023132041203302304222",
                                "_field": "name_position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922847702",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717403818332",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17174038283770.11114422230112401311221",
                                "_field": "analytics_ops",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718922865944",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "analytics_for_ops"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717618621517",
                        "type": "text",
                        "paraText": "<b>Блок C&B</b>"
                    },
                    {
                        "id": "elmnt_1717618692210",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176187132000.203242424112144324403322",
                                "_field": "company_name",
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1718922918212",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_conditionalView_disable_or_hide": "disable"
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": []
                    },
                    {
                        "id": "elmnt_1717618694976",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176187499670.20203144142142111134322",
                                "_field": "current_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923360353",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            },
                            {
                                "id": "17176187512460.40344110231333121101124",
                                "_field": "offer_position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923378809",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_input_fields_in_a_row": 2,
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718923399089",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718923349235",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189233536630.121344113333442403110313",
                                "_field": "offer_position",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923465686",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718923497386",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717618697756",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176187721430.2123314340231314444413",
                                "_field": "count_empl_direct",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923661126",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            },
                            {
                                "id": "17176187737450.2323003024303223112313",
                                "_field": "offer_count_empl_direct",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923682417",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_input_fields_in_a_row": 2,
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718923697041",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718923588830",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189235968040.24424302413133303242132",
                                "_field": "offer_count_empl_direct",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718923613364",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718923632393",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717618700298",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176188322270.211013232204120400211132",
                                "_field": "current_salary_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924060329",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            },
                            {
                                "id": "17176188340780.04130102032020214243111",
                                "_field": "offer_salary_bonus",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924083613",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_input_fields_in_a_row": 2,
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718924096269",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718923985042",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189239904910.33043344043124302211002",
                                "_field": "offer_salary_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924005261",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718924022827",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1719253946047",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17192539489360.21230022301314121032122",
                                "_field": "current_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1719253965916",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1719254185946",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1719254020164",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17192540224310.034312002130012101232101",
                                "_field": "current_bonus_amount",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1719254033850",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1719254049080",
                                "_conditionalView_field": "current_bonus",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "quarter,month,half_year,year"
                            },
                            {
                                "id": "condition_1719254847534",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718924121917",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189241252960.33300032020344134142404",
                                "_field": "offer_bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924214666",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "bonus",
                                "_field_required": true
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": []
                    },
                    {
                        "id": "elmnt_1718924245554",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189242500770.40213003303440030101114",
                                "_field": "offer_bonus_amount",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924324134",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_field_required": true
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1719254161118",
                                "_conditionalView_field": "offer_bonus",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "quarter,month,half_year,year"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717619089531",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176190985890.32414434230040222411024",
                                "_field": "cr",
                                "_field_required": false,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924531836",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718924553119",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "jo_agreement,jo_budget_holder"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717682511109",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176825135140.24233022141202211044101",
                                "_field": "org_dev",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718924599870",
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
                "id": "step_1717670229018",
                "sysName": "action",
                "elements": [
                    {
                        "id": "elmnt_1717681679115",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17176817457040.31021230403421134433403",
                                "_action": "action_1717403895037",
                                "_action_icon": "done",
                                "_action_button_type": "accent",
                                "_conditionalView": false,
                                "_conditions": [
                                    {
                                        "id": "condition_1722360407988",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{cnb.webuser_id.whom_delegate_ids}},{{cnb.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_conditionals_and_or": "OR",
                                "_action_label": "Согласовать",
                                "_action_standardRequired": false,
                                "_action_conditional_disable_or_hide": "hide",
                                "_action_customRequired": false,
                                "_action_oneTime": false,
                                "_action_oneTime_message": "Согласовано"
                            }
                        ],
                        "_conditionalView": false,
                        "_actions_in_a_row": 1,
                        "_conditions": [
                            {
                                "id": "condition_1718903590736",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "approval_cnb"
                            },
                            {
                                "id": "condition_1722360346406",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "jo_cnb"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718909769571",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17189097722220.212322111204104220011113",
                                "_action": "action_copy_1718909672343",
                                "_action_icon": "done",
                                "_action_button_type": "accent",
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1718909809361",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{hr_bp.webuser_id.whom_delegate_ids}},{{hr_bp.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_label": "Согласовать",
                                "_action_conditionals_and_or": "AND",
                                "_action_standardRequired": true,
                                "_action_oneTime": false,
                                "_action_oneTime_message": "Согласовано"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718909980703",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "approval_hr_bp"
                            },
                            {
                                "id": "condition_1718910007135",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "jo_hrbp"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718920652522",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17189206787810.22141200111341040133331",
                                "_action": "action_copy_1718920502790",
                                "_action_label": "Подтвердить",
                                "_action_icon": "done",
                                "_action_button_type": "accent",
                                "_action_standardRequired": true,
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1724767791572",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{manager.webuser_id.whom_delegate_ids}},{{manager.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Подтверждено"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718920726185",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "approval_direct"
                            },
                            {
                                "id": "condition_1718920752967",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_value": "jo_agreement",
                                "_conditionalView_value_RAW": false
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718920940854",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17189209530440.24000143343140211001332",
                                "_action": "action_copy_1718920534574",
                                "_action_label": "Подтвердить",
                                "_action_icon": "done",
                                "_action_button_type": "accent",
                                "_conditionalView": true,
                                "_action_standardRequired": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1724767999159",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{up_manager.webuser_id.whom_delegate_ids}},{{up_manager.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Подтверждено"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718922361592",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "approval_direct_up1"
                            },
                            {
                                "id": "condition_1718922409609",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "jo_agreement",
                                "_conditionalView_value_RAW": true
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1719256128188",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17192561308990.14213222340224224134441",
                                "_action": "action_copy_1719255492119",
                                "_action_icon": "done",
                                "_conditionalView": false,
                                "_action_customRequired": false,
                                "_action_button_type": "accent",
                                "_action_standardRequired": true
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1719256192772",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "approval_org_dev"
                            },
                            {
                                "id": "condition_1719256217498",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "jo_orgdev"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718959014993",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17189591507650.14142421410034440230114",
                                "_action": "action_copy_1718951234010",
                                "_action_icon": "done",
                                "_action_button_type": "accent",
                                "_action_standardRequired": true,
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1724768125807",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{user_creator.webuser_id.whom_delegate_ids}},{{user_creator.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_label": "Оффер принят",
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Прекрасно!"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718959167518",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "present_offer"
                            },
                            {
                                "id": "condition_1718959184196",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "jo_recruiter"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718959007360",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17189590220230.022431313200201420244044",
                                "_action": "action_copy_1718951248601",
                                "_action_icon": "close",
                                "_action_button_type": "danger",
                                "_action_standardRequired": false,
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1724768296370",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{user_creator.webuser_id.whom_delegate_ids}},{{user_creator.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_label": "Оффер отклонен",
                                "_action_oneTime": false,
                                "_action_oneTime_message": ""
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718959070111",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "present_offer"
                            },
                            {
                                "id": "condition_1718959122061",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "jo_recruiter"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730842616970",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17308426497340.24332234341040040140213",
                                "_action": "action_1730842754997",
                                "_action_label": "Кандидат отказался от оформления",
                                "_action_button_type": "danger",
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1730842910741",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{user_creator.webuser_id.whom_delegate_ids}},{{user_creator.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_icon": "close"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1730842928515",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "approval_org_dev"
                            },
                            {
                                "id": "condition_1730842930062",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "jo_recruiter"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1719256259707",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17192562640930.24310424021404302411444",
                                "_action": "action_copy_1719255853281",
                                "_action_icon": "done",
                                "_action_button_type": "accent",
                                "_action_standardRequired": true,
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1724769102458",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{user_creator.webuser_id.whom_delegate_ids}},{{user_creator.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_oneTime": true,
                                "_action_oneTime_message": "Подтверждено",
                                "_action_label": "Кандидат вышел на работу"
                            },
                            {
                                "id": "17192563390180.34301044021204144103024",
                                "_action": "action_copy_1719255873279",
                                "_action_button_type": "danger",
                                "_action_standardRequired": false,
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1724769072408",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{user_creator.webuser_id.whom_delegate_ids}},{{user_creator.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_oneTime": false,
                                "_action_oneTime_message": "",
                                "_action_label": "Кандидат не вышел на работу",
                                "_action_icon": "ban"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1719256283087",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "exit_confirmation"
                            },
                            {
                                "id": "condition_1719256307623",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "jo_recruiter"
                            }
                        ],
                        "_actions_in_a_row": 2
                    },
                    {
                        "id": "elmnt_1717671101351",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17176711060240.30414004010022100204231",
                                "_action": "action_1717403908326",
                                "_action_button_type": "danger",
                                "_action_standardRequired": true,
                                "_action_label": "Отменить",
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1724768490983",
                                        "_conditionalView_field": "WebUser.id",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "{{user_creator.webuser_id.whom_delegate_ids}},{{user_creator.webuser_id.id}}",
                                        "_conditionalView_value_RAW": true
                                    }
                                ],
                                "_action_oneTime": false,
                                "_action_oneTime_message": ""
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1718111982165",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "contains",
                                "_conditionalView_value": "jo_recruiter"
                            },
                            {
                                "id": "condition_1718952996931",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "approval_cnb,approval_hr_bp,approval_budget_holder,approval_direct,approval_direct_up1,present_offer,approval_org_dev,exit_confirmation"
                            }
                        ],
                        "_actions_in_a_row": 1
                    }
                ],
                "sectionVisibility": "always",
                "sectionCustomVisibility": ""
            },
            {
                "id": "step_1730837144322",
                "sysName": "popup_cancel",
                "elements": [
                    {
                        "id": "elmnt_1730839999466",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17308400039500.41304142413441443243342",
                                "_action": "action_1730837327800",
                                "_action_label": "X",
                                "_action_button_type": "danger",
                                "_action_icon": null
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730837316453",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17308374235470.33220201240323430024322",
                                "_field": "cancel_reason_bfr_prsnt",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "jo_reason_bfr_present",
                                "_field_required": true,
                                "_conditionalView": false
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1730838216608",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "!==",
                                "_conditionalView_value": "exit_confirmation"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730838190921",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17308382753890.4022300122432044220402",
                                "_field": "cancel_reason_exit_conf",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "jo_reason_exit_conf",
                                "_field_required": true
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1730838303955",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "exit_confirmation"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730838793843",
                        "type": "text",
                        "paraText": "<div style=\"margin: 200px;\"></div>"
                    },
                    {
                        "id": "elmnt_1730837531349",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17308375350720.031234311222033114001432",
                                "_action": "action_1730837624267",
                                "_action_label": "Ок",
                                "_action_button_type": "accent",
                                "_action_standardRequired": false,
                                "_action_customRequired": false
                            }
                        ],
                        "_actions_in_a_row": 1
                    }
                ],
                "CSSclass": ""
            },
            {
                "id": "step_1730837163703",
                "sysName": "popup_refuse",
                "elements": [
                    {
                        "id": "elmnt_1730840932566",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17308409384850.4101132112331430301301",
                                "_action": "action_1730837327800",
                                "_action_label": "X",
                                "_action_button_type": "danger"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730837969677",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17308379967060.34423211421423342124201",
                                "_field": "cancel_reason_refused",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "jo_reason_refused",
                                "_field_required": true
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730838026457",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17308380299080.40414220303212341033101",
                                "_field": "cancel_reason_other",
                                "_field_required": true
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1730841032963",
                                "_conditionalView_field": "cancel_reason_refused",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "other"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730839227772",
                        "type": "text",
                        "paraText": "<div style=\"margin: 200px;\"></div>"
                    },
                    {
                        "id": "elmnt_1730838040010",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17308380432410.4430130213444320023403",
                                "_action": "action_copy_1719438330632",
                                "_action_label": "Ок",
                                "_action_button_type": "accent",
                                "_action_standardRequired": false,
                                "_action_customRequired": true,
                                "_action_customRequired_fields": [
                                    "cancel_reason_refused"
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_1730837240867",
                "sysName": "popup_didnt_applied",
                "elements": [
                    {
                        "id": "elmnt_1730840955300",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17308409602130.41120243340204314300404",
                                "_action": "action_1730837327800",
                                "_action_label": "X",
                                "_action_button_type": "danger"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730838098074",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17308381036910.21213102413312330342432",
                                "_field": "cancel_reason_didnt_applied",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "jo_reason_didnt_applied",
                                "_field_required": true
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730838099488",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17308381343720.32414433012032433342243",
                                "_field": "cancel_reason_other",
                                "_field_required": true
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1730841064962",
                                "_conditionalView_field": "cancel_reason_didnt_applied",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "other"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730839237822",
                        "type": "text",
                        "_input_fields": [
                            {
                                "id": "17308392407080.42030303023420443212221"
                            }
                        ],
                        "paraText": "<div style=\"margin: 200px;\"></div>"
                    },
                    {
                        "id": "elmnt_1730838100872",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17308381632070.024333041121421231444413",
                                "_action": "action_1719438139364",
                                "_action_label": "Ок",
                                "_action_standardRequired": false,
                                "_action_button_type": "accent",
                                "_action_customRequired": true,
                                "_action_customRequired_fields": [
                                    "cancel_reason_didnt_applied"
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_1730842019581",
                "sysName": "popup_refuse_orgdev",
                "elements": [
                    {
                        "id": "elmnt_1730842320561",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17308423252770.34124313011204234441112",
                                "_action": "action_1730837327800",
                                "_action_label": "X",
                                "_action_button_type": "danger"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730842245990",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17308422507990.3002431122424422014443",
                                "_field": "cancel_reason_refused",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "jo_reason_refused",
                                "_field_required": true
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730842275007",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17308422791560.100143202103232214123122",
                                "_field": "cancel_reason_other",
                                "_field_required": true
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1730842289508",
                                "_conditionalView_field": "cancel_reason_refused",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "other"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730842353794",
                        "type": "text",
                        "paraText": "<div style=\"margin: 200px;\"></div>"
                    },
                    {
                        "id": "elmnt_1730842233775",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17308422433600.24320213413303023331324",
                                "_action": "action_1730837624267",
                                "_action_label": "Ок",
                                "_action_button_type": "accent",
                                "_action_customRequired": true,
                                "_action_customRequired_fields": [
                                    "cancel_reason_refused"
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "state": {
            "step": "approval_cnb",
            "popup": null,
            "errorMessage": "",
            "prevStep": "",
            "cancelling": "false",
            "next": "false",
            "refuse": "false",
            "didnt_applied": "false"
        },
        "actions": [
            {
                "id": "action_1717403895037",
                "name": "Cогласовать cnb",
                "actionType": "endpoint",
                "endpoint": "createJobAction",
                "mapping": [
                    {
                        "id": "mapping_1717681375750",
                        "field": "action",
                        "value": "change_status"
                    },
                    {
                        "id": "mapping_1718110015823",
                        "field": "pay_load",
                        "value": "approval_hr_bp"
                    }
                ],
                // "stateMapping": [
                //     {
                //         "id": "stateMapping1717681391501",
                //         "field": "FormState.next",
                //         "value": "true"
                //     },
                //     {
                //         "id": "stateMapping1717684159122",
                //         "field": "status",
                //         "value": "approval_hr_bp"
                //     },
                //     {
                //         "id": "stateMapping1718109404836",
                //         "field": "FormState.step",
                //         "value": "approval_hr_bp"
                //     }
                // ],
                "actionSubmit": true
            },
            {
                "id": "action_1717403908326",
                "name": "Отменить",
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1717671077028",
                        "field": "FormState.popup",
                        "value": "popup_cancel"
                    }
                ],
                "actionSubmit": false
            },
            {
                "id": "action_copy_1718909672343",
                "name": "Cогласовать hrbp",
                "actionType": "endpoint",
                "endpoint": "createJobAction",
                "mapping": [
                    {
                        "id": "mapping_1717681375750",
                        "field": "action",
                        "value": "change_status"
                    },
                    {
                        "id": "mapping_1718110015823",
                        "field": "pay_load",
                        "value": "approval_direct"
                    }
                ],
                "stateMapping": [
                    {
                        "id": "stateMapping1717681391501",
                        "field": "FormState.next",
                        "value": "true"
                    },
                    {
                        "id": "stateMapping1717684159122",
                        "field": "status",
                        "value": "approval_hr_bp"
                    },
                    {
                        "id": "stateMapping1718109404836",
                        "field": "FormState.step",
                        "value": "approval_hr_bp"
                    }
                ],
                "actionSubmit": true
            },
            {
                "id": "action_copy_1718920502790",
                "name": "Подтвердить direct",
                "actionType": "endpoint",
                "endpoint": "createJobAction",
                "mapping": [
                    {
                        "id": "mapping_1717681375750",
                        "field": "action",
                        "value": "change_status"
                    },
                    {
                        "id": "mapping_1718110015823",
                        "field": "pay_load",
                        "value": "approval_direct_up1"
                    }
                ],
                "stateMapping": [
                    {
                        "id": "stateMapping1717681391501",
                        "field": "FormState.next",
                        "value": "true"
                    },
                    {
                        "id": "stateMapping1717684159122",
                        "field": "status",
                        "value": "approval_hr_bp"
                    },
                    {
                        "id": "stateMapping1718109404836",
                        "field": "FormState.step",
                        "value": "approval_hr_bp"
                    }
                ],
                "actionSubmit": true
            },
            {
                "id": "action_copy_1718920534574",
                "name": "Подтвердить up direct",
                "actionType": "endpoint",
                "endpoint": "createJobAction",
                "mapping": [
                    {
                        "id": "mapping_1717681375750",
                        "field": "action",
                        "value": "change_status"
                    },
                    {
                        "id": "mapping_1718110015823",
                        "field": "pay_load",
                        "value": "present_offer"
                    }
                ],
                "stateMapping": [
                    {
                        "id": "stateMapping1717681391501",
                        "field": "FormState.next",
                        "value": "true"
                    },
                    {
                        "id": "stateMapping1717684159122",
                        "field": "status",
                        "value": "approval_hr_bp"
                    },
                    {
                        "id": "stateMapping1718109404836",
                        "field": "FormState.step",
                        "value": "approval_hr_bp"
                    }
                ],
                "actionSubmit": true
            },
            {
                "id": "action_copy_1718951234010",
                "name": "Кандидат принял оффер",
                "actionType": "endpoint",
                "endpoint": "createJobAction",
                "mapping": [
                    {
                        "id": "mapping_1717681375750",
                        "field": "action",
                        "value": "change_status"
                    },
                    {
                        "id": "mapping_1718110015823",
                        "field": "pay_load",
                        "value": "offer_accepted"
                    }
                ],
                "stateMapping": [
                    {
                        "id": "stateMapping1717681391501",
                        "field": "FormState.next",
                        "value": "true"
                    },
                    {
                        "id": "stateMapping1717684159122",
                        "field": "status",
                        "value": "approval_hr_bp"
                    },
                    {
                        "id": "stateMapping1718109404836",
                        "field": "FormState.step",
                        "value": "approval_hr_bp"
                    }
                ],
                "actionSubmit": true
            },
            {
                "id": "action_copy_1718951248601",
                "name": "Кандидат отклонил оффер",
                "actionType": "state",
                "endpoint": "createJobAction",
                "mapping": [
                    {
                        "id": "mapping_1717681375750",
                        "field": "action",
                        "value": "change_status"
                    },
                    {
                        "id": "mapping_1718110015823",
                        "field": "pay_load",
                        "value": "offer_refused"
                    }
                ],
                "stateMapping": [
                    {
                        "id": "stateMapping1719438377008",
                        "field": "FormState.popup",
                        "value": "popup_refuse"
                    }
                ],
                "actionSubmit": false
            },
            {
                "id": "action_copy_1719255492119",
                "name": "Данные обновлены",
                "actionType": "endpoint",
                "endpoint": "createJobAction",
                "mapping": [
                    {
                        "id": "mapping_1717681375750",
                        "field": "action",
                        "value": "change_status"
                    },
                    {
                        "id": "mapping_1718110015823",
                        "field": "pay_load",
                        "value": "exit_confirmation"
                    }
                ],
                "stateMapping": [
                    {
                        "id": "stateMapping1717681391501",
                        "field": "FormState.next",
                        "value": "true"
                    },
                    {
                        "id": "stateMapping1717684159122",
                        "field": "status",
                        "value": "approval_hr_bp"
                    },
                    {
                        "id": "stateMapping1718109404836",
                        "field": "FormState.step",
                        "value": "approval_hr_bp"
                    }
                ],
                "actionSubmit": true
            },
            {
                "id": "action_copy_1719255853281",
                "name": "Вышел на работу",
                "actionType": "endpoint",
                "endpoint": "createJobAction",
                "mapping": [
                    {
                        "id": "mapping_1717681375750",
                        "field": "action",
                        "value": "change_status"
                    },
                    {
                        "id": "mapping_1718110015823",
                        "field": "pay_load",
                        "value": "candidate_applied_job"
                    }
                ],
                "stateMapping": [
                    {
                        "id": "stateMapping1717681391501",
                        "field": "FormState.next",
                        "value": "true"
                    },
                    {
                        "id": "stateMapping1717684159122",
                        "field": "status",
                        "value": "approval_hr_bp"
                    },
                    {
                        "id": "stateMapping1718109404836",
                        "field": "FormState.step",
                        "value": "approval_hr_bp"
                    }
                ],
                "actionSubmit": true
            },
            {
                "id": "action_copy_1719255873279",
                "name": "Не вышел на работу",
                "actionType": "state",
                "endpoint": "createJobAction",
                "mapping": [
                    {
                        "id": "mapping_1717681375750",
                        "field": "action",
                        "value": "change_status"
                    },
                    {
                        "id": "mapping_1718110015823",
                        "field": "pay_load",
                        "value": "candidate_didnt_applied_job"
                    }
                ],
                "stateMapping": [
                    {
                        "id": "stateMapping1719441127802",
                        "field": "FormState.popup",
                        "value": "popup_didnt_applied"
                    }
                ],
                "actionSubmit": false,
                "autoAction": false
            },
            {
                "id": "action_1719438139364",
                "name": "Ок (didnt_applied)",
                "actionType": "endpoint",
                "stateMapping": [
                    {
                        "id": "stateMapping1719441203166",
                        "field": null
                    }
                ],
                "endpoint": "createJobAction",
                "mapping": [
                    {
                        "id": "mapping_1719441236866",
                        "field": "action",
                        "value": "didnt_applied"
                    }
                ],
                "actionSubmit": true
            },
            {
                "id": "action_copy_1719438330632",
                "name": "Ок (refuse)",
                "actionType": "endpoint",
                "endpoint": "createJobAction",
                "mapping": [
                    {
                        "id": "mapping_1717681375750",
                        "field": "action",
                        "value": "refuse"
                    }
                ],
                "stateMapping": [
                    {
                        "id": "stateMapping1717681391501",
                        "field": "FormState.next",
                        "value": "true"
                    },
                    {
                        "id": "stateMapping1717684159122",
                        "field": "status",
                        "value": "approval_hr_bp"
                    },
                    {
                        "id": "stateMapping1718109404836",
                        "field": "FormState.step",
                        "value": "approval_hr_bp"
                    }
                ],
                "actionSubmit": true
            },
            {
                "id": "action_1729706912530",
                "name": "Переназначить",
                "actionType": "endpoint",
                "endpoint": "createJobAction",
                "mapping": [
                    {
                        "id": "mapping_1729706987658",
                        "field": "action",
                        "value": "new_responsible"
                    }
                ],
                "actionSubmit": true
            },
            {
                "id": "action_1730837327800",
                "name": "Закрыть popup",
                "resetModel": false,
                "autoAction": false,
                "discardModel": false,
                "actionSubmit": false,
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1730840236318",
                        "field": "FormState.popup",
                        "value": ""
                    }
                ]
            },
            {
                "id": "action_1730837624267",
                "name": "Ок (cancel)",
                "actionType": "endpoint",
                "stateMapping": [
                    {
                        "id": "stateMapping1730837649218"
                    }
                ],
                "endpoint": "createJobAction",
                "mapping": [
                    {
                        "id": "mapping_1730837670950",
                        "field": "action",
                        "value": "cancel"
                    }
                ],
                "actionSubmit": true
            },
            {
                "id": "action_1730842754997",
                "name": "Кандидат отказался от оформления",
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1730842772182",
                        "field": "FormState.popup",
                        "value": "popup_refuse_orgdev"
                    }
                ]
            }
        ],
        "general": {
            "edittingOn": false,
            "showState": false,
            "showModel": true,
            "autosubmit": "no_autosubmit",
            "autosubmit_model": [
                "division"
            ],
            "saveState": false,
            "showFullModel": false,
            "showAuthModel": false,
            "closePopupOnClick": true,
            "debugConditions": false,
            "debugForUsers": true,
            "debugUsers": "aleksandra.kalina@lamoda.ru"
        },
        "hideActionsHint": true,
        "hideHint": true
    },
    "tableTitle": null,
    "actions": null,
    "headers": [
        {
            "sysName": "analytics_ops",
            "dataType": "link",
            "name": "Analytics for OPS",
            "id": "44501715676533202",
            "link": "analytics_for_ops",
            "group": "1717136273468",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 23,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "assessment_type",
            "dataType": "link",
            "name": "Форма оценки",
            "id": "53871715676486789",
            "link": "perf_review",
            "group": "1717136273468",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 20,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "candidate_full_name",
            "dataType": "string",
            "name": "ФИО кандидата",
            "id": "29091715676143182",
            "link": null,
            "group": "1717136273468",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "company",
            "dataType": "link",
            "name": "Юр. лицо",
            "id": "25501715676080911",
            "link": "company",
            "group": "1717136273468",
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
            "formatOptions": null,
            "groupName": null,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "contract_type",
            "dataType": "link",
            "name": "Тип договора",
            "id": "94821715676273371",
            "link": "contract_type",
            "group": "1717136273468",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 14,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "cost_center",
            "dataType": "string",
            "name": "Кост-центр",
            "id": "68901715676530998",
            "link": null,
            "group": "1717136273468",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 21,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "count_empl_direct",
            "dataType": "string",
            "name": "Текущее количество подчиненных",
            "id": "25431715676819516",
            "link": null,
            "group": "1717136273468",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 28,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "country_city",
            "dataType": "string",
            "name": "Страна, город",
            "id": "83591715676107813",
            "link": null,
            "group": "1717136273468",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "cr",
            "dataType": "string",
            "name": "CR Lamoda(только для TECH)",
            "id": "82611715677377022",
            "link": null,
            "group": "1717136273468",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 43,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "current_position",
            "dataType": "string",
            "name": "Текущая должность",
            "id": "16321715676814870",
            "link": null,
            "group": "1717136273468",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 25,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "current_salary_bonus",
            "dataType": "string",
            "name": "Текущий ежемесячный оклад",
            "id": "62881715676822167",
            "link": null,
            "group": "1717136273468",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 31,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "direct_full_name",
            "dataType": "link",
            "name": "ФИО руководителя",
            "id": "64721715676272622",
            "link": "employees",
            "group": "1717136273468",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 13,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "division",
            "dataType": "link",
            "name": "Подразделение",
            "id": "40821715676271880",
            "link": "structure",
            "group": "1717136273468",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "employment_type",
            "dataType": "link",
            "name": "Тип занятости",
            "id": "24381715676484262",
            "link": "employment_type",
            "group": "1717136273468",
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
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "name_position",
            "dataType": "string",
            "name": "Name position",
            "id": "83421715676531827",
            "link": null,
            "group": "1717136273468",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 22,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "offer_count_empl_direct",
            "dataType": "string",
            "name": "Количество подчиненных в Lamoda",
            "id": "36501715676821342",
            "link": null,
            "group": "1717136273468",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 30,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "offer_position",
            "dataType": "string",
            "name": "Должность в Lamoda",
            "id": "56891715677420164",
            "link": null,
            "group": "1717136273468",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 27,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "offer_salary_bonus",
            "dataType": "string",
            "name": "Предложение Lamoda по окладу",
            "id": "15821715677132698",
            "link": null,
            "group": "1717136273468",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 33,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "position",
            "dataType": "string",
            "name": "Должность",
            "id": "68721715676198986",
            "link": null,
            "group": "1717136273468",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 12,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "probation",
            "dataType": "string",
            "name": "Испытательный период",
            "id": "77291715676484957",
            "link": null,
            "group": "1717136273468",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 19,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "reason_vacancy",
            "dataType": "link",
            "name": "Причина появления вакансии",
            "id": "13591715675968084",
            "link": "reason_of_vacancy",
            "group": "1717136273468",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "resigning_empl_full_name",
            "dataType": "link",
            "name": "ФИО заменяемого сотрудника",
            "id": "72911715692442960",
            "link": "employees",
            "group": "1717136273468",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "vacancy_id",
            "dataType": "string",
            "name": "ID вакансии (из Optimacros)",
            "id": "78501715676487437",
            "link": null,
            "group": "1717136273468",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "org_structure",
            "dataType": "link",
            "name": "Организационная структура",
            "id": "19641716190989070",
            "link": "structure",
            "group": "1717136273468",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "company_name",
            "dataType": "string",
            "name": "Название текущей компании",
            "id": "84321716235575717",
            "link": "",
            "group": "1717136273468",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 24,
            "linkIndexFieldSysName": [],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": {},
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "number",
            "dataType": "string",
            "name": "Номер заявки",
            "id": "95231716236207376",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "id_position",
            "dataType": "link",
            "name": "Код позиции (из УШР)",
            "id": "15801717092329369",
            "link": "position",
            "group": "1717136273468",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "offer_bonus_amount",
            "dataType": "string",
            "name": "Предложение Lamoda по размеру премии",
            "id": "14291717102608159",
            "link": "",
            "group": "1717136273468",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 39,
            "linkIndexFieldSysName": [],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": {},
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "contract_period",
            "dataType": "string",
            "name": "Укажите период",
            "id": "23561717102136707",
            "link": "",
            "group": "1717136273468",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "reason_contract",
            "dataType": "string",
            "name": "Обоснование Срочного ТД",
            "id": "38571717102233946",
            "link": "",
            "group": "1717136273468",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "current_bonus_amount",
            "dataType": "string",
            "name": "Текущий размер премии",
            "id": "63161717102594756",
            "link": "",
            "group": "1717136273468",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 37,
            "linkIndexFieldSysName": [],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": {},
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "date",
            "dataType": "date",
            "name": "Дата создания заявки",
            "id": "91361717138808760",
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
                "dateFormat": "DD.MM.Y",
                "timeFormat": " HH:mm",
                "isUTC": "false"
            },
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "type_id",
            "dataType": "string",
            "name": "Тип заявки",
            "id": "43711717138677778",
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
            "formatOptions": {},
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "logs",
            "dataType": "arrayLink",
            "name": "История изменений",
            "id": "28171717136570915",
            "link": "logs",
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
            "linkOrArrayLinkType": true,
            "linkType": false,
            "arrayLink": true,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "last_user",
            "dataType": "link",
            "name": "Кем изменено",
            "id": "21921717136519307",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "prev_status",
            "dataType": "link",
            "name": "Предыдущий статус",
            "id": "45271717136281092",
            "link": "statuses",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "budget_holder",
            "dataType": "link",
            "name": "Держатель бюджета",
            "id": "45251717611164564",
            "link": "employees",
            "group": "1722956166046",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "first_work_day",
            "dataType": "date",
            "name": "Предварительная дата выхода сотрудника",
            "id": "84761717610566294",
            "link": "",
            "group": "1717136273468",
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
                "timeFormat": " ",
                "isUTC": "false"
            },
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "up_manager",
            "dataType": "link",
            "name": "Верхнеуровневый руководитель (руководитель нанимающего менеджера) для Non-TECH / Директор департамента для TECH",
            "id": "66111717611097029",
            "link": "employees",
            "group": "1722956166046",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "org_dev",
            "dataType": "boolean",
            "name": "Орг. дев",
            "id": "28311717610790667",
            "link": "",
            "group": "1717136273468",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 44,
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
                "hideStandardBooleanIcons": false,
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "cnb",
            "dataType": "link",
            "name": "C&B",
            "id": "79741717610837855",
            "link": "employees",
            "group": "1722956166046",
            "tags": "",
            "indexing": true,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 0,
            "linkIndexFieldSysName": [
                "webuser_id"
            ],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": {},
            "groupName": null,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": true,
            "array": false
        },
        {
            "sysName": "manager",
            "dataType": "link",
            "name": "Руководитель (непосредственно нанимающий менеджер) для Non-TECH / Руководитель отдела для TECH",
            "id": "93801717611067099",
            "link": "employees",
            "group": "1722956166046",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "hr_bp",
            "dataType": "link",
            "name": "HR BP",
            "id": "15621717611052206",
            "link": "employees",
            "group": "1722956166046",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "user_creator",
            "dataType": "link",
            "name": "Кто создал заявку",
            "id": "10641717669243064",
            "link": "employees",
            "group": "0",
            "tags": null,
            "indexing": true,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 4,
            "linkIndexFieldSysName": [
                "webuser_id"
            ],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": true,
            "array": false
        },
        {
            "sysName": "initial_step",
            "dataType": "string",
            "name": "",
            "id": "61681718370382220",
            "link": null,
            "group": "1720080628323",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "responsible_roles",
            "dataType": "arrayLink",
            "name": "Ответственные роли",
            "id": "42551718111539315",
            "link": "roles",
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
            "linkOrArrayLinkType": true,
            "linkType": false,
            "arrayLink": true,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "offer_bonus",
            "dataType": "link",
            "name": "Предложение Lamoda по периодичности выплаты премии",
            "id": "86661718369709109",
            "link": "bonus",
            "group": "1717136273468",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 36,
            "linkIndexFieldSysName": [],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": {},
            "groupName": null,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "current_bonus",
            "dataType": "link",
            "name": "Текущая периодичность выплаты премии",
            "id": "41941718369676191",
            "link": "bonus",
            "group": "1717136273468",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 34,
            "linkIndexFieldSysName": [],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": {},
            "groupName": null,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "responsible_employee_id",
            "dataType": "link",
            "name": "Ответственный за текущий этап",
            "id": "89061718111406513",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "org_structure_text",
            "dataType": "string",
            "name": "Организационная структура",
            "id": "43811718379566902",
            "link": "",
            "group": "1717136273468",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "all_user_ids",
            "dataType": "arrayLink",
            "name": "Все пользователи, относящиеся к заявке",
            "id": "64121718609008711",
            "link": "employees",
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 12,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "linkOrArrayLinkType": true,
            "linkType": false,
            "arrayLink": true,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "date_text",
            "dataType": "string",
            "name": "Дата",
            "id": "44611718913748411",
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
            "formatOptions": {},
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "last_change_date",
            "dataType": "date",
            "name": "Дата последнего изменения",
            "id": "12411720039745113",
            "link": "",
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 13,
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
                "timeFormat": " HH:mm",
                "isUTC": "false"
            },
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "prev_resigning_empl_full_name",
            "dataType": "string",
            "name": "",
            "id": "34051720080635679",
            "link": null,
            "group": "1720080628323",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "delegation_users",
            "dataType": "arrayLink",
            "name": "Делегирование",
            "id": "89841722360454366",
            "link": "employees",
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 14,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "linkOrArrayLinkType": true,
            "linkType": false,
            "arrayLink": true,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "resume_file",
            "dataType": "file",
            "name": "Прикрепить резюме",
            "id": "26451722958113871",
            "link": "",
            "group": "1722958207971",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "resume_link",
            "dataType": "string",
            "name": "Ссылка на резюме",
            "id": "83851722957876678",
            "link": "",
            "group": "1722958207971",
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
            "format": "webLink",
            "formatOptions": {},
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "candidate_motivation",
            "dataType": "string",
            "name": "Мотивация кандидата",
            "id": "62081722957847333",
            "link": "",
            "group": "1722958207971",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "add_benefits",
            "dataType": "string",
            "name": "Доп. бенефиты",
            "id": "12411722957803685",
            "link": "",
            "group": "1722958207971",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "risks",
            "dataType": "string",
            "name": "Есть ли риски от интервьюеров?",
            "id": "53331722957778181",
            "link": "",
            "group": "1722958207971",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "process_participants",
            "dataType": "string",
            "name": "Кто был участником процесса отбора кандидатов ФИО",
            "id": "37241722957752715",
            "link": "",
            "group": "1722958207971",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "add_hr_dir",
            "dataType": "boolean",
            "name": "Добавить HR Director?",
            "id": "20731722957677040",
            "link": "",
            "group": "1717136273468",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 46,
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "hr_dep",
            "dataType": "boolean",
            "name": "Ставка в HR департамент?",
            "id": "98001722957609216",
            "link": "",
            "group": "1717136273468",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 45,
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
                "hideStandardBooleanIcons": false,
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "desired_bonus",
            "dataType": "link",
            "name": "Ожидания кандидата по периодичности выплаты",
            "id": "17301722957574597",
            "link": "bonus",
            "group": "1717136273468",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 35,
            "linkIndexFieldSysName": [],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": {},
            "groupName": null,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "budget_date",
            "dataType": "date",
            "name": "Бюджетная дата выхода от C&B партнера",
            "id": "91111722956823141",
            "link": "",
            "group": "1717136273468",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 40,
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "desired_salary",
            "dataType": "string",
            "name": "Ожидания кандидата по окладу",
            "id": "84691722956323382",
            "link": "",
            "group": "1717136273468",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 32,
            "linkIndexFieldSysName": [],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": {},
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "desired_bonus_amount",
            "dataType": "string",
            "name": "Ожидания кандидата по размеру премии",
            "id": "47401722956320074",
            "link": "",
            "group": "1717136273468",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 38,
            "linkIndexFieldSysName": [],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": {},
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "feedback_3",
            "dataType": "string",
            "name": "Обратная связь (3)",
            "id": "33591723026902223",
            "link": "",
            "group": "1723026548996",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "feedback_2",
            "dataType": "string",
            "name": "Обратная связь (2)",
            "id": "34531723026899674",
            "link": "",
            "group": "1723026548996",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "feedback_1",
            "dataType": "string",
            "name": "Обратная связь (1)",
            "id": "62281723026898586",
            "link": "",
            "group": "1723026548996",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "interacted_as_3",
            "dataType": "string",
            "name": "Взаимодействовали как (3)",
            "id": "38371723026792952",
            "link": "",
            "group": "1723026548996",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "interacted_as_2",
            "dataType": "string",
            "name": "Взаимодействовали как (2)",
            "id": "92571723026791805",
            "link": "",
            "group": "1723026548996",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "interacted_as_1",
            "dataType": "string",
            "name": "Взаимодействовали как (1)",
            "id": "91581723026791139",
            "link": "",
            "group": "1723026548996",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "period_and_company_3",
            "dataType": "string",
            "name": "Период совместной работы + название компании (3)",
            "id": "96891723026678461",
            "link": "",
            "group": "1723026548996",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "period_and_company_2",
            "dataType": "string",
            "name": "Период совместной работы + название компании (2)",
            "id": "12301723026677690",
            "link": "",
            "group": "1723026548996",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "period_and_company_1",
            "dataType": "string",
            "name": "Период совместной работы + название компании (1)",
            "id": "32261723026675847",
            "link": "",
            "group": "1723026548996",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "full_name_recommender_3",
            "dataType": "string",
            "name": "ФИО и должность рекомендателя 3",
            "id": "61711723026650455",
            "link": "",
            "group": "1723026548996",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "full_name_recommender_2",
            "dataType": "string",
            "name": "ФИО и должность рекомендателя 2",
            "id": "65801723026642796",
            "link": "",
            "group": "1723026548996",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "full_name_recommender_1",
            "dataType": "string",
            "name": "ФИО и должность рекомендателя 1",
            "id": "98861723026560889",
            "link": "",
            "group": "1723026548996",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "hrd",
            "dataType": "link",
            "name": "HR Director",
            "id": "22411723027680985",
            "link": "employees",
            "group": "1722956166046",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "cr_desired",
            "dataType": "string",
            "name": "СR ожидание (только для TECH)",
            "id": "85371723034344516",
            "link": "",
            "group": "1717136273468",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 42,
            "linkIndexFieldSysName": [],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": {},
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "cr_current",
            "dataType": "string",
            "name": "CR текущий (только для TECH)",
            "id": "83941723034298011",
            "link": "",
            "group": "1717136273468",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 41,
            "linkIndexFieldSysName": [],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": {},
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "desired_count_empl_direct",
            "dataType": "string",
            "name": "Ожидаемое количество подчиненных",
            "id": "33431723034099026",
            "link": "",
            "group": "1717136273468",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 29,
            "linkIndexFieldSysName": [],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": {},
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "desired_position",
            "dataType": "string",
            "name": "Ожидаемая должность",
            "id": "56861723034037117",
            "link": "",
            "group": "1717136273468",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 26,
            "linkIndexFieldSysName": [],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": {},
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "add_recommendation_3",
            "dataType": "json",
            "name": "Добавить рекомендацию 3",
            "id": "65201723223302028",
            "link": "",
            "group": "1717136273468",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 48,
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
                        "value": "add",
                        "label": ""
                    }
                ]
            },
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": true,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "add_recommendation_2",
            "dataType": "json",
            "name": "Добавить рекомендацию 2",
            "id": "24611723223280015",
            "link": "",
            "group": "1717136273468",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 47,
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
                        "value": "add",
                        "label": ""
                    }
                ]
            },
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": true,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "status",
            "dataType": "link",
            "name": "Статус",
            "id": "33981716236672620",
            "link": "statuses",
            "group": "0",
            "tags": null,
            "indexing": true,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 1,
            "linkIndexFieldSysName": [
                "id"
            ],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": true,
            "array": false
        },
        {
            "sysName": "resigning_empl_full_name_strng",
            "dataType": "string",
            "name": "ФИО заменяемого сотрудника",
            "id": "98101725001431871",
            "link": null,
            "group": "1717136273468",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "job_rate",
            "dataType": "decimal",
            "name": "Коэффициент занятости",
            "id": "96811730359125382",
            "link": "",
            "group": "1717136273468",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "cancel_reason_didnt_applied",
            "dataType": "link",
            "name": "Причина",
            "id": "20141730487362202",
            "link": "jo_reason_didnt_applied",
            "group": "1730486886276",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "cancel_reason_refused",
            "dataType": "link",
            "name": "Причина",
            "id": "10211730487305830",
            "link": "jo_reason_refused",
            "group": "1730486886276",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "cancel_reason_exit_conf",
            "dataType": "link",
            "name": "Причина",
            "id": "20021730487018725",
            "link": "jo_reason_exit_conf",
            "group": "1730486886276",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "cancel_reason_bfr_prsnt",
            "dataType": "link",
            "name": "Причина",
            "id": "19191730486949303",
            "link": "jo_reason_bfr_present",
            "group": "1730486886276",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "cancel_reason_other",
            "dataType": "string",
            "name": "Укажите причину",
            "id": "43661730491636995",
            "link": "",
            "group": "1730486886276",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "approved_date",
            "dataType": "date",
            "name": "Согласованная дата выхода",
            "id": "52561730531754157",
            "link": "",
            "group": "1717136273468",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 49,
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        }
    ],
    "data": [
        {
            "offer_count_empl_direct": "1",
            "number": "N-4-790016",
            "name_position": "1",
            "prev_status": {
                "id": "approval_cnb",
                "status": "Cогласование CnB"
            },
            "org_structure_text": "Распределительный центр\\Складской отдел\\Смена №1\\Зона хранения товара\\Участок размещения М2",
            "candidate_full_name": "1",
            "analytics_ops": {
                "name": "Fleet",
                "id": "fleet"
            },
            "cost_center": "1",
            "country_city": "1",
            "direct_full_name": {
                "email": "A.Kalimulina@lamoda.ru",
                "division_name": "Декрет",
                "id": "A.Kalimulina@lamoda.ru",
                "position": "Сотрудник склада",
                "employee_full_name": "Анастасия Калимулина"
            },
            "vacancy_id": "1",
            "user_creator": {
                "email": "aleksandra.kalina@lamoda.ru",
                "id": "aleksandra.kalina@lamoda.ru",
                "position": "Аналитик по развитию корпоративных бизнес-приложений",
                "webuser_id": {
                    "who_delegated_ids": [],
                    "role": [
                        "jo_recruiter",
                        "jo_agreement",
                        "jo_hrbp",
                        "jo_cnb"
                    ],
                    "whom_delegate_ids": [],
                    "id": "aleksandra.kalina@lamoda.ru"
                },
                "employee_full_name": "Александра Калина"
            },
            "offer_salary_bonus": "1",
            "assessment_type": "none",
            "hrd": {
                "webuser_id": {
                    "role": [
                        "jo_agreement",
                        "jo_budget_holder",
                        "st_agreement",
                        "jo_hrd"
                    ],
                    "id": "alexandra.aborina@lamoda.ru"
                },
                "id": "alexandra.aborina@lamoda.ru",
                "employee_full_name": "Александра Аборина"
            },
            "last_change_date": 1732263652000,
            "division": {
                "division_name": "Участок размещения М2",
                "id": "2439278"
            },
            "offer_position": "1",
            "responsible_employee_id": {
                "email": "aleksandra.kalina@lamoda.ru",
                "id": "aleksandra.kalina@lamoda.ru",
                "position": "Аналитик по развитию корпоративных бизнес-приложений",
                "webuser_id": {
                    "who_delegated_ids": [],
                    "role": [
                        "jo_recruiter",
                        "jo_agreement",
                        "jo_hrbp",
                        "jo_cnb"
                    ],
                    "whom_delegate_ids": [],
                    "id": "aleksandra.kalina@lamoda.ru"
                },
                "employee_full_name": "Александра Калина"
            },
            "probation": "3 месяца",
            "company": {
                "company": "КУПИШУЗ",
                "id": "kupishoes"
            },
            "hr_bp": {
                "webuser_id": {
                    "who_delegated_ids": [],
                    "role": [
                        "jo_recruiter",
                        "jo_agreement",
                        "jo_hrbp",
                        "jo_cnb"
                    ],
                    "whom_delegate_ids": [],
                    "id": "aleksandra.kalina@lamoda.ru"
                },
                "id": "aleksandra.kalina@lamoda.ru",
                "employee_full_name": "Александра Калина",
                "email": "aleksandra.kalina@lamoda.ru"
            },
            "responsible_roles": [
                "jo_all_requests"
            ],
            "id": "590d1084-7344-4851-bc01-89d9bc14c032",
            "budget_holder": {
                "webuser_id": {
                    "who_delegated_ids": [],
                    "role": [
                        "jo_recruiter",
                        "jo_agreement",
                        "jo_hrbp",
                        "jo_cnb"
                    ],
                    "whom_delegate_ids": [],
                    "id": "aleksandra.kalina@lamoda.ru"
                },
                "id": "aleksandra.kalina@lamoda.ru",
                "employee_full_name": "Александра Калина",
                "email": "aleksandra.kalina@lamoda.ru"
            },
            "last_user": {
                "firstName": "Aleksandra",
                "lastName": "Kalina",
                "id": "aleksandra.kalina@lamoda.ru"
            },
            "job_rate": 1,
            "all_user_ids": [
                {
                    "webuser_id": {
                        "who_delegated_ids": [],
                        "role": [
                            "jo_recruiter",
                            "jo_agreement",
                            "jo_hrbp",
                            "jo_cnb"
                        ],
                        "whom_delegate_ids": [],
                        "id": "aleksandra.kalina@lamoda.ru"
                    },
                    "id": "aleksandra.kalina@lamoda.ru"
                },
                {
                    "webuser_id": {
                        "role": [
                            "jo_agreement",
                            "jo_budget_holder",
                            "st_agreement",
                            "st_budget_holder"
                        ],
                        "id": "stanislav.gots@lamoda.ru"
                    },
                    "id": "stanislav.gots@lamoda.ru"
                }
            ],
            "date": 1732263591000,
            "reason_vacancy": {
                "reason": "Новая позиция",
                "id": "new"
            },
            "manager": {
                "webuser_id": {
                    "who_delegated_ids": [
                        ""
                    ],
                    "role": [
                        "jo_recruiter",
                        "jo_agreement",
                        "jo_hrbp",
                        "jo_cnb"
                    ],
                    "whom_delegate_ids": [
                        ""
                    ],
                    "id": "aleksandra.kalina@lamoda.ru"
                },
                "id": "aleksandra.kalina@lamoda.ru",
                "employee_full_name": "Александра Калина",
                "email": "aleksandra.kalina@lamoda.ru"
            },
            "status": {
                "id": "approval_cnb",
                "status": "Cогласование CnB"
            },
            "cnb": {
                "webuser_id": {
                    "who_delegated_ids": [
                        ""
                    ],
                    "role": [
                        "jo_recruiter",
                        "jo_agreement",
                        "jo_hrbp",
                        "jo_cnb"
                    ],
                    "whom_delegate_ids": [
                        ""
                    ],
                    "id": "aleksandra.kalina@lamoda.ru"
                },
                "id": "aleksandra.kalina@lamoda.ru",
                "employee_full_name": "Александра Калина",
                "email": "aleksandra.kalina@lamoda.ru"
            },
            "type_id": "N-4",
            "position": "1",
            "contract_type": "open_ended",
            "up_manager": {
                "webuser_id": {
                    "who_delegated_ids": [
                        ""
                    ],
                    "role": [
                        "jo_recruiter",
                        "jo_agreement",
                        "jo_hrbp",
                        "jo_cnb"
                    ],
                    "whom_delegate_ids": [
                        ""
                    ],
                    "id": "aleksandra.kalina@lamoda.ru"
                },
                "id": "aleksandra.kalina@lamoda.ru",
                "employee_full_name": "Александра Калина",
                "email": "aleksandra.kalina@lamoda.ru"
            },
            "logs": [
                {
                    "date_display": "22 нояб. 2024, 11:20",
                    "text": "Согласование C&B. Назначен ответственный: Александра Калина (aleksandra.kalina@lamoda.ru)",
                    "ticket": "590d1084-7344-4851-bc01-89d9bc14c032",
                    "id": "9065216f-c99b-4f3e-a859-140e6bdfbba8",
                    "user": {
                        "firstName": "Aleksandra",
                        "lastName": "Kalina",
                        "id": "aleksandra.kalina@lamoda.ru"
                    }
                }
            ],
            "employment_type": "fix",
            "id_position": "1",
            "org_structure": "2439278",
            "offer_bonus": {
                "bonus": "Без премии",
                "id": "without_bonus"
            }
        }
    ],
    "totalPages": 1,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [
        [
            "analytics_ops.id",
            99325500
        ],
        [
            "analytics_ops.name",
            99325500
        ],
        [
            "assessment_type",
            99325489
        ],
        [
            "candidate_full_name",
            99325489
        ],
        [
            "company.company",
            99325495
        ],
        [
            "company.id",
            99325495
        ],
        [
            "contract_type",
            99325489
        ],
        [
            "cost_center",
            99325489
        ],
        [
            "count_empl_direct",
            99325489
        ],
        [
            "country_city",
            99325489
        ],
        [
            "cr",
            99325489
        ],
        [
            "current_position",
            99325489
        ],
        [
            "current_salary_bonus",
            99325489
        ],
        [
            "direct_full_name.employee_full_name",
            99325487
        ],
        [
            "direct_full_name.id",
            99325487
        ],
        [
            "direct_full_name.email",
            99325487
        ],
        [
            "direct_full_name.position",
            99325487
        ],
        [
            "direct_full_name.division_name",
            99325487
        ],
        [
            "division.id",
            99325488
        ],
        [
            "division.division_name",
            99325488
        ],
        [
            "employment_type",
            99325489
        ],
        [
            "id",
            99325489
        ],
        [
            "name_position",
            99325489
        ],
        [
            "offer_count_empl_direct",
            99325489
        ],
        [
            "offer_position",
            99325489
        ],
        [
            "offer_salary_bonus",
            99325489
        ],
        [
            "position",
            99325489
        ],
        [
            "probation",
            99325489
        ],
        [
            "reason_vacancy.id",
            99325494
        ],
        [
            "reason_vacancy.reason",
            99325494
        ],
        [
            "resigning_empl_full_name",
            99325489
        ],
        [
            "vacancy_id",
            99325489
        ],
        [
            "org_structure",
            99325489
        ],
        [
            "company_name",
            99325489
        ],
        [
            "number",
            99325489
        ],
        [
            "id_position.id",
            99325499
        ],
        [
            "offer_bonus_amount",
            99325489
        ],
        [
            "contract_period",
            99325489
        ],
        [
            "reason_contract",
            99325489
        ],
        [
            "current_bonus_amount",
            99325489
        ],
        [
            "date",
            99325489
        ],
        [
            "type_id",
            99325489
        ],
        [
            "logs.id",
            99325502
        ],
        [
            "logs.ticket.id",
            99325489
        ],
        [
            "logs.user.id",
            99325452
        ],
        [
            "logs.user.firstName",
            99325452
        ],
        [
            "logs.user.lastName",
            99325452
        ],
        [
            "logs.date_display",
            99325502
        ],
        [
            "logs.text",
            99325502
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
            "prev_status.id",
            99325498
        ],
        [
            "prev_status.status",
            99325498
        ],
        [
            "budget_holder.id",
            99325487
        ],
        [
            "budget_holder.email",
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
            "budget_holder.webuser_id.role",
            99325452
        ],
        [
            "first_work_day",
            99325489
        ],
        [
            "up_manager.id",
            99325487
        ],
        [
            "up_manager.email",
            99325487
        ],
        [
            "up_manager.employee_full_name",
            99325487
        ],
        [
            "up_manager.webuser_id.id",
            99325452
        ],
        [
            "up_manager.webuser_id.whom_delegate_ids",
            99325452
        ],
        [
            "up_manager.webuser_id.who_delegated_ids",
            99325452
        ],
        [
            "up_manager.webuser_id.role",
            99325452
        ],
        [
            "org_dev",
            99325489
        ],
        [
            "cnb.id",
            99325487
        ],
        [
            "cnb.email",
            99325487
        ],
        [
            "cnb.employee_full_name",
            99325487
        ],
        [
            "cnb.webuser_id.id",
            99325452
        ],
        [
            "cnb.webuser_id.whom_delegate_ids",
            99325452
        ],
        [
            "cnb.webuser_id.who_delegated_ids",
            99325452
        ],
        [
            "cnb.webuser_id.role",
            99325452
        ],
        [
            "manager.id",
            99325487
        ],
        [
            "manager.email",
            99325487
        ],
        [
            "manager.employee_full_name",
            99325487
        ],
        [
            "manager.webuser_id.id",
            99325452
        ],
        [
            "manager.webuser_id.whom_delegate_ids",
            99325452
        ],
        [
            "manager.webuser_id.who_delegated_ids",
            99325452
        ],
        [
            "manager.webuser_id.role",
            99325452
        ],
        [
            "hr_bp.id",
            99325487
        ],
        [
            "hr_bp.email",
            99325487
        ],
        [
            "hr_bp.employee_full_name",
            99325487
        ],
        [
            "hr_bp.webuser_id.id",
            99325452
        ],
        [
            "hr_bp.webuser_id.whom_delegate_ids.id",
            99325452
        ],
        [
            "hr_bp.webuser_id.whom_delegate_ids.firstName",
            99325452
        ],
        [
            "hr_bp.webuser_id.whom_delegate_ids.lastName",
            99325452
        ],
        [
            "hr_bp.webuser_id.who_delegated_ids.id",
            99325452
        ],
        [
            "hr_bp.webuser_id.who_delegated_ids.firstName",
            99325452
        ],
        [
            "hr_bp.webuser_id.who_delegated_ids.lastName",
            99325452
        ],
        [
            "hr_bp.webuser_id.role",
            99325452
        ],
        [
            "user_creator.id",
            99325487
        ],
        [
            "user_creator.email",
            99325487
        ],
        [
            "user_creator.employee_full_name",
            99325487
        ],
        [
            "user_creator.position",
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
            "initial_step",
            99325489
        ],
        [
            "responsible_roles.id",
            99325477
        ],
        [
            "offer_bonus.id",
            99325504
        ],
        [
            "offer_bonus.bonus",
            99325504
        ],
        [
            "current_bonus.id",
            99325504
        ],
        [
            "current_bonus.bonus",
            99325504
        ],
        [
            "responsible_employee_id.id",
            99325487
        ],
        [
            "responsible_employee_id.email",
            99325487
        ],
        [
            "responsible_employee_id.employee_full_name",
            99325487
        ],
        [
            "responsible_employee_id.position",
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
            "org_structure_text",
            99325489
        ],
        [
            "all_user_ids.id",
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
            "date_text",
            99325489
        ],
        [
            "last_change_date",
            99325489
        ],
        [
            "prev_resigning_empl_full_name",
            99325489
        ],
        [
            "delegation_users.id",
            99325487
        ],
        [
            "resume_file",
            99325489
        ],
        [
            "resume_link",
            99325489
        ],
        [
            "candidate_motivation",
            99325489
        ],
        [
            "add_benefits",
            99325489
        ],
        [
            "risks",
            99325489
        ],
        [
            "process_participants",
            99325489
        ],
        [
            "add_hr_dir",
            99325489
        ],
        [
            "hr_dep",
            99325489
        ],
        [
            "desired_bonus.id",
            99325504
        ],
        [
            "budget_date",
            99325489
        ],
        [
            "desired_salary",
            99325489
        ],
        [
            "desired_bonus_amount",
            99325489
        ],
        [
            "feedback_3",
            99325489
        ],
        [
            "feedback_2",
            99325489
        ],
        [
            "feedback_1",
            99325489
        ],
        [
            "interacted_as_3",
            99325489
        ],
        [
            "interacted_as_2",
            99325489
        ],
        [
            "interacted_as_1",
            99325489
        ],
        [
            "period_and_company_3",
            99325489
        ],
        [
            "period_and_company_2",
            99325489
        ],
        [
            "period_and_company_1",
            99325489
        ],
        [
            "full_name_recommender_3",
            99325489
        ],
        [
            "full_name_recommender_2",
            99325489
        ],
        [
            "full_name_recommender_1",
            99325489
        ],
        [
            "hrd.id",
            99325487
        ],
        [
            "hrd.webuser_id.id",
            99325452
        ],
        [
            "hrd.webuser_id.whom_delegate_ids.id",
            99325452
        ],
        [
            "hrd.webuser_id.whom_delegate_ids.firstName",
            99325452
        ],
        [
            "hrd.webuser_id.whom_delegate_ids.lastName",
            99325452
        ],
        [
            "hrd.webuser_id.who_delegated_ids.id",
            99325452
        ],
        [
            "hrd.webuser_id.who_delegated_ids.firstName",
            99325452
        ],
        [
            "hrd.webuser_id.who_delegated_ids.lastName",
            99325452
        ],
        [
            "hrd.webuser_id.role",
            99325452
        ],
        [
            "hrd.employee_full_name",
            99325487
        ],
        [
            "cr_desired",
            99325489
        ],
        [
            "cr_current",
            99325489
        ],
        [
            "desired_count_empl_direct",
            99325489
        ],
        [
            "desired_position",
            99325489
        ],
        [
            "add_recommendation_3",
            99325489
        ],
        [
            "add_recommendation_2",
            99325489
        ],
        [
            "status.id",
            99325498
        ],
        [
            "status.status",
            99325498
        ],
        [
            "resigning_empl_full_name_strng",
            99325489
        ],
        [
            "job_rate",
            99325489
        ],
        [
            "cancel_reason_didnt_applied",
            99325489
        ],
        [
            "cancel_reason_refused",
            99325489
        ],
        [
            "cancel_reason_exit_conf",
            99325489
        ],
        [
            "cancel_reason_bfr_prsnt",
            99325489
        ],
        [
            "cancel_reason_other",
            99325489
        ],
        [
            "approved_date",
            99325489
        ]
    ],
    "writeFields": [
        "analytics_ops",
        "assessment_type",
        "candidate_full_name",
        "company",
        "contract_type",
        "cost_center",
        "count_empl_direct",
        "country_city",
        "cr",
        "current_position",
        "current_salary_bonus",
        "direct_full_name",
        "division",
        "employment_type",
        "id",
        "name_position",
        "offer_count_empl_direct",
        "offer_position",
        "offer_salary_bonus",
        "position",
        "probation",
        "reason_vacancy",
        "resigning_empl_full_name",
        "org_structure",
        "company_name",
        "number",
        "id_position",
        "offer_bonus_amount",
        "current_bonus_amount",
        "contract_period",
        "reason_contract",
        "date",
        "up_manager",
        "first_work_day",
        "budget_holder",
        "manager",
        "cnb",
        "org_dev",
        "hr_bp",
        "vacancy_id",
        "user_creator",
        "offer_bonus",
        "current_bonus",
        "date_text",
        "last_change_date",
        "prev_resigning_empl_full_name",
        "resume_file",
        "resume_link",
        "candidate_motivation",
        "add_benefits",
        "risks",
        "process_participants",
        "add_hr_dir",
        "hr_dep",
        "desired_bonus",
        "budget_date",
        "desired_salary",
        "desired_bonus_amount",
        "initial_step",
        "org_structure_text",
        "feedback_3",
        "feedback_2",
        "feedback_1",
        "interacted_as_3",
        "interacted_as_2",
        "interacted_as_1",
        "period_and_company_3",
        "period_and_company_2",
        "period_and_company_1",
        "full_name_recommender_3",
        "full_name_recommender_2",
        "full_name_recommender_1",
        "hrd",
        "cr_desired",
        "cr_current",
        "desired_count_empl_direct",
        "desired_position",
        "add_recommendation_3",
        "add_recommendation_2",
        "resigning_empl_full_name_strng",
        "job_rate",
        "cancel_reason_didnt_applied",
        "cancel_reason_refused",
        "cancel_reason_exit_conf",
        "cancel_reason_bfr_prsnt",
        "cancel_reason_other",
        "approved_date"
    ],
    "structures": {
        "99325452": {
            "networkID": 21335,
            "sysName": "WebUser",
            "name": "App users",
            "id": 99325452,
            "dateCreated": "2024-07-04T06:41:34Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"roles_ad\",\"dataType\":\"arrayLink\",\"name\":\"\",\"id\":\"31521720185270928\",\"link\":\"roles_ad\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"dateLastActivity\",\"dataType\":\"string\",\"name\":\"dateLastActivity\",\"id\":\"10\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"dateCreated\",\"dataType\":\"string\",\"name\":\"dateCreated\",\"id\":\"13\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"isAuthorization\",\"dataType\":\"boolean\",\"name\":\"isAuthorization\",\"id\":\"9\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"notifications_counter\",\"dataType\":\"string\",\"name\":\"Notifications Counter\",\"id\":\"1\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"custom_labels\",\"dataType\":\"json\",\"name\":\"Custom labels\",\"id\":\"2\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"phone\",\"dataType\":\"string\",\"name\":\"Phone\",\"id\":\"12\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"email\",\"dataType\":\"string\",\"name\":\"Email\",\"id\":\"11\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"userpic\",\"dataType\":\"file\",\"name\":\"User pic\",\"id\":\"3\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":{},\"groupName\":\"Contacts\",\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"Username (login)\",\"id\":\"15\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"role\",\"dataType\":\"array\",\"name\":\"Roles\",\"id\":\"8\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":true},{\"sysName\":\"password\",\"dataType\":\"string\",\"name\":\"Password (hash)\",\"id\":\"14\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"firstName\",\"dataType\":\"string\",\"name\":\"First name\",\"id\":\"7\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"lastName\",\"dataType\":\"string\",\"name\":\"Last name\",\"id\":\"6\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"gender\",\"dataType\":\"string\",\"name\":\"Gender\",\"id\":\"5\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"isBlocked\",\"dataType\":\"boolean\",\"name\":\"Block user\",\"id\":\"4\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"systemMessage\",\"dataType\":\"string\",\"name\":\"System message\",\"id\":\"56921641637265680\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"employee\",\"dataType\":\"link\",\"name\":\"\",\"id\":\"65621717669435431\",\"link\":\"employees\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"position\",\"dataType\":\"string\",\"name\":\"Position\",\"id\":\"21611718980485707\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"division\",\"dataType\":\"string\",\"name\":\"Division\",\"id\":\"13761718980504077\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"isActive\",\"dataType\":\"boolean\",\"name\":\"isActive\",\"id\":\"28091718982360994\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"who_delegated_ids\",\"dataType\":\"arrayLink\",\"name\":\"Кто делегировал права?\",\"id\":\"18431723207371481\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"whom_delegate_ids\",\"dataType\":\"arrayLink\",\"name\":\"Кому делегировал права?\",\"id\":\"29491723207412497\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"all_bosses_ids\",\"dataType\":\"arrayLink\",\"name\":\"Все руководители вверх по иерархии\",\"id\":\"45451730474812010\",\"link\":\"employees\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"secret\",\"dataType\":\"string\",\"name\":\"secret\",\"id\":\"81131636839496227\",\"link\":\"\",\"group\":\"1636839487957\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"notif_Email\",\"dataType\":\"boolean\",\"name\":\"Notify me by Email\",\"id\":\"61231639915065277\",\"link\":\"\",\"group\":\"1639915049523\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Yes\",\"No\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false}]",
            "jsonGroupSettings": "[{\"name\":\"Contacts\",\"id\":-502807437,\"order\":0},{\"name\":\"Notifications\",\"id\":1639915049523,\"order\":1},{\"name\":\"Password restoring\",\"id\":1636839487957,\"order\":2},{\"name\":\"System fields (LEGACY)\",\"id\":-1776115286,\"order\":3}]",
            "jsonViewIdSettings": "[{\"sysName\":\"firstName\"},{\"sysName\":\"lastName\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-11-01T15:27:31Z",
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            "folderId": null
        },
        "99325477": {
            "networkID": 21335,
            "sysName": "roles",
            "name": "Roles",
            "id": 99325477,
            "dateCreated": "2024-05-20T16:01:07Z",
            "hidden": false,
            "dateHidden": null,
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            "folderId": 33811341
        },
        "99325487": {
            "networkID": 21335,
            "sysName": "employees",
            "name": "Employees",
            "id": 99325487,
            "dateCreated": "2024-05-14T07:46:19Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"position_name_eng\",\"dataType\":\"string\",\"name\":\"Position name eng\",\"id\":\"14771717094032672\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"direct_last_name\",\"dataType\":\"string\",\"name\":\"Direct Last name\",\"id\":\"20511715675238230\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"webuser_id\",\"dataType\":\"link\",\"name\":\"\",\"id\":\"21401717671535287\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[\"role\"],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":true,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"email\",\"dataType\":\"string\",\"name\":\"Email\",\"id\":\"26531716224439241\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"position\",\"dataType\":\"string\",\"name\":\"Position\",\"id\":\"28531715675330046\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"direct_first_name\",\"dataType\":\"string\",\"name\":\"Direct First name\",\"id\":\"29311715675220848\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"division_name\",\"dataType\":\"string\",\"name\":\"Division name\",\"id\":\"31271717093221879\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"direct_email\",\"dataType\":\"link\",\"name\":\"Direct email\",\"id\":\"36721717097550149\",\"link\":\"employees\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"direct_full_name\",\"dataType\":\"string\",\"name\":\"Direct Full name\",\"id\":\"40141715777939624\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"division_id\",\"dataType\":\"link\",\"name\":\"Division id\",\"id\":\"46921715675477884\",\"link\":\"structure\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"employee_last_name\",\"dataType\":\"string\",\"name\":\"Employee Last name\",\"id\":\"60151715675210149\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"employee_full_name\",\"dataType\":\"string\",\"name\":\"Employee Full name\",\"id\":\"68071715777917101\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"employee_first_name\",\"dataType\":\"string\",\"name\":\"Employee First name\",\"id\":\"68431715675181675\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"position_id\",\"dataType\":\"string\",\"name\":\"Position ID\",\"id\":\"80581717093206114\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false}]",
            "jsonGroupSettings": "[]",
            "jsonViewIdSettings": "[{\"sysName\":\"employee_full_name\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-11-01T15:29:51Z",
            "createBy": 23015,
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            "folderId": 33820256
        },
        "99325488": {
            "networkID": 21335,
            "sysName": "structure",
            "name": "Structure",
            "id": 99325488,
            "dateCreated": "2024-05-14T07:49:49Z",
            "hidden": false,
            "dateHidden": null,
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            "folderId": 33820256
        },
        "99325489": {
            "networkID": 21335,
            "sysName": "job_offers",
            "name": "job_offers",
            "id": 99325489,
            "dateCreated": "2024-05-14T08:39:18Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"cancel_reason_refused\",\"name\":\"Причина\",\"dataType\":\"link\",\"id\":\"10211730487305830\",\"link\":\"jo_reason_refused\",\"group\":\"1730486886276\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"user_creator\",\"name\":\"Кто создал заявку\",\"dataType\":\"link\",\"id\":\"10641717669243064\",\"link\":\"employees\",\"group\":\"0\",\"tags\":null,\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[\"webuser_id\"],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":true,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"period_and_company_2\",\"name\":\"Период совместной работы + название компании (2)\",\"dataType\":\"string\",\"id\":\"12301723026677690\",\"link\":\"\",\"group\":\"1723026548996\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"last_change_date\",\"name\":\"Дата последнего изменения\",\"dataType\":\"date\",\"id\":\"12411720039745113\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.YYYY\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"add_benefits\",\"name\":\"Доп. бенефиты\",\"dataType\":\"string\",\"id\":\"12411722957803685\",\"link\":\"\",\"group\":\"1722958207971\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"reason_vacancy\",\"name\":\"Причина появления вакансии\",\"dataType\":\"link\",\"id\":\"13591715675968084\",\"link\":\"reason_of_vacancy\",\"group\":\"1717136273468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"offer_bonus_amount\",\"name\":\"Предложение Lamoda по размеру премии\",\"dataType\":\"string\",\"id\":\"14291717102608159\",\"link\":\"\",\"group\":\"1717136273468\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":39,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"hr_bp\",\"name\":\"HR BP\",\"dataType\":\"link\",\"id\":\"15621717611052206\",\"link\":\"employees\",\"group\":\"1722956166046\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"id_position\",\"name\":\"Код позиции (из УШР)\",\"dataType\":\"link\",\"id\":\"15801717092329369\",\"link\":\"position\",\"group\":\"1717136273468\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"offer_salary_bonus\",\"name\":\"Предложение Lamoda по окладу\",\"dataType\":\"string\",\"id\":\"15821715677132698\",\"link\":null,\"group\":\"1717136273468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":33,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"current_position\",\"name\":\"Текущая должность\",\"dataType\":\"string\",\"id\":\"16321715676814870\",\"link\":null,\"group\":\"1717136273468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":25,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"desired_bonus\",\"name\":\"Ожидания кандидата по периодичности выплаты\",\"dataType\":\"link\",\"id\":\"17301722957574597\",\"link\":\"bonus\",\"group\":\"1717136273468\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":35,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"cancel_reason_bfr_prsnt\",\"name\":\"Причина\",\"dataType\":\"link\",\"id\":\"19191730486949303\",\"link\":\"jo_reason_bfr_present\",\"group\":\"1730486886276\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"org_structure\",\"name\":\"Организационная структура\",\"dataType\":\"link\",\"id\":\"19641716190989070\",\"link\":\"structure\",\"group\":\"1717136273468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"cancel_reason_exit_conf\",\"name\":\"Причина\",\"dataType\":\"link\",\"id\":\"20021730487018725\",\"link\":\"jo_reason_exit_conf\",\"group\":\"1730486886276\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"cancel_reason_didnt_applied\",\"name\":\"Причина\",\"dataType\":\"link\",\"id\":\"20141730487362202\",\"link\":\"jo_reason_didnt_applied\",\"group\":\"1730486886276\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"add_hr_dir\",\"name\":\"Добавить HR Director?\",\"dataType\":\"boolean\",\"id\":\"20731722957677040\",\"link\":\"\",\"group\":\"1717136273468\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":46,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Да\",\"Нет\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"last_user\",\"name\":\"Кем изменено\",\"dataType\":\"link\",\"id\":\"21921717136519307\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"hrd\",\"name\":\"HR Director\",\"dataType\":\"link\",\"id\":\"22411723027680985\",\"link\":\"employees\",\"group\":\"1722956166046\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"contract_period\",\"name\":\"Укажите период\",\"dataType\":\"string\",\"id\":\"23561717102136707\",\"link\":\"\",\"group\":\"1717136273468\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"employment_type\",\"name\":\"Тип занятости\",\"dataType\":\"link\",\"id\":\"24381715676484262\",\"link\":\"employment_type\",\"group\":\"1717136273468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":17,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"add_recommendation_2\",\"name\":\"Добавить рекомендацию 2\",\"dataType\":\"json\",\"id\":\"24611723223280015\",\"link\":\"\",\"group\":\"1717136273468\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":47,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"checkboxes\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"multipleChoice\":[{\"value\":\"add\",\"label\":\"\"}]},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":true,\"array\":false},{\"sysName\":\"count_empl_direct\",\"name\":\"Текущее количество подчиненных\",\"dataType\":\"string\",\"id\":\"25431715676819516\",\"link\":null,\"group\":\"1717136273468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":28,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"company\",\"name\":\"Юр. лицо\",\"dataType\":\"link\",\"id\":\"25501715676080911\",\"link\":\"company\",\"group\":\"1717136273468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"resume_file\",\"name\":\"Прикрепить резюме\",\"dataType\":\"file\",\"id\":\"26451722958113871\",\"link\":\"\",\"group\":\"1722958207971\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"logs\",\"name\":\"История изменений\",\"dataType\":\"arrayLink\",\"id\":\"28171717136570915\",\"link\":\"logs\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"org_dev\",\"name\":\"Орг. дев\",\"dataType\":\"boolean\",\"id\":\"28311717610790667\",\"link\":\"\",\"group\":\"1717136273468\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":44,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Да\",\"Нет\"],\"hideStandardBooleanIcons\":false,\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"candidate_full_name\",\"name\":\"ФИО кандидата\",\"dataType\":\"string\",\"id\":\"29091715676143182\",\"link\":null,\"group\":\"1717136273468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"period_and_company_1\",\"name\":\"Период совместной работы + название компании (1)\",\"dataType\":\"string\",\"id\":\"32261723026675847\",\"link\":\"\",\"group\":\"1723026548996\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"desired_count_empl_direct\",\"name\":\"Ожидаемое количество подчиненных\",\"dataType\":\"string\",\"id\":\"33431723034099026\",\"link\":\"\",\"group\":\"1717136273468\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":29,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"feedback_3\",\"name\":\"Обратная связь (3)\",\"dataType\":\"string\",\"id\":\"33591723026902223\",\"link\":\"\",\"group\":\"1723026548996\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"status\",\"name\":\"Статус\",\"dataType\":\"link\",\"id\":\"33981716236672620\",\"link\":\"statuses\",\"group\":\"0\",\"tags\":null,\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[\"id\"],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":true,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"prev_resigning_empl_full_name\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"34051720080635679\",\"link\":null,\"group\":\"1720080628323\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"feedback_2\",\"name\":\"Обратная связь (2)\",\"dataType\":\"string\",\"id\":\"34531723026899674\",\"link\":\"\",\"group\":\"1723026548996\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"offer_count_empl_direct\",\"name\":\"Количество подчиненных в Lamoda\",\"dataType\":\"string\",\"id\":\"36501715676821342\",\"link\":null,\"group\":\"1717136273468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":30,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"process_participants\",\"name\":\"Кто был участником процесса отбора кандидатов ФИО\",\"dataType\":\"string\",\"id\":\"37241722957752715\",\"link\":\"\",\"group\":\"1722958207971\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"interacted_as_3\",\"name\":\"Взаимодействовали как (3)\",\"dataType\":\"string\",\"id\":\"38371723026792952\",\"link\":\"\",\"group\":\"1723026548996\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"reason_contract\",\"name\":\"Обоснование Срочного ТД\",\"dataType\":\"string\",\"id\":\"38571717102233946\",\"link\":\"\",\"group\":\"1717136273468\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":16,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"division\",\"name\":\"Подразделение\",\"dataType\":\"link\",\"id\":\"40821715676271880\",\"link\":\"structure\",\"group\":\"1717136273468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"current_bonus\",\"name\":\"Текущая периодичность выплаты премии\",\"dataType\":\"link\",\"id\":\"41941718369676191\",\"link\":\"bonus\",\"group\":\"1717136273468\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":34,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"responsible_roles\",\"name\":\"Ответственные роли\",\"dataType\":\"arrayLink\",\"id\":\"42551718111539315\",\"link\":\"roles\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"cancel_reason_other\",\"name\":\"Укажите причину\",\"dataType\":\"string\",\"id\":\"43661730491636995\",\"link\":\"\",\"group\":\"1730486886276\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"type_id\",\"name\":\"Тип заявки\",\"dataType\":\"string\",\"id\":\"43711717138677778\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"org_structure_text\",\"name\":\"Организационная структура\",\"dataType\":\"string\",\"id\":\"43811718379566902\",\"link\":\"\",\"group\":\"1717136273468\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"analytics_ops\",\"name\":\"Analytics for OPS\",\"dataType\":\"link\",\"id\":\"44501715676533202\",\"link\":\"analytics_for_ops\",\"group\":\"1717136273468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":23,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"date_text\",\"name\":\"Дата\",\"dataType\":\"string\",\"id\":\"44611718913748411\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"budget_holder\",\"name\":\"Держатель бюджета\",\"dataType\":\"link\",\"id\":\"45251717611164564\",\"link\":\"employees\",\"group\":\"1722956166046\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"prev_status\",\"name\":\"Предыдущий статус\",\"dataType\":\"link\",\"id\":\"45271717136281092\",\"link\":\"statuses\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"desired_bonus_amount\",\"name\":\"Ожидания кандидата по размеру премии\",\"dataType\":\"string\",\"id\":\"47401722956320074\",\"link\":\"\",\"group\":\"1717136273468\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":38,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"approved_date\",\"name\":\"Согласованная дата выхода\",\"dataType\":\"date\",\"id\":\"52561730531754157\",\"link\":\"\",\"group\":\"1717136273468\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":49,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.YYYY\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"risks\",\"name\":\"Есть ли риски от интервьюеров?\",\"dataType\":\"string\",\"id\":\"53331722957778181\",\"link\":\"\",\"group\":\"1722958207971\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"assessment_type\",\"name\":\"Форма оценки\",\"dataType\":\"link\",\"id\":\"53871715676486789\",\"link\":\"perf_review\",\"group\":\"1717136273468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":20,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"ceo_checkbox\",\"name\":\"Согласование CEO получено\",\"dataType\":\"json\",\"id\":\"54321725959729890\",\"link\":\"\",\"group\":\"1722958207971\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"checkboxes\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"multipleChoice\":[{\"value\":\"add\",\"label\":\"Согласовано\"}]},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":true,\"array\":false},{\"sysName\":\"desired_position\",\"name\":\"Ожидаемая должность\",\"dataType\":\"string\",\"id\":\"56861723034037117\",\"link\":\"\",\"group\":\"1717136273468\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":26,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"offer_position\",\"name\":\"Должность в Lamoda\",\"dataType\":\"string\",\"id\":\"56891715677420164\",\"link\":null,\"group\":\"1717136273468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":27,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"initial_step\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"61681718370382220\",\"link\":null,\"group\":\"1720080628323\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"full_name_recommender_3\",\"name\":\"ФИО и должность рекомендателя 3\",\"dataType\":\"string\",\"id\":\"61711723026650455\",\"link\":\"\",\"group\":\"1723026548996\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"candidate_motivation\",\"name\":\"Мотивация кандидата\",\"dataType\":\"string\",\"id\":\"62081722957847333\",\"link\":\"\",\"group\":\"1722958207971\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"feedback_1\",\"name\":\"Обратная связь (1)\",\"dataType\":\"string\",\"id\":\"62281723026898586\",\"link\":\"\",\"group\":\"1723026548996\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"current_salary_bonus\",\"name\":\"Текущий ежемесячный оклад\",\"dataType\":\"string\",\"id\":\"62881715676822167\",\"link\":null,\"group\":\"1717136273468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":31,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"current_bonus_amount\",\"name\":\"Текущий размер премии\",\"dataType\":\"string\",\"id\":\"63161717102594756\",\"link\":\"\",\"group\":\"1717136273468\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":37,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"all_user_ids\",\"name\":\"Все пользователи, относящиеся к заявке\",\"dataType\":\"arrayLink\",\"id\":\"64121718609008711\",\"link\":\"employees\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"direct_full_name\",\"name\":\"ФИО руководителя\",\"dataType\":\"link\",\"id\":\"64721715676272622\",\"link\":\"employees\",\"group\":\"1717136273468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"add_recommendation_3\",\"name\":\"Добавить рекомендацию 3\",\"dataType\":\"json\",\"id\":\"65201723223302028\",\"link\":\"\",\"group\":\"1717136273468\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":48,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"checkboxes\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"multipleChoice\":[{\"value\":\"add\",\"label\":\"\"}]},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":true,\"array\":false},{\"sysName\":\"full_name_recommender_2\",\"name\":\"ФИО и должность рекомендателя 2\",\"dataType\":\"string\",\"id\":\"65801723026642796\",\"link\":\"\",\"group\":\"1723026548996\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"up_manager\",\"name\":\"Верхнеуровневый руководитель (руководитель нанимающего менеджера) для Non-TECH / Директор департамента для TECH\",\"dataType\":\"link\",\"id\":\"66111717611097029\",\"link\":\"employees\",\"group\":\"1722956166046\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"position\",\"name\":\"Должность\",\"dataType\":\"string\",\"id\":\"68721715676198986\",\"link\":null,\"group\":\"1717136273468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"cost_center\",\"name\":\"Кост-центр\",\"dataType\":\"string\",\"id\":\"68901715676530998\",\"link\":null,\"group\":\"1717136273468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":21,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"resigning_empl_full_name\",\"name\":\"ФИО заменяемого сотрудника\",\"dataType\":\"link\",\"id\":\"72911715692442960\",\"link\":\"employees\",\"group\":\"1717136273468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"probation\",\"name\":\"Испытательный период\",\"dataType\":\"string\",\"id\":\"77291715676484957\",\"link\":null,\"group\":\"1717136273468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":19,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"vacancy_id\",\"name\":\"ID вакансии (из Optimacros)\",\"dataType\":\"string\",\"id\":\"78501715676487437\",\"link\":null,\"group\":\"1717136273468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"cnb\",\"name\":\"C&B\",\"dataType\":\"link\",\"id\":\"79741717610837855\",\"link\":\"employees\",\"group\":\"1722956166046\",\"tags\":\"\",\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[\"webuser_id\"],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":true,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"cr\",\"name\":\"CR Lamoda(только для TECH)\",\"dataType\":\"string\",\"id\":\"82611715677377022\",\"link\":null,\"group\":\"1717136273468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":43,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"name_position\",\"name\":\"Name position\",\"dataType\":\"string\",\"id\":\"83421715676531827\",\"link\":null,\"group\":\"1717136273468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":22,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"country_city\",\"name\":\"Страна, город\",\"dataType\":\"string\",\"id\":\"83591715676107813\",\"link\":null,\"group\":\"1717136273468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"resume_link\",\"name\":\"Ссылка на резюме\",\"dataType\":\"string\",\"id\":\"83851722957876678\",\"link\":\"\",\"group\":\"1722958207971\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"cr_current\",\"name\":\"CR текущий (только для TECH)\",\"dataType\":\"string\",\"id\":\"83941723034298011\",\"link\":\"\",\"group\":\"1717136273468\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":41,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"company_name\",\"name\":\"Название текущей компании\",\"dataType\":\"string\",\"id\":\"84321716235575717\",\"link\":\"\",\"group\":\"1717136273468\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":24,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"desired_salary\",\"name\":\"Ожидания кандидата по окладу\",\"dataType\":\"string\",\"id\":\"84691722956323382\",\"link\":\"\",\"group\":\"1717136273468\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":32,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"first_work_day\",\"name\":\"Предварительная дата выхода сотрудника\",\"dataType\":\"date\",\"id\":\"84761717610566294\",\"link\":\"\",\"group\":\"1717136273468\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.Y\",\"timeFormat\":\" \",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"cr_desired\",\"name\":\"СR ожидание (только для TECH)\",\"dataType\":\"string\",\"id\":\"85371723034344516\",\"link\":\"\",\"group\":\"1717136273468\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":42,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"ceo_approval\",\"name\":\"Cогласование с СЕО\",\"dataType\":\"file\",\"id\":\"86101724394507146\",\"link\":\"\",\"group\":\"1722958207971\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"offer_bonus\",\"name\":\"Предложение Lamoda по периодичности выплаты премии\",\"dataType\":\"link\",\"id\":\"86661718369709109\",\"link\":\"bonus\",\"group\":\"1717136273468\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":36,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"responsible_employee_id\",\"name\":\"Ответственный за текущий этап\",\"dataType\":\"link\",\"id\":\"89061718111406513\",\"link\":\"employees\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"delegation_users\",\"name\":\"Делегирование\",\"dataType\":\"arrayLink\",\"id\":\"89841722360454366\",\"link\":\"employees\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"budget_date\",\"name\":\"Бюджетная дата выхода от C&B партнера\",\"dataType\":\"date\",\"id\":\"91111722956823141\",\"link\":\"\",\"group\":\"1717136273468\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":40,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.YYYY\",\"timeFormat\":\"\",\"isUTC\":\"true\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"date\",\"name\":\"Дата создания заявки\",\"dataType\":\"date\",\"id\":\"91361717138808760\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"interacted_as_1\",\"name\":\"Взаимодействовали как (1)\",\"dataType\":\"string\",\"id\":\"91581723026791139\",\"link\":\"\",\"group\":\"1723026548996\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"interacted_as_2\",\"name\":\"Взаимодействовали как (2)\",\"dataType\":\"string\",\"id\":\"92571723026791805\",\"link\":\"\",\"group\":\"1723026548996\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"manager\",\"name\":\"Руководитель (непосредственно нанимающий менеджер) для Non-TECH / Руководитель отдела для TECH\",\"dataType\":\"link\",\"id\":\"93801717611067099\",\"link\":\"employees\",\"group\":\"1722956166046\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"contract_type\",\"name\":\"Тип договора\",\"dataType\":\"link\",\"id\":\"94821715676273371\",\"link\":\"contract_type\",\"group\":\"1717136273468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"number\",\"name\":\"Номер заявки\",\"dataType\":\"string\",\"id\":\"95231716236207376\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"job_rate\",\"name\":\"Коэффициент занятости\",\"dataType\":\"decimal\",\"id\":\"96811730359125382\",\"link\":\"\",\"group\":\"1717136273468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":18,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"period_and_company_3\",\"name\":\"Период совместной работы + название компании (3)\",\"dataType\":\"string\",\"id\":\"96891723026678461\",\"link\":\"\",\"group\":\"1723026548996\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"hr_dep\",\"name\":\"Ставка в HR департамент?\",\"dataType\":\"boolean\",\"id\":\"98001722957609216\",\"link\":\"\",\"group\":\"1717136273468\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":45,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Да\",\"Нет\"],\"hideStandardBooleanIcons\":false,\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"resigning_empl_full_name_strng\",\"name\":\"ФИО заменяемого сотрудника\",\"dataType\":\"string\",\"id\":\"98101725001431871\",\"link\":null,\"group\":\"1717136273468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"full_name_recommender_1\",\"name\":\"ФИО и должность рекомендателя 1\",\"dataType\":\"string\",\"id\":\"98861723026560889\",\"link\":\"\",\"group\":\"1723026548996\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false}]",
            "jsonGroupSettings": "[{\"id\":1720080628323,\"name\":\"Технические поля\",\"order\":4},{\"id\":1723026548996,\"name\":\"Рекомендации\",\"order\":5},{\"id\":1722956166046,\"name\":\"Согласующие лица\",\"order\":3},{\"id\":1717136273468,\"name\":\"Поля\",\"order\":1},{\"id\":1722958207971,\"name\":\"HR Director\",\"order\":2},{\"id\":1730486886276,\"name\":\"Отмена заявок\",\"order\":0}]",
            "jsonViewIdSettings": "[]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-11-22T07:16:54Z",
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            "folderId": 33811357
        },
        "99325494": {
            "networkID": 21335,
            "sysName": "reason_of_vacancy",
            "name": "reason of vacancy",
            "id": 99325494,
            "dateCreated": "2024-05-14T13:00:34Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"reason\",\"dataType\":\"string\",\"name\":\"Reason\",\"id\":\"15771715691639283\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false}]",
            "jsonGroupSettings": "[]",
            "jsonViewIdSettings": "[]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-05-14T13:19:59Z",
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            "folderId": 33811358
        },
        "99325495": {
            "networkID": 21335,
            "sysName": "company",
            "name": "company",
            "id": 99325495,
            "dateCreated": "2024-05-14T13:20:27Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"company\",\"dataType\":\"string\",\"name\":\"Company\",\"id\":\"89321715692830953\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false}]",
            "jsonGroupSettings": "[]",
            "jsonViewIdSettings": "[{\"sysName\":\"company\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-06-05T19:30:59Z",
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            "folderId": 33811358
        },
        "99325498": {
            "networkID": 21335,
            "sysName": "statuses",
            "name": "Statuses",
            "id": 99325498,
            "dateCreated": "2024-05-20T20:25:13Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"next_status_ids\",\"name\":\"Допустимый следующий статус\",\"dataType\":\"arrayLink\",\"id\":\"27461729716723723\",\"link\":\"statuses\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false},{\"sysName\":\"prev_stat\",\"name\":\"Предыдущий статус\",\"dataType\":\"arrayLink\",\"id\":\"58011723473133112\",\"link\":\"statuses\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false},{\"sysName\":\"status\",\"name\":\"Cтатус\",\"dataType\":\"string\",\"id\":\"68061716237170513\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false}]",
            "jsonGroupSettings": "[]",
            "jsonViewIdSettings": "[{\"sysName\":\"status\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":false,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": false,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-10-23T20:52:23Z",
            "createBy": 23015,
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            "folderId": 33811358
        },
        "99325499": {
            "networkID": 21335,
            "sysName": "position",
            "name": "position",
            "id": 99325499,
            "dateCreated": "2024-05-30T18:06:42Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"position_id\",\"dataType\":\"string\",\"name\":\"ID Позиции\",\"id\":\"17881717092407383\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"name_eng\",\"dataType\":\"string\",\"name\":\"Позиция ENG\",\"id\":\"41001717092496969\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"src_position_id\",\"dataType\":\"string\",\"name\":\"SRC ID Позиции\",\"id\":\"77891717092430634\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"name_rus\",\"dataType\":\"string\",\"name\":\"Позиция\",\"id\":\"82531717092490067\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false}]",
            "jsonGroupSettings": "[]",
            "jsonViewIdSettings": "[{\"sysName\":\"name_rus\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-05-30T18:13:17Z",
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            "folderId": 33811358
        },
        "99325500": {
            "networkID": 21335,
            "sysName": "analytics_for_ops",
            "name": "Analytics for OPS",
            "id": 99325500,
            "dateCreated": "2024-05-30T20:59:17Z",
            "hidden": false,
            "dateHidden": null,
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            "folderId": 33811358
        },
        "99325502": {
            "networkID": 21335,
            "sysName": "logs",
            "name": "Logs",
            "id": 99325502,
            "dateCreated": "2024-05-31T06:25:03Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"date\",\"name\":\"Дата изменения\",\"dataType\":\"date\",\"id\":\"58751717136726535\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"text\",\"name\":\"Изменение заявки\",\"dataType\":\"string\",\"id\":\"13041717136793732\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"user\",\"name\":\"Кто внес изменения\",\"dataType\":\"link\",\"id\":\"83101717136837464\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ticket\",\"name\":\"Номер заявки\",\"dataType\":\"link\",\"id\":\"45681717136838095\",\"link\":\"job_offers\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"date_display\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"87491717137718793\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false}]",
            "jsonGroupSettings": "[]",
            "jsonViewIdSettings": "[]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":false,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-05-31T06:42:24Z",
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            "folderId": 33811358
        },
        "99325504": {
            "networkID": 21335,
            "sysName": "bonus",
            "name": "bonus",
            "id": 99325504,
            "dateCreated": "2024-06-14T12:57:00Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"bonus\",\"dataType\":\"string\",\"name\":\"Бонус\",\"id\":\"45161718369824627\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":true,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false}]",
            "jsonGroupSettings": "[]",
            "jsonViewIdSettings": "[{\"sysName\":\"bonus\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-08-26T12:47:35Z",
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            "folderId": 33811358
        }
    },
    "isSuccessWrite": false,
    "writeError": null,
    "writeResponse": null,
    "fileds": [
        {
            "sysName": "analytics_ops",
            "dataType": "link",
            "name": "Analytics for OPS",
            "id": "44501715676533202",
            "link": "analytics_for_ops",
            "group": "1717136273468",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 23,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "assessment_type",
            "dataType": "link",
            "name": "Форма оценки",
            "id": "53871715676486789",
            "link": "perf_review",
            "group": "1717136273468",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 20,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "candidate_full_name",
            "dataType": "string",
            "name": "ФИО кандидата",
            "id": "29091715676143182",
            "link": null,
            "group": "1717136273468",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "company",
            "dataType": "link",
            "name": "Юр. лицо",
            "id": "25501715676080911",
            "link": "company",
            "group": "1717136273468",
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
            "formatOptions": null,
            "groupName": null,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "contract_type",
            "dataType": "link",
            "name": "Тип договора",
            "id": "94821715676273371",
            "link": "contract_type",
            "group": "1717136273468",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 14,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "cost_center",
            "dataType": "string",
            "name": "Кост-центр",
            "id": "68901715676530998",
            "link": null,
            "group": "1717136273468",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 21,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "count_empl_direct",
            "dataType": "string",
            "name": "Текущее количество подчиненных",
            "id": "25431715676819516",
            "link": null,
            "group": "1717136273468",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 28,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "country_city",
            "dataType": "string",
            "name": "Страна, город",
            "id": "83591715676107813",
            "link": null,
            "group": "1717136273468",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "cr",
            "dataType": "string",
            "name": "CR Lamoda(только для TECH)",
            "id": "82611715677377022",
            "link": null,
            "group": "1717136273468",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 43,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "current_position",
            "dataType": "string",
            "name": "Текущая должность",
            "id": "16321715676814870",
            "link": null,
            "group": "1717136273468",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 25,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "current_salary_bonus",
            "dataType": "string",
            "name": "Текущий ежемесячный оклад",
            "id": "62881715676822167",
            "link": null,
            "group": "1717136273468",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 31,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "direct_full_name",
            "dataType": "link",
            "name": "ФИО руководителя",
            "id": "64721715676272622",
            "link": "employees",
            "group": "1717136273468",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 13,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "division",
            "dataType": "link",
            "name": "Подразделение",
            "id": "40821715676271880",
            "link": "structure",
            "group": "1717136273468",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "employment_type",
            "dataType": "link",
            "name": "Тип занятости",
            "id": "24381715676484262",
            "link": "employment_type",
            "group": "1717136273468",
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
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "name_position",
            "dataType": "string",
            "name": "Name position",
            "id": "83421715676531827",
            "link": null,
            "group": "1717136273468",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 22,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "offer_count_empl_direct",
            "dataType": "string",
            "name": "Количество подчиненных в Lamoda",
            "id": "36501715676821342",
            "link": null,
            "group": "1717136273468",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 30,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "offer_position",
            "dataType": "string",
            "name": "Должность в Lamoda",
            "id": "56891715677420164",
            "link": null,
            "group": "1717136273468",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 27,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "offer_salary_bonus",
            "dataType": "string",
            "name": "Предложение Lamoda по окладу",
            "id": "15821715677132698",
            "link": null,
            "group": "1717136273468",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 33,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "position",
            "dataType": "string",
            "name": "Должность",
            "id": "68721715676198986",
            "link": null,
            "group": "1717136273468",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 12,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "probation",
            "dataType": "string",
            "name": "Испытательный период",
            "id": "77291715676484957",
            "link": null,
            "group": "1717136273468",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 19,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "reason_vacancy",
            "dataType": "link",
            "name": "Причина появления вакансии",
            "id": "13591715675968084",
            "link": "reason_of_vacancy",
            "group": "1717136273468",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "resigning_empl_full_name",
            "dataType": "link",
            "name": "ФИО заменяемого сотрудника",
            "id": "72911715692442960",
            "link": "employees",
            "group": "1717136273468",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "org_structure",
            "dataType": "link",
            "name": "Организационная структура",
            "id": "19641716190989070",
            "link": "structure",
            "group": "1717136273468",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "company_name",
            "dataType": "string",
            "name": "Название текущей компании",
            "id": "84321716235575717",
            "link": "",
            "group": "1717136273468",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 24,
            "linkIndexFieldSysName": [],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": {},
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "number",
            "dataType": "string",
            "name": "Номер заявки",
            "id": "95231716236207376",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "id_position",
            "dataType": "link",
            "name": "Код позиции (из УШР)",
            "id": "15801717092329369",
            "link": "position",
            "group": "1717136273468",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "offer_bonus_amount",
            "dataType": "string",
            "name": "Предложение Lamoda по размеру премии",
            "id": "14291717102608159",
            "link": "",
            "group": "1717136273468",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 39,
            "linkIndexFieldSysName": [],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": {},
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "current_bonus_amount",
            "dataType": "string",
            "name": "Текущий размер премии",
            "id": "63161717102594756",
            "link": "",
            "group": "1717136273468",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 37,
            "linkIndexFieldSysName": [],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": {},
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "contract_period",
            "dataType": "string",
            "name": "Укажите период",
            "id": "23561717102136707",
            "link": "",
            "group": "1717136273468",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "reason_contract",
            "dataType": "string",
            "name": "Обоснование Срочного ТД",
            "id": "38571717102233946",
            "link": "",
            "group": "1717136273468",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "date",
            "dataType": "date",
            "name": "Дата создания заявки",
            "id": "91361717138808760",
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
                "dateFormat": "DD.MM.Y",
                "timeFormat": " HH:mm",
                "isUTC": "false"
            },
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "up_manager",
            "dataType": "link",
            "name": "Верхнеуровневый руководитель (руководитель нанимающего менеджера) для Non-TECH / Директор департамента для TECH",
            "id": "66111717611097029",
            "link": "employees",
            "group": "1722956166046",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "first_work_day",
            "dataType": "date",
            "name": "Предварительная дата выхода сотрудника",
            "id": "84761717610566294",
            "link": "",
            "group": "1717136273468",
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
                "timeFormat": " ",
                "isUTC": "false"
            },
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "budget_holder",
            "dataType": "link",
            "name": "Держатель бюджета",
            "id": "45251717611164564",
            "link": "employees",
            "group": "1722956166046",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "manager",
            "dataType": "link",
            "name": "Руководитель (непосредственно нанимающий менеджер) для Non-TECH / Руководитель отдела для TECH",
            "id": "93801717611067099",
            "link": "employees",
            "group": "1722956166046",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "cnb",
            "dataType": "link",
            "name": "C&B",
            "id": "79741717610837855",
            "link": "employees",
            "group": "1722956166046",
            "tags": "",
            "indexing": true,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 0,
            "linkIndexFieldSysName": [
                "webuser_id"
            ],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": {},
            "groupName": null,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": true,
            "array": false
        },
        {
            "sysName": "org_dev",
            "dataType": "boolean",
            "name": "Орг. дев",
            "id": "28311717610790667",
            "link": "",
            "group": "1717136273468",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 44,
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
                "hideStandardBooleanIcons": false,
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "hr_bp",
            "dataType": "link",
            "name": "HR BP",
            "id": "15621717611052206",
            "link": "employees",
            "group": "1722956166046",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "vacancy_id",
            "dataType": "string",
            "name": "ID вакансии (из Optimacros)",
            "id": "78501715676487437",
            "link": null,
            "group": "1717136273468",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "user_creator",
            "dataType": "link",
            "name": "Кто создал заявку",
            "id": "10641717669243064",
            "link": "employees",
            "group": "0",
            "tags": null,
            "indexing": true,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 4,
            "linkIndexFieldSysName": [
                "webuser_id"
            ],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": true,
            "array": false
        },
        {
            "sysName": "offer_bonus",
            "dataType": "link",
            "name": "Предложение Lamoda по периодичности выплаты премии",
            "id": "86661718369709109",
            "link": "bonus",
            "group": "1717136273468",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 36,
            "linkIndexFieldSysName": [],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": {},
            "groupName": null,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "current_bonus",
            "dataType": "link",
            "name": "Текущая периодичность выплаты премии",
            "id": "41941718369676191",
            "link": "bonus",
            "group": "1717136273468",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 34,
            "linkIndexFieldSysName": [],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": {},
            "groupName": null,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "date_text",
            "dataType": "string",
            "name": "Дата",
            "id": "44611718913748411",
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
            "formatOptions": {},
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "last_change_date",
            "dataType": "date",
            "name": "Дата последнего изменения",
            "id": "12411720039745113",
            "link": "",
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 13,
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
                "timeFormat": " HH:mm",
                "isUTC": "false"
            },
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "prev_resigning_empl_full_name",
            "dataType": "string",
            "name": "",
            "id": "34051720080635679",
            "link": null,
            "group": "1720080628323",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "resume_file",
            "dataType": "file",
            "name": "Прикрепить резюме",
            "id": "26451722958113871",
            "link": "",
            "group": "1722958207971",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "resume_link",
            "dataType": "string",
            "name": "Ссылка на резюме",
            "id": "83851722957876678",
            "link": "",
            "group": "1722958207971",
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
            "format": "webLink",
            "formatOptions": {},
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "candidate_motivation",
            "dataType": "string",
            "name": "Мотивация кандидата",
            "id": "62081722957847333",
            "link": "",
            "group": "1722958207971",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "add_benefits",
            "dataType": "string",
            "name": "Доп. бенефиты",
            "id": "12411722957803685",
            "link": "",
            "group": "1722958207971",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "risks",
            "dataType": "string",
            "name": "Есть ли риски от интервьюеров?",
            "id": "53331722957778181",
            "link": "",
            "group": "1722958207971",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "process_participants",
            "dataType": "string",
            "name": "Кто был участником процесса отбора кандидатов ФИО",
            "id": "37241722957752715",
            "link": "",
            "group": "1722958207971",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "add_hr_dir",
            "dataType": "boolean",
            "name": "Добавить HR Director?",
            "id": "20731722957677040",
            "link": "",
            "group": "1717136273468",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 46,
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "hr_dep",
            "dataType": "boolean",
            "name": "Ставка в HR департамент?",
            "id": "98001722957609216",
            "link": "",
            "group": "1717136273468",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 45,
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
                "hideStandardBooleanIcons": false,
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "desired_bonus",
            "dataType": "link",
            "name": "Ожидания кандидата по периодичности выплаты",
            "id": "17301722957574597",
            "link": "bonus",
            "group": "1717136273468",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 35,
            "linkIndexFieldSysName": [],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": {},
            "groupName": null,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "budget_date",
            "dataType": "date",
            "name": "Бюджетная дата выхода от C&B партнера",
            "id": "91111722956823141",
            "link": "",
            "group": "1717136273468",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 40,
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "desired_salary",
            "dataType": "string",
            "name": "Ожидания кандидата по окладу",
            "id": "84691722956323382",
            "link": "",
            "group": "1717136273468",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 32,
            "linkIndexFieldSysName": [],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": {},
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "desired_bonus_amount",
            "dataType": "string",
            "name": "Ожидания кандидата по размеру премии",
            "id": "47401722956320074",
            "link": "",
            "group": "1717136273468",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 38,
            "linkIndexFieldSysName": [],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": {},
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "initial_step",
            "dataType": "string",
            "name": "",
            "id": "61681718370382220",
            "link": null,
            "group": "1720080628323",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "org_structure_text",
            "dataType": "string",
            "name": "Организационная структура",
            "id": "43811718379566902",
            "link": "",
            "group": "1717136273468",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "feedback_3",
            "dataType": "string",
            "name": "Обратная связь (3)",
            "id": "33591723026902223",
            "link": "",
            "group": "1723026548996",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "feedback_2",
            "dataType": "string",
            "name": "Обратная связь (2)",
            "id": "34531723026899674",
            "link": "",
            "group": "1723026548996",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "feedback_1",
            "dataType": "string",
            "name": "Обратная связь (1)",
            "id": "62281723026898586",
            "link": "",
            "group": "1723026548996",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "interacted_as_3",
            "dataType": "string",
            "name": "Взаимодействовали как (3)",
            "id": "38371723026792952",
            "link": "",
            "group": "1723026548996",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "interacted_as_2",
            "dataType": "string",
            "name": "Взаимодействовали как (2)",
            "id": "92571723026791805",
            "link": "",
            "group": "1723026548996",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "interacted_as_1",
            "dataType": "string",
            "name": "Взаимодействовали как (1)",
            "id": "91581723026791139",
            "link": "",
            "group": "1723026548996",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "period_and_company_3",
            "dataType": "string",
            "name": "Период совместной работы + название компании (3)",
            "id": "96891723026678461",
            "link": "",
            "group": "1723026548996",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "period_and_company_2",
            "dataType": "string",
            "name": "Период совместной работы + название компании (2)",
            "id": "12301723026677690",
            "link": "",
            "group": "1723026548996",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "period_and_company_1",
            "dataType": "string",
            "name": "Период совместной работы + название компании (1)",
            "id": "32261723026675847",
            "link": "",
            "group": "1723026548996",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "full_name_recommender_3",
            "dataType": "string",
            "name": "ФИО и должность рекомендателя 3",
            "id": "61711723026650455",
            "link": "",
            "group": "1723026548996",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "full_name_recommender_2",
            "dataType": "string",
            "name": "ФИО и должность рекомендателя 2",
            "id": "65801723026642796",
            "link": "",
            "group": "1723026548996",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "full_name_recommender_1",
            "dataType": "string",
            "name": "ФИО и должность рекомендателя 1",
            "id": "98861723026560889",
            "link": "",
            "group": "1723026548996",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "hrd",
            "dataType": "link",
            "name": "HR Director",
            "id": "22411723027680985",
            "link": "employees",
            "group": "1722956166046",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "cr_desired",
            "dataType": "string",
            "name": "СR ожидание (только для TECH)",
            "id": "85371723034344516",
            "link": "",
            "group": "1717136273468",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 42,
            "linkIndexFieldSysName": [],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": {},
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "cr_current",
            "dataType": "string",
            "name": "CR текущий (только для TECH)",
            "id": "83941723034298011",
            "link": "",
            "group": "1717136273468",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 41,
            "linkIndexFieldSysName": [],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": {},
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "desired_count_empl_direct",
            "dataType": "string",
            "name": "Ожидаемое количество подчиненных",
            "id": "33431723034099026",
            "link": "",
            "group": "1717136273468",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 29,
            "linkIndexFieldSysName": [],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": {},
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "desired_position",
            "dataType": "string",
            "name": "Ожидаемая должность",
            "id": "56861723034037117",
            "link": "",
            "group": "1717136273468",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 26,
            "linkIndexFieldSysName": [],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": {},
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "add_recommendation_3",
            "dataType": "json",
            "name": "Добавить рекомендацию 3",
            "id": "65201723223302028",
            "link": "",
            "group": "1717136273468",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 48,
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
                        "value": "add",
                        "label": ""
                    }
                ]
            },
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": true,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "add_recommendation_2",
            "dataType": "json",
            "name": "Добавить рекомендацию 2",
            "id": "24611723223280015",
            "link": "",
            "group": "1717136273468",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 47,
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
                        "value": "add",
                        "label": ""
                    }
                ]
            },
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": true,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "resigning_empl_full_name_strng",
            "dataType": "string",
            "name": "ФИО заменяемого сотрудника",
            "id": "98101725001431871",
            "link": null,
            "group": "1717136273468",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "job_rate",
            "dataType": "decimal",
            "name": "Коэффициент занятости",
            "id": "96811730359125382",
            "link": "",
            "group": "1717136273468",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "cancel_reason_didnt_applied",
            "dataType": "link",
            "name": "Причина",
            "id": "20141730487362202",
            "link": "jo_reason_didnt_applied",
            "group": "1730486886276",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "cancel_reason_refused",
            "dataType": "link",
            "name": "Причина",
            "id": "10211730487305830",
            "link": "jo_reason_refused",
            "group": "1730486886276",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "cancel_reason_exit_conf",
            "dataType": "link",
            "name": "Причина",
            "id": "20021730487018725",
            "link": "jo_reason_exit_conf",
            "group": "1730486886276",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "cancel_reason_bfr_prsnt",
            "dataType": "link",
            "name": "Причина",
            "id": "19191730486949303",
            "link": "jo_reason_bfr_present",
            "group": "1730486886276",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "cancel_reason_other",
            "dataType": "string",
            "name": "Укажите причину",
            "id": "43661730491636995",
            "link": "",
            "group": "1730486886276",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "approved_date",
            "dataType": "date",
            "name": "Согласованная дата выхода",
            "id": "52561730531754157",
            "link": "",
            "group": "1717136273468",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 49,
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        }
    ],
    "quickSearch": null,
    "httpParams": null,
    "cardCustomHtml": null,
    "cardCustomLayout": null,
    "comment": "N-4",
    "response": false
}

let authExample = {
    "isAuth": true,
    "custom_labels": "",
    "role": "jo_recruiter,jo_agreement,jo_hrbp,jo_cnb",
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
