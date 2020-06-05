import React from 'react'
import styles from '../../styles.module.css'
import icon from './../../icons/fps-rich-text.svg'

function FpsHtml({ data }) {
  const html = data.html || ''
  return (
    <div
      className={styles.fpsHtml}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

FpsHtml.settings = {
  icon: icon,
  name: "Rich text",
  sysName: 'FpsHtml',
  form: [
    {name: "html", sysName:"html", type:"html"}
  ]
}
export default FpsHtml
