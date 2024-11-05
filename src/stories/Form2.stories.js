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
    "sl": "newPersonnellRequest",
    "pageSize": "10",
    "headerField": null,
    "params": {
        "steps": [
            {
                "id": "default_step",
                "sysName": "default step",
                "elements": [
                    {
                        "id": "elmnt_1730828320765",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17308283222380.31341110302132434020341",
                                "_action": "action_1730828270356",
                                "_action_label": "Новая заявка",
                                "_action_icon": "plus",
                                "_action_button_type": "accent"
                            },
                            {
                                "id": "17308283231380.2412124214020444222303",
                                "_action": "action_1730828262756",
                                "_action_label": "Загрузить CSV/Excel",
                                "_action_icon": "clip"
                            }
                        ],
                        "_actions_in_a_row": 2
                    }
                ]
            },
            {
                "id": "step_1730828303836",
                "sysName": "new",
                "elements": [
                    {
                        "id": "elmnt_1730829349293",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17308293557220.22142041243000000200143",
                                "_field": "date_start",
                                "_field_required": true
                            },
                            {
                                "id": "17308293639960.12104131404444343220033",
                                "_field": "date_end",
                                "_field_required": true
                            }
                        ],
                        "_input_fields_in_a_row": 2
                    },
                    {
                        "id": "elmnt_1730829388233",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17308293901170.02212412110403432011203",
                                "_field": "place_id",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "ddPlaces",
                                "_field_required": true
                            },
                            {
                                "id": "17308294126790.211204230134002301011402",
                                "_field": "skill_id",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "ddSkills",
                                "_field_required": true
                            }
                        ],
                        "_input_fields_in_a_row": 2
                    },
                    {
                        "id": "elmnt_1730829438404",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17308294406570.212042020144002133314402",
                                "_field": "personell_number",
                                "_field_required": true
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730828307002",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17308283087300.33432121434320233232424",
                                "_action": "action_1730829645054",
                                "_action_label": "Создать заявку",
                                "_action_icon": "done",
                                "_action_button_type": "accent",
                                "_action_standardRequired": true
                            },
                            {
                                "id": "17308296840340.12133001211122113114304",
                                "_action": "action_1730828283682",
                                "_action_label": "Отменить",
                                "_action_icon": "back",
                                "_action_button_type": "normal",
                                "_action_standardRequired": false
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
                        "hintTitle": "Thank you!",
                        "hintText": "Submitted"
                    }
                ]
            },
            {
                "id": "step_copy_1730828389105",
                "sysName": "excel",
                "elements": [
                    {
                        "id": "elmnt_1730828436899",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17308284407260.22423201133121311300311",
                                "_field": "excel"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1730828307002",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17308283087300.33432121434320233232424",
                                "_action": "action_1730828283682",
                                "_action_label": "Отменить",
                                "_action_icon": "back"
                            }
                        ]
                    }
                ]
            }
        ],
        "actions": [
            {
                "id": "action_1730828262756",
                "name": "EXCEL",
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1730828369384",
                        "value": "excel",
                        "field": "FormState.step"
                    }
                ]
            },
            {
                "id": "action_1730828270356",
                "name": "NEW",
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1730828273744",
                        "field": "FormState.step",
                        "value": "new"
                    }
                ]
            },
            {
                "id": "action_1730828283682",
                "name": "cancel",
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1730828289924",
                        "field": "FormState.step",
                        "value": "default step"
                    }
                ]
            },
            {
                "id": "action_1730829645054",
                "name": "submit",
                "actionType": "endpoint",
                "endpoint": "newPersonnellRequest",
                "resetModel": false,
                "actionSubmit": true
            }
        ],
        "hideActionsHint": true,
        "hideHint": true,
        "form_maxWidth": 400,
        "general": {
            "showModel": true
        }
    },
    "tableTitle": null,
    "actions": null,
    "headers": [],
    "data": [
        {}
    ],
    "totalPages": 1,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [],
    "writeFields": [
        "skill_id",
        "place_id",
        "personell_number",
        "date_end",
        "date_start",
        "excel"
    ],
    "structures": {},
    "isSuccessWrite": false,
    "writeError": null,
    "writeResponse": null,
    "fileds": [
        {
            "sysName": "skill_id",
            "name": "Требуемый навык",
            "dataType": "link",
            "id": "82871730828153841",
            "link": "skills",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "place_id",
            "name": "Участок",
            "dataType": "link",
            "id": "18061730828138902",
            "link": "places",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "personell_number",
            "name": "Количество требуемого персонала с данным навыком на участке",
            "dataType": "number",
            "id": "28941730827641043",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "date_end",
            "name": "Дата окончания работ",
            "dataType": "date",
            "id": "98231730827585673",
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
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "date_start",
            "name": "Дата начала работ",
            "dataType": "date",
            "id": "14281730827559090",
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
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "excel",
            "name": "Загрузите CSV/XLX/XLSX",
            "dataType": "file",
            "id": "86741730828400204",
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
        }
    ],
    "quickSearch": null,
    "httpParams": null,
    "cardCustomHtml": null,
    "cardCustomLayout": null,
    "comment": "Новая заявка на персонал",
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
