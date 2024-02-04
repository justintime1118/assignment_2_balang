import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Page from "../../components/Page/Page";
import AddToCartButton from "../../components/AddToCartButton/AddToCartButton";
import { useSelector } from "react-redux";

function ProductDetailPage() {
  const { id } = useParams();
  const productList = useSelector((state) => state.product.productList);
  const productIndex = productList.findIndex((item) => item.id === id);
  const product = productList[productIndex];
  const [quantity, setQuantity] = useState(1);

  return (
    <Page>
      <>
        <img src={product.img_i} alt={product.goodsnm} />
        <h6>{product.goodsnm}</h6>
      </>
      <label>담을 갯수: </label>
      <input
        type="number"
        min={1}
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        placeholder="장바구니에 담을 갯수"
      />
      <AddToCartButton product={product} quantity={quantity} />
    </Page>
  );
}

export default ProductDetailPage;
