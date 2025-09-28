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
                            "clazz": "FpsMarkdown",
                            "id": "comp_1759079677784"
                        },
                        "size": 100
                    }
                ],
                "modalVisibility": "modal"
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

