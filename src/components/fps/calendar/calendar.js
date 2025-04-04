import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import React, { useEffect, useMemo, useState, useCallback } from 'react'
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import PropTypes from 'prop-types'
import moment from 'moment'
import _ from 'lodash'

const localizer = momentLocalizer(moment)

const Events = [
  {
    id: 900,
    start: moment().toDate(),
    end: moment().add(1, 'h').toDate(),
    title: 'Some title'
  },
  {
    id: 90,
    start: moment().subtract(3, 'h').toDate(),
    end: moment().subtract(2, 'h').toDate(),
    title: 'le1'
  },
  {
    id: 901,
    start: moment().subtract(3, 'h').toDate(),
    end: moment().subtract(2, 'h').toDate(),
    title: 'le2'
  },
  {
    id: 903,
    start: moment().subtract(3, 'h').toDate(),
    end: moment().subtract(2, 'h').toDate(),
    title: 'le3'
  },
  {
    id: 907,
    start: moment().subtract(3, 'h').toDate(),
    end: moment().subtract(2, 'h').toDate(),
    title: 'le444'
  }
]

const BackgroundEvents = [
  {
    id: 0,
    title: 'Available for Clients',
    start: new Date(2015, 3, 13, 6),
    end: new Date(2015, 3, 13, 18)
  },
  {
    id: 1,
    title: 'sd f',
    start: new Date(2015, 3, 13, 6),
    end: new Date(2015, 3, 13, 18)
  }
]

const DnDCalendar = withDragAndDrop(Calendar)

export default function MyCalendar({ data }) {
  const [events, setEvents] = useState(Events)
  const [backEvents, setBackEvents] = useState(_.get(data, 'backEvents', null))

  console.log("LOC : ", data.locale)

  useEffect(() => {
    setEvents(Events)
    setBackEvents(BackgroundEvents)
  }, [])

  const onEventResize = (data) => {
    const { event, start, end } = data
    setEvents(
      events.map((e) => {
        if (e.id === event.id) {
          e.start = start
          e.end = end
        }
        return e
      })
    )
  }

  const onEventDrop = (data) => {
    const { event, start, end } = data
    setEvents(
      events.map((e) => {
        if (e.id === event.id) {
          e.start = start
          e.end = end
        }
        return e
      })
    )
  }

  const handleSelectEvent = useCallback(
    (event) => window.alert(event.title),
    []
  )

  const handleSelectSlot = useCallback(
    ({ start, end }) => {
      const title = window.prompt('New Event name')
      if (title) {
        setEvents((prev) => [...prev, { start, end, title }])
      }
    },
    [setEvents]
  )

  const { defaultDate, scrollToTime } = useMemo(
    () => ({
      defaultDate: new Date(2015, 3, 12),
      scrollToTime: new Date(1970, 1, 1, 6)
    }),
    []
  )

  return (
    <div>
      <DnDCalendar
        defaultDate={moment().toDate()}
        defaultView='month'
        events={events}
        localizer={localizer}
        style={{ height: '100vh' }}
        onEventDrop={onEventDrop}
        onEventResize={onEventResize}
        resizable
        popup
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
        selectable
        scrollToTime={scrollToTime}
        culture={data.locale ? data.locale : "en"}
      />
    </div>
  )
}

Calendar.propTypes = {
  data: PropTypes.object,
  auth: {},
  locale: {}
}

Calendar.defaultProps = {
  data: {},
  auth: {},
  locale: 'ENG'
}

Calendar.settings = {
  //icon: icon,
  name: 'MyCalendar',
  sysName: 'MyCalendar',
  isLegacy: false,
  isMarketplace: true
}
