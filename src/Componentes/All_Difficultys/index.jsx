/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from 'react'

import { Theme_Context } from '../../contexts/Theme_Conext';
import { UserData_Context } from '../../contexts/userData'

import './style.css'

function Index({StageDifficulty}) {
    
    const { theme } = useContext(Theme_Context)
    const { setUserData } = useContext(UserData_Context) 

    const [ selectDifficulty, setSelectDifficulty ] = useState({
        easy: false, 
        medium: false, 
        hard: false
    })

    const captureChecked = (event) => {
        const { value } = event.target;

        if(value !== undefined){
            setUserData(prev =>({
                ...prev,
                Difficulty: value
            
            }))

        }

        setSelectDifficulty((prevState) => ({
          ...prevState,
          easy: value === "easy",
          medium: value === "medium",
          hard: value === "hard"
        }));
        
        SaveDifficultyInLocalStorage(value)
    }

    const SaveDifficultyInLocalStorage = (difficulty) =>{

        localStorage.setItem("Difficulty", difficulty)

    }

    
    useEffect(()=>{
    
        if(theme.mode === true ){ 
            document.documentElement.style.setProperty('--cardColor', theme.colors.light.card);   
        
        }else {
            document.documentElement.style.setProperty('--cardColor', theme.colors.dark.card);  
            
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[theme.mode]) 
    
    useEffect(() => {

        StageDifficulty(selectDifficulty);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectDifficulty]);
      
  

    return (
         <div className="difficulty">
                    
                    <div  className="radio-inputs">
                        <label className="radio">
                        <input
                            type="radio"
                            name="radio"
                            value="easy"
                            checked={selectDifficulty.easy}
                            onClick={captureChecked}
                            readOnly
                        />
                        <span className="name">Fácil</span>
                        </label>
                        <label className="radio">
                        <input
                            type="radio"
                            name="radio"
                            value="medium"
                            checked={selectDifficulty.medium}
                            onClick={captureChecked}
                            readOnly
                        />
                        <span className="name">Média</span>
                        </label>
                        <label className="radio">
                        <input
                            type="radio"
                            name="radio"
                            value="hard"
                            checked={selectDifficulty.hard}
                            onClick={captureChecked}
                            readOnly
                        />
                        <span className="name">Difícil</span>
                        </label>
                    </div>
        </div>
    )
}

export default Index
