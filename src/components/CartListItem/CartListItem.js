import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeCartItem,
  updateCartItem,
} from "../../store/reducers/profile.reducer";

function CartListItem({ cartItem }) {
  const dispatch = useDispatch();
  const storedProductList = useSelector((state) => state.product.productList);
  const cartItemIndex = storedProductList.findIndex(
    (product) => product.id === cartItem.id
  );
  const product = storedProductList[cartItemIndex];
  const [quantity, setQuantity] = useState(cartItem.quantity);

  const handleItemQuantityButton = (e) => {
    dispatch(updateCartItem({ id: cartItem.id, quantity: quantity }));
    console.log("값 변경 => " + quantity);
  };

  const handleRemoveButtonClick = () => {
    dispatch(removeCartItem({ id: cartItem.id }));
  };

  return (
    <>
      <Link to={`/product/${cartItem.id}`}>
        <img src={product.img_i} alt={product.goodsnm} />
        <h6>{product.goodsnm}</h6>
      </Link>
      <label>담은 갯수: </label>
      <input
        type="number"
        min={1}
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        placeholder="갯수 조정"
      />
      <div>
        <button onClick={handleItemQuantityButton}>담은 갯수 조정</button>
      </div>
      <div>
        <button onClick={handleRemoveButtonClick}>장바구니에서 삭제</button>
      </div>
    </>
  );
}

export default CartListItem;
