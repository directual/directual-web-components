import React, { useState, useEffect, useRef } from 'react'
import styles from './spacing.module.css'
import PropTypes from 'prop-types';
import '../../theme/theme.module.css'
import _ from 'lodash'
import Input from '../input/input'

export default function Spacing(props) {

    const { label, defaultValue, onChange, isCentered, type, nomargin } = props
    const [value, setValue] = useState(defaultValue ||
        (type == 'horisontal' ? 0
            : {
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 0,
                paddingTop: 0,
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0,
            }))


    useEffect(() => {
        if (!_.isEqual(value, defaultValue)) setValue(defaultValue)
    }, [defaultValue])

    const handleChange = field => val => {
        const newValue = field ? { ...value, [field]: val } : val
        setValue(newValue)
        onChange && onChange(newValue)
    }

    if (type == 'horisontal') return <div className={styles.inputMarginWrapper} style={{marginBottom: nomargin ? 0 : 22}}>
        <Input label={label} type='number' nomargin defaultValue={value} onChange={handleChange(null)} positive />
        <div className={`${styles.spaceWrapper} ${styles.hor}`}>
            <div className={styles.block} />
            <div className={styles.space} style={{ width: value }} />
            <div className={styles.block} />
        </div>
    </div>

    if (type == 'vertical') return <div className={styles.inputMarginWrapper} style={{marginBottom: nomargin ? 0 : 22}}>
        <Input label={label} type='number' nomargin defaultValue={value} onChange={handleChange(null)} positive />
        <div className={`${styles.spaceWrapper} ${styles.vert}`}>
            <div className={styles.block} />
            <div className={styles.space} style={{ height: value }} />
            <div className={styles.block} />
        </div>
    </div>

    return <div className={styles.spacingWrapper} style={{marginBottom: nomargin ? 0 : 22}}>
        {label && <div className={styles.label}>{label}</div>}
        <div className={styles.margin}>
            <p className={styles.spacingTitle}>MARGIN</p>
            <input className={`${styles.input} ${styles.marginTop}`}
                type='number'
                placeholder='0'
                value={_.get(value, "marginTop")}
                onChange={e => handleChange("marginTop")(e.target.value)}
            />
            {isCentered ?
                <div className={`${styles.input} ${styles.disabled} ${styles.marginRight}`}>auto</div>
                :
                <input className={`${styles.input} ${styles.marginRight}`}
                    type='number'
                    placeholder='0'
                    value={_.get(value, "marginRight")}
                    onChange={e => handleChange("marginRight")(e.target.value)}
                />}
            <input className={`${styles.input} ${styles.marginBottom}`}
                type='number'
                placeholder='0'
                value={_.get(value, "marginBottom")}
                onChange={e => handleChange("marginBottom")(e.target.value)}
            />
            {isCentered ?
                <div className={`${styles.input} ${styles.disabled} ${styles.marginLeft}`}>auto</div>
                :
                <input className={`${styles.input} ${styles.marginLeft}`}
                    type='number'
                    placeholder='0'
                    value={_.get(value, "marginLeft")}
                    onChange={e => handleChange("marginLeft")(e.target.value)}
                />}
            {/* {isCentered ?
                <input className={`${styles.input} ${styles.marginLeft}`}
                    placeholder='auto'
                    disabled
                />
                :
                <input className={`${styles.input} ${styles.marginLeft}`}
                    type='number'
                    placeholder='0'
                    value={_.get(value, "marginLeft")}
                    onChange={e => handleChange("marginLeft")(e.target.value)}
                />} */}
            <div className={styles.padding}>
                <p className={styles.spacingTitle}>PADDING</p>
                <input className={`${styles.input} ${styles.paddingTop}`}
                    type='number'
                    placeholder='0'
                    value={_.get(value, "paddingTop")}
                    onChange={e => handleChange("paddingTop")(e.target.value)}
                />
                <input className={`${styles.input} ${styles.paddingRight}`}
                    type='number'
                    placeholder='0'
                    value={_.get(value, "paddingRight")}
                    onChange={e => handleChange("paddingRight")(e.target.value)}
                />
                <input className={`${styles.input} ${styles.paddingBottom}`}
                    type='number'
                    placeholder='0'
                    value={_.get(value, "paddingBottom")}
                    onChange={e => handleChange("paddingBottom")(e.target.value)}
                />
                <input className={`${styles.input} ${styles.paddingLeft}`}
                    type='number'
                    placeholder='0'
                    value={_.get(value, "paddingLeft")}
                    onChange={e => handleChange("paddingLeft")(e.target.value)}
                />
            </div>
        </div>
    </div>
}

Spacing.propTypes = {
    defaultValue: PropTypes.object,
    onChange: PropTypes.func,
    label: PropTypes.string,
    isCentered: PropTypes.bool,
    type: PropTypes.string,
    nomargin: PropTypes.bool
};

Spacing.defaultProps = {
    defaultValue: {},
    onChange: undefined,
    label: "",
    isCentered: false,
    type: 'all',
    nomargin: false
};