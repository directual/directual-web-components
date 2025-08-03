import React, { useState, useEffect } from "react"
import styles from './form2.module.css'
import _ from 'lodash'

export default function FpsFormPopup(props) {
    const { children, width, onClose } = props

    return <div className={`FPS_FORM2_POPUP_OVERLAY ${styles.popup_overlay}`} onClick={() => onClose(false)}>
        <div className={`FPS_FORM2_POPUP ${styles.popup}`} onClick={e => e.stopPropagation()}>
            <span className={`icon icon-close ${styles.close_popup}`} onClick={() => onClose(true)}/>
            <div style={{ width: width }}>
                {children}
            </div>
        </div>
    </div>

}
