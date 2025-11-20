import { describe, it, expect } from "vitest";
import {
  initializeCalculator,
  handleNumberInput,
  handleOperator,
  handleEquals,
  handleClear,
  handleBackspace,
  handleToggleSign,
  isValidNumberInput,
  isValidOperator,
} from "./calculator";

describe("Calculator Core Logic", () => {
  describe("initializeCalculator", () => {
    it("should initialize calculator with correct default state", () => {
      const state = initializeCalculator();
      expect(state.display).toBe("0");
      expect(state.previousValue).toBeNull();
      expect(state.operator).toBeNull();
      expect(state.waitingForNewValue).toBe(false);
    });
  });

  describe("handleNumberInput", () => {
    it("should replace display when starting new input", () => {
      const state = initializeCalculator();
      const result = handleNumberInput(state, "5");
      expect(result.display).toBe("5");
      expect(result.waitingForNewValue).toBe(false);
    });

    it("should append digit to display", () => {
      const state = { ...initializeCalculator(), display: "5" };
      const result = handleNumberInput(state, "3");
      expect(result.display).toBe("53");
    });

    it("should handle decimal point", () => {
      const state = { ...initializeCalculator(), display: "5" };
      const result = handleNumberInput(state, ".");
      expect(result.display).toBe("5.");
    });

    it("should prevent multiple decimal points", () => {
      const state = { ...initializeCalculator(), display: "5.2" };
      const result = handleNumberInput(state, ".");
      expect(result.display).toBe("5.2");
    });

    it("should replace 0 with new digit", () => {
      const state = initializeCalculator();
      const result = handleNumberInput(state, "7");
      expect(result.display).toBe("7");
    });
  });

  describe("handleOperator", () => {
    it("should set operator and previous value", () => {
      const state = { ...initializeCalculator(), display: "5" };
      const result = handleOperator(state, "+");
      expect(result.previousValue).toBe(5);
      expect(result.operator).toBe("+");
      expect(result.waitingForNewValue).toBe(true);
    });

    it("should perform calculation when operator already exists", () => {
      const state = {
        ...initializeCalculator(),
        display: "8",
        previousValue: 5,
        operator: "+" as const,
        waitingForNewValue: true,
      };
      const result = handleOperator(state, "-");
      expect(result.display).toBe("13");
      expect(result.previousValue).toBe(13);
      expect(result.operator).toBe("-");
    });
  });

  describe("handleEquals", () => {
    it("should add two numbers", () => {
      const state = {
        ...initializeCalculator(),
        display: "8",
        previousValue: 5,
        operator: "+" as const,
      };
      const result = handleEquals(state);
      expect(result.display).toBe("13");
      expect(result.operator).toBeNull();
      expect(result.waitingForNewValue).toBe(true);
    });

    it("should subtract two numbers", () => {
      const state = {
        ...initializeCalculator(),
        display: "3",
        previousValue: 10,
        operator: "-" as const,
      };
      const result = handleEquals(state);
      expect(result.display).toBe("7");
    });

    it("should multiply two numbers", () => {
      const state = {
        ...initializeCalculator(),
        display: "6",
        previousValue: 7,
        operator: "*" as const,
      };
      const result = handleEquals(state);
      expect(result.display).toBe("42");
    });

    it("should divide two numbers", () => {
      const state = {
        ...initializeCalculator(),
        display: "2",
        previousValue: 10,
        operator: "/" as const,
      };
      const result = handleEquals(state);
      expect(result.display).toBe("5");
    });

    it("should handle division by zero", () => {
      const state = {
        ...initializeCalculator(),
        display: "0",
        previousValue: 10,
        operator: "/" as const,
      };
      expect(() => handleEquals(state)).toThrow("Cannot divide by zero");
    });

    it("should return state unchanged when no operator", () => {
      const state = { ...initializeCalculator(), display: "5" };
      const result = handleEquals(state);
      expect(result).toEqual(state);
    });
  });

  describe("handleClear", () => {
    it("should reset calculator to initial state", () => {
      const state = {
        display: "123",
        previousValue: 456,
        operator: "+" as const,
        waitingForNewValue: true,
      };
      const result = handleClear();
      expect(result).toEqual(initializeCalculator());
    });
  });

  describe("handleBackspace", () => {
    it("should remove last digit", () => {
      const state = { ...initializeCalculator(), display: "123" };
      const result = handleBackspace(state);
      expect(result.display).toBe("12");
    });

    it("should set display to 0 when only one digit", () => {
      const state = { ...initializeCalculator(), display: "5" };
      const result = handleBackspace(state);
      expect(result.display).toBe("0");
    });

    it("should handle decimal numbers", () => {
      const state = { ...initializeCalculator(), display: "5.5" };
      const result = handleBackspace(state);
      expect(result.display).toBe("5.");
    });
  });

  describe("handleToggleSign", () => {
    it("should negate positive number", () => {
      const state = { ...initializeCalculator(), display: "5" };
      const result = handleToggleSign(state);
      expect(result.display).toBe("-5");
    });

    it("should negate negative number", () => {
      const state = { ...initializeCalculator(), display: "-5" };
      const result = handleToggleSign(state);
      expect(result.display).toBe("5");
    });

    it("should keep zero as zero", () => {
      const state = { ...initializeCalculator(), display: "0" };
      const result = handleToggleSign(state);
      expect(result.display).toBe("0");
    });

    it("should handle decimal numbers", () => {
      const state = { ...initializeCalculator(), display: "3.5" };
      const result = handleToggleSign(state);
      expect(result.display).toBe("-3.5");
    });
  });

  describe("isValidNumberInput", () => {
    it("should validate numeric digits", () => {
      expect(isValidNumberInput("0")).toBe(true);
      expect(isValidNumberInput("5")).toBe(true);
      expect(isValidNumberInput("9")).toBe(true);
    });

    it("should validate decimal point", () => {
      expect(isValidNumberInput(".")).toBe(true);
    });

    it("should reject invalid inputs", () => {
      expect(isValidNumberInput("a")).toBe(false);
      expect(isValidNumberInput("+")).toBe(false);
      expect(isValidNumberInput(" ")).toBe(false);
    });
  });

  describe("isValidOperator", () => {
    it("should validate all operators", () => {
      expect(isValidOperator("+")).toBe(true);
      expect(isValidOperator("-")).toBe(true);
      expect(isValidOperator("*")).toBe(true);
      expect(isValidOperator("/")).toBe(true);
    });

    it("should reject invalid operators", () => {
      expect(isValidOperator("=")).toBe(false);
      expect(isValidOperator("5")).toBe(false);
      expect(isValidOperator("^")).toBe(false);
    });
  });

  describe("Floating point precision", () => {
    it("should handle 0.1 + 0.2 correctly", () => {
      const state = {
        ...initializeCalculator(),
        display: "0.2",
        previousValue: 0.1,
        operator: "+" as const,
      };
      const result = handleEquals(state);
      expect(parseFloat(result.display)).toBeCloseTo(0.3, 10);
    });

    it("should handle complex decimal operations", () => {
      const state = {
        ...initializeCalculator(),
        display: "0.3",
        previousValue: 0.1,
        operator: "*" as const,
      };
      const result = handleEquals(state);
      expect(parseFloat(result.display)).toBeCloseTo(0.03, 10);
    });
  });

  describe("Edge cases", () => {
    it("should handle very large numbers", () => {
      const state = {
        ...initializeCalculator(),
        display: "999999999",
        previousValue: 999999999,
        operator: "+" as const,
      };
      const result = handleEquals(state);
      expect(result.display).toBe("1999999998");
    });

    it("should handle negative results", () => {
      const state = {
        ...initializeCalculator(),
        display: "10",
        previousValue: 5,
        operator: "-" as const,
      };
      const result = handleEquals(state);
      expect(result.display).toBe("-5");
    });

    it("should handle zero operations", () => {
      const state = {
        ...initializeCalculator(),
        display: "0",
        previousValue: 5,
        operator: "+" as const,
      };
      const result = handleEquals(state);
      expect(result.display).toBe("5");
    });
  });
});
