import React from "react";
import CartListItem from "../CartListItem/CartListItem";

function CartList({ listTitle, cartList }) {
  return (
    <section>
      <h2>{listTitle}</h2>
      <ul>
        {cartList &&
          cartList.map((cartItem) => (
            <li key={cartItem.id}>
              <CartListItem cartItem={cartItem} />
            </li>
          ))}
      </ul>
    </section>
  );
}

export default CartList;
