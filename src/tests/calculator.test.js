const { calculate, modulo, power, squareRoot } = require("../calculator");

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

    test("supports modulo", () => {
      expect(calculate(10, "%", 3)).toBe(1);
    });

    test("supports exponentiation with ^", () => {
      expect(calculate(2, "^", 3)).toBe(8);
    });

    test("supports exponentiation with **", () => {
      expect(calculate(2, "**", 4)).toBe(16);
    });
  });

  describe("extended operations from example image", () => {
    test("modulo with 5 % 2", () => {
      expect(calculate(5, "%", 2)).toBe(1);
    });

    test("power with 2 ^ 3", () => {
      expect(calculate(2, "^", 3)).toBe(8);
    });

    test("square root with √16", () => {
      expect(squareRoot(16)).toBe(4);
    });
  });

  describe("edge cases and errors", () => {
    test("throws for division by zero", () => {
      expect(() => calculate(20, "/", 0)).toThrow(
        "Division by zero is not allowed.",
      );
    });

    test("throws for unsupported operator", () => {
      expect(() => calculate(2, "x", 3)).toThrow(
        "Unsupported operator. Use one of +, -, *, /, %, ^, **.",
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

  describe("direct helper function coverage", () => {
    test("modulo(a, b) returns remainder", () => {
      expect(modulo(17, 5)).toBe(2);
    });

    test("modulo throws on zero divisor", () => {
      expect(() => modulo(7, 0)).toThrow("Modulo by zero is not allowed.");
    });

    test("power(base, exponent) raises base to exponent", () => {
      expect(power(3, 4)).toBe(81);
    });

    test("squareRoot(n) returns square root for non-negative numbers", () => {
      expect(squareRoot(49)).toBe(7);
    });

    test("squareRoot throws for negative numbers", () => {
      expect(() => squareRoot(-9)).toThrow(
        "Square root of a negative number is not allowed.",
      );
    });
  });
});
