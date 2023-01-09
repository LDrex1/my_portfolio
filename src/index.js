import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CursorContextProvider from "./components/providers/CursorContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CursorContextProvider>
      <App />
    </CursorContextProvider>
  </React.StrictMode>
);
