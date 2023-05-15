import React from 'react'

import Robot from "../../img/robot-bad/robot-6.png"

import "./error.css"
import ToHome from './ToHome'
function Error() {
  return (
    <>
      <div className="containerError">
        <h1>404 Ops! Parece que ouve algo errado</h1>
        <img src={Robot} alt='Error ilustration'/>
        <ToHome/>
      </div>    
    </>
  )
}

export default Error
