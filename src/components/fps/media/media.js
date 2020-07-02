import React, { useState, useEffect } from 'react'
import styles from './media.module.css'

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

export default function Media({ type, source, width, height }) {
    let videoID = source ? YouTubeGetID(source) : '';
    return (
        <React.Fragment>
            {type == 'video' ? <React.Fragment>
                {videoID ?
                    <div style = {{
                        maxWidth: parseInt(width) || 350
                    }}>
                        <iframe
                            width='100%'
                            height={height || '315'}
                            src={`https://www.youtube.com/embed/${videoID}`}
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </iframe>
                    </div>
                    :
                    <div>Can't parse youtube url</div>}

            </React.Fragment> :
                <div>Unknown media type</div>}
        </React.Fragment>
    )
}