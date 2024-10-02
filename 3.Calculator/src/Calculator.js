import React, { useState } from 'react';
import './Calculator.css'; // Import the CSS for styling

export default function Calculato() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === 'CE') {
      setInput(input.slice(0, -1));
    } else if (value === '=') {
      try {
        setResult(eval(input));
      } catch (error) {
        setResult('Error');
      }
    } else {
      setInput(input + value);
    }
  };

  const buttonValues = [
    ['C', 'CE', '%', '+'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['00', '0', '.', '=']
  ];

  const buttonClasses = {
    'C': 'special',
    '=': 'equals',
  };

  return (
    <div className='cont'>
      <div className="calculator">
        <div className="display">
          <input type="text" value={input} disabled className="input" />
          <div className="result">{result}</div>
        </div>
        <div className="buttons">
          {buttonValues.flat().map((value, index) => (
            <button
              key={index}
              onClick={() => handleClick(value)}
              className={`button ${buttonClasses[value] || ''}`}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

