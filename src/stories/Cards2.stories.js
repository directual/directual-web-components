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
    "params": {
        "comp_ID": "UgVgHL",
        "cards_title": "Корзинка",
        "general": {
            "showObjCount": true
        },
        "cards_layout": "grid",
        "card_layout_type": "cart",
        "card_type_cart": {
            "image_shape": "rect",
            "image_height": 80,
            "header": "{{item_id.title}}",
            "description": "{{item_id.description}}",
            "price": "{{item_id.price}}",
            "quantity": "quantity",
            "isDeleted": "isDeleted"
        }
    },
    "sl": "cart",
    "__libs__": [
        "https://api.alfa.directual.com/fileUploaded/directual-site/65343282-baff-4f5b-816b-6976c77f0a66.js"
    ],
    "__header__": "",
    "__initialize__": null,
    "__update__": null,
    "__destroy__": null,
    "__data__": {
        "sl": [
            {
                "item_id": {
                    "image": "https://api.alfa.directual.com/fileUploaded/new-cards/a1c74623-ea51-46e5-bae5-78a29f9eb5af.webp",
                    "description": "C-3PO longs for more peaceful times, but his continued service to the Resistance — and his knowledge of more than seven million forms of communication — keeps the worry-prone droid in the frontlines of galactic conflict. Programmed for etiquette and protocol, Threepio was built by a young Anakin Skywalker, and has been a constant companion to astromech R2-D2. Over the years, he was involved in some of the galaxy’s most defining moments and thrilling battles. Since the Empire’s defeat, C-3PO has served Leia Organa, head of a Resistance spy ring aimed at undermining the First Order.",
                    "price": 12,
                    "id": "c3po",
                    "title": "C-3PO"
                },
                "quantity": 3,
                "id": "8657b3a5-3f79-430c-b4c4-6a1b68a4679f"
            },
            {
                "item_id": {
                    "image": "https://api.alfa.directual.com/fileUploaded/new-cards/a1c74623-ea51-46e5-bae5-78a29f9eb5af.webp",
                    "description": "C-3PO longs for more peaceful times, but his continued service to the Resistance — and his knowledge of more than seven million forms of communication — keeps the worry-prone droid in the frontlines of galactic conflict. Programmed for etiquette and protocol, Threepio was built by a young Anakin Skywalker, and has been a constant companion to astromech R2-D2. Over the years, he was involved in some of the galaxy’s most defining moments and thrilling battles. Since the Empire’s defeat, C-3PO has served Leia Organa, head of a Resistance spy ring aimed at undermining the First Order.",
                    "price": 12,
                    "id": "c3po",
                    "title": "C-3PO"
                },
                "quantity": 1,
                "id": "befc3ba3-1404-4bfe-ad95-040f0484dcd8"
            },
            {
                "item_id": {
                    "image": "https://api.alfa.directual.com/fileUploaded/new-cards/a1c74623-ea51-46e5-bae5-78a29f9eb5af.webp",
                    "description": "C-3PO longs for more peaceful times, but his continued service to the Resistance — and his knowledge of more than seven million forms of communication — keeps the worry-prone droid in the frontlines of galactic conflict. Programmed for etiquette and protocol, Threepio was built by a young Anakin Skywalker, and has been a constant companion to astromech R2-D2. Over the years, he was involved in some of the galaxy’s most defining moments and thrilling battles. Since the Empire’s defeat, C-3PO has served Leia Organa, head of a Resistance spy ring aimed at undermining the First Order.",
                    "price": 12,
                    "id": "c3po",
                    "title": "C-3PO"
                },
                "quantity": 5,
                "id": "ee62e95a-d87e-4306-9dfb-15e2e909e8c7"
            },
            {
                "quantity": 2,
                "item_id": {
                    "image": "https://api.alfa.directual.com/fileUploaded/new-cards/a1c74623-ea51-46e5-bae5-78a29f9eb5af.webp",
                    "description": "C-3PO longs for more peaceful times, but his continued service to the Resistance — and his knowledge of more than seven million forms of communication — keeps the worry-prone droid in the frontlines of galactic conflict. Programmed for etiquette and protocol, Threepio was built by a young Anakin Skywalker, and has been a constant companion to astromech R2-D2. Over the years, he was involved in some of the galaxy’s most defining moments and thrilling battles. Since the Empire’s defeat, C-3PO has served Leia Organa, head of a Resistance spy ring aimed at undermining the First Order.",
                    "price": 12,
                    "id": "c3po",
                    "title": "C-3PO"
                },
                "id": "97d3fdc3-1738-48e5-ac32-2b1105b26bfc"
            }
        ],
        "_api_": {
            "sl": "https://api.directual.com/good/api/v5/data/cart_items/cart?appID=b4269309-9f7e-4072-9246-8003bc608a08"
        }
    }
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
