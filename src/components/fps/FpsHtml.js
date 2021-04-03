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
  name: "Rich text",
  sysName: 'FpsHtml',
  form: [
    { name: "Enter your text", sysName: "html", type: "html" }
  ]
}

export function FpsMarkdown({ data }) {
  const text = data.text || ''
  return <ComponentWrapper>
    <Article>
      <Input type='markdown' defaultValue={text} />
    </Article>
  </ComponentWrapper>
}

FpsMarkdown.settings = {
  icon: icon,
  name: "Rich text",
  sysName: 'FpsMarkdown',
  form: [
    { name: "Enter your text", sysName: "markdown", type: "markdown" }
  ]
}


