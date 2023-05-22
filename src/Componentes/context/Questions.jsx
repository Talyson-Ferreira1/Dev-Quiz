import React, { createContext, useState} from "react";

export const QuestionContext = createContext()

export const QuestionProvider = ({children} ) => {
    const [questions, setQuestions] = useState({})

    return( <QuestionContext.Provider value={{questions, setQuestions}}>{children}</QuestionContext.Provider>)
}