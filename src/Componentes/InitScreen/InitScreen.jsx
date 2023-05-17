import React, {useContext,useRef, useEffect} from 'react';
import { Link } from 'react-router-dom';

import { ThemeContext } from '../context/themeContext.jsx';
import { CounterContext } from '../context/counterConext';

import Mode from '../../Componentes/Mode/mode.jsx'
import ImgIlustration from '../../img/init2.png';
import Video from "../fundo/videoPlayer"
import './Init.css';


const initScreen = () => {

  const { setCounterContext } = useContext(CounterContext)
  const { theme } = useContext(ThemeContext);

  const containerRef = useRef();
  const titleRef = useRef();
  const textRef = useRef();

  useEffect(()=>{

    containerRef.current.classList.toggle("Light", theme === "Light");
    titleRef.current.classList.toggle("Light", theme === "Light");
    textRef.current.classList.toggle("Light", theme === "Light");
  
  },[theme])

  useEffect(()=>{
    setCounterContext(1)
  },[])
  return (
    <>
      <div ref={containerRef} className="containerInit">
        <Video/>
        <Mode/>
        <div className="leftSize">
          <h1 ref={titleRef} className='title'>O quiz desenvolvido para desenvolvedores.</h1>
          <p ref={textRef} className='paragraph'>O DevQuiz é um Quiz para programadores, é uma ótima maneira de testar e aprimorar seus conhecimentos em programação. Com perguntas específicas, de diversas linguagens e tecnologias, os desenvolvedores podem avaliar seu nível de conhecimento e identificar áreas que precisam ser melhoradas. Convido você a testar esta aplicação e se desafiar a melhorar suas habilidades.</p>
          <div className="containerBtn">
            <Link to="/Dev-Quiz/tecnologia">
              <button className='btnInit'>Começar</button>
            </Link>
          </div>
        </div>
        <div className="rightSize">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#639dac" d="M56.6,-66.8C70.8,-55.5,78,-35.3,77.9,-16.6C77.8,2.1,70.3,19.2,59.6,31.4C48.9,43.5,35,50.8,19.6,58.4C4.2,66,-12.8,73.8,-29.9,72C-47,70.2,-64.3,58.6,-68.6,43.4C-72.9,28.1,-64.2,9.2,-58.5,-8.1C-52.8,-25.4,-50.1,-41,-40.9,-53.2C-31.6,-65.3,-15.8,-74.1,2.7,-77.3C21.2,-80.5,42.4,-78.1,56.6,-66.8Z" transform="translate(100 100)" />
          </svg>
          <img src={ImgIlustration} alt="Ilustração" />
        </div>
      </div>
    </>
  )
}

export default initScreen
