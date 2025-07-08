import React from 'react'
import styles from './skeleton.module.css'
import PropTypes from 'prop-types';

// Скелетон - заглушка пока грузится контент
export default function Skeleton(props) {
    return (
        <div 
            className={`${styles.skeleton} FPS_SKELETON`}
            style={{
                width: props.width || '100%',
                height: props.height || '20px',
                ...props.style
            }}
        >
        </div>
    )
}

Skeleton.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    style: PropTypes.object
};

Skeleton.defaultProps = {
    width: '100%',
    height: '20px',
    style: {}
}; 