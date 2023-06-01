import React, { createContext, useState} from "react";

export const Counter_Context = createContext()

export const Counter_Provider = ({children} ) => {
    const [counter, setCounter] = useState(1)

    return( <Counter_Context.Provider value={{counter, setCounter}}>{children}</Counter_Context.Provider>)
}