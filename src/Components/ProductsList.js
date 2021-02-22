import React from "react";
// component
import ProductsItem from "./ProductItem";
import products from "../products";
// Importing useState
import { useState } from "react";
// Importing SearchBar Component
import SearchBar from "./SearchBar";

const ProductsList = () => {
  const [query, setQuery] = useState("");
  return (
    <>
      <SearchBar setQuery={setQuery} />
      {products.map((x) => (
        <ProductsItem product={x} key={x.id} />
      ))}
    </>
  );
};

export default ProductsList;
