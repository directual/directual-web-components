import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types';
import styles from './cards2.module.css'
import icon from './../../../../icons/fps-cards.svg'
import _ from 'lodash'

function FpsCards2({ auth, data, onEvent, id, currentBP, locale, handleRoute }) {

    currentBP = currentBP || 'desktop' // костылек, чтобы хоть какой-то BP передавался
    //currentBP = 'tablet'
    //currentBP = 'mobile'

    const title = _.get(data, "params.cards_title")
    const showCounter = _.get(data,"params.general.showObjCount")
    const cardsLayout = _.get(data, "params.cards_layout")
    const objects = _.get(data, "__data__.sl", [])

    // grid settings
    const breakPoints = {
        desktop: _.get(data, "params.grid_layout__desktop", 4),
        tablet: _.get(data, "params.grid_layout__tablet", 3),
        mobile: _.get(data, "params.grid_layout__mobile", 1),
    }
    const grid_layout__gap = _.get(data, "params.grid_layout__gap", 22)

    return <div className={`FPS_CARDS2 ${styles.cards2}`}>

        {(title || showCounter) && <div className={`FPS_CARDS2__HEADER ${styles.cards2_header}`}>
            {title && <h2>{title}</h2>}
            {showCounter && <div className={`FPS_CARDS2__HEADER-counter ${styles.cards2_header_counter}`}>5 items</div>}
        </div>}

        {/* CSS GRID */}
        {cardsLayout == "grid" && <div className={`FPS_CARDS2__WRAPPER 
            ${styles.cards2_wrapper} 
            ${styles.layout_grid}`}
            style={{
                gap: grid_layout__gap,
                gridTemplateColumns: _.join(_.times(breakPoints[currentBP], _.constant('1fr')), ' ')
            }}
        >
            {objects.map(object => <div className={`FPS_CARDS2__CARD ${styles.cards2_card}`}>
                <Card key={object.id} object={object} />
            </div>)}

        </div>}
    </div>
}

function Card(props) {

    const { object } = props

    return <div>
        —
    </div>
}

FpsCards2.propTypes = {
    data: PropTypes.object.isRequired,
    auth: PropTypes.object,
    locale: PropTypes.string,
    onChange: PropTypes.func,
    handleRoute: PropTypes.func
};

FpsCards2.defaultProps = {
    data: {},
    auth: {},
    locale: "ENG",
    onChange: undefined,
    handleRoute: undefined
};

FpsCards2.settings = {
    icon: icon,
    name: 'Cards view',
    sysName: 'FpsCards',
    // isLegacy: false,
    isMarketplace: true,
    form: [
        { name: 'Select API-endpoint', sysName: 'sl', type: 'api-endpoint' },
        { name: 'Page size', sysName: 'pageSize', type: 'number' },
        { name: 'Default HTTP request params', sysName: 'httpParams', type: 'httpParams' },
        { name: 'Component comment', sysName: 'comment', type: 'comment' },
    ]
}
export default FpsCards2
