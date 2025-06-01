import { FpsLayout } from '../components/fps/layout/fpsLayout/fpsLayout';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

const layoutExample = {
    "isCustom": "custom",
    "tabs": [
        {
            "id": "tab_1716886796808",
            "title": "Tab 1",
            "onlyAuth": false,
            "roles": null
        }
    ],
    "sections": {
        "tab_1716886796808": [
            {
                "id": "section_1716887302488",
                "tab": "tab_1716886796808",
                "columns": [
                    {
                        "id": "column_1716887302488",
                        "content": {
                            "clazz": "FpsHint",
                            "id": "comp_1716887452263"
                        },
                        "size": 100
                    }
                ],
                "flexDirection": {
                    "mobile": "column",
                    "tablet": "row",
                    "desktop": "row"
                },
                "_visibilityEndpoint": "getBillByID",
                "_visibilityConditions": {
                    "_conditions": [
                        {
                            "id": "condition_1716887423885",
                            "_conditionalView_field": "status",
                            "_conditionalView_operator": "!==",
                            "_conditionalView_value": "new"
                        }
                    ]
                }
            },
            {
                "id": "section_1716887302488_copy_1716887468798",
                "tab": "tab_1716886796808",
                "columns": [
                    {
                        "id": "column_1716887302488_copy_1716887468798",
                        "content": {
                            "clazz": "FpsHint",
                            "id": "copy_comp_.hukj8fslr67"
                        },
                        "size": 100
                    }
                ],
                "flexDirection": {
                    "mobile": "column",
                    "tablet": "row",
                    "desktop": "row"
                },
                "_visibilityEndpoint": "getBillByID",
                "_visibilityConditions": {
                    "_conditions": [
                        {
                            "id": "condition_1716887423885",
                            "_conditionalView_field": "status",
                            "_conditionalView_operator": "!==",
                            "_conditionalView_value": "new"
                        }
                    ]
                }
            }
        ]
    }
}

export default {
  title: 'FPS/Layout/Layout',
  component: FpsLayout,
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

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const FPSLayout = {
  args: {
    layout: layoutExample,
    locale: 'ENG'
  },
};

