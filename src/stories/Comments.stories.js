import React from 'react';
import Comments from '../components/fps/comments/comments';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

export default {
  title: 'FPS/Components/Comments',
  component: Comments,
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

const commentsData = {
    "event_name_refresh": "conversations_conversationid",
    "comment": "conversations_conversationid",
    "__libs__": [
        "https://api.alfa.directual.com/fileUploaded/directual-site/65343282-baff-4f5b-816b-6976c77f0a66.js"
    ],
    "__header__": "",
    "__initialize__": null,
    "__update__": null,
    "__destroy__": null,
    "__data__": {
        "comment": "conversations_conversationid",
        "_api_": {},
        "event_name_refresh": "conversations_conversationid"
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
  "user": "nikita",
  //"userpic": "https://api.directual.com/fileUploaded/basic-template/efdd480a-d36a-4a01-ac82-baf871ffd2fd.jpg"
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Regular = {
  args: {
    data: commentsData,
    locale: "ENG",
    auth: authExample,
  },
};

