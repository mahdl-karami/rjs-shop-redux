//? import helpers
import shortIt from "../helpers/shortIt";
//? import componetns
import CountPanel from "./CountPanel";
//? import icons
import { TbListDetails } from "react-icons/tb";
//? react router dom
import { Link } from "react-router-dom";

function ProductCard({ product, allProducts, dispatch }) {
  const { title, images, price, id } = product;
  return (
    //! parent div lifted up to products div (render with key)
    <>
      <div>
        <img src={images[0]} alt="Product Image" />
        <h2>{shortIt(title, 3)}</h2>
        <p>{price}$</p>
      </div>
      <div className="product-buttons">
        <Link to={`/products/${id}`}>
          <button>
            <TbListDetails />
          </button>
        </Link>
        <CountPanel allProducts={allProducts} product={product} dispatch={dispatch} />
      </div>
    </>
  );
}

export default ProductCard;
