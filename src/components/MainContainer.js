import React, { useCallback, useEffect, useState } from "react";
import { fetchKickstarterProjects } from "../services/apisService";
import Table from "../components/Table";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import DarkModeToggle from "../components/DarkModeToggle";
import { useDebounce } from "../hooks/useDebounce";
import { useTheme } from "../context/ThemeContext";

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 300);
const {theme} = useTheme()
  useEffect(() => {
    const loadProjects = async () => {
      try {
        const res = await fetchKickstarterProjects();
        
        setProjects(res);
        setFilteredProjects(res);  
      } catch (error) {
        console.error(error);
      }
    };

    loadProjects();
  }, []);

  useEffect(() => {
    const totalPages = Math.ceil(filteredProjects.length / 5);
    if (currentPage > totalPages) {
      setCurrentPage(totalPages || 1);  // Ensure currentPage is set to 1 if totalPages is 0
    }
  }, [filteredProjects, currentPage]);

  useEffect(() => {
     
    if (debouncedSearchQuery) {
      const lowerCaseQuery = debouncedSearchQuery.toLowerCase();
      const newFilteredProjects = projects.filter(
        (project) =>
          project["s.no"].toString().includes(lowerCaseQuery) || 
          project[`amt.pledged`].toString().toLowerCase().includes(lowerCaseQuery) || 
          project["percentage.funded"].toString().includes(lowerCaseQuery)  
      );
      setFilteredProjects(newFilteredProjects);
      setCurrentPage(1);  
    } else {
      setFilteredProjects(projects); 
      setCurrentPage(1);  
    }
  }, [debouncedSearchQuery, projects]);

 
  const handleSearch = useCallback((query) => {
    setSearchQuery(query); 
  }, []);

  const displayedProjects = filteredProjects.slice(
    (currentPage - 1) * 5,
    currentPage * 5
  );

  return (
    <div className={[
        theme === "light" ? "light-main-container" : "dark-main-container",
      
      ].join(' ')}>
    <div className="styled-searchbar">
    <DarkModeToggle />
    
    <SearchBar onSearch={handleSearch} />
    </div>
     
      <Table data={displayedProjects} />
      <Pagination
        total={filteredProjects.length}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Home;
