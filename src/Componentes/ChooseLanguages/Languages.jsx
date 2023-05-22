import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faComment} from '@fortawesome/free-solid-svg-icons'

import { ThemeContext } from '../context/themeContext';
import { LanguageContext } from '../context/LanguageContext';
import { UserResponseContext } from '../context/UserResponse';

import SQLIcon from '../../img/icons/icons-sql.png';
import JavaScriptIcon from '../../img/icons/icon-javascript.svg';
import PythonIcon from '../../img/icons/icon-python.svg';
import JavaIcon from '../../img/icons/icon-java.svg';
import HTMLIcon from '../../img/icons/icon-html5.svg';
import CssIcon from '../../img/icons/icon-css3.svg';
import Robot from '../../img/robot-happy/robot-4.png';
import Video from '../fundo/videoPlayer';
import Mode from '../Mode/mode';
import './Languages.css';

export default function ChooseLinguagens(){
    
    const { theme } = useContext(ThemeContext)
    const { setUserResponse } = useContext(UserResponseContext)
    const { setUserLanguage} = useContext(LanguageContext)
    
    const [ selectedOption, setSelectedOption ] = useState("easy");
    
    const containerRef = useRef();
    const titleRef = useRef();
    const input = useRef();
    const refs = {
        python:useRef(),
        js: useRef(),
        sql: useRef(),
        java: useRef(),
        html: useRef(),
        css: useRef(),
    };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);

    };

    const ChooseLanguage = (lang) => {
        setUserLanguage([...lang, selectedOption]);

        const newData = [ lang[0], selectedOption];
        localStorage.setItem('LanguageAndDifficulty', JSON.stringify(newData));

    };

    useEffect(()=>{
        
        theme === "Light"
        ? [containerRef, titleRef, input, ...Object.values(refs)]
            .forEach(ref => ref.current.classList.add("Light"))
        : [containerRef, titleRef, input, ...Object.values(refs)]
            .forEach(ref => ref.current.classList.remove("Light"));
      
    },[theme])

    useEffect(()=>{
        
        setUserResponse({})
      
    },[])
  

    return(
        <>
            <Video/>
            <section ref={containerRef} className="containerLanguages">
                <Link to="/Dev-Quiz">
                    <div className="return"><FontAwesomeIcon icon={faArrowLeft} /></div>
                </Link>
                <Mode/>      
                <h1 ref={titleRef} className="titulo">Escolha a tecnologia e a dificuldade </h1>
                <div className="grid-container"> 
            
                    <Link to="/Dev-Quiz/Loading"  >
                        <div ref={refs.python} className="language python" onClick={()=>{ChooseLanguage(["PYTHON"])}} >
                            <img src={PythonIcon} alt="Python icon"/>
                        </div>
                    </Link>

                    <Link to="/Dev-Quiz/Loading">
                        <div ref={refs.js} className="language JavaScript" onClick={()=>{ChooseLanguage(["JAVASCRIPT"])}}>
                            <img src={JavaScriptIcon} alt="JavaScript icon"/>
                        </div>
                    </Link>

                    <Link to="/Dev-Quiz/Loading" >
                        <div ref={refs.sql} className="language SQL" onClick={()=>{ChooseLanguage(["SQL"])}}>
                            <img src={SQLIcon} alt="SQL icon"/>
                        </div>
                    </Link>

                    <Link to="/Dev-Quiz/Loading" >
                        <div ref={refs.java}className="language Java" onClick={()=>{ChooseLanguage(["JAVA"])}}>
                            <img src={JavaIcon} alt="Java icon"/>
                        </div>
                    </Link>

                    <Link to="/Dev-Quiz/Loading" >
                        <div ref={refs.html} className="language HTML" onClick={()=>{ChooseLanguage(["HTML"])}}>
                            <img src={HTMLIcon} alt="HTML icon"/>
                        </div>
                    </Link>

                    <Link to="/Dev-Quiz/Loading" >
                        <div ref={refs.css} className="language CSS" onClick={()=>{ChooseLanguage(["CSS"])}}>
                            <img src={CssIcon} alt="CSS icon"/>
                        </div>
                    </Link>
                </div>
                <div className="difficulty">
                    <div ref={input} className="radio-inputs">
                        <label className="radio">
                        <input
                            type="radio"
                            name="radio"
                            value="easy"
                            checked={selectedOption === "easy"}
                            onChange={handleOptionChange}
                        />
                        <span className="name">Fácil</span>
                        </label>
                        <label className="radio">
                        <input
                            type="radio"
                            name="radio"
                            value="medium"
                            checked={selectedOption === "medium"}
                            onChange={handleOptionChange}
                        />
                        <span className="name">Média</span>
                        </label>
                        <label className="radio">
                        <input
                            type="radio"
                            name="radio"
                            value="hard"
                            checked={selectedOption === "hard"}
                            onChange={handleOptionChange}
                        />
                        <span className="name">Difícil</span>
                        </label>
                    </div>
                    </div>
                <div className="svgBg">

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#639dac" fillOpacity="1" d="M0,0L80,10.7C160,21,320,43,480,85.3C640,128,800,192,960,197.3C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                    </svg>
                    <img className='robot' src={Robot} alt="Robot ilustration" />

                </div>
            </section>
        </>
    )
}