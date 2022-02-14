import React from "react";
// import styles from "../App.css";

const Clock = ({ timeLeft }) => {
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

const style = {
  color: "#fff",
  backgroundColor: "darkslateblue",
  fontSize: 23,
  height: 23,
  padding: 15,
};

export default Clock;
