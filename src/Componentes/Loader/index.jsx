import {useEffect, useContext, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, getDoc } from 'firebase/firestore';

import { Question_Context } from '../../contexts/Question_Context'
import { UserData_Context } from '../../contexts/userData';

import "./style.css"

export default function Loader() {  

    const { userData } = useContext(UserData_Context);
    const { setQuestion } = useContext(Question_Context);
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
 
    const fetchQuestionDB = async (langAndDiff) => {

        const db = getFirestore(firebaseApp)
        const SendQuestionCollection = collection(db, "Questoes");
        const docRef = doc(SendQuestionCollection, langAndDiff );
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

    const treatQuestionToShow = async (langAndDiff) => {

      let array = await fetchQuestionDB(langAndDiff);
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
      setQuestion(questionsToAdd);
      sendQuestionsToLocalStorage(questionsToAdd)
      
    }

    const sendQuestionsToLocalStorage = (data) => {
      localStorage.setItem("QuestionsLocalStorage", JSON.stringify(data));
    }

    const getLangDiffFromLocalStorage = () => {
      let lang = localStorage.getItem("Language")
      let diff = localStorage.getItem("Difficulty")

      let concatenation = `${lang}_${diff}`

      return concatenation
    }
      
    useEffect(()=>{

      if (Object.keys(userData).length !== 0) {
        let langAndDiff = `${userData.Language}_${userData.Difficulty}`
        treatQuestionToShow(langAndDiff)
     
      }else {
        let langAndDiff = getLangDiffFromLocalStorage()
        treatQuestionToShow(langAndDiff)
        
      }


      setTimeout(()=>{
        navigate('/Dev-Quiz/Questions')
      },2000)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        
      <div ref={containerRef} className="containerload">
          <div className="typewriter">
          <div className="slide"><i></i></div>
          <div className="paper"></div>
          <div className="keyboard"></div>
          </div>
          <h1 ref={textColor} className='text'>Espere um pouco estamos elaborando suas perguntas</h1>
      </div>
      
    )
}