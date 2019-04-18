import checkVictory from "./checkVictory";

describe("checkVictory", () => {
  test("we have won", () => {
    const values = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    expect(checkVictory(values)).toBe(true);
  });
  test("we haven't won", () => {
    const values = [[1, 0, 0], [0, 0, 0], [0, 0, 0]];
    expect(checkVictory(values)).toBe(false);
  });
});
