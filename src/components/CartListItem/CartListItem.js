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
    <div className="rounded-md text-center flex flex-col items-center ">
      <div>
        <Link to={`/product/${cartItem.id}`} className=" text-sm ">
          <img src={product.img_i} alt={product.goodsnm} />
          <h6>{product.goodsnm}</h6>
        </Link>
      </div>
      <div>
        <label className="">담은 갯수: </label>
        <input
          className="w-10 border rounded-md focus:outline-none focus:border-gray-500"
          type="number"
          min={1}
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="갯수 조정"
        />
      </div>
      <div>
        <button
          onClick={handleItemQuantityButton}
          className="text-sm bg-gray-800 hover:bg-gray-700 text-white font-bold py-1.5 px-2 mb-2 rounded-md focus:outline-none inline-block min-w-max"
        >
          담은 갯수 조정
        </button>
      </div>
      <div>
        <button
          onClick={handleRemoveButtonClick}
          className="text-sm bg-red-500 hover:bg-red-400 text-white font-bold py-1.5 px-2 rounded-md focus:outline-none inline-block min-w-max"
        >
          삭제
        </button>
      </div>
    </div>
  );
}

export default CartListItem;
