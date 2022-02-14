import React from "react";

const Clock = ({ timeLeft }) => {
  console.log(timeLeft);
  return (
    <text>{timeLeft.hours + ":" + timeLeft.minutes}</text>

    // <View style={styles.clock}>
    //   <Text style={styles.text}>
    //     {(props.timeLeft.hours == 0 ? "" : props.timeLeft.hours + ":") +
    //       (props.timeLeft.minutes < 10
    //         ? "0" + props.timeLeft.minutes
    //         : props.timeLeft.minutes) +
    //       ":" +
    //       (props.timeLeft.seconds < 10
    //         ? "0" + props.timeLeft.seconds
    //         : props.timeLeft.seconds)}
    //   </Text>
    // </View>
  );
};

// const styles = StyleSheet.create({
//   clock: {
//     height: 60,
//     padding: 15,
//     backgroundColor: "darkslateblue",
//   },
//   text: {
//     color: "#fff",
//     fontSize: 23,
//     textAlign: "center",
//   },
// });

export default Clock;
