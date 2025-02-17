import FpsCards2 from '../components/fps/viewobjects/cards2/FpsCards2'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

export default {
  title: 'FPS/Components/Cards2',
  component: FpsCards2,
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

let exampleTable = {
    "sl": "get_subjects_for_user",
    "pageSize": "10",
    "headerField": null,
    "params": {
        "comp_ID": "KEXUmq",
        "cards_layout": "grid",
        "card_layout_type": "regular",
        "html_type_content": "{{SubjectName}}",
        "grid_layout__mobile": 1,
        "card_type_dir": {
            "image_position": "left",
            "body": "{{SubjectName}}\n{{id}}",
            "favoritesOn": true,
            "actionsOn": false,
            "actionsLayout": "column",
            "_actions": [
                {
                    "id": "action_1739609131264",
                    "action_id": "action_1739609109713",
                    "_action_icon": "checkbox",
                    "_action_addTooltip": false,
                    "_conditionalView": false,
                    "_action_button_size": "small"
                }
            ],
            "favoritesPosition": "left",
            "favoritesIconOff": "academy",
            "favoritesEndpoint": "add_selected_subject_user",
            "favoritesField": "subject",
            "favoritesHiddenField": "is_hidden",
            "image": "",
            "image_height": 55,
            "image_padding": -2,
            "favoritesIconOn": "babai"
        },
        "actions": [],
        "routing": "disable",
        "routing_where": "./{{id}}",
        "card_min_height": 53
    },
    "tableTitle": null,
    "actions": null,
    "headers": [
        {
            "sysName": "id",
            "name": "id",
            "dataType": "id",
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "SubjectName",
            "name": "SubjectName",
            "dataType": "string",
            "id": "85401738674743956",
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "array": false
        }
    ],
    "data": [
        {
            "SubjectName": "Русский язык",
            "id": "51d29b92-9395-4c3c-b8b4-85bf38a7f4a3"
        },
        {
            "SubjectName": "Математика",
            "id": "e0454b76-6da1-4260-a0e6-cf7de6f2b686"
        },
        {
            "SubjectName": "Тестовый",
            "id": "a60d2fd3-93d7-4fc1-a843-922a28867e87"
        }
    ],
    "totalPages": 1,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [
        [
            "id",
            99369220
        ],
        [
            "SubjectName",
            99369220
        ]
    ],
    "writeFields": [],
    "structures": {
        "99369220": {
            "networkID": 22922,
            "sysName": "subjects",
            "name": "Subjects",
            "id": 99369220,
            "dateCreated": "2025-02-04T13:11:43Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"SubjectName\",\"dataType\":\"string\",\"name\":\"SubjectName\",\"id\":\"85401738674743956\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"Sections\",\"dataType\":\"arrayLink\",\"name\":\"Sections\",\"id\":\"61801738676204371\",\"link\":\"sections\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"deleted\",\"dataType\":\"boolean\",\"name\":\"\",\"id\":\"44871739266534224\",\"link\":\"\",\"group\":\"1738674919887\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false}]",
            "jsonGroupSettings": "[{\"name\":\"New Group 1\",\"id\":1738674919887,\"order\":0}]",
            "jsonViewIdSettings": "[{\"sysName\":\"SubjectName\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2025-02-13T17:00:01Z",
            "createBy": 29295,
            "changedBy": 29295,
            "_settings": null,
            "_nativeIndexSettings": null,
            "innerIDField": {
                "sysName": "id",
                "name": "id",
                "dataType": "id",
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
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "array": false
            },
            "objectIDSysName": "id",
            "folderId": 33834766
        }
    },
    "isSuccessWrite": false,
    "writeError": null,
    "writeResponse": null,
    "fileds": [],
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
    data: exampleTable,
    auth: authExample,
    locale: 'ENG',
    onChange: value => console.log(value),
    handleRoute: value => e => console.log("route => " + value),
  },
};
