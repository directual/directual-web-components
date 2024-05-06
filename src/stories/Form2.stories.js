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
                "id": "step_1714495808163",
                "sysName": "pictures",
                "elements": [
                    {
                        "id": "elmnt_1714901508576",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17149015104850.23022434203230044403034",
                                "_field": "pictures",
                                "_field_arrayLink_type": "tags",
                                "_field_arrayLink_endpoint": "getimages",
                                "_field_arrayLink_images_width": 100,
                                "_field_arrayLink_images_height": 100,
                                "_field_arrayLink_images_resize": "cover",
                                "_field_required": true,
                                "_field_add_description": true,
                                "_field_description_text": "ahaha",
                                "_field_arrayLink_tags_count": 0
                            },
                            {
                                "id": "17149015118550.22013432400014104334",
                                "_field": "one_picture",
                                "_field_link_type": "tags",
                                "_field_arrayLink_endpoint": "getimages",
                                "_field_arrayLink_images_width": 50,
                                "_field_arrayLink_images_height": 50,
                                "_field_arrayLink_images_resize": "cover"
                            }
                        ],
                        "_input_fields_in_a_row": 2,
                        "_input_fields_in_a_row_column": "column"
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
            },
            {
                "id": "action_1714371469576",
                "name": "Go to step 2",
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1714371476783",
                        "field": "FormState.step",
                        "value": "2"
                    }
                ]
            },
            {
                "id": "action_copy_1714371483488",
                "name": "Go to step 3",
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1714371476783",
                        "field": "FormState.step",
                        "value": "3"
                    }
                ]
            },
            {
                "id": "action_copy_1714371492012",
                "name": "Go to step 1",
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1714371476783",
                        "field": "FormState.step",
                        "value": "1"
                    }
                ]
            }
        ],
        "hideHint": true,
        "form_title": "New form ",
        "form_description": "",
        "form_maxWidth": 500,
        "state": {
            "step": "pictures",
            "message": "При пожаре воруй, убивай, еби гусей, жди ответного гудка!",
            "filter": ""
        },
        "general": {
            "edittingOn": false,
            "showState": true,
            "showModel": true
        },
        "hideActionsHint": true,
        "form_titleRaw": false
    },
    "tableTitle": null,
    "actions": null,
    "headers": [],
    "data": [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {}
    ],
    "totalPages": 2,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [],
    "writeFields": [
        "pictures",
        "one_picture"
    ],
    "structures": {},
    "isSuccessWrite": false,
    "writeError": null,
    "writeResponse": null,
    "fileds": [
        {
            "sysName": "pictures",
            "dataType": "arrayLink",
            "name": "",
            "id": "86211714495762107",
            "link": "pictures",
            "group": "0",
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
            "linkType": false,
            "indexExists": false,
            "arrayLink": true,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
            "array": false
        },
        {
            "sysName": "one_picture",
            "dataType": "link",
            "name": "Picture",
            "id": "75731714981605900",
            "link": "pictures",
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 41,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "linkType": true,
            "indexExists": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
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
