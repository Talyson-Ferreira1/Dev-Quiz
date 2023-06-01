import React, { useContext, useState, useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircle } from '@fortawesome/free-solid-svg-icons';

import { Counter_Context } from '../../contexts/Counter';
import { UserResponse_context } from '../../contexts/UserResponse_context';
import { UserData_Context } from '../../contexts/userData';
import { Theme_Context } from '../../contexts/Theme_Conext';
import './style.css'


function index({questions}) {

  const { counter, setCounter } = useContext(Counter_Context)
  const { userResponse, setUserResponse } = useContext(UserResponse_context)
  const { theme } =  useContext(Theme_Context)
  const { userData, setUserData} = useContext(UserData_Context)

  const [ icons, setIcons ] = useState( { A: false, B: false, C: false, D: false });
  const [ counterForQuestions, setCounterForQuestions ] = useState( 0 )
  const [ selectedAlternative, setSelectedAlternative ] = useState();
  const [ currentQuestion, setCurrentQuestion ] = useState()

  const alternatives = useRef();
  const navigate = useNavigate()

  
  const selectAlternative = (alternative, letterSelected) => {
    resetSelectedAlternative()


    if(alternative.target.innerText === selectedAlternative){
        
    }else{
        setSelectedAlternative(alternative.target.innerText)
        alternative.target.classList.add("selected")
        changeIcon(letterSelected)
    }
    
  }

  const resetSelectedAlternative = () => {

    setSelectedAlternative(undefined)
    changeIcon()
    
    alternatives.current.childNodes.forEach((child) => {
        child.classList.remove("selected");
    });
    
  }

  const changeIcon = (letterSelected) => {
   
    const newIcon = { A: false, B: false, C: false, D: false };
    
    setIcons( newIcon ) 

    if(letterSelected){
        setIcons(prevState => { newIcon[letterSelected] = true; return newIcon; })
    }
    

  }

  const nextQuestion = () => {

    if(selectedAlternative !== undefined ){
      setCounter(counter + 1)        
      saveResponses()
      resetSelectedAlternative()
    }
   
  }

  const saveResponses = () => {
    let partialResult;

    if(selectedAlternative === currentQuestion.resposta ){
        partialResult = "acertou"
    }else{
        partialResult = "errou"
    }

    let markedAlternativeLetter =  getLetterSelected(selectedAlternative)
    let correctAlternativeLetter = getLetterSelected(currentQuestion.resposta)

    setUserResponse(prevUserResponse => ({
      ...prevUserResponse,
      marked: [...(prevUserResponse.marked || []), selectedAlternative],
      correct:[...(prevUserResponse.correct || []), currentQuestion.resposta],
      enunciado:[...(prevUserResponse.enunciado || []), currentQuestion.enunciado],
      result:[...(prevUserResponse.result || []), partialResult],
      markedLetter: [...(prevUserResponse.markedLetter || []), markedAlternativeLetter],
      correctLetter: [...(prevUserResponse.correctLetter || []), correctAlternativeLetter],
    }));
    
  }

  const getLetterSelected = (string) => {
    let letter;
    
    alternatives.current.childNodes.forEach((child) => {
        //Se o valor de string for igual o valor de uma das li retorne o alternativa dessa li
        if(string === child.innerText ){
            letter = child.classList[0]
        }
        

    });

    return letter;

  }

  const sendResponseToLocalStorage = () => {
    localStorage.setItem('userResponse', JSON.stringify(userResponse))
  }


  useEffect(()=>{

    setCurrentQuestion(questions[counterForQuestions] )

    counter === 10 ?'Finalizar' :'Próxima' 
    counter === 10? setCounterForQuestions(10):setCounterForQuestions(counterForQuestions + 1)
    counter === 11 ? navigate(`/Dev-Quiz/GameOver`) : "" 
    counter === 11 ? sendResponseToLocalStorage() : ""

  },[counter])

  useEffect(()=>{

    //Altera as cores baseado no tema
    
    if(theme.mode === true ){   

      document.documentElement.style.setProperty('--PrimaryText-color', theme.colors.light.PrimmaryText);   
      document.documentElement.style.setProperty('--SecondaryText-color', theme.colors.light.SecondaryText);  
      document.documentElement.style.setProperty('--PrimaryColor', theme.colors.light.PrimaryColor);  
      document.documentElement.style.setProperty('--container-color', theme.colors.light.ColorBG);  
      document.documentElement.style.setProperty('--card-color', theme.colors.light.card);   

    
    }else {      

      document.documentElement.style.setProperty('--PrimaryText-color', theme.colors.dark.PrimmaryText);   
      document.documentElement.style.setProperty('--SecondaryText-color', theme.colors.dark.SecondaryText);  
      document.documentElement.style.setProperty('--PrimaryColor', theme.colors.dark.PrimaryColor);  
      document.documentElement.style.setProperty('--container-color', theme.colors.dark.ColorBG);  
      document.documentElement.style.setProperty('--card-color', theme.colors.dark.card);   
     
    }

  },[theme.mode]) 

  return (
    <>
        {currentQuestion && (
            <div className='conteiner_Question'>
                <span className='tema'>Tema: {currentQuestion.tema} </span>
                <h2 className='conterQuestion'>Questão {counterForQuestions}/10</h2>
                <p className='enunciado'> {currentQuestion.enunciado}</p>
                <ul ref={alternatives}>
                    <li className='A' onClick={(e) => selectAlternative(e,"A")}>
                        {icons.A === true? <FontAwesomeIcon icon={faCircleCheck} className='iconCheck'/>: <FontAwesomeIcon icon={faCircle} className='icon'/>}
                        {currentQuestion.alternatives[0]}
                    </li>
                    <li className='B' onClick={(e) => selectAlternative(e,"B")}>
                         {icons.B === true? <FontAwesomeIcon icon={faCircleCheck} className='iconCheck'/>: <FontAwesomeIcon icon={faCircle} className='icon'/>}
                        {currentQuestion.alternatives[1]}
                    </li>
                    <li className='C' onClick={(e) => selectAlternative(e,"C")}>
                         {icons.C === true? <FontAwesomeIcon icon={faCircleCheck} className='iconCheck'/>: <FontAwesomeIcon icon={faCircle} className='icon'/>}
                        {currentQuestion.alternatives[2]}
                    </li>
                    <li className='D' onClick={(e) => selectAlternative(e,"D")}>
                         {icons.D === true? <FontAwesomeIcon icon={faCircleCheck} className='iconCheck'/>: <FontAwesomeIcon icon={faCircle} className='icon'/>}
                        {currentQuestion.alternatives[3]}
                    </li>
                </ul>
                <button className='btnNext' onClick={()=>{nextQuestion()}}>{ counter === 10 ?'Finalizar' :'Próxima' }</button>
            </div>
        )}
    </>
);
}

export default index
