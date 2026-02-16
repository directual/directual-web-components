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
import CardWeekView from './CardWeekView';
import { TableTitle } from '../viewobjects/tableTitle/TableTitle';
import Loader from '../../fps/loader/loader';

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
    console.log("props: \n\n ".concat(JSON.stringify(data)));
    const [loading, setLoading] = useState(false);

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

    const [currentView, setCurrentView] = useState(_.get(data, "params.view.defaultView", "card_week"));

    const [hasChanges, setHasChanges] = useState(false);

    // --- Правила слотов (расписание дней) ---
    const [slotRules, setSlotRules] = useState(null);

    // --- Фильтрация ---
    const [dql, setDQL] = useState('');

    // Колбэк фильтрации — сохраняет dql/sort в стейт
    function performFiltering(newDql, newSort) {
        setDQL(prev => prev === (newDql || '') ? prev : (newDql || ''));
    }

    // Дебаунс-обёртка, чтоб не долбить API на каждый символ
    const dqlService = useMemo(() => _.debounce(performFiltering, 600), []);

    const [visibleRange, setVisibleRange] = useState({ 
        start: moment().startOf('month').toDate(), 
        end: moment().endOf('month').toDate() 
    });

    const { defaultDate, scrollToTime } = useMemo(() => ({
        defaultDate: moment().toDate(),
        scrollToTime: new Date(1970, 1, 1, 6)
    }), []);


    // ==================== User params ====================
    // --- general: общие настройки компонента ---
    const sl = _.get(data, "sl", ""); // main API endpoint
    const sl_rules = _.get(data, "params.assignmentOn_endpoint", ""); // API endpoint for rules
    const calendarTitle = _.get(data, "params.general.title", "");
    const calendarDescription = _.get(data, "params.general.description", "");
    const calendarShowIcon = _.get(data, "params.general.showIcon", false);
    const calendarIcon = _.get(data, "params.general.icon", "calendar");
    const showDragAndDrop = _.get(data, "params.general.showDragAndDrop", true);
    const showResize = _.get(data, "params.general.onResize", true);
    const showNewEventButton = _.get(data, "params.general.showNewEventButton", true);
    const mappingFields = _.get(data, "params.mapping", {});
    
    // --- view: настройки видов ---
    const hideViewSelector = _.get(data, "params.view.hideViewSelector", false);
    const availableViews = _.get(data, "params.view.availableViews", ["month", "week", "day", "card_week"]);
    const dailySlots = _.get(data, "params.view.dailySlots", 15);
    const showWeekends = _.get(data, "params.view.showWeekends", true);
    
    // --- formats: форматы дат ---
    const weekRangeHeaderFormat = _.get(data, "params.formats.weekRangeHeaderFormat", "DD.MM – DD.MM");
    
    // --- routing: маршрутизация и формы ---
    const routingWhere = _.get(data, "params.route_where", "");
    const routingFormId = _.get(data, "params.formId", "");
    
    // --- filters: фильтрация и сортировка ---
    const filterParams = _.get(data, "params.filterParams", {});
    const comp_ID = _.get(data, "params.comp_ID", "");

    // --- conditions: условия ---
    const conditionOne = _.get(data, "params.conditions.cardWeek.conditionOne", "");
    const setting_roles = _.get(data, "params.conditions.cardWeek.setting_roles", "");
    const slots_roles = _.get(data, "params.conditions.cardWeek.slots_roles", "");
    const path_to_settings = _.get(data, "params.conditions.cardWeek.setting_path", "");

    const mapping_date = _.get(data, "params.conditions.cardWeek.mapping.date", "");
    const mapping_slots = _.get(data, "params.conditions.cardWeek.mapping.slots", "");
    const mapping_isHoliday = _.get(data, "params.conditions.cardWeek.mapping.isHoliday", "");
    const mapping_note = _.get(data, "params.conditions.cardWeek.mapping.note", "");

    // --- actions: экшены ---
    const actionsSettings = _.get(data, "params.actions", []);

    // =======================================================
    
    // Первая инициализация данных
    //useEffect(() => getEventsFromAPI(), []);

    // Перезапрос данных при смене диапазона, вида, или фильтров
    useEffect(() => getEventsFromAPI(), [visibleRange, currentView, dql]);

    // Кастомные форматы для календаря
    const formats = {
        dayRangeHeaderFormat: ({ start, end }, culture, localizer) => {
            const parts = weekRangeHeaderFormat.split('–').map(p => p.trim());

            if (parts.length === 2) {
                return localizer.format(start, parts[0], culture) + ' – ' + localizer.format(end, parts[1], culture);
            }
            
            return localizer.format(start, weekRangeHeaderFormat, culture) + ' – ' + localizer.format(end, weekRangeHeaderFormat, culture);
        },
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
                return(moment(dateMoment)
                    .hour(timeMoment.hour())
                    .minute(timeMoment.minute())
                    .second(timeMoment.second())
                    .millisecond(0)
                ).toDate();
            }
        }
        
        // Если нет времени - просто возвращаем дату
        return dateMoment.toDate();
    };

    const normalizeEvent = useCallback((event) => {
        return {
            ...event,
            start: normalizeDate(event.startDate, event?.startTime),
            end: normalizeDate(event.endDate, event?.endTime),
        };
    }, []);

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

    const evaluateCondition = (conditionStr, event) => {
        try {
            // Подставляем {{field.path}} → значения из события
            const code = conditionStr.replace(
                /\{\{(.+?)\}\}/g,
                (match, path) => {
                    const val = _.get(event, path, '');
                    // Экранируем кавычки в значении, чтоб не сломать строку
                    return String(val).replace(/"/g, '\\"');
                }
            );
    
            // Извлекаем имя функции из строки "function имя() { ... }"
            const fnNameMatch = code.match(/function\s+(\w+)/);
            const fnName = fnNameMatch ? fnNameMatch[1] : null;
            if (!fnName) return false;
    
            // Создаём и вызываем — event и _ доступны внутри как аргументы
            const fn = new Function('event', '_', `
                ${code}
                return ${fnName}();
            `);
    
            return fn(event, _);
        } catch (e) {
            console.warn('Condition evaluation failed:', e);
            return false;
        }
    };

    // Получить кол-во слотов для конкретного дня
    const getSlotsForDay = useCallback((day) => {
        if (!auth || !auth.role || !auth.role.split(',').some(role => slots_roles.split(',').includes(role))) {
            return { slots: dailySlots, isHoliday: false, note: '' };
        }

        const m = moment(day);
        const dateStr = m.format('YYYY-MM-DD'); // "2026-02-13"
        const weekdayStr = m.format('ddd').toLowerCase(); // "thu"

        // 1. Хуякаем по принципу, что в бд есть запись на каждый день года
        const override = _.find(slotRules, r => moment(r[mapping_date]).isSame(day, 'day'));
        if (override) {
            return {
                slots: override[mapping_slots] ?? dailySlots,
                isHoliday: !!override[mapping_isHoliday],
                note: override[mapping_note] || '',
            };
        }

        return { slots: dailySlots, isHoliday: false, note: '' };
    }, [slotRules, dailySlots]); //slotRules

    const isValidEvent = (event) => event && typeof(event) === 'object' && event['startDate'] && event['endDate'];
    const isBackEvent = (event) => event?.mode && event?.mode === 'back';
    const isFrontEvent = (event) => !event?.mode || (event?.mode === 'front' || event?.mode === '');

    const setVisibleRangeEvents = (data) => {
        const events = _.map(data || [], (event) => {
            return {
                ...event,
                startDate: event[mappingFields.startDateField],
                endDate: event[mappingFields.endDateField],
                startTime: event[mappingFields.startTimeField],
                endTime: event[mappingFields.endTimeField],
                title: event[mappingFields.titleField],
                description: event[mappingFields.descriptionField],
                author: event[mappingFields.userField],
                avatarUrl: _.get(event, `${(mappingFields.userField).replace('{{', '').replace('}}', '')}.userpic`, '')
            }
        });
        const validEvents = _.filter(events, isValidEvent);
        const backEvents = _.filter(validEvents, isBackEvent).map(normalizeEvent);
        const frontEvents = _.filter(validEvents, isFrontEvent).map(normalizeEvent);

        setExtendedData({ backEvents, frontEvents });
        // Если нет изменений, то сохраняем данные в originalData
        !hasChanges && setOriginalData({ backEvents, frontEvents });
    };

    const setVisibleRangeByDefault = () => {
        if (currentView === 'month') {
            setVisibleRange({
                start: moment().startOf('month').toDate(),
                end: moment().endOf('month').toDate()
            });
        }
        if (currentView === 'week') {
            setVisibleRange({
                start: moment().startOf('week').toDate(),
                end: moment().endOf('week').toDate()
            });
        }
        if (currentView === 'day') {
            setVisibleRange({
                start: moment().startOf('day').toDate(),
                end: moment().endOf('day').toDate()
            });
        }
        if (currentView === 'card_week') {
            setVisibleRange({
                start: moment().startOf('week').toDate(),
                end: moment().endOf('week').toDate()
            });
        }
    };

    const createDqlStringMain = () => {
        const dqlParts = [];

        if (dql) dqlParts.push(dql);

        if (mappingFields.startDateField && visibleRange.start) {
            dqlParts.push(`'${mappingFields.startDateField}' >= '${moment(visibleRange.start).startOf('day').toISOString()}'`);
        }

        if (mappingFields.endDateField && visibleRange.end) {
            dqlParts.push(`'${mappingFields.endDateField}' <= '${moment(visibleRange.end).endOf('day').toISOString()}'`);
        }

        return dqlParts.join(' AND ');
    };

    const createDQLStringAdditional = () => {
        return `'${mapping_date}' >= '${moment(visibleRange.start).startOf('day').toISOString()}' AND '${mapping_date}' <= '${moment(visibleRange.end).endOf('day').toISOString()}'`;
    };

    const getEventsFromAPI = () => {
        if (!sl) return;
        
        if (!visibleRange.start || !visibleRange.end) {
            setVisibleRangeByDefault();
        }
    
        setLoading(true);
        
        // Загружаем правила слотов, если они не загружены и есть endpoint
        if (sl_rules) {
            callEndpointGET(sl_rules, {}, { pageSize: 10, page: 0, dql: createDQLStringAdditional() }, (result) => {
                setSlotRules(result || []);
            });
        }
        
        // 1. Запрос первый — узнаем сколько событий в диапазоне
        callEndpointGET(sl, {},
        {
            pageSize: 30,
            page: 0,
            dql: createDqlStringMain(),
        },
        (result, data) => {
            const { result: { data: { total } } } = data;
            if (total > 0 && total > 30) {
                // 2. Запрос второй — получаем все события
                callEndpointGET(sl, {},
                {
                    pageSize: total,
                    page: 0,
                    dql: createDqlStringMain(),
                }, (result) => {
                    setVisibleRangeEvents(result);
                    setLoading(false);
                });
            } else {
                setVisibleRangeEvents(result);
                setLoading(false);
            }
        });
    };

    const handleSelectEvent = useCallback((event, e) => {
        if (routingWhere) {
            if (document.querySelector('.rbc-overlay')) {
                document.querySelector('.rbc-overlay').style.display = 'none';
            }
            handleModalRoute(`${routingWhere}` + `/${encodeURI(event?.id)}`)(e);
        }
    }, [routingWhere]);

    const handleSelectSlot = useCallback((slot, isNew = false) => {
        if (routingWhere && routingFormId && mappingFields) { 
            handleModalRoute(`${routingWhere}`)(new Event('click'));
            waitForFormAPI(`${routingFormId}`, (formAPI) => {
                formAPI.setModel({
                    [mappingFields.startDateField]: moment(slot.start).toDate(),
                    [mappingFields.endDateField]: !isNew ? moment(slot.end).subtract(1, 'days').toDate() : moment(slot.end).toDate(),
                    [mappingFields.startTimeField]: moment(slot.start).toDate(),
                    [mappingFields.endTimeField]: moment(slot.end).toDate(),
                });
            });
        }
    }, [routingWhere, routingFormId]);

    const handleSettings = useCallback(() => {
        if (path_to_settings) {
            handleModalRoute(`${path_to_settings}`)(new Event('click'));
        }
    }, [path_to_settings]);

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
    // Для стандартных видов range = {start, end}
    // Для кастомных видов (card_week) range = [Date, Date, ...]
    const handleRangeChange = (range) => {
        if (Array.isArray(range)) {
            setVisibleRange({
                start: range[0],
                end: range[range.length - 1]
            });
        } else {
            setVisibleRange({
                start: range?.start,
                end: range?.end
            });
        }
    };

    // Конвертация Date объектов в ISO строки для отправки в базу
    const serializeEvent = (event) => {
        return {
            ...event,
            start: event.start instanceof Date ? event.start.toISOString() : event.start,
            end: event.end instanceof Date ? event.end.toISOString() : event.end
        };
    };

    const callEndpointGET = (endpoint, body, params, finish) => {
        callEndpoint && callEndpoint(endpoint, "GET", body, params, (result, content, json, data) => {
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
                    events: _.map(getChangedEvents(originalData.frontEvents, extendedData.frontEvents), (event) => ({
                        ...event,
                        [`${mappingFields.startDateField}`]: event.start,
                        [`${mappingFields.endDateField}`]: event.end,
                        [`${mappingFields.startTimeField}`]: event.start,
                        [`${mappingFields.endTimeField}`]: event.end,                      
                    })),
                    backEvents: _.map(getChangedEvents(originalData.backEvents, extendedData.backEvents), (event) => ({
                        ...event,
                        [`${mappingFields.startDateField}`]: event.start,
                        [`${mappingFields.endDateField}`]: event.end,
                        [`${mappingFields.startTimeField}`]: event.start,
                        [`${mappingFields.endTimeField}`]: event.end,
                    })),
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
            <div className={styles.calendar_wrapper}>
                {
                    (calendarTitle || calendarDescription || calendarShowIcon) && (
                        <div className={styles.calendar_header}>
                            {
                                calendarShowIcon && (
                                    <div className={styles.calendar_icon}>
                                        <span className={`icon icon-${calendarIcon}`} />
                                    </div>
                                )
                            }
                            <div className={styles.calendar_header_content}>
                                {
                                    calendarTitle && (
                                        <div className={styles.calendar_title}>
                                            <h2>{calendarTitle}</h2>
                                        </div>
                                    )
                                }
                                {
                                    calendarDescription && (
                                        <div className={styles.calendar_description}>
                                            {calendarDescription}
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    )
                }
                <div className={`rbc-toolbar ${styles.customToolbarWrapper || ''}`}>
                    <div className={`${styles.customToolbar || ''}`}>
                        <span className={`rbc-btn-group ${styles.navGroup || ''}`}>
                            <Button onClick={goToBack}>
                                {'← ' + (dict[lang]['bigCalendar'][currentView === 'card_week' ? 'week' : currentView] || '')}
                            </Button>
                            <Button onClick={goToCurrent}>
                                {dict[lang]['bigCalendar']['today']}
                            </Button>
                            <Button onClick={goToNext}>
                                {(dict[lang]['bigCalendar'][currentView === 'card_week' ? 'week' : currentView] || '') + ' →'}
                            </Button>
                        </span> 
                        <span className="rbc-toolbar-label">{label()}</span>  
                        {
                            !hideViewSelector && (
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
                            )
                        }                     
                        {showNewEventButton && (
                            <span className={`rbc-btn-group ${styles.saveGroup || ''}`}>
                                <Button accent icon="plus" onClick={(_) => handleSelectSlot(_, true)}>{dict[lang]['bigCalendar']['new'] ?? "New Event"}</Button>
                            </span>
                        )}
                        {
                            hasChanges && (
                                <span className={`rbc-btn-group ${styles.saveGroup || ''}`}>
                                    <Button danger icon="close" onClick={handleCancelChanges}>Cancel</Button>
                                    <Button accent icon="done" onClick={handleSaveChanges}>{dict[lang]['bigCalendar']['save'] ?? "Save Changes"}</Button>
                                </span>
                            )
                        }
                        {
                            setting_roles && auth && auth.role.split(',').some(role => setting_roles.split(',').includes(role)) && (
                                <span className={`rbc-btn-group ${styles.saveGroup || ''}`}>
                                    <Button icon="settings" onClick={handleSettings}></Button>
                                </span>
                            )
                        }
                    </div>   
                    {filterParams.isFiltering && (
                        <div style={{ padding: '0 0 13px'}}>
                            <TableTitle
                                tableFilters={{ ...filterParams, isSorting: false }}
                                displayFilters={filterParams.isFiltering}
                                performFiltering={dqlService}
                                urlKey={comp_ID}
                                params={data.params}
                                headers={data.headers}
                                dict={dict}
                                lang={lang}
                                onFilter={() => {}}
                                callEndpoint={(endpoint, params, finish, setOptions, setError) => {
                                    callEndpoint && callEndpoint(
                                        endpoint,
                                        "GET",
                                        undefined,
                                        params,
                                        (result, responseData, visibleNames) => {
                                            const transformedArray = (inputArray, visibleNames) => _.map(inputArray, (item) => {
                                                const parseJson = json => {
                                                    if (!json) return {};
                                                    if (typeof json === 'object') return json;
                                                    try { return JSON.parse(json); }
                                                    catch (e) { return {}; }
                                                };
                                                const { id, ...rest } = item;
                                                const value = _.trim(_.map(parseJson(visibleNames), field => _.get(item, field.sysName)).join(' ')) ||
                                                    _.values(_.pickBy(rest, _.isString)).join(' ');
                                                return { key: id, value: value || id };
                                            });
                                            if (result === "ok") {
                                                const transformed = transformedArray(responseData, visibleNames);
                                                finish && finish(transformed);
                                                setOptions && setOptions(transformed);
                                            } else {
                                                setError && setError(responseData);
                                                finish && finish([]);
                                                setOptions && setOptions([]);
                                            }
                                        }
                                    );
                                }}
                            />
                        </div>                         
                    )}  
                </div>
            </div>
        );
    };

    // Оборачиваем CardWeekView в замыкание, чтоб кастомные пропсы не терялись
    // react-big-calendar НЕ пробрасывает произвольные пропсы в custom views
    const WrappedCardWeekView = useMemo(() => {
        const Wrapper = (props) => (
            <CardWeekView
                {...props}
                localizer={localizer}
                culture={culture}
                dailySlots={dailySlots}
                getSlotsForDay={getSlotsForDay}
                showNewEventButton={showNewEventButton}
                showWeekends={showWeekends}
                cardWeekDragEnabled={showDragAndDrop}
                cardWeekOnEventDrop={setEventChange}
                // Условие "активности" ивента для счётчика n/slots
                isEventActive={conditionOne
                    ? (event) => evaluateCondition(conditionOne, event)
                    : null
                }
            />
        );
        // Статические методы — обязательны для react-big-calendar
        Wrapper.title = CardWeekView.title;
        Wrapper.navigate = CardWeekView.navigate;
        Wrapper.range = CardWeekView.range;
        return Wrapper;
    }, [dailySlots, showWeekends, showDragAndDrop, conditionOne, slotRules, getSlotsForDay]);

    // Регистрируем виды — только те, что разрешены в availableViews
    const allViews = useMemo(() => ({
        month: true, week: true, day: true, card_week: WrappedCardWeekView
    }), [WrappedCardWeekView]);

    const calendarViews = useMemo(() => {
        const views = {};
        availableViews.forEach(v => {
            if (allViews[v] !== undefined) views[v] = allViews[v];
        });
        return views;
    }, [availableViews, allViews]);

    return (
        <div className={`${styles.calendar_wrapper} D_FPS_CALENDAR_WRAPPER`}>
            {/* {loading && (
                <div className={styles.tableLoadingOverlay}>
                    <div className={styles.tableLoader}>
                        <Loader>{_.get(dict[lang], 'loading') || "Loading..."}</Loader>
                    </div>
                </div>
            )} */}
            {/* {!loading && ( */}
                <DnDCalendar
                    className={`${styles.rbc_calendar}`}
                    components={{
                        toolbar: CustomToolbar
                    }}
                    views={calendarViews}
                    defaultDate={defaultDate}
                    defaultView={currentView}
                    events={extendedData.frontEvents}
                    backgroundEvents={extendedData.backEvents}
                    localizer={localizer}
                    formats={formats}
                    onEventDrop={showDragAndDrop ? onEventDrop : undefined}
                    onEventResize={showResize ? onEventResize : undefined}
                    onRangeChange={handleRangeChange}
                    resizable={showResize}
                    popup={true}
                    onSelectEvent={(event, e) => handleSelectEvent(event, e)}
                    onSelectSlot={(slot) => handleSelectSlot(slot)}
                    selectable
                    scrollToTime={scrollToTime}
                    culture={culture}
                    style={{ height: '100vh' }}
                />
            {/* )} */}
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