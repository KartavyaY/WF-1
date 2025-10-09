import React from 'react';

const StrengthCriteria = ({ lengthOk, upperOk, numberOk, specialOk }) => {
  const criteriaStyle = {
    fontSize: '15px',
    color: '#555',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  };

  const item = (ok, text) => (
    <p style={{ margin: 0 }}>
      <span style={criteriaStyle}>{ok ? '✅' : '❌'} {text}</span>
    </p>
  );

  return (
    <div>
      {item(lengthOk, 'Minimum 8 characters long')}
      {item(upperOk, 'At least 1 capital letter')}
      {item(numberOk, 'At least 1 number')}
      {item(specialOk, 'At least 1 special character')}
    </div>
  );
};

export default StrengthCriteria;