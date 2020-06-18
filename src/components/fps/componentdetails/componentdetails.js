import React, { useState } from 'react'
import styles from './componentdetails.module.css'
import FpsTable from '../table/table'

export default function ComponentDetails(props) {
    const [show, setShow] = useState(false)
    return (
        <div style={{ marginTop: 24, marginBottom: 24 }}>
            <div className={styles.showhide}>
                <a className={`icon icon-codeArray`} onClick={() => setShow(!show)}>{!show ? 'Show ' : 'Hide '} {props.data.headerField}</a>
            </div>
            {show &&
                <FpsTable data={props.data} />}
        </div>
    )
}
