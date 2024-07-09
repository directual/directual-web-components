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
    "sl": "create_new_order2",
    "pageSize": "10",
    "headerField": null,
    "params": {
        "steps": [
            {
                "id": "step_1718919125411",
                "sysName": "progress",
                "elements": [
                    {
                        "id": "elmnt_1718919164059",
                        "type": "steps",
                        "_formSteps": {
                            "stepsOrder": [
                                "Данные заявки",
                                "Данные Физлицо",
                                "Данные Юрлицо",
                                "Добавьте Физлицо",
                                "Добавьте Юрлицо",
                                "Данные учеников",
                                "submitted"
                            ],
                            "settings": {
                                "steps": {
                                    "progress": false,
                                    "Данные заявки 1": true,
                                    "Добавьте физлицо": true,
                                    "Данные учеников": true,
                                    "submitted": true,
                                    "Данные заявки 1_copy": true,
                                    "Данные заявки 2": true,
                                    "Данные заявки": true,
                                    "Данные Физлицо": true,
                                    "Данные Юрлицо": true,
                                    "Добавьте Физлицо": true,
                                    "Добавьте Юрлицо": true
                                }
                            },
                            "stepSettings": {
                                "submitted": {
                                    "title": "Заявка заполнена!"
                                }
                            }
                        }
                    }
                ],
                "sectionVisibility": "always"
            },
            {
                "id": "default_step",
                "sysName": "Данные заявки",
                "elements": [
                    {
                        "id": "elmnt_1719865420139",
                        "type": "hint",
                        "hintColor": "ok",
                        "hintTitle": "Информация о заявке",
                        "hintText": "Воркспейс: <b>{{order_clientWorkspace}}</b><br>\nКлиент: <b>{{order_client}}</b>"
                    },
                    {
                        "id": "elmnt_1718917619143",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189176316820.22323440432201343210313",
                                "_field": "order_learn_option",
                                "_field_link_type": "radio",
                                "_field_link_reset": false,
                                "_field_link_saveQuantity": false,
                                "_field_link_saveQuantity_Field": "FormSate.step",
                                "_field_link_radio_layout": "horizontal",
                                "_field_arrayLink_endpoint": "ddLearn_option",
                                "_input_type": "object",
                                "_field_arrayLink_tags_width": null,
                                "_field_required": true,
                                "_field_set_default": false,
                                "_field_default_value": ""
                            },
                            {
                                "id": "17189873953300.31302432413033341220402",
                                "_field": "order_type",
                                "_field_link_type": "radio",
                                "_field_arrayLink_endpoint": "ddFrom_who_order",
                                "_field_required": true,
                                "_field_set_default": true,
                                "_field_default_value": "fl"
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": [
                            {
                                "id": "condition_1718920281378"
                            }
                        ],
                        "_input_fields_in_a_row": 2,
                        "_input_fields_in_a_row_column": "row"
                    },
                    {
                        "id": "elmnt_1719744545385",
                        "type": "subheader",
                        "subheaderTitle": "ШАГ ФОРМЫ"
                    },
                    {
                        "id": "elmnt_1718971220432",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17189712233100.23023432244134334111034",
                                "_action": "action_1718976592375",
                                "_action_icon": "history",
                                "_conditionalView": true,
                                "_action_conditional_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718971245118",
                                        "_conditionalView_field": "FormState.step",
                                        "_conditionalView_operator": "modelNotChanged",
                                        "_conditionalView_value": "Данные заявки"
                                    }
                                ],
                                "_action_button_type": "danger",
                                "_action_customRequired": false
                            },
                            {
                                "id": "17189759038350.33330244412331402442",
                                "_action": "action_1718971204943",
                                "_conditionalView": true,
                                "_action_conditional_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718984448353",
                                        "_conditionalView_field": "FormState.step",
                                        "_conditionalView_operator": "==",
                                        "_conditionalView_value": "Данные заявки"
                                    }
                                ],
                                "_action_icon": "arrowLeft",
                                "_action_button_type": "normal",
                                "_action_customRequired": false,
                                "_action_customRequired_fields": [
                                    "order_type",
                                    "order_learn_option"
                                ]
                            },
                            {
                                "id": "17189843501560.030311342044401420421222",
                                "_action": "action_1718972060623",
                                "_action_icon": "arrowRight",
                                "_conditionalView": false,
                                "_action_customRequired": true,
                                "_action_customRequired_fields": [
                                    "order_learn_option",
                                    "order_type"
                                ],
                                "_action_button_type": "accent",
                                "_action_label": "вперед (на шаг 2)"
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": [
                            {
                                "id": "condition_1718971370519",
                                "_conditionalView_field": "FormState.step",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "Данные заявки"
                            }
                        ],
                        "_actions_in_a_row": 3
                    }
                ]
            },
            {
                "id": "step_copy_1719213047844",
                "sysName": "Данные Физлицо",
                "elements": [
                    {
                        "id": "elmnt_1718917619143",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189176316820.22323440432201343210313",
                                "_field": "order_contragent",
                                "_field_link_type": "complexSelect",
                                "_field_link_reset": true,
                                "_field_link_saveQuantity": false,
                                "_field_link_saveQuantity_Field": "FormSate.step",
                                "_field_link_radio_layout": "horizontal",
                                "_field_arrayLink_endpoint": "dd_order2_contragents",
                                "_input_type": "object",
                                "_field_arrayLink_tags_width": null,
                                "_field_required": true,
                                "_field_set_default": false,
                                "_field_default_value": "",
                                "_field_arrayLink_endpoint_params": {
                                    "contragent_clientWorkspace": "order_clientWorkspace"
                                },
                                "_conditionalView": false,
                                "_conditions": [
                                    {
                                        "id": "condition_1719778342177"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": [
                            {
                                "id": "condition_1718920281378"
                            }
                        ],
                        "_input_fields_in_a_row": 1,
                        "_input_fields_in_a_row_column": "row"
                    },
                    {
                        "id": "elmnt_1719213455245",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17192134586550.23212244210203144413432",
                                "_action": "action_copy_1718983331235",
                                "_action_icon": "edit",
                                "_action_button_type": "normal",
                                "_action_customRequired": false,
                                "_conditionalView": false,
                                "_action_conditional_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1719213534170",
                                        "_conditionalView_field": "order_contragent",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ],
                        "_actions_in_a_row": 1
                    },
                    {
                        "id": "elmnt_1719612111616",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17196121238410.11234231411440134124321",
                                "_field": "order_adress",
                                "_field_link_type": "complexSelect",
                                "_field_link_reset": true,
                                "_field_arrayLink_endpoint": "dd_orders2_adresses",
                                "_field_arrayLink_endpoint_params": {
                                    "adress_clientWorkspace": "order_clientWorkspace"
                                }
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1719612114460",
                        "type": "action",
                        "_input_fields": [
                            {
                                "id": "17196122489850.034211130212304244113033",
                                "_field": "order_adress"
                            }
                        ],
                        "_actions": [
                            {
                                "id": "17196127656230.20031441340320033204112",
                                "_action": "action_1719740259137",
                                "_action_button_type": "normal",
                                "_action_icon": "edit",
                                "_conditionalView": false,
                                "_action_conditional_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1719740334755",
                                        "_conditionalView_field": "order_adress",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1719612874522",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17196128788390.013124332101234012013243",
                                "_field": "order_email",
                                "_field_required": true
                            },
                            {
                                "id": "17196128886660.200442233401324422200043",
                                "_field": "order_phone",
                                "_field_required": true
                            }
                        ],
                        "_input_fields_in_a_row": 2
                    },
                    {
                        "id": "elmnt_1719744498221",
                        "type": "subheader",
                        "subheaderTitle": "ШАГ ФОРМЫ"
                    },
                    {
                        "id": "elmnt_1718971220432",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17189712233100.23023432244134334111034",
                                "_action": "action_1718976592375",
                                "_action_icon": "history",
                                "_conditionalView": true,
                                "_action_conditional_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718971245118",
                                        "_conditionalView_field": "FormState.step",
                                        "_conditionalView_operator": "modelNotChanged",
                                        "_conditionalView_value": "Данные заявки"
                                    }
                                ],
                                "_action_button_type": "danger",
                                "_action_customRequired": false
                            },
                            {
                                "id": "17189759038350.33330244412331402442",
                                "_action": "action_1718971204943",
                                "_conditionalView": true,
                                "_action_conditional_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718984448353",
                                        "_conditionalView_field": "FormState.step",
                                        "_conditionalView_operator": "==",
                                        "_conditionalView_value": "Данные заявки 1"
                                    }
                                ],
                                "_action_icon": "arrowLeft",
                                "_action_button_type": "normal",
                                "_action_customRequired": false,
                                "_action_customRequired_fields": [
                                    "order_type",
                                    "order_learn_option"
                                ]
                            },
                            {
                                "id": "17189843501560.030311342044401420421222",
                                "_action": "action_1719523945655",
                                "_action_icon": "arrowRight",
                                "_conditionalView": false,
                                "_action_customRequired": true,
                                "_action_customRequired_fields": [
                                    "order_contragent",
                                    "order_adress",
                                    "order_email",
                                    "order_phone"
                                ],
                                "_action_button_type": "accent",
                                "_action_conditional_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1719213390876",
                                        "_conditionalView_field": "order_contragent",
                                        "_conditionalView_operator": "isNull"
                                    }
                                ]
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": [
                            {
                                "id": "condition_1718971370519",
                                "_conditionalView_field": "FormState.step",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "Данные заявки"
                            }
                        ],
                        "_actions_in_a_row": 3
                    }
                ]
            },
            {
                "id": "step_1718982188025",
                "sysName": "Добавьте Физлицо",
                "elements": [
                    {
                        "id": "elmnt_1719242128456",
                        "type": "text",
                        "paraText": "<h3>Добавьте Физлицо</h3>",
                        "subheaderTitle": "Добавьте Физлицо"
                    },
                    {
                        "id": "elmnt_1718982210258",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189822127550.40311300022200444340242",
                                "_field": "fl_fio",
                                "_field_link_type": "input",
                                "_field_use_mask": false,
                                "_field_required": true,
                                "_field_set_default": false,
                                "_field_add_description": true,
                                "_field_description_text": "<i>Например, Иванов Иван Иванович</i>"
                            },
                            {
                                "id": "17192409221990.42044432120342410244242",
                                "_field": "fl_passport_series",
                                "_field_required": true,
                                "_field_add_description": true,
                                "_field_description_text": "<i>4 цифры</i>"
                            },
                            {
                                "id": "17192409248630.12101304123022040244032",
                                "_field": "fl_passport_number",
                                "_field_required": true,
                                "_field_add_description": true,
                                "_field_description_text": "<i>6 цифр</i>"
                            },
                            {
                                "id": "17192420680100.0440014333400221302403",
                                "_field": "fl_birthday",
                                "_field_required": true
                            }
                        ],
                        "_input_fields_in_a_row": 4,
                        "_input_fields_in_a_row_column": "column"
                    },
                    {
                        "id": "elmnt_1719241325923",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17192413289810.33440103300134014404243",
                                "_action": "action_1719399768212",
                                "_action_icon": "done",
                                "_action_customRequired": true,
                                "_action_customRequired_fields": [
                                    "fl_fio",
                                    "fl_passport_series",
                                    "fl_passport_number",
                                    "fl_birthday"
                                ],
                                "_conditionalView": true,
                                "_action_conditional_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1719241436773",
                                        "_conditionalView_field": "fl_fio",
                                        "_conditionalView_operator": "isNull"
                                    },
                                    {
                                        "id": "condition_1719241442506",
                                        "_conditionalView_field": "fl_passport_number",
                                        "_conditionalView_operator": "isNull"
                                    },
                                    {
                                        "id": "condition_1719241451545",
                                        "_conditionalView_field": "fl_passport_series",
                                        "_conditionalView_operator": "isNull"
                                    },
                                    {
                                        "id": "condition_1719354240322",
                                        "_conditionalView_field": "fl_birthday",
                                        "_conditionalView_operator": "isNull"
                                    }
                                ],
                                "_action_label": "сохранить физлицо"
                            },
                            {
                                "id": "17193989167370.2142234020020422402022",
                                "_action": "action_1719241562224",
                                "_action_button_type": "danger",
                                "_action_label": "закрыть окно без сохранения"
                            }
                        ],
                        "_actions_in_a_row": 2
                    }
                ]
            },
            {
                "id": "step_1719781761740",
                "sysName": "Добавьте Адрес доставки",
                "elements": [
                    {
                        "id": "elmnt_1719781790986",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17197818014980.012343024420124133021123",
                                "_field": "order_adress_string",
                                "_field_required": true,
                                "_field_use_mask": false
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1719781841828",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17197818442850.4441123302410024123113",
                                "_action": "action_1719781865504",
                                "_action_icon": "done",
                                "_conditionalView": true,
                                "_action_conditional_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1719782134984",
                                        "_conditionalView_operator": "isNull",
                                        "_conditionalView_field": "order_adress_string"
                                    }
                                ],
                                "_action_customRequired": true,
                                "_action_customRequired_fields": [
                                    "order_adress_string"
                                ]
                            },
                            {
                                "id": "17197820646040.4130130424412414013201",
                                "_action": "action_1719241562224",
                                "_action_icon": "close",
                                "_action_button_type": "danger",
                                "_action_label": "закрыть окно без сохранения"
                            }
                        ],
                        "_actions_in_a_row": 2
                    }
                ]
            },
            {
                "id": "step_copy_1718987738098",
                "sysName": "Данные Юрлицо",
                "elements": [
                    {
                        "id": "elmnt_1718917619143",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189176316820.22323440432201343210313",
                                "_field": "order_contragent",
                                "_field_link_type": "select",
                                "_field_link_reset": true,
                                "_field_link_saveQuantity": false,
                                "_field_link_saveQuantity_Field": "FormSate.step",
                                "_field_link_radio_layout": "horizontal",
                                "_field_arrayLink_endpoint": "dd_order2_contragents",
                                "_input_type": "object",
                                "_field_arrayLink_tags_width": null,
                                "_field_required": true,
                                "_field_set_default": false,
                                "_field_default_value": ""
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": [
                            {
                                "id": "condition_1718920281378"
                            }
                        ],
                        "_input_fields_in_a_row": 1,
                        "_input_fields_in_a_row_column": "row"
                    },
                    {
                        "id": "elmnt_1718971220432",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17189712233100.23023432244134334111034",
                                "_action": "action_1718976592375",
                                "_action_icon": "history",
                                "_conditionalView": true,
                                "_action_conditional_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718971245118",
                                        "_conditionalView_field": "FormState.step",
                                        "_conditionalView_operator": "modelNotChanged",
                                        "_conditionalView_value": "Данные заявки"
                                    }
                                ],
                                "_action_button_type": "danger",
                                "_action_customRequired": false
                            },
                            {
                                "id": "17189759038350.33330244412331402442",
                                "_action": "action_1718971204943",
                                "_conditionalView": true,
                                "_action_conditional_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1718984448353",
                                        "_conditionalView_field": "FormState.step",
                                        "_conditionalView_operator": "==",
                                        "_conditionalView_value": "Данные заявки 1"
                                    }
                                ],
                                "_action_icon": "arrowLeft",
                                "_action_button_type": "normal",
                                "_action_customRequired": false,
                                "_action_customRequired_fields": [
                                    "order_type",
                                    "order_learn_option"
                                ]
                            },
                            {
                                "id": "17189843501560.030311342044401420421222",
                                "_action": "action_1718972060623",
                                "_action_icon": "arrowRight",
                                "_conditionalView": false,
                                "_action_customRequired": true,
                                "_action_customRequired_fields": [
                                    "order_learn_option"
                                ],
                                "_action_button_type": "accent"
                            }
                        ],
                        "_conditionalView": false,
                        "_conditions": [
                            {
                                "id": "condition_1718971370519",
                                "_conditionalView_field": "FormState.step",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "Данные заявки"
                            }
                        ],
                        "_actions_in_a_row": 3
                    }
                ]
            },
            {
                "id": "step_copy_1719213280827",
                "sysName": "Добавьте Юрлицо",
                "elements": [
                    {
                        "id": "elmnt_1718982210258",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17189822127550.40311300022200444340242",
                                "_field": "id"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "step_1718971658040",
                "sysName": "Данные учеников",
                "sectionVisibility": "custom",
                "elements": [
                    {
                        "id": "elmnt_1719524089754",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17195240939290.31003421124021030334224",
                                "_field": "order_date_end",
                                "_field_required": true
                            }
                        ],
                        "_input_fields_in_a_row": 1,
                        "_input_fields_in_a_row_column": "row",
                        "_conditionalView": false,
                        "_conditions": [
                            {
                                "id": "condition_1719849317879"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1719849378291",
                        "type": "hint",
                        "hintTitle": "Дата начала обучения рассчитается автоматически и появится ниже после сохранения студентов с курсами",
                        "hintText": "{{order_date_start}}"
                    },
                    {
                        "id": "elmnt_1719852383464",
                        "type": "subheader",
                        "subheaderTitle": "Добавить студента"
                    },
                    {
                        "id": "elmnt_1719865363080",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17198653697020.31034343341041112310121",
                                "_field": "order_student_Link",
                                "_field_link_type": "complexSelect",
                                "_field_link_reset": true,
                                "_field_arrayLink_endpoint": "dd_students",
                                "_field_required": false,
                                "_field_arrayLink_endpoint_params": {
                                    "student_clientWorkspace": "order_clientWorkspace"
                                }
                            }
                        ],
                        "_input_fields_in_a_row": 1
                    },
                    {
                        "id": "elmnt_1719908380084",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17199083888470.31124010244420123010213",
                                "_action": "action_1719908409488",
                                "_action_icon": "plus",
                                "_conditionalView": false,
                                "_action_conditional_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1719908848660",
                                        "_conditionalView_field": "order_student_Link",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_action_label": "Добавить / редактировать студента и его доступ"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1719867313871",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17198673228340.44313124413332214221103",
                                "_field": "order_courses2_arrayLink",
                                "_field_arrayLink_type": "select",
                                "_field_arrayLink_endpoint": "dd_courses2"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1720108949936",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17201089543470.032130110101340441033014",
                                "_action": "action_1720123876703",
                                "_action_icon": "plus",
                                "_action_customRequired": true,
                                "_action_customRequired_fields": [
                                    "order_student_Link",
                                    "order_courses2_arrayLink"
                                ],
                                "_conditionalView": true,
                                "_action_conditional_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1720124258893",
                                        "_conditionalView_field": "order_student_Link",
                                        "_conditionalView_operator": "isNull"
                                    },
                                    {
                                        "id": "condition_1720124283723",
                                        "_conditionalView_field": "order_courses2_arrayLink",
                                        "_conditionalView_operator": "isNull"
                                    }
                                ],
                                "_action_conditionals_and_or": "OR",
                                "_action_label": "Добавить ученика с курсами в заявку",
                                "_action_button_type": "accent"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1720181127059",
                        "type": "hint",
                        "hintColor": "useTemplating",
                        "hintTemplating": "student_with_courses_add_message_true",
                        "hintTitle": "Статус добавления курсов и студента {{student_fio}}",
                        "hintText": "{{student_with_courses_add_message}}",
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1720181534474",
                                "_conditionalView_field": "student_with_courses_add_message_true",
                                "_conditionalView_operator": "isNotNull"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1719850012697",
                        "type": "subheader",
                        "subheaderTitle": "ШАГ ФОРМЫ"
                    },
                    {
                        "id": "elmnt_1718972170600",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17189721732770.3210442411432104414002",
                                "_action": "action_1718976592375",
                                "_action_icon": "history",
                                "_conditionalView": true,
                                "_action_conditional_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1719524269627",
                                        "_conditionalView_field": null,
                                        "_conditionalView_operator": "modelNotChanged"
                                    }
                                ],
                                "_action_button_type": "danger"
                            },
                            {
                                "id": "17195242964090.1434011202102441223323",
                                "_action": "action_copy_1719524150369",
                                "_action_icon": "arrowLeft"
                            },
                            {
                                "id": "17195242970420.20233202421040440400321",
                                "_action": "action_1719850334271",
                                "_action_icon": "done",
                                "_action_button_type": "accent",
                                "_action_customRequired": true,
                                "_action_customRequired_fields": [
                                    "order_date_start"
                                ]
                            }
                        ],
                        "_actions_in_a_row": 3
                    }
                ]
            },
            {
                "id": "step_1719908525315",
                "sysName": "Добавьте студента",
                "elements": [
                    {
                        "id": "elmnt_1719909183494",
                        "type": "text",
                        "paraText": "<h3>Добавьте студента</h3>"
                    },
                    {
                        "id": "elmnt_1719908546287",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17199085492640.23223013034312210224312",
                                "_field": "student_access",
                                "_field_required": true,
                                "_field_set_default": false,
                                "_field_default_value": "true"
                            },
                            {
                                "id": "17199093905930.43421100210224014430034",
                                "_field": "student_email",
                                "_conditionalView": true,
                                "_field_set_default": true,
                                "_field_default_value": "-",
                                "_conditionalView_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1719909410959",
                                        "_conditionalView_field": "student_access",
                                        "_conditionalView_operator": "!==",
                                        "_conditionalView_value": "true"
                                    }
                                ],
                                "_field_add_description": true,
                                "_field_description_text": "Введите корректный email, чтобы студенту пришел доступ",
                                "_field_use_mask": false
                            }
                        ],
                        "_input_fields_in_a_row": 2
                    },
                    {
                        "id": "elmnt_1719909570497",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17199095738200.4240114034320434240121",
                                "_field": "student_fio",
                                "_field_required": true
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1719909629840",
                        "type": "input",
                        "_actions": [
                            {
                                "id": "17199096363930.024423443041141412440014",
                                "_action": null
                            }
                        ],
                        "_input_fields": [
                            {
                                "id": "17199096498060.3011140302104123303012",
                                "_field": "student_job_title",
                                "_field_link_type": "select",
                                "_field_link_reset": true,
                                "_field_arrayLink_endpoint": "dd_students_job_titles",
                                "_field_arrayLink_endpoint_params": {
                                    "st_jobTitte_wp": "order_clientWorkspace"
                                },
                                "_field_required": true,
                                "_field_set_default": true,
                                "_field_default_value": "-"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1719910010570",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17199102102360.412213112244141121213",
                                "_action": "action_1719910218438",
                                "_action_icon": "plus",
                                "_conditionalView": false,
                                "_action_conditional_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1719910723951",
                                        "_conditionalView_field": "student_job_title",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1720099536851",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17200995413430.03242001012220203322134",
                                "_field": "student_date_of_birth"
                            },
                            {
                                "id": "17200995427360.44033002130420010012314",
                                "_field": "student_snils"
                            }
                        ],
                        "_input_fields_in_a_row": 2,
                        "_input_fields_in_a_row_column": "row"
                    },
                    {
                        "id": "elmnt_1720099655855",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17200996619770.14032233232410112343",
                                "_field": "student_gender"
                            },
                            {
                                "id": "17200996638600.42421010243441001042442",
                                "_field": "student_edu_level_json"
                            }
                        ],
                        "_input_fields_in_a_row": 2
                    },
                    {
                        "id": "elmnt_1719910026939",
                        "type": "subheader",
                        "subheaderTitle": "КНОПКИ УПРАВЛЕНИЯ ОКНОМ"
                    },
                    {
                        "id": "elmnt_1719908564854",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17199085681360.21330203112414102414311",
                                "_action": "action_1719908781616",
                                "_action_icon": "done",
                                "_action_customRequired": true,
                                "_conditionalView": false,
                                "_action_conditional_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1719908710122",
                                        "_conditionalView_field": "order_student_Link",
                                        "_conditionalView_operator": "isNotNull"
                                    }
                                ],
                                "_action_customRequired_fields": [
                                    "student_access"
                                ]
                            },
                            {
                                "id": "17199088798740.20014004213022341420044",
                                "_action": "action_copy_1719908995017",
                                "_action_icon": "close",
                                "_action_label": "закрыть окно без сохранения",
                                "_action_button_type": "danger"
                            }
                        ],
                        "_actions_in_a_row": 2
                    }
                ]
            },
            {
                "id": "step_1719910325961",
                "sysName": "Добавьте должность",
                "elements": [
                    {
                        "id": "elmnt_1719910331923",
                        "type": "text",
                        "paraText": "<h3>Добавьте должность</h3>"
                    },
                    {
                        "id": "elmnt_1719910357862",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17199103602820.33042024144234314311422",
                                "_field": "student_job_title_string",
                                "_field_required": true,
                                "_field_add_description": true,
                                "_field_description_text": "<i>введите должность без пробелов вначале и в конце и без кавычек</i>"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1719910991988",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17199109937950.41330113221331443344421",
                                "_action": "action_1719911377136",
                                "_action_icon": "done",
                                "_action_customRequired": true,
                                "_action_customRequired_fields": [
                                    "student_job_title_string"
                                ],
                                "_conditionalView": true,
                                "_action_conditional_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1719911533694",
                                        "_conditionalView_field": "student_job_title_string",
                                        "_conditionalView_operator": "isNull"
                                    }
                                ],
                                "_action_button_type": "accent"
                            },
                            {
                                "id": "17199109954800.42110112023111420332322",
                                "_action": "action_1719910877950",
                                "_action_label": "Закрыть без сохранения",
                                "_action_icon": "close",
                                "_action_button_type": "danger"
                            }
                        ],
                        "_actions_in_a_row": 2
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
                        "hintTitle": "Заявка {{id}} сохранена ",
                        "hintText": "<br>\nСправа список учеников с курсами 👉<br>\nСсылка на документы: {{order_document_url}}<br>\nДата последней генерации: {{order_document_date_update}}<br> ",
                        "hintTextRaw": true,
                        "hintTitleRaw": true
                    },
                    {
                        "id": "elmnt_1720433916230",
                        "type": "text",
                        "paraText": "<h3>Заявка {{id}} сохранена</h3>\n<br>\nСправа список учеников с курсами 👉<br>\nСсылка на документы: {{order_document_url}}<br>\nДата последней генерации: {{order_document_date_update}}<br>",
                        "paraRaw": true
                    },
                    {
                        "id": "elmnt_1720425756161",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17204257580680.42312044132301321044442",
                                "_action": "action_1718976592375",
                                "_action_icon": "refresh",
                                "_action_button_type": "accent",
                                "_conditionalView": true,
                                "_action_conditional_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1720427160652",
                                        "_conditionalView_field": "order_document_update_allowed",
                                        "_conditionalView_operator": "modelNotChanged",
                                        "_conditionalView_value": "true"
                                    }
                                ]
                            },
                            {
                                "id": "17204277486770.012223300212003220203003",
                                "_action": "action_1720427840111",
                                "_action_icon": "arrowLeft"
                            },
                            {
                                "id": "17204277488390.23413003114400340232324",
                                "_action": "action_1720425768505",
                                "_action_button_type": "accent",
                                "_action_icon": "gates",
                                "_conditionalView": true,
                                "_action_conditional_disable_or_hide": "disable",
                                "_conditions": [
                                    {
                                        "id": "condition_1720427779890",
                                        "_conditionalView_field": "order_document_update_allowed",
                                        "_conditionalView_operator": "!==",
                                        "_conditionalView_value": "true"
                                    }
                                ]
                            }
                        ],
                        "_actions_in_a_row": 3
                    }
                ]
            }
        ],
        "general": {
            "closePopupOnClick": false,
            "showModel": true,
            "showState": true,
            "autosubmit": "steps",
            "saveState": true,
            "edittingOn": true,
            "saveStateTo": "order_state",
            "restoreState": true,
            "autosubmit_model": null,
            "showFullModel": true,
            "showAuthModel": true,
            "autosubmit_steps": "Данные заявки,Данные Физлицо,Данные учеников"
        },
        "form_title": "Заявка {{id}}",
        "state": {
            "step": "Данные заявки",
            "popup": ""
        },
        "actions": [
            {
                "id": "action_1718971204943",
                "name": "назад к шагу 1",
                "discardModel": false,
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1718972047205",
                        "field": "FormState.step",
                        "value": "Данные заявки"
                    }
                ]
            },
            {
                "id": "action_1718972060623",
                "name": "вперед (на шаг 2 Физлицо)",
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1718972111377",
                        "field": "FormState.step",
                        "value": "Данные Физлицо"
                    }
                ],
                "actionSubmit": false
            },
            {
                "id": "action_1718976592375",
                "name": "сбросить изменения",
                "discardModel": true
            },
            {
                "id": "action_copy_1718983331235",
                "name": "добавить / редактировать физлицо",
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1718982249617",
                        "field": "FormState.popup",
                        "value": "Добавьте Физлицо",
                        "value_raw": false
                    }
                ]
            },
            {
                "id": "action_1719241562224",
                "name": "закрыть попап",
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1719241585230",
                        "field": "FormState.step",
                        "value": "Данные {{order_type.from_who_title}}"
                    },
                    {
                        "id": "stateMapping1719245745557",
                        "field": "FormState.popup"
                    }
                ]
            },
            {
                "id": "action_1719399768212",
                "name": "сохранить фл",
                "actionType": "endpoint",
                "endpoint": "allUsersRequests",
                "mapping": [
                    {
                        "id": "mapping_1719399782453",
                        "field": "requestType",
                        "value": "contragent_fl_create"
                    },
                    {
                        "id": "mapping_1719399793351",
                        "field": "requestBody",
                        "value": "{\n\t\"order_id\": \"{{id}}\",\n    \"fl_fio\": \"{{fl_fio}}\",\n\"fl_passport_series\":\"{{fl_passport_series}}\",\t\"fl_passport_number\":\"{{fl_passport_number}}\",    \n\t\"fl_birthday\":\"{{fl_birthday}}\",\n    \"contragent_client\":\"{{order_client}}\",\n    \"workspace\":\"{{order_clientWorkspace}}\"\n}"
                    }
                ]
            },
            {
                "id": "action_1719523945655",
                "name": "вперед (на шаг 3)",
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1719523986420",
                        "field": "FormState.step",
                        "value": "Данные учеников"
                    }
                ]
            },
            {
                "id": "action_copy_1719524150369",
                "name": "назад к шагу 2",
                "discardModel": false,
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1718972047205",
                        "field": "FormState.step",
                        "value": "Данные {{order_type.from_who_title}}"
                    }
                ]
            },
            {
                "id": "action_1719740259137",
                "name": "добавить / редактировать адрес",
                "actionType": "state",
                "endpoint": "allUsersRequests",
                "stateMapping": [
                    {
                        "id": "stateMapping1719781959395",
                        "field": "FormState.popup",
                        "value": "Добавьте Адрес доставки"
                    }
                ]
            },
            {
                "id": "action_1719744567915",
                "name": "Подтвердить контакты"
            },
            {
                "id": "action_1719781865504",
                "name": "Сохранить адрес",
                "actionType": "endpoint",
                "endpoint": "allUsersRequests",
                "mapping": [
                    {
                        "id": "mapping_1719782350475",
                        "field": "requestBody",
                        "value": "{\n\t\"order_id\": \"{{id}}\",\n    \"adress_string\": \"{{order_adress_string}}\",\n\"adress_workspace\":\"{{order_clientWorkspace}}\",\n\t\"client\":\"{{order_client}}\"\n}"
                    },
                    {
                        "id": "mapping_1719782360055",
                        "field": "requestType",
                        "value": "adress_create"
                    }
                ],
                "sendModel": false
            },
            {
                "id": "action_1719850334271",
                "name": "Сохранить заявку",
                "actionSubmit": true,
                "actionType": "endpoint",
                "stateMapping": [
                    {
                        "id": "stateMapping1720427234948",
                        "field": "FormState.step",
                        "value": "submitted"
                    }
                ],
                "endpoint": "allUsersRequests",
                "mapping": [
                    {
                        "id": "mapping_1720434410925",
                        "field": "requestType",
                        "value": "order2_submitted"
                    },
                    {
                        "id": "mapping_1720434415215",
                        "field": "requestBody",
                        "value": "{\n\t\"order_id\": \"{{id}}\",\n\"workspace\":\"{{order_clientWorkspace}}\",\n\t\"client\":\"{{order_client}}\",\n    \"submitted\": true\n}"
                    }
                ],
                "sendModel": false
            },
            {
                "id": "action_1719908409488",
                "name": "Добавить / редактировать студента",
                "actionType": "state",
                "endpoint": "allUsersRequests",
                "mapping": [
                    {
                        "id": "mapping_1719908587205"
                    }
                ],
                "stateMapping": [
                    {
                        "id": "stateMapping1719908599654",
                        "field": "FormState.popup",
                        "value": "Добавьте студента"
                    }
                ]
            },
            {
                "id": "action_1719908781616",
                "name": "Сохранить студента",
                "actionType": "endpoint",
                "endpoint": "allUsersRequests",
                "mapping": [
                    {
                        "id": "mapping_1719908798271",
                        "field": "requestType",
                        "value": "new_student_add"
                    },
                    {
                        "id": "mapping_1719908803195",
                        "field": "requestBody",
                        "value": "{\n\t\"order_id\": \"{{id}}\",\n    \"job_title_link\": \"{{student_job_title}}\",\n\"workspace\":\"{{order_clientWorkspace}}\",\n\t\"client\":\"{{order_client}}\",\n    \"student_fio\": \"{{student_fio}}\",\n    \"student_edu_level\": [{{student_edu_level_json}}],\n    \"student_gender\": [{{student_gender}}],\n    \"student_snils\": \"{{student_snils}}\",\n    \"student_date_of_birth\": \"{{student_date_of_birth}}\",\n\t\"student_access\": \"{{student_access}}\",\n    \"student_email\": \"{{student_email}}\"\n} "
                    }
                ]
            },
            {
                "id": "action_copy_1719908995017",
                "name": "закрыть попап (ученики)",
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1719241585230",
                        "field": "FormState.step",
                        "value": "Данные учеников"
                    },
                    {
                        "id": "stateMapping1719245745557",
                        "field": "FormState.popup"
                    }
                ]
            },
            {
                "id": "action_1719910218438",
                "name": "Добавить / редактировать должность",
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1719910297864",
                        "field": "FormState.popup",
                        "value": "Добавьте должность"
                    }
                ]
            },
            {
                "id": "action_1719910877950",
                "name": "Закрыть попап (добавьте должность)",
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1719910952603",
                        "value": "Добавьте студента",
                        "field": "FormState.popup"
                    }
                ]
            },
            {
                "id": "action_1719911377136",
                "name": "Сохранить должность",
                "actionType": "endpoint",
                "endpoint": "allUsersRequests",
                "mapping": [
                    {
                        "id": "mapping_1719911720430",
                        "field": "requestBody",
                        "value": "{\n\t\"order_id\": \"{{id}}\",\n    \"job_title_string\": \"{{student_job_title_string}}\",\n\"workspace\":\"{{order_clientWorkspace}}\",\n\t\"client\":\"{{order_client}}\"\n}"
                    },
                    {
                        "id": "mapping_1719911727522",
                        "field": "requestType",
                        "value": "new_student_job_title"
                    }
                ]
            },
            {
                "id": "action_1720123876703",
                "name": "Добавить ученика с курсами",
                "actionType": "endpoint",
                "endpoint": "allUsersRequests",
                "mapping": [
                    {
                        "id": "mapping_1720123927459",
                        "field": "requestBody",
                        "value": "{\n\t\"order_id\": \"{{id}}\",\n    \"student_link\": \"{{order_student_Link}}\",\n\"workspace\":\"{{order_clientWorkspace}}\",\n\t\"client\":\"{{order_client}}\",\t\"student_courses\":\"{{order_courses2_arrayLink}}\",\n    \"order_date_end\":\"{{order_date_end}}\",\n    \"student_job_title_link\":\"{{student_job_title}}\"\n}"
                    },
                    {
                        "id": "mapping_1720123929592",
                        "field": "requestType",
                        "value": "new_student_with_courses"
                    }
                ]
            },
            {
                "id": "action_1720425768505",
                "name": "Сгенерировать документы",
                "actionType": "endpoint",
                "endpoint": "allUsersRequests",
                "mapping": [
                    {
                        "id": "mapping_1720429051293",
                        "field": "requestType",
                        "value": "n8n_order2_generation"
                    },
                    {
                        "id": "mapping_1720429058197",
                        "field": "requestBody",
                        "value": "{\n\t\"order_id\": \"{{id}}\",\n\"workspace\":\"{{order_clientWorkspace}}\",\n\t\"client\":\"{{order_client}}\"\n}"
                    }
                ]
            },
            {
                "id": "action_1720427840111",
                "name": "назад к шагу 3",
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1720427845551",
                        "field": "FormState.step",
                        "value": "Данные учеников"
                    }
                ]
            }
        ],
        "form_maxWidth": null,
        "popup_width": 600
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "json": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "order_state",
            "dataType": "json",
            "name": "Form State",
            "id": "35381718917085992",
            "link": "",
            "group": "1718917107857",
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
            "json": true,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "order_creator",
            "dataType": "link",
            "name": "Кто создал",
            "id": "43991718919752964",
            "link": "WebUser",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "json": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "order_status",
            "dataType": "link",
            "name": "Статус",
            "id": "32551718962884378",
            "link": "order2_status",
            "group": "1718917107857",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "json": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "order_type",
            "dataType": "link",
            "name": "От кого делаем заявку",
            "id": "74511718916320512",
            "link": "from_who_order",
            "group": "1719225765404",
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
            "sysName": "order_contragent",
            "dataType": "link",
            "name": "Контрагент",
            "id": "99011718969707371",
            "link": "order2_contragents",
            "group": "1719225765404",
            "tags": null,
            "indexing": true,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 4,
            "linkIndexFieldSysName": [
                "contragent_title"
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
            "sysName": "order_client",
            "dataType": "link",
            "name": "Клиент",
            "id": "56881718969694718",
            "link": "WebUser",
            "group": "1719225765404",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "json": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "order_learn_option",
            "dataType": "link",
            "name": "Как будем учиться?",
            "id": "33891718970166636",
            "link": "order2_learn_option",
            "group": "1719225765404",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "json": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "order_adress",
            "dataType": "link",
            "name": "Адрес доставки",
            "id": "87211718969966710",
            "link": "order2_adresses",
            "group": "1719225765404",
            "tags": null,
            "indexing": true,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 5,
            "linkIndexFieldSysName": [
                "adress"
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
            "sysName": "fl_passport_number",
            "dataType": "string",
            "name": "Номер паспорта",
            "id": "74271719232222743",
            "link": "",
            "group": "1719231160603",
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
            "json": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "fl_passport_series",
            "dataType": "string",
            "name": "Серия паспорта",
            "id": "80291719232210455",
            "link": "",
            "group": "1719231160603",
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
        {
            "sysName": "fl_fio",
            "dataType": "string",
            "name": "ФИО",
            "id": "54791719232172585",
            "link": "",
            "group": "1719231160603",
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
            "sysName": "fl_birthday",
            "dataType": "date",
            "name": "Дата рождения",
            "id": "64251719241852294",
            "link": "",
            "group": "1719231160603",
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
                "timeFormat": "",
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
            "sysName": "order_phone",
            "dataType": "string",
            "name": "PHONE ответственного лица",
            "id": "17551719225805579",
            "link": "",
            "group": "1719225765404",
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
            "format": "phone",
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
            "sysName": "order_email",
            "dataType": "string",
            "name": "EMAIL куда прислать документы",
            "id": "52611719225790784",
            "link": "",
            "group": "1719225765404",
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
            "format": "email",
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
            "sysName": "order_adress_string",
            "dataType": "string",
            "name": "Адрес доставки одной строкой",
            "id": "39171719611562852",
            "link": "",
            "group": "1719611503460",
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
            "sysName": "order_clientWorkspace",
            "dataType": "link",
            "name": "Воркспейс",
            "id": "22911719611266350",
            "link": "clientsworkspaces",
            "group": "1719225765404",
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
            "json": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "order_date_end",
            "dataType": "date",
            "name": "Дата окончания обучения",
            "id": "17751719847586319",
            "link": "",
            "group": "1719225765404",
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
                "timeFormat": "",
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
            "sysName": "order_date_start",
            "dataType": "date",
            "name": "Дата начала обучения",
            "id": "86151719847466199",
            "link": "",
            "group": "1719225765404",
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
                "timeFormat": "",
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
            "sysName": "order_student_Link",
            "dataType": "link",
            "name": "Студент",
            "id": "45571719837952435",
            "link": "students",
            "group": "1719836745782",
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
            "json": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "student_access",
            "dataType": "boolean",
            "name": "Нужен доступ?",
            "id": "82351719852222595",
            "link": "",
            "group": "1719836745782",
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
                    "Нужен доступ",
                    "Не нужен доступ"
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
            "json": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "student_email",
            "dataType": "string",
            "name": "EMAIL студента",
            "id": "22091719852199895",
            "link": "",
            "group": "1719836745782",
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
            "format": "email",
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
            "sysName": "student_edu_level_json",
            "dataType": "json",
            "name": "Уровень образования",
            "id": "72541719853217472",
            "link": "",
            "group": "1719836745782",
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
            "format": "radioOptions",
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
                        "value": "Стаж",
                        "label": "Стаж"
                    },
                    {
                        "value": "Высшее образование",
                        "label": "Высшее образование"
                    },
                    {
                        "value": "Среднее профессиональное образование",
                        "label": "Среднее профессиональное образование"
                    }
                ]
            },
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "json": true,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "student_snils",
            "dataType": "string",
            "name": "СНИЛС",
            "id": "34571719853209190",
            "link": null,
            "group": "1719836745782",
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
            "sysName": "student_gender",
            "dataType": "json",
            "name": "Пол",
            "id": "41491719853192613",
            "link": "",
            "group": "1719836745782",
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
            "format": "radioOptions",
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
                        "value": "Муж",
                        "label": "Муж"
                    },
                    {
                        "value": "Жен",
                        "label": "Жен"
                    }
                ]
            },
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "json": true,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "student_date_of_birth",
            "dataType": "date",
            "name": "Дата рождения студента",
            "id": "28721719853172754",
            "link": "",
            "group": "1719836745782",
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
                "dateFormat": "DD.MM.Y",
                "timeFormat": "",
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
            "sysName": "student_job_title",
            "dataType": "link",
            "name": "Должность студента",
            "id": "26191719853162781",
            "link": "students_job_titles",
            "group": "1719836745782",
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
            "json": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "student_fio",
            "dataType": "string",
            "name": "ФИО студента",
            "id": "82401719853153219",
            "link": null,
            "group": "1719836745782",
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
            "json": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "order_courses2_arrayLink",
            "dataType": "arrayLink",
            "name": "Курсы",
            "id": "65701719837115097",
            "link": "courses2",
            "group": "1719836745782",
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
            "linkType": false,
            "arrayLink": true,
            "json": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "student_job_title_string",
            "dataType": "string",
            "name": "Новая должность",
            "id": "51311719910412085",
            "link": null,
            "group": "1719836745782",
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
            "json": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "student_with_courses_add_message_true",
            "dataType": "boolean",
            "name": "Показать сообщение",
            "id": "86081720181232594",
            "link": "",
            "group": "1719836745782",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "json": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "student_with_courses_add_message",
            "dataType": "string",
            "name": "Сообщение",
            "id": "16941720181174211",
            "link": "",
            "group": "1719836745782",
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
            "sysName": "order_document_url",
            "dataType": "string",
            "name": "Documents URL",
            "id": "71401720426393448",
            "link": "",
            "group": "1720426369943",
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
            "format": "webLink",
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
            "sysName": "order_document_date_update",
            "dataType": "date",
            "name": "Дата генерации документов",
            "id": "75881720426428960",
            "link": "",
            "group": "1720426369943",
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
            "sysName": "order_document_update_allowed",
            "dataType": "boolean",
            "name": "Обновление документов разрешено",
            "id": "11091720426910720",
            "link": "",
            "group": "1720426369943",
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
            "order_client": "79591117084@evidpo.ru",
            "student_access": false,
            "student_with_courses_add_message": "Ученик с курсом успешно добавлен в заявку",
            "order_date_start": 1717372800000,
            "order_type": {
                "id": "fl",
                "from_who_title": "Физлицо"
            },
            "order_adress": "82fe817f-ebcb-4507-99bf-4bc7cd9b6397",
            "order_document_update_allowed": true,
            "order_email": "12@mail.ru",
            "fl_fio": "Вася Пупкин Васильевич",
            "fl_birthday": 1719523853000,
            "student_with_courses_add_message_true": true,
            "order_state": "{\n   \"step\": \"submitted\",\n   \"popup\": \"\",\n   \"_submitError\": \"\"\n}",
            "student_email": "-",
            "id": "279177",
            "order_creator": {
                "lastName": "Михайлов",
                "firstName": "Михаил",
                "id": "drammichd@gmail.com"
            },
            "order_status": {
                "orders2_status_title": "Начато заполнение",
                "id": "started"
            },
            "fl_passport_number": "171717",
            "order_contragent": {
                "contragent_title": "Вася Пупкин Васильевич",
                "id": "38b3be94-4636-4039-b67e-1465fd65d3df"
            },
            "order_clientWorkspace": "1",
            "order_courses2_arrayLink": [
                "abd592c2-e709-451e-b449-bfd880cd714b"
            ],
            "order_learn_option": {
                "id": "learn_access_docs",
                "learn_option_title": "Учимся, в конце получаем документы"
            },
            "order_student_Link": "213d73f9-f1d8-455f-8c0d-f1e733a0e91f",
            "order_date_end": 1721163600000,
            "order_phone": "119",
            "order_adress_string": "Это адрес 13",
            "student_job_title": "-",
            "fl_passport_series": "1818"
        }
    ],
    "totalPages": 1,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [
        [
            "id",
            99321590
        ],
        [
            "order_state",
            99321590
        ],
        [
            "order_creator.id",
            99123383
        ],
        [
            "order_creator.firstName",
            99123383
        ],
        [
            "order_creator.lastName",
            99123383
        ],
        [
            "order_status.id",
            99321700
        ],
        [
            "order_status.orders2_status_title",
            99321700
        ],
        [
            "order_type.id",
            99321591
        ],
        [
            "order_type.from_who_title",
            99321591
        ],
        [
            "order_contragent.id",
            99321705
        ],
        [
            "order_contragent.contragent_title",
            99321705
        ],
        [
            "order_client",
            99321590
        ],
        [
            "order_learn_option.id",
            99321704
        ],
        [
            "order_learn_option.learn_option_title",
            99321704
        ],
        [
            "order_adress",
            99321590
        ],
        [
            "fl_passport_number",
            99321590
        ],
        [
            "fl_passport_series",
            99321590
        ],
        [
            "fl_fio",
            99321590
        ],
        [
            "fl_birthday",
            99321590
        ],
        [
            "order_phone",
            99321590
        ],
        [
            "order_email",
            99321590
        ],
        [
            "order_adress_string",
            99321590
        ],
        [
            "order_clientWorkspace.id",
            99231133
        ],
        [
            "order_date_end",
            99321590
        ],
        [
            "order_date_start",
            99321590
        ],
        [
            "order_student_Link.id",
            99143864
        ],
        [
            "student_access",
            99321590
        ],
        [
            "student_email",
            99321590
        ],
        [
            "student_edu_level_json",
            99321590
        ],
        [
            "student_snils",
            99321590
        ],
        [
            "student_gender",
            99321590
        ],
        [
            "student_date_of_birth",
            99321590
        ],
        [
            "student_job_title.id",
            99324718
        ],
        [
            "student_fio",
            99321590
        ],
        [
            "order_courses2_arrayLink.id",
            99293210
        ],
        [
            "student_job_title_string",
            99321590
        ],
        [
            "student_with_courses_add_message_true",
            99321590
        ],
        [
            "student_with_courses_add_message",
            99321590
        ],
        [
            "order_document_url",
            99321590
        ],
        [
            "order_document_date_update",
            99321590
        ],
        [
            "order_document_update_allowed",
            99321590
        ]
    ],
    "writeFields": [
        "id",
        "order_state",
        "order_type",
        "order_creator",
        "order_status",
        "order_contragent",
        "order_client",
        "order_learn_option",
        "fl_passport_number",
        "fl_passport_series",
        "fl_fio",
        "fl_birthday",
        "order_phone",
        "order_email",
        "order_adress",
        "order_adress_string",
        "order_date_end",
        "order_date_start",
        "student_access",
        "student_email",
        "student_edu_level_json",
        "student_snils",
        "student_gender",
        "student_date_of_birth",
        "student_job_title",
        "student_fio",
        "order_student_Link",
        "order_courses2_arrayLink",
        "student_job_title_string"
    ],
    "structures": {
        "99123383": {
            "networkID": 13775,
            "id": 99123383,
            "dateCreated": "2022-07-31T09:04:32Z",
            "hidden": false,
            "dateHidden": null,
            "name": "App users",
            "sysName": "WebUser",
            "jsonObject": "[{\"sysName\":\"dateLastActivity\",\"dataType\":\"string\",\"name\":\"dateLastActivity\",\"id\":\"8\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"dateCreated\",\"dataType\":\"string\",\"name\":\"dateCreated\",\"id\":\"11\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"isAuthorization\",\"dataType\":\"boolean\",\"name\":\"isAuthorization\",\"id\":\"7\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"phone\",\"dataType\":\"string\",\"name\":\"Phone\",\"id\":\"10\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"email\",\"dataType\":\"string\",\"name\":\"Email\",\"id\":\"9\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"userpic\",\"dataType\":\"file\",\"name\":\"User pic\",\"id\":\"1\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":{},\"groupName\":\"Contacts\",\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"tgChatId\",\"dataType\":\"string\",\"name\":\"ID чата в телеграм\",\"id\":\"65181699865221344\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"Username (login)\",\"id\":\"13\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"role\",\"dataType\":\"array\",\"name\":\"systemRoles\",\"id\":\"6\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":true},{\"sysName\":\"password\",\"dataType\":\"string\",\"name\":\"Password (hash)\",\"id\":\"12\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"firstName\",\"dataType\":\"string\",\"name\":\"Имя\",\"id\":\"5\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"lastName\",\"dataType\":\"string\",\"name\":\"Фамилия\",\"id\":\"4\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"gender\",\"dataType\":\"string\",\"name\":\"Пол\",\"id\":\"3\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"isBlocked\",\"dataType\":\"boolean\",\"name\":\"Block user\",\"id\":\"2\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"temp\",\"dataType\":\"boolean\",\"name\":\"Временный юзер\",\"id\":\"25061713521772260\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"job_title\",\"dataType\":\"arrayLink\",\"name\":\"Должность\",\"id\":\"93621665303195388\",\"link\":\"job_titles\",\"group\":\"1665303173803\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"departments\",\"dataType\":\"arrayLink\",\"name\":\"Отдел\",\"id\":\"95551674628615592\",\"link\":\"departments\",\"group\":\"1665303173803\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"userLineManager\",\"dataType\":\"link\",\"name\":\"Руководитель\",\"id\":\"38471695381223498\",\"link\":\"WebUser\",\"group\":\"1665303173803\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"UserSystemRoles\",\"dataType\":\"arrayLink\",\"name\":\"UserSystemRoles\",\"id\":\"64921687898012995\",\"link\":\"user_system_roles\",\"group\":\"1665303173803\",\"tags\":\"\",\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[\"SystemRoleName\"],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"multipleChoice\":[{\"value\":\"evidpo-owner\",\"label\":\"evidpo-owner\"},{\"value\":\"evidpo-admin\",\"label\":\"evidpo-admin\"},{\"value\":\"evidpo-worker\",\"label\":\"evidpo-worker\"},{\"value\":\"partner-owner\",\"label\":\"partner-owner\"},{\"value\":\"partner-worker\",\"label\":\"partner-worker\"},{\"value\":\"client-owner\",\"label\":\"client-owner\"},{\"value\":\"client-worker\",\"label\":\"client-worker\"},{\"value\":\"client-student\",\"label\":\"client-student\"},{\"value\":\"teacher\",\"label\":\"teacher\"}]},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"json\":false,\"typeVariable\":{},\"indexExists\":true,\"array\":false},{\"sysName\":\"userRights\",\"dataType\":\"arrayLink\",\"name\":\"Права пользователя\",\"id\":\"96521690273696243\",\"link\":\"userrights\",\"group\":\"1665303173803\",\"tags\":\"\",\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[\"rightName\"],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"json\":false,\"typeVariable\":{},\"indexExists\":true,\"array\":false},{\"sysName\":\"generatedPassword\",\"dataType\":\"string\",\"name\":\"generatedPassword(no hash)\",\"id\":\"15781694501139290\",\"link\":\"\",\"group\":\"1694501105557\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"company\",\"dataType\":\"link\",\"name\":\"[MKD] Company\",\"id\":\"14731696443945778\",\"link\":\"mkd_company\",\"group\":\"1696443935587\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"clientsWorkspaces\",\"dataType\":\"arrayLink\",\"name\":\"[MKD] clientsWorkspaces\",\"id\":\"88781696448249362\",\"link\":\"mkdclientsworkspace\",\"group\":\"1696443935587\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"b24_user_id_string\",\"dataType\":\"string\",\"name\":\"B24 USER ID\",\"id\":\"96671709573654577\",\"link\":null,\"group\":\"1697054908126\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"b24_user_distr_is_rop\",\"dataType\":\"boolean\",\"name\":\"Является РОПом с распределением?\",\"id\":\"88121713788008334\",\"link\":\"\",\"group\":\"1697054908126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"b24_user_distr_rop_quene\",\"dataType\":\"number\",\"name\":\"Очередь отдела\",\"id\":\"97381713788135356\",\"link\":\"\",\"group\":\"1697054908126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"b24_in_the_distribution\",\"dataType\":\"boolean\",\"name\":\"В распределении\",\"id\":\"98151713266827065\",\"link\":\"\",\"group\":\"1697054908126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"b24_user_is_work\",\"dataType\":\"boolean\",\"name\":\"На линии\",\"id\":\"67441713787026829\",\"link\":\"\",\"group\":\"1697054908126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"На линии\",\"Не на линии\"],\"hideStandardBooleanIcons\":false,\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"b24_user_distr_sourses\",\"dataType\":\"arrayLink\",\"name\":\"Распр. с источников\",\"id\":\"52311713784588001\",\"link\":\"b24_sourse\",\"group\":\"1697054908126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"b24_user_distr_napr\",\"dataType\":\"arrayLink\",\"name\":\"Распр. с направлений\",\"id\":\"90351713784856092\",\"link\":\"b24_direction_of_study\",\"group\":\"1697054908126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"b24_user_all_limit\",\"dataType\":\"number\",\"name\":\"Лимит всего лидов\",\"id\":\"13011713786351575\",\"link\":\"\",\"group\":\"1697054908126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"b24_user_all_fact\",\"dataType\":\"number\",\"name\":\"Факт всего лидов\",\"id\":\"22531713786873024\",\"link\":\"\",\"group\":\"1697054908126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"b24_user_all_limit_open\",\"dataType\":\"boolean\",\"name\":\"Общий лимит не закрыт\",\"id\":\"64671715260324527\",\"link\":\"\",\"group\":\"1697054908126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"color_all_limit\",\"dataType\":\"string\",\"name\":\"Цвет общего лимита\",\"id\":\"58451715960052571\",\"link\":\"\",\"group\":\"1697054908126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"b24_user_limit_1cat\",\"dataType\":\"number\",\"name\":\"Лимит 1 кат\",\"id\":\"84371713786417808\",\"link\":\"\",\"group\":\"1697054908126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"b24_user_fact_1cat\",\"dataType\":\"number\",\"name\":\"Факт 1 кат\",\"id\":\"40301713786778985\",\"link\":\"\",\"group\":\"1697054908126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"b24_user_limit_1cat_open\",\"dataType\":\"boolean\",\"name\":\"1 кат не закрыта\",\"id\":\"78441715260260982\",\"link\":\"\",\"group\":\"1697054908126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"color_1cat_limit\",\"dataType\":\"string\",\"name\":\"Цвет 1 кат лимита\",\"id\":\"76991715960156619\",\"link\":\"\",\"group\":\"1697054908126\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"b24_user_limit_23cat\",\"dataType\":\"number\",\"name\":\"Лимит 23 кат\",\"id\":\"41431717711162147\",\"link\":\"\",\"group\":\"1697054908126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":16,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"b24_user_fact_23cat\",\"dataType\":\"number\",\"name\":\"Факт 23 кат\",\"id\":\"71511717711189756\",\"link\":\"\",\"group\":\"1697054908126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":17,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"b24_user_limit_23cat_open\",\"dataType\":\"boolean\",\"name\":\"23 кат не закрыта\",\"id\":\"21921717711208759\",\"link\":\"\",\"group\":\"1697054908126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":18,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"color_23cat_limit\",\"dataType\":\"string\",\"name\":\"Цвет 23 кат лимита\",\"id\":\"90511717775829739\",\"link\":\"\",\"group\":\"1697054908126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":19,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"b24_user_limit_karma\",\"dataType\":\"number\",\"name\":\"Лимит кармы\",\"id\":\"83131713786513590\",\"link\":\"\",\"group\":\"1697054908126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":20,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"b24_user_fact_karma\",\"dataType\":\"number\",\"name\":\"Сейчас в карме\",\"id\":\"72571713786744264\",\"link\":\"\",\"group\":\"1697054908126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":21,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"b24_user_karma_open\",\"dataType\":\"boolean\",\"name\":\"Карма не закрыта\",\"id\":\"15091715260181504\",\"link\":\"\",\"group\":\"1697054908126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":22,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"color_karma_limit\",\"dataType\":\"string\",\"name\":\"Цвет кармы\",\"id\":\"17831716044214449\",\"link\":\"\",\"group\":\"1697054908126\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":23,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"color_row\",\"dataType\":\"string\",\"name\":\"Цвет строки\",\"id\":\"67981715962551015\",\"link\":\"\",\"group\":\"1697054908126\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":24,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"b24_user_index_akb\",\"dataType\":\"number\",\"name\":\"Индекс АКБ\",\"id\":\"62901718264598974\",\"link\":\"\",\"group\":\"1718264588137\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"b24_user_index_akb_date_update\",\"dataType\":\"date\",\"name\":\"Индекс АКБ обновлен\",\"id\":\"24651718270293030\",\"link\":\"\",\"group\":\"1718264588137\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"b24_user_clients_a\",\"dataType\":\"number\",\"name\":\"Клиентов А\",\"id\":\"64301718310453028\",\"link\":\"\",\"group\":\"1718264588137\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"b24_user_clients_b\",\"dataType\":\"number\",\"name\":\"Клиентов B\",\"id\":\"10041718310468396\",\"link\":\"\",\"group\":\"1718264588137\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"b24_user_clients_c\",\"dataType\":\"number\",\"name\":\"Клиентов C\",\"id\":\"50121718310484162\",\"link\":\"\",\"group\":\"1718264588137\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"user_clientsWorkspaces\",\"dataType\":\"arrayLink\",\"name\":\"Ссылки на clientsWorkspaces\",\"id\":\"58941719220650042\",\"link\":\"clientsworkspaces\",\"group\":\"1719220578688\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"user_countragents\",\"dataType\":\"arrayLink\",\"name\":\"Ссылки на Контрагентов\",\"id\":\"62711719220762516\",\"link\":\"order2_contragents\",\"group\":\"1719220604565\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false}]",
            "jsonGroupSettings": "[{\"id\":1719220604565,\"name\":\"Countragents\",\"order\":6},{\"id\":1718264588137,\"name\":\"АКБ\",\"order\":8},{\"id\":1665303173803,\"name\":\"Права\",\"order\":2},{\"id\":-1776115286,\"name\":\"System fields\",\"order\":1},{\"id\":1697054908126,\"name\":\"b24_distr\",\"order\":7},{\"id\":1696443935587,\"name\":\"[MKD] test\",\"order\":4},{\"id\":1694501105557,\"name\":\"auto Fields\",\"order\":3},{\"id\":-502807437,\"name\":\"Contacts\",\"order\":0},{\"id\":1719220578688,\"name\":\"Workspaces\",\"order\":5}]",
            "jsonViewIdSettings": "[{\"sysName\":\"firstName\"},{\"sysName\":\"lastName\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-06-24T10:32:07Z",
            "createBy": 0,
            "changedBy": 13979,
            "_settings": null,
            "_nativeIndexSettings": null,
            "objectIDSysName": "id",
            "innerIDField": {
                "sysName": "id",
                "dataType": "id",
                "name": "Username (login)",
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "json": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            "folderId": 33725112
        },
        "99143864": {
            "networkID": 13775,
            "id": 99143864,
            "dateCreated": "2022-10-28T21:01:12Z",
            "hidden": false,
            "dateHidden": null,
            "name": "Студенты",
            "sysName": "students",
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"student_who_created\",\"dataType\":\"link\",\"name\":\"Кто создал\",\"id\":\"21301719866185113\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"student_who_edit\",\"dataType\":\"link\",\"name\":\"Кто редактировал\",\"id\":\"99091719866206810\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"student_date_created\",\"dataType\":\"date\",\"name\":\"Дата создания\",\"id\":\"92711719866233777\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.Y\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"student_date_edit\",\"dataType\":\"date\",\"name\":\"Дата редактирования\",\"id\":\"16281719866219777\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.Y\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"student_email\",\"dataType\":\"string\",\"name\":\"EMAIL студента\",\"id\":\"28301719850673871\",\"link\":\"\",\"group\":\"1666991627043\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"email\",\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"student_access\",\"dataType\":\"boolean\",\"name\":\"Нужен доступ?\",\"id\":\"97681719851156625\",\"link\":\"\",\"group\":\"1666991627043\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Нужен доступ\",\"Не нужен доступ\"],\"hideStandardBooleanIcons\":false,\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"student_fio\",\"dataType\":\"string\",\"name\":\"ФИО студента\",\"id\":\"17971666990947853\",\"link\":null,\"group\":\"1666991627043\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"student_job_title\",\"dataType\":\"link\",\"name\":\"Должность студента\",\"id\":\"83051668273296702\",\"link\":\"students_job_titles\",\"group\":\"1666991627043\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"student_date_of_birth\",\"dataType\":\"date\",\"name\":\"Дата рождения студента\",\"id\":\"39341691681987610\",\"link\":\"\",\"group\":\"1666991627043\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.Y\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"student_gender\",\"dataType\":\"string\",\"name\":\"Пол\",\"id\":\"27981691681807084\",\"link\":\"\",\"group\":\"1666991627043\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"multipleChoice\":[{\"value\":\"Муж\",\"label\":\"Муж\"},{\"value\":\"Жен\",\"label\":\"Жен\"}]},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"student_snils\",\"dataType\":\"string\",\"name\":\"СНИЛС\",\"id\":\"63381691681836143\",\"link\":\"\",\"group\":\"1666991627043\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"student_edu_level_json\",\"dataType\":\"string\",\"name\":\"Уровень образования\",\"id\":\"35401719851327231\",\"link\":\"\",\"group\":\"1666991627043\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"multipleChoice\":[{\"value\":\"Стаж\",\"label\":\"Стаж\"},{\"value\":\"Высшее образование\",\"label\":\"Высшее образование\"},{\"value\":\"Среднее профессиональное образование\",\"label\":\"Среднее профессиональное образование\"}]},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"student_partnerWorkspace\",\"dataType\":\"arrayLink\",\"name\":\"Ссылка на partnerWorkspace\",\"id\":\"49031694003904934\",\"link\":\"partnersworkspaces\",\"group\":\"1691574228132\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"array\":false},{\"sysName\":\"student_clientWorkspace\",\"dataType\":\"arrayLink\",\"name\":\"Ссылка на clientWorkspace\",\"id\":\"95191691574819184\",\"link\":\"clientsworkspaces\",\"group\":\"1691574228132\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"array\":false},{\"sysName\":\"student_user\",\"dataType\":\"link\",\"name\":\"Ссылка на client-student\",\"id\":\"40221691574248312\",\"link\":\"WebUser\",\"group\":\"1691574228132\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"student_order\",\"dataType\":\"arrayLink\",\"name\":\"Ссылка на orders\",\"id\":\"83131691574481599\",\"link\":\"orders2\",\"group\":\"1691574228132\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"array\":false}]",
            "jsonGroupSettings": "[{\"id\":1666991627043,\"name\":\"student data\",\"order\":0},{\"id\":1691574228132,\"name\":\"links\",\"order\":1}]",
            "jsonViewIdSettings": "[{\"sysName\":\"student_fio\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-07-04T17:46:39Z",
            "createBy": 13979,
            "changedBy": 13979,
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
            "folderId": 33809278
        },
        "99231133": {
            "networkID": 13775,
            "id": 99231133,
            "dateCreated": "2023-06-27T21:11:57Z",
            "hidden": false,
            "dateHidden": null,
            "name": "clientsWorkspaces",
            "sysName": "clientsworkspaces",
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"clientWorkspaceName\",\"name\":\"Название рабочей области\",\"dataType\":\"string\",\"id\":\"84451694465976295\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"clientPaysCount\",\"name\":\"clientPaysCount\",\"dataType\":\"number\",\"id\":\"63851687977191546\",\"link\":\"\",\"group\":\"1687977247538\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"clientEvidpoOwners\",\"name\":\"clientEvidpoOwners\",\"dataType\":\"arrayLink\",\"id\":\"86921687931768780\",\"link\":\"WebUser\",\"group\":\"1687977288038\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"array\":false},{\"sysName\":\"clientEvidpoAdmins\",\"name\":\"clientEvidpoAdmins\",\"dataType\":\"arrayLink\",\"id\":\"66981687931744426\",\"link\":\"WebUser\",\"group\":\"1687977288038\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"array\":false},{\"sysName\":\"clientEvidpoWorkers\",\"name\":\"clientEvidpoWorkers\",\"dataType\":\"arrayLink\",\"id\":\"52061687931683890\",\"link\":\"WebUser\",\"group\":\"1687977288038\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"array\":false},{\"sysName\":\"clientWorkspaceOwner\",\"name\":\"clientOwner\",\"dataType\":\"link\",\"id\":\"76271687900727177\",\"link\":\"WebUser\",\"group\":\"1687977288038\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"usersByClient\",\"name\":\"usersByClient\",\"dataType\":\"arrayLink\",\"id\":\"87431687900881967\",\"link\":\"userbyclient\",\"group\":\"1687977288038\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"array\":false},{\"sysName\":\"partnerByClient\",\"name\":\"partnerByClient\",\"dataType\":\"link\",\"id\":\"65601687901011466\",\"link\":\"partnersworkspaces\",\"group\":\"1687977288038\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"clientOrders\",\"name\":\"clientOrders\",\"dataType\":\"arrayLink\",\"id\":\"88021687987190540\",\"link\":\"orders2\",\"group\":\"1687977288038\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"array\":false},{\"sysName\":\"clientCompanies\",\"name\":\"ссылка на Контрагента\",\"dataType\":\"arrayLink\",\"id\":\"51661695620706160\",\"link\":\"order2_contragents\",\"group\":\"1687977288038\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"array\":false}]",
            "jsonGroupSettings": "[{\"id\":1687977288038,\"name\":\"Links\",\"order\":0},{\"id\":1687977247538,\"name\":\"Analytics\",\"order\":1}]",
            "jsonViewIdSettings": "[{\"sysName\":\"clientWorkspaceName\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-06-24T09:07:14Z",
            "createBy": 13979,
            "changedBy": 13979,
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
            "folderId": 33725112
        },
        "99293210": {
            "networkID": 13775,
            "id": 99293210,
            "dateCreated": "2024-02-23T21:53:46Z",
            "hidden": false,
            "dateHidden": null,
            "name": "courses2",
            "sysName": "courses2",
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":true,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"course_modules_arrayLink\",\"dataType\":\"arrayLink\",\"name\":\"Массив модулей курса\",\"id\":\"15981709930578883\",\"link\":\"modules\",\"group\":\"1708725330005\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"a_series_of_doc\",\"dataType\":\"json\",\"name\":\"Серия документа\",\"id\":\"22361663002343392\",\"link\":\"\",\"group\":\"1659262682525\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"radioOptions\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"multipleChoice\":[{\"value\":\"ПП\",\"label\":\"ПП\"},{\"value\":\"ПК\",\"label\":\"ПК\"},{\"value\":\"РП\",\"label\":\"РП\"}]},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":true,\"array\":false},{\"sysName\":\"hours\",\"dataType\":\"link\",\"name\":\"Часы обучения\",\"id\":\"32661659262553809\",\"link\":\"Hours\",\"group\":\"1659262682525\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"multipleChoice\":[{\"value\":\"252\",\"label\":\"252\"},{\"value\":\"72\",\"label\":\"72\"}]},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"course_rank_for_example\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"33671670257482015\",\"link\":\"\",\"group\":\"1659262682525\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"course_dev_status\",\"dataType\":\"json\",\"name\":\"Статус разработки курса\",\"id\":\"39131684395783484\",\"link\":\"\",\"group\":\"1668408741562\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"radioOptions\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"multipleChoice\":[{\"value\":\"черновик\",\"label\":\"черновик\"},{\"value\":\"на разработку\",\"label\":\"на разработку\"},{\"value\":\"редактируется\",\"label\":\"редактируется\"},{\"value\":\"добавлен\",\"label\":\"добавлен\"},{\"value\":\"упразднен\",\"label\":\"упразднен\"}]},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":true,\"array\":false},{\"sysName\":\"course_prof_obuch_programm\",\"dataType\":\"json\",\"name\":\"Программа профессионального обучения, направление подготовки\",\"id\":\"41291663003053373\",\"link\":\"\",\"group\":\"1659262682525\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"radioOptions\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"multipleChoice\":[{\"value\":\"Программа профессиональной подготовки по профессии рабочего, должности служащего\",\"label\":\"Программа профессиональной подготовки по профессии рабочего, должности служащего\"}]},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":true,\"array\":false},{\"sysName\":\"course_teacher\",\"dataType\":\"link\",\"name\":\"Преподаватель\",\"id\":\"45661663003705389\",\"link\":\"teachers\",\"group\":\"1659262682525\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":16,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"who_edit\",\"dataType\":\"link\",\"name\":\"Последний редактор\",\"id\":\"46411710943681550\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"direction_of_study\",\"dataType\":\"link\",\"name\":\"Направление обучения\",\"id\":\"46551659261301698\",\"link\":\"directions_of_study\",\"group\":\"1659262682525\",\"tags\":\"\",\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[\"id\"],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":true,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"course_accepted\",\"dataType\":\"json\",\"name\":\"Курс принят\",\"id\":\"50571668408751096\",\"link\":\"\",\"group\":\"1668408741562\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"radioOptions\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"multipleChoice\":[{\"value\":\"1\",\"label\":\"1\"},{\"value\":\"0\",\"label\":\"0\"}]},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":true,\"array\":false},{\"sysName\":\"course_name\",\"dataType\":\"string\",\"name\":\"Наименование курса\",\"id\":\"52211659259065764\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"course_price_low\",\"dataType\":\"number\",\"name\":\"Цена, до которой можно падать\",\"id\":\"54491669044712135\",\"link\":\"\",\"group\":\"1659262682525\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"course_professional_sphere\",\"dataType\":\"link\",\"name\":\"Профессиональная сфера\",\"id\":\"59621662985797943\",\"link\":\"Professional_spheres\",\"group\":\"1659262682525\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"course_price\",\"dataType\":\"number\",\"name\":\"Цена\",\"id\":\"63491662981426638\",\"link\":\"\",\"group\":\"1659262682525\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"course_days\",\"dataType\":\"number\",\"name\":\"Дни\",\"id\":\"64181662986748566\",\"link\":\"\",\"group\":\"1659262682525\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"course_modules_JSON\",\"dataType\":\"json\",\"name\":\"\",\"id\":\"68571709930327486\",\"link\":\"\",\"group\":\"1669051444792\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":true,\"array\":false},{\"sysName\":\"course_qualification\",\"dataType\":\"string\",\"name\":\"Квалификация, профессия, специальность\",\"id\":\"68691662986297877\",\"link\":null,\"group\":\"1659262682525\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"course_form_of_study\",\"dataType\":\"json\",\"name\":\"Форма обучения\",\"id\":\"70371663003397391\",\"link\":\"\",\"group\":\"1659262682525\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"radioOptions\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"multipleChoice\":[{\"value\":\"Очная\",\"label\":\"Очная\"},{\"value\":\"Очно-заочная (вечерняя)\",\"label\":\"Очно-заочная (вечерняя)\"},{\"value\":\"Заочная\",\"label\":\"Заочная\"}]},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":true,\"array\":false},{\"sysName\":\"airtable_doc_example_resp\",\"dataType\":\"json\",\"name\":\"\",\"id\":\"72781668438005496\",\"link\":\"\",\"group\":\"1668437978584\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":true,\"array\":false},{\"sysName\":\"airtable_course_id_resp\",\"dataType\":\"json\",\"name\":\"\",\"id\":\"73341669137252276\",\"link\":\"\",\"group\":\"1668437978584\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":true,\"array\":false},{\"sysName\":\"course_learning_programm\",\"dataType\":\"link\",\"name\":\"Учебная программа курса\",\"id\":\"73721662367977473\",\"link\":\"learning_programms\",\"group\":\"1659262848059\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"course_modules_JSON_string\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"78711710011103032\",\"link\":\"\",\"group\":\"1669051444792\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"course_traning_plan_link\",\"dataType\":\"string\",\"name\":\"Ссылка на учебный план\",\"id\":\"80511716382876705\",\"link\":\"\",\"group\":\"1659262848059\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"who_create\",\"dataType\":\"link\",\"name\":\"Кто создал\",\"id\":\"87131719509636611\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"course_crust\",\"dataType\":\"json\",\"name\":\"Доп корочка\",\"id\":\"87971663003512075\",\"link\":\"\",\"group\":\"1659262682525\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"radioOptions\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Да\",\"Нет\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"multipleChoice\":[{\"value\":\"Да\",\"label\":\"Да\"},{\"value\":\"Нет\",\"label\":\"Нет\"}]},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":true,\"array\":false},{\"sysName\":\"airtable_code\",\"dataType\":\"string\",\"name\":\"Код курса airtable\",\"id\":\"89881660376144676\",\"link\":\"\",\"group\":\"1659262682525\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"course_comment\",\"dataType\":\"string\",\"name\":\"Комментарий к курсу\",\"id\":\"90661716383388457\",\"link\":\"\",\"group\":\"1668408741562\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"course_ranks\",\"dataType\":\"arrayLink\",\"name\":\"Разряд\",\"id\":\"93191663003304277\",\"link\":\"ranks\",\"group\":\"1659262682525\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"type_of_doc\",\"dataType\":\"link\",\"name\":\"Вид документа\",\"id\":\"95261659262613466\",\"link\":\"type_of_doc\",\"group\":\"1659262682525\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"multipleChoice\":[{\"value\":\"Диплом о профессиональной переподготовке\",\"label\":\"Диплом о профессиональной переподготовке\"},{\"value\":\"Удостоверение о повышении квалификации\",\"label\":\"Удостоверение о повышении квалификации\"},{\"value\":\"Свидетельство о профессии рабочего, должности служащего\",\"label\":\"Свидетельство о профессии рабочего, должности служащего\"},{\"value\":\"Свидетельство об окончании обучения\",\"label\":\"Свидетельство об окончании обучения\"}]},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"course_airtable_id\",\"dataType\":\"string\",\"name\":\"airtable id\",\"id\":\"95361668436907120\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"course_doc_example\",\"dataType\":\"file\",\"name\":\"Пример образовательного\",\"id\":\"95591668408561498\",\"link\":\"\",\"group\":\"1659262682525\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":17,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"course_additional_professional_program\",\"dataType\":\"json\",\"name\":\"Дополнительная профессиональная программа\",\"id\":\"97841663002956772\",\"link\":\"\",\"group\":\"1659262682525\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"radioOptions\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"multipleChoice\":[{\"value\":\"Повышение квалификации\",\"label\":\"Повышение квалификации\"},{\"value\":\"Профессиональная переподготовка\",\"label\":\"Профессиональная переподготовка\"}]},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":true,\"array\":false}]",
            "jsonGroupSettings": "[{\"id\":1668437978584,\"name\":\"airtable response\",\"order\":4},{\"id\":1669051444792,\"name\":\"JSON\",\"order\":5},{\"id\":1708725330005,\"name\":\"Модули\",\"order\":1},{\"id\":1659262848059,\"name\":\"Учебная программа\",\"order\":2},{\"id\":1659262682525,\"name\":\"Характеристики курса\",\"order\":0},{\"id\":1668408741562,\"name\":\"Приемка курса\",\"order\":3}]",
            "jsonViewIdSettings": "[{\"sysName\":\"course_name\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-06-27T17:43:53Z",
            "createBy": 13979,
            "changedBy": 13979,
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
            "folderId": 33796613
        },
        "99321590": {
            "networkID": 13775,
            "id": 99321590,
            "dateCreated": "2024-06-20T20:45:16Z",
            "hidden": false,
            "dateHidden": null,
            "name": "orders2",
            "sysName": "orders2",
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"order_creator\",\"name\":\"Кто создал\",\"dataType\":\"link\",\"id\":\"43991718919752964\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"order_redactor\",\"name\":\"Кто редактировал\",\"dataType\":\"link\",\"id\":\"19221719522134135\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"order_date_create\",\"name\":\"Дата создания\",\"dataType\":\"date\",\"id\":\"17481719226100149\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"order_date_edit\",\"name\":\"Дата редактирования\",\"dataType\":\"date\",\"id\":\"97031719830261118\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"order_status\",\"name\":\"Статус\",\"dataType\":\"link\",\"id\":\"32551718962884378\",\"link\":\"order2_status\",\"group\":\"1718917107857\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"order_state\",\"name\":\"Form State\",\"dataType\":\"json\",\"id\":\"35381718917085992\",\"link\":\"\",\"group\":\"1718917107857\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"order_courses_count\",\"name\":\"Кол-во курсов\",\"dataType\":\"number\",\"id\":\"38421718970551385\",\"link\":\"\",\"group\":\"1718970593361\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"order_sum\",\"name\":\"Сумма заявки\",\"dataType\":\"number\",\"id\":\"66891719225337723\",\"link\":\"\",\"group\":\"1718970593361\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"b24_lead_id\",\"name\":\"ID лида\",\"dataType\":\"link\",\"id\":\"28261719225522430\",\"link\":\"leads_from_b24\",\"group\":\"1719225525549\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"b24_response\",\"name\":\"\",\"dataType\":\"json\",\"id\":\"10091719226727452\",\"link\":\"\",\"group\":\"1719225525549\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"order_client\",\"name\":\"Клиент\",\"dataType\":\"link\",\"id\":\"56881718969694718\",\"link\":\"WebUser\",\"group\":\"1719225765404\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"order_clientWorkspace\",\"name\":\"Воркспейс\",\"dataType\":\"link\",\"id\":\"22911719611266350\",\"link\":\"clientsworkspaces\",\"group\":\"1719225765404\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"order_learn_option\",\"name\":\"Как будем учиться?\",\"dataType\":\"link\",\"id\":\"33891718970166636\",\"link\":\"order2_learn_option\",\"group\":\"1719225765404\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"order_type\",\"name\":\"От кого делаем заявку\",\"dataType\":\"link\",\"id\":\"74511718916320512\",\"link\":\"from_who_order\",\"group\":\"1719225765404\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"order_contragent\",\"name\":\"Контрагент\",\"dataType\":\"link\",\"id\":\"99011718969707371\",\"link\":\"order2_contragents\",\"group\":\"1719225765404\",\"tags\":null,\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[\"contragent_title\"],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":true},{\"sysName\":\"order_adress\",\"name\":\"Адрес доставки\",\"dataType\":\"link\",\"id\":\"87211718969966710\",\"link\":\"order2_adresses\",\"group\":\"1719225765404\",\"tags\":null,\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[\"adress\"],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":true},{\"sysName\":\"order_email\",\"name\":\"EMAIL куда прислать документы\",\"dataType\":\"string\",\"id\":\"52611719225790784\",\"link\":\"\",\"group\":\"1719225765404\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"email\",\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"order_phone\",\"name\":\"PHONE ответственного лица\",\"dataType\":\"string\",\"id\":\"17551719225805579\",\"link\":\"\",\"group\":\"1719225765404\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"phone\",\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"order_weblink\",\"name\":\"Ссылка на заявку\",\"dataType\":\"string\",\"id\":\"44941719226290561\",\"link\":\"\",\"group\":\"1719225765404\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"order_ano_or_ooo\",\"name\":\"АНО или ООО\",\"dataType\":\"string\",\"id\":\"63201719611444003\",\"link\":\"\",\"group\":\"1719225765404\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"order_date_start\",\"name\":\"Дата начала обучения\",\"dataType\":\"date\",\"id\":\"86151719847466199\",\"link\":\"\",\"group\":\"1719225765404\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.Y\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"order_date_end\",\"name\":\"Дата окончания обучения\",\"dataType\":\"date\",\"id\":\"17751719847586319\",\"link\":\"\",\"group\":\"1719225765404\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.Y\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"fl_fio\",\"name\":\"ФИО\",\"dataType\":\"string\",\"id\":\"54791719232172585\",\"link\":\"\",\"group\":\"1719231160603\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"fl_passport_series\",\"name\":\"Серия паспорта\",\"dataType\":\"string\",\"id\":\"80291719232210455\",\"link\":\"\",\"group\":\"1719231160603\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"fl_passport_number\",\"name\":\"Номер паспорта\",\"dataType\":\"string\",\"id\":\"74271719232222743\",\"link\":\"\",\"group\":\"1719231160603\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"fl_birthday\",\"name\":\"Дата рождения\",\"dataType\":\"date\",\"id\":\"64251719241852294\",\"link\":\"\",\"group\":\"1719231160603\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.Y\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"org_or_ip\",\"name\":\"Организация или ИП\",\"dataType\":\"json\",\"id\":\"52581719232273126\",\"link\":\"\",\"group\":\"1719232255402\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"radioOptions\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"multipleChoice\":[{\"value\":\"org\",\"label\":\"Организация\"},{\"value\":\"ip\",\"label\":\"ИП\"}]},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"ul_title\",\"name\":\"Наименование организации\",\"dataType\":\"string\",\"id\":\"73621719232346780\",\"link\":\"\",\"group\":\"1719232255402\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"ul_inn\",\"name\":\"ИНН\",\"dataType\":\"string\",\"id\":\"30481719232354716\",\"link\":\"\",\"group\":\"1719232255402\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"ogrn_or_ogrnip\",\"name\":\"ОГРН / ОГРНИП\",\"dataType\":\"string\",\"id\":\"58831719232368494\",\"link\":\"\",\"group\":\"1719232255402\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"ul_fio_director\",\"name\":\"ФИО руководителя\",\"dataType\":\"string\",\"id\":\"39201719232382893\",\"link\":\"\",\"group\":\"1719232255402\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"ul_director_job_title\",\"name\":\"Должность руководителя\",\"dataType\":\"string\",\"id\":\"27721719232394009\",\"link\":\"\",\"group\":\"1719232255402\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"ul_director_foundation\",\"name\":\"На основании чего действует руководитель\",\"dataType\":\"string\",\"id\":\"84151719232399977\",\"link\":\"\",\"group\":\"1719232255402\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"order_adress_string\",\"name\":\"Адрес доставки одной строкой\",\"dataType\":\"string\",\"id\":\"39171719611562852\",\"link\":\"\",\"group\":\"1719611503460\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"order_student_Link\",\"name\":\"Студент\",\"dataType\":\"link\",\"id\":\"45571719837952435\",\"link\":\"students\",\"group\":\"1719836745782\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"order_courses2_arrayLink\",\"name\":\"Курсы\",\"dataType\":\"arrayLink\",\"id\":\"65701719837115097\",\"link\":\"courses2\",\"group\":\"1719836745782\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false},{\"sysName\":\"order_students_and_courses_arrayLink\",\"name\":\"Студенты с курсами\",\"dataType\":\"arrayLink\",\"id\":\"43941719836851498\",\"link\":\"student_courses\",\"group\":\"1719836745782\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false},{\"sysName\":\"student_email\",\"name\":\"EMAIL студента\",\"dataType\":\"string\",\"id\":\"22091719852199895\",\"link\":\"\",\"group\":\"1719836745782\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"email\",\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"student_access\",\"name\":\"Нужен доступ?\",\"dataType\":\"boolean\",\"id\":\"82351719852222595\",\"link\":\"\",\"group\":\"1719836745782\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Нужен доступ\",\"Не нужен доступ\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"student_fio\",\"name\":\"ФИО студента\",\"dataType\":\"string\",\"id\":\"82401719853153219\",\"link\":null,\"group\":\"1719836745782\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"student_job_title\",\"name\":\"Должность студента\",\"dataType\":\"link\",\"id\":\"26191719853162781\",\"link\":\"students_job_titles\",\"group\":\"1719836745782\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"student_date_of_birth\",\"name\":\"Дата рождения студента\",\"dataType\":\"date\",\"id\":\"28721719853172754\",\"link\":\"\",\"group\":\"1719836745782\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.Y\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"student_gender\",\"name\":\"Пол\",\"dataType\":\"json\",\"id\":\"41491719853192613\",\"link\":\"\",\"group\":\"1719836745782\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"radioOptions\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"multipleChoice\":[{\"value\":\"Муж\",\"label\":\"Муж\"},{\"value\":\"Жен\",\"label\":\"Жен\"}]},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"student_snils\",\"name\":\"СНИЛС\",\"dataType\":\"string\",\"id\":\"34571719853209190\",\"link\":null,\"group\":\"1719836745782\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"student_edu_level_json\",\"name\":\"Уровень образования\",\"dataType\":\"json\",\"id\":\"72541719853217472\",\"link\":\"\",\"group\":\"1719836745782\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"radioOptions\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"multipleChoice\":[{\"value\":\"Стаж\",\"label\":\"Стаж\"},{\"value\":\"Высшее образование\",\"label\":\"Высшее образование\"},{\"value\":\"Среднее профессиональное образование\",\"label\":\"Среднее профессиональное образование\"}]},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"student_job_title_string\",\"name\":\"Новая должность\",\"dataType\":\"string\",\"id\":\"51311719910412085\",\"link\":null,\"group\":\"1719836745782\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"student_with_courses_add_message_true\",\"name\":\"Показать сообщение\",\"dataType\":\"boolean\",\"id\":\"86081720181232594\",\"link\":\"\",\"group\":\"1719836745782\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"student_with_courses_add_message\",\"name\":\"Сообщение\",\"dataType\":\"string\",\"id\":\"16941720181174211\",\"link\":\"\",\"group\":\"1719836745782\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"order_comments\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"59941719837591583\",\"link\":\"\",\"group\":\"1719837634020\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"order_document_url\",\"name\":\"Documents URL\",\"dataType\":\"string\",\"id\":\"71401720426393448\",\"link\":\"\",\"group\":\"1720426369943\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"order_document_update_allowed\",\"name\":\"Обновление документов разрешено\",\"dataType\":\"boolean\",\"id\":\"11091720426910720\",\"link\":\"\",\"group\":\"1720426369943\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"order_document_date_update\",\"name\":\"Дата генерации документов\",\"dataType\":\"date\",\"id\":\"75881720426428960\",\"link\":\"\",\"group\":\"1720426369943\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"response_airtable\",\"name\":\"\",\"dataType\":\"json\",\"id\":\"96681720428491120\",\"link\":\"\",\"group\":\"1720428472866\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"response_n8n\",\"name\":\"\",\"dataType\":\"json\",\"id\":\"85211720428500086\",\"link\":\"\",\"group\":\"1720428472866\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false}]",
            "jsonGroupSettings": "[{\"name\":\"order communication\",\"id\":1719837634020,\"order\":10},{\"name\":\"students data\",\"id\":1719836745782,\"order\":4},{\"name\":\"Order2 data\",\"id\":1719225765404,\"order\":0},{\"name\":\"order temp create data\",\"id\":1719611503460,\"order\":1},{\"name\":\"stat\",\"id\":1718970593361,\"order\":9},{\"name\":\"docs\",\"id\":1720426369943,\"order\":5},{\"name\":\"options\",\"id\":1718917107857,\"order\":8},{\"name\":\"b24 data\",\"id\":1719225525549,\"order\":6},{\"name\":\"contragent ul add data\",\"id\":1719232255402,\"order\":3},{\"name\":\"contragent fl add data\",\"id\":1719231160603,\"order\":2},{\"name\":\"responses\",\"id\":1720428472866,\"order\":7}]",
            "jsonViewIdSettings": "[]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-07-08T08:48:57Z",
            "createBy": 13979,
            "changedBy": 13979,
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
            "folderId": 33809276
        },
        "99321591": {
            "networkID": 13775,
            "id": 99321591,
            "dateCreated": "2024-06-20T21:04:01Z",
            "hidden": false,
            "dateHidden": null,
            "name": "from_who_order",
            "sysName": "from_who_order",
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"from_who_title\",\"dataType\":\"string\",\"name\":\"От кого\",\"id\":\"44891718917447908\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"from_who_title\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-06-24T16:42:25Z",
            "createBy": 13979,
            "changedBy": 13979,
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
            "folderId": 33809278
        },
        "99321700": {
            "networkID": 13775,
            "id": 99321700,
            "dateCreated": "2024-06-21T09:40:05Z",
            "hidden": false,
            "dateHidden": null,
            "name": "order2_status",
            "sysName": "order2_status",
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"orders2_status_title\",\"name\":\"Статус\",\"dataType\":\"string\",\"id\":\"47661718962808646\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"orders2_status_title\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": false,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-06-21T09:44:12Z",
            "createBy": 13979,
            "changedBy": 13979,
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
            "folderId": 33809278
        },
        "99321704": {
            "networkID": 13775,
            "id": 99321704,
            "dateCreated": "2024-06-21T11:44:49Z",
            "hidden": false,
            "dateHidden": null,
            "name": "order2_learn_option",
            "sysName": "order2_learn_option",
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"learn_option_title\",\"name\":\"Вариант обучения\",\"dataType\":\"string\",\"id\":\"11121718970294582\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"learn_option_title\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-06-21T11:45:18Z",
            "createBy": 13979,
            "changedBy": 13979,
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
            "folderId": 33809278
        },
        "99321705": {
            "networkID": 13775,
            "id": 99321705,
            "dateCreated": "2024-06-21T14:29:27Z",
            "hidden": false,
            "dateHidden": null,
            "name": "Контрагенты",
            "sysName": "order2_contragents",
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"contragent_fl_or_ul\",\"dataType\":\"link\",\"name\":\"ФЛ или ЮЛ\",\"id\":\"25461718980176881\",\"link\":\"from_who_order\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"contragent_client\",\"dataType\":\"arrayLink\",\"name\":\"Клиент\",\"id\":\"27191718981830775\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[\"\"],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"array\":false},{\"sysName\":\"contragent_clientWorkspace\",\"dataType\":\"arrayLink\",\"name\":\"Воркспейс\",\"id\":\"77801719613773858\",\"link\":\"clientsworkspaces\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"array\":false},{\"sysName\":\"contragent_title\",\"dataType\":\"string\",\"name\":\"Название контрагента\",\"id\":\"87871719247381669\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"contragent_who_create\",\"dataType\":\"link\",\"name\":\"Кто создал контрагента\",\"id\":\"85341719335951699\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"contragent_who_edit\",\"dataType\":\"link\",\"name\":\"Кто редактировал контрагента\",\"id\":\"66011719781350471\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"contragent_date_create\",\"dataType\":\"date\",\"name\":\"Дата создания контрагента\",\"id\":\"88561719336010629\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"contragent_date_edit\",\"dataType\":\"date\",\"name\":\"Дата редактирования контрагента\",\"id\":\"63021719781358508\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"fl_fio\",\"dataType\":\"string\",\"name\":\"ФИО\",\"id\":\"81181718980472670\",\"link\":null,\"group\":\"1718980240432\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"fl_passport_series\",\"dataType\":\"string\",\"name\":\"Серия паспорта\",\"id\":\"68041718980511010\",\"link\":null,\"group\":\"1718980240432\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"fl_passport_number\",\"dataType\":\"string\",\"name\":\"Номер паспорта\",\"id\":\"99161718980713948\",\"link\":null,\"group\":\"1718980240432\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"fl_birthday\",\"dataType\":\"date\",\"name\":\"Дата рождения\",\"id\":\"83321719244858269\",\"link\":\"\",\"group\":\"1718980240432\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.Y\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"org_or_ip\",\"dataType\":\"json\",\"name\":\"Организация или ИП\",\"id\":\"66761718980280143\",\"link\":\"\",\"group\":\"1718980268738\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"radioOptions\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"multipleChoice\":[{\"value\":\"org\",\"label\":\"Организация\"},{\"value\":\"ip\",\"label\":\"ИП\"}]},\"groupName\":null,\"typeVariable\":{},\"json\":true,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"ul_title\",\"dataType\":\"string\",\"name\":\"Наименование организации\",\"id\":\"24831718980741952\",\"link\":null,\"group\":\"1718980268738\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"ul_inn\",\"dataType\":\"string\",\"name\":\"ИНН\",\"id\":\"47221718980823118\",\"link\":null,\"group\":\"1718980268738\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"ogrn_or_ogrnip\",\"dataType\":\"string\",\"name\":\"ОГРН / ОГРНИП\",\"id\":\"86221718980416528\",\"link\":null,\"group\":\"1718980268738\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"ul_fio_director\",\"dataType\":\"string\",\"name\":\"ФИО руководителя\",\"id\":\"94591718981157136\",\"link\":null,\"group\":\"1718980268738\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"ul_director_job_title\",\"dataType\":\"string\",\"name\":\"Должность руководителя\",\"id\":\"42191718981242392\",\"link\":null,\"group\":\"1718980268738\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"ul_director_foundation\",\"dataType\":\"string\",\"name\":\"На основании чего действует руководитель\",\"id\":\"71721718981288760\",\"link\":null,\"group\":\"1718980268738\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false}]",
            "jsonGroupSettings": "[{\"id\":1718980240432,\"name\":\"fl\",\"order\":0},{\"id\":1718980268738,\"name\":\"ul\",\"order\":1}]",
            "jsonViewIdSettings": "[{\"sysName\":\"contragent_title\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-07-05T15:26:45Z",
            "createBy": 13979,
            "changedBy": 13979,
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
            "folderId": 33809278
        },
        "99324718": {
            "networkID": 13775,
            "id": 99324718,
            "dateCreated": "2024-07-01T16:34:32Z",
            "hidden": false,
            "dateHidden": null,
            "name": "Должности студентов",
            "sysName": "students_job_titles",
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"job_title\",\"name\":\"Должность\",\"dataType\":\"string\",\"id\":\"47421719851742288\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"job_title_workspaces_arrayLink\",\"name\":\"Воркспейсы\",\"dataType\":\"arrayLink\",\"id\":\"33411719851774236\",\"link\":\"clientsworkspaces\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"array\":false},{\"sysName\":\"job_title_clients_arrayLink\",\"name\":\"Клиенты\",\"dataType\":\"arrayLink\",\"id\":\"71931719851913504\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"array\":false},{\"sysName\":\"job_title_date_create\",\"name\":\"Дата создания\",\"dataType\":\"date\",\"id\":\"73961719909747686\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.Y\",\"timeFormat\":\" HH:mm, Z\",\"isUTC\":\"false\"},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"job_title_date_edit\",\"name\":\"Дата редактирования\",\"dataType\":\"date\",\"id\":\"96181719909763791\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.Y\",\"timeFormat\":\" HH:mm, Z\",\"isUTC\":\"false\"},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"job_title_who_create\",\"name\":\"Кто создал\",\"dataType\":\"link\",\"id\":\"63211719909770156\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"job_title_who_edit\",\"name\":\"Кто редактировал\",\"dataType\":\"link\",\"id\":\"96261719909782474\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"job_title\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-07-04T14:19:57Z",
            "createBy": 13979,
            "changedBy": 13979,
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
            "folderId": 33809278
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "json": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "order_state",
            "dataType": "json",
            "name": "Form State",
            "id": "35381718917085992",
            "link": "",
            "group": "1718917107857",
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
            "json": true,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "order_type",
            "dataType": "link",
            "name": "От кого делаем заявку",
            "id": "74511718916320512",
            "link": "from_who_order",
            "group": "1719225765404",
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
            "sysName": "order_creator",
            "dataType": "link",
            "name": "Кто создал",
            "id": "43991718919752964",
            "link": "WebUser",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "json": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "order_status",
            "dataType": "link",
            "name": "Статус",
            "id": "32551718962884378",
            "link": "order2_status",
            "group": "1718917107857",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "json": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "order_contragent",
            "dataType": "link",
            "name": "Контрагент",
            "id": "99011718969707371",
            "link": "order2_contragents",
            "group": "1719225765404",
            "tags": null,
            "indexing": true,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 4,
            "linkIndexFieldSysName": [
                "contragent_title"
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
            "sysName": "order_client",
            "dataType": "link",
            "name": "Клиент",
            "id": "56881718969694718",
            "link": "WebUser",
            "group": "1719225765404",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "json": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "order_learn_option",
            "dataType": "link",
            "name": "Как будем учиться?",
            "id": "33891718970166636",
            "link": "order2_learn_option",
            "group": "1719225765404",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "json": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "fl_passport_number",
            "dataType": "string",
            "name": "Номер паспорта",
            "id": "74271719232222743",
            "link": "",
            "group": "1719231160603",
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
            "json": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "fl_passport_series",
            "dataType": "string",
            "name": "Серия паспорта",
            "id": "80291719232210455",
            "link": "",
            "group": "1719231160603",
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
        {
            "sysName": "fl_fio",
            "dataType": "string",
            "name": "ФИО",
            "id": "54791719232172585",
            "link": "",
            "group": "1719231160603",
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
            "sysName": "fl_birthday",
            "dataType": "date",
            "name": "Дата рождения",
            "id": "64251719241852294",
            "link": "",
            "group": "1719231160603",
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
                "timeFormat": "",
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
            "sysName": "order_phone",
            "dataType": "string",
            "name": "PHONE ответственного лица",
            "id": "17551719225805579",
            "link": "",
            "group": "1719225765404",
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
            "format": "phone",
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
            "sysName": "order_email",
            "dataType": "string",
            "name": "EMAIL куда прислать документы",
            "id": "52611719225790784",
            "link": "",
            "group": "1719225765404",
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
            "format": "email",
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
            "sysName": "order_adress",
            "dataType": "link",
            "name": "Адрес доставки",
            "id": "87211718969966710",
            "link": "order2_adresses",
            "group": "1719225765404",
            "tags": null,
            "indexing": true,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 5,
            "linkIndexFieldSysName": [
                "adress"
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
            "sysName": "order_adress_string",
            "dataType": "string",
            "name": "Адрес доставки одной строкой",
            "id": "39171719611562852",
            "link": "",
            "group": "1719611503460",
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
            "sysName": "order_date_end",
            "dataType": "date",
            "name": "Дата окончания обучения",
            "id": "17751719847586319",
            "link": "",
            "group": "1719225765404",
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
                "timeFormat": "",
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
            "sysName": "order_date_start",
            "dataType": "date",
            "name": "Дата начала обучения",
            "id": "86151719847466199",
            "link": "",
            "group": "1719225765404",
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
                "timeFormat": "",
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
            "sysName": "student_access",
            "dataType": "boolean",
            "name": "Нужен доступ?",
            "id": "82351719852222595",
            "link": "",
            "group": "1719836745782",
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
                    "Нужен доступ",
                    "Не нужен доступ"
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
            "json": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "student_email",
            "dataType": "string",
            "name": "EMAIL студента",
            "id": "22091719852199895",
            "link": "",
            "group": "1719836745782",
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
            "format": "email",
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
            "sysName": "student_edu_level_json",
            "dataType": "json",
            "name": "Уровень образования",
            "id": "72541719853217472",
            "link": "",
            "group": "1719836745782",
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
            "format": "radioOptions",
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
                        "value": "Стаж",
                        "label": "Стаж"
                    },
                    {
                        "value": "Высшее образование",
                        "label": "Высшее образование"
                    },
                    {
                        "value": "Среднее профессиональное образование",
                        "label": "Среднее профессиональное образование"
                    }
                ]
            },
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "json": true,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "student_snils",
            "dataType": "string",
            "name": "СНИЛС",
            "id": "34571719853209190",
            "link": null,
            "group": "1719836745782",
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
            "sysName": "student_gender",
            "dataType": "json",
            "name": "Пол",
            "id": "41491719853192613",
            "link": "",
            "group": "1719836745782",
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
            "format": "radioOptions",
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
                        "value": "Муж",
                        "label": "Муж"
                    },
                    {
                        "value": "Жен",
                        "label": "Жен"
                    }
                ]
            },
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "json": true,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "student_date_of_birth",
            "dataType": "date",
            "name": "Дата рождения студента",
            "id": "28721719853172754",
            "link": "",
            "group": "1719836745782",
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
                "dateFormat": "DD.MM.Y",
                "timeFormat": "",
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
            "sysName": "student_job_title",
            "dataType": "link",
            "name": "Должность студента",
            "id": "26191719853162781",
            "link": "students_job_titles",
            "group": "1719836745782",
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
            "json": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "student_fio",
            "dataType": "string",
            "name": "ФИО студента",
            "id": "82401719853153219",
            "link": null,
            "group": "1719836745782",
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
            "json": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "order_student_Link",
            "dataType": "link",
            "name": "Студент",
            "id": "45571719837952435",
            "link": "students",
            "group": "1719836745782",
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
            "json": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "order_courses2_arrayLink",
            "dataType": "arrayLink",
            "name": "Курсы",
            "id": "65701719837115097",
            "link": "courses2",
            "group": "1719836745782",
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
            "linkType": false,
            "arrayLink": true,
            "json": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "student_job_title_string",
            "dataType": "string",
            "name": "Новая должность",
            "id": "51311719910412085",
            "link": null,
            "group": "1719836745782",
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
            "json": false,
            "typeVariable": {},
            "indexExists": false,
            "array": false
        }
    ],
    "quickSearch": null,
    "httpParams": {},
    "cardCustomHtml": null,
    "cardCustomLayout": null,
    "comment": "order2 form",
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
    data: exampleForm,
    auth: authExample,
    locale: 'ESP',
    onChange: value => console.log(value),
  },
};
