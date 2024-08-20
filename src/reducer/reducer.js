//? reducer
const initialState = {
  allProducts: undefined,
  visibleProducts: undefined,
  cartProducts: undefined,
  categories: undefined,
  filter: {
    category: "all",
    search: "",
  },
  loading: false,
  error: false,
};
const reducer = (state, { type, payload = undefined }) => {
  switch (type) {
    //! products cases
    case "products_sending":
      return { ...state, ["loading"]: true };
    case "products_success":
      //! adding count to products
      const newProducts = payload.map((product) => ({ ...product, ["count"]: 0 }));
      return { ...state, ["allProducts"]: newProducts, ["visibleProducts"]: newProducts, ["loading"]: false, ["error"]: false };
    case "products_error":
      return { ...state, ["error"]: payload, ["loading"]: false };
    case "products_edit_count":
      return { ...state, ["allProducts"]: payload };
    case "products_update_cart":
      return { ...state, ["cartProducts"]: state?.allProducts?.filter((p) => p.count) };
    //! categories and filter cases
    case "categories_success":
      return { ...state, ["categories"]: payload };
    case "filter_states":
      return { ...state, ["filter"]: { ...state.filter, [payload.name]: payload.value } };
    case "filter":
      const {
        allProducts,
        visibleProducts,
        filter: { category, search },
      } = state;
      let newVisibleProducts = visibleProducts;
      if (category == "all" && !search) {
        newVisibleProducts = allProducts;
      } else {
        if (category == "all") {
          newVisibleProducts = allProducts;
        } else {
          newVisibleProducts = allProducts.filter((product) => product.category.name == category);
        }
        newVisibleProducts = newVisibleProducts.filter((product) => product.title.toLowerCase().includes(search.toLowerCase().trim()));
      }
      return { ...state, ["visibleProducts"]: newVisibleProducts };
    default:
      console.log("undefined action");
      return state;
  }
};

export { reducer, initialState };