import { FpsLayout } from '../components/fps/layout/fpsLayout/fpsLayout';

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
                        "id": "column_01",
                        "content": {
                            "clazz": "FpsPlugin",
                            "id": "comp_1750238775553",
                            "extend": "FpsChat",
                            "plugin": "FpsPlugin_com.directual.core.domain.plugin.ExternalPlugin:FpsChat:1736941852478",
                            "component": "FpsPlugin_com.directual.core.domain.plugin.ExternalPlugin:FpsChat:1736941852478"
                        },
                        "size": 100
                    }
                ],
                "spacing": {
                    "marginTop": "0",
                    "marginRight": "0",
                    "marginBottom": "0",
                    "marginLeft": "0"
                }
            },
            {
                "id": "section_1750354386426",
                "tab": "tab_01",
                "columns": [
                    {
                        "id": "column_1750354386426",
                        "content": {
                            "clazz": "FpsPlugin",
                            "id": "comp_1750354390376",
                            "extend": null,
                            "plugin": "FpsPlugin_com.directual.core.domain.plugin.ExternalPlugin:socketio:1660916044782",
                            "component": "FpsPlugin_com.directual.core.domain.plugin.ExternalPlugin:socketio:1660916044782"
                        },
                        "size": 100
                    }
                ],
                "flexDirection": {
                    "mobile": "column",
                    "tablet": "row",
                    "desktop": "row"
                },
                "spacing": {
                    "marginTop": "0",
                    "marginRight": 24,
                    "marginBottom": "0",
                    "marginLeft": 24
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

