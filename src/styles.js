// import styled from "styled-components";
// Importing Global stayle for theme
import styled, { createGlobalStyle } from "styled-components";
import background from "./Images/khaaStoreImg.jpg";

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.fontColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

export const Header = styled.header`
  padding: 2px 2px;
  text-align: center;
  color: ${(props) => props.theme.whiteText};
  font-family: monospace;
  background-color: ${(props) => props.theme.headerBGC};
`;

export const Allin1 = styled.p`
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 2px;
`;

export const KhaImg = styled.div`
  /* padding: 0px 0px 20px 0px; */
  width: 100vw;
  height: 40vh;
  background-image: url(${background});
  background-size: 100vw 40vh;
  background-position: center;
`;

export const ImagesAdjustments = styled.img`
  display: block;
  height: auto;
  width: 30vw;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 0px 12px ${(props) => props.theme.boxColor};
  margin-bottom: 15px;
  margin-top: 15px;
`;

export const MidP = styled.p`
  text-align: center;
  font-size: 90%;
  color: ${(props) => props.theme.fontColor};
  font-family: monospace;
  padding: 10px 0px;
  margin-left: auto;
  margin-right: auto;
  background-color: ${(props) => props.theme.boxColor};
  /* width: 40%; */
`;

// Dark Mode
export const ThemeButton = styled.button`
  font-size: 1em;
  font-family: sans-serif;
  margin: 1.25em;
  padding: 0.5em 2em;
  border-radius: 7px;
  background-color: ${(props) => props.theme.buttonBGColor};
  color: ${(props) => props.theme.buttonTextColor};
  transition-duration: 0.4s;
  :hover {
    background-color: grey;
    color: Black;
  }
  :focus {
    outline: 0;
  }
`;
