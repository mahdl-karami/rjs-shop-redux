//? import components
import ProductCard from "../components/ProductCard";
import CartStatus from "../components/CartStatus";
//? import helpers
import findIndex from "../helpers/findIndex";
//? import icons
import CartEmptyAlert from "../components/CartEmptyAlert";

function Cart() {
  return (
    <>
      {/* <CartStatus cartProducts={cartProducts} /> */}
      {/* {cartProducts && cartProducts.length ? ( */}
      <div className="products">
        cart
        {/* {cartProducts?.map((product, key) => (
          <div key={key} className="product">
            <ProductCard product={product} allProducts={allProducts} dispatch={dispatch} />
          </div>
        ))} */}
      </div>
      {/* ) : (
        <CartEmptyAlert />
      )} */}
    </>
  );
}

export default Cart;
