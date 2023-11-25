import React, {useState} from 'react';
import '../styles/result.css';

function OutputArea({outputValue}) {
    console.log("OUTPUT!!!!");
    return (
        <div className="container">
            <div className="result-box">
            <h2>BERT BIAS</h2>
            <div className="result-content">
                {outputValue.length > 0 && (
                <ul>
                    <li>{outputValue[0][0]}</li>
                </ul>
                )}
            </div>
            </div>

            <div className="result-box">
                <h2>BERT MESSAGE</h2>
                <div className="result-content">
                {outputValue.length > 0 && (
                    <ul>
                        <li>{outputValue[0][1]}</li>
                    </ul>
                )}
                </div>
            </div>
        </div>
    );
};
export default OutputArea;