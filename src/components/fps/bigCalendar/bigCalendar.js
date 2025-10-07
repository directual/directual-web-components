import React, { useEffect, useMemo, useState, useCallback } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import moment from 'moment';
import _ from 'lodash';
import PropTypes from 'prop-types';
import styles from './bigCalendar.module.css';

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

export default function BigCalendar(props) {
    const { data, auth, locale, callEndpoint } = props;
    const [state, setState] = useState({
        events: [],
        backEvents: []
    });

    // Нормализация дат - приводим любой формат к Date объекту
    const normalizeDate = (date) => {
        if (!date) return null;
        
        // Если уже Date объект - возвращаем как есть
        if (date instanceof Date) return date;
        
        // Пробуем парсить через moment (умеет ISO, timestamp, строки)
        const momentDate = moment(date);
        if (momentDate.isValid()) {
            return momentDate.toDate();
        }
        
        // Если всё сломалось - логируем и возвращаем текущую дату
        console.warn('Invalid date format:', date, '- using current date');
        return new Date();
    };

    // Нормализация события - обрабатываем start и end
    const normalizeEvent = (event) => {
        return {
            ...event,
            start: normalizeDate(event.start),
            end: normalizeDate(event.end)
        };
    };

    useEffect(() => {
        const rawEvents = _.get(data, "__data__.sl_events", []);
        setState({
            events: _.filter(rawEvents, (event) => event.mode === 'event').map(normalizeEvent),
            backEvents: _.filter(rawEvents, (event) => event.mode === 'background').map(normalizeEvent)
        });
    }, [data]);

    const onEventResize = (data) => {
        const { event, start, end } = data;
        setState(prevState => ({
            ...prevState,
            events: prevState.events.map((e) => 
                e.id === event.id 
                    ? { ...e, start, end }
                    : e
            )
        }));
    };

    const onEventDrop = (data) => {
        const { event, start, end } = data;
        setState(prevState => ({
            ...prevState,
            events: prevState.events.map((e) => 
                e.id === event.id 
                    ? { ...e, start, end }
                    : e
            )
        }));
    };

    const handleSelectEvent = useCallback((event) => 
        window.alert(event.title),
        []
    );

    const handleSelectSlot = useCallback(({ start, end }) => {
        const title = window.prompt('New Event name');
        if (title) {
            setState(prevState => ({
                ...prevState,
                events: [...prevState.events, { start, end, title }]
            }));
        }
    }, []);

    const { defaultDate, scrollToTime } = useMemo(() => ({
        defaultDate: moment().toDate(),
        scrollToTime: new Date(1970, 1, 1, 6)
    }), []);

    // Конвертация Date объектов в ISO строки для отправки в базу
    const serializeEvent = (event) => {
        return {
            ...event,
            start: event.start instanceof Date ? event.start.toISOString() : event.start,
            end: event.end instanceof Date ? event.end.toISOString() : event.end
        };
    };

    const handleSave = () => {
        callEndpoint && callEndpoint(
            _.get(data, "params.sl_actions"),
            "POST",
            { 
                events: state.events.map(serializeEvent), 
                backEvents: state.backEvents.map(serializeEvent) 
            },
            undefined,
            (result, data) => {
                console.log('Saved events:', result);
                console.log('Response:', data);
            }
        );
    };

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
                        onClick={handleSave}
                    >
                    Save
                    </button>
                </span>
            </div>
        );
    };

    return (
        <div>
            <DnDCalendar
                className={`${styles.rbc_calendar} D_FPS_BIG_CALENDAR`}
                components={{
                    toolbar: CustomToolbar
                }}
                defaultDate={defaultDate}
                defaultView='month'
                events={state.events}
                backgroundEvents={state.backEvents}
                localizer={localizer}
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
                style={{ height: '100vh' }}
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