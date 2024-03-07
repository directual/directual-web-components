import { FpsLayout } from '../components/fps/layout/fpsLayout/fpsLayout';
import 'mapbox-gl/dist/mapbox-gl.css'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

const layoutExample = {
  "showHeader": true,
  "header": "Raise ticket",
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
                          "clazz": "FpsForm",
                          "id": "comp_1707656265192"
                      },
                      "size": 100
                  }
              ],
              "maxWidth": 500,
              "align": "center",
              "spacing": {
                  "marginTop": 24,
                  "marginRight": 24,
                  "marginBottom": 24,
                  "marginLeft": 24,
                  "paddingRight": "24",
                  "paddingLeft": "24"
              },
              "cssClass": "testOne testTwo"
          },
          {
              "id": "section_1709804166639",
              "tab": "tab_01",
              "columns": [
                  {
                      "id": "column_1709804166639",
                      "content": {
                          "clazz": "FpsHtml",
                          "id": "comp_1709804172141"
                      },
                      "size": 50
                  },
                  {
                      "id": "column_1709804203043",
                      "content": {
                          "clazz": "FpsHtml",
                          "id": "comp_1709804208549"
                      },
                      "size": 50
                  }
              ],
              "flexDirection": {
                  "mobile": "column",
                  "tablet": "row",
                  "desktop": "row"
              },
              "horSpacing": 50,
              "vertSpacing": 50,
              "spacing": {
                  "marginTop": 24,
                  "marginRight": 24,
                  "marginBottom": "0",
                  "marginLeft": 24,
                  "paddingTop": "48",
                  "paddingBottom": "48"
              }
          },
          {
              "id": "section_1709804166639_copy_1709804243230",
              "tab": "tab_01",
              "columns": [
                  {
                      "id": "column_1709804166639_copy_1709804243231",
                      "content": {
                          "clazz": "FpsHtml",
                          "id": "copy_comp_.uh6l1hl5lom"
                      },
                      "size": 50
                  },
                  {
                      "id": "column_1709804203043_copy_1709804243231",
                      "content": {
                          "clazz": "FpsHtml",
                          "id": "copy_comp_.e329r3cpvhr"
                      },
                      "size": 50
                  }
              ],
              "flexDirection": {
                  "mobile": "column",
                  "tablet": "column",
                  "desktop": "column"
              },
              "horSpacing": 55,
              "vertSpacing": 50,
              "spacing": {
                  "marginTop": "0",
                  "marginRight": "0",
                  "marginBottom": "0",
                  "marginLeft": "0"
              },
              "maxWidth": 700,
              "align": "left"
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

