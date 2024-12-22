import React from "react";
import { useTheme } from "../context/ThemeContext";
import { moon,sun } from "../assets/icons";
const DarkModeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} 
    style={{ padding: "5px",
     margin: "10px",borderRadius:'10px',
     cursor:'pointer'
      }}>
      {theme === "light" ? moon() : sun()}
    </button>
  );
};

export default DarkModeToggle;
