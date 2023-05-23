import React, { useContext, useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


import {LanguageContext} from '../context/LanguageContext' 
import { TimerContext } from '../context/TimerContext';

import ProgressBar from './ProgressBar';
import Question from './Question';
import Video from '../fundo/videoPlayer'
import Timer from './timer'
import FineshedTime from './FineshedTime';
import './QuestionArea.css';

export default function QuestionArea() {

  const { timer } = useContext(TimerContext);

  const [ isActive, setIsActive ] = useState(false)
  

  useEffect(()=>{
    if(timer.active === true ){
      setIsActive(true)
      
    }else{
      setIsActive(false)  
    }

  },[])
    
  //adicionar um timer quando estiver no medio e dificil 
    
  return (
    <>

      {timer.finished && (
        <FineshedTime/>
      )}

      <div className='container'>

        <Video/>

        <div className='ContainerQuestions'>

          <Link to="/Dev-Quiz/tecnologia">
              <div className="return">
                <FontAwesomeIcon icon={faArrowLeft} />
              </div>
          </Link>

          <ProgressBar/>
          
          {isActive &&(
            <Timer/>)}

          <Question/>

          <div className="svgBg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#639dac" fillOpacity ="1" d="M0,0L80,10.7C160,21,320,43,480,85.3C640,128,800,192,960,197.3C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
                </path>
            </svg>
          </div>

        </div>
        
      </div>
    </>
  );
}