//? import hooks
import { useReducer } from "react";
//? import router
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
//? import rout pages
import Layout from "./pages/Layout.jsx";
import Products from "./pages/Products.jsx";
import Cart from "./pages/Cart.jsx";
import Details from "./pages/Details.jsx";
//? import reducer
import { reducer, initialState } from "./reducer/reducer.js";

function App() {
  //! reducer
  const [state, dispatch] = useReducer(reducer, initialState);
  //! react router dom
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout state={state} dispatch={dispatch} />,
      children: [
        {
          path: "/",
          element: <Navigate to={`/products`} />,
        },
        {
          path: "products",
          element: <Products state={state} dispatch={dispatch} />,
        },
        {
          path: "products/:productId",
          element: <Details state={state} dispatch={dispatch} />,
        },
        {
          path: "cart",
          element: <Cart state={state} dispatch={dispatch} />,
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
