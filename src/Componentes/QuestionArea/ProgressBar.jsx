import React, { useState, useContext } from 'react';
import { CounterContext } from '../context/counterConext';


function ProgressBar(props) {

  const {counterContext, setCounterContext} = useContext(CounterContext)

  const progressBar = {
    position: 'absolute',
    top: '2rem',
    width: '100%',
    height: '5%',
    left: "0",
    display: 'flex',
    gap: '.5rem',
    padding: '0 .5rem',
  };

  const progressSpanStyle = {
    background: 'rgba(234, 234, 234, 0.23)',
    width: 'calc(100% / 10)',
    height: '.5rem',
    borderRadius: '5px',
    transition: 'all .5s ease-out',
  };

  // Array com as cores de cada span
  const cores = Array.from({ length: 10 }, (v, i) =>
    i < counterContext ? '#639dac' : 'rgba(234, 234, 234, 0.23)'
  );

  return (
    <div>
      <div style={progressBar} className='progress'>
        {cores.map((cor, index) => (
          <span
            key={index}
            style={{ ...progressSpanStyle, background: cor }}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default ProgressBar;
