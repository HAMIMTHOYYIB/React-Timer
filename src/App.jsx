import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [time, setTimer] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setTimer((t) => t + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [running]);

  return (
    <>
      <div>
        <h1>React Timer</h1>
        <div className="timer">
          <p>{time}</p>
        </div>
      </div>
      <div className="btns">
        <button
          onClick={() => {
            setRunning(true);
          }}
        >
          Start
        </button>
        {time !== 0 ? (
          <button
            onClick={() => {
              setRunning(!running);
            }}
          >
            {running ? "Pause" : "Resume"}{" "}
          </button>
        ) : (
          ""
        )}

        <button
          onClick={() => {
            setRunning(false);
            setTimer(0);
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
