import React, { useState, useEffect, useRef } from 'react'
import styles from './input.module.css'
import Radio from '../radio/radio'
import Select from '../select/select'
import Datepicker from '../datepicker/datepicker'
import Colorpicker from '../colorpicker/colorpicker'
import Slider from '../slider/slider'
import Checkbox from '../checkbox/checkbox'
import Pedal from '../pedal/pedal'
import StructureField from '../structurefield/structurefield'
import { Markdown } from '../../article/mkd'
import OptionsHandler, { AdvancedOptionsHandler } from '../optionsHandler/optionsHandler'
import _ from 'lodash'
import { dict } from '../../locale'
import PropTypes from 'prop-types';
import InnerHTML from 'dangerously-set-html-content'
import SelectImages from '../selectImages/selectImages'
import { Tags } from '../../tags/Tags'
import { Tooltip } from 'react-tooltip'
import { IMaskInput } from 'react-imask';

export function InputGroup(props) {
    return (
        <div className={styles.input_group} style={{ width: props.width || 'auto' }}>
            {props.children}
        </div>
    )
}

export function InputRow(props) {
    return (
        <div className={`${styles.input_row} ${props.column ? styles.column : ""} FPS_INPUT_GROUP`} style={{ width: props.width || 'auto' }}>
            {props.children}
        </div>
    )
}

export const icon_options =
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
        { key: 'loveFill', value: 'loveFill', icon: 'loveFill' },
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
        { key: 'dashboard', value: 'dashboard', icon: 'dashboard' },
        { key: 'path', value: 'path', icon: 'path' },
        { key: 'bellMute', value: 'bellMute', icon: 'bellMute' },
        { key: 'phone', value: 'phone', icon: 'phone' },
        { key: 'tablet', value: 'tablet', icon: 'tablet' },
        { key: 'decimal', value: 'decimal', icon: 'decimal' },
        { key: 'slider', value: 'slider', icon: 'slider' },
        { key: 'cart', value: 'cart', icon: 'cart' },
        { key: 'range', value: 'range', icon: 'range' },
        { key: 'radio', value: 'radio', icon: 'radio' },
        { key: 'checkbox', value: 'checkbox', icon: 'checkbox' },
        { key: 'cube', value: 'cube', icon: 'cube' },
        { key: 'image', value: 'image', icon: 'image' },
        { key: 'map', value: 'map', icon: 'map' },
        { key: 'kanban', value: 'kanban', icon: 'kanban' },
        { key: 'discord', value: 'discord', icon: 'discord' },
        { key: 'facebook', value: 'facebook', icon: 'facebook' },
        { key: 'marketplace', value: 'marketplace', icon: 'marketplace' },
        { key: 'twitter', value: 'twitter', icon: 'twitter' },
        { key: 'ai', value: 'ai', icon: 'ai' },
        { key: 'money', value: 'money', icon: 'money' },
        { key: 'idea', value: 'idea', icon: 'idea' },
        { key: 'star', value: 'star', icon: 'star' },
        { key: 'starFill', value: 'starFill', icon: 'starFill' },
        { key: 'fuckYou', value: 'fuckYou', icon: 'fuckYou' },
        { key: 'docker', value: 'docker', icon: 'docker' },
        { key: 'directual', value: 'directual', icon: 'directual' },
        { key: 'arrowRightTop', value: 'arrowRightTop', icon: 'arrowRightTop' },
    ]

