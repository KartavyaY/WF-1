import React from 'react';

const Password = ({ value, onChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Type your password here"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Password;