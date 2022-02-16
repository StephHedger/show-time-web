import "./App.css";
import React, { useEffect, useState } from "react";
import Clock from "./components/Clock";
import showtimesData from "./data/Showtimes.json";

const App = () => {
  const calculateTimeLeft = () => {
    const d = new Date();
    // console.log(d);
    const currentTime =
      d.getDay() * 24 +
      d.getHours() +
      d.getMinutes() / 60 +
      d.getSeconds() / 3600;

    const difference =
      showtimesData.filter((o) => o.order >= currentTime)[0].order -
      currentTime;

    const timeLeft = {
      hours: Math.floor(difference),
      minutes: Math.floor((difference - Math.floor(difference)) * 60),
      seconds: Math.round((difference * 60 - Math.floor(difference * 60)) * 60),
      difference,
    };

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div
      className="App"
      style={{ paddingTop: 350, paddingRight: 10, paddingLeft: 10 }}
    >
      <Clock timeLeft={timeLeft} />
    </div>
  );
};

export default App;
