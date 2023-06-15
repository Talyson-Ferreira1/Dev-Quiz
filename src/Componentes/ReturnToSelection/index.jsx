import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'

import { Theme_Context } from '../../contexts/Theme_Conext'

import './style.css'

function Index() {

  const { theme } = useContext(Theme_Context)

  useEffect(()=>{
    
    if(theme.mode === true ){ 
        document.documentElement.style.setProperty('--Primary-color', theme.colors.light.PrimaryColor);   
    
    }else {
        document.documentElement.style.setProperty('--Primary-color', theme.colors.dark.PrimaryColor);  
        
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[theme.mode]) 

  return (
    <div className='Container_button_return_'>
        <Link to="/Dev-Quiz/Select-Language">
            <button className='button_return_to_Selection'><FontAwesomeIcon icon={faArrowLeft}/></button>
        </Link>
    </div>
  )
}

export default Index
