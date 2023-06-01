import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

import { Timer_Context } from '../../contexts/Timer_Context';

function Timer() {

  const {timer, setTimer} = useContext(Timer_Context)
    
  const [ allTimeInSeconds, setAllTimeInSeconds ] = useState(timer.timer * 60);
  const [ colorTime, setColorTime] = useState("black")
  const navigate = useNavigate();


  const minutes = Math.floor(allTimeInSeconds / 60);
  const seconds = allTimeInSeconds % 60;

  const containerStyle = {
    display: "flex",
    width:"9rem",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top:"10%",
    right:"5%",
    background:"white",
    borderRadius:"5px"
  };

  const chageColor = (cond) => {
    cond ? setColorTime("red") : setColorTime("black")
  }

  useEffect(() => {
    if (allTimeInSeconds === 0) {
        setTimer(prevTimer => ({
            ...prevTimer,
            finished: true 
          }));

       /*  navigate(`/Dev-Quiz/gameOver`) */
       /*  alert("Tempo esgotado!"); */
        return;

    } else {
        setTimeout(() => {
          setAllTimeInSeconds(allTimeInSeconds - 1);
        }, 1000);
    }

    if (allTimeInSeconds <= 30){
      chageColor(true)
    }
  }, [allTimeInSeconds]);

  return (
    <div style={containerStyle}>
      <span style={{ fontSize: "2rem", color:colorTime }} >{minutes.toString().padStart(2, "0")}</span>
      <span >:</span>
      <span style={{ fontSize: "2rem",  color:colorTime }}>{seconds.toString().padStart(2, "0")}</span>
    </div>
  );
}

export default Timer;
