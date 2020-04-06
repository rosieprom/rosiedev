import App from "next/app";
import { lightTheme, darkTheme } from "../theme";
import { ThemeProvider } from "styled-components";
import useDarkMode from "use-dark-mode";
import React, { useState, useEffect } from "react";
import "../style.css";

const MyApp = ({ Component, pageProps }) => {
  const [isMounted, setIsMounted] = useState(false);
  const darkMode = useDarkMode(true);
  const theme = darkMode.value ? darkTheme : lightTheme;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <button onClick={darkMode.enable}>DARK MODE</button>
      <button onClick={darkMode.disable}>LIGHT MODE</button>
      {isMounted && <Component {...pageProps} />}
    </ThemeProvider>
  );
};
export default MyApp;
