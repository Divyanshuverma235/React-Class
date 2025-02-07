import React from 'react';

const FirstP = ({ nextStep, handleChange, values }) => {
  const handleInputChange = (e) => {
    handleChange('principal', e.target.value);
  };

  return (
    <div>
      <h2>Enter Principal Amount</h2>
      <input
        type="number"
        placeholder="Principal"
        value={values.principal || ''}
        onChange={handleInputChange}
      />
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default FirstP;
