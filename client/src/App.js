/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import logo from './logo.svg';
import './App.css';

function App() {
  const [apiResponse, setApiResponse] = useState('No Response Yet ');

  const callApi = () => {
    console.log('about to fetch');
    fetch('http://127.0.0.1:9000/testAPI')
      .then((res) => res.text())
      .then((res) => setApiResponse(res));
  };
  useEffect(() => {
    callApi();
  }, []);

  console.log(' about to return');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        QuickMath
      </header>
      <p>
        {apiResponse}
      </p>
      <div style={{backgroundColor: "#00F", width:"60vw"}}>
        <div>
          <TextField variant="outlined" label="Working" multiline />
        </div>
        <div>
          <TextField variant="outlined" label="Answer" />
        </div>
      </div>
    </div>
  );
}

export default App;
