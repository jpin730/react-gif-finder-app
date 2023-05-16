import React from "react";
import ReactDOM from "react-dom/client";
import { GifFinderApp } from "./GifFinderApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GifFinderApp />
  </React.StrictMode>
);

// Testing .env file
fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${
    import.meta.env.VITE_GIPHY_API_KEY
  }`
)
  .then((res) => res.json())
  .then(({ data }) => {
    const img = document.createElement("img");
    const { url } = data.images.original;
    img.src = url;
    document.body.appendChild(img);
  });
