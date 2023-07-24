import React from "react";
import moment from "moment";
import { useState, useEffect } from "react";
import "./countdown.css";

export default function CountDown({ text }) {
  var time1 = moment("24:00:00", "hh:mm:ss");
  var t = new Date().toLocaleTimeString("en-US", { hour12: false });
  var time2 = moment(t, "hh:mm:ss");
  var diff = time2.diff(time1);
  var time3 = moment(diff).format("hh:mm:ss");
  var splitTime = time3.split(":");
  var finalTime =
    splitTime[0] + "h : " + splitTime[1] + "m : " + splitTime[2] + "s";
  const [time, setTime] = useState(finalTime);
  useEffect(() => {
    const interval = setInterval(() => {
      var time1 = moment("24:00:00", "hh:mm:ss");
      var t = new Date().toLocaleTimeString("en-US", { hour12: false });
      var time2 = moment(t, "hh:mm:ss");
      var diff = time2.diff(time1);
      var time3 = moment(diff).format("hh:mm:ss");
      var splitTime = time3.split(":");
      var finalTime =
        splitTime[0] + "h : " + splitTime[1] + "m : " + splitTime[2] + "s";
      setTime(finalTime);
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  return (
    <>
      <div className="timer">
        {text}
        {time}
      </div>
    </>
  );
}
