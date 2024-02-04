import React from "react";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import { Link } from "react-router-dom";

function ProductListItem({ product }) {
  return (
    <>
      <Link to={`/product/${product.id}`}>
        <img src={product.img_i} alt={product.goodsnm} />
        <h6>{product.goodsnm}</h6>
      </Link>
      <AddToCartButton product={product} quantity={1} />
    </>
  );
}

export default ProductListItem;
