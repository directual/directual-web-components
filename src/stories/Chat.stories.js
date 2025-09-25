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
  "sl": "",
  "pageSize": null,
  "headerField": null,
  "params": {
      "sl_messages": "messengerGetMessages",
      "sl_actions": "messengerPostActions",
      "actions": {
          "textField": "payload",
          "attachmentsField": "attachments",
          "actionTypeField": "action_type",
          "chatLinkField": "chat_id",
          "otherActions": [
              {
                  "id": "action_1750350660389",
                  "name": "New chat",
                  "actionIcon": "plus",
                  "actionPlace": "contacts_button",
                  "actionType": "new_chat"
              },
              {
                  "id": "action_1750350684739",
                  "name": "Delete chat",
                  "actionIcon": "delete",
                  "actionType": "delete_chat"
              },
              {
                  "id": "action_1750350702638",
                  "name": "Clear chat",
                  "actionIcon": "ban",
                  "actionType": "clear_chat"
              },
              {
                  "id": "action_copy_1758835918200",
                  "name": "New chat",
                  "actionIcon": "plus",
                  "actionPlace": "empty_chat",
                  "actionType": "new_chat"
              }
          ]
      },
      "messages": {
          "userIDField": "user_id",
          "textField": "text",
          "attachmentsField": "attachments",
          "typeField": "type",
          "dateTimeField": "date",
          "customFooterField": "custom_footer",
          "formatting": "markdown"
      },
      "chat_height": "",
      "sl_chats": "messengerGetChats",
      "chats": {
          "appearence": [
              {
                  "id": "chat_1750350599461",
                  "type": "personal",
                  "imageSize": 50,
                  "imageField": "image",
                  "title": "<b>{{title}}</b><br />\n{{description}}"
              }
          ],
          "chatTitle": "{{title}}",
          "useDifferentTypes": false,
          "hideSearchBar": true
      },
      "defaultChatPanelWith": 400,
      "maxChatPanelWith": 800
  },
  "tableTitle": null,
  "actions": [],
  "headers": [],
  "data": [],
  "totalPages": 0,
  "pageNumber": 0,
  "error": "511",
  "fieldScheme": [],
  "writeFields": [],
  "structures": {},
  "isSuccessWrite": false,
  "writeError": null,
  "writeResponse": null,
  "fileds": [],
  "quickSearch": "",
  "httpParams": {},
  "cardCustomHtml": null,
  "cardCustomLayout": {},
  "comment": "",
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

