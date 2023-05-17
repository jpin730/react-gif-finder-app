import { renderHook, waitFor } from "@testing-library/react";

import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("useFetchGifs", () => {
  test("should return initial state", () => {
    const { result } = renderHook(() => useFetchGifs("test"));
    const { images, isLoading } = result.current;
    expect(images.length).toBe(0);
    expect(isLoading).toBe(true);
  });

  test("should return an images array and isLoading as false ", async () => {
    const { result } = renderHook(() => useFetchGifs("test"));

    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );

    const { images, isLoading } = result.current;
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBe(false);
  });
});
