//? import hooks
import { useSelector } from "react-redux";
//? react router dom
import { Link, useLocation } from "react-router-dom";
//? import icons
import { BsCart2 } from "react-icons/bs";
import { FaLongArrowAltLeft } from "react-icons/fa";
//? import helpers
import cartTotal from "../helpers/cartTotal";
//? import components
import HeaderForm from "../components/HeaderForm";

function Header() {
  //! redux
  const { cartProducts } = useSelector((state) => state.products);
  //! states
  const pathName = useLocation().pathname;
  const { totalCount } = cartTotal(cartProducts);
  //! jsx
  return (
    <header>
      {pathName != "/products" ? (
        <h2>
          <Link className="link" to="/products">
            <FaLongArrowAltLeft />
            Back to products
          </Link>
        </h2>
      ) : (
        <HeaderForm />
      )}
      <button className="cart-btn">
        <Link to="/cart" className="link">
          <BsCart2 />
        </Link>
        {totalCount ? <span>{totalCount}</span> : null}
      </button>
    </header>
  );
}

export default Header;
