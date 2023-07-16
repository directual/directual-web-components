import React, { useState, useEffect, useRef } from 'react'
//import styles from './chart.module.css'
import {
    LineChart, Line, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
    AreaChart, Area, BarChart, Bar, ScatterChart, Scatter, PieChart, Pie, Cell, Brush
} from 'recharts';
import _ from 'lodash'
import moment from 'moment';
import styles from './chart.module.css'

export default function Chart({ data, lang, globalLoading, chartFilters, resetChartFilters }) {

    const [chartParams, setChartParams] = useState(_.get(data, "params") || {})

    const chartHolder = useRef(null)
    const [layoutWidth, setLayoutWidth] = useState(null)


    const tableFieldScheme = data.fieldScheme || []
    const tableStructures = data.structures || {}

    // Gathers current structure info:
    const getStructure = (obj, tableFieldScheme, tableStructures) => {
        console.log("getStructure")
        const structure = {}
        for (const field in obj) {
            if (typeof obj[field] !== 'object') {
                if (tableFieldScheme.filter((i) => i[0] == field).length > 0) {
                    structure.id = tableFieldScheme.filter((i) => i[0] === field)[0][1]
                }
            }
        }
        if (structure.id && tableStructures[structure.id]) {
            structure.sysName = tableStructures[structure.id].sysName
            structure.name = tableStructures[structure.id].name
            structure.visibleName =
                tableStructures[structure.id] &&
                (tableStructures[structure.id].jsonViewIdSettings
                    ? Object.values(
                        JSON.parse(tableStructures[structure.id].jsonViewIdSettings)
                    ).map((i) => (i = i.sysName))
                    : [])
            structure.fieldStructure = JSON.parse(
                tableStructures[structure.id].jsonObject
            )
        }
        console.log(structure)
        return structure
    }

    const transformTableFieldScheme = (sysname, tableFieldScheme) => {
        const newTableFieldScheme = tableFieldScheme.filter((i) =>
            i[0].startsWith(sysname + '.')
        )
        var deepClone = JSON.parse(JSON.stringify(newTableFieldScheme))
        deepClone.forEach((i) => (i[0] = i[0].substring(sysname.length + 1)))
        return deepClone
    }

    const getLinkName = (sysname, obj, fieldScheme) => {
        fieldScheme = fieldScheme || tableFieldScheme
        const structure = getStructure(
            obj,
            transformTableFieldScheme(sysname, fieldScheme),
            tableStructures
        )

        const linkNameArr = []
        structure.visibleName &&
            structure.visibleName.forEach((field) => {
                const fieldDetails = structure.fieldStructure.filter(
                    (i) => i.sysName == field
                )[0]
                if (obj[field] || obj[field] == 0) {
                    if (fieldDetails.dataType == 'date') {
                        linkNameArr.push(formatDate(obj[field], fieldDetails.formatOptions))
                    } else {
                        if (typeof obj[field] === 'object') {
                            linkNameArr.push(
                                getLinkName(
                                    field,
                                    obj[field],
                                    transformTableFieldScheme(sysname, fieldScheme)
                                )
                            )
                        } else {
                            linkNameArr.push(obj[field])
                        }
                    }
                }
            })
        const linkName = linkNameArr
            ? linkNameArr.length > 0
                ? linkNameArr.join(' ')
                : null
            : null
        let displayID = ''
        if (typeof obj === 'string') {
            displayID = obj
        }
        return linkName == 0
            ? '0'
            : linkName || displayID || obj.id || 'No visible name'
    }

    const checkIfLink = (value, sysName, obj) => {
        if (typeof value == 'object' && (!sysName || !obj)) {
            return JSON.stringify(value)
        }
        if (typeof value == 'object') {
            return getLinkName(sysName, value)
        } else {
            return value
        }
    }


    useEffect(() => {
        if (chartParams !== _.get(data, "params") && _.get(data, "params")) {
            setChartParams(_.get(data, "params"));
            resetChartFilters && resetChartFilters()
        }
    }, [data])

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
        }

        if (chartParams.chart_type == 'pie' && _.get(chartParams, 'pie_dataSource') !== 'several') {
            let data = ([...d] || []).length ? ([...d] || [])[0] : null
            if (!data) { return null }
            console.log(data)
            const result = (chartParams.chart_lines || []).map(i => {
                return {
                    value: data[i.line_data],
                    name: checkIfLink(i.line_name || i.line_data)
                }
            })
            return result
        }

        if (chartParams.chart_type == 'pie' && _.get(chartParams, 'pie_dataSource') == 'several') {
            if (!d || !d.length) { return null }
            const result = //[{name: 'A', value: 100}, {name: 'B', value: 200}]
                (d || []).map(i => {
                    return {
                        value: i[_.get(chartParams, 'pie_several_segment_value')],
                        name: checkIfLink(i[_.get(chartParams, 'pie_several_segment_name')], _.get(chartParams, 'pie_several_segment_name'), i)
                    }
                })
            return result
        }

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

    const chartDataTest = [
        { name: "A", value: 400 },
        { name: "B", value: 300 },
        { name: "C", value: 300 },
        { name: "D", value: 200 }
    ]

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
        index
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const defaultColorsPalette = [
        '#731FF2', '#3FCA52', '#F2901F', '#F21FCF', '#F21F22', '#8B572A', "#0088FE", "#00C49F", "#FFBB28", "#FF8042"
    ]

    const usersColorsPalette = _.get(chartParams, 'pie_colors') ? _.get(chartParams, 'pie_colors').split(",") : []
    const colorsPalette = _.concat(usersColorsPalette, defaultColorsPalette)

    switch (chartParams.chart_type) {
        case 'line':
            renderChart = <LineChart
                width={layoutWidth - 16}
                height={chartParams.chart_height || 300}
                layout={chartParams.layoutVertical ? "vertical" : "horizontal"}
                data={chartData}
                margin={{
                    top: chartMargins.top,
                    right: chartMargins.right,
                    left: chartMargins.left,
                    bottom: chartMargins.bottom,
                }}
            >
                {chartParams.show_grid && <CartesianGrid strokeDasharray={chartParams.chart_strokeDasharray || "0 0"} fill={chartParams.chart_gridFill} />}
                {chartParams.show_brush && <Brush dataKey={chartParams.x_axis + "_formatted"} height={30} stroke={chartParams.brush_color || "#8884d8"} />}

                {chartParams.layoutVertical ?
                    <React.Fragment>
                        <YAxis dataKey={chartParams.x_axis + "_formatted"} type="category" yAxisId="first" orientation="left" />
                        <XAxis type="number" orientation="bottom" xAxisId="first" stroke={chartParams.left_axis_color || "#333333"} />
                        {chartParams.biAxial && <XAxis type="number" orientation="top" xAxisId="second" stroke={chartParams.right_axis_color || "#333333"} />}
                    </React.Fragment> : <React.Fragment>
                        <XAxis dataKey={chartParams.x_axis + "_formatted"} type="category" xAxisId="first" />
                        <YAxis type="number" orientation="left" yAxisId="first" stroke={chartParams.left_axis_color || "#333333"} />
                        {chartParams.biAxial && <YAxis type="number" orientation="right" yAxisId="second" stroke={chartParams.right_axis_color || "#333333"} />}
                    </React.Fragment>}

                {chartParams.show_tooltip && <Tooltip />}
                {chartParams.show_legend && <Legend />}
                {(chartParams.chart_lines || []).map(line => <Line
                    yAxisId={(chartParams.biAxial && line.secondAxis && !chartParams.layoutVertical) ? "second" : "first"}
                    xAxisId={(chartParams.biAxial && line.secondAxis && chartParams.layoutVertical) ? "second" : "first"}
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
                layout={chartParams.layoutVertical ? "vertical" : "horizontal"}
                data={chartData}
                margin={{
                    top: chartMargins.top,
                    right: chartMargins.right,
                    left: chartMargins.left,
                    bottom: chartMargins.bottom,
                }}
            >
                {chartParams.show_grid && <CartesianGrid strokeDasharray={chartParams.chart_strokeDasharray || "0 0"} fill={chartParams.chart_gridFill} />}
                {chartParams.show_brush && <Brush dataKey={chartParams.x_axis + "_formatted"} height={30} stroke={chartParams.brush_color || "#8884d8"} />}

                {chartParams.layoutVertical ?
                    <React.Fragment>
                        <YAxis dataKey={chartParams.x_axis + "_formatted"} type="category" yAxisId="first" orientation="left" />
                        <XAxis type="number" orientation="bottom" xAxisId="first" stroke={chartParams.left_axis_color || "#333333"} />
                        {chartParams.biAxial && <XAxis type="number" orientation="top" xAxisId="second" stroke={chartParams.right_axis_color || "#333333"} />}
                    </React.Fragment> : <React.Fragment>
                        <XAxis dataKey={chartParams.x_axis + "_formatted"} type="category" xAxisId="first" />
                        <YAxis type="number" orientation="left" yAxisId="first" stroke={chartParams.left_axis_color || "#333333"} />
                        {chartParams.biAxial && <YAxis type="number" orientation="right" yAxisId="second" stroke={chartParams.right_axis_color || "#333333"} />}
                    </React.Fragment>}
                {chartParams.show_tooltip && <Tooltip />}
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
                        yAxisId={(chartParams.biAxial && line.secondAxis && !chartParams.layoutVertical) ? "second" : "first"}
                        xAxisId={(chartParams.biAxial && line.secondAxis && chartParams.layoutVertical) ? "second" : "first"}
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
                layout={chartParams.layoutVertical ? "vertical" : "horizontal"}
                height={chartParams.chart_height || 300}
                data={chartData}
                margin={{
                    top: chartMargins.top,
                    right: chartMargins.right,
                    left: chartMargins.left,
                    bottom: chartMargins.bottom,
                }}
            >
                {chartParams.show_grid && <CartesianGrid strokeDasharray={chartParams.chart_strokeDasharray || "0 0"} fill={chartParams.chart_gridFill} />}

                {chartParams.layoutVertical ?
                    <React.Fragment>
                        <YAxis dataKey={chartParams.x_axis + "_formatted"} type="category" yAxisId="first" orientation="left" />
                        <XAxis type="number" orientation="bottom" xAxisId="first" stroke={chartParams.left_axis_color || "#333333"} />
                        {chartParams.biAxial && <XAxis type="number" orientation="top" xAxisId="second" stroke={chartParams.right_axis_color || "#333333"} />}
                    </React.Fragment> : <React.Fragment>
                        <XAxis dataKey={chartParams.x_axis + "_formatted"} type="category" xAxisId="first" />
                        <YAxis type="number" orientation="left" yAxisId="first" stroke={chartParams.left_axis_color || "#333333"} />
                        {chartParams.biAxial && <YAxis type="number" orientation="right" yAxisId="second" stroke={chartParams.right_axis_color || "#333333"} />}
                    </React.Fragment>}


                {chartParams.show_brush && <Brush dataKey={chartParams.x_axis + "_formatted"} height={30} stroke={chartParams.brush_color || "#8884d8"} />}
                {chartParams.show_tooltip && <Tooltip />}
                {chartParams.show_legend && <Legend />}
                {(chartParams.chart_lines || []).map(line => <Bar
                    yAxisId={(chartParams.biAxial && line.secondAxis && !chartParams.layoutVertical) ? "second" : "first"}
                    xAxisId={(chartParams.biAxial && line.secondAxis && chartParams.layoutVertical) ? "second" : "first"}
                    strokeWidth={line.line_width || 1}
                    stackId={line.line_stackedID}
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
                margin={{
                    top: chartMargins.top,
                    right: chartMargins.right,
                    left: chartMargins.left,
                    bottom: chartMargins.bottom,
                }}
            >
                {chartParams.show_grid && <CartesianGrid strokeDasharray={chartParams.chart_strokeDasharray || "0 0"} fill={chartParams.chart_gridFill} />}
                <XAxis dataKey={chartParams.x_axis} type='number' name={chartParams.x_axis_name} unit={chartParams.x_axis_units} />
                <YAxis dataKey={chartParams.y_axis} type='number' name={chartParams.y_axis_name} unit={chartParams.y_axis_units} />
                {chartParams.z_axis && <ZAxis range={[0, 500]} dataKey={chartParams.z_axis} type='number' name={chartParams.z_axis_name} unit={chartParams.z_axis_units} />}
                {chartParams.show_tooltip && <Tooltip />}
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
        case 'pie':
            renderChart = <PieChart
                width={layoutWidth - 16}
                height={chartParams.chart_height || 300}
                margin={{
                    top: chartMargins.top,
                    right: chartMargins.right,
                    left: chartMargins.left,
                    bottom: chartMargins.bottom,
                }}
            >
                {chartParams.show_tooltip && <Tooltip />}
                {chartParams.show_legend && <Legend />}
                <Pie
                    data={chartData}
                    cx={chartParams.pie_cx || '50%'}
                    cy={chartParams.pie_cy || '50%'}
                    labelLine={chartParams.pie_label == 'names'}
                    label={chartParams.pie_label == 'names' ? true :
                        chartParams.pie_label == 'shares' ? renderCustomizedLabel :
                            false}
                    outerRadius={chartParams.pie_outerRadius || 100}
                    innerRadius={chartParams.pie_innerRadius || 0}
                    dataKey="value"
                    paddingAngle={chartParams.pie_paddingAngle || 0}
                    startAngle={chartParams.pie_startAngle || 0}
                    endAngle={chartParams.pie_endAngle || 360}
                >

                    {_.get(chartParams, 'pie_dataSource') == 'several' ?
                        (chartData || []).map((segment, index) => <Cell
                            key={`cell-${index}`}
                            fill={colorsPalette[index]}
                        />)
                        : (chartParams.chart_lines || []).map((segment, index) => <Cell
                            key={`cell-${index}`}
                            fill={segment.color}
                        />)}
                </Pie>
            </PieChart>
            break;
        default:
            renderChart = <div>unknown chart type</div>
    }

    return <div ref={chartHolder} className={styles.chartHolder}
        style={
            {
                height: chartParams.chart_height || 300,
                // marginTop: chartMargins.top,
                // marginBottom: chartMargins.bottom,
                // marginLeft: chartMargins.left,
                // marginRight: chartMargins.right
            }}
    >
        {globalLoading ?
            <div style={{ height: chartParams.chart_height || 300 }} />
            : renderChart
        }
    </div>
}