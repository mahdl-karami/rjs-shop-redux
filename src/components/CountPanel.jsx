//? import icons
import { FiPlus, FiMinus } from "react-icons/fi";
import { BiCartAdd } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
//? import helpers
import countHandler from "../helpers/countHandler";
import findIndex from "../helpers/findIndex";

function CountPanel({ allProducts, dispatch, product }) {
  const { count } = product;
  const index = findIndex(allProducts, product);
  function clickHandler(action) {
    countHandler(allProducts, index, action, dispatch);
  }
  return (
    <div className="count-panel">
      {count == 0 && (
        <button onClick={() => clickHandler("increase")}>
          <BiCartAdd />
        </button>
      )}
      {count > 0 && (
        <>
          {count == 1 ? (
            <button onClick={() => clickHandler("decrease")}>
              <RiDeleteBinLine />
            </button>
          ) : (
            <button onClick={() => clickHandler("decrease")}>
              <FiMinus />
            </button>
          )}
          <p>{count}</p>
          <button onClick={() => clickHandler("increase")}>
            <FiPlus />
          </button>
        </>
      )}
    </div>
  );
}

export default CountPanel;
