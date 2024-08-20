import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: undefined,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    sendig: (state) => {},
  },
});

export const { sendig } = productsSlice.actions;
export default productsSlice.reducer;
