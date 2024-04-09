import React from 'react'
import _ from 'lodash'
import '../theme/theme.module.css'

import styles from './hint.module.css'
import PropTypes from 'prop-types';

// HINT

export default function Hint(props) {


    const marginTop = (_.get(props,'margin.top') || _.get(props,'margin.top') === 0) ? _.get(props,'margin.top') : 24 
    const marginBottom = (_.get(props,'margin.bottom') || _.get(props,'margin.bottom') === 0) ? _.get(props,'margin.bottom') : 24 
    console.log(props)

    return (
        <blockquote
            style={
                {
                    marginTop: marginTop,
                    marginBottom: marginBottom
                }
            }
            className={`${styles.hint} FPS_HINT ${props.ok && styles.ok} ${props.error && styles.error}`}>
            {props.title && <p className={`${styles.title} FPS_HINT_TITLE`}>{props.title}</p>}
            {props.closable && props.onClose && <div onClick={props.onClose} className={`icon icon-close ${styles.closeHint}`} />}
            <p>{props.children}</p>
        </blockquote>
    )
}

Hint.propTypes = {
    title: PropTypes.bool,
    children: PropTypes.element,
    error: PropTypes.bool,
    ok: PropTypes.bool,
    closable: PropTypes.bool,
    onClose: PropTypes.func
};

Hint.defaultProps = {
    title: '',
    children: null,
    error: false,
    ok: false,
    closable: false,
    onClose: null
};