import React, { Component } from "react";
import "../Assets/calculator.css";
class Calculator extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <input type="text" value={0} className='text-box'/>
        <div className="grid-container">
          <button className="btn">AC</button>
          <button className="btn">+/-</button>
          <button className="btn">%</button>
          <button className="btn btn-orange">+</button>
          <button className="btn">7</button>
          <button className="btn">8</button>
          <button className="btn">9</button>
          <button className="btn btn-orange">x</button>
          <button className="btn">4</button>
          <button className="btn">5</button>
          <button className="btn">6</button>
          <button className="btn btn-orange">&divide;</button>
          <button className="btn">1</button>
          <button className="btn">2</button>
          <button className="btn">3</button>
          <button className="btn btn-orange">-</button>
          <button className="btn btn-block">0</button>
          <button className="btn">.</button>
          <button className="btn btn-orange">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
