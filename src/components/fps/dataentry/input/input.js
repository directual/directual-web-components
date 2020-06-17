import React, { useState, useEffect } from 'react'
import styles from './input.module.css'
import Radio from '../radio/radio'
import Select from '../select/select'
import Datepicker from '../datepicker/datepicker'

export default function Input(props) {
    const [value, setValue] = useState(props.defaultValue)
    const [pwdVisible, setPwdVisible] = useState('password')
    const [warningMsg, setWarningMesg] = useState(props.warning || {})

    const checkValue = () => {
        (!value && props.required) ?
            setWarningMesg({ type: 'error', msg: 'This field is required' }) :
            setWarningMesg({});
    }

    const checkEmailValue = () => {
        (!value && props.required) ?
            setWarningMesg({ type: 'error', msg: 'This field is required' }) :
            setWarningMesg({});
        (value && !validateEmail(value)) &&
            setWarningMesg({ type: 'error', msg: 'Email format is wrong' })
    }

    const validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const clearValue = () => {
        setValue('')
        props.required ?
            setWarningMesg({ type: 'error', msg: 'This field is required' }) :
            setWarningMesg({});
    }

    const handleChange = (e) => {
        props.onChange && props.onChange(e)
        setValue(e)
        props.required && setWarningMesg({})
    }

    const handleChangeNumber = (e) => {
        console.log(e)
        console.log(parseInt(e))
        console.log(!isNaN(parseInt(e)))
        if (isNaN(parseInt(e))) {
            setValue('0');
        } else {
            props.positive && parseInt(e) < 0 && setValue('0');
            props.positive && parseInt(e) >= 0 && setValue(parseInt(e));
            !props.positive && setValue(parseInt(e));
        }
        // if (!isNaN(parseInt(e))) {
        //     props.onChange && props.onChange(e)
        //     props.required && setWarningMesg({})
        // } else {setValue('')}
    }
    useEffect(() => {
        props.onChange && props.onChange(value)
    }, [value])

    // useEffect(
    //     () => checkValue(), 
    // [value])

    return (
        <div className={styles.input_wrapper} style={{ maxWidth: props.width || 'auto' }}>
            <label>{props.label}</label>
            {/* value: {value} */}

            {props.type != 'email' &&
            props.type != 'number' &&
            props.type != 'textarea' &&
            props.type != 'password' &&
            props.type != 'radio' &&
            props.type != 'select' &&
            props.type != 'multiselect' &&
            props.type != 'date' &&
                <div className={styles.field_wrapper}>
                    <input
                        disabled={props.disabled}
                        className={`${styles.field} ${warningMsg.type && styles[warningMsg.type]} ${props.disabled && styles.disabled}`}
                        type="text"
                        onChange={e => handleChange(e.target.value)}
                        value={value}
                        onBlur={checkValue}
                        placeholder={props.placeholder}
                    />
                    {value && !props.disabled &&
                        <div className={`${styles.clear} icon icon-close`}
                            onClick={clearValue}></div>}
                </div>}

            {props.type == 'email' &&
                <div className={styles.field_wrapper}>
                    <input
                        disabled={props.disabled}
                        className={`${styles.field} ${warningMsg.type && styles[warningMsg.type]} ${props.disabled && styles.disabled}`}
                        type="text"
                        onChange={e => handleChange(String(e.target.value).toLowerCase())}
                        value={value}
                        onBlur={checkEmailValue}
                        placeholder={props.placeholder}
                    />
                    {value && !props.disabled &&
                        <div className={`${styles.clear} icon icon-close`}
                            onClick={clearValue}></div>}
                </div>}

            {props.type == 'number' &&
                <div className={styles.field_wrapper}>
                    <input
                        className={`${styles.field} ${props.disabled && styles.disabled} ${warningMsg.type && styles[warningMsg.type]}`}
                        disabled={props.disabled}
                        type="text"
                        onChange={e => handleChangeNumber(e.target.value)}
                        value={value}
                        onBlur={checkValue}
                        placeholder={props.placeholder}
                    />

                    {!props.disabled && <React.Fragment>
                        <div className={`${styles.plus} icon icon-up`}
                            onClick={() => handleChangeNumber(parseInt(value) + 1)}></div>
                        {props.positive && value > 0 && <div className={`${styles.minus} icon icon-down`}
                            onClick={() => handleChangeNumber(parseInt(value) - 1)}></div>}
                        {!props.positive && <div className={`${styles.minus} icon icon-down`}
                            onClick={() => handleChangeNumber(parseInt(value) - 1)}></div>}</React.Fragment>}
                </div>}

            {props.type == 'textarea' &&
                <div className={styles.field_wrapper}>
                    <textarea
                        disabled={props.disabled}
                        className={`${styles.field} ${props.disabled && styles.disabled} ${warningMsg.type && styles[warningMsg.type]}`}
                        type="text"
                        rows={props.rows || 3}
                        onChange={e => handleChange(e.target.value)}
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
                        disabled={props.disabled}
                        className={`${styles.field} ${props.disabled && styles.disabled} ${warningMsg.type && styles[warningMsg.type]}`}
                        type={pwdVisible}
                        onChange={e => handleChange(e.target.value)}
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
            {props.type == 'select' &&
                <Select 
                    placeholder={props.placeholder}
                    options={props.options}
                    icon={props.icon}
                    disabled={props.disabled}
                    defaultValue={props.defaultValue}
                    iconOptions={props.iconOptions}
                    onChange={e => props.onChange && props.onChange(e)}
                    />
            }
            {props.type == 'date' &&
                <Datepicker 
                    onChange={e => props.onChange && props.onChange(e)}
                    disabled={props.disabled}
                    placeholder={props.placeholder}
                    defaultValue={props.defaultValue}
                    dateFormat={props.dateFormat}
                    timeFormat = {props.timeFormat}
                />
            }
            {props.type == 'multiselect' &&
                <Select 
                    placeholder={props.placeholder}
                    options={props.options}
                    icon={props.icon}
                    disabled={props.disabled}
                    multi
                    defaultValue={props.defaultValue}
                    //iconOptions={props.iconOptions}
                    onChange={e => props.onChange && props.onChange(e)}
                    />
            }
            {warningMsg &&
                <div className={`${styles.status} ${styles[warningMsg.type]}`}>{warningMsg.msg}</div>}
        </div>
    )
}