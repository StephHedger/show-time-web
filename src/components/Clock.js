import React from "react";
// import styles from "../App.css";

const Clock = ({ timeLeft }) => {
  // const colours = ["#A617A5", "#4B19B0", "#1D2C99", "#196CB0", "#167E80"];

  // const timeThresholds = [
  //   { time: 2.5, colour: "#167E80" },
  //   { time: 1, colour: "#196CB0" },
  //   { time: 0.5, colour: "#1D2C99" },
  //   { time: 0.25, colour: "#4B19B0" },
  //   { time: 0.083333, colour: "#8617A5" },
  // ];

  const timeThresholds = [
    { time: 2.5, colour: "#0E4E52" },
    { time: 1, colour: "#124D82" },
    { time: 0.5, colour: "#141E6B" },
    { time: 0.25, colour: "#341282" },
    { time: 0.083333, colour: "#5E0F7A" },
  ];

  const style = {
    color: "#fff",
    backgroundColor: timeThresholds.filter(
      (o) => timeLeft.difference >= o.time
    )[0].colour,
    fontSize: 23,
    height: 23,
    padding: 15,
  };

  console.log(timeLeft);
  return (
    <div style={style}>
      {(timeLeft.hours === 0 ? "" : timeLeft.hours + ":") +
        (timeLeft.minutes < 10 ? "0" + timeLeft.minutes : timeLeft.minutes) +
        ":" +
        (timeLeft.seconds < 10 ? "0" + timeLeft.seconds : timeLeft.seconds)}
    </div>
  );
};

export default Clock;
