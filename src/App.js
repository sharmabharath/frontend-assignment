import React from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import './styles/main.css'

import MainContainer from "./components/MainContainer";

const AppContent = () => {
  const { theme } = useTheme();

 
  return (
    <div className={[
      theme === "light" ? "light-theme" : "dark-theme",
     "center"
    ].join(' ')}>
      <MainContainer />
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
