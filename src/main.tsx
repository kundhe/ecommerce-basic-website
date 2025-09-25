import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage.tsx";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/products/:id" element={<ProductPage />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
