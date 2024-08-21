import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: undefined,
  loading: false,
  error: false,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    sending: (state) => {
      state.loading = true;
    },
    success: (state, { payload }) => {
      state.categories = payload;
      state.loading = false;
    },
    failed: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
  },
});

export const { sending, success, failed } = categoriesSlice.actions;
export default categoriesSlice.reducer;
