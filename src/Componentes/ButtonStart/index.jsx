import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import './style.css'

function index({conditions}) {

  const navigate = useNavigate()


    const denyTutorial = ()=>{

        const alreadyExistPreferences = localStorage.getItem('preferences')

        if(alreadyExistPreferences){
            return;
        }else{
            const preferences = {
                tutorial: true
            }
          
            localStorage.setItem('preferences', JSON.stringify(preferences));
        }

    }

    const callComponent = () => {
      if(conditions.Language === true && conditions.Difficulty === true){
        navigate('/Dev-Quiz/Loading')
      }

    }



    useEffect(()=>{


    },[conditions])
    

  return (
    <div className='Container_button'>
        
      <button onClick={() => {denyTutorial();callComponent() }} className='buttoon_start'>Começar</button>                 
        
    </div>
  )
}

export default index
