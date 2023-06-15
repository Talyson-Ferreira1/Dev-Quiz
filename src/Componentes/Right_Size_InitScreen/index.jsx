import { useContext } from 'react'

import { Theme_Context } from '../../contexts/Theme_Conext'
import Ilustration from '../../img/init2.png'
import './style.css'


function Index() {

  const{theme} = useContext(Theme_Context)

  return (
    <div className="container_rightSize">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill={theme.mode ? theme.colors.light.PrimaryColor : theme.colors.dark.PrimaryColor } d="M56.6,-66.8C70.8,-55.5,78,-35.3,77.9,-16.6C77.8,2.1,70.3,19.2,59.6,31.4C48.9,43.5,35,50.8,19.6,58.4C4.2,66,-12.8,73.8,-29.9,72C-47,70.2,-64.3,58.6,-68.6,43.4C-72.9,28.1,-64.2,9.2,-58.5,-8.1C-52.8,-25.4,-50.1,-41,-40.9,-53.2C-31.6,-65.3,-15.8,-74.1,2.7,-77.3C21.2,-80.5,42.4,-78.1,56.6,-66.8Z" transform="translate(100 100)" />
        </svg>
        <img className='ilustration' src={Ilustration} alt="Ilustração" />
    </div>
  )
}

export default Index
