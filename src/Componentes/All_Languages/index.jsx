import React,{ useEffect, useState, useContext } from 'react'

import { Theme_Context } from '../../contexts/Theme_Conext'
import { UserData_Context } from '../../contexts/userData'

import Img_Javascript from '../../img/icons/icon-javascript.svg'
import Img_Python from '../../img/icons/icon-python.svg'
import Img_Html from '../../img/icons/icon-html5.svg'
import Img_Java from '../../img/icons/icon-java.svg'
import Img_Css from '../../img/icons/icon-css3.svg'
import Img_Sql from '../../img/icons/icons-sql.png'
import './style.css'

function index({StateLanguage}) {
    
    const { theme } = useContext(Theme_Context);
    const { setUserData } = useContext(UserData_Context) 
    
    const [ selectedLanguage, setSelectedLanguage ] = useState({
        Language:{
            PYTHON:false, JAVA:false, SQL:false,
            HTML:false, CSS:false, JAVASCRIPT:false
        }
    })

    const handleLanguage = (arg) => {

        if(arg !== undefined){
            setUserData(prev =>({
                ...prev, 
                Language: arg
            }))

            SaveLanguageInLocalStorage(arg)

        }


        setSelectedLanguage(prev => ({
          ...prev,
          Language: Object.keys(prev.Language).reduce((acc, key) => {
            acc[key] = key === arg;
            return acc;
          }, {})
        }))
    }

    const SaveLanguageInLocalStorage = (nameLanguage) => {
        localStorage.setItem("Language", nameLanguage)
    }

    useEffect(()=>{
        StateLanguage(selectedLanguage)
    },[selectedLanguage.Language])

    useEffect(()=>{
        
        if(theme.mode === true ){ 
          document.documentElement.style.setProperty('--cardColor', theme.colors.light.card);   
        
        }else {
          document.documentElement.style.setProperty('--cardColor', theme.colors.dark.card);  
         
        }

    },[theme.mode]) 
      
      

  return (
    <div className='Container_Languages'> 

        <div className={`Icon-Language python ${selectedLanguage.Language.PYTHON?"checked":""}`} onClick={()=>{handleLanguage("PYTHON")}}>
            <img src={Img_Python} alt="Ilustration Python language" />
        </div>
        <div className={`Icon-Language javascript ${selectedLanguage.Language.JAVASCRIPT?"checked":""}`} onClick={()=>{handleLanguage("JAVASCRIPT")}}>    
            <img src={Img_Javascript} alt="Ilustration Javascript language" />
        </div>
        <div className={`Icon-Language sql ${selectedLanguage.Language.SQL?"checked":""}`} onClick={()=>{handleLanguage("SQL")}}>
            <img src={Img_Sql} alt="Ilustration Sql language" />
        </div>
        <div className={`Icon-Language java ${selectedLanguage.Language.JAVA?"checked":""}`} onClick={()=>{handleLanguage("JAVA")}}>
            <img src={Img_Java} alt="Ilustration Java language" />
        </div>
        <div className={`Icon-Language html ${selectedLanguage.Language.HTML?"checked":""}`} onClick={()=>{handleLanguage("HTML")}}>
            <img src={Img_Html} alt="Ilustration Html language" />
        </div>
        <div className={`Icon-Language css ${selectedLanguage.Language.CSS?"checked":""}`} onClick={()=>{handleLanguage("CSS")}}>
            <img src={Img_Css} alt="Ilustration Css language" />
        </div>
      
    </div>
  )
}

export default index
