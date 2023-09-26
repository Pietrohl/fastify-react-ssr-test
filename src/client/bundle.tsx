import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";

const props = {
  name: "Jane",
};

hydrateRoot(
  document!.getElementById("app")!,
  <BrowserRouter>
    <App {...props} />
  </BrowserRouter>
);
