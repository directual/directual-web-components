import React from 'react'
import styles from '../../styles.module.css'

export default function ({ data }) {
  let html = data.html || ''
  return (<div className={styles.fpsHtml} dangerouslySetInnerHTML={{__html: html}} />)
}
