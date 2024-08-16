import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import styles from './carousel.module.css'
import PropTypes from 'prop-types';
import icon from './../../../icons/fps-form2.svg'
import Carousel from './carousel'
import { template } from '../templating/template'

export default function FpsCarousel(props) {

    const { data, auth, locale, handleRoute } = props

    console.log("=== CAROUSEL DATA ===")
    console.log(data)

    const OPTIONS = { loop: _.get(data, "loop") == "true" }
    const HEIGHT = _.get(data, "height")

    // console.log()

    const getSlides = () => {
        let slides = []
        if (_.get(data, "photo_source") == "first object") {
            // TODO
        } else {
            slides = _.get(data, "__data__.api", []).map(obj => {
                return {
                    id: "slide_" + Math.floor(Math.random() * 1000000000),
                    content: <PhotoSlide
                        photo={obj[_.get(data, "photo")]}
                        height={HEIGHT}
                        handleRoute={handleRoute}
                        link={template(_.get(data, "link"), obj)} />
                }
            })
        }
        return slides
    }

    return <Carousel
        options={OPTIONS}
        slides={getSlides()}
        height={HEIGHT}
    />
}

function PhotoSlide({ photo, link, height, handleRoute }) {

    const onClickLink = e => {
        if (!_.startsWith(link, 'http')) {
            e.preventDefault()
            handleRoute && handleRoute(link)(e)
        }
    }

    return <a
        onClick={onClickLink}
        href={link}
        style={{
            height: height,
            display: 'block',
            width: '100%',
            backgroundImage: `url(${photo})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
        }}
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