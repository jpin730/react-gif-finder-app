import { render, screen } from "@testing-library/react";

import { GifItem } from "../../src/components";

describe("GifItem", () => {
  const title = "mocked-title";
  const url = "http://mocked-url/";

  test("should match snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);

    expect(container).toMatchSnapshot();
  });

  test("should set correct url and alt", () => {
    render(<GifItem title={title} url={url} />);

    const { src, alt } = screen.getByRole("img");

    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("should show title as a paragraph", () => {
    render(<GifItem title={title} url={url} />);

    const { innerHTML } = screen.getByTestId("p-title");

    expect(innerHTML).toContain(title);
  });
});
