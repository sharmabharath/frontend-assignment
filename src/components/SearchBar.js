import React, { useState,useEffect } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { useTheme } from "../context/ThemeContext";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");
  const debouncedInput = useDebounce(input, 300);
    const {theme} = useTheme()
  useEffect(() => {
    onSearch(debouncedInput);
  }, [debouncedInput, onSearch]);

  return (
    <div className={theme === "light"?"light-search-bar":"dark-search-bar"}>
        
        <input
    
          type="text"
          placeholder="Search entries..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          
        />
    </div>
  );
};

export default SearchBar;
