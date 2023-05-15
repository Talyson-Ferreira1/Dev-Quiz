import React, { useEffect, useState, useRef, useContext } from 'react'

import { UserDataContext } from '../context/userData'
import './reviewQuestions.css'

function reviewQuestions() {
  const [counterQuestion, setCounterQuestion] = useState(1)
  const [colorContainer, setColorContainer] = useState()

  const { userData } = useContext(UserDataContext)
  const containerRef = useRef()

  const changeCounter = (value) => {

    if (value === "increase" && counterQuestion < 10) {
      setCounterQuestion(counterQuestion + 1);
    } else if (value === "decrease" && counterQuestion > 1) {
      setCounterQuestion(counterQuestion - 1);
    }
    
  };

  useEffect(()=>{
    
    if(userData[counterQuestion].correct === userData[counterQuestion].marked){
      setColorContainer(true)
    }else{
      setColorContainer(false)
    }
    
  },[counterQuestion])

  return (
    
    <div ref={containerRef} className="card" style={{background: colorContainer ? 'rgba(55, 221, 46, 0.15)' : 'rgba(218, 47, 47, 0.15)'}}>
      <h2 className='enunciadoReview'>{counterQuestion}) {userData[counterQuestion].enunciado}</h2>
      <h3 className='CorrectAlternative'>Alternativa correta: {userData[counterQuestion].correct}) {userData[counterQuestion].correctAlternative}</h3>
      <h3 className='MarkedAlternative'>Alternativa marcada: {userData[counterQuestion].marked}) {userData[counterQuestion].userAlternative}</h3>
      <div className="card__arrow right">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15" onClick={()=>{changeCounter("increase")}}>
            <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
        </svg>
      </div>
      <div className="card__arrow left">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15"  onClick={()=>{changeCounter("decrease")}}>
          <path fill="#fff" d="M10.5303 6.03033C10.8232 5.73744 10.8232 5.26256 10.5303 4.96967C10.2374 4.67678 9.76256 4.67678 9.46967 4.96967L3.67678 10.7626C2.99335 11.446 2.99335 12.554 3.67678 13.2374L9.46967 19.0303C9.76256 19.3232 10.2374 19.3232 10.5303 19.0303C10.8232 18.7374 10.8232 18.2626 10.5303 17.9697L5.31066 12.75H20C20.4142 12.75 20.75 12.4142 20.75 12C20.75 11.5858 20.4142 11.25 20 11.25H5.31066L10.5303 6.03033Z"></path>
        </svg>
      </div>
      
    </div>
    
  )
}

export default reviewQuestions