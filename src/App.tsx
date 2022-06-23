import React, { useEffect } from "react";
import LocationMainPage from "./components/LocationMainPage";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import { lightTheme, darkTheme } from "./Themes";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, Link } from "react-router-dom";
import { RootState } from "./store/reducers/rootReducer";
import { CHANGE_THEME_MODE } from "./store/constants/themeContsant";
import "./App.css";

function App() {
  const { darkMode } = useSelector((state: RootState) => state.themeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const themeModeDark = localStorage.getItem("themeModeDark");
    if (themeModeDark && JSON.parse(themeModeDark) === true) {
      dispatch({ type: CHANGE_THEME_MODE });
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("themeModeDark", JSON.stringify(darkMode));
  }, [darkMode]);

  const themeToggler = () => {
    dispatch({ type: CHANGE_THEME_MODE });
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <button className="btn btn-primary m-2" onClick={themeToggler}>
        Switch Theme
      </button>
      <Routes>
        <Route path="/" element={<LocationMainPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
