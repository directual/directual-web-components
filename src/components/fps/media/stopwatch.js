import React, { useState, useEffect } from 'react'
import styles from './stopwatch.module.css'
import Button from '../button/button'
import ActionPanel from '../actionspanel/actionspanel'
import Input from '../dataentry/input/input'
import icon from './../../../icons/fps-clock.svg'

export default function Stopwatch(props) {

    const data = props.data || props || {}

    const [startMin, setStartMin] = useState(data.min || 0)
    const [startSec, setStartSec] = useState(data.sec || 0)
    const [second, setSecond] = useState(addZero(startSec));
    const [minute, setMinute] = useState(addZero(startMin));
    const [isActive, setIsActive] = useState(false);
    const [counter, setCounter] = useState(0);

    const isReverse = data.direction == 'reverse'

    useEffect(() => {
        let intervalId;
        if (isActive) {
            intervalId = setInterval(() => {
                const startTime = 60 * startMin + startSec
                let nowTimer = isReverse ? startTime - counter : startTime + counter
                nowTimer = nowTimer < 0 ? 0 : nowTimer

                const secondCounter = nowTimer % 60
                const minuteCounter = Math.floor(nowTimer / 60);

                let computedSecond =
                    String(secondCounter).length === 1
                        ? `0${secondCounter}`
                        : secondCounter;
                let computedMinute =
                    String(minuteCounter).length === 1
                        ? `0${minuteCounter}`
                        : minuteCounter;

                setSecond(computedSecond);
                setMinute(computedMinute);

                setCounter((counter) => counter + 1);
            }, 1000);
        }

        return () => clearInterval(intervalId);
    }, [isActive, counter]);

    function addZero(value) {
        if (value == 0 || !value) { return '00' }
        if (value > 0 && value < 10) { return '0' + value }
        if (value >= 10) { return '' + value }
    }

    const [isReset, setIsReset] = useState(false)

    return <div className={styles.timerWrapper}>
        <div className={`${styles.timer} ${((60 * parseInt(minute) + parseInt(second) <= 30) && isReverse) ? styles.lastCall : ''}`}>
            {minute}:{second}
        </div>
        <ActionPanel>
            {isActive ?
                !isReset && <Button onClick={() => setIsActive(false)} icon='stop' danger>Pause</Button>
                :
                !isReset && <Button onClick={() => setIsActive(true)} icon='play' accent>Start</Button>
            }
            {!isReset && !isActive && isReverse && <Button onClick={() => setIsReset(true)} icon='refresh'>Reset timer</Button>}
            {!isReset && !isActive && !isReverse && <Button onClick={() => {
                setSecond(addZero(startSec))
                setMinute(addZero(startMin))
                setCounter(0)
            }} icon='refresh'>Reset timer</Button>}
            {isReset && <div>
                <Input type='number' positive label='Min' defaultValue={startMin} onChange={setStartMin} equalMargin={12} />
                <Input type='number' positive label='Sec' defaultValue={startSec} onChange={setStartSec} equalMargin={12} />
                <Button onClick={e => {
                    setSecond(addZero(startSec))
                    setMinute(addZero(startMin))
                    setCounter(0)
                    setIsReset(false)
                }}>Set new timer</Button>
            </div>}
        </ActionPanel>
    </div>
}
Stopwatch.settings = {
    icon: icon,
    name: 'Timer',
    sysName: 'FpsTimer',
    form: [
        { name: 'Direction', sysName: 'direction', type: 'timer_direction' },
        { name: 'Start from, minutes', sysName: 'min', type: 'number positive' },
        { name: 'Start from, seconds', sysName: 'sec', type: 'number positive' },
    ]
}