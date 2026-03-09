const getVersion = require("./app")

test("version exists", () => {
  expect(getVersion()).toBeTruthy()
})