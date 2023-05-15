import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState("Dark")

    const toggleTheme = () => {
        setTheme(theme === "Dark" ? "Light" : "Dark")
    };

    return( <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>);
}