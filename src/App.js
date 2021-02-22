// Importing Home page from Home.js
import HomePage from "./Components/Home";
// Importing Global stayle for theme
import { GlobalStyle, ThemeButton } from "./styles";
// Importing Themeprovide
import { ThemeProvider } from "styled-components";
// Importing useState
import { useState } from "react";

const theme = {
  lightTheme: {
    backgroundColor: "white", // main background color
    whiteText: "white",
    boxColor: "black",
    headerBGC: "black",
    fontColor: "white",
    buttonTextColor: "white",
    buttonBGColor: "black",
  },
  darkTheme: {
    backgroundColor: "black", // main background color
    blackText: "black",
    whiteText: "white",
    boxColor: "white",
    headerBGC: "black",
    fontColor: "black",
    buttonColor: "white",
    buttonTextColor: "black",
    buttonBGColor: "white",
  },
};

const App = () => {
  const [currentTheme, setCurrentTheme] = useState("lightTheme");

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "lightTheme" ? "darkTheme" : "lightTheme");
  };

  return (
    <>
      <ThemeProvider theme={theme[currentTheme]}>
        <GlobalStyle />
        <HomePage />
        <ThemeButton onClick={toggleTheme}>
          {currentTheme === "lightTheme" ? "Dark" : "Light"} Mode
        </ThemeButton>
      </ThemeProvider>
    </>
  );
};

export default App;
