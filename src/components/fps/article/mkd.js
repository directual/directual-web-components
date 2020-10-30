import React, { useState } from "react";
import MEDitor, { commands } from "@uiw/react-md-editor";

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

> А. С. Пушкин
> Наше все

`

    const [value, setValue] = useState(props.value || mkdExample)

    const updateValue = value => {
        setValue(value)
        props.onChange && props.onChange(value)
    }

    return (
        <div className='dd_mdn' 
            style={{
                marginTop: props.margin && props.margin.top, 
                marginBottom: props.margin && props.margin.bottom
            }}>
            {props.edit ? 
            <MEDitor
                height={props.height || 400}
                value={value}
                preview={props.preview || 'live'}
                commands={[
                    commands.bold,
                    commands.italic,
                    commands.title,
                    commands.quote,
                    commands.divider,
                    commands.link,
                    commands.image,
                    commands.divider,
                    commands.unorderedListCommand,
                    commands.orderedListCommand,
                    commands.divider,
                    commands.codeEdit,
                    commands.codeLive,
                ]}
                onChange={updateValue} />:
            <MEDitor.Markdown source={value} /> }
        </div>
    )
}