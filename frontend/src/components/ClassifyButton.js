import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const MyButton = () => {
  const [buttonStyle, setButtonStyle] = useState({
    width: 100,
    height: 53,
    left: 430, // Set the distance from the right edge of the viewport
    bottom: 0, // Set the distance from the bottom edge of the viewport
    position: 'relative', // Use fixed positioning
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
    setButtonStyle({
      ...buttonStyle,
      background: '#45a049',
    });
  };

  const handleMouseOut = () => {
    setButtonStyle({
      ...buttonStyle,
      background: '#418BF9',
    });
  };

  return (
    <Button
      style={buttonStyle}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      Classify
    </Button>
  );
};

export default MyButton;