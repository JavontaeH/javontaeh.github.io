import { useState, useEffect, Suspense } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { darkTheme, lightTheme } from "./assets/theme/theme.js";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.scss";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter as Router } from "react-router-dom";
import ThemeContext from "./contexts/themeContext";
import LoaderContext from "./contexts/loaderContext";
import Views from "./Views";
import Check from "./assets/images/Check.js";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setIsDarkMode(false);
    } else {
      setIsDarkMode(false);
    }
  }, []);
  return (
    <Router>
      <Suspense fallback={<div></div>}>
        <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
          <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
            <ThemeProvider
              theme={isDarkMode ? { ...darkTheme } : { ...lightTheme }}
            >
              <CssBaseline />
              <ScrollToTop />
              <Views />
            </ThemeProvider>
          </LoaderContext.Provider>
        </ThemeContext.Provider>
      </Suspense>
    </Router>
  );
}

export default App;
