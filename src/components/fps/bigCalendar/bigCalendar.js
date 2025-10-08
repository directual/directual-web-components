import React, { useEffect, useMemo, useState, useCallback } from 'react';
import Button from '../button/button';
import Input from '../dataentry/input/input';
import { dict } from '../locale';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import moment from 'moment';
import _ from 'lodash';
import PropTypes from 'prop-types';
import styles from './bigCalendar.module.css';

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

const cultures = {
    ENG: 'en-GB',
    GER: 'de-DE',
    ESP: 'es-ES',
    FRA: 'fr-FR',
    RUS: 'ru-RU',
    JPN: 'ja-JP',
    POR: 'pt-PT',
    IND: 'id-ID',
    KOR: 'ko-KR'
};

export default function BigCalendar(props) {
    const { data, auth, locale, callEndpoint, handleModalRoute } = props;
    const lang = locale ? locale.length == 3 ? locale : 'ENG' : 'ENG';
    const culture = cultures[lang];
    const [state, setState] = useState({
        events: [],
        backEvents: [],
        currentView: 'month'
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
            backEvents: _.filter(rawEvents, (event) => event.mode === 'background').map(normalizeEvent),
            currentView: 'month'
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
            _.get(data, "__data__.sl_actions"),
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
            setState(prevState => ({
                ...prevState,
                currentView: view
            }));
        };
    
        return (
            <div className={`rbc-toolbar ${styles.customToolbar || ''}`}>
                <span className={`rbc-btn-group ${styles.navGroup || ''}`}>
                    <Button onClick={goToCurrent}>
                        {dict[lang]['bigCalendar']['today']}
                    </Button>
                    <div className={styles.arrowButtons || ''}>
                        <Button 
                            className={styles.arrowBtn || ''} 
                            icon="arrowLeft" 
                            onClick={goToBack}
                            width={40}
                            height={40}
                        />
                        <Button 
                            className={styles.arrowBtn || ''} 
                            icon="arrowRight" 
                            onClick={goToNext}
                            width={40}
                            height={40}
                        />
                    </div>
                </span>
    
                <span className="rbc-toolbar-label">{label()}</span>
    
                <span className={`rbc-btn-group ${styles.viewGroup || ''}`}>
                    <Input type="select" defaultValue={state.currentView} options={toolbar.views.map((view) => ({ key: view, value: dict[lang]['bigCalendar'][view] }))} onChange={onViewChange} />
                </span>
    
                <span className={`rbc-btn-group ${styles.saveGroup || ''}`}>
                    <Button accent icon="save" onClick={handleSave}>{dict[lang]['bigCalendar']['save']}</Button>
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
                defaultView={state.currentView}
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
                culture={culture}
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