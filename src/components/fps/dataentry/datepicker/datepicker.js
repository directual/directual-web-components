import React, { useState, useEffect } from 'react'
//import Datetime from 'react-datetime'
//require('react-datetime');
import * as Datetime from 'react-datetime'
import styles from './datepicker.module.css'
import moment from 'moment';

export default function Datepicker(props) {
    const dateFormat = props.dateFormat || 'D, MMM, YYYY'
    let timeFormat;
    if (typeof props.timeFormat == 'string') { timeFormat = props.timeFormat }
    if (typeof props.timeFormat == 'undefined') { timeFormat = ' h:mm a' }
    //console.log(typeof props.timeFormat)

    const [value, setValue] = useState(props.defaultValue && moment(props.defaultValue).zone("00:00"))

    // useEffect(()=>{
    //     if (props.defaultValue && !value) {
    //         setValue(props.defaultValue && moment(moment(props.defaultValue).format(dateFormat + timeFormat)).zone("00:00"))
    //     }
    // }, [props.defaultValue])

    return (
        <div className={styles.calendar}>
            <Datetime
                value={value}
                dateFormat={dateFormat}
                className={props.correctedHeight ? 'correctedHeight' : ''}
                utc={true}
                onBlur={props.onBlur}
                closeOnSelect={props.closeOnSelect}
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