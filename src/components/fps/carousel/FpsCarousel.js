import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import styles from './carousel.module.css'
import PropTypes from 'prop-types';
import icon from './../../../icons/fps-form2.svg'
import Carousel from './carousel'
import { template } from '../templating/template'
import _ from 'lodash'

export default function FpsCarousel(props) {

    const { data, auth, locale, handleRoute } = props

    console.log("=== CAROUSEL DATA ===")
    console.log(data)

    const OPTIONS = { loop: _.get(data, "loop") == "true" }
    const HEIGHT = parseInt(_.get(data, "height"))
    const showDots = _.get(data, "dot_buttons") == "true"
    const showNavButtons = _.get(data, "nav_buttons") == "true"
    const dotsOnSlide = _.get(data, "dot_buttons_placement") == "on the slide"

    // console.log()

    const getSlides = () => {
        let slides = []
        if (_.get(data, "photo_source") == "first object (multiple images field)") {
            const images = _.get(data, `__data__.api[0][${_.get(data, "array_photos")}]`, [])
            slides = images.map(obj => {
                const videoExtensions = ['mov', 'mp4', 'avi', 'mkv', 'flv', 'wmv', 'webm'];
                const urlExtension = obj.split('.').pop().toLowerCase();
                const isVideo = _.includes(videoExtensions, urlExtension);
                if (isVideo) {
                    return {
                        id: "slide_" + Math.floor(Math.random() * 1000000000),
                        content: <video data-test="video" width="100%" controls loop height={HEIGHT} playsInline muted autoPlay>
                            <source src={obj} type="video/mp4"/>
                        </video>
                    }
                } else {
                    return {
                        id: "slide_" + Math.floor(Math.random() * 1000000000),
                        content: <PhotoSlide
                            photo={obj}
                            height={HEIGHT}
                            handleRoute={handleRoute}
                        />
                    }
                }
            })
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
        showNavButtons={showNavButtons}
        showDots={showDots}
        dotsOnSlide={dotsOnSlide}
    />
}

function PhotoSlide({ photo, link, height, handleRoute }) {

    const onClickLink = e => {
        if (!link) return;
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
}