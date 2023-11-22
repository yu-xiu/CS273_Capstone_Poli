import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import ClassifyBtn from '../components/ClassifyButton';

const HomePage = () => {
  return (
    <div>
        <div style={{width: '100%', height: '100%', position: 'relative'}}>
        <div style={{width: 848, height: 464, left: 0, top: 0, position: 'absolute', background: '#F2F0F0'}} />
        <div style={{width: 846, height: 45, left: 2, top: 0, position: 'absolute', background: '#E6E6E6'}} />
        <div style={{left: 270, top: 115, position: 'absolute', color: 'black', fontSize: 35, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Your AI Classifier</div>
        <div style={{width: 295, height: 53, left: 307, top: 179, position: 'absolute', color: '#646262', fontSize: 15, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>How can we help you today?</div>
        <div style={{width: 647, height: 170, left: 101, top: 228, position: 'absolute', background: '#FBF5F5', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 29, border: '1px #EAE7E7 solid'}} />
        <></>
        {/* <div style={{width: 48, height: 12, left: 662, top: 363, position: 'absolute', color: 'white', fontSize: 10, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>classify</div> */}
        <ClassifyBtn />
        {/* taking in a user's input */}
        <Form style={{ width: 523, height: 85, left: 131, top: 262, position: 'absolute' }}>
          <Form.Control
            type="text"
            placeholder="Type your political post here"
            style={{
              color: '#969494',
              fontSize: 25,
              fontFamily: 'Inter',
              fontWeight: '700',
              wordWrap: 'break-word',
            }}
          />
        </Form>  

        <div style={{width: 10, height: 15, left: 76, top: 16, position: 'absolute', color: 'black', fontSize: 22, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>I</div>
        <div style={{left: 16, top: 9, position: 'absolute', color: 'black', fontSize: 30, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>P</div>
        <div style={{left: 57, top: 9, position: 'absolute', color: 'black', fontSize: 30, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>L</div>
        <div style={{width: 7, height: 7, left: 75, top: 13, position: 'absolute', background: '#418BF9', borderRadius: 9999}} />
        <div style={{width: 16, height: 15, left: 37, top: 23, position: 'absolute', background: '#418BF9', borderRadius: 9999}} />
        </div>
    </div>
  );
}

export default HomePage;