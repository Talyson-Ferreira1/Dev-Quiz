import React from 'react'
import { Link } from 'react-router-dom';

import BadRobot from '../../img/robot-bad/robot-7.png' 
import './StyleFineshedTime.css'

function FineshedTime() {
  return (
    <div className="Container">
      <img className="BadRobot" src={BadRobot} alt="bad robot" />
      <div className="ContainerContent">
        <h1 className="Title">Que pena, seu tempo acabou</h1>
        <div className="ContainerBtn">
          <Link to="/Dev-Quiz/tecnologia">
            <button className="Btn">Tentar novamente</button>
          </Link>
        </div>
      </div>
    </div>

  )
}

export default FineshedTime
