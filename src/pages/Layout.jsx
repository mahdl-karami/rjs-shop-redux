import { Outlet } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

function Layout({ state, dispatch }) {
  return (
    <>
      <Header state={state} dispatch={dispatch} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
