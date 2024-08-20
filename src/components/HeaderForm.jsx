import { useEffect } from "react";
import config from "../services/config";

function HeaderForm({ categories, filter, dispatch }) {
  const { search, category } = filter;
  useEffect(() => {
    config.get("categories?limit=5").then((res) => dispatch({ type: "categories_success", payload: res }));
  }, []);
  function filterHandle(ev) {
    const { name, value } = ev.target;
    dispatch({ type: "filter_states", payload: { name, value } });
    dispatch({ type: "filter", payload: name });
  }
  return (
    <form onChange={(ev) => filterHandle(ev)}>
      <input type="text" name="search" placeholder="Search" value={search} />
      <select name="category" value={category}>
        <option value={"all"}>all</option>
        {categories?.map(({ name, id }) => (
          <option key={id} value={name}>
            {name}
          </option>
        ))}
      </select>
    </form>
  );
}

export default HeaderForm;
