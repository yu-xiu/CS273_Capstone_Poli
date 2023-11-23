import React, { useState, useEffect } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import ResultPage from './pages/ResultPage';
// import { BrowserRouter, Router, Switch, Route, Routes } from "react-router-dom";

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    //fetch('/generate_results')
      //.then(response => response.json())
      //.then(data => setMessage(data.message))
      //.catch(error => console.error('Error:', error));
  }, []);

  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<HomePage />} />
    //     <Route path="/result" element={<ResultPage />} />
    //   </Routes>
    // </BrowserRouter>
    <div>
      <HomePage />
      {/* <ResultPage /> */}
    </div>
  );
}

export default App;
