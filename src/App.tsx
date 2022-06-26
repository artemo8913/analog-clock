import React from 'react';
import './App.scss';
import Clock from './components/Clock';

export default function App() {
  const [date, setDate] = React.useState(new Date());
  const [timeZones, setTimeZones] = React.useState(undefined);
  React.useEffect(() => {
    fetch('./timezones.json')
      .then(response => {
        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }
        return response.json();
      })
      .then(json => {
        setTimeZones(json);
        console.log(timeZones);
      });
  }, []);
  setTimeout(() => setDate(new Date()), 1000);
  return (
    <div className="App">
      <Clock date={date} timeZone={'+7'} />
    </div>
  );
}
