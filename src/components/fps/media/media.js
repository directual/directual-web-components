import React, { useState, useEffect, useRef } from 'react'
import styles from './media.module.css'
import icon from './../../../icons/fps-video.svg'
import Input from '../dataentry/input/input';

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

    const videoHolder = useRef(null)
    const [videoHeight, setVideoHeight] = useState(300)
    const [layoutWidth, setLayoutWidth] = useState(null)

    // Calculating layout width:
    useEffect(() => {
        if (videoHolder.current && videoHolder.current.offsetWidth != layoutWidth) {
            setLayoutWidth(videoHolder.current.offsetWidth)
        }
    })

    useEffect(()=> {
        //console.log('videoHeight = ' + videoHeight)
        if (videoHolder.current) {
            const divHWidth = videoHolder.current.getBoundingClientRect().width
            setVideoHeight((divHWidth/1.78).toFixed(0))
        }
    }, [layoutWidth])

    useEffect(() => {
        const resizeListener = () => {
            if (videoHolder.current && videoHolder.current.offsetWidth !== layoutWidth) {
                setLayoutWidth(videoHolder.current.offsetWidth);
            }
        }
        window.addEventListener("resize", resizeListener);
        return () => { window.removeEventListener('resize', resizeListener); };
    }, []);

    const data = props.data || props || {}
    let videoID = data.source ? YouTubeGetID(data.source) : '';
    // console.log('--=== Video component ===--')
    // console.log(data)
    return (
        <React.Fragment>
            {props.editingOn && <Input {...props} defaultValue={data.source} />}
            {videoID ?
                <div
                    ref={videoHolder}
                    style={{
                        maxWidth: !isNaN(data.width) ? parseInt(data.width) : data.width || 400
                    }}>
                    <iframe
                        width={'100%'}
                        height={videoHeight || 300}
                        src={`https://www.youtube.com/embed/${videoID}`}
                        frameborder="0"
                        allow="accelerometer; fullscreen; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    >
                    </iframe>
                </div>
                :
                <div />}
        </React.Fragment>
    )
}
Media.settings = {
    icon: icon,
    name: 'Video',
    sysName: 'FpsVideo',
    form: [
        { name: 'Youtube link', sysName: 'source', type: 'string' },
        { name: 'Width', sysName: 'width', type: 'videoSize' },
        //{ name: 'Height', sysName: 'height', type: 'htmlSize' },
        { name: 'Apply template engine', sysName: 'withTemplate', type: 'boolean' },
        { name: 'API-endpoint', sysName: 'sl', type: 'api-endpoint' },
    ]
}