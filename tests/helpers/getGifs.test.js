import { getGifs } from "../../src/helpers";

describe("getGifs", () => {
  test("should return a gifs array", async () => {
    const gifs = await getGifs("test");
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
