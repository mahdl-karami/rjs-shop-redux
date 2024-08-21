export const filterHandler = (state) => {
  const {
    allProducts,
    filter: { search, category },
  } = state;
  let newVisibleProducts = allProducts.filter((p) => {
    if (category == "all") {
      return p;
    } else {
      return p.category.name == category;
    }
  });
  newVisibleProducts = newVisibleProducts.filter((p) => {
    if (!search) {
      return p;
    } else {
      return p.title.toLowerCase().includes(search.toLowerCase().trim());
    }
  });
  return newVisibleProducts;
};
