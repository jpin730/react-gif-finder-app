import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {
  const inputMinLength = 2;
  const [inputValue, setInputValue] = useState("");
  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    const trimmedInputValue = inputValue.trim();
    if (trimmedInputValue.length < inputMinLength) return;
    onNewCategory(trimmedInputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input
        type="text"
        placeholder={`Find Gifs (min. ${inputMinLength} chars)`}
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
