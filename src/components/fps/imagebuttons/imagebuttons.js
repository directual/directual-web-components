import React, {useState, useEffect} from 'react'
import styles from './imagebuttons.module.css'

export function ImageButtons(props) {
    return (
    <React.Fragment>
        {props.options.length > 0 &&
        <ul className={styles.imageList}>
            {props.options.map(option=>
                <li 
                    key={option.key}
                    onClick={() => props.onClick ? props.onClick(option.key) : undefined}
                    style={
                    {
                        backgroundColor: option.color,
                        height: props.size || 50,
                        width: props.size || 50,
                        borderRadius: props.borderRadius || 10,
                        marginRight: props.margin || 6,
                        marginBottom: props.margin || 6,
                    }}>
                        <div className={styles.img}>
                            <img src={option.image} alt={option.key}/>
                        </div>
                </li>
            )}
        </ul>
        }
    </React.Fragment>)
}