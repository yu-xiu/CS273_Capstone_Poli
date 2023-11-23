import React, { useState, useEffect } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import ResultPage from './pages/ResultPage';
// import { BrowserRouter, Router, Switch, Route, Routes } from "react-router-dom";

function App() {
  const [message, setMessage] = useState('');

  // useEffect(() => {
  //   fetch('/localhost:5000/generate_results')
  //     .then(response => response.json())
  //     .then(data => setMessage(data.message))
  //     .catch(error => console.error('Error:', error));
  // }, []);

  /**const cors = require('cors');
    const corsOptions ={
        origin:'http://localhost:3000', 
        credentials:true,            //access-control-allow-credentials:true
        optionSuccessStatus:200
    }
    app.use(cors(corsOptions));*/
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