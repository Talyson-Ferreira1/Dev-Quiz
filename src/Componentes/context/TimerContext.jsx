import React, { createContext, useState} from "react";

export const TimerContext = createContext()

export const TimerProvider = ({children} ) => {
    const [timer, setTimer] = useState({
        timer: 0,
        active:false,
        finished:false
    })

    return(<TimerContext.Provider value={{timer, setTimer}}>{children}</TimerContext.Provider>)
}