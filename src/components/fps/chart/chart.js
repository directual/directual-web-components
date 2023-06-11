import React, { useState, useEffect } from 'react'
//import styles from './chart.module.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function Chart(props) {

    const data = [
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

    return <div>
        <LineChart
            width={800}
            height={800}
            data={data}
        >
            {/* <CartesianGrid strokeDasharray="0 0" /> */}
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
                type="monotone"
                strokeWidth={2}
                dataKey="раз два"
                stroke="#8884d8"
                // activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="amt" stroke="#82ca9d" strokeWidth={2} />
        </LineChart>
    </div>
}