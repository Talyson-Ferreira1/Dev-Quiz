import React, { createContext, useState} from "react";

export const LanguageContext = createContext()

export const LanguageProvider = ({children} ) => {
    const [userLanguage, setUserLanguage] = useState('PYTHON')

    return( <LanguageContext.Provider value={{userLanguage, setUserLanguage}}>{children}</LanguageContext.Provider>)
}