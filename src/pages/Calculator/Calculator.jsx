import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [currentInput, setCurrentInput] = useState("0");
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [lastOperator, setLastOperator] = useState("");
  const [clearText, setClearText] = useState("CE");

  const clearEntry = () => {
    setCurrentInput("0");
    setNum1(0);
    setNum2(0);
    setClearText("CE");
  };

  const appendNumber = (number) => {
    if (currentInput !== "0") {
      setCurrentInput(currentInput + number.toString());
    } else {
      setCurrentInput(number.toString());
    }
    setClearText("C");
  };

  const appendOperator = (operator) => {
    if (num1 !== 0) {
      setNum2(Number(currentInput));
    } else {
      setNum1(Number(currentInput));
    }
    setLastOperator(operator);
    setCurrentInput("0");
    setClearText("C");
  };

  const calculate = () => {
    const secondNumber = Number(currentInput);
    let result = 0;

    switch (lastOperator) {
      case "+":
        result = num1 + secondNumber;
        break;
      case "-":
        result = num1 - secondNumber;
        break;
      case "*":
        result = num1 * secondNumber;
        break;
      case "/":
        result = num1 / secondNumber;
        break;
      default:
        return;
    }

    setCurrentInput(result.toString());
    setNum1(result);
    setNum2(0);
  };

  const deleteLast = () => {
    setCurrentInput(currentInput.slice(0, -1) || "0");
  };

  return (
    <div className="Calculator-container">
      <div className="calculator">
        <input
          type="text"
          className="display"
          value={currentInput}
          id="display"
          disabled
        />

        <div className="buttons">
          <button className="operator">MC</button>
          <button className="operator">MR</button>
          <button className="operator">M+</button>
          <button className="operator">M-</button>
          <button className="special" id="clearButton" onClick={clearEntry}>
            {clearText}
          </button>

          <button className="number" onClick={() => appendNumber(7)}>7</button>
          <button className="number" onClick={() => appendNumber(8)}>8</button>
          <button className="number" onClick={() => appendNumber(9)}>9</button>
          <button className="operator" onClick={() => appendOperator("/")}>÷</button>
          <button className="operator">√</button>

          <button className="number" onClick={() => appendNumber(4)}>4</button>
          <button className="number" onClick={() => appendNumber(5)}>5</button>
          <button className="number" onClick={() => appendNumber(6)}>6</button>
          <button className="operator" onClick={() => appendOperator("*")}>×</button>
          <button className="operator">%</button>

          <button className="number" onClick={() => appendNumber(1)}>1</button>
          <button className="number" onClick={() => appendNumber(2)}>2</button>
          <button className="number" onClick={() => appendNumber(3)}>3</button>
          <button className="operator-button" onClick={() => appendOperator("-")}>−</button>
          <button className="operator">1/x</button>

          <button className="number" onClick={() => appendNumber(0)}>0</button>
          <button className="operator" onClick={() => appendNumber(".")}>.</button>
          <button className="operator">+/-</button>
          <button className="operator-button" onClick={() => appendOperator("+")}>+</button>
          <button className="operator" onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
