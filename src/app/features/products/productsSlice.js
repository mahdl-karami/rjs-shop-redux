import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: undefined,
  loading: false,
  eroor: false,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    sending: (state) => {
      state.loading = true;
    },
    success: (state, { payload }) => {
      state.allProducts = payload;
      state.loading = false;
    },
  },
});

export const { sending, success } = productsSlice.actions;
export default productsSlice.reducer;
