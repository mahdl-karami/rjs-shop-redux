import { useEffect } from "react";
import config from "../services/config";

function HeaderForm() {
  // useEffect(() => {
  //   config.get("categories?limit=5").then((res) => dispatch({ type: "categories_success", payload: res }));
  // }, []);
  // function filterHandle(ev) {
  //   const { name, value } = ev.target;
  //   dispatch({ type: "filter_states", payload: { name, value } });
  //   dispatch({ type: "filter", payload: name });
  // }
  return (
    <form>
      <input type="text" name="search" placeholder="Search" />
      <select name="category">
        <option value={"all"}>all</option>
        {/* {categories?.map(({ name, id }) => (
          <option key={id} value={name}>
            {name}
          </option>
        ))} */}
      </select>
    </form>
  );
}

export default HeaderForm;
