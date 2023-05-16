import React, { useEffect, useContext, useState, useRef } from 'react'
import { Link } from 'react-router-dom'

import { ResultContext } from '../context/resultContext';
import { CounterContext } from '../context/counterConext';
import { UserDataContext } from '../context/userData';
import { ThemeContext } from '../context/themeContext';

import ProgressBar from './ProgressBar';
import Video from '../fundo/videoPlayer';
import ReviewQuestion from './reviewQuestions';
import './gameOver.css'

export default function GameOver() {

  const [ percentage, setpercentage] = useState(0)
  const [ message, setMessage] = useState()
  const [ userError, setUserError] = useState()
  const [ userHits, setUserHits] = useState()
  const [ messageColor, setMessageColor] = useState('rgb(0, 0, 0)');

  const { setCounterContext} = useContext(CounterContext);
  const { userResult} = useContext(ResultContext);
  const { setUserData} = useContext(UserDataContext)
  const { theme} = useContext(ThemeContext)
  const containerRef = useRef()
  
  const contarAcertosEerros = (array) => {
    
    const total = array.length;
    const acertos = array.filter(item => item === 'acertou').length;
    const erros = total - acertos;
    const percAcertos = Math.trunc((acertos / total) * 100);
    const percErros = Math.trunc((erros / total) * 100);
    
    return { acertos, erros, percAcertos, percErros };
  }

  const processMessage = (percent, hits, error) => {

    if(percent <= 40){

      setMessage("Você é muito ruim, vá estudar!")
      changeColorMessage(false)

    }else if( percent <= 90){

      setMessage("Parabéns")
      changeColorMessage(true)

    }else if(percent === 100){
      changeColorMessage(true)
      setMessage("Perfeito")

    }

    (error === 1) ? setUserError(`${error} questão.`) :  setUserError(`${error} questões.`);
    (hits === 1) ? setUserHits(`${hits} questão`) :  setUserHits(`${hits} questões`);
    
  }

  const changeColorMessage = (condition) => {
    condition === true ? setMessageColor('rgb(10, 222, 67)') : setMessageColor('rgb(239, 78, 78)');
  }

  const resetUserData = () => {
    setUserData({})
  }

  const fetchUserResponse = () => {

    let parse;
    const storedUserResponse = localStorage.getItem('UserResponse');
    
    if (storedUserResponse) {

      parse = JSON.parse(storedUserResponse); 
      
    }

    return parse;

  }


  useEffect(() => {

    let convertedValue;

    if (userResult.length === 0) {

      convertedValue = contarAcertosEerros(fetchUserResponse()); 
      setpercentage(convertedValue.percAcertos)

    } else {

      convertedValue = contarAcertosEerros(userResult);
      setpercentage(convertedValue.percAcertos)

    }

    processMessage(convertedValue.percAcertos,convertedValue.acertos,convertedValue.erros)
       
    setCounterContext(1)

  }, [userResult])
  
  useEffect(()=>{
    if( theme === "Light" ){
      containerRef.current.classList.add("Light");
    }else{
      containerRef.current.classList.remove("Light");
    }
  },[theme])

  return (
    
    <div className='containerGameOver'>

      <Video/>
      <div ref={containerRef} className="containerContent">

        <h1 style={{color:messageColor}} className='message'>{message}</h1>
        <h2 className='userHits'> Você acertou {userHits} e errou {userError}</h2>
        <ProgressBar percentage={percentage} circleWidth="200" />
        <Link to={"/Dev-Quiz/tecnologia"}>
          <button className='btnReturn' title="Voltar para página inicial" onClick={()=>{resetUserData()}}>Jogar novamente</button>
        </Link>
        <ReviewQuestion />

      </div>
    </div>
  )
}


