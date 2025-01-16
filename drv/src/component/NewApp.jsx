import  { useState } from 'react';

export default function Exercise() {
  const [num1, setNum1]= useState('');
  const [num2, setNum2] = useState('');
  const [results, setResults] = useState({});

  const calculateResults = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (!isNaN(n1) && !isNaN(n2)) {
      const res = {
        add: n1 + n2,
        subtract: n1 - n2,
        multiply: n1 * n2,
        divide: n2 !== 0 ? n1 / n2 : 'Cannot divide by zero',
      };
      setResults(res);
    } else {
      setResults({ error: 'Please enter valid numbers' });
    }
  };

  return (
    <div>
      <h1>Calculator</h1>
      <input
        type="text"
        placeholder="Number 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Number 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <button onClick={calculateResults}>Calculate</button>
      {results.error && <h2>{results.error}</h2>}
      {results.add !== undefined && (
        <div>
          <h2>Add +: {results.add}</h2>
          <h2>Subtract -: {results.subtract}</h2>
          <h2>Multiply *: {results.multiply}</h2>
          <h2>Divide /: {results.divide}</h2>
        </div>
      )}
    </div>
  );
}
