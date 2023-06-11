import React, { useEffect, useState } from 'react'
//import icon from './../../icons/fps-rich-text.svg'
import iconChart from './../../icons/fps-chart.svg'
import { ComponentWrapper } from './wrapper/wrapper'
import Chart from './chart/chart'

export default function FpsChart(props) {

  const [data, setData] = useState(props.data)
  useEffect(() => {
    if (JSON.stringify(props.data) !== JSON.stringify(data)) {
      setData(props.data)
    }
  }, [props])

  console.log('=== FpsChart ===')
  console.log(data)

  return (
    <ComponentWrapper>
      <Chart />
    </ComponentWrapper>
  )
}

FpsHtml.settings = {
  icon: iconHtml,
  name: "Chart",
  sysName: 'iconChart',
  form: [
    { name: 'API-endpoint', sysName: 'sl', type: 'api-endpoint' },
    { name: 'Chart data', sysName: 'chart-data', type: 'chart-data' },
  ]
}

