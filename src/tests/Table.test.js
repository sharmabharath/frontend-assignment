import React from "react";
import { render, screen } from "@testing-library/react";
import Table from "../components/Table"; 
import { ThemeProvider } from "../context/ThemeContext";  

const testData = [
  {
    "s.no": 0,
    "amt.pledged": 15823,
    "percentage.funded": 186,
  },
  {
    "s.no": 1,
    "amt.pledged": 6859,
    "percentage.funded": 8,
  },
  {
    "s.no": 2,
    "amt.pledged": 17906,
    "percentage.funded": 102,
  },
  
];


describe("Table Component", () => {
  it("renders table data correctly in light theme", () => {
    render(
      <ThemeProvider initialTheme="light">
        <Table data={testData} />
      </ThemeProvider>
    );

    
    expect(screen.getByText("S.No.")).toBeInTheDocument();
    expect(screen.getByText("Percentage Funded")).toBeInTheDocument();
    expect(screen.getByText("Amount Pledged")).toBeInTheDocument();


    
    expect(screen.getByText("0")).toBeInTheDocument();
    expect(screen.getByText("15823")).toBeInTheDocument();
    expect(screen.getByText("186")).toBeInTheDocument();

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("6859")).toBeInTheDocument();
    expect(screen.getByText("8")).toBeInTheDocument();
     
    const tableElement = screen.getByRole('table');
    expect(tableElement).toHaveClass('light-styled-table');

  });


  it("renders table data correctly in dark theme", () => {
      render(
        <ThemeProvider initialTheme="dark">
          <Table data={testData} />
        </ThemeProvider>
      );
  
      
      expect(screen.getByText("S.No.")).toBeInTheDocument();
      expect(screen.getByText("Percentage Funded")).toBeInTheDocument();
      expect(screen.getByText("Amount Pledged")).toBeInTheDocument();
  
      
        expect(screen.getByText("0")).toBeInTheDocument();
        expect(screen.getByText("15823")).toBeInTheDocument();
        expect(screen.getByText("186")).toBeInTheDocument();
    
        expect(screen.getByText("1")).toBeInTheDocument();
        expect(screen.getByText("6859")).toBeInTheDocument();
        expect(screen.getByText("8")).toBeInTheDocument();

         
      const tableElement = screen.getByRole('table');
      expect(tableElement).toHaveClass('light-styled-table');
    });

  it("renders an empty table if no data is provided", () => {
    render(
        <ThemeProvider initialTheme="light">
          <Table data={[]} />
        </ThemeProvider>
      );
  
      
      expect(screen.getByText("S.No.")).toBeInTheDocument();
      expect(screen.getByText("Percentage Funded")).toBeInTheDocument();
      expect(screen.getByText("Amount Pledged")).toBeInTheDocument();
  
      
      const tableRows = screen.queryAllByRole("row"); 
      expect(tableRows.length).toBe(1); 
  });
});