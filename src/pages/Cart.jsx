//? import hooks
import { useSelector } from "react-redux";
//? import components
import ProductCard from "../components/ProductCard";
import CartStatus from "../components/CartStatus";
//? import icons
import CartEmptyAlert from "../components/CartEmptyAlert";

function Cart() {
  //! redux
  const { cartProducts } = useSelector((state) => state.products);
  //! jsx
  return (
    <>
      <CartStatus cartProducts={cartProducts} />
      {cartProducts && cartProducts.length ? (
        <div className="products">
          {cartProducts?.map((product, key) => (
            <div key={key} className="product">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      ) : (
        <CartEmptyAlert />
      )}
    </>
  );
}

export default Cart;