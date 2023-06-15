import {useContext, useEffect, useState} from 'react'

import { Theme_Context } from '../../contexts/Theme_Conext'
import { Counter_Context } from '../../contexts/Counter'
import { UserData_Context } from '../../contexts/userData'
import { UserResponse_context } from '../../contexts/UserResponse_context'

import Robot from '../../img/robot-happy/robot-4.png'
import Background from '../../Componentes/Fundo/videoPlayer'
import Wave from '../../Componentes/Wave_Background/index'
import SelectLanguage from '../../Componentes/All_Languages/index'
import SelectDifficulty from '../../Componentes/All_Difficultys/index';
import ButtonStart from '../../Componentes/ButtonStart/index'
import ButtonReturnToInit from  '../../Componentes/ReturnToInitScreen'
import Mode from '../../Componentes/Mode/mode'
import './style.css';

function Index() {

  const { theme } = useContext(Theme_Context); 
  const { setCounter } =  useContext(Counter_Context)
  const { setUserData } = useContext(UserData_Context)
  const { setUserResponse } = useContext(UserResponse_context)

  const [ conditionsToStart, setConditionsToStart ] = useState({ Language:false, Difficulty:false})
  const [ activeTutorial, setActiveTutorial ] = useState()
  const [ instructionText, setInstructionText ] = useState()
  const [ applicationStage, setApplicationStage ] = useState({

    Selected: {
      //usado para marcar qual estágio de seleção o usuário esta 
      Language:true,
      Difficulty: false,
      Button:false
    },
    Stage: {
      //Usado para bloquear o click nos restantes dos componentes 
      Language:false,
      Difficulty: false,
      Button:false
    }

  });

  const setTutorialStageLanguage = (value) => {   
    
    const isSelectedLanguage = Object.values(value.Language).some((selected) => selected === true); 
    
    if (isSelectedLanguage) {
      
      setApplicationStage(prevState => ({
        ...prevState,
        Selected: {
          Language:false,
          Difficulty: true,
          Button:false
        }
      }));

      setConditionsToStart(prev => ({
        ...prev,
        Language:true
      }))
      
    }

  
  }

  const setTutorialStageDifficulty = (value) =>{

    const isDifficultySelected = Object.values(value).some(difficulty => difficulty === true);

    if (isDifficultySelected) {
    
      setApplicationStage(prevState => ({
        ...prevState,
        Selected: {
          Language: false,
          Difficulty: false,
          Button: true
        }
      }));

      setConditionsToStart(prev => ({
        ...prev,
        Difficulty:true
      }))
      
     
    }
  }

  const changeInstructionText  = () => {

    if( !conditionsToStart.Language ){
      setInstructionText("Selecione uma tecnologia")
      return;
    }else if( !conditionsToStart.Difficulty ){
      setInstructionText("Escolha a dificuldade")
      return;
    }else if( conditionsToStart.Language && conditionsToStart.Difficulty ){
      setInstructionText("Clique em começar")
      return;
    }

  }

  useEffect(()=>{

    //resgata as preferências e descobre se o tutorial ja foi ensinado.

    const cookie = localStorage.getItem('preferences')
    cookie ? setActiveTutorial(false) : setActiveTutorial(true)

    setCounter(1)
    setUserData("")
    setUserResponse({})

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  useEffect(()=>{

    //Altera as cores baseado no tema
    
    if(theme.mode === true ){   
      document.documentElement.style.setProperty('--text_primary_color', theme.colors.light.PrimmaryText);   
      document.documentElement.style.setProperty('--primary-container', theme.colors.light.ColorBG);   
    
    }else {
      document.documentElement.style.setProperty('--text_primary_color', theme.colors.dark.PrimmaryText);
      document.documentElement.style.setProperty('--primary-container', theme.colors.dark.ColorBG);   
     
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[theme.mode]) 

  useEffect(()=>{

    if(activeTutorial) {

      //altera o valor dos estágios entre selecione a linguagem e selecione a dificuldade

      if (applicationStage.Selected.Language) {

        setApplicationStage(prevState => ({
          ...prevState,
          Stage: {
            Language: true,
            Difficulty: false,
            Button:false
          }
        }));

      } else if (applicationStage.Selected.Difficulty) {

        setApplicationStage(prevState => ({
          ...prevState,
          Stage: {
            Language: false,
            Difficulty: true,
            Button:false
          }
        }));

      } else if (applicationStage.Selected.Button) {

        setApplicationStage(prevState => ({
          ...prevState,
          Stage: {
            Language: false,
            Difficulty: false,
            Button:true
          }
        }));

      }
     
    }

    changeInstructionText()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[activeTutorial, applicationStage.Selected])

  return (
    <div className='Container_SelectLanguage'>

      {activeTutorial && (<div className= {
        `BlockClick
        ${applicationStage.Stage.Language? 'Language': ''}
        ${applicationStage.Stage.Difficulty? 'Difficulty': ''}
        ${applicationStage.Stage.Button? 'Button': ''}`
      } >  </div>)}

      <h1 className='instruction_Text'>{instructionText}</h1>
      <img className='Robot_Languages' src={Robot} alt="robot ilustration" />
      <ButtonReturnToInit/>
      <Mode/>
      <SelectLanguage StateLanguage={setTutorialStageLanguage}/>
      <SelectDifficulty StageDifficulty={setTutorialStageDifficulty}/>
      <ButtonStart conditions={conditionsToStart}/>
      <Background/> 
      <Wave/>
      
    </div>
  )
}

export default Index


