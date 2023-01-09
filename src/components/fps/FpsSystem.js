import React from 'react'

export const Fps404 = () => {
  return <h1>404</h1>
}

export const Fps500 = () => {
  return <h1>500</h1>
}

export const FpsBlocked = () => {
  return <h1>Page is blocked</h1>
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
