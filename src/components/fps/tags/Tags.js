import React, { useState, useEffect } from 'react'
import styles from './Tags.module.css'

export function Tags(props) {

    const tagList = props.tags ? props.tags.data : []
    const addButton = props.tags ? props.tags.addButton : false
    return (
        <React.Fragment>
            <div 
                style={props.style}
                className={styles.tagList}>
                {tagList.map(tag => <Tag 
                    tag={tag} 
                    maxWidth={props.tags && props.tags.maxWidth}
                    key={tag.id} 
                    onDelete={id => { tag.deletable && props.onDelete && props.onDelete(id) } }
                    onClick={id => { tag.clickable && props.onClick && props.onClick(id) } }/>)}
                {addButton && 
                <div 
                    onClick={props.onAdd}
                    className={`${styles.tag} ${styles.clickable} icon icon-plus small ${styles.addButton}`}>
                    {props.tags.addText || 'Add'}</div>}
            </div>
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