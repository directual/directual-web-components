import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

import styles from './mkd.module.css'

export function Markdown(props) {

    const inputEl = useRef(null);
    const [lines, setLines] = useState(1)

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

        if (!textarea || !textarea.constructor || textarea.constructor.name != 'HTMLTextAreaElement') { return; }

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

    const mkdExample =
        `# Hello world

## Nice to see you again
    
Однажды в суровую зимнюю пору я из лесу вышел

Был сильный мороз

[yandex.ru](http://yandex.ru)

![image alt](https://images.unsplash.com/photo-1469460340997-2f854421e72f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=60)

- Мороз и **солнце**
- День *чудесный*
- Еще ты дремлешь

1. Друг прелестный
2. Пора, красавица, проснись
3. Чаю попей

| Feature   | Support |
| :-------: | ------- |
| tables    | ✔       |
| alignment | ✔       |
| wewt      | ✔       |

> А. С. Пушкин
> Наше все

`

    const [value, setValue] = useState(props.value || (props.example && mkdExample))

    useEffect(()=>{
        if (props.value != value) {
            setValue(props.value)
        }
        if (countLines(inputEl.current, value) != lines) {
            setLines(countLines(inputEl.current, value))
        }
    },[props.value])

    const changeMkd = val => {
        //console.log(val)
        setValue(val)
        props.onChange && props.onChange(val)
    }

    const [preview, setPreview] = useState(props.preview || false)

    return (
        <div className={styles.dd_mdn}
            style={{
                marginTop: props.margin ? props.margin.top : 0,
                marginBottom: props.margin ? props.margin.bottom : 0,
            }}>
            {props.edit ?
                <div className={styles.mkd_edit}
                    style={{
                        maxHeight: props.height || 'auto'
                    }}>
                    <div className={styles.editField}>
                        <div className={styles.mkd_header}>
                            <span>Markdown text </span>
                            <a className='icon icon-help small' target="_blank"
                                href="https://readme.directual.com/data/data-types/markdown-cheatsheet"></a>
                            <span className={styles.rasporka}></span>
                            {preview ?
                                <a className='icon icon-hide small'
                                    onClick={() => setPreview(!preview)}>Hide preview</a>
                                :
                                <a className='icon icon-view small'
                                    onClick={() => setPreview(!preview)}>Show preview</a>
                            }
                        </div>
                        <textarea
                            placeholder={props.placeholder}
                            rows={lines}
                            //rows={inputEl.current ? countLines(inputEl.current, value) : lines}
                            ref={inputEl}
                            disabled={props.disabled}
                            onChange={e => changeMkd(e.target.value)}
                            value={value}
                        />
                    </div>
                    {preview &&
                        <div className={styles.preview}>
                            <ReactMarkdown plugins={[gfm]} children={value} />
                        </div>}
                </div>
                :
                <ReactMarkdown plugins={[gfm]} children={value} />
            }
        </div >
    )
}