import * as React from "react";
import { render } from "react-dom";

import "./styles.css";


const timeIsUp = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);

function TomatoTimer(startTime) {

  const RemainingTime = Date.parse(startTime) - Date.parse(new Date());
  const minutes = Math.floor((startTime / 1000 / 60) % 60);
  // startTime = (minutes * 25)
  const [counter, setCounter] = React.useState(startTime);

  // const seconds = Math.floor((total / 1000) % 60);


  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000 / 60 % 60);
  }, [counter]);

  console.log("counter:", parseInt(counter))

  return (
    <div className="TomatoTimer">
      <div className="timer-container">
        <div className="timer-title">TOMATO TIMER
        <br />
          <div className="timer">
            {parseInt(counter)}
          </div>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<TomatoTimer />, rootElement);


