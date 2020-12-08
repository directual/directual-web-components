import React, { useState } from "react";
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

import styles from './mkd.module.css'

export function Markdown(props) {

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
    const checkLineBreaks = line => {
        return line && typeof line == 'string' ? (line.match(/\n/g) || []).length : 0
    }

    const [value, setValue] = useState(props.value || (props.example && mkdExample))

    const changeMkd = val => {
        console.log(val)
        setValue(val)
        props.onChange && props.onChange(val)
    }

    const [preview, setPreview] = useState(props.preview || false)

    return (
        <div className={styles.dd_mdn}
            style={{
                marginTop: props.margin && props.margin.top,
                marginBottom: props.margin && props.margin.bottom,
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
                            rows={checkLineBreaks(value) + 1 }
                            onChange={e => changeMkd(e.target.value)}
                        >
                            {value}
                        </textarea>
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