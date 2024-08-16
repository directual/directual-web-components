import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import styles from './carousel.module.css'
import PropTypes from 'prop-types';
import icon from './../../../icons/fps-form2.svg'
import Carousel from './carousel'

export default function FpsCarousel(props) {

    const { data, auth, locale } = props

    const OPTIONS = { loop: true }
    const SLIDES = [
        { id: 1, content: <div>slide 1</div>},
        { id: 2, content: <div>slide 2</div>},
        { id: 3, content: <div>slide 3</div>},
    ]
    const HEIGHT = 400

    return <Carousel
        options={OPTIONS}
        slides={SLIDES}
        height={HEIGHT}
    />
}

FpsCarousel.propTypes = {
    data: PropTypes.object,
    auth: PropTypes.object,
    locale: PropTypes.string,
};

FpsCarousel.defaultProps = {
    data: {},
    auth: {},
    locale: "ENG"
};


FpsCarousel.settings = {
    icon: icon,
    name: 'Carousel',
    sysName: 'FpsCarousel',
    isLegacy: false,
    isMarketplace: true,
    // form: [
    //     { name: 'Select API-endpoint', sysName: 'sl', type: 'api-endpoint' },
    //     { name: 'Default HTTP request params', sysName: 'httpParams', type: 'httpParams' },
    //     { name: 'Component comment', sysName: 'comment', type: 'comment' },
    // ]
}