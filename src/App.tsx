import React, { useEffect, useState } from "react";
import LocationMainPage from "./components/LocationMainPage";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import { lightTheme, darkTheme } from "./Themes";
// import CheckoutStepOne from "./components/CheckoutStepOne";
import CheckoutStepTwo from "./components/CheckoutStepTwo";
import "./App.css";

function App() {
  const [themeMode, setThemeMode] = useState<String>("");

  useEffect(() => {
    setThemeMode(localStorage.getItem("themeMode") || "light");
  }, []);

  const themeToggler = () => {
    const updatedThemeMode = themeMode === "light" ? "dark" : "light";
    setThemeMode(updatedThemeMode);
    localStorage.setItem("themeMode", updatedThemeMode);
    window.location.reload();
  };

  return (
    <ThemeProvider theme={themeMode === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      {/* <button className="btn btn-primary m-2" onClick={themeToggler}>Switch Theme</button> */}
      <div>
        {/* <CheckoutStepOne
          themeMode={themeMode}
        /> */}
        <CheckoutStepTwo themeMode={themeMode} />
        {/* <LocationMainPage /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
