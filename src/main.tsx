import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { jsonPlaceholderApi } from "shared/lib/api/json-placeholder-api.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApiProvider api={jsonPlaceholderApi}>
        <Suspense fallback={<div>Loading...</div>}>
          <App />
        </Suspense>
      </ApiProvider>
    </BrowserRouter>
  </React.StrictMode>
);
