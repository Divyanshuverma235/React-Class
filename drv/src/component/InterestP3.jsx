import React from 'react';

const ThirdP = ({ prevStep, handleChange, values }) => {
  const handleInputChange = (e) => {
    handleChange('totalAmount', e.target.value);
  };

  return (
    <div>
      <h2>Enter Amount Including Interest</h2>
      <input
        type="number"
        placeholder="Total Amount"
        value={values.totalAmount || ''}
        onChange={handleInputChange}
      />
      <button onClick={prevStep}>Back</button>
      <button type="submit">Submit</button>
    </div>
  );
};

export default ThirdP;
