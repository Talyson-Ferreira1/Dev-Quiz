import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Init from './Componentes/InitScreen/InitScreen.jsx';
import QuestionArea from './Componentes/QuestionArea/QuestionArea.jsx';
import ChooseLanguages from './Componentes/ChooseLanguages/Languages.jsx';
import Loader from './Componentes/Loader/Loader.jsx'
import GameOver from './Componentes/GameOver/GameOver.jsx';
import ErrorPage from './Componentes/Error/Error.jsx';

import { ThemeProvider } from './Componentes/context/themeContext.jsx'
import { LanguageProvider } from './Componentes/context/LanguageContext.jsx'
import { ResultProvider } from './Componentes/context/resultContext.jsx'
import { QuestionProvider } from './Componentes/context/Questions.jsx' 
import { CounterProvider } from './Componentes/context/counterConext.jsx'
import { UserDataProvider } from './Componentes/context/userData.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/Quiz",
        element: <Init />,
      },
      {
        path: "/tecnologia",
        element: <ChooseLanguages />,
      },
      {
        path: "/...",
        element: <Loader />,
      },
      {
        path: "/questões",
        element: <QuestionArea />,
      },
      {
        path: "/gameOver",
        element: <GameOver />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      <ThemeProvider>
        <LanguageProvider>
          <ResultProvider>
            <QuestionProvider>
              <CounterProvider>
                <UserDataProvider>
                  <RouterProvider router={router} />
                </UserDataProvider>
              </CounterProvider>
            </QuestionProvider>
          </ResultProvider>
        </LanguageProvider>
      </ThemeProvider>
    
  </React.StrictMode>
)
