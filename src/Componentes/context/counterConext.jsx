import React, { createContext, useState} from "react";

export const CounterContext = createContext()

export const CounterProvider = ({children} ) => {
    const [counterContext, setCounterContext] = useState(1)

    return( <CounterContext.Provider value={{counterContext, setCounterContext}}>{children}</CounterContext.Provider>)
}