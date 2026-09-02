import { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [value, setValue] = useState("");

  function handleClick(input) {
    setValue(value + input);
  }

  function calculate() {
    try {
      setValue(eval(value).toString());
    } catch {
      setValue("Error");
    }
  }

  function clear() {
    setValue("");
  }

  function backspace() {
    setValue(value.slice(0, -1));
  }

  return (
    <div className="calculator">

      <input
        type="text"
        value={value}
        readOnly
        placeholder="0"
      />

      <div className="buttons">

        <button onClick={clear}>C</button>
        <button onClick={backspace}>⌫</button>
        <button onClick={() => handleClick("/")}>÷</button>
        <button onClick={() => handleClick("*")}>×</button>

        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("-")}>−</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("+")}>+</button>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={calculate}>=</button>

        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>

      </div>

    </div>
  );
}

export default Calculator;