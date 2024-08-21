import { useEffect } from "react";
import config from "../services/config";
import { useDispatch, useSelector } from "react-redux";
import { sending, success } from "../app/features/categories/categoriesSlice";
import { filterHandler } from "../helpers/filterHandler";
import { filtering } from "../app/features/products/productsSlice";

function HeaderForm() {
  const { categories, loading, error } = useSelector((state) => state.categories);
  const { filter } = useSelector((state) => state.products);
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
  return (
    <form onChange={({ target: { name, value } }) => dispatch(filtering({ name, value }))}>
      <input type="text" name="search" placeholder="Search" value={filter.search} onChange={() => null} />
      {loading && <>loading</>}
      {categories && (
        <select name="category" value={filter.category} onChange={() => null}>
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
