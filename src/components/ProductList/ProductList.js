import React from "react";
import ProductListItem from "../ProductListItem";

function ProductList({ listTitle, productList }) {
  return (
    <section>
      <h1 className=" text-2xl p-8 font-bold text-center ">{listTitle}</h1>
      <ul className="grid grid-cols-4 gap-4">
        {productList &&
          productList.map((product) => (
            <li key={product.id}>
              <ProductListItem product={product} />
            </li>
          ))}
      </ul>
    </section>
  );
}

export default ProductList;
