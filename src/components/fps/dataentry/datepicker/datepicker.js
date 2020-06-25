import React, {useState} from 'react'
//import Datetime from 'react-datetime'
//require('react-datetime');
import * as Datetime from 'react-datetime'
import styles from './datepicker.module.css'
import moment from 'moment';

export default function Datepicker(props) {
    const dateFormat = props.dateFormat || 'D, MMM, YYYY'
    let timeFormat;
    if (typeof props.timeFormat == 'string') {timeFormat = props.timeFormat}
    if (typeof props.timeFormat == 'undefined') {timeFormat = ' h:mm a'}
    //console.log(typeof props.timeFormat)
    return (
        <div className={styles.calendar}>
            <Datetime 
                defaultValue = {props.defaultValue && moment(props.defaultValue).format(dateFormat + timeFormat)}
                dateFormat = {dateFormat}
                timeFormat = {timeFormat}
                onBlur={props.onBlur}
                closeOnSelect={props.closeOnSelect}
                inputProps={{ 
                    placeholder: props.placeholder, 
                    disabled: props.disabled,
                }}
                onChange={props.onChange}
            />
        </div>
    )
}