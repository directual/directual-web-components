import React, { useState, useEffect, useRef, useCallback } from 'react'
import styles from './input.module.css'

export default function JsonInput({
    defaultValue,
    onChange,
    disabled,
    rows,
    placeholder,
    autoFocus,
    isValid,
    copy,
    warning: externalWarning,
}) {
    const [value, setValue] = useState(formatIfValid(defaultValue) || defaultValue || '')
    const [warningMsg, setWarningMsg] = useState({})
    const textareaRef = useRef(null)
    const isTyping = useRef(false)
    const isFocused = useRef(false)
    const prevDefaultValue = useRef(defaultValue)

    // height: auto !important в CSS перебивает inline height, поэтому используем min-height
    const adjustHeight = useCallback(() => {
        const el = textareaRef.current
        if (!el || rows !== 'auto') return
        el.style.minHeight = '0'
        el.style.minHeight = el.scrollHeight + 'px'
    }, [rows])

    useEffect(() => {
        adjustHeight()
    }, [value, adjustHeight])

    // --- Синхронизация с defaultValue от родителя ---
    useEffect(() => {
        if (defaultValue === prevDefaultValue.current) return
        prevDefaultValue.current = defaultValue

        // Не трогаем поле пока юзер печатает или поле в фокусе
        if (isFocused.current || isTyping.current) return

        const formatted = formatIfValid(defaultValue) || defaultValue || ''
        setValue(formatted)

        if (formatted && formatted !== defaultValue) {
            setWarningMsg({ type: 'ok', msg: 'Valid JSON' })
            isValid && isValid(true)
        } else if (defaultValue) {
            validateJson(defaultValue)
        } else {
            setWarningMsg({})
        }
    }, [defaultValue])

    // --- Внешняя ошибка от родителя ---
    useEffect(() => {
        if (externalWarning && externalWarning.type) {
            setWarningMsg(externalWarning)
        }
    }, [externalWarning])

    // --- autoFocus ---
    useEffect(() => {
        if (autoFocus && textareaRef.current) {
            textareaRef.current.focus()
        }
    }, [autoFocus])

    // --- Валидация (без побочки на value) ---
    function validateJson(str) {
        if (!str) {
            setWarningMsg({})
            isValid && isValid(true)
            return { valid: false, parsed: null }
        }
        try {
            const parsed = JSON.parse(str)
            setWarningMsg({ type: 'ok', msg: 'Valid JSON' })
            isValid && isValid(true)
            return { valid: true, parsed }
        } catch (e) {
            const errorMsg = e.message || 'Invalid JSON'
            setWarningMsg({ type: 'error', msg: errorMsg })
            isValid && isValid(false)
            return { valid: false, parsed: null }
        }
    }

    // --- onChange: только обновляем value, никакой валидации ---
    function handleChange(e) {
        const val = e.target.value
        isTyping.current = true
        setValue(val)
        onChange && onChange(val)
    }

    // --- onBlur: валидируем и форматируем ---
    function handleBlur() {
        isFocused.current = false
        isTyping.current = false

        if (!value) {
            setWarningMsg({})
            isValid && isValid(true)
            prevDefaultValue.current = value
            return
        }

        const { valid, parsed } = validateJson(value)
        if (valid) {
            const formatted = JSON.stringify(parsed, null, 2)
            setValue(formatted)
            onChange && onChange(formatted)
            prevDefaultValue.current = formatted
        } else {
            prevDefaultValue.current = value
        }
    }

    function handleFocus() {
        isFocused.current = true
        // Убираем статус при входе в поле — не отвлекаем
        setWarningMsg({})
    }

    // --- Tab/Shift+Tab ---
    function handleKeyDown(e) {
        if (e.key === 'Tab') {
            e.preventDefault()
            const el = e.target
            const start = el.selectionStart
            const end = el.selectionEnd

            if (e.shiftKey) {
                // Убираем 2 пробела из начала текущей строки
                const before = value.substring(0, start)
                const lineStart = before.lastIndexOf('\n') + 1
                const linePrefix = value.substring(lineStart, start)

                if (linePrefix.startsWith('  ')) {
                    const newValue = value.substring(0, lineStart) + value.substring(lineStart + 2)
                    setValue(newValue)
                    onChange && onChange(newValue)
                    requestAnimationFrame(() => {
                        el.selectionStart = Math.max(lineStart, start - 2)
                        el.selectionEnd = Math.max(lineStart, end - 2)
                    })
                }
            } else {
                // Вставляем 2 пробела
                const newValue = value.substring(0, start) + '  ' + value.substring(end)
                setValue(newValue)
                onChange && onChange(newValue)
                requestAnimationFrame(() => {
                    el.selectionStart = start + 2
                    el.selectionEnd = start + 2
                })
            }
        }
    }

    // --- Кнопка Format ---
    function handleFormat() {
        if (!value) return
        try {
            const parsed = JSON.parse(value)
            const formatted = JSON.stringify(parsed, null, 2)
            setValue(formatted)
            onChange && onChange(formatted)
            setWarningMsg({ type: 'ok', msg: 'Valid JSON' })
            isValid && isValid(true)
            prevDefaultValue.current = formatted
        } catch (e) {
            setWarningMsg({ type: 'error', msg: e.message || 'Invalid JSON' })
            isValid && isValid(false)
        }
    }

    // --- Очистка ---
    function handleClear() {
        setValue('')
        onChange && onChange('')
        setWarningMsg({})
        isValid && isValid(true)
        prevDefaultValue.current = ''
    }

    // --- Копирование ---
    function handleCopy() {
        if (textareaRef.current) {
            textareaRef.current.select()
            try {
                document.execCommand('copy')
            } catch (err) {
                console.log('Unable to copy')
            }
        }
    }

    const autoRows = rows === 'auto'
    const rowCount = autoRows ? undefined : (rows || 1)

    return (
        <div className={styles.field_wrapper}>
            <textarea
                autoFocus={autoFocus}
                ref={textareaRef}
                disabled={disabled}
                className={`
                    ${styles.field}
                    ${disabled && styles.disabled}
                    ${styles.code}
                    ${warningMsg.type && styles[warningMsg.type]}`}
                rows={autoRows ? undefined : rowCount}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                onKeyDown={handleKeyDown}
                value={value}
                placeholder={placeholder || ''}
            />
            {value && !disabled &&
                <div className={styles.json_toolbar}>
                    <div
                        className={`${styles.json_toolbar_btn} icon icon-code`}
                        title="Format JSON"
                        onClick={handleFormat}
                    />
                    {copy &&
                        <div
                            className={`${styles.json_toolbar_btn} icon icon-copy`}
                            title="Copy"
                            onClick={handleCopy}
                        />}
                    <div
                        className={`${styles.json_toolbar_btn} icon icon-close`}
                        title="Clear"
                        onClick={handleClear}
                    />
                </div>}
            {warningMsg.msg &&
                <div className={`${styles.status} ${styles[warningMsg.type]}`}>{warningMsg.msg}</div>}
        </div>
    )
}

function formatIfValid(str) {
    if (!str) return null
    try {
        return JSON.stringify(JSON.parse(str), null, 2)
    } catch {
        return null
    }
}
