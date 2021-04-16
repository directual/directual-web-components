import React, { useState, useEffect } from 'react'
import styles from './Tags.module.css'

export function Tags(props) {

    const tagList = props.tags ? props.tags.data : []
    return (
        <React.Fragment>
            <ul 
                style={props.style}
                className={styles.tagList}>
                {tagList.map(tag => <Tag 
                    tag={tag} 
                    maxWidth={props.tags && props.tags.maxWidth}
                    key={tag.id} 
                    onDelete={id => { tag.deletable && props.onDelete && props.onDelete(id) } }
                    onClick={id => { tag.clickable && props.onClick && props.onClick(id) } }/>)}
            </ul>
            {/* <pre className='dd-debug'>{JSON.stringify(props.tags.data, 0, 1)}</pre> */}
        </React.Fragment>
    )
}

function Tag({ tag, onDelete, maxWidth, onClick }) {
    return (
        <div 
            onClick={() => onClick(tag.id)}
            className={`${styles.tag} ${tag.clickable ? styles.clickable : ''}`} style={{maxWidth: maxWidth || 'none'}}>
            <span className={styles.text}>{tag.text || tag.id}</span>
            {tag.deletable && <span onClick={e => { e.stopPropagation(); onDelete(tag.id) }} className={`icon icon-close small ${styles.delete}`} />}
        </div>
    )
}