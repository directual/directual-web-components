import Autoplay from 'embla-carousel-autoplay'
import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import styles from './carousel.module.css'
import Button from '../button/button'
import ActionPanel from '../actionspanel/actionspanel'

export default function Carousel(props) {

    const { options, slides, height } = props

    // const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])
    const [emblaRef, emblaApi] = useEmblaCarousel(options)


    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <div className={`${styles.embla} embla`} style={{ height }}>
            <div className={`${styles.embla__viewport} embla__viewport`} ref={emblaRef} style={{ height }}>
                <div className={`${styles.embla__container} embla__container`}>
                    {(slides || []).map(slide => <Slide height={height} key={slide.id} slide={slide} />)}
                </div>
            </div>
            <div className={`${styles.embla__buttons} embla__buttons`}>
                <Button icon='back' transparent={true} small onClick={scrollPrev} />
                <Button icon='forward' transparent={true} onClick={scrollNext} />
            </div>
        </div>
    )
}

function Slide({ slide, height }) {
    return <div style={{ height }} className={`${styles.embla__slide} embla__slide`}>{slide.content}</div>
}
