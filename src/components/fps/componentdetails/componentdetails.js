import React from 'react'
import styles from './componentdetails.module.css'
import FpsTable from '../table/table'

export default function ComponentDetails(props) {
    let exampleData = {
        'headers': [ 
            { name: 'Prop' },
            { name: 'Description'}
        ]
    }
    return (

        <FpsTable data={exampleData}/>

    )
}
