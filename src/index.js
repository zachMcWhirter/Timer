import * as React from "react";
import { render } from "react-dom";
// import { Button } from 'reactstrap';
import "./styles.css";




function TomatoTimer() {
  const [counter, setCounter] = React.useState(1500);
  // const [timerOn, setTimerOn] = React.useState(false);


  // converter function that allows us to change format in the return 
  function prettifyCounter(numOfSeconds) {
    return new Date(numOfSeconds * 1000).toISOString().substr(14, 5)
  }

  const startCountdown = (e) => {
    e.preventDefault();
    setCounter(1500)
    // setTimerOn(true)

    // converter function that allows us to change format in the return 

  }

  function prettifyCounter(numOfSeconds) {
    return new Date(numOfSeconds * 1000).toISOString().substr(14, 5)
  }


  React.useEffect(() => {
    (counter > 0 && setTimeout(() => setCounter(counter - 1), 1000));
  }, [counter]);

  console.log("counter:", counter)

  return (
    <div className="TomatoTimer">
      <div className="timer-container">
        <div className="timer-title">TOMATO TIMER
        <br />
          <div className="timer">
            {prettifyCounter(counter)}
          </div>
        </div>
        <button
          // onClick={resetTimer}
          onClick={startCountdown}
        >Start</button>
      </div>

    </div>
  );
}

const rootElement = document.getElementById("root");
render(<TomatoTimer />, rootElement);


