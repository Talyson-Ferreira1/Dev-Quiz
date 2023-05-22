import React, { createContext, useState} from "react";

export const UserResponseContext = createContext()

export const UserResponseProvider = ({children} ) => {
    const [ userResponse, setUserResponse ] = useState({})

    return( <UserResponseContext.Provider value={{userResponse, setUserResponse}}>{children}</UserResponseContext.Provider>)
}