import React, { useRef, useEffect, useContext } from 'react'

import Mode from '../../Componentes/Mode/mode'
import Video from '../../Componentes/Fundo/videoPlayer'
import LeftSize from '../../Componentes/LeftSize_InitScreen/index'
import RightSize from '../../Componentes/Right_Size_InitScreen/index'
import './style.css'

import { Theme_Context } from '../../contexts/Theme_Conext'

function index() {
    const { theme, toggleTheme } = useContext(Theme_Context);

    const Refs = {
      container : useRef(),
      text: useRef()
    }
    
    useEffect(()=>{

      //Altera as cores baseado no tema
      
      if(theme.mode === true ){
        document.documentElement.style.setProperty('--primary-container', theme.colors.light.ColorBG);        

      }else {
        document.documentElement.style.setProperty('--primary-container',  theme.colors.dark.ColorBG);
        
      }
    },[theme.mode])   

  return (
    <div className='containerContent' ref={Refs.container}>
        <LeftSize/>
        <RightSize/>
        <Video/>
        <Mode/>
    </div>
  )
}

export default index
