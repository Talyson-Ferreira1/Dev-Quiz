import React, { useContext, useState, useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircle } from '@fortawesome/free-solid-svg-icons';

import { QuestionContext } from '../context/Questions';
import { CounterContext } from '../context/counterConext';
import { UserResponseContext } from '../context/UserResponse';

import "./Question.css"

// O selectedAlternative precisa ser resetado se o usuario remover a classe selected 

function Problem() {
    const { questions } = useContext(QuestionContext);
    const { counterContext, setCounterContext } = useContext(CounterContext);
    const { userResponse, setUserResponse } = useContext(UserResponseContext);
    
    const [ counter, setCounter ] = useState(1);
    const [ counterForQuestions, setCounterForQuestions ] = useState(0);
    const [ selectedAlternative, setSelectedAlternative ] = useState();
    const [ icons, setIcons ] = useState( { A: false, B: false, C: false, D: false });
    const [ currentQuestion, setCurrentQuestion ] = useState(); 

    const alternatives = useRef();
    const navigate = useNavigate();

    const nextQuestion = () => {

        if(selectedAlternative !== undefined ){
            setCounter(counter + 1)  
            setCounterContext(counterContext + 1)
            
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
            markedLetter: [...(prevUserResponse.leterMarked || []), markedAlternativeLetter],
            correctLetter: [...(prevUserResponse.correctLetter || []), correctAlternativeLetter],
        }));
        
    }

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

    const getUserResponseInTheLocalStorage = () => {
        let storedUserResponse = localStorage.getItem('QuestionsLocalStorage');
        let convertToOBJ =  JSON.parse(storedUserResponse)
        return convertToOBJ
    }

    const sendResponseToLocalStorage = ()  => {

        localStorage.setItem('userResult', JSON.stringify(userResponse));

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


    useEffect(()=>{

        counter === 10 ?'Finalizar' :'Próxima' 
        counter === 10? setCounterForQuestions(10):setCounterForQuestions(counterForQuestions + 1)
        counter === 11 ? sendResponseToLocalStorage() : ""
        counter === 11 ? navigate(`/Dev-Quiz/gameOver`) : ""

        /* counter === 11 ? console.log(userResponse) : "" */
       
        if (Object.keys(questions).length === 0) {
            let dataQuestions = getUserResponseInTheLocalStorage()
            setCurrentQuestion(dataQuestions[counter - 1])
        }else {
            setCurrentQuestion(questions[counter - 1])
        }
    },[counter])

    
    return (
        <>
            {currentQuestion && (
                <div className='containerAlter'>
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

export default Problem;
