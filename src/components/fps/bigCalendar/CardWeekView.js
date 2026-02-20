import React, { useMemo, useCallback } from 'react';
import moment from 'moment';
import { Navigate } from 'react-big-calendar';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styles from './cardWeekView.module.css';

// ============ СКЕЛЕТОН КОМПОНЕНТ ============
const CardWeekSkeleton = ({ daysCount = 7, showAvatar = true, showDotInCardWeek = true }) => {
    // Используем useMemo для стабильных случайных чисел
    const skeletonCounts = useMemo(() => {
        return Array.from({ length: daysCount }).map(() => 
            Math.floor(Math.random() * 3) + 2
        );
    }, [daysCount]);

    return (
        <div className={styles.cardWeekGrid}>
            {Array.from({ length: daysCount }).map((_, dayIndex) => (
                <div key={dayIndex} className={`${styles.dayColumn} ${styles.skeletonColumn}`}>
                    {/* Шапка дня-скелетон */}
                    <div className={`${styles.dayHeader} ${styles.skeletonHeader}`}>
                        <div className={styles.dayName}>
                            <div className={styles.skeletonDayOfWeek} />
                            <div className={styles.skeletonDayDate} />
                        </div>
                        <div className={styles.dayStats}>
                            {/* <div className={`${styles.counterBadge} ${styles.skeletonBadge}`} /> */}
                            <div className={styles.skeletonSlots} />
                        </div>
                    </div>

                    {/* Список карточек-скелетонов */}
                    <div className={styles.eventsList}>
                        {Array.from({ length: skeletonCounts[dayIndex] }).map((_, eventIndex) => (
                            <div key={eventIndex} className={`${styles.eventCard} ${styles.skeletonCard}`}>
                                {showDotInCardWeek && (
                                    <div className={`${styles.statusDot} ${styles.skeletonDot}`}>●</div>
                                )}
                                {showAvatar && (
                                    <div className={`${styles.avatar} ${styles.skeletonAvatar}`} />
                                )}
                                <div className={styles.eventInfo}>
                                    <div className={`${styles.eventTitle} ${styles.skeletonTitle}`} />
                                    <div className={`${styles.eventRole} ${styles.skeletonRole}`} />
                                </div>
                                <div className={`${styles.eventArrow} ${styles.skeletonArrow}`}>›</div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

// ============ КАРТОЧКА СОБЫТИЯ ============
const EventCard = ({ event, onSelect, provided, isDragging,  status = 'active', primaryColor = '', dangerColor = '', showAvatar = true, showDotInCardWeek = true }) => {
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
            style={{ '--custom-primary-color': primaryColor || 'var(--layout-accent, #058efc)' , '--custom-danger-color': dangerColor || 'var(--hint-error, #ff525b)' }}
        >
            {showDotInCardWeek && <div className={dotClassName}>●</div>}
            {showAvatar && (
                <div className={styles.avatar}>
                    {event.avatarUrl
                        ? <img src={event.avatarUrl} alt="" className={styles.avatarImg} />
                        : firstLetter
                    }
                </div>
            )}
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

// ============ ОСНОВНОЙ КОМПОНЕНТ ============
const CardWeekView = ({
    date,
    events,
    onSelectEvent,
    onSelectSlot,
    localizer,
    culture,
    // Кастомные пропсы
    dailySlots = 15,
    getSlotsForDay,
    showNewEventButton = true,
    showWeekends = true,
    cardWeekDragEnabled = true,
    cardWeekOnEventDrop,
    onEventDrop,
    showAvatar = true,
    showDotInCardWeek = true,
    primaryColor = '',
    dangerColor = '',
    loading = false, // <-- Пропс для загрузки
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
        // Если загружаемся - возвращаем пустой объект
        if (loading) return {};
        
        const map = {};
        weekDays.forEach(day => {
            const key = day.format('YYYY-MM-DD');
            map[key] = [];
        });

        (events || []).forEach(event => {
            const eventStart = moment(event.start);
            const eventEnd = moment(event.end);

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
    }, [events, weekDays, loading]);

    const isToday = (day) => moment(day).isSame(moment(), 'day');

    // Клик по пустому пространству дня
    const handleDayClick = (day) => {
        if (onSelectSlot && showNewEventButton && !loading) { // <-- Не даём кликать во время загрузки
            onSelectSlot({
                start: moment(day).startOf('day').toDate(),
                end: moment(day).add(1, 'day').endOf('day').toDate(),
                action: 'click',
            });
        }
    };

    // DnD
    const handleDragEnd = useCallback((result) => {
        if (loading) return; // <-- Не даём перетаскивать во время загрузки
        
        const { destination, source, draggableId } = result;

        if (!destination) return;
        if (destination.droppableId === source.droppableId && destination.index === source.index) return;

        const event = (events || []).find(e => String(e.id) === draggableId);
        if (!event) return;

        const sourceDay = moment(source.droppableId);
        const destDay = moment(destination.droppableId);
        const daysDiff = destDay.diff(sourceDay, 'days');

        if (daysDiff === 0) return;

        const newStart = moment(event.start).add(daysDiff, 'days').toDate();
        const newEnd = moment(event.end).add(daysDiff, 'days').toDate();

        if (handleEventDrop) {
            handleEventDrop({ event, start: newStart, end: newEnd });
        }
    }, [events, handleEventDrop, loading]);

    // ============ РЕНДЕР ============
    // Если загружаемся - показываем скелетон
    if (loading) {
        return (
            <CardWeekSkeleton 
                daysCount={daysCount}
                showAvatar={showAvatar}
                showDotInCardWeek={showDotInCardWeek}
            />
        );
    }

    // Рендер колонки дня
    const renderDayColumn = (day) => {
        const key = day.format('YYYY-MM-DD');
        const dayEvents = eventsByDay[key] || [];
        const today = isToday(day);

        const daySlotInfo = getSlotsForDay
            ? getSlotsForDay(day)
            : { slots: dailySlots, isHoliday: false, note: '' };
        const slotsForDay = daySlotInfo.slots;
        const isDayHoliday = daySlotInfo.isHoliday;
        const dayNote = daySlotInfo.note;

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

        eventsWithStatus.sort((a, b) => {
            if (a.status === 'overflow' && b.status !== 'overflow') return -1;
            if (a.status !== 'overflow' && b.status === 'overflow') return 1;
            return 0;
        });

        const activeCount = eventsWithStatus.filter(e => e.status !== 'inactive').length;
        const isOverflow = activeCount > slotsForDay;

        const badgeClass = [
            styles.counterBadge,
            activeCount === 0 ? styles.counterBadgeEmpty : '',
            isOverflow ? styles.counterBadgeOverflow : '',
        ].filter(Boolean).join(' ');

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
                    <div className={styles.dayStats} style={{ '--custom-primary-color': primaryColor || 'var(--layout-accent, #058efc)' , '--custom-danger-color': dangerColor || 'var(--hint-error, #ff525b)' }}>
                        <span className={badgeClass}>
                            {activeCount}
                        </span>
                        <span className={styles.counterSlots}>
                            / {slotsForDay}
                        </span>
                    </div>
                </div>

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
                                                showAvatar={showAvatar}
                                                showDotInCardWeek={showDotInCardWeek}
                                                isDragging={snapshot.isDragging}
                                                primaryColor={primaryColor}
                                                dangerColor={dangerColor}
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
                                showAvatar={showAvatar}
                                showDotInCardWeek={showDotInCardWeek}
                                provided={{ innerRef: () => {}, draggableProps: {}, dragHandleProps: {} }}
                                isDragging={false}
                                primaryColor={primaryColor}
                                dangerColor={dangerColor}
                            />
                        ))}
                    </div>
                )}
            </div>
        );
    };

    const grid = (
        <div className={styles.cardWeekGrid}>
            {weekDays.map(renderDayColumn)}
        </div>
    );

    return dragEnabled
        ? <DragDropContext onDragEnd={handleDragEnd}>{grid}</DragDropContext>
        : grid;
};

// Статические методы
CardWeekView.title = (date, { localizer }) => {
    const start = moment(date).startOf('isoWeek');
    const end = moment(date).endOf('isoWeek');
    return start.format('DD.MM') + ' - ' + end.format('DD.MM');
};

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

CardWeekView.range = (date) => {
    const start = moment(date).startOf('isoWeek');
    return Array.from({ length: 7 }, (_, i) =>
        moment(start).add(i, 'days').toDate()
    );
};

export default CardWeekView;