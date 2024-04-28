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
    "sl": "fpsform2",
    "pageSize": "10",
    "headerField": null,
    "params": {
        "steps": [
            {
                "id": "step_one",
                "sysName": "default",
                "elements": [
                    {
                        "id": "elmnt_1714310748816",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17143107506720.41102342100041112231413",
                                "_field": "string",
                                "_field_set_default": true,
                                "_field_default_value": "papam",
                                "_field_hidden": false
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1714310757385",
                        "type": "submit",
                        "submitIcon": "babai"
                    }
                ],
                "CSSclass": "hello_ebta",
                "SecionGap": 0,
                "sectionGap": null
            },
            {
                "id": "step_submitted",
                "sysName": "submitted",
                "elements": [
                    {
                        "id": "elmnt_1712052683797",
                        "type": "hint",
                        "hintColor": "ok",
                        "hintTitle": "Успех",
                        "hintText": "Ваша заявка отправлена"
                    },
                    {
                        "id": "elmnt_1714310838290",
                        "type": "action",
                        "_actions": [
                            {
                                "id": "17143108540860.00022114311413130240240341",
                                "_action": "action_1714310842476"
                            }
                        ]
                    }
                ]
            }
        ],
        "actions": [
            {
                "id": "action_1714310842476",
                "name": "reset",
                "actionType": "state",
                "resetModel": true,
                "stateMapping": [
                    {
                        "id": "stateMapping1714310878178",
                        "field": "FormState.step"
                    }
                ]
            }
        ],
        "hideHint": true,
        "form_title": "New form",
        "form_description": "",
        "form_maxWidth": 500,
        "state": {
            "step": "default"
        },
        "general": {
            "edittingOn": true,
            "showState": true,
            "showModel": true
        },
        "hideActionsHint": true
    },
    "tableTitle": null,
    "actions": null,
    "headers": [],
    "data": [
        {},
        {}
    ],
    "totalPages": 1,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [],
    "writeFields": [
        "email",
        "phone",
        "string"
    ],
    "structures": {},
    "isSuccessWrite": false,
    "writeError": null,
    "writeResponse": null,
    "fileds": [
        {
            "sysName": "email",
            "dataType": "string",
            "name": "",
            "id": "76631713448401631",
            "link": "",
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
            "format": "email",
            "formatOptions": {},
            "groupName": null,
            "arrayLink": false,
            "linkType": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "phone",
            "dataType": "string",
            "name": "",
            "id": "90381713448410310",
            "link": "",
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
            "format": "phone",
            "formatOptions": {},
            "groupName": null,
            "arrayLink": false,
            "linkType": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "string",
            "dataType": "string",
            "name": "Строка",
            "id": "47481712665998001",
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
            "arrayLink": false,
            "linkType": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "indexExists": false,
            "array": false
        }
    ],
    "quickSearch": null,
    "httpParams": null,
    "cardCustomHtml": null,
    "cardCustomLayout": null,
    "comment": "Мультишаговая форма"
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
