//? import hooks
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//? import services
import products from "../services/products";
//? import components
import ProductCard from "../components/ProductCard";
import { sending, success, failed } from "../app/features/products/productsSlice";

function Products() {
  const { loading, allProducts, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  //! fetch products
  useEffect(() => {
    if (!allProducts) {
      dispatch(sending());
      products()
        .get()
        .then((res) => {
          dispatch(success(res.data));
        })
        .catch((err) => dispatch(failed(err.message)));
    }
  }, []);
  //! jsx
  if (loading) return <h1>loading</h1>;
  if (error) return <h1>{error}</h1>;
  if (allProducts) {
    return (
      <div className="products">
        {allProducts.map((product, index) => (
          <div key={index} className="product">
            <ProductCard product={product} allProducts={allProducts} />
          </div>
        ))}
      </div>
    );
  }
}

export default Products;
