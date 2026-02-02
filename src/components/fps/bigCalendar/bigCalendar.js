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

    const [originalData, setOriginalData] = useState({
        backEvents: [],
        frontEvents: [],
    });

    const [extendedData, setExtendedData] = useState({
        backEvents: [],
        frontEvents: [],
    });

    const [currentView, setCurrentView] = useState('month');

    const [hasChanges, setHasChanges] = useState(false);

    const [visibleRange, setVisibleRange] = useState({ 
        start: moment().startOf('month').toDate(), 
        end: moment().endOf('month').toDate() 
    });

    const { defaultDate, scrollToTime } = useMemo(() => ({
        defaultDate: moment().toDate(),
        scrollToTime: new Date(1970, 1, 1, 6)
    }), []);

    // Кастомные форматы для календаря
    const formats = {
        agendaHeaderFormat: ({ start, end }, culture, localizer) => {
            const startStr = localizer.format(start, 'DD MMMM', culture);
            const endStr = localizer.format(end, 'DD MMMM YYYY', culture);
            return `${startStr} – ${endStr}`;
        },
        agendaDateFormat: 'ddd DD MMM',
        agendaTimeFormat: 'HH:mm',
        agendaTimeRangeFormat: ({ start, end }, culture, localizer) => {
            return `${localizer.format(start, 'HH:mm', culture)} – ${localizer.format(end, 'HH:mm', culture)}`;
        }
    };

    // params as string
    const normalizeDate = (date, time) => { 
        // date и time приходят как timestamp (миллисекунды)
        const dateMoment = moment(date);
        
        if (!dateMoment.isValid()) {
            return new Date();
        }
        
        if (time) {
            // Берем дату из date, время из time
            const timeMoment = moment(time);
            if (timeMoment.isValid()) {
                // Из date берем год, месяц, день
                // Из time берем часы, минуты, секунды
                const result = moment(dateMoment)
                    .hour(timeMoment.hour())
                    .minute(timeMoment.minute())
                    .second(timeMoment.second())
                    .millisecond(0);
                return result.toDate();
            }
        }
        
        // Если нет времени - просто возвращаем дату
        return dateMoment.toDate();
    };

    const normalizeEvent = (event) => {
        return {
            ...event,
            start: normalizeDate(event.startDate, event?.startTime),
            end: normalizeDate(event.endDate, event?.endTime),
        };
    };

    const waitForFormAPI = (formId, callback, timeout = 5000) => {
        const start = Date.now();
        const check = () => {
            if (window.FpsForm2_API && window.FpsForm2_API[formId]) {
                callback(window.FpsForm2_API[formId]);
            } else if (Date.now() - start < timeout) {
                setTimeout(check, 100);
            }
        };

        check();
    };

    const isValidEvent = (event) => event && typeof(event) === 'object' && event['startDate'] && event['endDate'];
    const isBackEvent = (event) => event?.mode && event?.mode === 'back';
    const isFrontEvent = (event) => !event?.mode || (event?.mode === 'front' || event?.mode === '');

    // Первая инициализация данных
    //useEffect(() => getEventsFromAPI(), []);

    // Отслеживание изменений видимого диапазона
    useEffect(() => getEventsFromAPI(), [visibleRange, currentView]);

    const setVisibleRangeEvents = (data) => {
        const events = data || [];
        const validEvents = _.filter(events, isValidEvent);
        const backEvents = _.filter(validEvents, isBackEvent).map(normalizeEvent);
        const frontEvents = _.filter(validEvents, isFrontEvent).map(normalizeEvent);

        setExtendedData({ backEvents, frontEvents });
        // Если нет изменений, то сохраняем данные в originalData
        !hasChanges && setOriginalData({ backEvents, frontEvents });
    };

    const getEventsFromAPI = () => {
        const sl = _.get(data, "sl", "");
        if (!sl) return;
        if (!visibleRange.start || !visibleRange.end) {
            if (currentView === 'month') {
                setVisibleRange({
                    start: moment().startOf('month').toDate(),
                    end: moment().endOf('month').toDate()
                });
            } // TODO: Implement other views
        };

        // 1. Запрос первый, узнаем сколько событий в диапазоне
        callEndpointGET(sl, {
            startDate: moment(visibleRange.start).toISOString(),
            endDate: moment(visibleRange.end).toISOString(),
            pageSize: 30,
            page: 1,
        }, (result, data) => {
            const { result: { data: { total } } } = data;
            if (total > 0 && total > 30) {
                // 2. Запрос второй, получаем все события в диапазоне
                callEndpointGET(sl, {
                    startDate: moment(visibleRange.start).toISOString(),
                    endDate: moment(visibleRange.end).toISOString(),
                    pageSize: total,
                    page: 1,
                }, (result, data) => {
                    setVisibleRangeEvents(result);
                });
            } else {
                setVisibleRangeEvents(result);
            }
        });
    };

    const handleSelectEvent = useCallback((event, e) => {
        const routing_where = _.get(data, "params.routing_where", "");

        if (routing_where) {
            if (document.querySelector('.rbc-overlay')) {
                document.querySelector('.rbc-overlay').style.display = 'none';
            }
            handleModalRoute(`${routing_where}` + `/${encodeURI(event?.id)}`)(e);
        }
    }, []);

    const handleSelectSlot = useCallback((slot, isNew = false) => {
        const routing_where = _.get(data, "params.routing_where", "");
        const form_ID = _.get(data, "params.form_id", "") || _.get(data, "params.form_ID", "");

        if (routing_where && form_ID) { 
            handleModalRoute(`${routing_where}`)(new Event('click'));
            waitForFormAPI(`${form_ID}`, (formAPI) => {
                formAPI.setModel({
                    startDate: moment(slot.start).toDate(),
                    endDate: !isNew ? moment(slot.end).subtract(1, 'days').toDate() : moment(slot.end).toDate(),
                    startTime: moment(slot.start).toDate(),
                    endTime: moment(slot.end).toDate(),
                });
            });
        }
    }, []);

    const setEventChange = ({event, start, end}) => {
        setHasChanges(true);
        setExtendedData(prevState => ({
            ...prevState,
            frontEvents: prevState.frontEvents.map((e) => 
                e.id === event.id
                    ? { ...e, start, end }
                    : e
            ),
            backEvents: prevState.backEvents.map((e) => 
                e.id === event.id
                    ? { ...e, start, end }
                    : e
            )
        }));
    };

    // При необходимости можно расширить функционал или проверки
    const onEventDrop = (data) => setEventChange(data);
    const onEventResize = (data) => setEventChange(data);

    // Обработчик изменения видимого диапазона календаря
    const handleRangeChange = (range) => setVisibleRange({
        start: range?.start,
        end: range?.end
    });

    // Конвертация Date объектов в ISO строки для отправки в базу
    const serializeEvent = (event) => {
        return {
            ...event,
            start: event.start instanceof Date ? event.start.toISOString() : event.start,
            end: event.end instanceof Date ? event.end.toISOString() : event.end
        };
    };

    const callEndpointGET = (endpoint, params, finish) => {
        callEndpoint && callEndpoint(endpoint, "GET", params, {}, (result, content, json, data) => {
            if (result == "ok") {
                finish && finish(content, data)
            }
        });
    };

    const callEndpointPOST = (endpoint, body, finish) => {
        callEndpoint && callEndpoint(endpoint, "POST", body, {}, (result) => {
            if (result == "ok") {
                finish && finish();
            }
        });
    };

    const handleSaveChanges = () => {
        const actionsSettings = _.get(data, "params.actions", []);
        const actionSave = _.find(actionsSettings, { name: "save_changes", actionType: "endpoint" });

        if (actionSave) {
            // Сейвим только измененные события (где изменились start или end)
            const getChangedEvents = (originalEvents, currentEvents) => {
                return currentEvents
                    .filter(currEvent => {
                        const origEvent = originalEvents.find(e => e.id === currEvent.id);
                        if (!origEvent) return false; // Новое событие или не найдено
                        
                        // Сравниваем start и end по timestamp
                        const startChanged = currEvent.start?.getTime() !== origEvent.start?.getTime();
                        const endChanged = currEvent.end?.getTime() !== origEvent.end?.getTime();
                        
                        return startChanged || endChanged;
                    })
                    .map(serializeEvent);
            };

            callEndpointPOST(actionSave.endpoint, {
                changes: {
                    events: getChangedEvents(originalData.frontEvents, extendedData.frontEvents),
                    backEvents: getChangedEvents(originalData.backEvents, extendedData.backEvents)
                }
            }, () => {
                console.log('Changes saved!');
                setHasChanges(false);
                setOriginalData(extendedData);
            });
        } else {
            console.warn('Action save_changes not found in actionsSettings');
        }
    };

    const handleCancelChanges = () => {
        setHasChanges(false);
        setExtendedData(originalData);
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
            setCurrentView(view);
        };
    
        return (
            <div className={`rbc-toolbar ${styles.customToolbarWrapper || ''}`}>
                <div className={`${styles.customToolbar || ''}`}>
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
                        <Input 
                            style={{ marginBottom: '0 !important' }}
                            type="select" 
                            defaultValue={currentView} 
                            options={toolbar.views.map((view) => ({ key: view, value: dict[lang]['bigCalendar'][view] }))} 
                            onChange={onViewChange} 
                            className={styles.viewInput || ''}
                        />
                    </span>  
                    <span className={`rbc-btn-group ${styles.saveGroup || ''}`}>
                        <Button accent icon="plus" onClick={(_) => handleSelectSlot(_, true)}>{dict[lang]['bigCalendar']['new'] ?? "New Event"}</Button>
                    </span>
                    {
                        hasChanges && (
                            <span className={`rbc-btn-group ${styles.saveGroup || ''}`}>
                                <Button danger icon="close" onClick={handleCancelChanges}>Cancel</Button>
                                <Button accent icon="done" onClick={handleSaveChanges}>{dict[lang]['bigCalendar']['save'] ?? "Save Changes"}</Button>
                            </span>
                        )
                    }
                </div>          
            </div>
        );
    };

    return (
        <div className={`${styles.calendar_wrapper} D_FPS_CALENDAR_WRAPPER`}>
            <DnDCalendar
                className={`${styles.rbc_calendar}`}
                components={{
                    toolbar: CustomToolbar
                }}
                defaultDate={defaultDate}
                defaultView={currentView}
                events={extendedData.frontEvents}
                backgroundEvents={extendedData.backEvents}
                localizer={localizer}
                formats={formats}
                onEventDrop={onEventDrop}
                onEventResize={onEventResize}
                onRangeChange={handleRangeChange}
                resizable
                popup={true}
                onSelectEvent={(event, e) => handleSelectEvent(event, e)}
                onSelectSlot={(slot) => handleSelectSlot(slot)}
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