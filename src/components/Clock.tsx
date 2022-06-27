import React from "react";
import AnalogClock from "./AnalogClock";
import DigitClock from "./DigitClock";


export default function Clock(props: { time: Time, timeZones: TimeZones, onChange: (zoneIndex: number) => void }) {
    const { time, timeZones, onChange } = props;
    return (
        <div>
            <AnalogClock time={time} />
            <DigitClock time={time} />
            <select onChange={(event) => onChange(timeZones.findIndex((zone)=>event.target.value === zone.name))}>
                {timeZones.map(zone => <option>{zone.name}</option>)}
            </select>
        </div>
    )
}