import React, { useState } from "react";
import calculate from "../../logic/calculate";
import "../Assets/styles/calculator.css";

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });
  const { total, next, operation } = state;

  const updateCalc = (e) => {
    setState((state) => calculate(state, e.target.textContent));
  };

  return (
    <div className="container">
      <div className="text-box">
        {total}
        {operation}
        {next}
      </div>
      <div className="grid-container">
        <button className="btn" value="AC" onClick={updateCalc}>
          AC
        </button>
        <button className="btn" onClick={updateCalc}>
          +/-
        </button>
        <button className="btn" onClick={updateCalc}>
          %
        </button>
        <button className="btn btn-orange" onClick={updateCalc}>
          +
        </button>
        <button className="btn" onClick={updateCalc}>
          7
        </button>
        <button className="btn" onClick={updateCalc}>
          8
        </button>
        <button className="btn" onClick={updateCalc}>
          9
        </button>
        <button className="btn btn-orange" onClick={updateCalc}>
          x
        </button>
        <button className="btn" onClick={updateCalc}>
          4
        </button>
        <button className="btn" onClick={updateCalc}>
          5
        </button>
        <button className="btn" onClick={updateCalc}>
          6
        </button>
        <button className="btn btn-orange" onClick={updateCalc}>
          &divide;
        </button>
        <button className="btn" onClick={updateCalc}>
          1
        </button>
        <button className="btn" onClick={updateCalc}>
          2
        </button>
        <button className="btn" onClick={updateCalc}>
          3
        </button>
        <button className="btn btn-orange" onClick={updateCalc}>
          -
        </button>
        <button className="btn btn-block" onClick={updateCalc}>
          0
        </button>
        <button className="btn" onClick={updateCalc}>
          .
        </button>
        <button className="btn btn-orange" onClick={updateCalc}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
