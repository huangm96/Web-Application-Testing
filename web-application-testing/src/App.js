import React, { useState } from "react";
import Display from "./components/Display";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  const handleScoresChange = type => {
    if (type === "hit") {
      setBalls(0);
      setStrikes(0);
    } else if (type === "strike") {
      if (strikes === 2) {
        setStrikes(0);
      } else {
        setStrikes(strikes + 1);
      }
    } else if (type === "ball") {
      if (balls === 3) {
        setBalls(0);
      } else {
        setBalls(balls + 1);
      }
    } else if (type === "foul") {
      if (strikes === 0) {
        setStrikes(1);
      } else if (strikes === 1) {
        setStrikes(2);
      } else if (setStrikes === 2) {
        setStrikes(2);
      }
    }
  };

  return (
    <div className="App">
      <h1>Football Record App</h1>
      <Display balls={balls} strikes={strikes} />
      <Dashboard handleScoresChange={handleScoresChange} />
    </div>
  );
}

export default App;
