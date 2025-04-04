import Autoplay from 'embla-carousel-autoplay'
import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import styles from './carousel.module.css'
import Button from '../button/button'
import ActionPanel from '../actionspanel/actionspanel'
import _ from 'lodash'

export default function Carousel(props) {

    const { options, slides, height, showDots, showNavButtons, dotsOnSlide } = props

    // const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)


    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <div className={`${styles.embla} embla`} //style={{ height }}
        >
            <div className={`${styles.embla__viewport} embla__viewport`} ref={emblaRef} style={{ height }}>
                <div className={`${styles.embla__container} embla__container`}>
                    {(slides || []).map(slide => <Slide height={height} key={slide.id} slide={slide} />)}
                </div>
            </div>
            {showNavButtons && <div className={`${styles.embla__buttons} embla__buttons`}>
                <Button icon='back' transparent={true} small onClick={scrollPrev} />
                <Button icon='forward' transparent={true} onClick={scrollNext} />
            </div>}
            {showDots && <div className={`${styles.embla__dots} embla__dots`}
                style={ dotsOnSlide ? {
                    marginTop: -60
                } : {}}
            >
                {scrollSnaps.map((_, index) => (
                    <DotButton
                        key={index}
                        onClick={() => onDotButtonClick(index)}
                        className={`${styles.embla__dot} embla__dot ${index === selectedIndex ? styles["embla__dot--selected"] : ''}`}
                    />
                ))}
            </div>}
        </div>
    )
}

function Slide({ slide, height }) {
    return <div style={{ height }} className={`${styles.embla__slide} embla__slide`}>{slide.content}</div>
}

function useDotButton(emblaApi) {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState([])

    const onDotButtonClick = useCallback(
        (index) => {
            if (!emblaApi) return
            emblaApi.scrollTo(index)
        },
        [emblaApi]
    )

    const onInit = useCallback((emblaApi) => {
        setScrollSnaps(emblaApi.scrollSnapList())
    }, [])

    const onSelect = useCallback((emblaApi) => {
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        onInit(emblaApi)
        onSelect(emblaApi)
        emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect)
    }, [emblaApi, onInit, onSelect])

    return {
        selectedIndex,
        scrollSnaps,
        onDotButtonClick
    }
}

function DotButton(props) {
    const { children, ...restProps } = props

    return (
        <button type="button" {...restProps}>
            {children}
        </button>
    )
}
