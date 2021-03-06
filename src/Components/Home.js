import React from "react";
import { Header, KhaImg, Allin1 } from "../styles";
import ProductsList from "./ProductsList";
// import Navbar from "./Navbar";

const HomePage = () => {
  return (
    // Continer Div
    <>
      {/* Header styling and components */}
      <Header>
        <h1>KHA'A Store</h1>
        <Allin1>
          <b>All in one App</b>
        </Allin1>
      </Header>
      {/* background Image */}
      <KhaImg />
      {/* products */}
      <ProductsList />
    </>
  );
};

export default HomePage;
