import React, {useState} from 'react'
//import Datetime from 'react-datetime'
//require('react-datetime');
import * as Datetime from 'react-datetime'
import styles from './datepicker.module.css'

export default function Datepicker(props) {
    return (
        <div className={styles.calendar}>
            <Datetime 
                inputProps={{ 
                    placeholder: props.placeholder, 
                    disabled: props.disabled, 
                    defaultValue: props.defaultValue 
                }}
                onChange={props.onChange}
            />
        </div>
    )
}