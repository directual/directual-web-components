import React, {useState} from 'react'
import styles from './codesnippet.module.css'

export default function CodeSnippet(props) {
    const [showCode, setShowCode] = useState(false)
    return (
        <React.Fragment>
            {!showCode && 
                <a className={`${styles.showhide} icon icon-codeXML`} onClick={() => setShowCode(!showCode)}>Show code</a>}
            {showCode && 
                <a className={`${styles.showhide} icon icon-codeXML`} onClick={() => setShowCode(!showCode)}>Hide code</a>}
            <pre className={`${styles.code} ${showCode && styles.show}`}><code>{props.code}</code></pre>
        </React.Fragment>
    )
}