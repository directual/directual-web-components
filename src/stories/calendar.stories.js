import MyCalendar from '../components/fps/calendar/calendar'

export default {
  title: 'FPS/Components/MyCalendar',
  component: MyCalendar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'left'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // icon: { control: 'select', options: {} },
  }
}

const CalendarData = 
  {
    "locale": "",
    "libs": [],
    "header": "",
    "initialize": "",
    "update": "",
    "destroy": "",
    "data": {}
}

export const Regular = {
  args: {
    data: CalendarData,
    locale: {},
    auth: {}
  }
}
