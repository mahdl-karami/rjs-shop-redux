import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./features/products/productsSlice.js";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
