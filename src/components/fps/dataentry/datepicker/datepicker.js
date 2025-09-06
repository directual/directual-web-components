import React, { useState, useEffect } from 'react'
//import Datetime from 'react-datetime'
//require('react-datetime');
import * as Datetime from 'react-datetime'
import styles from './datepicker.module.css'
import moment from 'moment';
import 'moment/locale/ru'
import 'moment/locale/en-gb'
import 'moment/locale/es'
import 'moment/locale/fr'
import { dict } from '../../locale'
import 'moment/locale/de'

export default function Datepicker(props) {
    const dateFormat = props.dateFormat // || 'D, MMM, YYYY'
    let timeFormat;
    if (typeof props.timeFormat == 'string') { timeFormat = props.timeFormat }
    if (typeof props.timeFormat == 'undefined') { timeFormat = ' HH:mm' }
    //console.log(typeof props.timeFormat)
    const lang = props.locale ? props.locale.length == 3 ? props.locale : 'ENG' : 'ENG'

    const [value, setValue] = useState(props.defaultValue && props.utc ? moment.utc(props.defaultValue) : moment(props.defaultValue))

    const parseJson = json => {
        if (!json) return {}
        let parsedJson = {}
        if (typeof json == 'object') return json
        try {
            parsedJson = JSON.parse(json)
        }
        catch (e) {
            console.log(json);
            console.log(e);
        }
        return parsedJson
    }


    useEffect(() => {
        if (!props.defaultValue) {
            setValue(null)
        } else {
            // console.log(props.defaultValue)
            // console.log(moment(props.defaultValue).isValid())
            !value && moment(props.defaultValue).isValid() && setValue(props.utc ? moment.utc(props.defaultValue) : moment(props.defaultValue))
        }
    }, [props.defaultValue])

    const validWeekDays = current => {
        const allowPast = props.allowPast || { past: true }
        const validWeekDays = props.validWeekDays || { mon: true, tue: true, wed: true, thu: true, fri: true, sat: true, sun: true }
        if (current < moment() && !current.isSame(moment(), 'day') && !allowPast.past) { return false }
        if (current.day() == 0) { return validWeekDays.sun }
        if (current.day() == 1) { return validWeekDays.mon }
        if (current.day() == 2) { return validWeekDays.tue }
        if (current.day() == 3) { return validWeekDays.wed }
        if (current.day() == 4) { return validWeekDays.thu }
        if (current.day() == 5) { return validWeekDays.fri }
        if (current.day() == 6) { return validWeekDays.sat }
        return true
    }

    const renderInput = (props, openCalendar, closeCalendar) => {
        const clear = () => {
            props.onChange({ target: { value: '' } });
        }
        return (
            <div onClick={e => {
                e.stopPropagation()
                !props.disabled && openCalendar(e)
            }} className={`${styles.datePicker} ${props.disabled && styles.disabled}`}>
                <div className={`${styles.icon} icon icon-calendar`} />
                <div className={styles.value}>{props.value}</div>
                {props.value && <div onClick={clear} className={`${styles.clear} icon icon-close`} />}
            </div>
        );
    }

    // console.log('value')
    // console.log(value)
    // console.log('renderInput')
    // console.log(renderInput)
    // console.log('dateFormat')
    // console.log(dateFormat)

    return (
        <div className={styles.calendar}>
            {/* <div className='dd-debug'>{JSON.stringify(value)}</div> */}
            <Datetime
                value={value}
                renderInput={renderInput}
                dateFormat={dateFormat}
                locale={props.locale || 'en-gb'}
                timeFormat={timeFormat}
                isValidDate={validWeekDays}
                timeConstraints={parseJson(props.timeConstraints)}
                className={props.correctedHeight ? 'correctedHeight' : ''}
                utc={props.utc}
                closeOnSelect={true}
                inputProps={{
                    placeholder: props.placeholder,
                    disabled: props.disabled,
                }}

                onChange={value => {
                    props.onChange(value)
                    setValue(value)
                }}
            />
        </div>
    )
}