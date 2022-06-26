import React from "react";

export default function DigitClock(props: { time: Time }) {
    const time: Time = props.time;
    const timeStr = { sec: '', min: '', hrs: '' };
    //@ts-ignore
    for (let unit in time) time[unit] < 10 ? timeStr[unit] = `0${time[unit]}` : timeStr[unit] = time[unit]
    return (
        <div className="digit-clock">
            <span>{`${timeStr.hrs}:${timeStr.min}:${timeStr.sec}`}</span>
        </div>
    )
}