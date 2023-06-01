import React, { useContext } from 'react';

import { Counter_Context } from '../../contexts/Counter';

import './style.css'

function index() {

  const { counter } = useContext(Counter_Context)

  // Array com as cores de cada span
  const cores = Array.from({ length: 10 }, (v, i) =>
    i < counter ? '#639dac' : 'rgba(234, 234, 234, 0.23)'
  );

  return (
    <>
      <div className='progressBar'>
        {cores.map((cor, index) => (
          <span
            key={index}
            className='progressSpan'
            style={{ background: cor }}
          ></span>
        ))}
      </div>
    </>
  );
}

export default index;
