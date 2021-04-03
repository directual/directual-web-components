import React from 'react'
import icon from './../../icons/fps-rich-text.svg'
import { ComponentWrapper } from './wrapper/wrapper'
import Article from './article/article'
import Input from './dataentry/input/input'

function FpsHtml({ data }) {
  const text = data.text || ''
  return (
    <ComponentWrapper>
      {/* 
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
       */}
      <Article>
        <Input type='markdown' defaultValue={text} />
      </Article>
    </ComponentWrapper>
  )
}

FpsHtml.settings = {
  icon: icon,
  name: "Rich text",
  sysName: 'FpsHtml',
  form: [
    { name: "Enter your text", sysName: "text", type: "markdown" }
  ]
}
export default FpsHtml
