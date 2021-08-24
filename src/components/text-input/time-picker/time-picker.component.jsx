import React from "react";

import "./time-picker.styles.css";

const TimePicker = () => {
    const [isClicked, setIsClicked] = React.useState(false);
    const [time, setTime] = React.useState({
        hour: null,
        minute: null
    });

    const hour = [...Array.from(Array(24).keys())];
    const minute = [...Array.from(Array(60).keys())];
  
    const takeHour = (event) => {
    setTime({
      ...time,
      hour: event.target.innerText
    });
  };
  const takeMinute = (event) => {
    setTime({
      ...time,
      minute: event.target.innerText
    });
  };
    return(
        <div className="holder">
        <input
          placeholder=" "
          type="text"
          value={
             `${
                  time.hour
                    ? Number(time.hour) < 10
                      ? `0` + Number(time.hour)
                      : Number(time.hour) === 0
                      ? `00`
                      : Number(time.hour)
                    : " "
                }:${
                  time.minute
                    ? Number(time.minute) < 10
                      ? `0` + Number(time.minute)
                      : Number(time.minute) === 0
                      ? `00`
                      : Number(time.minute)
                    : " "
                }`
              
          }
          onClick={() => setIsClicked(!isClicked)}
        />
        {isClicked && (
            
            <div className="time-picker-container">
              <div className="time-holder">
                {hour.map((item, index) => (
                  <span key={index} id={index} onClick={takeHour} value={item}>
                    {item}
                  </span>
                ))}
              </div>
              :
              <div className="time-holder">
                {minute.map((item, index) => (
                  <span key={index} id={index} onClick={takeMinute} value={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
            
        )}
      </div>
    )
}

export default TimePicker
