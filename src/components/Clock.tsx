import React from "react";
import AnalogClock from "./AnalogClock";
import DigitClock from "./DigitClock";

function getTime(currentTime: Date, timeZone: string) {
    const utcTime = - currentTime.getTimezoneOffset() / 60;
    const timeZoneShift = parseInt(timeZone) || 0;
    const hourFactor = 3600 * 1000;
    const date = new Date(currentTime.getTime() + hourFactor * (timeZoneShift - utcTime));
    return {
        sec: date.getSeconds(),
        min: date.getMinutes(),
        hrs: date.getHours()
    };
}

export default function Clock(props: { date: Date, timeZone: string }) {
    const { date, timeZone } = props;
    const time = getTime(date, timeZone);
    return (
        <div>
            <AnalogClock time={time} />
            <DigitClock time={time} />
            <select>
                <option>1</option>
                <option>2</option>
            </select>
        </div>
    )
}