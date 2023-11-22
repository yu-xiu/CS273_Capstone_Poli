import React, { useState, useEffect } from 'react';
import './App.css';
import HomePage from './Components/HomePage';
import ResultPage from './Components/ResultPage';

function App() {
  const [message, setMessage] = useState('');

  // useEffect(() => {
  //   fetch('/api')
  //     .then(response => response.json())
  //     .then(data => setMessage(data.message))
  //     .catch(error => console.error('Error:', error));
  // }, []);

  return (
    <div>
      <HomePage />
      <ResultPage />
    </div>
  );
}

export default App;
