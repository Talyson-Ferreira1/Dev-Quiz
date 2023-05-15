import React from 'react'
import { Link } from 'react-router-dom'

import {  FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHouse } from '@fortawesome/free-solid-svg-icons';

function ToHome() {
  return (
    <div>
      <Link to={"/Quiz"}>
          <button title="Voltar para página inicial"><FontAwesomeIcon icon={faHouse} /></button>
        </Link>
    </div>
  )
}

export default ToHome
