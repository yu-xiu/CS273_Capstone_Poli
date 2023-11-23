import React, { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import ClassifyBtn from '../components/ClassifyButton';
import WordsAnimation from '../components/FadeInWords';
import UserInputArea from '../components/Input';
import UserOutputArea from '../components/Output';
import NavBar from '../components/NavBar'
import '../styles/fadein.css';
import '../styles/home.css';
import '../styles/columns.css';
import '../styles/result.css';
import axios from "axios";


 

const HomePage = () => {
  const [outputValue, setOutputValue] = useState('');
  const [postText, setPostText] = useState('');
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });


  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Attach the event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleInputChange = (event) => {
      console.log('Input change', postText);
    setPostText(event.target.value);
  };

  const handleClassifyClick = () => { 
      console.log('Form submitted with postText:', postText);
      setOutputValue(postText);
  };

  return (
    <div style={{width: `${windowDimensions.width}px`, height: `${windowDimensions.height}px`, position: 'relative', background: '#F2F0F0'}}>
      <div>
        <NavBar/>
      </div>
      <div className="col-container">
        <div className="column">
          {/* Content for the first column */}
          <div>
            <div className='title'>Your AI Classifier</div>
            <WordsAnimation />
            <div className='fadein'>
            </div>
            <div >
            {/* taking in a user's input */}
              <UserInputArea onChange={handleInputChange}/>
            </div>

            <ClassifyBtn onClick={handleClassifyClick}/>
          </div>
        </div>
        <div className="column">
          {/* Content for the second column */}
          <div className='result'>Results</div>
          <div >
              <UserOutputArea outputValue={outputValue}/>
            </div>
        </div>
      </div>
    </div>
    );
}
export default HomePage;
