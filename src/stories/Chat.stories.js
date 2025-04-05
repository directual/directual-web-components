import React from 'react';
import FpsChat from '../components/fps/chat/chat';


export default {
  title: 'FPS/Components/Chat',
  component: FpsChat,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'left',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // icon: { control: 'select', options: icon_options.map(t => t.key) },
  },
};

const chatData = {
  "sl": "-",
  "pageSize": null,
  "headerField": null,
  "params": {
      "chats": {
          "appearence": [
              {
                  "id": "chat_1743320625730",
                  "type": "personal",
                  "imageField": "image",
                  "title": "<b>{{title}}</b><br />\n{{description}}"
              }
          ],
          "useDifferentTypes": true
      },
      "sl_chats": "chatContacts",
      "sl_messages": "chatMessages",
      "messages": {
          "userIDField": "user_id",
          "textField": "text",
          "attachmentsField": "attachments",
          "typeField": "type",
          "dateTimeField": "date"
      },
      "sl_actions": "cahtActions",
      "actions": {
          "textField": "payload",
          "attachmentsField": "attachments",
          "actionTypeField": "actions",
          "chatLinkField": "chat_id",
          "otherActions": [
              {
                  "id": "action_1743873880726",
                  "name": "Clear chat",
                  "actionIcon": "ban",
                  "actionPayload": "clear",
                  "actionType": "clear"
              }
          ]
      }
  },
  "tableTitle": null,
  "actions": null,
  "headers": null,
  "data": null,
  "totalPages": 0,
  "pageNumber": 0,
  "error": "511",
  "fieldScheme": null,
  "writeFields": null,
  "structures": null,
  "isSuccessWrite": false,
  "writeError": null,
  "writeResponse": null,
  "fileds": null,
  "quickSearch": null,
  "httpParams": null,
  "cardCustomHtml": null,
  "cardCustomLayout": null,
  "comment": null,
  "response": null
}

let authExample = {
  "isAuth": true,
  "custom_labels": "{\n   \"foo\": \"hello brave new world!\",\n   \"bar\": \"foobar\"\n}",
  "role": "admin",
  "lastName": "Watson",
  "firstName": "David",
  "token": "1a9f10d0-d45f-4bf2-9e7e-d6ce2e752d03",
  "notifications_counter": "",
  "nid": 18924,
  "user": "1",
  //"userpic": "https://api.directual.com/fileUploaded/basic-template/efdd480a-d36a-4a01-ac82-baf871ffd2fd.jpg"
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Regular = {
  args: {
    data: chatData,
    locale: "ENG",
    auth: authExample,
  },
};

