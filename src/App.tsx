import React, { useState } from 'react';
import LocationMainPage from './components/LocationMainPage';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import { lightTheme, darkTheme } from "./Themes"
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <button onClick={themeToggler}>Switch Theme</button>
      <LocationMainPage />
    </ThemeProvider>
  );
}

export default App;
