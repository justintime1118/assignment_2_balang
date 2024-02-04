import React from "react";
import { useAuth } from "../../contexts/auth.context";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../store/reducers/profile.reducer";

function AddToCartButton({ product, quantity }) {
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();

  const handleAddToCartButtonClick = () => {
    dispatch(addToCart({ id: product.id, quantity: quantity }));
    alert("담기 완료! 발랑발랑 결제하자?");
  };

  return (
    <>
      {isLoggedIn ? (
        <button onClick={handleAddToCartButtonClick}>장바구니 담기</button>
      ) : (
        <Link to="/sign-in">장바구니 담기</Link>
      )}
    </>
  );
}

export default AddToCartButton;
