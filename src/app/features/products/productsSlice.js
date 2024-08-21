import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: undefined,
  loading: false,
  error: false,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    sending: (state) => {
      state.loading = true;
    },
    success: (state, { payload }) => {
      //! add count to products
      const newPayload = payload.map((product) => ({ ...product, ["count"]: 0 }));
      state.allProducts = newPayload;
      state.loading = false;
    },
    failed: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
  },
});

export const { sending, success, failed } = productsSlice.actions;
export default productsSlice.reducer;
