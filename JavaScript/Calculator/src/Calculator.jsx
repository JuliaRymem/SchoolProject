import React, { useState } from 'react';
import './App.css'; // Importera CSS för styling

// Miniräknarkomponenten
const Calculator = () => {
  // State för att hålla aktuellt värde
  const [value, setValue] = useState(0);

  // Funktioner för att hantera olika operationer
  const handleAdd = (amount) => setValue(value + amount); // Lägg till eller subtrahera ett tal
  const handleMultiply = (factor) => setValue(value * factor); // Multiplicera eller dividera med ett värde
  const handleReset = () => setValue(0); // Återställ värdet till 0

  return (
    <div className="calculator-container">
      <h1>Calculator</h1>
      <div className="calculator-value">Värde: {value}</div>
      <div className="button-container">
        <button className="calc-button" onClick={() => handleAdd(1)}>+1</button>
        <button className="calc-button" onClick={() => handleAdd(-1)}>-1</button>
        <button className="calc-button" onClick={() => handleAdd(5)}>+5</button>
        <button className="calc-button" onClick={() => handleAdd(-5)}>-5</button>
        <button className="calc-button" onClick={() => handleMultiply(2)}>*2</button>
        <button className="calc-button" onClick={() => handleMultiply(0.5)}>/2</button>
        <button className="calc-button reset-button" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Calculator;
 