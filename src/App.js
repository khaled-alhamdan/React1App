import HomePage from "./Components/Home";
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";

const theme = {
  white: "white",
  mainColor: "#242424", // main font color
  whiteBackground: "white", // main background color
  blackBackground: "black", // main background color
  pink: "#ff85a2",
};

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <HomePage />
      </ThemeProvider>
    </>
  );
};

export default App;
