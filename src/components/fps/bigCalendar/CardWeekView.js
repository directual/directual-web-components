import React, { useMemo, useCallback } from 'react';
import moment from 'moment';
import { Navigate } from 'react-big-calendar';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styles from './cardWeekView.module.css';


// status: 'active' | 'overflow' | 'inactive'
// active  — прошёл условие, в рамках слотов (синяя точка)
// overflow — прошёл условие, но сверх лимита (красная точка + красная карточка)
// inactive — не прошёл условие (серая точка)
const EventCard = ({ event, onSelect, provided, isDragging, status = 'active' }) => {
    const firstLetter = (event.title || 'U')[0].toUpperCase();

    const cardClassName = [
        styles.eventCard,
        isDragging ? styles.eventCardDragging : '',
        status === 'overflow' ? styles.eventCardOverflow : '',
        status === 'inactive' ? styles.eventCardInactive : '',
    ].filter(Boolean).join(' ');

    const dotClassName = [
        styles.statusDot,
        status === 'active' ? styles.statusDotActive : '',
        status === 'overflow' ? styles.statusDotOverflow : '',
        status === 'inactive' ? styles.statusDotInactive : '',
    ].filter(Boolean).join(' ');

    return (
        <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className={cardClassName}
            onClick={(e) => onSelect && onSelect(event, e)}
            title={event.title}
        >
            <div className={dotClassName}>●</div>
            <div className={styles.avatar}>
                {event.avatarUrl
                    ? <img src={event.avatarUrl} alt="" className={styles.avatarImg} />
                    : firstLetter
                }
            </div>
            <div className={styles.eventInfo}>
                <div className={styles.eventTitle}>{event.title}</div>
                {(event.description || event.role) && (
                    <div className={styles.eventRole}>
                        {event.description || event.role}
                    </div>
                )}
            </div>
            <div className={styles.eventArrow}>›</div>
        </div>
    );
};

