import React, {useState, useEffect} from 'react'
import styles from './input.module.css'

export default function Input(props) {

    return (
     <input type="text" value={props.value} placeholder={props.placeholder}/>   
    )
}