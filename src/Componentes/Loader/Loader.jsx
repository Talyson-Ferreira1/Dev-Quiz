import React, {useEffect, useContext, useRef, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, getDoc } from 'firebase/firestore';

import { LanguageContext } from '../context/LanguageContext';
import { QuestionContext } from "../context/Questions";
import { ThemeContext } from '../context/themeContext';
import { CounterContext } from '../context/counterConext';

import "./Loader.css"
import SendQuestions from './SendQuestions';

export default function Loader() {  
    const { userLanguage } = useContext(LanguageContext);
    const { setQuestions } = useContext(QuestionContext);
    const { setCounterContext } = useContext(CounterContext);
    const { theme } = useContext(ThemeContext);
    const navigate = useNavigate();

    const containerRef = useRef()
    const textColor = useRef()
    const firebaseApp = initializeApp( {
        apiKey: "AIzaSyDAoDpwalYgpjt_O7JpJmohz7QBqDhrbI8",
        authDomain: "database-devquiz.firebaseapp.com",
        databaseURL: "https://database-devquiz-default-rtdb.firebaseio.com",
        projectId: "database-devquiz",
        storageBucket: "database-devquiz.appspot.com",
        messagingSenderId: "265854277353",
        appId: "1:265854277353:web:017015df85efa9ae1c8278"
    })
 
    const fetchQuestionDB = async () => {

        const db = getFirestore(firebaseApp)
        const SendQuestionCollection = collection(db, "Questoes");
        const docRef = doc(SendQuestionCollection, `${userLanguage[0]}_${userLanguage[1]}`);
        let questionsData;
        try {
          const docSnap = await getDoc(docRef);
          
          if (docSnap.exists()) {
            const data = docSnap.data();
            questionsData = data.questions 
          } else {
            console.log("Documento não encontrado!");

          }

        } catch (error) {
          console.error("Erro ao buscar dados:", error);
        }

        return questionsData;
    }

    const shuffleQuestions = (array) => {
        // esse algorítimo embaralha o array de perguntas 
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const shuffleAlternatives = (strings) => {
       
        for (let i = strings.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [strings[i], strings[j]] = [strings[j], strings[i]];
        }
        return strings;
    }

    const treatQuestionToShow = async () => {
        let array = await fetchQuestionDB();
        let questionsToAdd = []; 
        let questionsAlreadyShuffled = shuffleQuestions(array);

        for (let question of questionsAlreadyShuffled) {
          
          let currentQuestion = question.array;
          let alternatives = [
            currentQuestion.alternativa_1,
            currentQuestion.alternativa_2,
            currentQuestion.alternativa_3,
            currentQuestion.alternativa_4,
          ];
      
          let alternativesAlreadyShuffled = shuffleAlternatives(alternatives);
      
          questionsToAdd.push({
            enunciado: currentQuestion.enunciado,
            tema: currentQuestion.tema,
            alternatives: alternativesAlreadyShuffled,
            resposta: currentQuestion.resposta,
          });
        }
        sendQuestionsToLocalStorage(questionsToAdd)
        setQuestions(questionsToAdd);
    }

    const resetCounterContext = () => {
        setCounterContext(1)
    }

    const sendQuestionsToLocalStorage = (data) => {
      localStorage.setItem("QuestionsLocalStorage", JSON.stringify(data));
    }
      
    useEffect(()=>{

        treatQuestionToShow()
        resetCounterContext()

        setTimeout(()=>{
            navigate('/Dev-Quiz/questões')
        },2000)

    },[])

    useEffect(()=>{

        if( theme === "Light" ){
            containerRef.current.classList.add("Light");
            textColor.current.classList.add("Light");
        }else{
            containerRef.current.classList.remove("Light");
            textColor.current.classList.remove("Light");
        }

    },[theme])

    return (
        <>
        <div ref={containerRef} className="containerload">
            <div className="typewriter">
            <div className="slide"><i></i></div>
            <div className="paper"></div>
            <div className="keyboard"></div>
            </div>
            <h1 ref={textColor} className='text'>Espere um pouco estamos elaborando suas perguntas</h1>
        </div>
        </>
    )
}