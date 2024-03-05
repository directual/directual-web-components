import FpsMap from '../components/fps/dataentry/map/map';
import 'mapbox-gl/dist/mapbox-gl.css'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

export default {
  title: 'FPS/Design System/Map',
  component: FpsMap,
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
export const Regular = {
  args: {
    label: 'This is my map',
    height: '600px',
    maptoken: "pk.eyJ1IjoiZGlyZWN0dWFsMTIzIiwiYSI6ImNscXkxZmZvOTBrNW4ya21pOXRyM2FqY2QifQ.ECQA2moC4r6-Zb0eAtTXpw",
    jsonView: false,
    edit: false,
    defaultValue: {
      "data": [
          {
              "id": 1709649755976,
              "latitude": 37.868871551387045,
              "longitude": -121.76671998046874,
              "title": "New Marker",
              "text": "hello",
              "link": "there"
          }
      ]
  },
    onChange: value => console.log(value),
  },
};

