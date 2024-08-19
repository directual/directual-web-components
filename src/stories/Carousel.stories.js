import React from 'react';
import FpsCarousel from '../components/fps/carousel/FpsCarousel';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

export default {
  title: 'FPS/Components/Carousel',
  component: FpsCarousel,
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

const carouselData = {
    "type": "Photo carousel",
    "photo_source": "all objects",
    "height": 350,
    "loop": "true",
    "api": "banners",
    "photo": "image",
    "link": "{{link}}",
    "nav_buttons": "true",
    "dot_buttons": "true",
    "nav_buttons_style": "transparent buttons on the sides",
    "thumbnails": "false",
    "autoplay": "true",
    "comment": "Баннеры на главной",
    "alignment": "center",
    "max_width": 150,
    "css_class": "karusel",
    "slide_gaps": "10",
    "__libs__": [],
    "__header__": "",
    "__initialize__": null,
    "__update__": null,
    "__destroy__": null,
    "__data__": {
        "slide_gaps": "10",
        "nav_buttons_style": "transparent buttons on the sides",
        "link": "{{link}}",
        "photo": "image",
        "dot_buttons": "true",
        "_api_": {
            "api": "https://api.directual.com/good/api/v5/data/banners/banners?appID=57a414d4-c47c-4731-88d7-eca69e2115f8"
        },
        "autoplay": "true",
        "max_width": "150",
        "css_class": "karusel",
        "nav_buttons": "true",
        "photo_source": "all objects",
        "loop": "true",
        "comment": "Баннеры на главной",
        "api": [
            {
                "arrayLink": [
                    "https://api.alfa.directual.com/fileUploaded/rubrick-shop/43aa6eab-db85-40b7-a70a-62c47b97b7fb.jpg",
                    "https://api.alfa.directual.com/fileUploaded/rubrick-shop/f099f744-689f-469d-b938-914ea68a3373.jpg",
                    "https://api.alfa.directual.com/fileUploaded/rubrick-shop/06c83391-e629-47ef-95d4-0dce33556b56.jpg",
                    "https://api.alfa.directual.com/fileUploaded/rubrick-shop/efceb19a-a224-4543-8f8e-4340f9baa717.jpg"
                ],
                "link": "/competition",
                "image": "https://api.alfa.directual.com/fileUploaded/rubrick-shop/efceb19a-a224-4543-8f8e-4340f9baa717.jpg",
                "id": "1"
            },
            {
                "image": "https://api.alfa.directual.com/fileUploaded/rubrick-shop/06c83391-e629-47ef-95d4-0dce33556b56.jpg",
                "link": "/feedback",
                "id": "2"
            },
            {
                "image": "https://api.alfa.directual.com/fileUploaded/rubrick-shop/f099f744-689f-469d-b938-914ea68a3373.jpg",
                "link": "/feedback",
                "id": "3"
            },
            {
                "link": "/competition",
                "image": "https://api.alfa.directual.com/fileUploaded/rubrick-shop/43aa6eab-db85-40b7-a70a-62c47b97b7fb.jpg",
                "id": "4"
            }
        ],
        "alignment": "center",
        "thumbnails": "false",
        "height": "350"
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
    data: carouselData,
    locale: "ENG",
    auth: authExample,
  },
};

