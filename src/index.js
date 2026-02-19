import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <head>
      <title>Bell Flower Shop</title>
      <meta
        name="description"
        content="Авторские букеты и декор. Заказ в 1 клик, доставка по Нидерландам."
      />

      <meta property="og:title" content="Bell Flower Shop" />
      <meta
        property="og:description"
        content="Custom bouquets and floral decor. One-click ordering and delivery across the Netherlands."
      />
      <meta property="og:url" content="https://bellflower-shop.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Bell Flower Shop" />
      <meta
        property="og:image"
        content="https://bellflower-shop.com/og-cover.jpg"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Bell Flower Shop" />
      <meta
        name="twitter:description"
        content="Custom bouquets and floral decor. One-click ordering and delivery across the Netherlands."
      />
      <meta
        name="twitter:image"
        content="https://bellflower-shop.com/og-cover.jpg"
      />
    </head>

    <App />
  </React.StrictMode>,
);

reportWebVitals();
