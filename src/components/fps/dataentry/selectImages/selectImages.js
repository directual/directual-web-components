import React, { useState, useEffect, useRef } from 'react'
import styles from './selectImages.module.css'
import _ from 'lodash'
import Checkbox from '../checkbox/checkbox'
import Radio from '../radio/radio'

export default function SelectImages(props) {

    // console.log("SelectImages")
    // console.log(props)

    const { options, defaultValue, radio, onChange } = props
    const [value, setValue] = useState(defaultValue)

    useEffect(() => {
        if (!_.isEqual(defaultValue, value)) { setValue(defaultValue) }
    }, [defaultValue])

    if (!options || options.length == 0) return <div>{_.get(props.dict, 'noOptions')}</div>


    if (!radio) return <div className={`FPS_SELECT_IMAGES ${styles.wrapper}`}>
        {(options || []).map(option => <ImageOption
            {...props}
            key={option.key}
            id={option.key}
            value={value}
            image={option.value}
            onChoose={() => {
                let saveValue = ""
                const element = option.key
                const array = value ? value.split(",") : []
                if (_.includes(array, element)) {
                    saveValue = _.without(_.without(array, element), "").join(",");
                } else {
                    saveValue = _.without(_.uniq(_.concat(array, element)), "").join(",")
                }
                setValue(saveValue);
                onChange(saveValue);
                console.log(saveValue)
            }}
        />)}
    </div>

    return <div className={`FPS_SELECT_IMAGES ${styles.wrapper}`}>
        {(options || []).map(option => <ImageRadioOption
            {...props}
            key={option.key}
            id={option.key}
            value={value}
            image={option.value}
            onChoose={() => {
                if (!radio) {
                    let saveValue = ""
                    const element = option.key
                    const array = value ? value.split(",") : []
                    if (_.includes(array, element)) {
                        saveValue = _.without(_.without(array, element), "").join(",");
                    } else {
                        saveValue = _.without(_.uniq(_.concat(array, element)), "").join(",")
                    }
                    setValue(saveValue);
                    onChange(saveValue);
                    console.log(saveValue)
                } else {
                    setValue(option.key);
                    onChange(option.key);
                }
            }}
        />)}
    </div>
}

function ImageOption(props) {
    const { image, resize, height, width, value, id, onChoose } = props

    return <div className={`${styles.option} ${_.includes((value || "").split(","), id) ? styles.selected : ""}`}
        style={{
            width: width || 120,
            height: height || 90,
            backgroundImage: `url(${image})`,
            backgroundPosition: `center center`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: resize || 'contain'
        }}
        onClick={onChoose}
    >
        <div className={styles.checkbox}>
            <Checkbox onChange={onChoose} checked={_.includes((value || "").split(","), id)} />
        </div>
    </div>
}

function ImageRadioOption(props) {
    const { image, resize, imageHeight, imageWidth, value, id, onChoose } = props

    return <div className={`${styles.option} ${value == id ? styles.selected : ""}`}
        style={{
            width: imageWidth || 120,
            height: imageHeight || 90,
            backgroundImage: `url(${image})`,
            backgroundPosition: `center center`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: resize || 'contain'
        }}
        onClick={onChoose}
    >
        <div className={styles.radio}>
            <Radio
                options={[{ label: "", value: id }]}
                defaultValue={value}
                nomargin
                onChange={onChoose}
            />
        </div>
    </div>
}