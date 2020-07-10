import React, { useState } from 'react'
import styles from './codesnippet.module.css'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightBlue } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

export default function CodeSnippet(props) {
    const [showCode, setShowCode] = useState(props.expanded || false)
    return (
        <div className={styles.codepiece}>
            {!showCode &&
                <a className={`${styles.showhide} icon icon-codeXML`} onClick={() => setShowCode(!showCode)}>Show code</a>}
            {showCode &&
                <a className={`${styles.showhide} icon icon-codeXML`} onClick={() => setShowCode(!showCode)}>Hide code</a>}
            {/* <pre className={`${styles.code} ${showCode && styles.show}`}><code>{props.code}</code></pre> */}
            {showCode &&
            <SyntaxHighlighter language="javascript" style={tomorrowNightBlue}>
                {props.code}
            </SyntaxHighlighter>}
        </div>
    )
}
