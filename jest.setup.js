import "whatwg-fetch";

import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

jest.mock("./src/constants", () => ({
  ENV: {
    ...process.env,
  },
}));
