import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';

import './App.css';

function App() {
  const navigate = useNavigate();

  useEffect(()=>{
    navigate('/Quiz')
  },[])

  return (
    <>
      <Outlet/>
    </>
  )
}

export default App
