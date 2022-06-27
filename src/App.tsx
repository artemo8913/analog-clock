import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import Clock from './components/Clock';
import { addClock, changeClockTimeZone, setTimeZones } from './features/clockSlice';
import { RootState } from './app/store';

function convertTimeForClock(currentTime: Date, timeZone: string) {
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

export default function App() {
  const [date, setDate] = React.useState(new Date());
  const dispatch = useDispatch();
  const clocks = useSelector((store: RootState) => store.clock.displayedClocks);
  const timeZones = useSelector((store: RootState) => store.clock.timeZones);
  React.useEffect(() => {
    if(timeZones) return;
    (async () => {
      const response = await fetch('./timezones.json');
      const result: TimeZones = await response.json();
      dispatch(setTimeZones(result));
      dispatch(addClock([{ timeZoneIdx: 0 }, { timeZoneIdx: 0 }]));
    })()
  }, []);
  setTimeout(() => setDate(new Date()), 1000);

  return (
      <div className="App">
        {timeZones && clocks.map((clock, clockIdx) =>
          <Clock
            time={convertTimeForClock(date, timeZones[clock.timeZoneIdx].timezone)}
            onChange={(timeZoneIdx) => dispatch(changeClockTimeZone({ clockIdx, timeZoneIdx }))}
            timeZones={timeZones}
          />)}
      </div>
  );
}
