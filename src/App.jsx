//? import router
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
//? import rout pages
import Layout from "./pages/Layout.jsx";
import Products from "./pages/Products.jsx";
import Cart from "./pages/Cart.jsx";
import Details from "./pages/Details.jsx";

function App() {
  //! react router dom
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Navigate to={`/products`} />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "products/:productId",
          element: <Details />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
