import React from 'react'

function FpsH1({ data }) {
  return <h1>{data.text}</h1>
}
FpsH1.settings = {
  // icon: icon,
  name: 'H1',
  sysName: 'h1',
  form: [{ name: 'text', sysName: 'text', type: 'input' }]
}
export default FpsH1
