import React, { useState } from 'react'
import styles from './filters.module.css'
import {AdvancedOptionsHandler} from '../../dataentry/optionsHandler/optionsHandler'

const expressions = {
    // operator, json doesn't have expressions
    string: [ // phone, email
        {key:'is...', value:'=='},
        {key:'is not...', value:'!='},
        {key:'like...', value:'like'},
        {key:'is empty...', value:'isEmpty'},
        {key:'is not empty...', value:'isNotNull'},
        {key:'any of...', value:'in'},
        {key:'regular expression...', value:'regExp'},
    ],
    phone: [
        {key:'is...', value:'=='},
        {key:'is not...', value:'!='},
        {key:'like...', value:'like'},
        {key:'is empty...', value:'isEmpty'},
        {key:'is not empty...', value:'isNotNull'},
        {key:'any of...', value:'in'},
        {key:'regular expression...', value:'regExp'},
    ],
    email: [
        {key:'is...', value:'=='},
        {key:'is not...', value:'!='},
        {key:'like...', value:'like'},
        {key:'is empty...', value:'isEmpty'},
        {key:'is not empty...', value:'isNotNull'},
        {key:'any of...', value:'in'},
        {key:'regular expression...', value:'regExp'},
    ],
    number: [
        {key:'less than...', value:'<'},
        {key:'more than...', value:'>'},
        {key:'is...', value:'=='},
        {key:'is not...', value:'!='},
        {key:'is empty...', value:'isEmpty'},
        {key:'is not empty...', value:'isNotNull'},
    ],
    decimal: [
        {key:'less than...', value:'<'},
        {key:'more than...', value:'>'},
        {key:'is...', value:'=='},
        {key:'is not...', value:'!='},
        {key:'is empty...', value:'isEmpty'},
        {key:'is not empty...', value:'isNotNull'},
    ],
    date: [
        {key:'before...', value:'<'},
        {key:'after...', value:'>'},
        {key:'is...', value:'equalsDate'},
        {key:'exactly is...', value:'=='},
        {key:'is empty...', value:'isEmpty'},
        {key:'is not empty...', value:'isNotNull'},
    ],
    array: [
        {key:'is...', value:'=='},
        {key:'is not...', value:'!='},
        {key:'is empty...', value:'isEmpty'},
        {key:'is not empty...', value:'isNotNull'},
        {key:'contains any of...', value:'arrayContainsAny'},
        {key:'contains all of...', value:'arrayContainsAll'},
    ],
    arrayLink: [
        {key:'is...', value:'=='},
        {key:'is not...', value:'!='},
        {key:'is empty...', value:'isEmpty'},
        {key:'is not empty...', value:'isNotNull'},
        {key:'contains any of...', value:'arrayContainsAny'},
        {key:'contains all of...', value:'arrayContainsAll'},
    ],
    link: [
        {key:'is...', value:'=='},
        {key:'is not...', value:'!='},
        {key:'like...', value:'like'},
        {key:'is empty...', value:'isEmpty'},
        {key:'is not empty...', value:'isNotNull'},
        {key:'any of...', value:'in'},
        {key:'regular expression...', value:'regExp'},
    ],
}

export default function Filters(props) {
    return (
        <div className={styles.filtersWrapper}>
            <AdvancedOptionsHandler addButtonText='Add filter' applyButtonText='Apply filters' clearButtonText='Clear filters'/>
        </div>
    )
}