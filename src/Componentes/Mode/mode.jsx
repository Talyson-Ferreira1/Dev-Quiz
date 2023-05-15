import React, {useContext} from 'react';

import { ThemeContext } from '../context/themeContext';

import './mode.css'

export default function Mode() {

  const {theme, toggleTheme} = useContext(ThemeContext);
  
  return (
      <div className='Mode'>
          <label className="switch">
              <input type="checkbox" onChange={()=>{toggleTheme(!theme)}} checked={theme === "Light"}/>
              <span className="slider"></span>
          </label>
      </div>
  )
}

