import React from 'react'
import Hint from './hint/hint'

export const Fps404 = () => {
  return <div style={{ margin: 40, width: '100%' }}>
  <Hint error title='App is not found (404)' margin={{ top: 0, bottom: 0 }}>
    <p>Please, connect support@directual.com if you have any questions.</p>
  </Hint>
</div>
}

export const Fps500 = () => {
  return <div style={{ margin: 40, width: '100%' }}>
  <Hint error title='Error (500)' margin={{ top: 0, bottom: 0 }}>
    <p>Please, connect support@directual.com if you have any questions.</p>
  </Hint>
</div>
}

export const FpsBlocked = () => {
  return <div style={{ margin: 40, width: '100%' }}>
    <Hint error title='The app is blocked' margin={{ top: 0, bottom: 0 }}>
      <p>Please, connect support@directual.com if you have any questions.</p>
    </Hint>
  </div>
}

export const FpsIsEmpty = () => {
  return (
    <div className='wrap center message'>
      <div className='emoji'>👨‍💻</div>
      <h1>The component is under construction</h1>
      <p>It will be amazing, for sure!</p>
    </div>
  )
}

export const PageIsEmpty = () => {
  return (
    <div className='wrap center message'>
      <div className='emoji'>🙈</div>
      <h1>The page has no content</h1>
    </div>
  )
}
