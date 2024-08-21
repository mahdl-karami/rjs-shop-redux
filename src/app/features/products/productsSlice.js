import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: undefined,
  loading: false,
  error: false,
  cartProducts: undefined,
  filter: {
    search: "",
    category: "all",
  },
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
    editCount: (state, { payload: { index, value } }) => {
      state.allProducts[index].count += value;
      //! update cartProducts
      state.cartProducts = state.allProducts.filter((product) => product.count);
    },
    filtering: (state, { payload: { name, value } }) => {
      state.filter = { ...state.filter, [name]: value };

    },
  },
});

export const { sending, success, failed, editCount, filtering } = productsSlice.actions;
export default productsSlice.reducer;
