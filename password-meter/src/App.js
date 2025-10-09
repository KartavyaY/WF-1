import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Password from './components/Password';
import ProgressBar from './components/ProgressBar';
import StrengthCriteria from './components/StrengthCriteria';

// Import the external stylesheet
import './index.css';

// Simple strength calculator that returns a score 0-100 and booleans for criteria
function calculateStrength(pw) {
  const lengthOk = pw.length >= 8;
  const upperOk = /[A-Z]/.test(pw);
  const numberOk = /[0-9]/.test(pw);
  const specialOk = /[^A-Za-z0-9]/.test(pw);

  let score = 0;
  if (lengthOk) score += 30;
  if (upperOk) score += 20;
  if (numberOk) score += 25;
  if (specialOk) score += 25;

  // cap to 100
  score = Math.min(100, score);

  let label = 'Very Weak';
  let color = '#cd5c5c';
  if (score >= 80) {
    label = 'Strong';
    color = '#2ecc71';
  } else if (score >= 50) {
    label = 'Medium';
    color = '#f1c40f';
  } else if (score > 0) {
    label = 'Weak';
    color = '#e67e22';
  }

  return { score, label, color, lengthOk, upperOk, numberOk, specialOk };
}

function App() {
  const [password, setPassword] = useState('');

  const strength = useMemo(() => calculateStrength(password), [password]);

  return (
    // The outermost div with a class for external styling
    <div className="app-container">
      <Header />
      <Password value={password} onChange={(e) => setPassword(e.target.value)} />
      <ProgressBar value={strength.score} label={strength.label} color={strength.color} />
      <StrengthCriteria
        lengthOk={strength.lengthOk}
        upperOk={strength.upperOk}
        numberOk={strength.numberOk}
        specialOk={strength.specialOk}
      />
    </div>
  );
}

export default App;