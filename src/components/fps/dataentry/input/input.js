import React, { useState, useEffect } from 'react'
import styles from './input.module.css'
import Radio from '../radio/radio'
import Select from '../select/select'
import Datepicker from '../datepicker/datepicker'
import Slider from '../slider/slider'

export function InputGroup(props) {
    return (
        <div className={styles.input_group} style={{ maxWidth: props.width || 'auto' }}>
            {props.children}
        </div>
    )
}

export default function Input(props) {
    const [value, setValue] = useState(props.defaultValue)
    const [pwdVisible, setPwdVisible] = useState('password')
    const [warningMsg, setWarningMesg] = useState(props.warning || {})
    const [defVal, setDefVal] = useState(props.defaultValue)


    const checkValue = () => {
        console.log('checking...');
        ((!value || (value && value.length == 0)) && (value != 0) && props.required) ?
            setWarningMesg({ type: 'error', msg: 'This field is required' }) :
            setWarningMesg({});
    }

    const [searchValue, setSearchValue] = useState()
    const checkSearchValue = () => {
        (value != searchValue && value) ? setWarningMesg({ type: 'warning', msg: 'Press Enter to search...' }) : setWarningMesg({});
    }

    useEffect(() => {
        warningMsg.type == 'error' ? props.validationHandler && props.validationHandler(props.sysName, false) : props.validationHandler && props.validationHandler(props.sysName, true)
    }, [warningMsg])

    useEffect(() => { setValue(props.defaultValue); setDefVal(props.defaultValue) }, [props.defaultValue])

    const checkEmailValue = (v) => {
        (!v && props.required) ?
            setWarningMesg({ type: 'error', msg: 'This field is required' }) :
            setWarningMesg({});
        (v && !validateEmail(v)) &&
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

    const handleChangeDecimalNumber = (e) => {
        props.onChange && props.onChange(e)
        setValue(e)
        props.required && setWarningMesg({})
    }


    const handleChangeNumber = (e) => {
        if (isNaN(parseInt(e))) {
            setValue(null);
        } else {
            props.positive && parseInt(e) < 0 && setValue(0);
            props.positive && parseInt(e) >= 0 && setValue(parseInt(e));
            !props.positive && setValue(parseInt(e));
        }
        checkValue()
    }
    useEffect(() => {
        props.onChange && props.onChange(value);
        props.type == 'select' && props.required && value != props.defaultValue && checkValue();
        props.type == 'icon' && props.required && value != props.defaultValue && checkValue();
        props.type == 'multiselect' && props.required && value != props.defaultValue && checkValue();
    }, [value])

    const icon_options =
        [
            { key: 'babai', value: 'babai', icon: 'babai' },
            { key: 'actions', value: 'actions', icon: 'actions' },
            { key: 'application', value: 'application', icon: 'application' },
            { key: 'arrowDown', value: 'arrowDown', icon: 'arrowDown' },
            { key: 'arrowLeft', value: 'arrowLeft', icon: 'arrowLeft' },
            { key: 'arrowRight', value: 'arrowRight', icon: 'arrowRight' },
            { key: 'arrowRightMany', value: 'arrowRightMany', icon: 'arrowRightMany' },
            { key: 'arrowUp', value: 'arrowUp', icon: 'arrowUp' },
            { key: 'back', value: 'back', icon: 'back' },
            { key: 'ban', value: 'ban', icon: 'ban' },
            { key: 'bellActive', value: 'bellActive', icon: 'bellActive' },
            { key: 'bell', value: 'bell', icon: 'bell' },
            { key: 'bookmarkFill', value: 'bookmarkFill', icon: 'bookmarkFill' },
            { key: 'bookmark', value: 'bookmark', icon: 'bookmark' },
            { key: 'boolean', value: 'boolean', icon: 'boolean' },
            { key: 'bracketsArray', value: 'bracketsArray', icon: 'bracketsArray' },
            { key: 'brackets', value: 'brackets', icon: 'brackets' },
            { key: 'bubble', value: 'bubble', icon: 'bubble' },
            { key: 'bug', value: 'bug', icon: 'bug' },
            { key: 'calendar', value: 'calendar', icon: 'calendar' },
            { key: 'chart', value: 'chart', icon: 'chart' },
            { key: 'clip', value: 'clip', icon: 'clip' },
            { key: 'clocks', value: 'clocks', icon: 'clocks' },
            { key: 'close', value: 'close', icon: 'close' },
            { key: 'codeArray', value: 'codeArray', icon: 'codeArray' },
            { key: 'code', value: 'code', icon: 'code' },
            { key: 'codeXML', value: 'codeXML', icon: 'codeXML' },
            { key: 'collapse', value: 'collapse', icon: 'collapse' },
            { key: 'comment', value: 'comment', icon: 'comment' },
            { key: 'configure', value: 'configure', icon: 'configure' },
            { key: 'copy', value: 'copy', icon: 'copy' },
            { key: 'creditcard', value: 'creditcard', icon: 'creditcard' },
            { key: 'database', value: 'database', icon: 'database' },
            { key: 'delete', value: 'delete', icon: 'delete' },
            { key: 'detailsAlt', value: 'detailsAlt', icon: 'detailsAlt' },
            { key: 'details', value: 'details', icon: 'details' },
            { key: 'down', value: 'down', icon: 'down' },
            { key: 'done', value: 'done', icon: 'done' },
            { key: 'download', value: 'download', icon: 'download' },
            { key: 'edit', value: 'edit', icon: 'edit' },
            { key: 'expand', value: 'expand', icon: 'expand' },
            { key: 'export', value: 'export', icon: 'export' },
            { key: 'filterFill', value: 'filterFill', icon: 'filterFill' },
            { key: 'filter', value: 'filter', icon: 'filter' },
            { key: 'folder', value: 'folder', icon: 'folder' },
            { key: 'forward', value: 'forward', icon: 'forward' },
            { key: 'gates', value: 'gates', icon: 'gates' },
            { key: 'cards', value: 'cards', icon: 'cards' },
            { key: 'help', value: 'help', icon: 'help' },
            { key: 'hide', value: 'hide', icon: 'hide' },
            { key: 'history', value: 'history', icon: 'history' },
            { key: 'hook', value: 'hook', icon: 'hook' },
            { key: 'id', value: 'id', icon: 'id' },
            { key: 'import', value: 'import', icon: 'import' },
            { key: 'info', value: 'info', icon: 'info' },
            { key: 'keynote', value: 'keynote', icon: 'keynote' },
            { key: 'license', value: 'license', icon: 'license' },
            { key: 'list', value: 'list', icon: 'list' },
            { key: 'lock', value: 'lock', icon: 'lock' },
            { key: 'logoutAlt', value: 'logoutAlt', icon: 'logoutAlt' },
            { key: 'logout', value: 'logout', icon: 'logout' },
            { key: 'love', value: 'love', icon: 'love' },
            { key: 'mail', value: 'mail', icon: 'mail' },
            { key: 'menu', value: 'menu', icon: 'menu' },
            { key: 'minus', value: 'minus', icon: 'minus' },
            { key: 'mobile', value: 'mobile', icon: 'mobile' },
            { key: 'move', value: 'move', icon: 'move' },
            { key: 'nocode', value: 'nocode', icon: 'nocode' },
            { key: 'num', value: 'num', icon: 'num' },
            { key: 'number', value: 'number', icon: 'number' },
            { key: 'ovalFill', value: 'ovalFill', icon: 'ovalFill' },
            { key: 'oval', value: 'oval', icon: 'oval' },
            { key: 'paragraph', value: 'paragraph', icon: 'paragraph' },
            { key: 'permission', value: 'permission', icon: 'permission' },
            { key: 'pinned', value: 'pinned', icon: 'pinned' },
            { key: 'playFill', value: 'playFill', icon: 'playFill' },
            { key: 'play', value: 'play', icon: 'play' },
            { key: 'plug', value: 'plug', icon: 'plug' },
            { key: 'plus', value: 'plus', icon: 'plus' },
            { key: 'refresh', value: 'refresh', icon: 'refresh' },
            { key: 'restore', value: 'restore', icon: 'restore' },
            { key: 'rhombusFill', value: 'rhombusFill', icon: 'rhombusFill' },
            { key: 'rhombus', value: 'rhombus', icon: 'rhombus' },
            { key: 'rocket', value: 'rocket', icon: 'rocket' },
            { key: 'search', value: 'search', icon: 'search' },
            { key: 'settings', value: 'settings', icon: 'settings' },
            { key: 'shield', value: 'shield', icon: 'shield' },
            { key: 'sms', value: 'sms', icon: 'sms' },
            { key: 'sort', value: 'sort', icon: 'sort' },
            { key: 'stopFill', value: 'stopFill', icon: 'stopFill' },
            { key: 'stop', value: 'stop', icon: 'stop' },
            { key: 'string', value: 'string', icon: 'string' },
            { key: 'styles', value: 'styles', icon: 'styles' },
            { key: 'tag', value: 'tag', icon: 'tag' },
            { key: 'telegram', value: 'telegram', icon: 'telegram' },
            { key: 'tune', value: 'tune', icon: 'tune' },
            { key: 'unlock', value: 'unlock', icon: 'unlock' },
            { key: 'unpinned', value: 'unpinned', icon: 'unpinned' },
            { key: 'unplug', value: 'unplug', icon: 'unplug' },
            { key: 'up', value: 'up', icon: 'up' },
            { key: 'upload', value: 'upload', icon: 'upload' },
            { key: 'user', value: 'user', icon: 'user' },
            { key: 'version', value: 'version', icon: 'version' },
            { key: 'view', value: 'view', icon: 'view' },
            { key: 'warning', value: 'warning', icon: 'warning' },
            { key: 'webhook', value: 'webhook', icon: 'webhook' },
            { key: 'zoom-to-fit', value: 'zoom-to-fit', icon: 'zoom-to-fit' },
            { key: 'dashboard', value: 'dashboard', icon: 'dashboard' }
        ]


    return (
        <div className={styles.input_wrapper}
            style={
                {
                    maxWidth: props.width || 'auto',
                    marginBottom: props.nomargin ? 0 : 18
                }
            }>
            {props.label && <label>{props.label}{props.required && '*'}</label>}
            {props.description &&
                <div className={styles.description}>{props.description}</div>}

            {/* <span className="dd-debug"> value: {JSON.stringify(value)}</span>
            <span className="dd-debug"> defVal: {JSON.stringify(defVal)}</span> */}

            {props.type != 'email' &&
                props.type != 'number' &&
                props.type != 'search' &&
                props.type != 'icon' &&
                props.type != 'textarea' &&
                props.type != 'password' &&
                props.type != 'radio' &&
                props.type != 'select' &&
                props.type != 'multiselect' &&
                props.type != 'date' &&
                props.type != 'slider' &&
                props.type != 'range' &&
                props.type != 'decimal' &&
                <div className={styles.field_wrapper}>
                    {props.icon && <div className={`${styles.input_icon_wrapper} icon icon-${props.icon}`} />}
                    <input
                        disabled={props.disabled}
                        className={`${styles.field} ${props.icon && styles.icon} ${warningMsg.type && styles[warningMsg.type]} ${props.disabled && styles.disabled}`}
                        type="text"
                        onKeyPress={e => { e.key == 'Enter' ? props.onPressEnter(value) : undefined }}
                        onChange={e => { handleChange(e.target.value); }}
                        value={value}
                        onBlur={checkValue}
                        placeholder={`${props.placeholder ? props.placeholder : ''}`}
                    />
                    {value && !props.disabled &&
                        <div className={`${styles.clear} icon icon-close`}
                            onClick={clearValue}></div>}
                </div>}

            {props.type == 'email' &&
                <div className={styles.field_wrapper}>
                    <input
                        autocomplete="off"
                        disabled={props.disabled}
                        className={`${styles.field} ${warningMsg.type && styles[warningMsg.type]} ${props.disabled && styles.disabled}`}
                        type="text"
                        onChange={e => { handleChange(String(e.target.value).toLowerCase()); e && checkEmailValue(e.target.value) }}
                        value={value}
                        onBlur={e => checkEmailValue(e.target.value)}
                        placeholder={`${props.placeholder ? props.placeholder : ''}`}
                    />
                    {value && !props.disabled &&
                        <div className={`${styles.clear} icon icon-close`}
                            onClick={clearValue}></div>}
                </div>}

            {props.type == 'search' &&
                <div className={styles.field_wrapper}>
                    <div className={`${styles.input_icon_wrapper} icon icon-search`} />
                    <input
                        disabled={props.disabled}
                        className={`${styles.field} ${styles.icon} ${warningMsg.type && styles[warningMsg.type]} ${props.disabled && styles.disabled}`}
                        type="text"
                        onKeyPress={e => {
                            if (e.key == 'Enter') {
                                props.onPressEnter(value);
                                setSearchValue(value);
                                setWarningMesg({})
                            }
                        }}
                        onChange={e => { handleChange(e.target.value); }}
                        value={value}
                        onBlur={checkSearchValue}
                        placeholder={`${props.placeholder ? props.placeholder : ''}`}
                    />
                    {value && !props.disabled &&
                        <div className={`${styles.clear} icon icon-close`}
                            onClick={() => { clearValue(); props.onClear() }}></div>}
                </div>}

            {props.type == 'decimal' &&
                <div className={styles.field_wrapper}>
                    <input
                        className={`${styles.field} ${props.disabled && styles.disabled} ${warningMsg.type && styles[warningMsg.type]}`}
                        disabled={props.disabled}
                        type="number"
                        onChange={e => { handleChangeDecimalNumber(e.target.value) }}
                        value={value}
                        onBlur={checkValue}
                        placeholder={`${props.placeholder ? props.placeholder : ''}`}
                    />
                </div>}

            {props.type == 'number' &&
                <div className={styles.field_wrapper}>
                        <input
                            className={`${styles.field} ${props.disabled && styles.disabled} ${warningMsg.type && styles[warningMsg.type]}`}
                            disabled={props.disabled}
                            type="number"
                            onChange={e => handleChangeNumber(e.target.value)}
                            value={value}
                            onBlur={checkValue}
                            placeholder={`${props.placeholder ? props.placeholder : ''}`}
                        />
                        
                        {/* {props.unitName && <div className={styles.unitName}>{props.unitName}</div>} */}
                    {!props.disabled && <React.Fragment>
                        <div className={`${styles.plus} icon icon-up`}
                            onClick={() => { if (value) { handleChangeNumber(parseInt(value) + 1) } else { handleChangeNumber(1); } }}></div>
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
                        placeholder={`${props.placeholder ? props.placeholder : ''}`}
                    />
                    {value &&
                        <div className={`${styles.clear} icon icon-close`}
                            onClick={clearValue}></div>}
                </div>}

            {props.type == 'password' &&
                <div className={styles.field_wrapper}>
                    <input
                        autocomplete="new-password"
                        disabled={props.disabled}
                        className={`${styles.field} ${props.disabled && styles.disabled} ${warningMsg.type && styles[warningMsg.type]}`}
                        type={pwdVisible}
                        onChange={e => handleChange(e.target.value)}
                        value={value}
                        onBlur={checkValue}
                        placeholder={`${props.placeholder ? props.placeholder : ''}`} />
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
                    disabled={props.disabled}
                    radioImages={props.radioImages}
                />
            }
            {props.type == 'select' &&
                <Select
                    warning={warningMsg.type}
                    placeholder={props.placeholder}
                    options={props.options}
                    icon={props.icon}
                    disabled={props.disabled}
                    defaultValue={defVal}
                    iconOptions={props.iconOptions}
                    onChange={e => setValue(e)}
                />
            }
            {props.type == 'multiselect' &&
                <Select
                    warning={warningMsg.type}
                    placeholder={props.placeholder}
                    options={props.options}
                    icon={props.icon}
                    disabled={props.disabled}
                    multi
                    defaultValue={defVal}
                    iconOptions={props.iconOptions}
                    onChange={e => setValue(e)}
                />
            }
            {props.type == 'icon' &&
                <Select
                    warning={warningMsg.type}
                    placeholder={props.placeholder || 'Choose icon'}
                    options={icon_options}
                    icon={props.icon}
                    disabled={props.disabled}
                    defaultValue={defVal}
                    iconOptions
                    onChange={e => setValue(e)}
                />
            }
            {props.type == 'date' &&
                <Datepicker
                    onChange={e => { setValue(e); props.onChange && props.onChange(e) }}
                    disabled={props.disabled}
                    placeholder={props.placeholder}
                    defaultValue={props.defaultValue}
                    dateFormat={props.dateFormat}
                    timeFormat={props.timeFormat}
                    onBlur={checkValue}
                    closeOnSelect={true}
                />
            }
            {props.type == 'slider' &&
                <Slider
                    defaultValue={props.defaultValue}
                    min={props.min}
                    max={props.max}
                    step={props.step}
                    onChange={e => setValue(e)}
                    unitName={props.unitName} />

            }
            {props.type == 'range' &&
                <Slider
                    defaultValue={props.defaultValue}
                    min={props.min}
                    max={props.max}
                    step={props.step}
                    onChange={e => setValue(e)}
                    unitName={props.unitName} />

            }

            {warningMsg &&
                <div className={`${styles.status} ${styles[warningMsg.type]}`}>{warningMsg.msg}</div>}

        </div>
    )
}