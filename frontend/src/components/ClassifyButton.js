import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const MyButton = () => {
  const [buttonStyle, setButtonStyle] = useState({
    width: 58,
    height: 23,
    left: 653,
    top: 359,
    position: 'absolute',
    background: '#418BF9',
    borderRadius: 8,
    color: 'white',
    border: 'none',
    boxShadow: '0 4px 8px rgba(76, 175, 80, 0.2)',
    transition: 'background 0.3s ease',
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