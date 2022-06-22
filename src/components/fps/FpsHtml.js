import React from 'react'
//import icon from './../../icons/fps-rich-text.svg'
import iconHtml from './../../icons/fps-html.svg'
import iconMkd from './../../icons/fps-markdown.svg'
import { ComponentWrapper } from './wrapper/wrapper'
import Article from './article/article'
import Input from './dataentry/input/input'

export default function FpsHtml({ data }) {
  const html = (data || {}).html || ''
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
  icon: iconHtml,
  name: "HTML code",
  sysName: 'FpsHtml',
  form: [
    { name: "Enter your HTML-code", sysName: "html", type: "html-SLenriched" },
    { name: 'API-endpoint (optional)', sysName: 'sl', type: 'api-endpoint' },
    { name: 'Default HTTP request params', sysName: 'httpParams', type: 'httpParams' },
    { name: 'Apply template engine', sysName: 'withTemplate', type: 'boolean' },
  ]
}

export function FpsMarkdown(props) {
// console.log(props)
  const text = (props && props.data && props.data.markdown) || ''
  return <ComponentWrapper>
    <Article>
      <Input type='markdown' defaultValue={text} nomargin/>
    </Article>
  </ComponentWrapper>
}

FpsMarkdown.settings = {
  icon: iconMkd,
  name: "Markdown text",
  sysName: 'FpsMarkdown',
  form: [
    { name: "Enter your text", sysName: "markdown", type: "markdown-SLenriched" },
    { name: 'API-endpoint (optional)', sysName: 'sl', type: 'api-endpoint' },
    { name: 'Default HTTP request params', sysName: 'httpParams', type: 'httpParams' },
    { name: 'Apply template engine', sysName: 'withTemplate', type: 'boolean' },
  ]
}


