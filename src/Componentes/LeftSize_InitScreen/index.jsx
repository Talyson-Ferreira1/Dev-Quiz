import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';

import './style.css'

import { Theme_Context } from '../../contexts/Theme_Conext';

function Index() {
  const { theme } = useContext(Theme_Context);

  useEffect(()=>{

    //Altera as cores baseado no tema
    
    if(theme.mode === true ){
      document.documentElement.style.setProperty('--text_primary_color', theme.colors.light.PrimmaryText);
      document.documentElement.style.setProperty('--text_secundary_color',  theme.colors.light.SecondaryText);
      document.documentElement.style.setProperty('--primary_color',  theme.colors.light.PrimaryColor);
    
      
    }else {
      document.documentElement.style.setProperty('--text_primary_color', theme.colors.dark.PrimmaryText);
      document.documentElement.style.setProperty('--text_secundary_color', theme.colors.dark.SecondaryText);
      document.documentElement.style.setProperty('--primary_color',  theme.colors.dark.PrimaryColor);
     
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[theme.mode]) 

  return (
    <div className="container_LeftSize">
      <h1>O quiz desenvolvido para desenvolvedores.</h1>
      <p>Melhore suas habilidades em programação com o DevQuiz!<br/> Esse é um Quiz feito especialmente para programadores, com perguntas sobre várias linguagens e tecnologias. Teste seus conhecimentos, descubra seu nível atual e encontre áreas para melhorar. Desafie-se e aprimore suas habilidades hoje mesmo!</p>
      <div className="container_Button">
        <Link to="/Dev-Quiz/Select-Language">
          <button className='button_Init'>Começar</button>
        </Link>
      </div>
    </div>
  )
}

export default Index
