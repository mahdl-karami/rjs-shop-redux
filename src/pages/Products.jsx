//? import hooks
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//? import services
import products from "../services/products";
//? import components
import ProductCard from "../components/ProductCard";
//? import app actions
import { sending, success, failed } from "../app/features/products/productsSlice";

function Products() {
  //! redux
  const { loading, visibleProducts, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  //! fetch products
  useEffect(() => {
    if (!visibleProducts) {
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
  if (visibleProducts) {
    return (
      <div className="products">
        {visibleProducts.map((product, index) => (
          <div key={index} className="product">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    );
  }
}

export default Products;
