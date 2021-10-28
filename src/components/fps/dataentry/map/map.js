import React, { useState, useEffect } from 'react'
import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl';
//import 'mapbox-gl/dist/mapbox-gl.css';
import './map.module.css'

export default function Map({
    lng, // longitude
    lat, // latitude
    height,
    width,
    zoom, // zoom 0-100
    mapStyle, // map style
    maptoken, // Mapbox token
    hideNav, // hide navigation controls 
}) {
    const defaultMaptoken = "pk.eyJ1IjoiZGlyZWN0dWFsIiwiYSI6ImNrdmJncTl0eTBkcWIyc3BuYjlpYXp2cnkifQ.mVDgIP-E8tA2FlBttPdi4A"
    const navStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        padding: '10px'
    };

    const [viewport, setViewport] = useState({
        latitude: lat || 37.786868,
        longitude: lng || -122.252865,
        zoom: zoom || 8,
        width: width || '100%',
        height: height || '300px',
        bearing: 0,
        pitch: 0
    })

    const defaultStyle = 'mapbox://styles/mapbox/dark-v10' //'mapbox://styles/mapbox/streets-v11'

    return <ReactMapGL
        {...viewport}
        mapStyle={defaultStyle}
        mapboxApiAccessToken={maptoken || defaultMaptoken}
        onViewportChange={setViewport}
    >
        {!hideNav && <div className="nav" style={navStyle}>
            <NavigationControl />
        </div>}
    </ReactMapGL>
}