import { configureStore } from "@reduxjs/toolkit";
import { profileReducer } from "./reducers/profile.reducer";
import { productReducer } from "./reducers/product.reducer";

const store = configureStore({
  reducer: {
    profile: profileReducer,
    product: productReducer,
  },
});

export default store;
