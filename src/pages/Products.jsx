//? import hooks
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//? import services
import products from "../services/products";
//? import components
import ProductCard from "../components/ProductCard";
import { sending, success } from "../app/features/products/productsSlice";

function Products() {
  const { loading, allProducts } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  console.log(loading);
  //! fetch products
  useEffect(() => {
    if (!allProducts) {
      dispatch(sending());
      products()
        .get()
        .then((res) => {
          dispatch(success(res.data));
        })
        .catch((error) => console.log(err));
    }
  }, []);
  //! jsx
  if (loading) return <h1>loading</h1>;
  // if (error) return <h1>{error.message}</h1>;
  if (allProducts) {
    console.log(allProducts);
    return (
      <div className="products">
        {allProducts.map((product, index) => (
          <div key={index} className="product">
            {product.title}
            {/* <ProductCard product={product} allProducts={visibleProducts} dispatch={dispatch} /> */}
          </div>
        ))}
        {/* {visibleProducts.map((product, index) => (
        <div key={index} className="product">
          <ProductCard product={product} allProducts={visibleProducts} dispatch={dispatch} />
        </div>
      ))} */}
      </div>
    );
  }
}

export default Products;