const CardWeekView = ({
    date,
    events,
    onSelectEvent,
    onSelectSlot,
    localizer,
    culture,
    // Кастомные пропсы — пробрасываются через замыкание в bigCalendar.js
    dailySlots = 15,
    getSlotsForDay,
    showNewEventButton = true,
    showWeekends = true,
    cardWeekDragEnabled = true,
    cardWeekOnEventDrop,
    onEventDrop,
    // Функция проверки "активности" ивента (для счётчика n/slots)
    // Если null — все ивенты считаются активными
    isEventActive = null,
    ...rest
}) => {
    const dragEnabled = cardWeekDragEnabled;
    const momentLocale = (culture || 'en-GB').split('-')[0] || 'en';
    const handleEventDrop = cardWeekOnEventDrop || onEventDrop;

    // Количество дней: 7 (с выходными) или 5 (рабочие)
    const daysCount = showWeekends ? 7 : 5;

    const weekDays = useMemo(() => {
        const start = moment(date).startOf('isoWeek');
        return Array.from({ length: daysCount }, (_, i) =>
            moment(start).add(i, 'days').locale(momentLocale)
        );
    }, [date, momentLocale, daysCount]);

    // Группируем события по дням
    const eventsByDay = useMemo(() => {
        const map = {};
        weekDays.forEach(day => {
            const key = day.format('YYYY-MM-DD');
            map[key] = [];
        });

        (events || []).forEach(event => {
            const eventStart = moment(event.start);
            const eventEnd = moment(event.end);

            // Событие может занимать несколько дней — показываем во всех
            weekDays.forEach(day => {
                const dayStart = moment(day).startOf('day');
                const dayEnd = moment(day).endOf('day');

                if (eventStart.isSameOrBefore(dayEnd) && eventEnd.isSameOrAfter(dayStart)) {
                    const key = day.format('YYYY-MM-DD');
                    map[key].push(event);
                }
            });
        });

        return map;
    }, [events, weekDays]);

    const isToday = (day) => moment(day).isSame(moment(), 'day');

    // Клик по пустому пространству дня — создание нового события
    const handleDayClick = (day) => {
        if (onSelectSlot && showNewEventButton) {
            onSelectSlot({
                start: moment(day).startOf('day').toDate(),
                end: moment(day).add(1, 'day').endOf('day').toDate(),
                action: 'click',
            });
        }
    };

    // DnD: событие перетащили из одного дня в другой
    const handleDragEnd = useCallback((result) => {
        const { destination, source, draggableId } = result;

        // Если бросили вне зоны или на то же место — ничего не делаем
        if (!destination) return;
        if (destination.droppableId === source.droppableId && destination.index === source.index) return;

        // Находим событие по id
        const event = (events || []).find(e => String(e.id) === draggableId);
        if (!event) return;

        // Считаем разницу в днях между исходным и целевым днем
        const sourceDay = moment(source.droppableId);
        const destDay = moment(destination.droppableId);
        const daysDiff = destDay.diff(sourceDay, 'days');

        if (daysDiff === 0) return; // Перетащили внутри того же дня — не трогаем

        // Новые даты: сдвигаем start и end на разницу дней
        const newStart = moment(event.start).add(daysDiff, 'days').toDate();
        const newEnd = moment(event.end).add(daysDiff, 'days').toDate();

        // Вызываем тот же колбек что и стандартный DnD календаря
        if (handleEventDrop) {
            handleEventDrop({ event, start: newStart, end: newEnd });
        }
    }, [events, handleEventDrop]);

    // Рендер колонки дня (шапка + карточки)
    const renderDayColumn = (day) => {
        const key = day.format('YYYY-MM-DD');
        const dayEvents = eventsByDay[key] || [];
        const today = isToday(day);

        // Получаем слоты/праздник/заметку для конкретного дня
        // Если getSlotsForDay не пришла — фоллбэк на глобальный dailySlots
        const daySlotInfo = getSlotsForDay
            ? getSlotsForDay(day)
            : { slots: dailySlots, isHoliday: false, note: '' };
        const slotsForDay = daySlotInfo.slots;
        const isDayHoliday = daySlotInfo.isHoliday;
        const dayNote = daySlotInfo.note;

        // Вычисляем статус каждого ивента:
        // 1. Проверяем isEventActive (условие из params)
        // 2. Считаем активных — первые slotsForDay = active, остальные = overflow
        let activeIndex = 0;
        const eventsWithStatus = dayEvents.map(event => {
            const isActive = isEventActive ? isEventActive(event) : true;
            let status;
            if (!isActive) {
                status = 'inactive';
            } else {
                activeIndex++;
                status = activeIndex <= slotsForDay ? 'active' : 'overflow';
            }
            return { event, status };
        });

        // Красные (overflow) всегда первые, остальные — в порядке из API
        eventsWithStatus.sort((a, b) => {
            if (a.status === 'overflow' && b.status !== 'overflow') return -1;
            if (a.status !== 'overflow' && b.status === 'overflow') return 1;
            return 0;
        });

        const activeCount = eventsWithStatus.filter(e => e.status !== 'inactive').length;
        const isOverflow = activeCount > slotsForDay;

        // Класс бейджа: пустой / переполнен / норм
        const badgeClass = [
            styles.counterBadge,
            activeCount === 0 ? styles.counterBadgeEmpty : '',
            isOverflow ? styles.counterBadgeOverflow : '',
        ].filter(Boolean).join(' ');

        // Класс колонки: сегодня / праздник
        const columnClass = [
            styles.dayColumn,
            today ? styles.dayColumnToday : '',
            isDayHoliday ? styles.dayColumnHoliday : '',
        ].filter(Boolean).join(' ');

        const headerClass = [
            styles.dayHeader,
            today ? styles.dayHeaderToday : '',
            isDayHoliday ? styles.dayHeaderHoliday : '',
        ].filter(Boolean).join(' ');

        return (
            <div key={key} className={columnClass}>
                {/* Шапка дня */}
                <div
                    className={headerClass}
                    onClick={() => handleDayClick(day)}
                    title={dayNote || undefined}
                >
                    <div className={styles.dayName}>
                        <span className={styles.dayOfWeek}>
                            {day.format('dd')}
                        </span>
                        <span className={styles.dayDate}>
                            {day.format('DD.MM')}
                        </span>
                    </div>
                    <div className={styles.dayStats}>
                        <span className={badgeClass}>
                            {activeCount}
                        </span>
                        <span className={styles.counterSlots}>
                            / {slotsForDay}
                        </span>
                    </div>
                    <div className={styles.dayOccupancy}>
                        {activeCount}/{slotsForDay} занято
                    </div>
                </div>

                {/* Список карточек — с DnD или без */}
                {dragEnabled ? (
                    <Droppable droppableId={key}>
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                className={`${styles.eventsList} ${snapshot.isDraggingOver ? styles.eventsListDragOver : ''}`}
                            >
                                {eventsWithStatus.map(({ event, status }, index) => (
                                    <Draggable
                                        key={String(event.id)}
                                        draggableId={String(event.id)}
                                        index={index}
                                    >
                                        {(provided, snapshot) => (
                                            <EventCard
                                                event={event}
                                                status={status}
                                                onSelect={onSelectEvent}
                                                provided={provided}
                                                isDragging={snapshot.isDragging}
                                            />
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                ) : (
                    <div className={styles.eventsList}>
                        {eventsWithStatus.map(({ event, status }) => (
                            <EventCard
                                key={event.id}
                                event={event}
                                status={status}
                                onSelect={onSelectEvent}
                                provided={{ innerRef: () => {}, draggableProps: {}, dragHandleProps: {} }}
                                isDragging={false}
                            />
                        ))}
                    </div>
                )}
            </div>
        );
    };

    // Если DnD включен — оборачиваем в DragDropContext
    const grid = (
        <div className={styles.cardWeekGrid}>
            {weekDays.map(renderDayColumn)}
        </div>
    );

    return dragEnabled
        ? <DragDropContext onDragEnd={handleDragEnd}>{grid}</DragDropContext>
        : grid;
};

// === Статические методы для react-big-calendar ===

// Заголовок в тулбаре (лейбл с датой)
CardWeekView.title = (date, { localizer }) => {
    const start = moment(date).startOf('isoWeek');
    const end = moment(date).endOf('isoWeek');
    return start.format('DD.MM') + ' - ' + end.format('DD.MM');
};

// Навигация (prev/next/today)
CardWeekView.navigate = (date, action) => {
    switch (action) {
        case Navigate.PREVIOUS:
            return moment(date).subtract(1, 'week').toDate();
        case Navigate.NEXT:
            return moment(date).add(1, 'week').toDate();
        case Navigate.TODAY:
            return new Date();
        default:
            return date;
    }
};

// Диапазон видимых дат (для загрузки данных)
CardWeekView.range = (date) => {
    const start = moment(date).startOf('isoWeek');
    return Array.from({ length: 7 }, (_, i) =>
        moment(start).add(i, 'days').toDate()
    );
};

export default CardWeekView;
