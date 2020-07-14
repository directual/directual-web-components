import React, { useState } from 'react'
import styles from './table.module.css'
import Backdrop from '../backdrop/backdrop'

export function ObjectCard(props) {
    const [showLinkedObject, setShowLinkedObject] = useState(false)
    return (
        <React.Fragment>
            <div className={styles.objectCard}>
                <div className={styles.objectCardHeader}>
                    <div onClick={props.onClose}
                        className={`${styles.closeObjectCard} icon icon-back ${showLinkedObject && styles.hidden}`}></div>
                    <h2>{props.id}</h2>
                </div>
                <div className={styles.objectCardBody}>
                    <a onClick={() => setShowLinkedObject(true)}>Click me</a>
                </div>
                {showLinkedObject &&
                    <React.Fragment>
                        <Backdrop onClick={() => setShowLinkedObject(false)} hoverable rounded label={props.id} />
                        <ObjectCard onClose={() => setShowLinkedObject(false)} />
                    </React.Fragment>}
            </div>

        </React.Fragment>
    )
}