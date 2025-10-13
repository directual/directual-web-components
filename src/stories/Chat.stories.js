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
      "sl_messages": "lia_messages_get",
      "sl_actions": "lia_actions",
      "chat_height": "",
      "sl_chats": "lia_chats",
      "chats": {
          "appearence": [
              {
                  "id": "chat_1757512658928",
                  "type": "personal",
                  "imageSize": 50,
                  "imageField": "image",
                  "title": "<b>{{title}}</b><br />\n<span class=\"noWrap\">{{context.title}}</span>",
                  "layout": "default",
                  "html": ""
              }
          ],
          "chatTitle": "LIA: ИИ-ассистент",
          "useReplyButtons": true,
          "replyButtonsField": "buttons",
          "hideSearchBar": false
      },
      "messages": {
          "userIDField": "user_id",
          "textField": "text",
          "attachmentsField": "attachments",
          "typeField": "type",
          "dateTimeField": "date",
          "customFooterField": "custom_footer"
      },
      "actions": {
          "textField": "payload",
          "attachmentsField": "attachments",
          "actionTypeField": "action_type",
          "chatLinkField": "chat_id",
          "otherActions": []
      },
      "defaultChatPanelWith": 300,
      "maxChatPanelWith": 800,
      "chat_format": "compact"
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

