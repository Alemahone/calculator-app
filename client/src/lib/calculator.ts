/**
 * 計算機核心邏輯
 * 處理所有計算運算，確保精確性和邊界情況處理
 */

export type OperatorType = "+" | "-" | "*" | "/" | null;

export interface CalculatorState {
  display: string;
  previousValue: number | null;
  operator: OperatorType;
  waitingForNewValue: boolean;
}

/**
 * 初始化計算機狀態
 */
export function initializeCalculator(): CalculatorState {
  return {
    display: "0",
    previousValue: null,
    operator: null,
    waitingForNewValue: false,
  };
}

/**
 * 處理數字輸入
 */
export function handleNumberInput(
  state: CalculatorState,
  digit: string
): CalculatorState {
  // 如果正在等待新值或顯示為 0，則替換顯示
  if (state.waitingForNewValue || state.display === "0") {
    return {
      ...state,
      display: digit,
      waitingForNewValue: false,
    };
  }

  // 防止多個小數點
  if (digit === "." && state.display.includes(".")) {
    return state;
  }

  // 追加數字到顯示
  return {
    ...state,
    display: state.display + digit,
  };
}

/**
 * 處理運算符輸入
 */
export function handleOperator(
  state: CalculatorState,
  newOperator: OperatorType
): CalculatorState {
  const currentValue = parseFloat(state.display);

  // 如果已有運算符和前一個值，先執行計算
  if (state.operator !== null && state.previousValue !== null) {
    const result = performCalculation(
      state.previousValue,
      currentValue,
      state.operator
    );
    return {
      display: formatResult(result),
      previousValue: result,
      operator: newOperator,
      waitingForNewValue: true,
    };
  }

  return {
    ...state,
    previousValue: currentValue,
    operator: newOperator,
    waitingForNewValue: true,
  };
}

/**
 * 執行計算
 */
export function handleEquals(state: CalculatorState): CalculatorState {
  // 如果沒有運算符或前一個值，直接返回
  if (state.operator === null || state.previousValue === null) {
    return state;
  }

  const currentValue = parseFloat(state.display);
  const result = performCalculation(
    state.previousValue,
    currentValue,
    state.operator
  );

  return {
    display: formatResult(result),
    previousValue: null,
    operator: null,
    waitingForNewValue: true,
  };
}

/**
 * 清除計算機
 */
export function handleClear(): CalculatorState {
  return initializeCalculator();
}

/**
 * 刪除最後一位數字
 */
export function handleBackspace(state: CalculatorState): CalculatorState {
  if (state.display.length === 1) {
    return {
      ...state,
      display: "0",
    };
  }

  return {
    ...state,
    display: state.display.slice(0, -1),
  };
}

/**
 * 切換正負號
 */
export function handleToggleSign(state: CalculatorState): CalculatorState {
  const value = parseFloat(state.display);
  const newValue = value === 0 ? 0 : -value;

  return {
    ...state,
    display: formatResult(newValue),
  };
}

/**
 * 執行實際計算
 */
function performCalculation(
  previousValue: number,
  currentValue: number,
  operator: OperatorType
): number {
  switch (operator) {
    case "+":
      return previousValue + currentValue;
    case "-":
      return previousValue - currentValue;
    case "*":
      return previousValue * currentValue;
    case "/":
      // 處理除以零
      if (currentValue === 0) {
        throw new Error("Cannot divide by zero");
      }
      return previousValue / currentValue;
    default:
      return currentValue;
  }
}

/**
 * 格式化結果，處理浮點精度問題
 */
function formatResult(value: number): string {
  // 處理除以零的情況
  if (!isFinite(value)) {
    return "Error";
  }

  // 限制小數位數以避免浮點精度問題
  // 例如：0.1 + 0.2 = 0.30000000000000004
  const rounded = Math.round(value * 100000000) / 100000000;

  // 如果是整數，返回整數格式
  if (Number.isInteger(rounded)) {
    return rounded.toString();
  }

  // 否則返回浮點數，移除尾部零
  return rounded.toString();
}

/**
 * 驗證是否為有效的數字輸入
 */
export function isValidNumberInput(input: string): boolean {
  return /^[0-9.]$/.test(input);
}

/**
 * 驗證是否為有效的運算符
 */
export function isValidOperator(input: string): boolean {
  return ["+", "-", "*", "/"].includes(input);
}
