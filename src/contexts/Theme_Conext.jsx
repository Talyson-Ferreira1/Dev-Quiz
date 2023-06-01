import { createContext, useState } from "react";

export const Theme_Context = createContext();

export const Theme_Provider = ({ children }) => {
  const [theme, setTheme] = useState({
    mode: false,
    colors: {
      light:{ ColorBG:"#ffffff92", PrimaryColor:'#ce98a9', PrimmaryText:"#212A3E", SecondaryText:"#393646", card:"#0000006c"},
      dark :{ ColorBG:"#1e232e83" , PrimaryColor:'#639dac', PrimmaryText:"#ffffff", SecondaryText:"#f1f1f18c", card:"#d6d6d640"}
    },
  });

  const toggleTheme = () => {
    setTheme((prev) => ({
      ...prev,
      mode: !prev.mode,
    }));
  };

  return (
    <Theme_Context.Provider value={{ theme, toggleTheme }}>
      {children}
    </Theme_Context.Provider>
  );
};
