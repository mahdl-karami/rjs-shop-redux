import { Outlet } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

function Layout() {
  return (
    <>
      header
      {/* <Header state={state} dispatch={dispatch} /> */}
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
      footer
    </>
  );
}

export default Layout;
