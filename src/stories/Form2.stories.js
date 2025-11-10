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
    "sl": "anonymAuth",
    "pageSize": "10",
    "headerField": null,
    "params": {
        "steps": [
            {
                "id": "default_step",
                "sysName": "default step",
                "elements": [
                    {
                        "id": "elmnt_1762792946593",
                        "type": "text",
                        "paraText": "<h1>\n  HELLO!\n</h1>"
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
        ]
    },
    "tableTitle": null,
    "actions": [],
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
        "actionType"
    ],
    "structures": {},
    "isSuccessWrite": false,
    "writeError": null,
    "writeResponse": null,
    "fileds": [
        {
            "sysName": "actionType",
            "name": "",
            "dataType": "string",
            "id": "99271762705722522",
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
    "empl_who_delegated_ids": "",
    "isAuth": true,
    "custom_labels": "",
    "role": "hrbp",
    "employee_ids": "0ЛЗК-00950",
    "who_delegated_ids": "",
    "token": "319dffb0-611f-4dd8-b6da-4e422101de49",
    "whom_delegate_ids": "",
    "empl_whom_delegate_ids": "",
    "notifications_counter": "",
    "nid": 33745,
    "userpic": null,
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
