import React, { useEffect, useState } from 'react'
//import icon from './../../icons/fps-rich-text.svg'
import iconHtml from './../../icons/fps-html.svg'
import iconMkd from './../../icons/fps-markdown.svg'
import { ComponentWrapper } from './wrapper/wrapper'
import Article from './article/article'
import Input from './dataentry/input/input'
import InnerHTML from 'dangerously-set-html-content'

export default function FpsHtml(props) {

  const [data, setData] = useState(props.data)
  useEffect(() => {
    if (JSON.stringify(props.data) !== JSON.stringify(data)) {
      setData(props.data)
    }
  }, [props])

  const html = (data || {}).html || ''
  if (data && data.isHidden == 'true') { return <div /> }

  // console.log('=== FpsHTML ===')
  // console.log(data)

  return (
    <ComponentWrapper>
      <Article>
        {html && <InnerHTML allowRerender={true} html={html} />}
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
    { name: 'Apply template engine', sysName: 'withTemplate', type: 'boolean' },
    { name: 'API-endpoint (optional)', sysName: 'sl', type: 'api-endpoint' },
    { name: 'Default HTTP request params', sysName: 'httpParams', type: 'httpParams' },
    { name: 'Hide component', sysName: 'isHidden', type: 'isHidden' },
    { name: 'Component comment', sysName: 'comment', type: 'comment' },
  ]
}

export function FpsMarkdown(props) {
  // console.log(props)
  const text = (props && props.data && props.data.markdown) || ''
  if (props && props.data && props.data.isHidden == 'true') { return <div /> }
  return <ComponentWrapper>
    <Article>
      <Input type='markdown' defaultValue={text} nomargin />
    </Article>
  </ComponentWrapper>
}

FpsMarkdown.settings = {
  icon: iconMkd,
  name: "Markdown text",
  sysName: 'FpsMarkdown',
  form: [
    { name: "Enter your text", sysName: "markdown", type: "markdown-SLenriched" },
    { name: 'Apply template engine', sysName: 'withTemplate', type: 'boolean' },
    { name: 'API-endpoint (optional)', sysName: 'sl', type: 'api-endpoint' },
    { name: 'Default HTTP request params', sysName: 'httpParams', type: 'httpParams' },
    { name: 'Hide component', sysName: 'isHidden', type: 'isHidden' },
    { name: 'Component comment', sysName: 'comment', type: 'comment' },
  ]
}


