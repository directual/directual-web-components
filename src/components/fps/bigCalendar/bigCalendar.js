import React, { useEffect, useMemo, useState, useCallback } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import moment from 'moment';
import _ from 'lodash';
import PropTypes from 'prop-types';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';

const CustomToolbar = (toolbar) => {
  const goToBack = () => {
    toolbar.onNavigate('PREV');
  };

  const goToNext = () => {
    toolbar.onNavigate('NEXT');
  };

  const goToCurrent = () => {
    toolbar.onNavigate('TODAY');
  };

  const label = () => {
    return toolbar.label;
  };

  const onViewChange = (view) => {
    toolbar.onView(view);
  };

  return (
    <div className="rbc-toolbar">
      <span className="rbc-btn-group">
        <button type="button" onClick={goToBack}>
          Back
        </button>
        <button type="button" onClick={goToCurrent}>
          Today
        </button>
        <button type="button" onClick={goToNext}>
          Next
        </button>
      </span>

      <span className="rbc-toolbar-label">{label()}</span>

      <span className="rbc-btn-group">
        {toolbar.views.map((view) => (
          <button
            key={view}
            type="button"
            className={toolbar.view === view ? 'rbc-active' : ''}
            onClick={() => onViewChange(view)}
          >
            {view}
          </button>
        ))}
      </span>

      <span className="rbc-btn-group">
        <button
          type="button"
          className="calendar__save-button"
          onClick={() => alert('Save!')}
        >
          Save
        </button>
      </span>
    </div>
  );
};

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

const Events = [
  {
    id: 1,
    start: moment().toDate(),
    end: moment().add(1, 'h').toDate(),
    title: 'Event-1',
    mode: 'event'
  },
  {
    id: 2,
    start: moment().subtract(3, 'h').toDate(),
    end: moment().subtract(2, 'h').toDate(),
    title: 'Event-2',
    mode: 'event'
  },
  {
    id: 3,
    title: 'Background-1',
    start: moment().add(2, 'days').toDate(),
    end: moment().add(2, 'days').toDate(),
    mode: 'background'
  },
  {
    id: 4,
    title: 'Background-2',
    start: moment().add(3, 'days').toDate(),
    end: moment().add(5, 'days').toDate(),
    mode: 'background'
  }
];

export default function BigCalendar({ data }) {
  const [events, setEvents] = useState(Events);
  const [backEvents, setBackEvents] = useState(_.get(data, 'backEvents', null));

  useEffect(() => {
    setEvents(_.filter(Events, (event) => event.mode === 'event'));
    setBackEvents(_.filter(Events, (event) => event.mode === 'background'));
  }, []);

  const onEventResize = (data) => {
    const { event, start, end } = data;
    setEvents(
      events.map((e) => {
        if (e.id === event.id) {
          e.start = start;
          e.end = end;
        }
        return e;
      })
    )
  };

  const onEventDrop = (data) => {
    const { event, start, end } = data
    setEvents(
      events.map((e) => {
        if (e.id === event.id) {
          e.start = start;
          e.end = end;
        }
        return e;
      })
    )
  };

  const handleSelectEvent = useCallback(
    (event) => window.alert(event.title),
    []
  );

  const handleSelectSlot = useCallback(
    ({ start, end }) => {
      const title = window.prompt('New Event name')
      if (title) {
        setEvents((prev) => [...prev, { start, end, title }]);
      }
    },
    [setEvents]
  );

  const { defaultDate, scrollToTime } = useMemo(
    () => ({
      defaultDate: moment().toDate(),
      scrollToTime: new Date(1970, 1, 1, 6)
    }),
    []
  );

  return (
    <div>
      <DnDCalendar
        components={{
          toolbar: CustomToolbar
        }}
        defaultDate={defaultDate}
        defaultView='month'
        events={events}
        backgroundEvents={backEvents}
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
        //culture={data.locale ? data.locale : "en"}
        culture="ru-RU"
      />
    </div>
  );
}

BigCalendar.propTypes = {
  data: PropTypes.object,
  auth: {},
  locale: {}
}
  
BigCalendar.defaultProps = {
  data: {},
  auth: {},
  locale: 'ENG'
}
  
BigCalendar.settings = {
  //icon: icon,
  name: 'Calendar',
  sysName: 'BigCalendar',
  isLegacy: false,
  isMarketplace: true
}