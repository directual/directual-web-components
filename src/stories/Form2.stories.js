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
    "sl": "form",
    "pageSize": "10",
    "headerField": null,
    "params": {
        "steps": [
            {
                "id": "default_step",
                "sysName": "default step",
                "elements": [
                    {
                        "id": "elmnt_1720261806329",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17202618616570.11032424330221130212132",
                                "_field": "person",
                                "_field_link_type": "select",
                                "_field_arrayLink_endpoint": "people"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1720261807311",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17202618100600.14431313330414220342303",
                                "_conditionalView": true,
                                "_conditions": [
                                    {
                                        "id": "condition_1720261824334",
                                        "_conditionalView_field": "person",
                                        "_conditionalView_operator": "!==",
                                        "_conditionalView_value": "paul"
                                    }
                                ],
                                "_field": "text",
                                "_field_required": true
                            }
                        ],
                        "_input_fields_in_a_row": 1
                    },
                    {
                        "id": "elmnt_1720261808095",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17202618390370.43231331103212020441242",
                                "_field": "text2",
                                "_field_required": true
                            }
                        ],
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1720261845929",
                                "_conditionalView_field": "person",
                                "_conditionalView_operator": "==",
                                "_conditionalView_value": "paul"
                            }
                        ],
                        "_input_fields_in_a_row": 1
                    },
                    {
                        "id": "elmnt_1720261956405",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17202619588190.31114210443400022322003",
                                "_action": "action_1720261906713",
                                "_action_standardRequired": true,
                                "_action_customRequired": false
                            }
                        ],
                        "_actions_in_a_row": 1
                    },
                    {
                        "id": "elmnt_1720261963627",
                        "type": "submit"
                    }
                ],
                "sectionVisibility": "always"
            },
            {
                "id": "step_1720263418640",
                "sysName": "step2",
                "elements": [
                    {
                        "id": "elmnt_1720263425797",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17202634297010.32014311012124300443034",
                                "_field": "text_step",
                                "_field_required": true
                            }
                        ]
                    }
                ],
                "sectionVisibility": "custom",
                "sectionCustomVisibility": "onetwothree,step2"
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
                "id": "action_1720261906713",
                "name": "Hey hoy",
                "actionType": "state",
                "actionSubmit": true,
                "stateMapping": [
                    {
                        "id": "stateMapping1720261932051",
                        "field": "FormState.test",
                        "value": "test"
                    },
                    {
                        "id": "stateMapping1720261938641",
                        "field": "text",
                        "value": "action!"
                    }
                ]
            }
        ],
        "state": {
            "step": "default step",
            "popup": null,
            "test": ""
        },
        "general": {
            "showState": true,
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
        "text2",
        "text",
        "person",
        "text_step"
    ],
    "structures": {},
    "isSuccessWrite": false,
    "writeError": null,
    "writeResponse": null,
    "fileds": [
        {
            "sysName": "text2",
            "dataType": "string",
            "name": "",
            "id": "65191720261746355",
            "link": null,
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
            "indexExists": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "array": false
        },
        {
            "sysName": "text",
            "dataType": "string",
            "name": "",
            "id": "29881720261742443",
            "link": null,
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
            "formatOptions": null,
            "groupName": null,
            "indexExists": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "array": false
        },
        {
            "sysName": "person",
            "dataType": "link",
            "name": "",
            "id": "90311720261731583",
            "link": "people",
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
            "indexExists": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "array": false
        },
        {
            "sysName": "text_step",
            "dataType": "string",
            "name": "",
            "id": "27371720263392400",
            "link": null,
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
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
