import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import ClassifyBtn from '../components/ClassifyButton';

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
    <div>
        <div style={{width: '100%', height: '100%', position: 'relative'}}>
        <div style={{width: `${windowDimensions.width}px`, height: `${windowDimensions.height}px`, left: 0, top: 0, position: 'absolute', background: '#F2F0F0'}} />
        <div style={{width: `${windowDimensions.width}px`, height: 80, left: 2, top: 0, position: 'absolute', background: '#E6E6E6'}} />
        <div style={{left: '50%', transform: 'translateX(-50%)', top: 115, position: 'absolute', color: 'black', fontSize: 35, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Your AI Classifier</div>
        <div style={{width: 295, height: 53, left: '50%', transform: 'translateX(-40%)', top: 179, position: 'absolute', color: '#646262', fontSize: 15, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>How can we help you today?</div>
        <div style={{width: 647, height: 170, left: '50%', transform: 'translateX(-50%)', top: 228, position: 'absolute', background: '#FBF5F5', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 29, border: '1px #EAE7E7 solid'}} />
        <></>
        {/* <div style={{width: 48, height: 12, left: 662, top: 363, position: 'absolute', color: 'white', fontSize: 10, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>classify</div> */}
        <ClassifyBtn 
            onClick={handleClassifyClick}
             style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '50%', marginTop: '20px' }}/>
        {/* taking in a user's input */}
        <Form style={{ width: '50%', height: '10%', left: '50%', transform: 'translateX(-20%)', top: 'calc(80vh - 400px)', position: 'absolute' }}>
          <Form.Control
            type="text"
            placeholder="Type your political post here"
            style={{
               color: '#969494',
              fontSize: 25,
              fontFamily: 'Inter',
              fontWeight: '700',
              wordWrap: 'break-word',
              borderRadius: '15px',  // Set border-radius for rounded corners
              background: '#FBF5F5', // Set background color
              border: 'none', 
              outline: 'none',
            }}
          />
        </Form>  

        <div style={{width: 20, height: 20, left: 100, top: 17, position: 'absolute', color: 'black', fontSize: 42, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>I</div>
        <div style={{left: 16, top: 9, position: 'absolute', color: 'black', fontSize: 50, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>P</div>
        <div style={{left: 70, top: 9, position: 'absolute', color: 'black', fontSize: 50, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>L</div>
        <div style={{width: 13, height: 13, left: 100, top: 13, position: 'absolute', background: '#418BF9', borderRadius: 9999}} />
        <div style={{width: 20, height: 20, left: 45, top: 39, position: 'absolute', background: '#418BF9', borderRadius: 9999}} /> 
        </div>
    </div>
  );
}

export default HomePage;
