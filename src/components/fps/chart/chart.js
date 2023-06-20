import React, { useState, useEffect, useRef } from 'react'
//import styles from './chart.module.css'
import {
    LineChart, Line, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
    AreaChart, Area, BarChart, Bar, ScatterChart, Scatter
} from 'recharts';
import _ from 'lodash'
import moment from 'moment';
import styles from './chart.module.css'

export default function Chart({ data, lang, globalLoading, chartFilters }) {

    const chartParams = _.get(data, "params") || {}
    const chartHolder = useRef(null)
    const [layoutWidth, setLayoutWidth] = useState(null)

    useEffect(() => {
        if (chartHolder.current && chartHolder.current.offsetWidth != layoutWidth) {
            setLayoutWidth(chartHolder.current.offsetWidth)
        }
    })

    useEffect(() => {
        const resizeListener = () => {
            if (chartHolder.current && chartHolder.current.offsetWidth !== layoutWidth) {
                setLayoutWidth(chartHolder.current.offsetWidth);
            }
        }
        window.addEventListener("resize", resizeListener);
        return () => { window.removeEventListener('resize', resizeListener); };
    }, []);

    const momentLocale = {
        "RUS": "ru",
        "GER": "de",
        "ESP": "es",
        "FRA": "fr",
        "JPN": "ja",
        "ENG": "en-us"
    }

    const transformData = (d) => {

        if (chartParams.chart_type == 'scatter') {
            let data = [...d]
            let result = {};
            (chartParams.chart_lines || []).forEach(line => {
                let array = _.get(result, `${line.line_data}`) || []

                const filteredData = data.filter(i => i[line.scatter_data_field] == line.line_data) || []
                array = _.concat(array, filteredData.map(i => {
                    return chartParams.z_axis ?
                        {
                            x: i[chartParams.x_axis],
                            y: i[chartParams.y_axis],
                            z: i[chartParams.z_axis]
                        } : {
                            x: i[chartParams.x_axis],
                            y: i[chartParams.y_axis]
                        }
                }))
                _.set(result, `${line.line_data}`, array)
            })
            return result
        } else {

            let data = [...d]
            d.forEach(dataLine => {
                if (_.get(chartParams, 'x_axis_format')) {
                    dataLine[chartParams.x_axis + "_formatted"] = moment(dataLine[chartParams.x_axis]).locale(momentLocale[lang]).format(_.get(chartParams, 'x_axis_format'))
                } else { dataLine[chartParams.x_axis + "_formatted"] = dataLine[chartParams.x_axis] }
                (chartParams.chart_lines || []).forEach(userLine => {
                    if (userLine.line_data && userLine.line_label) {
                        dataLine[userLine.line_label || userLine.line_data] = dataLine[userLine.line_data]
                    }
                })
            })
            return _.orderBy(data, [chartParams.x_axis], ['asc'])
        }
    }

    const chartData = transformData(_.get(data, "data") || [])

    const dataExample = [
        {
            name: 'Page A',
            uv: 4000,
            "раз два": 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            "раз два": 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            "раз два": 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            "раз два": 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            "раз два": 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            "раз два": 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            "раз два": 4300,
            amt: 2100,
        },
    ];

    const chartMargins = { top: 0, right: 0, bottom: 0, left: 0 }
    if (chartParams.chart_margins) {
        const array = chartParams.chart_margins.split(' ')
        chartMargins.top = parseInt(_.trim(array[0]) || chartMargins.top)
        chartMargins.right = parseInt(_.trim(array[1]) || chartMargins.right)
        chartMargins.bottom = parseInt(_.trim(array[2]) || chartMargins.bottom)
        chartMargins.left = parseInt(_.trim(array[3]) || chartMargins.left)
    }

    let renderChart = null

    switch (chartParams.chart_type) {
        case 'line':
            renderChart = <LineChart
                width={layoutWidth - 16}
                height={chartParams.chart_height || 300}
                data={chartData}
            >
                {chartParams.show_grid && <CartesianGrid strokeDasharray={chartParams.chart_strokeDasharray || "0 0"} fill={chartParams.chart_gridFill} />}
                <XAxis dataKey={chartParams.x_axis + "_formatted"} />
                <YAxis />
                <Tooltip />
                {chartParams.show_legend && <Legend />}
                {(chartParams.chart_lines || []).map(line => <Line
                    dot={line.line_dot ? { stroke: line.color, strokeWidth: line.dot_width || 1 } : false}
                    type={line.line_type || "monotone"}
                    strokeWidth={line.line_width || 1}
                    dataKey={line.line_label || line.line_data}
                    hide={!chartFilters[line.line_data]}
                    stroke={line.color}
                />)}
            </LineChart>
            break;
        case 'area':
            renderChart = <AreaChart
                width={layoutWidth - 16}
                height={chartParams.chart_height || 300}
                data={chartData}
            >
                {chartParams.show_grid && <CartesianGrid strokeDasharray={chartParams.chart_strokeDasharray || "0 0"} fill={chartParams.chart_gridFill} />}
                <XAxis dataKey={chartParams.x_axis + "_formatted"} />
                <YAxis />
                <Tooltip />

                {chartParams.show_legend && <Legend />}

                <defs>
                    {(chartParams.chart_lines || []).map(line =>
                        <linearGradient id={"gradient_" + line.line_data} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={line.color} stopOpacity={0.8} />
                            <stop offset="95%" stopColor={line.color} stopOpacity={0} />
                        </linearGradient>
                    )}
                </defs>

                {(chartParams.chart_lines || []).map(line => <React.Fragment>
                    <Area
                        dot={line.line_dot ? { stroke: line.color, strokeWidth: line.dot_width || 1 } : false}
                        type={line.line_type || "monotone"}
                        strokeWidth={line.line_width || 1}
                        dataKey={line.line_label || line.line_data}
                        hide={!chartFilters[line.line_data]}
                        stroke={line.color}
                        fillOpacity={1}
                        fill={`url(#gradient_${line.line_data})`}
                    /></React.Fragment>)}
            </AreaChart>
            break;
        case 'bar':
            renderChart = <BarChart
                width={layoutWidth - 16}
                height={chartParams.chart_height || 300}
                data={chartData}
            >
                {chartParams.show_grid && <CartesianGrid strokeDasharray={chartParams.chart_strokeDasharray || "0 0"} fill={chartParams.chart_gridFill} />}
                <XAxis dataKey={chartParams.x_axis + "_formatted"} />
                <YAxis />
                <Tooltip />
                {chartParams.show_legend && <Legend />}
                {(chartParams.chart_lines || []).map(line => <Bar
                    strokeWidth={line.line_width || 1}
                    dataKey={line.line_label || line.line_data}
                    hide={!chartFilters[line.line_data]}
                    fill={line.color}
                />)}
            </BarChart>
            break;
        case 'scatter':
            renderChart = <ScatterChart
                width={layoutWidth - 16}
                height={chartParams.chart_height || 300}
            >
                {chartParams.show_grid && <CartesianGrid strokeDasharray={chartParams.chart_strokeDasharray || "0 0"} fill={chartParams.chart_gridFill} />}
                <XAxis dataKey={chartParams.x_axis} type='number' name={chartParams.x_axis_name} unit={chartParams.x_axis_units} />
                <YAxis dataKey={chartParams.y_axis} type='number' name={chartParams.y_axis_name} unit={chartParams.y_axis_units} />
                {chartParams.z_axis && <ZAxis range={[0, 500]} dataKey={chartParams.z_axis} type='number' name={chartParams.z_axis_name} unit={chartParams.z_axis_units} />}
                <Tooltip />
                {chartParams.show_legend && <Legend />}
                {(chartParams.chart_lines || []).map(line => <Scatter
                    hide={!chartFilters[line.line_data]}
                    fill={line.color}
                    shape={line.scatter_shape || 'circle'}
                    line={line.scatter_line}
                    data={chartData[line.line_data]}
                    name={line.line_label || line.line_data || line.scatter_data_field + " – " + line.line_data}
                />)}
            </ScatterChart>
            break;
        default:
            renderChart = <div>unknown chart type</div>
    }

    return <div ref={chartHolder} className={styles.chartHolder}
        style={
            {
                height: chartParams.chart_height || 300,
                marginTop: chartMargins.top,
                marginBottom: chartMargins.bottom,
                marginLeft: chartMargins.left,
                marginRight: chartMargins.right
            }}
    >
        {globalLoading ?
            <div style={{ height: chartParams.chart_height || 300 }} />
            : renderChart
        }
    </div>
}