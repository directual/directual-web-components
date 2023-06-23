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
                    tags={props.tags}
                    maxWidth={props.tags && props.tags.maxWidth}
                    onResetSelect={id => { props.onResetSelect && props.onResetSelect(id) }}
                    key={tag.id}
                    selected = {_.get(props,`selectedTags[${tag.id}]`)}
                    onDelete={id => { !props.disabled && tag.deletable && props.onDelete && props.onDelete(id) }}
                    onClick={id => { !props.disabled && tag.clickable && props.onClick && props.onClick(id) }}
                />)}
                {addButton &&
                    <div
                        onClick={!props.disabled && props.onAdd}
                        className={`${styles.tag} ${props.disabled ? styles.disabled : styles.clickable} icon icon-plus small ${styles.addButton}`}>
                        {props.tags.addText || 'Add'}</div>}
            </div>
            {/* <pre className='dd-debug'>{JSON.stringify(props.tags.data, 0, 1)}</pre> */}
        </React.Fragment>
    )
}

function Tag({ tag, onDelete, maxWidth, onClick, onResetSelect, tags, selected }) {
    return (
        <a
            href={tag.clickLink}
            style={{ 
                backgroundColor: (selected && tags.selectedColor) || tag.color || tags.color || undefined, 
                maxWidth: maxWidth || 'none'
            }}
            onClick={e => { e.preventDefault(); onClick(tag.id) }}
            className={`${styles.tag} ${tag.clickable ? styles.clickable : ''}`}>
            {tags.selectable && selected && <span 
                 style={{ 
                    color: (selected && tags.selectedTextColor) || tag.textColor || tags.textColor || undefined, 
                }}
                onClick={e => { e.preventDefault(); e.stopPropagation(); onResetSelect(tag.id) }} className={`icon icon-close small ${styles.seleced}`} />}
            <span 
                className={styles.text}
                style={{ 
                    color: (selected && tags.selectedTextColor) || tag.textColor || tags.textColor || undefined, 
                }}
            >{tag.text || tag.id}</span>
            {tag.deletable && <span
                 style={{ 
                    color: (selected && tags.selectedTextColor) || tag.textColor || tags.textColor || undefined, 
                }}
            onClick={e => { e.preventDefault(); e.stopPropagation(); onDelete(tag.id) }} className={`icon icon-close small ${styles.delete}`} />}
        </a>
    )
}