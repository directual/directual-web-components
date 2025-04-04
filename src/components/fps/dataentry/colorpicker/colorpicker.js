import React, { useState, useEffect } from 'react'
import { TwitterPicker, SketchPicker } from 'react-color'
import styles from './colorpicker.module.css'

export default function Colorpicker(props) {

    const [color, setColor] = useState(props.defaultValue || {})

    useEffect(() => { setColor(props.defaultValue || {}) }, [props.defaultValue])

    const setColorHandler = value => {
        let val = value ? (value.hex ? value.hex : value) : null
        if (_.get(value,"rgb.a") != 1 && _.get(value,"rgb")) {
            val = 'rgba(' + value.rgb.r + "," + value.rgb.g + "," + value.rgb.b + "," + value.rgb.a + ")"
        }
        props.onChange && props.onChange(val)
        setColor(value)
    }

    if (props.sketch) {
        return <div className={styles.colorpicker}><SketchPicker
            triangle='top-left'
            color={color}
            onChange={value => setColorHandler(value)}
        /></div>
    }

    return <div>
        <TwitterPicker
            triangle='hide'
            color={color}
            onChange={value => setColorHandler(value)}
        /></div>
}