import React from "react";
import SellingPro from "../products";
import { MidP, ImagesAdjustments } from "../styles";

const ProductsList = () => {
  const list = SellingPro.map((product) => {
    return (
      // They must be wrapped with tags, like <div> or <>
      <div>
        <ImagesAdjustments src={product.productPic} alt={product.productName} />
        <MidP>
          <b>
            <div> {product.productName}</div>
            <div>Price: {product.productPrice}</div>
          </b>
        </MidP>
      </div>
    );
  });
  return list;
};

export default ProductsList;
