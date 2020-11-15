import React, { useState, useEffect } from 'react';
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
        <p>
          {apiResponse}
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
