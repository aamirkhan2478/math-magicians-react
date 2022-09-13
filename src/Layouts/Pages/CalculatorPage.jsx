import React from 'react';
import Calculator from '../Components/Calculator';

const CalculatorPage = () => {
  const centerContent = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '100px',
  };
  return (
    <div style={centerContent}>
      <h1>Let&apos;s do some math!</h1>
      <Calculator />
    </div>
  );
};

export default CalculatorPage;
