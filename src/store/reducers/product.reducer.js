import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  initialState: {
    productList: [],
  },
  name: "product",
  reducers: {
    updateProductList: (state, { payload }) => {
      state.productList = payload;
    },
  },
});

export const productReducer = productSlice.reducer;
export const { updateProductList } = productSlice.actions;
