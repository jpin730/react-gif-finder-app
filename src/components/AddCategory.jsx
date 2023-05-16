import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    const trimmedInputValue = inputValue.trim();
    if (trimmedInputValue.length < 3) return;
    onNewCategory(trimmedInputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Find Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
