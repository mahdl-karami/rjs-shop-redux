import { useEffect } from "react";
import config from "../services/config";
import { useDispatch, useSelector } from "react-redux";
import { failed, sending, success } from "../app/features/categories/categoriesSlice";

function HeaderForm() {
  const { categories, loading, error } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!categories) {
      dispatch(sending());
      config
        .get("categories?limit=5")
        .then((res) => dispatch(success(res)))
        .catch((err) => dispatch(failed(err.message)));
    }
  }, []);
  // function filterHandle(ev) {
  //   const { name, value } = ev.target;
  //   dispatch({ type: "filter_states", payload: { name, value } });
  //   dispatch({ type: "filter", payload: name });
  return (
    <form>
      <input type="text" name="search" placeholder="Search" />
      {loading && <>loading</>}
      {categories && (
        <select name="category">
          <option value={"all"}>all</option>
          {categories?.map(({ name, id }) => (
            <option key={id} value={name}>
              {name}
            </option>
          ))}
        </select>
      )}
      {error && <>error</>}
    </form>
  );
}

export default HeaderForm;
