import { useEffect, useState } from "react";
import "./timer.css";
function Timer({ name , value}) {
  const [running, setRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setSeconds(value || 0);
  }, [value]);

  useEffect(() => {
    let interval = null;
    if (running) {
      interval = setInterval(() => {
        setSeconds(seconds + 1);
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [running, seconds]);

  function secondsToDisplay(seconds) {
    const MINUTE_SECONDS = 60;
    const HOUR_SECONDS = MINUTE_SECONDS * 60;
    const DAY_SECONDS = HOUR_SECONDS * 24;

    const days = Math.floor(seconds / DAY_SECONDS);
    const hours = Math.floor((seconds % DAY_SECONDS) / HOUR_SECONDS);
    const minutes = Math.floor((seconds % HOUR_SECONDS) / MINUTE_SECONDS);
    const secs = seconds % MINUTE_SECONDS;

    if (days > 0) {
      return `${days}d ${hours}h ${minutes}m ${secs}s`;
    } else if (hours > 0) {
      return `${hours}h ${minutes}m ${secs}s`;
    } else if (minutes > 0) {
      return `${minutes}m ${secs}s`;
    } else {
      return `${secs}s`;
    }
  }

  function resetClick() {
    setRunning(false);
    setSeconds(value || 0);
  }
  return (
    <div className="timer-contaier">
      <h3 className="timer-title">{ name || "Timer" }</h3>
      <p>
        <input
          className="timer-display"
          type="text"
          readOnly={true}
          placeholder="1d 23h 10m 0s"
          value={secondsToDisplay(seconds)}
        />
      </p>
      <div className="timer-btn">
        <button className="btn btn-danger" onClick={resetClick}>
          Reset
        </button>
        <button
          className={"btn " + (running ? "btn-warning" : "btn-success")}
          onClick={() => {
            setRunning(!running);
          }}
        >
          {running ? "Pause" : "Run"}
        </button>
      </div>
    </div>
  );
}

export default Timer;
