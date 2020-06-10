import React from 'react'
import styles from './componentdetails.module.css'
import FpsTable from '../table/table'

export default function ComponentDetails(props) {
    return (
        <div style={{marginTop:24, marginBottom:24}}>
            <FpsTable data={props.data}/>
        </div>
    )
}
