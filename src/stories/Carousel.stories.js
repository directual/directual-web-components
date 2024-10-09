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
  "photo_source": "first object (multiple images field)",
  "height": 400,
  "slide_gaps": "10",
  "alignment": "center",
  "nav_buttons": "true",
  "dot_buttons": "true",
  "nav_buttons_style": "transparent buttons on the sides",
  "thumbnails": "false",
  "loop": "true",
  "autoplay": "true",
  "api": "getProductByID",
  "array_photos": "additionalPhotos",
  "__libs__": [],
  "__header__": "",
  "__initialize__": null,
  "__update__": null,
  "__destroy__": null,
  "__data__": {
      "slide_gaps": "10",
      "nav_buttons_style": "transparent buttons on the sides",
      "dot_buttons": "true",
      "_api_": {
          "api": "https://api.directual.com/good/api/v5/data/Product/getProductByID?appID=57a414d4-c47c-4731-88d7-eca69e2115f8"
      },
      "autoplay": "true",
      "array_photos": "additionalPhotos",
      "nav_buttons": "true",
      "photo_source": "first object (multiple images field)",
      "loop": "true",
      "api": [
          {
              "weight": 1500,
              "visibleName": "Дед Мороз",
              "ozon": "—",
              "price": 1,
              "productCategoryID": {
                  "id": "b89ff0d4-3888-46d0-bc92-d7adfe4f0fb2",
                  "title": "Новогодняя коллекция"
              },
              "mainPhoto": "https://api.directual.com/fileUploaded/rubrick-shop/web/e4b5a9dd-5518-403a-9513-75f4431120c6.jpg",
              "id": "646912c8-5484-403a-8008-a1941fa223d7",
              "wareKey": "4680707180111",
              "yandexMarket": "—",
              "title": "Дед Мороз",
              "additionalPhotos": [
                  "https://api.directual.com/fileUploaded/rubrick-shop/web/b82e8cc3-5f60-47e0-b5d2-6bb9e6543d86.jpg",
                  "https://api.directual.com/fileUploaded/rubrick-shop/web/14feeb93-f76c-4c00-aca9-233b48cd57d9.jpg",
                  "https://api.directual.com/fileUploaded/rubrick-shop/web/56e2a7ab-f6fd-40bb-ac3d-27bb0e92ffc0.jpg",
                  "https://api.directual.com/fileUploaded/rubrick-shop/web/246c6115-93a7-473a-bccc-8401f45e3782.mp4"
              ],
              "wildberries": "—"
          }
      ],
      "alignment": "center",
      "thumbnails": "false",
      "height": "400"
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

