import React from "react";
import { MidP, ImagesAdjustments } from "../styles";

const ProductsItem = (props) => {
  return (
    // They must be wrapped with tags, like <div> or <>
    <div>
      <ImagesAdjustments
        src={props.product.productPic}
        alt={props.product.productName}
      />
      <MidP>
        <b>
          <div> {props.product.productName}</div>
          <div>Price: {props.product.productPrice}</div>
        </b>
      </MidP>
    </div>
  );
};

export default ProductsItem;
