import React from "react";
import ProductListItem from "../ProductListItem";

function ProductList({ listTitle, productList }) {
  return (
    <section>
      <h2>{listTitle}</h2>
      <ul>
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
