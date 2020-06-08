import React from 'react'
import styles from './componentdetails.module.css'

export default function ComponentDetails(props) {
    return (
        <React.Fragment>
            <h1>H1 Header</h1>
            <h2>H2 Header</h2>
            <h3>H2 Header</h3>
            <p>Paragraph with <code>piece of code</code></p>
            <p>Paragraph</p>
            <ul>
                <li>List item 1</li>
                <li>List item 2</li>
                <li>List item 3</li>
            </ul>
        </React.Fragment>
    )
}
