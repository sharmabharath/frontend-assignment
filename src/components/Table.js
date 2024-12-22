import React from "react";
import '../styles/table.css'
import { useTheme } from "../context/ThemeContext";
const Table = ({ data }) => {
    const {theme} = useTheme()
  return (
    <table className={theme === "light" ?"light-styled-table": "dark-styled-table"}>
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Percentage Funded</th>
          <th>Amount Pledged</th>
        </tr>
      </thead>
      <tbody>
        {data.map((project, index) => (
          <tr key={index}>
            <td>{ project[`s.no`]}</td>
            <td>{project[`percentage.funded`]}</td>
            <td>{project[`amt.pledged`]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
