import { useState } from "react";

import { AddCategory, GifGrid } from "./components";

export const GifFinderApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (category) => {
    if (categories.includes(category)) return;
    setCategories([category, ...categories]);
  };

  return (
    <>
      <h1>Gif Finder App</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category}>
          {category}
        </GifGrid>
      ))}
    </>
  );
};
