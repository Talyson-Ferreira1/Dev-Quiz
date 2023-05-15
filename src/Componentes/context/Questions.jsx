import React, { createContext, useState} from "react";

export const QuestionContext = createContext()

export const QuestionProvider = ({children} ) => {
    const [questionGame, setQuestionGame] = useState()

    return( <QuestionContext.Provider value={{questionGame, setQuestionGame}}>{children}</QuestionContext.Provider>)
}