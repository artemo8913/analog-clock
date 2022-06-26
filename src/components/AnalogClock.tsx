import React from 'react';

const marks: Array<React.ReactNode> = [];
for (let i = 0; i < 12; i++) {
    const rotateAngle = Math.PI / 6 * i;
    marks.push(
        <div key={i} className={`mark mark_${i}`} style={{ transform: `rotate(${rotateAngle}rad)` }}>
            <div className='mark__tip'></div>
        </div>
    );
}

export default function AnalogClock(props: { time: Time}) {
    const time = props.time;
    const arrowsDeg = {
        sec: time.sec / 60 * 360,
        min: (time.min + time.sec / 60) / 60 * 360,
        hrs: (time.hrs + time.min / 60 + time.sec / 3600) / 12 * 360
    };

    return (
        <div className='analog-clock'>
            <div className='marks'>{marks}</div>
            <div style={{ transform: `rotate(${arrowsDeg.sec}deg)` }} className='arrow arrow_sec'></div>
            <div style={{ transform: `rotate(${arrowsDeg.min}deg)` }} className='arrow arrow_min'></div>
            <div style={{ transform: `rotate(${arrowsDeg.hrs}deg)` }} className='arrow arrow_hrs'></div>
        </div>
    )
}