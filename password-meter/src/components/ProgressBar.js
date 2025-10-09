import React from 'react';

const ProgressBar = ({ value = 0, label = 'Very Weak', color = '#cd5c5c' }) => {
  // Inline style object for the strength text
  const strengthTextStyle = {
    color,
    fontWeight: 'bold',
    marginLeft: '10px'
  };

  const progressStyle = {
    width: '100%',
    height: '16px'
  };

  return (
    <div>
      <progress value={value} max="100" style={progressStyle} />
      <span style={strengthTextStyle}>{label}</span>
    </div>
  );
};

export default ProgressBar;