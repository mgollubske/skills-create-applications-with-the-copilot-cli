const { calculate } = require("../calculator");

describe("calculator", () => {
  describe("basic operations from example image", () => {
    test("adds 2 + 3", () => {
      expect(calculate(2, "+", 3)).toBe(5);
    });

    test("subtracts 10 - 4", () => {
      expect(calculate(10, "-", 4)).toBe(6);
    });

    test("multiplies 45 * 2", () => {
      expect(calculate(45, "*", 2)).toBe(90);
    });

    test("divides 20 / 5", () => {
      expect(calculate(20, "/", 5)).toBe(4);
    });
  });

  describe("additional operation coverage", () => {
    test("supports decimal addition", () => {
      expect(calculate(1.5, "+", 2.5)).toBe(4);
    });

    test("supports negative subtraction", () => {
      expect(calculate(-5, "-", 3)).toBe(-8);
    });

    test("supports multiplication by zero", () => {
      expect(calculate(99, "*", 0)).toBe(0);
    });

    test("supports decimal division", () => {
      expect(calculate(7.5, "/", 2.5)).toBe(3);
    });
  });

  describe("edge cases and errors", () => {
    test("throws for division by zero", () => {
      expect(() => calculate(20, "/", 0)).toThrow(
        "Division by zero is not allowed.",
      );
    });

    test("throws for unsupported operator", () => {
      expect(() => calculate(2, "^", 3)).toThrow(
        "Unsupported operator. Use one of +, -, *, /.",
      );
    });

    test("throws when left operand is NaN", () => {
      expect(() => calculate(Number.NaN, "+", 3)).toThrow(
        "Both operands must be valid numbers.",
      );
    });

    test("throws when right operand is NaN", () => {
      expect(() => calculate(3, "+", Number.NaN)).toThrow(
        "Both operands must be valid numbers.",
      );
    });
  });
});
