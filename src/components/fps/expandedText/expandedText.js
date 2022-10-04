import React, { useState } from 'react'
import styles from './expandedText.module.css'

export default function ExpandedText(props) {
    const [expanded, setExpanded] = useState(false)
    const maxTextLength = props.textLength || 300;
    const fullTxt = props.children.toString() || ''

    return (
        <div className={`${styles.expandedText} ${props.className}`}>
            {maxTextLength < fullTxt.length ?
                <React.Fragment>
                    {!expanded &&
                        <React.Fragment>
                            {fullTxt.slice(0, maxTextLength)}...
                        </React.Fragment>
                    }
                    {expanded &&
                        <React.Fragment>
                            {fullTxt}
                        </React.Fragment>
                    }

                    {expanded ?
                        <a className={`icon inline icon-up ${styles.expandButton}`}
                            onClick={e => {
                                e.stopPropagation();
                                setExpanded(!expanded)
                            }
                            }>Hide</a>
                        :
                        <a className={`icon inline icon-down ${styles.expandButton}`}
                            onClick={e => {
                                e.stopPropagation();
                                setExpanded(!expanded)
                            }
                            }>Expand</a>}
                </React.Fragment> :
                <React.Fragment>
                    {fullTxt}
                </React.Fragment>}
        </div>
    )
}