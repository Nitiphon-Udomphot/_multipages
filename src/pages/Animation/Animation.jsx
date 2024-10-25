import React, { useState, useEffect } from 'react';
import './Animation.css';

function Animations() {
  const fieldWidth = 800;
  const fieldHeight = 400;
  const diameter = 100;
  const vx = 5;
  const vy = 5;
  const maxLeft = fieldWidth - diameter - 2;
  const maxTop = fieldHeight - diameter - 2;

  const [x, setX] = useState((fieldWidth - diameter) / 2);
  const [y, setY] = useState((fieldHeight - diameter) / 2);
  const [running, setRunning] = useState(false);
  const [goRight, setGoRight] = useState(true);
  const [goDown, setGoDown] = useState(true);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [rotationDirection, setRotationDirection] = useState(1);
  const [ballStyle, setBallStyle] = useState("none");

  const runClick = () => {
    setRunning(!running);
  };

  const calculate = () => {
    let newX = x;
    let newY = y;
    let newGoRight = goRight;
    let newGoDown = goDown;
    let newRotationAngle = rotationAngle;

    if (goRight) {
      newX += vx;
      if (newX >= maxLeft) {
        newGoRight = false;
        setRotationDirection(rotationDirection * -1);
      }
    } else {
      newX -= vx;
      if (newX <= 0) {
        newGoRight = true;
        setRotationDirection(rotationDirection * -1);
      }
    }

    if (goDown) {
      newY += vy;
      if (newY >= maxTop) {
        newGoDown = false;
        setRotationDirection(rotationDirection * -1);
      }
    } else {
      newY -= vy;
      if (newY <= 0) {
        newGoDown = true;
        setRotationDirection(rotationDirection * -1);
      }
    }

    newRotationAngle += 5 * rotationDirection;

    setX(newX);
    setY(newY);
    setGoRight(newGoRight);
    setGoDown(newGoDown);
    setRotationAngle(newRotationAngle);
  };

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        calculate();
      }, 1000 / 60);
    } else if (!running && interval) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running, x, y, goRight, goDown, rotationAngle, rotationDirection]);

  const changeBall = (type) => {
    resetButtonColors();
    let image = "none";
    switch (type) {
      case 'basketball':
        image = "url(/_multipages/baskball.jpg)";
        break;
      case 'football':
        image = "url(/_multipages/football.jpg)";
        break;
      case 'volleyball':
        image = "url(/_multipages/volleyball.jpg)";
        break;
      case 'human':
        image = "url(/_multipages/human.jpg)";
        break;
      case 'cartoon':
        image = "url(/_multipages/cartoon.jpg)";
        break;
      case 'logo':
        image = "url(/_multipages/logo.jpg)";
        break;
      default:
        image = "none";
    }
    setBallStyle(image);
  };

  const resetButtonColors = () => {
    document.querySelectorAll('#control button').forEach(button => {
      button.classList.remove('btn-warning', 'btn-dark');
      button.classList.add('btn-primary');
    });
  };

  return (
    <div id="container">
      <div id="field" style={{ width: `${fieldWidth}px`, height: `${fieldHeight}px` }}>
        <div
          id="ball"
          style={{
            width: `${diameter}px`,
            height: `${diameter}px`,
            left: `${x}px`,
            top: `${y}px`,
            transform: `rotate(${rotationAngle}deg)`,
            backgroundImage: ballStyle,
          }}
        ></div>
      </div>

      <div id="control">
        <button id="run" className={`btn ${running ? 'btn-warning m-1' : 'btn-success m-1'}`} onClick={runClick}>
          <span className={`bi bi-${running ? 'pause-fill' : 'play-fill'}`}>&nbsp;{running ? 'Pause' : 'Run'}</span>
        </button>
        <button id="none" className="btn btn-secondary m-1" onClick={() => changeBall('none')}>None</button>
        <button id="basketball" className="btn btn-primary m-1" onClick={() => changeBall('basketball')}>Basketball</button>
        <button id="football" className="btn btn-primary m-1" onClick={() => changeBall('football')}>Football</button>
        <button id="volleyball" className="btn btn-primary m-1" onClick={() => changeBall('volleyball')}>Volleyball</button>
        <button id="human" className="btn btn-primary m-1" onClick={() => changeBall('human')}>Human</button>
        <button id="cartoon" className="btn btn-primary m-1" onClick={() => changeBall('cartoon')}>Cartoon</button>
        <button id="logo" className="btn btn-primary m-1" onClick={() => changeBall('logo')}>Logo</button>
      </div>
    </div>
  );
}

export default Animations;
