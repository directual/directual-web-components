import React, { useState, useEffect, useRef } from 'react'
import styles from './input.module.css'
import Radio from '../radio/radio'
import Select from '../select/select'
import Datepicker from '../datepicker/datepicker'
import Slider from '../slider/slider'
import Checkbox from '../checkbox/checkbox'
import StructureField from '../structurefield/structurefield'
import { Markdown } from '../../article/mkd'
import OptionsHandler, { AdvancedOptionsHandler } from '../optionsHandler/optionsHandler'


export function InputGroup(props) {
    return (
        <div className={styles.input_group} style={{ maxWidth: props.width || 'auto' }}>
            {props.children}
        </div>
    )
}

export default function Input(props) {
    const [value, setValue] = useState(props.defaultValue || props.value)
    const [pwdVisible, setPwdVisible] = useState('password')
    const [warningMsg, setWarningMesg] = useState(props.warning || {})
    const [defVal, setDefVal] = useState(props.defaultValue || props.value)
    const inputEl = useRef(null);
    const [lines, setLines] = useState(1)

    const checkValue = () => {
        // console.log('checking...');
        ((!value || (value && value.length == 0)) && (value != 0) && props.required) ?
            setWarningMesg({ type: 'error', msg: 'This field is required' }) :
            !props.error && setWarningMesg({});
    }

    const checkJsonValue = e => {
        console.log('checking JSON...');
        let parseJSON = {}
        if (value) {
            try {
                parseJSON = JSON.parse(value)
                setValue(JSON.stringify(parseJSON, 0, 3));
                e && setLines(countLines(e.target || e, JSON.stringify(parseJSON, 0, 3)))
                setWarningMesg({ type: 'ok', msg: 'Valid JSON' })
                props.isValid && props.isValid(true)
            } catch {
                console.log('Error in parsing JSON');
                setWarningMesg({ type: 'error', msg: 'Invalid JSON' })
                props.isValid && props.isValid(false)
                e && setLines(value && typeof value == 'string' ? (value.match(/\n/g) || []).length : 1)
            }
        }
        !value && setWarningMesg({});
    }

    const copyValue = value => {
        inputEl.current.select()
        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Copying text command was ' + msg);
        } catch (err) {
            console.log('Oops, unable to copy');
        }
    }

    const [searchValue, setSearchValue] = useState()
    const checkSearchValue = () => {
        (value != searchValue) ? setWarningMesg({ type: 'warning', msg: 'Press Enter to search...' }) : setWarningMesg({});
    }

    useEffect(() => {
        if (props.data && props.data.errors && props.data.errors.length > 0) {
            setWarningMesg({ type: 'error' })
        }
        if (props.error) {
            setWarningMesg({ type: 'error', msg: props.error })
        }
    }, [props])

    useEffect(() => {
        warningMsg.type == 'error' ? props.validationHandler && props.validationHandler(props.sysName, false) : props.validationHandler && props.validationHandler(props.sysName, true)
    }, [warningMsg])

    useEffect(() => {
        if (JSON.stringify(props.defaultValue) != JSON.stringify(defVal)) { setValue(props.defaultValue); setDefVal(props.defaultValue) }
        if (props.rows == 'auto' && inputEl.current) { checkJsonValue(inputEl.current) }
    }, [props.defaultValue])

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
        submit('')
        props.required ?
            setWarningMesg({ type: 'error', msg: 'This field is required' }) :
            setWarningMesg({});
    }

    const handleChange = (e) => {
        if (props.restrictChars && Array.isArray(props.restrictChars)) {
            let isRestricted = false;
            e && e.split('').forEach(i => isRestricted = isRestricted || (props.restrictChars.indexOf(i) == -1 && true))
            if (isRestricted) { console.log('restricted character'); return null }
        }
        submit(e)
        props.required && setWarningMesg({})
    }

    const handleChangeDecimalNumber = (e) => {
        submit(e)
        props.required && setWarningMesg({})
    }

    useEffect(() => {
        warningMsg.type == 'error' ? (props.isValid && props.isValid(false)) : (props.isValid && props.isValid(true))
    }, [warningMsg])


    const handleChangeNumber = (e) => {
        if (isNaN(parseInt(e))) {
            submit(null);
        } else {
            props.positive && parseInt(e) < 0 && submit(0);
            props.positive && parseInt(e) >= 0 && submit(parseInt(e));
            !props.positive && submit(parseInt(e));
        }
        checkValue()
    }

    const submit = val => {
        setValue(val)
        props.onChange && props.onChange(val);
        props.type == 'select' && props.required && value != defVal && checkValue();
        props.type == 'icon' && props.required && value != defVal && checkValue();
        props.type == 'multiselect' && props.required && value != defVal && checkValue();
    }

    useEffect(() => {
        if (props.highlightEmpty && !value) { setWarningMesg({ type: 'error', msg: 'This field is required' }) }
        else { inputEl.current == document.activeElement && !props.error && setWarningMesg({}); }
        if ((props.type == 'select' || props.type == 'multiselect' || props.type == 'structurefield') &&
            props.highlightEmpty && value && !props.error) {
            setWarningMesg({});
        }
    }, [value])

    const icon_options =
        [
            { key: 'babai', value: 'babai', icon: 'babai' },
            { key: 'academy', value: 'academy', icon: 'academy' },
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
            { key: 'filterClear', value: 'filterClear', icon: 'filterClear' },
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
            //{ key: 'zoom-to-fit', value: 'zoom-to-fit', icon: 'zoom-to-fit' },
            { key: 'dashboard', value: 'dashboard', icon: 'dashboard' },
            { key: 'path', value: 'path', icon: 'path' },
            { key: 'bellMute', value: 'bellMute', icon: 'bellMute' },
            { key: 'phone', value: 'phone', icon: 'phone' },
            { key: 'decimal', value: 'decimal', icon: 'decimal' },
            { key: 'slider', value: 'slider', icon: 'slider' },
            { key: 'cart', value: 'cart', icon: 'cart' },
            { key: 'range', value: 'range', icon: 'range' },
            { key: 'radio', value: 'radio', icon: 'radio' },
            { key: 'checkbox', value: 'checkbox', icon: 'checkbox' },
        ]

    let inputMargins = {
        marginTop: 0,
        marginBottom: 0
    }
    if (props.equalMargin) {
        inputMargins.marginBottom = props.equalMargin || 6;
        inputMargins.marginTop = props.equalMargin || 6;
    }
    if (props.nomargin) {
        inputMargins.marginBottom = 0;
        inputMargins.marginTop = 0;
    }
    if (!props.nomargin && !props.equalMargin) {
        inputMargins.marginBottom = 22;
        inputMargins.marginTop = 0;
    }


    useEffect(() => {
        // console.log(props.autoFocus)
        props.autoFocus && inputEl.current.focus();
    }, [])

    const checkLineBreaks = line => {
        if (!line) return 1
        return typeof line == 'string' ? (line.match(/\n/g) || []).length + 1 : 1
    }

    let _buffer;
    function countLines(textarea, text) {
        if (_buffer == null) {
            _buffer = document.createElement('textarea');
            _buffer.style.border = 'none';
            _buffer.style.height = '0';
            _buffer.style.overflow = 'hidden';
            _buffer.style.padding = '0';
            _buffer.style.position = 'absolute';
            _buffer.style.left = '0';
            _buffer.style.top = '0';
            _buffer.style.zIndex = '-1';
            document.body.appendChild(_buffer);
        }

        var cs = window.getComputedStyle(textarea);
        var pl = parseInt(cs.paddingLeft);
        var pr = parseInt(cs.paddingRight);
        var lh = parseInt(cs.lineHeight);

        // [cs.lineHeight] may return 'normal', which means line height = font size.
        if (isNaN(lh)) lh = parseInt(cs.fontSize) + 3;

        // Copy content width.
        _buffer.style.width = (textarea.clientWidth - pl - pr) + 'px';

        // Copy text properties.
        _buffer.style.font = cs.font;
        _buffer.style.letterSpacing = cs.letterSpacing;
        _buffer.style.whiteSpace = cs.whiteSpace;
        _buffer.style.wordBreak = cs.wordBreak;
        _buffer.style.wordSpacing = cs.wordSpacing;
        _buffer.style.wordWrap = cs.wordWrap;

        // Copy value.
        _buffer.value = text || textarea.value;
        console.log(_buffer.scrollHeight / lh)

        var result = Math.round(_buffer.scrollHeight / lh);
        if (result == 0) result = 1;
        return result;
    }

    return (
        <div className={`${styles.input_wrapper} ${props.className}`}
            style={
                {
                    maxWidth: props.width || 'auto',
                    marginBottom: inputMargins.marginBottom,
                    marginTop: inputMargins.marginTop
                }
            }>
            {props.label && <label>{props.label}{props.required && '*'}</label>}
            {props.description &&
                <div className={styles.description}>{props.description}</div>}
            {props.debug && <div>
                <div className="dd-debug">searchValue: {JSON.stringify(searchValue)}</div>
                <div className="dd-debug">value: {JSON.stringify(value)}</div>
                <div className="dd-debug"> defVal: {JSON.stringify(defVal)}</div>
            </div>}

            {props.type != 'email' &&
                props.type != 'checkboxGroup' &&
                props.type != 'number' &&
                props.type != 'search' &&
                props.type != 'icon' &&
                props.type != 'textarea' &&
                props.type != 'password' &&
                props.type != 'structurefield' &&
                props.type != 'radio' &&
                props.type != 'select' &&
                props.type != 'multiselect' &&
                props.type != 'date' &&
                props.type != 'slider' &&
                props.type != 'markdown' &&
                props.type != 'phone' &&
                props.type != 'range' &&
                props.type != 'decimal' &&
                props.type != 'json' &&
                props.type != 'optionsHandler' &&
                <div className={`${styles.field_wrapper} ${(props.addonAfter || props.addonBefore) && styles.hor}`}>
                    {props.addonBefore &&
                        <div className={styles.addonBefore}>{props.addonBefore}</div>}
                    <div className={styles.field_wrapper_additional}>
                        {props.icon && <div className={`${styles.input_icon_wrapper} icon icon-${props.icon}`} />}
                        <input
                            disabled={props.disabled}
                            key={props.key}
                            ref={inputEl}
                            style={{
                                height: props.height || 44
                            }}
                            className=
                            {`${styles.field} 
                            ${props.icon && styles.icon}
                            ${props.addonAfter && styles.addonAfterInput}
                            ${props.addonBefore && styles.addonBeforeInput}
                            ${props.code && styles.code} 
                            ${warningMsg.type && styles[warningMsg.type]}
                            ${props.disabled && styles.disabled}`}
                            type="text"
                            onKeyPress={e => { e.key == 'Enter' ? props.onPressEnter(value) : undefined }}
                            onChange={e => { !props.copy ? handleChange(e.target.value) : undefined; }}
                            value={value || ''}
                            onBlur={e => props.onBlur ? props.onBlur(e.target.value) : checkValue(e)}
                            placeholder={`${props.placeholder ? props.placeholder : ''}`}
                        />
                        {value && !props.disabled && !props.copy &&
                            <div className={`${styles.clear} icon icon-close`}
                                onClick={clearValue}></div>}
                        {value && props.copy &&
                            <div className={`${styles.clear} icon icon-copy`}
                                onClick={value => copyValue(value)}></div>}
                    </div>
                    {props.addonAfter &&
                        <div className={styles.addonAfter}>{props.addonAfter}</div>}

                </div>}

            {props.type == 'email' &&
                <div className={styles.field_wrapper}>
                    <div className={`${styles.input_icon_wrapper} icon icon-mail`} />
                    <input
                        autocomplete="off"
                        ref={inputEl}
                        disabled={props.disabled}
                        className={`${styles.field} ${styles.icon} ${warningMsg.type && styles[warningMsg.type]} ${props.disabled && styles.disabled}`}
                        type="text"
                        style={{
                            height: props.height || 44
                        }}
                        onChange={e => { handleChange(String(e.target.value).toLowerCase()); e && checkEmailValue(e.target.value) }}
                        value={value}
                        onBlur={e => checkEmailValue(e.target.value)}
                        placeholder={`${props.placeholder ? props.placeholder : 'your@email.com'}`}
                    />
                    {value && !props.disabled && !props.copy &&
                        <div className={`${styles.clear} icon icon-close`}
                            onClick={clearValue}></div>}
                    {value && props.copy &&
                        <div className={`${styles.clear} icon icon-copy`}
                            onClick={value => copyValue(value)}></div>}
                </div>}

            {props.type == 'search' &&
                <div className={styles.field_wrapper}>
                    <div className={`${styles.input_icon_wrapper} icon icon-search`} />
                    <input
                        disabled={props.disabled}
                        style={{
                            height: props.height || 44
                        }}
                        ref={inputEl}
                        className={`
                        ${styles.field} 
                        ${styles.icon} 
                        ${props.inputClassName}
                        ${warningMsg.type && styles[warningMsg.type]}
                        ${props.disabled && styles.disabled}`}
                        type="text"
                        onKeyPress={e => {
                            if (e.key == 'Enter') {
                                setSearchValue(value);
                                setWarningMesg({})
                                props.onPressEnter(value);
                            }
                        }}
                        onChange={e => { handleChange(e.target.value); }}
                        value={value}
                        onBlur={props.searchOnEnter ? checkSearchValue : undefined}
                        placeholder={`${props.placeholder ? props.placeholder : ''}`}
                    />
                    {value && !props.disabled &&
                        <div className={`${styles.clear} icon icon-close`}
                            onClick={() => { clearValue(); props.onClear() }}></div>}
                </div>}

            {props.type == 'decimal' &&
                <div className={`${props.unitName && styles.fieldUnitsWrapper}`}>
                    <div className={styles.field_wrapper}>
                        <input
                            className={`${styles.field} ${props.icon && styles.icon} ${props.disabled && styles.disabled} ${warningMsg.type && styles[warningMsg.type]}`}
                            ref={inputEl}
                            disabled={props.disabled}
                            type="number"
                            style={{
                                height: props.height || 44
                            }}
                            onChange={e => { handleChangeDecimalNumber(e.target.value) }}
                            value={value}
                            onBlur={checkValue}
                            placeholder={`${props.placeholder ? props.placeholder : ''}`}
                        />
                        {value && !props.disabled &&
                            <div className={`${styles.clear} icon icon-close`}
                                onClick={clearValue}></div>}
                    </div>
                    {props.unitName && <div className={styles.unitName}>{props.unitName}</div>}
                </div>}

            {props.type == 'number' &&
                <div className={`${props.unitName && styles.fieldUnitsWrapper}`}>
                    <div className={styles.field_wrapper}>
                        <input
                            className={`${styles.field} ${props.icon && styles.icon} ${props.disabled && styles.disabled} ${warningMsg.type && styles[warningMsg.type]}`}
                            disabled={props.disabled}
                            ref={inputEl}
                            type="number"
                            style={{
                                height: props.height || 44
                            }}
                            onChange={e => handleChangeNumber(e.target.value)}
                            value={value}
                            onBlur={checkValue}
                            placeholder={`${props.placeholder ? props.placeholder : ''}`}
                        />


                        {!props.disabled && <React.Fragment>
                            <div className={`${styles.plus} icon icon-up`}
                                onClick={() => { if (value) { handleChangeNumber(parseInt(value) + 1) } else { handleChangeNumber(1); } }}></div>
                            {props.positive && value > 0 && <div className={`${styles.minus} icon icon-down`}
                                onClick={() => handleChangeNumber(parseInt(value) - 1)}></div>}
                            {!props.positive && <div className={`${styles.minus} icon icon-down`}
                                onClick={() => handleChangeNumber(parseInt(value) - 1)}></div>}</React.Fragment>}
                    </div>
                    {props.unitName && <div className={styles.unitName}>{props.unitName}</div>}
                </div>
            }

            {props.type == 'phone' &&
                <div className={`${props.unitName && styles.fieldUnitsWrapper}`}>
                    <div className={styles.field_wrapper}>
                        <div className={`${styles.input_icon_wrapper} icon icon-phone`} />
                        <input
                            className={`${styles.field} ${styles.icon} ${props.disabled && styles.disabled} ${warningMsg.type && styles[warningMsg.type]}`}
                            disabled={props.disabled}
                            ref={inputEl}
                            type="number"
                            style={{
                                height: props.height || 44
                            }}
                            onChange={e => handleChange(e.target.value)}
                            value={value}
                            onBlur={checkValue}
                            placeholder={`${props.placeholder ? props.placeholder : 'numbers only'}`}
                        />
                        {value && !props.disabled && !props.copy &&
                            <div className={`${styles.clear} icon icon-close`}
                                onClick={clearValue}></div>}
                        {value && props.copy &&
                            <div className={`${styles.clear} icon icon-copy`}
                                onClick={value => copyValue(value)}></div>}
                    </div>
                </div>
            }

            {props.type == 'json' &&
                <div className={styles.field_wrapper}>
                    <textarea
                        autoFocus={props.autoFocus}
                        ref={inputEl}
                        disabled={props.disabled}
                        className={`
                        ${styles.field} 
                        ${props.disabled && styles.disabled} 
                        ${styles.code} 
                        ${warningMsg.type && styles[warningMsg.type]}`}
                        type="text"
                        rows={props.rows == 'auto' ? lines : props.rows || 1}
                        onChange={e => {
                            setLines(countLines(e.target));
                            handleChange(e.target.value)
                        }}
                        value={value}
                        onBlur={e => checkJsonValue(e)}
                        placeholder={`${props.placeholder ? props.placeholder : ''}`}
                    />
                    {value && !props.copy && !props.disabled &&
                        <div className={`${styles.clear} icon icon-close`}
                            onClick={clearValue}></div>}
                    {value && props.copy &&
                        <div className={`${styles.clear} icon icon-copy`}
                            onClick={value => copyValue(value)}></div>}
                </div>}

            {props.type == 'textarea' &&
                <div className={styles.field_wrapper}>
                    <textarea
                        autoFocus={props.autoFocus}
                        ref={inputEl}
                        disabled={props.disabled}
                        className={`${styles.field} ${props.disabled && styles.disabled} ${props.code && styles.code} ${warningMsg.type && styles[warningMsg.type]}`}
                        type="text"
                        rows={props.rows == 'auto' ? lines : props.rows || 1}
                        onChange={e => { setLines(countLines(e.target)); handleChange(e.target.value) }}
                        value={value}
                        onBlur={checkValue}
                        placeholder={`${props.placeholder ? props.placeholder : ''}`}
                    />
                    {value && !props.copy && !props.disabled &&
                        <div className={`${styles.clear} icon icon-close`}
                            onClick={clearValue}></div>}
                    {value && props.copy &&
                        <div className={`${styles.clear} icon icon-copy`}
                            onClick={value => copyValue(value)}></div>}
                </div>}

            {props.type == 'markdown' &&
                <div className={styles.field_wrapper}>
                    <Markdown
                        edit
                        onChange={val => handleChange(val)}
                        height={350}
                        value={value}
                    //margin={{top:0,bottom:18}}
                    />
                </div>}

            {props.type == 'password' &&
                <div className={styles.field_wrapper}>
                    <div className={`${styles.input_icon_wrapper} icon icon-lock`} />
                    <input
                        autoFocus={props.autoFocus}
                        ref={inputEl}
                        autocomplete="new-password"
                        disabled={props.disabled}
                        style={{
                            height: props.height || 44
                        }}
                        className={`${styles.field} ${styles.icon} ${props.disabled && styles.disabled} ${warningMsg.type && styles[warningMsg.type]}`}
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
                    onChange={e => e ? (e.target ? submit(e.target.value) : submit(e)) : submit(null)}
                    defaultValue={defVal}
                    options={props.options}
                    disabled={props.disabled}
                    placeholder={props.placeholder}
                    radioImages={props.radioImages}
                    customOption={props.customOption}
                    customOptionLabel={props.customOptionLabel}
                    customOptionType={props.customOptionType}
                    customOptionPlaceholder={props.customOptionPlaceholder}
                />
            }
            {props.type == 'select' &&
                <Select
                    warning={warningMsg.type}
                    placeholder={props.placeholder}
                    options={props.options}
                    icon={props.icon}
                    code={props.code}
                    height={props.height}
                    bottomSelect={props.bottomSelect}
                    disabled={props.disabled}
                    displayKey={props.displayKey}
                    displayKeyShort={props.displayKeyShort}
                    defaultValue={defVal}
                    iconOptions={props.iconOptions}
                    onChange={e => submit(e)}
                    subSelect={props.subSelect}
                    onChangeSubselect={props.onChangeSubselect}
                />
            }
            {props.type == 'multiselect' &&
                <Select
                    warning={warningMsg.type}
                    placeholder={props.placeholder}
                    options={props.options}
                    bottomSelect={props.bottomSelect}
                    icon={props.icon}
                    height={props.height}
                    displayKeyShort={props.displayKeyShort}
                    displayKey={props.displayKey}
                    disabled={props.disabled}
                    multi
                    defaultValue={defVal}
                    iconOptions={props.iconOptions}
                    onChange={e => submit(e)}
                />
            }
            {props.type == 'icon' &&
                <Select
                    warning={warningMsg.type}
                    placeholder={props.placeholder || 'Choose icon'}
                    options={icon_options}
                    bottomSelect={props.bottomSelect}
                    height={props.height}
                    icon={props.icon}
                    displayKey={props.displayKey}
                    disabled={props.disabled}
                    defaultValue={defVal}
                    iconOptions
                    onChange={e => submit(e)}
                />
            }
            {props.type == 'date' &&
                <Datepicker
                    onChange={e => { setValue(e); props.onChange && props.onChange(e) }}
                    disabled={props.disabled}
                    placeholder={props.placeholder}
                    defaultValue={defVal}
                    utc={props.utc}
                    correctedHeight={props.correctedHeight}
                    dateFormat={props.dateFormat}
                    timeFormat={props.timeFormat}
                    //onBlur={checkValue}
                    closeOnSelect={true}
                />
            }
            {props.type == 'structurefield' &&
                <StructureField
                    defaultValue={defVal}
                    fixHeight={props.fixHeight}
                    hideSysFields={props.hideSysFields}
                    hideId={props.hideId}
                    warning={warningMsg.type}
                    disabled={props.disabled}
                    noPropagation={props.noPropagation}
                    structSysName={props.structSysName}
                    showGlobalVars={props.showGlobalVars}
                    showContextVars={props.showContextVars}
                    //onChooseLinkStructSysName={props.onChooseLinkStructSysName}
                    //onChooseType={props.onChooseType}
                    fields={props.fields}
                    filterFields={props.filterFields}
                    filterLinkFields={props.filterLinkFields}
                    filterPlaceholder={props.filterPlaceholder || 'Type to filter fields'}
                    icon={props.icon}
                    placeholder={props.placeholder || 'Choose object field'}
                    onChange={e => submit(e)}
                    onChangeExtended={props.onChangeExtended}
                />
            }
            {props.type == 'slider' &&
                <Slider
                    defaultValue={defVal}
                    min={props.min}
                    max={props.max}
                    disabled={props.disabled}
                    step={props.step}
                    onChange={e => { submit(e) }}
                    unitName={props.unitName} />
            }
            {props.type == 'optionsHandler' &&
                <OptionsHandler
                    code={props.code}
                    disabled={props.disabled}
                    defaultValue={defVal}
                    objectStructure={props.objectStructure}
                    addButtonText={props.addButtonText || 'More'}
                    onChange={e => { submit(e) }}
                />
            }
            {props.type == 'range' &&
                <Slider
                    defaultValue={defVal}
                    min={props.min}
                    disabled={props.disabled}
                    max={props.max}
                    step={props.step}
                    onChange={e => { submit(e) }}
                    unitName={props.unitName} />

            }
            {props.type == 'checkboxGroup' &&
                <React.Fragment>
                    {props.options && props.options.map(option => {
                        return (
                            <div className={styles.checkbox_wrapper}>
                                <Checkbox
                                    disabled={props.disabled}
                                    label={option.label}
                                    defaultValue={typeof props.defaultValue == 'object' && props.defaultValue[option.value]}
                                    onChange={val => {
                                        const saveValue = { ...value }
                                        if (val) { saveValue[option.value] = val }
                                        else { delete saveValue[option.value] }
                                        submit(saveValue)
                                    }}
                                />
                            </div>
                        )
                    })}
                    {props.customOption &&
                        <div className={styles.checkbox_wrapper}>
                            <Checkbox
                                customOption
                                disabled={props.disabled}
                                label={props.customOptionLabel}
                                defaultValue={(typeof props.defaultValue == 'object' && props.defaultValue.customOption) && true}
                                customOptionType={props.customOptionType}
                                customOptionDefaultValue={typeof props.defaultValue == 'object' && props.defaultValue.customOption}
                                onChange={(val, customVal) => {
                                    const saveValue = { ...value }
                                    if (val) { saveValue.customOption = customVal }
                                    else { delete saveValue.customOption }
                                    // console.log(val)
                                    // console.log(customVal)
                                    submit(saveValue)
                                }}
                                customOptionPlaceholder={props.customOptionPlaceholder}
                            />
                        </div>
                    }

                </React.Fragment>
            }

            {props.tip &&
                <div className={styles.status}>{props.tip}</div>}

            {warningMsg.msg &&
                <div className={`${styles.status} ${styles[warningMsg.type]}`}>{warningMsg.msg}</div>}

        </div>
    )
}