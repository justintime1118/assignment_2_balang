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
    <Page className="bg-white text-black min-h-screen p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <img
            className="w-full h-auto rounded-md shadow-md"
            src={product.img_i}
            alt={product.goodsnm}
          />
        </div>
        <div>
          <h6 className=" text-base font-bold mb-4">{product.goodsnm}</h6>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              담을 갯수:
            </label>
            <input
              className="w-20 p-2 border rounded-md focus:outline-none focus:border-gray-500"
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="장바구니에 담을 갯수"
            />
          </div>
          <div>
            <AddToCartButton product={product} quantity={quantity} />
          </div>
        </div>
      </div>
    </Page>
  );
}

export default ProductDetailPage;
