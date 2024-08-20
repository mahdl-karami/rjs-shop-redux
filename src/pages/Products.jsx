//? import hooks
import { useEffect } from "react";
//? import services
import products from "../services/products";
//? import components
import ProductCard from "../components/ProductCard";

function Products({ state, dispatch }) {
  const { visibleProducts, loading, error } = state;
  //! fetch products
  useEffect(() => {
    if (!visibleProducts) {
      dispatch({ type: "products_sending" });
      products()
        .get()
        .then((res) => {
          dispatch({ type: "products_success", payload: res.data });
        })
        .catch((error) => dispatch({ type: "products_error", payload: error }));
    }
  }, []);
  //! jsx
  if (loading) return <h1>loading</h1>;
  if (error) return <h1>{error.message}</h1>;
  if (visibleProducts)
    return (
      <div className="products">
        {visibleProducts.map((product, index) => (
          <div key={index} className="product">
            <ProductCard product={product} allProducts={visibleProducts} dispatch={dispatch} />
          </div>
        ))}
      </div>
    );
}

export default Products;
