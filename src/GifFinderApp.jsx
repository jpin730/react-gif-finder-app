import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifFinderApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (category) => {
    setCategories([...new Set([...categories, category])]);
  };

  return (
    <>
      <h1>Gif Finder App</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {/* <button onClick={onAddCategory}>Add</button> */}

      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  );
};
