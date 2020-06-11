import React, { useState, useEffect } from 'react'
import styles from './input.module.css'
import Radio from '../radio/radio'

export default function Input(props) {
    const [value, setValue] = useState(props.defaultValue)
    const [pwdVisible, setPwdVisible] = useState('password')
    const [warningMsg, setWarningMesg] = useState(props.warning || {})

    const checkValue = () => {
        (!value && props.required) ?
            setWarningMesg({ type: 'error', msg: 'This field is required' }) :
            setWarningMesg({});
    }

    const clearValue = () => {
        setValue('')
        props.required ?
            setWarningMesg({ type: 'error', msg: 'This field is required' }) :
            setWarningMesg({});
    }

    const handleChange = (e) => {
        setValue(e.target.value)
        props.required && setWarningMesg({});
    }

    // useEffect(
    //     () => checkValue(), 
    // [value])

    return (
        <div className={styles.input_wrapper}>
            <label>{props.label}</label>
            {/* value: {value} */}

            {props.type == 'text' &&
                <div className={styles.field_wrapper}>
                    <input
                        className={`${styles.field} ${warningMsg.type && styles[warningMsg.type]}`}
                        type="text"
                        onChange={e => handleChange(e)}
                        value={value}
                        onBlur={checkValue}
                        placeholder={props.placeholder}
                    />
                    {value &&
                        <div className={`${styles.clear} icon icon-close`}
                            onClick={clearValue}></div>}
                </div>}

            {props.type == 'textarea' &&
                <div className={styles.field_wrapper}>
                    <textarea
                        className={`${styles.field} ${warningMsg.type && styles[warningMsg.type]}`}
                        type="text"
                        rows={props.rows || 3}
                        onChange={e => handleChange(e)}
                        value={value}
                        onBlur={checkValue}
                        placeholder={props.placeholder}
                    />
                    {value &&
                        <div className={`${styles.clear} icon icon-close`}
                            onClick={clearValue}></div>}
                </div>}

            {props.type == 'password' &&
                <div className={styles.field_wrapper}>
                    <input
                        className={`${styles.field} ${warningMsg.type && styles[warningMsg.type]}`}
                        type={pwdVisible}
                        onChange={e => setValue(e.target.value)}
                        value={value}
                        onBlur={checkValue}
                        placeholder={props.placeholder} />
                    {pwdVisible == 'password' &&
                        <div className={`${styles.clear} icon icon-view`}
                            onClick={() => setPwdVisible('text')}></div>}
                    {pwdVisible == 'text' &&
                        <div className={`${styles.clear} icon icon-hide`}
                            onClick={() => setPwdVisible('password')}></div>}
                </div>}

                {props.type == 'radio' &&
                    <Radio
                        onChange={e => setValue(e.target.value)}
                        defaultValue={props.defaultValue}
                        options={props.options}
                    />
                }
            {warningMsg &&
                <div className={`${styles.status} ${styles[warningMsg.type]}`}>{warningMsg.msg}</div>}
        </div>
    )
}