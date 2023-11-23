import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const MyButton = ({ onClick }) => {
  const [buttonStyle, setButtonStyle] = useState({
    width: 100,
    height: 53,
    left: 400, 
    bottom: 0, 
    position: 'relative',
    background: '#418BF9',
    borderRadius: 15,
    color: 'white',
    border: 'none',
    boxShadow: '0 4px 20px rgba(76, 175, 80, 0.2)',
    transition: 'background 0.3s ease',
    fontSize: 22,
    fontWeight: 'bold',
    
  });

  const handleMouseOver = () => {
    setButtonStyle((prevStyle) => ({
      ...prevStyle,
      background: '#45a049',
    }));
  };

  const handleMouseOut = () => {
    setButtonStyle((prevStyle) => ({
      ...prevStyle,
      background: '#418BF9',
    }));
  };

  return (
    <Button
      style={buttonStyle}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={onClick}
    >
      Classify
    </Button>
  );
};

export default MyButton;