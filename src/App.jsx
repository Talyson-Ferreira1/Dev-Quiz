import React from 'react';
import { Outlet } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className='body'>
      <Outlet />
    </div>
  );
}

export default App;