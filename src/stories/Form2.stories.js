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
    "sl": "job_offers",
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
                        "paraText": "<style>.lmd-offer p {margin:10px 0}</style>\n<div classs=\"lmd-offer\">\n<h2>Заявка {{number}}</h2>\n<p>Дата создания: {{date}}</p>\n<p>Статус заявки: {{status.status}}</p>\n<p>Кем создано: {{user_creator.employee_full_name}}</p>\n  <p>Ответственный за этап: {{responsible_employee_id.employee_full_name}}</p>\n<p>Дата последнего изменения:\n  {{last_change_date}}</p>\n</div>"
                    },
                    {
                        "id": "elmnt_1718121437095",
                        "type": "steps",
                        "_formSteps": {
                            "stepsOrder": [
                                "approval_cnb",
                                "approval_hr_bp",
                                "approval_budget_holder",
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
                        }
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
                                        "id": "condition_1718897734563",
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
                                        "id": "condition_1718897878781",
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
                                "_conditionalView_value": "replacement"
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
                                        "id": "condition_1718898098066",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "!==",
                                        "_conditionalView_value": "jo_cnb"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": []
                    },
                    {
                        "id": "elmnt_1719251541841",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17192515476320.21032443211403234430322",
                                "_field": "id_position",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1719252236244",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "jo_admin,jo_cnb"
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
                                        "id": "condition_1718898133049",
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
                                        "id": "condition_1718898176513",
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
                                        "id": "condition_1718898203916",
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
                                        "id": "condition_1718898233989",
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
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718898259239",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1718907011548",
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
                                "_field_arrayLink_endpoint": "employee",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718898302974",
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
                                        "id": "condition_1718898330358",
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
                                        "id": "condition_1718898352523",
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
                                        "id": "condition_1718898372391",
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
                                        "id": "condition_1718898391739",
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
                                        "id": "condition_1718898409792",
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
                                        "id": "condition_1718898432724",
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
                                        "id": "condition_1718898449373",
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
                                        "id": "condition_1718898472825",
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
                                        "id": "condition_1718898489537",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
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
                                        "id": "condition_1718898718124",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "jo_admin,jo_cnb"
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
                                        "id": "condition_1718898949178",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "jo_admin,jo_cnb"
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
                                        "id": "condition_1718898778641",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "jo_admin,jo_cnb"
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
                                        "id": "condition_1718898974944",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "jo_admin,jo_cnb"
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
                                        "id": "condition_1718898800858",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "jo_admin,jo_cnb"
                                    }
                                ]
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
                                        "id": "condition_1718898866688",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "jo_admin,jo_cnb"
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
                                        "id": "condition_1718899017658",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "jo_admin,jo_cnb"
                                    }
                                ]
                            }
                        ],
                        "_input_fields_in_a_row": 2,
                        "_conditionalView": false,
                        "_conditions": [
                            {
                                "id": "condition_1718898902711"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1719252295305",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17192522973860.032203343112203341324143",
                                "_field": "current_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "bonus",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1719252324631",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "jo_admin,jo_cnb"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1719252392036",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17192523944960.14001433322242313231202",
                                "_field": "current_bonus_amount",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1719252414536",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "jo_admin,jo_cnb"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1719252429032",
                                "_conditionalView_field": "current_bonus",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "quarter,month,half_year,year"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1719252466442",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17192524685940.041340443342044122223201",
                                "_field": "offer_bonus",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1719252481491",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "jo_admin,jo_cnb"
                                    }
                                ],
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "bonus"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1719252526395",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17192525290670.004104300323223222030424",
                                "_field": "offer_bonus_amount",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1719252547101",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "jo_admin,jo_cnb"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1719252565556",
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
                                        "id": "condition_1718899222198",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "jo_admin,jo_cnb"
                                    }
                                ]
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
                                        "_conditionalView_operator": "!==",
                                        "_conditionalView_value": "jo_hrbp"
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
                                        "id": "condition_1718906641455",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "!==",
                                        "_conditionalView_value": "jo_hrbp"
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
                                "_conditionalView_value": "replacement"
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
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "jo_hrbp"
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
                                        "id": "condition_1718906827189",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull",
                                        "_conditionalView_value": "jo_hrbp"
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
                                        "id": "condition_1718906845134",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "!==",
                                        "_conditionalView_value": "jo_hrbp"
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
                                        "id": "condition_1718906867969",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "!==",
                                        "_conditionalView_value": "jo_hrbp"
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
                                        "_conditionalView_operator": "!==",
                                        "_conditionalView_value": "jo_hrbp"
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
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "divisionDropdown",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718906930237",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "!==",
                                        "_conditionalView_value": "jo_hrbp"
                                    }
                                ]
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
                                        "_conditionalView_operator": "!==",
                                        "_conditionalView_value": "jo_hrbp"
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
                                        "id": "condition_1718908541732",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "!==",
                                        "_conditionalView_value": "jo_hrbp"
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
                                        "id": "condition_1718908557248",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "!==",
                                        "_conditionalView_value": "jo_hrbp"
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
                                        "id": "condition_1718908574165",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "!==",
                                        "_conditionalView_value": "jo_hrbp"
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
                                        "id": "condition_1718908621649",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "!==",
                                        "_conditionalView_value": "jo_hrbp"
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
                                        "_conditionalView_operator": "!==",
                                        "_conditionalView_value": "jo_hrbp"
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
                                        "id": "condition_1718908653066",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "!==",
                                        "_conditionalView_value": "jo_hrbp"
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
                                "_input_type": "object",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718908674166",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "!==",
                                        "_conditionalView_value": "jo_hrbp"
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
                                "_input_type": "object",
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718908692783",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "!==",
                                        "_conditionalView_value": "jo_hrbp"
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
                                        "id": "condition_1718908713148",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "!==",
                                        "_conditionalView_value": "jo_hrbp"
                                    }
                                ]
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
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
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
                            }
                        ]
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
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1719253632739",
                                "_conditionalView_field": "current_bonus",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "quarter,month,half_year,year"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1719253734009",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17192537361340.32002142324140101444033",
                                "_field": "offer_bonus",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "bonus",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1719253765921",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1719253794098",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17192537961630.42022331240412034200032",
                                "_field": "offer_bonus_amount",
                                "_field_required": true,
                                "_conditionalView": true,
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1719253805923",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1719253818131",
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
                                        "_conditionalView_operator": "!==",
                                        "_conditionalView_value": "jo_hrbp"
                                    }
                                ]
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
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "replacement"
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
                        "_conditionalView": true,
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
                                "_field_link_type": "select",
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
                                ]
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
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "replacement"
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
                                "_field_link_type": "select",
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
                                ]
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
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "replacement"
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
                                "_field_link_type": "select",
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
                                ]
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
                                "_conditionalView_value": "replacement"
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
                                "_field_link_type": "select",
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
                                ]
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
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "replacement"
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
                                "_field_link_type": "select",
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
                                ]
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
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "replacement"
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
                                "_field_link_type": "select",
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
                                ]
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
                                "_conditionalView_value": "replacement"
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
                                "_field_link_type": "select",
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
                                ]
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
                                "_conditionalView_value": "replacement"
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
                                "_field_link_type": "select",
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
                                ]
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
                                "_conditionalView_value": "replacement"
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
                                "_field_link_type": "select",
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
                                ]
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
                                "_conditionalView_value": "replacement"
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
                                "_field_link_type": "select",
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
                                ]
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
                                "_conditionalView_value": "replacement"
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
                                "_field_link_type": "select",
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
                                ]
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
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1717681765236",
                                        "_conditionalView_field": "status",
                                        "_conditionalView_operator": "!==",
                                        "_conditionalView_value": "approval_cnb"
                                    },
                                    {
                                        "id": "condition_1718899289135",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "jo_admin,jo_cnb"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR",
                                "_action_label": "Согласовать",
                                "_action_standardRequired": true
                            }
                        ],
                        "_conditionalView": false,
                        "_actions_in_a_row": 1,
                        "_conditions": [
                            {
                                "id": "condition_1718903590736",
                                "_conditionalView_field": "status"
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
                                "_conditionalView": false,
                                "_conditions": [
                                    {
                                        "id": "condition_1718909809361",
                                        "_conditionalView_field": "status",
                                        "_conditionalView_operator": "!==",
                                        "_conditionalView_value": "approval_hr_bp"
                                    },
                                    {
                                        "id": "condition_1718909828889",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "notIn",
                                        "_conditionalView_value": "jo_admin,jo_hrbp"
                                    }
                                ],
                                "_action_label": "Согласовать",
                                "_action_conditionals_and_or": "OR",
                                "_action_standardRequired": true
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
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "jo_admin,jo_hrbp"
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
                                "_action_standardRequired": true
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
                                "_conditionalView_operator": "==",
                                "_conditionalView_field": "manager",
                                "_conditionalView_value": "{{WebUser.user}}",
                                "_conditionalView_value_RAW": true
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
                                "_conditionalView": false,
                                "_action_standardRequired": true
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
                                "_conditionalView_field": "up_manager",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "{{WebUser.user}}",
                                "_conditionalView_value_RAW": true
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
                                "_action_standardRequired": true
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
                                "_conditionalView_operator": "==",
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
                                "_action_standardRequired": true
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
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "jo_recruiter"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717671101351",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17176711060240.30414004010022100204231",
                                "_action": "action_1717403908326",
                                "_action_button_type": "danger",
                                "_action_standardRequired": true
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1717671117328",
                                "_conditionalView_field": "FormState.cancelling",
                                "_conditionalView_operator": "!==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1718111982165",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "jo_recruiter"
                            },
                            {
                                "id": "condition_1718952996931",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "in",
                                "_conditionalView_value": "approval_cnb,approval_hr_bp,approval_budget_holder,approval_direct,approval_direct_up1"
                            }
                        ],
                        "_actions_in_a_row": 1
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
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "jo_orgdev"
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
                                "_action_standardRequired": true
                            },
                            {
                                "id": "17192563390180.34301044021204144103024",
                                "_action": "action_copy_1719255873279",
                                "_action_button_type": "danger",
                                "_action_standardRequired": true
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
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "jo_recruiter"
                            },
                            {
                                "id": "condition_1719442002015",
                                "_conditionalView_field": "FormState.cancelling",
                                "_conditionalView_operator": "!==",
                                "_conditionalView_value": "true"
                            }
                        ],
                        "_actions_in_a_row": 2
                    },
                    {
                        "id": "elmnt_1717670944237",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17176709623910.24340033200134301433121",
                                "_input_type": "state",
                                "_state_field": "reason",
                                "_edit_state_input_label": "Введите причину"
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1717670977408",
                                "_conditionalView_field": "FormState.cancelling",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1718112104813",
                                "_conditionalView_field": "WebUser.role",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "jo_recruiter"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1717670237356",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17176704619370.13413004002114343003032",
                                "_action": "action_1717670404903",
                                "_action_button_type": "danger",
                                "_action_icon": "ban",
                                "_action_customRequired": false,
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1717670504642",
                                        "_conditionalView_field": "FormState.reason",
                                        "_conditionalView_operator": "isNull",
                                        "_conditionalView_value": "admin,hr"
                                    },
                                    {
                                        "id": "condition_1718112136368",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "==",
                                        "_conditionalView_value": "jo_recruiter"
                                    }
                                ],
                                "_action_conditional_disable_or_hide": "disable",
                                "_action_label": "Точно отозвать!",
                                "_action_standardRequired": true
                            }
                        ],
                        "_actions_in_a_row": 1,
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1717671147544",
                                "_conditionalView_field": "FormState.cancelling",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1719439075041",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "notIn",
                                "_conditionalView_value": "present_offer,exit_confirmation"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1719438590082",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17194385935700.33131133014332110143021",
                                "_action": "action_copy_1719438330632",
                                "_action_icon": "ban",
                                "_action_button_type": "danger",
                                "_conditionalView": true,
                                "_action_conditional_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1719438759462",
                                        "_conditionalView_field": "FormState.reason",
                                        "_conditionalView_operator": "isNull"
                                    },
                                    {
                                        "id": "condition_1719438862867",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "==",
                                        "_conditionalView_value": "jo_recruiter"
                                    }
                                ],
                                "_action_standardRequired": true
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1719438869523",
                                "_conditionalView_field": "FormState.cancelling",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            },
                            {
                                "id": "condition_1719441849890",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "present_offer"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1719442089443",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17194421250300.12001000100244403033234",
                                "_action": "action_1719438139364",
                                "_action_icon": "ban",
                                "_action_button_type": "danger",
                                "_conditionalView": true,
                                "_action_conditional_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1719442150624",
                                        "_conditionalView_field": "FormState.reason",
                                        "_conditionalView_operator": "isNull"
                                    },
                                    {
                                        "id": "condition_1719442187266",
                                        "_conditionalView_field": "WebUser.role",
                                        "_conditionalView_operator": "==",
                                        "_conditionalView_value": "jo_recruiter"
                                    }
                                ],
                                "_action_standardRequired": true
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1719442223609",
                                "_conditionalView_field": "status",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "exit_confirmation"
                            },
                            {
                                "id": "condition_1719442529082",
                                "_conditionalView_field": "FormState.cancelling",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "true"
                            }
                        ]
                    }
                ],
                "sectionVisibility": "always",
                "sectionCustomVisibility": ""
            }
        ],
        "state": {
            "step": "{{status}}",
            "popup": null,
            "errorMessage": "",
            "prevStep": "",
            "reason": "",
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
                "id": "action_1717403903257",
                "name": "Отклонить",
                "actionSubmit": false
            },
            {
                "id": "action_1717403908326",
                "name": "Отозвать",
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1717671077028",
                        "field": "FormState.cancelling",
                        "value": "true"
                    }
                ],
                "actionSubmit": false
            },
            {
                "id": "action_1717670404903",
                "name": "Точно Отозвать!",
                "actionType": "endpoint",
                "endpoint": "createJobAction",
                "mapping": [
                    {
                        "id": "mapping_1717670423764",
                        "field": "action",
                        "value": "cancel"
                    },
                    {
                        "id": "mapping_1718110130730",
                        "field": "pay_load",
                        "value": "{{FormState.reason}}"
                    }
                ],
                "actionSubmit": true
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
                        "field": "FormState.cancelling",
                        "value": "true"
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
                        "field": "FormState.cancelling",
                        "value": "true"
                    }
                ],
                "actionSubmit": false,
                "autoAction": false
            },
            {
                "id": "action_1719438139364",
                "name": "Добавить причину невыхода на работу",
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
                    },
                    {
                        "id": "mapping_1719441258904",
                        "field": "pay_load",
                        "value": "{{FormState.reason}}"
                    }
                ],
                "actionSubmit": true
            },
            {
                "id": "action_copy_1719438330632",
                "name": "Добавить причину отклонения кандидатом",
                "actionType": "endpoint",
                "endpoint": "createJobAction",
                "mapping": [
                    {
                        "id": "mapping_1717681375750",
                        "field": "action",
                        "value": "refuse"
                    },
                    {
                        "id": "mapping_1718110015823",
                        "field": "pay_load",
                        "value": "{{FormState.reason}}"
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
            }
        ],
        "general": {
            "edittingOn": true,
            "showState": false,
            "showModel": false,
            "autosubmit": "no_autosubmit",
            "autosubmit_model": [
                "division"
            ],
            "saveState": false
        },
        "hideActionsHint": true
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
            "order": 21,
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
            "json": false,
            "typeVariable": {},
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
            "json": false,
            "typeVariable": {},
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
            "order": 9,
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
            "json": false,
            "typeVariable": {},
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
            "json": false,
            "typeVariable": {},
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
            "order": 12,
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
            "json": false,
            "typeVariable": {},
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
            "json": false,
            "typeVariable": {},
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
            "json": false,
            "typeVariable": {},
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
            "order": 8,
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
            "json": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "cr",
            "dataType": "string",
            "name": "CR (только для TECH)",
            "id": "82611715677377022",
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
            "json": false,
            "typeVariable": {},
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
            "order": 23,
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
            "json": false,
            "typeVariable": {},
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
            "json": false,
            "typeVariable": {},
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
            "order": 11,
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
            "json": false,
            "typeVariable": {},
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
            "json": false,
            "typeVariable": {},
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
            "order": 15,
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
            "json": false,
            "typeVariable": {},
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
            "json": false,
            "typeVariable": {},
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
            "order": 20,
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
            "json": false,
            "typeVariable": {},
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
            "order": 26,
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
            "json": false,
            "typeVariable": {},
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
            "order": 24,
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
            "json": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "offer_salary_bonus",
            "dataType": "string",
            "name": "Ежемесячный оклад в Lamoda",
            "id": "15821715677132698",
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
            "json": false,
            "typeVariable": {},
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
            "json": false,
            "typeVariable": {},
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
            "order": 16,
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
            "json": false,
            "typeVariable": {},
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
            "json": false,
            "typeVariable": {},
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
            "order": 3,
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
            "json": false,
            "typeVariable": {},
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
            "json": false,
            "typeVariable": {},
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
            "order": 5,
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
            "json": false,
            "typeVariable": {},
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
            "order": 22,
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
            "json": false,
            "typeVariable": {},
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
            "json": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "status",
            "dataType": "link",
            "name": "Cтатус",
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
            "json": false,
            "typeVariable": {},
            "indexExists": true,
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
            "json": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "offer_bonus_amount",
            "dataType": "string",
            "name": "Размер премии в Lamoda",
            "id": "14291717102608159",
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
            "json": false,
            "typeVariable": {},
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
            "order": 13,
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
            "json": false,
            "typeVariable": {},
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
            "order": 14,
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
            "json": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "offer_period_bonus",
            "dataType": "link",
            "name": "Периодичность выплаты в Lamoda",
            "id": "78861717102532940",
            "link": "period_bonus",
            "group": "1717136273468",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 30,
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
            "json": false,
            "typeVariable": {},
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
            "order": 31,
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
            "json": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "current_period_bonus",
            "dataType": "link",
            "name": "Текущая периодичность выплаты",
            "id": "90641717102507302",
            "link": "period_bonus",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "json": false,
            "typeVariable": {},
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
            "json": false,
            "typeVariable": {},
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
            "json": false,
            "typeVariable": {},
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
            "json": false,
            "typeVariable": {},
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
            "json": false,
            "typeVariable": {},
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
            "json": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "budget_holder",
            "dataType": "link",
            "name": "Держатель бюджета",
            "id": "45251717611164564",
            "link": "employees",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "json": false,
            "typeVariable": {},
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
            "json": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "up_manager",
            "dataType": "link",
            "name": "Верхнеуровневый руководитель/Директор департамента",
            "id": "66111717611097029",
            "link": "employees",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "json": false,
            "typeVariable": {},
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
            "order": 34,
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
            "json": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "cnb",
            "dataType": "link",
            "name": "C&B",
            "id": "79741717610837855",
            "link": "employees",
            "group": "1717136273468",
            "tags": "",
            "indexing": true,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 35,
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
            "json": false,
            "typeVariable": {},
            "indexExists": true,
            "array": false
        },
        {
            "sysName": "manager",
            "dataType": "link",
            "name": "Руководитель",
            "id": "93801717611067099",
            "link": "employees",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "json": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "hr_bp",
            "dataType": "link",
            "name": "HR BP",
            "id": "15621717611052206",
            "link": "employees",
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
            "json": false,
            "typeVariable": {},
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
            "json": false,
            "typeVariable": {},
            "indexExists": true,
            "array": false
        },
        {
            "sysName": "initial_step",
            "dataType": "string",
            "name": "",
            "id": "61681718370382220",
            "link": null,
            "group": "1717136273468",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 42,
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
            "json": false,
            "typeVariable": {},
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
            "json": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "offer_bonus",
            "dataType": "link",
            "name": "Премия Lamoda",
            "id": "86661718369709109",
            "link": "bonus",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "json": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "current_bonus",
            "dataType": "link",
            "name": "Текущая премия",
            "id": "41941718369676191",
            "link": "bonus",
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
            "formatOptions": {},
            "groupName": null,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "json": false,
            "typeVariable": {},
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
            "json": false,
            "typeVariable": {},
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
            "json": false,
            "typeVariable": {},
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
            "json": false,
            "typeVariable": {},
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
            "json": false,
            "typeVariable": {},
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
            "json": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        }
    ],
    "data": [
        {
            "offer_count_empl_direct": "1",
            "number": "N-4-422203",
            "name_position": "1",
            "prev_status": {
                "id": "approval_cnb",
                "status": "Cогласование CnB"
            },
            "org_structure_text": "Распределительный центр\\Складской отдел",
            "candidate_full_name": "1",
            "analytics_ops": "fleet",
            "cost_center": "1",
            "country_city": "1",
            "direct_full_name": "aleksandra.kalina@lamoda.ru",
            "vacancy_id": "1",
            "user_creator": {
                "position": "Аналитик по развитию корпоративных бизнес-приложений",
                "id": "aleksandra.kalina@lamoda.ru",
                "employee_full_name": "Александра Калина",
                "email": "aleksandra.kalina@lamoda.ru"
            },
            "offer_salary_bonus": "1",
            "assessment_type": "none",
            "last_change_date": 1720616687000,
            "division": {
                "division_name": "Складской отдел",
                "id": "1367"
            },
            "offer_position": "1",
            "responsible_employee_id": {
                "position": "Аналитик по развитию корпоративных бизнес-приложений",
                "id": "aleksandra.kalina@lamoda.ru",
                "employee_full_name": "Александра Калина",
                "email": "aleksandra.kalina@lamoda.ru"
            },
            "probation": "3 месяца",
            "company": {
                "company": "КУПИШУЗ",
                "id": "kupishoes"
            },
            "hr_bp": {
                "id": "aleksandra.kalina@lamoda.ru",
                "employee_full_name": "Александра Калина",
                "email": "aleksandra.kalina@lamoda.ru"
            },
            "offer_bonus_amount": "1",
            "id": "7424959d-a59e-48a5-8099-010b9c5baf2d",
            "budget_holder": {
                "id": "aleksandra.kalina@lamoda.ru",
                "employee_full_name": "Александра Калина",
                "email": "aleksandra.kalina@lamoda.ru"
            },
            "last_user": {
                "id": "aleksandra.kalina@lamoda.ru"
            },
            "all_user_ids": [
                "aleksandra.kalina@lamoda.ru"
            ],
            "date": 1720616591000,
            "reason_vacancy": "new",
            "manager": {
                "id": "aleksandra.kalina@lamoda.ru",
                "employee_full_name": "Александра Калина",
                "email": "aleksandra.kalina@lamoda.ru"
            },
            "status": {
                "id": "approval_cnb",
                "status": "Cогласование CnB"
            },
            "cnb": {
                "id": "aleksandra.kalina@lamoda.ru",
                "employee_full_name": "Александра Калина",
                "email": "aleksandra.kalina@lamoda.ru"
            },
            "type_id": "N-4",
            "position": "1",
            "contract_type": "open_ended",
            "up_manager": {
                "id": "aleksandra.kalina@lamoda.ru",
                "employee_full_name": "Александра Калина",
                "email": "aleksandra.kalina@lamoda.ru"
            },
            "logs": [
                {
                    "date_display": "10 июля 2024, 16:04",
                    "text": "Согласование C&B. Назначен ответственный: aleksandra.kalina@lamoda.ru",
                    "ticket": "7424959d-a59e-48a5-8099-010b9c5baf2d",
                    "id": "1045eec2-a785-4fb4-b287-d913bbba0127",
                    "user": {
                        "id": "aleksandra.kalina@lamoda.ru"
                    }
                }
            ],
            "employment_type": "fix",
            "org_structure": "1367",
            "offer_bonus": {
                "bonus": "Пол года",
                "id": "half_year"
            }
        }
    ],
    "totalPages": 1,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [
        [
            "analytics_ops",
            99325489
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
            "direct_full_name",
            99325489
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
            "reason_vacancy",
            99325489
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
            "status.id",
            99325498
        ],
        [
            "status.status",
            99325498
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
            "offer_period_bonus.id",
            99325501
        ],
        [
            "current_bonus_amount",
            99325489
        ],
        [
            "current_period_bonus.id",
            99325501
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
            "org_structure_text",
            99325489
        ],
        [
            "all_user_ids.id",
            99325487
        ],
        [
            "date_text",
            99325489
        ],
        [
            "last_change_date",
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
        "status",
        "id_position",
        "offer_bonus_amount",
        "current_bonus_amount",
        "contract_period",
        "reason_contract",
        "offer_period_bonus",
        "current_period_bonus",
        "date",
        "prev_status",
        "type_id",
        "logs",
        "last_user",
        "up_manager",
        "first_work_day",
        "budget_holder",
        "manager",
        "cnb",
        "org_dev",
        "hr_bp",
        "vacancy_id",
        "user_creator",
        "initial_step",
        "offer_bonus",
        "responsible_roles",
        "responsible_employee_id",
        "current_bonus",
        "org_structure_text",
        "date_text",
        "last_change_date"
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
            "jsonObject": "[{\"sysName\":\"roles_ad\",\"dataType\":\"arrayLink\",\"name\":\"\",\"id\":\"31521720185270928\",\"link\":\"roles_ad\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"dateLastActivity\",\"dataType\":\"string\",\"name\":\"dateLastActivity\",\"id\":\"10\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"dateCreated\",\"dataType\":\"string\",\"name\":\"dateCreated\",\"id\":\"13\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"isAuthorization\",\"dataType\":\"boolean\",\"name\":\"isAuthorization\",\"id\":\"9\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"notifications_counter\",\"dataType\":\"string\",\"name\":\"Notifications Counter\",\"id\":\"1\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"custom_labels\",\"dataType\":\"json\",\"name\":\"Custom labels\",\"id\":\"2\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":true,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"phone\",\"dataType\":\"string\",\"name\":\"Phone\",\"id\":\"12\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"email\",\"dataType\":\"string\",\"name\":\"Email\",\"id\":\"11\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"userpic\",\"dataType\":\"file\",\"name\":\"User pic\",\"id\":\"3\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":{},\"groupName\":\"Contacts\",\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"Username (login)\",\"id\":\"15\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"role\",\"dataType\":\"array\",\"name\":\"Roles\",\"id\":\"8\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":true},{\"sysName\":\"password\",\"dataType\":\"string\",\"name\":\"Password (hash)\",\"id\":\"14\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"firstName\",\"dataType\":\"string\",\"name\":\"First name\",\"id\":\"7\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"lastName\",\"dataType\":\"string\",\"name\":\"Last name\",\"id\":\"6\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"gender\",\"dataType\":\"string\",\"name\":\"Gender\",\"id\":\"5\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"isBlocked\",\"dataType\":\"boolean\",\"name\":\"Block user\",\"id\":\"4\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"systemMessage\",\"dataType\":\"string\",\"name\":\"System message\",\"id\":\"56921641637265680\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"employee\",\"dataType\":\"link\",\"name\":\"\",\"id\":\"65621717669435431\",\"link\":\"employees\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"position\",\"dataType\":\"string\",\"name\":\"Position\",\"id\":\"21611718980485707\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"division\",\"dataType\":\"string\",\"name\":\"Division\",\"id\":\"13761718980504077\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"isActive\",\"dataType\":\"boolean\",\"name\":\"isActive\",\"id\":\"28091718982360994\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"secret\",\"dataType\":\"string\",\"name\":\"secret\",\"id\":\"81131636839496227\",\"link\":\"\",\"group\":\"1636839487957\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"notif_Email\",\"dataType\":\"boolean\",\"name\":\"Notify me by Email\",\"id\":\"61231639915065277\",\"link\":\"\",\"group\":\"1639915049523\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Yes\",\"No\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false}]",
            "jsonGroupSettings": "[{\"name\":\"Contacts\",\"id\":-502807437,\"order\":0},{\"name\":\"Notifications\",\"id\":1639915049523,\"order\":1},{\"name\":\"Password restoring\",\"id\":1636839487957,\"order\":2},{\"name\":\"System fields (LEGACY)\",\"id\":-1776115286,\"order\":3}]",
            "jsonViewIdSettings": "[{\"sysName\":\"firstName\"},{\"sysName\":\"lastName\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-07-08T08:35:18Z",
            "createBy": 0,
            "changedBy": 0,
            "_settings": {
                "inMemory": false,
                "isCacheable": false,
                "timeCache": 0,
                "indexEnabled": true,
                "lowPriority": false
            },
            "_nativeIndexSettings": null,
            "objectIDSysName": "id",
            "innerIDField": {
                "sysName": "id",
                "dataType": "id",
                "name": "Username (login)",
                "id": "15",
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "json": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
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
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"ad_group\",\"dataType\":\"link\",\"name\":\"Ad group\",\"id\":\"37371716221203585\",\"link\":\"roles_ad\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"role_name\",\"dataType\":\"string\",\"name\":\"Role name\",\"id\":\"62051716220877472\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false}]",
            "jsonGroupSettings": "[]",
            "jsonViewIdSettings": "[]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":false,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": false,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-05-20T16:07:07Z",
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
                "json": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
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
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"position_name_eng\",\"dataType\":\"string\",\"name\":\"Position name eng\",\"id\":\"14771717094032672\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"direct_last_name\",\"dataType\":\"string\",\"name\":\"Direct Last name\",\"id\":\"20511715675238230\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"webuser_id\",\"dataType\":\"link\",\"name\":\"\",\"id\":\"21401717671535287\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"email\",\"dataType\":\"string\",\"name\":\"Email\",\"id\":\"26531716224439241\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"position\",\"dataType\":\"string\",\"name\":\"Position\",\"id\":\"28531715675330046\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"direct_first_name\",\"dataType\":\"string\",\"name\":\"Direct First name\",\"id\":\"29311715675220848\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"division_name\",\"dataType\":\"string\",\"name\":\"Division name\",\"id\":\"31271717093221879\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"direct_email\",\"dataType\":\"string\",\"name\":\"Direct email\",\"id\":\"36721717097550149\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"direct_full_name\",\"dataType\":\"string\",\"name\":\"Direct Full name\",\"id\":\"40141715777939624\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"division_id\",\"dataType\":\"link\",\"name\":\"Division id\",\"id\":\"46921715675477884\",\"link\":\"structure\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"employee_last_name\",\"dataType\":\"string\",\"name\":\"Employee Last name\",\"id\":\"60151715675210149\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"employee_full_name\",\"dataType\":\"string\",\"name\":\"Employee Full name\",\"id\":\"68071715777917101\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"employee_first_name\",\"dataType\":\"string\",\"name\":\"Employee First name\",\"id\":\"68431715675181675\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"position_id\",\"dataType\":\"string\",\"name\":\"Position ID\",\"id\":\"80581717093206114\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false}]",
            "jsonGroupSettings": "[]",
            "jsonViewIdSettings": "[{\"sysName\":\"employee_full_name\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-06-15T17:39:29Z",
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
                "json": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            "folderId": 33811357
        },
        "99325488": {
            "networkID": 21335,
            "id": 99325488,
            "dateCreated": "2024-05-14T07:49:49Z",
            "hidden": false,
            "dateHidden": null,
            "name": "Structure",
            "sysName": "structure",
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"full_hierarchy\",\"dataType\":\"string\",\"name\":\"Full hierarchy\",\"id\":\"24721715777762327\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"division_id\",\"dataType\":\"number\",\"name\":\"Division id\",\"id\":\"58271715673541979\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"division_name\",\"dataType\":\"string\",\"name\":\"Division name\",\"id\":\"63201715673599255\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false}]",
            "jsonGroupSettings": "[]",
            "jsonViewIdSettings": "[{\"sysName\":\"division_name\"},{\"sysName\":\"full_hierarchy\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-06-14T14:38:33Z",
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
                "json": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            "folderId": 33811357
        },
        "99325489": {
            "networkID": 21335,
            "id": 99325489,
            "dateCreated": "2024-05-14T08:39:18Z",
            "hidden": false,
            "dateHidden": null,
            "name": "job_offers",
            "sysName": "job_offers",
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"user_creator\",\"dataType\":\"link\",\"name\":\"Кто создал заявку\",\"id\":\"10641717669243064\",\"link\":\"employees\",\"group\":\"0\",\"tags\":null,\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[\"webuser_id\"],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"last_change_date\",\"dataType\":\"date\",\"name\":\"Дата последнего изменения\",\"id\":\"12411720039745113\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.YYYY\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"reason_vacancy\",\"dataType\":\"link\",\"name\":\"Причина появления вакансии\",\"id\":\"13591715675968084\",\"link\":\"reason_of_vacancy\",\"group\":\"1717136273468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"offer_bonus_amount\",\"dataType\":\"string\",\"name\":\"Размер премии в Lamoda\",\"id\":\"14291717102608159\",\"link\":\"\",\"group\":\"1717136273468\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":32,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"hr_bp\",\"dataType\":\"link\",\"name\":\"HR BP\",\"id\":\"15621717611052206\",\"link\":\"employees\",\"group\":\"1717136273468\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":36,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"id_position\",\"dataType\":\"link\",\"name\":\"Код позиции (из УШР)\",\"id\":\"15801717092329369\",\"link\":\"position\",\"group\":\"1717136273468\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"offer_salary_bonus\",\"dataType\":\"string\",\"name\":\"Ежемесячный оклад в Lamoda\",\"id\":\"15821715677132698\",\"link\":null,\"group\":\"1717136273468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":28,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"current_position\",\"dataType\":\"string\",\"name\":\"Текущая должность\",\"id\":\"16321715676814870\",\"link\":null,\"group\":\"1717136273468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":23,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"org_structure\",\"dataType\":\"link\",\"name\":\"Организационная структура\",\"id\":\"19641716190989070\",\"link\":\"structure\",\"group\":\"1717136273468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"last_user\",\"dataType\":\"link\",\"name\":\"Кем изменено\",\"id\":\"21921717136519307\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"contract_period\",\"dataType\":\"string\",\"name\":\"Укажите период\",\"id\":\"23561717102136707\",\"link\":\"\",\"group\":\"1717136273468\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"employment_type\",\"dataType\":\"link\",\"name\":\"Тип занятости\",\"id\":\"24381715676484262\",\"link\":\"employment_type\",\"group\":\"1717136273468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"count_empl_direct\",\"dataType\":\"string\",\"name\":\"Текущее количество подчиненных\",\"id\":\"25431715676819516\",\"link\":null,\"group\":\"1717136273468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":25,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"company\",\"dataType\":\"link\",\"name\":\"Юр. лицо\",\"id\":\"25501715676080911\",\"link\":\"company\",\"group\":\"1717136273468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"logs\",\"dataType\":\"arrayLink\",\"name\":\"История изменений\",\"id\":\"28171717136570915\",\"link\":\"logs\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"array\":false},{\"sysName\":\"org_dev\",\"dataType\":\"boolean\",\"name\":\"Орг. дев\",\"id\":\"28311717610790667\",\"link\":\"\",\"group\":\"1717136273468\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":34,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Да\",\"Нет\"],\"hideStandardBooleanIcons\":false,\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"candidate_full_name\",\"dataType\":\"string\",\"name\":\"ФИО кандидата\",\"id\":\"29091715676143182\",\"link\":null,\"group\":\"1717136273468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"status\",\"dataType\":\"link\",\"name\":\"Cтатус\",\"id\":\"33981716236672620\",\"link\":\"statuses\",\"group\":\"0\",\"tags\":null,\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[\"id\"],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"prev_resigning_empl_full_name\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"34051720080635679\",\"link\":null,\"group\":\"1720080628323\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"offer_count_empl_direct\",\"dataType\":\"string\",\"name\":\"Количество подчиненных в Lamoda\",\"id\":\"36501715676821342\",\"link\":null,\"group\":\"1717136273468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":26,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"reason_contract\",\"dataType\":\"string\",\"name\":\"Обоснование Срочного ТД\",\"id\":\"38571717102233946\",\"link\":\"\",\"group\":\"1717136273468\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"division\",\"dataType\":\"link\",\"name\":\"Подразделение\",\"id\":\"40821715676271880\",\"link\":\"structure\",\"group\":\"1717136273468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"current_bonus\",\"dataType\":\"link\",\"name\":\"Текущая премия\",\"id\":\"41941718369676191\",\"link\":\"bonus\",\"group\":\"1717136273468\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":40,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"responsible_roles\",\"dataType\":\"arrayLink\",\"name\":\"Ответственные роли\",\"id\":\"42551718111539315\",\"link\":\"roles\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"array\":false},{\"sysName\":\"type_id\",\"dataType\":\"string\",\"name\":\"Тип заявки\",\"id\":\"43711717138677778\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"org_structure_text\",\"dataType\":\"string\",\"name\":\"Организационная структура\",\"id\":\"43811718379566902\",\"link\":\"\",\"group\":\"1717136273468\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"analytics_ops\",\"dataType\":\"link\",\"name\":\"Analytics for OPS\",\"id\":\"44501715676533202\",\"link\":\"analytics_for_ops\",\"group\":\"1717136273468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":21,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"date_text\",\"dataType\":\"string\",\"name\":\"Дата\",\"id\":\"44611718913748411\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"budget_holder\",\"dataType\":\"link\",\"name\":\"Держатель бюджета\",\"id\":\"45251717611164564\",\"link\":\"employees\",\"group\":\"1717136273468\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":37,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"prev_status\",\"dataType\":\"link\",\"name\":\"Предыдущий статус\",\"id\":\"45271717136281092\",\"link\":\"statuses\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"assessment_type\",\"dataType\":\"link\",\"name\":\"Форма оценки\",\"id\":\"53871715676486789\",\"link\":\"perf_review\",\"group\":\"1717136273468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":17,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"offer_position\",\"dataType\":\"string\",\"name\":\"Должность в Lamoda\",\"id\":\"56891715677420164\",\"link\":null,\"group\":\"1717136273468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":24,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"initial_step\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"61681718370382220\",\"link\":null,\"group\":\"1717136273468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":42,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"current_salary_bonus\",\"dataType\":\"string\",\"name\":\"Текущий ежемесячный оклад\",\"id\":\"62881715676822167\",\"link\":null,\"group\":\"1717136273468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":27,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"current_bonus_amount\",\"dataType\":\"string\",\"name\":\"Текущий размер премии\",\"id\":\"63161717102594756\",\"link\":\"\",\"group\":\"1717136273468\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":31,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"all_user_ids\",\"dataType\":\"arrayLink\",\"name\":\"Все пользователи, относящиеся к заявке\",\"id\":\"64121718609008711\",\"link\":\"employees\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"array\":false},{\"sysName\":\"direct_full_name\",\"dataType\":\"link\",\"name\":\"ФИО руководителя\",\"id\":\"64721715676272622\",\"link\":\"employees\",\"group\":\"1717136273468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"up_manager\",\"dataType\":\"link\",\"name\":\"Верхнеуровневый руководитель/Директор департамента\",\"id\":\"66111717611097029\",\"link\":\"employees\",\"group\":\"1717136273468\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":39,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"position\",\"dataType\":\"string\",\"name\":\"Должность\",\"id\":\"68721715676198986\",\"link\":null,\"group\":\"1717136273468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"cost_center\",\"dataType\":\"string\",\"name\":\"Кост-центр\",\"id\":\"68901715676530998\",\"link\":null,\"group\":\"1717136273468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":19,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"resigning_empl_full_name\",\"dataType\":\"link\",\"name\":\"ФИО заменяемого сотрудника\",\"id\":\"72911715692442960\",\"link\":\"employees\",\"group\":\"1717136273468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"probation\",\"dataType\":\"string\",\"name\":\"Испытательный период\",\"id\":\"77291715676484957\",\"link\":null,\"group\":\"1717136273468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":16,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"vacancy_id\",\"dataType\":\"string\",\"name\":\"ID вакансии (из Optimacros)\",\"id\":\"78501715676487437\",\"link\":null,\"group\":\"1717136273468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":18,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"offer_period_bonus\",\"dataType\":\"link\",\"name\":\"Периодичность выплаты в Lamoda\",\"id\":\"78861717102532940\",\"link\":\"period_bonus\",\"group\":\"1717136273468\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":30,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"cnb\",\"dataType\":\"link\",\"name\":\"C&B\",\"id\":\"79741717610837855\",\"link\":\"employees\",\"group\":\"1717136273468\",\"tags\":\"\",\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":35,\"linkIndexFieldSysName\":[\"webuser_id\"],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"cr\",\"dataType\":\"string\",\"name\":\"CR (только для TECH)\",\"id\":\"82611715677377022\",\"link\":null,\"group\":\"1717136273468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":33,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"name_position\",\"dataType\":\"string\",\"name\":\"Name position\",\"id\":\"83421715676531827\",\"link\":null,\"group\":\"1717136273468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":20,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"country_city\",\"dataType\":\"string\",\"name\":\"Страна, город\",\"id\":\"83591715676107813\",\"link\":null,\"group\":\"1717136273468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"company_name\",\"dataType\":\"string\",\"name\":\"Название текущей компании\",\"id\":\"84321716235575717\",\"link\":\"\",\"group\":\"1717136273468\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":22,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"first_work_day\",\"dataType\":\"date\",\"name\":\"Предварительная дата выхода сотрудника\",\"id\":\"84761717610566294\",\"link\":\"\",\"group\":\"1717136273468\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.Y\",\"timeFormat\":\" \",\"isUTC\":\"false\"},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"offer_bonus\",\"dataType\":\"link\",\"name\":\"Премия Lamoda\",\"id\":\"86661718369709109\",\"link\":\"bonus\",\"group\":\"1717136273468\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":41,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"responsible_employee_id\",\"dataType\":\"link\",\"name\":\"Ответственный за текущий этап\",\"id\":\"89061718111406513\",\"link\":\"employees\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"current_period_bonus\",\"dataType\":\"link\",\"name\":\"Текущая периодичность выплаты\",\"id\":\"90641717102507302\",\"link\":\"period_bonus\",\"group\":\"1717136273468\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":29,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"date\",\"dataType\":\"date\",\"name\":\"Дата создания заявки\",\"id\":\"91361717138808760\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"manager\",\"dataType\":\"link\",\"name\":\"Руководитель\",\"id\":\"93801717611067099\",\"link\":\"employees\",\"group\":\"1717136273468\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":38,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"contract_type\",\"dataType\":\"link\",\"name\":\"Тип договора\",\"id\":\"94821715676273371\",\"link\":\"contract_type\",\"group\":\"1717136273468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"number\",\"dataType\":\"string\",\"name\":\"Номер заявки\",\"id\":\"95231716236207376\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false}]",
            "jsonGroupSettings": "[{\"name\":\"Поля\",\"id\":1717136273468,\"order\":0},{\"name\":\"Технические поля\",\"id\":1720080628323,\"order\":1}]",
            "jsonViewIdSettings": "[]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-07-03T20:49:51Z",
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
                "json": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            "folderId": 33811357
        },
        "99325495": {
            "networkID": 21335,
            "id": 99325495,
            "dateCreated": "2024-05-14T13:20:27Z",
            "hidden": false,
            "dateHidden": null,
            "name": "company",
            "sysName": "company",
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
                "json": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            "folderId": 33811358
        },
        "99325498": {
            "networkID": 21335,
            "id": 99325498,
            "dateCreated": "2024-05-20T20:25:13Z",
            "hidden": false,
            "dateHidden": null,
            "name": "Statuses",
            "sysName": "statuses",
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"status\",\"dataType\":\"string\",\"name\":\"Cтатус\",\"id\":\"68061716237170513\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false}]",
            "jsonGroupSettings": "[]",
            "jsonViewIdSettings": "[{\"sysName\":\"status\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":false,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": false,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-06-05T19:58:06Z",
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
                "json": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            "folderId": 33811358
        },
        "99325499": {
            "networkID": 21335,
            "id": 99325499,
            "dateCreated": "2024-05-30T18:06:42Z",
            "hidden": false,
            "dateHidden": null,
            "name": "position",
            "sysName": "position",
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
                "json": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            "folderId": 33811358
        },
        "99325501": {
            "networkID": 21335,
            "id": 99325501,
            "dateCreated": "2024-05-30T21:03:22Z",
            "hidden": false,
            "dateHidden": null,
            "name": "period bonus",
            "sysName": "period_bonus",
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"period\",\"dataType\":\"string\",\"name\":\"Period\",\"id\":\"24611717103007739\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false}]",
            "jsonGroupSettings": "[]",
            "jsonViewIdSettings": "[]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-05-30T21:03:39Z",
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
                "json": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            "folderId": 33811358
        },
        "99325502": {
            "networkID": 21335,
            "id": 99325502,
            "dateCreated": "2024-05-31T06:25:03Z",
            "hidden": false,
            "dateHidden": null,
            "name": "Logs",
            "sysName": "logs",
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"text\",\"dataType\":\"string\",\"name\":\"Изменение заявки\",\"id\":\"13041717136793732\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"ticket\",\"dataType\":\"link\",\"name\":\"Номер заявки\",\"id\":\"45681717136838095\",\"link\":\"job_offers\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"date\",\"dataType\":\"date\",\"name\":\"Дата изменения\",\"id\":\"58751717136726535\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"user\",\"dataType\":\"link\",\"name\":\"Кто внес изменения\",\"id\":\"83101717136837464\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"date_display\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"87491717137718793\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false}]",
            "jsonGroupSettings": "[]",
            "jsonViewIdSettings": "[]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":false,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": false,
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
                "json": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            "folderId": 33811358
        },
        "99325504": {
            "networkID": 21335,
            "id": 99325504,
            "dateCreated": "2024-06-14T12:57:00Z",
            "hidden": false,
            "dateHidden": null,
            "name": "bonus",
            "sysName": "bonus",
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"bonus\",\"dataType\":\"string\",\"name\":\"Бонус\",\"id\":\"45161718369824627\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false}]",
            "jsonGroupSettings": "[]",
            "jsonViewIdSettings": "[{\"sysName\":\"bonus\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-06-14T12:57:29Z",
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
                "json": false,
                "typeVariable": {},
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
            "order": 21,
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
            "json": false,
            "typeVariable": {},
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
            "json": false,
            "typeVariable": {},
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
            "order": 9,
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
            "json": false,
            "typeVariable": {},
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
            "json": false,
            "typeVariable": {},
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
            "order": 12,
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
            "json": false,
            "typeVariable": {},
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
            "json": false,
            "typeVariable": {},
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
            "json": false,
            "typeVariable": {},
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
            "order": 8,
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
            "json": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "cr",
            "dataType": "string",
            "name": "CR (только для TECH)",
            "id": "82611715677377022",
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
            "json": false,
            "typeVariable": {},
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
            "order": 23,
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
            "json": false,
            "typeVariable": {},
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
            "json": false,
            "typeVariable": {},
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
            "order": 11,
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
            "json": false,
            "typeVariable": {},
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
            "json": false,
            "typeVariable": {},
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
            "order": 15,
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
            "json": false,
            "typeVariable": {},
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
            "json": false,
            "typeVariable": {},
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
            "order": 20,
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
            "json": false,
            "typeVariable": {},
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
            "order": 26,
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
            "json": false,
            "typeVariable": {},
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
            "order": 24,
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
            "json": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "offer_salary_bonus",
            "dataType": "string",
            "name": "Ежемесячный оклад в Lamoda",
            "id": "15821715677132698",
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
            "json": false,
            "typeVariable": {},
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
            "json": false,
            "typeVariable": {},
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
            "order": 16,
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
            "json": false,
            "typeVariable": {},
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
            "json": false,
            "typeVariable": {},
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
            "order": 3,
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
            "json": false,
            "typeVariable": {},
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
            "order": 5,
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
            "json": false,
            "typeVariable": {},
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
            "order": 22,
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
            "json": false,
            "typeVariable": {},
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
            "json": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "status",
            "dataType": "link",
            "name": "Cтатус",
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
            "json": false,
            "typeVariable": {},
            "indexExists": true,
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
            "json": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "offer_bonus_amount",
            "dataType": "string",
            "name": "Размер премии в Lamoda",
            "id": "14291717102608159",
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
            "json": false,
            "typeVariable": {},
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
            "order": 31,
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
            "json": false,
            "typeVariable": {},
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
            "order": 13,
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
            "json": false,
            "typeVariable": {},
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
            "order": 14,
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
            "json": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "offer_period_bonus",
            "dataType": "link",
            "name": "Периодичность выплаты в Lamoda",
            "id": "78861717102532940",
            "link": "period_bonus",
            "group": "1717136273468",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 30,
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
            "json": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "current_period_bonus",
            "dataType": "link",
            "name": "Текущая периодичность выплаты",
            "id": "90641717102507302",
            "link": "period_bonus",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "json": false,
            "typeVariable": {},
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
            "json": false,
            "typeVariable": {},
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
            "json": false,
            "typeVariable": {},
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
            "json": false,
            "typeVariable": {},
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
            "json": false,
            "typeVariable": {},
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
            "json": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "up_manager",
            "dataType": "link",
            "name": "Верхнеуровневый руководитель/Директор департамента",
            "id": "66111717611097029",
            "link": "employees",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "json": false,
            "typeVariable": {},
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
            "json": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "budget_holder",
            "dataType": "link",
            "name": "Держатель бюджета",
            "id": "45251717611164564",
            "link": "employees",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "json": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "manager",
            "dataType": "link",
            "name": "Руководитель",
            "id": "93801717611067099",
            "link": "employees",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "json": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "cnb",
            "dataType": "link",
            "name": "C&B",
            "id": "79741717610837855",
            "link": "employees",
            "group": "1717136273468",
            "tags": "",
            "indexing": true,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 35,
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
            "json": false,
            "typeVariable": {},
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
            "order": 34,
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
            "json": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "hr_bp",
            "dataType": "link",
            "name": "HR BP",
            "id": "15621717611052206",
            "link": "employees",
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
            "json": false,
            "typeVariable": {},
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
            "json": false,
            "typeVariable": {},
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
            "json": false,
            "typeVariable": {},
            "indexExists": true,
            "array": false
        },
        {
            "sysName": "initial_step",
            "dataType": "string",
            "name": "",
            "id": "61681718370382220",
            "link": null,
            "group": "1717136273468",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 42,
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
            "json": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "offer_bonus",
            "dataType": "link",
            "name": "Премия Lamoda",
            "id": "86661718369709109",
            "link": "bonus",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "json": false,
            "typeVariable": {},
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
            "json": false,
            "typeVariable": {},
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
            "json": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "current_bonus",
            "dataType": "link",
            "name": "Текущая премия",
            "id": "41941718369676191",
            "link": "bonus",
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
            "formatOptions": {},
            "groupName": null,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "json": false,
            "typeVariable": {},
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
            "json": false,
            "typeVariable": {},
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
            "json": false,
            "typeVariable": {},
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
            "json": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        }
    ],
    "quickSearch": null,
    "httpParams": null,
    "cardCustomHtml": null,
    "cardCustomLayout": null,
    "comment": "",
    "response": false
}

let authExample = {
  "isAuth": true,
  "custom_labels": "{\n   \"foo\": \"hello brave new world!\",\n   \"bar\": \"foobar\"\n}",
  "role": "jo_consultant,jo_recruiter,jo_cnb",
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
    data: exampleForm,
    auth: authExample,
    locale: 'ESP',
    onChange: value => console.log(value),
  },
};
