import React, { createContext, useState} from "react";

export const Question_Context = createContext()

export const Question_Provider = ({children} ) => {
    const [Question, setQuestion] = useState()

    return( <Question_Context.Provider value={{Question, setQuestion}}>{children}</Question_Context.Provider>)
}