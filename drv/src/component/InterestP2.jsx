import React from 'react';

const SecondPage = ({ nextStep, prevStep, handleChange, values }) => {
  const handleInputChange = (e) => {
    handleChange('interestRate', e.target.value);
  };

  return (
    <div>
      <h2>Enter Rate of Interest</h2>
      <input
        type="number"
        placeholder="Rate of Interest"
        value={values.interestRate || ''}
        onChange={handleInputChange}
      />
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default SecondPage;
