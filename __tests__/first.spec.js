const { it, expect } = require("@jest/globals");
const { Rectangle } = require("../Rectangle");

describe("Rectangle", () => {
  const rectangle = new Rectangle(10, 20);

  it("first test", () => {
    expect(rectangle.width).toEqual(20);
  });
});
