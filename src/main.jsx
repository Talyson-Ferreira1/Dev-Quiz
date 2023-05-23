import React from 'react';
import ReactDOM from  'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App.jsx';
import InitScreen from './Componentes/InitScreen/InitScreen.jsx';
import QuestionArea from './Componentes/QuestionArea/QuestionArea.jsx';
import ChooseLanguages from './Componentes/ChooseLanguages/Languages.jsx';
import Loader from './Componentes/Loader/Loader.jsx';
import GameOver from './Componentes/GameOver/GameOver.jsx';
import ErrorPage from './Componentes/Error/Error.jsx';
import Test from './Componentes/Loader/SendQuestions.jsx'

import { ThemeProvider } from './Componentes/context/themeContext.jsx';
import { LanguageProvider } from './Componentes/context/LanguageContext.jsx';
import { QuestionProvider } from './Componentes/context/Questions.jsx';
import { CounterProvider } from './Componentes/context/counterConext.jsx';
import { UserResponseProvider } from './Componentes/context/UserResponse.jsx';
import { TimerProvider } from './Componentes/context/TimerContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <LanguageProvider>
            <QuestionProvider>
              <CounterProvider>
                  <UserResponseProvider>
                    <TimerProvider>
                      <Routes>
                        <Route path="/" element={<App />}>
                          <Route path="Dev-Quiz" element={<InitScreen />} />
                          <Route path="Dev-Quiz/tecnologia" element={<ChooseLanguages />} />
                          <Route path="Dev-Quiz/Loading" element={<Loader />} />
                          <Route path="Dev-Quiz/test" element={<Test />} />
                          <Route path="Dev-Quiz/questões" element={<QuestionArea />} />
                          <Route path="Dev-Quiz/gameOver" element={<GameOver />} />
                        </Route>
                        <Route path="*" element={<ErrorPage />} />
                      </Routes>
                    </TimerProvider>
                 </UserResponseProvider>
              </CounterProvider>
            </QuestionProvider>
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
