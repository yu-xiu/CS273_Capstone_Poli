import React, {useState} from 'react';
import '../styles/result.css';
function OutputArea({outputValue}) {
    return (
      <div className="container">
          <div className="result-box">
          <h2>Result Box</h2>
          <div className="result-content">
            <p>Result: {outputValue}</p>
          </div>
          </div>

          <div className="result-box">
          <h2>Result Box</h2>
          <div className="result-content">
            <p>Result: {outputValue}</p>
          </div>
          </div>

          <div className="result-box">
          <h2>Result Box</h2>
          <div className="result-content">
            <p>Result: {outputValue}</p>
          </div>
          </div>

          <div className="result-box">
          <h2>Result Box</h2>
          <div className="result-content">
            <p>Result: {outputValue}</p>
          </div>
        </div>
      </div>
  );
};

export default OutputArea;