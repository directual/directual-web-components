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
                        "id": "elmnt_1731928965075",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17319289668700.32402033044430330412202",
                                "_action": "action_1731928884291",
                                "_action_label": "Ручное создание заявки",
                                "_action_icon": "plus"
                            },
                            {
                                "id": "17319289678690.34310132221320023114143",
                                "_action": "action_1731928882936",
                                "_action_label": "Загрузить CSV-файлом",
                                "_action_icon": "clip",
                                "_action_button_type": "accent"
                            }
                        ],
                        "_actions_in_a_row": 2
                    }
                ]
            },
            {
                "id": "step_1731928944590",
                "sysName": "csv",
                "elements": [
                    {
                        "id": "elmnt_1731929363388",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17319293656680.4112413323203004040112",
                                "_field": "excel",
                                "_field_required": true
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1731928948280",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17319289524100.43443432300101230021213",
                                "_action": "action_1731928931715",
                                "_action_label": "Назад",
                                "_action_icon": "back",
                                "_action_standardRequired": false
                            },
                            {
                                "id": "17319294083170.42311042100320321011024",
                                "_action": "action_1731929391479",
                                "_action_label": "Загрузить",
                                "_action_icon": "arrowUp",
                                "_action_standardRequired": true,
                                "_action_button_type": "accent"
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
            }
        ],
        "actions": [
            {
                "id": "action_1731928882936",
                "name": "CSV",
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1731928917990",
                        "field": "FormState.step",
                        "value": "csv"
                    }
                ]
            },
            {
                "id": "action_1731928884291",
                "name": "Manual",
                "actionType": "endpoint",
                "endpoint": "newPersonnellRequest",
                "mapping": [
                    {
                        "id": "mapping_1731928900822",
                        "field": "export",
                        "value": "false"
                    }
                ],
                "resetModel": true
            },
            {
                "id": "action_1731928931715",
                "name": "Back",
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1731928937786",
                        "field": "FormState.step",
                        "value": "default step"
                    }
                ]
            },
            {
                "id": "action_1731929391479",
                "name": "Upload",
                "actionSubmit": true
            }
        ],
        "hideActionsHint": true
    },
    "tableTitle": null,
    "actions": [],
    "headers": [],
    "data": [
        {}
    ],
    "totalPages": 1,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [],
    "writeFields": [
        "excel",
        "export"
    ],
    "structures": {},
    "isSuccessWrite": false,
    "writeError": null,
    "writeResponse": null,
    "fileds": [
        {
            "sysName": "excel",
            "dataType": "file",
            "name": "Загрузите CSV-файл с заявкой",
            "id": "86741730828400204",
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
            "formatOptions": null,
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
            "sysName": "export",
            "dataType": "boolean",
            "name": "Экспорт из файла",
            "id": "10191731928838352",
            "link": "",
            "group": "1731927636767",
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
