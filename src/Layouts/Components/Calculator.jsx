import React, { Component } from "react";
import calculate from "../../logic/calculate";
import "../Assets/styles/calculator.css";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  updateCalc = (e) => {
    this.setState((state) => calculate(state, e.target.textContent));
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="container">
        <div className="text-box">
          {total}
          {operation}
          {next}
        </div>
        <div className="grid-container">
          <button className="btn" value="AC" onClick={this.updateCalc}>
            AC
          </button>
          <button className="btn" onClick={this.updateCalc}>
            +/-
          </button>
          <button className="btn" onClick={this.updateCalc}>
            %
          </button>
          <button className="btn btn-orange" onClick={this.updateCalc}>
            +
          </button>
          <button className="btn" onClick={this.updateCalc}>
            7
          </button>
          <button className="btn" onClick={this.updateCalc}>
            8
          </button>
          <button className="btn" onClick={this.updateCalc}>
            9
          </button>
          <button className="btn btn-orange" onClick={this.updateCalc}>
            x
          </button>
          <button className="btn" onClick={this.updateCalc}>
            4
          </button>
          <button className="btn" onClick={this.updateCalc}>
            5
          </button>
          <button className="btn" onClick={this.updateCalc}>
            6
          </button>
          <button className="btn btn-orange" onClick={this.updateCalc}>
            &divide;
          </button>
          <button className="btn" onClick={this.updateCalc}>
            1
          </button>
          <button className="btn" onClick={this.updateCalc}>
            2
          </button>
          <button className="btn" onClick={this.updateCalc}>
            3
          </button>
          <button className="btn btn-orange" onClick={this.updateCalc}>
            -
          </button>
          <button className="btn btn-block" onClick={this.updateCalc}>
            0
          </button>
          <button className="btn" onClick={this.updateCalc}>
            .
          </button>
          <button className="btn btn-orange" onClick={this.updateCalc}>
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
