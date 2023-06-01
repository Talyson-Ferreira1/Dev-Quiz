import React from 'react'

import './style.css'

function index({percentage, circleWidth}) {

    const radius = 65
    const dashArray = radius * Math.PI * 2
    const dashOffSet = dashArray - (dashArray * percentage) / 100
    
  return (
    <>
    <div className='containerProgressBar'>
      <svg 
          className='svg' 
          width={circleWidth} 
          height={circleWidth} 
          viewBox={`0 0 ${circleWidth} ${circleWidth}`}
         >
          <circle 
          className="circle-background" 
          cx={circleWidth / 2} 
          cy={circleWidth / 2} 
          strokeWidth="15px" 
          r={radius} />
         
         <circle 
          className="circle-progress" 
          cx={circleWidth / 2} 
          cy={circleWidth / 2} 
          strokeWidth="15px" 
          r={radius} 
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffSet
          }}
          transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
          />
          <text x="50%" y="50%" dy="0.3em" textAnchor="middle" className='circle-text'>{percentage}%</text>
          
      </svg>
    </div>
  </>
  )
}

export default index
