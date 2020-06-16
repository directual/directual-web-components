import React, {useState} from 'react'
//import Datetime from 'react-datetime'
//require('react-datetime');
import * as Datetime from 'react-datetime'
import styles from './datepicker.module.css'

export default function Datepicker(props) {
    
    const [value, setValue] = useState()


    return (
        <div className={styles.calendar}>
            <Datetime />
            {/* <DateTimePicker
            onChange={onChange}
            value={value && value.date}
            locale='en'
            calendarClassName={styles.cal_wrapper}
            /> */}
        </div>
    )
}