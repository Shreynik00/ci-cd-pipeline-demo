const { getVersion } = require("./index");

test("version exists", () => {
  expect(getVersion()).toBeTruthy();
});