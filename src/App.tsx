import React, { useEffect, useState } from "react";
import LocationMainPage from "./components/LocationMainPage";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import { lightTheme, darkTheme } from "./Themes";
import "./App.css";
import { useSelector,useDispatch } from "react-redux";
import { RootState } from "./store/reducers/rootReducer";
import { THEME_APPLY } from './store/constants/themeContsant';

function App() {
  const { darkMode } = useSelector((state: RootState) => state.themeReducer);
  const [themeMode, setThemeMode] = useState<String>("");
  const dispatch=useDispatch();

  useEffect(() => {
    setThemeMode(localStorage.getItem("themeMode") || "light");
  }, []);

  const themeToggler = () => {
    const updatedThemeMode = themeMode === "light" ? "dark" : "light";
    setThemeMode(updatedThemeMode);
    localStorage.setItem("themeMode", updatedThemeMode);
    dispatch({ type: THEME_APPLY })
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <button className="btn btn-primary m-2" onClick={themeToggler}>
        Switch Theme
      </button>
      <div>
        <LocationMainPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
