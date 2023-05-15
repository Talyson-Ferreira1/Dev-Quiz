import React, { createContext, useState} from "react";

export const ResultContext = createContext()

export const ResultProvider = ({children} ) => {
    const [userResult, setUserResult] = useState([])

    return( <ResultContext.Provider value={{userResult, setUserResult}}>{children}</ResultContext.Provider>)
}