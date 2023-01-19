import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";

import App from "./App";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <NextUIProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </NextUIProvider>
  </React.StrictMode>
);
