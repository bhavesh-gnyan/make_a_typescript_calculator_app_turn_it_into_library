import { Calculator } from "./calculator";

const calculator = new Calculator(); // Create a new instance of the Calculator class.

// Expose methods to perform basic calculations: addition, subtraction, multiplication and division.
export const add = (a: number, b: number): number => { return calculator.add(a, b); };
export const subtract = (a: number, b: number): number => { return calculator.subtract(a, b); };
export const multiply = (a: number, b: number): number => { return calculator.multiply(a, b); };
export const divide = (a: number, b: number): number => { return calculator.divide(a, b); };

// Expose a method to perform complex calculations involving multiple operations in sequence.
export const evaluateExpression = (expressionString: string) => { return evaluator.evaluateExpression(expressionString); } // Replace 'evaluator' with the appropriate class or function that handles expression evaluation.