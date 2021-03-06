import React, { useState, useEffect } from 'react'
import styles from './media.module.css'
import icon from './../../../icons/fps-video.svg'

function YouTubeGetID(url) {
    var ID = '';
    url = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    if (url[2] !== undefined) {
        ID = url[2].split(/[^0-9a-z_\-]/i);
        ID = ID[0];
    }
    else {
        ID = url;
    }
    return ID;
}

export default function Media(props) {
    let videoID = props.source ? YouTubeGetID(props.source) : '';
    console.log('--=== Video component ===--')
    console.log(props)
    return (
        <React.Fragment>
            {videoID ?
                <div style={{
                    maxWidth: parseInt(props.width) || 350
                }}>
                    <iframe
                        width='100%'
                        height={props.height || '315'}
                        src={`https://www.youtube.com/embed/${videoID}`}
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
                :
                <div>Can't parse youtube url</div>}
        </React.Fragment>
    )
}
Media.settings = {
    icon: icon,
    name: 'Video',
    sysName: 'FpsVideo',
    form: [
        { name: 'Youtube link', sysName: 'source', type: 'string' },
        { name: 'Width', sysName: 'width', type: 'number positive', unitName: 'px' },
        { name: 'Height', sysName: 'height', type: 'number positive', unitName: 'px' },
    ]
}