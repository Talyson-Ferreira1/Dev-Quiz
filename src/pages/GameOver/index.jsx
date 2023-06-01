import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { UserResponse_context } from '../../contexts/UserResponse_context'
import { Theme_Context } from '../../contexts/Theme_Conext'

import VideoPlayer from '../../Componentes/Fundo/videoPlayer'
import HitIndicatorBar from '../../Componentes/hitIndicatorBar__GameOver/index.jsx'
import ReviewQuestion from '../../Componentes/reviewQuestions__Gameover/index'
import Wave from '../../Componentes/Wave_Background/index'
import Mode from '../../Componentes/Mode/mode'
import RobotBad from '../../img/robot-bad/robot-7.png'
import RobotHappy from '../../img/robot-happy/robot-4.png'
import RobotIndiferent from '../../img/indiferent-robot/robot-3.png'

import './style.css'

function index() {
    const { userResponse, setUserResponse } = useContext(UserResponse_context)
    const { theme } = useContext(Theme_Context)

    const [ percentageOfHits, setPercentageOfHits ] = useState()
    const [ userError, setUserError] = useState()
    const [ userHits, setUserHits] = useState()
    const [ congratulationsMessage, setCongratulationsMessage ] = useState()
    const [ messageColor, setMessageColor ] = useState()
    const [ questionData, setQuestionData ] = useState()
    const [ robot, setRobot ] = useState()

    const contarAcertosEerros = (array) => {
    
        const total = array.length;
        const acertos = array.filter(item => item === 'acertou').length;
        const erros = total - acertos;
        const percAcertos = Math.trunc((acertos / total) * 100);
        const percErros = Math.trunc((erros / total) * 100);
        
        const numbers = [ acertos, erros, percAcertos, percErros ];
  
        return numbers;
    }

    const changeColorMessage = (condition) => {

        condition ? setMessageColor('rgb(10, 222, 67)') : setMessageColor('rgb(239, 78, 78)');

    }
    
    const processMessage = (condicional, hits, error) => {

        if (condicional <= 30) {

            setCongratulationsMessage("Pontuação baixa, vá estudar!");
            changeColorMessage(false);

        } else if (condicional <= 50) {

            setCongratulationsMessage("Nada mal, revise e tente novamente!");
            changeColorMessage(true);

        } else if (condicional <= 70) {

            setCongratulationsMessage("Pontuação aceitável, parabéns");
            changeColorMessage(true);

        } else if (condicional <= 90) {

            setCongratulationsMessage("Perfeito");
            changeColorMessage(true);

        }else if (condicional === 100) {

            setCongratulationsMessage("Perfeito");
            changeColorMessage(true);

        } else {
            setCongratulationsMessage("Continue assim");
            changeColorMessage(true);
        }
          

        error <= 1 ? setUserError(`${error} questão.`) :  setUserError(`${error} questões.`);
        hits === 1 ? setUserHits(`${hits} questão`) :  setUserHits(`${hits} questões`);
        
    }

    const resetUserResponse = () => {

        setUserResponse({})

    }

    
    function chooseRobotImg  (score)  {

        if(score <= 30){
          setRobot(RobotBad)
  
        }else if( score <= 70){
          setRobot(RobotIndiferent)
  
        }else if(score >= 80){
          setRobot(RobotHappy)
  
        }
    }

    useEffect(() => {

        // Se o contexto com as respostas não estiver com os dados, elas serão resgatadas no localStorage.  

        if( Object.keys(userResponse).length === 0 ){
            
            const data = localStorage.getItem('userResponse');
            const converted = JSON.parse(data)
            setQuestionData(converted)

        } else {

            setQuestionData(userResponse)
            
        }

    },[])

    useEffect(() => {

        if( questionData !== undefined ) {

            let dataAlreadyProcessed = contarAcertosEerros(questionData.result)

            processMessage( dataAlreadyProcessed[2], dataAlreadyProcessed[0], dataAlreadyProcessed[1] )
            setPercentageOfHits(dataAlreadyProcessed[2])
            chooseRobotImg( dataAlreadyProcessed[2])
        }
  
    }, [questionData])

    
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
        {questionData && ( 
            <div className='containerGameOver'>

                <Mode/>

                <VideoPlayer/>
                <div className="container-Content-GameOver">
                    

                    <h1 style={{color:messageColor}} className='message'>{congratulationsMessage}</h1>

                    <h2 className='userHits'> Você acertou {userHits} e errou {userError}</h2>

                    <HitIndicatorBar  percentage={percentageOfHits} circleWidth="200"/>

                    <Link to={"/Dev-Quiz/Select-Language"}>
                        <button className='btnReturn' title="Voltar para página inicial" onClick={()=>{resetUserResponse()}}>Jogar novamente</button>
                    </Link>

                    <ReviewQuestion questionData={questionData}/>

                    <Wave/>

                    <div className='robotGameOver'>
                        <img src={robot} alt="Robot ilustration" />
                    </div>
                        
                </div>

                
            </div>
        )}

    </>
  )
}

export default index