export default function Input(props) {
    const [value, setValue] = useState(props.defaultValue || props.value)
    const [pwdVisible, setPwdVisible] = useState('password')
    const [warningMsg, setWarningMesg] = useState(props.warning || {})
    const [defVal, setDefVal] = useState(props.defaultValue || props.value)
    const inputEl = useRef(null);
    const [lines, setLines] = useState(1)
    const [showColor, setShowColor] = useState(false)
    const lang = props.locale ? props.locale.length == 3 ? props.locale : 'ENG' : 'ENG'
    const pickerRef = useRef(null);

    const tooltipId = "tooltip_" + Math.floor(Math.random() * 1000000000)

    const checkValue = () => {
        // console.log('checking...');
        // ((!value || (value && value.length == 0)) && (value != 0) && props.required) ?
        //     setWarningMesg({ type: 'error', msg: 'This field is required' }) :
        //     !props.error && setWarningMesg({});
    }

    const checkJsonValue = (e, v) => {
        // console.log('checkJsonValue')
        // console.log(v)
        // console.log(e)
        let parseJSON = {}
        const val = v || value
        if (val) {
            try {
                parseJSON = JSON.parse(val)
                setValue(JSON.stringify(parseJSON, null, 3));
                e && setLines(countLines(e.target || e, JSON.stringify(parseJSON, null, 3)))
                setWarningMesg({ type: 'ok', msg: 'Valid JSON' })
                props.isValid && props.isValid(true)
            } catch {
                console.log('Error in parsing JSON');
                setWarningMesg({ type: 'error', msg: 'Invalid JSON' })
                props.isValid && props.isValid(false)
                e && setLines(val && typeof val == 'string' ? (val.match(/\n/g) || []).length + 1 : 1)
            }
        }
        !val && setWarningMesg({});
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
        } else { checkValue() }
    }, [props])

    useEffect(() => {
        warningMsg.type == 'error' ? props.validationHandler && props.validationHandler(props.sysName, false) : props.validationHandler && props.validationHandler(props.sysName, true)
    }, [warningMsg])

    useEffect(() => {
        if (JSON.stringify(props.defaultValue) != JSON.stringify(defVal) && props.type != 'json') {
            setValue(props.defaultValue); setDefVal(props.defaultValue);
            setLines(countLines(inputEl.current, props.defaultValue))
        }
        if (props.type == 'json' && inputEl.current) {
            checkJsonValue(inputEl.current, props.defaultValue)
        }
    }, [props.defaultValue])

    useEffect(() => {
        props.type == 'textarea' && setLines(countLines(inputEl.current, value))
    }, [inputEl])

    const checkEmailValue = (v) => {
        // (!v && props.required) ?
        //     setWarningMesg({ type: 'error', msg: 'This field is required' }) :
        //     setWarningMesg({});
        (v && !validateEmail(v)) &&
            setWarningMesg({ type: 'error', msg: 'Email format is wrong' })
    }

    const validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const clearValue = () => {
        submit('')
        setLines(1)
        props.required ?
            setWarningMesg({ type: 'error', msg: 'This field is required' }) :
            setWarningMesg({});
    }

    const handleChange = (e) => {
        if (props.restrictChars && Array.isArray(props.restrictChars)) {
            let isRestricted = false;
            e && e.split('').forEach(i => isRestricted = isRestricted || (props.restrictChars.indexOf(i) == -1 && true))
            if (isRestricted) {
                console.log('restricted character'); {
                    return null
                }
            }
        }
        submit(e)
        //props.required && setWarningMesg({})
    }

    const handleChangeDecimalNumber = (e) => {
        submit(e)
        //props.required && setWarningMesg({})
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

    function submit(val) {
        setValue(val)
        props.onChange && props.onChange(val);
        props.type == 'select' && props.required && value != defVal && checkValue();
        props.type == 'icon' && props.required && value != defVal && checkValue();
        props.type == 'multiselect' && props.required && value != defVal && checkValue();
    }

    useEffect(() => {
        if (props.highlightEmpty && !value) { setWarningMesg({ type: 'error', msg: 'This field is required' }) }
        else { inputEl.current == document.activeElement && !props.error && setWarningMesg({}); }
        if ((props.type == 'select' || props.type == 'multiselect' || props.type == 'dinamicSelect'
            || props.type == 'dinamicComplexSelect'
            || props.type == 'dinamicMultiSelect' || props.type == 'structurefield') &&
            props.highlightEmpty && value && !props.error) {
            setWarningMesg({});
        }
    }, [value])

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
        props.autoFocus && inputEl.current.focus();
    }, [])

    function countLines(textarea, text) {
        // console.log('counting lines...')
        // console.log(textarea)
        if (!textarea || !textarea.constructor || textarea.constructor.name != 'HTMLTextAreaElement') {
            console.log('not a textarea');
            return;
        }
        let _buffer;
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

        var result = Math.round(_buffer.scrollHeight / lh);
        if (result == 0) result = 1;
        // console.log(result)
        return result;
    }

    function getTextWidth(text, font) {
        // re-use canvas object for better performance
        const lines = (text || "").split("\n")
        const canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
        const context = canvas.getContext("2d");
        context.font = font;
        const metrics = lines.map(line => context.measureText(line).width)
        return _.max(metrics)
    }

    function getCssStyle(element, prop) {
        return window && typeof element == 'Element' ? window.getComputedStyle(element, null).getPropertyValue(prop) : null;
    }

    function getCanvasFont(el) {
        if (!el) { return '' }
        const fontWeight = getCssStyle(el, 'font-weight') || 'normal';
        const fontSize = getCssStyle(el, 'font-size') || '16px';
        const fontFamily = getCssStyle(el, 'font-family') || 'Times New Roman';
        return `${fontWeight} ${fontSize} ${fontFamily}`;
    }

    function calcTextareaWidth() {
        const min = props.minWidth || 0
        const max = props.maxWidth || 100000
        const textWidth = inputEl.current ? getTextWidth(value, getCanvasFont(inputEl.current)) + 67 : 0
        let resultWidth = min
        if (textWidth > min) { resultWidth = textWidth }
        if (textWidth > max) { resultWidth = max }
        return resultWidth
    }

    useOutsideAlerter(pickerRef);

    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target) && !inputEl.current.contains(event.target)) {
                    setShowColor(false)
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    const stringifyWithCustomTypes = (obj, tabs = 2) => {
        const indent = ' '.repeat(tabs);
        const innerIndent = ' '.repeat(tabs + 2); // Nested indentation with correct levels

        // Helper function to handle nested objects and arrays
        const processValue = (value, innerTabs) => {
            if (value instanceof RegExp) {
                return value.toString(); // Serialize RegExp
            } else if (value instanceof Date) {
                return `new Date('${value.toISOString()}')`; // Serialize Date
            } else if (typeof value === 'function' && value.name) {
                return value.name; // Serialize constructor names like Number
            } else if (Array.isArray(value)) {
                return `[${value.map(item => processValue(item, innerTabs)).join(', ')}]`; // Handle arrays
            } else if (typeof value === 'object' && value !== null) {
                return stringifyWithCustomTypes(value, innerTabs); // Handle nested objects
            } else if (typeof value === 'string') {
                return `'${value.replace(/'/g, "\\'")}'`; // Escape single quotes in strings
            } else {
                return JSON.stringify(value); // Default for other types (numbers, booleans)
            }
        };

        return `{\n` +
            Object.entries(obj).map(([key, value], index, array) => {
                const keyValue = `${innerIndent}${key}: ${processValue(value, tabs + 2)}`;
                return index === array.length - 1 ? keyValue : `${keyValue},`;
            }).join('\n') +
            `\n${indent}}`; // Properly align the closing brace
    };

    return (
        <div className={`${styles.input_wrapper} ${props.className}`}
            style={
                {
                    width: props.autoWidth ? calcTextareaWidth() : props.width || 'auto',
                    marginBottom: inputMargins.marginBottom,
                    marginTop: inputMargins.marginTop
                }
            }>
            {props.label && <label className={`${styles.input_label_tooltip} FPS_Input_label`}>
                {props.label}{props.required && '*'}{props.tooltip && <span
                    data-tooltip-html={props.tooltip}
                    data-tooltip-id={tooltipId} className={`icon icon-help small ${styles.tooltip}`} />}</label>}
            {props.description &&
                <div className={styles.description}>
                    {props.description && (typeof props.description == "string" ? <InnerHTML allowRerender={true} html={props.description} />
                        : props.description)}
                </div>}
            {(props.debug) && <div>
                {/* <div className="dd-debug">searchValue: {JSON.stringify(searchValue)}</div> */}
                <div className="dd-debug">value: {JSON.stringify(value)}</div>
                {props.imask && <div className="dd-debug">imask:<br /><pre>{JSON.stringify(props.imask, 0, 3)}</pre></div>}
                {/* <div className="dd-debug"> defVal: {JSON.stringify(defVal)}</div>
                <div className="dd-debug"> lines: {lines}</div>
                <div className="dd-debug"> countlLnes: {countLines(inputEl.current, value)}</div>
                <div className='dd-debug'>auto width: {calcTextareaWidth()}</div> */}
            </div>}
            <Tooltip id={tooltipId} />
            {props.type != 'email' &&
                props.type != 'checkboxGroup' &&
                props.type != 'number' &&
                props.type != 'search' &&
                props.type != 'icon' &&
                props.type != 'textarea' &&
                props.type != 'password' &&
                props.type != 'structurefield' &&
                props.type != 'radio' &&
                props.type != 'radioJson' &&
                props.type != 'pedal' &&
                props.type != 'select' &&
                props.type != 'tags' &&
                props.type != 'multiselect' &&
                props.type != 'dinamicSelect' &&
                props.type != 'dinamicComplexSelect' &&
                props.type != 'dinamicMultiSelect' &&
                props.type != 'date' &&
                props.type != 'slider' &&
                props.type != 'markdown' &&
                props.type != 'phone' &&
                props.type != 'file' &&
                props.type != 'range' &&
                props.type != 'decimal' &&
                props.type != 'json' &&
                props.type != 'selectImages' &&
                props.type != 'optionsHandler' &&
                props.type != 'masked' &&
                <div className={`${styles.field_wrapper} ${(props.addonAfter || props.addonBefore || props.preSelect || (props.type == 'color' || props.type == 'colour' || props.type == 'colorpicker')) && styles.hor}`}>
                    {props.addonBefore &&
                        <div className={styles.addonBefore}>{props.addonBefore}</div>}
                    {(props.type == 'color' || props.type == 'colour' || props.type == 'colorpicker') &&
                        <div className={styles.addonBefore} style={{ backgroundColor: value }}>&nbsp;</div>}
                    {props.preSelect &&
                        <div className={`${styles.addonBefore} ${styles.preSelect}`}>
                            <select value={props.preSelectDefaultValue} disabled={props.disabled} onChange={e => props.onChoosePreSelect && props.onChoosePreSelect(e.target.value)}>
                                {props.preSelectOptions.map(option => <option value={option.key} key={option.key}>{option.value}</option>)}
                            </select>
                        </div>}
                    <div className={styles.field_wrapper_additional}>
                        {props.icon && <div className={`${styles.input_icon_wrapper} icon icon-${props.icon}`} />}

                        {showColor && (props.type == 'color' || props.type == 'colour' || props.type == 'colorpicker') && <div ref={pickerRef}>
                            <Colorpicker
                                onChange={handleChange}
                                defaultValue={value}
                                sketch />
                        </div>}
                        <IMaskInput
                            mask={props.restrictChars ? /.*/ : undefined}
                            {...props.imask}
                            onAccept={handleChange}

                            prepare={(str) => {
                                if (props.restrictChars && Array.isArray(props.restrictChars)) {
                                    const filtered = str
                                        .split('')
                                        .filter(char => props.restrictChars.includes(char))
                                        .join('');
                                    return filtered;
                                }
                                return str;
                            }}
                            unmask={true}
                            disabled={props.disabled}
                            key={props.key}
                            inputRef={inputEl}
                            style={{
                                height: props.height || 48
                            }}
                            className=
                            {`${styles.field}
                            ${props.icon && styles.icon}
                            ${props.addonAfter && styles.addonAfterInput}
                            ${(props.addonBefore || props.preSelect || (props.type == 'color' || props.type == 'colour' || props.type == 'colorpicker')) && styles.addonBeforeInput}
                            ${props.code && styles.code}
                            ${warningMsg.type && styles[warningMsg.type]}
                            ${props.disabled && styles.disabled}`}
                            onClick={e => e.stopPropagation()}
                            type="text"
                            onFocus={e => setShowColor(true)}
                            onKeyPress={e => { e.key == 'Enter' ? props.onPressEnter(value) : undefined }}
                            onChange={e => { props.imask ? undefined : !props.copy ? handleChange(e.target.value) : undefined; }}
                            value={value || ''}
                            onBlur={e => {
                                props.onBlur ? props.onBlur(e.target.value) : checkValue(e)
                            }}
                            placeholder={`${props.placeholder ? props.placeholder : ''}`}
                        />
                        {value && !props.disabled && !props.copy &&
                            <div className={`${styles.clear} icon icon-close`}
                                onClick={() => { clearValue(); props.onClear() }}></div>}
                        {value && props.copy &&
                            <div className={`${styles.clear} icon icon-copy`}
                                onClick={value => copyValue(value)}></div>}
                    </div>
                    {props.addonAfter &&
                        <div className={styles.addonAfter}>{props.addonAfter}</div>}

                </div>}

            {props.type == 'masked' &&
                <div className={styles.field_wrapper}>
                    {props.icon && <div className={`${styles.input_icon_wrapper} icon icon-${props.icon}`} />}
                    <IMaskInput
                        {...props.imask}
                        onAccept={handleChange}
                        value={value}
                        inputRef={inputEl}
                        className={`${styles.field} ${props.icon ? styles.icon : ""} ${warningMsg.type && styles[warningMsg.type]} ${props.disabled && styles.disabled}`}
                        unmask={true}
                        placeholder={props.placeholder}
                    />
                    {value && !props.disabled && !props.copy &&
                        <div className={`${styles.clear} icon icon-close`}
                            onClick={clearValue}></div>}
                    {value && props.copy &&
                        <div className={`${styles.clear} icon icon-copy`}
                            onClick={value => copyValue(value)}></div>}
                </div>}

            {props.type == 'email' &&
                <div className={styles.field_wrapper}>
                    <div className={`${styles.input_icon_wrapper} icon icon-mail`} />
                    <IMaskInput
                        {...props.imask}
                        onAccept={handleChange}
                        unmask={true}
                        autoComplete={props.autoComplete || "off"}
                        inputRef={inputEl}
                        disabled={props.disabled}
                        className={`${styles.field} ${styles.icon} ${warningMsg.type && styles[warningMsg.type]} ${props.disabled && styles.disabled}`}
                        type="text"
                        style={{
                            height: props.height || 48
                        }}
                        onChange={e => { props.imask ? undefined : handleChange(String(e.target.value).toLowerCase()); e && checkEmailValue(e.target.value) }}
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
                            height: props.height || 48
                        }}
                        inputRef={inputEl}
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
                        {props.icon && <div className={`${styles.input_icon_wrapper} icon icon-${props.icon}`} />}
                        <IMaskInput
                            {...props.imask}
                            onAccept={handleChange}
                            unmask={true}
                            className={`${styles.field} ${props.icon && styles.icon} ${props.disabled && styles.disabled} ${warningMsg.type && styles[warningMsg.type]}`}
                            inputRef={inputEl}
                            disabled={props.disabled}
                            type={props.imask ? "text" : "number"}
                            style={{
                                height: props.height || 48
                            }}
                            onChange={e => { props.imask ? undefined : handleChangeDecimalNumber(e.target.value) }}
                            // value={value}
                            value={props.imask && value ? value.toString() : value}
                            onBlur={checkValue}
                            placeholder={`${props.placeholder ? props.placeholder : ''}`}
                        />
                        {value && !props.disabled ?
                            <div className={`${styles.clear} icon icon-close`}
                                onClick={clearValue}></div> : <div />}
                    </div>
                    {props.unitName ? <div className={styles.unitName}>{props.unitName}</div> : <div />}
                </div>}

            {props.type == 'number' &&
                <div className={`${props.unitName && styles.fieldUnitsWrapper}`}>
                    <div className={styles.field_wrapper}>
                        {props.icon && <div className={`${styles.input_icon_wrapper} icon icon-${props.icon}`} />}
                        <IMaskInput
                            {...props.imask}
                            onAccept={handleChange}
                            unmask={true}
                            className={`${styles.field} ${props.icon && styles.icon} ${props.disabled && styles.disabled} ${warningMsg.type && styles[warningMsg.type]}`}
                            disabled={props.disabled}
                            inputRef={inputEl}
                            type={props.imask ? "text" : "number"}
                            style={{
                                height: props.height || 48
                            }}
                            onChange={e => props.imask ? undefined : handleChangeNumber(e.target.value)}
                            value={props.imask && value ? value.toString() : value}
                            onBlur={checkValue}
                            placeholder={`${props.placeholder ? props.placeholder : ''}`}
                        />


                        {!props.disabled && !props.imask && <React.Fragment>
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
                        <IMaskInput
                            {...props.imask}
                            onAccept={handleChange}
                            unmask={true}
                            className={`${styles.field} ${styles.icon} ${props.disabled && styles.disabled} ${warningMsg.type && styles[warningMsg.type]}`}
                            disabled={props.disabled}
                            inputRef={inputEl}
                            type={props.imask ? "text" : "number"}
                            style={{
                                height: props.height || 48
                            }}
                            onChange={e => props.imask ? undefined : handleChange(e.target.value)}
                            value={value}
                            onBlur={checkValue}
                            placeholder={`${props.placeholder ? props.placeholder : _.get(dict[lang], 'numbersOnly') || 'numbers only'
                                }`
                            }
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

            {props.type == 'file' &&
                <div className={`${props.unitName && styles.fieldUnitsWrapper}`}>
                    <div className={styles.field_wrapper}>
                        <div className={`${styles.input_icon_wrapper} icon icon-clip`} />
                        <input
                            className={`${styles.field} ${styles.icon} ${props.disabled && styles.disabled} ${warningMsg.type && styles[warningMsg.type]}`}
                            disabled={props.disabled}
                            ref={inputEl}
                            style={{
                                height: props.height || 48
                            }}
                            onChange={e => handleChange(e.target.value)}
                            value={value}
                            onBlur={checkValue}
                            placeholder={`${props.placeholder ? props.placeholder : 'Enter file URL'}`}
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
                        rows={props.rows == 'auto' ? lines : (props.rows || 1)}
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
                        rows={props.rows == 'auto' ? lines : (props.rows || lines)}
                        onChange={e => { setLines(countLines(e.target)); handleChange(e.target.value) }}
                        value={value ? value : ""}
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
                        placeholder={`${props.placeholder ? props.placeholder : ''}`}
                        disabled={props.disabled}
                        edit={props.edit}
                        onChange={val => handleChange(val)}
                        //height={350}
                        value={value}
                        //example={props.example}
                        margin={{ top: 0, bottom: 0 }}
                    />
                </div>}

            {props.type == 'tags' &&
                <div className={styles.field_wrapper}>
                    <Tags
                        {...props}
                        selectedTags={defVal}
                        onChange={e => e ? (e.target ? submit(e.target.value) : submit(e)) : submit(null)}
                        dict={dict[lang]}
                    />
                </div>}

            {props.type == 'pedal' &&
                <div className={styles.field_wrapper}>
                    <Pedal
                        {...props}
                        dict={dict[lang]}
                    />
                </div>}


            {props.type == 'password' &&
                <div className={styles.field_wrapper}>
                    <div className={`${styles.input_icon_wrapper} icon icon-lock`} />
                    <input
                        autoFocus={props.autoFocus}
                        inputRef={inputEl}
                        autoComplete="new-password"
                        disabled={props.disabled}
                        style={{
                            height: props.height || 48
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
                    horizontal={props.horizontal}
                    options={props.options}
                    disabled={props.disabled}
                    dict={dict[lang]}
                    radioImagesWidth={props.radioImagesWidth}
                    placeholder={props.placeholder}
                    radioImages={props.radioImages}
                    small={props.small}
                    customOption={props.customOption}
                    customOptionLabel={props.customOptionLabel}
                    customOptionType={props.customOptionType}
                    customOptionPlaceholder={props.customOptionPlaceholder}
                />
            }
            {props.type == 'selectImages' &&
                <SelectImages
                    {...props}
                    defaultValue={defVal}
                    dict={dict[lang]}
                    onChange={e => { e ? (e.target ? submit({ value: e.target.value }) : submit(e)) : submit(null) }}
                />
            }
            {props.type == 'radioJson' &&
                <Radio
                    onChange={e => { console.log(e); e ? (e.target ? submit({ value: e.target.value }) : submit(e)) : submit(null) }}
                    defaultValue={(defVal && defVal.value) || defVal}
                    options={props.options}
                    dict={dict[lang]}
                    horizontal={props.horizontal}
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
                    dict={dict[lang]}
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
                    dict={dict[lang]}
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
            {props.type == 'dinamicSelect' &&
                <Select
                    warning={warningMsg.type}
                    placeholder={props.placeholder}
                    //options={props.options}
                    callParams={props.callParams}
                    onLoad={props.onLoad}
                    refresh={props.refresh}
                    dinamicSelect
                    icon={props.icon}
                    dict={dict[lang]}
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
            {props.type == 'dinamicComplexSelect' &&
                <Select
                    warning={warningMsg.type}
                    placeholder={props.placeholder}
                    //options={props.options}
                    callParams={props.callParams}
                    onLoad={props.onLoad}
                    refresh={props.refresh}
                    complexSelect
                    dinamicSelect
                    icon={props.icon}
                    dict={dict[lang]}
                    code={props.code}
                    height={props.height}
                    bottomSelect={props.bottomSelect}
                    disabled={props.disabled}
                    //displayKey={props.displayKey}
                    displayKeyShort={props.displayKeyShort}
                    defaultValue={defVal}
                    iconOptions={props.iconOptions}
                    onChange={e => submit(e)}
                    subSelect={props.subSelect}
                    onChangeSubselect={props.onChangeSubselect}
                />
            }
            {props.type == 'dinamicMultiSelect' &&
                <Select
                    warning={warningMsg.type}
                    placeholder={props.placeholder}
                    //options={props.options}
                    refresh={props.refresh}
                    callParams={props.callParams}
                    onLoad={props.onLoad}
                    dinamicSelect
                    multi
                    icon={props.icon}
                    dict={dict[lang]}
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
            {props.type == 'icon' &&
                <Select
                    warning={warningMsg.type}
                    placeholder={props.placeholder || 'Choose icon'}
                    options={(props.options && props.options.length > 0 && props.options) || icon_options}
                    bottomSelect={props.bottomSelect}
                    dict={dict[lang]}
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
                <React.Fragment>
                    <Datepicker
                        onChange={e => { setValue(e); props.onChange && props.onChange(e) }}
                        disabled={props.disabled}
                        placeholder={props.placeholder}
                        timeConstraints={props.timeConstraints}
                        defaultValue={defVal}
                        validWeekDays={props.validWeekDays}
                        utc={props.utc}
                        locale={props.locale}
                        allowPast={props.allowPast}
                        correctedHeight={props.correctedHeight}
                        dateFormat={props.dateFormat}
                        timeFormat={props.timeFormat}
                    //onBlur={checkValue}
                    />
                </React.Fragment>
            }
            {props.type == 'structurefield' &&
                <StructureField
                    defaultValue={defVal}
                    noHint={props.noHint}
                    FPSForm2={props.FPSForm2}
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
                <div style={props.horizontal ? { display: 'flex', flexWrap: 'wrap', gap: "6px 18px" } : {}}>
                    {props.clearOption && value && JSON.stringify(value) !== "{}" &&
                        <a className={styles.checkbox_clearOption} onClick={() => submit({})}>Clear</a>}
                    {props.options && props.options.map(option => {
                        return (
                            <div className={`${styles.checkbox_wrapper} ${props.horizontal ? styles.hor : ""}`} style={props.horWidth ? { width: props.horWidth } : {}}>
                                <Checkbox
                                    disabled={props.disabled}
                                    debug
                                    label={option.label}
                                    nowrap={props.nowrap}
                                    defaultValue={_.get(value, `${option.value}`)}
                                    //defaultValue={_.get(props.defaultValue, `[${option.value}]`)}
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

                </div>
            }

            {props.tip &&
                <div className={styles.status}>{props.tip}</div>}

            {warningMsg.msg &&
                <div className={`${styles.status} ${styles[warningMsg.type]}`}>{warningMsg.msg}</div>}

        </div>
    )
}

Input.propTypes = {
    type: PropTypes.string,
    options: PropTypes.array,
    onClick: PropTypes.func,
    displayKey: PropTypes.bool,
    icon: PropTypes.string,
    width: PropTypes.number
};

Input.defaultProps = {
    type: 'string',
    options: [],
    displayKey: false,
    onClick: undefined,
    icon: null,
    width: undefined
};