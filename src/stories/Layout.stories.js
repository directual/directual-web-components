import { FpsLayout } from '../components/fps/layout/fpsLayout/fpsLayout';
import 'mapbox-gl/dist/mapbox-gl.css'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

const layoutExample = {
    "showHeader": false,
    "header": "",
    "tabs": [
        {
            "id": "tab_01",
            "title": "Tab 1",
            "onlyAuth": false,
            "roles": null
        }
    ],
    "sections": {
        "tab_01": [
            {
                "id": "section_01",
                "onlyAuth": false,
                "roles": null,
                "flexDirection": {
                    "mobile": "column",
                    "tablet": "row",
                    "desktop": "row"
                },
                "columns": [
                    {
                        "id": "column_1716724389574",
                        "content": {
                            "clazz": "FpsMarkdown",
                            "id": "comp_1716729175035"
                        },
                        "size": 100
                    }
                ],
                "endpoint": "resetPwdFromProfile",
                "_visibilityEndpoint": "getOrders",
                "_visibilityConditions": {
                    "_conditions": [
                        {
                            "id": "condition_1716729238905",
                            "_conditionalView_field": "isPaid",
                            "_conditionalView_operator": "==",
                            "_conditionalView_value": "true"
                        }
                    ],
                    "_action_conditionals_and_or": "OR"
                }
            },
            {
                "id": "section_1716729135423",
                "tab": "tab_01",
                "columns": [
                    {
                        "id": "column_1716729135423",
                        "content": {
                            "clazz": "FpsMarkdown",
                            "id": "comp_1716729140641"
                        },
                        "size": 100
                    }
                ],
                "flexDirection": {
                    "mobile": "column",
                    "tablet": "row",
                    "desktop": "row"
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

