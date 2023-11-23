import React, {useState} from 'react';
import '../styles/result.css';
function OutputArea({outputValue}) {
    return (
      <div className="container">
          <div className="result-box">
          <h2>BERT Model</h2>
          <div className="result-content">
            <p>Result: {outputValue}</p>
          </div>
          </div>

          <div className="result-box">
          <h2>LSTM Model</h2>
          <div className="result-content">
            <p>Result: {outputValue}</p>
          </div>
          </div>

          <div className="result-box">
          <h2>TF-IDF Model</h2>
          <div className="result-content">
            <p>Result: {outputValue}</p>
          </div>
          </div>

          <div className="result-box">
          <h2>GPT2 Model</h2>
          <div className="result-content">
            <p>Result: {outputValue}</p>
          </div>
        </div>
      </div>
  );
};

export default OutputArea;