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
  const filteredProducts = products
    .filter((product) => product.productName.includes(query))
    .map((x) => <ProductsItem product={x} key={x.id} />);
  return (
    <>
      <SearchBar setQuery={setQuery} />
      {filteredProducts}
    </>
  );
};

export default ProductsList;
