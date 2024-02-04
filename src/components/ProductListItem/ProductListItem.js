import React from "react";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import { Link } from "react-router-dom";

function ProductListItem({ product }) {
  return (
    <div className="rounded-md text-center flex flex-col items-center ">
      <Link to={`/product/${product.id}`}>
        <img src={product.img_i} alt={product.goodsnm} />
        <h6 className=" text-sm ">{product.goodsnm}</h6>
      </Link>
      <AddToCartButton product={product} quantity={1} />
    </div>
  );
}

export default ProductListItem;
