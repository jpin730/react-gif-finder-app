import { render, screen } from "@testing-library/react";

import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks";

jest.mock("../../src/hooks");

describe("GifGrid", () => {
  const category = "mocked-category";

  test("should show loading on start", () => {
    useFetchGifs.mockReturnValue({ images: [], isLoading: true });
    render(<GifGrid category={category} />);

    expect(screen.getByText("Loading...")).toBeTruthy();
    expect(screen.getByText(category)).toBeTruthy();
  });

  test("should show items when images are loaded with useFetchGifs", () => {
    const gifs = [
      { id: "111", title: "mocked-title-1", url: "http://mocked-url-1" },
      { id: "222", title: "mocked-title-2", url: "http://mocked-url-2" },
    ];
    useFetchGifs.mockReturnValue({ images: [...gifs], isLoading: false });
    render(<GifGrid category={category} />);

    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
