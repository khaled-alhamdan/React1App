// import styled from "styled-components";
// Importing Global stayle for theme
import styled, { createGlobalStyle } from "styled-components";
import background from "./Images/khaaStoreImg.jpg";

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.whiteBackground};
  }
`;

export const Header = styled.header`
  padding: 2px 2px;
  text-align: center;
  color: ${(props) => props.theme.white};
  font-family: monospace;
  background-color: ${(props) => props.theme.blackBackground};
`;

export const Allin1 = styled.p`
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 2px;
`;

export const BackG = styled.div`
  padding: 0px 0px 20px 0px;
  width: 100vw;
  height: 50vh;
  background-image: url(${background});
  background-size: auto;
  background-position: center;
`;

export const ImagesAdjustments = styled.img`
  display: block;
  height: auto;
  width: 30vw;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 0px 12px #4f5250;
  margin-bottom: 15px;
  margin-top: 15px;
`;

export const MidP = styled.p`
  text-align: center;
  font-size: 90%;
  color: white;
  font-family: monospace;
  padding: 15px 0px;
  margin-left: auto;
  margin-right: auto;
  background-color: ${(props) => props.theme.blackBackground};
  /* width: 40%; */
`;
