import React,{ createContext, useState } from 'react'


export const UserResponse_context = createContext()

export const UserResponse_Provider = ({children})=> {
    const [ userResponse, setUserResponse ] = useState ({})
    
    return ( <UserResponse_context.Provider value={{userResponse, setUserResponse}}> {children} </UserResponse_context.Provider>   )
}

    
    