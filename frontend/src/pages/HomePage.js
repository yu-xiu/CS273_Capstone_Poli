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
  const [results, setResults] = useState([]);
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

  const handleSubmit = async () => {
    try {
      console.log('postText=', postText);
      const response = await axios.post('http://localhost:5000/generate_results', {
        userInput: postText, // this is the reslut posted to the result based on user text input
      });

      console.log('Response Data:', response.data);
      setResults([response.data.result]);
      setOutputValue(2);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };


  return (
    <div style={{width: `${windowDimensions.width}px`, height: `${windowDimensions.height}px`, position: 'relative', background: '#F2F0F0'}}>
      <div>
        <NavBar/>
      </div>
      <div className="col-container"  style={{overflowY:'auto', minHeight:'100vh'}}>
        <div className="column">
          {/* Content for the first column */}
          <div>
            <div className='title'>Your AI Classifier</div>
            <WordsAnimation />
            <div className='fadein'>
            </div>
            <div >
            {/* taking in a user's input */}
              <UserInputArea value={postText} onChange={handleInputChange}/>
            </div>

            <ClassifyBtn className='classify-button'onClick={handleSubmit}/>
          </div>
        </div>
        <div className="column">
          {/* Content for the second column */}
          <div className='result'>Results</div>
                <div>
                    <UserOutputArea  outputValue={outputValue}/>
                </div>
            
        </div>
      </div>
    </div>
    );
}
export default HomePage;
