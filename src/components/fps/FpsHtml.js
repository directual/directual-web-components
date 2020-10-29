import React from 'react'
import icon from './../../icons/fps-rich-text.svg'
import { ComponentWrapper } from './wrapper/wrapper'
import Article from './article/article'

function FpsHtml({ data }) {
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
    { name: "html", sysName: "html", type: "html" }
  ]
}
export default FpsHtml
