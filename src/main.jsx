import React from 'react';
import ReactDOM from  'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App.jsx';
import InitScreen from './pages/InitScreen/index.jsx'
import SelectLanguage from './pages/SelectLanguage/index.jsx'
import QuestionsArea from './pages/QuestionsArea/index.jsx'
import Loader from './Componentes/Loader/index.jsx';
import GameOver from './pages/GameOver/index.jsx'

import { Theme_Provider } from './contexts/Theme_Conext.jsx';
import { Counter_Provider } from './contexts/Counter.jsx';
import { UserData_Provider } from './contexts/userData.jsx';
import { Question_Provider } from './contexts/Question_Context.jsx';
import { UserResponse_Provider } from './contexts/UserResponse_context.jsx';
import { Timer_Provider } from './contexts/Timer_Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Theme_Provider>
        <Counter_Provider>
          <UserData_Provider>
            <Question_Provider>
              <UserResponse_Provider>
                <Timer_Provider>
                  <Routes>
                    <Route path="/" element={<App />}>
                      <Route path="Dev-Quiz" element={<InitScreen />} />                
                      <Route path="Dev-Quiz/Select-Language" element={<SelectLanguage />} />                
                      <Route path="Dev-Quiz/Questions" element={<QuestionsArea />} />                
                      <Route path="Dev-Quiz/Loading" element={<Loader />} />                
                      <Route path="Dev-Quiz/GameOver" element={<GameOver />} />                
                    </Route>
                    {/* <Route path="*" element={<ErrorPage />} /> */}
                  </Routes>
                </Timer_Provider>
              </UserResponse_Provider>
            </Question_Provider>
          </UserData_Provider>
        </Counter_Provider>
      </Theme_Provider>
    </BrowserRouter>
  </React.StrictMode>
);
