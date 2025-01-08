import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import Layout from "./lib/components/Layout.tsx";

import "./lib/scss/styles.scss";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as bootstrap from "bootstrap";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Layout>
      <App />
    </Layout>
  </StrictMode>
);
