import React, { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import ClassifyBtn from '../components/ClassifyButton';
import WordsAnimation from '../components/FadeInWords';
import UserInputArea from '../components/Input';
import NavBar from '../components/NavBar'
import '../styles/fadein.css';
import '../styles/home.css';
import '../styles/columns.css';
import '../styles/result.css';
import axios from "axios";


 

const HomePage = () => {
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
    setPostText(event.target.value);
  };

  const handleClassifyClick = () => {
    // Handle classification logic here (you can use 'postText' state)
    console.log('Classifying:', postText);
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
            
            <div className='fadein'>
              <WordsAnimation />
            </div>
          
            <div className='title'>Your AI Classifier</div>

            {/* taking in a user's input */}
            <div >
              <UserInputArea />
            </div>

            <ClassifyBtn className='classify-button'/>
          </div>
        </div>
        <div className="column">
          {/* Content for the second column */}
          <div className='result'>Results</div>
        </div>
      </div>
    </div>
    );
}
export default HomePage;