import React,{ useContext, useEffect, useState} from 'react'
import { Question_Context } from '../../contexts/Question_Context'
import { Timer_Context } from '../../contexts/Timer_Context'
import { UserData_Context } from '../../contexts/userData'

import Video from '../../Componentes/Fundo/videoPlayer'
import Wave from '../../Componentes/Wave_Background/index'
import BtnReturn from '../../Componentes/ReturnToSelection/index'
import ProgressBar from '../../Componentes/ProgressBar__QuestionArea'
import Questions_component from '../../Componentes/Question__QuestionArea/index'
import Stopwatch from '../../Componentes/Stopwatch__SelectLanguage/index'
import FinishedTime from '../../Componentes/finishedTime/index'
import './Style.css'

function index() {
 
  const { Question } = useContext(Question_Context)
  const { timer, setTimer } = useContext(Timer_Context)
  const { userData } = useContext(UserData_Context)

  const [ questionsAlreadyTreated, setQuestionsAlreadyTreated ] = useState()
  const [ stopwatchIsActive, setStopwatchIsActive] = useState(false)  

  const getQuestionsFromLocalStorage = () => {
    const questionNotTreated = localStorage.getItem("QuestionsLocalStorage")
    const treatement = JSON.parse(questionNotTreated)

    return treatement
  }

  const getDifficultyFromLocalStorage = () => {
    return localStorage.getItem("Difficulty")
  }

  const showStopWatch = () => {
    let diff;

    if(!Object.keys(userData).length === 0) {
      diff = userData.Difficulty
    }else{
      diff = getDifficultyFromLocalStorage()
    }

    if(diff === "easy") {
      setTimer({
        timer:0,
        state: false,
        finished:false
      })
      setStopwatchIsActive(false)
    }
  
    if(diff === "medium") {
      setTimer({
        timer:3,
        state: true,
        finished:false
      })
      setStopwatchIsActive(true)
    }

    if(diff === "hard") {
      setTimer({
        timer:2.5,
        state: true,
        finished:false
      })
      setStopwatchIsActive(true)
    }
  }

  useEffect(()=>{

    if(Question === undefined ){
      setQuestionsAlreadyTreated(getQuestionsFromLocalStorage())
  
    }else{
      setQuestionsAlreadyTreated(Question)
    }

    showStopWatch()

  },[])
  

  //Refatorar o código de forma q diminua o uso de media queries
  //Criar um gameOver mais bonoto
  //Renomear os contextos adiccionando a palavra context ao final   

  return (
    <div className='container_Component'>
        {timer.finished &&(
          <FinishedTime/>
        )}
        <>
          <div className='Container_Questions'>
            { questionsAlreadyTreated && (
              <Questions_component questions={questionsAlreadyTreated}/>
            )}
            { stopwatchIsActive && (
              <Stopwatch/>
            )}
            <ProgressBar />
            <BtnReturn />
            <Wave />
          </div>
          <Video />
        </>
    </div>
  );
}

export default index;







