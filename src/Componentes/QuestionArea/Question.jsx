import React, { useContext, useState, useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircle } from '@fortawesome/free-solid-svg-icons';

import { QuestionContext } from '../context/Questions';
import { ResultContext } from '../context/resultContext';
import { CounterContext } from '../context/counterConext';
import { UserDataContext } from '../context/userData';
import "./Question.css"

// O selectedAlternative precisa ser resetado se o usuario remover a classe selected 

function Problem() {
    const [ changeBtnText, setChangeBtnText] =useState("Próxima")
    const [ selectedAlternative, setSelectedAlternative ] = useState();
    const [ contador, setContador ] = useState(1)
    const [ counterQuestion, setCounterQuestion ] = useState(0)
    const [ dataQuestions, setDataQuestions ] = useState([]);
    const [ icon, setIcon ] = useState({"A":false,"B":false,"C":false,"D":false})
    const [ question, setQuestion] = useState('');
    const [ userResponseForLocalStorage, setUserResponseForLocalStorage] = useState([])

    const { questionGame } = useContext(QuestionContext);
    const { userResult, setUserResult } = useContext(ResultContext);
    const { counterContext, setCounterContext } = useContext(CounterContext)
    const { userData, setUserData } = useContext(UserDataContext)

    
    const navigate = useNavigate();
    const Refs = {
        alternatives: useRef(),
        alterA: useRef(),
        alterB: useRef(),
        alterC: useRef(),
        alterD: useRef()

    }
    
    const changeIconChecked = (alternative) =>{
        setIcon(prevState => {
            const newIcon = { A: false, B: false, C: false, D: false }; 
            newIcon[alternative] = true;
            return newIcon;
        });
    }

    const shuffleQuestions = (array) => {
        // esse algorítimo embaralha o array de perguntas 
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    const SelectAlternative = (e, alternative) => {
        
        removeClassSelected()

        //adiciona a classe selected a alternativa clicada 
        if (selectedAlternative === alternative) {
            //Se a alternativa for igual a que ja esta selecionada:
            setSelectedAlternative(null);

        } else {
            //se a alternativa for diferente da que esta selecionada:
            e.target.classList.add("selected");
            setSelectedAlternative(alternative);
            changeIconChecked(alternative)
            
        }
        
    }
    
    const resetSelectedAlternative = () => {
        setSelectedAlternative(undefined)
    }

    const removeClassSelected = () => {

        Refs.alternatives.current.childNodes.forEach((child) => {
            child.classList.remove("selected");
        });
        
        resetSelectedAlternative()

    }

    const nextQuestion = () =>{

        if(selectedAlternative !== undefined){
            setContador(contador + 1)   
            setCounterContext(counterContext + 1)
            removeClassSelected()
        }
    }
    
    const resetContextUseResult = () => {
        setUserResult([])
    }

    const updateUserResponseAndUserData = () => {
        
        let currentAnswer = dataQuestions[counterQuestion - 1].resposta.toUpperCase();
        let currentStatement = dataQuestions[counterQuestion - 1].enunciado;
        let StringsAlternatives = {
            A : dataQuestions[counterQuestion - 1].alternativa_A,
            B : dataQuestions[counterQuestion - 1].alternativa_B,
            C : dataQuestions[counterQuestion - 1].alternativa_C,
            D : dataQuestions[counterQuestion - 1].alternativa_D
        }

        if(selectedAlternative !== undefined){
            
            selectedAlternative === currentAnswer?setUserResult([...userResult,"acertou"]):setUserResult([...userResult,"errou"]); 

            selectedAlternative === currentAnswer
                ?setUserResponseForLocalStorage([...userResponseForLocalStorage,"acertou"])
                :setUserResponseForLocalStorage([...userResponseForLocalStorage,"errou"]); 

            

           /*  localStorage.setItem('UserResponse', JSON.stringify(newUserData)) */
                        
            const newUserData = {
                ...userData,
                [Object.keys(userData).length + 1]: { 
                    marked: selectedAlternative, 
                    correct: currentAnswer,
                    enunciado: currentStatement, 
                    correctAlternative: StringsAlternatives[currentAnswer],
                    userAlternative: StringsAlternatives[selectedAlternative]
                }
            };
            
            setUserData(newUserData);
            sendUserDataToLocalStorage(newUserData)
        }
    }

    const sendUserDataToLocalStorage = (newUserData) => {
        localStorage.setItem('UserData', JSON.stringify(newUserData));
    }

    const sendUserResponseToLocalStorage = () => {
        localStorage.setItem('UserResponse', JSON.stringify(userResponseForLocalStorage));
    }

    const fetchDataQuestions = () => {

        const storedDataQuestion = localStorage.getItem('DataQuestions');
        
        if (storedDataQuestion) {

            const parsedDataQuestion = JSON.parse(storedDataQuestion);
            const shuffledQuestions = shuffleQuestions(parsedDataQuestion);
            
            setDataQuestions(shuffledQuestions);
        }

    }

    useEffect(() => {
   
        if (!questionGame) {

            fetchDataQuestions();

        } else {

            const shuffledQuestions = shuffleQuestions(questionGame);
            setDataQuestions(shuffledQuestions);

        }

    }, [questionGame]);

    useEffect(() => {
        contador === 10 ? setChangeBtnText('Finalizar') : setChangeBtnText('Próxima' ) 
        contador === 10 ? setCounterQuestion(10) : setCounterQuestion(counterQuestion + 1 ) 
        contador === 11 ? sendUserResponseToLocalStorage() : ""
        contador === 11 ? navigate(`/Dev-Quiz/gameOver`) : ""

    },[contador]);

    useEffect(() => {

        if (dataQuestions.length > 0) {
            setQuestion(dataQuestions[counterQuestion - 1]);
        }

    }, [dataQuestions, counterQuestion]);
    
    useEffect(()=>{
        
        resetContextUseResult()

    },[])

    
    return (
        <>
            {question && (
                <div className='containerAlter'>
                    <span className='tema'>Tema: {question.tema}</span>
                    <h2 className='conterQuestion'>Questão {counterQuestion}/10</h2>
                    <p className='enunciado'> {question.enunciado}</p>
                    <ul ref={Refs.alternatives}>
                    <li ref={Refs.alterA} onClick={(e) => SelectAlternative(e, "A")}>
                        {icon.A === true? <FontAwesomeIcon icon={faCircleCheck} className='iconCheck'/>: <FontAwesomeIcon icon={faCircle} className='icon'/>}
                        {question.alternativa_A}
                    </li>
                    <li onClick={(e) => SelectAlternative(e, "B")}>
                        {icon.B === true? <FontAwesomeIcon icon={faCircleCheck} className='iconCheck'/>: <FontAwesomeIcon icon={faCircle} className='icon'/>}
                        {question.alternativa_B}
                    </li>
                    <li onClick={(e) => SelectAlternative(e, "C")}>
                        {icon.C === true? <FontAwesomeIcon icon={faCircleCheck} className='iconCheck'/>: <FontAwesomeIcon icon={faCircle} className='icon'/>}
                        {question.alternativa_C}
                    </li>
                    <li onClick={(e) => SelectAlternative(e, "D")}>
                        {icon.D === true? <FontAwesomeIcon icon={faCircleCheck} className='iconCheck'/>: <FontAwesomeIcon icon={faCircle} className='icon'/>}
                        {question.alternativa_D}
                    </li>
                    </ul>
                    <button className='btnNext' onClick={()=>{updateUserResponseAndUserData(); nextQuestion();}}>{changeBtnText}</button>
                </div>
            )}
        </>
    );
}

export default Problem;
