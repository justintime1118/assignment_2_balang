import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  initialState: {
    account: {
      id: "u",
      pw: "u",
    },
    nickname: "초기닉네임",
    cart: [], // cartItem 객체의 배열이 들어간다. cartItem 객체는 상품 id와 업데이트 될 갯수를 보관한다
  },
  name: "profile",
  reducers: {
    updateNickname: (state, { payload }) => {
      state.nickname = payload;
    },
    addToCart: (state, { payload }) => {
      const { id, quantity } = payload;
      const cartIndexToBeUpdated = state.cart.findIndex(
        (cartItem) => cartItem.id === id
      );
      // console.log("cartIndexToBeUpdated == " + cartIndexToBeUpdated);
      // console.log(payload);

      // 이미 장바구니에 담겨있는 상품이라면 기존 갯수에 추가
      if (cartIndexToBeUpdated >= 0) {
        state.cart[cartIndexToBeUpdated].quantity += quantity;
        console.log("기존 갯수에 반영");
      }
      // 기존에 장바구니에 없었던 상품이라면 새롭게 추가
      else {
        if (quantity > 0) {
          state.cart.push({ id: id, quantity: quantity });
          console.log("새로 추가");
        }
      }
    },

    updateCartItem: (state, { payload }) => {
      const { id, quantity } = payload;
      const cartIndexToBeUpdated = state.cart.findIndex(
        (cartItem) => cartItem.id === id
      );
      state.cart[cartIndexToBeUpdated].quantity = quantity;
      console.log("기존 갯수에 반영");
    },

    removeCartItem: (state, { payload }) => {
      const { id } = payload;
      state.cart = state.cart.filter((cartItem) => cartItem.id !== id);
      console.log("카트에서 삭제");
    },
  },
});

export const profileReducer = profileSlice.reducer;
export const { updateNickname, addToCart, updateCartItem, removeCartItem } =
  profileSlice.actions;
