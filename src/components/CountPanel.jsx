//? import hooks
import { useDispatch, useSelector } from "react-redux";
//? import icons
import { FiPlus, FiMinus } from "react-icons/fi";
import { BiCartAdd } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
//? import helpers
import findIndex from "../helpers/findIndex";
//? import app actions
import { editCount } from "../app/features/products/productsSlice";

function CountPanel({ product }) {
  //! redux
  const { allProducts } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  //! states
  const index = findIndex(allProducts, product);
  const { count } = product;
  //! functions
  function clickHandler(value) {
    dispatch(editCount({ index, value }));
  }
  //! jsx
  return (
    <div className="count-panel">
      {count == 0 && (
        <button onClick={() => clickHandler(+1)}>
          <BiCartAdd />
        </button>
      )}
      {count > 0 && (
        <>
          {count == 1 ? (
            <button onClick={() => clickHandler(-1)}>
              <RiDeleteBinLine />
            </button>
          ) : (
            <button onClick={() => clickHandler(-1)}>
              <FiMinus />
            </button>
          )}
          <p>{count}</p>
          <button onClick={() => clickHandler(+1)}>
            <FiPlus />
          </button>
        </>
      )}
    </div>
  );
}

export default CountPanel;
