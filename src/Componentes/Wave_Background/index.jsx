import { useContext } from 'react'
import { Theme_Context } from '../../contexts/Theme_Conext'

import './Style.css'

function Index() {

  
  const { theme } = useContext(Theme_Context)

  return (
    <div className='StyleWave'>
        <svg style={{width:"100%"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill={theme.mode ? theme.colors.light.PrimaryColor : theme.colors.dark.PrimaryColor } fillOpacity="1" d="M0,0L80,10.7C160,21,320,43,480,85.3C640,128,800,192,960,197.3C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
    </div>
  )
}

export default Index
