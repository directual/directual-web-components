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
    "sl": "resetPwdFromProfile",
    "pageSize": "10",
    "headerField": null,
    "params": {
        "steps": [
            {
                "id": "default_step",
                "sysName": "default step",
                "elements": [
                    {
                        "id": "elmnt_1716556083049",
                        "type": "hint",
                        "hintColor": "error",
                        "hintText": "",
                        "hintTitle": "{{FormState.error}}",
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1716556380879",
                                "_conditionalView_field": "FormState.error",
                                "_conditionalView_operator": "isNotNull"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1716556007007",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17165560098610.31341202122204301013414",
                                "_field": "old_password"
                            }
                        ]
                    },
                    {
                        "id": "elmnt_1716556013104",
                        "type": "subheader",
                        "subheaderTitle": "New password"
                    },
                    {
                        "id": "elmnt_1716556023443",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17165560260880.44012020133311244332333",
                                "_field": "new_password"
                            },
                            {
                                "id": "17165560271750.040422311121321322243334",
                                "_field": "repeat_new_password"
                            }
                        ],
                        "_input_fields_in_a_row": 2,
                        "_input_fields_in_a_row_column": "column"
                    },
                    {
                        "id": "elmnt_1716556398231",
                        "type": "submit",
                        "submitLabel": "Change password",
                        "_conditionalView": true,
                        "_conditions": [
                            {
                                "id": "condition_1716556551501",
                                "_conditionalView_field": "new_password",
                                "_conditionalView_operator": "isNotNull"
                            }
                        ],
                        "submitKeepModel": true
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
        "form_title": "Change password",
        "hideHint": true,
        "form_maxWidth": 500,
        "state": {
            "step": "default step",
            "popup": null,
            "error": ""
        },
        "general": {
            "showModel": true
        }
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
        "new_password",
        "old_password",
        "repeat_new_password"
    ],
    "structures": {},
    "isSuccessWrite": false,
    "writeError": null,
    "writeResponse": null,
    "fileds": [
        {
            "sysName": "new_password",
            "dataType": "string",
            "name": "New password",
            "id": "12481639913491522",
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
            "format": "password",
            "formatOptions": {},
            "groupName": null,
            "array": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false
        },
        {
            "sysName": "old_password",
            "dataType": "string",
            "name": "Old password",
            "id": "45761639913482151",
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
            "format": "password",
            "formatOptions": {},
            "groupName": null,
            "array": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false
        },
        {
            "sysName": "repeat_new_password",
            "dataType": "string",
            "name": "Repeat new password",
            "id": "16431639913492145",
            "link": "",
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
            "format": "password",
            "formatOptions": {},
            "groupName": null,
            "array": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false
        }
    ],
    "quickSearch": null,
    "httpParams": null,
    "cardCustomHtml": null,
    "cardCustomLayout": null,
    "comment": null
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
