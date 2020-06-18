import React, {useState, useEffect, useRef, useCallback} from 'react'
import styles from './slider.module.css'
import Input from '../input/input'


// export default function Slider(props) {
//     return (
//         <div>slider</div>
//     )
// }



//import InputRange from 'react-input-range';

export default function Slider(props) {
    const percentToValue = x => {
        return Math.round(min+(max-min)*x/100)
    }
    const valueToPercent = x => {
        return Math.round(100*(x-min)/(max-min))
    }

    const min = props.min || 0
    const max = props.max || 100
    const step = props.step || 1
    const [left,setLeft] = useState(props.value)
    const [right,setRight] = useState(props.secondValue)
    const sliderBar = useRef(null)

    useEffect (()=>setLeft(props.value), [props.value])
    useEffect (()=>setRight(props.secondValue), [props.secondValue])

    const onMouseDownHandlerLeft = (e) => {
        function disableSelect(event) {
            event.preventDefault();
        }
        const setPosition = e => {
            let calcLeft = e.clientX;
            if (sliderBar.current) {
                let rect = sliderBar.current.getBoundingClientRect()
                calcLeft = (max-min)*(e.clientX - rect.left)/rect.width + min
                if (calcLeft > left) {calcLeft = Math.floor(calcLeft/step)*step}
                if (calcLeft < left) {calcLeft = (Math.floor(calcLeft/step)+1)*step}
                if (calcLeft < min) {calcLeft = min}
                if (calcLeft > right) {calcLeft = right}
                if (calcLeft > max) {calcLeft = max}
            }
            setLeft(calcLeft);
        }
        window.addEventListener("mousemove", setPosition);
        window.addEventListener('selectstart', disableSelect);
        window.addEventListener("mouseup", e => {
            window.removeEventListener("mousemove", setPosition)
            window.removeEventListener('selectstart', disableSelect);
        })  
    }

    const onTouchDownHandlerLeft = (e) => {
        function disableSelect(event) {
            event.preventDefault();
        }
        const setPosition = e => {
            let calcLeft = e.touches[0].clientX;
            if (sliderBar.current) {
                let rect = sliderBar.current.getBoundingClientRect()
                calcLeft = (max-min)*(e.touches[0].clientX - rect.left)/rect.width + min
                if (calcLeft > left) {calcLeft = Math.floor(calcLeft/step)*step}
                if (calcLeft < left) {calcLeft = (Math.floor(calcLeft/step)+1)*step}
                if (calcLeft < min) {calcLeft = min}
                if (calcLeft > right) {calcLeft = right}
                if (calcLeft > max) {calcLeft = max}
            }
            setLeft(calcLeft);
        }
        window.addEventListener("touchmove", setPosition);
        window.addEventListener('selectstart', disableSelect);
        window.addEventListener("touchend", e => {
            window.removeEventListener("touchmove", setPosition)
            window.removeEventListener('selectstart', disableSelect);
        })  
    }

    const onMouseDownHandlerRight = (e) => {
        function disableSelect(event) {
            event.preventDefault();
        }
        const setPosition = e => {
            let calcRight = e.clientX;
            if (sliderBar.current) {
                let rect = sliderBar.current.getBoundingClientRect()
                calcRight = (max-min)*(e.clientX - rect.left)/rect.width + min
                if (calcRight > left) {calcRight = Math.floor(calcRight/step)*step}
                if (calcRight < left) {calcRight = (Math.floor(calcRight/step)+1)*step}
                if (calcRight < left) {calcRight = left}
                if (calcRight > max) {calcRight = max}
                if (calcRight < min) {calcRight = min}
            }
            setRight(calcRight);
        }
        //alert('touch')
        window.addEventListener("mousemove", setPosition);
        window.addEventListener('selectstart', disableSelect);
        window.addEventListener("mouseup", e => {
            window.removeEventListener("mousemove", setPosition)
            window.removeEventListener('selectstart', disableSelect);
        }) 
    }

    const onTouchDownHandlerRight = (e) => {
        function disableSelect(event) {
            event.preventDefault();
        }
        const setPosition = e => {
            let calcRight = e.touches[0].clientX;
            if (sliderBar.current) {
                let rect = sliderBar.current.getBoundingClientRect()
                calcRight = (max-min)*(e.touches[0].clientX - rect.left)/rect.width + min
                if (calcRight > left) {calcRight = Math.floor(calcRight/step)*step}
                if (calcRight < left) {calcRight = (Math.floor(calcRight/step)+1)*step}
                if (calcRight < left) {calcRight = left}
                if (calcRight > max) {calcRight = max}
                if (calcRight < min) {calcRight = min}
            }
            setRight(calcRight);
        }

        window.addEventListener("touchmove", setPosition);
        window.addEventListener('selectstart', disableSelect);
        window.addEventListener("touchend", e => {
            window.removeEventListener("touchmove", setPosition)
            window.removeEventListener('selectstart', disableSelect);
        }) 
    }

    const onMouseUpHandler = (e) => {
        window.removeEventListener("mousemove", () => {})   
    }

    return (
        <React.Fragment>
            {/* min: {min}<br />
            max: {max}<br />
            left: {left}, {valueToPercent(left)}%<br />
            right: {right}, {valueToPercent(right)}%<br /> */}

        <div className={styles.slider_wrapper} ref={sliderBar}>
            <div className={styles.line}>
                <div 
                    className={`${styles.leftKnob} ${styles.knob}`}
                    onTouchStart={onTouchDownHandlerLeft}
                    onMouseDown={onMouseDownHandlerLeft}
                    style={{
                        left:`${valueToPercent(left)}%`
                    }}>
                        <div className={styles.value}>{left}{props.unitName}</div>
                    </div>
                
                {props.secondValue ?
                <div className={styles.fill} 
                    style={{
                            left:`${valueToPercent(left)}%`,
                            right:`${100 - valueToPercent(right)}%`
                        }}>

                </div> : 
                <div 
                    className={styles.fill} 
                    style={{
                            right:`${100-valueToPercent(left)}%`,
                            left: 0
                        }}>

            </div>
                }
                {props.secondValue &&
                <div className={`${styles.rightKnob} ${styles.knob}`}
                    onMouseDown={onMouseDownHandlerRight}
                    onTouchStart={onTouchDownHandlerRight}
                    style={{
                        right:`${100-valueToPercent(right)}%`
                    }}>
                        <div className={styles.value}>{right}{props.unitName}</div>
                    </div>}
            </div>
        </div>
        </React.Fragment>
    )
}