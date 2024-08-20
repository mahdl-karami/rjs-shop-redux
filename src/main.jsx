import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./responsive.css";

//! REDUX
import { store } from "./app/store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
