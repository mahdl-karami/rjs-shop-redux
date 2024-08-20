function countHandler(allProducts, index, action, dispatch) {
  const product = allProducts[index];
  const newProducts = allProducts;
  switch (action) {
    case "increase":
      const incresed = { ...product, ["count"]: product.count + 1 };
      newProducts[index] = incresed;
      dispatch({ type: "products_edit_count", payload: newProducts });
      dispatch({ type: "products_update_cart" });
      return;
    case "decrease":
      const decreased = { ...product, ["count"]: product.count - 1 };
      newProducts[index] = decreased;
      dispatch({ type: "products_edit_count", payload: newProducts });
      dispatch({ type: "products_update_cart" });
      return;
    default:
      console.log("undefined action");
  }
}

export default countHandler;
