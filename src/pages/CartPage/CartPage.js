import React from "react";
import Page from "../../components/Page/Page";
import { useSelector } from "react-redux";
import CartList from "../../components/CartList/CartList";

function CartPage() {
  const storedCartList = useSelector((state) => state.profile.cart);

  return (
    <Page>
      <CartList listTitle="장바구니에 담긴 상품" cartList={storedCartList} />
    </Page>
  );
}

export default CartPage;
