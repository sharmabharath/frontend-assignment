import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import DarkModeToggle from "../components/DarkModeToggle"; 
import { useTheme } from "../context/ThemeContext"; 


jest.mock("../context/ThemeContext", () => ({
  useTheme: jest.fn(),
}));

describe("DarkModeToggle Component", () => {
  it("renders the moon icon when theme is 'light'", () => {
    
    useTheme.mockReturnValue({
      theme: "light",
      toggleTheme: jest.fn(),
    });

    render(<DarkModeToggle />);

    
    const button = screen.getByRole("button");
    expect(button.querySelector("svg")).toBeInTheDocument(); 
  });

  it("renders the sun icon when theme is 'dark'", () => {
    
    useTheme.mockReturnValue({
      theme: "dark",
      toggleTheme: jest.fn(),
    });

    render(<DarkModeToggle />);

    
    const button = screen.getByRole("button");
    expect(button.querySelector("svg")).toBeInTheDocument(); 
  });

  it("calls toggleTheme when the button is clicked", () => {
    const mockToggleTheme = jest.fn();
    useTheme.mockReturnValue({
      theme: "light",
      toggleTheme: mockToggleTheme,
    });

    render(<DarkModeToggle />);
    const button = screen.getByRole("button");

    
    fireEvent.click(button);

    
    expect(mockToggleTheme).toHaveBeenCalled();
  });
});
