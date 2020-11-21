/* eslint-disable */
import React, { useState, useEffect } from "react";
import { TextField, Button } from "@material-ui/core";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [apiResponse, setApiResponse] = useState("No Response Yet ");
  const [working, setWorking] = useState("");
  const [answer, setAnswer] = useState("")

  const callApi = () => {
    fetch("http://127.0.0.1:9000/testAPI")
      .then((res) => res.text())
      .then((res) => setApiResponse(res));
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        QuickMath
      </header>
      <p>{apiResponse}</p>
      <div className="App-body">
        <div>
          <TextField
            classname=""
            variant="outlined"
            label="Working"
            multiline
            rows={10}
            fullWidth={true}
            onChange={(event) => { setWorking(event.target.value) }}
            value={working}
          />
        </div>
        <div>
          <TextField 
            variant="outlined" 
            label="Answer" 
            fullWidth={true} 
            onChange={(event) => { setAnswer(event.target.value) }}
            value={answer}
          />
        </div>
        <Button variant="outlined" color="primary" onClick={() => {
          
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({working, answer})
          };
          fetch('http://localhost:9000/testpost', requestOptions)
          .then(response => response.text())
          .then(text => console.log(text)) 
          // alert(working)
          
          }}>
          Submit
        </Button>
      </div>
    </div>
  );
}

export default App;
