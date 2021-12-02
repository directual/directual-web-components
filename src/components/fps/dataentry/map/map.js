import React, { useState, useEffect } from 'react'
import ReactMapGL, { Marker, NavigationControl, Popup } from 'react-map-gl';
//import 'mapbox-gl/dist/mapbox-gl.css';
import styles from './map.module.css'
import Input from '../input/input'
import pointer from './../../../../icons/POINTER.svg'
import ExpandedText from '../../expandedText/expandedText'
import _ from 'lodash'
import Button from '../../button/button'
import ActionPanel from '../../actionspanel/actionspanel'

import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp.js';
import MapboxGLWorker from 'mapbox-gl/dist/mapbox-gl-csp-worker.js';

mapboxgl.workerClass = MapboxGLWorker;

export default function Map({
    lng, // longitude
    lat, // latitude
    height,
    width,
    edit,
    label,
    oneMarker,
    defaultValue,
    onChange,
    jsonView,
    zoom, // zoom 0-100
    mapStyle, // map style
    maptoken, // Mapbox token
    hideNav, // hide navigation controls
}) {
    const defaultMaptoken = ""
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

    const parseJson = json => {
        let parsedJson = {}
        if (typeof json == 'object') return json
        try {
            parsedJson = JSON.parse(json)
        }
        catch (e) {
            console.log(json);
            console.log(e);
        }
        return parsedJson
    }

    const stringifyJson = json => {
        if (typeof json == 'string') return json
        return JSON.stringify(json)
    }

    const defaultStyle = 'mapbox://styles/mapbox/streets-v11'

    const [json, setJson] = useState(false)
    const [value, setValue] = useState((defaultValue && defaultValue.data) || [])
    const [showPopup, setShowPopup] = useState(null);
    const [initialPositioning, setInitialPositioning] = useState(false)
    const [addMarker, setAddMarker] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const [editValue, setEditValue] = useState({})

    useEffect(() => {
        if (defaultValue && defaultValue.data && JSON.stringify(value) != JSON.stringify(defaultValue.data)) {
            setValue(defaultValue.data)
            if (!initialPositioning && defaultValue.data.length) {
                setInitialPositioning(true)
                positionMap(defaultValue.data[0].longitude, defaultValue.data[0].latitude)
            }
        }
    }, [defaultValue])

    useEffect(() => {
        if (!initialPositioning && value && value.length) {
            setInitialPositioning(true)
            positionMap(value[0].longitude, value[0].latitude)
        }
    }, [])

    const save = val => {
        if (!edit) return null
        setValue(val)
        onChange && onChange({ data: val })
    }

    const positionMap = (lng, lat) => {
        console.log('positionMap')
        const viewportCopy = { ...viewport }
        viewportCopy.latitude = lat
        viewportCopy.longitude = lng
        setViewport(viewportCopy)
    }

    // console.log('map value')
    // console.log(value)

    const newMarker = (lngLat) => {
        setAddMarker(false)
        if (showPopup) return null
        const marker = {
            id: new Date().getTime(),
            latitude: lngLat[1],
            longitude: lngLat[0],
            title: 'New Marker',
        }
        const saveData = [...value]
        saveData.push(marker)
        setShowPopup(null)
        save(saveData)
    }

    const deleteMarker = (id) => {
        const saveData = [...value]
        const index = saveData.indexOf(_.find(saveData, { id }))
        saveData.splice(index, 1)
        setTimeout(() => setShowPopup(null), 300)
        save(saveData)
    }

    const editMarker = (id, newData) => {
        const saveData = [...value]
        const marker = _.find(saveData, { id })
        const newMarker = { ...marker, ...newData }
        const index = saveData.indexOf(marker)
        saveData.splice(index, 1)
        saveData.splice(index, 0, newMarker)
        save(saveData)
    }

    // press 'Esc' for closing a popup:
    const handleUserKeyPress = (e) => {
        if (e.key == 'Escape') { setAddMarker(false); setIsEdit(false) }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleUserKeyPress);
        return () => { window.removeEventListener('keydown', handleUserKeyPress); };
    }, [handleUserKeyPress]);
    //----------------------

    useEffect(()=> {
        if (isEdit) {
            setEditValue(showPopup)
        }
    }, [isEdit])

    console.log('map')
    console.log(value)
    console.log(defaultValue)

    return <div className={styles.mapWrapper} style={{ maxWidth: width || 'auto' }}>
        {label && <div className={styles.label}>{label}</div>}
        {jsonView && !json && <a onClick={() => setJson(true)} className={styles.jsonView}>Show as JSON</a>}
        {jsonView && json && <a onClick={() => setJson(false)} className={styles.jsonView}>Show as Map</a>}
        {json ?
            <Input
                rows='auto'
                type='json'
                defaultValue={value ? stringifyJson(value) : null}
                onChange={val => save(parseJson(val))}
            />
            :
            <ReactMapGL

                {...viewport}
                mapStyle={mapStyle || defaultStyle}
                mapboxApiAccessToken={maptoken || defaultMaptoken}
                onViewportChange={setViewport}
                onClick={e => {
                    //setShowPopup(null)
                    if (!addMarker) return null
                    newMarker(e.lngLat)
                }}
            >
                {value && value.length ? value.map(marker => (
                    <Marker
                        key={marker.id}
                        draggable={edit}
                        onClick={() => setShowPopup(marker)}
                        onDragEnd={e => {
                            editMarker(marker.id, {
                                latitude: e.lngLat[1],
                                longitude: e.lngLat[0],
                            })
                        }}
                        latitude={marker.latitude}
                        longitude={marker.longitude}>
                        <div className={styles.pointer} style={{ backgroundImage: `url(${pointer})` }} />
                    </Marker>
                )) : null }
                {showPopup && <Popup
                    latitude={showPopup.latitude}
                    longitude={showPopup.longitude}
                    closeButton={true}
                    className={styles.popup}
                    closeOnClick={true}
                    onClose={() => { setShowPopup(null); setIsEdit(false)}}
                    anchor="bottom" >
                    {isEdit ?
                        <div className={styles.editWrapper}>
                            <Input defaultValue={editValue.title} onChange={value =>{
                                const saveData = {...editValue}
                                saveData.title = value
                                setEditValue(saveData)
                            }} placeholder='Title' equalMargin={6}/>
                            <Input defaultValue={editValue.image} onChange={value =>{
                                const saveData = {...editValue}
                                saveData.image = value
                                setEditValue(saveData)
                            }} placeholder='Image' type='file' equalMargin={6}/>
                            <Input defaultValue={editValue.text} onChange={value =>{
                                const saveData = {...editValue}
                                saveData.text = value
                                setEditValue(saveData)
                            }} placeholder='Description' type='textarea' rows='auto' equalMargin={6}/>
                            <Input defaultValue={editValue.link} onChange={value =>{
                                const saveData = {...editValue}
                                saveData.link = value
                                setEditValue(saveData)
                            }} placeholder='Link' equalMargin={6}/>
                            <ActionPanel margin={{top:1,bottom:-10}}>
                                <Button small onClick={()=> {
                                    setIsEdit(false)
                                    editMarker(editValue.id, editValue)
                                    setShowPopup(editValue)
                                }} height={26} accent icon='done small'>Save</Button>
                                <Button small onClick={()=> {
                                    setIsEdit(false)
                                    setEditValue({})
                                }} height={26} danger icon='ban small'>Cancel</Button>
                            </ActionPanel>
                        </div>
                        :
                        <div>
                            <strong>{showPopup.title}</strong>
                            {showPopup.image && <img src={showPopup.image} />}
                            {!showPopup.text && <div style={{height:18}}/>}
                            <ExpandedText textLength={150}>{showPopup.text}</ExpandedText>
                            {showPopup.link && <a target="_blank" href={showPopup.link}>{showPopup.link}</a>}

                            {edit && <a onClick={e => {
                                e.stopPropagation()
                                deleteMarker(showPopup.id)
                            }} className={`icon icon-delete ${styles.deleteMarker}`} />}

                            {edit && <a onClick={e => {
                                e.stopPropagation()
                                setIsEdit(true)
                            }} className={`icon icon-edit ${styles.editMarker}`} />}
                        </div>}
                </Popup>}
                {addMarker && <div className={styles.overlay} />}
                {!addMarker && (!oneMarker || !value || value.length == 0) && edit && <Button
                    icon='plus'
                    className={styles.addPoint}
                    onClick={e => {
                        setTimeout(() => setAddMarker(true), 300)
                    }}
                />}
                {addMarker && <Button
                    icon='ban'
                    className={styles.addPoint}
                    onClick={e => {
                        setAddMarker(false)
                    }}
                />}
                {!hideNav && <div style={navStyle}>
                    <NavigationControl />
                </div>}
            </ReactMapGL>}
    </div>
}
