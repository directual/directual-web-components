import React from 'react'
import _ from 'lodash'

import styles from './hint.module.css'

// HINT

export default function Hint(props) {

    const marginTop = (_.get(props,'margin.top') || _.get(props,'margin.top') === 0) ? _.get(props,'margin.top') : 24 
    const marginBottom = (_.get(props,'margin.bottom') || _.get(props,'margin.bottom') === 0) ? _.get(props,'margin.bottom') : 24 

    return (
        <blockquote
            style={
                {
                    marginTop: marginTop,
                    marginBottom: marginBottom
                }
            }
            className={`${styles.hint} ${props.ok && styles.ok} ${props.error && styles.error}`}>
            {props.title && <p className={styles.title}>{props.title}</p>}
            <p>{props.children}</p>
        </blockquote>
    )
}