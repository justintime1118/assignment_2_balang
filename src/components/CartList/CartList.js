import React from "react";
import CartListItem from "../CartListItem/CartListItem";

function CartList({ listTitle, cartList }) {
  return (
    <section>
      <h1 className=" text-2xl p-8 font-bold text-center ">{listTitle}</h1>
      <ul className="grid grid-cols-4 gap-4">
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
