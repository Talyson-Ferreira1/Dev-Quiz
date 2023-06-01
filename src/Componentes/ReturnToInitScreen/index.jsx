import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'

import { Theme_Context } from '../../contexts/Theme_Conext'

import './style.css'

function index() {

  const { theme } = useContext(Theme_Context)

  useEffect(()=>{
    
    if(theme.mode === true ){ 
        document.documentElement.style.setProperty('--Primary-color', theme.colors.light.PrimaryColor);   
    
    }else {
        document.documentElement.style.setProperty('--Primary-color', theme.colors.dark.PrimaryColor);  
        
    }

  },[theme.mode]) 

  return (
    <div className='Container_button_return'>
        <Link to="/Dev-Quiz">
              <button className='button_return_to_init'><FontAwesomeIcon icon={faArrowLeft}/></button>
        </Link>
    </div>
  )
}

export default index
