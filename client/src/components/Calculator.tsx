import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  CalculatorState,
  OperatorType,
  handleBackspace,
  handleClear,
  handleEquals,
  handleNumberInput,
  handleOperator,
  handleToggleSign,
  initializeCalculator,
} from "@/lib/calculator";
import { Delete, Plus, Minus, X, Divide } from "lucide-react";

export default function Calculator() {
  const [state, setState] = useState<CalculatorState>(initializeCalculator());

  const handleNumber = (digit: string) => {
    setState((prev) => handleNumberInput(prev, digit));
  };

  const handleOp = (operator: OperatorType) => {
    setState((prev) => handleOperator(prev, operator));
  };

  const handleEq = () => {
    setState((prev) => {
      try {
        return handleEquals(prev);
      } catch (error) {
        return {
          ...prev,
          display: "Error",
        };
      }
    });
  };

  const handleAC = () => {
    setState(handleClear());
  };

  const handleDel = () => {
    setState((prev) => handleBackspace(prev));
  };

  const handlePlusMinus = () => {
    setState((prev) => handleToggleSign(prev));
  };

  return (
    <div className="w-full max-w-sm mx-auto p-6 bg-white rounded-2xl shadow-lg">
      {/* Display */}
      <div className="mb-6 p-4 bg-gray-100 rounded-lg">
        <div className="text-right text-4xl font-bold text-gray-900 break-words overflow-hidden">
          {state.display}
        </div>
      </div>

      {/* Buttons Grid */}
      <div className="grid grid-cols-4 gap-3">
        {/* Row 1: AC, Delete, +/-, / */}
        <Button
          onClick={handleAC}
          variant="outline"
          className="col-span-2 bg-red-100 hover:bg-red-200 text-red-700 border-red-300"
        >
          AC
        </Button>
        <Button
          onClick={handlePlusMinus}
          variant="outline"
          className="bg-gray-200 hover:bg-gray-300"
        >
          +/-
        </Button>
        <Button
          onClick={() => handleOp("/")}
          variant="outline"
          className="bg-blue-100 hover:bg-blue-200 text-blue-700 border-blue-300"
        >
          <Divide className="w-5 h-5" />
        </Button>

        {/* Row 2: 7, 8, 9, * */}
        <Button
          onClick={() => handleNumber("7")}
          variant="outline"
          className="text-lg font-semibold"
        >
          7
        </Button>
        <Button
          onClick={() => handleNumber("8")}
          variant="outline"
          className="text-lg font-semibold"
        >
          8
        </Button>
        <Button
          onClick={() => handleNumber("9")}
          variant="outline"
          className="text-lg font-semibold"
        >
          9
        </Button>
        <Button
          onClick={() => handleOp("*")}
          variant="outline"
          className="bg-blue-100 hover:bg-blue-200 text-blue-700 border-blue-300"
        >
          <X className="w-5 h-5" />
        </Button>

        {/* Row 3: 4, 5, 6, - */}
        <Button
          onClick={() => handleNumber("4")}
          variant="outline"
          className="text-lg font-semibold"
        >
          4
        </Button>
        <Button
          onClick={() => handleNumber("5")}
          variant="outline"
          className="text-lg font-semibold"
        >
          5
        </Button>
        <Button
          onClick={() => handleNumber("6")}
          variant="outline"
          className="text-lg font-semibold"
        >
          6
        </Button>
        <Button
          onClick={() => handleOp("-")}
          variant="outline"
          className="bg-blue-100 hover:bg-blue-200 text-blue-700 border-blue-300"
        >
          <Minus className="w-5 h-5" />
        </Button>

        {/* Row 4: 1, 2, 3, + */}
        <Button
          onClick={() => handleNumber("1")}
          variant="outline"
          className="text-lg font-semibold"
        >
          1
        </Button>
        <Button
          onClick={() => handleNumber("2")}
          variant="outline"
          className="text-lg font-semibold"
        >
          2
        </Button>
        <Button
          onClick={() => handleNumber("3")}
          variant="outline"
          className="text-lg font-semibold"
        >
          3
        </Button>
        <Button
          onClick={() => handleOp("+")}
          variant="outline"
          className="bg-blue-100 hover:bg-blue-200 text-blue-700 border-blue-300"
        >
          <Plus className="w-5 h-5" />
        </Button>

        {/* Row 5: 0, ., Delete, = */}
        <Button
          onClick={() => handleNumber("0")}
          variant="outline"
          className="col-span-2 text-lg font-semibold"
        >
          0
        </Button>
        <Button
          onClick={() => handleNumber(".")}
          variant="outline"
          className="text-lg font-semibold"
        >
          .
        </Button>
        <Button
          onClick={handleDel}
          variant="outline"
          className="bg-orange-100 hover:bg-orange-200 text-orange-700 border-orange-300"
        >
          <Delete className="w-5 h-5" />
        </Button>

        {/* Row 6: = (full width) */}
        <Button
          onClick={handleEq}
          className="col-span-4 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold py-6"
        >
          =
        </Button>
      </div>
    </div>
  );
}
