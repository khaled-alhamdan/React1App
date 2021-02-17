import styled from "styled-components";
import background from "./Images/favicon.jpg";

export const Header = styled.header`
  padding: 2px 2px;
  text-align: center;
  color: white;
  font-family: monospace;
  background-color: black;
`;

export const Allin1 = styled.p`
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 2px;
`;

export const BackG = styled.div`
  padding: 0px 0px 20px 0px;
  width: 100vw;
  background-image: url(${background});
  background-size: auto;
  background-position: center;
`;

export const ImagesAdjustments = styled.img`
  display: block;
  height: 25vh;
  width: 30vw;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 0px 12px #4f5250;
  margin-bottom: 15px;
  margin-top: 15px;
`;

export const MidP = styled.p`
  text-align: center;
  color: white;
  font-family: monospace;
  padding: 4px 4px;
  margin-left: auto;
  margin-right: auto;
  border: 6px solid black;
  background-color: black;
  padding: 2px 2px;
`;
