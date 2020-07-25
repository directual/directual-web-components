import React, { useState } from 'react'
import styles from './filters.module.css'
import {AdvancedOptionsHandler} from '../../dataentry/optionsHandler/optionsHandler'

export default function Filters(props) {
    return (
        <div className={styles.filtersWrapper}>
            <AdvancedOptionsHandler />
        </div>
    )
}