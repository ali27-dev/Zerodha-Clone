import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./landing_page/home/HomePage";
import AboutPage from "./landing_page/about/AboutPage";
import ProductsPage from "./landing_page/products/ProductsPage";
import SignupPage from "./landing_page/signup/SignupPage";
import SupportPage from "./landing_page/support/SupportPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HomePage />
    {/* <AboutPage /> */}
    {/* <AboutPage /> */}
    {/* <ProductsPage /> */}
    {/* <SignupPage /> */}
    {/* <SupportPage /> */}
  </React.StrictMode>
);
