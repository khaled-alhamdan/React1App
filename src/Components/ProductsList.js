import React from "react";
// component
import ProductsItem from "./ProductItem";
import products from "../products";

const ProductsList = () => {
  return products.map((x) => <ProductsItem product={x} key={x.id} />);
};

export default ProductsList;
