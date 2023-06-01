import React, { createContext, useState} from "react";

export const UserData_Context = createContext()

export const UserData_Provider = ({children} ) => {
    const [userData, setUserData] = useState({})

    return( <UserData_Context.Provider value={{userData, setUserData}}>{children}</UserData_Context.Provider>)
}