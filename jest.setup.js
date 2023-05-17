import "whatwg-fetch";

jest.mock("./src/constants", () => ({
  ENV: {
    VITE_GIPHY_API_KEY: "MockedKey",
  },
}));
