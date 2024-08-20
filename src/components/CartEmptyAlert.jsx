//? import icons
import { FiShoppingCart } from "react-icons/fi";
import { FaSlash } from "react-icons/fa";

function CartEmptyAlert() {
  return (
    <div className="cart-empty">
      <FiShoppingCart />
      <FaSlash />
      <div>
        <p>Cart is empty</p>
        <p>- add some items to cart</p>
      </div>
    </div>
  );
}

export default CartEmptyAlert;
