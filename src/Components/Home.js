import React from "react";
import { Header, BackG, Allin1 } from "../styles";
import ProductsList from "./ProductsList";

const HomePage = () => {
  return (
    <>
      {/* Header styling and components */}
      <Header>
        <h1>KHA'A Store</h1>
        <div>
          <Allin1>
            <b>All in one App</b>
          </Allin1>
        </div>
      </Header>
      {/* background Image */}
      <div>
        <BackG></BackG>
      </div>
      {/* products */}
      <ProductsList />
    </>
  );
};

export default HomePage;
