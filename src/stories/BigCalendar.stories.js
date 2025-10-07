import BigCalendar from '../components/fps/bigCalendar/bigCalendar'

export default {
    title: 'FPS/Components/BigCalendar',
    component: BigCalendar,
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
    "sl_events": "events",
    "__libs__": [],
    "__header__": "",
    "__initialize__": null,
    "__update__": null,
    "__destroy__": null,
    "__data__": {
        "sl_events": [
            {
                "id": "0b2a2600-0b6b-4bf2-888a-086912392845",
                "mode": "event",
                "end": 1759950000000,
                "title": "Event-1",
                "start": 1759863600000
            },
            {
                "id": "662a453b-f4cc-42ce-b1ad-264ea1bf0326",
                "mode": "event",
                "end": 1759888800000,
                "title": "Event-2",
                "start": 1759863600000
            }
        ],
        "_api_": {
            "sl_events": "https://api.directual.com/good/api/v5/data/events/events?appID=0d165fd9-a082-4cdf-8e9a-ea69f794698c"
        }
    }
}

export const Regular = {
    args: {
        data: CalendarData,
        locale: {},
        auth: {}
    }
}