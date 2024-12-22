import React, { createContext, useContext, useState, useCallback } from "react";
import { useDebounce } from "../hooks/useDebounce";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [pendingTheme, setPendingTheme] = useState(theme);

   
  const debouncedTheme = useDebounce(pendingTheme, 100);

  const toggleTheme = useCallback(() => {
    setPendingTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

   
  React.useEffect(() => {
    setTheme(debouncedTheme);
  }, [debouncedTheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
