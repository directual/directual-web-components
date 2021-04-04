import React from 'react'
import icon from './../../icons/fps-rich-text.svg'
import { ComponentWrapper } from './wrapper/wrapper'
import Article from './article/article'
import Input from './dataentry/input/input'

export default function FpsHtml({ data }) {
  const html = data.html || ''
  return (
    <ComponentWrapper>
      <Article>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Article>
    </ComponentWrapper>
  )
}

FpsHtml.settings = {
  icon: icon,
  name: "HTML code",
  sysName: 'FpsHtml',
  form: [
    { name: "Enter your HTML-code", sysName: "html", type: "html" }
  ]
}

export function FpsMarkdown(props) {
console.log(props)
  const text = (props && props.data && props.data.markdown) || ''
  return <ComponentWrapper>
    markdown:
    <Article>
      <Input type='markdown' defaultValue={text} />
    </Article>
  </ComponentWrapper>
}

FpsMarkdown.settings = {
  icon: icon,
  name: "Markdown text",
  sysName: 'FpsMarkdown',
  form: [
    { name: "Enter your text", sysName: "markdown", type: "markdown" }
  ]
}


