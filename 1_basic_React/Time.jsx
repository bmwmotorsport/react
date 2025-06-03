import { useState, useEffect } from "react";
import "./Time_zone.css";

function Time_zone() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="simple-clock">
      <h2>Current Time</h2>
      <p className="clock-time" key={dateTime.toLocaleTimeString()}>
        {dateTime.toLocaleTimeString()}
      </p>
    </div>
  );
}

export default Time_zone;
