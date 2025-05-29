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
  "params": {
      "chat_height": "calc(100vh - 60px)",
      "sl_messages": "ChatMessages",
      "sl_actions": "ChatActions",
      "sl_chats": "ChatChats",
      "actions": {
          "textField": "payload",
          "attachmentsField": "attachments",
          "actionTypeField": "action",
          "chatLinkField": "chat_id"
      },
      "chats": {
          "appearence": [
              {
                  "id": "chat_1747586883133",
                  "type": "personal",
                  "layout": "default",
                  "imageField": "image",
                  "title": "{{title}}"
              }
          ],
          "chatTitle": "Hello!",
          "useDifferentTypes": false
      },
      "messages": {
          "userIDField": "user_id",
          "textField": "text",
          "attachmentsField": "attachments",
          "dateTimeField": "date",
          "customFooterField": "custom_footer",
          "typeField": "text"
      },
      "chat_format": "full"
  },
  "sl": "",
  "__libs__": [],
  "__header__": "",
  "__initialize__": null,
  "__update__": null,
  "__destroy__": null,
  "__data__": {
      "_api_": {}
  }
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

