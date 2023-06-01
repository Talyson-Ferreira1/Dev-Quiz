import React, { createContext, useState} from "react";

export const Timer_Context = createContext()

export const Timer_Provider = ({children} ) => {
    const [timer, setTimer] = useState({  
        timer:0,
        state: false,
        finished:false
    })

    return( <Timer_Context.Provider value={{timer, setTimer}}>{children}</Timer_Context.Provider>)
}