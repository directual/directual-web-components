import React, { useState, useRef, } from "react";
import styles from './slider.module.css'
import { Range } from "react-range";

export default function Slider2({ 
    disabled, 
    defaultValue = { firstValue: 0, secondValue: null }, 
    onChange, 
    min = 0, 
    max = 100, 
    step = 1,
    unitName="" 
}) {
    const sliderBar = useRef(null);

    const isRange = defaultValue.secondValue &&
        defaultValue.secondValue !== null;

    const [values, setValues] = useState(
        isRange
            ? [defaultValue.firstValue, defaultValue.secondValue]
            : [defaultValue.firstValue]
    );

    const handleChange = (newValues) => {
        if (disabled) return; 
        setValues(newValues);

        if (onChange) {
            const result = {
                firstValue: newValues[0],
                secondValue: isRange ? newValues[1] : null
            };
            onChange(result);
        }
    };

    return (
        <div className={`${styles.slider_wrapper} ${disabled && styles.disabled}`} ref={sliderBar}>
            <Range
                step={step}
                min={min}
                max={max}
                values={values}
                onChange={handleChange}
                renderTrack={({ props, children }) => (
                    <div
                        {...props}
                        style={{
                            ...props.style,
                            height: "4px",
                            width: "100%",
                            backgroundColor: "var(--table-borders)",
                            borderRadius: "6px",
                            position: "relative"
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                height: "4px",
                                backgroundColor: "var(--layout-accent)",
                                borderRadius: "6px",
                                ...(values.length === 1
                                    ? {
                                        left: "0%",
                                        width: `${((values[0] - min) / (max - min)) * 100}%`
                                    }
                                    : {
                                        left: `${((values[0] - min) / (max - min)) * 100}%`,
                                        width: `${((values[1] - values[0]) / (max - min)) * 100}%`
                                    })
                            }}
                        />
                        {children}
                    </div>
                )}
                renderThumb={({ props, index }) => (
                    <div
                        {...props}
                        style={{
                            ...props.style,
                            height: "16px",
                            width: "16px",
                            backgroundColor: "var(--layout-accent)",
                            borderRadius: "24px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "none",
                            outline: "none",
                            transform: props.style.transform
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                top: "-20px",
                                fontSize: "var(--text-very-small-size)",
                                opacity: "0.4",
                                transition: "0.5s",
                                userSelect: "none",
                                whiteSpace: "nowrap"
                            }}
                        >
                            {values[index]}{unitName}
                        </div>
                    </div>
                )}
            />
        </div>
    );
};