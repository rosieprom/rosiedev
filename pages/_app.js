import { lightTheme, darkTheme } from "../theme";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import useDarkMode from "use-dark-mode";
import React, { useState, useEffect } from "react";
import "../style.css";

export const GlobalStyles = createGlobalStyle`
  body, #root {
    background: ${({ theme }) => theme.bg.primary};
    color: ${({ theme }) => theme.text.primary};
    margin: 0 auto;
  }
`;

export const MyApp = ({ Component, pageProps }) => {
  const [isMounted, setIsMounted] = useState(false);
  const darkMode = useDarkMode(true);
  const theme = darkMode.value ? darkTheme : lightTheme;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {isMounted && <Component {...pageProps} />}
    </ThemeProvider>
  );
};
export default MyApp;
