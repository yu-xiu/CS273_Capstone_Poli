import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Input = ({ value, onChange }) => {
  const handleInputChange = (event) => {
    // Call the provided onChange prop to update the parent component's state
    onChange(event.target.value);
  };

  return (
    <InputGroup size="lg">
      <Form.Group>
        <Form.Control
          as="textarea"
          type="text"
          value={value}
          onChange={handleInputChange}
          rows={2}
          cols={40}
          placeholder='Type your political post here'
          style={{
            color: '#969494',
            fontSize: 22,
            fontFamily: 'Inter',
            fontWeight: '700',
            wordWrap: 'break-word',
            marginTop: 100,
            marginLeft: 10,
            borderRadius: 20,
            backgroundColor: 'white',
            border: 'none',
            boxShadow: '0 0 10px #969494',
            paddingTop: '20px',
            paddingLeft: '20px'
          }}
          id="myTextArea" 
          name="myTextArea" 
        />
      </Form.Group>
    </InputGroup>
  );
};

export default Input;
