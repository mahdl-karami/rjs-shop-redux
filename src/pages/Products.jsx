//? import hooks
import { useEffect } from "react";
//? import services
import products from "../services/products";
//? import components
import ProductCard from "../components/ProductCard";

function Products() {
  console.log("first")
  //! fetch products
  useEffect(() => {
    // if (!visibleProducts) {
    products()
      .get()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(err));
    // }
  }, []);
  //! jsx
  // if (loading) return <h1>loading</h1>;
  // if (error) return <h1>{error.message}</h1>;
  // if (visibleProducts)
  return (
    <div className="products">
      products
      {/* {visibleProducts.map((product, index) => (
        <div key={index} className="product">
          <ProductCard product={product} allProducts={visibleProducts} dispatch={dispatch} />
        </div>
      ))} */}
    </div>
  );
}

export default Products;
