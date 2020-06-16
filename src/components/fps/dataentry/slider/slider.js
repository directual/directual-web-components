import React, {useState, useEffect, useRef} from 'react'
import styles from './slider.module.css'
//import InputRange from 'react-input-range';

const useMousePosition = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
  
    useEffect(() => {
      const setFromEvent = e => setPosition({ x: e.clientX, y: e.clientY });
      window.addEventListener("mousemove", setFromEvent);
  
      return () => {
        window.removeEventListener("mousemove", setFromEvent);
      };
    }, []);
  
    return position;
  };

export default function Slider(props) {

    const min = props.min || 0
    const max = props.max || 100

    const [left,setLeft] = useState(props.value || 25)
    const [right,setRight] = useState(props.secondValue || 100)
    const sliderBar = useRef(null)

    const [pos,setPos] = useState(0)

    const position = useMousePosition();

    //const [value,setValue] = useState({value:{ min: 2, max: 10 }})

    const calcRangePos = (x) => {
        if (sliderBar.current) {
            let rect = sliderBar.current.getBoundingClientRect()
            console.log(rect)
        }
    }

    const onMouseDownHandler = (e) => {
        window.addEventListener("mousemove", e => {setPos(e.clientX)});
        window.addEventListener("mouseup", e => window.removeEventListener("mousemove", e => {setPos(e.clientX)}))  
    }

    const onMouseUpHandler = (e) => {
        window.removeEventListener("mousemove", () => {})   
    }

    return (
        <React.Fragment>
            {position.x}:{position.y}<br />
            pos: {pos}<br />
            min: {min}<br />
            max: {max}<br />
            left: {left}%<br />
            right: {right}%<br />
        <div className={styles.slider_wrapper} ref={sliderBar} style={{maxWidth:props.width || 'auto'}}>
            <div className={styles.line}>
                <div 
                    className={`${styles.leftKnob} ${styles.knob}`}
                    //draggable="false"
                    onMouseDown={onMouseDownHandler}
                    style={{
                        left:`${left}%`
                    }}>
                        <div className={styles.value}>{left*(max-min)/100 + min}{props.unitName}</div>
                    </div>
                
                {props.secondValue ?
                <div className={styles.fill} 
                    style={{
                            left:`${left}%`,
                            right:`${100-right}%`
                        }}>

                </div> : 
                <div className={styles.fill} 
                style={{
                        right:`${100-left}%`,
                        left: 0
                    }}>

            </div>
                }
                {props.secondValue &&
                <div className={`${styles.rightKnob} ${styles.knob}`}
                    
                    style={{
                        right:`${100-right}%`
                    }}>
                        <div className={styles.value}>{(100-right)*(max-min)/100 + min}{props.unitName}</div>
                    </div>}
            </div>
        </div>
        </React.Fragment>
    )
}