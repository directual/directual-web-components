import React, { useEffect, useRef, useState } from 'react'
//import icon from './../../icons/fps-rich-text.svg'
import iconHtml from './../../icons/fps-html.svg'
import iconMkd from './../../icons/fps-markdown.svg'
import { ComponentWrapper } from './wrapper/wrapper'
import Article from './article/article'
import Input from './dataentry/input/input'
import InnerHTML from 'dangerously-set-html-content'

export default function FpsHtml(props) {

  const { socket, id, callEndpoint } = props

  const [data, setData] = useState(props.data)
  const [renderKey, setRenderKey] = useState(0)
  const [hidden, setHidden] = useState(false)

  const wrapperRef = useRef(null)
  const dataRef = useRef(data)
  const htmlRef = useRef((props.data || {}).html || '')

  useEffect(() => {
    if (JSON.stringify(props.data) !== JSON.stringify(data)) {
      setData(props.data)
    }
  }, [props])

  useEffect(() => {
    dataRef.current = data
    htmlRef.current = (data || {}).html || ''
  }, [data])

  // При изменении socket (т.е. при обновлениях через веб-сокет)
  // форсим ремаунт чтобы скрипты отработали заново
  useEffect(() => {
    setRenderKey(prev => prev + 1)
  }, [socket])

  // Регистрируем API в window для доступа из внешнего кода
  useEffect(() => {
    const componentId = (data && data.comp_ID) || id
    if (!componentId) return

    if (!window.FpsHtml_API) {
      window.FpsHtml_API = {}
    }

    window.FpsHtml_API[componentId] = {
      getHtml: () => htmlRef.current,
      setHtml: (newHtml) => {
        setData(prev => ({ ...(prev || {}), html: newHtml }))
      },
      rerender: () => setRenderKey(prev => prev + 1),
      show: () => setHidden(false),
      hide: () => setHidden(true),
      getData: () => dataRef.current,
      getElement: () => wrapperRef.current,
      callEndpoint: (endpoint, method, body, params, finish) => {
        if (callEndpoint) {
          callEndpoint(endpoint, method, body, params, finish)
        }
      },
    }

    return () => {
      if (window.FpsHtml_API && window.FpsHtml_API[componentId]) {
        delete window.FpsHtml_API[componentId]
      }
    }
  }, [data, id, callEndpoint])

  const html = (data || {}).html || ''
  if (hidden || (data && data.isHidden == 'true')) { return <div /> }

  // console.log('=== FpsHTML ===')
  // console.log(data)

  return (
    <div ref={wrapperRef}>
      <ComponentWrapper>
        <Article>
          {html && <InnerHTML key={renderKey} allowRerender={true} html={html} />}
        </Article>
      </ComponentWrapper>
    </div>
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


