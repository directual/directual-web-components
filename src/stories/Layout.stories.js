import { FpsLayout } from '../components/fps/layout/fpsLayout/fpsLayout';
import 'mapbox-gl/dist/mapbox-gl.css'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

const layoutExample = {
  "isCustom": "custom",
  "tabs": [
      {
          "id": "tab_1709549755259",
          "title": "Tab 1",
          "onlyAuth": false,
          "roles": null
      }
  ],
  "sections": {
      "tab_1709549755259": [
          {
              "id": "section_1710235341661",
              "tab": "tab_1709549755259",
              "columns": [
                  {
                      "id": "column_1710235341661",
                      "content": {
                          "clazz": "FpsHtml",
                          "id": "comp_1710235351817"
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
                  "marginTop": 24,
                  "marginRight": 24,
                  "marginBottom": "0",
                  "marginLeft": 24,
                  "paddingBottom": "0"
              }
          },
          {
              "id": "section_1709549755259",
              "tab": "tab_1709549755259",
              "columns": [
                  {
                      "id": "column_1709549755259",
                      "content": {
                          "clazz": "FpsMarkdown",
                          "id": "comp_1709550117457"
                      },
                      "size": 100
                  }
              ],
              "flexDirection": {
                  "mobile": "column",
                  "tablet": "row",
                  "desktop": "row"
              },
              "cssClass": "c2",
              "spacing": {
                  "marginTop": "0",
                  "marginRight": "0",
                  "marginBottom": "0",
                  "marginLeft": "0",
                  "paddingTop": "0",
                  "paddingBottom": "0",
                  "paddingLeft": "0",
                  "paddingRight": "0"
              }
          },
          {
              "id": "section_1709550898259",
              "tab": "tab_1709549755259",
              "columns": [
                  {
                      "id": "column_1709550898259",
                      "content": {
                          "clazz": "FpsHtml",
                          "id": "comp_1709552579296"
                      },
                      "size": 40
                  },
                  {
                      "id": "column_1709550918466",
                      "content": {
                          "clazz": "FpsTable",
                          "id": "comp_1709553458169"
                      },
                      "size": 60
                  }
              ],
              "flexDirection": {
                  "mobile": "column",
                  "tablet": "row",
                  "desktop": "row"
              },
              "horSpacing": 24,
              "maxWidth": null,
              "cssClass": "block-module",
              "spacing": {
                  "marginTop": "0",
                  "marginRight": 24,
                  "marginBottom": 24,
                  "marginLeft": 24
              }
          },
          {
              "id": "section_1709552913006",
              "tab": "tab_1709549755259",
              "columns": [
                  {
                      "id": "column_1709552922305",
                      "content": {
                          "clazz": "FpsHtml",
                          "id": "comp_1709702899167"
                      },
                      "size": 40
                  },
                  {
                      "id": "column_1709552913006",
                      "content": {
                          "clazz": "FpsTable",
                          "id": "comp_1709709377835"
                      },
                      "size": 60
                  }
              ],
              "flexDirection": {
                  "mobile": "column",
                  "tablet": "row",
                  "desktop": "row"
              },
              "cssClass": "modal-section"
          },
          {
              "id": "section_1710159434369",
              "tab": "tab_1709549755259",
              "columns": [
                  {
                      "id": "column_1710159434369",
                      "content": {
                          "clazz": "FpsHtml",
                          "id": "comp_1710159439097"
                      },
                      "size": 40
                  },
                  {
                      "id": "column_1710159441104",
                      "content": {
                          "clazz": "FpsHtml",
                          "id": "comp_1710162068417"
                      },
                      "size": 60
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

