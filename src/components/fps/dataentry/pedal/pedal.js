import React, { useEffect, useState } from 'react'
import styles from './pedal.module.css'
import _ from 'lodash'

import Button from '../../button/button'

export default function Pedal(props) {

    const { onChange, defaultValue, options, stretch, width } = props

    return <div 
        style={{
            width: width || 'none',
        }}
        className={`FPS_PEDAL ${styles.pedal} 
        ${stretch ? styles.stretch : ""}
        `}>
        {(options || []).map((button, i) => <PedalButton
            button={button}
            defaultValue={defaultValue}
            isFirst={i == 0}
            onClick={()=>onChange(button.key)}
            isLast={i == (options || []).length - 1}
        />)}
    </div>
}

function PedalButton(props) {

    const { button, isFirst, isLast, defaultValue, onClick } = props

    return <div className={`FPS_PEDAL ${styles.pedalButton} 
        ${isFirst ? styles.first : ""}
        ${isLast ? styles.last : ""}
        ${button.key == defaultValue ? styles.selected : ""}
        ${button.icon ? `icon ${styles.icon} icon-${button.icon}` : ""}
        `}
        onClick={onClick}
        >
        {button.value || button.key}
    </div>
}