#!/usr/bin/env node

/**
 * Node.js CLI calculator
 *
 * Supported operations:
 * - addition (+)
 * - subtraction (-)
 * - multiplication (*)
 * - division (/)
 */

function calculate(left, operator, right) {
  if (Number.isNaN(left) || Number.isNaN(right)) {
    throw new Error("Both operands must be valid numbers.");
  }

  switch (operator) {
    case "+":
      return left + right;
    case "-":
      return left - right;
    case "*":
      return left * right;
    case "/":
      if (right === 0) {
        throw new Error("Division by zero is not allowed.");
      }
      return left / right;
    default:
      throw new Error("Unsupported operator. Use one of +, -, *, /.");
  }
}

function runCli() {
  const args = process.argv.slice(2);

  if (args.length !== 3) {
    console.error("Usage: node src/calculator.js <number> <operator> <number>");
    console.error("Example: node src/calculator.js 5 + 3");
    process.exit(1);
  }

  const [leftInput, operator, rightInput] = args;
  const left = Number(leftInput);
  const right = Number(rightInput);

  try {
    const result = calculate(left, operator, right);
    console.log(result);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

if (require.main === module) {
  runCli();
}

module.exports = { calculate };
