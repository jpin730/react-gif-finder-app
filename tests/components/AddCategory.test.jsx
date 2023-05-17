import { fireEvent, render, screen } from "@testing-library/react";

import { AddCategory } from "../../src/components";

describe("AddCategory", () => {
  test("should change input value", () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole("textbox");
    const inputValue = "test-text";
    fireEvent.input(input, { target: { value: inputValue } });

    expect(input.value).toBe(inputValue);
  });

  test("should call onNewCategory if input value is valid", () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    const inputValue = "test-text";
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe("");
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test("should not call onNewCategory if input value is not valid", () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);

    const form = screen.getByRole("form");
    fireEvent.submit(form);

    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
