import React, { useEffect, useContext, useState, useRef } from 'react'
import { Link } from 'react-router-dom'

import { CounterContext } from '../context/counterConext';
import { ThemeContext } from '../context/themeContext';
import { UserResponseContext } from '../context/UserResponse';
import { TimerContext } from '../context/TimerContext';
import ProgressBar from './ProgressBar';
import Video from '../fundo/videoPlayer';
import ReviewQuestion from './reviewQuestions';
import './gameOver.css'

import RobotBad from '../../img/robot-bad/robot-7.png'
import RobotHappy from '../../img/robot-happy/robot-4.png'
import RobotIndiferent from '../../img/indiferent-robot/robot-3.png'

function GameOver() {

//importar o timer b 
    const [ percentage, setpercentage] = useState(0)
    const [ message, setMessage] = useState()
    const [ userError, setUserError] = useState()
    const [ userHits, setUserHits] = useState()
    const [ messageColor, setMessageColor] = useState('rgb(0, 0, 0)');
    const [ robot, setRobot ] = useState()

    const { userResponse, setUserResponse } = useContext(UserResponseContext);
    const { setCounterContext } = useContext(CounterContext);
    const { timer, setTimer } = useContext(TimerContext)
    const { theme } = useContext(ThemeContext)
    
    const containerRef = useRef()
   
    const contarAcertosEerros = (array) => {
    
      const total = array.length;
      const acertos = array.filter(item => item === 'acertou').length;
      const erros = total - acertos;
      const percAcertos = Math.trunc((acertos / total) * 100);
      const percErros = Math.trunc((erros / total) * 100);
      
      const numbers = [ acertos, erros, percAcertos, percErros ];

      return numbers;
    }

    const processMessage = (condicional, hits, error) => {
      if(condicional <= 20){
        setMessage("Você é muito ruim, vá estudar!")
        changeColorMessage(false)

      }else if(condicional <= 50){
        setMessage("Nada mal, revise e tente novamente!")
        changeColorMessage(true)

      }else if( condicional <= 90){
        setMessage("Boa pontuação, parabéns")
        changeColorMessage(true)

      }else if(condicional === 100){
        changeColorMessage(true)
        setMessage("Perfeito")

      }


      (error <= 1) ? setUserError(`${error} questão.`) :  setUserError(`${error} questões.`);
      (hits === 1) ? setUserHits(`${hits} questão`) :  setUserHits(`${hits} questões`);
      
    }

    function chooseRobotImg  (score)  {
      if(score <= 20){
        setRobot(RobotBad)

      }else if( score <= 70){
        setRobot(RobotIndiferent)

      }else if(score >= 80){
        setRobot(RobotHappy)

      }
    }

    const changeColorMessage = (condition) => {
      condition === true ? setMessageColor('rgb(10, 222, 67)') : setMessageColor('rgb(239, 78, 78)');
    }

    const resetUserResponse = () => {
      setUserResponse({})
    }

    const resetCounterContext = () => {
      setCounterContext(1)
    }

    const getUserResultInTheLocalStorage = () => {

      const storedUserResult = localStorage.getItem('userResult');

      let ValueConverted =  JSON.parse(storedUserResult)
      
      return ValueConverted
  
    }

    useEffect(() => {

      let arrayUserResponses, acertosEerros;

      if (!Object.keys(userResponse).length === 0) {
        arrayUserResponses = userResponse;
        acertosEerros = contarAcertosEerros(arrayUserResponses.result)
        
      } else {
        arrayUserResponses = getUserResultInTheLocalStorage()
        acertosEerros = contarAcertosEerros(arrayUserResponses.result)
        
      }
      
      setpercentage(acertosEerros[2]) 
      processMessage(acertosEerros[2],acertosEerros[0],acertosEerros[1])
      chooseRobotImg(acertosEerros[2])
      resetCounterContext()

    }, [userResponse])

    useEffect(()=>{
      if( theme === "Light" ){
        containerRef.current.classList.add("Light");
      }else{
        containerRef.current.classList.remove("Light");
      }
    },[theme])

    useEffect(()=>{
      setTimer({
        timer: 0,
        active:false,
        finished:false
      });
    },[])

    return (
      
      <div className='containerGameOver'>

        <Video/>
        <div ref={containerRef} className="containerContent">

          <h1 style={{color:messageColor}} className='message'>{message}</h1>
          <h2 className='userHits'> Você acertou {userHits} e errou {userError}</h2>
          <ProgressBar percentage={percentage} circleWidth="200" />
          <Link to={"/Dev-Quiz/tecnologia"}>
            <button className='btnReturn' title="Voltar para página inicial" onClick={()=>{resetUserResponse()}}>Jogar novamente</button>
          </Link>
         <ReviewQuestion />


        </div>
        <div className='robotGameOver'>
          <img src={robot} alt="Robot ilustration" />
         </div>
      </div>
    )
}

export default GameOver


