import React from 'react';

const QuotePage = () => {
  const centerHeading = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '230px',
  };
  return (
    <div style={centerHeading}>
      <h1>
        Mathematics is not about numbers, equations, computations or algorithms:
        it is about understanding. - William Paul Thurston
      </h1>
    </div>
  );
};

export default QuotePage;
